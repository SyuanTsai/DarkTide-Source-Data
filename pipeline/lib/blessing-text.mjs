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

export function verifiedTextKeys(text,key,file,shared=[]) {
  const candidates=[...new Set([...localizationCandidates(key,file),...shared])];
  const pick=suffix=> {
    const found=candidates.map(k=>k+suffix).filter(k=>text.lookup(k));
    return found.find(k=>typeof text.lookup(k)?.en==='string') ?? found[0] ?? null;
  };
  return {name:pick(''),description:pick('_desc')};
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
