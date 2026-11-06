import {test} from 'node:test';
import assert from 'node:assert/strict';
import {readFileSync,readdirSync,statSync} from 'node:fs';
import path from 'node:path';
import {fileURLToPath} from 'node:url';
import {fixture,put,commit,cli} from './helpers.mjs';
const base='scripts/settings/equipment/weapon_templates/';
function setup(t) {
 const f=fixture(t);
 const copy=(dir,prefix='')=>{for(const name of readdirSync(dir)){const file=path.join(dir,name),rel=prefix+name;if(statSync(file).isDirectory())copy(file,rel+'/');else put(f.source,rel,readFileSync(file));}};
 copy(fileURLToPath(new URL('./fixtures/weapons/',import.meta.url)));
 const sha=commit(f.source);assert.equal(cli('extract-text.mjs',f.textArgs).status,0);
 const args=f.sourceArgs.map(x=>x===f.sha?sha:x);
 const run=()=>{const r=cli('extract-weapons.mjs',args);assert.equal(r.status,0,r.stderr);return JSON.parse(readFileSync(path.join(f.work,'extract/weapons.json')));};
 return {...f,args,run};
}
// Scenario: pinned ranged/melee, trait rows and inherited profiles are extracted twice.
// Purpose: protect interpolation, links, ordering, precision and deterministic CLI output.
test('InterT10_weapon rows interpolate actual templates and preserve contracts',t=>{
 const f=setup(t),data=f.run(),w=data.items.find(x=>x.key==='autogun_p1_m1');
 assert.equal(data.status,'ok');assert.equal(data.items.length,3);
 assert.equal(w.id,'darktide:weapon:autogun_p1_m1');assert.equal(w.values.family,'autogun_p1');assert.equal(w.values.mark,'m1');assert.equal(w.values.weaponType,'darktide:term:weapon-type:autogun_p1');
 assert.deepEqual(w.values.actions.map(x=>x.slot),['primary','secondary','special']);
 assert.deepEqual(w.values.actions[0].name,{en:'Autogun',zh:'自動槍'});assert.deepEqual(w.values.actions[1].name,{en:null,zh:null});
 assert.deepEqual(w.values.params.keywords.value,['ranged']);assert.deepEqual(w.values.params.displayed_keywords.value,['loc_autogun_p1_m1']);
 const unregistered=data.items.find(x=>x.key==='autogun_p1_m2');assert.deepEqual(unregistered.values.actions,[]);assert.equal(unregistered.values.params.ammo_clip.unknown,'DYNAMIC_VALUE');assert.ok(data.problems.some(x=>x.code==='NO_DISPLAYED_ATTACKS'&&x.id===unregistered.id));
 const stats=new Map(w.values.bars[0].stats.map(x=>[x.key,x]));
 for(const [key,min,max] of [['recoil.base.moving.pitch',3,5],['recoil.base.pitch',3.8,7.8],['recoil.base.fixed',9,9],['recoil.base.constant',4,4],['recoil.base.array.1',2,4],['recoil.base.array.2',12,16],['damage.action_shoot.child.power_distribution.attack',20,40],['damage.action_shoot.child.armor.armor_types.armored',0.35,0.65],['damage.action_shoot.child.ranges.min',15,25]]) {
  assert.equal(stats.get(key)?.min,min,key);assert.equal(stats.get(key)?.max,max,key);
 }
 assert.equal(stats.get('recoil.base.precise').min,0.123456789012345);
 assert.deepEqual(stats.get('recoil.base.pitch').name,{en:'Autogun',zh:'自動槍'});
 assert.equal(w.values.bars.length,2);assert.ok(Object.values(w.values.params).some(x=>x.unknown==='DYNAMIC_VALUE'));
 assert.deepEqual(w.values.params.ammo_reserve.value,[100,200]);assert.deepEqual(w.values.params.ammo_clip.value,[20,40]);
 assert.deepEqual(w.values.blessings,['darktide:blessing:weapon_trait_bespoke_test']);assert.equal(w.name.origin,'official');
 const melee=data.items.find(x=>x.key==='sword_p1_m1');assert.deepEqual(melee.values.actions.map(x=>x.slot),['primary','primary.chain.1','primary.chain.2','secondary']);assert.ok(!melee.values.params.ammo_clip);assert.equal(melee.name.origin,'internal');
 assert.equal(data.problems.filter(x=>x.code==='ARCHETYPES_NOT_EXPOSED').length,1);assert.equal(data.problems.filter(x=>x.code==='UNREGISTERED_TEMPLATE').length,1);assert.equal(data.problems.filter(x=>x.code==='DUPLICATE_STAT').length,0);
 assert.ok(data.problems.some(x=>x.code==='UNRESOLVED_STAT'&&x.reason==='TRAIT_NOT_FOUND'));
 assert.ok(w.source.files.some(x=>x.path.endsWith('test_damage_profile_templates.lua')&&x.line>1));
 const file=path.join(f.work,'extract/weapons.json'),first=readFileSync(file);f.run();assert.deepEqual(readFileSync(file),first);
});
// Scenario: more than half the registered templates lose required tables.
// Purpose: structural drift must write a fallback envelope and exit successfully.
test('InterT20_weapon structural mismatch writes empty output with exit zero',t=>{
 const f=setup(t);for(const file of ['guns/autogun_p1_m1.lua','melee/sword_p1_m1.lua','guns/autogun_p1_m2.lua'])put(f.source,base+file,'local weapon_template = {}\nreturn weapon_template\n');
 const sha=commit(f.source),r=cli('extract-weapons.mjs',f.args.map(x=>/^[a-f0-9]{40}$/.test(x)?sha:x));assert.equal(r.status,0,r.stderr);const data=JSON.parse(readFileSync(path.join(f.work,'extract/weapons.json')));assert.equal(data.status,'structure-mismatch');assert.deepEqual(data.items,[]);
});

test('review F5 weapon base_stats conditional alias writes cannot expose earlier stats',t=>{
 const f=setup(t),file=base+'guns/autogun_p1_m1.lua';
 const original=readFileSync(path.join(f.source,file),'utf8');
 put(f.source,file,original.replace('return weapon_template',`local alias=weapon_template.base_stats.test_stat.recoil\nif runtime_flag then table.merge(alias, runtime_changes) end\nreturn weapon_template`));
 const sha=commit(f.source),r=cli('extract-weapons.mjs',f.args.map(x=>/^[a-f0-9]{40}$/.test(x)?sha:x));
 assert.equal(r.status,0,r.stderr);
 const data=JSON.parse(readFileSync(path.join(f.work,'extract/weapons.json'))),w=data.items.find(x=>x.key==='autogun_p1_m1');
 assert.ok(!w.values.bars.flatMap(b=>b.stats).some(s=>s.key.startsWith('recoil.')));
 assert.ok(data.problems.some(p=>p.code==='UNRESOLVED_STAT'&&p.id===w.id));
});
import './extract-weapons.real.test.mjs';


// Scenario: static catalogs contain unsupported arithmetic between valid declarations.
// Purpose: preserve readable declarations without executing expressions or functions.
test('UnitT30_unknown reasons distinguish dynamic values and missing paths',async()=>{
 const {createWeaponStats}=await import('../../pipeline/lib/weapon-stats.mjs');
 const {parseLuaStatic}=await import('../../pipeline/lib/lua-static-reader.mjs');
 const sources={
  [base+'weapon_trait_templates/recoil_trait_templates.lua']:`local recoil_trait_templates = {test={
 {"ok",{min=0,max=1}},
 {"call",0.5},{"call","nested",0.5},{"condition",0.5},{"absent",0.5}}}\nreturn recoil_trait_templates`,
  'scripts/settings/equipment/recoil_templates.lua':`local unused = numerator / denominator\nlocal recoil_templates = {test={ok={lerp_basic=0.123456,lerp_perfect=0.987654},call=function() return 1 end,condition=flag and 1 or 2}}\nreturn recoil_templates`
 };
 const reader={exists:p=>p in sources,read:p=>sources[p]},engine=createWeaponStats(reader),stats=[],unknown=[];
 const group=parseLuaStatic('return {recoil_trait_templates.test}').returned;
 engine.extract({source:'weapon_template.recoil_template = "test"',file:'weapon.lua',kind:'recoil',target:'base',group,files:[],emit:x=>stats.push(x),unknown:(key,reason)=>unknown.push({key,reason})});
 assert.deepEqual(stats,[{key:'recoil.base.ok',min:0.123456,max:0.987654}]);
 assert.deepEqual(unknown.map(x=>x.reason),['FUNCTION_VALUE','FUNCTION_VALUE','CONDITIONAL_OR_EXPRESSION']);
});
// Scenario: the weapon tree is absent or its registry contains no player templates.
// Purpose: both empty inventories must be structural failures, never successful extracts.
test('UnitT40_absent and empty weapon trees throw StructureError',async()=>{
 const {buildWeapons}=await import('../../pipeline/extract-weapons.mjs');
 const {StructureError}=await import('../../pipeline/lib/errors.mjs');
 for(const files of [{},{[base+'weapon_templates.lua']:'local template_groups = {{"bot","bot_p1_m1"}}\nlocal template_names = {}\nreturn template_groups',[base+'bot/bot_p1_m1.lua']:'local weapon_template = {}\nreturn weapon_template'}]) {
  const reader={list:prefix=>Object.keys(files).filter(p=>p.startsWith(prefix)),exists:p=>p in files,read(p){if(!(p in files))throw new StructureError('source','FILE_MISSING',p);return files[p];}};
  await assert.rejects(buildWeapons({reader,text:{lookup:()=>null},envelope:{}}),StructureError);
 }
});
