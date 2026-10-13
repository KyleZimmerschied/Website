(() => {
const b=window.FIN36003_BANK;
const r=(n,d=2)=>Number(n.toFixed(d));
const money=n=>`${n<0?"−":""}$${Math.abs(n).toFixed(2)}m`;
const table=(heads,rows)=>`<div class="exhibit-wrap"><table class="exhibit"><thead><tr>${heads.map(x=>`<th>${x}</th>`).join("")}</tr></thead><tbody>${rows.map(row=>`<tr>${row.map((x,i)=>`<${i?"td":"th"}>${x}</${i?"td":"th"}>`).join("")}</tr>`).join("")}</tbody></table></div>`;
const pv=(cf,t,rate)=>cf/Math.pow(1+rate,t);
const npv=(cfs,rate)=>cfs.reduce((sum,cf,t)=>sum+pv(cf,t,rate),0);
const annuityFactor=(rate,n)=>(1-Math.pow(1+rate,-n))/rate;
const bondPrice=(face,couponRate,years,ytm,frequency)=>{
  const n=years*frequency,periodicCoupon=face*couponRate/frequency,periodicRate=ytm/frequency;
  return periodicCoupon*annuityFactor(periodicRate,n)+face/Math.pow(1+periodicRate,n);
};
function irr(cfs){let lo=-.9999,hi=10;for(let i=0;i<250;i++){const mid=(lo+hi)/2;if(npv(cfs,mid)>0)lo=mid;else hi=mid;}return (lo+hi)/2;}
function payback(cfs,rate=0){let cumulative=cfs[0];for(let t=1;t<cfs.length;t++){const inflow=pv(cfs[t],t,rate);if(cumulative+inflow>=0)return (t-1)+(-cumulative/inflow);cumulative+=inflow;}return NaN;}

function bondValuation(id,name,v){
  const [face,couponRate,years,ytm,frequency,comparisonYtm]=v;
  const annualCoupon=face*couponRate,periodicCoupon=annualCoupon/frequency,n=years*frequency;
  const price=bondPrice(face,couponRate,years,ytm,frequency);
  const comparisonPrice=bondPrice(face,couponRate,years,comparisonYtm,frequency);
  const classification=price>face+.01?"premium":price<face-.01?"discount":"par";
  const direction=comparisonPrice>price?"rises":"falls";
  return{id,family:"bond",title:`Coupon-Bond Valuation — ${name}`,intro:"Value the bond using periodic coupon cash flows. YTMs are quoted APRs with semiannual compounding.",exhibit:table(["Assumption","Value"],[["Face value",`$${face.toLocaleString()}`],["Annual coupon rate",`${r(couponRate*100)}%`],["Years to maturity",years],["Coupon frequency",`${frequency} per year`],["Current YTM",`${r(ytm*100)}%`],["Comparison YTM",`${r(comparisonYtm*100)}%`]]),parts:[
    {prompt:"Calculate the total annual coupon payment.",answer:r(annualCoupon),tol:.02,unit:"$",points:2,solution:`Annual coupon=${face}(${couponRate})=$${r(annualCoupon)}.`},
    {prompt:"Calculate the coupon paid every six months.",answer:r(periodicCoupon),tol:.02,unit:"$",points:1,solution:`Semiannual coupon=$${r(annualCoupon)}/${frequency}=$${r(periodicCoupon)}.`},
    {prompt:"Calculate the number of semiannual periods used in the valuation.",answer:n,tol:0,unit:"periods",points:1,solution:`N=${years} years×${frequency}=${n} periods.`},
    {prompt:"Calculate the bond's price at the current YTM.",answer:r(price),tol:.10,unit:"$",points:4,solution:`Use N=${n}, I/Y=${r(ytm*100/frequency)}%, PMT=$${r(periodicCoupon)}, and FV=$${face}. Price=$${r(price)}.`},
    {prompt:`Calculate the bond's price if its YTM changes to ${r(comparisonYtm*100)}%.`,answer:r(comparisonPrice),tol:.10,unit:"$",points:3,solution:`Use the new periodic yield of ${r(comparisonYtm*100/frequency)}%. Price=$${r(comparisonPrice)}.`},
    {type:"text",prompt:"Classify the bond as premium, discount, or par at the current YTM. Explain the price change and why a coupon bond is generally easier to value than common stock.",points:4,solution:`The bond sells at a ${classification} because its coupon rate is ${couponRate>ytm?"above":couponRate<ytm?"below":"equal to"} its YTM. When YTM changes from ${r(ytm*100)}% to ${r(comparisonYtm*100)}%, price ${direction} because bond prices and market yields move oppositely. Coupon and principal payments are contractual, while stock dividends and the future selling price must be forecast.`,rubric:[`Classifies the bond as ${classification}`,"Explains the inverse price–yield relation","Contrasts contractual bond cash flows with uncertain stock cash flows"]}
  ]};
}

function mutuallyExclusive(id,name,v){
  const [costA,flowsA,costB,flowsB,rates]=v,cfsA=[-costA,...flowsA],cfsB=[-costB,...flowsB];
  const irrA=irr(cfsA)*100,irrB=irr(cfsB)*100;
  const incremental=cfsA.map((cf,i)=>cf-cfsB[i]),crossover=irr(incremental)*100;
  const decisions=rates.map(rate=>{
    const a=npv(cfsA,rate),b=npv(cfsB,rate);
    if(a<0&&b<0)return `At ${r(rate*100)}%, reject both projects because both NPVs are negative.`;
    return `At ${r(rate*100)}%, select Project ${a>b?"A":"B"}, which has the higher positive NPV.`;
  });
  return{id,family:"crossover",title:`Mutually Exclusive Projects — ${name}`,intro:"Only one project can be accepted. Calculate returns using each complete cash-flow series and calculate the crossover rate using Project A minus Project B. All cash flows are in millions.",exhibit:table(["","Year 0",...flowsA.map((_,i)=>`Year ${i+1}`)],[['Project A',money(-costA),...flowsA.map(money)],['Project B',money(-costB),...flowsB.map(money)]]),parts:[
    {prompt:"Calculate the IRR of Project A.",answer:r(irrA),tol:.10,unit:"%",points:2,solution:`IRR of Project A=${r(irrA)}%.`},
    {prompt:"Calculate the IRR of Project B.",answer:r(irrB),tol:.10,unit:"%",points:2,solution:`IRR of Project B=${r(irrB)}%.`},
    {prompt:"Calculate the crossover rate using the incremental cash flows for Project A minus Project B.",answer:r(crossover),tol:.12,unit:"%",points:3,solution:`Incremental cash flows are {${incremental.map(x=>r(x)).join(", ")}}. Their IRR, and therefore the crossover rate, is ${r(crossover)}%.`},
    {type:"text",prompt:`State the correct decision at required returns of ${rates.map(x=>`${r(x*100)}%`).join(", ")}.`,points:4,solution:decisions.join(" "),rubric:["Uses NPV rankings below and above the crossover rate","Rejects both if the required return exceeds both project IRRs"]},
    {type:"text",prompt:"Explain why NPV should govern when NPV and IRR rankings conflict, and identify one additional limitation of IRR.",points:4,solution:"NPV measures dollars of value created at the required return, so the higher positive NPV governs for mutually exclusive projects. IRR can mis-rank projects because of scale or timing and can produce multiple or no meaningful IRRs with nonconventional cash flows.",rubric:["Uses value creation to justify NPV","Identifies scale or timing as a ranking problem","Identifies multiple or missing IRRs as another limitation"]}
  ]};
}

function scenarioSensitivity(id,name,v){
  const [time0,life,sales,spill,costs,dep,tax,sale,nwcRecovery,req,probabilities,sensitivitySales]=v;
  const afterSale=sale*(1-tax);
  const stats=i=>{
    const ebit=sales[i]+spill[i]-costs[i]-dep,taxes=ebit*tax,ocf=ebit-taxes+dep;
    const terminal=ocf+afterSale+nwcRecovery,cfs=[time0,...Array(life-1).fill(ocf),terminal];
    return{ebit,taxes,ocf,terminal,npv:npv(cfs,req)};
  };
  const outcomes=[0,1,2].map(stats),expected=outcomes.reduce((sum,x,i)=>sum+x.npv*probabilities[i],0);
  const sensEbit=sensitivitySales+spill[1]-costs[1]-dep,sensTaxes=sensEbit*tax,sensOcf=sensEbit-sensTaxes+dep;
  const sensTerminal=sensOcf+afterSale+nwcRecovery,sensNpv=npv([time0,...Array(life-1).fill(sensOcf),sensTerminal],req);
  const scenarioTable=table(["Assumption","Downside","Base","Upside"],[["Product sales revenue",...sales.map(x=>`$${x}m`)],['Spillover revenue',...spill.map(x=>`$${x}m`)],['Cash operating costs',...costs.map(x=>`$${x}m`)],['Probability',...probabilities.map(x=>`${r(x*100)}%`)]]);
  const commonTable=table(["Common project assumption","Value"],[["Time-0 FCFF",money(time0)],["Project life",`${life} years`],["Annual depreciation",money(dep)],["Equipment sale in final year",money(sale)],["Equipment book value in final year","$0.00m"],["NWC recovery in final year",money(nwcRecovery)],["Tax rate",`${r(tax*100)}%`],["Required return",`${r(req*100)}%`]]);
  return{id,family:"scenario_sensitivity",title:`Scenario and Sensitivity Analysis — ${name}`,intro:"Build project value under coherent downside, base, and upside cases. Equipment, depreciation, working capital, tax rate, project life, and required return remain fixed.",exhibit:scenarioTable+commonTable,parts:[
    {prompt:"Calculate annual operating cash flow in the downside scenario.",answer:r(outcomes[0].ocf),tol:.04,unit:"$m",points:2,solution:`Downside EBIT=${sales[0]}+${spill[0]}−${costs[0]}−${dep}=${r(outcomes[0].ebit)}; taxes=${r(outcomes[0].taxes)}; OCF=${money(outcomes[0].ocf)}.`},
    {prompt:"Calculate NPV in the downside scenario.",answer:r(outcomes[0].npv),tol:.12,unit:"$m",points:3,solution:`Use FCFF0=${money(time0)}, annual OCF=${money(outcomes[0].ocf)}, and final-year FCFF=${money(outcomes[0].terminal)}. Downside NPV=${money(outcomes[0].npv)}.`},
    {prompt:"Calculate NPV in the base scenario.",answer:r(outcomes[1].npv),tol:.12,unit:"$m",points:2,solution:`Base OCF=${money(outcomes[1].ocf)} and final-year FCFF=${money(outcomes[1].terminal)}. Base NPV=${money(outcomes[1].npv)}.`},
    {prompt:"Calculate NPV in the upside scenario.",answer:r(outcomes[2].npv),tol:.12,unit:"$m",points:2,solution:`Upside OCF=${money(outcomes[2].ocf)} and final-year FCFF=${money(outcomes[2].terminal)}. Upside NPV=${money(outcomes[2].npv)}.`},
    {prompt:"Calculate probability-weighted expected NPV.",answer:r(expected),tol:.12,unit:"$m",points:2,solution:`E(NPV)=ΣPᵢ×NPVᵢ=${money(expected)}.`},
    {prompt:`For a sensitivity test, change only product sales revenue to $${sensitivitySales} million and keep every other base-case assumption fixed. Calculate NPV.`,answer:r(sensNpv),tol:.12,unit:"$m",points:2,solution:`Sensitivity OCF=${money(sensOcf)}, final-year FCFF=${money(sensTerminal)}, and NPV=${money(sensNpv)}.`},
    {type:"text",prompt:"Explain why the three cases are scenario analysis while the final calculation is sensitivity analysis.",points:2,solution:"The scenarios change several related revenue and cost assumptions together to describe coherent possible futures. The sensitivity calculation changes only product sales revenue while holding the remaining base assumptions constant.",rubric:["Recognizes that scenarios change multiple inputs","Recognizes that sensitivity changes one input at a time"]}
  ]};
}

function valuation(id,name,v){
  const [d0,gh,n,gs,req]=v;const ds=[];let d=d0;for(let t=1;t<=n;t++){d*=1+gh;ds.push(d);}const next=d*(1+gs),terminal=next/(req-gs);let price=terminal/Math.pow(1+req,n);ds.forEach((x,i)=>price+=x/Math.pow(1+req,i+1));
  return{id,family:"valuation",title:`Two-Stage Stock Valuation — ${name}`,intro:"Value the stock using the dividend-discount framework. Report dollar answers to two decimals.",exhibit:table(["Assumption","Value"],[['Most recent dividend (D0)',`$${d0.toFixed(2)}`],["High-growth rate",`${r(gh*100)}% for ${n} years`],["Stable growth rate",`${r(gs*100)}% thereafter`],["Required return",`${r(req*100)}%`]]),parts:[
    {prompt:"Calculate the Year-1 dividend.",answer:r(ds[0]),tol:.02,unit:"$",points:2,solution:`D1=${d0.toFixed(2)}(1+${gh})=$${r(ds[0])}.`},
    {prompt:`Calculate the dividend in Year ${n}, the final high-growth year.`,answer:r(d),tol:.03,unit:"$",points:2,solution:`D${n}=D0(1+g)^${n}=$${r(d)}.`},
    {prompt:`Calculate the dividend in Year ${n+1}, the first stable-growth dividend.`,answer:r(next),tol:.03,unit:"$",points:2,solution:`D${n+1}=D${n}(1+${gs})=$${r(next)}.`},
    {prompt:`Calculate the terminal value at the end of Year ${n}.`,answer:r(terminal),tol:.08,unit:"$",points:3,solution:`P${n}=D${n+1}/(r−g)=${r(next)}/(${req}−${gs})=$${r(terminal)}.`},
    {prompt:"Calculate the stock value today.",answer:r(price),tol:.12,unit:"$",points:4,solution:`Discount each high-growth dividend and the terminal value to time 0. P0=$${r(price)}.`},
    {type:"text",prompt:"Explain why the terminal value must be discounted and identify one assumption that could materially change the answer.",points:2,solution:"The terminal value is located at the end of the high-growth period, not today, so it must be discounted. The required return, stable growth rate, high-growth rate, or forecast horizon can materially change value.",rubric:["Locates terminal value at the end of high growth","Identifies a consequential valuation assumption"]}
  ]};
}

function criteria(id,name,v){
  const [cost,flows,req,cutoff]=v,cfs=[-cost,...flows],projectNpv=npv(cfs,req),pb=payback(cfs),dpb=payback(cfs,req),projectIrr=irr(cfs)*100;
  return{id,family:"criteria",title:`Investment Criteria — ${name}`,intro:`Evaluate the project at a ${(req*100).toFixed(0)}% required return and a ${cutoff}-year payback cutoff. Cash flows occur at each year-end.`,exhibit:table(["Year",...cfs.map((_,i)=>i)],[['Cash flow ($m)',...cfs.map(x=>money(x))]]),parts:[
    {prompt:"Calculate NPV.",answer:r(projectNpv),tol:.08,unit:"$m",points:4,solution:`NPV is the sum of the time-0 cash flow and each discounted future cash flow: ${money(projectNpv)}.`},
    {prompt:"Calculate the ordinary payback period.",answer:r(pb),tol:.03,unit:"years",points:3,solution:`Accumulate undiscounted cash flows and use the fraction of the recovery-year cash flow needed. Payback=${r(pb)} years.`},
    {prompt:"Calculate the discounted payback period.",answer:r(dpb),tol:.04,unit:"years",points:3,solution:`Accumulate cash flows after discounting each at ${(req*100).toFixed(0)}%. Discounted payback=${r(dpb)} years.`},
    {prompt:"Calculate IRR.",answer:r(projectIrr),tol:.08,unit:"%",points:3,solution:`IRR sets NPV equal to zero. IRR=${r(projectIrr)}%.`},
    {type:"text",prompt:"State the NPV, IRR, and payback decisions and explain which criterion should govern if they disagree.",points:2,solution:`NPV is ${projectNpv>=0?"positive":"negative"}; IRR is ${projectIrr>=req*100?"above":"below"} the required return; and ordinary payback is ${pb<=cutoff?"within":"outside"} the cutoff. NPV should govern because it measures value created using all cash flows, timing, and the required return.`,rubric:["Applies the decision rules correctly","Uses NPV as the primary value criterion"]}
  ]};
}

function expansion(id,name,v){
  const [equipment,nwc,sunk,life,sales,spill,costs,tax,sale,req,training=0,bookResidual=0]=v;
  const dep=(equipment-bookResidual)/life,ebit=sales+spill-costs-dep,taxes=ebit*tax,ocf=ebit-taxes+dep;
  const afterSale=sale-(sale-bookResidual)*tax,time0=-equipment-nwc-training,terminal=ocf+afterSale+nwc;
  const cfs=[time0,...Array(life-1).fill(ocf),terminal],projectNpv=npv(cfs,req);
  const rows=[['Equipment and installation',`$${equipment}`],['Feasibility study already completed',`$${sunk}`]];
  if(training)rows.push(['Required employee training paid today',`$${training}`]);
  rows.push(['Time-0 change in NWC',money(nwc)],['Project life',`${life} years`],['Annual product revenue',`$${sales}`],['Annual spillover revenue',`$${spill}`],['Annual cash operating costs',`$${costs}`],['Equipment book value in final year',`$${bookResidual}`],['Equipment sale in final year',`$${sale}`],['Tax rate',`${tax*100}%`],['Required return',`${req*100}%`]);
  return{id,family:"expansion",title:`Expansion-Project FCFF — ${name}`,intro:"Build the project's incremental free cash flows. The feasibility study has already been paid. Employee training, when shown, occurs only if the project is accepted. All dollar amounts are in millions.",exhibit:table(["Assumption","Amount"],rows),parts:[
    {prompt:"Calculate time-0 project FCFF.",answer:r(time0),tol:.02,unit:"$m",points:2,solution:`Exclude the sunk study. Include equipment, the ${nwc<0?"working-capital release":"working-capital investment"}${training?", and required training":""}. FCFF0=−${equipment}−(${nwc})−${training}=${money(time0)}.`},
    {prompt:"Calculate annual straight-line depreciation.",answer:r(dep),tol:.02,unit:"$m",points:2,solution:`Depreciation=(${equipment}−${bookResidual})/${life}=${money(dep)} per year.`},
    {prompt:"Calculate annual operating cash flow.",answer:r(ocf),tol:.04,unit:"$m",points:3,solution:`EBIT=${sales}+${spill}−${costs}−${r(dep)}=${r(ebit)}; taxes=${r(taxes)}; OCF=EBIT−Taxes+Depreciation=${money(ocf)}.`},
    {prompt:"Calculate the after-tax equipment sale proceeds.",answer:r(afterSale),tol:.03,unit:"$m",points:2,solution:`After-tax proceeds=${sale}−(${sale}−${bookResidual})(${tax})=${money(afterSale)}.`},
    {prompt:`Calculate total FCFF in Year ${life}, including reversal of the time-0 NWC change.`,answer:r(terminal),tol:.04,unit:"$m",points:2,solution:`Final-year FCFF=${r(ocf)}+${r(afterSale)}+(${nwc})=${money(terminal)}. A positive time-0 NWC investment is recovered; a time-0 release reverses as an outflow.`},
    {prompt:"Calculate project NPV.",answer:r(projectNpv),tol:.12,unit:"$m",points:2,solution:`Discount FCFF at ${(req*100).toFixed(0)}%. NPV=${money(projectNpv)}.`},
    {type:"text",prompt:`Explain why the feasibility study is excluded${training?", why employee training is included,":""} and why interest expense is not subtracted from OCF.`,points:2,solution:`The completed study is sunk because it is unchanged by the decision. ${training?"Training is incremental because it is paid only if the project proceeds. ":""}Interest is excluded because FCFF is measured before financing payments; financing costs enter through the required return.`,rubric:["Identifies the study as sunk",...(training?["Identifies training as incremental"]:[]),"Connects interest exclusion to FCFF and the discount rate"]}
  ]};
}

function projectAnalysis(id,name,v){
  const [investment,life,q,p,variable,fixed,req]=v,dep=investment/life,cm=p-variable,cashBE=fixed*1e6/cm,accountBE=(fixed+dep)*1e6/cm,requiredOcf=investment/annuityFactor(req,life),requiredOcfRounded=r(requiredOcf),financialBE=(fixed+requiredOcfRounded)*1e6/cm,ocf=q*cm/1e6-fixed,dol=1+fixed/ocf;
  return{id,family:"project_analysis",title:`Break-Even and Operating Leverage — ${name}`,intro:"Assume taxes, salvage value, and net working capital do not affect this project. Dollar inputs are in millions unless stated per unit.",exhibit:table(["Assumption","Value"],[['Initial investment',`$${investment}m`],['Project life',`${life} years`],['Base annual volume',`${q.toLocaleString()} units`],['Price per unit',`$${p}`],['Variable cost per unit',`$${variable}`],['Annual fixed cash costs',`$${fixed}m`],['Required return',`${req*100}%`]]),parts:[
    {prompt:"Calculate contribution margin per unit.",answer:r(cm),tol:.01,unit:"$/unit",points:2,solution:`Contribution margin=${p}−${variable}=$${cm} per unit.`},
    {prompt:"Calculate cash break-even quantity.",answer:r(cashBE,0),tol:3,unit:"units",points:2,solution:`Qcash=${fixed}m/${cm}=${r(cashBE,0).toLocaleString()} units.`},
    {prompt:"Calculate accounting break-even quantity.",answer:r(accountBE,0),tol:3,unit:"units",points:2,solution:`Depreciation=${investment}/${life}=$${r(dep)}m; Qaccounting=(${fixed}+${r(dep)})m/${cm}=${r(accountBE,0).toLocaleString()} units.`},
    {prompt:"Calculate the annual OCF required for financial break-even.",answer:r(requiredOcf),tol:.04,unit:"$m",points:3,solution:`Set PV of a ${life}-year annuity equal to $${investment}m at ${(req*100).toFixed(0)}%. Required OCF=${money(requiredOcf)}.`},
    {prompt:"Calculate financial break-even quantity using the required OCF rounded to two decimals.",answer:r(financialBE,0),tol:5,unit:"units",points:2,solution:`Qfinancial=(${fixed}+${requiredOcfRounded})m/${cm}=${r(financialBE,0).toLocaleString()} units.`},
    {prompt:"Calculate degree of operating leverage at the base volume.",answer:r(dol),tol:.03,unit:"x",points:2,solution:`Base OCF=${q.toLocaleString()}(${cm})−$${fixed}m=${money(ocf)}; DOL=1+${fixed}/${r(ocf)}=${r(dol)}.`},
    {type:"text",prompt:"Explain why financial break-even is the most demanding threshold and interpret the DOL result.",points:2,solution:`Financial break-even must recover the investment and earn the ${(req*100).toFixed(0)}% required return, so it exceeds cash and accounting break-even. A 1% change in volume produces approximately a ${r(dol)}% change in OCF near the base forecast.`,rubric:["Connects financial break-even to NPV=0","Interprets DOL as cash-flow sensitivity"]}
  ]};
}

function replacement(id,name,v){
  const [newCost,oldSale,oldBook,nwc,savings,newDep,oldDep,life,newSale,newBook,tax,req]=v,afterOld=oldSale-(oldSale-oldBook)*tax,time0=-newCost+afterOld-nwc,deltaDep=newDep-oldDep,deltaEbit=savings-deltaDep,deltaTaxes=deltaEbit*tax,deltaOcf=deltaEbit-deltaTaxes+deltaDep,afterNew=newSale-(newSale-newBook)*tax,terminal=deltaOcf+afterNew+nwc,cfs=[time0,...Array(life-1).fill(deltaOcf),terminal],projectNpv=npv(cfs,req);
  return{id,family:"replacement",title:`Replacement Project — ${name}`,intro:"Evaluate the new equipment relative to keeping the old equipment. If retained, the old equipment has no terminal value. All dollar amounts are in millions.",exhibit:table(["Assumption","Amount"],[['New equipment cost',`$${newCost}`],['Old equipment sale today',`$${oldSale}`],['Old equipment book value today',`$${oldBook}`],['Additional NWC',`$${nwc}`],['Annual cash cost savings',`$${savings}`],['New annual depreciation',`$${newDep}`],['Old annual depreciation if retained',`$${oldDep}`],['Project life',`${life} years`],['New equipment sale in final year',`$${newSale}`],['New equipment book value then',`$${newBook}`],['Old equipment terminal value if retained',`$0`],['Tax rate',`${tax*100}%`],['Required return',`${req*100}%`]]),parts:[
    {prompt:"Calculate after-tax proceeds from selling the old equipment today.",answer:r(afterOld),tol:.03,unit:"$m",points:2,solution:`After-tax old sale=${oldSale}−(${oldSale}−${oldBook})(${tax})=${money(afterOld)}.`},
    {prompt:"Calculate the net time-0 replacement outlay.",answer:r(time0),tol:.03,unit:"$m",points:3,solution:`FCFF0=−${newCost}+${r(afterOld)}−${nwc}=${money(time0)}.`},
    {prompt:"Calculate annual incremental operating cash flow.",answer:r(deltaOcf),tol:.04,unit:"$m",points:3,solution:`ΔEBIT=${savings}−(${newDep}−${oldDep})=${r(deltaEbit)}; ΔTaxes=${r(deltaTaxes)}; ΔOCF=${money(deltaOcf)}.`},
    {prompt:`Calculate total incremental FCFF in Year ${life}.`,answer:r(terminal),tol:.04,unit:"$m",points:2,solution:`After-tax new sale=${r(afterNew)}; final FCFF=${r(deltaOcf)}+${r(afterNew)}+${nwc}=${money(terminal)}.`},
    {prompt:"Calculate replacement-project NPV.",answer:r(projectNpv),tol:.10,unit:"$m",points:3,solution:`Discount incremental replacement FCFF at ${(req*100).toFixed(0)}%. NPV=${money(projectNpv)}.`},
    {type:"text",prompt:"Explain why replacement analysis uses incremental differences rather than valuing the new machine by itself.",points:2,solution:"The decision is new equipment versus keeping the old equipment. Relevant cash flows are therefore the changes between those alternatives, including sale proceeds, cost savings, depreciation, working capital, and terminal value.",rubric:["Identifies the with-versus-without comparison","Mentions at least one displaced old-equipment cash flow"]}
  ]};
}

function eac(id,name,v){
  const [buyA,costA,lifeA,buyB,costB,lifeB,req,resaleA=0,resaleB=0]=v;
  const pvA=buyA+costA*annuityFactor(req,lifeA)-pv(resaleA,lifeA,req),pvB=buyB+costB*annuityFactor(req,lifeB)-pv(resaleB,lifeB,req);
  const eacA=pvA/annuityFactor(req,lifeA),eacB=pvB/annuityFactor(req,lifeB),choice=eacA<eacB?"Machine A":"Machine B";
  return{id,family:"eac",title:`Equivalent Annual Cost — ${name}`,intro:"The alternatives provide the same service and can be replaced indefinitely. Ignore taxes. Resale values, when present, are received at the end of each ownership period. All dollar amounts are in millions.",exhibit:table(["Input","Machine A","Machine B"],[['Purchase cost',`$${buyA}`,`$${buyB}`],['Annual operating cost',`$${costA}`,`$${costB}`],['Expected resale value',`$${resaleA}`,`$${resaleB}`],['Useful life',`${lifeA} years`,`${lifeB} years`],['Required return',`${req*100}%`,`${req*100}%`]]),parts:[
    {prompt:"Calculate the present cost of Machine A.",answer:r(pvA),tol:.06,unit:"$m",points:3,solution:`Present cost A=${buyA}+PV of ${lifeA} annual $${costA} costs−PV of $${resaleA} resale=${money(pvA)}.`},
    {prompt:"Calculate the present cost of Machine B.",answer:r(pvB),tol:.06,unit:"$m",points:3,solution:`Present cost B=${buyB}+PV of ${lifeB} annual $${costB} costs−PV of $${resaleB} resale=${money(pvB)}.`},
    {prompt:"Calculate EAC for Machine A.",answer:r(eacA),tol:.05,unit:"$m/year",points:3,solution:`Convert present cost ${r(pvA)} over ${lifeA} years at ${(req*100).toFixed(0)}% into an annuity: EAC A=${money(eacA)} per year.`},
    {prompt:"Calculate EAC for Machine B.",answer:r(eacB),tol:.05,unit:"$m/year",points:3,solution:`Convert present cost ${r(pvB)} over ${lifeB} years at ${(req*100).toFixed(0)}% into an annuity: EAC B=${money(eacB)} per year.`},
    {type:"text",prompt:"Select the machine and explain why comparing total or present costs alone can be misleading.",points:3,solution:`Select ${choice}, which has the lower EAC. Total and present costs cover different useful lives, while EAC places both alternatives on the same annual basis.`,rubric:[`Selects ${choice}`,"Uses the lower-EAC rule","Explains the unequal-life problem"]}
  ]};
}

b.workoutFamilies=[
 {id:"valuation",label:"Nonconstant-Growth Stock Valuation"},
 {id:"bond",label:"Coupon-Bond Valuation"},
 {id:"criteria",label:"Investment Criteria"},
 {id:"crossover",label:"Mutually Exclusive Projects and Crossover Rate"},
 {id:"expansion",label:"Expansion-Project FCFF"},
 {id:"scenario_sensitivity",label:"Scenario and Sensitivity Analysis"},
 {id:"project_analysis",label:"Break-Even and Operating Leverage"},
 {id:"replacement",label:"Replacement-Project FCFF"},
 {id:"eac",label:"Equivalent Annual Cost"}
];
b.workouts=[
 valuation("e2wv1","Ozark Retail",[1.20,.09,3,.04,.10]),valuation("e2wv2","Natural State Foods",[.85,.12,2,.05,.11]),valuation("e2wv3","Delta Logistics",[1.60,.08,3,.035,.09]),valuation("e2wv4","Buffalo Consumer",[.72,.15,2,.045,.105]),valuation("e2wv5","Summit Stores",[1.05,.10,4,.04,.095]),
 bondValuation("e2wb1","Arkansas Manufacturing",[1000,.06,7,.07,2,.05]),bondValuation("e2wb2","Ozark Utilities",[1000,.05,10,.04,2,.06]),bondValuation("e2wb3","Delta Distribution",[1000,.045,6,.045,2,.055]),
 criteria("e2wc1","Fulfillment Upgrade",[180,[55,65,70,75],.11,3]),criteria("e2wc2","Distribution Automation",[150,[50,55,60,65],.10,3]),criteria("e2wc3","Regional Warehouse",[220,[65,75,85,90],.12,3]),criteria("e2wc4","Packaging Line",[125,[40,45,50,55],.09,3]),criteria("e2wc5","Delivery Platform",[200,[52,66,78,92],.13,3]),
 mutuallyExclusive("e2wx1","Delta Distribution",[40,[25.3,37.1,22],20,[20,19.8,10.4],[.25,.30,.80]]),mutuallyExclusive("e2wx2","Ozark Automation",[75,[42,49,38],35,[29,27,18],[.12,.32,.75]]),mutuallyExclusive("e2wx3","Summit Fulfillment",[120,[52,68,76,44],55,[40,38,31,20],[.10,.28,.65]]),
 expansion("e2we1","Starlink Terminal Line",[310,25,5,5,220,20,138,.25,40,.12]),expansion("e2we2","Ozark Components",[240,18,4,4,175,12,102,.25,28,.11]),expansion("e2we3","Delta Assembly",[360,30,6,6,270,18,165,.24,48,.10]),expansion("e2we4","Buffalo Electronics",[200,-12,3,5,150,10,91,.25,25,.12,6,20]),expansion("e2we5","Summit Production",[280,22,5,4,205,15,122,.25,36,.11,8,28]),
 scenarioSensitivity("e2ws1","Starlink Terminal Line",[-335,5,[190,220,250],[15,20,25],[150,138,130],62,.25,40,25,.12,[.25,.50,.25],205]),scenarioSensitivity("e2ws2","Ozark Components",[-258,4,[150,175,200],[8,12,16],[112,102,95],60,.25,28,18,.11,[.30,.50,.20],160]),scenarioSensitivity("e2ws3","Delta Assembly",[-390,6,[235,270,300],[12,18,24],[180,165,155],60,.24,48,30,.10,[.20,.50,.30],250]),
 projectAnalysis("e2wp1","Specialized Starlink Cell",[80,4,200000,600,350,20,.10]),projectAnalysis("e2wp2","Ozark Sensor Cell",[72,4,180000,550,325,18,.09]),projectAnalysis("e2wp3","Delta Router Cell",[90,5,240000,500,300,24,.11]),projectAnalysis("e2wp4","Buffalo Antenna Cell",[60,3,160000,640,390,16,.10]),projectAnalysis("e2wp5","Summit Receiver Cell",[100,5,260000,700,430,25,.12]),
 replacement("e2wr1","Starlink Assembly Equipment",[140,40,0,10,50,35,0,4,20,0,.25,.12]),replacement("e2wr2","Ozark Packaging Equipment",[110,24,0,8,36,27.5,0,4,16,0,.25,.10]),replacement("e2wr3","Delta Robotics",[175,45,0,12,62,35,0,5,25,0,.24,.11]),replacement("e2wr4","Buffalo Test Equipment",[96,20,32,6,30,24,0,4,12,0,.25,.09]),replacement("e2wr5","Summit Sorting System",[150,35,50,9,48,30,0,5,22,0,.25,.12]),
 eac("e2wa1","SpaceX Production Machines",[120,20,3,170,15,5,.10]),eac("e2wa2","Delivery Vehicles",[70,18,4,96,13,6,.09,20,30]),eac("e2wa3","Warehouse Systems",[95,16,3,138,11,5,.11]),eac("e2wa4","Packaging Lines",[82,22,4,128,15,7,.10]),eac("e2wa5","Inspection Equipment",[105,19,5,145,14,8,.12,25,40])
];
})();
