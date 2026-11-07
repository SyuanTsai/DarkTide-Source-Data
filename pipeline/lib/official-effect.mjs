import { gameDecimals, fixedDisplay } from './effect-format.mjs';

/** Mechanically expand official Chinese using this extract's display values and work-only rules. */
export function expandOfficialEffect(item, textIndex, formats) {
  if(item.official?.zh==null || item.official.zh===item.official.en)return {status:'missing-official',text:null,missing:[]};
  const missing=[];
  const miss=(code,token,detail)=>{missing.push({code,token,...(detail?{detail}:{})});};
  if(!item.official.zh.trim())miss('EMPTY_OFFICIAL','official.zh');
  const clean=text=>text.replace(/\{#color\(\s*\d+\s*,\s*\d+\s*,\s*\d+(?:\s*,\s*\d+)?\s*\)\}/g,'').replaceAll('{#reset()}','');
  function localized(key) {
    if(textIndex?.batch!==item.source?.text?.batch) {miss('TEXT_BATCH',key);return null;}
    if(typeof key!=='string') {miss('LOCALIZATION_MISSING',String(key));return null;}
    const entry=textIndex.lookup(key);
    if(!entry || entry.conflict || typeof entry.zh!=='string') {miss('LOCALIZATION_MISSING',key);return null;}
    return entry.zh;
  }
  function render(param,rule,token,position) {
    if(!param || param.value===null || param.unknown || param.value===undefined) {miss('VALUE_MISSING',token);return null;}
    if(!rule || rule.issue || rule.valueSpace!=='display' || !['number','percentage','loc_string','string','default','value'].includes(rule.type) ||
      typeof rule.prefix!=='string' || typeof rule.suffix!=='string') {miss('FORMAT_UNKNOWN',token,rule?.issue);return null;}
    if(Array.isArray(param.value)) {
      if(!rule.pointTiers || !param.value.length || !Number.isInteger(item.values.maxPoints) || item.values.maxPoints<1 || item.values.maxPoints>100) {miss('DYNAMIC_TIER',token);return null;}
      const ranks=Array.from({length:item.values.maxPoints},(_,n)=>render({value:param.value[Math.min(n,param.value.length-1)]},{...rule,pointTiers:false},token,Math.min(n,param.value.length-1)));
      return ranks.some(v=>v===null)?null:ranks.every(v=>v===ranks[0])?ranks[0]:ranks.join('／');
    }
    let value=param.value,output;
    if(rule.type==='number' || rule.type==='percentage') {
      const decimals=rule.numDecimals===null?((Array.isArray(rule.displayDecimals)?rule.displayDecimals[position]:rule.displayDecimals) ?? gameDecimals(value)):rule.numDecimals;
      if(typeof value!=='number' || !Number.isFinite(value) || !Number.isInteger(decimals) || decimals<0 || decimals>20) {miss('FORMAT_UNKNOWN',token);return null;}
      output=fixedDisplay(value,decimals)+(rule.type==='percentage'?'%':'');
    } else if(rule.type==='loc_string') {
      const raw=localized(value);if(raw===null)return null;
      // The game's loc_string call does not receive the outer format table.
      output=clean(raw);
    } else if(rule.type==='string') {
      if(typeof value!=='string') {miss('FORMAT_UNKNOWN',token);return null;}output=value;
    } else {
      if(!['string','number','boolean'].includes(typeof value)) {miss('FORMAT_UNKNOWN',token);return null;}output=String(value);
    }
    return rule.prefix+output+rule.suffix;
  }
  function expand(raw,index) {
    return clean(raw).replace(/\{([A-Za-z_][A-Za-z0-9_]*):%s\}/g,(marker,token)=>{
      const suffix=index!==undefined && formats?.perIndex?.includes(index)?`_${index}`:'';
      const name=token.toLowerCase()+suffix;
      const rule=formats?.params?.[name];
      if(rule?.token!==undefined && rule.token!==token) {miss('VALUE_MISSING',token);return marker;}
      let rendered;
      if(Object.hasOwn(item.values?.params??{},name))rendered=render(item.values.params[name],rule,token);
      else if(Array.isArray(item.values?.tiers) && item.values.tiers.length) {
        const values=[...item.values.tiers].sort((a,b)=>a.tier-b.tier).map((t,n)=>render(t.params?.[name],rule,`${token}@${t.tier}`,n));
        if(values.every(v=>v!==null))rendered=values.every(v=>v===values[0])?values[0]:values.join('／');
      } else miss('VALUE_MISSING',token);
      return rendered??marker;
    });
  }
  let result;
  if(formats?.descriptions?.length>1) {
    const parts=formats.descriptions.map(d=>localized(d.key));
    if(parts.every(p=>p!==null) && parts.join('\n')===item.official.zh)result=parts.map((p,n)=>expand(p,formats.descriptions[n].index)).join('\n');
    else {miss('DESCRIPTION_MISMATCH','official.zh');result=item.official.zh;}
  } else result=expand(item.official.zh,formats?.descriptions?.[0]?.index);
  for(const marker of result.match(/\{[^}]*\}|%[sdifq]|<[^>]*>/g)??[])miss('RESIDUAL_MARKER',marker);
  if(/[{}]/.test(result) && !missing.some(m=>m.code==='RESIDUAL_MARKER'))miss('RESIDUAL_MARKER',result);
  return {status:missing.length?'incomplete':'complete',text:result,missing};
}

export function effectTaskFor(item,textIndex,formats) {
  const effect=expandOfficialEffect(item,textIndex,formats);
  return effect.status==='complete'?{lockedEffect:effect.text}:{effectTask:'translate-official-en'};
}

export function effectNeedsRefresh(explanation, task) {
  return Object.hasOwn(task,'lockedEffect')
    ? explanation?.effectOrigin !== 'official' || explanation.effect !== task.lockedEffect
    : explanation?.effectOrigin !== 'unofficial-translation';
}
