import { test } from 'node:test';
import assert from 'node:assert/strict';
import { spawnSync, execFileSync } from 'node:child_process';
import { mkdtempSync, mkdirSync, rmSync, writeFileSync, readFileSync } from 'node:fs';
import { tmpdir } from 'node:os';
import path from 'node:path';
import { resolveRepoPaths } from '../../pipeline/lib/inputs.mjs';

// Scenario: A worktree has both parent and adjacent repositories, or explicit overrides.
// Purpose: Keep the CLI and input resolvers on the same priority rules.
test('UnitT10_repo paths use overrides then adjacent then parent', t => {
  const dir = mkdtempSync(path.join(tmpdir(), 'repos-')); t.after(() => rmSync(dir, {recursive:true, force:true}));
  const root = path.join(dir, 'worktrees', 'task'); mkdirSync(root, {recursive:true});
  for (const n of ['Darktide-Source-Code', 'DARKTIDE User Setting']) mkdirSync(path.join(dir, n));
  assert.deepEqual(resolveRepoPaths({root, env:{}}), {sourceRepo:path.join(dir,'Darktide-Source-Code'), privateRepo:path.join(dir,'DARKTIDE User Setting')});
  mkdirSync(path.join(dir,'worktrees','Darktide-Source-Code'));
  assert.equal(resolveRepoPaths({root,env:{}}).sourceRepo,path.join(dir,'worktrees','Darktide-Source-Code'));
  assert.equal(resolveRepoPaths({root,env:{DARKTIDE_SOURCE_CODE_REPO:dir}}).sourceRepo,dir);
  const r=spawnSync(process.execPath,['pipeline/print-repos.mjs'],{encoding:'utf8',env:{...process.env,DARKTIDE_SOURCE_CODE_REPO:dir,DARKTIDE_PRIVATE_REPO:root}});
  assert.equal(r.status,0,r.stderr); assert.deepEqual(JSON.parse(r.stdout),{sourceRepo:dir,privateRepo:root});
});

// Scenario: Private fetch fails while a previously fetched origin/master exists.
// Purpose: The documented block must stop before consulting the stale ref.
test('InterT20_start block stops immediately after private fetch fails', t => {
  const probe=spawnSync('pwsh',['-NoProfile','-Command','$PSVersionTable.PSVersion.Major'],{encoding:'utf8'});
  if (probe.error?.code === 'ENOENT') return t.skip('pwsh 7 is not installed');
  assert.equal(probe.status,0,probe.stderr); if (Number(probe.stdout.trim()) < 7) return t.skip('pwsh 7 is required');
  const dir=mkdtempSync(path.join(tmpdir(),'start-doc-')); t.after(()=>rmSync(dir,{recursive:true,force:true}));
  const priv=path.join(dir,'private'); mkdirSync(priv);
  const git=(...args)=>execFileSync('git',['-C',priv,...args],{encoding:'utf8',stdio:'pipe'});
  git('init'); git('-c','user.name=test','-c','user.email=test@example.com','commit','--allow-empty','-m','fixture');
  git('update-ref','refs/remotes/origin/master','HEAD');
  git('remote','add','origin',path.join(dir,'missing-remote'));
  assert.match(git('rev-parse','--verify','origin/master'),/^[a-f0-9]{40}/);
  const doc=readFileSync('docs/pipeline/START.md','utf8');
  const section=doc.split('0. 更新輸入來源')[1].split('\n1. 版本與狀態')[0];
  const block=section.match(/```powershell\s*\n([\s\S]*?)```/)[1];
  const log=path.join(dir,'calls.txt');
  const prelude=`function git {\n  Add-Content -LiteralPath $env:TEST_CALLS -Value ($args -join ' ')\n  if ($args[0] -eq '-C' -and $args[1] -eq $env:DARKTIDE_PRIVATE_REPO) { & git.exe @args; return }\n  $global:LASTEXITCODE = 0\n  if ($args -contains 'branch') { 'master' }\n  if ($args -contains 'symbolic-ref') { 'origin/master' }\n}\n`;
  const script=path.join(dir,'test.ps1'); writeFileSync(script,prelude+block+'\n');
  const r=spawnSync('pwsh',['-NoProfile','-NonInteractive','-File',script],{encoding:'utf8',env:{...process.env,TEST_CALLS:log,DARKTIDE_SOURCE_CODE_REPO:dir,DARKTIDE_PRIVATE_REPO:priv}});
  assert.notEqual(r.status,0,`expected failure: ${r.stdout} ${r.stderr}`);
  const calls=readFileSync(log,'utf8'); assert.match(calls,/fetch origin/); assert.doesNotMatch(calls,/rev-parse/);
});
