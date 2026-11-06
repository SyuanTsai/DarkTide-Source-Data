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

export function conditionalWrites(tokens, finiteKeys=new Map()) {
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
 const writes=[],aliases=new Map();
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
  // Declaring a function does not execute its body.
  if(tokens[i].type==='keyword'&&tokens[i].value==='function') {
   if(tokens[i-1]?.value!=='local'&&tokens[i+1]?.type==='identifier') {const binding=pathAt(i+1);if(binding?.path.length)writes.push(binding.path);}
   i=luaBlockEnd(tokens,i);
   continue;
  }
  if(tokens[i-1]?.value==='.'||tokens[i-1]?.value===':')continue;
  const p=pathAt(i);if(!p)continue;
  if(tokens[p.end]?.value===',') {
   const targets=[p.path];let j=p.end;
   while(tokens[j]?.value===',') {const next=pathAt(j+1);if(!next)break;targets.push(next.path);j=next.end;}
   if(tokens[j]?.value==='=')writes.push(...targets.filter(p=>p.length));
  }
  if(tokens[p.end]?.value==='=') {
   const local=tokens[i-1]?.value==='local',rhs=pathAt(p.end+1);
   if(local&&p.path.length===1) {if(rhs)aliases.set(tokens[i].value,rhs.path);else aliases.set(tokens[i].value,[]);}
   else if(p.path.length) {
    writes.push(p.path);
    if(p.end===i+1&&rhs)aliases.set(tokens[i].value,rhs.path);
   }
  }
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
     const arg=pathAt(j);if(arg?.path.length)writes.push(arg.path);
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
