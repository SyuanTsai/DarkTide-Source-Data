import { test } from 'node:test';
import assert from 'node:assert/strict';
import { readdirSync,readFileSync } from 'node:fs';
import path from 'node:path';
import { fixture,put,commit,cli,root } from './helpers.mjs';
import { buildSkills } from '../../pipeline/extract-skills.mjs';
import { createSkillResolver, manipulate } from '../../pipeline/lib/skill-lua.mjs';
import { StructureError } from '../../pipeline/lib/errors.mjs';
import './extract-skills.real.test.mjs';

function setup(t) {
  const f=fixture(t);
  const copy=(from,to)=>{for(const e of readdirSync(from,{withFileTypes:true})) {if(e.isDirectory()) copy(path.join(from,e.name),path.join(to,e.name));else put(to,e.name,readFileSync(path.join(from,e.name)));}};
  copy(path.join(root,'tests/pipeline/fixtures/skills'),f.source);
  f.sha=commit(f.source);f.sourceArgs[3]=f.sha;
  const text=cli('extract-text.mjs',f.textArgs);assert.equal(text.status,0,text.stderr);
  const run=()=>{const result=cli('extract-skills.mjs',f.sourceArgs);assert.equal(result.status,0,result.stderr);return JSON.parse(readFileSync(path.join(f.work,'extract/skills.json')));};
  return {...f,run};
}

// Scenario: the fixture DSL helper has an unaudited return followed by member calls.
// Purpose: preserve direct values and downgrade shared helper dependencies under spec12.
test('InterT10_skills static values trees DSL text provenance and denied aliases',t=>{
  const f=setup(t),data=f.run();assert.equal(data.status,'ok');
  const get=k=>data.items.find(i=>i.key===k);assert.equal(data.items.length,7);
  const basic=get('basic');assert.equal(basic.values.icon,'first');assert.equal(basic.name.en,'Veteran');assert.equal(basic.name.origin,'official');
  assert.deepEqual(basic.official,{en:'A soldier\nAura',zh:'士兵\n光環'});
  assert.equal(basic.source.text.keys.description,'loc_class_veteran_description');
  const p=basic.values.params;
  assert.deepEqual(p.direct,{unit:'percent',value:15});assert.deepEqual(p.path,{value:null,unknown:'DYNAMIC_VALUE'});assert.deepEqual(p.computed,{value:null,unknown:'DYNAMIC_VALUE'});assert.equal(p.arithmetic.value,9);assert.deepEqual(p.transform,{value:null,unknown:'DYNAMIC_VALUE'});assert.equal(p.localize.value,'loc_key');assert.equal(p.upper.value,3);assert.ok(!p.format_type);assert.ok(!p['bad-key']);
  assert.ok(basic.source.files.some(x=>x.path.endsWith('talent_settings.lua')));
  assert.equal(p.literal.value,'function');
  assert.ok(data.problems.some(x=>x.code==='UNRESOLVED_VALUE'&&x.id===basic.id));
  assert.deepEqual(get('tiered').values.params.power,{value:null,unknown:'DYNAMIC_VALUE'});
  assert.deepEqual(get('tiered').values.parents,['darktide:skill:soldier:basic']);assert.equal(get('tiered').values.maxPoints,3);assert.deepEqual(get('tiered').official,{en:null,zh:null});
  assert.equal(get('dynamic').name.origin,'internal');assert.equal(get('dynamic').name.zh,null);
  for(const v of Object.values(get('dynamic').values.params)) assert.deepEqual(v,{value:null,unknown:'DYNAMIC_VALUE'});
  assert.equal(get('shadow').values.params.v.value,2);assert.equal(get('bad').values.nodeType,'default');assert.equal(get('bad').values.icon,'fallback');
  assert.equal(get('stimm_a').values.nodeType,'broker_stimm');
  for(const key of ['stimm_a','stimm_b'])for(const value of Object.values(get(key).values.params))assert.deepEqual(value,{value:null,unknown:'DYNAMIC_VALUE'});
  assert.ok(get('stimm_a').values.params.power_level_modifier);
  for(const code of ['MULTI_NODE','MISSING_DEFINITION','UNKNOWN_NODE_TYPE','PARAM_NAME','SHADOWED_DEFINITION','UNRESOLVED_VALUE','MISSING_TEXT','MISSING_EN_TEXT']) assert.ok(data.problems.some(p=>p.code===code),code);
  assert.ok(data.excluded.some(e=>e.key==='unused_soldier' && e.reason==='not-in-tree'));
  const bytes=readFileSync(path.join(f.work,'extract/skills.json'));f.run();assert.deepEqual(readFileSync(path.join(f.work,'extract/skills.json')),bytes);
});

test('skills structure mismatch exits zero and writes empty output',t=>{
  const f=setup(t);
  put(f.source,'scripts/ui/views/talent_builder_view/utilities/talent_layout_parser.lua','local FIND_VALUE_FUNCTIONS={damage=function() end}\nreturn {}');
  f.sourceArgs[3]=commit(f.source);
  const data=f.run();assert.equal(data.status,'structure-mismatch');assert.deepEqual(data.items,[]);
});

test('skills required files, missing trees, zero items and function scope fail safely',()=>{
  const files=new Map();
  const scan=dir=>{for(const e of readdirSync(path.join(root,'tests/pipeline/fixtures/skills',dir),{withFileTypes:true})) {const name=dir?`${dir}/${e.name}`:e.name;if(e.isDirectory()) scan(name);else files.set(name,readFileSync(path.join(root,'tests/pipeline/fixtures/skills',name),'utf8'));}};scan('');
  const reader={commit:'a'.repeat(40),exists:p=>files.has(p),read:p=>files.get(p),list:(prefix='')=>[...files.keys()].filter(p=>p.startsWith(prefix)).sort()};
  const text={lookup:()=>null},envelope={textBatch:'100'};
  for(const path of ['scripts/settings/ability/archetype_talents/archetype_talents.lua','scripts/ui/views/talent_builder_view/utilities/talent_layout_parser.lua']) {
    const previous=files.get(path);files.delete(path);assert.throws(()=>buildSkills({reader,text,envelope}),StructureError);files.set(path,previous);
  }
  const emptyReader={...reader,list:()=>[]};assert.throws(()=>buildSkills({reader:emptyReader,text,envelope}),StructureError);
  const source=`local value=3\nlocal function helper() do local value=99 end local text='end' for i=1,2 do local value=55 end end\nlocal x={config={value=value},call=function(v) return math.ceil(v / 2) end}\nreturn x`;
  files.set('scope.lua',source);
  const r=createSkillResolver(reader),table=r.returned('scope.lua');assert.equal(r.scalar(r.get(r.get(table,'config'),'value')),3);
  assert.equal(manipulate(r.get(table,'call'),3),2);
  files.set('cycle.lua',`local a=require('cycle') return a`);assert.equal(r.scalar(r.returned('cycle.lua')),undefined);
  files.set('clone.lua',`local a={x=1} local b=table.clone(a) b.x=2 return {a=a,b=b}`);
  const cloned=r.returned('clone.lua');assert.equal(r.scalar(r.get(r.get(cloned,'a'),'x')),1);assert.equal(r.scalar(r.get(r.get(cloned,'b'),'x')),2);
  const conflict=buildSkills({reader,text:{lookup:()=>({conflict:true})},envelope});
  assert.ok(conflict.problems.some(p=>p.code==='TEXT_CONFLICT'));assert.ok(conflict.items.every(i=>i.name.origin==='internal'));
});

test('skills zero referenced items is a CLI structure mismatch',t=>{
  const f=setup(t);
  for(const name of ['soldier','broker']) {
    const tree=name==='broker'?'broker_stimm_builder_view/layouts/broker_stimm_tree.lua':'talent_builder_view/layouts/soldier_tree.lua';
    put(f.source,`scripts/ui/views/${tree}`,`return {archetype_name='${name}',name='${name}_tree',nodes={}}`);
  }
  f.sourceArgs[3]=commit(f.source);const data=f.run();assert.equal(data.status,'structure-mismatch');assert.deepEqual(data.items,[]);
});
