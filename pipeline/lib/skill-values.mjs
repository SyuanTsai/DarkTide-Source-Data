import { manipulate } from './skill-lua.mjs';

/** Resolve display params exactly as the UI's static subset allows. */
export function skillParams(r,definition,id,problems,trace) {
  const params={};
  function param(key,raw,suffix='') {
    const config=r.resolve(raw,trace);if(config?.type!=='table') return;
    let name=String(key)+suffix;
    if(!/^[a-z][a-z0-9_]*$/.test(name)) name=name.toLowerCase();
    if(!/^[a-z][a-z0-9_]*$/.test(name)) {problems.push({code:'PARAM_NAME',id,param:name,message:`無效 param 名稱 ${name}`});return;}
    const get=(n,k)=>r.get(n,k,trace),scalar=n=>r.scalar(n,trace);
    const format=scalar(get(config,'format_type')),finder=get(config,'find_value');
    let valueNode=get(config,'value'),tier=false,reason;
    if(finder) {
      const type=scalar(get(finder,'find_value_type'));
      if(['damage','base_damage','armor_modifier'].includes(type)) reason=`${type} 需要遊戲傷害計算`;
      else if(type==='buff_template') {
        const templates=r.returned('scripts/settings/buff/buff_templates.lua');
        const template=get(templates,scalar(get(finder,'buff_template_name')));
        const path=r.entries(get(finder,'path')).map(([,v])=>scalar(v));
        if(path.includes('lerped_stat_buffs')) reason='lerped_stat_buffs 只有範圍，無最終值';
        const walk=base=>{for(const key of path) base=get(base,key);return base;};
        tier=scalar(get(finder,'tier'))===true;
        if(!path.length) reason='buff_template path 無法解析';
        if(tier) valueNode=r.entries(get(template,'talent_overrides')).map(([,v])=>walk(v));
        else valueNode=walk(template);
      } else valueNode=get(finder,'value');
    }
    const manipulation=get(config,'value_manipulation');
    function display(n) {
      let v=scalar(n);
      if(v===undefined || v===null) {reason ??=r.resolve(n)?.reason ?? '無法靜態解析參照或值';return undefined;}
      if(format==='number' || format==='percentage') {
        if(typeof v!=='number') {reason ??='非數值';return undefined;}
        if(manipulation && scalar(manipulation)!==null) v=manipulate(manipulation,v);
        else if(format==='percentage') v*=100;
        if(!Number.isFinite(v)) {reason ??='value_manipulation 不符合單一 return 靜態運算規則';return undefined;}
        return Number(v.toPrecision(12));
      }
      return ['string','number','boolean'].includes(typeof v)?v:undefined;
    }
    let value;
    if(!reason) {
      if(tier) {if(!valueNode.length) reason='talent_overrides 無法解析';else {value=valueNode.map(display);if(value.some(v=>v===undefined)) reason ??='tier 無法解析';}}
      else value=display(valueNode);
    }
    if(reason || value===undefined) {
      params[name]={value:null,unknown:'DYNAMIC_VALUE'};
      problems.push({code:'UNRESOLVED_VALUE',id,param:name,message:reason ?? '非靜態值'});
    } else params[name]={value,...(format==='percentage'?{unit:'percent'}:{})};
  }
  for(const [key,v] of r.entries(r.get(definition,'format_values'))) param(key,v);
  for(const [index,table] of r.entries(r.get(definition,'format_values_per_index'))) for(const [key,v] of r.entries(table)) param(key,v,`_${index}`);
  return params;
}
