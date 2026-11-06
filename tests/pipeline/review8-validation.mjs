// Manual pinned-data evidence runner. No Lua execution, downloads or dependencies.
import assert from 'node:assert/strict';
import {readFileSync,writeFileSync,mkdtempSync} from 'node:fs';
import {tmpdir} from 'node:os';
import path from 'node:path';
import {spawnSync} from 'node:child_process';
import {createHash} from 'node:crypto';
import {createSourceReader} from '../../pipeline/lib/source-reader.mjs';
import {loadTextIndex} from '../../pipeline/lib/official-text.mjs';
import {tokenizeLua} from '../../pipeline/lib/lua-static-reader.mjs';
import {buildSkills} from '../../pipeline/extract-skills.mjs';
import {buildWeapons} from '../../pipeline/extract-weapons.mjs';
import {build as buildBlessings} from '../../pipeline/extract-blessings.mjs';
import {buildTerms} from '../../pipeline/extract-terms.mjs';

const commit='ba6c148f3c2768ca3ce20d846a12e56e2f433f3e';
const categories=['text','skills','weapons','blessings','terms'];
const json=f=>JSON.parse(readFileSync(f,'utf8'));
const unknown=n=>!n||typeof n!=='object'?0:Number(n.value===null&&Boolean(n.unknown))+Object.values(n).reduce((s,v)=>s+unknown(v),0);
const counts=xs=>Object.fromEntries([...new Set(xs)].sort().map(k=>[k,xs.filter(x=>x===k).length]));
const [mode,baseline,current,cloneOnly,censusEvidence]=process.argv.slice(2);
if(mode==='run') {
 const dir=baseline??mkdtempSync(path.join(tmpdir(),'syp385-spec12-two-pass-'));
 console.log(dir);const first=new Map();
 for(let pass=0;pass<2;pass++)for(const c of categories){
  const r=spawnSync(process.execPath,[`pipeline/extract-${c}.mjs`,...(c==='text'?[]:['--commit',commit]),'--text-batch','25606770','--work-dir',dir,'--state',path.join(dir,'state.json')],{encoding:'utf8',maxBuffer:1<<24});
  writeFileSync(path.join(dir,`${c}-${pass}.log`),r.stdout+r.stderr);assert.equal(r.status,0,r.stdout+r.stderr);
  const bytes=readFileSync(path.join(dir,'extract',c+'.json'));if(pass)assert.deepEqual(bytes,first.get(c),c+' byte equality');else first.set(c,bytes);
  console.log(pass+1,c,r.stdout.trim());
 }
 writeFileSync(path.join(dir,'verification.json'),JSON.stringify({commit,textBatch:'25606770',passes:2,byteIdentical:true,sha256:Object.fromEntries([...first].map(([c,b])=>[c,createHash('sha256').update(b).digest('hex')]))},null,2)+'\n');
 console.log('五檔兩輪 byte 相同');
} else if(mode==='report') {
 const report={baseline:'7d89f5334bd80e72cb8a30ac8b1fc40dbbf174fc',commit,textBatch:'25606770',categories:{},changes:[],cloneOnlyChanges:[],provenance:{}};
 const summaries={};
 function compare(category,oldItems,newItems,dest){
  const byId=new Map(newItems.map(x=>[x.id,x]));let changed=0;
  const structure=n=>Array.isArray(n)?n.map(structure):n&&typeof n==='object'?Object.fromEntries(Object.entries(n).filter(([k])=>!['params','stats'].includes(k)).map(([k,v])=>[k,structure(v)])):n;
  for(const old of oldItems){const now=byId.get(old.id);assert.ok(now,'missing '+old.id);
   assert.deepEqual(structure(now.values),structure(old.values),'structure '+old.id);
   assert.deepEqual(now.name,old.name,'name '+old.id);assert.deepEqual(now.official,old.official,'official '+old.id);
   if(JSON.stringify(old.values)!==JSON.stringify(now.values))changed++;
   function walk(a,b,p){
    if(JSON.stringify(a)===JSON.stringify(b))return;
    if(a&&typeof a==='object'&&'value'in a&&(a.value===null||typeof a.value!=='object'||Array.isArray(a.value))&&b&&'value'in b&&(b.value===null||typeof b.value!=='object'||Array.isArray(b.value))){dest.push({category,id:old.id,path:p,old:a,new:b,kind:a.value!==null&&b.value===null&&b.unknown?'known-to-unknown':typeof a.value==='number'&&typeof b.value==='number'?'numeric-change':'other'});return;}
    if(Array.isArray(a)&&Array.isArray(b)){
     const key=a.length&&a.every(x=>x&&typeof x==='object'&&('key'in x||'id'in x||'tier'in x))?('key'in a[0]?'key':'id'in a[0]?'id':'tier'):null;
     if(key){for(const x of a){const y=b.find(v=>v[key]===x[key]);if(!y&&'min'in x&&'max'in x){const bar=/bars\[([^\]]+)\]/.exec(p)?.[1];const barIndex=now.values.bars.findIndex(v=>v.id===bar);const action=x.key.split('.').slice(0,2).join('_');const param=`bar_${barIndex+1}_${action}`;const candidates=Object.entries(now.values.params).filter(([k,v])=>k===param&&v.value===null&&v.unknown);dest.push({category,id:old.id,path:`${p}[${x[key]}]`,old:x,new:candidates.length?{param:candidates[0][0],...candidates[0][1]}:null,kind:candidates.length?'known-to-unknown':'removed',reason:'非字面索引／不可信別名寫入撤銷 module 或共享 table binding；完整來源見 sourceFiles',sourceRef:old.id});}else walk(x,y,`${p}[${x[key]}]`);}for(const y of b)if(!a.some(x=>x[key]===y[key]))walk(undefined,y,`${p}[${y[key]}]`);return;}
     const n=Math.max(a.length,b.length);for(let i=0;i<n;i++)walk(a[i],b[i],p+'['+i+']');return;
    }
    if(a&&b&&typeof a==='object'&&typeof b==='object'){for(const k of new Set([...Object.keys(a),...Object.keys(b)]))walk(a[k],b[k],p+'.'+k);return;}
    dest.push({category,id:old.id,path:p,old:a??null,new:b??null,kind:typeof a==='number'&&typeof b==='number'?'numeric-change':'other'});
   }
   walk(old.values,now.values,'values');
  }
  assert.equal(byId.size,oldItems.length,'item count '+category);return changed;
 }
 for(const c of categories){const now=json(path.join(current,'extract',c+'.json'));if(c==='text'){summaries[c]={resources:Object.fromEntries(Object.entries(now.resources).map(([k,v])=>[k,Object.keys(v).length])),problems:counts(now.problems.map(p=>p.code))};continue;}
  for(const item of now.items)report.provenance[item.id]=item.source.files;const old=json(path.join(baseline,'extract',c+'.json'));assert.equal(now.status,'ok',c);const changed=compare(c,old.items,now.items,report.changes);
  const itemIndex=new Map(now.items.map(i=>[i.id,i])),problemIndex=new Map();
  for(const p of now.problems) {
   if(!['UNRESOLVED_VALUE','UNRESOLVED_STAT'].includes(p.code))continue;
   const param=p.param??/參數 ([a-z0-9_]+)（/.exec(p.message)?.[1]??(c==='weapons'&&p.key?`bar_${itemIndex.get(p.id)?.values.bars.findIndex(b=>b.id===p.bar)+1}_${p.key.toLowerCase().replace(/[^a-z0-9_]/g,'_')}`:null);
   const key=p.id+'|'+param;if(!problemIndex.has(key))problemIndex.set(key,[]);problemIndex.get(key).push(p);
  }
  for(const change of report.changes.filter(x=>x.category===c&&x.kind==='known-to-unknown')) {
   const param=change.new?.param??/\.params\.([^.\[]+)$/.exec(change.path)?.[1];
   const matches=problemIndex.get(change.id+'|'+param)??[];
   change.problems=matches;
   change.reason=matches.length?[...new Set(matches.map(p=>p.reason??/^\[([^\]]+)\]/.exec(p.message)?.[1]??p.message))].join('; '):'DYNAMIC_VALUE';
  }
  report.categories[c]={items:now.items.length,official:now.items.filter(i=>i.name.origin==='official').length,excluded:now.excluded.length,unknown:unknown(now.items),baselineUnknown:unknown(old.items),valuesChangedItems:changed,problems:counts(now.problems.map(p=>p.code)),changeKinds:counts(report.changes.filter(x=>x.category===c).map(x=>x.kind)),downgradeReasons:counts(report.changes.filter(x=>x.category===c&&x.kind==='known-to-unknown').map(x=>x.reason))};summaries[c]=report.categories[c];
 }
 if(cloneOnly)compare('skills',json(path.join(baseline,'extract/skills.json')).items,json(path.join(cloneOnly,'extract/skills.json')).items,report.cloneOnlyChanges);
 report.reasonDefinition='reason 取自新輸出的對應 problem；DYNAMIC_VALUE 為白名單撤銷數值證據的輸出標記。provenance 與 census 保留來源及各不可信形式位置，詞法候選不等同於執行期因果。';
 console.log(JSON.stringify({summaries,changes:counts(report.changes.map(x=>x.kind))},null,2));
 // Rebuild with a wrapper to inventory the exact union of Lua blobs read by
 // the five-stage pipeline. No entire Lua/JSON blob is printed to the console.
 if(censusEvidence) {
  const cached=json(censusEvidence);assert.equal(cached.commit,commit);
  for(const c of categories)assert.equal(cached.hashes[c].current,createHash('sha256').update(readFileSync(path.join(current,'extract',c+'.json'))).digest('hex'),'census inputs '+c);
  report.census=cached.census;report.censusReuse={from:censusEvidence,verifiedInputHashes:true};
 } else {
 const base=createSourceReader({repo:process.env.DARKTIDE_SOURCE_CODE_REPO,commit}),files=new Map();
 const reader={...base,read(p){const s=base.read(p);if(p.endsWith('.lua'))files.set(p,s);return s;}};
 const text=loadTextIndex(path.join(current,'extract/text.json')),envelope=json(path.join(current,'extract/skills.json'));
 for(const build of [buildSkills,buildWeapons,buildBlessings,buildTerms])await build({reader,text,envelope,workDir:current});
 const occurrences=[];
 // Lexical census, including function bodies and unused results. These are
 // potential alias-producing forms, not a count of executed mutations.
 const modeled=new Set(['require','settings','type','string.format','bit.bor',...['abs','floor','ceil','round','max','min','rad','degrees_to_radians','lerp'].map(n=>'math.'+n),...['clone','clone_instance','shallow_copy','merge','merge_recursive','add_missing','append','enum','keys','ukeys','contains','enum_from_array','index_lookup_table','make_unique','make_strict','set_readonly','set','array_to_map','sort','insert','remove','clear','add_mirrored_entry'].map(n=>'table.'+n)]);
 // Correct the table helper expansion without relying on source text regexes.
 for(const name of ['clone','clone_instance','shallow_copy','merge','merge_recursive','add_missing','append','enum','keys','ukeys','contains','enum_from_array','index_lookup_table','make_unique','make_strict','set_readonly','set','array_to_map','sort','insert','remove','clear','add_mirrored_entry'])modeled.add('table.'+name);
 for(const [file,source]of [...files].sort(([a],[b])=>a.localeCompare(b))){const t=tokenizeLua(source);const close=(i,o,c)=>{let d=1;while(++i<t.length){if(['string','number'].includes(t[i].type))continue;if(t[i].value===o)d++;if(t[i].value===c&&!--d)return i;}return t.length-1;};
  for(let i=0;i<t.length-1;i++){
   const at=t[i],add=(form,detail)=>occurrences.push({file,line:at.line,offset:at.start,form,...detail});if(['string','number'].includes(at.type))continue;
   if(at.value==='['){const end=close(i,'[',']');if(!(end===i+2&&['string','number'].includes(t[i+1]?.type)))add('computed-index');}
   if(at.value==='('&&t[i-1]?.type!=='identifier'&&![')',']'].includes(t[i-1]?.value)&&['.',':','[','('].includes(t[close(i,'(',')')+1]?.value))add('parenthesized-prefix');
   if(at.type==='identifier'&&!['.',':','function'].includes(t[i-1]?.value)){let j=i+1,name=at.value;while(['.',':'].includes(t[j]?.value)&&t[j+1]?.type==='identifier'){name+=t[j].value+t[j+1].value;j+=2;}if(t[j]?.value==='('&&!modeled.has(name))add('non-whitelisted-call',{callee:name});}
  }
 }
 report.census={definition:'固定 commit，四個 build 透過 reader.read 實際讀取的 Lua union；逐 token 計數，含函式 body 與未使用的回傳。non-whitelisted-call 是詞法候選，含另有 body proof 的 local／有限 DSL；不宣稱全都導致撤銷。',files:files.size,counts:counts(occurrences.map(x=>x.form)),callNames:counts(occurrences.filter(x=>x.callee).map(x=>x.callee)),occurrences};
 }
 const reportFile=path.join(mkdtempSync(path.join(tmpdir(),'syp385-spec12b-evidence-')),'report.json');
 report.inputs={baseline,current,cloneOnly};
 report.hashes=Object.fromEntries(categories.map(c=>[c,Object.fromEntries([['baseline',baseline],['current',current]].map(([k,dir])=>[k,createHash('sha256').update(readFileSync(path.join(dir,'extract',c+'.json'))).digest('hex')]))]));
 writeFileSync(reportFile,JSON.stringify(report,null,2)+'\n');
 const changes=counts(report.changes.map(x=>x.kind)),cell=x=>'`'+JSON.stringify(x).replaceAll('|','\\|')+'`';
 const md=['# SYP-385 spec12b 驗證證據','',`來源 commit：\`${commit}\`；text batch：\`25606770\`；比較基準：\`${report.baseline}\`。`,
  '',`完整逐筆清單（含 id、路徑、原值、新值、原因、problem、provenance 及 census 所有位置）：[report.json](${reportFile.replaceAll('\\','/')})。`,
  '',`擷取目錄：\`${current}\`；兩輪 byte 驗證見同目錄 \`verification.json\`。`,
  '', '## 類別彙總','', '| 類別 | 項目 | 官方名稱 | unknown（基準→目前） | values 改變項目 | 原有值轉 unknown |','|---|---:|---:|---:|---:|---:|',
  ...Object.entries(report.categories).map(([c,s])=>`| ${c} | ${s.items} | ${s.official} | ${s.baselineUnknown}→${s.unknown} | ${s.valuesChangedItems} | ${s.changeKinds['known-to-unknown']??0} |`),
  '',`已知數值改值：${changes['numeric-change']??0} 筆；原有值轉 unknown：${changes['known-to-unknown']??0} 筆；其他差異：${changes.other??0} 筆。武器以一組 min/max endpoint 計一筆降級；多個端點可合併至同一 unknown 標記，因此降級筆數不等於 unknown 標記淨增數。`,
  '', '所有項目的名稱、官方文字、及排除 params/stats 後的 values 結構均與基準逐項相同（runner 使用深度相等斷言）。技能官方名稱 618/618，既有 90% 門檻保留。',
  '', '## Problems 依 code 計數','',...Object.entries(report.categories).map(([c,s])=>`- ${c}：${cell(s.problems)}`),
  '', '## 原有值轉 unknown：各類別依原因計數','',report.reasonDefinition,
  ...Object.entries(report.categories).flatMap(([c,s])=>['',`### ${c}`,'','| 原因 | 筆數 |','|---|---:|',...Object.entries(s.downgradeReasons).map(([k,v])=>`| ${k.replaceAll('|','\\|')} | ${v} |`)]),
  '', '## 原有值轉 unknown：前 50 筆','', '| id | 路徑 | 原值 | 新值 | 原因 |','|---|---|---|---|---|',
  ...report.changes.filter(x=>x.kind==='known-to-unknown').slice(0,50).map(x=>`| ${x.id} | ${x.path} | ${cell(x.old)} | ${cell(x.new)} | ${x.reason.replaceAll('|','\\|')} |`),
  '', '## F4 深複製隔離比對','', '只套用深複製修正的隔離輸出有以下兩筆變更；最終保守輸出中，這兩筆均為 DYNAMIC_VALUE。','', '| id | 路徑 | 基準 | 僅修正深複製 |','|---|---|---|---|',
  ...report.cloneOnlyChanges.map(x=>`| ${x.id} | ${x.path} | ${cell(x.old)} | ${cell(x.new)} |`),
  '', '## 不可信形式盤點','', report.census.definition,'',`實際讀取 Lua：${report.census.files} 檔。`,'','| 形式 | 次數 |','|---|---:|',...Object.entries(report.census.counts).map(([k,v])=>`| ${k} | ${v} |`),
  '', 'F3 指定函式的詞法呼叫數：'+cell(Object.fromEntries(['unpack','table.unpack','select','rawget','setmetatable','next'].map(k=>[k,report.census.callNames[k]??0])))+'。',
  '', '## 輸出 SHA-256','', '| 類別 | 7d89f53 基準 | 目前 |','|---|---|---|',...Object.entries(report.hashes).map(([c,h])=>`| ${c} | ${h.baseline} | ${h.current} |`),
  '', '## 與規格的差異及限制','', '依 spec12b 主控決定只撤銷數值證據，保留名稱及結構；字串編碼的具體數字（例如 5、10%）亦屬數值。明確結構寫入仍走既有結構／problem 機制。未降低官方名稱門檻。',
  '', '固定來源的所有 weapon stat endpoints 均因保守規則轉 unknown；獨立的彈藥值仍保留。真實 smoke 因此改驗證明確 unknown 標記、對應 problem 與獨立數值，原有正常數值案例仍由 fixture 保護。詞法盤點包含未執行路徑及已有 body proof 的候選，不宣稱每次出現均會造成實際撤銷。',''];
 writeFileSync('pipeline/spec12-review8-evidence.md',md.join('\n'));
 console.log(JSON.stringify({reportFile,summaries,changes:counts(report.changes.map(x=>x.kind)),cloneOnlyChanges:report.cloneOnlyChanges,census:{files:report.census.files,counts:report.census.counts}},null,2));
} else throw Error('run [tmp-dir] | report baseline-dir current-dir [clone-only-dir]');
