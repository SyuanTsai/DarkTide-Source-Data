import { test } from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync, readdirSync, mkdirSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';
import { fixture, put, commit, cli } from './helpers.mjs';
import { emptyState, startRun, writeState } from '../../pipeline/lib/state.mjs';
import { stringifyCanonical } from '../../pipeline/lib/canonical-json.mjs';

// Scenario: committed miniature source → extractor CLI → actual diff CLI.
// Purpose: test C6 through file/schema/state boundaries in all three required cases.
for(const [number,mode]of [[10,'number'],[20,'trivia'],[30,'function']])test(`InterT${number}_CLI extract then diff isolates ${mode} changes`,async t=>{
 const f=fixture(t),root=new URL('./fixtures/mechanics/',import.meta.url);
 function copy(dir=''){for(const e of readdirSync(new URL(dir,root),{withFileTypes:true})){const p=dir+e.name;if(e.isDirectory())copy(p+'/');else put(f.source,p,readFileSync(new URL(p,root)));}}copy();
 f.sourceArgs[3]=commit(f.source);
 let result=cli('extract-text.mjs',f.textArgs);assert.equal(result.status,0,result.stderr);
 result=cli('extract-skills.mjs',f.sourceArgs);assert.equal(result.status,0,result.stderr);
 const old=JSON.parse(readFileSync(join(f.work,'extract/skills.json'),'utf8'));
 const data=join(f.dir,'data'),cloud=join(f.dir,'cloud');mkdirSync(join(data,'1.2.2'),{recursive:true});mkdirSync(cloud);
 const metadata={gameVersion:'1.2.2',sourceCommit:old.sourceCommit,textBatch:'100'};
 const previous={schemaVersion:'1.2.0',category:'skills',...metadata,items:old.items.map(i=>({...i,explanation:{effect:'-',conditions:'',calculation:'',notes:'',extra:'',effectOrigin:'unofficial-translation'},errata:[]}))};
 writeFileSync(join(data,'1.2.2/skills.json'),stringifyCanonical(previous));
 writeFileSync(join(data,'current.json'),stringifyCanonical({schemaVersion:'1.2.0',...metadata,path:'data/1.2.2',versions:['1.2.2']}));
 const p='scripts/settings/buff/test.lua',raw=readFileSync(join(f.source,p),'utf8');
 put(f.source,p,mode==='number'?raw.replace('duration = 5','duration = 6'):mode==='trivia'?'\n-- shifted\n--[==[ignored]==]\n'+raw:raw.replace('return true','return false'));
 f.sourceArgs[3]=commit(f.source);
 result=cli('extract-skills.mjs',f.sourceArgs);assert.equal(result.status,0,result.stderr);
 await writeState(f.state,startRun(emptyState(),{gameVersion:'1.2.3',sourceCommit:f.sourceArgs[3],textBatch:'100'}));
 put(f.source,'Translation.md','# Translation\n');commit(f.source,'glossary');
 result=cli('diff.mjs',['--state',f.state,'--work-dir',f.work,'--data-dir',data,'--cloud-dir',cloud,'--glossary',join(f.source,'Translation.md')]);assert.equal(result.status,0,result.stderr);
 const report=JSON.parse(readFileSync(join(cloud,'1.2.3/diff/diff.json'),'utf8')).categories.skills;
 assert.deepEqual(report.changed,mode==='trivia'?[]:['darktide:skill:test:alpha','darktide:skill:test:beta']);
 assert.equal(report.unchanged.length,mode==='trivia'?3:1);
});
