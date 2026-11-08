import { readFileSync, writeFileSync, realpathSync, mkdirSync } from 'node:fs';
import { resolve, join, sep } from 'node:path';
import { spawnSync } from 'node:child_process';
import { stringifyCanonical } from '../pipeline/lib/canonical-json.mjs';

const [output]=process.argv.slice(2);if(!output)throw new Error('Usage: mechanics-mutations.mjs output-directory');
const root=realpathSync('.');mkdirSync(output,{recursive:true});
const mechanics='pipeline/lib/mechanics.mjs',codeRefs='pipeline/lib/mechanics-code-refs.mjs';
const anchor='const key=keyOf(parts),loc=locations(trace);';
const cases=[
 ...[['F1','stat_rule'],['B1','buff'],['B2','refresh'],['F3','finesse'],['W1','ability'],['A1','ammo'],['D1','area_buff']].flatMap(([group,prefix])=>(['F1','B1','B2','F3'].includes(group)?['skills','blessings']:['skills']).map(category=>({name:group+'-'+category,file:mechanics,from:anchor,to:`if(item.id.startsWith('darktide:${category==='skills'?'skill':'blessing'}:') && (${prefix==='refresh'?"parts.at(-1)==='refresh'":`parts[0]==='${prefix}'`}))return; ${anchor}`}))),
 {name:'valueSources',file:mechanics,from:'sources[pointer+key]=locations(',to:'/* removed provenance */ void locations('},
 {name:'one-level-functions',file:codeRefs,from:"if(follow&&d.kind==='table')",to:"if(false&&follow&&d.kind==='table')"},
 {name:'normalization',file:codeRefs,from:"return tokenizeLua(source).filter(t=>t.type!=='eof').map(t=>source.slice(t.start,t.end)).join('').replace(/\\s/g,'');",to:'return source;'},
 {name:'fail-closed',file:mechanics,from:"unknown?{value:null,unknown:'DYNAMIC_VALUE'}:{value}",to:'unknown?{value:0}:{value}'},
];
const report=[];
for(const mutation of cases){
 const file=realpathSync(resolve(mutation.file));if(!file.startsWith(root+sep))throw new Error('Mutation outside workspace');
 const before=readFileSync(file),source=before.toString('utf8');if(source.split(mutation.from).length!==2)throw new Error('Mutation anchor not unique: '+mutation.name);
 let result;
 try{
  writeFileSync(file,source.replace(mutation.from,mutation.to));
  result=spawnSync(process.execPath,['--test','--test-reporter=spec','tests/pipeline/mechanics.test.mjs'],{encoding:'utf8',env:{...process.env,PIPELINE_REAL_SMOKE:'0'},maxBuffer:16<<20});
  writeFileSync(join(output,mutation.name+'.log'),result.stdout+result.stderr);
 }finally{writeFileSync(file,before);}
 const log=result.stdout+result.stderr,failures=[...log.matchAll(/^✖ (.+)$/gm)].map(m=>m[1]);
 const caught=result.status!==0&&failures.length>0&&!/SyntaxError|ERR_MODULE_NOT_FOUND/.test(log),restored=readFileSync(file).equals(before);
 report.push({name:mutation.name,caught,restored,status:result.status,failures:[...new Set(failures)]});
 if(!caught||!restored)process.exitCode=1;
}
writeFileSync(join(output,'mutations.json'),stringifyCanonical(report));console.log(JSON.stringify(report));
