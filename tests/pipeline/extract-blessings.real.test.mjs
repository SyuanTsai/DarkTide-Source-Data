import { test } from 'node:test';
import assert from 'node:assert/strict';
import { mkdtempSync, readFileSync } from 'node:fs';
import { tmpdir } from 'node:os';
import path from 'node:path';
import { cli } from './helpers.mjs';

// Scenario: pinned source/text inputs are extracted twice. Purpose: validate real coverage and byte determinism.
test('InterT90_real blessings pinned smoke', {skip:process.env.PIPELINE_REAL_SMOKE !== '1'}, t => {
  const dir=mkdtempSync(path.join(tmpdir(),'syp385-blessings-'));
  const source=process.env.DARKTIDE_SOURCE_CODE_REPO || 'F:/GitFile/Persion - Games/Darktide-Source-Code', priv=process.env.DARKTIDE_PRIVATE_REPO || 'F:/GitFile/Persion - Games/DARKTIDE User Setting';
  const run=(script,args)=>{const r=cli(script,args); assert.equal(r.status,0,r.stderr+r.stdout); return r;};
  run('extract-text.mjs',['--private-repo',priv,'--private-ref','origin/master','--text-batch','25606770','--work-dir',dir,'--state',path.join(dir,'state.json')]);
  const args=['--source-code-repo',source,'--commit','ba6c148f3c2768ca3ce20d846a12e56e2f433f3e','--text-batch','25606770','--work-dir',dir,'--state',path.join(dir,'state.json')];
  run('extract-blessings.mjs',args); const first=readFileSync(path.join(dir,'extract/blessings.json')), data=JSON.parse(first);
  assert.equal(data.status,'ok'); assert.equal(data.items.length+data.excluded.length,693);
  const unknown=x=>!x||typeof x!=='object'?0:(x.value===null&&x.unknown?1:0)+Object.values(x).reduce((n,v)=>n+unknown(v),0);
  // 固定來源僅剩 8 個函式產生值與 12 個不在白名單內的 manipulation。
  assert.equal(unknown(data.items),20);
  const count=xs=>xs.reduce((a,k)=>(a[k]=(a[k]||0)+1,a),{});
  t.diagnostic(JSON.stringify({items:data.items.length,excluded:data.excluded.length,unknown:unknown(data.items),official:data.items.filter(x=>x.name.origin==='official').length,problems:count(data.problems.map(p=>p.code)),unresolvedReasons:count(data.problems.filter(p=>p.code==='UNRESOLVED_VALUE').map(p=>/^\[([^\]]+)\]/.exec(p.message)?.[1]??'UNCLASSIFIED'))}));
  const dumdum=data.items.find(x=>x.key==='weapon_trait_bespoke_autogun_p1_consecutive_hits_increases_close_damage');
  assert.equal(dumdum.name.en,'Dumdum'); assert.equal(dumdum.values.params.stacks.value,5);
  assert.ok(dumdum.source.files.some(f=>f.path.endsWith('/base_weapon_trait_buff_templates.lua')));
  run('extract-blessings.mjs',args); assert.deepEqual(readFileSync(path.join(dir,'extract/blessings.json')),first);
  // 實測 511：合法 stem 變形與同 stem 共用仍無額外 hash 命中。
  // 5 個缺名樣本：arc_rifle/ammo_from_reserve_on_crit、autogun/hipfire_while_sprinting、
  // autogun/movement_speed_on_continous_fire、chainaxe/windup_increases_power、chainsword/chained_hits_increases_melee_cleave。
  // 候選 hash 均不在 batch 25606770；trait 定義沒有 display_name mapping。
  // UI 由 MasterItems.get_item 取得 trait_item.display_name（item_stats_blueprints.lua:3808）；
  // 未提供 master data 的 trait→loc key 對照，不能由文字反猜。依 spec2b 允許將 600 改為實測值。
  assert.ok(data.items.filter(x=>x.name.origin==='official').length>=511);
});
