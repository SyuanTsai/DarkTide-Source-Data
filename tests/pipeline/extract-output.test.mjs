import { test } from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import path from 'node:path';
import { pathToFileURL } from 'node:url';
import { spawnSync } from 'node:child_process';
import { itemId,validateExtractItems,writeExtract,nameFromText } from '../../pipeline/lib/extract-output.mjs';
import { emptyState,startRun,writeState,readState } from '../../pipeline/lib/state.mjs';
import { fixture,put,cli,root } from './helpers.mjs';
const envelope={gameVersion:'1.2.3',sourceCommit:'a'.repeat(40),textBatch:'100',scriptVersion:'pipeline/extract-terms.mjs@1.0.0'};
function item() {return {id:'darktide:term:test',key:'test',name:{en:'test',zh:null,origin:'internal'},official:{en:null,zh:null},values:{category:'keyword',context:null,refs:[],params:{}},source:{commit:envelope.sourceCommit,files:[{path:'scripts/test.lua',line:1}],scriptVersion:envelope.scriptVersion,text:{batch:'100',keys:{}}}};}

test('IDs, names and schema validation use the common contract', () => {
  assert.equal(itemId('terms','Keyword','BLEED'),'darktide:term:keyword:bleed');
  assert.throws(() => itemId('terms','invalid space'));assert.throws(() => itemId('bogus','x'));
  assert.deepEqual(validateExtractItems('terms',[item()],envelope),[]);assert.deepEqual(validateExtractItems('terms',[item()]),[]);
  assert.ok(validateExtractItems('terms',[null],envelope).length);
  assert.ok(validateExtractItems('terms',[{...item(),explanation:{}}],envelope).length);
  const invalid=item();invalid.values.params={x:{value:null,unknown:'GUESSED'}};assert.ok(validateExtractItems('terms',[invalid],envelope).length);
  const text=value => ({lookup:() => value});
  assert.deepEqual(nameFromText(text({en:'English',zh:null}),'loc','fallback'),{name:{en:'English',zh:null,origin:'official'},problem:null});
  const missing=nameFromText(text({en:null,zh:'中文'}),'loc','fallback');assert.deepEqual(missing.name,{en:'fallback',zh:null,origin:'internal'});assert.equal(missing.problem.code,'MISSING_EN_TEXT');
  assert.equal(nameFromText(text({conflict:true}),'loc','fallback').problem.code,'TEXT_CONFLICT');
  assert.equal(nameFromText(text(null),'loc','fallback').problem,null);
});

test('writeExtract sorts items/problems/excluded deterministically and rejects duplicate ids and invalid values', async t => {
  const f=fixture(t),a=item(),b={...item(),id:'darktide:term:aaa'};
  const args={workDir:f.work,category:'terms',envelope,items:[a,b],problems:[{code:'Z',message:'z'},{code:'A',message:'a'}],excluded:[{key:'z',reason:'z'},{key:'a',reason:'a'}]};
  await writeExtract(args);const file=path.join(f.work,'extract/terms.json'),first=readFileSync(file);await writeExtract({...args,items:[b,a],problems:args.problems.toReversed(),excluded:args.excluded.toReversed()});assert.deepEqual(readFileSync(file),first);
  const data=JSON.parse(first);assert.equal(data.items[0].id,b.id);assert.equal('explanation' in data.items[0],false);assert.equal('errata' in data.items[0],false);
  await assert.rejects(writeExtract({...args,items:[a,a]}),/重複/);
  await assert.rejects(writeExtract({...args,items:[{...a,key:''}]}),/驗證失敗/);
});

test('StructureError writes structure-mismatch and only updates matching state categories, exit 0', async t => {
  const f=fixture(t);assert.equal(cli('extract-text.mjs',f.textArgs).status,0);
  const meta={gameVersion:'1.2.3',sourceCommit:f.sha,textBatch:'100'};
  await writeState(f.state,startRun(emptyState(),meta));
  const importUrl=pathToFileURL(path.join(root,'pipeline/lib/extract-output.mjs')).href;
  const errorUrl=pathToFileURL(path.join(root,'pipeline/lib/errors.mjs')).href;
  put(f.dir,'runner.mjs',`import {runExtractCli} from ${JSON.stringify(importUrl)};import {StructureError} from ${JSON.stringify(errorUrl)};await runExtractCli({category:'terms',scriptVersion:'pipeline/extract-terms.mjs@1.0.0',build(){throw new StructureError('terms','MISSING','missing table')}});`);
  const run=args => spawnSync(process.execPath,[path.join(f.dir,'runner.mjs'),...args],{encoding:'utf8'});
  let r=run(f.sourceArgs);assert.equal(r.status,0,r.stderr);assert.match(r.stdout,/結構不符：terms：missing table/);
  const data=JSON.parse(readFileSync(path.join(f.work,'extract/terms.json'),'utf8'));assert.equal(data.status,'structure-mismatch');assert.deepEqual(data.items,[]);
  let s=await readState(f.state);assert.deepEqual(s.run.categories.terms,{status:'kept-previous',reason:'missing table'});assert.deepEqual(s.run.items,{});
  await writeState(f.state,startRun(emptyState(),{...meta,textBatch:'different'}));const before=readFileSync(f.state);r=run(f.sourceArgs);assert.equal(r.status,0);assert.deepEqual(readFileSync(f.state),before);
  r=run(['--state',path.join(f.dir,'absent.json')]);assert.equal(r.status,1);assert.match(r.stderr,/check-version/);
  r=run([...f.sourceArgs,'--text',path.join(f.dir,'missing.json')]);assert.equal(r.status,1);assert.match(r.stderr,/extract-text/);
});
