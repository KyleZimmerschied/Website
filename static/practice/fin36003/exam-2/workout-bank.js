(() => {
const b=window.FIN36003_BANK;
const r=(n,d=2)=>Number(n.toFixed(d));
const money=n=>`${n<0?"−":""}$${Math.abs(n).toFixed(2)}m`;
const table=(heads,rows)=>`<div class="exhibit-wrap"><table class="exhibit"><thead><tr>${heads.map(x=>`<th>${x}</th>`).join("")}</tr></thead><tbody>${rows.map(row=>`<tr>${row.map((x,i)=>`<${i?"td":"th"}>${x}</${i?"td":"th"}>`).join("")}</tr>`).join("")}</tbody></table></div>`;
const pv=(cf,t,rate)=>cf/Math.pow(1+rate,t);
const npv=(cfs,rate)=>cfs.reduce((sum,cf,t)=>sum+pv(cf,t,rate),0);
const annuityFactor=(rate,n)=>(1-Math.pow(1+rate,-n))/rate;
function irr(cfs){let lo=-.9999,hi=10;for(let i=0;i<250;i++){const mid=(lo+hi)/2;if(npv(cfs,mid)>0)lo=mid;else hi=mid;}return (lo+hi)/2;}
function payback(cfs,rate=0){let cumulative=cfs[0];for(let t=1;t<cfs.length;t++){const inflow=pv(cfs[t],t,rate);if(cumulative+inflow>=0)return (t-1)+(-cumulative/inflow);cumulative+=inflow;}return NaN;}

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
  const [equipment,nwc,sunk,life,sales,spill,costs,tax,sale,req]=v,dep=equipment/life,ebit=sales+spill-costs-dep,taxes=ebit*tax,ocf=ebit-taxes+dep,afterSale=sale-(sale-0)*tax,time0=-(equipment+nwc),terminal=ocf+afterSale+nwc,cfs=[time0,...Array(life-1).fill(ocf),terminal],projectNpv=npv(cfs,req);
  return{id,family:"expansion",title:`Expansion-Project FCFF — ${name}`,intro:"Build the project's incremental free cash flows. The feasibility study has already been paid. All dollar amounts are in millions.",exhibit:table(["Assumption","Amount"],[['Equipment and installation',`$${equipment}`],['Feasibility study already completed',`$${sunk}`],['Initial NWC',`$${nwc}`],['Project life',`${life} years`],['Annual product revenue',`$${sales}`],['Annual spillover revenue',`$${spill}`],['Annual cash operating costs',`$${costs}`],['Equipment sale in final year',`$${sale}`],['Tax rate',`${tax*100}%`],['Required return',`${req*100}%`]]),parts:[
    {prompt:"Calculate time-0 project FCFF.",answer:r(time0),tol:.02,unit:"$m",points:2,solution:`Exclude the sunk study. FCFF0=−${equipment}−${nwc}=${money(time0)}.`},
    {prompt:"Calculate annual straight-line depreciation to a zero book value.",answer:r(dep),tol:.02,unit:"$m",points:2,solution:`Depreciation=${equipment}/${life}=${money(dep)} per year.`},
    {prompt:"Calculate annual operating cash flow.",answer:r(ocf),tol:.04,unit:"$m",points:3,solution:`EBIT=${sales}+${spill}−${costs}−${r(dep)}=${r(ebit)}; taxes=${r(taxes)}; OCF=EBIT−Taxes+Depreciation=${money(ocf)}.`},
    {prompt:"Calculate the after-tax equipment sale proceeds.",answer:r(afterSale),tol:.03,unit:"$m",points:2,solution:`With zero book value, after-tax proceeds=${sale}−(${sale}−0)(${tax})=${money(afterSale)}.`},
    {prompt:`Calculate total FCFF in Year ${life}, including NWC recovery.`,answer:r(terminal),tol:.04,unit:"$m",points:2,solution:`Final-year FCFF=${r(ocf)}+${r(afterSale)}+${nwc}=${money(terminal)}.`},
    {prompt:"Calculate project NPV.",answer:r(projectNpv),tol:.12,unit:"$m",points:2,solution:`Discount FCFF at ${(req*100).toFixed(0)}%. NPV=${money(projectNpv)}.`},
    {type:"text",prompt:"Explain why the feasibility study is excluded and why interest expense is not subtracted from OCF.",points:2,solution:"The completed study is sunk because it is unchanged by the decision. Interest is excluded because FCFF is measured before financing payments; financing costs enter through the required return.",rubric:["Identifies the study as sunk","Connects interest exclusion to FCFF and the discount rate"]}
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
  const [buyA,costA,lifeA,buyB,costB,lifeB,req]=v,pvA=buyA+costA*annuityFactor(req,lifeA),pvB=buyB+costB*annuityFactor(req,lifeB),eacA=pvA/annuityFactor(req,lifeA),eacB=pvB/annuityFactor(req,lifeB),choice=eacA<eacB?"Machine A":"Machine B";
  return{id,family:"eac",title:`Equivalent Annual Cost — ${name}`,intro:"The machines provide the same service and can be replaced indefinitely. Ignore taxes and salvage value. All dollar amounts are in millions.",exhibit:table(["Input","Machine A","Machine B"],[['Purchase cost',`$${buyA}`,`$${buyB}`],['Annual operating cost',`$${costA}`,`$${costB}`],['Useful life',`${lifeA} years`,`${lifeB} years`],['Required return',`${req*100}%`,`${req*100}%`]]),parts:[
    {prompt:"Calculate the present cost of Machine A.",answer:r(pvA),tol:.06,unit:"$m",points:3,solution:`Present cost A=${buyA}+PV of ${lifeA} annual $${costA} costs=${money(pvA)}.`},
    {prompt:"Calculate the present cost of Machine B.",answer:r(pvB),tol:.06,unit:"$m",points:3,solution:`Present cost B=${buyB}+PV of ${lifeB} annual $${costB} costs=${money(pvB)}.`},
    {prompt:"Calculate EAC for Machine A.",answer:r(eacA),tol:.05,unit:"$m/year",points:3,solution:`Convert present cost ${r(pvA)} over ${lifeA} years at ${(req*100).toFixed(0)}% into an annuity: EAC A=${money(eacA)} per year.`},
    {prompt:"Calculate EAC for Machine B.",answer:r(eacB),tol:.05,unit:"$m/year",points:3,solution:`Convert present cost ${r(pvB)} over ${lifeB} years at ${(req*100).toFixed(0)}% into an annuity: EAC B=${money(eacB)} per year.`},
    {type:"text",prompt:"Select the machine and explain why comparing total or present costs alone can be misleading.",points:3,solution:`Select ${choice}, which has the lower EAC. Total and present costs cover different useful lives, while EAC places both alternatives on the same annual basis.`,rubric:[`Selects ${choice}`,"Uses the lower-EAC rule","Explains the unequal-life problem"]}
  ]};
}

b.workoutFamilies=[
 {id:"valuation",label:"Bond and Stock Valuation"},
 {id:"criteria",label:"Investment Criteria"},
 {id:"expansion",label:"Expansion-Project FCFF"},
 {id:"project_analysis",label:"Break-Even and Operating Leverage"},
 {id:"replacement",label:"Replacement-Project FCFF"},
 {id:"eac",label:"Equivalent Annual Cost"}
];
b.workouts=[
 valuation("e2wv1","Ozark Retail",[1.20,.09,3,.04,.10]),valuation("e2wv2","Natural State Foods",[.85,.12,2,.05,.11]),valuation("e2wv3","Delta Logistics",[1.60,.08,3,.035,.09]),valuation("e2wv4","Buffalo Consumer",[.72,.15,2,.045,.105]),valuation("e2wv5","Summit Stores",[1.05,.10,4,.04,.095]),
 criteria("e2wc1","Fulfillment Upgrade",[180,[55,65,70,75],.11,3]),criteria("e2wc2","Distribution Automation",[150,[50,55,60,65],.10,3]),criteria("e2wc3","Regional Warehouse",[220,[65,75,85,90],.12,3]),criteria("e2wc4","Packaging Line",[125,[40,45,50,55],.09,3]),criteria("e2wc5","Delivery Platform",[200,[52,66,78,92],.13,3]),
 expansion("e2we1","Starlink Terminal Line",[310,25,5,5,220,20,138,.25,40,.12]),expansion("e2we2","Ozark Components",[240,18,4,4,175,12,102,.25,28,.11]),expansion("e2we3","Delta Assembly",[360,30,6,6,270,18,165,.24,48,.10]),expansion("e2we4","Buffalo Electronics",[200,16,3,5,150,10,91,.25,25,.12]),expansion("e2we5","Summit Production",[280,22,5,4,205,15,122,.25,36,.11]),
 projectAnalysis("e2wp1","Specialized Starlink Cell",[80,4,200000,600,350,20,.10]),projectAnalysis("e2wp2","Ozark Sensor Cell",[72,4,180000,550,325,18,.09]),projectAnalysis("e2wp3","Delta Router Cell",[90,5,240000,500,300,24,.11]),projectAnalysis("e2wp4","Buffalo Antenna Cell",[60,3,160000,640,390,16,.10]),projectAnalysis("e2wp5","Summit Receiver Cell",[100,5,260000,700,430,25,.12]),
 replacement("e2wr1","Starlink Assembly Equipment",[140,40,0,10,50,35,0,4,20,0,.25,.12]),replacement("e2wr2","Ozark Packaging Equipment",[110,24,0,8,36,27.5,0,4,16,0,.25,.10]),replacement("e2wr3","Delta Robotics",[175,45,0,12,62,35,0,5,25,0,.24,.11]),replacement("e2wr4","Buffalo Test Equipment",[96,20,0,6,30,24,0,4,12,0,.25,.09]),replacement("e2wr5","Summit Sorting System",[150,35,0,9,48,30,0,5,22,0,.25,.12]),
 eac("e2wa1","SpaceX Production Machines",[120,20,3,170,15,5,.10]),eac("e2wa2","Delivery Vehicles",[70,18,4,96,13,6,.09]),eac("e2wa3","Warehouse Systems",[95,16,3,138,11,5,.11]),eac("e2wa4","Packaging Lines",[82,22,4,128,15,7,.10]),eac("e2wa5","Inspection Equipment",[105,19,5,145,14,8,.12])
];
})();
