import { existsSync, statSync } from 'node:fs';
import { mkdir, readFile, writeFile, rename } from 'node:fs/promises';
import { dirname, isAbsolute, join } from 'node:path';
import { randomUUID } from 'node:crypto';

export const CLOUD_ENV = 'DARKTIDE_PIPELINE_CLOUD_DIR';
export function resolveCloudRoot({ override, env = process.env } = {}) {
  const root = override || env[CLOUD_ENV];
  if (!root) throw new Error('未設定中間檔目錄：請設定 DARKTIDE_PIPELINE_CLOUD_DIR 或 --cloud-dir 為已存在、不在任何 Git repo 內的本機絕對目錄');
  if (!isAbsolute(root) || !existsSync(root) || !statSync(root).isDirectory()) throw new Error('雲端中間檔目錄必須是已存在的絕對目錄路徑');
  return root;
}
export function cloudLayout(root, gameVersion) {
  const base = join(root, gameVersion);
  return { base, extract: join(base, 'extract'), diff: join(base, 'diff'), aiInput: join(base, 'ai', 'input'), aiOutput: join(base, 'ai', 'output') };
}
export function itemFileName(id) { return `${id.replaceAll(':', '=')}.json`; }
export async function copyIfChanged(src, dest) {
  const bytes = await readFile(src);
  try { if (bytes.equals(await readFile(dest))) return false; } catch (e) { if (e.code !== 'ENOENT') throw e; }
  await mkdir(dirname(dest), { recursive: true });
  const temp = `${dest}.${randomUUID()}.tmp`;
  await writeFile(temp, bytes);
  await rename(temp, dest);
  return true;
}
