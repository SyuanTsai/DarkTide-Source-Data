import { test } from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync,existsSync } from 'node:fs';
import { fixture,cli } from './helpers.mjs';
import { readState,writeState,emptyState,startRun,haltRun,completeRun,setCategory,registerItem,keepPrevious } from '../../pipeline/lib/state.mjs';

test('mismatched versions exit 2 without changing state, in JSON and text', async t => {
  const f=fixture(t,{version:'1.2.2'});
  let r=cli('check-version.mjs',f.versionArgs);assert.equal(r.status,2);assert.match(r.stdout,/遊戲版本不一致/);assert.equal(existsSync(f.state),false);
  await writeState(f.state,emptyState()); const before=readFileSync(f.state);
  r=cli('check-version.mjs',[...f.versionArgs,'--json']);assert.equal(r.status,2);assert.equal(JSON.parse(r.stdout).status,'halted');assert.deepEqual(readFileSync(f.state),before);
});

test('review F6: summary checks current mismatch with empty or completed old state, without writes',async t=>{
 const f=fixture(t,{version:'1.13.1'});
 const check=()=>{const r=cli('check-version.mjs',[...f.versionArgs,'--summary']);assert.equal(r.status,2,r.stderr);assert.match(r.stdout,/結果：整批停止（Source-Code 1.2.3 與解包批次 100（1.13.1）版本不一致）/);assert.match(r.stdout,/遊戲版本：Source-Code 1.2.3／解包批次 100（1.13.1）/);assert.match(r.stdout,/技能 0、武器 0、祝福 0、術語 0/);};
 check();assert.equal(existsSync(f.state),false);
 await writeState(f.state,completeRun(startRun(emptyState(),{gameVersion:'1.12.0',sourceCommit:'a'.repeat(40),textBatch:'99'})));
 const before=readFileSync(f.state);check();assert.deepEqual(readFileSync(f.state),before);
});

test('new/resume/halted/no-new-version transitions preserve progress; summary lists kept entities', async t => {
  const f=fixture(t),run=json => {const r=cli('check-version.mjs',[...f.versionArgs,...(json?['--json']:[])]);assert.equal(r.status,0,r.stderr);return r.stdout;};
  assert.equal(JSON.parse(run(true)).status,'new');
  let s=await readState(f.state);assert.equal(s.run.sourceCommit,f.sha);
  s=registerItem(s,'darktide:term:test',{category:'terms',inputHash:'a'.repeat(64),change:'added'});
  s=keepPrevious(s,'darktide:term:test','missing');s=setCategory(s,'weapons',{status:'kept-previous',reason:'schema changed'});
  await writeState(f.state,haltRun(s,'stop'));
  assert.match(run(false),/接續進行中的版本/);s=await readState(f.state);assert.equal(s.run.status,'running');assert.equal(s.run.items['darktide:term:test'].outcome,'kept-previous');
  assert.equal(JSON.parse(run(true)).status,'resume');
  await writeState(f.state,completeRun(s));const before=readFileSync(f.state);
  assert.equal(JSON.parse(run(true)).status,'no-new-version');assert.deepEqual(readFileSync(f.state),before);
  let r=cli('check-version.mjs',[...f.versionArgs,'--summary']);assert.equal(r.status,0,r.stderr);assert.match(r.stdout,/沒有新版本/);assert.match(r.stdout,/技能 0、武器 0、祝福 0、術語 0/);assert.deepEqual(readFileSync(f.state),before);
  await writeState(f.state,haltRun(s,'reason'));r=cli('check-version.mjs',[...f.versionArgs,'--summary']);assert.match(r.stdout,/整批停止（reason）/);assert.match(r.stdout,/darktide:term:test：missing/);assert.match(r.stdout,/weapons：schema changed/);
  await writeState(f.state,emptyState());r=cli('check-version.mjs',[...f.versionArgs,'--summary']);assert.match(r.stdout,/無/);
});
