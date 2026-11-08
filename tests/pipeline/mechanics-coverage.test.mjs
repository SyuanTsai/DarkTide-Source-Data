import {test} from 'node:test';
import assert from 'node:assert/strict';
import {matchMechanicNumber} from '../../pipeline/lib/mechanics-coverage.mjs';

// Scenario: HUD priority is 1 but the removal rule has not been extracted.
// Purpose: equal interface numbers cannot cover a lost-stack count.
test('UnitT10_coverage rejects HUD priority when stack removal is missing',()=>{
 const item={values:{mechanics:{'buff.shared.hud_priority':{value:1}}}};
 assert.deepEqual(matchMechanicNumber(item,1,[{key:'buff.shared.removed_stacks',conversions:['identity']}]),[]);
});
// Scenario: the duration is absent; another field and a different tier equal it.
// Purpose: exact field and tier identity are mandatory for numeric evidence.
test('UnitT20_coverage binds exact fields tiers and explicit conversions',()=>{
 const item={values:{mechanics:{'buff.shared.hud_priority':{value:9},'buff.shared.stat_buffs.damage':{value:0.25}},tiers:[{mechanics:{'buff.shared.override.duration':{value:9}}},{mechanics:{'buff.shared.override.duration':{value:5}}}]}};
 assert.deepEqual(matchMechanicNumber(item,9,[{key:'buff.shared.duration',conversions:['identity']}]),[]);
 assert.deepEqual(matchMechanicNumber(item,9,[{key:'buff.shared.override.duration',pointer:'/tiers/1/mechanics/buff.shared.override.duration',conversions:['identity']}]),[]);
 const binding={key:'buff.shared.stat_buffs.damage',conversions:['percent']};
 assert.equal(matchMechanicNumber(item,25,[binding]).length,1);
 assert.equal(matchMechanicNumber(item,1.25,[binding]).length,0);
 assert.equal(matchMechanicNumber(item,1.25,[{...binding,conversions:['bonus_multiplier']}]).length,1);
});
