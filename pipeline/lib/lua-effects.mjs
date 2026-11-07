import {createHash} from 'node:crypto';
import {tokenizeLua} from './lua-static-reader.mjs';
import {finiteHelperName} from './lua-finite-helpers.mjs';

const BUILTINS=new Set(['require','settings','pairs','ipairs','type','select','rawget','unpack','Vector2','Vector3','Vector4','Quaternion','Color','Application.can_get_resource','upairs','string.format','Script.new_map','Script.new_array','Vector3Box','QuaternionBox','bit.bor',...['abs','floor','ceil','round','max','min','rad','degrees_to_radians','lerp'].map(n=>'math.'+n),...['clone','clone_instance','enum','keys','ukeys','unpack','contains','enum_from_array','index_lookup_table'].map(n=>'table.'+n)]);
const MODELED=new Set(['table.merge','table.add_missing','table.append','table.make_unique','table.make_strict','table.set_readonly','table.shallow_copy','table.set','table.array_to_map','table.sort','table.insert','table.remove','table.clear','table.add_mirrored_entry','table.merge_recursive']);
// Audited finite data DSLs already implemented by the registry/inheritance readers.
// A changed token body is never accepted as that DSL. This list does not fold
// numeric results; each consumer still applies its bounded data-only model.
const DATA_HELPERS=new Map([
 [
  "539f5156a3e5a4fc50fcf1feac6a30aa10e712a5d69483f51fcbda5688f79f0b",
  "_create_entry"
 ],
 [
  "098e40150209e9f7bdc047dc06549154d8a3aecf0c1feaa6d432e1450d766b27",
  "_include_talents_definition"
 ],
 [
  "531531badb88f57d09d066ba8815709f8495d2939d5122a7cf77503d8200a392",
  "extract_weapon_tweaks"
 ],
 [
  "902780967d747899f23c82cc5ed27009546bc4292e053c23e15e3f6fbc598e67",
  "_inherit"
 ],
 [
  "342f57a6311a48227489284616bf60edc3813d3dea28e998a4f0cccb93fbf949",
  "_inherit"
 ],
 [
  "66d54909c1e67bc096565f868481abdda5dac7e4ae276d3750737c2a1768c019",
  "_add_template_entries"
 ],
 [
  "bfe6f941dd6093be04e8be7fd2dcb1f7ded3e695804fc300ae3b42b71a9529a6",
  "_require_templates"
 ],
 [
  "a5da512fbace8bdc505a187ae304af03ffb22901623545350b09465ef026fd86",
  "populate_stimm_field_syringe_buff_variants"
 ],
 [
  "972db52eaa4fc0fe7691cfc36952d79dca35952809b665feb19d27f33005fb10",
  "add_missing"
 ],
 [
  "945a1136cae51d0f3c754a95c5987af0574486f64c1e73b3a85f8c21316fdc3c",
  "update_hierarchy_entry"
 ],
 [
  "824db31001e1ff1065b5320dc7e82e9ab7604b86ab6aae5945fb64adcac3b19a",
  "_generate_stimm_talent"
 ],
 [
  "1d517341759d090216dcf5ea7f2eead60e2ce1ad1337478879d455a7adc0386b",
  "_include_ability_definition"
 ],
 [
  "9ed67d457002432b09643d2479744a6290b0de93d42cf86e298534e7968d0d4e",
  "_add_lunge_templates"
 ],
 [
  "d97b56deb0c73cf89588a6c69e2c226b41a1e41f3cc3384002b1eca178e291f3",
  "_create_reload_template_entry"
 ],
 [
  "3d802c01a5b40a0d03df2d680975cdd537d1b98e2ef88015b506669c2ba5a8b3",
  "_create_effect_template_entry"
 ],
 [
  "a161505bc52e994f2e36cdaf5b57a3c262a835421ad3528cf754279b833f9920",
  "_extract_projectile_locomotion_templates"
 ],
 [
  "fc4135ded455a712b9c1755c6f0a94fa7fbf7d1fc4e282ad8fb0c5b3ebc4240f",
  "_require_ability_templates"
 ]
]);
const signature=fn=>createHash('sha256').update(JSON.stringify(tokenizeLua(fn.raw).map(t=>[t.type,t.value]))).digest('hex');
function finiteDataHelper(fn) {
 const sig=signature(fn);
 if(!DATA_HELPERS.has(sig)||!['table','math','pairs','ipairs','upairs','require','type','string'].every(n=>!fn.env?.has(n)))return false;
 const dependencies={
  '531531badb88f57d09d066ba8815709f8495d2939d5122a7cf77503d8200a392':{'create_new':'de475facd063b0e759f246b83a39275696460981a9c1473556b4f42acbd0415f'},
  '902780967d747899f23c82cc5ed27009546bc4292e053c23e15e3f6fbc598e67':{'_inherit':sig},
  '342f57a6311a48227489284616bf60edc3813d3dea28e998a4f0cccb93fbf949':{'_inherit':sig},
 };
 return Object.entries(dependencies[sig]??{}).every(([name,wanted])=>{const dependency=fn.lookup?.(name);return dependency&&signature(dependency)===wanted;});
}
const identity=p=>'@'+p.replace(/\.lua$/,'');
const overlaps=(a,b)=>{a=a.split('.*')[0];b=b.split('.*')[0];return a===b||a.startsWith(b+'.')||b.startsWith(a+'.');};

/** One token-only effect analysis for all readers. Abstract aliases are sets:
 * a conditional assignment joins old/new targets, never chooses a branch.
 * Function bodies are inspected only at a call; local allocations are private,
 * parameters and captured allocations are not. Unknown calls fail closed.
 */
export function analyzeLuaEffects(source,{file='<lua>',imported=()=>null,bindingsIntact=()=>true,pureBindings=new Set()}={}) {
 const t=tokenizeLua(source),functions=new Map(),slots=new Map(),calls=[],bindings=new Map(),models=new Map(),evaluating=new Set(),opaqueReturns=new Set();
 let dirtyFrom=Infinity,attach=null;
 const pathAt=i=>{if(t[i]?.type!=='identifier')return null;const parts=[t[i++].value];let method=false;while(true){if(['.',':'].includes(t[i]?.value)&&t[i+1]?.type==='identifier'){method||=t[i].value===':';parts.push(t[i+1].value);i+=2;}else if(t[i]?.value==='['){const end=close(i,'[',']');parts.push(end===i+2&&['string','number'].includes(t[i+1]?.type)?String(t[i+1].value):'*');i=end+1;}else break;}return {parts,end:i,method};};
 function close(i,open='(',end=')'){let depth=1;while(++i<t.length){if(['string','number'].includes(t[i].type))continue;if(t[i].value===open)depth++;if(t[i].value===end&&!--depth)return i;}return t.length-1;}
 // Snapshot descendant edges before adding copied identities to the graph.
 const indexSlots=()=>{const index=new Map();for(const entry of slots){const key=entry[0];for(let at=key.indexOf('.');at>=0;at=key.indexOf('.',at+1)){const prefix=key.slice(0,at);if(!index.has(prefix))index.set(prefix,[]);index.get(prefix).push(entry);}}return index;};
 const expand=(parts,env)=>{let out=env.get(parts[0])??new Set([parts[0]]);for(const key of parts.slice(1)){const next=new Set();for(const p of out)for(const q of slots.get(p+'.'+key)??[p+'.'+key])next.add(q);out=next;}return out;};
 function fnAt(i,env) {
  const end=luaBlockEnd(t,i);let p=i+1;while(t[p]?.value!=='('&&p<end)p++;
  const stop=close(p),params=t.slice(p+1,stop).filter(x=>x.type==='identifier').map(x=>x.value);
  if(t.slice(i+1,p).some(x=>x.value===':'))params.unshift('self');
  const fn={start:stop+1,end,params,env,raw:'function'+source.slice(t[p].start,t[end].end),_file:file,type:'function'};
  fn.lookup=path=>{const ids=expand(path.split('.'),env);return ids.size===1?resolveFn([...ids][0]):null;};
  const id='!fn:'+file+':'+i;functions.set(id,fn);if(attach)attach(fn);return new Set([id]);
 }
 // Lua logical operators return operands; comparison and arithmetic operators
 // return scalars. Parse their precedence so only possible table results flow.
 const precedence={or:1,and:2,'<':3,'>':3,'<=':3,'>=':3,'~=':3,'==':3,'..':4,'+':5,'-':5,'*':6,'/':6,'%':6,'^':8};
 function expression(i,min=1) {
  let value,end;
  if(['not','#','-'].includes(t[i]?.value)) {
   const unary=expression(i+1,7);value=()=>new Set();end=unary.end;
  } else {value=env=>atomAt(i,env);end=atomEnd(i);}
  while(precedence[t[end]?.value]>=min) {
   const op=t[end].value,level=precedence[op],right=expression(end+1,level+(op==='^'||op==='..'?0:1)),left=value;
   value=op==='and'?right.value:op==='or'?env=>new Set([...left(env),...right.value(env)]):()=>new Set();end=right.end;
  }
  return {value,end};
 }
 function valueAt(i,env) {return expression(i).value(env);}
 function atomAt(i,env) {
  if(['string','number'].includes(t[i]?.type))return new Set();
  if(t[i]?.value==='(') {
   const stop=close(i),out=valueAt(i+1,env);
   if(valueEnd(i+1)===stop)return out;
   // An expression we cannot fully evaluate may still select any referenced alias.
   for(let j=i+1;j<stop;j++){const p=pathAt(j);if(p&&t[j-1]?.value!=='.'&&t[j-1]?.value!==':'){expand(p.parts,env).forEach(x=>out.add(x));j=p.end-1;}}
   return out;
  }
  if(t[i]?.value==='function')return fnAt(i,env);
  if(t[i]?.value==='{') {
   const id='!table:'+file+':'+i,stop=close(i,'{','}');let index=0;
   for(let j=i+1;j<stop;j++) {
    let key=String(++index),v=j;
    if(t[j]?.type==='identifier'&&t[j+1]?.value==='='){key=t[j].value;v=j+2;}
    else if(t[j]?.value==='['){const k=close(j,'[',']');key=String(t[j+1]?.value);v=k+2;}
    slots.set(id+'.'+key,valueAt(v,env));
    j=v;if(t[j]?.value==='function')j=luaBlockEnd(t,j);else if(t[j]?.value==='{')j=close(j,'{','}');else {const p=pathAt(j);if(p)j=p.end-1;if(t[j+1]?.value==='(')j=close(j+1);}
    while(j+1<stop&&![';',','].includes(t[j+1].value))j++;
    if([';',','].includes(t[j+1]?.value))j++;
   }
   return new Set([id]);
  }
  const p=pathAt(i);if(!p)return ['or','and'].includes(t[i+1]?.value)?valueAt(i+2,env):new Set();
  if(p.parts.join('.')==='require') {
   const arg=t[p.end]?.value==='('?t[p.end+1]:t[p.end];
   if(arg?.type==='string')return new Set([identity(arg.value)]);
  }
  if(isCall(p.end)) {
   if(['table.clone','table.clone_instance','table.shallow_copy'].includes(p.parts.join('.'))&&expand(p.parts,env).size===1&&expand(p.parts,env).has(p.parts.join('.'))&&bindingsIntact(['table'])) {
    // Deep copies own all descendant tables; shallow copies retain child aliases.
    const id='!table:'+file+':'+i,deep=p.parts.at(-1)!=='shallow_copy',copied=new Map(),descendants=indexSlots();let nextCopy=0;
    const copy=old=>{if(old.startsWith('?')||old.startsWith('!fn:'))return old;if(copied.has(old))return copied.get(old);const fresh=id+':'+(++nextCopy);copied.set(old,fresh);for(const [key,values] of descendants.get(old)??[])slots.set(fresh+key.slice(old.length),new Set([...values].map(v=>deep?copy(v):v)));copied.delete(old);return fresh;};
    const source=valueAt(p.end+1,env);
    for(const old of source){copied.set(old,id);for(const [key,values] of descendants.get(old)??[])slots.set(id+key.slice(old.length),new Set([...values].map(v=>deep?copy(v):v)));}
    return new Set([id]);
   }
   const targets=expand(p.parts,env),out=new Set(),args=p.method?[expand(p.parts.slice(0,-1),env)]:[];let j=p.end+1;
   if(t[p.end]?.value!=='(')args.push(valueAt(p.end,env));
   else while(j<close(p.end)){args.push(valueAt(j,env));j=valueEnd(j);if(t[j]?.value!==',')break;j++;}
   if(targets.size===1&&['table.merge','table.merge_recursive','table.add_missing','table.append'].includes([...targets][0]))return args[0]??new Set();
   for(const id of targets){const fn=resolveFn(id);if(fn&&!evaluating.has(fn)){evaluating.add(fn);try{const r=fn.invoke?fn.invoke(args,new Set()):invoke(fn,args,new Set());r.returned?.forEach(x=>out.add(x));}finally{evaluating.delete(fn);}}}
   // An unmodeled return can alias an argument. Retain every candidate rather
   // than silently treating the result as a private/non-table value.
   if(!out.size) {
    args.forEach(a=>a.forEach(x=>out.add(x)));
    if(!out.size&&[...targets].some(id=>!resolveFn(id)&&!BUILTINS.has(id)&&!MODELED.has(id)))out.add('?call:'+file+':'+i);
   }
   return out;
  }
  return expand(p.parts,env);
 }
 function valueEnd(i) {return expression(i).end;}
 function atomEnd(i) {
  if(['string','number'].includes(t[i]?.type))return i+1;
  if(t[i]?.value==='(')return close(i)+1;
  if(t[i]?.type==='keyword'&&t[i].value==='function')return luaBlockEnd(t,i)+1;
  if(t[i]?.value==='{')return close(i,'{','}')+1;
  const p=pathAt(i);let end=p?.end??i+1;
  if(t[end]?.value==='(')end=close(end)+1;
  else if(t[end]?.value==='{')end=close(end,'{','}')+1;
  else if(t[end]?.type==='string')end++;
  return end;
 }
 function immediate(i,env,accept) {
  const end=luaBlockEnd(t,i);let call=end+1;while(t[call]?.type!=='string'&&t[call]?.value===')')call++;
  if(isCall(call)){const scope=new Map(env);scope.set('!immediate',fnAt(i,env));accept({parts:['!immediate'],end:call},i,scope);}
  return end;
 }
 function resolveFn(id){return functions.get(id)??imported(id);}
 function run(begin,end,env,own=new Set(),inFunction=false,conditional=false,active=new Set(),allocations=new Set()) {
  let impure=false;const shared=new Set(),effects=[],returned=new Set();
  // Only allocations defined here have a sequential data model. A write to
  // any external member revokes the entire external table's binding proof.
  const record=p=>{if(!p.startsWith('!'))p=p.split('.')[0];effects.push(p);if(!p.startsWith('!'))shared.add(p);};
  const write=(p,local)=>{
   const targets=p.length===1?expand(p,env):new Set([...expand(p.slice(0,-1),env)].map(x=>x+'.'+p.at(-1)));
   if(!local) {
    if(!inFunction&&p.length>1&&[...targets].some(target=>[...opaqueReturns].some(id=>overlaps(target,id))))dirtyFrom=0;
    if(inFunction&&(!own.has(p[0])||p.length>1&&(!targets.size||[...targets].some(x=>![...allocations].some(a=>x.startsWith(a+'.'))))))impure=true;
    if(p.length>1||conditional)for(const target of targets)record(target);
    else if(!own.has(p[0]))record(p[0]);
   }
  };
  for(let i=begin;i<end;i++) {
   const token=t[i];
   if(['string','number'].includes(token.type))continue;
   if(token.type==='keyword'&&token.value==='return')valueAt(i+1,env).forEach(x=>returned.add(x));
   if(token.type==='keyword'&&token.value==='function') {
    const p=pathAt(i+1);
    if(p&&t[p.end]?.value==='(') {const ids=fnAt(i,env);if(t[i-1]?.value==='local'){env.set(p.parts[0],ids);own.add(p.parts[0]);}else {write(p.parts,false);if(p.parts.length===1)env.set(p.parts[0],ids);else for(const path of expand(p.parts,env))slots.set(path,ids);}}
    i=immediate(i,env,acceptCall);continue;
   }
   if(token.type==='keyword'&&['if','for','while','repeat','do'].includes(token.value)) {
    const scopeEnv=new Map(env),scopeOwn=new Set(own),loopNames=[];
    if(token.value==='for') {
     let j=i+1;const names=[];
     while(t[j]?.type==='identifier'){names.push(t[j].value);loopNames.push(t[j].value);scopeOwn.add(t[j].value);scopeEnv.set(t[j].value,new Set());j++;if(t[j]?.value!==',')break;j++;}
     if(t[j]?.value==='in'&&['pairs','ipairs','upairs'].includes(t[j+1]?.value)&&t[j+2]?.value==='(') {
      const collection=valueAt(j+3,env),values=new Set();
      for(const id of collection){let found=false;for(const [key,items] of slots)if(key.startsWith(id+'.')&&!key.slice(id.length+1).includes('.')){found=true;items.forEach(x=>values.add(x));}if(!found)values.add(id+'.*');}
      if(names[1])scopeEnv.set(names[1],values);
     }
    }
    const stop=luaBlockEnd(t,i);
    if(inFunction&&token.value==='if') {
     const separators=[];for(let j=i+1;j<stop;j++){if(t[j].type==='keyword'&&['function','if','for','while','repeat','do'].includes(t[j].value)){j=luaBlockEnd(t,j);continue;}if(t[j].type==='keyword'&&['else','elseif'].includes(t[j].value))separators.push(j);}
     const cuts=[i,...separators,stop],outcomes=[];
     if(!separators.some(j=>t[j].value==='else'))outcomes.push(new Map(env));
     for(let j=0;j<cuts.length-1;j++){const branch=new Map(env),r=run(cuts[j]+1,cuts[j+1],branch,new Set(own),true,true,active,allocations);outcomes.push(branch);impure||=r.impure;r.shared.forEach(x=>shared.add(x));effects.push(...r.effects);r.returned?.forEach(x=>returned.add(x));}
     for(const key of env.keys())env.set(key,new Set(outcomes.flatMap(m=>[...(m.get(key)??[])])));
     i=stop;continue;
    }
    const branch=scopeEnv,r=run(i+1,stop,branch,scopeOwn,inFunction,true,active,allocations);
    for(const [key,values] of env)if(!loopNames.includes(key)&&branch.has(key))env.set(key,new Set([...values,...branch.get(key)]));impure||=r.impure;r.shared.forEach(x=>shared.add(x));effects.push(...r.effects);i=stop;continue;
   }
   if(token.value==='{') {const stop=close(i,'{','}');scanExpressions(i+1,stop,env,own,inFunction,conditional,active,acceptCall);i=stop;continue;}
   if(t[i-1]?.value==='.'||t[i-1]?.value===':')continue;
   const p=pathAt(i);if(!p)continue;
   if(t[p.end]?.type==='string'){acceptCall(p,i,env);continue;}
   if(t[p.end]?.value===',') {
    const targets=[p];let j=p.end;
    while(t[j]?.value===','){const next=pathAt(j+1);if(!next)break;targets.push(next);j=next.end;}
    if(t[j]?.value==='=') {
     let rhs=j+1;const values=targets.map(()=>{const value=valueAt(rhs,env);rhs=valueEnd(rhs);if(t[rhs]?.value===',')rhs++;return value;});
     targets.forEach((target,k)=>{const local=t[i-1]?.value==='local';if(local)own.add(target.parts[0]);else write(target.parts,false);if(target.parts.length===1){const prior=env.get(target.parts[0])??new Set([target.parts[0]]);env.set(target.parts[0],conditional&&!local?new Set([...prior,...values[k]]):values[k]);}else for(const id of expand(target.parts.slice(0,-1),env))slots.set(id+'.'+target.parts.at(-1),values[k]);});
     i=j;continue;
    }
   }
   if(t[p.end]?.value==='=') {
    const local=t[i-1]?.value==='local',rhs=valueAt(p.end+1,env);
    if(local)own.add(p.parts[0]);
    if(inFunction) {
     const add=id=>{if(!id.startsWith('!table:'+file+':')||(!Number.isInteger(Number(id.split(':').at(-1)))||Number(id.split(':').at(-1))<begin)||allocations.has(id))return;allocations.add(id);for(const [key,items]of slots)if(key.startsWith(id+'.'))for(const x of items)if(x.startsWith('!table:'))add(x);};rhs.forEach(add);
    }
    if(!local)write(p.parts,false);
    if(p.parts.length===1) {
     const previous=env.get(p.parts[0]);
     env.set(p.parts[0],conditional&&!local&&!inFunction?new Set([...(previous??[p.parts[0]]),...rhs]):rhs);
     if(conditional&&!local)for(const target of env.get(p.parts[0]))record(target);
    } else for(const target of expand(p.parts.slice(0,-1),env)){const key=target+'.'+p.parts.at(-1);slots.set(key,conditional?new Set([...(slots.get(key)??[key]),...rhs]):rhs);}
    // Constructors still need their nested calls visited, but field declarations
    // must not be mistaken for writes to globals.
    if(t[p.end+1]?.value==='function'){i=luaBlockEnd(t,p.end+1);continue;}
    if(t[p.end+1]?.value==='{') {
     const stop=close(p.end+1,'{','}');scanExpressions(p.end+2,stop,env,own,inFunction,conditional,active,acceptCall);i=stop;continue;
    }
    i=p.end;continue;
   }
   if(isCall(p.end))acceptCall(p,i,env);
  }
  function acceptCall(p,i,scope) {
   const targets=expand(p.parts,scope),string=t[p.end]?.type==='string',paren=!string&&t[p.end]?.value==='(',stop=string?p.end:paren?close(p.end):close(p.end,'{','}'),args=p.method?[expand(p.parts.slice(0,-1),scope)]:[];let model=null;let start=p.end+1,depth=0;
   if(!paren)args.push(valueAt(p.end,scope));
   else for(let j=start;j<=stop;j++){if(j===stop||(t[j].value===','&&depth===0)){args.push(valueAt(start,scope));start=j+1;}if(['(','[','{'].includes(t[j].value))depth++;if([')',']','}'].includes(t[j].value))depth--;}
   let safe=targets.size>0;const callShared=new Set(),results=new Set();
   for(const target of targets) {
    if((BUILTINS.has(target)||MODELED.has(target)||pureBindings.has(target))&&bindingsIntact([target.split('.')[0],...(pureBindings.has(target)?['math']:[])])) {
     const index=['table.merge','table.merge_recursive','table.add_missing','table.append','table.make_unique','table.make_strict'].includes(target)?0:mutationArgument(target);
     // Consumers model literal helper names. An aliased callee still writes,
     // but cannot claim that the ordered AST model applied that mutation.
     if(index!==null&&p.parts.join('.')!==target)safe=false;
     if(!inFunction&&index!==null&&[...(args[index]??[])].some(path=>[...opaqueReturns].some(id=>overlaps(path,id))))dirtyFrom=0;
     if(index!==null)for(const path of args[index]??[])if(![...allocations].some(a=>path===a||path.startsWith(a+'.'))){if(inFunction)impure=true;if(inFunction||!path.startsWith('!table:'+file+':'))record(path);}
     if(['table.sort','table.array_to_map'].includes(target)&&args[1]?.size)for(const id of args[1]){const callback=resolveFn(id);if(!callback||invoke(callback,[],active).impure)safe=false;}
     continue;
    }
    const fn=resolveFn(target);
    if(!fn||active.has(fn)){safe=false;continue;}
    if(targets.size===1&&finiteHelperName(fn)&&bindingsIntact(['math','table','MathUtils','rawget','type','select']))continue;
    if(targets.size===1&&finiteDataHelper(fn)&&bindingsIntact(['math','table','pairs','ipairs','upairs','require','type','string'])) {
     const sig=signature(fn);model={definition:sig,kind:DATA_HELPERS.get(sig),file:fn._file};
     if(sig==='531531badb88f57d09d066ba8815709f8495d2939d5122a7cf77503d8200a392')model={...model,argument:1,additionalArguments:[2]};
     if(['972db52eaa4fc0fe7691cfc36952d79dca35952809b665feb19d27f33005fb10','945a1136cae51d0f3c754a95c5987af0574486f64c1e73b3a85f8c21316fdc3c'].includes(sig))model={...model,argument:0};
     if(sig==='a5da512fbace8bdc505a187ae304af03ffb22901623545350b09465ef026fd86')model={...model,argument:0,suffix:'_stimm_field',paths:[['syringe_broker_buff','stat_buffs','corruption_taken_multiplier']]};
     continue;
    }
    // Imported summaries own their token stream and resolve their captured scope.
    const r=fn.invoke?fn.invoke(args,active):invoke(fn,args,active);
    r.returned?.forEach(x=>results.add(x));
    // Generic readers cannot model arbitrary returned aliases. A later write
    // through one must revoke reachable data; merely returning it is pure.
    const visited=new Set(),opaque=id=>{
     if(visited.has(id))return;visited.add(id);
     const allocated=id.startsWith('!table:'+fn._file+':')?Number(id.slice(('!table:'+fn._file+':').length).split('.')[0]):NaN;
     if(!(allocated>=fn.start&&allocated<fn.end))opaqueReturns.add(id);
     for(const [key,values]of slots)if(key.startsWith(id+'.'))values.forEach(opaque);
    };
    r.returned?.forEach(opaque);
    if(r.impure)safe=false;r.shared.forEach(x=>callShared.add(x));
   }
   if(isCall(stop+1)){const next=new Map(scope);next.set('!returned',results);acceptCall({parts:['!returned'],end:stop+1},i,next);}
   if(!inFunction){const name=p.parts.join('.');models.set(name,models.has(name)&&models.get(name)?.definition!==model?.definition?null:model);}
   if(!safe) {
    impure=true;for(const p of callShared)record(p);
    // All tables reachable through arguments may escape an unknown function.
    const seen=new Set();const reachable=p=>{
     if(seen.has(p))return;seen.add(p);
     if(!p.startsWith('!'))record(p);
     // An unknown callee can invoke a callback, retain it, or invoke a
     // callback it returns. Follow its actual effects, not every closure.
     const fn=resolveFn(p);
     if(fn&&!active.has(fn)) {
      const r=fn.invoke?fn.invoke([],active):invoke(fn,[],active);
      r.shared.forEach(record);r.returned?.forEach(reachable);
     }
     for(const [key,values] of slots)if(key.startsWith(p+'.'))for(const v of values)reachable(v);
    };
    args.forEach(a=>a.forEach(reachable));
    if(!inFunction){dirtyFrom=Math.min(dirtyFrom,t[i].start);calls.push({start:t[i].start,end:t[stop].end,name:p.parts.join('.')});}
   }
  }
  return {impure,shared,effects,returned};
 }
 function isCall(i){return t[i]?.value==='('||t[i]?.value==='{'||t[i]?.type==='string';}
 function scanExpressions(begin,end,env,own,inFunction,conditional,active,accept) {
  for(let i=begin;i<end;i++) {
   if(t[i].type==='keyword'&&t[i].value==='function'){i=immediate(i,env,accept);continue;}
   if(t[i-1]?.value==='.'||t[i-1]?.value===':')continue;
   const p=pathAt(i);if(p&&isCall(p.end))accept(p,i,env);
  }
 }
 function invoke(fn,args,active) {const env=new Map(fn.env);fn.params.forEach((p,i)=>env.set(p,args[i]??new Set([p])));return run(fn.start,fn.end,env,new Set(),true,false,new Set([...active,fn]));}
 const result=run(0,t.length-1,bindings);
  const returned=t.findLastIndex(x=>x.value==='return');
 const ret=returned+1;
 const exports=returned<0?new Set():t[ret]?.value==='settings'&&t[ret+1]?.value==='('?valueAt(ret+4,bindings):valueAt(ret,bindings);
 const canonical=p=>{for(const root of exports)if(p===root||p.startsWith(root+'.'))return identity(file)+p.slice(root.length);return p;};
 attach=fn=>{fn.invoke=(args,active)=>{const r=invoke(fn,args,active);for(const p of r.effects){const c=canonical(p);if(c.startsWith('@'))r.shared.add(c);}return r;};};
 for(const fn of functions.values())attach(fn);
 return {dirtyFrom,calls,models,writes:result.effects,bindings,slots,functions,exports,
  functionAt(path){let values=new Set(exports);for(const key of path.split('.').filter(Boolean)){const next=new Set();for(const v of values)for(const x of slots.get(v+'.'+key)??[])next.add(x);values=next;}return values.size===1?functions.get([...values][0]):null;}};
}

/** Preserve table shape/keys for diagnostics while revoking every reachable value. */
export function invalidateReachable(node,{resolve=n=>n,dynamic,seen=new Set(),skip=()=>false}={}) {
 node=resolve(node);if(node?.type!=='table'||seen.has(node)||skip(node))return;seen.add(node);node.dynamic=dynamic;
 for(const e of node.entries){const n=resolve(e.value);if(n?.type==='table'){invalidateReachable(n,{resolve,dynamic,seen,skip});e.value=n;}else if(!['unknown','unsupported'].includes(n?.type))e.value=dynamic;}
}

/** Apply finite helper write summaries to actual AST identities. This is shared
 * by the eager, lazy and skill readers; no caller can retain a stale alias. */
export function applyCallMutations(name,args,{analysis,resolve=n=>n,field,entries,dynamic,capture,handled=[]}) {
 const model=analysis?.models?.get(name),index=model?.argument??mutationArgument(name);
 const captured={_create_entry:'templates',_include_talents_definition:'talents',_include_ability_definition:'player_abilities',_add_lunge_templates:'lunge_templates',_add_template_entries:'explosion_templates',_require_templates:'projectile_templates',_create_reload_template_entry:'reload_templates',_create_effect_template_entry:'effect_templates',_extract_projectile_locomotion_templates:'projectile_locomotion_templates',_require_ability_templates:'ability_templates',_generate_stimm_talent:'talent_settings.broker_stimm'};
 if(model&&capture&&captured[model.kind]&&!handled.includes(model.kind))invalidateReachable(capture(captured[model.kind],model.file),{resolve,dynamic});
 if(index===null||index===undefined)return;
 for(const extra of model?.additionalArguments??[])invalidateReachable(args[extra],{resolve,dynamic});
 if(model&&handled.includes(model.kind))return;
 const target=resolve(args[index]);
 if(!model?.suffix){invalidateReachable(target,{resolve,dynamic});return;}
 for(const [key,value]of entries(target))if(String(key).endsWith(model.suffix))invalidateReachable(value,{resolve,dynamic});
 for(const path of model.paths??[]){let parent=target;for(const key of path.slice(0,-1))parent=resolve(field(parent,key));if(parent?.type==='table'){const affected=field(parent,path.at(-1));if(affected?.type==='table')invalidateReachable(affected,{resolve,dynamic});else for(const e of parent.entries)if(resolve(e.value)===resolve(affected))e.value=dynamic;}}
}

export function mutationArgument(name) {
 if(['table.insert','table.remove','table.clear','table.sort','table.add_mirrored_entry'].includes(name))return 0;
 if(name==='table.set')return 1;
 return null;
}

export function verifiedBinding({name,bound=false,intact=()=>true,definitionVerified=true}) {
 return !bound&&definitionVerified&&intact([name]);
}

/** Preflight the complete require closure before any numeric fold. Member writes
 * revoke only intersecting dependencies, including duplicate declarations. */
export function createSharedBindingGuard(reader) {
 const modules=new Map(),pureBindings=new Set(),tainted=new Set();
 // A read-only engine getter can depend on runtime state without mutating it.
 // Verify both its method body and the initialization that binds the instance;
 // never evaluate the difficulty or fold the returned value.
 const manager='scripts/managers/difficulty/difficulty_manager.lua';
 const initializer='scripts/game_states/game/gameplay_sub_states/gameplay_init_step_states/gameplay_init_step_managers.lua';
 if(reader.exists(manager)&&reader.exists(initializer)&&signature({raw:reader.read(manager)})==='83b23b5eab3035e116750311b29545fe06d6530ec95f7334785275bb3986b266'&&signature({raw:reader.read(initializer)})==='b97fb36043aaab67879cba98a5c1c2698250cdc4540f7dfaac08beffaa026a80') {
  const source=reader.read(manager),tokens=tokenizeLua(source);
  const at=tokens.findIndex((t,i)=>t.value==='get_table_entry_by_challenge'&&tokens[i-1]?.value==='.'&&tokens[i+1]?.value==='='&&tokens[i+2]?.value==='function');
  if(at>=0){const start=at+2,end=luaBlockEnd(tokens,start),raw=source.slice(tokens[start].start,tokens[end].end);if(signature({raw})==='e12fe07518d67b2a41f2ec63129626f801ccfc82d5f8ad0372b35f7a9edd120c')pureBindings.add('Managers.state.difficulty.get_table_entry_by_challenge');}
 }
 function load(file) {
  if(modules.has(file)||!reader.exists(file))return;
  const record={writes:[],analysis:null,source:null,imported:null};modules.set(file,record);
  const source=reader.read(file),tokens=tokenizeLua(source);
  for(let i=0;i<tokens.length;i++){
   if(tokens[i].type==='keyword'&&tokens[i].value==='function'){i=luaBlockEnd(tokens,i);continue;}
   if(tokens[i].value==='require') {
    const arg=tokens[i+1]?.value==='('?tokens[i+2]:tokens[i+1];
    if(arg?.type==='string')load(arg.value.replace(/\.lua$/,'')+'.lua');
   }
  }
  const imported=id=>{if(id.startsWith('!fn:')){for(const m of modules.values()){const fn=m.analysis?.functions.get(id);if(fn)return fn;}return null;}if(!id.startsWith('@'))return null;for(const [path,m] of modules){const root=identity(path);if(id.startsWith(root+'.'))return m.analysis?.functionAt(id.slice(root.length+1));}return null;};
  record.source=source;record.imported=imported;
  record.analysis=analyzeLuaEffects(source,{file,imported,pureBindings});
  const exported=[...record.analysis.exports],initial=new Set();
  for(const path of record.analysis.writes) {
   const owner=exported.find(p=>path.startsWith(p+'.'));
   if(owner){const canonical=identity(file)+path.slice(owner.length);if(!initial.has(canonical)){initial.add(canonical);continue;}record.writes.push(canonical);}
   else if(!path.startsWith('!'))record.writes.push(['math','table','MathUtils'].includes(path.split('.')[0])?path.split('.')[0]:path);
  }
  // External root writes are monotonic. Keep table reads cheap even after
  // consumers have cached modules and later discover another writer.
  for(const p of record.writes)if(p.startsWith('@')) {
   const root=p.split('.*')[0];if(p===root||root!==identity(file))tainted.add(root);
  }
 }
 function intact(roots,{moduleFile,member}={}) {
  const wanted=[...roots,...(moduleFile?[identity(moduleFile)+(member?'.'+member:'')]:[])];
  return ![...modules.values()].some(m=>m.writes.some(p=>wanted.some(w=>overlaps(p,w))));
 }
 return {load,intact,moduleTainted(file){return Boolean(file)&&tainted.has(identity(file));},analysis(file){load(file);const m=modules.get(file);if(!m)return;
 const fingerprint=[...modules.values()].flatMap(m=>m.writes).filter(p=>!p.startsWith('@')).sort().join('|');
 if(fingerprint&&m.proof!==fingerprint){m.analysis=analyzeLuaEffects(m.source,{file,imported:m.imported,pureBindings,bindingsIntact:roots=>intact(roots)});m.proof=fingerprint;}return m.analysis;}};
}

// Conservative write discovery for skipped control flow. Tokens, never Lua, are
// inspected. Unknown indices/calls invalidate the containing table, not a value
// guessed from an unexecuted branch. Local aliases are followed inside the block.
export function luaBlockEnd(tokens,start) {
 const first=tokens[start],stack=[{close:first.value==='repeat'?'until':'end',awaitDo:['for','while'].includes(first.value)}];
 let i=start;
 while(++i<tokens.length&&stack.length) {
  const t=tokens[i];if(t.type!=='keyword')continue;
  if(['function','if','for','while','repeat'].includes(t.value))stack.push({close:t.value==='repeat'?'until':'end',awaitDo:['for','while'].includes(t.value)});
  else if(t.value==='do'){if(stack.at(-1)?.awaitDo)stack.at(-1).awaitDo=false;else stack.push({close:'end'});}
  else if(t.value===stack.at(-1)?.close)stack.pop();
 }
 return i-1;
}

export function conditionalWrites(tokens, finiteKeys=new Map(), {assignmentsOnly=false,callsOnly=false,rootAliases=new Map()}={}) {
 // Substitute only index tokens, never names in declarations or expressions.
 // Unknown domains retain the conservative parent-table invalidation below.
 if(finiteKeys.size) {
  const [name,keys]=finiteKeys.entries().next().value,rest=new Map(finiteKeys);rest.delete(name);
  // Reassignment/shadowing destroys the iterator's bounded domain. Never
  // substitute a guessed key after the loop variable can acquire another value.
  const changed=tokens.some((t,i)=>t.type==='identifier'&&t.value===name&&
   (tokens[i-1]?.value==='local'||(tokens[i-1]?.value==='for'&&i!==1)||tokens[i+1]?.value==='='));
  if(changed)return conditionalWrites(tokens,rest);
  return [...keys].flatMap(value=>conditionalWrites(tokens.map((t,i)=>
   t.type==='identifier'&&t.value===name&&tokens[i-1]?.value==='['&&tokens[i+1]?.value===']'?{...t,type:typeof value==='number'?'number':'string',value}:t),rest));
 }
 const writes=[],aliases=new Map(rootAliases),conditional=new Set();let braces=0;
 for(let i=0;i<tokens.length;i++) {
  if(tokens[i].type==='keyword'&&tokens[i].value==='function'){i=luaBlockEnd(tokens,i);continue;}
  if(tokens[i].type==='keyword'&&['if','for','while','repeat','do'].includes(tokens[i].value)){const end=luaBlockEnd(tokens,i);for(let j=i;j<=end;j++)conditional.add(j);}
 }
 const expand=p=>aliases.has(p[0])?(aliases.get(p[0]).length?[...aliases.get(p[0]),...p.slice(1)]:[]):p;
 function pathAt(i) {
  if(tokens[i]?.type!=='identifier')return null;
  const path=[tokens[i++].value];let dynamic=false;
  while(true) {
   if(tokens[i]?.value==='.'&&tokens[i+1]?.type==='identifier'){path.push(tokens[i+1].value);i+=2;}
   else if(tokens[i]?.value==='[') {
    const start=i++;let depth=1;
    while(i<tokens.length&&depth){if(tokens[i].value==='[')depth++;if(tokens[i].value===']')depth--;i++;}
    if(i===start+3&&['string','number'].includes(tokens[start+1]?.type))path.push(tokens[start+1].value);
    else {dynamic=true;break;}
   } else break;
  }
  // Retain the longest known parent for a computed index.
  if(dynamic) {while(tokens[i]?.value==='.'||tokens[i]?.value==='['){if(tokens[i].value==='.')i+=2;else {let depth=1;i++;while(i<tokens.length&&depth){if(tokens[i].value==='[')depth++;if(tokens[i].value===']')depth--;i++;}}}}
  return {path:expand(path),end:i,dynamic};
 }
 for(let i=0;i<tokens.length;i++) {
  if(callsOnly&&tokens[i].value==='{')braces++;
  if(callsOnly&&tokens[i].value==='}')braces--;
  if(assignmentsOnly&&tokens[i].value==='{') {let depth=1;while(++i<tokens.length&&depth){if(tokens[i].value==='{')depth++;if(tokens[i].value==='}')depth--;}i--;continue;}
  // Declaring a function does not execute its body.
  if(tokens[i].type==='keyword'&&tokens[i].value==='function') {
   if(!callsOnly&&tokens[i-1]?.value!=='local'&&tokens[i+1]?.type==='identifier') {const binding=pathAt(i+1);if(binding?.path.length)writes.push(binding.path);}
   i=luaBlockEnd(tokens,i);
   continue;
  }
  if(tokens[i-1]?.value==='.'||tokens[i-1]?.value===':')continue;
  const p=pathAt(i);if(!p)continue;
  if(tokens[p.end]?.value===',') {
   const targets=[p.path];let j=p.end;
   while(tokens[j]?.value===',') {const next=pathAt(j+1);if(!next)break;targets.push(next.path);j=next.end;}
   if(!callsOnly&&tokens[j]?.value==='=')writes.push(...targets.filter(p=>p.length));
  }
  if(tokens[p.end]?.value==='='&&(!callsOnly||braces===0)) {
   const local=tokens[i-1]?.value==='local';let rhs=pathAt(p.end+1);
   if(rhs&&tokens[rhs.end]?.value==='(')rhs=null;
   // Rebinding a local alias (e.g. math_round = fallback) does not assign
   // through its old table. Member writes below still follow that alias.
   if(!local&&p.end===i+1&&conditional.has(i)) {
    // A branch may retain the old binding or select the RHS. Revoke both now;
    // do not replace the old alias as though the branch necessarily ran.
    if(!callsOnly){if(p.path.length)writes.push(p.path);if(rhs?.path.length)writes.push(rhs.path);}
    continue;
   }
   if((assignmentsOnly||callsOnly)&&!local&&p.end===i+1&&aliases.has(tokens[i].value)&&!rootAliases.has(tokens[i].value)) {aliases.set(tokens[i].value,rhs?.path??[]);continue;}
   if(local&&p.path.length===1) {if(rootAliases.has(tokens[i].value))continue;if(rhs)aliases.set(tokens[i].value,rhs.path);else aliases.set(tokens[i].value,[]);}
   else if(p.path.length) {
    if(!callsOnly)writes.push(p.path);
    if(p.end===i+1&&rhs)aliases.set(tokens[i].value,rhs.path);
   }
  }
  if(assignmentsOnly)continue;
  if(tokens[p.end]?.value===':') {
   if(p.path.length)writes.push(p.path);
   p.end+=2;
  }
  if(tokens[p.end]?.value==='(') {
   const name=p.path.join('.');
   if(/^(?:math\.|require$|settings$|pairs$|ipairs$|type$|table\.(?:clone|enum|keys|ukeys|unpack)$)/.test(name))continue;
   let depth=0;
   for(let j=p.end+1;j<tokens.length;j++) {
    if(tokens[j].value===')'&&depth===0)break;
    if(j===p.end+1||(tokens[j-1].value===','&&depth===0)) {
     const arg=pathAt(j);if(arg?.path.length&&(!callsOnly||tokens[arg.end]?.value!=='('))writes.push(arg.path);
     if(/^table\.(?:merge|add_missing|append|insert|remove|clear)$/.test(name))break;
    }
    if(['(','{','['].includes(tokens[j].value))depth++;
    if([')','}',']'].includes(tokens[j].value))depth--;
   }
  }
 }
 return writes;
}

/** Discover only executed top-level control flow, excluding function bodies. */
export function controlFlowWrites(tokens) {
 const writes=[],aliases=new Map();
 for(let i=0;i<tokens.length;i++) {
  const t=tokens[i];
  if(t.value==='local'&&tokens[i+1]?.type==='identifier'&&tokens[i+2]?.value==='='&&tokens[i+3]?.type==='identifier') {
   const path=[tokens[i+3].value];let j=i+4;
   while(tokens[j]?.value==='.'&&tokens[j+1]?.type==='identifier'){path.push(tokens[j+1].value);j+=2;}
   if(tokens[j]?.value!=='(')aliases.set(tokens[i+1].value,aliases.has(path[0])?[...aliases.get(path[0]),...path.slice(1)]:path);
  }
  if(t.type!=='keyword'||!['function','if','for','while','repeat','do'].includes(t.value))continue;
  const end=luaBlockEnd(tokens,i);
  if(t.value!=='function')for(const p of conditionalWrites(tokens.slice(i,end+1)))writes.push(aliases.has(p[0])?[...aliases.get(p[0]),...p.slice(1)]:p);
  i=end;
 }
 return writes;
}
