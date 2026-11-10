import { InputError } from './input.mjs';

const names = { 'candidate-dir': 'candidateDir', 'extract-dir': 'extractDir', 'version-info': 'versionInfo',
  'previous-dir': 'previousDir', root: 'root', translation: 'translation', state: 'state', report: 'report',
  'out-dir': 'outDir', 'cloud-dir': 'cloudDir', issues: 'issues', 'mods-repo': 'modsRepo', 'mods-commit': 'modsCommit', 'build-cmd': 'buildCmd', 'source-code-repo': 'sourceCodeRepo' };
export function parse(args) {
  const options = { issues: 'off' };
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
