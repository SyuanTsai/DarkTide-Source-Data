import {test} from 'node:test';
import assert from 'node:assert/strict';
import {readFileSync} from 'node:fs';
import {createSkillResolver} from '../../pipeline/lib/skill-lua.mjs';
import {skillParams} from '../../pipeline/lib/skill-values.mjs';
import {parseLuaStatic,getTableField} from '../../pipeline/lib/lua-static-reader.mjs';
import {staticBuffModules} from '../../pipeline/lib/blessing-buff-index.mjs';
import {resolveReference} from '../../pipeline/lib/lua-closure.mjs';
const fixture=name=>readFileSync(new URL(`./fixtures/review8/${name}.lua`,import.meta.url),'utf8');
const resolver=source=>createSkillResolver({exists:p=>p==='x.lua',read:()=>source,list:()=>[]});
// Scenario: an untrusted alias write taints a module containing official names.
// Purpose: numeric revocation preserves names, ids and table structure.
test('UnitT05_module revocation preserves structure and names while revoking numbers',()=>{
 const source='local box={m=math}\nlocal alias=box[k]\nalias.abs=function(v) return 99 end\nreturn {name="loc_official",id="talent",format_values={damage={value=10},numeric_text={value="10%"},label={value="loc_label"}}}';
 const r=resolver(source),root=r.returned('x.lua');
 assert.equal(r.scalar(r.get(root,'name')),'loc_official');
 assert.equal(r.scalar(r.get(root,'id')),'talent');
 assert.deepEqual(skillParams(r,root,'talent',[],[]).damage,{value:null,unknown:'DYNAMIC_VALUE'});
 assert.deepEqual(skillParams(r,root,'talent',[],[]).label,{value:'loc_label'});
 assert.deepEqual(skillParams(r,root,'talent',[],[]).numeric_text,{value:null,unknown:'DYNAMIC_VALUE'});
 assert.equal(r.get(r.get(root,'format_values'),'find_value'),undefined);
 const eager=parseLuaStatic(source,{staticArithmetic:true,allowUnsupported:true});
 assert.equal(getTableField(eager.returned,'name').value,'loc_official');
 const lazy=staticBuffModules({exists:()=>true,read:()=>source,list:()=>[]});
 assert.equal(lazy.get(lazy.load('x.lua'),'name').value,'loc_official');
});
// Scenario: a tainted module returns a loc key directly rather than in a table.
// Purpose: numeric-only revocation also preserves scalar structural exports.
test('UnitT06_module revocation preserves scalar loc key exports',()=>{
 const source='local alias=box[k]\nalias.value=99\nreturn "loc_export"';
 const r=resolver(source);assert.equal(r.scalar(r.returned('x.lua')),'loc_export');
 assert.equal(parseLuaStatic(source,{staticArithmetic:true,allowUnsupported:true}).returned.value,'loc_export');
 const lazy=staticBuffModules({exists:()=>true,read:()=>source,list:()=>[]});
 assert.equal(lazy.load('x.lua').value,'loc_export');
});
for(const [i,name] of ['parenthesized-call','parenthesized-member','computed-index','unmodeled-return','shallow-copy'].entries()) {
 // Scenario: each review8 F1-F3 alias form can overwrite a reachable value.
 // Purpose: default-deny analysis must never expose the stale original 10.
 test(`UnitT${10+i*10}_${name} revokes stale values`,()=>{
  const r=resolver(fixture(name));
  const damage=skillParams(r,r.returned('x.lua'),'x',[],[]).damage;
  assert.ok(damage?.value===99||damage?.value===null&&damage.unknown==='DYNAMIC_VALUE',JSON.stringify(damage));
 });
}
// Scenario: a cloned nested table is subsequently written.
// Purpose: game table.clone is deep and must preserve the original value.
test('UnitT60_deep clone preserves original nested value',()=>{
 const r=resolver(fixture('deep-clone'));
 assert.deepEqual(skillParams(r,r.returned('x.lua'),'x',[],[]).damage,{value:10});
});
// Scenario: the real adamant helper call is followed by two computed member writes.
// Purpose: cloned stat_buffs must be independent before conservative invalidation.
test('UnitT70_adamant clone retains separate stat buff identities',()=>{
 const r=resolver(fixture('adamant-clone')),t=r.returned('x.lua');
 const base=r.get(r.get(t,'adamant_terminus_warrant_melee_stat_buff'),'stat_buffs');
 const improved=r.get(r.get(t,'adamant_terminus_warrant_melee_stat_buff_improved'),'stat_buffs');
 assert.notEqual(base,improved);
 assert.ok(r.field(base,'melee_rending_multiplier')?.reason==='DYNAMIC_VALUE'||r.field(base,'melee_rending_multiplier')===undefined);
});
// Scenario: nested tables are shared through local names, merge, or shallow_copy.
// Purpose: all consumers distinguish a deep clone from a shared child identity.
test('UnitT80_copy helpers agree across skill eager lazy and closure readers',()=>{
 for(const [helper,expected]of [['table.clone',10],['table.clone_instance',10],['table.shallow_copy',99],['merge',99]]) {
  const source=`local nested={value=10}\nlocal base={nested=nested}\nlocal copy=${helper==='merge'?'table.merge({},base)':helper+'(base)'}\ncopy.nested.value=99\nreturn base`;
  const files={'x.lua':source},reader={exists:p=>p in files,read:p=>files[p],list:()=>[]};
  const r=createSkillResolver(reader);assert.equal(r.scalar(r.get(r.get(r.returned('x.lua'),'nested'),'value')),expected,'skill '+helper);
  const eager=parseLuaStatic(source.replace('return base','local observed=base.nested.value\nreturn base'),{staticArithmetic:true,allowUnsupported:true});assert.equal(eager.locals.observed.value,expected,'eager '+helper);
  const lazy=staticBuffModules(reader);assert.equal(lazy.get(lazy.get(lazy.load('x.lua'),'nested'),'value').value,expected,'lazy '+helper);
  assert.equal(resolveReference(reader,'x.lua','base.nested.value')?.node.value,expected,'closure '+helper);
 }
});
// Scenario: unsupported alias sources are later written or passed to a mutator.
// Purpose: the deny rule applies to expression classes and shared require tables.
test('UnitT90_untrusted expressions revoke every reachable binding',()=>{
 for(const expression of ['box[k]','unpack(box)','select(1,box)','rawget(box,"m")','setmetatable(box,{})','next(box)','(box).m','box[k] or box','1+runtime_value'])for(const mutation of ['alias.abs=function(v) return 99 end','table.merge(alias,{abs=function(v) return 99 end})','mutator(alias)']) {
  const files={'x.lua':`local B=require("b") local box={m=math,b=B} local alias=${expression} ${mutation} return {format_values={damage={value=math.abs(10)},other={value=B.value}}}`,'b.lua':'return {value=10}'};
  const r=createSkillResolver({exists:p=>p in files,read:p=>files[p],list:()=>[]});const params=skillParams(r,r.returned('x.lua'),'x',[],[]);
  for(const key of ['damage','other'])assert.deepEqual(params[key],{value:null,unknown:'DYNAMIC_VALUE'},expression+' '+mutation+' '+key);
 }
});
// Scenario: after cloning, the original nested table changes before reading the copy.
// Purpose: lazy consumers must snapshot at the clone call, not at a later read.
test('UnitT95_deep clones snapshot children before later source writes',()=>{
 const source='local nested={value=10}\nlocal base={nested=nested}\nlocal copy=table.clone(base)\nbase.nested.value=99\nlocal observed=copy.nested.value\nreturn copy';
 const reader={exists:p=>p==='x.lua',read:()=>source,list:()=>[]};
 const r=createSkillResolver(reader);assert.equal(r.scalar(r.get(r.get(r.returned('x.lua'),'nested'),'value')),10);
 assert.equal(parseLuaStatic(source,{staticArithmetic:true}).locals.observed.value,10);
 const lazy=staticBuffModules(reader);assert.equal(lazy.get(lazy.get(lazy.load('x.lua'),'nested'),'value').value,10);
 assert.equal(resolveReference(reader,'x.lua','observed')?.node.value,10);
});
