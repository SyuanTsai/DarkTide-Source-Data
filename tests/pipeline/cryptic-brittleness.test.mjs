import { test } from 'node:test';
import assert from 'node:assert/strict';
import { readdirSync, readFileSync } from 'node:fs';
import { buildSkills } from '../../pipeline/extract-skills.mjs';
import { validateExtractItems } from '../../pipeline/lib/extract-output.mjs';
import { expandOfficialEffect } from '../../pipeline/lib/official-effect.mjs';
import { checkText } from '../../pipeline/lib/verify/text.mjs';
import { checkValues } from '../../pipeline/lib/verify/values.mjs';

const ARC='scripts/settings/fx/effect_templates/arc_chain_lightning_source/arc_grenade_chain_lightning_source.lua';
const PASSIVE='scripts/settings/buff/archetype_buff_templates/cryptic_buff_templates.lua';
const WEAPON='scripts/settings/buff/weapon_buff_templates.lua';
const REGISTRY='scripts/settings/buff/buff_templates.lua';
const TALENTS='scripts/settings/ability/archetype_talents/talents/cryptic_talents.lua';
const SETTINGS='scripts/settings/talent/talent_settings.lua';
const KEYS=['cryptic_arc_grenades_brittleness','cryptic_electrocution_applies_brittleness'];
const envelope={gameVersion:'1.13.4',sourceCommit:'e'.repeat(40),textBatch:'26101089'};

function fixture() {
  const files=new Map();
  function copy(dir,prefix='') {
    for(const e of readdirSync(dir,{withFileTypes:true})) {
      const name=prefix+e.name,url=new URL(e.name+(e.isDirectory()?'/':''),dir);
      if(e.isDirectory())copy(url,name+'/');else files.set(name,readFileSync(url,'utf8'));
    }
  }
  copy(new URL('./fixtures/cryptic-brittleness/',import.meta.url));
  files.set('scripts/settings/ability/archetype_talents/archetype_talents.lua','return {}');
  files.set('scripts/ui/views/talent_builder_view/utilities/talent_layout_parser.lua','local FIND_VALUE_FUNCTIONS={buff_template=function() end} return {}');
  files.set('scripts/ui/views/talent_builder_view/layouts/cryptic_tree.lua',`return {archetype_name="cryptic",name="cryptic_tree",nodes={${[...KEYS,'unrelated'].map((key,i)=>`{talent="${key}",widget_name="n${i}",type="stat",parents={}}`).join(',')}}}`);
  files.set(SETTINGS,'return {cryptic={arc_grenade={extra_arcs=2,rending_stacks_on_minions_hit_by_arc=8},cryptic_electrocution_applies_brittleness={stacks=3}}}');
  files.set('scripts/utilities/fixed_frame.lua','return {}');
  files.set('scripts/settings/ability/special_rules_settings.lua','return {special_rules=table.enum("cryptic_arc_grenade_gives_brittleness")}');
  files.set('scripts/settings/buff/buff_settings.lua','return {proc_events=table.enum("on_buff_added","on_buff_stack_added","on_max_stack_refresh_buff","on_stackable_buff_refresh_duration"),group_keywords=table.enum("electrocuted"),group_to_keywords={electrocuted={electrocuted=true}},stat_buffs=table.enum("rending_multiplier")}');
  files.set(WEAPON,'local BuffSettings=require("scripts/settings/buff/buff_settings")\nlocal buff_stat_buffs=BuffSettings.stat_buffs\nreturn {rending_debuff={stat_buffs={\n[buff_stat_buffs.rending_multiplier]=0.025\n}}}');
  files.set(REGISTRY,`local templates={}
local _create_entry=function(path, optional_default_buff_category)
  local entry_templates = require(path)
  for name, template in upairs(entry_templates) do
    templates[name] = template
    template.name = template.name or name
    template.buff_category = template.buff_category or optional_default_buff_category or buff_categories.generic
  end
end
_create_entry("${WEAPON.slice(0,-4)}")
_create_entry("${PASSIVE.slice(0,-4)}")
return templates`);
  const texts=new Map([
    ['loc_talent_cryptic_arc_grenades_brittleness_desc',{en:'Increase Arcs by {number:%s}. Apply {stacks:%s} Stacks of 2.5% Brittleness.',zh:'你的{talent_name:%s}電弧數量增加{number:%s}。施加{stacks:%s}層2.5%脆弱。'}],
    ['loc_talent_cryptic_electrocution_applies_brittleness_desc',{en:'Electrocuting applies {stacks:%s} Stacks of 2.5% Brittleness.',zh:'電擊施加{stacks:%s}層2.5%脆弱。'}],
    ['loc_talent_cryptic_arc_grenades',{en:'Arc Grenades',zh:'電弧手榴彈'}],
    ['loc_unrelated_desc',{en:'Apply {stacks:%s}.',zh:'施加{stacks:%s}層。'}]
  ]);
  const text={batch:envelope.textBatch,lookup:key=>texts.get(key)??{en:'Skill',zh:'技能'}};
  const reader={commit:envelope.sourceCommit,exists:p=>files.has(p),read:p=>files.get(p),list:(prefix='')=>[...files.keys()].filter(p=>p.startsWith(prefix)).sort()};
  const run=()=>buildSkills({reader,text,envelope});
  const change=(p,from,to)=>{assert.ok(files.get(p).includes(from),from);files.set(p,files.get(p).replace(from,to));};
  return {files,text,run,change};
}

function checks(data,text,key) {
  const item=data.items.find(i=>i.key===key);
  const effect=expandOfficialEffect(item,text,data.effectFormats[item.id]);
  assert.equal(effect.status,'complete');
  const candidate={...structuredClone(item),explanation:{effect:effect.text,effectOrigin:'official',conditions:'',calculation:'',notes:'',extra:''},errata:[]};
  return {item,candidate,text:checkText(candidate,item,[],[],new Map()),values:checkValues(candidate,item,undefined,[])};
}

// Scenario: the audited calls apply a registry buff whose ratio is absent from format_values.
// Purpose: both skills gain source-derived proof and pass the unchanged text/value gates.
test('UnitT10_cryptic per-stack ratios and provenance pass text and values',()=>{
  const f=fixture(),data=f.run();
  assert.deepEqual(validateExtractItems('skills',data.items,envelope),[]);
  for(const key of KEYS) {
    const c=checks(data,f.text,key);
    assert.deepEqual(c.item.values.params.brittleness_per_stack,{value:0.025,unit:'ratio'},key);
    assert.deepEqual(c.text,{failures:[],notes:[]});assert.deepEqual(c.values,[]);
    assert.ok(c.item.source.files.some(s=>s.path===WEAPON&&s.line===4));
    assert.ok(c.item.source.files.some(s=>s.path===REGISTRY&&s.line===10));
    assert.ok(c.item.source.files.some(s=>s.path===(key===KEYS[0]?ARC:PASSIVE)));
    const before=structuredClone(c.item);delete before.values.params.brittleness_per_stack;
    assert.ok(checkText({...c.candidate,values:before.values},before,[],[],new Map()).failures.some(x=>x.code==='T_NUMBER'));
    assert.ok(checkValues(c.candidate,before,undefined,[]).some(x=>x.code==='V_FIELD_CHANGED'));
  }
  assert.ok(!data.problems.some(p=>KEYS.some(k=>p.id?.endsWith(':'+k))));
});

// Scenario: one reference, callback, binding, registry include or raw value becomes unprovable.
// Purpose: refuse supplementation without an unknown parameter or a skipped numeric gate.
test('UnitT20_broken or dynamic chains retain T_NUMBER',()=>{
  const cases=[
    [TALENTS,'special_rules.cryptic_arc_grenade_gives_brittleness','special_rules.changed',[KEYS[0]]],
    [TALENTS,'buff_template_name = "cryptic_electrocution_applies_brittleness"','buff_template_name = "changed"',[KEYS[1]]],
    [ARC,'has_special_rule("cryptic_arc_grenade_gives_brittleness")','has_special_rule("changed")',[KEYS[0]]],
    [ARC,'on_chain_node_add_func = _on_chain_node_add_func','on_chain_node_add_func = changed',[KEYS[0]]],
    [ARC,'"rending_debuff"','"other_debuff"',[KEYS[0]]],
    [PASSIVE,'"rending_debuff"','"other_debuff"',[KEYS[1]]],
    [PASSIVE,'group_keywords.electrocuted','group_keywords.changed',[KEYS[1]]],
    [PASSIVE,'local talent_settings = TalentSettings.cryptic','local talent_settings = TalentSettings.changed',[KEYS[1]]],
    [PASSIVE,'local group_to_keywords = BuffSettings.group_to_keywords','local group_to_keywords = BuffSettings.changed',[KEYS[1]]],
    [PASSIVE,'local FixedFrame = require("scripts/utilities/fixed_frame")','local FixedFrame = require("scripts/utilities/changed")',[KEYS[1]]],
    [PASSIVE,'local templates = {}','local ScriptUnit = {}\nlocal templates = {}',[KEYS[1]]],
    [PASSIVE,'return templates','talent_settings = {}\nreturn templates',[KEYS[1]]],
    [PASSIVE,'return templates','templates.cryptic_electrocution_applies_brittleness.proc_func = function() end\nreturn templates',[KEYS[1]]],
    [REGISTRY,`_create_entry("${WEAPON.slice(0,-4)}")`,'',KEYS],
    [REGISTRY,`_create_entry("${PASSIVE.slice(0,-4)}")`,'',[KEYS[1]]],
    [WEAPON,'0.025','function() return 0.025 end',KEYS],
    [WEAPON,'0.025','runtime_value',KEYS],
    [WEAPON,'0.025','0/0',KEYS],
    [WEAPON,'rending_multiplier]=0.025','other_stat]=0.025',KEYS]
  ];
  for(const [file,from,to,keys] of cases) {
    const f=fixture();f.change(file,from,to);const data=f.run();
    for(const key of keys) {
      const c=checks(data,f.text,key);
      assert.ok(!Object.hasOwn(c.item.values.params,'brittleness_per_stack'),`${file}: ${from}: ${key}`);
      assert.ok(c.text.failures.some(x=>x.code==='T_NUMBER'),`${file}: ${from}: ${key}`);
      assert.ok(!c.text.notes.some(x=>x.code==='ERRATA_CHECK_SKIPPED_UNKNOWN'));
    }
  }
});

// Scenario: the source ratio changes while localization still states 2.5%.
// Purpose: extract the new value and let the existing verifier reject the mismatch.
test('UnitT30_source ratio 0.02 still fails T_NUMBER',()=>{
  const f=fixture();f.change(WEAPON,'0.025','0.02');const data=f.run();
  for(const key of KEYS) {
    const c=checks(data,f.text,key);
    assert.deepEqual(c.item.values.params.brittleness_per_stack,{value:0.02,unit:'ratio'});
    assert.ok(c.text.failures.some(x=>x.code==='T_NUMBER'));assert.deepEqual(c.values,[]);
  }
});

// Scenario: source comments and line spacing change, or a non-target skill is extracted.
// Purpose: derive current line numbers while keeping unrelated items byte-identical.
test('UnitT40_line movement is traced and unrelated skills are unchanged',()=>{
  const f=fixture(),before=f.run();
  f.files.set(ARC,'-- moved\n\n'+f.files.get(ARC));f.files.set(WEAPON,'-- moved\n\n'+f.files.get(WEAPON));
  const after=f.run();
  for(const key of KEYS) {
    const c=checks(after,f.text,key);
    assert.deepEqual(c.item.values.params.brittleness_per_stack,{value:0.025,unit:'ratio'});
    assert.ok(c.item.source.files.some(s=>s.path===WEAPON&&s.line===6));
    if(key===KEYS[0])assert.ok(c.item.source.files.some(s=>s.path===ARC&&s.line===81));
  }
  const other=data=>JSON.stringify(data.items.find(i=>i.key==='unrelated'));
  assert.equal(other(before),other(after));
});

// Scenario: one of the audited source modules is missing from the pinned tree.
// Purpose: missing evidence must retain the original numeric failure for each affected skill.
test('UnitT50_missing source modules retain T_NUMBER without unknowns',()=>{
  for(const [file,keys] of [[ARC,[KEYS[0]]],[PASSIVE,[KEYS[1]]],[WEAPON,KEYS],[REGISTRY,KEYS]]) {
    const f=fixture();f.files.delete(file);const data=f.run();
    for(const key of keys) {
      const c=checks(data,f.text,key);
      assert.ok(!Object.hasOwn(c.item.values.params,'brittleness_per_stack'));
      assert.ok(c.text.failures.some(x=>x.code==='T_NUMBER'));
      assert.deepEqual(c.text.notes,[]);
      assert.ok(data.problems.some(p=>p.id===c.item.id&&p.code==='BRITTLENESS_SOURCE_UNPROVEN'));
    }
  }
});
