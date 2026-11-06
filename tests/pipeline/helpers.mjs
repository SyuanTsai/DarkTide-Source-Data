import { mkdtempSync, mkdirSync, writeFileSync, readFileSync, readdirSync, rmSync } from 'node:fs';
import { tmpdir } from 'node:os';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { spawnSync, execFileSync } from 'node:child_process';
import { createHash } from 'node:crypto';
import { locHash } from '../../pipeline/lib/official-text.mjs';
export const root = fileURLToPath(new URL('../../',import.meta.url));
export function git(repo,...args) { return execFileSync('git',['-C',repo,'-c','user.name=test','-c','user.email=test@example.com',...args],{encoding:'utf8',maxBuffer:1<<30}); }
export function put(base,file,text) { const p=path.join(base,file); mkdirSync(path.dirname(p),{recursive:true}); writeFileSync(p,text); }
function copyTree(from,to) { for (const e of readdirSync(from,{withFileTypes:true})) { const p=path.join(from,e.name),dest=path.join(to,e.name); if(e.isDirectory()) copyTree(p,dest); else put(to,e.name,readFileSync(p)); } }
export function commit(repo,subject='Added Version 1.2.3 01-01-26') { git(repo,'add','.'); git(repo,'commit','-m',subject); return git(repo,'rev-parse','HEAD').trim(); }
export function cli(script,args=[]) { return spawnSync(process.execPath,[path.join(root,'pipeline',script),...args],{cwd:root,encoding:'utf8',maxBuffer:1<<30}); }
/** Every test owns its temporary tree; cleanup cannot target repositories outside it. */
export function fixture(t,{version='1.2.3',duplicates=false}={}) {
  const dir=mkdtempSync(path.join(tmpdir(),'syp385-spec1-'));
  t.after(() => rmSync(dir,{recursive:true,force:true}));
  const source=path.join(dir,'source'),priv=path.join(dir,'private'),work=path.join(dir,'work'),state=path.join(dir,'state.json');
  mkdirSync(source); mkdirSync(priv);
  git(source,'init','--initial-branch=master'); git(priv,'init','--initial-branch=master');
  put(source,'.gitattributes','* -text\n'); put(priv,'.gitattributes','* -text\n');
  copyTree(fileURLToPath(new URL('./fixtures/source-code/',import.meta.url)),source);
  const sha=commit(source);
  const rows = {
    items:[['loc_autogun_p1_m1','Autogun','自動槍'],['loc_glossary_term_bleed','Bleed {value}\nline','流血'],['loc_glossary_term_unique',null,'只有中文']],
    ui:[['loc_class_veteran_name','Veteran','老兵'],['loc_class_veteran_description','A soldier','士兵'],['loc_glossary_talent_aura','Aura','光環'],['loc_term_glossary_bleed','Bleeding','流血']]
  };
  const resources=[];
  for (const [resource,entries] of Object.entries(rows)) {
    const files=[];
    for (const locale of ['en','zh-tw']) {
      const data=entries.filter(e => e[locale==='en'?1:2]!==null).map((e,i) => ({entry_index:i,hash:locHash(e[0]),text:e[locale==='en'?1:2],suffix:'ignored',occurrence:1,unresolved:false,dup_hash:false,missing_in_other_locale:false}));
      if (duplicates && resource==='items' && locale==='en') {data[0].dup_hash=true;data.push({...data[0],text:'Conflicting',occurrence:2});}
      const raw=data.map(v => JSON.stringify(v)).join('\n')+'\n',file=`${resource}.${locale}.jsonl`;
      put(priv,`localization/100/${file}`,raw);
      files.push({locale,path:file,rows:data.length,sha256:createHash('sha256').update(raw).digest('hex')});
    }
    resources.push({name:resource,files});
  }
  const manifest={gameVersion:version,resources};
  put(priv,'localization/100/manifest.json',JSON.stringify(manifest));
  put(priv,'localization/9/manifest.json',JSON.stringify(manifest));
  put(priv,'localization/not-a-batch/ignore','x');
  put(priv,'localization/999999','numeric file is not a batch directory');
  commit(priv,'localization');
  return {dir,source,priv,work,state,sha,manifest,
    sourceArgs:['--source-code-repo',source,'--commit',sha,'--text-batch','100','--work-dir',work,'--state',state],
    textArgs:['--private-repo',priv,'--private-ref','master','--text-batch','100','--work-dir',work,'--state',state],
    versionArgs:['--source-code-repo',source,'--commit',sha,'--private-repo',priv,'--private-ref','master','--text-batch','100','--state',state]};
}
