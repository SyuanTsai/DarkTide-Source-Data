import { test } from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync, readdirSync } from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { fixture, put, commit, cli } from './helpers.mjs';
import { expression, resolver } from '../../pipeline/lib/blessing-values.mjs';
import { localizationCandidates, verifiedTextKeys, sharedTextCandidates } from '../../pipeline/lib/blessing-text.mjs';
import { locHash } from '../../pipeline/lib/official-text.mjs';

const fixtureRoot=fileURLToPath(new URL('./fixtures/blessings/',import.meta.url));
function memory(files) { return {read:f=>files.get(f),exists:f=>files.has(f)}; }
function installFixture(source,dir=path.join(fixtureRoot,'source'),prefix='') {
  for(const entry of readdirSync(dir,{withFileTypes:true})) {
    const name=path.posix.join(prefix,entry.name), file=path.join(dir,entry.name);
    if(entry.isDirectory()) installFixture(source,file,name); else put(source,name,readFileSync(file));
  }
}
function prepared(t) {
  const f=fixture(t); installFixture(f.source);
  const args=[...f.sourceArgs]; args[3]=commit(f.source);
  const result=cli('extract-text.mjs',f.textArgs); assert.equal(result.status,0,result.stderr);
  const file=path.join(f.work,'extract/text.json'), text=JSON.parse(readFileSync(file));
  text.resources.items[locHash('loc_trait_bespoke_test')]={en:'Test Blessing',zh:'測試祝福'};
  text.resources.items[locHash('loc_trait_bespoke_test_desc')]={en:'{damage:%s} damage. Stacks {stacks:%s} times.',zh:'{damage:%s} 傷害。堆疊 {stacks:%s} 次。'};
  put(f.work,'extract/text.json',JSON.stringify(text));
  return {...f,args};
}
function run(f) {
  const r=cli('extract-blessings.mjs',f.args); assert.equal(r.status,0,r.stderr+r.stdout);
  const bytes=readFileSync(path.join(f.work,'extract/blessings.json'));
  return {bytes,data:JSON.parse(bytes)};
}

// Scenario: registry 跨模組 clone、合併與欄位覆寫。Purpose: 保護順序、常數與逐值來源。
test('UnitT05_buff template 跨模組合併與欄位來源',()=>{
  const files=new Map(['buff-base','buff-templates'].map(n=>[`${n}.lua`,readFileSync(path.join(fixtureRoot,`${n}.lua`),'utf8')]));
  const registry='scripts/settings/buff/buff_templates.lua';
  files.set(registry,'local templates = {}\n'+readFileSync(new URL('./fixtures/review6/buff-loader.lua',import.meta.url),'utf8')+'_create_entry("buff-base")\n_create_entry("buff-templates")\nreturn templates');
  const r=resolver(memory(files));
  assert.deepEqual(r.buffTemplate('child').definition,{path:'buff-templates.lua',line:3});
  for(const [key,value,file,line] of [['max_stacks',5,'buff-base.lua',1],['duration',4,'buff-templates.lua',4],['extra',7,'buff-templates.lua',6]]) {
    const result=r.walk(r.buffTemplate('child'),[key]);
    assert.equal(result?.node?.value,value); assert.equal(result.file,file); assert.equal(result.node.startLine,line);
  }
  // Scenario: merging into an imported destination writes an external table.
  // Purpose: revoke the imported values under the review7 shared-table rule.
  files.set(registry,'local templates = require("buff-templates")\ntable.merge(templates, require("buff-base"))\nreturn templates');
  const reversed=resolver(memory(files));
  assert.equal(reversed.walk(reversed.buffTemplate('child'),['duration']).node.reason,'DYNAMIC_VALUE');
});

// Scenario: computed templates/conditionals/cycles and absent paths. Purpose: never manufacture static values.
test('UnitT10_未知呼叫汙染模組，獨立 clone 不改 base',()=>{
  const files=new Map([
    ['scripts/settings/buff/buff_templates.lua','local templates = require("module")\nreturn templates'],
    ['module.lua',`local templates = {}
local nested = { duration = 3 }
local base = { max_stacks = 2, nested = nested }
templates.base = base
templates.copy = table.clone(base)
templates.copy.nested.duration = 9
templates.unknown_merge = table.clone(base)
table.merge(templates.unknown_merge, factory())
templates.unknown_missing = table.clone(base)
table.add_missing(templates.unknown_missing, factory())
templates.generated = factory()
templates.conditional = { max_stacks = enabled and 3 or 5 }
local LIMIT = 4
if enabled then
  LIMIT = 6
end
templates.conditional_constant = { max_stacks = LIMIT }
templates.runtime = { max_stacks = 7 }
if enabled then
  templates.runtime.max_stacks = 8
end
local Alias = require("cycle")
templates.cyclic = Alias
return templates`],
    ['cycle.lua','local Alias = require("module")\nreturn Alias'],
  ]);
  const r=resolver(memory(files)), read=(name,p)=>r.walk(r.buffTemplate(name),p)?.node;
  const staticFiles=new Map(files);staticFiles.set('module.lua','local base={nested={duration=3}}\nlocal copy=table.clone_instance(base)\ncopy.nested.duration=9\nreturn {base=base,copy=copy}');
  const isolated=resolver(memory(staticFiles));
  assert.equal(isolated.walk(isolated.buffTemplate('base'),['nested','duration']).node.value,3);
  assert.equal(isolated.walk(isolated.buffTemplate('copy'),['nested','duration']).node.value,9);
  for(const name of ['base','copy','unknown_missing'])assert.equal(read(name,['max_stacks']).reason,'DYNAMIC_VALUE');
  assert.ok(read('unknown_merge',['max_stacks']).reason);
  for(const name of ['generated','conditional','conditional_constant','runtime','cyclic'])assert.ok(read(name,['max_stacks']).reason);
  assert.equal(r.buffTemplate('does_not_exist'),null);
});

// Scenario: allowed math and rejected executable expressions. Purpose: enforce the manipulation whitelist.
test('UnitT20_安全運算只接受單一受限運算式',()=>{
  for(const [raw,input,expected] of [
    ['math.floor(value * 100)',0.126,12],['math.ceil(value)',1.1,2],
    ['math.round(value)',-1.5,-2],['math.abs(-value) + (4 / 2) * 3 - 1',-2,7],
    ['os.execute(value)',1,null],['value; return 1',1,null],['1 / (value - value)',1,null],
    ['value ^ 2',2,null],['math.round_with_precision(value, 1)',1.2,null],
  ]) assert.equal(expression({raw:`function (value) return ${raw} end`},input),expected,raw);
  assert.equal(expression({raw:'function (value) local x = value return x end'},1),null);
});

// Scenario: committed math helpers bind angle conversions to Lua builtins. Purpose: collect literal angles while refusing replacement helpers or shadowed math.
test('UnitT25_有來源的角度轉換補收靜態值',()=>{
  const file='trait.lua',mathFile='scripts/foundation/utilities/math.lua';
  const files=new Map([[mathFile,'math.degrees_to_radians = math.rad\nmath.radians_to_degrees = math.deg'],[file,'return {angle=math.degrees_to_radians(30)}']]);
  const reader=memory(files),r=resolver(reader),n=r.deref(r.parsed(file).returned.entries[0].value,file);
  assert.equal(n.node.type,'number');assert.equal(expression({raw:'function(value) return math.floor(math.radians_to_degrees(value)) end'},n.node.value,{angleConversions:r.mathConversions().valid}),29);
  files.set(mathFile,'math.degrees_to_radians = custom\nmath.radians_to_degrees = math.deg');
  assert.equal(resolver(reader).deref(r.parsed(file).returned.entries[0].value,file).node.type,'call');
  files.set(mathFile,'math.degrees_to_radians = math.rad\nmath.radians_to_degrees = math.deg');files.set(file,'local math={} return {angle=math.degrees_to_radians(30)}');
  const shadow=resolver(reader);assert.notEqual(shadow.deref(shadow.parsed(file).returned.entries[0].value,file).node.type,'number');
});

// Scenario: suffix variants, alternate family prefixes and common stems. Purpose: only index-proven localization keys may be used.
test('UnitT30_名稱候選 hash 驗證與跨武器共用',()=>{
  const defs=[
    {traitKey:'weapon_trait_bespoke_gun_p1_test_child_2',file:'weapon_traits_bespoke_gun_p1.lua'},
    {traitKey:'weapon_trait_bespoke_alt_test_parent',file:'weapon_traits_bespoke_alt.lua'},
  ];
  assert.deepEqual(localizationCandidates(defs[0].traitKey,defs[0].file),['loc_trait_bespoke_test_child_2','loc_trait_bespoke_test_child','loc_trait_bespoke_test']);
  const shared=sharedTextCandidates(defs), text={lookup:k=>k==='loc_trait_bespoke_test_child'?{en:'Test'}:null};
  assert.equal(verifiedTextKeys(text,defs[1].traitKey,defs[1].file,shared.get(defs[1].traitKey)).name,'loc_trait_bespoke_test_child');
  assert.deepEqual(verifiedTextKeys({lookup:()=>null},defs[0].traitKey,defs[0].file),{name:null,description:null});
});

// Scenario: parser missing. Purpose: write a structural fallback and exit successfully.
test('InterT10_結構不符時寫入降級結果並 exit 0',t=>{
  const f=fixture(t); const r=cli('extract-text.mjs',f.textArgs); assert.equal(r.status,0,r.stderr);
  const result=cli('extract-blessings.mjs',f.sourceArgs); assert.equal(result.status,0,result.stderr);
  assert.equal(JSON.parse(readFileSync(path.join(f.work,'extract/blessings.json'))).status,'structure-mismatch');
});

// Scenario: missing registry/functions. Purpose: reject incompatible structures instead of emitting partial blessings.
for(const [n,file,raw] of [
  ['20','scripts/settings/equipment/weapon_traits/weapon_trait_templates.lua','local templates = {}\nreturn templates'],
  ['30','scripts/utilities/trait_value_parser.lua','local FIND_VALUE_FUNCTIONS = { trait_override = function () end }'],
  ['40','scripts/utilities/trait_value_parser.lua','local renamed = {}'],
]) test(`InterT${n}_結構缺少必要 registry 或取值函式`,t=>{
  const f=prepared(t); put(f.source,file,raw); f.args[3]=commit(f.source);
  const {data}=run(f); assert.equal(data.status,'structure-mismatch'); assert.deepEqual(data.items,[]);
});

// Scenario: two weapon templates, two trait modules, four tiers and official text. Purpose: verify the complete public extract contract and deterministic bytes.
test('InterT50_完整取數語意、來源、官方文字與固定輸入重複一致',t=>{
  const f=prepared(t), {data,bytes}=run(f);
  assert.equal(data.status,'ok'); assert.equal(data.items.length,3);
  assert.deepEqual(data.excluded,[{key:'weapon_trait_bespoke_unused_p1_test',reason:'no-player-weapon'}]);
  const item=data.items.find(x=>x.key==='weapon_trait_bespoke_gun_p1_test'), p=item.values.params;
  assert.deepEqual(item.values.weapons,['darktide:weapon:autogun_p1_m1','darktide:weapon:autogun_p1_m2']);
  assert.deepEqual(item.values.tiers.map(t=>t.params.damage),[10,20,30,40].map(value=>({value,unit:'percent'})));
  assert.deepEqual(item.values.tiers.map(t=>t.params.rarity.value),[10,20,30,40]);
  assert.equal(p.stacks.value,5); assert.deepEqual(p.enum_fixed,{value:15,unit:'percent'});
  assert.deepEqual(p.manipulated,{value:12,unit:'percent'}); assert.equal(p.fixed.value,2);
  assert.equal(p.label.value,'loc_label'); assert.equal(p.string_value.value,'raw string'); assert.equal(p.upper.value,1);
  assert.ok(!Object.hasOwn(p,'format_type')); assert.ok(!Object.hasOwn(p,'bad-name'));
  assert.equal(p.missing.unknown,'DYNAMIC_VALUE'); assert.equal(p.dynamic.unknown,'DYNAMIC_VALUE');
  assert.ok(data.problems.some(p=>p.message.startsWith('[PATH_MISSING]') && p.message.includes('missing')));
  assert.ok(data.problems.some(p=>p.message.startsWith('[DYNAMIC_MANIPULATION]')));
  assert.ok(data.problems.some(p=>p.code==='PARAM_NAME'));
  assert.ok(data.problems.some(p=>p.code==='NO_TIERS'));
  assert.ok(item.source.files.some(f=>f.path==='scripts/settings/buff/child_buff_templates.lua' && f.line===3));
  assert.ok(item.source.files.some(f=>f.path==='scripts/settings/buff/child_buff_templates.lua' && f.line===5));
  assert.equal(item.source.commit,f.args[3]);
  assert.deepEqual(item.name,{en:'Test Blessing',zh:'測試祝福',origin:'official'});
  assert.equal(item.official.en,'{damage:%s} damage. Stacks {stacks:%s} times.');
  assert.equal(item.official.zh,'{damage:%s} 傷害。堆疊 {stacks:%s} 次。');
  assert.deepEqual(item.source.text.keys,{name:'loc_trait_bespoke_test',description:'loc_trait_bespoke_test_desc'});
  const nameless=data.items.find(x=>x.key.endsWith('_nameless'));
  assert.deepEqual(nameless.name,{en:nameless.key,zh:null,origin:'internal'});
  assert.deepEqual(nameless.source.text.keys,{}); assert.deepEqual(nameless.official,{en:null,zh:null});
  assert.deepEqual(nameless.values.params,{}); assert.deepEqual(nameless.values.tiers,[{tier:1,params:{}}]);
  assert.deepEqual(run(f).bytes,bytes);
});

// Scenario: extract runs with percent, localized and manipulated parameters. Purpose: persist rules only in the work envelope, never inside final values.
test('InterT55_祝福格式資訊只保留於 extract 工作資料',t=>{
  const f=prepared(t),{data}=run(f),item=data.items.find(x=>x.key==='weapon_trait_bespoke_gun_p1_test');
  const formats=data.effectFormats[item.id].params;
  assert.equal(formats.damage.type,'percentage');assert.equal(formats.label.type,'loc_string');
  assert.match(formats.manipulated.manipulation,/math.floor/);
  assert.equal(item.effectFormats,undefined);assert.equal(item.values.format,undefined);
  assert.deepEqual(Object.keys(item.values.tiers[0].params.damage).sort(),['unit','value']);
});

// Scenario: Chinese-only names and conflicting resources. Purpose: preserve nameFromText's shared fallback policy.
test('InterT60_只有中文與文字衝突仍沿用共用名稱政策',t=>{
  const f=prepared(t), file=path.join(f.work,'extract/text.json'), text=JSON.parse(readFileSync(file));
  text.resources.items[locHash('loc_trait_bespoke_test')].en=null;
  text.resources.items[locHash('loc_trait_bespoke_nameless')]={en:'First',zh:'甲'};
  text.resources.ui[locHash('loc_trait_bespoke_nameless')]={en:'Second',zh:'乙'};
  put(f.work,'extract/text.json',JSON.stringify(text));
  const {data}=run(f);
  assert.ok(data.problems.some(p=>p.code==='MISSING_EN_TEXT'));
  assert.ok(data.problems.some(p=>p.code==='TEXT_CONFLICT'));
  assert.ok(data.items.every(i=>i.name.origin==='internal'));
});
