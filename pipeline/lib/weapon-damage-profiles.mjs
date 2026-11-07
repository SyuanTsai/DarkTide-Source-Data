import {stringifyCanonical} from './canonical-json.mjs';

const kinds={hit_scan:'hitScan',projectile:'projectile',shotshell:'shotshell',flamer_gas:'flamerGas',explosion:'explosion'};
const fields={hit_scan_template:'hit_scan',projectile_template:'projectile',projectile:'projectile',
  shotshell_template:'shotshell',shotshell:'shotshell',flamer_gas_template:'flamer_gas',flamer_gas:'flamer_gas',explosion_template:'explosion'};
const profileField=key=>typeof key==='string'&&/^(?:damage_profile(?:_|$)|.+_damage_profile$)/.test(key);
const compare=(a,b)=>a<b?-1:a>b?1:0;

/** Read only statically resolved weapon/template bindings; never execute Lua. */
export function createDamageProfileExtractor({lookup,resolve,field,component,annotate,paths,definition,binding}) {
  const location=(node,fallback)=>({path:node?._file??fallback.path,line:node?.startLine??fallback.line});
  const unknownKey=node=>Boolean(node?.hasUnknownKeys);
  const get=(node,key)=>{
    node=resolve(node);
    if(!node||node.type==='nil')return null;
    if(node.type!=='table'||node.dynamic)
      return {type:'unsupported',reason:'DYNAMIC_VALUE',_file:node._file,startLine:node.startLine};
    return resolve(field(node,key));
  };
  const entries=node=>{
    node=resolve(node);let index=0;
    return node?.type==='table'?node.entries.map(e=>[e.key?component(e.key):++index,e.value]):[];
  };
  const dynamic=node=>node&&!(node.type==='nil');
  function named(node,kind,file) {
    node=node?._cloneReference??node;
    if(node?.type==='string')return node.value||null;
    if(node?.type!=='reference')return null;
    const locals=binding(node._file??file),alias=node.root??node.ref.split('.')[0];
    const parts=node.parts?.map(component)??node.ref.split('.').slice(1),required=locals?.[alias];
    if(!parts.length&&required?._cloneReference)return named(required,kind,file);
    return parts.length===1&&typeof parts[0]==='string'&&required?.type==='require'
      &&required.path.replace(/\.lua$/,'')+'.lua'===paths[kind]?parts[0]:null;
  }
  function raw(node,fallback) {
    node=resolve(node);
    const source=location(node,fallback),number=n=>n?.type==='number'&&Number.isFinite(n.value);
    if(number(node))return {kind:'fixed',min:node.value,max:node.value,unknown:null,source};
    if(node?.type==='table'&&!node.dynamic&&!unknownKey(node)) {
      const a=get(node,'lerp_basic'),b=get(node,'lerp_perfect'),list=entries(node);
      if(number(a)&&number(b))return {kind:'lerp',min:a.value,max:b.value,unknown:null,source};
      if(list.length===2&&list.every(([key,n],i)=>key===i+1&&number(resolve(n))))
        return {kind:'lerp',min:resolve(list[0][1]).value,max:resolve(list[1][1]).value,unknown:null,source};
    }
    return {kind:'unknown',min:null,max:null,unknown:dynamic(node)?'DYNAMIC_VALUE':'NOT_EXPOSED_BY_SOURCE',source};
  }
  return function damageProfiles({actions,file,id,problems=[],files=[],attackCombos=[]}) {
    const fallback={path:file,line:actions?.startLine??1},records=new Map(),uncertainActions=new Set();
    const uncertainActionTable=unknownKey(actions);
    annotate(actions,file);
    function problem(code,reason,source,details={}) {
      const p={code,id,reason,source,...details};
      if(!problems.some(old=>stringifyCanonical(old)===stringifyCanonical(p)))problems.push(p);
    }
    function record(name,source) {
      if(records.has(name))return records.get(name);
      const declared=definition('damage',name),node=resolve(lookup('damage',name));
      const p={id:name,distributions:[],bindings:[],unknown:null,source:location(declared?.node??node,source)};
      records.set(name,p);
      const add=(scope,target)=>{
        const normal=get(scope,'power_distribution'),ranged=get(scope,'power_distribution_ranged');
        if(normal) {
          const at=location(normal,location(scope,p.source));
          p.distributions.push({target,range:null,attack:raw(get(normal,'attack'),at),impact:raw(get(normal,'impact'),at)});
          if(unknownKey(resolve(normal)))problem('DAMAGE_PROFILE_UNKNOWN','DYNAMIC_VALUE',at,{profile:name});
        }
        if(ranged)for(const range of ['near','far']) {
          const at=location(ranged,location(scope,p.source));
          p.distributions.push({target,range,attack:raw(get(get(ranged,'attack'),range),at),impact:raw(get(get(ranged,'impact'),range),at)});
        }
      };
      if(node?.type==='table'&&!node.dynamic) {
        add(node,null);
        const targets=get(node,'targets');
        for(const [target,scope] of entries(targets)) {
          if(target==='default_target'||Number.isInteger(target)&&target>=1)add(scope,target==='default_target'?'default':target);
          // target_settings indexes only numeric targets or default_target;
          // other statically named modifier properties are not target scopes.
          else if(typeof target!=='string'&&typeof target!=='number')p.unknown='DYNAMIC_VALUE';
        }
        if(targets&&targets.type!=='table'||targets?.dynamic||unknownKey(targets))p.unknown='DYNAMIC_VALUE';
      } else p.unknown=node?'DYNAMIC_VALUE':'NOT_VERIFIED';
      if(!p.distributions.length) {
        p.unknown??='NOT_EXPOSED_BY_SOURCE';
        const unknown={kind:'unknown',min:null,max:null,unknown:p.unknown,source:location(node,p.source)};
        p.distributions.push({target:null,range:null,attack:{...unknown},impact:{...unknown}});
      }
      if(p.unknown) {
        for(const d of p.distributions)for(const key of ['attack','impact'])d[key]={kind:'unknown',min:null,max:null,unknown:p.unknown,source:d[key].source};
        problem('DAMAGE_PROFILE_UNKNOWN',p.unknown,p.source,{profile:name});
      }
      return p;
    }
    function power(node,source) {
      const n=get(node,'power_level');
      return {value:n?.type==='number'&&Number.isFinite(n.value)?n.value:null,
        unknown:n?.type==='number'&&Number.isFinite(n.value)?null:dynamic(n)?'DYNAMIC_VALUE':'NOT_EXPOSED_BY_SOURCE',source:location(n,source)};
    }
    for(const [action,start] of entries(actions)) {
      // Shared grenade-ability actions are not weapon-mark damage profiles.
      if(typeof action!=='string'||action.startsWith('grenade_ability_'))continue;
      const seen=new Map();
      function visit(original,context={kind:'action',template:null},route=new Set()) {
        if(!original)return;
        for(const kind of Object.keys(kinds)) {
          const name=original.type==='reference'?named(original,kind,file):null;
          if(name) {template(kind,name,original,route);return;}
        }
        const node=resolve(original);
        if(!node||route.has(node))return;
        if(node.type!=='table')return;
        const identity=stringifyCanonical(context);
        if(seen.get(node)?.has(identity))return;
        if(!seen.has(node))seen.set(node,new Set());seen.get(node).add(identity);
        const next=new Set([...route,node]);
        const bindingScope=node===resolve(start)||entries(node).some(([key])=>profileField(key)||fields[key]);
        if(bindingScope&&unknownKey(node))uncertainActions.add(action);
        if(node.dynamic||unknownKey(node))problem('DAMAGE_BINDING_UNKNOWN','DYNAMIC_VALUE',location(node,fallback),{action});
        for(const [key,value] of entries(node)) {
          if(profileField(key)) {
            const name=named(value,'damage',file),source=location(value,location(node,fallback));
            if(!name){problem('DAMAGE_BINDING_UNKNOWN','DYNAMIC_VALUE',source,{action});continue;}
            const p=record(name,source),b={action,kind:context.kind,template:context.template,source};
            // A private profile clone can differ by action but the contract has
            // one distribution set per ID. Its origin name alone cannot prove
            // those endpoints; do not substitute the original catalog values.
            const clone=value.type==='table'?value:value.type==='reference'&&!value.ref.includes('.')?resolve(value):null;
            if(clone?._cloneReference) {
              p.unknown='NOT_VERIFIED';
              for(const d of p.distributions)for(const key of ['attack','impact'])
                d[key]={kind:'unknown',min:null,max:null,unknown:p.unknown,source};
              problem('DAMAGE_PROFILE_UNKNOWN',p.unknown,source,{profile:name});
            }
            if(['hitScan','projectile'].includes(b.kind))b.powerLevel=context.powerLevel;
            if(!p.bindings.some(old=>stringifyCanonical(old)===stringifyCanonical(b)))p.bindings.push(b);
          } else if(fields[key]) {
            const kind=fields[key],name=named(value,kind,file),source=location(value,location(node,fallback));
            if(name)template(kind,name,value,next);
            else if(value.type!=='nil')problem('DAMAGE_BINDING_UNKNOWN','DYNAMIC_VALUE',source,{action,kind:kinds[kind]});
          } else visit(value,context,next);
        }
      }
      function template(kind,name,original,route) {
        const key=kind+':'+name;
        if(route.has(key))return;
        const node=lookup(kind,name),source=location(node,location(original,fallback));
        if(node?.type!=='table'||node.dynamic) {
          problem('DAMAGE_BINDING_UNKNOWN',node?'DYNAMIC_VALUE':'NOT_VERIFIED',source,{action,kind:kinds[kind],template:name});return;
        }
        const context={kind:kinds[kind],template:name};
        if(['hitScan','projectile'].includes(context.kind))context.powerLevel=power(node,source);
        // Enter the resolved table, preserving this exact action/template context.
        visit(node,context,new Set([...route,key]));
      }
      if(resolve(start)?.type!=='table')problem('DAMAGE_ACTION_UNKNOWN','DYNAMIC_VALUE',location(start,fallback),{action});
      visit(start);
    }
    if(!actions||actions.dynamic||actions.type!=='table'||unknownKey(actions))problem('DAMAGE_ACTION_UNKNOWN','DYNAMIC_VALUE',fallback);
    // Also retain every combo foreign key when resolution failed elsewhere.
    for(const combo of attackCombos)for(const step of combo.steps)if(step.damageProfile)record(step.damageProfile,combo.source);
    const result=[...records.values()].sort((a,b)=>compare(a.id,b.id));
    for(const p of result) {
      if(uncertainActionTable||p.bindings.some(b=>uncertainActions.has(b.action))){p.unknown='DYNAMIC_VALUE';for(const d of p.distributions)for(const key of ['attack','impact'])d[key]={kind:'unknown',min:null,max:null,unknown:p.unknown,source:d[key].source};problem('DAMAGE_PROFILE_UNKNOWN',p.unknown,p.source,{profile:p.id});}
      const target=n=>n===null?0:n==='default'?Infinity:n;
      p.distributions.sort((a,b)=>target(a.target)-target(b.target)||[null,'near','far'].indexOf(a.range)-[null,'near','far'].indexOf(b.range));
      p.bindings.sort((a,b)=>compare(a.action,b.action)||compare(a.kind,b.kind)||compare(a.template,b.template)||compare(stringifyCanonical(a),stringifyCanonical(b)));
      files.push(p.source,...p.distributions.flatMap(d=>[d.attack.source,d.impact.source]),...p.bindings.flatMap(b=>[b.source,...(b.powerLevel?[b.powerLevel.source]:[])]));
    }
    return result;
  };
}
