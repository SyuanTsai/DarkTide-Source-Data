import { test } from 'node:test';
import assert from 'node:assert/strict';
import { expandOfficialEffect, effectTaskFor } from '../../pipeline/lib/official-effect.mjs';
import { composeCandidate } from '../../pipeline/lib/candidate.mjs';
import { inputHashFor } from '../../pipeline/lib/diff-core.mjs';
import { loadSchemas } from '../../pipeline/lib/json-schema.mjs';
import { readFileSync, readdirSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { join } from 'node:path';
import { buildSkills } from '../../pipeline/extract-skills.mjs';
import { createSkillResolver, manipulate } from '../../pipeline/lib/skill-lua.mjs';
import { checkText } from '../../pipeline/lib/verify/text.mjs';

const format = (type='number', extra={}) => ({ type, numDecimals:null, prefix:'', suffix:'', valueSpace:'display', manipulation:null, ...extra });
const item = (zh, params={}) => ({ id:'darktide:skill:test', official:{zh,en:'English'}, values:{params}, source:{commit:'a'.repeat(40),text:{batch:'1'}} });
const meta = params => ({ params });
const expand = (i, formats, text={batch:'1',lookup:()=>null}) => expandOfficialEffect(i,text,formats);

// Scenario: values already contain transformed percentages. Purpose: apply only the captured UI display rules.
test('UnitT10_display percentages preserve precision and affixes without multiplying again', () => {
  const i=item('提高{power:%s}，持續{duration:%s}。',{power:{value:12.5,unit:'percent'},duration:{value:2}});
  assert.deepEqual(expand(i,meta({power:format('percentage',{prefix:'+',manipulation:'function(value) return value * 100 end'}),duration:format('number',{numDecimals:1,suffix:'秒'})})),
    {status:'complete',text:'提高+12.5%，持續2.0秒。',missing:[]});
});

// Scenario: the UI uses automatic decimals, %d truncation, and C printf fixed rounding. Purpose: preserve exact formatting at decimal boundaries and halfway ties.
test('UnitT15_precision follows UI automatic decimals and ties to even', () => {
  for(const [value,numDecimals,expected] of [[0.1,null,'0'],[0.25,null,'0.25'],[2.25,1,'2.2'],[2.75,1,'2.8'],[-2.25,1,'-2.2'],[2.675,2,'2.67'],[2.9,0,'2']])
    assert.equal(expand(item('{n:%s}',{n:{value}}),meta({n:format('number',{numDecimals})})).text,expected);
});

// Scenario: a parameter is a localization key. Purpose: resolve only this batch and strip recognized color markup.
test('UnitT20_loc strings use the current official Chinese index and retain literal text', () => {
  const i=item('獲得{keyword:%s}\n原文。',{keyword:{value:'loc_power'}}),m=meta({keyword:format('loc_string')});
  assert.equal(expand(i,m,{batch:'1',lookup:k=>k==='loc_power'?{zh:'{#color(255,0,0)}強化{#reset()}'}:null}).text,'獲得強化\n原文。');
  assert.equal(expand(i,m,{batch:'wrong',lookup:()=>({zh:'強化'})}).status,'incomplete');
  assert.equal(expand(i,m).status,'incomplete');
});

// Scenario: localized content contains a parameter but the game passes no format table into loc_string. Purpose: reject guessed recursive substitutions and incomplete markup.
test('UnitT25_nested localization tokens and broken markers remain incomplete', () => {
  const i=item('{key:%s}',{key:{value:'loc_key'},power:{value:10}}),m=meta({key:format('loc_string'),power:format()});
  assert.equal(expand(i,m,{batch:'1',lookup:()=>({zh:'強化{power:%s}'})}).status,'incomplete');
  assert.equal(expand(item('{power:%s'),meta({})).status,'incomplete');
  assert.equal(expand(item(''),meta({})).status,'incomplete');
});

// Scenario: all four tiers differ, repeat, or miss a value. Purpose: preserve tier positions rather than taking tier four or mixing parameters.
test('UnitT30_blessing tiers stay ordered and collapse only when every tier agrees', () => {
  const i={...item('{power:%s}／{duration:%s}'),id:'darktide:blessing:test',values:{params:{},tiers:[10,12.5,15,17.5].map((v,n)=>({tier:n+1,params:{power:{value:v},duration:{value:3}}}))}};
  const m=meta({power:format('percentage'),duration:format()});
  assert.equal(expand(i,m).text,'10%／12.5%／15%／17.5%／3');
  i.values.tiers[2].params.power.value=12.5;
  assert.equal(expand(i,m).text,'10%／12.5%／12.5%／17.5%／3');
  delete i.values.tiers[1].params.power;
  assert.equal(expand(i,m).status,'incomplete');
});

// Scenario: unavailable values or rules and unsupported markup. Purpose: fail closed and preserve the diagnostic token.
test('UnitT40_unknown values formats and residual markers are incomplete', () => {
  for(const [i,m] of [[item('{x:%s}',{x:{value:null,unknown:'DYNAMIC_VALUE'}}),meta({x:format()})],
    [item('{x:%s}',{x:{value:1}}),undefined],[item('{x:%s}',{x:{value:1}}),meta({x:format('unrecognized')})],
    [item('{#unknown()}文字'),meta({})],[item('{x:%q}',{x:{value:1}}),meta({x:format()})]]) {
    const result=expand(i,m);assert.equal(result.status,'incomplete');assert.ok(result.missing.length);
  }
  assert.deepEqual(expand(item(null)),{status:'missing-official',text:null,missing:[]});
});

// Scenario: separate description entries reuse the same token. Purpose: apply each entry's own index, including newlines inside a localized entry.
test('UnitT50_description indexes resolve without substituting across sections', () => {
  const i=item('{x:%s}\n後段\n{x:%s}',{x_1:{value:2},x_2:{value:8}});
  const m={params:{x_1:format(),x_2:format()},descriptions:[{key:'first',index:1},{key:'second',index:2}],perIndex:[1,2]};
  assert.equal(expand(i,m,{batch:'1',lookup:k=>({zh:k==='first'?'{x:%s}\n後段':'{x:%s}'})}).text,'2\n後段\n8');
});

// Scenario: both origin policies and other categories compose. Purpose: prevent AI effect changes or origin injection into unsupported data.
test('UnitT60_candidate locks complete effects and labels translations only in schema 1.1.0 skills and blessings', () => {
  const i={...item('傷害{power:%s}',{power:{value:15}}),key:'test'},formats=meta({power:format('percentage')});
  const inputHash='0'.repeat(64),run={gameVersion:'1.13.4',sourceCommit:'a'.repeat(40),textBatch:'1',items:{[i.id]:{category:'skills',change:'added',inputHash}}};
  const output={schemaVersion:'1.0.0',id:i.id,inputHash,explanation:{effect:'AI改寫',conditions:'',calculation:'',notes:'',extra:''},errata:[]};
  const build=(zh,category='skills',schemaVersion='1.1.0')=>{
    const current={...i,official:{...i.official,zh}};
    const task=schemaVersion==='1.1.0' && ['skills','blessings'].includes(category)?effectTaskFor(current,undefined,formats):undefined;
    const hash=inputHashFor(category,'added',current,undefined,task);
    return composeCandidate({category,run:{...run,items:{[i.id]:{...run.items[i.id],category,inputHash:hash}}},extract:{status:'ok',schemaVersion,items:[current],effectFormats:{[i.id]:formats}},outputs:{[i.id]:{...output,inputHash:hash}}}).items[0];
  };
  assert.equal(build(i.official.zh).explanation.effect,'傷害15%');assert.equal(build(i.official.zh).explanation.effectOrigin,'official');
  assert.equal(build(null).explanation.effect,'AI改寫');assert.equal(build(null).explanation.effectOrigin,'unofficial-translation');
  for(const [category,version] of [['weapons','1.1.0'],['terms','1.1.0'],['skills','1.0.0']])assert.equal(build(null,category,version).explanation.effectOrigin,undefined);
  const a=build(i.official.zh),b=build(i.official.zh);assert.equal(JSON.stringify(a),JSON.stringify(b));assert.equal(output.explanation.effect,'AI改寫');
});

// Scenario: literal official text disagrees with current values. Purpose: keep locked official effects subject to the existing strict gates.
test('UnitT65_locked official literal wrong numbers still fail verification', () => {
  const i=item('提高2.5%。',{power:{value:10}});
  const task=effectTaskFor(i,undefined,meta({}));assert.equal(task.lockedEffect,i.official.zh);
  const result=checkText({...i,explanation:{effect:task.lockedEffect,conditions:'',calculation:'',notes:'',extra:''},errata:[]},undefined,[],[],new Map());
  assert.ok(result.failures.some(f=>f.code==='T_NUMBER'));assert.ok(result.failures.some(f=>f.code==='T_ERRATA_MISSING'));
});

// Scenario: rules or localized output change without values changing. Purpose: invalidate stale AI work using the effect policy hash.
test('UnitT70_effect task changes invalidate inputHash and AI output cannot set origin', () => {
  const i=item('原文'),a={lockedEffect:'原文'},b={effectTask:'translate-official-en'};
  assert.notEqual(inputHashFor('skills','added',i,undefined,a),inputHashFor('skills','added',i,undefined,b));
  assert.deepEqual(effectTaskFor(i,{batch:'1',lookup:()=>null},meta({})),a);
  const schemas=loadSchemas(fileURLToPath(new URL('../../pipeline/schema/',import.meta.url)));
  const output={schemaVersion:'1.0.0',id:i.id,inputHash:'0'.repeat(64),explanation:{effect:'效果',conditions:'',calculation:'',notes:'',extra:'',effectOrigin:'official'},errata:[]};
  assert.equal(schemas.validate('ai-output.schema.json',output).valid,false);
  const input={schemaVersion:'1.0.0',id:i.id,category:'skills',change:'added',gameVersion:'1.13.4',sourceCommit:'a'.repeat(40),textBatch:'1',inputHash:'0'.repeat(64),item:{...i,key:'test',name:{}},previous:null,glossary:{source:null,matches:[]},outputFile:'ai/output/test.json'};
  assert.equal(schemas.validate('ai-input.schema.json',{...input,...a}).valid,true);
  assert.equal(schemas.validate('ai-input.schema.json',{...input,...b}).valid,true);
  for(const invalid of [{...input,...a,...b},{...input,...a,category:'weapons'},{...input,effectTask:'guess-values'}])assert.equal(schemas.validate('ai-input.schema.json',invalid).valid,false);
});

// Scenario: existing fixture has percentage manipulation, localization, affixes and indexed values. Purpose: keep rules outside final items and collect scalar parameters.
test('UnitT80_extract captures formatting in work metadata while keeping values compatible', () => {
  const files=new Map(),root=fileURLToPath(new URL('./fixtures/skills/',import.meta.url));
  const scan=(dir='')=>{for(const e of readdirSync(join(root,dir),{withFileTypes:true})) {const p=dir?`${dir}/${e.name}`:e.name;if(e.isDirectory())scan(p);else files.set(p,readFileSync(join(root,p),'utf8'));}};scan();
  const reader={commit:'a'.repeat(40),exists:p=>files.has(p),read:p=>files.get(p),list:(p='')=>[...files.keys()].filter(k=>k.startsWith(p)).sort()};
  const result=buildSkills({reader,text:{lookup:()=>null},envelope:{textBatch:'1'}}),basic=result.items.find(i=>i.key==='basic');
  assert.equal(result.effectFormats[basic.id].params.direct.prefix,'-');
  assert.equal(result.effectFormats[basic.id].params.localize.type,'loc_string');
  assert.match(result.effectFormats[basic.id].params.transform.manipulation,/math.round/);
  assert.equal(basic.values.params.direct.value,15);assert.deepEqual(Object.keys(basic.values.params.direct).sort(),['unit','value']);
  assert.equal(basic.effectFormats,undefined);
});

// Scenario: a formatting function calls a captured math alias. Purpose: collect static source values while rejecting shadowed or reassigned functions.
test('UnitT85_verified lexical math aliases expand but replacements stay unknown', () => {
  for(const [source,expected] of [
    ['local math_round=math.round\nreturn {fn=function(value) return math_round((1-value)*100) end}',25],
    ['local math_round=math.round\nmath_round=math_round or function(value) return 99 end\nreturn {fn=function(value) return math_round((1-value)*100) end}',25],
    ['local math_round=math.round\nreturn {fn=function(value) local result=math_round((1-value)*100) return result end}',25],
    ['local math_round=math.round\nlocal out={fn=function(value) return math_round((1-value)*100) end}\nmath_round=factory()\nreturn out',undefined],
    ['local math_round=function(v) return 99 end\nreturn {fn=function(value) return math_round(value) end}',undefined],
    ['return {fn=function(value) return toString(value) end}',undefined],
    ['local math={round=function(v) return 99 end}\nlocal math_round=math.round\nreturn {fn=function(value) return math_round(value) end}',undefined]]) {
    const r=createSkillResolver({read:()=>source,exists:()=>true,list:()=>[]});
    assert.equal(manipulate(r.get(r.returned('fixture.lua'),'fn'),0.75),expected);
  }
});

// Scenario: one indexed description and a UI fallback format type. Purpose: follow the game's defaults and select indexed values even with one paragraph.
test('UnitT90_single indexed descriptions and default fallback types expand', () => {
  const i=item('{x:%s}',{x_1:{value:2}});
  assert.equal(expand(i,{params:{x_1:format('value')},descriptions:[{key:'first',index:1}],perIndex:[1]}).text,'2');
  assert.equal(expand(i,{params:{x_1:format('value')},descriptions:[{key:'first',index:1}],perIndex:[1]}).status,'complete');
});

// Scenario: UI clamps spent points into static talent overrides. Purpose: show only ranks supported by this node, preserving progression order.
test('UnitT95_static talent override arrays use the nodes point range', () => {
  const i=item('{power:%s}',{power:{value:[10,20,30]}});i.values.maxPoints=1;
  const m=meta({power:format('percentage',{pointTiers:true})});
  assert.deepEqual(expand(i,m),{status:'complete',text:'10%',missing:[]});
  i.values.maxPoints=2;assert.equal(expand(i,m).text,'10%／20%');
});

// Scenario: raw display doubles differ from normalized values. Purpose: use captured source precision.
test('UnitT16_source precision survives normalized display values', () => {
  assert.equal(expand(item('{n:%s}',{n:{value:3.3}}),meta({n:format('percentage',{displayDecimals:1})})).text,'3.3%');
  assert.equal(expand(item('{n:%s}',{n:{value:-28}}),meta({n:format('percentage',{displayDecimals:2})})).text,'-28.00%');
});

// Scenario: the source task changed after the AI output was produced. Purpose: reject stale policy hashes.
test('UnitT17_candidate rejects a changed effect policy', () => {
  const i=item('{n:%s}',{n:{value:1}}), task={lockedEffect:'old'};
  const hash=inputHashFor('skills','added',i,undefined,task);
  const output={schemaVersion:'1.0.0',id:i.id,inputHash:hash,explanation:{effect:'x',conditions:'',calculation:'',notes:'',extra:''},errata:[]};
  assert.throws(()=>composeCandidate({category:'skills',run:{items:{[i.id]:{category:'skills',change:'added',inputHash:hash}}},extract:{status:'ok',schemaVersion:'1.1.0',items:[i],effectFormats:{[i.id]:meta({n:format()})}},outputs:{[i.id]:output}}),/重跑 diff/);
});

// Scenario: unchanged items have official, translated, or changed expanded effects. Purpose: reopen only invalidated descriptions.
test('UnitT18_effect task changes invalidate previous descriptions', async () => {
  const {effectNeedsRefresh}=await import('../../pipeline/lib/official-effect.mjs');
  assert.equal(effectNeedsRefresh({effect:'原文',effectOrigin:'official'},{effectTask:'translate-official-en'}),true);
  assert.equal(effectNeedsRefresh({effect:'原文',effectOrigin:'official'},{lockedEffect:'新文'}),true);
  assert.equal(effectNeedsRefresh({effect:'原文',effectOrigin:'official'},{lockedEffect:'原文'}),false);
  assert.equal(effectNeedsRefresh({effect:'譯文',effectOrigin:'unofficial-translation'},{effectTask:'translate-official-en'}),false);
});
