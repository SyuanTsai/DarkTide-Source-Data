import {test} from 'node:test';
import assert from 'node:assert/strict';
import {createWeaponStats} from '../../pipeline/lib/weapon-stats.mjs';
import {weaponCombos} from '../../pipeline/lib/weapon-combos.mjs';

function parse(source) {
 const engine=createWeaponStats({exists:file=>file==='weapon.lua',read:()=>source}),notes=[];
 const combos=weaponCombos({actions:engine.actions('weapon.lua'),file:'weapon.lua',profiles:engine.profiles,textValue:()=>({en:null,zh:null}),onOrdinaryStart:note=>notes.push(note)});
 return {combos,notes};
}

const light=`light_attack={action_name="action_light_1"}`;
function start(name,{invalid,condition,lightTarget='action_light_1',heavyTarget=null}={}) {
 const flag=invalid===undefined?'':`, invalid_start_action_for_stat_calculation=${invalid}`;
 const guard=condition?', action_condition_func=function() return ready end':'';
 const heavy=heavyTarget?`, heavy_attack={action_name="${heavyTarget}"}`:'';
 return `${name}={kind="windup", start_input="start_attack"${flag}${guard}, allowed_chain_actions={${light},${heavy.slice(2)}}}`;
}

function groupFixture({alternatives=['action_start_special'],continued=false,guardStart=false}) {
 const starts=[start('action_melee_start_left',{condition:guardStart}),...alternatives.map(name=>start(name,{invalid:'true'}))];
 const continuation=continued?`, action_condition_func=function() return ready end, allowed_chain_actions={light_attack={action_name="action_light_2"}}`:'';
 const back=guardStart?', allowed_chain_actions={start_attack={action_name="action_melee_start_left"}}':'';
 return `local weapon_template={}
weapon_template.actions={
 ${starts.join(',\n ')},
 action_light_1={kind="sweep"${continued?', allowed_chain_actions={start_attack={action_name="action_continue"}}':''}${back}},
 ${continued?`action_continue={kind="windup"${continuation}}, action_light_2={kind="sweep"}`:''}
}
return weapon_template`;
}

function basicCandidates(rows) {
 return `local weapon_template={}
weapon_template.actions={
 ${rows.join(',\n ')},
 action_light_1={kind="sweep"}
}
return weapon_template`;
}

// Scenario: a plain melee start coexists with a special start explicitly excluded from stat calculation.
// Purpose: protect normal-start selection and its exclusion note for the special-entry group.
test('UnitT10_special-entry selects the ordinary candidate',()=>{
 const {combos,notes}=parse(groupFixture({})),combo=combos[0];
 assert.equal(combo.start,'action_melee_start_left');assert.deepEqual(combo.steps.map(step=>step.action),['action_light_1']);assert.equal(combo.unknown,null);
 assert.deepEqual(notes[0],{kind:'light',start:'action_melee_start_left',excluded:['action_start_special']});
});

// Scenario: a special start is excluded and the next action has an action condition.
// Purpose: retain the proven prefix and CONDITIONAL_CHAIN for guarded continuations.
test('UnitT15_special-entry guarded continuation preserves its prefix',()=>{
 const {combos}=parse(groupFixture({continued:true})),combo=combos[0];
 assert.equal(combo.start,'action_melee_start_left');assert.deepEqual(combo.steps.map(step=>step.action),['action_light_1']);assert.equal(combo.unknown,'CONDITIONAL_CHAIN');
});

// Scenario: a sliding start is the only alternative marked invalid for stat calculation.
// Purpose: protect ordinary-start selection when movement adds a slide entry.
test('UnitT20_slide-entry excludes the slide candidate',()=>{
 const {combos,notes}=parse(groupFixture({alternatives:['action_start_slide']}));
 assert.equal(combos[0].start,'action_melee_start_left');assert.deepEqual(notes[0].excluded,['action_start_slide']);
});

// Scenario: sprint and slide alternatives accompany the normal start.
// Purpose: require both explicit exclusion markers before following the combo.
test('UnitT25_sprint-and-slide-entry excludes both movement candidates',()=>{
 const {combos,notes}=parse(groupFixture({alternatives:['action_start_sprint','action_start_slide']}));
 assert.equal(combos[0].start,'action_melee_start_left');assert.deepEqual(notes[0].excluded,['action_start_sprint','action_start_slide']);
});

// Scenario: wield, sprint, slide, and special starts accompany the normal start.
// Purpose: protect compound movement/special exclusion while retaining all excluded action names.
test('UnitT30_compound-movement-and-special-entry excludes every marked alternative',()=>{
 const alternatives=['action_start_wield','action_start_sprint','action_start_slide','action_start_special'];
 const {combos,notes}=parse(groupFixture({alternatives}));
 assert.equal(combos[0].start,'action_melee_start_left');assert.deepEqual(notes[0].excluded,alternatives);
});

// Scenario: a special entry coexists with a normal start whose condition gates a later return.
// Purpose: distinguish ordinary-entry selection from bypassing later runtime conditions.
test('UnitT35_special-entry-with-recency-gate keeps the return condition',()=>{
 const {combos,notes}=parse(groupFixture({guardStart:true})),combo=combos[0];
 assert.equal(combo.start,'action_melee_start_left');assert.deepEqual(combo.steps.map(step=>step.action),['action_light_1']);assert.equal(combo.unknown,'CONDITIONAL_CHAIN');
 assert.deepEqual(notes[0].excluded,['action_start_special']);
});

// Scenario: excluding one alternative leaves two statically valid ordinary starts.
// Purpose: fail closed instead of using source order when the remainder is not unique.
test('UnitT40_multiple-ordinary-candidates remain ambiguous',()=>{
 const {combos,notes}=parse(basicCandidates([
  start('action_melee_start_left'),start('action_melee_start_right'),start('action_start_special',{invalid:'true'})
 ]));
 assert.equal(combos[0].unknown,'CHAIN_START_AMBIGUOUS');assert.deepEqual(combos[0].steps,[]);assert.deepEqual(notes,[]);
});

// Scenario: one candidate has a runtime-computed exclusion marker.
// Purpose: keep ambiguity when the marker's meaning cannot be statically proven.
test('UnitT45_dynamic-exclusion-flag remains ambiguous',()=>{
 const {combos}=parse(basicCandidates([
  start('action_melee_start_left',{invalid:'runtime_flag'}),start('action_start_special',{invalid:'true'})
 ]));
 assert.equal(combos[0].unknown,'CHAIN_START_AMBIGUOUS');assert.deepEqual(combos[0].steps,[]);
});

// Scenario: a computed key may hide another action in the candidate table.
// Purpose: require a closed action table before treating one surviving candidate as unique.
test('UnitT50_unknown-action-key remains ambiguous',()=>{
 const {combos}=parse(`local weapon_template={}
weapon_template.actions={
 ${start('action_melee_start_left')},
 ${start('action_start_special',{invalid:'true'})},
 [runtime_action]={kind="windup",start_input="start_attack",allowed_chain_actions={light_attack={action_name="action_light_1"}}},
 action_light_1={kind="sweep"}
}
return weapon_template`);
 assert.equal(combos[0].unknown,'CHAIN_START_AMBIGUOUS');assert.deepEqual(combos[0].steps,[]);
});

// Scenario: an exclusion marker is the number 0 rather than an allowed literal.
// Purpose: reject every marker value except missing, nil, false, and true.
test('UnitT55_nonboolean-exclusion-flag remains ambiguous',()=>{
 const {combos}=parse(basicCandidates([
  start('action_melee_start_left',{invalid:'0'}),start('action_start_special',{invalid:'true'})
 ]));
 assert.equal(combos[0].unknown,'CHAIN_START_AMBIGUOUS');assert.deepEqual(combos[0].steps,[]);
});

// Scenario: every literal start candidate is explicitly excluded.
// Purpose: preserve ambiguity when no ordinary candidate remains.
test('UnitT60_zero-ordinary-candidates remain ambiguous',()=>{
 const {combos}=parse(basicCandidates([
  start('action_melee_start_left',{invalid:'true'}),start('action_start_special',{invalid:'true'})
 ]));
 assert.equal(combos[0].unknown,'CHAIN_START_AMBIGUOUS');assert.deepEqual(combos[0].steps,[]);
});

// Scenario: the literal candidates are combined with a table containing a computed action key.
// Purpose: reject a candidate map whose key set is not statically closed even when known entries remain.
test('UnitT65_dynamic-action-table remains ambiguous',()=>{
 const {combos}=parse(`local weapon_template={}
weapon_template.actions={
 ${start('action_melee_start_left')},
 ${start('action_start_special',{invalid:'true'})},
 action_light_1={kind="sweep"}
}
local dynamic_actions={[runtime_action]={kind="windup",start_input="start_attack"}}
table.merge(weapon_template.actions,dynamic_actions)
return weapon_template`);
 assert.equal(combos[0].unknown,'CHAIN_START_AMBIGUOUS');assert.deepEqual(combos[0].steps,[]);
});

// Scenario: the chainaxe normal start has special and normal branches for light and heavy attacks.
// Purpose: match the four online light attacks and retain the two-action heavy prefix before its array branch.
test('UnitT70_chainaxe-p1-m1 resolves four light attacks and two heavy attacks',()=>{
 const source=`local weapon_template={}
weapon_template.actions={
 action_melee_start_left={kind="windup",start_input="start_attack",allowed_chain_actions={light_attack={action_name="action_left_down_light"},heavy_attack={action_name="action_left_heavy"}}},
 action_melee_start_left_special={kind="windup",start_input="start_attack",invalid_start_action_for_stat_calculation=true,allowed_chain_actions={light_attack={action_name="action_left_down_light"},heavy_attack={action_name="action_left_heavy"}}},
 action_left_down_light={kind="sweep",allowed_chain_actions={start_attack={action_name="action_melee_start_right"}}},
 action_melee_start_right={kind="windup",allowed_chain_actions={light_attack={action_name="action_right_diagonal_light"},heavy_attack={action_name="action_right_heavy"}}},
 action_right_diagonal_light={kind="sweep",allowed_chain_actions={start_attack={action_name="action_melee_start_left_2"}}},
 action_melee_start_left_2={kind="windup",allowed_chain_actions={light_attack={action_name="action_left_light"}}},
 action_left_light={kind="sweep",allowed_chain_actions={start_attack={action_name="action_melee_start_right_2"}}},
 action_melee_start_right_2={kind="windup",allowed_chain_actions={light_attack={action_name="action_right_down_light"}}},
 action_right_down_light={kind="sweep"},
 action_left_heavy={kind="sweep",allowed_chain_actions={start_attack={action_name="action_melee_start_right"}}},
 action_right_heavy={kind="sweep",allowed_chain_actions={start_attack={{action_name="action_melee_start_left_special"},{action_name="action_melee_start_left"}}}}
}
return weapon_template`;
 const {combos}=parse(source),lightCombo=combos.find(combo=>combo.kind==='light'),heavyCombo=combos.find(combo=>combo.kind==='heavy');
 assert.deepEqual(lightCombo.steps.map(step=>step.action),['action_left_down_light','action_right_diagonal_light','action_left_light','action_right_down_light']);
 assert.equal(lightCombo.unknown,null);assert.deepEqual(heavyCombo.steps.map(step=>step.action),['action_left_heavy','action_right_heavy']);assert.equal(heavyCombo.unknown,'DYNAMIC_VALUE');
});

// Scenario: one literal start candidate contains a dynamic marker but has no competing start.
// Purpose: preserve the existing single-candidate path outside the new ambiguity rule.
test('UnitT75_single-candidate path stays unchanged',()=>{
 const {combos,notes}=parse(basicCandidates([start('action_melee_start_left',{invalid:'runtime_flag'})]));
 assert.equal(combos[0].start,'action_melee_start_left');assert.deepEqual(combos[0].steps.map(step=>step.action),['action_light_1']);assert.equal(combos[0].unknown,null);assert.deepEqual(notes,[]);
});

// Scenario: the only ordinary candidate uses each supported explicit false or nil marker form.
// Purpose: accept the complete documented set of non-excluding marker values.
test('UnitT80_false-and-nil-exclusion-flags remain eligible',()=>{
 for(const marker of ['false','nil']) {
  const {combos,notes}=parse(basicCandidates([
   start('action_melee_start_left',{invalid:marker}),start('action_start_special',{invalid:'true'})
  ]));
  assert.equal(combos[0].start,'action_melee_start_left');assert.equal(combos[0].unknown,null);assert.deepEqual(notes[0].excluded,['action_start_special']);
 }
});
