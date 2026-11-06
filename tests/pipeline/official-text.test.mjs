import { test } from 'node:test';
import assert from 'node:assert/strict';
import { murmur64, locHash } from '../../pipeline/lib/official-text.mjs';

test('Stingray hashes match known values', () => {
  assert.equal(murmur64('test'), 0x2f4a8724618f4c63n);
  assert.equal(murmur64('testhash'), 0x78409ab9ed54c450n);
  assert.equal(locHash('loc_class_veteran_name'), 'fb5fd582');
  assert.equal(locHash('loc_autogun_p1_m1'), '5968ebc9');
});
import { readFileSync } from 'node:fs';
import path from 'node:path';
import { loadTextIndex } from '../../pipeline/lib/official-text.mjs';
import { fixture,cli,put,commit } from './helpers.mjs';

test('extract-text is deterministic, preserves placeholders/newlines and independently missing locales', t => {
  const f=fixture(t),file=path.join(f.work,'extract/text.json');
  let r=cli('extract-text.mjs',f.textArgs);assert.equal(r.status,0,r.stderr);
  const first=readFileSync(file);r=cli('extract-text.mjs',f.textArgs);assert.equal(r.status,0,r.stderr);assert.deepEqual(readFileSync(file),first);
  const text=loadTextIndex(file);assert.equal(text.batch,'100');assert.equal(text.lookup('loc_glossary_term_bleed').en,'Bleed {value}\nline');
  assert.equal(text.lookup('loc_glossary_term_unique').en,null);assert.equal(text.lookup('absent'),null);
  const data=JSON.parse(first),hash=locHash('loc_class_veteran_name');data.resources.items[hash]={en:'Another',zh:'不同'};
  put(f.work,'conflict.json',JSON.stringify(data));assert.equal(loadTextIndex(path.join(f.work,'conflict.json')).lookup('loc_class_veteran_name').conflict,true);
});

test('extract-text marks conflicting duplicate hashes unusable in both locales', t => {
  const f=fixture(t,{duplicates:true}),r=cli('extract-text.mjs',f.textArgs);assert.equal(r.status,0,r.stderr);
  const data=JSON.parse(readFileSync(path.join(f.work,'extract/text.json'),'utf8'));
  assert.deepEqual(data.resources.items[locHash('loc_autogun_p1_m1')],{en:null,zh:null});assert.equal(data.problems[0].code,'DUP_HASH');
});

test('extract-text rejects corrupt sha256 and row counts with exit 1', t => {
  const f=fixture(t);put(f.priv,'localization/100/items.en.jsonl','{}\n');commit(f.priv,'corrupt bytes');
  let r=cli('extract-text.mjs',f.textArgs);assert.equal(r.status,1);assert.match(r.stderr,/SHA256/);
  const g=fixture(t);g.manifest.resources[0].files[0].rows++;
  put(g.priv,'localization/100/manifest.json',JSON.stringify(g.manifest));commit(g.priv,'bad rows');
  r=cli('extract-text.mjs',g.textArgs);assert.equal(r.status,1);assert.match(r.stderr,/列數/);
});

test('extract-text uses active run gameVersion and batch when not explicitly given', async t => {
  const f=fixture(t);
  const {writeState,startRun,emptyState}=await import('../../pipeline/lib/state.mjs');
  await writeState(f.state,startRun(emptyState(),{gameVersion:'9.8.7',sourceCommit:f.sha,textBatch:'100'}));
  const args=f.textArgs.filter((_,i) => i!==4 && i!==5),r=cli('extract-text.mjs',args);
  assert.equal(r.status,0,r.stderr);const data=JSON.parse(readFileSync(path.join(f.work,'extract/text.json'),'utf8'));
  assert.equal(data.gameVersion,'9.8.7');assert.equal(data.batch,'100');
});
