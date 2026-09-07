(() => {
  "use strict";
  const bank = window.FIN36003_BANK;
  const $ = (s, root=document) => root.querySelector(s);
  const $$ = (s, root=document) => [...root.querySelectorAll(s)];
  const topicById = Object.fromEntries(bank.topics.map(t => [t.id,t]));
  const chapterById = Object.fromEntries(bank.chapters.map(c => [c.id,c]));
  const diffLabel = {e:"Easy",m:"Medium",h:"Hard"};
  const kindLabel = {mc:"Multiple choice",quant:"Quantitative"};
  const state = {topics:new Set(bank.topics.map(t=>t.id)),types:new Set(["mc","quant"]),diffs:new Set(),count:20,session:[],workouts:[],mode:"custom",timer:null,seconds:0,submitted:false};
  const seen = new Set(JSON.parse(localStorage.getItem("finn36003-seen") || "[]"));

  function esc(v){return String(v).replace(/[&<>"']/g,c=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[c]));}
  function countsFor(key, value){return bank.questions.filter(q=>q[key]===value).length;}
  function eligible(){return bank.questions.filter(q=>state.topics.has(q.topic)&&state.types.has(q.kind)&&(!state.diffs.size||state.diffs.has(q.diff)));}
  function shuffle(a){const b=[...a];for(let i=b.length-1;i>0;i--){const j=Math.floor(Math.random()*(i+1));[b[i],b[j]]=[b[j],b[i]];}return b;}

  function renderTopics(){
    const host=$("#topic-list"); host.innerHTML="";
    bank.chapters.forEach((ch,ci)=>{
      const h=document.createElement("div");h.className="chapter-label";h.textContent=ch.label;host.append(h);
      bank.topics.filter(t=>t.chapter===ch.id).forEach((t,ti)=>{
        const row=document.createElement("label");row.className="topic-row";
        row.innerHTML=`<input type="checkbox" value="${t.id}" ${state.topics.has(t.id)?"checked":""}><span class="topic-code">T${ci+1}.${ti+1}</span><span>${esc(t.label)}</span><span class="topic-count">${countsFor("topic",t.id)}</span>`;
        $("input",row).addEventListener("change",e=>{e.target.checked?state.topics.add(t.id):state.topics.delete(t.id);updateSummary();});host.append(row);
      });
    });
  }
  function renderPills(){
    const types=$("#type-options");types.innerHTML="";
    [["mc","Multiple choice"],["quant","Quantitative"]].forEach(([id,label])=>{const b=document.createElement("button");b.className="pill selected";b.innerHTML=`${label}<small>${countsFor("kind",id)}</small>`;b.onclick=()=>{state.types.has(id)?state.types.delete(id):state.types.add(id);b.classList.toggle("selected",state.types.has(id));updateSummary();};types.append(b);});
    const diffs=$("#difficulty-options");diffs.innerHTML="";
    Object.entries(diffLabel).forEach(([id,label])=>{const b=document.createElement("button");b.className="pill";b.innerHTML=`${label}<small>${countsFor("diff",id)}</small>`;b.onclick=()=>{state.diffs.has(id)?state.diffs.delete(id):state.diffs.add(id);b.classList.toggle("selected",state.diffs.has(id));updateSummary();};diffs.append(b);});
  }
  function updateSummary(){
    const pool=eligible();
    $("#summary-topics").textContent=state.topics.size===bank.topics.length?`${state.topics.size} of ${bank.topics.length} selected`:`${state.topics.size} of ${bank.topics.length} selected`;
    $("#summary-difficulty").textContent=state.diffs.size?[...state.diffs].map(d=>diffLabel[d]).join(", "):"All levels";
    $("#summary-types").textContent=state.types.size===2?"All types":[...state.types].map(k=>kindLabel[k]).join(", ")||"None";
    $("#summary-matches").textContent=`${pool.length} ${pool.length===1?"match":"matches"}`;$("#summary-count").textContent=state.count;$("#count-value").textContent=state.count;$("#summary-time").textContent=$("#timed").checked?`${state.count*2} minutes`:"Untimed";$("#availability").textContent=`${pool.length} questions available for this selection.`;
    $$(".quick-counts button").forEach(b=>b.classList.toggle("selected",Number(b.dataset.count)===state.count));
    $("#generate").disabled=!pool.length||!state.types.size||!state.topics.size;
  }
  function setCount(n){state.count=Math.max(1,Math.min(100,n));updateSummary();}
  function chooseQuestions(pool,n){
    let ordered=$("#unseen").checked?[...shuffle(pool.filter(q=>!seen.has(q.id))),...shuffle(pool.filter(q=>seen.has(q.id)))]:shuffle(pool);
    if(!$("#shuffle").checked)ordered=pool;return ordered.slice(0,Math.min(n,ordered.length));
  }
  function startSession(preset=false){
    let selected;
    if(preset){
      const mc=shuffle(bank.questions.filter(q=>q.kind==="mc")).slice(0,10);
      selected=mc;state.workouts=bank.workoutFamilies.map(f=>shuffle(bank.workouts.filter(w=>w.family===f.id))[0]);state.mode="exam";
    } else {selected=chooseQuestions(eligible(),state.count);state.workouts=[];state.mode="custom";}
    if(!selected.length)return;
    state.session=selected;state.submitted=false;state.seconds=preset?75*60:selected.length*120;
    selected.forEach(q=>seen.add(q.id));localStorage.setItem("finn36003-seen",JSON.stringify([...seen]));
    $("#session-title").textContent=preset?"Exam 1 simulation":"Custom practice set";$("#session-meta").textContent=preset?"10 conceptual multiple choice · 4 multi-part workouts · 100 points · 75 minutes":`${selected.length} questions · ${selected.filter(q=>q.kind==="mc").length} multiple choice · ${selected.filter(q=>q.kind==="quant").length} quantitative`;
    $("#results").hidden=true;$("#submit-session").hidden=false;renderSession();showView("session");
    clearInterval(state.timer);const timer=$("#timer");timer.hidden=!(preset||$("#timed").checked);
    if(!timer.hidden){renderTimer();state.timer=setInterval(()=>{state.seconds--;renderTimer();if(state.seconds<=0){clearInterval(state.timer);gradeSession();}},1000);}
  }
  function startWorkout(){
    state.session=[];state.workouts=[shuffle(bank.workouts)[0]];state.mode="workout";state.submitted=false;state.seconds=15*60;
    $("#session-title").textContent="Workout practice";$("#session-meta").textContent="1 multi-part workout · 15 points · self-paced interpretation";
    $("#results").hidden=true;$("#submit-session").hidden=false;renderSession();showView("session");clearInterval(state.timer);$("#timer").hidden=true;
  }
  function renderTimer(){const m=Math.floor(state.seconds/60),s=state.seconds%60;$("#timer").textContent=`${String(m).padStart(2,"0")}:${String(s).padStart(2,"0")}`;}
  function renderSession(){
    const host=$("#question-container");host.innerHTML="";
    state.session.forEach((q,i)=>host.append(questionCard(q,i,$("#instant").checked)));
    state.workouts.forEach((w,i)=>host.append(workoutCard(w,state.session.length+i)));
  }
  function workoutCard(w,i){
    const card=document.createElement("article");card.className="workout-card";card.dataset.id=w.id;
    card.innerHTML=`<div class="question-top"><span>Question ${i+1} · Multi-part workout</span><span>15 points</span></div><h2>${esc(w.title)}</h2><p>${esc(w.intro)}</p>${w.exhibit}<div class="workout-parts">${w.parts.map((p,j)=>`<section class="workout-part" data-part="${j}"><div class="part-heading"><strong>${String.fromCharCode(97+j)}. ${esc(p.prompt)}</strong><span>${p.points} ${p.points===1?"point":"points"}</span></div>${p.type==="text"?`<textarea rows="5" aria-label="Response to part ${String.fromCharCode(97+j)}" placeholder="Write a concise interpretation..."></textarea>`:`<label class="quant-answer"><span>Answer</span><input type="number" step="any" inputmode="decimal" aria-label="Answer to part ${String.fromCharCode(97+j)}"><strong>${esc(p.unit||"")}</strong></label>`}<div class="feedback" hidden></div></section>`).join("")}</div>`;
    return card;
  }
  function questionCard(q,i,browse=false){
    const card=document.createElement("article");card.className="question-card";card.dataset.id=q.id;
    let answer="";
    if(q.kind==="mc") answer=`<div class="choices">${q.choices.map((c,j)=>`<label class="choice"><input type="radio" name="${browse?"browse-":""}${q.id}" value="${j}"><span>${String.fromCharCode(65+j)}. ${esc(c)}</span></label>`).join("")}</div>`;
    else answer=`<label class="quant-answer"><span>Answer</span><input type="number" step="any" inputmode="decimal" aria-label="Answer to question ${i+1}"><strong>${esc(q.unit||"")}</strong></label>`;
    card.innerHTML=`<div class="question-top"><span>Question ${i+1} · ${esc(topicById[q.topic].label)}</span><span>${diffLabel[q.diff]} · ${kindLabel[q.kind]}</span></div><div class="prompt">${esc(q.prompt)}</div>${answer}<div class="feedback" hidden></div>`;
    if(browse){const btn=document.createElement("button");btn.className="secondary";btn.textContent="Reveal solution";btn.onclick=()=>showFeedback(card,q,null,true);card.append(btn);}
    else if($("#instant").checked){card.addEventListener("change",()=>showFeedback(card,q,getResponse(card,q),false),{once:true});}
    return card;
  }
  function getResponse(card,q){return q.kind==="mc"?Number($("input:checked",card)?.value):Number($("input[type=number]",card)?.value);}
  function isCorrect(q,response){if(q.kind==="mc")return response===q.correct;return Number.isFinite(response)&&Math.abs(response-q.answer)<=q.tol;}
  function showFeedback(card,q,response,reveal=false){
    const box=$(".feedback",card),correct=!reveal&&isCorrect(q,response);box.hidden=false;box.classList.toggle("correct",correct);
    const answer=q.kind==="mc"?`${String.fromCharCode(65+q.correct)}. ${q.choices[q.correct]}`:`${q.answer} ${q.unit||""}`;
    box.innerHTML=`<h3>${reveal?"Solution":correct?"Correct":"Review this one"}</h3><p><strong>Answer:</strong> ${esc(answer)}</p><p>${esc(q.why||q.solution)}</p>`;
  }
  function gradeSession(){
    if(state.submitted)return;state.submitted=true;clearInterval(state.timer);let score=0,answered=0;
    state.session.forEach(q=>{const card=$(`.question-card[data-id="${q.id}"]`),response=getResponse(card,q);if(q.kind==="mc"?$("input:checked",card):$("input[type=number]",card).value!=="")answered++;if(isCorrect(q,response))score++;showFeedback(card,q,response,false);});
    if(state.workouts.length){
      let autoEarned=state.mode==="exam"?score*4:0,autoPossible=state.mode==="exam"?state.session.length*4:0,selfPossible=0;
      state.workouts.forEach(w=>{const card=$(`.workout-card[data-id="${w.id}"]`);w.parts.forEach((p,j)=>{const part=$(`.workout-part[data-part="${j}"]`,card),box=$(".feedback",part);box.hidden=false;if(p.type==="text"){selfPossible+=p.points;const response=$("textarea",part).value.trim();if(response)answered++;box.innerHTML=`<h3>Self-review (${p.points} points)</h3><p>${esc(p.solution)}</p><ul>${p.rubric.map(x=>`<li>${esc(x)}</li>`).join("")}</ul>`;}else{const input=$("input",part),response=Number(input.value),correct=input.value!==""&&Number.isFinite(response)&&Math.abs(response-p.answer)<=p.tol;if(input.value!=="")answered++;autoPossible+=p.points;if(correct)autoEarned+=p.points;box.classList.toggle("correct",correct);box.innerHTML=`<h3>${correct?"Correct":"Review this part"} (${p.points} points)</h3><p><strong>Answer:</strong> ${esc(p.answer)} ${esc(p.unit||"")}</p><p>${esc(p.solution)}</p>`;}});});
      const results=$("#results"),total=state.mode==="exam"?100:autoPossible+selfPossible;results.hidden=false;results.innerHTML=`<p class="eyebrow">RESULTS</p><strong class="score">${autoEarned}/${autoPossible}</strong><h2>Auto-graded points</h2><p>${selfPossible} interpretation ${selfPossible===1?"point requires":"points require"} self-review using the model responses and rubrics above. Your full practice set is worth ${total} points.</p>`;$("#submit-session").hidden=true;results.scrollIntoView({behavior:"smooth",block:"center"});return;
    }
    const pct=Math.round(score/state.session.length*100),results=$("#results");results.hidden=false;results.innerHTML=`<p class="eyebrow">RESULTS</p><strong class="score">${score}/${state.session.length}</strong><h2>${pct}% correct</h2><p>You answered ${answered} of ${state.session.length} questions. Review the worked explanations above, then generate another set to reinforce weaker topics.</p>`;$("#submit-session").hidden=true;results.scrollIntoView({behavior:"smooth",block:"center"});
  }
  function showView(name){
    $$(".view").forEach(v=>v.classList.remove("active"));$(`#${name}-view`).classList.add("active");
    $$(".tab").forEach(t=>t.classList.toggle("active",t.dataset.view===name));window.scrollTo({top:0,behavior:"smooth"});
  }
  function setupBrowse(){
    const ch=$("#browse-chapter");ch.innerHTML=`<option value="all">All chapters</option>`+bank.chapters.map(c=>`<option value="${c.id}">${esc(c.label)}</option>`).join("");
    ch.onchange=()=>{renderBrowseTopics();renderBrowse();};$("#browse-type").onchange=renderBrowse;renderBrowseTopics();renderBrowse();
  }
  function renderBrowseTopics(){const cid=$("#browse-chapter").value||"all",ts=cid==="all"?bank.topics:bank.topics.filter(t=>t.chapter===cid);$("#browse-topic").innerHTML=`<option value="all">All topics</option>`+ts.map(t=>`<option value="${t.id}">${esc(t.label)}</option>`).join("");$("#browse-topic").onchange=renderBrowse;}
  function renderBrowse(){const ch=$("#browse-chapter").value||"all",topic=$("#browse-topic").value||"all",kind=$("#browse-type").value;const qs=bank.questions.filter(q=>(ch==="all"||topicById[q.topic].chapter===ch)&&(topic==="all"||q.topic===topic)&&(kind==="all"||q.kind===kind));$("#browse-count").textContent=`Showing ${qs.length} questions.`;const host=$("#browse-list");host.innerHTML="";qs.forEach((q,i)=>host.append(questionCard(q,i,true)));}
  function renderFormulas(){const host=$("#formula-list");host.innerHTML="";bank.formulas.forEach(group=>{const box=document.createElement("section");box.className="formula-chapter";box.innerHTML=`<h2>${esc(chapterById[group.chapter].label)}</h2>${group.note?`<p><em>${esc(group.note)}</em></p>`:""}<div class="formula-grid">${group.items.map(([n,f])=>`<div class="formula"><strong>${esc(n)}</strong><div class="math">${esc(f)}</div></div>`).join("")}</div>`;host.append(box);});}
  function renderCoverage(){const host=$("#coverage-list");if(!host||!bank.reviewOutcomes)return;host.innerHTML=bank.reviewOutcomes.map(g=>`<section class="coverage-group"><h3>${esc(chapterById[g.chapter].label)}</h3><strong>Key ideas</strong><ul>${g.ideas.map(x=>`<li>${esc(x)}</li>`).join("")}</ul><strong>Key skills</strong><ul>${g.skills.map(x=>`<li>${esc(x)}</li>`).join("")}</ul></section>`).join("");}

  $$(".tab").forEach(t=>t.onclick=()=>showView(t.dataset.view));
  $("#select-all").onclick=()=>{state.topics=new Set(bank.topics.map(t=>t.id));renderTopics();updateSummary();};
  $("#select-none").onclick=()=>{state.topics.clear();renderTopics();updateSummary();};
  $("#minus-count").onclick=()=>setCount(state.count-1);$("#plus-count").onclick=()=>setCount(state.count+1);$$(".quick-counts button").forEach(b=>b.onclick=()=>setCount(Number(b.dataset.count)));
  $("#timed").onchange=updateSummary;$("#generate").onclick=()=>startSession(false);$("#workout-preset").onclick=startWorkout;$("#exam-preset").onclick=()=>startSession(true);$("#submit-session").onclick=gradeSession;$("#leave-session").onclick=()=>{clearInterval(state.timer);showView("practice");};
  $("#reset").onclick=()=>{state.topics=new Set(bank.topics.map(t=>t.id));state.types=new Set(["mc","quant"]);state.diffs.clear();state.count=20;$$("input[type=checkbox]").forEach(x=>{if(["shuffle","unseen"].includes(x.id))x.checked=true;else if(!x.closest(".topic-row"))x.checked=false;});renderTopics();renderPills();updateSummary();};
  $("#bank-count").textContent=bank.questions.length;renderTopics();renderPills();updateSummary();setupBrowse();renderFormulas();renderCoverage();
})();
