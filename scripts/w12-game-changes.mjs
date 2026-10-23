import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { writeTechnicalChangelog } from './content/w12-game-changes.mjs';

const SOURCE_ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');

export function parseW12GameChangeOptions(args) {
  const allowed = new Set(['--package-dir', '--out-dir', '--from-release', '--to-release']);
  const values = new Map();
  for (let index = 0; index < args.length; index += 1) {
    const flag = args[index];
    if (!allowed.has(flag) || values.has(flag)) throw new Error('usage: node scripts/w12-game-changes.mjs --package-dir <W05-package> --to-release <release-id> [--from-release <release-id>] --out-dir <separate-output-root>');
    const value = args[index + 1];
    if (typeof value !== 'string' || value.length === 0 || value.startsWith('--')) throw new Error(`${flag} requires a value`);
    values.set(flag, value);
    index += 1;
  }
  for (const flag of ['--package-dir', '--to-release', '--out-dir']) {
    if (!values.has(flag)) throw new Error(`required argument is missing: ${flag}`);
  }
  return {
    packageDirectory: path.resolve(values.get('--package-dir')),
    outDirectory: path.resolve(values.get('--out-dir')),
    fromGameReleaseId: values.get('--from-release') ?? null,
    toGameReleaseId: values.get('--to-release'),
    sourceRoot: SOURCE_ROOT,
  };
}

if (process.argv[1] && path.resolve(process.argv[1]) === fileURLToPath(import.meta.url)) {
  try {
    const result = await writeTechnicalChangelog(parseW12GameChangeOptions(process.argv.slice(2)));
    process.stdout.write(JSON.stringify({
      sourceRevision: result.report.sourceRevision,
      classification: result.report.classification,
      confirmedChangeCount: result.report.confirmedChanges.length,
      webPublicationState: result.report.webPublicationState,
      outputDirectory: result.outputDirectory,
    }, null, 2) + '\n');
  } catch (error) {
    process.stderr.write(String(error?.message ?? error) + '\n');
    process.exitCode = 1;
  }
}
