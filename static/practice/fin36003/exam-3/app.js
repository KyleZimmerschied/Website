/* Exam 3 uses the existing practice layout with its own scoring and progress. */
(() => {
  'use strict';
  const bank = window.FIN36003_BANK;
  const meta = bank.meta;
  const $ = (s, root = document) => root.querySelector(s);
  const $$ = (s, root = document) => [...root.querySelectorAll(s)];
  const topicById = Object.fromEntries(bank.topics.map(t => [t.id, t]));
  const chapterById = Object.fromEntries(bank.chapters.map(c => [c.id, c]));
  const diffLabel = {e:'Easy', m:'Medium', h:'Hard'};
  const kindLabel = {mc:'Multiple choice', quant:'Quantitative'};
  const state = {topics:new Set(bank.topics.map(t => t.id)), types:new Set(['mc','quant']),
    diffs:new Set(), count:20, session:[], workouts:[], mode:'custom', timer:null,
    deadline:0, seconds:0, submitted:false, autoEarned:0, autoPossible:0, selfPossible:0};
  let seen;
  try {
    const saved = JSON.parse(localStorage.getItem(meta.progressKey) || '[]');
    seen = new Set(Array.isArray(saved) ? saved.filter(x => typeof x === 'string') : []);
  } catch { seen = new Set(); }

  const esc = v => String(v).replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
  const fmt = n => Number(n).toLocaleString('en-US', {minimumFractionDigits:2, maximumFractionDigits:2});
  const points = w => w.parts.reduce((s,p) => s + p.points, 0);
  const countFor = (key,value) => bank.questions.filter(q => q[key] === value).length;
  const eligible = () => bank.questions.filter(q => state.topics.has(q.topic) && state.types.has(q.kind) && (!state.diffs.size || state.diffs.has(q.diff)));
  function shuffle(a) {
    const b = [...a];
    for (let i=b.length-1; i>0; i--) { const j=Math.floor(Math.random()*(i+1)); [b[i],b[j]]=[b[j],b[i]]; }
    return b;
  }
  function remember(items) {
    items.forEach(q => seen.add(q.id));
    try { localStorage.setItem(meta.progressKey, JSON.stringify([...seen])); } catch { /* Practice also works without storage. */ }
  }
  function ordered(pool, random = true) {
    const items = random ? shuffle(pool) : [...pool];
    return $('#unseen').checked ? [...items.filter(q => !seen.has(q.id)), ...items.filter(q => seen.has(q.id))] : items;
  }
  function renderTopics() {
    const host=$('#topic-list'); host.innerHTML='';
    bank.chapters.forEach(ch => {
      const h=document.createElement('div'); h.className='chapter-label'; h.textContent=ch.label; host.append(h);
      bank.topics.filter(t => t.chapter === ch.id).forEach((t,i) => {
        const row=document.createElement('label'); row.className='topic-row';
        row.innerHTML=`<input type="checkbox" value="${t.id}" ${state.topics.has(t.id)?'checked':''}><span class="topic-code">${ch.id.slice(2)}.${i+1}</span><span>${esc(t.label)}</span><span class="topic-count">${countFor('topic',t.id)}</span>`;
        $('input',row).onchange=e => { e.target.checked?state.topics.add(t.id):state.topics.delete(t.id); updateSummary(); };
        host.append(row);
      });
    });
  }
  function renderPills() {
    [['#type-options',kindLabel,state.types],['#difficulty-options',diffLabel,state.diffs]].forEach(([hostId,labels,set]) => {
      const host=$(hostId); host.innerHTML='';
      Object.entries(labels).forEach(([id,label]) => {
        const b=document.createElement('button'); b.type='button'; b.className='pill';
        const update=()=>{ b.classList.toggle('selected',set.has(id)); b.setAttribute('aria-pressed',String(set.has(id))); };
        b.innerHTML=`${label}<small>${countFor(hostId.includes('type')?'kind':'diff',id)}</small>`;
        b.onclick=()=>{ set.has(id)?set.delete(id):set.add(id); update(); updateSummary(); }; update(); host.append(b);
      });
    });
  }
  function updateSummary() {
    const pool=eligible();
    $('#summary-topics').textContent=`${state.topics.size} of ${bank.topics.length} selected`;
    $('#summary-difficulty').textContent=state.diffs.size?[...state.diffs].map(d=>diffLabel[d]).join(', '):'All levels';
    $('#summary-types').textContent=state.types.size===2?'All types':[...state.types].map(k=>kindLabel[k]).join(', ')||'None';
    $('#summary-matches').textContent=`${pool.length} ${pool.length===1?'match':'matches'}`;
    $('#summary-count').textContent=state.count; $('#count-value').textContent=state.count;
    $('#summary-time').textContent=$('#timed').checked?`${state.count*2} minutes`:'Untimed';
    $('#availability').textContent=`${pool.length} questions available. If you request more, all matching questions are used once.`;
    $$('.quick-counts button').forEach(b => b.classList.toggle('selected',Number(b.dataset.count)===state.count));
    $('#generate').disabled=!pool.length;
  }
  function setCount(n) { state.count=Math.max(1,Math.min(100,n)); updateSummary(); }
  function chooseBalancedMc() {
    return shuffle(bank.chapters.flatMap(ch => ordered(bank.questions.filter(q => q.kind==='mc' && topicById[q.topic].chapter===ch.id)).slice(0,meta.mcByChapter[ch.id])));
  }
  function beginSession() {
    state.submitted=false;
    remember([...state.session,...state.workouts]);
    clearInterval(state.timer);
    $('#results').hidden=true; $('#submit-session').hidden=false;
    renderSession(); showView('session');
    const timed=state.mode==='exam' || (state.mode==='custom' && $('#timed').checked);
    $('#timer').hidden=!timed;
    if (timed) {
      state.seconds=state.mode==='exam'?meta.examMinutes*60:state.session.length*120;
      state.deadline=Date.now()+state.seconds*1000;
      renderTimer();
      state.timer=setInterval(() => {
        state.seconds=Math.max(0,Math.ceil((state.deadline-Date.now())/1000)); renderTimer();
        if (state.seconds===0) { $('#session-meta').textContent+=' · Time ended; submitted automatically.'; gradeSession(); }
      },1000);
    }
  }
  function startSession(preset=false) {
    state.mode=preset?'exam':'custom';
    state.session=preset?chooseBalancedMc():ordered(eligible(),$('#shuffle').checked).slice(0,state.count);
    state.workouts=preset?meta.simulationFamilies.map(f => ordered(bank.workouts.filter(w=>w.family===f))[0]):[];
    if (!state.session.length) return;
    $('#session-title').textContent=preset?'Exam 3 simulation':'Custom practice set';
    $('#session-meta').textContent=preset?`10 multiple choice × 4 points + 4 multipart workouts · 105 available points, scored out of 100 · 75 minutes`:
      `${state.session.length} questions · ${state.session.filter(q=>q.kind==='mc').length} multiple choice · ${state.session.filter(q=>q.kind==='quant').length} quantitative · 1 point each`;
    beginSession();
  }
  function startWorkout() {
    const family=$('#workout-family').value;
    const pool=family==='random'?bank.workouts:bank.workouts.filter(w=>w.family===family);
    if (!pool.length) return;
    state.mode='workout'; state.session=[]; state.workouts=[ordered(pool)[0]];
    $('#session-title').textContent='Workout practice';
    $('#session-meta').textContent=`1 multipart workout · ${points(state.workouts[0])} points · untimed · interpretation uses self-review`;
    beginSession();
  }
  function renderTimer() {
    $('#timer').textContent=`${String(Math.floor(state.seconds/60)).padStart(2,'0')}:${String(state.seconds%60).padStart(2,'0')}`;
  }
  function renderSession() {
    const host=$('#question-container'); host.innerHTML='';
    state.session.forEach((q,i)=>host.append(questionCard(q,i)));
    state.workouts.forEach((w,i)=>host.append(workoutCard(w,state.session.length+i)));
  }
  function numericInput(label,unit) {
    return `<label class="quant-answer"><span>Answer</span><input type="number" step="any" inputmode="decimal" aria-label="${esc(label)}"><strong>${esc(unit||'')}</strong></label>`;
  }
  function questionCard(q,i,browse=false) {
    const card=document.createElement('article'); card.className='question-card'; card.dataset.id=q.id;
    const answer=q.kind==='mc'?`<div class="choices">${q.choices.map((c,j)=>`<label class="choice"><input type="radio" name="${browse?'browse-':''}${q.id}" value="${j}"><span>${String.fromCharCode(65+j)}. ${esc(c)}</span></label>`).join('')}</div>`:
      numericInput(`Answer to question ${i+1}`,q.unit);
    card.innerHTML=`<div class="question-top"><span>Question ${i+1} · ${esc(topicById[q.topic].label)}</span><span>${diffLabel[q.diff]} · ${kindLabel[q.kind]}${state.mode==='exam'&&!browse?' · 4 points':''}</span></div><div class="prompt">${esc(q.prompt)}</div>${answer}<div class="feedback" hidden></div>`;
    if (browse) {
      const b=document.createElement('button'); b.className='secondary'; b.textContent='Reveal solution';
      b.onclick=()=>{ showFeedback(card,q,NaN,true); b.hidden=true; }; card.append(b);
    } else if (state.mode==='custom' && $('#instant').checked) {
      const b=document.createElement('button'); b.className='secondary'; b.textContent='Check this answer';
      b.onclick=()=>showFeedback(card,q,getResponse(card,q)); card.append(b);
    }
    return card;
  }
  function workoutCard(w,i) {
    const card=document.createElement('article'); card.className='workout-card'; card.dataset.id=w.id;
    card.innerHTML=`<div class="question-top"><span>Question ${i+1} · Multipart workout</span><span>${points(w)} points</span></div><h2>${esc(w.title)}</h2><p>${esc(w.intro)}</p>${w.exhibit}<div class="workout-parts">${w.parts.map((p,j)=>`<section class="workout-part" data-part="${j}"><div class="part-heading"><strong>${String.fromCharCode(97+j)}. ${esc(p.prompt)}</strong><span>${p.points} ${p.points===1?'point':'points'}</span></div>${p.type==='text'?`<label class="sr-only" for="${w.id}-part-${j}">Response to part ${String.fromCharCode(97+j)}</label><textarea id="${w.id}-part-${j}" rows="3" placeholder="Give a concise explanation…"></textarea>`:numericInput(`Answer to part ${String.fromCharCode(97+j)}`,p.unit)}<div class="feedback" hidden></div></section>`).join('')}</div>`;
    return card;
  }
  function getResponse(card,q) {
    const input=q.kind==='mc'?$('input:checked',card):$('input[type=number]',card);
    return !input || input.value.trim()===''?NaN:Number(input.value);
  }
  function isCorrect(q,response) {
    return Number.isFinite(response) && (q.kind==='mc'?response===q.correct:Math.abs(response-q.answer)<=q.tol+1e-10);
  }
  function answerLabel(q) { return q.kind==='mc'?`${String.fromCharCode(65+q.correct)}. ${q.choices[q.correct]}`:`${fmt(q.answer)} ${q.unit||''}`; }
  function showFeedback(card,q,response,reveal=false) {
    const box=$('.feedback',card); const correct=!reveal&&isCorrect(q,response);
    box.hidden=false; box.classList.toggle('correct',correct);
    box.innerHTML=`<h3>${reveal?'Worked solution':correct?'Correct':Number.isFinite(response)?'Review this one':'Not answered'}</h3><p><strong>Answer:</strong> ${esc(answerLabel(q))}</p><p>${esc(q.why||q.solution)}</p>`;
  }
  function freezeAnswers() {
    $$('#question-container input, #question-container textarea').forEach(input=>input.disabled=true);
    $$('#question-container button').forEach(b=>b.hidden=true);
  }
  function gradeSession() {
    if (state.submitted) return;
    state.submitted=true; clearInterval(state.timer);
    state.autoEarned=0; state.autoPossible=0; state.selfPossible=0;
    let answered=0;
    state.session.forEach(q=>{
      const card=$(`.question-card[data-id="${q.id}"]`,$('#question-container'));
      const response=getResponse(card,q); const weight=state.mode==='exam'?meta.mcPoints:1;
      if (Number.isFinite(response)) answered++;
      state.autoPossible+=weight;
      if (isCorrect(q,response)) state.autoEarned+=weight;
      showFeedback(card,q,response);
    });
    freezeAnswers();
    state.workouts.forEach(w=>{
      const card=$(`.workout-card[data-id="${w.id}"]`);
      w.parts.forEach((p,j)=>{
        const part=$(`.workout-part[data-part="${j}"]`,card); const box=$('.feedback',part); box.hidden=false;
        if (p.type==='text') {
          state.selfPossible+=p.points;
          box.innerHTML=`<h3>Interpretation: self-review (${p.points} points)</h3><p>${esc(p.solution)}</p><ul>${p.rubric.map(x=>`<li>${esc(x)}</li>`).join('')}</ul><label class="self-review-label">Award yourself points using this rubric <select class="self-score" aria-label="Self-review points for ${esc(w.title)}, part ${String.fromCharCode(97+j)}"><option value="">Not reviewed yet</option>${Array.from({length:p.points+1},(_,k)=>`<option value="${k}">${k} / ${p.points}</option>`).join('')}</select></label><small>Your explanation is not automatically graded. Leave it at 0 if no credit is supported.</small>`;
          $('.self-score',box).onchange=renderResults;
        } else {
          const input=$('input[type=number]',part); const response=input.value.trim()===''?NaN:Number(input.value);
          const correct=Number.isFinite(response)&&Math.abs(response-p.answer)<=p.tol+1e-10;
          state.autoPossible+=p.points; if (correct) state.autoEarned+=p.points;
          box.classList.toggle('correct',correct);
          box.innerHTML=`<h3>${correct?'Correct':Number.isFinite(response)?'Review this part':'Not answered'} (${p.points} points)</h3><p><strong>Answer:</strong> ${esc(fmt(p.answer))} ${esc(p.unit||'')}</p><p>${esc(p.solution)}</p>`;
          if (!correct && Number.isFinite(response) && p.points===2) {
            const label=document.createElement('label'); label.className='method-credit';
            label.innerHTML='<input type="checkbox" class="method-point"> Self-review: my written setup used the right method (1 method point).';
            $('input',label).onchange=renderResults; box.append(label);
          }
        }
      });
    });
    state.answered=answered; $('#submit-session').hidden=true; $('#results').hidden=false; renderResults();
    $('#results').scrollIntoView({behavior:'smooth',block:'center'});
  }
  function renderResults() {
    const host=$('#results');
    if (!state.workouts.length) {
      host.innerHTML=`<p class="eyebrow">RESULTS</p><strong class="score">${state.autoEarned}/${state.autoPossible}</strong><h2>${Math.round(100*state.autoEarned/state.autoPossible)}% correct</h2><p>You answered ${state.answered} of ${state.session.length} questions. Review the worked explanations, then try another set.</p>`; return;
    }
    const selects=$$('.self-score',$('#question-container'));
    const pending=selects.filter(s=>s.value==='').length;
    const selfEarned=selects.reduce((s,x)=>s+(x.value===''?0:Number(x.value)),0);
    const method=$$('.method-point:checked',$('#question-container')).length;
    const total=state.autoPossible+state.selfPossible;
    const score=state.autoEarned+selfEarned+method;
    const base=state.mode==='exam'?meta.scoreBase:total;
    host.innerHTML=`<p class="eyebrow">${pending?'PROVISIONAL RESULT':'SELF-REVIEWED RESULT'}</p><strong class="score">${score}/${base}</strong><h2>${pending?`${pending} interpretation ${pending===1?'part still needs':'parts still need'} self-review`:'Practice scoring complete'}</h2><p>${state.autoEarned}/${state.autoPossible} automatically graded points + ${selfEarned}/${state.selfPossible} self-assessed interpretation points + ${method} self-assessed method ${method===1?'point':'points'}.</p><p>${state.mode==='exam'?'105 points are available and the practice score is reported out of 100; it can exceed 100. These are practice weights, not a promise about exam content.':`This workout has ${total} available points.`} Interpretation and method credit depend on your honest review of the rubric; they are not independently verified.</p>`;
  }
  function showView(name) {
    $$('.view').forEach(v=>v.classList.toggle('active',v.id===`${name}-view`));
    $$('.tab').forEach(t=>{ t.classList.toggle('active',t.dataset.view===name); t.setAttribute('aria-pressed',String(t.dataset.view===name)); });
    window.scrollTo({top:0,behavior:'smooth'});
  }
  function renderBrowseTopics() {
    const ch=$('#browse-chapter').value;
    $('#browse-topic').innerHTML='<option value="all">All topics</option>'+bank.topics.filter(t=>ch==='all'||t.chapter===ch).map(t=>`<option value="${t.id}">${esc(t.label)}</option>`).join('');
  }
  function renderBrowse() {
    const ch=$('#browse-chapter').value,topic=$('#browse-topic').value,kind=$('#browse-type').value;
    const qs=bank.questions.filter(q=>(ch==='all'||topicById[q.topic].chapter===ch)&&(topic==='all'||q.topic===topic)&&(kind==='all'||q.kind===kind));
    $('#browse-count').textContent=`Showing ${qs.length} questions.`;
    const host=$('#browse-list'); host.innerHTML=''; qs.forEach((q,i)=>host.append(questionCard(q,i,true)));
  }
  function renderFormulas() {
    $('#formula-list').innerHTML=bank.formulas.map(g=>`<section class="formula-chapter"><h2>${esc(chapterById[g.chapter].label)}</h2><p>${esc(g.note||'')}</p><div class="formula-grid">${g.items.map(([name,formula])=>`<div class="formula"><strong>${esc(name)}</strong><div class="math">${esc(formula)}</div></div>`).join('')}</div></section>`).join('');
  }
  function renderCoverage() {
    $('#coverage-list').innerHTML=bank.reviewOutcomes.map(g=>`<section class="coverage-group"><h3>${esc(chapterById[g.chapter].label)}</h3><strong>Key ideas</strong><ul>${g.ideas.map(x=>`<li>${esc(x)}</li>`).join('')}</ul><strong>Key skills</strong><ul>${g.skills.map(x=>`<li>${esc(x)}</li>`).join('')}</ul></section>`).join('');
  }
  function reset() {
    state.topics=new Set(bank.topics.map(t=>t.id)); state.types=new Set(['mc','quant']); state.diffs.clear(); state.count=20;
    ['timed','instant'].forEach(id=>$('#'+id).checked=false); ['shuffle','unseen'].forEach(id=>$('#'+id).checked=true);
    renderTopics(); renderPills(); updateSummary();
  }
  $$('.tab').forEach(t=>t.onclick=()=>showView(t.dataset.view));
  $('#select-all').onclick=()=>{ state.topics=new Set(bank.topics.map(t=>t.id)); renderTopics(); updateSummary(); };
  $('#select-none').onclick=()=>{ state.topics.clear(); renderTopics(); updateSummary(); };
  $('#minus-count').onclick=()=>setCount(state.count-1); $('#plus-count').onclick=()=>setCount(state.count+1);
  $$('.quick-counts button').forEach(b=>b.onclick=()=>setCount(Number(b.dataset.count)));
  $('#timed').onchange=updateSummary;
  $('#generate').onclick=()=>startSession(); $('#exam-preset').onclick=()=>startSession(true);
  $('#workout-preset').onclick=startWorkout; $('#submit-session').onclick=gradeSession;
  $('#leave-session').onclick=()=>{ clearInterval(state.timer); showView('practice'); };
  $('#reset').onclick=reset;
  $('#browse-chapter').innerHTML='<option value="all">All chapters</option>'+bank.chapters.map(c=>`<option value="${c.id}">${esc(c.label)}</option>`).join('');
  $('#browse-chapter').onchange=()=>{ renderBrowseTopics(); renderBrowse(); };
  $('#browse-topic').onchange=renderBrowse; $('#browse-type').onchange=renderBrowse;
  $('#workout-family').innerHTML='<option value="random">Random workout</option>'+bank.workoutFamilies.map(f=>`<option value="${f.id}">${esc(f.label)}</option>`).join('');
  $('#bank-count').textContent=bank.questions.length;
  document.title='FINN 36003 · Exam 3 Practice';
  renderTopics(); renderPills(); updateSummary(); renderBrowseTopics(); renderBrowse(); renderFormulas(); renderCoverage();
})();
