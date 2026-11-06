import { existsSync, readFileSync } from 'node:fs';
import { dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';
import { execFileSync } from 'node:child_process';

export function parseGlossary(text) {
  return text.split(/\r?\n/).flatMap((line, i) => {
    const match = /^\s*-\s+(.+?)\s+-\s+(.+?)\s*$/.exec(line);
    return match && match[1].trim().length >= 2 ? [{ en: match[1].trim(), zh: match[2].trim(), line: i + 1 }] : [];
  });
}
export function matchGlossary(entries, texts) {
  const result = [], seen = new Set();
  for (const entry of entries) {
    const escaped = entry.en.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
    const re = new RegExp(`(?:^|[^A-Za-z0-9])${escaped}(?=$|[^A-Za-z0-9])`, 'i');
    const key = JSON.stringify(entry);
    if (!seen.has(key) && texts.some((text) => typeof text === 'string' && re.test(text))) { seen.add(key); result.push(entry); }
  }
  return result.sort ( (a, b) => a.line - b.line || (a.en < b.en ? -1 : a.en > b.en ? 1 : 0));
}
export function resolveGlossary({ override, env = process.env } = {}) {
  const repo = fileURLToPath(new URL('../../', import.meta.url));
  const file = override || env.DARKTIDE_GLOSSARY_FILE || resolve(repo, '../Warhammer-40-000-DARKTIDE-Mods/Referneces/Translation.md');
  if (!existsSync(file)) return null;
  let commit;
  try { commit = execFileSync('git', ['-C', dirname(resolve(file)), 'rev-parse', 'HEAD'], { encoding: 'utf8', stdio: ['ignore', 'pipe', 'ignore'] }).trim(); }
  catch { throw new Error('無法取得譯名表所在 Git 儲存庫的 commit'); }
  return { source: { repo: 'Warhammer-40-000-DARKTIDE-Mods', commit, path: 'Referneces/Translation.md' }, entries: parseGlossary(readFileSync(file, 'utf8')) };
}
