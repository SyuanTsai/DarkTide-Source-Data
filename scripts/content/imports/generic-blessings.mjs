import { createHash } from 'node:crypto';
import { execFileSync } from 'node:child_process';
import { readFile, mkdir, writeFile } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath, pathToFileURL } from 'node:url';

import {
  getTableArray,
  getTableEntries,
  getTableField,
  parseLuaStatic,
  tokenizeLua,
  toPlainValue
} from '../lib/lua-static-reader.mjs';
import { validateSourceContractFromDisk } from '../contract-validator.mjs';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '../../..');
const TRAIT_REGISTRY = 'scripts/settings/equipment/weapon_traits/weapon_trait_templates.lua';
const WEAPON_REGISTRY = 'scripts/settings/equipment/weapon_templates/weapon_templates.lua';
const BASE_AUTHORING = 'content/authoring/v2/w07-weapons.json';
const OUTPUT_CANDIDATE = 'blessings-candidates.json';
const OUTPUT_SNAPSHOT = 'blessings-snapshot.json';
const GAME_RELEASE_ID = 'darktide:1.13.4';
const PUBLIC_REPOSITORY = 'https://github.com/Aussiemon/Darktide-Source-Code';
const GAME_BUILD = '26101089';
const GAME_VERSION = '1.13.4';
const TOOL_NAME = 'generic-blessings-static-import';

export const PINNED_COMMIT = 'e46b8926cfa3fa35503e4b80b15aab7a804314e4';

const sha256 = (bytes) => createHash('sha256').update(bytes).digest('hex');
const jsonBytes = (value) => Buffer.from(`${JSON.stringify(value, null, 2)}\n`, 'utf8');
const lexical = (left, right) => left < right ? -1 : left > right ? 1 : 0;
const canonical = (value) => {
  if (Array.isArray(value)) return `[${value.map(canonical).join(',')}]`;
  if (value && typeof value === 'object') {
    return `{${Object.keys(value).sort().map((key) => `${JSON.stringify(key)}:${canonical(value[key])}`).join(',')}}`;
  }
  return JSON.stringify(value);
};

function invariant(condition, message) {
  if (!condition) throw new Error(message);
}

function appendUnique(target, seen, values, keyOf, label) {
  for (const value of values ?? []) {
    const key = keyOf(value);
    invariant(key, `${label} entry is missing its merge identity.`);
    if (!seen.has(key)) {
      seen.set(key, value);
      target.push(structuredClone(value));
      continue;
    }
    invariant(canonical(seen.get(key)) === canonical(value), `Conflicting ${label} entry: ${key}`);
  }
}

/**
 * Combines existing authoring with a minimal generic-blessing candidate without
 * mutating either input. Candidate record IDs must be entirely new so promotion
 * cannot replace an already-authored record implicitly.
 */
export function mergeGenericBlessingsCandidate({ authoringBundles, candidate } = {}) {
  invariant(Array.isArray(authoringBundles) && authoringBundles.length > 0, 'authoringBundles must contain at least one Source contract bundle.');
  invariant(candidate && typeof candidate === 'object', 'candidate must be a Source contract bundle.');
  const bundles = [...authoringBundles, candidate];
  const first = authoringBundles[0];
  for (const bundle of bundles) {
    invariant(bundle?.schemaVersion === first.schemaVersion, 'All merged bundles must use the same schemaVersion.');
    invariant(bundle?.contractKind === first.contractKind, 'All merged bundles must use the same contractKind.');
    invariant(bundle?.fixtureOnly === first.fixtureOnly, 'All merged bundles must use the same fixtureOnly value.');
  }

  const existingRecordIds = new Set(authoringBundles.flatMap((bundle) => (bundle.records ?? []).map((record) => record.recordId)));
  for (const item of candidate.records ?? []) {
    invariant(!existingRecordIds.has(item.recordId), `Candidate recordId already exists in authoring: ${item.recordId}`);
  }

  const merged = {
    schemaVersion: first.schemaVersion,
    contractKind: first.contractKind,
    fixtureOnly: first.fixtureOnly,
    publicationEligible: bundles.every((bundle) => bundle.publicationEligible === true),
    gameReleases: [],
    sourceSnapshots: [],
    sourceRefs: [],
    records: [],
    tombstones: [],
    reviewReceipts: []
  };
  const registries = [
    ['gameReleases', (item) => item.gameReleaseId],
    ['sourceSnapshots', (item) => `${item.gameReleaseId}\0${item.snapshot?.snapshotId}`],
    ['sourceRefs', (item) => `${item.gameReleaseId}\0${item.sourceId}`],
    ['records', (item) => `${item.gameReleaseId}\0${item.recordId}`],
    ['tombstones', (item) => `${item.gameReleaseId}\0${item.recordId}`],
    ['reviewReceipts', (item) => canonical(item)]
  ];
  for (const [field, keyOf] of registries) {
    const seen = new Map();
    for (const bundle of bundles) appendUnique(merged[field], seen, bundle[field], keyOf, field);
  }
  return merged;
}

function git(sourceCodeRepo, args, options = {}) {
  const normalized = path.resolve(sourceCodeRepo).replaceAll('\\', '/');
  return execFileSync('git', [
    '-c', `safe.directory=${normalized}`,
    '-C', path.resolve(sourceCodeRepo),
    ...args
  ], { maxBuffer: 64 * 1024 * 1024, ...options });
}

function makeSourceReader(sourceCodeRepo, commit) {
  const treeText = git(sourceCodeRepo, ['ls-tree', '-r', commit], { encoding: 'utf8' });
  const tree = new Map();
  for (const line of treeText.split(/\r?\n/u)) {
    if (!line) continue;
    const match = /^\d+\s+blob\s+([0-9a-f]{40})\t(.+)$/u.exec(line);
    if (match) tree.set(match[2], match[1]);
  }
  const files = new Map();
  const read = (sourcePath) => {
    if (files.has(sourcePath)) return files.get(sourcePath).text;
    const blob = tree.get(sourcePath);
    invariant(blob, `Pinned Git tree does not contain ${sourcePath}`);
    const bytes = git(sourceCodeRepo, ['cat-file', 'blob', `${commit}:${sourcePath}`]);
    const text = bytes.toString('utf8');
    invariant(!text.includes('\uFFFD'), `Pinned Lua source is not valid UTF-8: ${sourcePath}`);
    files.set(sourcePath, { path: sourcePath, blob, sha256: sha256(bytes), text });
    return text;
  };
  return { read, files, paths: [...tree.keys()] };
}

function registryBespokePaths(source) {
  const paths = [];
  for (const match of source.matchAll(/_create_entry\(\s*["']([^"']+)["']/gu)) {
    if (match[1].startsWith('scripts/settings/equipment/weapon_traits/weapon_traits_bespoke_')) {
      paths.push(`${match[1]}.lua`);
    }
  }
  invariant(paths.length > 0 && new Set(paths).size === paths.length, 'Bespoke trait registry must contain unique static _create_entry paths.');
  return paths;
}

function weaponTemplateInventory(source) {
  const parsed = parseLuaStatic(source, { filename: WEAPON_REGISTRY, allowUnsupported: true });
  const groups = getTableArray(parsed.locals.template_groups);
  const templates = [];
  for (const group of groups) {
    const values = getTableArray(group).map((node) => toPlainValue(node));
    invariant(values.length >= 1 && values.every((value) => typeof value === 'string'), 'Weapon template group must be a static string list.');
    const [directory, ...names] = values;
    for (const templateKey of names) templates.push({ templateKey, path: `scripts/settings/equipment/weapon_templates/${directory}/${templateKey}.lua` });
  }
  for (const node of getTableArray(parsed.locals.template_names)) {
    const templateKey = toPlainValue(node);
    invariant(typeof templateKey === 'string', 'Standalone weapon template name must be a static string.');
    templates.push({ templateKey, path: `scripts/settings/equipment/weapon_templates/${templateKey}.lua` });
  }
  invariant(new Set(templates.map((item) => item.templateKey)).size === templates.length, 'Weapon template registry contains duplicate template keys.');
  return templates;
}

function bespokeRequiresAppended(source, filename) {
  const tokens = tokenizeLua(source, { filename });
  const aliases = new Map();
  for (let index = 0; index < tokens.length - 4; index += 1) {
    if (tokens[index].value !== 'local' || tokens[index + 1].type !== 'identifier' || tokens[index + 2].value !== '=' || tokens[index + 3].value !== 'require') continue;
    let stringToken = null;
    if (tokens[index + 4].value === '(' && tokens[index + 5]?.type === 'string') stringToken = tokens[index + 5];
    else if (tokens[index + 4].type === 'string') stringToken = tokens[index + 4];
    if (stringToken?.value.startsWith('scripts/settings/equipment/weapon_traits/weapon_traits_bespoke_')) {
      aliases.set(tokens[index + 1].value, stringToken.value);
    }
  }
  for (let pass = 0; pass < 3; pass += 1) {
    for (let index = 0; index < tokens.length - 8; index += 1) {
      if (tokens[index].value !== 'local' || tokens[index + 1].type !== 'identifier' || tokens[index + 2].value !== '='
        || tokens[index + 3].value !== 'table' || tokens[index + 4].value !== '.'
        || !['ukeys', 'keys'].includes(tokens[index + 5].value) || tokens[index + 6].value !== '(') continue;
      const sourceAlias = tokens[index + 7].value;
      if (aliases.has(sourceAlias)) aliases.set(tokens[index + 1].value, aliases.get(sourceAlias));
    }
  }
  const appended = new Set();
  for (let index = 0; index < tokens.length - 5; index += 1) {
    if (tokens[index].value !== 'table' || tokens[index + 1].value !== '.' || tokens[index + 2].value !== 'append' || tokens[index + 3].value !== '(') continue;
    let depth = 1;
    for (let cursor = index + 4; cursor < tokens.length && depth > 0; cursor += 1) {
      if (tokens[cursor].value === '(') depth += 1;
      else if (tokens[cursor].value === ')') depth -= 1;
      else if (depth > 0 && tokens[cursor].type === 'identifier' && aliases.has(tokens[cursor].value)) appended.add(aliases.get(tokens[cursor].value));
    }
  }
  return [...appended];
}

function nodeString(node) {
  return node?.type === 'string' ? node.value : null;
}

function pathParts(pathNode) {
  return getTableArray(pathNode).map((node) => {
    if (node.type === 'string') return node.value;
    if (node.type === 'reference') return { ref: node.ref };
    if (node.type === 'number' && Number.isInteger(node.value) && node.value >= 1) return node.value;
    throw new Error(`Trait find_value.path contains unsupported ${node.type} component at line ${node.startLine}.`);
  });
}

function keyMatches(node, part) {
  if (typeof part === 'number') return false;
  if (typeof part === 'string') {
    return (node?.type === 'string' && node.value === part)
      || (node?.type === 'reference' && node.ref.endsWith(`.${part}`));
  }
  return (node?.type === 'reference' && node.ref === part.ref)
    || (node?.type === 'string' && node.value === part.ref.split('.').at(-1));
}

function resolveTraitPath(root, parts, locals) {
  let current = root;
  const resolvedPath = [];
  for (const part of parts) {
    if (current?.type === 'reference' && !current.ref.includes('.') && locals[current.ref]) current = locals[current.ref];
    invariant(current?.type === 'table', `Trait path ${parts.map((item) => typeof item === 'string' ? item : item.ref).join('.')} crossed a non-table node.`);
    const entry = typeof part === 'number'
      ? getTableEntries(current).filter((item) => item.key == null)[part - 1]
      : getTableEntries(current).find((item) => keyMatches(item.key, part));
    invariant(entry, `Trait path component ${typeof part === 'string' ? part : part.ref} was not found in a tier table.`);
    resolvedPath.push(entry.key?.type === 'reference' ? { ref: entry.key.ref } : part);
    current = entry.value;
  }
  if (current?.type === 'reference' && !current.ref.includes('.') && locals[current.ref]) current = locals[current.ref];
  return { node: current, resolvedPath };
}

function decimalFromNode(node) {
  invariant(node?.type === 'number', `Tier value at line ${node?.startLine ?? '?'} must be a numeric Lua literal or local numeric constant.`);
  const raw = node.raw.trim();
  if (!/[eE]/u.test(raw)) return raw.startsWith('+') ? raw.slice(1) : raw;
  const value = node.value;
  const rendered = String(value);
  invariant(!/[eE]/u.test(rendered), `Scientific tier literal ${raw} is outside the contract decimal range.`);
  return rendered;
}

function unitForFormat(formatNode) {
  const formatType = nodeString(getTableField(formatNode, 'format_type'));
  return formatType === 'percentage' ? 'ratio' : 'point';
}

function traitIdentity(traitName) {
  const match = /^weapon_trait_bespoke_(.+)_p(\d+)_(.+)$/u.exec(traitName);
  invariant(match, `Bespoke trait name does not match the stable ID convention: ${traitName}`);
  const family = match[1];
  const suffix = match[3].replaceAll('_', '-');
  const stable = `${family}:p${match[2]}-${suffix}`;
  return {
    family,
    blessingId: `darktide:blessing:${stable}`,
    variantId: `darktide:blessing-variant:${stable}`
  };
}

function sourceLink(sourceId) {
  return { sourceId, gameReleaseId: GAME_RELEASE_ID };
}

function record(recordId, kind, payload, sourceId, dataCoverage, reviewTargets) {
  return {
    recordId,
    kind,
    owner: 'source',
    gameReleaseId: GAME_RELEASE_ID,
    sourceRefs: [sourceLink(sourceId)],
    dataCoverage,
    reviewState: 'pending',
    payload,
    reviewTargets
  };
}

function extractTrait({ traitName, traitNode, parsed, sourcePath, sourceId, weaponRecordIds, linkedTemplates }) {
  const identity = traitIdentity(traitName);
  const formatValues = getTableField(traitNode, 'format_values');
  const traitOverrideFormats = getTableEntries(formatValues).filter((entry) => {
    const findValue = getTableField(entry.value, 'find_value');
    return nodeString(getTableField(findValue, 'find_value_type')) === 'trait_override';
  });
  const valueManipulations = getTableEntries(formatValues)
    .map((entry) => getTableField(entry.value, 'value_manipulation'))
    .filter((node) => node?.type === 'function');
  const buffs = getTableField(traitNode, 'buffs');
  const firstBuffTiers = getTableEntries(buffs).map((entry) => getTableArray(entry.value)).find((items) => items.length > 0) ?? [];
  invariant(firstBuffTiers.length > 0, `${traitName} has no static buff tiers.`);
  const definedTiers = firstBuffTiers.map((_, index) => index + 1);
  const tierTraces = [];
  const tierSources = [];
  let tierValues;

  if (traitOverrideFormats.length > 0) {
    const formatNode = traitOverrideFormats[0].value;
    const findValue = getTableField(formatNode, 'find_value');
    const buffName = nodeString(getTableField(findValue, 'buff_template_name'));
    const parts = pathParts(getTableField(findValue, 'path'));
    const buffTiers = getTableArray(getTableField(buffs, buffName));
    invariant(buffTiers.length === definedTiers.length, `${traitName} trait_override tiers do not match its defined tier count.`);
    tierValues = buffTiers.map((tierNode, index) => {
      const resolved = resolveTraitPath(tierNode, parts, parsed.locals);
      tierSources.push({ tier: index + 1, path: resolved.resolvedPath, sourceNode: resolved.node });
      if (resolved.node.type !== 'number') {
        return { tier: index + 1, value: { status: 'unknown', reasonCode: 'NOT_EXPOSED_BY_SOURCE' } };
      }
      const decimal = decimalFromNode(resolved.node);
      tierTraces.push({ tier: index + 1, path: resolved.resolvedPath, decimal, sourceNode: resolved.node });
      return { tier: index + 1, value: { status: 'known', decimal, unit: unitForFormat(formatNode) } };
    });
  } else {
    tierValues = definedTiers.map((tier) => ({
      tier,
      value: { status: 'unknown', reasonCode: 'NOT_EXPOSED_BY_SOURCE' }
    }));
  }

  const mappedWeaponIds = [...new Set(linkedTemplates.map((template) => weaponRecordIds.get(template)).filter(Boolean))].sort(lexical);
  const missingTemplates = linkedTemplates.filter((template) => !weaponRecordIds.has(template));
  const variantMissing = [{ field: '/payload/obtainableTiers', reasonCode: 'NOT_VERIFIED' }];
  if (linkedTemplates.length === 0 || mappedWeaponIds.length === 0) {
    variantMissing.push({ field: '/payload/weaponRefs', reasonCode: 'NOT_IMPORTED' });
  } else if (missingTemplates.length > 0) {
    variantMissing.push({ field: '/payload/weaponRefs/unmapped-source-templates', reasonCode: 'NOT_IMPORTED' });
  }
  if (traitOverrideFormats.length === 0 || tierValues.some((item) => item.value.status === 'unknown')) {
    variantMissing.push({ field: '/payload/tierValues/source-values', reasonCode: 'NOT_IMPORTED' });
  } else if (traitOverrideFormats.length > 1) {
    variantMissing.push({ field: '/payload/tierValues/additional-format-values', reasonCode: 'NOT_IMPORTED' });
  }

  const variantPayload = {
    blessingRef: { recordId: identity.blessingId, gameReleaseId: GAME_RELEASE_ID },
    weaponRefs: mappedWeaponIds.map((recordId) => ({ recordId, gameReleaseId: GAME_RELEASE_ID })),
    definedTiers,
    obtainableTiers: { status: 'unknown', reasonCode: 'NOT_VERIFIED' },
    tierValues
  };
  const blessing = record(
    identity.blessingId,
    'blessing',
    {
      nameKey: { status: 'unknown', reasonCode: 'NOT_VERIFIED' },
      variantRefs: [{ recordId: identity.variantId, gameReleaseId: GAME_RELEASE_ID }]
    },
    sourceId,
    { status: 'partial', missing: [{ field: '/payload/nameKey', reasonCode: 'NOT_VERIFIED' }] },
    [
      { fieldPath: '/payload/nameKey', dimension: 'identity' },
      { fieldPath: '/payload/variantRefs', dimension: 'evidence' }
    ]
  );
  const variant = record(
    identity.variantId,
    'blessing-variant',
    variantPayload,
    sourceId,
    { status: 'partial', missing: variantMissing },
    [
      { fieldPath: '/payload/blessingRef', dimension: 'identity' },
      { fieldPath: '/payload/weaponRefs', dimension: 'evidence' },
      { fieldPath: '/payload/definedTiers', dimension: 'technical' },
      { fieldPath: '/payload/obtainableTiers', dimension: 'context' },
      { fieldPath: '/payload/tierValues', dimension: 'technical' }
    ]
  );
  return {
    traitName,
    sourcePath,
    startLine: traitNode.startLine,
    endLine: traitNode.endLine,
    ...identity,
    traitOverrideFormatValueCount: traitOverrideFormats.length,
    valueManipulations,
    linkedTemplates,
    missingTemplates,
    tierTraces,
    tierSources,
    variantPayload,
    blessing,
    variant
  };
}

function snapshotFromFiles(files, commit) {
  const rows = [...files.values()]
    .map(({ path: sourcePath, blob, sha256: artifactSha256 }) => ({ path: sourcePath, blob, sha256: artifactSha256 }))
    .sort((left, right) => lexical(left.path, right.path));
  const manifestSha256 = sha256(Buffer.from(JSON.stringify(rows), 'utf8'));
  const contentSha256 = sha256(Buffer.from(rows.map((row) => `${row.path}\0${row.sha256}\n`).join(''), 'utf8'));
  return {
    snapshotId: `generic-blessings-${GAME_VERSION}-${commit.slice(0, 12)}`,
    commit,
    manifestSha256,
    contentSha256,
    rows
  };
}

function generatedSourceId(sourcePath, commit) {
  const basename = path.posix.basename(sourcePath, '.lua').replaceAll('_', '-');
  return `public-code:generic-blessings-${basename}-${commit.slice(0, 12)}`;
}

export async function buildGenericBlessings({ sourceCodeRepo, commit = PINNED_COMMIT, sourceRoot = ROOT } = {}) {
  invariant(sourceCodeRepo, 'sourceCodeRepo is required. Set --source-code-repo or DARKTIDE_SOURCE_CODE_REPO.');
  invariant(commit === PINNED_COMMIT, `Generic blessing import is pinned to ${PINNED_COMMIT}.`);
  const reader = makeSourceReader(sourceCodeRepo, commit);
  const traitPaths = registryBespokePaths(reader.read(TRAIT_REGISTRY));
  const registeredWeaponTemplates = weaponTemplateInventory(reader.read(WEAPON_REGISTRY));
  const registeredByPath = new Map(registeredWeaponTemplates.map((item) => [item.path, item.templateKey]));
  const weaponTemplates = reader.paths
    .filter((sourcePath) => sourcePath.startsWith('scripts/settings/equipment/weapon_templates/') && sourcePath.endsWith('.lua'))
    .map((sourcePath) => ({
      path: sourcePath,
      templateKey: registeredByPath.get(sourcePath) ?? path.posix.basename(sourcePath, '.lua')
    }))
    .sort((left, right) => lexical(left.path, right.path));
  const linkedTemplatesByBespoke = new Map();
  let linkedWeaponTemplateCount = 0;
  for (const template of weaponTemplates) {
    const required = bespokeRequiresAppended(reader.read(template.path), template.path);
    if (required.length > 0) linkedWeaponTemplateCount += 1;
    for (const requirePath of required) {
      const basename = path.posix.basename(requirePath);
      const items = linkedTemplatesByBespoke.get(basename) ?? [];
      items.push(template.templateKey);
      linkedTemplatesByBespoke.set(basename, items);
    }
  }

  const base = JSON.parse(await readFile(path.join(sourceRoot, BASE_AUTHORING), 'utf8'));
  const approvedGolden = base.records.find((item) => item.recordId === 'darktide:blessing-variant:chainaxe:p1-movement-speed-on-activation'
    && item.gameReleaseId === GAME_RELEASE_ID && item.reviewState === 'approved');
  invariant(approvedGolden, 'Approved 1.13.4 chainaxe blessing-variant golden record is missing.');
  const existingRecordIds = new Set(base.records.map((item) => item.recordId));
  const weaponRecordIds = new Map(base.records
    .filter((item) => item.gameReleaseId === GAME_RELEASE_ID && item.kind === 'weapon' && typeof item.payload?.templateKey === 'string')
    .map((item) => [item.payload.templateKey, item.recordId]));

  const extractedTraits = [];
  const traitFiles = [];
  for (const sourcePath of traitPaths) {
    const source = reader.read(sourcePath);
    const parsed = parseLuaStatic(source, { filename: sourcePath, allowUnsupported: true });
    invariant(parsed.returned?.type === 'table', `${sourcePath} must return a static templates table.`);
    const traitEntries = getTableEntries(parsed.returned).filter((entry) => entry.key?.type === 'string');
    const sourceId = generatedSourceId(sourcePath, commit);
    const basename = path.posix.basename(sourcePath, '.lua');
    const linkedTemplates = [...new Set(linkedTemplatesByBespoke.get(basename) ?? [])].sort(lexical);
    const traits = traitEntries.map((entry) => extractTrait({
      traitName: entry.key.value,
      traitNode: entry.value,
      parsed,
      sourcePath,
      sourceId,
      weaponRecordIds,
      linkedTemplates
    }));
    extractedTraits.push(...traits);
    traitFiles.push({ sourcePath, sourceId, traits, returned: parsed.returned });
  }
  extractedTraits.sort((left, right) => lexical(left.traitName, right.traitName));

  const sourceSnapshot = snapshotFromFiles(reader.files, commit);
  const toolSha256 = sha256(await readFile(fileURLToPath(import.meta.url)));
  const genericSourceRefs = traitFiles.map(({ sourcePath, sourceId, traits, returned }) => {
    const file = reader.files.get(sourcePath);
    const startLine = traits.length ? Math.min(...traits.map((trait) => trait.startLine)) : returned.startLine;
    const endLine = traits.length ? Math.max(...traits.map((trait) => trait.endLine)) : returned.endLine;
    return {
      sourceId,
      gameReleaseId: GAME_RELEASE_ID,
      sourceKind: 'public-code',
      repository: PUBLIC_REPOSITORY,
      publicUrl: `${PUBLIC_REPOSITORY}/blob/${commit}/${sourcePath}`,
      commit,
      path: sourcePath,
      gameBuild: GAME_BUILD,
      snapshot: {
        snapshotId: sourceSnapshot.snapshotId,
        commit,
        manifestSha256: sourceSnapshot.manifestSha256,
        contentSha256: sourceSnapshot.contentSha256
      },
      tool: { name: TOOL_NAME, version: '1.0.0', sha256: toolSha256 },
      artifactSha256: file.sha256,
      safeSummary: `Pinned public Lua source parsed without execution. ${traits.length} bespoke traits span lines ${startLine}-${endLine}; generated records, when present, are derived from parsed trait tables and tier nodes.`
    };
  }).sort((left, right) => lexical(left.path, right.path));

  const generatedRecords = extractedTraits.flatMap((trait) => [trait.blessing, trait.variant])
    .filter((item) => !existingRecordIds.has(item.recordId))
    .sort((left, right) => lexical(left.recordId, right.recordId));
  const gameRelease = base.gameReleases.find((item) => item.gameReleaseId === GAME_RELEASE_ID);
  invariant(gameRelease, `Authoring bundle is missing ${GAME_RELEASE_ID}.`);
  const candidate = {
    schemaVersion: base.schemaVersion,
    contractKind: base.contractKind,
    fixtureOnly: false,
    publicationEligible: false,
    gameReleases: [structuredClone(gameRelease)],
    sourceSnapshots: [{
      gameReleaseId: GAME_RELEASE_ID,
      snapshot: {
        snapshotId: sourceSnapshot.snapshotId,
        commit,
        manifestSha256: sourceSnapshot.manifestSha256,
        contentSha256: sourceSnapshot.contentSha256
      }
    }],
    sourceRefs: genericSourceRefs,
    records: generatedRecords,
    tombstones: [],
    reviewReceipts: []
  };

  const unlinkedBespokeFiles = traitPaths
    .map((sourcePath) => path.posix.basename(sourcePath, '.lua'))
    .filter((basename) => !(linkedTemplatesByBespoke.get(basename)?.length))
    .sort(lexical);
  const stats = {
    bespokeFileCount: traitPaths.length,
    traitCount: extractedTraits.length,
    tierValueRowCount: extractedTraits.reduce((sum, trait) => sum + trait.variantPayload.definedTiers.length, 0),
    oneTraitOverrideFormatValueCount: extractedTraits.filter((trait) => trait.traitOverrideFormatValueCount === 1).length,
    multipleTraitOverrideFormatValueCount: extractedTraits.filter((trait) => trait.traitOverrideFormatValueCount >= 2).length,
    zeroTraitOverrideFormatValueCount: extractedTraits.filter((trait) => trait.traitOverrideFormatValueCount === 0).length,
    valueManipulationCount: extractedTraits.filter((trait) => trait.valueManipulations.length > 0).length,
    weaponTemplateCount: linkedWeaponTemplateCount,
    linkedBespokeFileCount: linkedTemplatesByBespoke.size,
    unlinkedBespokeFiles
  };
  const snapshot = {
    schemaVersion: 'generic-blessings-snapshot/1.0.0',
    repository: PUBLIC_REPOSITORY,
    gameReleaseId: GAME_RELEASE_ID,
    commit,
    snapshot: {
      snapshotId: sourceSnapshot.snapshotId,
      commit,
      manifestSha256: sourceSnapshot.manifestSha256,
      contentSha256: sourceSnapshot.contentSha256
    },
    files: sourceSnapshot.rows,
    stats,
    valueManipulations: extractedTraits.flatMap((trait) => trait.valueManipulations.map((node) => ({
      traitName: trait.traitName,
      path: trait.sourcePath,
      startLine: node.startLine,
      endLine: node.endLine,
      raw: node.raw
    })))
  };
  const merged = mergeGenericBlessingsCandidate({ authoringBundles: [base], candidate });
  const validation = await validateSourceContractFromDisk(merged, { sourceRoot });
  if (!validation.valid) throw new Error(`Generated generic blessing Source candidate is invalid:\n${JSON.stringify(validation.issues, null, 2)}`);
  return { candidate, merged, snapshot, stats, extractedTraits, approvedGolden, generatedRecords, validation };
}

export async function writeGenericBlessings({ sourceCodeRepo, commit = PINNED_COMMIT, outputDir, sourceRoot = ROOT } = {}) {
  invariant(outputDir, 'outputDir is required. Pass --output-dir.');
  const built = await buildGenericBlessings({ sourceCodeRepo, commit, sourceRoot });
  const resolved = path.resolve(outputDir);
  await mkdir(resolved, { recursive: true });
  const outputs = [
    { filename: OUTPUT_CANDIDATE, bytes: jsonBytes(built.candidate) },
    { filename: OUTPUT_SNAPSHOT, bytes: jsonBytes(built.snapshot) }
  ];
  for (const output of outputs) await writeFile(path.join(resolved, output.filename), output.bytes);
  return {
    ...built,
    outputPaths: outputs.map((output) => path.join(resolved, output.filename)),
    outputSizes: Object.fromEntries(outputs.map((output) => [output.filename, output.bytes.length]))
  };
}

function argument(argv, name) {
  const index = argv.indexOf(name);
  if (index < 0) return undefined;
  const value = argv[index + 1];
  if (!value || value.startsWith('--')) throw new Error(`${name} requires a value.`);
  return value;
}

async function main(argv) {
  const known = new Set(['--source-code-repo', '--commit', '--output-dir']);
  for (let index = 0; index < argv.length; index += 2) {
    if (!known.has(argv[index]) || !argv[index + 1]) throw new Error('Usage: node scripts/content/imports/generic-blessings.mjs --source-code-repo <repo> --commit <commit> --output-dir <directory>');
  }
  const sourceCodeRepo = argument(argv, '--source-code-repo');
  const commit = argument(argv, '--commit') ?? PINNED_COMMIT;
  const outputDir = argument(argv, '--output-dir');
  if (!sourceCodeRepo || !outputDir) throw new Error('Usage: node scripts/content/imports/generic-blessings.mjs --source-code-repo <repo> --commit <commit> --output-dir <directory>');
  const result = await writeGenericBlessings({ sourceCodeRepo, commit, outputDir });
  process.stdout.write(`Generic blessing candidate valid: ${result.stats.traitCount} traits, ${result.generatedRecords.length} generated records.\n${result.outputPaths.map((item) => path.resolve(item)).join('\n')}\n`);
}

if (process.argv[1] && pathToFileURL(path.resolve(process.argv[1])).href === import.meta.url) {
  main(process.argv.slice(2)).catch((error) => {
    process.stderr.write(`${error.stack ?? error}\n`);
    process.exitCode = 1;
  });
}
