/** Check only caller-declared semantic fields. This helper never reads an
 * inventory or infers a field from an equal number elsewhere in a template. */
export function mechanicsEntries(item) {
 return [...Object.entries(item?.values?.mechanics??{}).map(([key,param])=>({key,pointer:'/mechanics/'+key,...param})),
  ...(item?.values?.tiers??[]).flatMap((tier,index)=>Object.entries(tier.mechanics??{}).map(([key,param])=>({key,pointer:`/tiers/${index}/mechanics/${key}`,...param})))];
}
export function matchMechanicNumber(item,value,bindings) {
 const approx=(a,b)=>Math.abs(a-b)<=Number.EPSILON*Math.max(1,Math.abs(a),Math.abs(b))*16;
 const conversions={identity:v=>v,absolute:Math.abs,percent:v=>v*100,absolute_percent:v=>Math.abs(v)*100,bonus_multiplier:v=>1+v,remaining_multiplier:v=>1-v,reduction_percent:v=>Math.abs(1-v)*100};
 return mechanicsEntries(item).filter(p=>typeof p.value==='number'&&bindings.some(binding=>
  p.key===binding.key&&(!binding.pointer||binding.pointer===p.pointer)&&
  (binding.conversions??['identity']).some(name=>Object.hasOwn(conversions,name)&&approx(conversions[name](p.value),value))));
}
