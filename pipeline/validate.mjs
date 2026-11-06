import { existsSync, readFileSync, readdirSync } from 'node:fs';
import { resolve, join } from 'node:path';
import { fileURLToPath } from 'node:url';
import { checkCurrent, checkVersionDir } from './lib/data-files.mjs';
import { readState } from './lib/state.mjs';
const args = process.argv.slice(2);
if (args.length && (args.length !== 2 || args[0] !== '--root')) {
  console.error('Usage: node pipeline/validate.mjs [--root <dir>]');
  process.exit(1);
}
const root = args.length ? resolve(args[1]) : fileURLToPath(new URL('..', import.meta.url));
let failed = false;
const report = (file, errors) => {
  for (const e of errors) {
    failed = true;
    console.error(`${file}: ${e.path} ${e.message}`);
  }
};
const data = join(root, 'data'),
  current = join(data, 'current.json');
let versions = [];
if (existsSync(current)) {
  const text = readFileSync(current, 'utf8'),
    check = checkCurrent(text);
  report(current, check.errors);
  try {
    const v = JSON.parse(text).versions;
    if (Array.isArray(v))
      versions = v.filter((x) => typeof x === 'string' && /^[0-9]+(\.[0-9]+){1,3}$/.test(x));
  } catch {}
  for (const version of versions) {
    const dir = join(data, version);
    report(dir, checkVersionDir(dir).errors);
  }
} else console.log('data/current.json 不存在：尚無正式版本');
if (existsSync(data))
  for (const e of readdirSync(data, { withFileTypes: true }))
    if (e.isDirectory() && /^[0-9]+(\.[0-9]+){1,3}$/.test(e.name) && !versions.includes(e.name))
      report(data, [{ path: `/${e.name}`, message: 'Version directory not listed' }]);
const state = join(root, 'pipeline', 'state.json');
try {
  await readState(state);
} catch (e) {
  report(state, [{ path: '', message: e.message }]);
}
if (failed) process.exitCode = 1;
else console.log('OK');
