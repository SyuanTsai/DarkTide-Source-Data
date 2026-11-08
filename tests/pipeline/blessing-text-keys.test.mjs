import { test } from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import { textKeyMappings, verifiedTextKeys } from '../../pipeline/lib/blessing-text.mjs';
const fixture=JSON.parse(readFileSync(new URL('./fixtures/blessing-text/verified.json',import.meta.url)));
test('155 verified trait mappings resolve both keys and both languages',()=>{
  assert.equal(fixture.length,155); assert.equal(textKeyMappings.length,155);
  const all=Object.assign({},...fixture.map(x=>x.text));
  for(const row of fixture) {
    const problems=[],text={lookup:key=>all[key]??null};
    const keys=verifiedTextKeys(text,row.trait,'',[],p=>problems.push(p));
    assert.deepEqual(keys,row.keys,row.trait); assert.deepEqual(problems,[]);
    for(const key of Object.values(keys)) assert.deepEqual(text.lookup(key),row.text[key],row.trait);
  }
  assert.deepEqual(new Set(fixture.map(x=>x.cause)),new Set(['namespace','independentDesc','spelling','familySpecific','renamedStem']));
});
test('mapping integrity and missing text reports',()=>{
  assert.equal(new Set(textKeyMappings.map(x=>x.trait)).size,155);
  for(const row of textKeyMappings) {
    assert.match(row.trait,/^weapon_trait_/); for(const k of ['name','description']) assert.match(row[k],/^loc_[a-z0-9_]+$/);
    assert.ok(row.evidence.length); for(const s of row.evidence) {assert.ok(s.trim());assert.doesNotMatch(s,/^[A-Za-z]:/);}
  }
  const problems=[];verifiedTextKeys({lookup:()=>null},textKeyMappings[0].trait,'',[],p=>problems.push(p));assert.equal(problems.length,2);
});
test('namespace, spelling and description suffix candidates require a unique hit',()=>{
  const key='weapon_trait_bespoke_gun_p1_continous_fire',file='weapon_traits_bespoke_gun_p1.lua';
  const vals=new Map([['loc_trait_continuous_fire',{en:'a',zh:'甲'}],['loc_trait_continuous_fire_new_desc',{en:'b',zh:'乙'}]]);
  const problems=[],lookup=k=>vals.get(k);assert.deepEqual(verifiedTextKeys({lookup},key,file,[],p=>problems.push(p)),{name:'loc_trait_continuous_fire',description:'loc_trait_continuous_fire_new_desc'});assert.deepEqual(problems,[]);
  vals.set('loc_continuous_fire',{en:'c',zh:'丙'});assert.equal(verifiedTextKeys({lookup},key,file,[],p=>problems.push(p)).name,null);assert.equal(problems.at(-1).code,'AMBIGUOUS_TEXT_KEY');
});
