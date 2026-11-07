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

// Scenario: Source-Data is clean, contains only run artifacts, or also has an unrelated change.
// Purpose: Execute the documented decision in a real temporary repository and verify pull and rejection behavior.
for (const [number, scenario] of [['30', 'clean'], ['40', 'resume'], ['50', 'unrelated'], ['60', 'rename'], ['70', 'single'], ['80', 'readme'], ['90', 'other-data']]) {
  test(`InterT${number}_source data ${scenario} selects the correct startup action`, t => {
    const probe = spawnSync('pwsh', ['-NoProfile', '-Command', '$PSVersionTable.PSVersion.Major'], {encoding:'utf8'});
    if (probe.error?.code === 'ENOENT') return t.skip('pwsh 7 is not installed');
    assert.equal(probe.status, 0, probe.stderr);
    if (Number(probe.stdout.trim()) < 7) return t.skip('pwsh 7 is required');
    const dir = mkdtempSync(path.join(tmpdir(), 'start-source-'));
    t.after(() => rmSync(dir, {recursive:true, force:true}));
    const git = (...args) => execFileSync('git', ['-C', dir, ...args], {encoding:'utf8', stdio:'pipe'});
    git('init'); mkdirSync(path.join(dir, 'pipeline'));
    writeFileSync(path.join(dir, 'pipeline', 'state.json'), '{}');
    writeFileSync(path.join(dir, 'other.txt'), 'original');
    mkdirSync(path.join(dir, 'data')); writeFileSync(path.join(dir, 'data', 'README.md'), 'original');
    git('add', '.'); git('-c', 'user.name=test', '-c', 'user.email=test@example.com', 'commit', '-m', 'fixture');
    if (scenario !== 'clean') {
      writeFileSync(path.join(dir, 'pipeline', 'state.json'), JSON.stringify({run:{gameVersion:'9.9.9',sourceCommit:'a'.repeat(40),textBatch:'123',status:'completed'}}));
      if (scenario !== 'single') {
        mkdirSync(path.join(dir, 'data', '9.9.9'), {recursive:true});
        writeFileSync(path.join(dir, 'data', '9.9.9', 'skills.json'), '{}');
        writeFileSync(path.join(dir, 'data', 'current.json'), '{}');
      }
    }
    if (scenario === 'readme') writeFileSync(path.join(dir, 'data', 'README.md'), 'changed');
    if (scenario === 'other-data') writeFileSync(path.join(dir, 'data', 'other.txt'), 'changed');
    if (scenario === 'unrelated') writeFileSync(path.join(dir, 'other.txt'), 'changed');
    if (scenario === 'rename') git('mv', 'other.txt', 'data/9.9.9/renamed file.json');
    const doc = readFileSync('docs/pipeline/START.md', 'utf8');
    const block = doc.split('0. 更新輸入來源')[1].match(/```powershell\s*\n([\s\S]*?)```/)[1];
    const source = block.slice(block.indexOf('   $status = @(Invoke-Git status'), block.lastIndexOf('   if (-not $resume) {'));
    const script = `function Invoke-Git {\n if ($args[0] -eq 'pull') { 'PULLED'; return }\n & git.exe @args\n if ($LASTEXITCODE -ne 0) { throw 'git failed' }\n}\n${source}`;
    const result = spawnSync('pwsh', ['-NoProfile', '-NonInteractive', '-Command', script], {cwd:dir, encoding:'utf8'});
    if (['unrelated', 'rename', 'readme', 'other-data'].includes(scenario)) { assert.notEqual(result.status, 0); assert.match(result.stderr, /Source-Data/); }
    else { assert.equal(result.status, 0, result.stderr); assert.equal(result.stdout.includes('PULLED'), scenario === 'clean'); }
  });
}

// Scenario: A completed run has uncommitted artifacts in a temporary repository.
// Purpose: The complete documented block must not update either input repository and the document selects remaining delivery.
test('InterT95_completed resume skips input updates and selects delivery', t => {
  const probe = spawnSync('pwsh', ['-NoProfile', '-Command', '$PSVersionTable.PSVersion.Major'], {encoding:'utf8'});
  if (probe.error?.code === 'ENOENT') return t.skip('pwsh 7 is not installed');
  assert.equal(probe.status, 0, probe.stderr); if (Number(probe.stdout.trim()) < 7) return t.skip('pwsh 7 is required');
  const dir = mkdtempSync(path.join(tmpdir(), 'start-completed-')); t.after(() => rmSync(dir,{recursive:true,force:true}));
  const git = (...args) => execFileSync('git',['-C',dir,...args],{encoding:'utf8',stdio:'pipe'});
  git('init'); mkdirSync(path.join(dir,'pipeline')); writeFileSync(path.join(dir,'pipeline','state.json'),'{}');
  git('add','.'); git('-c','user.name=test','-c','user.email=test@example.com','commit','-m','fixture');
  writeFileSync(path.join(dir,'pipeline','state.json'),JSON.stringify({run:{gameVersion:'9.9.9',sourceCommit:'a'.repeat(40),textBatch:'123',status:'completed'}}));
  const doc=readFileSync('docs/pipeline/START.md','utf8');
  const block=doc.split('0. 更新輸入來源')[1].match(/```powershell\s*\n([\s\S]*?)```/)[1];
  const prelude=`function node { '{"sourceRepo":"source","privateRepo":"private"}'; $global:LASTEXITCODE=0 }
function git { if ($args[0] -eq '-C' -or $args[0] -eq 'pull') { throw 'unexpected update' }; & git.exe @args }
`;
  const result=spawnSync('pwsh',['-NoProfile','-NonInteractive','-Command',prelude+block],{cwd:dir,encoding:'utf8'});
  assert.equal(result.status,0,result.stderr);
  assert.match(doc,/沒有新版本.*completed.*未提交的流程產物[^\n]*第 6 步的 validate 與交付/);
  assert.match(doc,/--commit \$run.sourceCommit --text-batch \$run.textBatch/);
});
