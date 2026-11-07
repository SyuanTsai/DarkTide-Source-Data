import {test} from 'node:test';
import assert from 'node:assert/strict';
import {createHash} from 'node:crypto';
import {existsSync} from 'node:fs';
import {createSourceReader} from '../../pipeline/lib/source-reader.mjs';
import {resolveSourceRepo} from '../../pipeline/lib/inputs.mjs';
import {createBrittlenessSourceAudit,BRITTLENESS_SOURCE_COMMIT} from '../../pipeline/lib/skill-brittleness.mjs';
import {skillStructure} from '../../pipeline/lib/skill-structure.mjs';
import {buildSkills} from '../../pipeline/extract-skills.mjs';
import {checkText} from '../../pipeline/lib/verify/text.mjs';

const repo=resolveSourceRepo(),options={skip:process.env.PIPELINE_REAL_SMOKE !== '1' ? '需明確啟用 PIPELINE_REAL_SMOKE=1' : !existsSync(repo)&&'需要本機固定 Source-Code'};
const TALENTS='scripts/settings/ability/archetype_talents/talents/cryptic_talents.lua';
const TREE='scripts/ui/views/talent_builder_view/layouts/cryptic_tree.lua';
const EXTRA='scripts/review23_new_dependency.lua';
const KEYS=['cryptic_arc_grenades_brittleness','cryptic_electrocution_applies_brittleness'];
let base;
const source=()=>base??=createSourceReader({repo,commit:BRITTLENESS_SOURCE_COMMIT});
function overlay(files) {
  const original=source();
  return {...original,exists:p=>files.has(p)||original.exists(p),
    list:(prefix='')=>[...new Set([...original.list(prefix),...[...files.keys()].filter(p=>p.startsWith(prefix))])].sort(),
    read:p=>files.has(p)?files.get(p):original.read(p),
    readBytes:p=>files.has(p)?Buffer.from('\uFEFF'+files.get(p)):original.readBytes(p)};
}
function assertRejected(reader,expectedFiles) {
  const data=buildSkills({reader,text:{lookup:()=>({en:'Skill',zh:'技能'})},envelope:{gameVersion:'1.13.4',textBatch:'26101089'}});
  assert.equal(data.items.length,618);
  for(const key of KEYS) {
    const item=data.items.find(i=>i.key===key);
    assert.equal(item.values.params.brittleness_per_stack,undefined,key);
    const problem=data.problems.find(p=>p.id===item.id&&p.code==='BRITTLENESS_SOURCE_CHANGED');
    assert.ok(problem,key);
    for(const file of expectedFiles)assert.ok(problem.files.includes(file),file);
    const text='施加2.5%脆弱。',candidate={...item,official:{en:text,zh:text},explanation:{effect:text},errata:[]};
    assert.ok(checkText(candidate,candidate,[],[],new Map()).failures.some(p=>p.code==='T_NUMBER'));
  }
}

// Scenario: a tree mutates both real talent tables without changing their file/start/line/raw.
// Purpose: reproduce R23-01 and require the main extractor's effective-definition sources to be pinned.
test('InterT10_review23_effective talent mutations refuse both supplements',options,()=>{
  const snippet=`local ReviewTalents=require("${TALENTS.slice(0,-4)}")
ReviewTalents.talents.cryptic_arc_grenades_brittleness.special_rule={identifier={"different_rule"},special_rule_name={"different_rule"}}
ReviewTalents.talents.cryptic_electrocution_applies_brittleness.passive={identifier="different_buff",buff_template_name="different_buff"}
ReviewTalents.talents.cryptic_arc_grenades_brittleness.display_name="loc_talent_cryptic_arc_grenades_brittleness"
ReviewTalents.talents.cryptic_arc_grenades_brittleness.description="loc_talent_cryptic_arc_grenades_brittleness_desc"
ReviewTalents.talents.cryptic_arc_grenades_brittleness.format_values={talent_name={format_type="loc_string",value="loc_talent_cryptic_arc_grenades"},number={format_type="number",value=2},stacks={format_type="number",value=8}}
ReviewTalents.talents.cryptic_electrocution_applies_brittleness.display_name="loc_talent_cryptic_electrocution_applies_brittleness"
ReviewTalents.talents.cryptic_electrocution_applies_brittleness.description="loc_talent_cryptic_electrocution_applies_brittleness_desc"
ReviewTalents.talents.cryptic_electrocution_applies_brittleness.format_values={stacks={format_type="number",value=3}}
`;
  const reader=overlay(new Map([[TREE,snippet+source().read(TREE)]]));
  const before=skillStructure(source()),after=skillStructure(reader);
  for(const key of KEYS) {
    const a=before.r.resolve(before.definitions.get('cryptic').get(key)),b=after.r.resolve(after.definitions.get('cryptic').get(key));
    for(const field of ['file','start','line','raw'])assert.equal(b[field],a[field],field);
  }
  const arc=after.definitions.get('cryptic').get(KEYS[0]),passive=after.definitions.get('cryptic').get(KEYS[1]);
  assert.equal(after.r.scalar(after.r.entries(after.r.get(after.r.get(arc,'special_rule'),'identifier'))[0][1]),'different_rule');
  assert.equal(after.r.scalar(after.r.get(after.r.get(passive,'passive'),'buff_template_name')),'different_buff');
  assertRejected(reader,[TREE]);
});

// Scenario: a tree imports a previously unlisted module which overwrites ScriptUnit.has_extension.
// Purpose: include the main resolver's entire require closure in the refusal report.
test('InterT20_review23_tree require of an unlisted callback writer refuses both supplements',options,()=>{
  const reader=overlay(new Map([[TREE,`local ReviewDependency=require("${EXTRA.slice(0,-4)}")\n`+source().read(TREE)],
    [EXTRA,'ScriptUnit.has_extension=function() return nil end\nreturn {}']]));
  assertRejected(reader,[TREE,EXTRA]);
});

// Scenario: preflight finds matching bytes and listings, but extraction never reads one of each.
// Purpose: distinguish the actual read set from preflight and reject fewer reads, including readBytes-only inputs.
test('UnitT30_complete audit rejects unread pinned files and directory scans',()=>{
  const files=new Map([['a.lua','return {}'],['b.lua','return {}']]);
  const pins=Object.fromEntries([...files].map(([p,s])=>[p,createHash('sha256').update(s).digest('hex')]));
  const audit=createBrittlenessSourceAudit({exists:p=>files.has(p),read:p=>files.get(p),readBytes:p=>Buffer.from(files.get(p)),list:()=>[...files.keys()]},pins,{'dir/':['a.lua','b.lua']});
  audit.reader.readBytes('a.lua');
  assert.deepEqual(audit.changedFiles(),[]);
  audit.finish();
  assert.deepEqual(audit.changedFiles(),['b.lua']);
  assert.deepEqual(audit.changedDirectories(),['dir/']);
  assert.deepEqual(audit.filesRead(),['a.lua']);
});
