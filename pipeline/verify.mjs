import { runVerify } from './lib/verify/index.mjs';
import { summary } from './lib/verify/report.mjs';
import { InputError } from './lib/verify/input.mjs';

const names = { 'candidate-dir': 'candidateDir', 'extract-dir': 'extractDir', 'version-info': 'versionInfo',
  'previous-dir': 'previousDir', root: 'root', translation: 'translation', state: 'state', report: 'report',
  'out-dir': 'outDir', 'cloud-dir': 'cloudDir', issues: 'issues', 'mods-repo': 'modsRepo', 'mods-commit': 'modsCommit', 'build-cmd': 'buildCmd' };
function parse(args) {
  const options = { issues: 'create' };
  const seen = new Set();
  for (let i = 0; i < args.length; i += 2) {
    const flag = args[i], name = names[flag.slice(2)];
    if (!flag.startsWith('--') || !Object.hasOwn(names, flag.slice(2))) throw new InputError(`未知參數：${flag}`);
    if (seen.has(name)) throw new InputError(`參數重複：${flag}`);
    if (!args[i + 1] || args[i + 1].startsWith('--')) throw new InputError(`參數缺少值：${flag}`);
    seen.add(name); options[name] = args[i + 1];
  }
  return options;
}
try {
  const options = parse(process.argv.slice(2));
  const result = await runVerify(options);
  process.stdout.write(summary(result.report, options.issues));
  process.exitCode = result.exitCode;
} catch (error) {
  console.error(`檢查錯誤：${error instanceof InputError ? error.message : '無法完成檢查，請確認輸入與檔案權限'}`);
  process.exitCode = 2;
}
