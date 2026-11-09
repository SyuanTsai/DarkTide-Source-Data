import assert from 'node:assert/strict';
import { mkdirSync, readFileSync, writeFileSync, readdirSync } from 'node:fs';
import { join, dirname } from 'node:path';
import { spawnSync } from './test-env.mjs';
import { stringifyCanonical } from '../../pipeline/lib/canonical-json.mjs';
import { emptyState, startRun, writeState } from '../../pipeline/lib/state.mjs';
import { CATEGORIES, checkDataFile } from '../../pipeline/lib/data-files.mjs';

export const read = file => JSON.parse(readFileSync(file,'utf8'));
export const write = (file,value) => { mkdirSync(dirname(file),{recursive:true});writeFileSync(file,stringifyCanonical(value)); };

// Each caller owns root. An explicit baseline remains separate from published data,
// so interrupted or completed same-version writes never change the predecessor.
export async function schemaAlignFixture(root, {whole=false, all=false, sameVersion=false, target='1.2.0'} = {}) {
  const meta={gameVersion:'2.0.0',sourceCommit:'a'.repeat(40),textBatch:'new'};
  const old={gameVersion:sameVersion?'2.0.0':'1.0.0',sourceCommit:'b'.repeat(40),textBatch:'old'};
  const baseline=join(root,'immutable-baseline'),cloud=join(root,'cloud'),work=join(root,'work');
  const base=join(cloud,meta.gameVersion),state=join(root,'pipeline/state.json'),translation=join(root,'Translation.md');
  mkdirSync(cloud,{recursive:true});writeFileSync(translation,'# 譯名\n');await writeState(state,startRun(emptyState(),meta));
  const previous={};
  for(const category of CATEGORIES) {
    const file=read(`pipeline/schema/examples/1.1.0-example/${category}.json`),item=file.items[0];
    Object.assign(file,old);file.items=[item];
    item.name={en:'Example',zh:'範例',origin:'official'};item.official={en:'Effect',zh:'效果'};
    item.values.params={};item.errata=[];item.explanation={effect:'效果',conditions:'',calculation:'',notes:'舊版說明',extra:''};
    item.source.commit=old.sourceCommit;item.source.text.batch=old.textBatch;
    if(category==='weapons'){item.values.bars=[];item.values.curves=[];item.values.attackCombos=[];}
    if(category==='blessings')item.values.tiers=[{tier:1,params:{}}];
    if(sameVersion) {
      item.retainedFrom={gameVersion:'1.0.0',sourceCommit:'c'.repeat(40),textBatch:'earliest'};
      item.source.commit=item.retainedFrom.sourceCommit;item.source.text.batch=item.retainedFrom.textBatch;
    }
    if(category==='skills') { const second=structuredClone(item);second.id+=':second';file.items.push(second); }
    assert.deepEqual(checkDataFile(category,stringifyCanonical(file)).errors,[]);
    previous[category]=structuredClone(file);
    write(join(root,'data',old.gameVersion,`${category}.json`),file);write(join(baseline,`${category}.json`),file);
    const extract=structuredClone(file);Object.assign(extract,meta);extract.schemaVersion=target;
    extract.items=extract.items.map(({explanation,errata,retainedFrom,...x})=>x);
    for(const x of extract.items) {x.source.commit=meta.sourceCommit;x.source.text.batch=meta.textBatch;}
    if(category==='skills') {
      if(target==='1.2.0') for(const x of extract.items) {
        x.values.mechanics={'buff.duration':{value:14,unit:'seconds'}};
        x.source.valueSources={'/mechanics/buff.duration':[{path:'scripts/example.lua',line:7}]};
        x.source.codeRefs={'scripts/example.lua#templates.example':{path:'scripts/example.lua',symbol:'templates.example',sha256:'a'.repeat(64)}};
      }
      else for(const x of extract.items)x.values.params={duration:{value:14}};
      const added=structuredClone(extract.items[0]);added.id+=':new';extract.items.push(added);
    }
    const blocked=all || whole&&category==='terms';
    extract.items.sort((a,b)=>a.id<b.id?-1:a.id>b.id?1:0);
    write(join(work,'extract',`${category}.json`),{...extract,items:blocked?[]:extract.items,
      scriptVersion:`pipeline/extract-${category}.mjs@1.2.0`,status:blocked?'structure-mismatch':'ok',reason:blocked?'fixture structure changed':null,problems:[],excluded:[]});
  }
  write(join(root,'data/current.json'),{schemaVersion:'1.1.0',...old,path:`data/${old.gameVersion}`,versions:[old.gameVersion]});
  const cli=(name,args)=>spawnSync(process.execPath,[`pipeline/${name}.mjs`,...args],{encoding:'utf8'});
  const success=(name,args)=>{const r=cli(name,args);assert.equal(r.status,0,r.stdout+r.stderr);return r;};
  const diffArgs=['--state',state,'--work-dir',work,'--cloud-dir',cloud,'--data-dir',join(root,'data'),'--glossary',join(root,'missing-glossary.md')];
  success('diff',diffArgs);
  const inputs=join(base,'ai/input');
  mkdirSync(inputs,{recursive:true});
  for(const name of readdirSync(inputs)) {
    const input=read(join(inputs,name));
    const output={schemaVersion:'1.0.0',id:input.id,inputHash:input.inputHash,
      explanation:{effect:'效果',conditions:'',calculation:'',notes:'持續14秒',extra:''},errata:[],
      ...(target==='1.2.0'&&!input.id.endsWith(':second')&&!input.id.endsWith(':new')?{
        citations:[{section:'notes',text:'持續14秒',codeRefs:['scripts/example.lua#templates.example'],valueRefs:['/mechanics/buff.duration']}]}:{})};
    if(target!=='1.2.0'&&(input.id.endsWith(':second')||input.id.endsWith(':new')))output.explanation.notes='持續987654秒';
    write(join(base,'ai/output',name),output);success('diff',[...diffArgs,'--mark-described',input.id]);
  }
  const writeOptions={root,state,cloudDir:cloud,previousDir:baseline};
  const verifyArgs=['--root',root,'--state',state,'--cloud-dir',cloud,'--previous-dir',baseline,'--translation',translation,'--issues','off'];
  return {root,base,state,baseline,previous,meta,old,writeOptions,cli,success,verifyArgs,
    verify:()=>cli('verify',verifyArgs),writeArgs:['--root',root,'--state',state,'--cloud-dir',cloud,'--previous-dir',baseline]};
}
