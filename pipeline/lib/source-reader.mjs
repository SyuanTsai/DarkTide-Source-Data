import { git } from './inputs.mjs';
import { StructureError } from './errors.mjs';
import { execFileSync } from 'node:child_process';

/** One extraction's immutable view of every reader file read and ordered scan.
 * Inspection supports pin preflight without counting it as an extraction read. */
export function createSourceReadSnapshot(reader) {
  const snapshots=new Map(),lists=new Map(),files=new Set(),directories=new Set();
  function snapshot(file) {
    if(!snapshots.has(file)) {
      if(!reader.exists(file))throw new Error(`找不到來源：${file}`);
      const text=reader.read(file),bytes=Buffer.from(reader.readBytes?.(file)??Buffer.from(text));
      if(bytes.toString('utf8').replace(/^\uFEFF/,'')!==text)throw new Error(`來源 bytes 與文字不一致：${file}`);
      snapshots.set(file,{text,bytes});
    }
    const {text,bytes}=snapshots.get(file);
    return {text,bytes:Buffer.from(bytes)};
  }
  function listSnapshot(prefix='') {
    if(!lists.has(prefix))lists.set(prefix,[...reader.list(prefix)]);
    return [...lists.get(prefix)];
  }
  return {
    reader:{...reader,
      read(file){files.add(file);return snapshot(file).text;},
      readBytes(file){files.add(file);return snapshot(file).bytes;},
      list(prefix=''){directories.add(prefix);return listSnapshot(prefix);}},
    snapshot,listSnapshot,
    filesRead:()=>[...files].sort(),
    directoriesRead:()=>Object.fromEntries([...directories].sort().map(p=>[p,listSnapshot(p)])),
  };
}

/** Create a cached, commit-pinned Git object reader. */
export function createSourceReader({ repo, commit }) {
  if (!/^[0-9a-f]{40}$/i.test(commit)) throw new Error('commit 必須是 40 位 SHA');
  const paths = git(repo, ['ls-tree', '-r', '--name-only', commit]).split('\n').filter(Boolean).sort();
  const names = new Set(paths), cache = new Map(), texts = new Map();
  const check = p => {
    if (typeof p !== 'string' || p.startsWith('/') || /^[a-z]:/i.test(p) || p.includes('\\') || p.split('/').includes('..')) throw new Error(`不安全的路徑：${p}`);
  };
  function blob(p) {
    check(p);
    if (!names.has(p)) throw new StructureError('source', 'FILE_MISSING', `找不到檔案：${p}`);
    if (!cache.has(p)) cache.set(p, execFileSync('git', ['-C', repo, 'cat-file', 'blob', `${commit}:${p}`], { maxBuffer: 1 << 30, stdio: ['pipe','pipe','pipe'] }));
    return cache.get(p);
  }
  return {
    commit,
    list(prefix = '') { check(prefix); return paths.filter(p => p.startsWith(prefix)); },
    exists(p) { check(p); return names.has(p); },
    read(p) {
      if (!texts.has(p)) texts.set(p, blob(p).toString('utf8').replace(/^\uFEFF/, ''));
      return texts.get(p);
    },
    readBytes(p) { return Buffer.from(blob(p)); },
  };
}
