import { readFileSync, writeFileSync, mkdirSync, copyFileSync } from 'node:fs';
import { join } from 'node:path';
import { stringifyCanonical } from '../pipeline/lib/canonical-json.mjs';
import { validateExtractItems } from '../pipeline/lib/extract-output.mjs';

const [first,second,baseline,output,validateRoot]=process.argv.slice(2);
if(!validateRoot)throw new Error('Usage: mechanics-acceptance.mjs first-extract second-extract baseline-version report.json validate-root');
const read=p=>JSON.parse(readFileSync(p,'utf8'));
const strip=item=>{const i=structuredClone(item);delete i.values.mechanics;for(const t of i.values.tiers??[])delete t.mechanics;delete i.source.valueSources;delete i.source.codeRefs;delete i.source.scriptVersion;return i;};
const report={categories:{}};
for(const category of ['skills','blessings']){
 const p=join(first,category+'.json'),bytes=readFileSync(p),extract=JSON.parse(bytes),previous=read(join(baseline,category+'.json'));
 const old=new Map(previous.items.map(i=>[i.id,i])),differences=[];
 for(const item of extract.items){const original=old.get(item.id);const expected=original&&Object.fromEntries(Object.keys(item).map(k=>[k,original[k]]));if(!expected||stringifyCanonical(strip(item))!==stringifyCanonical(strip(expected)))differences.push(item.id);}
 for(const item of previous.items)if(!extract.items.some(i=>i.id===item.id))differences.push(item.id);
 const pointers=extract.items.flatMap(i=>[...Object.keys(i.values.mechanics??{}).map(k=>[i,'/mechanics/'+k]),...(i.values.tiers??[]).flatMap((t,n)=>Object.keys(t.mechanics??{}).map(k=>[i,`/tiers/${n}/mechanics/${k}`]))]);
 const sourced=pointers.filter(([i,k])=>i.source.valueSources?.[k]?.length).length;
 const stats={items:extract.items.length,differences,identicalBytes:bytes.equals(readFileSync(join(second,category+'.json'))),schemaVersion:extract.schemaVersion,schemaErrors:validateExtractItems(category,extract.items,extract),mechanicsKeys:pointers.length,valueSources:sourced,coverage:pointers.length?sourced/pointers.length:1,codeRefs:extract.items.reduce((n,i)=>n+Object.keys(i.source.codeRefs??{}).length,0)};
 report.categories[category]=stats;
 if(differences.length||!stats.identicalBytes||stats.schemaErrors.length||stats.coverage!==1)process.exitCode=1;
}
// validate.mjs consumes final-shaped files. Padding explanations is confined
// to this temporary root; original data and extractor output remain untouched.
const version='1.13.4';mkdirSync(join(validateRoot,'data',version),{recursive:true});mkdirSync(join(validateRoot,'pipeline'),{recursive:true});
for(const category of ['skills','blessings','weapons','terms']){
 const modern=['skills','blessings'].includes(category),x=read(join(modern?first:baseline,category+'.json'));
 const final={schemaVersion:'1.2.0',category,gameVersion:x.gameVersion,sourceCommit:x.sourceCommit,textBatch:x.textBatch,items:x.items.map(i=>modern?{...i,explanation:{effect:'-',conditions:'',calculation:'',notes:'',extra:''},errata:[]}:i)};
 writeFileSync(join(validateRoot,'data',version,category+'.json'),stringifyCanonical(final));
}
const meta=read(join(first,'skills.json'));
writeFileSync(join(validateRoot,'data/current.json'),stringifyCanonical({schemaVersion:'1.2.0',gameVersion:version,path:'data/'+version,sourceCommit:meta.sourceCommit,textBatch:meta.textBatch,versions:[version]}));
copyFileSync('pipeline/state.json',join(validateRoot,'pipeline/state.json'));
writeFileSync(output,stringifyCanonical(report));console.log(JSON.stringify(report));
