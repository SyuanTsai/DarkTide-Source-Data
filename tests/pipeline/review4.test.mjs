import {test} from 'node:test';
import assert from 'node:assert/strict';
import {readFileSync} from 'node:fs';
import {createWeaponStats} from '../../pipeline/lib/weapon-stats.mjs';
import {parseLuaStatic,getTableField as field} from '../../pipeline/lib/lua-static-reader.mjs';
const root='scripts/settings/equipment/weapon_templates/';
const damage='scripts/settings/damage/damage_profile_templates.lua';
const mathSource='math.degrees_to_radians=math.rad\nmath.lerp=function(a,b,p)return a*(1-p)+b*p end\n';
const reader=s=>({commit:'a'.repeat(40),exists:p=>p in s,read:p=>s[p],list:(prefix='')=>Object.keys(s).filter(p=>p.startsWith(prefix)).sort()});
const trait=(kind,rows)=>({[root+`weapon_trait_templates/${kind}_trait_templates.lua`]:`local ArmorSettings=require("scripts/settings/damage/armor_settings")\nlocal armor_types=ArmorSettings.types\nlocal ${kind}_trait_templates={test={${rows}}}\nreturn ${kind}_trait_templates`});
function extract(s,kind,{name='test',target='base',actions='{}'}={}) {
 const stats=[],unknown=[],files=[];let absent=0;
 createWeaponStats(reader(s)).extract({source:`weapon_template.${kind}_template="${name}"`,file:'weapon.lua',kind,target,actions:parseLuaStatic('return '+actions).returned,group:parseLuaStatic(`return {${kind}_trait_templates.test}`).returned,files,emit:v=>stats.push(v),unknown:(key,reason)=>unknown.push({key,reason}),notApplicable:()=>absent++});
 return {stats,unknown,files,absent};
}
const ranges=r=>r.stats.map(v=>[v.min,v.max]);


const handling='scripts/settings/equipment/weapon_handling_templates/weapon_handling_templates.lua';
const utility='scripts/utilities/recoil_template.lua';
const base=root+'base_template_settings.lua';
const fixture=n=>readFileSync(new URL('./fixtures/review4/'+n,import.meta.url),'utf8');
// Scenario: runtime and enum expressions are both nonliteral destination indices.
// Purpose: F1 must invalidate stale constants.
test('UnitT10_F1 dynamic keys invalidate existing time scale',()=>{
 for(const key of ['runtime_key','get_runtime_key()']) {
 const s={...trait('weapon_handling','{"time_scale",0.5}'),[handling]:`local weapon_handling_templates={test={time_scale=10}}\nweapon_handling_templates.test[${key}]=20\nreturn weapon_handling_templates`};
 const r=extract(s,'weapon_handling');assert.deepEqual(r.stats,[]);assert.equal(r.unknown[0]?.reason,'DYNAMIC_VALUE');
 }
 const enums={'scripts/settings/damage/armor_settings.lua':'local types=table.enum("other") local armor_settings={types=types} return settings("ArmorSettings",armor_settings)',...trait('weapon_handling','{"time_scale",0.5}'),[handling]:'local ArmorSettings=require("scripts/settings/damage/armor_settings") local keys=ArmorSettings.types local weapon_handling_templates={test={time_scale=10}} weapon_handling_templates.test[keys.other]=20 return weapon_handling_templates'};assert.deepEqual(ranges(extract(enums,'weapon_handling')),[]);assert.equal(extract(enums,'weapon_handling').unknown[0]?.reason,'DYNAMIC_VALUE');
 const p=parseLuaStatic('local keys=table.enum("other") local t={time_scale=10} t[keys.other]=20 return t',{staticArithmetic:true});assert.equal(field(p.returned,'time_scale').reason,'DYNAMIC_VALUE');
});
// Scenario: local, direct and conditional math replacements precede a numeric call.
// Purpose: F2 validates binding instead of spelling.
test('UnitT20_F2 replaced math helpers stay unknown',()=>{
 for(const mutation of ['local math={degrees_to_radians=function(v) return runtime_angle end}','math.degrees_to_radians=function(v) return runtime_angle end','if runtime_flag then math.degrees_to_radians=function(v) return runtime_angle end end']) {
 const s={'scripts/foundation/utilities/math.lua':mathSource,...trait('weapon_handling','{"max_angle",0.5}'),[handling]:mutation+'\nlocal weapon_handling_templates={test={max_angle=math.degrees_to_radians(25)}} return weapon_handling_templates'};
 const r=extract(s,'weapon_handling');assert.deepEqual(r.stats,[]);assert.equal(r.unknown.length,1);
 s[handling]='local weapon_handling_templates={test={max_angle=math.degrees_to_radians(25)}} return weapon_handling_templates';assert.deepEqual(ranges(extract(s,'weapon_handling')),[[0.4363323129985824,0.4363323129985824]]);
 s['scripts/foundation/utilities/math.lua']='-- math.degrees_to_radians=math.rad\n';assert.equal(extract(s,'weapon_handling').stats.length,0);
 }
});
// Scenario: shotshell registry resolves its included damage binding.
// Purpose: F3 recovers the rippergun [0.835,1.165] endpoints.
test('UnitT30_F3 shotshell registry resolves damage',()=>{
 const s={...trait('damage','{"armor_damage_modifier_ranged","near","attack","unarmored",{min=0.25,max=0.75}}'),[damage]:'local damage_templates={default_rippergun_assault={armor_damage_modifier_ranged={near={attack={unarmored={lerp_basic=0.67,lerp_perfect=1.33}}}}}} return damage_templates',
 'weapon.lua':'local ShotshellTemplates=require("scripts/settings/projectile/shotshell_templates")',
 'scripts/utilities/weapon_tweaks.lua':fixture('..'+'/review6/weapon_tweaks.lua'),
 'scripts/settings/projectile/shotshell_templates.lua':'local WeaponTweaks=require("scripts/utilities/weapon_tweaks") local extract_weapon_tweaks=WeaponTweaks.extract_weapon_tweaks local shotshell_templates={} extract_weapon_tweaks("shells",shotshell_templates,{}) return shotshell_templates',
 'shells.lua':'local DamageProfileTemplates=require("scripts/settings/damage/damage_profile_templates") local shotshell_templates={default_rippergun_assault={damage={damage_profile=DamageProfileTemplates.default_rippergun_assault}}} return shotshell_templates'};
 const r=extract(s,'damage',{target:'action_shoot_hip',actions:'{action_shoot_hip={fire_configuration=ShotshellTemplates.default_rippergun_assault}}'});assert.deepEqual(ranges(r),[[0.835,1.165]]);assert.ok(r.files.some(f=>f.path==='shells.lua'));
});
// Scenario: action points to a projectile whose impact binds the explosion.
// Purpose: F4 resolves both force staff radii.
test('UnitT40_F4 projectile explosion binding preserves radii',()=>{
 const s={...trait('explosion','{"radius",{min=0,max=1}},{"close_radius",{min=0.25,max=0.75}}'),'scripts/settings/damage/explosion_templates.lua':'local explosion_templates={force_staff_p4_demolition={radius={lerp_basic=2,lerp_perfect=4},close_radius={lerp_basic=1,lerp_perfect=1.5}}} return explosion_templates',
 'scripts/settings/projectile/projectile_templates.lua':'local projectile_templates={force_staff_ball_heavy={impact={explosion_template="force_staff_p4_demolition"}}} return projectile_templates'};
 assert.deepEqual(ranges(extract(s,'explosion',{target:'action_shoot_charged',actions:'{action_shoot_charged={projectile_template="force_staff_ball_heavy"}}'})),[[2,4],[1.125,1.375]]);
 const p='scripts/settings/projectile/projectile_templates.lua';s[p]=s[p].replace('impact={','alternate={explosion_template="other"},impact={');const e='scripts/settings/damage/explosion_templates.lua';s[e]=s[e].replace('local explosion_templates={','local explosion_templates={other={radius=10,close_radius=5},');const r=extract(s,'explosion',{target:'action_shoot_charged',actions:'{action_shoot_charged={projectile_template="force_staff_ball_heavy"}}'});assert.equal(new Set(r.stats.map(s=>s.key)).size,4);assert.ok(r.stats.some(s=>s.key.includes('.other.')));
});
// Scenario: fixed recoil scales generate finite endpoints; dynamic or changed helpers do not.
// Purpose: F5 recovers autogun and stubber values without executing Lua.
test('UnitT50_F5 finite recoil and spread generators validate source and input',()=>{
 for(const [kind,shots,offset,scale,t,expected] of [['recoil',30,0.015,0.5,0.95,[0.0139125,0.0010875]],['spread',90,0.725,0.4,0.85,[0.51185,0.06815]]]) {
 const file='scripts/settings/equipment/'+kind+'_templates.lua';
 const s={'scripts/foundation/utilities/math.lua':mathSource,...trait(kind,'{"still","offset",1,"pitch",{min=0.05,max=0.95}}'),[utility]:fixture('recoil_template.lua'),[file]:`local RecoilTemplate=require("scripts/utilities/recoil_template") local scale={{1,{${scale},1}},{${shots},{${scale},1}}} local ${kind}_templates={test={still={offset=RecoilTemplate.generate_offset_range(${shots},${offset},0,${t},RecoilTemplate.create_scale(scale))}}} return ${kind}_templates`};
 const valid=extract(s,kind);assert.deepEqual(ranges(valid),[expected]);assert.ok(valid.files.some(f=>f.path===file));assert.ok(valid.files.some(f=>f.path===utility));
 const original=s[file];s[file]=s[file].replace('generate_offset_range('+shots+',','generate_offset_range(10001,');assert.equal(extract(s,kind).stats.length,0);s[file]=original;
 s[file]=s[file].replace(',0,',',runtime_yaw,');assert.equal(extract(s,kind).stats.length,0);
 s[file]=s[file].replace('runtime_yaw','0');s[utility]=s[utility].replace('1 + lerp_distance','2 + lerp_distance');assert.equal(extract(s,kind).stats.length,0);
 s[utility]=fixture('recoil_template.lua').replace('return RecoilTemplate','if runtime_flag then RecoilTemplate.create_scale=function(v) return runtime_scale end end return RecoilTemplate');assert.equal(extract(s,kind).stats.length,0);
 s[utility]=fixture('recoil_template.lua').replace('return RecoilTemplate','_math.lerp=function(a,b,t) return runtime_lerp end return RecoilTemplate');assert.equal(extract(s,kind).stats.length,0);
 }
});
// Scenario: crowbar helper clones a static action, with optional static replacement.
// Purpose: F6 retains callback nodes without executing them and resolves [112.5,157.5].
test('UnitT60_F6 static action copies resolve damage and overrides',()=>{
 const s={...trait('damage','{"targets",1,"power_distribution","attack",{min=0.25,max=0.75}}'),[base]:fixture('base_template_settings.lua'),[damage]:'local damage_templates={light_crowbar_smiter={targets={{power_distribution={attack={lerp_basic=90,lerp_perfect=180}}}}}} return damage_templates',
 'weapon.lua':`local Base=require("${base.slice(0,-4)}") local _generate_action_overrides=Base.generate_action_overrides local BASE_ACTIONS={light_1={damage_profile="light_crowbar_smiter",callback=function() runtime_call() end}} local weapon_template={} weapon_template.actions={action_light_1=_generate_action_overrides(BASE_ACTIONS.light_1)} return weapon_template`};
 assert.deepEqual(ranges(extract(s,'damage',{target:'action_light_1'})),[[112.5,157.5]]);
 s['weapon.lua']=s['weapon.lua'].replace('BASE_ACTIONS.light_1)','BASE_ACTIONS.light_1,"power_level",550)');assert.deepEqual(ranges(extract(s,'damage',{target:'action_light_1'})),[[112.5,157.5]]);
 const staticSource=s['weapon.lua'];s['weapon.lua']=staticSource.replace('550)','{amount=550})');assert.deepEqual(ranges(extract(s,'damage',{target:'action_light_1'})),[[112.5,157.5]]);
 s['weapon.lua']=staticSource.replace('550)','Base.NIL_VALUE_OVERRIDE)');assert.deepEqual(ranges(extract(s,'damage',{target:'action_light_1'})),[[112.5,157.5]]);
 s['weapon.lua']=staticSource.replace('550)','runtime_level)');assert.equal(extract(s,'damage',{target:'action_light_1'}).stats.length,0);
 s['weapon.lua']=s['weapon.lua'].replace('runtime_level)','550)');s[base]=s[base].replace('return action_settings','return runtime_action');assert.equal(extract(s,'damage',{target:'action_light_1'}).stats.length,0);
});

// Scenario: builtin helpers are replaced locally, directly or in a conditional block.
// Purpose: all builtin whitelist calls must respect the current table binding.
test('UnitT70_F2 table whitelist revokes shadowed and mutated bindings',()=>{
 for(const mutation of ['local table={enum=function(v) return runtime_table end}','table.enum=function(v) return runtime_table end','if flag then table.enum=function(v) return runtime_table end end']) {
  const p=parseLuaStatic(mutation+' local keys=table.enum("other") return keys',{staticArithmetic:true,allowUnsupported:true});assert.equal(p.returned.type,'call');
 }
});
// Scenario: foundation proof text occurs only in a string or a runtime branch.
// Purpose: actual top-level alias evidence is required for the angle whitelist.
test('UnitT80_F2 foundation alias evidence cannot come from string or branch',()=>{
 for(const foundation of ['math.degrees_to_radians=runtime_fn local text="math.degrees_to_radians=math.rad"','if runtime_flag then math.degrees_to_radians=math.rad end','math.degrees_to_radians=math.rad if flag then math.degrees_to_radians=runtime_fn end']) {
  const s={'scripts/foundation/utilities/math.lua':foundation,...trait('weapon_handling','{"max_angle",0.5}'),[handling]:'local weapon_handling_templates={test={max_angle=math.degrees_to_radians(25)}} return weapon_handling_templates'};assert.equal(extract(s,'weapon_handling').stats.length,0);
 }
});
// Scenario: static table mutation is a standalone statement before the action helper.
// Purpose: parsing a finite mutation must not discard the remaining module.
test('UnitT90_F6 table copy statements preserve following declarations',()=>{
 const p=parseLuaStatic('local t={} local defaults={value=10} table.add_missing(t,defaults) local later={value=20} return {t=t,later=later}',{staticArithmetic:true,allowUnsupported:true});assert.equal(field(p.locals.t,'value').value,10);assert.equal(field(p.locals.later,'value').value,20);
});
