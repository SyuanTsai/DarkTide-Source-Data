import {test} from 'node:test';
import assert from 'node:assert/strict';
import {createSkillResolver} from '../../pipeline/lib/skill-lua.mjs';
import {skillParams} from '../../pipeline/lib/skill-values.mjs';
import {createSharedBindingGuard} from '../../pipeline/lib/lua-effects.mjs';
import {parseLuaStatic,getTableField} from '../../pipeline/lib/lua-static-reader.mjs';
import {staticBuffModules} from '../../pipeline/lib/blessing-buff-index.mjs';
import {bespokeTraitDefinitions} from '../../pipeline/lib/weapon-inventory.mjs';
const reader=s=>({exists:p=>p in s,read:p=>s[p],list:()=>[]});
// Scenario: Lua shorthand calls mutate a reachable table or captured value.
// Purpose: do not retain stale values after either shorthand call form.
test('UnitT10_shorthand calls invalidate mutations',()=>{
 for(const source of [
 'local talent={format_values={damage={value=10}}} local function apply(t) t[1].format_values.damage.value=99 end apply {talent} return talent',
 'local talent={format_values={damage={value=10}}} local function apply(t) talent.format_values.damage.value=99 end apply "x" return talent',
 'local talent={format_values={damage={value=10}}} local function get(t) return t end local box=get {talent} box[1].format_values.damage.value=99 return talent',
 'local talent={format_values={damage={value=10}}} local function get(t) return t end local box=get {talent} table.merge(box[1].format_values.damage,{value=99}) return talent',
 ...['function','(',')','{','=',','].map(arg=>`local talent={format_values={damage={value=10}}} local function apply(t) talent.format_values.damage.value=99 end apply ${JSON.stringify(arg)} return talent`),
 ]) {const r=createSkillResolver(reader({'x.lua':source}));assert.deepEqual(skillParams(r,r.returned('x.lua'),'x',[],[]).damage,{value:null,unknown:'DYNAMIC_VALUE'});}
});
// Scenario: shorthand mutations enter both eager and lazy static readers.
// Purpose: all consumers share the call effect proof instead of retaining 10.
test('UnitT15_shorthand effects protect eager and lazy readers',()=>{
 for(const call of ['apply {talent}','apply "x"']) {
  const source=`local talent={value=10}\nlocal function apply(t) talent.value=99 end\n${call}\nreturn talent`;
  const eager=parseLuaStatic(source,{allowUnsupported:true});
  assert.equal(getTableField(eager.returned,'value').reason,'DYNAMIC_VALUE');
  const lazy=staticBuffModules(reader({'x.lua':source}));
  assert.equal(lazy.get(lazy.load('x.lua'),'value').reason,'DYNAMIC_VALUE');
 }
});
// Scenario: the bespoke registry spells its single string argument without parentheses.
// Purpose: the inventory scanner must recognize the same Lua call syntax.
test('UnitT17_inventory includes shorthand string registry entries',()=>{
 const module='scripts/settings/equipment/weapon_traits/weapon_traits_bespoke_test';
 const files={'scripts/settings/equipment/weapon_traits/weapon_trait_templates.lua':`_create_entry "${module}"`,[module+'.lua']:'return {test={}}'};
 assert.equal(bespokeTraitDefinitions(reader(files))[0].traitKey,'test');
});
// Scenario: parenthesized aliases and modeled mutations overwrite shared math.
// Purpose: a stale built-in binding must never fold to 10.
test('UnitT20_shared aliases and top-level helpers invalidate bindings',()=>{
 for(const prefix of ['local m=(nil or math) m.abs=function(v) return 99 end','local m=(math) m.abs=function(v) return 99 end','local box={m=(math)} box.m.abs=function(v) return 99 end','table.merge(math,{abs=function(v) return 99 end})','local m=math table.merge(m,{abs=function(v) return 99 end})','table.make_unique(math)','table.make_strict(math)','local m=math local function f(t) table.merge(t,{other=99}) end f(m)']) {
 const r=createSkillResolver(reader({'x.lua':prefix+' return {format_values={damage={format_type="number",value=math.abs(10)}}}'}));assert.deepEqual(skillParams(r,r.returned('x.lua'),'x',[],[]).damage,{value:null,unknown:'DYNAMIC_VALUE'},prefix);
 }
});
// Scenario: an unmodeled value expression may still return a shared argument.
// Purpose: never interpret an unresolved alias as an empty write destination.
test('UnitT25_unresolved alias expressions retain possible shared identities',()=>{
 for(const expression of ['select(1,math)','(select(1,math))','nil or math']) {
  const r=createSkillResolver(reader({'x.lua':`local m=${expression} m.abs=function(v) return 99 end return {format_values={damage={value=math.abs(10)}}}`}));
  assert.deepEqual(skillParams(r,r.returned('x.lua'),'x',[],[]).damage,{value:null,unknown:'DYNAMIC_VALUE'},expression);
 }
});
// Scenario: external destinations are mutated directly, through aliases or parameters.
// Purpose: revoke all member dependencies across the analyzed require closure.
test('UnitT30_external table writes revoke cross-module values',()=>{
 for(const mutation of [
  'table.merge(B,{value=99})',
  'local alias=(B) table.add_missing(alias,{other=99})',
  'B.other=99',
  'local function apply(t) table.merge(t,{value=99}) end apply(B)',
  'local function apply(t) t.other=99 end apply(B)',
  'local alias=runtime_factory(B) alias.other=99',
 ]) {
  const files={'b.lua':'return {value=10}', 'effects.lua':'local B=require "b" '+mutation,
   'a.lua':'local B=require("b") require "effects" return {format_values={damage={value=B.value}}}'};
  const r=createSkillResolver(reader(files));
  assert.deepEqual(skillParams(r,r.returned('a.lua'),'a',[],[]).damage,{value:null,unknown:'DYNAMIC_VALUE'},mutation);
 }
 const g=createSharedBindingGuard(reader({'x.lua':'math.other=99 string.other=99 table.other=99'}));g.load('x.lua');
 for(const root of ['math','string','table'])assert.equal(g.intact([root+'.unrelated']),false,root);
});
// Scenario: another module writes an imported table after a consumer cached it.
// Purpose: late preflight discoveries revoke cached data regardless of load order.
test('UnitT35_later external writes revoke cached module tables',()=>{
 const files={'b.lua':'return {format_values={damage={value=10}}}', 'effects.lua':'local B=require("b") table.merge(B,{other=99}) return {}'};
 const r=createSkillResolver(reader(files)),cached=r.returned('b.lua');r.load('effects.lua');
 assert.deepEqual(skillParams(r,cached,'b',[],[]).damage,{value:null,unknown:'DYNAMIC_VALUE'});
 const b=staticBuffModules(reader(files)),saved=b.load('b.lua');b.load('effects.lua');
 assert.equal(b.get(b.get(b.get(saved,'format_values'),'damage'),'value').reason,'DYNAMIC_VALUE');
});
// Scenario: modeled helpers merge into an allocation owned by the current module.
// Purpose: keep sequential local-table modeling, including destination aliases.
test('UnitT40_local destination merges retain modeled values',()=>{
 for(const mutation of ['table.merge(t,{value=99})','local alias=(t) table.merge(alias,{value=99})','local alias=table.merge(t,{value=98}) table.merge(alias,{value=99})']) {
  const r=createSkillResolver(reader({'x.lua':'local t={value=10} '+mutation+' return {format_values={damage={value=t.value}}}'}));
  assert.deepEqual(skillParams(r,r.returned('x.lua'),'x',[],[]).damage,{value:99},mutation);
 }
});
// Scenario: a pure factory returns a table allocated inside its own function.
// Purpose: local construction cannot revoke unrelated, provable constants.
test('UnitT45_private factory allocations preserve unrelated constants',()=>{
 const r=createSkillResolver(reader({'x.lua':'local function factory() return {} end local t=factory() t.key=99 return {format_values={damage={value=10}}}'}));
 assert.deepEqual(skillParams(r,r.returned('x.lua'),'x',[],[]).damage,{value:10});
});
// Scenario: a modeled mutating helper is called through a local function alias.
// Purpose: a reader without an ordered model for that spelling cannot keep 10.
test('UnitT50_helper callee aliases revoke unmodeled destination mutations',()=>{
 const r=createSkillResolver(reader({'x.lua':'local talent={format_values={damage={value=10}}} local merge=table.merge merge(talent.format_values.damage,{value=99}) return talent'}));
 assert.deepEqual(skillParams(r,r.returned('x.lua'),'x',[],[]).damage,{value:null,unknown:'DYNAMIC_VALUE'});
});
