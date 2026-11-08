import { readFileSync } from 'node:fs';

export const textKeyMappings = JSON.parse(readFileSync(new URL('../data/blessing-text-keys.json',import.meta.url),'utf8'));
const mappingByTrait = new Map(textKeyMappings.map(row=>[row.trait,row]));

/** Candidate transformations only; lookup must verify the hash in the text index. */
export function localizationCandidates(key, file='') {
  const body=key.replace(/^weapon_trait_bespoke_/, '');
  const family=/weapon_traits_bespoke_(.+)\.lua$/.exec(file)?.[1];
  const stem=/^.+?_p\d+_(.+)$/.exec(body)?.[1] ?? (family && body.startsWith(family+'_') ? body.slice(family.length+1) : body);
  const stems=[stem];
  for(let i=0;i<stems.length;i++) {
    const reduced=stems[i].replace(/_(?:parent|child|\d+)$/, '');
    if(reduced!==stems[i] && !stems.includes(reduced)) stems.push(reduced);
  }
  return stems.map(s=>`loc_trait_bespoke_${s}`);
}

export function verifiedTextKeys(text,key,file,shared=[],problem=()=>{}) {
  const mapped=mappingByTrait.get(key);
  if(mapped) {
    for(const role of ['name','description']) {
      const value=text.lookup(mapped[role]);
      if(value?.conflict || typeof value?.en!=='string' || typeof value?.zh!=='string')
        problem({code:'MAPPING_TEXT_MISSING',message:`對照表 ${role} 缺少 en/zh 或衝突：${mapped[role]}`});
    }
    return {name:mapped.name,description:mapped.description};
  }
  const candidates=[...new Set([...localizationCandidates(key,file),...shared])];
  // Preserve previously resolved results. New candidates only fill previously missing roles.
  const legacy=suffix=> {
    const found=candidates.map(k=>k+suffix).filter(k=>text.lookup(k));
    return found.find(k=>typeof text.lookup(k)?.en==='string') ?? found[0] ?? null;
  };
  const expanded=[...new Set(candidates.flatMap(k=> {
    const variants=[k,k.replaceAll('continous','continuous')];
    return variants.flatMap(v=>[v,v.replace(/^loc_trait_bespoke_/,'loc_trait_'),v.replace(/^loc_trait_bespoke_/,'loc_')]);
  }))];
  const pick=(role,keys)=>{
    const found=[...new Set(keys)].filter(k=>text.lookup(k));
    if(found.length>1) { problem({code:'AMBIGUOUS_TEXT_KEY',message:`${role} 有多個候選：${found.join(', ')}`}); return null; }
    return found[0]??null;
  };
  const name=legacy('') ?? pick('name',expanded);
  const description=legacy('_desc') ?? pick('description',expanded.flatMap(k=>[`${k}_desc`,`${k}_new_desc`,`${k}_and_bonus_stats_desc`]));
  return {name,description};
}

/** Same normalized stem across weapon families may share a verified candidate. */
export function sharedTextCandidates(definitions) {
  const groups=new Map(), result=new Map();
  for(const def of definitions) {
    const keys=localizationCandidates(def.traitKey,def.file), stem=keys.at(-1);
    if(!groups.has(stem)) groups.set(stem,new Set());
    for(const key of keys) groups.get(stem).add(key);
    result.set(def.traitKey,stem);
  }
  return new Map([...result].map(([key,stem])=>[key,[...groups.get(stem)]]));
}
