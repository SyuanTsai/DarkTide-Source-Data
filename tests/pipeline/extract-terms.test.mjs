import { test } from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import path from 'node:path';
import { fixture,put,commit,cli } from './helpers.mjs';

test('four term categories, both keyword namespaces, dynamic prefixes and pinned deterministic output', t => {
  const f=fixture(t);assert.equal(cli('extract-text.mjs',f.textArgs).status,0);
  const weapon='darktide:weapon:autogun_p1_m1';
  put(f.work,'extract/weapons.json',JSON.stringify({status:'ok',items:[{id:weapon,values:{family:'autogun_p1'}},{id:'darktide:weapon:other',values:{family:'other'}}]}));
  put(f.work,'extract/skills.json',JSON.stringify({status:'ok',items:[]}));
  let r=cli('extract-terms.mjs',f.sourceArgs);assert.equal(r.status,0,r.stderr);const file=path.join(f.work,'extract/terms.json'),first=readFileSync(file),data=JSON.parse(first);
  assert.equal(data.status,'ok');assert.deepEqual([...new Set(data.items.map(x => x.values.category))].sort(),['class','keyword','skill-type','weapon-type']);
  const get=id => data.items.find(x => x.id===`darktide:term:${id}`);
  assert.ok(get('keyword:bleed:term'));assert.ok(get('keyword:bleed:glossary'));assert.ok(get('keyword:other'));assert.ok(get('keyword:long'));assert.equal(get('keyword:comment'),undefined);
  assert.deepEqual(get('weapon-type:autogun_p1').values.refs,[weapon]);
  assert.deepEqual(get('class:veteran').official,{en:'A soldier',zh:'士兵'});assert.equal(get('class:veteran').key,'veteran');assert.equal(get('class:veteran').source.text.keys.name,'loc_class_veteran_name');
  assert.deepEqual(get('keyword:unique').name,{en:'loc_glossary_term_unique',zh:null,origin:'internal'});assert.ok(data.problems.some(x => x.code==='MISSING_EN_TEXT' && x.id===get('keyword:unique').id));assert.deepEqual(get('keyword:unique').official,{en:null,zh:'只有中文'});
  assert.equal(data.problems.filter(x => x.code==='DYNAMIC_KEY').length,2);assert.ok(data.problems.filter(x => x.code==='DYNAMIC_KEY').every(x => /\.lua:\d+$/.test(x.path)));
  assert.equal(data.problems.some(x => x.code==='DEPENDENCY_UNAVAILABLE'),false);
  // Altering the checkout must not change the pinned extract.
  put(f.source,'scripts/test/terms.lua','changed checkout');r=cli('extract-terms.mjs',f.sourceArgs);assert.equal(r.status,0,r.stderr);assert.deepEqual(readFileSync(file),first);
  assert.ok(data.items.every(x => x.source.files.every(f => f.path && f.line>=1)));
});

test('unavailable dependencies produce empty refs and problems', t => {
  const f=fixture(t);assert.equal(cli('extract-text.mjs',f.textArgs).status,0);
  put(f.work,'extract/skills.json',JSON.stringify({status:'structure-mismatch',items:[]}));
  const r=cli('extract-terms.mjs',f.sourceArgs);assert.equal(r.status,0,r.stderr);const data=JSON.parse(readFileSync(path.join(f.work,'extract/terms.json'),'utf8'));
  assert.equal(data.problems.filter(x => x.code==='DEPENDENCY_UNAVAILABLE').length,2);assert.deepEqual(data.items.find(x => x.values.category==='weapon-type').values.refs,[]);
});

test('missing archetype directory or required pattern table and zero keywords degrade structurally', t => {
  for (const kind of ['archetype','pattern','keywords']) {
    const f=fixture(t);assert.equal(cli('extract-text.mjs',f.textArgs).status,0);
    if (kind==='archetype') {
      // Build a second commit that no longer contains an archetype, preserving fixture data.
      put(f.source,'.gitignore','scripts/settings/archetype/\n');
      // Remove only from the temporary Git index, never delete the source data.
      // Use git update-index through the helper to keep all disk data intact.
      untrack(f.source,'scripts/settings/archetype/archetypes/veteran_archetype.lua');
    } else if (kind==='pattern') put(f.source,'scripts/settings/ui/ui_weapon_pattern_settings.lua','local ui_weapon_patterns_settings = {}');
    else put(f.source,'scripts/test/terms.lua','local keys = {}');
    const sha=commit(f.source),args=f.sourceArgs.map(x => x===f.sha?sha:x),r=cli('extract-terms.mjs',args);
    assert.equal(r.status,0,r.stderr);assert.match(r.stdout,/結構不符/);assert.equal(JSON.parse(readFileSync(path.join(f.work,'extract/terms.json'),'utf8')).status,'structure-mismatch');
  }
});
import { git } from './helpers.mjs';
function untrack(repo,file) {git(repo,'rm','--cached','--',file);}


test('all keyword locations are sorted and text conflicts retain item id', t => {
  const f=fixture(t);
  put(f.source,'scripts/test/another.lua','return {"loc_glossary_term_bleed",\n"loc_glossary_term_bleed"}\n');const sha=commit(f.source);
  assert.equal(cli('extract-text.mjs',f.textArgs).status,0);
  const textFile=path.join(f.work,'extract/text.json'),data=JSON.parse(readFileSync(textFile,'utf8'));
  const hash=locHash('loc_glossary_term_bleed');data.resources.ui[hash]={en:'Conflict',zh:'衝突'};put(f.work,'extract/text.json',JSON.stringify(data));
  const r=cli('extract-terms.mjs',f.sourceArgs.map(x => x===f.sha?sha:x));assert.equal(r.status,0,r.stderr);
  const result=JSON.parse(readFileSync(path.join(f.work,'extract/terms.json'),'utf8')),term=result.items.find(x => x.id==='darktide:term:keyword:bleed:term');
  assert.equal(term.source.files.length,3);assert.equal(term.source.files[0].path,'scripts/test/another.lua');assert.equal(term.source.files[0].line,1);assert.equal(term.source.files[1].line,2);
  assert.equal(term.name.origin,'internal');assert.deepEqual(term.official,{en:null,zh:null});assert.ok(result.problems.some(x => x.code==='TEXT_CONFLICT' && x.id===term.id));
});
import { locHash } from '../../pipeline/lib/official-text.mjs';
