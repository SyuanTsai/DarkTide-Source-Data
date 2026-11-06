import {createWeaponStats} from '../../pipeline/lib/weapon-stats.mjs';
import {analyzeLuaEffects} from '../../pipeline/lib/lua-effects.mjs';
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
// Scenario: shallow_copy shares math and a member is overwritten through the copy.
// Purpose: shared child writes cannot retain the original math.abs value.
test('UnitT50_shallow copy fixture retains shared child effects',()=>{
 const r=resolver(fixture('shallow-copy'));
 assert.deepEqual(skillParams(r,r.returned('x.lua'),'x',[],[]).damage,{value:null,unknown:'DYNAMIC_VALUE'});
});
// Scenario: a cloned nested table is subsequently written.
// Purpose: game table.clone is deep and must preserve the original value.
test('UnitT60_deep clone preserves original nested value',()=>{
 const r=resolver(fixture('deep-clone'));
 assert.deepEqual(skillParams(r,r.returned('x.lua'),'x',[],[]).damage,{value:10});
});
// Scenario: the real adamant helper call is followed by two computed member writes.
// Purpose: computed stat keys update only the cloned stat_buffs.
test('UnitT70_adamant clone retains separate stat buff identities',()=>{
 const r=resolver(fixture('adamant-clone')),t=r.returned('x.lua');
 const base=r.get(r.get(t,'adamant_terminus_warrant_melee_stat_buff'),'stat_buffs');
 const improved=r.get(r.get(t,'adamant_terminus_warrant_melee_stat_buff_improved'),'stat_buffs');
 assert.notEqual(base,improved);
 assert.equal(r.field(base,'melee_rending_multiplier'),undefined);
 assert.equal(r.scalar(r.get(improved,'melee_rending_multiplier')),0.15);
 assert.equal(r.scalar(r.get(improved,'melee_attack_speed')),0.1);
});
// Scenario: nested tables are shared through local names or shallow_copy.
// Purpose: all consumers distinguish a deep clone from a shared child identity.
test('UnitT80_copy helpers agree across skill eager lazy and closure readers',()=>{
 for(const [helper,expected]of [['table.clone',10],['table.clone_instance',10],['table.shallow_copy',99]]) {
  const source=`local nested={value=10}\nlocal base={nested=nested}\nlocal copy=${helper+'(base)'}\ncopy.nested.value=99\nreturn base`;
  const files={'x.lua':source},reader={exists:p=>p in files,read:p=>files[p],list:()=>[]};
  const r=createSkillResolver(reader);assert.equal(r.scalar(r.get(r.get(r.returned('x.lua'),'nested'),'value')),expected,'skill '+helper);
  const eager=parseLuaStatic(source.replace('return base','local observed=base.nested.value\nreturn base'),{staticArithmetic:true,allowUnsupported:true});assert.equal(eager.locals.observed.value,expected,'eager '+helper);
  const lazy=staticBuffModules(reader);assert.equal(lazy.get(lazy.get(lazy.load('x.lua'),'nested'),'value').value,expected,'lazy '+helper);
  assert.equal(resolveReference(reader,'x.lua','base.nested.value')?.node.value,expected,'closure '+helper);
 }
});
// Scenario: a nested copy contains math and its member is overwritten.
// Purpose: effect analysis preserves shallow aliases while isolating deep copies.
test('UnitT90_effect graph distinguishes deep and shallow nested aliases',()=>{
 for(const helper of ['table.clone','table.clone_instance','table.shallow_copy']) {
  const analysis=analyzeLuaEffects('local nested={m=math}\nlocal base={nested=nested}\nlocal copy='+helper+'(base)\ncopy.nested.m.abs=function(v) return 99 end\nreturn base');
  assert.equal(analysis.writes.includes('math'),helper==='table.shallow_copy',helper);
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


// Scenario: two fields refer to the same child before a recursive game clone.
// Purpose: recursive clone creates independent children for sibling entries.
test('UnitT96_deep clone duplicates repeated child references independently',()=>{
 const effects=analyzeLuaEffects('local shared={value=10}\nlocal base={a=shared,b=shared}\nlocal copy=table.clone(base)\nreturn copy');
 const [identity]=effects.bindings.get('copy');
 assert.notDeepEqual(effects.slots.get(identity+'.a'),effects.slots.get(identity+'.b'));
 const source='local shared={value=10}\nlocal base={a=shared,b=shared}\nlocal copy=table.clone(base)\ncopy.b.value=99\nlocal observed=copy.a.value\nreturn copy';
 const reader={exists:p=>p==='x.lua',read:()=>source,list:()=>[]};
 const r=createSkillResolver(reader);assert.equal(r.scalar(r.get(r.get(r.returned('x.lua'),'a'),'value')),10);
 assert.equal(parseLuaStatic(source,{staticArithmetic:true}).locals.observed.value,10);
 const lazy=staticBuffModules(reader);assert.equal(lazy.get(lazy.get(lazy.load('x.lua'),'a'),'value').value,10);
 assert.equal(resolveReference(reader,'x.lua','observed')?.node.value,10);
});
// Scenario: a cloned hitscan carries a required damage profile table.
// Purpose: deep cloning retains the profile identity needed by weapon extraction.
test('UnitT97_weapon clone retains required damage profile provenance',()=>{
 const files={
  'scripts/settings/damage/damage_profile_templates.lua':'local damage_templates={sample={power_distribution={attack={100,200}}}}\nreturn damage_templates',
  'scripts/settings/projectile/hit_scan_templates.lua':'local DamageProfileTemplates=require("scripts/settings/damage/damage_profile_templates")\nlocal hitscan_templates={base={damage={impact={damage_profile=DamageProfileTemplates.sample}}}}\nhitscan_templates.copy=table.clone(hitscan_templates.base)\nreturn hitscan_templates',
  'scripts/settings/equipment/weapon_templates/weapon_trait_templates/damage_trait_templates.lua':'local damage_trait_templates={sample={{"power_distribution","attack",{min=0,max=1}}}}\nreturn damage_trait_templates',
  'weapon.lua':'local weapon_template={actions={action={hit_scan_template="copy"}}}\nreturn weapon_template'
 };
 const reader={exists:p=>p in files,read:p=>files[p],list:()=>[]},engine=createWeaponStats(reader),stats=[];
 engine.extract({source:files['weapon.lua'],file:'weapon.lua',kind:'damage',target:'action',group:parseLuaStatic('return {damage_trait_templates.sample}').returned,files:[],emit:s=>stats.push(s),unknown:(key,reason)=>assert.fail(key+':'+reason)});
 assert.deepEqual(stats.map(s=>[s.min,s.max]),[[100,200]]);
});

// Scenario: a required profile resolves to an unsupported node while cloning.
// Purpose: retain symbolic provenance without converting unknown data to numbers.
test('UnitT98_clone preserves provenance of unsupported imported children',()=>{
 const parsed=parseLuaStatic('local Profiles=require("profiles")\nlocal base={damage_profile=Profiles.sample}\nlocal copy=table.clone(base)\nreturn copy',{filename:'x.lua',allowUnsupported:true,staticArithmetic:true,resolveImport:()=>({type:'table',entries:[{key:{type:'string',value:'sample'},value:{type:'unsupported',reason:'DYNAMIC_VALUE'}}]})});
 const profile=getTableField(parsed.returned,'damage_profile');
 assert.equal(profile.type,'unsupported');assert.equal(profile.reason,'DYNAMIC_VALUE');
 assert.equal(profile._cloneReference?.ref,'Profiles.sample');
 assert.equal(profile._cloneReference?._file,'x.lua');
});
