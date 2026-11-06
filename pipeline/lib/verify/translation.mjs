import { compare } from './common.mjs';

export function parseTranslation(text) {
  const table = new Map();
  text.split(/\r?\n/).forEach((line, index) => {
    const match = /^\s*[-*]\s+(.+?)\s+-\s+(.+)$/.exec(line);
    if (!match || !/[A-Za-z]/.test(match[1]) || !/\p{Script=Han}/u.test(match[2])) return;
    const key = match[1].trim().toLowerCase(), raw = match[2].trim();
    let clean = raw, previous;
    do { previous = clean; clean = clean.replace(/（[^（）]*）|\([^()]*\)/g, ''); } while (clean !== previous);
    const variants = clean.split(/[/／、]/).map((s) => s.trim()).filter(Boolean);
    const entry = table.get(key) ?? { variants: [], lines: [], entries: [] };
    entry.variants = [...new Set([...entry.variants, ...variants])].sort(compare);
    entry.lines.push(index + 1); entry.entries.push({ line: index + 1, raw }); table.set(key, entry);
  });
  return table;
}
export function translationConflicts(items, table) {
  const grouped = new Map();
  for (const item of [...items].sort((a, b) => compare(a?.id ?? '', b?.id ?? ''))) {
    const name = item?.name;
    if (name?.origin !== 'official' || typeof name.en !== 'string' || typeof name.zh !== 'string') continue;
    const key = name.en.toLowerCase(), entry = table.get(key);
    if (!entry || entry.variants.includes(name.zh)) continue;
    const conflict = grouped.get(key) ?? { en: name.en, officialZh: name.zh, translationZh: [...new Set(entry.entries.map((e) => e.raw))], lines: entry.lines, locations: [] };
    if (!conflict.locations.some((p) => p.id === item.id)) conflict.locations.push({ id: item.id, field: 'name' });
    grouped.set(key, conflict);
  }
  return [...grouped.entries()].sort(([a], [b]) => compare(a, b)).map(([, value]) => value);
}
