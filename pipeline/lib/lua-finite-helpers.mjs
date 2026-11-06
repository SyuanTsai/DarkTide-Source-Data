import {createHash} from 'node:crypto';
import {tokenizeLua,getTableField as field,getTableArray as array} from './lua-static-reader.mjs';

// Token fingerprints of the audited source bodies. Formatting/comments may vary;
// any semantic token change revokes evaluation. The matching Lua fixtures retain
// the complete finite loops and formulas for review (no Lua code is executed).
const BODIES={
 create_scale:['scripts/utilities/recoil_template.lua','5bc5cc20422d16c0530a1367e337cd1730d4fcd9d07c7626affac4491d863d2b'],
 generate_offset_range:['scripts/utilities/recoil_template.lua','59366797c7d7415143308861e6509434c3cd8b48344003fad87320da9dd8d401'],
 generate_action_overrides:['scripts/settings/equipment/weapon_templates/base_template_settings.lua','c36e5023ed975322c845645bbb1b7221fcb6831e3fe331595e9be4c79eadd1b8']
};
const number=value=>({type:'number',value});
const table=entries=>({type:'table',entries});
const named=obj=>table(Object.entries(obj).map(([key,value])=>({key:{type:'string',value:key},value})));
const list=values=>table(values.map(value=>({key:null,value})));
const bounded=n=>Number.isInteger(n)&&n>=0&&n<=10000;

export function evaluateFiniteHelper(call,fn,resolve) {
 if(fn?.type!=='function')return null;
 const signature=createHash('sha256').update(JSON.stringify(tokenizeLua(fn.raw).map(t=>[t.type,t.value]))).digest('hex');
 const name=Object.keys(BODIES).find(k=>BODIES[k][0]===fn._file&&BODIES[k][1]===signature);
 if(!name)return null;
 const args=call.args.map(resolve);
 const scalar=n=>{n=resolve(n);return n?.type==='number'&&Number.isFinite(n.value)?n.value:null;};
 let result;
 if(name==='create_scale') {
  if(args.length!==1||args[0]?.type!=='table'||args[0].dynamic)return null;
  const rows=array(args[0]);if(!rows.length||rows.length>10000)return null;
  const pitch=[],yaw=[];let currentIndex=0,currentPitch=0,currentYaw=0;
  for(const row of rows) {
   const pair=array(resolve(row)),index=scalar(pair[0]),values=array(resolve(pair[1]));
   const p=scalar(values[0]),y=scalar(values[1]);
   if(pair.length!==2||values.length!==2||p===null||y===null||!bounded(index)||index<=currentIndex)return null;
   const steps=index-currentIndex;
   for(let j=1;j<=steps;j++) {
    pitch.push(number(currentPitch*(1-j/steps)+p*(j/steps)));
    yaw.push(number(currentYaw*(1-j/steps)+y*(j/steps)));
   }
   currentIndex=index;currentPitch=p;currentYaw=y;
  }
  result=named({pitch:list(pitch),yaw:list(yaw)});
 } else if(name==='generate_offset_range') {
  if(args.length!==5)return null;
  const [shots,pitch,yaw,distance]=args.slice(0,4).map(scalar);
  const scale=resolve(args[4]),ps=array(resolve(field(scale,'pitch'))),ys=array(resolve(field(scale,'yaw')));
  if(!bounded(shots)||[pitch,yaw,distance].includes(null)||ps.length<shots||ys.length<shots)return null;
  const out=[];
  for(let i=0;i<shots;i++) {
   const p=scalar(ps[i]),y=scalar(ys[i]);if(p===null||y===null)return null;
   const endpoint=v=>named({lerp_basic:number(v*(1+distance)),lerp_perfect:number(v*(1-distance))});
   out.push(named({pitch:endpoint(pitch*p),yaw:endpoint(yaw*y)}));
  }
  result=list(out);
 } else {
  if(args[0]?.type!=='table'||args[0].dynamic||args.length%2!==1||args.length>10001)return null;
  result=structuredClone(args[0]);
  const staticValue=(n,seen=new Set())=>{n=resolve(n);if(!n||seen.has(n))return false;if(['number','string','boolean','nil'].includes(n.type))return true;if(n.type!=='table'||n.dynamic)return false;return n.entries.every(e=>(e.key===null||staticValue(e.key,new Set([...seen,n])))&&staticValue(e.value,new Set([...seen,n])));};
  for(let i=1;i<args.length;i+=2) {
   const key=resolve(args[i]),value=resolve(args[i+1]);
   if(!['string','number'].includes(key?.type)||!staticValue(value))return null;
   const entry=result.entries.find(e=>e.key?.value===key.value);
   if(value?.type==='nil'||value?.type==='string'&&value.value==='__NIL_VALUE__'){if(entry)result.entries.splice(result.entries.indexOf(entry),1);continue;}
   if(entry)entry.value=structuredClone(value);else result.entries.push({key:structuredClone(key),value:structuredClone(value)});
  }
 }
 const sources=[{path:fn._file,line:fn.startLine},{path:call._file,line:call.startLine}];
 const seen=new Set();
 const trace=n=>{n=resolve(n);if(!n||seen.has(n))return;seen.add(n);sources.push(...(n._sources??[]));if(n.startLine)sources.push({path:n._file??call._file,line:n.startLine});if(n.type==='table')for(const e of n.entries)trace(e.value);};
 args.forEach(trace);
 const locate=n=>{n._file=name==='generate_action_overrides'?(n._file??call._file):fn._file;n.startLine=name==='generate_action_overrides'?(n.startLine??call.startLine):fn.startLine;n._sources=sources;if(n.type==='table')for(const e of n.entries)locate(e.value);};
 locate(result);return result;
}
