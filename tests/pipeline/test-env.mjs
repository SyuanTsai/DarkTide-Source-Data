import { spawnSync as nodeSpawnSync, execFileSync as nodeExecFileSync } from 'node:child_process';
import { mkdtempSync } from 'node:fs';
import { tmpdir } from 'node:os';
import { join } from 'node:path';
const ghConfigDir = mkdtempSync(join(tmpdir(), 'pipeline-test-gh-'));
// Limit child processes to the Windows and tool settings needed by tests.
export function cleanTestEnv() {
  const env = {};
  for (const name of ['PATH', 'Path', 'PATHEXT', 'SystemRoot', 'WINDIR', 'TEMP', 'TMP', 'COMSPEC', 'USERPROFILE', 'HOME']) {
    if (process.env[name] !== undefined) env[name] = process.env[name];
  }
  env.GH_CONFIG_DIR = ghConfigDir;
  env.DARKTIDE_TEST = '1';
  return env;
}

function childEnv(overrides = {}) {
  const env = cleanTestEnv();
  for (const name of ['GIT_AUTHOR_DATE', 'GIT_COMMITTER_DATE', 'TEST_CALLS', 'DARKTIDE_SOURCE_CODE_REPO', 'DARKTIDE_PRIVATE_REPO']) {
    if (overrides[name] !== undefined && overrides[name] !== process.env[name]) env[name] = overrides[name];
  }
  return env;
}
export function spawnSync(command, args, options = {}) {
  return nodeSpawnSync(command, args, { ...options, env: childEnv(options.env) });
}
export function execFileSync(command, args, options = {}) {
  return nodeExecFileSync(command, args, { ...options, env: childEnv(options.env) });
}
