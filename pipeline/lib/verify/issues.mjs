import { mkdtemp, writeFile, rm } from 'node:fs/promises';
import { tmpdir } from 'node:os';
import { join, dirname, basename } from 'node:path';

export const stderrTail = (text) => String(text ?? '').trimEnd().split(/\r?\n/).slice(-20).join('\n');
export function execute(exec, command, args, options = {}) {
  try {
    const result = exec(command, args, { encoding: 'utf8', ...options });
    return { ...result, status: result?.status ?? 1, stdout: String(result?.stdout ?? ''),
      stderr: String(result?.stderr ?? (result?.error ? '無法啟動外部指令' : '')) };
  } catch { return { status: 1, stdout: '', stderr: '無法執行外部指令' }; }
}
export async function handleIssues(conflicts, table, version, options) {
  if (options.issues === 'off' || !conflicts.length) return [];
  let commit = options.modsCommit;
  if (!commit && options.issues === 'create') {
    const parent = dirname(options.translation);
    const repo = basename(parent).toLowerCase() === 'referneces' ? dirname(parent) : parent;
    const result = execute(options.exec, 'git', ['-C', repo, 'rev-parse', 'HEAD']);
    if (result.status === 0 && /^[0-9a-fA-F]{40}$/.test(result.stdout.trim())) commit = result.stdout.trim();
  }
  const issues = [];
  for (const conflict of conflicts) {
    const title = `譯名衝突：${conflict.en}（官方「${conflict.officialZh}」／Translation.md「${conflict.translationZh[0]}」）`;
    const translations = table.get(conflict.en.toLowerCase()).entries.map(({ line, raw }) =>
      `- ${raw}（${commit ? `https://github.com/${options.modsRepo}/blob/${commit}/Referneces/Translation.md#L${line}` : `${options.translation}，第 ${line} 行`}）`);
    const body = [`英文原名：${conflict.en}`, `官方中文：${conflict.officialZh}`, '', 'Translation.md 譯法：', ...translations,
      '', `出現位置：${conflict.locations.map((p) => p.id).join('、')}`, `遊戲版本：${version.sourceGameVersion}`,
      `Source-Code commit：${version.sourceCommit}`, '', '網站先使用官方中文，請決定是否更新 Translation.md 或回報官方。'].join('\n');
    const issue = { en: conflict.en, title, body, mode: options.issues === 'dry-run' ? 'dry-run' : 'failed', url: null, error: null };
    issues.push(issue);
    if (options.issues === 'dry-run') continue;
    const list = execute(options.exec, 'gh', ['issue', 'list', '-R', options.modsRepo, '--state', 'all', '--search', `${conflict.en} in:title`, '--json', 'number,title,url', '--limit', '50']);
    if (list.status !== 0) { issue.error = `無法查詢 Issue：${stderrTail(list.stderr)}`; continue; }
    let existing;
    try {
      const results = JSON.parse(list.stdout);
      if (!Array.isArray(results)) throw new Error();
      existing = results.filter((i) => typeof i?.title === 'string' && i.title.startsWith(`譯名衝突：${conflict.en}（`))
        .sort((a, b) => (a.number ?? 0) - (b.number ?? 0) || String(a.url).localeCompare(String(b.url)))[0];
    } catch { issue.error = '無法解析 Issue 查詢結果'; continue; }
    if (existing) { issue.mode = 'existing'; issue.url = existing.url ?? null; continue; }
    const temp = await mkdtemp(join(tmpdir(), 'verify-issue-'));
    try {
      const file = join(temp, 'body.md'); await writeFile(file, body, 'utf8');
      const created = execute(options.exec, 'gh', ['issue', 'create', '-R', options.modsRepo, '--title', title, '--body-file', file]);
      if (created.status !== 0) issue.error = `無法建立 Issue：${stderrTail(created.stderr)}`;
      else { issue.mode = 'created'; issue.url = created.stdout.trim().split(/\r?\n/).at(-1) || null; }
    } finally { await rm(temp, { recursive: true, force: true }); }
  }
  return issues;
}
