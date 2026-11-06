import assert from 'node:assert/strict';

// Spec12: fixed source contains untrusted writes to shared helper bindings.
// Each former endpoint must have a matching unresolved row and output marker;
// an empty stats array alone would also pass after a broken extraction.
export function assertRevokedEndpoint(data,weapon,key) {
 const item=data.items.find(i=>i.key===weapon);assert.ok(item,weapon);
 const rows=data.problems.filter(p=>p.id===item.id&&p.code==='UNRESOLVED_STAT'&&p.key===key);
 assert.ok(rows.length,weapon+' '+key);
 for(const row of rows) {
  assert.equal(row.reason,'DYNAMIC_VALUE');
  const bar=item.values.bars.findIndex(b=>b.id===row.bar);assert.ok(bar>=0);
  const param=`bar_${bar+1}_${key.replaceAll('.','_')}`;
  assert.deepEqual(item.values.params[param],{value:null,unknown:'DYNAMIC_VALUE'},weapon+' '+param);
  assert.ok(!item.values.bars[bar].stats.some(s=>s.key===key||s.key.startsWith(key+'.')));
 }
}
