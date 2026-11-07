import {test} from 'node:test';
import assert from 'node:assert/strict';
import {createSharedBindingGuard} from '../../pipeline/lib/lua-effects.mjs';
import {createWeaponStats} from '../../pipeline/lib/weapon-stats.mjs';
const damage='scripts/settings/damage/damage_profile_templates.lua';
function extract(prime,{factory='',huge=false}={}){
 const files={'settings.lua':'return {distribution={attack=10,impact=3}}',
 'constants.lua':`local S=require("settings") local distribution=S.distribution ${prime} return {}`,
 'factory.lua':factory,
 [damage]:`local S=require("settings") local damage_templates={base={power_distribution=S.distribution,cleave_distribution={attack=1,impact=1}}} ${huge?'local overrides={child={parent_template_name="base",overrides={{"cleave_distribution","attack",math.huge}}}} return {base_templates=damage_templates,overrides=overrides}':'return damage_templates'}`,
 'weapon.lua':`local C=require("constants") local weapon_template={actions={attack={damage_profile="${huge?'child':'base'}"}}} return weapon_template`};
 const engine=createWeaponStats({exists:p=>p in files,read:p=>files[p]});engine.actions('constants.lua');
 const problems=[],profile=engine.damageProfiles({actions:engine.actions('weapon.lua'),file:'weapon.lua',id:'review19',problems})[0];
 return {profile,problems};
}
const uncertain=r=>Boolean(r.profile?.unknown||r.profile?.distributions.some(d=>d.attack.unknown||d.impact.unknown)||r.problems.length);
// Scenario: original R17-F1 closure writes the captured shared distribution.
// Purpose: confirm that the exact 10-to-999 minimal reproduction is now closed.
test('UnitT10_original callback mutation is unknown',()=>assert.equal(uncertain(extract('local function mutate() distribution.attack=999 end unknown_call(mutate)')),true));
// Scenario: an unrelated local helper only writes a private allocation.
// Purpose: ensure aac2ff3 did not regress to globally invalidating imports.
test('UnitT20_unrelated helper leaves attack known',()=>{const r=extract('local out={} local function add(x) out[#out+1]=x end add(1)');assert.equal(r.profile.distributions[0].attack.min,10);assert.equal(uncertain(r),false);});
// Scenario: an imported callback returns a table containing a mutating closure.
// Purpose: an unknown callee may execute receivedCallback().fn(), producing 999.
test('UnitT30_imported returned table callback must be unknown',()=>assert.equal(uncertain(extract('local F=require("factory") unknown_call(F.callback)',{factory:'local S=require("settings") local F={callback=function() return {fn=function() S.distribution.attack=999 end} end} return F'})),true));
// Scenario: a callback returns its mutator through a lexical do block.
// Purpose: an unknown callee may execute receivedCallback()(), producing 999.
test('UnitT40_callback returned through do block must be unknown',()=>assert.equal(uncertain(extract('unknown_call(function() do return function() S.distribution.attack=999 end end end)')),true));
// Scenario: an imported returned table hides math.huge=nil in its nested callback.
// Purpose: the non-nil override-row proof must not survive this reachable write.
test('UnitT50_imported wrapped math callback must revoke proof',()=>assert.equal(uncertain(extract('local F=require("factory") unknown_call(F.callback)',{factory:'local F={callback=function() return {fn=function() math.huge=nil end} end} return F',huge:true})),true));

// Scenario: the imported table itself contains a captured mutator.
// Purpose: the foreign table's callback cannot escape the conservative fallback.
test('UnitT60_imported table escape invalidates shared distribution',()=>assert.equal(uncertain(extract('local F=require("factory") unknown_call(F)',{factory:'local S=require("settings") return {callback=function() S.distribution.attack=999 end}'})),true));
// Scenario: callbacks return mutators from each control-flow form.
// Purpose: every branch retains return summaries and revokes the imported proof.
test('UnitT70_control flow returned callbacks invalidate shared distribution',()=>{for(const block of ['for i=1,1 do return function() S.distribution.attack=999 end end','while condition do return function() S.distribution.attack=999 end end','repeat return function() S.distribution.attack=999 end until condition','if condition then return function() S.distribution.attack=999 end end'])assert.equal(uncertain(extract(`unknown_call(function() ${block} end)`)),true,block);});

// Scenario: a module directly returns a closure capturing an imported table.
// Purpose: callers may invoke the escaped function and mutate that table.
test('UnitT80_returned closure invalidates imported distribution',()=>{const files={'settings.lua':'return {attack=10}', 'factory.lua':'local S=require("settings") return function() S.attack=999 end'};const guard=createSharedBindingGuard({exists:p=>p in files,read:p=>files[p]});guard.load('factory.lua');assert.equal(guard.moduleTainted('settings.lua'),true);assert.equal(guard.intact(['math']),false);});

// Scenario: an unknown call receives an expression that refers to imported data.
// Purpose: derived values trigger the same module-wide fallback as a table.
test('UnitT90_imported value within expression triggers fallback',()=>{const files={'settings.lua':'return {attack=10}', 'effects.lua':'local S=require("settings") unknown_call(1 + S.attack) return {}'};const guard=createSharedBindingGuard({exists:p=>p in files,read:p=>files[p]});guard.load('effects.lua');assert.equal(guard.moduleTainted('settings.lua'),true);});

// Scenario: an unsafe dependency is discovered while its cyclic importer is still loading.
// Purpose: later imports in that cycle are also revoked.
test('UnitT95_cyclic dependency fallback reaches later imports',()=>{const files={'a.lua':'local B=require("b") local S=require("settings") return {}','b.lua':'local A=require("a") unknown_call(function() end) return {}','settings.lua':'return {attack=10}'};const guard=createSharedBindingGuard({exists:p=>p in files,read:p=>files[p]});guard.load('a.lua');assert.equal(guard.moduleTainted('settings.lua'),true);});

// Scenario: review19 wrappers and callback factories expose captured imports.
// Purpose: every reported reachable table and closure is conservatively unknown.
test('UnitT96_review19 captured import wrappers fail closed',()=>{
 for(const prime of ['unknown_call(function() return S.distribution end)','unknown_call(function() return {data=S.distribution} end)','unknown_call(function() return {fn=function() S.distribution.attack=999 end} end)','unknown_call(function(cb) cb(S.distribution) end)','unknown_call(function() unknown_call({fn=function() S.distribution.attack=999 end}) end)','local function factory() return function() return function() S.distribution.attack=999 end end end unknown_call(factory())'])assert.equal(uncertain(extract(prime)),true,prime);
 for(const body of ['function() S.distribution.attack=999 end','function() return S.distribution end','function() return {data=S.distribution} end'])assert.equal(uncertain(extract('local F=require("factory") unknown_call(F.callback)',{factory:`local S=require("settings") return {callback=${body}}`})),true,body);
 assert.equal(uncertain(extract('local F=require("factory") unknown_call(F.make())',{factory:'local S=require("settings") return {make=function() return {fn=function() S.distribution.attack=999 end} end}'})),true);
});
// Scenario: escaped callback aliases, wraps or returns the math table.
// Purpose: none can preserve the math.huge non-nil proof.
test('UnitT97_review19 math callback variants fail closed',()=>{for(const prime of ['unknown_call(function() return {fn=function() math.huge=nil end} end)','unknown_call(function() return math end)','local M=math unknown_call(function() M.huge=nil end)'])assert.equal(uncertain(extract(prime,{huge:true})),true,prime);});

// Scenario: a table or function is selected after a literal in an argument expression.
// Purpose: an unknown callee may retain the selected value.
test('UnitT98_expression selects a table or callback',()=>{for(const arg of ['true and {}','1 and function() end']){const files={'settings.lua':'return {attack=10}', 'effects.lua':`local S=require("settings") unknown_call(${arg}) return {}`};const guard=createSharedBindingGuard({exists:p=>p in files,read:p=>files[p]});guard.load('effects.lua');assert.equal(guard.moduleTainted('settings.lua'),true,arg);}});

// Scenario: an escaping foreign callback loads its captured data inside its body.
// Purpose: the dependency remains covered even when require is not top-level.
test('UnitT99_callback nested require invalidates captured import',()=>{const files={'settings.lua':'return {attack=10}','factory.lua':'return {callback=function() local S=require("settings") return {fn=function() S.attack=999 end} end}','effects.lua':'local F=require("factory") unknown_call(F.callback) return {}'};const guard=createSharedBindingGuard({exists:p=>p in files,read:p=>files[p]});guard.load('settings.lua');guard.load('effects.lua');assert.equal(guard.moduleTainted('settings.lua'),true);});
