import { existsSync, readFileSync, readdirSync } from 'node:fs';
import { resolve, join, relative, sep } from 'node:path';
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
    console.error(`${relative(root, file).split(sep).join('/')}: ${e.path} ${e.message}`);
  }
};
const data = join(root, 'data'),
  current = join(data, 'current.json');
let versions = [], currentValue;
if (existsSync(current)) {
  const text = readFileSync(current, 'utf8'),
    check = checkCurrent(text);
  report(current, check.errors);
  try {
    currentValue = JSON.parse(text);
    const v = currentValue.versions;
    if (Array.isArray(v))
      versions = v.filter((x) => typeof x === 'string' && /^[0-9]+(\.[0-9]+){1,3}$/.test(x));
  } catch {}
  for (const version of versions) {
    const dir = join(data, version);
    for (const error of checkVersionDir(dir, version === currentValue?.gameVersion ? currentValue.schemaVersion : undefined).errors) {
      const [, file, ...pointer] = error.path.split('/');
      report(join(dir, file), [{ ...error, path: pointer.length ? `/${pointer.join('/')}` : '' }]);
    }
  }
} else console.log('data/current.json 不存在：尚無正式版本');
if (existsSync(data))
  for (const e of readdirSync(data, { withFileTypes: true }))
    if (e.isDirectory() && /^[0-9]+(\.[0-9]+){1,3}$/.test(e.name) && !versions.includes(e.name))
      report(current, [{ path: '/versions', message: `Version directory ${e.name} not listed` }]);
const state = join(root, 'pipeline', 'state.json');
try {
  await readState(state);
} catch (e) {
  report(state, e.message.split(/\r?\n/).map((message) => ({ path: '', message })));
}
if (failed) process.exitCode = 1;
else console.log('OK');
