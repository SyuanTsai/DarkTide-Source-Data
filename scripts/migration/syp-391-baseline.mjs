import { parseArgs } from '../../pipeline/lib/inputs.mjs';
import { assertExternalOutput, loadMigration, writePrepared, applyPrepared } from './lib/migration-io.mjs';

try {
  const [command, ...argv] = process.argv.slice(2);
  if (!['prepare', 'apply'].includes(command)) throw new Error('Usage: syp-391-baseline.mjs prepare|apply --extract-dir <dir> --legacy-cache <dir> --out <absolute dir> [--translation <file>]');
  const args = parseArgs(argv, { 'extract-dir': 'value', 'legacy-cache': 'value', out: 'value', translation: 'value' });
  for (const name of ['extract-dir', 'legacy-cache', 'out']) if (!args[name]) throw new Error(`Missing --${name}`);
  const out = await assertExternalOutput(args.out);
  const plan = await loadMigration({ extractDir: args['extract-dir'], legacyCache: args['legacy-cache'], translation: args.translation });
  const report = command === 'prepare' ? await writePrepared(plan, out) : await applyPrepared(plan, out);
  console.log(JSON.stringify({ stage: report.stage, totals: report.totals, categories: report.categories,
    scopeSectionTasks: report.scopeSectionTasks, failureCodes: report.failureCodes, baselineReady: report.baselineReady }));
  if (command === 'apply' && !report.baselineReady) process.exitCode = 1;
} catch (error) {
  console.error(`Migration failed: ${error.message}`);
  process.exitCode = 2;
}
