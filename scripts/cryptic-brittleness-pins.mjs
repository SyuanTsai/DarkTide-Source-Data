import {createHash} from 'node:crypto';
import {existsSync,mkdirSync,readFileSync,writeFileSync} from 'node:fs';
import {resolve} from 'node:path';
import {pathToFileURL} from 'node:url';
import {git,parseArgs,resolveSourceRepo} from '../pipeline/lib/inputs.mjs';
import {createSourceReader} from '../pipeline/lib/source-reader.mjs';
import {createSkillResolver} from '../pipeline/lib/skill-lua.mjs';
import {readTalentDefinitions} from '../pipeline/lib/skill-structure.mjs';
import {skillParams} from '../pipeline/lib/skill-values.mjs';
import {proveBrittleness} from '../pipeline/lib/skill-brittleness.mjs';

const KEYS=['cryptic_arc_grenades_brittleness','cryptic_electrocution_applies_brittleness'];
const manifestUrl=new URL('../pipeline/lib/cryptic-brittleness-sources.json',import.meta.url);
const sortedEntries=map=>[...map].sort(([a],[b])=>a<b?-1:a>b?1:0);

/** Re-prove both actual selected definitions WITHOUT checking any old pins.
 * This collector cannot supplement production extracts or update the manifest. */
export function collectBrittlenessPins(reader) {
  if(!/^[0-9a-f]{40}$/i.test(reader.commit))throw new Error('來源 commit 必須是完整 40 位 SHA');
  const snapshots=new Map(),directories=new Map();
  function snapshot(file) {
    if(!snapshots.has(file)) {
      const bytes=Buffer.from(reader.readBytes(file)),text=reader.read(file);
      if(bytes.toString('utf8').replace(/^\uFEFF/,'')!==text)throw new Error(`來源 bytes 與文字不一致：${file}`);
      snapshots.set(file,{bytes,text});
    }
    return snapshots.get(file);
  }
  const recorded={...reader,
    read:file=>snapshot(file).text,readBytes:file=>Buffer.from(snapshot(file).bytes),
    list(prefix='') {
      if(!directories.has(prefix))directories.set(prefix,[...reader.list(prefix)]);
      return [...directories.get(prefix)];
    }};
  const r=createSkillResolver(recorded),definitions=readTalentDefinitions(r,recorded);
  const selected=new Map([...(definitions.get('base')??[]),...(definitions.get('cryptic')??[])]),proofs=[];
  for(const key of KEYS) {
    const id='darktide:skill:cryptic:'+key,definition=r.resolve(selected.get(key)),problems=[],trace=[];
    if(!definition)throw new Error(`找不到實際選用定義：${id}`);
    const params=skillParams(r,definition,id,problems,trace);
    proveBrittleness(r,recorded,definition,id,params,problems,trace);
    if(problems.length || !Object.hasOwn(params,'brittleness_per_stack'))
      throw new Error(`靜態證明失敗，未產生候選 pins：${id} ${JSON.stringify(problems)}`);
    proofs.push({id,definition:{file:definition.file,start:definition.start,line:definition.line},params,trace});
  }
  const files=Object.fromEntries(sortedEntries(snapshots).map(([p,{bytes}])=>[p,createHash('sha256').update(bytes).digest('hex')]));
  return {pins:{sourceCommit:reader.commit,files,directories:Object.fromEntries(sortedEntries(directories))},proofs};
}

export function diffBrittlenessPins(previous,candidate) {
  const diff=(before={},after={})=>({
    added:Object.keys(after).filter(p=>!Object.hasOwn(before,p)).sort(),
    removed:Object.keys(before).filter(p=>!Object.hasOwn(after,p)).sort(),
    changed:Object.keys(after).filter(p=>Object.hasOwn(before,p)&&JSON.stringify(before[p])!==JSON.stringify(after[p])).sort()});
  return {sourceCommit:{before:previous.sourceCommit,after:candidate.sourceCommit},
    files:diff(previous.files,candidate.files),directories:diff(previous.directories,candidate.directories)};
}

async function main(argv) {
  const args=parseArgs(argv,{'source-repo':'value','source-commit':'value','output-dir':'value'});
  if(!args['source-commit'] || !args['output-dir'])
    throw new Error('用法：node scripts/cryptic-brittleness-pins.mjs --source-repo <repo> --source-commit <commit> --output-dir <新目錄>');
  const repo=resolveSourceRepo({repo:args['source-repo']});
  const commit=git(repo,['rev-parse','--verify',`${args['source-commit']}^{commit}`]).trim();
  const {pins,proofs}=collectBrittlenessPins(createSourceReader({repo,commit}));
  // The old manifest is used only for the report, AFTER a complete unpinned proof.
  const previous=JSON.parse(readFileSync(manifestUrl,'utf8')),diff=diffBrittlenessPins(previous,pins);
  const root=resolve(args['output-dir']),candidate=resolve(root,'candidate-pins.json'),report=resolve(root,'pins-diff.json');
  for(const file of [candidate,report])if(existsSync(file))throw new Error(`輸出已存在，請指定新目錄：${file}`);
  mkdirSync(root,{recursive:true});
  writeFileSync(candidate,JSON.stringify(pins,null,2)+'\n',{flag:'wx'});
  writeFileSync(report,JSON.stringify({diff,proofs},null,2)+'\n',{flag:'wx'});
  console.log(JSON.stringify({sourceCommit:commit,files:Object.keys(pins.files).length,directories:Object.keys(pins.directories).length,candidate,report,diff},null,2));
}

if(process.argv[1] && import.meta.url===pathToFileURL(process.argv[1]).href)
  await main(process.argv.slice(2));
