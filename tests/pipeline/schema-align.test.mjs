import { test } from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync, cpSync } from 'node:fs';
import { join } from 'node:path';
import { composeFinal } from '../../pipeline/lib/verify/compose.mjs';
import { verifyMerged } from '../../pipeline/lib/verify/output.mjs';
import { checkDataFile, retainItem } from '../../pipeline/lib/data-files.mjs';
import { stringifyCanonical } from '../../pipeline/lib/canonical-json.mjs';
import { validateExtractItems, writeExtract } from '../../pipeline/lib/extract-output.mjs';
import { contentHash, diffCategory } from '../../pipeline/lib/diff-core.mjs';
import { composeCandidate } from '../../pipeline/lib/candidate.mjs';
import { loadSchemas } from '../../pipeline/lib/json-schema.mjs';
import { fixture, cli, commit } from './helpers.mjs';

const previous = JSON.parse(readFileSync('pipeline/schema/examples/1.1.0-example/skills.json', 'utf8'));
const version = { gameVersion: '2.0.0', sourceCommit: 'a'.repeat(40), textBatch: 'new' };

// Scenario: an item from a 1.1 release fails verification against a 1.2 candidate.
// Purpose: preserve its previous content while publishing a 1.2 envelope.
test('UnitT10_retains a 1.1 item in a 1.2 candidate', () => {
  const candidate = { ...previous, schemaVersion: '1.2.0' };
  const rows = [{ category: 'skills', id: previous.items[0].id, decision: 'kept-previous' }];
  const final = composeFinal({ category: 'skills', status: 'ok', candidate, previous, rows, version, targetSchemaVersion: '1.2.0' });
  assert.equal(final.schemaVersion, '1.2.0');
  assert.deepEqual(final.items[0].source, previous.items[0].source);
  assert.deepEqual(final.items[0].explanation, previous.items[0].explanation);
  assert.deepEqual(final.items[0], retainItem(previous.items[0], previous));
});

// Scenario: a whole category fails extraction while another category targets 1.2.
// Purpose: retained categories must use the same release envelope.
test('UnitT20_retains a 1.1 category in a 1.2 envelope', () => {
  const final = composeFinal({ category: 'skills', status: 'kept-previous', candidate: null, previous, rows: [], version, targetSchemaVersion: '1.2.0' });
  assert.equal(final.schemaVersion, '1.2.0');
  assert.deepEqual(final.items[0].source, previous.items[0].source);
});

// Scenario: the predecessor was itself retained; both fallback paths run again.
// Purpose: preserve the earliest provenance and every field without regenerating text.
test('UnitT30_repeated retention preserves source errata citations and retainedFrom', () => {
  const old = structuredClone(previous), item = old.items[0];
  item.retainedFrom = {gameVersion:'0.1',sourceCommit:item.source.commit,textBatch:item.source.text.batch};
  for (const status of ['ok','kept-previous']) {
    const final = composeFinal({category:'skills',status,candidate:{...old,schemaVersion:'1.2.0'},previous:old,
      rows:[{category:'skills',id:item.id,decision:'kept-previous'}],version,targetSchemaVersion:'1.2.0'});
    assert.deepEqual(final.items, old.items);
    assert.deepEqual(old.items[0], item);
  }
});

// Scenario: a retained source or release target is unsupported, future, or a downgrade.
// Purpose: neither item nor category fallback may silently relabel incompatible data.
test('UnitT40_retention rejects unsupported versions downgrades and noncurrent upgrades', () => {
  for (const [from,to] of [['1.2.0','1.1.0'],['1.1.0','1.0.0'],['1.0.0','1.1.0'],['9.0.0','1.2.0'],['unknown','1.2.0'],['1.1.0','1.3.0'],['1.1.0','unknown']]) {
    for (const status of ['ok','kept-previous']) assert.throws(() => composeFinal({category:'skills',status,
      candidate:{...previous,schemaVersion:to},previous:{...previous,schemaVersion:from},
      rows:[{category:'skills',id:previous.items[0].id,decision:'kept-previous'}],version,targetSchemaVersion:to}), /schemaVersion/);
  }
});

// Scenario: supported 1.0 categories promote, but 1.0 weapons lack mandatory curves/combos.
// Purpose: promotion validates actual content rather than filling or inventing fields.
test('UnitT50_1.0 promotion accepts legal shapes and fails closed for missing curves', () => {
  for (const category of ['skills','weapons','blessings','terms']) {
    const old = JSON.parse(readFileSync(`pipeline/schema/examples/0.0.0-example/${category}.json`));
    for (const status of ['ok','kept-previous']) {
    const rows = old.items.map(item=>({category,id:item.id,decision:'kept-previous'}));
    const result = verifyMerged({[category]:{candidate:{...old,schemaVersion:'1.2.0'},previous:old}},
      {[category]:{status}}, rows, undefined, version, '1.2.0');
    assert.equal(result.merged[category].schemaVersion, '1.2.0');
    assert.equal(result.errors.length === 0, category !== 'weapons');
    if (category === 'weapons') assert.ok(result.errors.some(e => /curves|attackCombos|curveId/.test(e.path+e.message)));
    }
  }
});

const sample = category => JSON.parse(readFileSync(`pipeline/schema/examples/1.1.0-example/${category}.json`));
const schemas = loadSchemas('pipeline/schema');
// Scenario: normal and structure-mismatch extracts are written for both remaining categories.
// Purpose: enforce the shared 1.2 release envelope, including validation of the normal items.
for (const category of ['weapons','terms']) test(`UnitT60_${category} normal and structural fallback extracts use 1.2`, async t => {
  const f = fixture(t), file = sample(category), {explanation,errata,...item} = file.items[0];
  for (const status of ['ok','structure-mismatch']) {
    await writeExtract({workDir:f.work,category,envelope:{gameVersion:file.gameVersion,sourceCommit:file.sourceCommit,textBatch:file.textBatch,
      scriptVersion:`pipeline/extract-${category}.mjs@1.2.0`,status,reason:status==='ok'?null:'changed structure'},items:status==='ok'?[item]:[]});
    const out = JSON.parse(readFileSync(join(f.work,'extract',`${category}.json`)));
    assert.equal(out.schemaVersion,'1.2.0');
    assert.equal(out.status,status);
    assert.equal(validateExtractItems(category,[item],file).length,0);
    for (const x of out.items) {
      assert.equal(x.values.mechanics,undefined);assert.equal(x.source.valueSources,undefined);
      assert.equal(x.source.codeRefs,undefined);assert.equal(x.citations,undefined);
    }
  }
});

// Scenario: only one well-formed, category-forbidden new field is added to an otherwise valid 1.2 item.
// Purpose: schema, semantic validation, AI input, and extraction keep their category boundaries.
for (const category of ['weapons','terms']) test(`UnitT70_${category} rejects each category-only field`, () => {
  const file = {...sample(category),schemaVersion:'1.2.0'}, good = file.items[0];good.errata=[];
  const input = item => ({schemaVersion:'1.0.0',dataSchemaVersion:'1.2.0',id:item.id,category,change:'added',
    gameVersion:file.gameVersion,sourceCommit:file.sourceCommit,textBatch:file.textBatch,inputHash:'a'.repeat(64),
    item,previous:null,glossary:{source:null,matches:[]},outputFile:'ai/output/example.json'});
  for (const field of ['mechanics','valueSources','codeRefs','citations']) {
    const item=structuredClone(good), {explanation,errata,...extracted}=item;
    assert.deepEqual(checkDataFile(category,stringifyCanonical({...file,items:[item]})).errors,[]);
    assert.deepEqual(schemas.validate('ai-input.schema.json',input(extracted)).errors,[]);
    if(field==='mechanics') extracted.values.mechanics={};
    else if(field==='citations') extracted.citations=[{section:'effect',text:'example',codeRefs:['scripts/example.lua#example'],valueRefs:[]}];
    else extracted.source[field]={};
    const full={...extracted,explanation,errata};
    const result=checkDataFile(category,stringifyCanonical({...file,items:[full]}));
    assert.ok(result.errors.length>0,field);
    assert.ok(result.errors.every(e=>e.path.endsWith('/'+field)),JSON.stringify(result.errors));
    assert.ok(schemas.validate('ai-input.schema.json',input(extracted)).errors.length>0,field);
    assert.ok(validateExtractItems(category,[extracted],file).length>0,field);
  }
});

// Scenario: pinned weapon/term CLI fixtures are compared with the prior script metadata.
// Purpose: the release contract changes only envelope/source script versions, never content fingerprints.
for (const category of ['weapons','terms']) test(`InterT80_${category} fixed input retains contentHash under new script metadata`, t => {
  const f=fixture(t);assert.equal(cli('extract-text.mjs',f.textArgs).status,0);
  let args=f.sourceArgs;
  if(category==='weapons') {
    cpSync('tests/pipeline/fixtures/weapons',f.source,{recursive:true});
    const sha=commit(f.source);args=args.map(x=>x===f.sha?sha:x);
  }
  const r=cli(`extract-${category}.mjs`,args);assert.equal(r.status,0,r.stderr);
  const file=JSON.parse(readFileSync(join(f.work,'extract',`${category}.json`)));
  assert.equal(file.status,'ok');assert.ok(file.items.length>0);
  assert.equal(file.schemaVersion,'1.2.0');assert.equal(file.scriptVersion,`pipeline/extract-${category}.mjs@1.2.0`);
  const hashes=category==='weapons'?{
    'darktide:weapon:autogun_p1_m1':'c3e93276bf03a8f2468f6aad2b0316c442b2ed1c6457891a25b379de75e40033',
    'darktide:weapon:autogun_p1_m2':'b395027cbfe232c1fe6ccd4b1e55d2bae7e29ddc3a9be5437f911aa075951d04',
    'darktide:weapon:sword_p1_m1':'0cb3f1031e9047fb60360dc4d3761739a7a6e05608bcc9977f7110d9507cfaf8',
  }:{
    'darktide:term:class:veteran':'33f7ab7c71b772e647bbe3d732867f2905af7d21c2df9e8109796f50a734a7b0',
    'darktide:term:keyword:bleed:glossary':'668597aa2fadb06ca75117701644702cea1db73794e4d1f9d92b4b959877a2fc',
    'darktide:term:keyword:bleed:term':'703e60cd31bde7ec20bfad3686ee50be5501b457b50f34396b36f77eaa08984e',
    'darktide:term:keyword:long':'7f3372b8b778f57805918ea9d438bded3edf212d3835ae1ae623e0ff13b6da6c',
    'darktide:term:keyword:other':'1eecc68c3990a8fc1dc5cbc59cc931ebbdff73fdc531be641a3dacc8fcddf72b',
    'darktide:term:keyword:unique':'e5c5c7e7d2636f2de549cbaeb03901a1ab058467b5f75c8b9e0ed6e4e2d2a312',
    'darktide:term:psyker:smite-damage-multiplier-parameter':'8860cacef8c1dc766366917007f93c3f620cf462534c8bdc36ba866a7ce7564c',
    'darktide:term:skill-type:aura':'36218114a2dacda99537e7ea2662be863fe502bbecb4e3c1004e2c1459f9b6ea',
    'darktide:term:weapon-type:autogun_p1':'ade2136aeacf58b64770d03c9df228a8c1fc2b4ffe03691470291d6ea6e9c6b1',
  };
  assert.deepEqual(Object.fromEntries(file.items.map(item=>[item.id,contentHash(category,item)])),hashes);
  for (const item of file.items) {
    const old=structuredClone(item);old.source.scriptVersion=`pipeline/extract-${category}.mjs@${category==='weapons'?'1.1.0':'1.0.0'}`;
    assert.equal(item.source.scriptVersion,file.scriptVersion);
    assert.equal(contentHash(category,item),contentHash(category,old));
    const {source,...rest}=item,{source:oldSource,...oldRest}=old;assert.deepEqual(rest,oldRest);
    assert.deepEqual({...source,scriptVersion:oldSource.scriptVersion},oldSource);
  }
});

// Scenario: all categories promote only their envelope; a weapon combo then changes for real.
// Purpose: diff and candidate preserve unchanged descriptions and still detect gameplay changes.
test('UnitT90_1.2 envelopes add no pending and changed attackCombos remain changed', () => {
  for (const category of ['skills','weapons','blessings','terms']) {
    const old=sample(category),extract={...old,schemaVersion:'1.2.0',status:'ok',items:old.items.map(({explanation,errata,...x})=>x)};
    const diff=diffCategory(category,old.items,extract.items);
    assert.equal(diff.changed.length,0);assert.equal(diff.added.length,0);
    const final=composeCandidate({category,run:old,extract,previous:old,unchanged:diff.unchanged});
    assert.equal(final.schemaVersion,'1.2.0');assert.deepEqual(final.items,old.items);
    if(category==='weapons') {
      extract.items=structuredClone(extract.items);extract.items[0].values.attackCombos[0].start+=':changed';
      assert.deepEqual(diffCategory(category,old.items,extract.items).changed,[old.items[0].id]);
    }
  }
});
