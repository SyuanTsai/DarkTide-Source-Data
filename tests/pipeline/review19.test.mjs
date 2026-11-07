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
// Purpose: document the current behavior rather than promise conservative fallback.
// Known limitation: see pipeline/README.md「Lua 靜態解析器前提」；assert current behavior.
test('UnitT30_known limitation: imported returned table callback remains known',()=>assert.equal(uncertain(extract('local F=require("factory") unknown_call(F.callback)',{factory:'local S=require("settings") local F={callback=function() return {fn=function() S.distribution.attack=999 end} end} return F'})),false));
// Scenario: a callback returns its mutator through a lexical do block.
// Purpose: document the current behavior rather than promise conservative fallback.
// Known limitation: see pipeline/README.md「Lua 靜態解析器前提」；assert current behavior.
test('UnitT40_known limitation: callback returned through do block remains known',()=>assert.equal(uncertain(extract('unknown_call(function() do return function() S.distribution.attack=999 end end end)')),false));
// Scenario: an imported returned table hides math.huge=nil in its nested callback.
// Purpose: document the current behavior rather than promise conservative fallback.
// Known limitation: see pipeline/README.md「Lua 靜態解析器前提」；assert current behavior.
test('UnitT50_known limitation: imported wrapped math callback retains proof',()=>assert.equal(uncertain(extract('local F=require("factory") unknown_call(F.callback)',{factory:'local F={callback=function() return {fn=function() math.huge=nil end} end} return F',huge:true})),false));

// Scenario: the imported table itself contains a captured mutator.
// Purpose: document the current behavior rather than promise conservative fallback.
// Known limitation: see pipeline/README.md「Lua 靜態解析器前提」；assert current behavior.
test('UnitT60_known limitation: imported table escape leaves distribution known',()=>assert.equal(uncertain(extract('local F=require("factory") unknown_call(F)',{factory:'local S=require("settings") return {callback=function() S.distribution.attack=999 end}'})),false));
// Scenario: callbacks return mutators from each control-flow form.
// Purpose: document the current behavior rather than promise conservative fallback.
// Known limitation: see pipeline/README.md「Lua 靜態解析器前提」；assert current behavior.
test('UnitT70_known limitation: control flow returned callbacks have mixed results',()=>{for(const block of ['for i=1,1 do return function() S.distribution.attack=999 end end','while condition do return function() S.distribution.attack=999 end end','repeat return function() S.distribution.attack=999 end until condition','if condition then return function() S.distribution.attack=999 end end'])assert.equal(uncertain(extract(`unknown_call(function() ${block} end)`)),block.startsWith('if '),block);});

// Scenario: a module directly returns a closure capturing an imported table.
// Purpose: document the current behavior rather than promise conservative fallback.
// Known limitation: see pipeline/README.md「Lua 靜態解析器前提」；assert current behavior.
test('UnitT80_known limitation: returned closure leaves imported distribution untainted',()=>{const files={'settings.lua':'return {attack=10}', 'factory.lua':'local S=require("settings") return function() S.attack=999 end'};const guard=createSharedBindingGuard({exists:p=>p in files,read:p=>files[p]});guard.load('factory.lua');assert.equal(guard.moduleTainted('settings.lua'),false);assert.equal(guard.intact(['math']),true);});

// Scenario: an unknown call receives an expression that refers to imported data.
// Purpose: document the current behavior rather than promise conservative fallback.
// Known limitation: see pipeline/README.md「Lua 靜態解析器前提」；assert current behavior.
test('UnitT90_known limitation: imported value within expression does not trigger fallback',()=>{const files={'settings.lua':'return {attack=10}', 'effects.lua':'local S=require("settings") unknown_call(1 + S.attack) return {}'};const guard=createSharedBindingGuard({exists:p=>p in files,read:p=>files[p]});guard.load('effects.lua');assert.equal(guard.moduleTainted('settings.lua'),false);});

// Scenario: repeated extraction reports the same missing profile into shared problems.
// Purpose: indexed deduplication preserves the existing entries and avoids duplicates.
test('UnitT92_repeated extraction preserves unique problems',()=>{const files={'weapon.lua':'local weapon_template={actions={attack={damage_profile="missing"}}} return weapon_template'};const engine=createWeaponStats({exists:p=>p in files,read:p=>files[p]});const actions=engine.actions('weapon.lua'),problems=[{code:'EXISTING'}];const options={actions,file:'weapon.lua',id:'test',problems};engine.damageProfiles(options);const first=structuredClone(problems);assert.ok(first.length>1);engine.damageProfiles(options);assert.deepEqual(problems,first);});

// Scenario: an unsafe dependency is discovered while its cyclic importer is still loading.
// Purpose: document the current behavior rather than promise conservative fallback.
// Known limitation: see pipeline/README.md「Lua 靜態解析器前提」；assert current behavior.
test('UnitT95_known limitation: cyclic dependency leaves later import untainted',()=>{const files={'a.lua':'local B=require("b") local S=require("settings") return {}','b.lua':'local A=require("a") unknown_call(function() end) return {}','settings.lua':'return {attack=10}'};const guard=createSharedBindingGuard({exists:p=>p in files,read:p=>files[p]});guard.load('a.lua');assert.equal(guard.moduleTainted('settings.lua'),false);});

// Scenario: review19 wrappers and callback factories expose captured imports.
// Purpose: document the current behavior rather than promise conservative fallback.
// Known limitation: see pipeline/README.md「Lua 靜態解析器前提」；assert current behavior.
test('UnitT96_known limitation: imported callback wrappers have mixed results',()=>{
 for(const prime of ['unknown_call(function() return S.distribution end)','unknown_call(function() return {data=S.distribution} end)','unknown_call(function() return {fn=function() S.distribution.attack=999 end} end)','unknown_call(function(cb) cb(S.distribution) end)','unknown_call(function() unknown_call({fn=function() S.distribution.attack=999 end}) end)','local function factory() return function() return function() S.distribution.attack=999 end end end unknown_call(factory())'])assert.equal(uncertain(extract(prime)),true,prime);
 for(const body of ['function() S.distribution.attack=999 end','function() return S.distribution end','function() return {data=S.distribution} end'])assert.equal(uncertain(extract('local F=require("factory") unknown_call(F.callback)',{factory:`local S=require("settings") return {callback=${body}}`})),body.startsWith('function() S.'),body);
 assert.equal(uncertain(extract('local F=require("factory") unknown_call(F.make())',{factory:'local S=require("settings") return {make=function() return {fn=function() S.distribution.attack=999 end} end}'})),false);
});
// Scenario: escaped callback aliases, wraps or returns the math table.
// Purpose: none can preserve the math.huge non-nil proof.
test('UnitT97_review19 math callback variants fail closed',()=>{for(const prime of ['unknown_call(function() return {fn=function() math.huge=nil end} end)','unknown_call(function() return math end)','local M=math unknown_call(function() M.huge=nil end)'])assert.equal(uncertain(extract(prime,{huge:true})),true,prime);});

// Scenario: a table or function is selected after a literal in an argument expression.
// Purpose: document the current behavior rather than promise conservative fallback.
// Known limitation: see pipeline/README.md「Lua 靜態解析器前提」；assert current behavior.
test('UnitT98_known limitation: expression-selected table or callback leaves import untainted',()=>{for(const arg of ['true and {}','1 and function() end']){const files={'settings.lua':'return {attack=10}', 'effects.lua':`local S=require("settings") unknown_call(${arg}) return {}`};const guard=createSharedBindingGuard({exists:p=>p in files,read:p=>files[p]});guard.load('effects.lua');assert.equal(guard.moduleTainted('settings.lua'),false,arg);}});

// Scenario: an escaping foreign callback loads its captured data inside its body.
// Purpose: document the current behavior rather than promise conservative fallback.
// Known limitation: see pipeline/README.md「Lua 靜態解析器前提」；assert current behavior.
test('UnitT99_known limitation: callback nested require leaves import untainted',()=>{const files={'settings.lua':'return {attack=10}','factory.lua':'return {callback=function() local S=require("settings") return {fn=function() S.attack=999 end} end}','effects.lua':'local F=require("factory") unknown_call(F.callback) return {}'};const guard=createSharedBindingGuard({exists:p=>p in files,read:p=>files[p]});guard.load('settings.lua');guard.load('effects.lua');assert.equal(guard.moduleTainted('settings.lua'),false);});
