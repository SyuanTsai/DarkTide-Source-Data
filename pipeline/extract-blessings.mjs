import { getTableField as field, getTableArray as array, getTableEntries as entries, tokenizeLua } from './lib/lua-static-reader.mjs';
import { bespokeTraitDefinitions, playerWeaponTemplates, bespokeTraitsForTemplate } from './lib/weapon-inventory.mjs';
import { runExtractCli, itemId, nameFromText } from './lib/extract-output.mjs';
import { StructureError } from './lib/errors.mjs';
import { resolver, str, expression } from './lib/blessing-values.mjs';
import { verifiedTextKeys, sharedTextCandidates } from './lib/blessing-text.mjs';

const SCRIPT = 'pipeline/extract-blessings.mjs@1.0.0';
export function build({reader,text,envelope}) {
  const root='scripts/settings/equipment/weapon_traits/', parser='scripts/utilities/trait_value_parser.lua';
  if(!reader.list(root).length || !reader.exists(parser)) throw new StructureError('blessings','MISSING_STRUCTURE','缺少祝福定義或 trait_value_parser');
  const tokens=tokenizeLua(reader.read(parser)); const at=tokens.findIndex((t,i)=>t.value==='FIND_VALUE_FUNCTIONS' && tokens[i+1]?.value==='=' && tokens[i+2]?.value==='{');
  if(at<0) throw new StructureError('blessings','MISSING_FUNCTIONS','找不到 FIND_VALUE_FUNCTIONS');
  let depth=0,end=at+2; for(;end<tokens.length;end++) { if(tokens[end].value==='{') depth++; else if(tokens[end].value==='}' && --depth===0) break; }
  const names=new Set(tokens.slice(at+3,end).filter((t,i,a)=>t.type==='identifier' && a[i+1]?.value==='=').map(t=>t.value));
  if(!['trait_override','buff_template','rarity_value'].every(x=>names.has(x))) throw new StructureError('blessings','MISSING_FUNCTIONS','FIND_VALUE_FUNCTIONS 缺少必要取值方式');
  const definitions=bespokeTraitDefinitions(reader), weapons=new Map();
  for(const template of playerWeaponTemplates(reader)) for(const trait of bespokeTraitsForTemplate(reader,template)) { if(!weapons.has(trait.traitKey)) weapons.set(trait.traitKey,new Set()); weapons.get(trait.traitKey).add(itemId('weapons',template.name)); }
  const r=resolver(reader), shared=sharedTextCandidates(definitions), items=[], problems=[], excluded=[];
  for(const def of definitions) {
    const key=def.traitKey, id=itemId('blessings',key), ws=weapons.get(key);
    if(!ws?.size) { excluded.push({key,reason:'no-player-weapon'}); continue; }
    const trait=field(r.parsed(def.file).returned,key), buffs=field(trait,'buffs');
    const lengths=entries(buffs).map(e=>array(e.value).length).filter(Boolean); const count=Math.max(0,...lengths);
    if(!count) problems.push({code:'NO_TIERS',message:'找不到 tier',id});
    const tiers=Array.from({length:Math.max(1,Math.min(4,count))},(_,i)=>({tier:i+1,params:{}})), params={}, files=new Map();
    const add=(file,line)=>files.set(`${file}:${line}`,{path:file,line}); add(def.file,def.line);
    for(const entry of entries(field(trait,'format_values'))) {
      if(entry.value?.type!=='table') continue;
      const raw=str(entry.key); if(!raw) continue; const name=raw.toLowerCase();
      if(!/^[a-z][a-z0-9_]*$/.test(name)) { problems.push({code:'PARAM_NAME',message:`無效參數名稱：${raw}`,id}); continue; }
      const config=entry.value, find=field(config,'find_value'), type=str(field(find,'find_value_type')), fmt=str(field(config,'format_type'));
      const varying=type==='trait_override'||type==='rarity_value';
      const run=(tier)=>{
        let result=null, reason='PATH_MISSING', detail='指定的值或路徑不存在';
        if(!find) result=r.deref(field(config,'value'),def.file);
        else if(type==='rarity_value') result=r.walk({node:field(find,'trait_value'),file:def.file},[tier]);
        else if(type==='trait_override'||type==='buff_template') {
          const buff=str(field(find,'buff_template_name')), path=array(field(find,'path')).map(n=>r.enumKey(n,def.file));
          if(buff && path.every(x=>x!==null)) {
            const start=type==='trait_override' ? r.walk({node:buffs,file:def.file},[buff,tier]) : r.buffTemplate(buff);
            if(start?.definition) add(start.definition.path,start.definition.line);
            if(start) result=r.walk(start,path);
            else { reason='TEMPLATE_MISSING'; detail=`BuffTemplates 沒有模板：${buff}`; }
          }
          else { reason='RUNTIME_REFERENCE'; detail='buff 名稱或 enum path 無法靜態解析'; }
        }
        else if(find) { reason='RUNTIME_REFERENCE'; detail=`未知 find_value_type：${type}`; }
        if(result?.node?.type==='unknown') { reason=result.node.reason; detail=result.node.detail; }
        else if(result && !['number','string','boolean'].includes(result.node.type)) {
          reason=result.node.type==='call'?'FUNCTION_GENERATED':result.node.type==='unsupported'?'CONDITIONAL_EXPRESSION':'RUNTIME_REFERENCE';
          detail=result.node.type==='call'?`函式產生的值：${result.node.ref}`:`來源為 ${result.node.type}，需要執行期求值`;
        }
        let value=result?.node?.value;
        if(result && !['number','string','boolean'].includes(result.node.type)) value=undefined;
        if(result && find && result.node.type!=='unknown') add(result.file,result.node.startLine ?? def.line);
        if(typeof value==='number' && (fmt==='number'||fmt==='percentage')) {
          const manipulation=field(config,'value_manipulation');
          value=manipulation ? expression(manipulation,value) : fmt==='percentage' ? value*100 : value;
          if(manipulation && value===null) { reason='DYNAMIC_MANIPULATION'; detail='value_manipulation 不是允許的單一 return 運算式'; }
          if(value!==null && Number.isFinite(value)) value=Number(value.toPrecision(12)); else value=undefined;
        } else if((fmt==='number'||fmt==='percentage') && typeof value!=='number') value=undefined;
        else if((fmt==='string'||fmt==='loc_string') && typeof value!=='string') value=undefined;
        if(value===undefined || value===null) { problems.push({code:'UNRESOLVED_VALUE',message:`[${reason}] 參數 ${name}（tier ${tier}）：${detail}`,id}); return {value:null,unknown:'DYNAMIC_VALUE',...(fmt==='percentage'?{unit:'percent'}:{})}; }
        return {value,...(fmt==='percentage'?{unit:'percent'}:{})};
      };
      if(varying) for(const tier of tiers) tier.params[name]=run(tier.tier); else params[name]=run(1);
    }
    const keys=verifiedTextKeys(text,key,def.file,shared.get(key)), nameKey=keys.name, descKey=keys.description;
    const named=nameFromText(text,nameKey,key); if(named.problem) problems.push({...named.problem,id});
    const description=descKey?text.lookup(descKey):null; if(description?.conflict) problems.push({code:'TEXT_CONFLICT',message:`官方文字衝突：${descKey}`,id});
    items.push({id,key,name:named.name,official:{en:description?.conflict?null:description?.en??null,zh:description?.conflict?null:description?.zh??null},values:{weapons:[...ws].sort(),tiers,params},source:{commit:reader.commit,files:[...files.values()].sort((a,b)=>a.path<b.path?-1:a.path>b.path?1:a.line-b.line),scriptVersion:SCRIPT,text:{batch:envelope.textBatch,keys:{...(nameKey?{name:nameKey}:{}),...(descKey?{description:descKey}:{})}}}});
  }
  return {items,problems,excluded};
}
await runExtractCli({category:'blessings',scriptVersion:SCRIPT,build});
