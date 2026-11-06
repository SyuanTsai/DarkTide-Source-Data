import {test} from 'node:test';
import assert from 'node:assert/strict';
import {readFileSync} from 'node:fs';
import {createWeaponStats} from '../../pipeline/lib/weapon-stats.mjs';
import {parseLuaStatic} from '../../pipeline/lib/lua-static-reader.mjs';
import {createSkillResolver} from '../../pipeline/lib/skill-lua.mjs';
import {skillParams} from '../../pipeline/lib/skill-values.mjs';
import {staticBuffModules} from '../../pipeline/lib/blessing-buff-index.mjs';
import {createSharedBindingGuard} from '../../pipeline/lib/lua-effects.mjs';
const reader=s=>({exists:p=>p in s,read:p=>s[p],list:(p='')=>Object.keys(s).filter(k=>k.startsWith(p))});
const utility='scripts/utilities/recoil_template.lua',recoil='scripts/settings/equipment/recoil_templates.lua';
function extract(mutation,extra={}) {
 const s={
 'scripts/foundation/utilities/math.lua':'math.lerp=function(a,b,p)return a*(1-p)+b*p end',
 [utility]:readFileSync(new URL('./fixtures/review4/recoil_template.lua',import.meta.url),'utf8'),
 'scripts/settings/equipment/weapon_templates/weapon_trait_templates/recoil_trait_templates.lua':'return {test={{"still","offset",1,"pitch",{min=0.05,max=0.95}}}}',
 [recoil]:`local R=require("scripts/utilities/recoil_template") local scale={{1,{0.5,1}},{30,{0.5,1}}} ${mutation} local recoil_templates={test={still={offset=R.generate_offset_range(30,0.015,0,0.95,R.create_scale(scale))}}} return recoil_templates`};
 Object.assign(s,extra);
 const stats=[],unknown=[];
 createWeaponStats(reader(s)).extract({source:'weapon_template.recoil_template="test"',file:'weapon.lua',kind:'recoil',target:'base',actions:parseLuaStatic('return {}').returned,group:parseLuaStatic('return {recoil_trait_templates.test}').returned,files:[],emit:v=>stats.push(v),unknown:(key,reason)=>unknown.push({key,reason})});
 return {stats,unknown};
}
// Scenario: closures, globals and reachable shared arguments change runtime dependencies.
// Purpose: all review6 F1 variants and the F2 branch union must revoke numeric folding.
test('UnitT10_review6 closure shared writes and conditional alias unions are dynamic',()=>{
 for(const mutation of [
 'local function apply_player_buff() scale[1][2][1]=player_unit.runtime_value end apply_player_buff()',
 'local function apply_player_buff() math.lerp=function() return player_unit.runtime_value end end apply_player_buff()',
 'local function apply(t) t.m.lerp=function() return player_unit.runtime_value end end apply({m=math})',
 'local m=math if runtime_flag then m={} end m.lerp=function() return player_unit.runtime_value end',
 'local obj={apply=function() scale[1][2][1]=runtime_value end} obj.apply()',
 'local f=function() scale[1][2][1]=runtime_value end f()',
 ]) {const r=extract(mutation);assert.deepEqual(r.stats,[],mutation);assert.equal(r.unknown[0]?.reason,'DYNAMIC_VALUE',mutation);}
});
// Scenario: the same impure parameter call changes skill and blessing tables.
// Purpose: F3 must use the shared module and reachable table invalidation rules.
test('UnitT20_review6 skill and blessing parameter mutations are dynamic',()=>{
 const source='local talent={format_values={damage={format_type="number",value=10}}} local function apply(t) t.format_values.damage.value=runtime_value end apply(talent) return talent';
 const r=createSkillResolver(reader({'test.lua':source}));
 assert.deepEqual(skillParams(r,r.returned('test.lua'),'test',[],[]).damage,{value:null,unknown:'DYNAMIC_VALUE'});
 const b=staticBuffModules(reader({'test.lua':'local templates={test={max_stacks=5}}\nlocal function apply_player_buff(t) t.max_stacks=player_unit.runtime_value end\napply_player_buff(templates.test)\nreturn templates'}));
 assert.equal(b.get(b.get(b.load('test.lua'),'test'),'max_stacks').reason,'DYNAMIC_VALUE');
});
// Scenario: every math spelling is shadowed or overwritten before use.
// Purpose: F4 applies one binding proof to every arithmetic whitelist entry.
test('UnitT30_review6 all arithmetic bindings require proof',()=>{
 for(const name of ['abs','floor','ceil','round','max','min','rad','degrees_to_radians'])for(const prefix of [`local math={${name}=function(v) return runtime_value end}`,`local m=math if flag then m={} end m.${name}=function(v) return runtime_value end`]) {
 const r=createSkillResolver(reader({'test.lua':prefix+` return {format_values={damage={format_type="number",value=math.${name}(10)}}}`}));
 assert.deepEqual(skillParams(r,r.returned('test.lua'),'test',[],[]).damage,{value:null,unknown:'DYNAMIC_VALUE'},prefix);
 }
});
// Scenario: unrelated module functions are declared twice at arbitrary paths.
// Purpose: F5 tracks changed members without a filename/member-name exemption.
test('UnitT40_review6 duplicate declarations only revoke dependent members',()=>{
 for(const file of ['other.lua','scripts/settings/equipment/weapon_templates/base_template_settings.lua']) {
 const g=createSharedBindingGuard(reader({[file]:'local M={} M.inspect=function() return 7 end M.copy=function() return 4 end M.inspect=function() return 8 end return M'}));g.load(file);
 assert.equal(g.intact([],{moduleFile:file,member:'copy'}),true);
 assert.equal(g.intact([],{moduleFile:file,member:'inspect'}),false);
 }
});
// Scenario: closures alias captured tables, helpers call helpers, and scalar exports follow unsafe calls.
// Purpose: exercise rule A independently of recoil names and preserve genuinely private construction.
test('UnitT50_effects cover captured aliases transitive calls and scalar exports',()=>{
 for(const call of [
  'local function inner() local alias=talent alias.format_values.damage.value=runtime end local function outer() inner() end outer()',
  'local f=function(t) t.format_values.damage.value=runtime end f(talent)',
  'local function f() local math_alias=math math_alias.abs=function() return runtime end end f()',
 ]) {
  const r=createSkillResolver(reader({'x.lua':'local talent={format_values={damage={value=10}}} '+call+' return talent'}));
  assert.deepEqual(skillParams(r,r.returned('x.lua'),'x',[],[]).damage,{value:null,unknown:'DYNAMIC_VALUE'},call);
 }
 for(const source of ['external() return 10','local function f(t) t=runtime end f(1) return 10']) {
  const r=createSkillResolver(reader({'x.lua':source}));assert.equal(r.scalar(r.returned('x.lua')),undefined);
 }
 const r=createSkillResolver(reader({'x.lua':'local function f() local t={{value=1}} for _,v in pairs(t) do v.value=2 end return t end f() return {format_values={damage={value=10}}}'}));
 assert.equal(skillParams(r,r.returned('x.lua'),'x',[],[]).damage.value,10);
});
// Scenario: a branch can retain either imported table and a nested alias can retain math.
// Purpose: rule B invalidates both possible identities, including modules loaded later.
test('UnitT60_branch joins retain imported and nested table identities',()=>{
 const files={'a.lua':'local A=require("left") local B=require("right") local m=A if flag then m=B end return {format_values={damage={value=B.value}}}', 'left.lua':'return {value=7}','right.lua':'return {value=10}'};
 const r=createSkillResolver(reader(files));assert.deepEqual(skillParams(r,r.returned('a.lua'),'a',[],[]).damage,{value:null,unknown:'DYNAMIC_VALUE'});
 const result=extract('local box={m=math} if flag then box.m={} end box.m.lerp=function() return runtime end');
 assert.deepEqual(result.stats,[]);assert.equal(result.unknown[0]?.reason,'DYNAMIC_VALUE');
});
// Scenario: value manipulation closes over a shadowed math table.
// Purpose: rule C also protects deferred arithmetic callbacks.
test('UnitT70_manipulation uses the same lexical math proof',()=>{
 const r=createSkillResolver(reader({'x.lua':'local math={abs=function(v) return runtime end} return {format_values={damage={value=10,format_type="number",value_manipulation=function(v) return math.abs(v) end}}}'}));
 assert.deepEqual(skillParams(r,r.returned('x.lua'),'x',[],[]).damage,{value:null,unknown:'DYNAMIC_VALUE'});
});
// Scenario: aliases are introduced by multiple assignment or returned closures.
// Purpose: common effect discovery must not depend on the declaration spelling.
test('UnitT80_multiple bindings and returned callables retain side effects',()=>{
 for(const mutation of ['local m,unused=math,nil m.lerp=function() return runtime end','local function get() return math end local m=get() m.lerp=function() return runtime end','local function factory() return function() math.lerp=function() return runtime end end end factory()()']) {
 const r=extract(mutation);assert.deepEqual(r.stats,[],mutation);assert.equal(r.unknown[0]?.reason,'DYNAMIC_VALUE',mutation);
 }
});
// Scenario: a loop-local math name expires before a whitelisted call.
// Purpose: lexical proof must reject real shadowing without leaking block locals.
test('UnitT90_loop locals do not shadow later verified math calls',()=>{
 const r=createSkillResolver(reader({'x.lua':'for _, math in pairs({}) do local scratch=1 end return {format_values={damage={format_type="number",value=math.abs(-10)}}}'}));
 assert.deepEqual(skillParams(r,r.returned('x.lua'),'x',[],[]).damage,{value:10});
});
// Scenario: a verified engine query reads difficulty but never writes any table.
// Purpose: retain unrelated constants, leave its runtime result unknown, and revoke altered bindings.
test('UnitT95_verified readonly engine binding never folds runtime difficulty',()=>{
 const manager='scripts/managers/difficulty/difficulty_manager.lua',initializer='scripts/game_states/game/gameplay_sub_states/gameplay_init_step_states/gameplay_init_step_managers.lua';
 const definitions={
  [manager]:readFileSync(new URL('./fixtures/review6/difficulty_manager.lua',import.meta.url),'utf8'),
  [initializer]:readFileSync(new URL('./fixtures/review6/gameplay_init_step_managers.lua',import.meta.url),'utf8'),
 };
 const source='local manager=Managers.state.difficulty local function query() return manager:get_table_entry_by_challenge({10,20}) end query() return {format_values={fixed={value=10},runtime={value=query()}}}';
 const r=createSkillResolver(reader({...definitions,'x.lua':source})),params=skillParams(r,r.returned('x.lua'),'x',[],[]);
 assert.deepEqual(params.fixed,{value:10});assert.deepEqual(params.runtime,{value:null,unknown:'DYNAMIC_VALUE'});
 for(const file of [manager,initializer]) {
  const q=createSkillResolver(reader({...definitions,[file]:definitions[file]+'\nManagers.state.difficulty=runtime_manager','x.lua':source}));
  assert.deepEqual(skillParams(q,q.returned('x.lua'),'x',[],[]).fixed,{value:null,unknown:'DYNAMIC_VALUE'});
 }
});

// Scenario: a literal named function precedes a bare require with shared side effects.
// Purpose: string tokens cannot hide dependencies from the common preflight.
test('UnitT97_string tokens never skip executed require dependencies',()=>{
 const r=extract('local marker="function" require("effects")',{'effects.lua':'math.lerp=function() return runtime end'});
 assert.deepEqual(r.stats,[]);assert.equal(r.unknown[0]?.reason,'DYNAMIC_VALUE');
});

// Scenario: another required module writes a computed helper member through an alias.
// Purpose: a wildcard write revokes every possible member in all consumers.
test('UnitT98_computed writes revoke shared module helper bindings',()=>{
 const r=extract('require("effects")',{'effects.lua':'local R=require("scripts/utilities/recoil_template") R[runtime_key]=function() return runtime end'});
 assert.deepEqual(r.stats,[]);assert.equal(r.unknown[0]?.reason,'DYNAMIC_VALUE');
});
