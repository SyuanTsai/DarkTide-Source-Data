import { readFileSync } from 'node:fs';

/** Stingray's 64-bit Murmur hash over UTF-8 bytes. */
export function murmur64(str) {
  const bytes = Buffer.from(str, 'utf8'), mask = (1n << 64n) - 1n, m = 0xc6a4a7935bd1e995n;
  let h = (BigInt(bytes.length) * m) & mask, i = 0;
  while (i + 8 <= bytes.length) {
    let k = bytes.readBigUInt64LE(i);
    k = (k * m) & mask; k ^= k >> 47n; k = (k * m) & mask;
    h ^= k; h = (h * m) & mask; i += 8;
  }
  if (i < bytes.length) {
    let tail = 0n;
    for (let j = 0; i + j < bytes.length; j++) tail |= BigInt(bytes[i + j]) << BigInt(8 * j);
    h ^= tail; h = (h * m) & mask;
  }
  h ^= h >> 47n; h = (h * m) & mask; h ^= h >> 47n;
  return h;
}

/** Return the eight-digit localization hash for a key. */
export function locHash(key) { return (murmur64(key) >> 32n).toString(16).padStart(8, '0'); }

/** Load an extracted text index and resolve localization keys. */
export function loadTextIndex(file) {
  const data = JSON.parse(readFileSync(file, 'utf8'));
  return { batch: data.batch, lookup(key) {
    const hash = locHash(key), a = data.resources.items[hash], b = data.resources.ui[hash];
    if (!a && !b) return null;
    if (a && b && (a.en !== b.en || a.zh !== b.zh)) return { conflict: true, hash };
    return { ...(a || b), resource: a ? 'items' : 'ui', hash };
  } };
}
