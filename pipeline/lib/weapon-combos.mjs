import {getTableField as field} from './lua-static-reader.mjs';

const string=n=>n?.type==='string'?n.value:null;
const entries=n=>n?.type==='table'?n.entries.filter(e=>e.key?.type==='string').map(e=>[e.key.value,e.value]):[];
const keyNode=e=>e.resolvedKey??e.key;
function staticallyClosedTable(node,{stringKeysOnly=false}={}) {
 return node?.type==='table'&&!node.dynamic&&!node.hasUnknownKeys&&node.entries.every(e=>{
  const key=keyNode(e);
  return key==null?!stringKeysOnly:key.type==='string'||(!stringKeysOnly&&['number','boolean'].includes(key.type));
 });
}
function hasUniqueField(node,name) {
 return node.entries.filter(e=>keyNode(e)?.type==='string'&&keyNode(e).value===name).length<=1;
}
function proveCandidateFlags(actions,all,candidates,hasStartAttack) {
 if(!staticallyClosedTable(actions,{stringKeysOnly:true})||actions.entries.length!==all.length)return null;
 const names=new Set(),records=[];
 for(const entry of actions.entries) {
  const key=keyNode(entry);
  if(names.has(key.value))return null;
  names.add(key.value);
  records.push([key.value,entry.value]);
 }
 if(!hasStartAttack&&records.some(([,node])=>{
  if(!staticallyClosedTable(node))return true;
  const input=field(node,'start_input'),chains=field(node,'allowed_chain_actions');
  return input&&input.type!=='nil'&&input.type!=='string'||chains&&chains.type!=='nil'&&!staticallyClosedTable(chains);
 }))return null;
 const provenStarts=records.filter(([,node])=>node?.type==='table'&&string(field(node,'start_input'))==='start_attack');
 const provenFallback=records.filter(([,node])=>node?.type==='table'&&string(field(node,'start_input'))&&['light_attack','heavy_attack'].some(k=>field(field(node,'allowed_chain_actions'),k)));
 const provenCandidates=provenStarts.length?provenStarts:provenFallback;
 if(provenCandidates.length!==candidates.length||provenCandidates.some(([name,node],i)=>name!==candidates[i][0]||node!==candidates[i][1]))return null;
 const included=[],excluded=[];
 for(const candidate of candidates) {
  if(!staticallyClosedTable(candidate[1])||!hasUniqueField(candidate[1],'start_input')||!hasUniqueField(candidate[1],'invalid_start_action_for_stat_calculation'))return null;
  const input=field(candidate[1],'start_input');
  if(input&&input.type!=='nil'&&input.type!=='string')return null;
  const marker=field(candidate[1],'invalid_start_action_for_stat_calculation');
  if(marker&&marker.type!=='nil'&&!(marker.type==='boolean'&&(marker.value===true||marker.value===false)))return null;
  if(marker?.type==='boolean'&&marker.value===true)excluded.push(candidate);
  else included.push(candidate);
 }
 return {included,excluded};
}
// Animation end-event callbacks affect animation cleanup, not action selection.
const conditional=n=>entries(n).some(([key,value])=>(/^(?:chain_validation|action_condition|condition_func)/.test(key)||key==='running_action_state_requirement')&&!(value.type==='boolean'&&value.value===true));

/** Follow only explicit input edges. Never execute conditions or choose branches. */
export function weaponCombos({actions,displayed,file,profiles,textValue,onOrdinaryStart}) {
 const all=entries(actions),result=[];
 const starters=all.filter(([,node])=>string(field(node,'start_input'))==='start_attack');
 const alternatives=all.filter(([,node])=>string(field(node,'start_input'))&&['light_attack','heavy_attack'].some(k=>field(field(node,'allowed_chain_actions'),k)));
 const candidates=starters.length?starters:alternatives;
 if(!candidates.length)return result;
 const names=new Map();
 function labels(node){if(node?.type!=='table')return;const action=string(field(node,'action_name')),label=string(field(node,'display_name'));if(action&&label)names.set(action,textValue(label));for(const [,child] of entries(node))labels(child);for(const e of node.entries.filter(e=>!e.key))labels(e.value);}
 labels(displayed);
 for(const kind of ['light','heavy']) {
  const input=kind+'_attack';
  if(!candidates.some(([,n])=>field(field(n,'allowed_chain_actions'),input)))continue;
  let selected=candidates,excluded=[];
  if(candidates.length>1) {
   const proof=proveCandidateFlags(actions,all,candidates,starters.length>0);
   if(proof?.included.length===1){selected=proof.included;excluded=proof.excluded;}
  }
  const [start,first]=selected[0],combo={id:kind,kind,start,steps:[],loopsTo:null,unknown:null,source:{path:file,line:first.startLine??1}};
  result.push(combo);
  if(selected.length!==1){combo.unknown='CHAIN_START_AMBIGUOUS';continue;}
  if(excluded.length)onOrdinaryStart?.({kind,start,excluded:excluded.map(([name])=>name)});
  let current=start,via=string(field(first,'start_input')),atStart=true;const seen=new Map(),pending=new Set();
  for(;;) {
   const node=field(actions,current);
   if(!node){combo.unknown='CHAIN_TARGET_NOT_FOUND';break;}
   if(node.type!=='table'){combo.unknown='DYNAMIC_VALUE';break;}
   if(field(node,'kind')?.type!=='string'){combo.unknown='DYNAMIC_VALUE';break;}
   if(seen.has(current)){combo.loopsTo=seen.get(current);break;}
   if(pending.has(current)){combo.unknown='CHAIN_CYCLE_WITHOUT_ATTACK';break;}
   pending.add(current);
   // The combo begins inside its declared start action. Entry conditions only
   // affect subsequent transitions (including a later return to this start).
   if(!atStart&&conditional(node)){combo.unknown='CONDITIONAL_CHAIN';break;}
   atStart=false;
   const binding={},bound=profiles(node,file,[],binding),attack=string(field(node,'kind'))==='sweep'||bound.length>0;
   if(attack) {
    seen.set(current,combo.steps.length);pending.clear();
    const unique=bound.length===1&&!binding.unknown;
    combo.steps.push({action:current,input:via,name:names.get(current)??{en:null,zh:null},damageProfile:unique?bound[0]:null,damageProfileUnknown:unique?null:'DAMAGE_PROFILE_BINDING_NOT_FOUND'});
   }
   const chains=field(node,'allowed_chain_actions');
   if(chains&&chains.type!=='table'){combo.unknown='DYNAMIC_VALUE';break;}
   const nextInput=field(chains,input)?input:field(chains,'start_attack')?'start_attack':null;
   if(!nextInput)break;
   const edge=field(chains,nextInput);
   if(edge.type!=='table'){combo.unknown='DYNAMIC_VALUE';break;}
   if(conditional(edge)){combo.unknown='CONDITIONAL_CHAIN';break;}
   const target=string(field(edge,'action_name'));
   if(!target){combo.unknown='DYNAMIC_VALUE';break;}
   current=target;via=nextInput;
  }
 }
 return result;
}
