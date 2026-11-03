import { createHash } from 'node:crypto';
import { mkdir, readdir, readFile, writeFile } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath, pathToFileURL } from 'node:url';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '../../..');
const CANDIDATES = 'content/imports/generic/blessings-candidates.json';
const TERMS = 'docs/references/w15/term-candidates.json';
const LEGACY_BLESSINGS = 'content/legacy/mods/241ad76/Game Info/releases/1.13.X/blessings/data/BLESSING_WEAPON_MAP.json';
const LEGACY_ENTRIES = 'content/legacy/mods/241ad76/Game Info/releases/1.13.X/blessings/entries';
const OUTPUT_JSON = 'blessings-text.json';
const OUTPUT_REVIEW = 'blessings-text-review.md';

function invariant(condition, message) {
  if (!condition) throw new Error(message);
}

function lexical(left, right) {
  return left.localeCompare(right, 'en');
}

export function deriveLocalizationKeys(traitName) {
  const match = /^weapon_trait_bespoke_.+?_p\d+_(.+)$/u.exec(traitName);
  invariant(match, `Cannot derive localization keys from trait ${traitName}.`);
  const stem = `loc_trait_bespoke_${match[1]}`;
  return { nameKey: stem, descriptionKey: `${stem}_desc` };
}

export function applyTermName(nameEn, rawZhTw, terms) {
  const replacement = terms.get(nameEn);
  return replacement ? { nameZhTw: replacement, nameSource: 'term' } : { nameZhTw: rawZhTw, nameSource: 'raw' };
}

export function parseTermSourceText(sourceText) {
  const value = sourceText?.trim();
  if (!value?.startsWith('- ')) return null;
  const separator = value.lastIndexOf(' - ');
  if (separator <= 2 || separator === value.length - 3) return null;
  return { nameEn: value.slice(2, separator), nameZhTw: value.slice(separator + 3) };
}

export function chooseBlessingName({ nameEn, rawZhTw, retainedZhTw, baselineNameEn, terms }) {
  if (retainedZhTw && (baselineNameEn === undefined || baselineNameEn === nameEn)) {
    return { nameZhTw: retainedZhTw, nameSource: 'retained-1.13.1' };
  }
  return applyTermName(nameEn, rawZhTw, terms);
}

function formatValues(values) {
  const decimals = values.map((item) => item.decimal);
  const displayed = new Set(decimals).size === 1 ? decimals[0] : decimals.join('／');
  return `${displayed}${values.every((item) => item.unit === 'percent') ? '%' : ''}`;
}

export function renderDescriptionTemplate(template, formatValuesByKey) {
  const unresolved = new Set();
  const text = template.replace(/\{([A-Za-z0-9_]+):%s\}/gu, (placeholder, key) => {
    const values = formatValuesByKey[key];
    if (!values?.length) {
      unresolved.add(key);
      return placeholder;
    }
    return formatValues(values);
  });
  return { text, unresolvedPlaceholders: [...unresolved].sort(lexical) };
}

const COMPARISON_FIELDS = ['nameEn', 'nameZhTw', 'descriptionEnTemplate', 'descriptionZhTwTemplate'];

export function compareBlessingText(current, baseline) {
  const compared = new Map();
  for (const [traitName, item] of current) {
    const previous = baseline.get(traitName);
    if (!previous) {
      compared.set(traitName, { ...item, comparison: { status: 'new', changedFields: [] } });
      continue;
    }
    const changedFields = COMPARISON_FIELDS.filter((field) => item[field] !== previous[field]);
    compared.set(traitName, {
      ...item,
      comparison: { status: changedFields.length ? 'changed' : 'unchanged', changedFields },
      previous: changedFields.length ? Object.fromEntries(changedFields.map((field) => [field, previous[field]])) : undefined
    });
  }
  for (const [traitName, item] of baseline) {
    if (!current.has(traitName)) compared.set(traitName, { ...item, comparison: { status: 'removed', changedFields: [] } });
  }
  return new Map([...compared].sort(([left], [right]) => lexical(left, right)));
}

function sha256(value) {
  return createHash('sha256').update(value).digest('hex');
}

function parseJsonl(text) {
  return new Map(text.split(/\r?\n/u).filter(Boolean).map((line) => {
    const entry = JSON.parse(line);
    return [entry.hash, entry.text];
  }));
}

function termsFromFile(value) {
  const terms = new Map();
  for (const item of value.terms ?? []) {
    const term = parseTermSourceText(item.sourceText);
    if (term) terms.set(term.nameEn, term.nameZhTw);
  }
  return terms;
}

function localizationKeysFromText(text) {
  const name = /名稱鍵\s*`?(loc_[A-Za-z0-9_]+)`?[^\r\n]{0,160}?hash\s*`?([0-9a-f]{8})`?/iu.exec(text);
  const description = /描述鍵\s*`?(loc_[A-Za-z0-9_]+)`?[^\r\n]{0,160}?hash\s*`?([0-9a-f]{8})`?/iu.exec(text);
  return {
    nameKey: name?.[1], nameHash: name?.[2],
    descriptionKey: description?.[1], descriptionHash: description?.[2]
  };
}

async function legacyKeysFromEntries(entriesRoot) {
  const files = [];
  async function visit(directory) {
    for (const entry of await readdir(directory, { withFileTypes: true })) {
      const entryPath = path.join(directory, entry.name);
      if (entry.isDirectory()) await visit(entryPath);
      else if (entry.isFile() && /^weapon_trait_bespoke_.+\.md$/u.test(entry.name)) files.push(entryPath);
    }
  }
  await visit(entriesRoot);
  const keys = new Map();
  for (const traitPath of files) {
    const localizationPath = path.join(path.dirname(traitPath), 'LOCALIZATION_COMPARISON.md');
    try {
      const localization = localizationKeysFromText(await readFile(localizationPath, 'utf8'));
      if (localization.nameKey || localization.descriptionKey) keys.set(path.basename(traitPath, '.md'), localization);
    } catch {
      // A legacy source-definition page without localization evidence is not an override.
    }
  }
  return keys;
}

function variantRecordIdFromTrait(traitName) {
  const match = /^weapon_trait_bespoke_(.+)_p(\d+)_(.+)$/u.exec(traitName);
  if (!match) return null;
  const [, family, tier, suffix] = match;
  return `darktide:blessing-variant:${family}:p${tier}-${suffix.replaceAll('_', '-')}`;
}

async function legacyKeys(value, entriesRoot) {
  const blessingById = new Map((value.blessings ?? []).map((item) => [item.id, item]));
  const fromEntries = await legacyKeysFromEntries(entriesRoot);
  const fromMap = new Map((value.variants ?? []).map((variant) => {
    const blessing = blessingById.get(variant.blessing_id);
    return [variant.id, {
      origin: 'legacy-map',
      nameKey: blessing?.name_key,
      nameHash: blessing?.name_hash,
      descriptionKey: variant.description_key ?? blessing?.description_key,
      descriptionHash: variant.description_hash ?? blessing?.description_hash
    }];
  }));
  return new Map([...fromEntries, ...fromMap]);
}

function formatValuesForVariant(records, variant) {
  const values = {};
  for (const record of records) {
    if (record.kind !== 'claim' || record.payload?.targetRef?.recordId !== variant.recordId) continue;
    const match = /^description\.format_values\.([^.]+)\.(?:defined_tier_(\d+)_)?display_(percent|value)$/u.exec(record.payload.property ?? '');
    if (!match || record.payload.value?.status !== 'known') continue;
    const [, key, tier, displayKind] = match;
    const items = values[key] ?? [];
    items.push({ tier: Number(tier ?? 0), decimal: record.payload.value.decimal, unit: displayKind === 'percent' ? 'percent' : record.payload.value.unit });
    values[key] = items;
  }
  for (const key of Object.keys(values)) values[key].sort((left, right) => left.tier - right.tier);
  const unknown = new Set((variant.dataCoverage?.missing ?? [])
    .map((item) => /^\/payload\/formatValues\/([^/]+)$/u.exec(item.field ?? '')?.[1])
    .filter(Boolean));
  return { known: values, unknown };
}

function traitNameFromVariant(variant, legacyTraitNamesByRecordId, legacy) {
  const knownNames = legacyTraitNamesByRecordId.get(variant.recordId) ?? [];
  const knownName = knownNames.find((traitName) => legacy.get(traitName)?.origin === 'legacy-map')
    ?? knownNames.find((traitName) => legacy.get(traitName)?.nameHash)
    ?? knownNames[0];
  if (knownName) return knownName;
  const sourceId = variant.sourceRefs?.[0]?.sourceId ?? '';
  const sourceMatch = /generic-blessings-weapon-traits-bespoke-(.+)-[0-9a-f]{12}$/u.exec(sourceId);
  const variantMatch = /^darktide:blessing-variant:[^:]+:p\d+-(.+)$/u.exec(variant.recordId ?? '');
  invariant(sourceMatch && variantMatch, `Cannot recover trait identity from ${variant.recordId}.`);
  return `weapon_trait_bespoke_${sourceMatch[1].replaceAll('-', '_')}_${variantMatch[1].replaceAll('-', '_')}`;
}

export function findUniqueSharedLocalizationKey(keyToHash, sharedName, description) {
  const candidates = [...keyToHash.keys()].filter((key) => key.startsWith('loc_trait_bespoke_')
    && key.includes(sharedName)
    && key.endsWith('_desc') === description);
  return candidates.length === 1 ? candidates[0] : null;
}

function resolveLocalizationKeys({ traitName, legacy, keyToHash }) {
  const derived = deriveLocalizationKeys(traitName);
  const direct = legacy.get(traitName) ?? {};
  const sharedName = derived.nameKey.slice('loc_trait_bespoke_'.length);
  const nameKey = direct.nameKey
    ?? (keyToHash.has(derived.nameKey) ? derived.nameKey : findUniqueSharedLocalizationKey(keyToHash, sharedName, false))
    ?? derived.nameKey;
  const descriptionKey = direct.descriptionKey
    ?? (keyToHash.has(derived.descriptionKey) ? derived.descriptionKey : findUniqueSharedLocalizationKey(keyToHash, sharedName, true))
    ?? derived.descriptionKey;
  return { nameKey, descriptionKey, nameHash: direct.nameHash, descriptionHash: direct.descriptionHash };
}

async function loadBatch(batchDir) {
  const resolvedKeys = JSON.parse(await readFile(path.join(batchDir, 'resolved_keys.json'), 'utf8'));
  const summary = JSON.parse(await readFile(path.join(batchDir, 'extraction_summary.json'), 'utf8'));
  const [en, zhTw] = await Promise.all([
    readFile(path.join(batchDir, 'jsonl/en/items.jsonl'), 'utf8'),
    readFile(path.join(batchDir, 'jsonl/zh-tw/items.jsonl'), 'utf8')
  ]);
  const keyToHash = new Map();
  for (const [hash, keys] of Object.entries(resolvedKeys)) for (const key of keys) keyToHash.set(key, hash);
  const items = summary.resources?.find((item) => item.name === 'content/localization/items');
  invariant(items, `${batchDir} does not contain the content/localization/items resource.`);
  return { keyToHash, en: parseJsonl(en), zhTw: parseJsonl(zhTw), rawSha256: items.raw_sha256 };
}

async function loadRetainedContent(retainedContent) {
  if (!retainedContent) return new Map();
  const content = JSON.parse(await readFile(retainedContent, 'utf8'));
  const blessingNames = new Map((content.blessings ?? []).map((item) => [item.blessing_id, item.name_zh_tw]));
  return new Map((content.variants ?? []).map((item) => [item.variant_id, blessingNames.get(item.blessing_id)]).filter(([, name]) => typeof name === 'string'));
}

function lookupText(batch, key, fallbackHash) {
  const hash = batch.keyToHash.get(key) ?? fallbackHash ?? null;
  const nameEn = hash ? batch.en.get(hash) : undefined;
  const nameZhTw = hash ? batch.zhTw.get(hash) : undefined;
  return { hash, nameEn: nameEn ?? 'NOT_FOUND', nameZhTw: nameZhTw ?? 'NOT_FOUND' };
}

function buildTextRecords({ candidate, batch, terms, legacy, retained, baselineNames }) {
  const traits = new Map();
  const legacyTraitNamesByRecordId = new Map();
  for (const traitName of legacy.keys()) {
    const recordId = variantRecordIdFromTrait(traitName);
    if (!recordId) continue;
    legacyTraitNamesByRecordId.set(recordId, [...(legacyTraitNamesByRecordId.get(recordId) ?? []), traitName]);
  }
  for (const variant of candidate.records.filter((item) => item.kind === 'blessing-variant')) {
    const traitName = traitNameFromVariant(variant, legacyTraitNamesByRecordId, legacy);
    const localization = resolveLocalizationKeys({ traitName, legacy, keyToHash: batch.keyToHash });
    const name = lookupText(batch, localization.nameKey, localization.nameHash);
    const description = lookupText(batch, localization.descriptionKey, localization.descriptionHash);
    const adjusted = chooseBlessingName({
      nameEn: name.nameEn, rawZhTw: name.nameZhTw, retainedZhTw: retained.get(traitName),
      baselineNameEn: baselineNames?.get(traitName)?.nameEn, terms
    });
    const formatValues = formatValuesForVariant(candidate.records, variant);
    const rendered = renderDescriptionTemplate(description.nameZhTw, formatValues.known);
    traits.set(traitName, {
      traitName,
      nameKey: localization.nameKey,
      nameHash: name.hash ?? 'NOT_FOUND',
      descriptionKey: localization.descriptionKey,
      descriptionHash: description.hash ?? 'NOT_FOUND',
      nameEn: name.nameEn,
      nameZhTwRaw: name.nameZhTw,
      nameZhTw: adjusted.nameZhTw,
      nameSource: adjusted.nameSource,
      descriptionEnTemplate: description.nameEn,
      descriptionZhTwTemplate: description.nameZhTw,
      descriptionZhTw: rendered.text,
      unresolvedPlaceholders: rendered.unresolvedPlaceholders,
      unresolvedPlaceholderReasons: rendered.unresolvedPlaceholders.map((key) => ({
        key, reason: formatValues.unknown.has(key) ? 'candidate-unknown' : 'format-key-mismatch'
      }))
    });
  }
  return new Map([...traits].sort(([left], [right]) => lexical(left, right)));
}

function reviewMarkdown(records) {
  const changed = [...records.values()].filter((item) => ['new', 'changed'].includes(item.comparison?.status));
  const lines = ['# Generic blessing text review', '', `Items requiring review: ${changed.length}`, ''];
  for (const item of changed) {
    lines.push(`## ${item.traitName}`, '', `- English: ${item.nameEn}`, `- 繁中名稱: ${item.nameZhTw}`, `- 繁中說明: ${item.descriptionZhTw}`);
    if (item.comparison.status === 'new') lines.push('- 變動欄位: new');
    else {
      lines.push(`- 變動欄位: ${item.comparison.changedFields.join(', ')}`);
      for (const field of item.comparison.changedFields) lines.push(`  - 舊 ${field}: ${item.previous[field]}`);
    }
    lines.push('');
  }
  return `${lines.join('\n')}\n`;
}

export async function buildGenericBlessingText({ textBatch, baselineBatch, retainedContent, gameBuild, sourceRoot = ROOT } = {}) {
  invariant(textBatch, '--text-batch is required.');
  invariant(/^\d+$/u.test(String(gameBuild)), '--game-build must be numeric.');
  const [candidate, termCandidates, legacyData, batch] = await Promise.all([
    readFile(path.join(sourceRoot, CANDIDATES), 'utf8').then(JSON.parse),
    readFile(path.join(sourceRoot, TERMS), 'utf8').then(JSON.parse),
    readFile(path.join(sourceRoot, LEGACY_BLESSINGS), 'utf8').then(JSON.parse),
    loadBatch(textBatch)
  ]);
  const [legacy, retained] = await Promise.all([
    legacyKeys(legacyData, path.join(sourceRoot, LEGACY_ENTRIES)),
    loadRetainedContent(retainedContent)
  ]);
  const terms = termsFromFile(termCandidates);
  const baseline = baselineBatch ? await loadBatch(baselineBatch) : null;
  const baselineRecords = baseline ? buildTextRecords({ candidate, batch: baseline, terms, legacy, retained, baselineNames: null }) : null;
  const current = buildTextRecords({ candidate, batch, terms, legacy, retained, baselineNames: baselineRecords });
  const records = baseline ? compareBlessingText(current, baselineRecords) : current;
  const output = {
    schemaVersion: 'generic-blessing-text/1.0.0',
    batch: { gameBuild: Number(gameBuild), rawSha256: batch.rawSha256 },
    ...(baseline ? { baseline: { rawSha256: baseline.rawSha256 } } : {}),
    traits: [...records.values()]
  };
  return { output, review: reviewMarkdown(records) };
}

export async function writeGenericBlessingText({ textBatch, baselineBatch, retainedContent, gameBuild, outputDir, sourceRoot = ROOT } = {}) {
  invariant(outputDir, '--output-dir is required.');
  const result = await buildGenericBlessingText({ textBatch, baselineBatch, retainedContent, gameBuild, sourceRoot });
  const resolved = path.resolve(outputDir);
  await mkdir(resolved, { recursive: true });
  const json = `${JSON.stringify(result.output, null, 2)}\n`;
  await Promise.all([
    writeFile(path.join(resolved, OUTPUT_JSON), json),
    writeFile(path.join(resolved, OUTPUT_REVIEW), result.review)
  ]);
  return { ...result, outputPaths: [path.join(resolved, OUTPUT_JSON), path.join(resolved, OUTPUT_REVIEW)], outputSha256: sha256(json) };
}

function option(argv, name) {
  const index = argv.indexOf(name);
  if (index < 0) return undefined;
  const value = argv[index + 1];
  if (!value || value.startsWith('--')) throw new Error(`${name} requires a value.`);
  return value;
}

async function main(argv) {
  const known = new Set(['--text-batch', '--baseline-batch', '--retained-content', '--game-build', '--output-dir']);
  for (let index = 0; index < argv.length; index += 2) if (!known.has(argv[index]) || !argv[index + 1]) throw new Error('Usage: node scripts/content/imports/generic-blessing-text.mjs --text-batch <directory> [--baseline-batch <directory>] [--retained-content <content.json>] --game-build <number> --output-dir content/imports/generic');
  const result = await writeGenericBlessingText({ textBatch: option(argv, '--text-batch'), baselineBatch: option(argv, '--baseline-batch'), retainedContent: option(argv, '--retained-content'), gameBuild: option(argv, '--game-build'), outputDir: option(argv, '--output-dir') });
  process.stdout.write(`Generic blessing text: ${result.output.traits.length} traits.\n${result.outputPaths.join('\n')}\n`);
}

if (process.argv[1] && pathToFileURL(path.resolve(process.argv[1])).href === import.meta.url) {
  main(process.argv.slice(2)).catch((error) => {
    process.stderr.write(`${error.stack ?? error}\n`);
    process.exitCode = 1;
  });
}
