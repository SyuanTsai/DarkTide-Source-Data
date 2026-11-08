// Run after the documented SYP-403 environment/gh isolation has been applied.
// This helper is deliberately outside the standard tests/pipeline collector.
import { cpSync, existsSync, mkdirSync, mkdtempSync, readFileSync, writeFileSync } from 'node:fs';
import { join, resolve, delimiter } from 'node:path';
import { fileURLToPath } from 'node:url';
import { spawnSync } from 'node:child_process';

const root = fileURLToPath(new URL('../../', import.meta.url));
if (Object.keys(process.env).some(name => /^(GH_TOKEN|GITHUB_TOKEN|GH_ENTERPRISE_TOKEN|DARKTIDE_.*)$/i.test(name)))
  throw new Error('Clear GitHub credentials and DARKTIDE_* before regression experiments');
const shim = (process.env.PATH ?? process.env.Path).split(delimiter)[0];
if (!process.env.GH_CONFIG_DIR || !['gh.exe','gh.cmd'].every(name => existsSync(join(shim,name))))
  throw new Error('Both gh shims must be first in PATH and GH_CONFIG_DIR must be isolated');
const parent = join(root,'.pipeline-work'); mkdirSync(parent,{recursive:true});
const copy = mkdtempSync(join(parent,'schema12-regression-'));
for (const dir of ['pipeline/lib','pipeline/schema']) cpSync(join(root,dir),join(copy,dir),{recursive:true});
mkdirSync(join(copy,'tests/pipeline'),{recursive:true});
cpSync(join(root,'tests/pipeline/schema12.test.mjs'),join(copy,'tests/pipeline/schema12.test.mjs'));
const originals = new Map();
const edit = (path, change) => {
  const full=join(copy,path),before=readFileSync(full,'utf8');
  if (!originals.has(full)) originals.set(full,before);
  const after=change(before); if(after===before) throw new Error(`Mutation did not apply: ${path}`);
  writeFileSync(full,after);
};
const replace = (path,from,to) => edit(path,s=>s.replace(from,to));
const schema = change => edit('pipeline/schema/common.schema.json',s=>{const x=JSON.parse(s);change(x.$defs);return JSON.stringify(x)+'\n';});
const semantic='pipeline/lib/schema12.mjs',fingerprint='pipeline/lib/diff-core.mjs',citations='pipeline/lib/verify/citations.mjs';
const experiments = [
 ['版本限制',()=>{
   schema(d=>{d.dataFile.allOf=[];});replace(semantic,"const modern = file.schemaVersion === '1.2.0';",'const modern = true;');
 }],
 ['mechanics 與 valueSources 對應',()=>replace(semantic,'if (!Object.hasOwn(sources ?? {}, pointer))','if (false)')],
 ['codeRefs path／symbol 一致性',()=>replace(semantic,'if (ref?.path !== refPath || ref?.symbol !== symbol)','if (false)')],
 ['fingerprint 納入 codeRefs',()=>replace(fingerprint,/  if \(item.source\?\.codeRefs !== undefined\)\r?\n    value.codeRefs = [^\n]+\n/,'')],
 ['fingerprint 排除 valueSources',()=>replace(fingerprint,"  return createHash('sha256').update(stringifyCanonical(value)).digest('hex');","  if (item.source?.valueSources !== undefined) value.valueSources = item.source.valueSources;\n  return createHash('sha256').update(stringifyCanonical(value)).digest('hex');")],
 ['citations 子字串檢查',()=>replace(citations,"if (typeof citation?.text !== 'string' || typeof text !== 'string' || !text.includes(citation.text))",'if (false)')],
 ['V-CITE',()=>replace(citations,"if (schemaVersion === '1.2.0' && ['skills','blessings'].includes(category) && generated)",'if (false)')],
 ['errata 拒收單數 valueRef',()=>schema(d=>{d.erratum.properties.valueRef={type:'string'};})],
 ['displayParameter 必須有 param／tier',()=>{
   schema(d=>{d.erratum.properties.anchor.then={};});
   replace(semantic,"if (typeof target?.id === 'string' && target.id.startsWith('darktide:blessing:') && !Number.isInteger(anchor.tier))",'if (false)');
   replace(semantic,"if (!Object.hasOwn(target?.values?.params ?? {}, anchor.param))","if (anchor.param !== undefined && !Object.hasOwn(target?.values?.params ?? {}, anchor.param))");
   replace(semantic,'const text = anchorTarget(target, anchor);',"const text = anchorTarget(target, anchor) ?? (anchor.field === 'displayParameter' && (anchor.param === undefined || (target?.id?.startsWith('darktide:blessing:') && anchor.tier === undefined)) ? anchor.text : undefined);");
 }],
];
const run = () => spawnSync(process.execPath,['--test','--test-reporter=tap','tests/pipeline/schema12.test.mjs'],{cwd:copy,encoding:'utf8'});
const baseline=run();if(baseline.status!==0)throw new Error(baseline.stdout+baseline.stderr);
const results=[];
for(const [name,mutate] of experiments){
 try{
  mutate();const result=run();
  const failed=[...result.stdout.matchAll(/^not ok \d+ - (.+)$/gm)].map(m=>m[1]);
  writeFileSync(join(copy,`experiment-${results.length+1}.tap`),result.stdout+result.stderr);
  if(result.status===0||failed.length===0)throw new Error(`Mutation survived or failed outside assertions: ${name}`);
  results.push({name,exitCode:result.status,failed});console.log(`${name}: ${failed.length} tests failed`);
 }finally{for(const [path,text] of originals)writeFileSync(path,text);}
}
const restored=run();if(restored.status!==0)throw new Error('Restored baseline failed: '+restored.stdout+restored.stderr);
for(const [path,text] of originals)if(readFileSync(path,'utf8')!==text)throw new Error(`Restore mismatch ${path}`);
const report={copy:resolve(copy),baseline:'pass',results,restored:'pass'};
writeFileSync(join(copy,'results.json'),JSON.stringify(report,null,2)+'\n');
console.log(`Evidence: ${join(copy,'results.json')}`);
