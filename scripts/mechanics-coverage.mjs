import { readFileSync, writeFileSync } from 'node:fs';
import { pathToFileURL } from 'node:url';
import { stringifyCanonical } from '../pipeline/lib/canonical-json.mjs';

export const GROUPS=['F1-skills','F1-blessings','B1-skills','B1-blessings','B2-skills','B2-blessings','F3-skills','F3-blessings','W1-skills','A1-skills','D1-skills'];
const read=p=>JSON.parse(readFileSync(p,'utf8'));
// Only floating-point arithmetic noise is tolerated; this is not display rounding.
const approx=(a,b)=>Math.abs(a-b)<=Number.EPSILON*Math.max(1,Math.abs(a),Math.abs(b))*16;
const numbers=s=>[
 ...[...s.matchAll(/(?<![A-Za-z_])\d+(?:\.\d+)?/g)].map(m=>({text:m[0],value:Number(m[0]),offset:m.index})),
 ...[...s.matchAll(/([一二兩三四五六七八九十]+)(?=層|次|秒|枚|顆|倍)/g)].map(m=>{const v={一:1,二:2,兩:2,三:3,四:4,五:5,六:6,七:7,八:8,九:9};const [a,b]=m[0].split('十');return {text:m[0],value:m[0].includes('十')?(a?v[a]:1)*10+(b?v[b]:0):v[m[0]],offset:m.index};})
].sort((a,b)=>a.offset-b.offset);
function allMechanics(item){return [...Object.entries(item?.values.mechanics??{}).map(([k,v])=>({key:k,pointer:'/mechanics/'+k,...v})),...(item?.values.tiers??[]).flatMap((t,i)=>Object.entries(t.mechanics??{}).map(([k,v])=>({key:k,pointer:`/tiers/${i}/mechanics/${k}`,...v})))];}
function fieldPaths(x,out=[]){if(!x||typeof x!=='object')return out;for(const [k,v] of Object.entries(x)){if(['field','path'].includes(k)&&typeof v==='string'&&v.startsWith('BuffTemplates.'))out.push('BuffTemplates.'+v.split('BuffTemplates.').at(-1));else if(typeof v==='object')fieldPaths(v,out);}return out;}
function sourceConstants(x,out=[]){if(!x||typeof x!=='object')return out;const field=x.field??x.path;if(typeof x.value==='number'&&typeof field==='string'&&/^(BuffTemplates|buffs)\./.test(field))out.push({field,value:x.value});for(const v of Object.values(x))if(v&&typeof v==='object')sourceConstants(v,out);return out;}

/** This is an acceptance checker, not an extractor. Inventory values never
 * enter production values. Every match records its exact emitted pointer. */
export function coverage(inventory,extracts){
 const items=inventory.items.filter(x=>x.recoverableByFixedScript===true&&GROUPS.includes(x.groupId)).map(x=>{
  const item=extracts[x.category].items.find(i=>i.id===x.newId),all=allMechanics(item),used=new Set(),reasons=[],checks=[];
  const paths=[...new Set([...fieldPaths(x.proposedValue),...(x.sourceEvidence??[]).map(e=>e.fieldPath).filter(p=>p?.startsWith('BuffTemplates.'))])];
  const templates=[...new Set([...paths.map(p=>p.split('.')[1]),...[...(x.linkPath??'').matchAll(/BuffTemplates\.([a-z0-9_]+)/g)].map(m=>m[1])])];
  const group=x.groupId.split('-')[0];
  const relevant=all.filter(p=>!templates.length||templates.some(t=>p.key.split('.')[1]===t)||group==='W1'&&p.key.startsWith('ability.')||group==='D1'&&/^(area_buff|ability)\./.test(p.key)||group==='F1'&&/^stat_rule\.(distance|power)\./.test(p.key));
  const select=(pred)=>{const found=relevant.filter(p=>p.value!==null&&pred(p));found.forEach(p=>used.add(p.pointer));return found;};
  // A source field identifies the exact template/override path, not an
  // unrelated equal-valued scalar. Retain tier matches individually.
  for(const path of paths){const key='buff.'+path.slice('BuffTemplates.'.length);const found=all.filter(p=>p.value!==null&&(p.key===key||p.key===key.replace(/^(buff\.[^.]+)\./,'$1.override.')));if(found.length)found.forEach(p=>used.add(p.pointer));}
  let rules=[];
  if(group==='F1')rules=select(p=>p.key.startsWith('stat_rule.')&&(p.key.endsWith('.aggregation')||p.key.endsWith('rounding')||p.key.endsWith('.order')||p.key.endsWith('.curve')||p.key.endsWith('.maximum')));
  if(group==='F3')rules=select(p=>p.key.startsWith('finesse.')&&p.value==='finesse_bonus');
  if(group==='A1')rules=select(p=>p.key.startsWith('ammo.')&&p.key.endsWith('.rounding')&&p.value==='floor');
  if(group==='B2'){
   const p=x.proposedValue??{};
   if(p.refresh)rules=select(v=>v.key.endsWith('.refresh')&&['restart_shared_timer','restart_proc_active_window'].includes(v.value));
   else if(p.clearOnMissedSweep)rules=select(v=>v.key.endsWith('.clear_on_missed_sweep')&&v.value===true);
   else if(p.refreshOnSuccessfulSweep)rules=select(v=>v.key.endsWith('.refresh_on_successful_sweep')&&v.value===true);
   else if(p.timerStartsAt)rules=select(v=>v.key.endsWith('.timer_starts_at')&&v.value==='last_hit');
   else if(p.procEffectStacksPerInstance||p.procEffectAppliedOnce)rules=select(v=>v.key.endsWith('.trigger_count_multiplies_effect')&&v.value===false||v.key.endsWith('.max_stacks')&&v.value===1);
   else rules=select(v=>v.key.endsWith('.max_stacks')&&v.value===1);
  }
  if(group==='D1'){
   if(x.oldText.includes('離開'))rules=select(p=>p.key==='area_buff.drone.remove_on_exit'&&p.value===true);
   else if(x.oldText.includes('可使用一次'))rules=select(p=>p.key.startsWith('ability.')&&p.key.endsWith('.max_charges')&&p.value===1);
   else if(x.oldText.includes('恢復以缺少'))rules=select(p=>p.key==='area_buff.drone.recovery_clamped'&&p.value===true);
   else if(x.newId.endsWith(':broker_ability_stimm_field'))rules=select(p=>p.key==='area_buff.stimm_field.nominal_maximum'&&p.value===40);
   else if(x.oldText.includes('兩個升級')){
    const names=['toughness_damage_taken_multiplier','revive_speed_modifier','attack_speed','melee_attack_speed','melee_damage'];
    rules=select(p=>p.key.startsWith('buff.adamant_drone_talent_')&&names.some(n=>p.key.endsWith('.stat_buffs.'+n)));
    if(new Set(rules.map(p=>p.key.split('.').at(-1))).size!==5)reasons.push('兩個升級的五個 stat 未完整補回');
   }else{const name=x.newId.endsWith(':adamant_drone_buff_talent')?'adamant_drone_talent_buff':'adamant_drone_talent_debuff';rules=select(p=>p.key.startsWith('area_buff.drone.relations.')&&p.key.endsWith('.buff_to_add_special_rule')&&p.value===name);}
  }
  if(group==='W1')rules=select(p=>p.key.startsWith('ability.')&&(p.key.endsWith('max_charges')||p.key.startsWith('ability.brain_burst.')||p.key.startsWith('ability.force_field.')));
  if(group!=='B1'&&!rules.length)reasons.push('缺少此組可證明的 enum／boolean／能力規則');
  const requireRule=(suffix,value,label)=>{if(!select(p=>p.key.endsWith(suffix)&&p.value===value).length)reasons.push('缺少規則：'+label);};
  if(group==='F1'&&x.proposedValue?.finalDamageIsFixedPercent===false){requireRule('.fixed_final_damage_percent',false,'power 的最終傷害不是固定百分比');requireRule('.scaling_stage','power_level_input','power 的消費階段');}
  if(group==='B2'&&x.proposedValue?.resourceCap){requireRule('.resource_cap','ability_max_resource','冷卻恢復受資源上限限制');requireRule('.one_tick_per_update',true,'每次 update 至多一次');requireRule('.tick_comparison','strict_greater','嚴格 timer 比較');}
  if(group==='D1'&&x.proposedValue?.removeOnDestroy)requireRule('.remove_on_destroy',true,'區域銷毀移除');
  if(group==='W1'){
   const p=x.proposedValue??{};
   if(p.consume){requireRule('.base_charges_per_use',1,'標準投擲基礎消耗');requireRule('.charge_use_rule','clamp_to_ability_cost_limits','充能消耗限制');}
   if(p.paymentRequires)requireRule('.attack_requires',p.paymentRequires,'攻擊反噬付款條件');
   if(p.damageProfile)requireRule('.damage_profile',p.damageProfile,'動作綁定的 damage profile');
   if(p.targetLockStagger){requireRule('.lock_comparison','strict_greater','鎖定嚴格大於門檻');requireRule('.lock_once_per_target',true,'每目標一次鎖定');}
   if(p.earlyEnd)requireRule('.early_end','health_depleted','盾耐久耗盡提早結束');
   if(p.scope?.includes('盾'))requireRule('.scope','shield_health','盾本身耐久');
  }
  const constantChecks=sourceConstants(x.proposedValue).map(expected=>{
   let field=expected.field,key,pointerPrefix='';
   if(field.startsWith('BuffTemplates.'))key='buff.'+field.split('BuffTemplates.').at(-1);
   else {const [,name,tier,...path]=field.split('.');key='buff.'+name+'.override.'+path.join('.');pointerPrefix=`/tiers/${Number(tier)-1}/mechanics/`;}
   const found=all.filter(p=>(p.key===key||p.key===key.replace(/^(buff\.[^.]+)\./,'$1.override.'))&&(!pointerPrefix||p.pointer.startsWith(pointerPrefix))&&typeof p.value==='number'&&approx(p.value,expected.value));
   found.forEach(p=>used.add(p.pointer));if(!found.length)reasons.push('來源常數未匹配：'+expected.field+' = '+expected.value);
   return {...expected,pointers:found.map(p=>p.pointer),status:found.length?'matched':'missing'};
  });
  // Explicit inventory editorial annotations and example-kind entries mark
  // hypothetical bases, other bonuses, elapsed inputs and calculated outputs.
  // Their actual template constants are still checked by exact source fields.
  const example=x.kind==='example'||Boolean(x.editorialComponents?.length)||Boolean(x.proposedValue?.editorialInputs)||Boolean(x.proposedValue?.exampleInputs)||Boolean(x.proposedValue?.editorialComponents)||Boolean(x.proposedValue?.sample)||Boolean(x.proposedValue?.editorialSample)||Boolean(x.proposedValue?.initialPerilRatio===0);
  const numeric=n=>{
   const matched=relevant.filter(p=>typeof p.value==='number'&&[p.value,Math.abs(p.value),p.value*100,Math.abs(p.value)*100,...(/stat_buffs|\.raw$|reserve_bonus/.test(p.key)?[1+p.value,1-p.value,Math.abs(1-p.value)*100]:[])].some(v=>approx(v,n.value)));
   if(n.text==='一'&&x.oldText.includes('只計算一次'))matched.push(...relevant.filter(p=>p.key.endsWith('.critical_weakspot_single_bonus')&&p.value===true));
   matched.forEach(p=>used.add(p.pointer));return matched;
  };
  for(const n of numbers(x.oldText)){
   const found=numeric(n);
   const excluded=!found.length&&(example||/並非一律$/.test(x.oldText.slice(0,n.offset)));
   checks.push({...n,status:found.length?'matched':excluded?'editorial':'missing',pointers:found.map(p=>p.pointer),...(excluded?{reason:'盤點明示的假設輸入或算例計算結果；不寫入 values'}:{})});
   if(!found.length&&!excluded)reasons.push('非算例數字未找到：'+n.text);
  }
  if(group==='B1'&&!used.size)reasons.push('來源模板欄位未連結／未解析');
  if(checks.some(n=>n.status==='missing')&&relevant.some(p=>/^stat_rule\.distance\.(near_meters|far_meters)$/.test(p.key)&&p.value===null))reasons.push('有效 DamageSettings 距離欄位由共用靜態 resolver 判為 DYNAMIC_VALUE；不以局部常數作保底');
  if(!item)reasons.push('extract 沒有對應 item');
  if(!used.size)reasons.push('沒有可覆蓋此筆的 mechanics key');
  return {groupId:x.groupId,newId:x.newId,missingIndex:x.missingIndex,oldText:x.oldText,mechanicsKeys:[...used].sort(),status:reasons.length?'notCovered':'covered',reasons:[...new Set(reasons)],numericChecks:checks,sourceConstantChecks:constantChecks,unknownMechanics:relevant.filter(p=>p.value===null).map(p=>({pointer:p.pointer,unknown:p.unknown}))};
 });
 const groups=GROUPS.map(groupId=>{const xs=items.filter(x=>x.groupId===groupId);return {groupId,inventory:xs.length,covered:xs.filter(x=>x.status==='covered').length,notCovered:xs.filter(x=>x.status==='notCovered').length};});
 return {sourceCommit:extracts.skills.sourceCommit,groups,items};
}
if(process.argv[1]&&import.meta.url===pathToFileURL(process.argv[1]).href){
 const [inventoryPath,extractDir,output]=process.argv.slice(2);if(!output)throw new Error('Usage: mechanics-coverage.mjs inventory.json extract-dir output.json');
 const result=coverage(read(inventoryPath),Object.fromEntries(['skills','blessings'].map(c=>[c,read(`${extractDir}/${c}.json`)])));
 writeFileSync(output,stringifyCanonical(result));
 writeFileSync(output.replace(/\.json$/,'.md'),'# SYP-403 mechanics 覆蓋對照\n\n| 組 | covered | 盤點 | notCovered |\n| --- | ---: | ---: | ---: |\n'+result.groups.map(g=>`| ${g.groupId} | ${g.covered} | ${g.inventory} | ${g.notCovered} |`).join('\n')+'\n\n未覆蓋項目（不以其他欄位的相同數字替代未知來源）：\n\n'+result.items.filter(x=>x.status==='notCovered').map(x=>`- ${x.newId} missing[${x.missingIndex}]：${x.reasons.join('；')}`).join('\n')+'\n\n每個數字的匹配、來源常數核對與算例排除依據見同名 JSON。\n');
 console.log(JSON.stringify(result.groups));
}
