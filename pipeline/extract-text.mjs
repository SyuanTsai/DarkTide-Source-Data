import path from 'node:path';
import { createHash } from 'node:crypto';
import { parseArgs, REPO_ROOT, resolvePrivate, workDir, git } from './lib/inputs.mjs';
import { readState } from './lib/state.mjs';
import { writeCanonicalFile } from './lib/canonical-json.mjs';

const SCRIPT_VERSION = 'pipeline/extract-text.mjs@1.0.0';
const sha256 = s => createHash('sha256').update(s).digest('hex');
async function main() {
  const a = parseArgs(process.argv.slice(2), {'private-repo':'value', 'private-ref':'value', 'text-batch':'value', 'work-dir':'value', state:'value'});
  const state = await readState(path.resolve(a.state || path.join(REPO_ROOT, 'pipeline/state.json')));
  const p = resolvePrivate({repo:a['private-repo'], ref:a['private-ref'], batch:a['text-batch'] || state.run?.textBatch});
  const gameVersion = state.run?.gameVersion || p.gameVersion;
  const resources = {}, problems = [], counts = [];
  for (const resource of ['items','ui']) {
    const info = p.manifest.resources.find(x => x.name === `content/localization/${resource}` || x.name === resource);
    if (!info || !Array.isArray(info.files)) throw new Error(`manifest 缺少資源 ${resource}`);
    const records = new Map(), duplicate = new Set();
    for (const locale of ['en','zh-tw']) {
      const f = info.files.find(x => x.locale === locale);
      if (!f || f.path !== `${resource}.${locale}.jsonl`) throw new Error(`manifest 缺少 ${resource}.${locale}`);
      const raw = git(p.repo, ['cat-file','blob',`${p.refCommit}:localization/${p.batch}/${f.path}`]);
      const lines = raw.split('\n'); if (lines.at(-1) === '') lines.pop();
      if (sha256(raw) !== f.sha256 || lines.length !== f.rows) throw new Error(`${f.path} 的 SHA256 或列數不符`);
      const seen = new Map();
      for (const line of lines) {
        const row = JSON.parse(line);
        if (!/^[0-9a-f]{8}$/.test(row.hash) || typeof row.text !== 'string') throw new Error(`${f.path} 包含無效資料列`);
        if (seen.has(row.hash) && seen.get(row.hash) !== row.text) duplicate.add(row.hash);
        seen.set(row.hash, row.text);
        const record = records.get(row.hash) || {en:null, zh:null};
        record[locale === 'en' ? 'en' : 'zh'] = row.text;
        records.set(row.hash, record);
      }
      counts.push(`${resource}.${locale} ${lines.length}`);
    }
    for (const hash of duplicate) {
      records.set(hash, {en:null, zh:null});
      problems.push({code:'DUP_HASH', message:`${resource} ${hash}`});
    }
    const obj = Object.fromEntries([...records].sort(([a],[b]) => a < b ? -1 : a > b ? 1 : 0));
    resources[resource] = obj;
    counts.push(`${resource} 雙語 ${Object.values(obj).filter(x => x.en !== null && x.zh !== null).length}`);
  }
  const manifestRaw = git(p.repo, ['cat-file','blob',`${p.refCommit}:localization/${p.batch}/manifest.json`]);
  const out = {schemaVersion:'1.0.0', category:'text', batch:p.batch, gameVersion, privateRefCommit:p.refCommit, manifestSha256:sha256(manifestRaw), resources, problems};
  await writeCanonicalFile(path.join(workDir({override:a['work-dir'], gameVersion}), 'extract/text.json'), out);
  console.log(counts.join('、'));
}
main().catch(e => { console.error(e.message); process.exitCode = 1; });
