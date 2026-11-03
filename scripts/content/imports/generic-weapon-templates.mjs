import { createHash } from 'node:crypto';
import { execFileSync } from 'node:child_process';
import { mkdir, readFile, rm, writeFile } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath, pathToFileURL } from 'node:url';

import {
  findLuaTableAssignment,
  getLuaListItems,
  getTableEntries,
  getTableField,
  getLuaTableFields,
  getTableArray,
  parseLuaStatic,
  tokenizeLua,
  toPlainValue
} from '../lib/lua-static-reader.mjs';
import { validateSourceContractFromDisk } from '../contract-validator.mjs';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '../../..');
const WEAPON_REGISTRY = 'scripts/settings/equipment/weapon_templates/weapon_templates.lua';
const BASE_AUTHORING = 'content/authoring/v2/w07-weapons.json';
const GAME_RELEASE_ID = 'darktide:1.13.4';
const PUBLIC_REPOSITORY = 'https://github.com/Aussiemon/Darktide-Source-Code';
const OUTPUT_CANDIDATE_DIRECTORY = 'weapon-templates';
const OUTPUT_CANDIDATE_INDEX = 'index.json';
const LEGACY_OUTPUT_CANDIDATE = 'weapon-template-candidates.json';
const OUTPUT_SNAPSHOT = 'weapons-snapshot.json';
const CANDIDATE_PART_SCHEMA = 'generic-weapon-template-candidate-part/1.0.0';
const CANDIDATE_INDEX_SCHEMA = 'generic-weapon-template-candidate-index/1.0.0';
const MAX_CANDIDATE_PART_BYTES = 10_000_000;

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

function collectRecordReferences(value, found = new Set(), includeRoot = true) {
  if (!value || typeof value !== 'object') return found;
  if (includeRoot && typeof value.recordId === 'string' && typeof value.gameReleaseId === 'string') {
    found.add(`${value.gameReleaseId}\0${value.recordId}`);
  }
  if (Array.isArray(value)) {
    for (const item of value) collectRecordReferences(item, found);
    return found;
  }
  for (const child of Object.values(value)) collectRecordReferences(child, found);
  return found;
}

function candidatePart(familyId) {
  return {
    schemaVersion: CANDIDATE_PART_SCHEMA,
    familyId,
    gameReleases: [],
    sourceSnapshots: [],
    sourceRefs: [],
    patches: [],
    records: [],
    tombstones: []
  };
}

function partitionGenericWeaponCandidate(candidate, authoring) {
  const familyByWeaponKey = new Map(authoring.records
    .filter((record) => record.gameReleaseId === GAME_RELEASE_ID && record.kind === 'weapon')
    .map((record) => [`${record.gameReleaseId}\0${record.recordId}`, record.payload.familyId]));
  const familyIds = [...new Set(familyByWeaponKey.values())].sort(lexical);
  for (const familyId of familyIds) {
    invariant(/^[a-z0-9_]+$/u.test(familyId), `Weapon familyId is not safe for a filename: ${familyId}`);
  }

  const parts = new Map(familyIds.map((familyId) => [familyId, candidatePart(familyId)]));
  const shared = candidatePart(null);
  shared.gameReleases = candidate.gameReleases;
  shared.sourceSnapshots = candidate.sourceSnapshots;
  shared.sourceRefs = candidate.sourceRefs;
  shared.tombstones = candidate.tombstones;

  const recordsByKey = new Map(candidate.records
    .map((record) => [`${record.gameReleaseId}\0${record.recordId}`, record]));
  const usages = new Map();
  const queue = [];
  const addUsage = (recordKey, familyId) => {
    if (!recordsByKey.has(recordKey)) return;
    const families = usages.get(recordKey) ?? new Set();
    if (families.has(familyId)) return;
    families.add(familyId);
    usages.set(recordKey, families);
    queue.push([recordKey, familyId]);
  };

  for (const patch of candidate.patches) {
    const weaponKey = `${patch.gameReleaseId}\0${patch.recordId}`;
    const familyId = familyByWeaponKey.get(weaponKey);
    invariant(familyId && parts.has(familyId), `Candidate patch has no UI weapon family: ${patch.recordId}`);
    parts.get(familyId).patches.push(patch);
    for (const recordKey of collectRecordReferences(patch.fields)) addUsage(recordKey, familyId);
  }

  for (const record of candidate.records) {
    const recordKey = `${record.gameReleaseId}\0${record.recordId}`;
    if (parts.has(record.payload?.familyId)) addUsage(recordKey, record.payload.familyId);
    for (const referenceKey of collectRecordReferences(record, new Set(), false)) {
      const familyId = familyByWeaponKey.get(referenceKey);
      if (familyId) addUsage(recordKey, familyId);
    }
  }

  for (let index = 0; index < queue.length; index += 1) {
    const [recordKey, familyId] = queue[index];
    const record = recordsByKey.get(recordKey);
    for (const referenceKey of collectRecordReferences(record, new Set(), false)) addUsage(referenceKey, familyId);
  }

  for (const record of candidate.records) {
    const families = usages.get(`${record.gameReleaseId}\0${record.recordId}`) ?? new Set();
    if (families.size === 1) parts.get([...families][0]).records.push(record);
    else shared.records.push(record);
  }

  return [
    { filename: '_shared.json', part: shared },
    ...familyIds.map((familyId) => ({ filename: `${familyId}.json`, part: parts.get(familyId) }))
  ];
}

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

function pointerSet(target, pointer, value) {
  invariant(pointer.startsWith('/'), `Candidate fieldPath must be a JSON pointer: ${pointer}`);
  const parts = pointer.slice(1).split('/').map((part) => part.replaceAll('~1', '/').replaceAll('~0', '~'));
  let current = target;
  for (const part of parts.slice(0, -1)) {
    invariant(current && typeof current === 'object' && Object.hasOwn(current, part), `Candidate fieldPath does not resolve: ${pointer}`);
    current = current[part];
  }
  current[parts.at(-1)] = structuredClone(value);
}

/** Applies minimal weapon field patches and appends only genuinely new records. */
export function mergeGenericWeaponCandidate(authoringBundle, candidate) {
  invariant(authoringBundle && typeof authoringBundle === 'object', 'authoringBundle must be a Source contract bundle.');
  invariant(candidate && typeof candidate === 'object', 'candidate must be a generic weapon-template candidate.');
  const merged = structuredClone(authoringBundle);
  const registries = [
    ['gameReleases', (item) => item.gameReleaseId],
    ['sourceSnapshots', (item) => `${item.gameReleaseId}\0${item.snapshot?.snapshotId}`],
    ['sourceRefs', (item) => `${item.gameReleaseId}\0${item.sourceId}`],
    ['records', (item) => `${item.gameReleaseId}\0${item.recordId}`],
    ['tombstones', (item) => `${item.gameReleaseId}\0${item.recordId}`]
  ];
  for (const [field, keyOf] of registries) {
    const seen = new Map((merged[field] ?? []).map((item) => [keyOf(item), item]));
    appendUnique(merged[field] ??= [], seen, candidate[field], keyOf, field);
  }
  const patchedKeys = new Set();
  for (const patch of candidate.patches ?? []) {
    const key = `${patch.gameReleaseId}\0${patch.recordId}`;
    invariant(!patchedKeys.has(key), `Duplicate weapon patch: ${key}`);
    patchedKeys.add(key);
    const record = merged.records.find((item) => item.gameReleaseId === patch.gameReleaseId && item.recordId === patch.recordId);
    invariant(record?.kind === 'weapon', `Weapon patch target was not found: ${key}`);
    for (const field of patch.fields ?? []) pointerSet(record, field.fieldPath, field.value);
    const sourceSeen = new Map((record.sourceRefs ?? []).map((item) => [`${item.gameReleaseId}\0${item.sourceId}`, item]));
    appendUnique(record.sourceRefs ??= [], sourceSeen, patch.sourceRefs, (item) => `${item.gameReleaseId}\0${item.sourceId}`, 'patch sourceRefs');
    record.dataCoverage = structuredClone(patch.dataCoverage);
    const targetSeen = new Map((record.reviewTargets ?? []).map((item) => [`${item.fieldPath}\0${item.dimension}`, item]));
    appendUnique(record.reviewTargets ??= [], targetSeen, patch.reviewTargets, (item) => `${item.fieldPath}\0${item.dimension}`, 'patch reviewTargets');
    record.reviewState = 'pending';
  }
  // A weapon payload is a dependency of its profiles, stats, claims, and evidence.
  // Promotion is intentionally an all-pending in-memory review graph; the
  // approved authoring input and its receipts remain untouched on disk.
  merged.reviewReceipts = [];
  for (const item of [...merged.records, ...(merged.tombstones ?? [])]) item.reviewState = 'pending';
  merged.publicationEligible = false;
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

function weaponTemplateInventory(source) {
  const parsed = parseLuaStatic(source, { filename: WEAPON_REGISTRY, allowUnsupported: true });
  const groups = getTableArray(parsed.locals.template_groups);
  const templates = [];
  for (const group of groups) {
    const values = getTableArray(group).map((node) => toPlainValue(node));
    invariant(values.length >= 1 && values.every((value) => typeof value === 'string'), 'Weapon template group must be a static string list.');
    const [directory, ...names] = values;
    for (const templateKey of names) {
      templates.push({ templateKey, path: `scripts/settings/equipment/weapon_templates/${directory}/${templateKey}.lua` });
    }
  }
  for (const node of getTableArray(parsed.locals.template_names)) {
    const templateKey = toPlainValue(node);
    invariant(typeof templateKey === 'string', 'Standalone weapon template name must be a static string.');
    templates.push({ templateKey, path: `scripts/settings/equipment/weapon_templates/${templateKey}.lua` });
  }
  invariant(new Set(templates.map((item) => item.templateKey)).size === templates.length, 'Weapon template registry contains duplicate template keys.');
  return templates;
}

function countMatches(source, expression) {
  return [...source.matchAll(expression)].length;
}

function bespokeRequiresAppended(source, filename) {
  const tokens = tokenizeLua(source, { filename });
  const aliases = new Map();
  for (let index = 0; index < tokens.length - 4; index += 1) {
    if (tokens[index].value !== 'local' || tokens[index + 1].type !== 'identifier'
      || tokens[index + 2].value !== '=' || tokens[index + 3].value !== 'require') continue;
    let stringToken = null;
    if (tokens[index + 4].value === '(' && tokens[index + 5]?.type === 'string') stringToken = tokens[index + 5];
    else if (tokens[index + 4].type === 'string') stringToken = tokens[index + 4];
    if (stringToken?.value.startsWith('scripts/settings/equipment/weapon_traits/weapon_traits_bespoke_')) {
      aliases.set(tokens[index + 1].value, stringToken.value);
    }
  }
  for (let pass = 0; pass < 3; pass += 1) {
    for (let index = 0; index < tokens.length - 8; index += 1) {
      if (tokens[index].value !== 'local' || tokens[index + 1].type !== 'identifier'
        || tokens[index + 2].value !== '=' || tokens[index + 3].value !== 'table'
        || tokens[index + 4].value !== '.' || !['ukeys', 'keys'].includes(tokens[index + 5].value)
        || tokens[index + 6].value !== '(') continue;
      const sourceAlias = tokens[index + 7].value;
      if (aliases.has(sourceAlias)) aliases.set(tokens[index + 1].value, aliases.get(sourceAlias));
    }
  }
  const appended = new Set();
  for (let index = 0; index < tokens.length - 5; index += 1) {
    if (tokens[index].value !== 'table' || tokens[index + 1].value !== '.'
      || tokens[index + 2].value !== 'append' || tokens[index + 3].value !== '(') continue;
    let depth = 1;
    for (let cursor = index + 4; cursor < tokens.length && depth > 0; cursor += 1) {
      if (tokens[cursor].value === '(') depth += 1;
      else if (tokens[cursor].value === ')') depth -= 1;
      else if (depth > 0 && tokens[cursor].type === 'identifier' && aliases.has(tokens[cursor].value)) {
        appended.add(aliases.get(tokens[cursor].value));
      }
    }
  }
  return [...appended];
}

function scanTemplateInventory(reader, templates) {
  const extracted = templates.map((template) => {
    const source = reader.read(template.path);
    const declaresTraits = /\bweapon_template\.traits\s*=/u.test(source);
    const appendsBespokeTraits = bespokeRequiresAppended(source, template.path).length > 0;
    const declaresBaseStats = /\bweapon_template\.base_stats\s*=/u.test(source);
    const declaresDisplayedAttacks = /\bweapon_template\.displayed_attacks\s*=/u.test(source);
    let actionCount = 0;
    let actionKeys = [];
    let directDamageProfileReferenceCount = 0;
    if (/\bweapon_template\.actions\s*=\s*\{/u.test(source)) {
      try {
        const actions = findLuaTableAssignment(source, 'weapon_template.actions', { filename: template.path });
        const literalActions = getLuaTableFields(actions).filter((field) => field.rawValue.startsWith('{'));
        actionKeys = literalActions.map((field) => field.key);
        actionCount = literalActions.length;
        directDamageProfileReferenceCount = countMatches(source, /\b[A-Za-z0-9_]*damage_profile\s*=\s*DamageProfileTemplates\.[A-Za-z0-9_]+/gu);
      } catch (error) {
        error.message = `${template.path}: action inventory failed: ${error.message}`;
        throw error;
      }
    }
    let baseStatEntryCount = 0;
    if (/\bweapon_template\.base_stats\s*=\s*\{/u.test(source)) {
      baseStatEntryCount = getLuaTableFields(findLuaTableAssignment(source, 'weapon_template.base_stats', { filename: template.path })).length;
    }
    return {
      ...template,
      source,
      declaresTraits,
      appendsBespokeTraits,
      declaresBaseStats,
      baseStatEntryCount,
      declaresDisplayedAttacks,
      actionCount,
      actionKeys,
      directDamageProfileReferenceCount,
      tableAddMissingCallCount: countMatches(source, /\btable\.add_missing\s*\(/gu),
      tableCloneCallCount: countMatches(source, /\btable\.clone\s*\(/gu)
    };
  });
  const traitTemplates = extracted.filter((item) => item.declaresTraits);
  const playerTraits = traitTemplates.filter((item) => item.appendsBespokeTraits);
  const botTraits = traitTemplates.filter((item) => !item.appendsBespokeTraits && item.path.includes('/bot_weapons/'));
  const otherTraits = traitTemplates.filter((item) => !item.appendsBespokeTraits && !item.path.includes('/bot_weapons/'));
  return {
    extracted,
    stats: {
      traitDeclarationCount: traitTemplates.length,
      playerMarkTraitDeclarationCount: playerTraits.length,
      botTraitDeclarationCount: botTraits.length,
      otherTraitDeclarationCount: otherTraits.length,
      baseStatsDeclarationCount: playerTraits.length,
      displayedAttacksDeclarationCount: traitTemplates.filter((item) => item.declaresDisplayedAttacks).length,
      topLevelActionCount: traitTemplates.reduce((sum, item) => sum + item.actionCount, 0),
      directDamageProfileReferenceCount: traitTemplates.reduce((sum, item) => sum + item.directDamageProfileReferenceCount, 0),
      tableAddMissingCallCount: traitTemplates.reduce((sum, item) => sum + item.tableAddMissingCallCount, 0),
      tableCloneCallCount: traitTemplates.reduce((sum, item) => sum + item.tableCloneCallCount, 0)
    }
  };
}

function link(sourceId) {
  return { sourceId, gameReleaseId: GAME_RELEASE_ID };
}

function ref(recordId) {
  return { recordId, gameReleaseId: GAME_RELEASE_ID };
}

function nestedTable(raw, startLine, filename) {
  return {
    type: 'static-table-source', raw, start: 0, end: raw.length,
    startLine, endLine: startLine + (raw.match(/\n/gu)?.length ?? 0), filename
  };
}

function lineWithin(raw, offset) {
  return 1 + (raw.slice(0, offset).match(/\n/gu)?.length ?? 0);
}

function firstSourceLine(rawValue) {
  return rawValue.split(/\r\n|\n|\r/u).find((line) => line.trim().length > 0)?.trim() ?? rawValue;
}

function compactInputSetup(inputSetup) {
  const compact = structuredClone(inputSetup);
  for (const entry of compact.inputEntries) entry.rawValue = firstSourceLine(entry.rawValue);
  compact.hierarchyRaw.rawValue = firstSourceLine(compact.hierarchyRaw.rawValue);
  for (const source of compact.setupSources) source.rawValue = firstSourceLine(source.rawValue);
  return compact;
}

function compactEvidenceList(items, needles = []) {
  const selected = items.find((item) => needles.some((needle) => item.rawValue.includes(needle)))
    ?? [...items].sort((left, right) => left.rawValue.length - right.rawValue.length)[0];
  const lines = selected.rawValue.split(/\r\n|\n|\r/u);
  let index = lines.findIndex((line) => needles.some((needle) => line.includes(needle)));
  if (index < 0) index = lines.findIndex((line) => line.trim().length > 0);
  const line = lines[index].trim();
  return [{
    ...structuredClone(selected),
    rawValue: line,
    sourceLocator: {
      ...structuredClone(selected.sourceLocator),
      line: selected.sourceLocator.line + index,
      endLine: selected.sourceLocator.line + index
    }
  }];
}

function compactPanelPreviewRules(rules) {
  const compact = structuredClone(rules);
  compact.perStatIncrementCap.sourceLocators = compactEvidenceList(compact.perStatIncrementCap.sourceLocators, ['max_weapon_preview = 0.8']);
  compact.perStatIncrementCap.override.panelCaller.sourceLocators = compactEvidenceList(
    compact.perStatIncrementCap.override.panelCaller.sourceLocators,
    ['max_stat_value']
  );
  compact.itemBudget.sourceLocators = compactEvidenceList(compact.itemBudget.sourceLocators, ['item_max_level = 380']);
  compact.expertiseBudget.expertiseMultiplier.sourceLocators = compactEvidenceList(
    compact.expertiseBudget.expertiseMultiplier.sourceLocators,
    ['expertise_multiplier = 10']
  );
  compact.expertiseBudget.maxExpertise.sourceLocators = compactEvidenceList(
    compact.expertiseBudget.maxExpertise.sourceLocators,
    ['return 50 * expertise_multiplier']
  );
  compact.expertiseBudget.sourceLocators = compactEvidenceList(
    compact.expertiseBudget.sourceLocators,
    ['remaining_budget = expertise_increase']
  );
  compact.displayCap.sourceLocators = compactEvidenceList(compact.displayCap.sourceLocators, ['value = math.min(value, 100)']);
  compact.rounding.sourceLocators = compactEvidenceList(compact.rounding.sourceLocators, [compact.rounding.rawValue]);
  for (const branch of compact.conditionalBranches) {
    branch.sourceLocators = compactEvidenceList(branch.sourceLocators, [branch.rawValue]);
  }
  compact.storedExpertiseOverride.sourceLocators = compactEvidenceList(
    compact.storedExpertiseOverride.sourceLocators,
    [compact.storedExpertiseOverride.rawValue]
  );
  compact.obtainableRange.sourceLocators = compactEvidenceList(compact.obtainableRange.sourceLocators);
  return compact;
}

function collectSourceLinks(value, found = new Map()) {
  if (!value || typeof value !== 'object') return found;
  if (Array.isArray(value)) {
    for (const item of value) collectSourceLinks(item, found);
    return found;
  }
  if (typeof value.sourceId === 'string' && typeof value.gameReleaseId === 'string') {
    found.set(`${value.gameReleaseId}\0${value.sourceId}`, { sourceId: value.sourceId, gameReleaseId: value.gameReleaseId });
  }
  for (const child of Object.values(value)) collectSourceLinks(child, found);
  return found;
}

function sourceResolver(authoring, reader, additions = []) {
  const sourcesByPath = new Map();
  for (const source of authoring.sourceRefs.filter((item) => item.gameReleaseId === GAME_RELEASE_ID && item.path)) {
    const rows = sourcesByPath.get(source.path) ?? [];
    rows.push(source);
    sourcesByPath.set(source.path, rows);
  }
  const resolve = (sourcePath) => {
    let sources = sourcesByPath.get(sourcePath) ?? [];
    if (sources.length === 0 && reader?.paths.includes(sourcePath)) {
      reader.read(sourcePath);
      const file = reader.files.get(sourcePath);
      const prototype = authoring.sourceRefs.find((item) => item.gameReleaseId === GAME_RELEASE_ID
        && item.sourceKind === 'public-code' && item.commit === PINNED_COMMIT && item.snapshot && item.tool);
      invariant(prototype, 'Authoring has no pinned public-code sourceRef prototype.');
      const generated = {
        sourceId: `public-code:generic-${sha256(Buffer.from(sourcePath, 'utf8')).slice(0, 16)}`,
        gameReleaseId: GAME_RELEASE_ID,
        sourceKind: 'public-code',
        repository: PUBLIC_REPOSITORY,
        publicUrl: `${PUBLIC_REPOSITORY}/blob/${PINNED_COMMIT}/${sourcePath}`,
        commit: PINNED_COMMIT,
        path: sourcePath,
        gameBuild: prototype.gameBuild,
        snapshot: structuredClone(prototype.snapshot),
        tool: structuredClone(prototype.tool),
        artifactSha256: file.sha256,
        safeSummary: `Pinned public source file ${sourcePath} at ${PINNED_COMMIT}; Git blob ${file.blob}, SHA-256 ${file.sha256}. This identifies source bytes only and does not establish a runtime result.`
      };
      additions.push(generated);
      sourcesByPath.set(sourcePath, [generated]);
      resolve.paths.add(sourcePath);
      sources = [generated];
    }
    invariant(sources.length > 0, `Pinned source tree has no sourceRef for ${sourcePath}`);
    const source = sources.find((item) => item.commit === PINNED_COMMIT) ?? sources[0];
    return link(source.sourceId);
  };
  resolve.paths = new Set(sourcesByPath.keys());
  return resolve;
}

function makeLocator(resolveSource, sourcePath, line, fieldPath, endLine) {
  return {
    sourceRef: resolveSource(sourcePath),
    path: sourcePath,
    line,
    ...(endLine === undefined ? {} : { endLine }),
    fieldPath
  };
}

function makeRawSource(resolveSource, sourcePath, line, fieldPath, rawValue) {
  return { rawValue, sourceLocator: makeLocator(resolveSource, sourcePath, line, fieldPath) };
}

function pendingRecord(recordId, kind, payload, sourceRefs, missing, reviewTargets = [{ fieldPath: '/payload', dimension: 'technical' }]) {
  return {
    recordId,
    kind,
    owner: 'source',
    gameReleaseId: GAME_RELEASE_ID,
    payload,
    sourceRefs,
    dataCoverage: { status: missing.length === 0 ? 'complete' : 'partial', missing },
    reviewState: 'pending',
    reviewTargets
  };
}

function identifierSlug(value) {
  return value.replaceAll('_', '-').replace(/[^a-zA-Z0-9-]+/gu, '-').replace(/^-+|-+$/gu, '').toLowerCase();
}

function attackMode(action) {
  if (action.includes('shoot_zoomed') || action.includes('ads')) return 'ads';
  if (action.includes('shoot')) return 'hipfire';
  if (action.includes('heavy')) return 'heavy';
  if (action.includes('light')) return 'light';
  if (action.includes('push')) return 'push';
  if (action.includes('special')) return 'special';
  return action;
}

function bindingBranch(field) {
  if (field.endsWith('_on_abort')) return 'abort';
  if (field.endsWith('_special_active')) return 'special-active';
  if (field.endsWith('_inner')) return 'inner';
  if (field.endsWith('_outer')) return 'outer';
  if (field.endsWith('_sticky_last')) return 'sticky-last';
  if (field.endsWith('_sticky_dodge')) return 'sticky-dodge';
  if (field.endsWith('_sticky')) return 'sticky';
  return 'normal';
}

function directProfileBindings(actionRow, resolveSource, template) {
  const bindings = [];
  const expression = /\b([A-Za-z0-9_]*damage_profile[A-Za-z0-9_]*)\s*=\s*DamageProfileTemplates\.([A-Za-z0-9_]+)/gu;
  for (const match of actionRow.field.rawValue.matchAll(expression)) {
    const fieldPath = `weapon_template.actions.${actionRow.action}.${match[1]}`;
    bindings.push({
      branch: bindingBranch(match[1]),
      profileKey: match[2],
      rawValue: match[2],
      sourceLocator: makeLocator(
        resolveSource,
        template.path,
        actionRow.field.startLine + lineWithin(actionRow.field.rawValue, match.index) - 1,
        fieldPath
      )
    });
  }
  return bindings;
}

function actionRowsForTemplate(template, resolveSource) {
  const actions = findLuaTableAssignment(template.source, 'weapon_template.actions', { filename: template.path });
  const fields = getLuaTableFields(actions);
  return fields.map((field) => {
    const fieldPath = `weapon_template.actions.${field.key}`;
    const startMatch = /\bstart_input\s*=\s*"([^"]+)"/u.exec(field.rawValue);
    const startInput = startMatch ? {
      inputKey: startMatch[1],
      sourceLocator: makeLocator(resolveSource, template.path,
        field.startLine + lineWithin(field.rawValue, startMatch.index) - 1, `${fieldPath}.start_input`)
    } : null;
    return {
      action: field.key,
      startInput,
      rawSource: makeRawSource(resolveSource, template.path, field.startLine, fieldPath, firstSourceLine(field.rawValue)),
      sourceRange: makeLocator(resolveSource, template.path, field.startLine, fieldPath, field.endLine),
      field
    };
  });
}

function inputSetupForTemplate(template, localActions, goldenSetup, resolveSource) {
  const inputEntries = goldenSetup.inputEntries.map((entry) => {
    if (entry.origin !== 'weapon-mid-setup') return structuredClone(entry);
    return {
      inputKey: entry.inputKey,
      origin: 'default-setup',
      rawValue: entry.inheritedDefinition.rawValue,
      sourceLocator: structuredClone(entry.inheritedDefinition.sourceLocator)
    };
  });
  const byKey = new Map(inputEntries.map((entry, index) => [entry.inputKey, index]));
  const setupSources = goldenSetup.setupSources.slice(0, 5).map((item) => structuredClone(item));
  if (/\bweapon_template\.action_inputs\s*=\s*\{/u.test(template.source)) {
    const table = findLuaTableAssignment(template.source, 'weapon_template.action_inputs', { filename: template.path });
    setupSources.push(makeRawSource(resolveSource, template.path, table.startLine, 'weapon_template.action_inputs', table.raw));
    for (const field of getLuaTableFields(table)) {
      const entry = {
        inputKey: field.key,
        origin: 'default-setup',
        rawValue: field.rawValue,
        sourceLocator: makeLocator(resolveSource, template.path, field.startLine, `weapon_template.action_inputs.${field.key}`)
      };
      if (byKey.has(field.key)) inputEntries[byKey.get(field.key)] = entry;
      else {
        byKey.set(field.key, inputEntries.length);
        inputEntries.push(entry);
      }
    }
  }
  for (const action of localActions) {
    if (!action.startInput || byKey.has(action.startInput.inputKey)) continue;
    byKey.set(action.startInput.inputKey, inputEntries.length);
    inputEntries.push({
      inputKey: action.startInput.inputKey,
      origin: 'default-setup',
      rawValue: `start_input = "${action.startInput.inputKey}"`,
      sourceLocator: structuredClone(action.startInput.sourceLocator)
    });
  }
  return {
    setupKey: `generic_static_setup:${template.templateKey}`,
    inheritedSetupKey: goldenSetup.inheritedSetupKey,
    inputEntries,
    hierarchyRaw: structuredClone(goldenSetup.hierarchyRaw),
    setupSources
  };
}

function continuationRowsForTemplate(template, localActions, resolveSource) {
  const rows = [];
  for (const action of localActions) {
    if (!action.field.rawValue.startsWith('{')) continue;
    const actionTable = nestedTable(action.field.rawValue, action.field.startLine, template.path);
    const allowed = getLuaTableFields(actionTable).find((field) => field.key === 'allowed_chain_actions');
    if (!allowed?.rawValue.startsWith('{')) continue;
    const allowedTable = nestedTable(allowed.rawValue, allowed.startLine, template.path);
    for (const input of getLuaTableFields(allowedTable)) {
      if (!input.rawValue.startsWith('{')) continue;
      const inputTable = nestedTable(input.rawValue, input.startLine, template.path);
      const directFields = getLuaTableFields(inputTable);
      const directTarget = directFields.find((field) => field.key === 'action_name');
      const edgeItems = directTarget ? [{ inputKey: input.key, fields: directFields, line: input.startLine }]
        : getLuaListItems(inputTable).filter((item) => item.rawValue.startsWith('{')).map((item) => ({
          inputKey: `${input.key}.[]`,
          fields: getLuaTableFields(nestedTable(item.rawValue, item.startLine, template.path)),
          line: item.startLine
        }));
      for (const edge of edgeItems) {
        const target = edge.fields.find((field) => field.key === 'action_name');
        const targetName = /^"([^"]+)"$/u.exec(target?.rawValue ?? '')?.[1];
        if (!targetName) continue;
        const baseField = `weapon_template.actions.${action.action}.allowed_chain_actions.${edge.inputKey}`;
        rows.push({
          fromAction: action.action,
          inputKey: edge.inputKey,
          toAction: targetName,
          sourceLocator: makeLocator(resolveSource, template.path, target.startLine, `${baseField}.action_name`),
          conditions: edge.fields.filter((field) => !['action_name', 'condition_func'].includes(field.key)).map((field) => ({
            fieldPath: `${baseField}.${field.key}`,
            rawValue: field.rawValue,
            sourceLocator: makeLocator(resolveSource, template.path, field.startLine, `${baseField}.${field.key}`)
          }))
        });
      }
    }
  }
  return rows;
}

function damageProfileKey(recordByKey, profileRef) {
  return recordByKey.get(`${profileRef.gameReleaseId}\0${profileRef.recordId}`)?.payload?.profileKey;
}

function displayedAttacksForTemplate(template, weapon, authoring, resolveSource, evidenceId) {
  if (!template.declaresDisplayedAttacks) return [];
  const displayed = findLuaTableAssignment(template.source, 'weapon_template.displayed_attacks', { filename: template.path });
  const recordByKey = new Map(authoring.records.map((record) => [`${record.gameReleaseId}\0${record.recordId}`, record]));
  const profiles = weapon.payload.attackProfileRefs.map((profileRef) => recordByKey.get(`${profileRef.gameReleaseId}\0${profileRef.recordId}`)).filter(Boolean);
  const weaponSource = resolveSource(template.path);
  const output = [];
  for (const entry of getLuaTableFields(displayed)) {
    if (!entry.rawValue.startsWith('{') || entry.key === 'special') continue;
    const fields = getLuaTableFields(nestedTable(entry.rawValue, entry.startLine, template.path));
    const displayedType = /^"([^"]+)"$/u.exec(fields.find((field) => field.key === 'type')?.rawValue ?? '')?.[1];
    if (!displayedType) continue;
    const mode = displayedType === 'hipfire' || displayedType === 'ads'
      ? displayedType : entry.key === 'primary' ? 'light' : entry.key === 'secondary' ? 'heavy' : displayedType;
    const attackChain = fields.find((field) => field.key === 'attack_chain');
    const attackTypes = attackChain ? [...attackChain.rawValue.matchAll(/"([^"]+)"/gu)].map((match) => match[1]) : [displayedType];
    let matchingProfiles = profiles.filter((profile) => profile.payload.mode === mode);
    if (matchingProfiles.length === 0) matchingProfiles = profiles.filter((profile) =>
      mode === 'hipfire' ? profile.payload.action.includes('shoot_hip') : mode === 'ads' ? profile.payload.action.includes('shoot_zoomed') : false);
    if (matchingProfiles.length === 0) matchingProfiles = profiles;
    const profileKeys = matchingProfiles.flatMap((profile) => profile.payload.damageProfileRefs ?? [])
      .map((profileRef) => damageProfileKey(recordByKey, profileRef)).filter(Boolean);
    const fallbackKey = profileKeys[0] ?? `unresolved_${template.templateKey}_${entry.key}`;
    const role = /linesman|tank|cleave/u.test(displayedType) ? 'multi-target-cleave' : 'single-target';
    const sourceRefs = new Map([[`${weaponSource.gameReleaseId}\0${weaponSource.sourceId}`, weaponSource]]);
    for (const profile of matchingProfiles) {
      for (const sourceRef of profile.sourceRefs ?? []) sourceRefs.set(`${sourceRef.gameReleaseId}\0${sourceRef.sourceId}`, sourceRef);
      for (const profileRef of profile.payload.damageProfileRefs ?? []) {
        const damage = recordByKey.get(`${profileRef.gameReleaseId}\0${profileRef.recordId}`);
        for (const sourceRef of damage?.sourceRefs ?? []) sourceRefs.set(`${sourceRef.gameReleaseId}\0${sourceRef.sourceId}`, sourceRef);
      }
    }
    output.push({
      key: entry.key,
      mode,
      displayedType,
      scope: 'display-summary',
      segments: attackTypes.map((attackType, index) => ({
        index: index + 1,
        attackType,
        targetRole: /linesman|tank|cleave/u.test(attackType) ? 'multi-target-cleave' : role,
        roleProfileKey: profileKeys[index] ?? fallbackKey
      })),
      sourceRefs: [...sourceRefs.values()],
      evidenceRefs: [ref(evidenceId)]
    });
  }
  return output;
}

function generatorBindingsForTemplate(template, rows, fallbackActions, common, resolveSource) {
  const bindings = [];
  if (fallbackActions.some((action) => action.action === 'action_unwield')) {
    bindings.push(structuredClone(common.unwieldBinding));
  }
  const expected = new Map(common.actionGenerators.map((group) => {
    const definition = group.definitions.find((item) => item.definitionIndex === group.effectiveDefinitionIndex);
    return [group.generatorKey, definition?.returnKind];
  }));
  const assignedKeys = {
    generate_unwield_action: 'action_unwield',
    generate_wield_chain_actions: 'wield',
    generate_inspect_action: 'action_inspect',
    generate_inspect_3p_action: 'action_inspect_3p'
  };
  const expression = /\b(?:BaseTemplateSettings|base_template_settings)\.(generate_[A-Za-z0-9_]+)\s*\(/gu;
  for (const row of rows) {
    for (const match of row.field.rawValue.matchAll(expression)) {
      const returnKind = expected.get(match[1]);
      if (!returnKind) continue;
      const assignedActionKey = assignedKeys[match[1]];
      const fieldPath = returnKind === 'continuation-list'
        ? `weapon_template.actions.${row.action}.allowed_chain_actions.${assignedActionKey}`
        : `weapon_template.actions.${row.action}`;
      bindings.push({
        generatorKey: match[1],
        callsite: {
          sourceLocator: makeLocator(
            resolveSource,
            template.path,
            row.field.startLine + lineWithin(row.field.rawValue, match.index) - 1,
            fieldPath
          ),
          rawValue: firstSourceLine(row.field.rawValue.slice(match.index))
        },
        ownerAction: row.action,
        ownerActionRange: structuredClone(row.sourceRange),
        assignedActionKey,
        returnKind
      });
    }
  }
  return bindings;
}

function generatedClosureCounts(actionGenerators, bindings) {
  let generatedActionSettingsCount = 0;
  let generatedContinuationEdgeCount = 0;
  const byKey = new Map(actionGenerators.map((group) => [group.generatorKey, group]));
  for (const binding of bindings) {
    const group = byKey.get(binding.generatorKey);
    const definition = group?.definitions.find((item) => item.definitionIndex === group.effectiveDefinitionIndex);
    if (!definition) continue;
    if (binding.returnKind === 'continuation-list') {
      generatedContinuationEdgeCount += definition.generatedContinuations.length;
    } else {
      generatedActionSettingsCount += definition.generatedActions.length;
      generatedContinuationEdgeCount += definition.generatedActions.reduce(
        (sum, action) => sum + action.continuationEdges.length,
        0
      );
    }
  }
  return { generatedActionSettingsCount, generatedContinuationEdgeCount };
}

function makeGenericResolution({ template, weapon, authoring, common, resolveSource }) {
  const rows = actionRowsForTemplate(template, resolveSource);
  const localActions = rows.map(({ field: _field, ...row }) => row);
  const fallbackActions = common.fallbackActions.filter((fallback) => !localActions.some((action) => action.action === fallback.action));
  invariant(fallbackActions.length > 0, `${template.templateKey} overrides every base fallback action.`);
  const actionContinuations = continuationRowsForTemplate(template, rows, resolveSource);
  const inputSetup = compactInputSetup(inputSetupForTemplate(template, rows, common.inputSetup, resolveSource));
  const inputKeys = new Set(inputSetup.inputEntries.map((entry) => entry.inputKey));
  for (const continuation of actionContinuations) {
    const inputKey = continuation.inputKey.split('.', 1)[0];
    if (inputKeys.has(inputKey)) continue;
    inputKeys.add(inputKey);
    inputSetup.inputEntries.push({
      inputKey,
      origin: 'default-setup',
      rawValue: `allowed_chain_actions.${continuation.inputKey}`,
      sourceLocator: structuredClone(continuation.sourceLocator)
    });
  }
  const actionGenerators = structuredClone(common.actionGenerators);
  const generatorBindings = generatorBindingsForTemplate(template, rows, fallbackActions, common, resolveSource);
  const generatedCounts = generatedClosureCounts(actionGenerators, generatorBindings);
  const recordByKey = new Map(authoring.records.map((record) => [`${record.gameReleaseId}\0${record.recordId}`, record]));
  const profileBindingCount = weapon.payload.attackProfileRefs.reduce((sum, profileRef) =>
    sum + (recordByKey.get(`${profileRef.gameReleaseId}\0${profileRef.recordId}`)?.payload?.sourceBindings?.length ?? 0), 0);
  return {
    actionContinuations,
    resolution: {
      inputSetup,
      localActions,
      fallbackActions: fallbackActions.map((item) => {
        const compact = structuredClone(item);
        compact.rawSource.rawValue = firstSourceLine(compact.rawSource.rawValue);
        return compact;
      }),
      actionGenerators,
      generatorBindings,
      staticClosure: {
        localActionCount: localActions.length,
        fallbackActionCount: fallbackActions.length,
        profileBindingCount,
        literalContinuationEdgeCount: actionContinuations.length,
        generatedActionSettingsCount: generatedCounts.generatedActionSettingsCount,
        generatedContinuationEdgeCount: generatedCounts.generatedContinuationEdgeCount,
        inputEntryCount: inputSetup.inputEntries.length
      },
      executionPolicy: 'static-only; functions not executed'
    }
  };
}

function staticTableKey(entry, implicitIndex) {
  if (entry.key == null) return String(implicitIndex);
  if (entry.key.type === 'string' || entry.key.type === 'number') return String(entry.key.value);
  if (entry.key.type === 'reference') return `[${entry.key.ref}]`;
  return `[${entry.key.raw ?? 'unsupported'}]`;
}

function nodeRaw(node) {
  if (typeof node?.raw === 'string' && node.raw.trim()) return node.raw.trim();
  if (node?.type === 'string') return JSON.stringify(node.value);
  if (node?.type === 'number' || node?.type === 'boolean') return String(node.value);
  if (node?.type === 'nil') return 'nil';
  if (node?.type === 'reference') return node.ref;
  return node?.type ?? 'unknown';
}

function tableChild(node, key) {
  if (node?.type !== 'table') return null;
  if (/^\d+$/u.test(String(key))) {
    return node.entries.filter((entry) => entry.key == null)[Number(key) - 1]?.value ?? null;
  }
  return getTableField(node, String(key));
}

function traverseTable(node, parts) {
  let current = node;
  for (const part of parts) {
    current = tableChild(current, part);
    if (!current) return null;
  }
  return current;
}

function parseDamageValueSources(reader) {
  const paths = [
    'scripts/settings/damage/damage_profile_settings.lua',
    'scripts/settings/damage/power_level_settings.lua'
  ];
  const parsed = new Map();
  for (const sourcePath of paths) {
    try {
      parsed.set(sourcePath, parseLuaStatic(reader.read(sourcePath), { filename: sourcePath, allowUnsupported: true }));
    } catch {
      // A missing support module is reported against the individual unresolved leaf later.
    }
  }
  return parsed;
}

function resolveNodeReference(reference, definition, supportFiles, seen = new Set()) {
  if (!reference || seen.has(`${definition.path}\0${reference}`)) return null;
  seen.add(`${definition.path}\0${reference}`);
  const [root, ...parts] = reference.split('.');
  let node = definition.parsed.locals[root];
  if (node) {
    if (node.type === 'reference') {
      return resolveNodeReference(`${node.ref}${parts.length ? `.${parts.join('.')}` : ''}`, definition, supportFiles, seen);
    }
    const resolved = traverseTable(node, parts);
    if (resolved) return { node: resolved, path: definition.path, fieldPath: reference };
  }

  const moduleRoots = [
    ['DamageProfileSettings', 'scripts/settings/damage/damage_profile_settings.lua', 'damage_profile_settings'],
    ['PowerLevelSettings', 'scripts/settings/damage/power_level_settings.lua', 'power_level_settings']
  ];
  for (const [moduleRoot, sourcePath, localRoot] of moduleRoots) {
    if (root !== moduleRoot) continue;
    const parsed = supportFiles.get(sourcePath);
    const resolved = traverseTable(parsed?.locals?.[localRoot], parts);
    if (resolved) return { node: resolved, path: sourcePath, fieldPath: reference };
  }
  return null;
}

function inferredProfileUnit(fieldPath) {
  if (/power_distribution.*attack/u.test(fieldPath)) return 'attack-power-point';
  if (/power_distribution.*impact/u.test(fieldPath)) return 'impact';
  if (/distance|range/u.test(fieldPath)) return 'm';
  if (/duration|time/u.test(fieldPath)) return 's';
  if (/armor|boost|modifier|multiplier|crit|cleave|force/u.test(fieldPath)) return 'ratio';
  return { status: 'unknown', reasonCode: 'NOT_VERIFIED' };
}

function collectDamageNodeFacts({ node, fieldPath, definition, resolveSource, supportFiles, leaves, tables, emptyTables, missing }) {
  if (node?.type !== 'table') {
    const rawValue = nodeRaw(node);
    leaves.push({
      line: node?.startLine ?? definition.line,
      fieldPath,
      rawValue,
      sourceRef: resolveSource(definition.path),
      path: definition.path
    });
    if (node?.type === 'unsupported' || node?.type === 'function' || node?.type === 'call') {
      missing.push({ field: `/payload/rawSourceDefinition/${fieldPath}`, reasonCode: 'NOT_VERIFIED', sourceRef: resolveSource(definition.path) });
    }
    if (node?.type === 'reference') {
      const resolved = resolveNodeReference(node.ref, definition, supportFiles);
      if (resolved?.node?.type === 'table') {
        collectDamageFactTable({
          node: resolved.node,
          tableKey: node.ref,
          fieldPath: node.ref,
          sourcePath: resolved.path,
          resolveSource,
          tables
        });
      }
    }
    return;
  }

  if (node.entries.length === 0) {
    emptyTables.push({
      tableKey: fieldPath,
      state: 'empty',
      rawValue: '{}',
      sourceLocator: makeLocator(resolveSource, definition.path, node.startLine, fieldPath)
    });
    return;
  }

  collectDamageFactTable({ node, tableKey: fieldPath, fieldPath, sourcePath: definition.path, resolveSource, tables });
  let implicitIndex = 0;
  for (const entry of node.entries) {
    if (entry.key == null) implicitIndex += 1;
    const key = staticTableKey(entry, implicitIndex);
    collectDamageNodeFacts({
      node: entry.value,
      fieldPath: `${fieldPath}.${key}`,
      definition,
      resolveSource,
      supportFiles,
      leaves,
      tables,
      emptyTables,
      missing
    });
  }
}

function collectDamageFactTable({ node, tableKey, fieldPath, sourcePath, resolveSource, tables }) {
  const direct = node.entries.filter((entry) => entry.value?.type !== 'table');
  if (direct.length === 0) return;
  const identity = `${sourcePath}\0${tableKey}`;
  if (tables.some((table) => table._identity === identity)) return;
  const sourceFieldPath = tableKey === 'PowerLevelSettings.boost_curves.default'
    ? 'power_level_settings.boost_curves.default' : fieldPath;
  let implicitIndex = 0;
  const orderedValues = direct.map((entry, index) => {
    if (entry.key == null) implicitIndex += 1;
    const rawValue = nodeRaw(entry.value);
    return {
      ordinal: index + 1,
      rawValue,
      ...(/^-?(?:0|[1-9][0-9]*)(?:\.[0-9]+)?$/u.test(rawValue) ? { decimal: rawValue } : {}),
      ...(entry.value?.type === 'reference' ? { tableRefKey: entry.value.ref } : {}),
      sourceLocator: makeLocator(resolveSource, sourcePath, entry.value?.startLine ?? node.startLine, `${sourceFieldPath}.${staticTableKey(entry, implicitIndex)}`)
    };
  });
  tables.push({
    _identity: identity,
    tableKey,
    quantity: fieldPath,
    unit: tableKey === 'PowerLevelSettings.boost_curves.default' ? 'ratio' : inferredProfileUnit(fieldPath),
    sourceLocator: makeLocator(
      resolveSource,
      sourcePath,
      node.entries[0]?.value?.startLine ?? node.startLine,
      `${sourceFieldPath}.${staticTableKey(node.entries[0], node.entries[0]?.key == null ? 1 : 0)}`
    ),
    orderedValues,
    ...(tableKey === 'PowerLevelSettings.boost_curves.default' ? {
      curveSemantics: {
        schemaVersion: 'w07-boost-curve-semantics/1.0.0',
        referenceAxis: {
          min: '0', max: '1', minInclusive: true, maxInclusive: true, unit: 'ratio',
          sourceLocators: [makeLocator(
            resolveSource,
            'scripts/utilities/attack/damage_calculation.lua',
            208,
            'source.five_point_damage_boost_curve_indexing_and_interpolation',
            217
          )]
        },
        knots: ['0', '0.25', '0.5', '0.75', '1'].map((input, index) => ({ sourceOrdinal: index + 1, input })),
        interpolation: {
          value: 'piecewise-linear',
          sourceLocator: makeLocator(
            resolveSource,
            'scripts/utilities/attack/damage_calculation.lua',
            208,
            'source.five_point_damage_boost_curve_indexing_and_interpolation',
            217
          )
        },
        callerInput: {
          min: '0', minInclusive: false, max: '1', maxInclusive: true, unit: 'ratio',
          predicate: 'finesse_boost_amount > 0',
          transform: 'math.min(finesse_boost_amount, 1)',
          sourceLocators: [makeLocator(
            resolveSource,
            'scripts/utilities/attack/damage_calculation.lua',
            700,
            'source.finesse_boost_amount_cap_and_positive_amount_gate',
            704
          )]
        }
      }
    } : {})
  });
}

function damageProfileSourcePaths(reader) {
  const registry = reader.read('scripts/settings/damage/damage_profile_templates.lua');
  return [...registry.matchAll(/extract_weapon_tweaks\("([^"]+)"/gu)]
    .map((match) => `${match[1]}.lua`)
    .filter((sourcePath) => reader.paths.includes(sourcePath));
}

function buildDamageProfileCatalog({ reader, resolveSource, authoring, referencedProfileKeys }) {
  const definitions = new Map();
  const failures = new Map();
  const supportFiles = parseDamageValueSources(reader);
  for (const sourcePath of damageProfileSourcePaths(reader)) {
    let parsed;
    try {
      parsed = parseLuaStatic(reader.read(sourcePath), { filename: sourcePath, allowUnsupported: true });
    } catch (error) {
      failures.set(sourcePath, error);
      continue;
    }
    const assignments = new Map(parsed.assignments.map((assignment) => [assignment.path, assignment]));
    for (const root of ['damage_templates', 'overrides']) {
      for (const entry of getTableEntries(parsed.locals[root])) {
        if (entry.key?.type !== 'string' || entry.value?.type !== 'table') continue;
        const profileKey = entry.key.value;
        const assignment = assignments.get(`${root}.${profileKey}`);
        let parentKey;
        if (root === 'overrides') {
          const parent = getTableField(entry.value, 'parent_template_name');
          if (parent?.type === 'string') parentKey = parent.value;
        } else {
          const clone = new RegExp(`\\bdamage_templates\\.${profileKey.replace(/[.*+?^${}()|[\]\\]/gu, '\\$&')}\\s*=\\s*table\\.clone\\(\\s*damage_templates\\.([A-Za-z0-9_]+)`, 'u')
            .exec(reader.read(sourcePath));
          parentKey = clone?.[1];
        }
        invariant(!definitions.has(profileKey), `Duplicate damage profile definition: ${profileKey}`);
        definitions.set(profileKey, {
          profileKey,
          root,
          node: entry.value,
          path: sourcePath,
          parsed,
          line: assignment?.line ?? entry.value.startLine,
          fieldPath: `${root}.${profileKey}`,
          parentKey
        });
      }
    }
  }

  const existingByProfile = new Map(authoring.records
    .filter((record) => record.gameReleaseId === GAME_RELEASE_ID && record.kind === 'damage-profile')
    .map((record) => [record.payload.profileKey, record]));
  const profileRecordRef = (profileKey) => {
    const existing = existingByProfile.get(profileKey);
    return existing ? ref(existing.recordId) : ref(`darktide:damage-profile:generic:${identifierSlug(profileKey)}`);
  };

  const materializeOwn = (definition) => {
    const leaves = [];
    const tables = [];
    const emptyTables = [];
    const missing = [];
    collectDamageNodeFacts({
      node: definition.node,
      fieldPath: definition.fieldPath,
      definition,
      resolveSource,
      supportFiles,
      leaves,
      tables,
      emptyTables,
      missing
    });
    const targetOrder = [];
    const seenTargets = new Set();
    for (const leaf of leaves) {
      const match = new RegExp(`^${definition.fieldPath.replace(/[.*+?^${}()|[\]\\]/gu, '\\$&')}\\.targets\\.(\\d+)\\.`, 'u').exec(leaf.fieldPath);
      if (!match || seenTargets.has(match[1])) continue;
      seenTargets.add(match[1]);
      targetOrder.push({
        targetKey: match[1],
        sourceOrdinal: Number(match[1]),
        sourceLocator: makeLocator(resolveSource, leaf.path, leaf.line, leaf.fieldPath)
      });
    }
    return {
      leaves,
      tables: tables.map(({ _identity, ...table }) => table),
      emptyTables,
      missing,
      targetOrder
    };
  };

  const materialize = (profileKey, stack = new Set()) => {
    const definition = definitions.get(profileKey);
    if (!definition) {
      return {
        payload: null,
        sourceRefs: [],
        missing: [{ field: '/payload/rawSourceDefinition/leaves', reasonCode: 'SOURCE_UNAVAILABLE' }],
        failure: [...failures.keys()]
      };
    }
    invariant(!stack.has(profileKey), `Cyclic damage profile inheritance: ${[...stack, profileKey].join(' -> ')}`);
    const own = materializeOwn(definition);
    let inherited = null;
    if (definition.parentKey) {
      inherited = materialize(definition.parentKey, new Set([...stack, profileKey]));
    }
    const leaves = [
      ...(inherited?.payload?.rawSourceDefinition?.leaves ?? []),
      ...own.leaves.filter((leaf) => !leaf.fieldPath.endsWith('.parent_template_name'))
    ];
    const tables = [...(inherited?.payload?.rawSourceDefinition?.tables ?? []), ...own.tables];
    if (definition.parentKey) {
      const parentNode = getTableField(definition.node, 'parent_template_name');
      tables.push({
        tableKey: `${definition.fieldPath}.parent_template_name`,
        quantity: 'profile-parent-inheritance',
        unit: { status: 'unknown', reasonCode: 'NOT_VERIFIED' },
        sourceLocator: makeLocator(resolveSource, definition.path, parentNode?.startLine ?? definition.line,
          `${definition.fieldPath}.parent_template_name`),
        orderedValues: [{
          ordinal: 1,
          rawValue: nodeRaw(parentNode) || definition.parentKey,
          sourceLocator: makeLocator(resolveSource, definition.path, parentNode?.startLine ?? definition.line,
            `${definition.fieldPath}.parent_template_name`)
        }]
      });
    }
    const emptyTables = [...(inherited?.payload?.rawSourceDefinition?.emptyTables ?? []), ...own.emptyTables];
    const targetOrder = [...(inherited?.payload?.rawSourceDefinition?.targetOrder ?? []), ...own.targetOrder];
    const rawSourceDefinition = {
      sourceRef: resolveSource(definition.path),
      path: definition.path,
      line: definition.line,
      fieldPath: definition.fieldPath,
      leaves,
      ...(tables.length ? { tables } : {}),
      ...(targetOrder.length ? { targetOrder } : {}),
      ...(emptyTables.length ? { emptyTables } : {})
    };
    const sourceRefs = [...collectSourceLinks(rawSourceDefinition).values()];
    return {
      payload: { profileKey, rawSourceDefinition },
      sourceRefs,
      missing: [...(inherited?.missing ?? []), ...own.missing]
    };
  };

  const componentMatches = (entry, component, implicitIndex) => {
    if (component?.type === 'string') return entry.key?.type === 'string' && entry.key.value === component.value;
    if (component?.type === 'number') {
      return (entry.key?.type === 'number' && entry.key.value === component.value)
        || (entry.key == null && implicitIndex === component.value);
    }
    if (component?.type === 'reference') return entry.key?.type === 'reference' && entry.key.ref === component.ref;
    return false;
  };
  const annotate = (node, sourcePath, fieldPath) => {
    if (!node || typeof node !== 'object') return node;
    const copy = structuredClone(node);
    const visit = (current, currentPath) => {
      if (!current || typeof current !== 'object') return;
      current._sourcePath = sourcePath;
      current._fieldPath = currentPath;
      if (current.type !== 'table') return;
      let implicitIndex = 0;
      for (const entry of current.entries) {
        if (entry.key == null) implicitIndex += 1;
        visit(entry.value, `${currentPath}.${staticTableKey(entry, implicitIndex)}`);
      }
    };
    visit(copy, fieldPath);
    return copy;
  };
  const setNodePath = (root, components, value) => {
    let current = root;
    for (let index = 0; index < components.length; index += 1) {
      if (current?.type !== 'table') return false;
      const component = components[index];
      let implicitIndex = 0;
      let found = null;
      for (const entry of current.entries) {
        if (entry.key == null) implicitIndex += 1;
        if (componentMatches(entry, component, implicitIndex)) {
          found = entry;
          break;
        }
      }
      if (!found) {
        const key = component.type === 'number' ? { ...component } : structuredClone(component);
        found = { key, value: { type: 'table', entries: [], startLine: value.startLine, endLine: value.endLine } };
        current.entries.push(found);
      }
      if (index === components.length - 1) found.value = value;
      else current = found.value;
    }
    return true;
  };
  const effectiveCache = new Map();
  const effectiveNode = (profileKey, stack = new Set()) => {
    if (effectiveCache.has(profileKey)) return structuredClone(effectiveCache.get(profileKey));
    const definition = definitions.get(profileKey);
    if (!definition || stack.has(profileKey)) return null;
    let effective;
    if (definition.root !== 'overrides') {
      effective = annotate(definition.node, definition.path, definition.fieldPath);
    } else {
      effective = effectiveNode(definition.parentKey, new Set([...stack, profileKey]));
      if (!effective) return null;
      const rows = getTableArray(getTableField(definition.node, 'overrides'));
      for (let rowIndex = 0; rowIndex < rows.length; rowIndex += 1) {
        const values = getTableArray(rows[rowIndex]);
        if (values.length < 2) continue;
        const components = values.slice(0, -1);
        const semanticPath = components.map((component) => component.type === 'reference' ? component.ref : String(component.value)).join('.');
        const value = annotate(values.at(-1), definition.path, `${definition.fieldPath}.${semanticPath}`);
        setNodePath(effective, components, value);
      }
    }
    effectiveCache.set(profileKey, structuredClone(effective));
    return effective;
  };
  const resolveProfileValue = (profileKey, components) => {
    let current = effectiveNode(profileKey);
    for (const component of components) {
      if (current?.type !== 'table') return null;
      let implicitIndex = 0;
      let found = null;
      for (const entry of current.entries) {
        if (entry.key == null) implicitIndex += 1;
        if (componentMatches(entry, component, implicitIndex)) {
          found = entry.value;
          break;
        }
      }
      current = found;
      if (!current) return null;
    }
    if (current.type === 'reference') {
      const definition = definitions.get(profileKey);
      const resolved = resolveNodeReference(current.ref, definition, supportFiles);
      if (resolved?.node) {
        const result = annotate(resolved.node, resolved.path, resolved.fieldPath);
        result._tableRefKey = current.ref;
        return result;
      }
    }
    return current;
  };
  return { definitions, failures, materialize, resolveProfileValue };
}

function generateDirectProfiles({ template, weapon, authoring, resolveSource, damageByProfileKey, generatedDamageByKey, damageCatalog }) {
  const recordById = new Map(authoring.records.map((record) => [`${record.gameReleaseId}\0${record.recordId}`, record]));
  const existingProfiles = weapon.payload.attackProfileRefs
    .map((profileRef) => recordById.get(`${profileRef.gameReleaseId}\0${profileRef.recordId}`))
    .filter(Boolean);
  const existingActions = new Set(existingProfiles.map((profile) => profile.payload.action));
  const attackRecords = [];
  const damageRecords = [];
  const attackRefs = [];
  const rows = actionRowsForTemplate(template, resolveSource);
  for (const row of rows) {
    const rawBindings = directProfileBindings(row, resolveSource, template);
    if (rawBindings.length === 0 || existingActions.has(row.action)) continue;
    const sourceRef = resolveSource(template.path);
    const sourceBindings = [];
    const damageRefs = [];
    for (const binding of rawBindings) {
      let damageRecord = damageByProfileKey.get(binding.profileKey) ?? generatedDamageByKey.get(binding.profileKey);
      if (!damageRecord) {
        const recordId = `darktide:damage-profile:generic:${identifierSlug(binding.profileKey)}`;
        const extracted = damageCatalog.materialize(binding.profileKey);
        const payload = extracted.payload ?? {
          profileKey: binding.profileKey,
          rawSourceDefinition: {
            sourceRef,
            path: template.path,
            line: binding.sourceLocator.line,
            fieldPath: binding.sourceLocator.fieldPath,
            leaves: [{
              line: binding.sourceLocator.line,
              fieldPath: binding.sourceLocator.fieldPath,
              rawValue: binding.rawValue,
              sourceRef,
              path: template.path
            }]
          }
        };
        const sourceRefs = extracted.sourceRefs.length ? extracted.sourceRefs : [sourceRef];
        const missing = extracted.missing.map((item) => ({ ...item, sourceRef: item.sourceRef ?? sourceRefs[0] }));
        damageRecord = pendingRecord(recordId, 'damage-profile', payload, sourceRefs, missing, [
          { fieldPath: '/payload/profileKey', dimension: 'identity' },
          { fieldPath: '/payload/rawSourceDefinition', dimension: 'technical' }
        ]);
        generatedDamageByKey.set(binding.profileKey, damageRecord);
        damageRecords.push(damageRecord);
      }
      const profileRef = ref(damageRecord.recordId);
      if (!damageRefs.some((item) => item.recordId === profileRef.recordId)) damageRefs.push(profileRef);
      sourceBindings.push({
        branch: binding.branch,
        profileRef,
        rawValue: binding.rawValue,
        sourceLocator: binding.sourceLocator
      });
    }
    const mode = attackMode(row.action);
    const attackId = `darktide:attack-profile:generic:${identifierSlug(weapon.payload.markId)}:${row.action}`;
    const attack = pendingRecord(attackId, 'attack-profile', {
      familyId: weapon.payload.familyId,
      markId: weapon.payload.markId,
      templateKey: weapon.payload.templateKey,
      action: row.action,
      mode,
      weaponRef: ref(weapon.recordId),
      damageProfileRefs: damageRefs,
      targetProfileRefs: [],
      contexts: [{
        weaponRef: ref(weapon.recordId),
        templateKey: weapon.payload.templateKey,
        markKey: weapon.payload.markId,
        action: row.action,
        mode,
        damageProfileRef: damageRefs[0]
      }],
      sourceBindings
    }, [sourceRef], [
      { field: '/payload/targetProfileRefs', reasonCode: 'NOT_IMPORTED', sourceRef },
      { field: '/payload/actionResolution', reasonCode: 'NOT_IMPORTED', sourceRef }
    ], [
      { fieldPath: '/payload/action', dimension: 'identity' },
      { fieldPath: '/payload/mode', dimension: 'context' },
      { fieldPath: '/payload/damageProfileRefs', dimension: 'technical' },
      { fieldPath: '/payload/sourceBindings', dimension: 'evidence' }
    ]);
    attackRecords.push(attack);
    attackRefs.push(ref(attackId));
  }
  return { attackRecords, damageRecords, attackRefs };
}

function requireAliases(source) {
  const aliases = new Map();
  const expression = /\blocal\s+([A-Za-z_][A-Za-z0-9_]*)\s*=\s*require\s*\(?\s*["']([^"']+)["']\s*\)?/gu;
  for (const match of source.matchAll(expression)) aliases.set(match[1], `${match[2]}.lua`);
  return aliases;
}

const BASE_TEMPLATE_PATHS = {
  ammo: 'scripts/settings/equipment/weapon_handling_templates/weapon_ammo_templates.lua',
  charge: 'scripts/settings/equipment/weapon_handling_templates/weapon_charge_templates.lua',
  dodge: 'scripts/settings/dodge/weapon_dodge_templates.lua',
  movement_curve_modifier: 'scripts/settings/equipment/weapon_handling_templates/weapon_movement_curve_modifier_templates.lua',
  sprint: 'scripts/settings/sprint/weapon_sprint_templates.lua',
  stamina: 'scripts/settings/stamina/weapon_stamina_templates.lua',
  warp_charge: 'scripts/settings/warp_charge/weapon_warp_charge_templates.lua',
  weapon_chain_lightning: 'scripts/settings/equipment/weapon_handling_templates/weapon_chain_lightning_templates.lua',
  weapon_handling: 'scripts/settings/equipment/weapon_handling_templates/weapon_handling_templates.lua',
  weapon_shout: 'scripts/settings/equipment/weapon_handling_templates/weapon_shout_templates.lua'
};

function canonicalDecimal(node) {
  if (node?.type !== 'number' || !Number.isFinite(node.value)) return null;
  return Object.is(node.value, -0) ? '0' : String(node.value);
}

function pathComponent(node) {
  if (node?.type === 'string' || node?.type === 'number') return { type: node.type, value: node.value };
  if (node?.type === 'reference') return { type: 'reference', ref: node.ref };
  return null;
}

function displayPath(components) {
  return components.map((component, index) => {
    if (component.type === 'number') return `[${component.value}]`;
    const value = component.type === 'reference' ? component.ref : component.value;
    return `${index === 0 ? '' : '.'}${value}`;
  }).join('');
}

function locatorPath(components) {
  return components.map((component) => component.type === 'reference' ? component.ref : String(component.value)).join('.');
}

function collectTraitReferences(baseNode) {
  const references = [];
  const visit = (node, parts) => {
    if (node?.type === 'reference') {
      const match = /^([A-Za-z_][A-Za-z0-9_]*_trait_templates)\.([A-Za-z_][A-Za-z0-9_]*)$/u.exec(node.ref);
      if (match) references.push({ alias: match[1], traitKey: match[2], node, parts });
      return;
    }
    if (node?.type !== 'table') return;
    let implicitIndex = 0;
    for (const entry of node.entries) {
      if (entry.key == null) implicitIndex += 1;
      const component = entry.key == null
        ? { type: 'number', value: implicitIndex }
        : pathComponent(entry.key);
      if (component) visit(entry.value, [...parts, component]);
    }
  };
  visit(baseNode, []);
  return references;
}

function traitDefinition({ alias, traitKey, aliases, reader, traitCache }) {
  const identity = `${alias}.${traitKey}`;
  if (traitCache.has(identity)) return traitCache.get(identity);
  const sourcePath = aliases.get(alias)
    ?? `scripts/settings/equipment/weapon_templates/weapon_trait_templates/${alias}.lua`;
  if (!reader.paths.includes(sourcePath)) {
    traitCache.set(identity, null);
    return null;
  }
  try {
    const parsed = parseLuaStatic(reader.read(sourcePath), { filename: sourcePath, allowUnsupported: true });
    const root = parsed.locals[alias] ?? parsed.returned;
    const node = getTableField(root, traitKey);
    const result = node?.type === 'table' ? { identity, sourcePath, node } : null;
    traitCache.set(identity, result);
    return result;
  } catch {
    traitCache.set(identity, null);
    return null;
  }
}

function traitRows(definition) {
  if (!definition) return [];
  return getTableArray(definition.node).map((row, rowIndex) => {
    const values = getTableArray(row);
    const components = values.slice(0, -1).map(pathComponent);
    if (values.length < 2 || components.some((component) => !component)) return null;
    const parameter = values.at(-1);
    const min = parameter?.type === 'table' ? getTableField(parameter, 'min') : parameter;
    const max = parameter?.type === 'table' ? getTableField(parameter, 'max') : parameter;
    const minDecimal = canonicalDecimal(min);
    const maxDecimal = canonicalDecimal(max);
    return {
      rowIndex: rowIndex + 1,
      components,
      parameter,
      min,
      max,
      range: minDecimal !== null && maxDecimal !== null
        ? { status: 'known', min: minDecimal, max: maxDecimal, unit: 'ratio' }
        : { status: 'unknown', reasonCode: 'NOT_VERIFIED' }
    };
  }).filter(Boolean);
}

function parseBaseTemplateCatalog(reader, cache, templateType) {
  if (cache.has(templateType)) return cache.get(templateType);
  const sourcePath = BASE_TEMPLATE_PATHS[templateType];
  if (!sourcePath || !reader.paths.includes(sourcePath)) {
    cache.set(templateType, null);
    return null;
  }
  try {
    const parsed = parseLuaStatic(reader.read(sourcePath), { filename: sourcePath, allowUnsupported: true });
    const catalog = { sourcePath, node: parsed.returned };
    cache.set(templateType, catalog);
    return catalog;
  } catch {
    cache.set(templateType, null);
    return null;
  }
}

function templateIdentifier(template, templateType, target) {
  const suffix = target.endsWith('_special') ? `special_${templateType}_template` : `${templateType}_template`;
  if (target === 'base' || target === 'base_special') {
    const key = target === 'base_special' ? `special_${templateType}_template` : `${templateType}_template`;
    return new RegExp(`\\bweapon_template\\.${key}\\s*=\\s*["']([^"']+)["']`, 'u').exec(template.source)?.[1] ?? null;
  }
  if (target === 'alternate_fire' || target === 'alternate_fire_special') {
    try {
      const table = findLuaTableAssignment(template.source, 'weapon_template.alternate_fire_settings', { filename: template.path });
      return new RegExp(`\\b${suffix}\\s*=\\s*["']([^"']+)["']`, 'u').exec(table.raw)?.[1] ?? null;
    } catch {
      return null;
    }
  }
  try {
    const actions = findLuaTableAssignment(template.source, 'weapon_template.actions', { filename: template.path });
    const action = getLuaTableFields(actions).find((field) => field.key === target.replace(/_special$/u, ''));
    return action ? new RegExp(`\\b${suffix}\\s*=\\s*["']([^"']+)["']`, 'u').exec(action.rawValue)?.[1] ?? null : null;
  } catch {
    return null;
  }
}

function endpointValues(node) {
  if (!node) return [];
  if (node.type === 'number') return [{ key: 'value', node }];
  if (node.type !== 'table') return [];
  const named = ['lerp_basic', 'lerp_perfect'].map((key) => ({ key, node: getTableField(node, key) })).filter((item) => item.node);
  if (named.length === 2) return named;
  let implicitIndex = 0;
  return node.entries.map((entry) => {
    if (entry.key == null) implicitIndex += 1;
    return { key: staticTableKey(entry, implicitIndex), node: entry.value };
  }).filter((item) => item.node?.type === 'number');
}

function statOutputUnit(templateType, property) {
  if (templateType === 'damage') return inferredProfileUnit(property).status ? 'ratio' : inferredProfileUnit(property);
  if (templateType === 'ammo') return 'instance-count';
  if (templateType === 'dodge' && /distance/u.test(property)) return 'm';
  if (templateType === 'stamina' && /stamina/u.test(property)) return 'stamina-point';
  if (/duration|time/u.test(property)) return 's';
  return 'ratio';
}

function statQuantityKind(templateType, property) {
  if (/power_distribution\.attack/u.test(property)) return 'attack-power-distribution';
  if (/armor_damage_modifier/u.test(property)) return 'armor-damage-modifier';
  if (/boost_curve_multiplier_finesse/u.test(property)) return 'finesse-boost-curve';
  if (templateType === 'movement_curve_modifier') return 'movement-curve-modifier';
  if (templateType === 'sprint') return 'sprint-speed-addend';
  if (templateType === 'stamina') {
    if (/cost/u.test(property)) return 'stamina-cost-rate';
    return 'stamina-capacity-addition';
  }
  if (templateType === 'dodge') {
    if (/distance_scale/u.test(property)) return 'dodge-distance-scale';
    if (/diminishing/u.test(property)) return 'dodge-distance-diminishing-return';
    if (/count|limit/u.test(property)) return 'dodge-count-parameter';
    if (/speed/u.test(property)) return 'dodge-speed-scale';
    if (/cooldown|time/u.test(property)) return 'dodge-cooldown-seconds';
  }
  return null;
}

function generatedStatRecords({ weapon, statKey, property, range, endpoints, resolveSource, generatedStats }) {
  const identity = `${property}\0${range.status === 'known' ? `${range.min}\0${range.max}` : range.reasonCode}`;
  if (generatedStats.has(identity)) return { records: [], definition: generatedStats.get(identity) };
  const numeric = endpoints.map((endpoint) => ({ ...endpoint, decimal: canonicalDecimal(endpoint.node) }));
  if (numeric.length === 0 || numeric.some((endpoint) => endpoint.decimal === null)) return null;
  const selected = numeric.length === 1 ? [numeric[0], numeric[0]] : [numeric[0], numeric.at(-1)];
  const slug = sha256(Buffer.from(identity, 'utf8')).slice(0, 16);
  const curveId = `darktide:stat-curve:generic:${slug}`;
  const definitionId = `darktide:stat-definition:generic:${slug}`;
  const outputUnit = statOutputUnit(property.startsWith('damage_templates.') ? 'damage' : property.split('.')[0].replace(/^weapon_|_templates$/gu, ''), property);
  const knots = selected.map((endpoint, index) => ({
    input: String(index),
    output: endpoint.decimal,
    sourceOrdinal: index + 1,
    rawEndpoint: nodeRaw(endpoint.node),
    sourceLocator: makeLocator(
      resolveSource,
      endpoint.node._sourcePath,
      endpoint.node.startLine,
      endpoint.node._fieldPath
    )
  }));
  const sourceRefs = [...collectSourceLinks(knots).values()];
  const primarySource = sourceRefs[0];
  const curve = pendingRecord(curveId, 'stat-curve', {
    inputUnit: 'ratio', outputUnit, knots,
    interpolation: { status: 'unknown', reasonCode: 'NOT_VERIFIED' },
    edgePolicy: { status: 'unknown', reasonCode: 'NOT_VERIFIED' },
    panelInputRange: { status: 'not-applicable' }
  }, sourceRefs, [
    { field: '/payload/interpolation', reasonCode: 'NOT_VERIFIED', sourceRef: primarySource },
    { field: '/payload/edgePolicy', reasonCode: 'NOT_VERIFIED', sourceRef: primarySource }
  ]);
  const definition = pendingRecord(definitionId, 'stat-definition', {
    quantity: property,
    inputUnit: 'ratio', outputUnit,
    panelInputRange: { status: 'not-applicable' },
    theoreticalInputRange: range.status === 'known'
      ? { ...range, inclusive: { min: true, max: true } }
      : range,
    obtainableInputRange: { status: 'unknown', reasonCode: 'NOT_EXPOSED_BY_SOURCE' },
    curveRef: ref(curveId), claimRefs: []
  }, sourceRefs, [
    { field: '/payload/obtainableInputRange', reasonCode: 'NOT_EXPOSED_BY_SOURCE', sourceRef: primarySource },
    { field: '/payload/claimRefs', reasonCode: 'NOT_IMPORTED', sourceRef: primarySource }
  ]);
  generatedStats.set(identity, definition);
  return { records: [curve, definition], definition };
}

function generateBaseStatValues({ template, weapon, reader, resolveSource, damageCatalog, generatedStats, traitCache, baseTemplateCache }) {
  if (!template.declaresBaseStats) return { records: [], statRefs: [], statBindings: [], statTables: [], missing: [] };
  const baseStats = findLuaTableAssignment(template.source, 'weapon_template.base_stats', { filename: template.path });
  const wrapped = parseLuaStatic(`local base_stats = ${baseStats.raw}\nreturn base_stats`, { filename: template.path, allowUnsupported: true });
  const aliases = requireAliases(template.source);
  const references = collectTraitReferences(wrapped.returned);
  const actions = new Map(actionRowsForTemplate(template, resolveSource).map((row) => [row.action, row]));
  const bindingGroups = new Map();
  const tableGroups = new Map();
  const records = [];
  const statRefs = [];
  const missing = [];

  for (const reference of references) {
    const [statComponent, typeComponent, targetComponent] = reference.parts;
    if (statComponent?.type !== 'string' || typeComponent?.type !== 'string' || targetComponent?.type !== 'string') continue;
    const statKey = statComponent.value;
    const templateType = typeComponent.value;
    const target = targetComponent.value;
    const explicitProfile = reference.parts[3]?.value === 'overrides' ? reference.parts[4]?.value : null;
    const definition = traitDefinition({ ...reference, aliases, reader, traitCache });
    if (!definition) {
      missing.push({ field: `/payload/statBindings/${statKey}/${templateType}/${target}`, reasonCode: 'SOURCE_UNAVAILABLE', sourceRef: resolveSource(template.path) });
      continue;
    }
    const rows = traitRows(definition);
    const weaponLocator = makeLocator(
      resolveSource,
      template.path,
      baseStats.startLine + reference.node.startLine - 1,
      `weapon_template.base_stats.${locatorPath(reference.parts)}`
    );
    let profiles = [];
    let baseIdentifier = null;
    if (templateType === 'damage') {
      profiles = explicitProfile ? [explicitProfile]
        : (actions.has(target) ? directProfileBindings(actions.get(target), resolveSource, template).map((item) => item.profileKey) : []);
    } else {
      baseIdentifier = templateIdentifier(template, templateType, target);
    }
    for (const row of rows) {
      const traitPath = displayPath(row.components);
      const traitFieldPath = `${definition.identity}.${row.rowIndex}.${row.components.length + 1}${row.parameter?.type === 'table' ? '.min' : ''}`;
      const traitLocator = makeLocator(resolveSource, definition.sourcePath, row.min?.startLine ?? row.parameter.startLine, traitFieldPath);
      const destinations = templateType === 'damage' ? profiles : [baseIdentifier].filter(Boolean);
      if (destinations.length === 0) {
        missing.push({ field: `/payload/statBindings/${statKey}/${templateType}/${target}/${traitPath}`, reasonCode: 'NOT_VERIFIED', sourceRef: resolveSource(template.path) });
        continue;
      }
      for (const destination of destinations) {
        let endpointNode;
        let property;
        let tableSourcePath;
        let catalog = null;
        if (templateType === 'damage') {
          endpointNode = damageCatalog.resolveProfileValue(destination, row.components);
          property = `damage_templates.${destination}.${traitPath}`;
        } else {
          catalog = parseBaseTemplateCatalog(reader, baseTemplateCache, templateType);
          endpointNode = catalog ? traverseTable(getTableField(catalog.node, destination), row.components.map((component) => component.value ?? component.ref)) : null;
          if (endpointNode) {
            const annotateEndpoint = (node, fieldPath) => {
              node._sourcePath = catalog.sourcePath;
              node._fieldPath = fieldPath;
              if (node.type !== 'table') return;
              let implicitIndex = 0;
              for (const entry of node.entries) {
                if (entry.key == null) implicitIndex += 1;
                annotateEndpoint(entry.value, `${fieldPath}.${staticTableKey(entry, implicitIndex)}`);
              }
            };
            annotateEndpoint(endpointNode, `weapon_${templateType}_templates.${destination}.${traitPath}`);
            tableSourcePath = catalog.sourcePath;
          }
          property = `weapon_${templateType}_templates.${destination}.${traitPath}`;
        }
        if (!endpointNode) {
          const unavailable = templateType === 'damage'
            ? !damageCatalog.definitions.has(destination)
            : catalog === null;
          if (unavailable) {
            missing.push({
              field: `/payload/statTables/${statKey}/${property}`,
              reasonCode: 'SOURCE_UNAVAILABLE',
              sourceRef: resolveSource(tableSourcePath ?? definition.sourcePath)
            });
          }
          continue;
        }
        const quantityKind = statQuantityKind(templateType, property);
        if (quantityKind) {
          const bindings = bindingGroups.get(statKey) ?? [];
          const binding = {
            property,
            ...(templateType === 'damage' ? { profileKey: destination } : {}),
            weaponLocator,
            traitTemplateKey: definition.identity,
            traitLocator,
            traitParameterRange: row.range,
            _quantityKind: quantityKind,
            _templateType: templateType,
            _rawTraitValue: nodeRaw(row.parameter)
          };
          const bindingIdentity = `${property}\0${binding.profileKey ?? ''}`;
          if (!bindings.some((item) => item._identity === bindingIdentity)) bindings.push({ _identity: bindingIdentity, ...binding });
          bindingGroups.set(statKey, bindings);
        }

        const endpoints = endpointValues(endpointNode);
        if (endpoints.length === 0) {
          missing.push({ field: `/payload/statTables/${statKey}/${property}`, reasonCode: 'NOT_VERIFIED', sourceRef: resolveSource(tableSourcePath ?? definition.sourcePath) });
          continue;
        }
        const generated = generatedStatRecords({ weapon, statKey, property, range: row.range, endpoints, resolveSource, generatedStats });
        if (!generated) {
          missing.push({ field: `/payload/statTables/${statKey}/${property}`, reasonCode: 'NOT_VERIFIED', sourceRef: resolveSource(tableSourcePath ?? endpointNode._sourcePath ?? definition.sourcePath) });
          continue;
        }
        records.push(...generated.records);
        const definitionRef = ref(generated.definition.recordId);
        if (!statRefs.some((item) => item.recordId === definitionRef.recordId)) statRefs.push(definitionRef);
        const tableIdentity = `${statKey}\0${templateType}\0${destination}`;
        let statTable = tableGroups.get(tableIdentity);
        if (!statTable) {
          statTable = {
            statKey,
            ...(templateType === 'damage' ? { tableKey: destination } : { templateKey: destination }),
            sourceLocator: generated.records[0]?.payload.knots[0].sourceLocator
              ?? makeLocator(resolveSource, endpointNode._sourcePath, endpointNode.startLine, endpointNode._fieldPath),
            properties: []
          };
          tableGroups.set(tableIdentity, statTable);
        }
        if (!statTable.properties.some((item) => item.property === property)) {
          statTable.properties.push({
            property,
            unit: statOutputUnit(templateType, property),
            sourceLocator: makeLocator(resolveSource, endpointNode._sourcePath, endpointNode.startLine, endpointNode._fieldPath),
            orderedValues: endpoints.map((endpoint) => ({
              key: endpoint.key,
              rawValue: nodeRaw(endpoint.node),
              ...(canonicalDecimal(endpoint.node) === null ? {} : { decimal: canonicalDecimal(endpoint.node) }),
              line: endpoint.node.startLine,
              fieldPath: endpoint.node._fieldPath,
              ...(endpoint.node._tableRefKey ? { tableRefKey: endpoint.node._tableRefKey } : {})
            }))
          });
        }
      }
    }
  }
  return {
    records,
    statRefs,
    statBindings: [...bindingGroups.entries()].map(([statKey, bindings]) => ({
      statKey,
      bindings: bindings.map(({ _identity, _quantityKind, _templateType, _rawTraitValue, ...binding }) => binding)
    })),
    statTableSemantics: [...bindingGroups.entries()].map(([statKey, bindings]) => ({
      statKey,
      groupKey: 'generic-static-base-stat',
      bindings: [...new Map(bindings.map((binding) => [binding.property, binding])).values()].map((binding) => ({
        property: binding.property,
        quantityKind: binding._quantityKind,
        unit: binding._quantityKind === 'movement-curve-modifier'
          ? { status: 'not-applicable' }
          : statOutputUnit(binding._templateType, binding.property),
        consumerEvidence: [{
          sourceLocator: binding.traitLocator,
          rawValue: binding._rawTraitValue,
          summary: `The pinned ${binding.traitTemplateKey} row selects this affected property.`
        }],
        theoreticalInputRange: binding.traitParameterRange.status === 'known'
          ? { ...binding.traitParameterRange, inclusive: { min: true, max: true } }
          : binding.traitParameterRange,
        obtainableInputRange: { status: 'unknown', reasonCode: 'NOT_EXPOSED_BY_SOURCE' }
      }))
    })),
    statTables: [...tableGroups.values()],
    missing: [...new Map(missing.map((item) => [item.field, item])).values()]
  };
}

function makeWeaponCandidate({ authoring, templates, reader }) {
  const weapons = authoring.records.filter((record) => record.gameReleaseId === GAME_RELEASE_ID && record.kind === 'weapon');
  const templateByKey = new Map(templates.map((template) => [template.templateKey, template]));
  const damageByProfileKey = new Map(authoring.records
    .filter((record) => record.gameReleaseId === GAME_RELEASE_ID && record.kind === 'damage-profile')
    .map((record) => [record.payload.profileKey, record]));
  const generatedDamageByKey = new Map();
  const generatedStats = new Map();
  const traitCache = new Map();
  const baseTemplateCache = new Map();
  const sourceRefs = [];
  const resolveSource = sourceResolver(authoring, reader, sourceRefs);
  const recordById = new Map(authoring.records.map((record) => [`${record.gameReleaseId}\0${record.recordId}`, record]));
  const referencedProfileKeys = new Set();
  for (const weapon of weapons) {
    const template = templateByKey.get(weapon.payload.templateKey);
    const existingActions = new Set((weapon.payload.attackProfileRefs ?? [])
      .map((profileRef) => recordById.get(`${profileRef.gameReleaseId}\0${profileRef.recordId}`)?.payload?.action)
      .filter(Boolean));
    for (const row of actionRowsForTemplate(template, resolveSource)) {
      if (existingActions.has(row.action)) continue;
      for (const binding of directProfileBindings(row, resolveSource, template)) referencedProfileKeys.add(binding.profileKey);
    }
  }
  const damageCatalog = buildDamageProfileCatalog({ reader, resolveSource, authoring, referencedProfileKeys });
  const chainaxeM2 = weapons.find((weapon) => weapon.payload.markId === 'chainaxe_p1_m2');
  invariant(chainaxeM2?.payload.actionProfileResolution && chainaxeM2.payload.panelPreviewRules, 'Approved chainaxe common action closure is missing.');
  const common = {
    inputSetup: chainaxeM2.payload.actionProfileResolution.inputSetup,
    fallbackActions: chainaxeM2.payload.actionProfileResolution.fallbackActions,
    actionGenerators: chainaxeM2.payload.actionProfileResolution.actionGenerators,
    unwieldBinding: chainaxeM2.payload.actionProfileResolution.generatorBindings.find((item) => item.generatorKey === 'generate_unwield_action'),
    panelPreviewRules: compactPanelPreviewRules(chainaxeM2.payload.panelPreviewRules)
  };
  const patches = [];
  const records = [];
  for (const weapon of weapons) {
    const template = templateByKey.get(weapon.payload.templateKey);
    invariant(template, `Registered static template is missing for authoring weapon ${weapon.payload.templateKey}`);
    let resolution;
    let actionContinuations;
    let displayedAttacks;
    let attackProfileRefs = structuredClone(weapon.payload.attackProfileRefs);
    let statRefs = structuredClone(weapon.payload.statRefs);
    if (weapon.payload.actionProfileResolution) {
      resolution = structuredClone(weapon.payload.actionProfileResolution);
      actionContinuations = structuredClone(weapon.payload.actionContinuations);
      displayedAttacks = structuredClone(weapon.payload.displayedAttacks);
    } else {
      const evidenceId = `darktide:evidence:generic-weapon-template:${weapon.payload.markId}:${PINNED_COMMIT.slice(0, 12)}`;
      const weaponSource = resolveSource(template.path);
      records.push({
        recordId: evidenceId,
        kind: 'evidence',
        owner: 'source',
        gameReleaseId: GAME_RELEASE_ID,
        payload: {
          evidenceKind: 'code-observed',
          sourceRef: weaponSource,
          safeSummary: `Pinned ${template.templateKey} Lua template parsed statically without execution; action rows, continuation targets, input identities, and displayed attack summaries retain source locators while runtime conditions remain unevaluated.`
        },
        sourceRefs: [weaponSource],
        dataCoverage: {
          status: 'partial',
          missing: [{ field: '/runtime-condition-execution', reasonCode: 'NOT_IMPORTED', sourceRef: weaponSource }]
        },
        reviewState: 'pending',
        reviewTargets: [
          { fieldPath: '/payload/sourceRef', dimension: 'evidence' },
          { fieldPath: '/payload/safeSummary', dimension: 'technical' }
        ]
      });
      const generated = makeGenericResolution({ template, weapon, authoring, common, resolveSource });
      resolution = generated.resolution;
      actionContinuations = generated.actionContinuations;
      const profiles = generateDirectProfiles({
        template,
        weapon,
        authoring,
        resolveSource,
        damageByProfileKey,
        generatedDamageByKey,
        damageCatalog
      });
      records.push(...profiles.damageRecords, ...profiles.attackRecords);
      attackProfileRefs.push(...profiles.attackRefs);
      resolution.staticClosure.profileBindingCount += profiles.attackRecords.reduce(
        (sum, record) => sum + record.payload.sourceBindings.length,
        0
      );
      displayedAttacks = displayedAttacksForTemplate(template, weapon, authoring, resolveSource, evidenceId);
    }
    const hasMissingBaseStats = (weapon.dataCoverage.missing ?? []).some((item) =>
      item.field === '/payload/all-base-stat-definitions-and-rating-mapping');
    const stats = hasMissingBaseStats ? generateBaseStatValues({
      template,
      weapon,
      reader,
      resolveSource,
      damageCatalog,
      generatedStats,
      traitCache,
      baseTemplateCache
    }) : null;
    if (stats) {
      records.push(...stats.records);
      statRefs.push(...stats.statRefs.filter((statRef) => !statRefs.some((item) => item.recordId === statRef.recordId)));
    }
    const panelPreviewRules = structuredClone(common.panelPreviewRules);
    const fields = [
      { fieldPath: '/payload/actionProfileResolution', value: resolution },
      { fieldPath: '/payload/actionContinuations', value: actionContinuations },
      { fieldPath: '/payload/displayedAttacks', value: displayedAttacks },
      { fieldPath: '/payload/panelPreviewRules', value: panelPreviewRules },
      { fieldPath: '/payload/attackProfileRefs', value: attackProfileRefs },
      { fieldPath: '/payload/statRefs', value: statRefs }
    ];
    if (stats) {
      fields.push(
        { fieldPath: '/payload/statBindings', value: stats.statBindings },
        { fieldPath: '/payload/statTableSemantics', value: stats.statTableSemantics },
        { fieldPath: '/payload/statTables', value: stats.statTables }
      );
    }
    const missing = (weapon.dataCoverage.missing ?? []).filter((item) => ![
      '/payload/actionProfileResolution',
      '/payload/all-actions-and-display-segments',
      '/payload/displayedAttacks',
      '/payload/actionContinuations',
      ...(stats ? ['/payload/all-base-stat-definitions-and-rating-mapping'] : [])
    ].includes(item.field));
    if (stats) missing.push(...stats.missing);
    const uniqueMissing = [...new Map(missing.map((item) => [item.field, item])).values()];
    const links = collectSourceLinks(fields).values();
    patches.push({
      recordId: weapon.recordId,
      gameReleaseId: weapon.gameReleaseId,
      fields,
      sourceRefs: [...links],
      dataCoverage: { status: uniqueMissing.length === 0 ? 'complete' : 'partial', missing: uniqueMissing },
      reviewTargets: [
        { fieldPath: '/payload/actionProfileResolution', dimension: 'technical' },
        { fieldPath: '/payload/actionContinuations', dimension: 'technical' },
        { fieldPath: '/payload/displayedAttacks', dimension: 'technical' },
        { fieldPath: '/payload/panelPreviewRules', dimension: 'technical' },
        { fieldPath: '/payload/attackProfileRefs', dimension: 'technical' },
        { fieldPath: '/payload/statRefs', dimension: 'technical' },
        ...(stats ? [
          { fieldPath: '/payload/statBindings', dimension: 'technical' },
          { fieldPath: '/payload/statTableSemantics', dimension: 'technical' },
          { fieldPath: '/payload/statTables', dimension: 'technical' }
        ] : [])
      ]
    });
  }
  patches.sort((left, right) => lexical(left.recordId, right.recordId));
  records.sort((left, right) => lexical(left.recordId, right.recordId));
  return {
    schemaVersion: 'generic-weapon-template-candidate/1.0.0',
    gameReleases: [], sourceSnapshots: [], sourceRefs,
    patches,
    records, tombstones: []
  };
}

function makeSnapshot(reader, stats) {
  const files = [...reader.files.values()].map(({ path: sourcePath, blob, sha256: artifactSha256 }) => ({
    path: sourcePath,
    blob,
    sha256: artifactSha256
  })).sort((left, right) => lexical(left.path, right.path));
  const manifestSha256 = sha256(Buffer.from(JSON.stringify(files), 'utf8'));
  const contentSha256 = sha256(Buffer.from(files.map((file) => `${file.path}\0${file.sha256}\n`).join(''), 'utf8'));
  return {
    schemaVersion: 'generic-weapon-templates-snapshot/1.0.0',
    repository: PUBLIC_REPOSITORY,
    gameReleaseId: GAME_RELEASE_ID,
    commit: PINNED_COMMIT,
    snapshot: {
      snapshotId: `generic-weapon-templates-1.13.4-${PINNED_COMMIT.slice(0, 12)}`,
      commit: PINNED_COMMIT,
      manifestSha256,
      contentSha256
    },
    files,
    stats
  };
}

function summarizeValueExtraction(authoringWeapons, candidate) {
  const generatedDamage = candidate.records.filter((record) => record.kind === 'damage-profile');
  const generatedDefinitions = candidate.records.filter((record) => record.kind === 'stat-definition');
  const generatedCurves = candidate.records.filter((record) => record.kind === 'stat-curve');
  const patchesById = new Map(candidate.patches.map((patch) => [patch.recordId, patch]));
  const originallyMissing = authoringWeapons.filter((weapon) => (weapon.dataCoverage.missing ?? []).some((item) =>
    item.field === '/payload/all-base-stat-definitions-and-rating-mapping'));
  const migrated = originallyMissing.filter((weapon) => {
    const patch = patchesById.get(weapon.recordId);
    return patch?.fields.some((field) => field.fieldPath === '/payload/statBindings')
      && patch.fields.some((field) => field.fieldPath === '/payload/statTables')
      && !(patch.dataCoverage.missing ?? []).some((item) => item.field === '/payload/all-base-stat-definitions-and-rating-mapping');
  });
  const partialWeapons = authoringWeapons.map((weapon) => {
    const missing = patchesById.get(weapon.recordId)?.dataCoverage?.missing ?? weapon.dataCoverage.missing ?? [];
    return {
      recordId: weapon.recordId,
      markId: weapon.payload.markId,
      missingFieldCount: missing.length,
      reasonCounts: Object.fromEntries(Object.entries(Object.groupBy(missing, (item) => item.reasonCode))
        .map(([reasonCode, rows]) => [reasonCode, rows.length]))
    };
  }).filter((item) => item.missingFieldCount > 0);
  const remaining = partialWeapons.flatMap((weapon) => Object.entries(weapon.reasonCounts)
    .flatMap(([reasonCode, count]) => Array.from({ length: count }, () => reasonCode)));
  return {
    referencedDamageProfileCount: generatedDamage.length,
    resolvedDamageProfileCount: generatedDamage.filter((record) =>
      record.payload.rawSourceDefinition.leaves.length > 1
      && !(record.dataCoverage.missing ?? []).some((item) => item.field === '/payload/rawSourceDefinition/profileBody')).length,
    unresolvedDamageProfiles: generatedDamage.filter((record) => (record.dataCoverage.missing ?? []).length > 0)
      .map((record) => ({ profileKey: record.payload.profileKey, missing: record.dataCoverage.missing })),
    baseStatWeaponCount: originallyMissing.length,
    resolvedBaseStatWeaponCount: migrated.length,
    generatedStatDefinitionCount: generatedDefinitions.length,
    generatedStatCurveCount: generatedCurves.length,
    partialWeaponCount: partialWeapons.length,
    partialWeapons,
    remainingReasonCounts: Object.fromEntries(Object.entries(Object.groupBy(remaining, (reasonCode) => reasonCode))
      .map(([reasonCode, rows]) => [reasonCode, rows.length]))
  };
}

export async function buildGenericWeaponTemplates({ sourceCodeRepo, commit = PINNED_COMMIT, sourceRoot = ROOT } = {}) {
  invariant(sourceCodeRepo, 'sourceCodeRepo is required. Set --source-code-repo or DARKTIDE_SOURCE_CODE_REPO.');
  invariant(commit === PINNED_COMMIT, `Generic weapon-template import is pinned to ${PINNED_COMMIT}.`);
  const reader = makeSourceReader(sourceCodeRepo, commit);
  const registeredTemplates = weaponTemplateInventory(reader.read(WEAPON_REGISTRY));
  const registeredByPath = new Map(registeredTemplates.map((item) => [item.path, { ...item, registered: true }]));
  const templatePaths = reader.paths.filter((sourcePath) => sourcePath.startsWith('scripts/settings/equipment/weapon_templates/')
    && sourcePath.endsWith('.lua')
    && /\bweapon_template\.traits\s*=/u.test(reader.read(sourcePath)));
  const templates = templatePaths.map((sourcePath) => registeredByPath.get(sourcePath) ?? ({
    templateKey: path.posix.basename(sourcePath, '.lua'),
    path: sourcePath,
    registered: false
  })).sort((left, right) => lexical(left.path, right.path));
  const inventory = scanTemplateInventory(reader, templates);
  const authoring = JSON.parse(await readFile(path.join(sourceRoot, BASE_AUTHORING), 'utf8'));
  const authoringWeapons = authoring.records.filter((record) => record.gameReleaseId === GAME_RELEASE_ID && record.kind === 'weapon');
  const candidate = makeWeaponCandidate({ authoring, templates: inventory.extracted, reader });
  const stats = {
    inventory: inventory.stats,
    registeredTemplateCount: registeredTemplates.length,
    authoringWeaponCount: authoringWeapons.length,
    partialAuthoringWeaponCount: authoringWeapons.filter((record) => record.dataCoverage.status === 'partial').length,
    patchCount: candidate.patches.length,
    generatedRecordCount: candidate.records.length,
    values: summarizeValueExtraction(authoringWeapons, candidate)
  };
  const snapshot = makeSnapshot(reader, stats);
  const merged = mergeGenericWeaponCandidate(authoring, candidate);
  const validation = await validateSourceContractFromDisk(merged, { sourceRoot });
  if (!validation.valid) {
    throw new Error(`Generated generic weapon-template candidate is invalid:\n${JSON.stringify(validation.issues, null, 2)}`);
  }
  return {
    stats,
    templates: inventory.extracted,
    authoring,
    candidate,
    merged,
    snapshot,
    validation,
    unresolvedWeapons: stats.values.partialWeapons,
    reader
  };
}

export async function loadGenericWeaponTemplateCandidate({ outputDir } = {}) {
  invariant(outputDir, 'outputDir is required. Pass the directory containing weapon-templates.');
  const candidateDirectory = path.join(path.resolve(outputDir), OUTPUT_CANDIDATE_DIRECTORY);
  const index = JSON.parse(await readFile(path.join(candidateDirectory, OUTPUT_CANDIDATE_INDEX), 'utf8'));
  invariant(index.schemaVersion === CANDIDATE_INDEX_SCHEMA, 'Unsupported generic weapon-template candidate index schema.');
  invariant(typeof index.candidateSchemaVersion === 'string', 'Candidate index is missing candidateSchemaVersion.');
  invariant(Array.isArray(index.files) && index.files.length > 0, 'Candidate index has no part files.');

  const candidate = {
    schemaVersion: index.candidateSchemaVersion,
    gameReleases: [],
    sourceSnapshots: [],
    sourceRefs: [],
    patches: [],
    records: [],
    tombstones: []
  };
  const seen = new Set();
  for (const entry of index.files) {
    invariant(typeof entry.filename === 'string'
      && path.basename(entry.filename) === entry.filename
      && entry.filename.endsWith('.json')
      && entry.filename !== OUTPUT_CANDIDATE_INDEX,
    `Unsafe candidate part filename: ${entry.filename}`);
    invariant(!seen.has(entry.filename), `Duplicate candidate part filename: ${entry.filename}`);
    seen.add(entry.filename);
    const bytes = await readFile(path.join(candidateDirectory, entry.filename));
    invariant(sha256(bytes) === entry.sha256, `Candidate part SHA-256 mismatch: ${entry.filename}`);
    const part = JSON.parse(bytes.toString('utf8'));
    invariant(part.schemaVersion === CANDIDATE_PART_SCHEMA, `Unsupported candidate part schema: ${entry.filename}`);
    invariant(part.familyId === entry.familyId, `Candidate part familyId mismatch: ${entry.filename}`);
    invariant(part.patches.length === entry.counts.patchCount, `Candidate part patch count mismatch: ${entry.filename}`);
    invariant(part.records.length === entry.counts.recordCount, `Candidate part record count mismatch: ${entry.filename}`);
    candidate.gameReleases.push(...part.gameReleases);
    candidate.sourceSnapshots.push(...part.sourceSnapshots);
    candidate.sourceRefs.push(...part.sourceRefs);
    candidate.patches.push(...part.patches);
    candidate.records.push(...part.records);
    candidate.tombstones.push(...part.tombstones);
  }
  candidate.patches.sort((left, right) => lexical(left.recordId, right.recordId));
  candidate.records.sort((left, right) => lexical(left.recordId, right.recordId));
  invariant(index.counts.fileCount === index.files.length, 'Candidate index file count mismatch.');
  invariant(index.counts.patchCount === candidate.patches.length, 'Candidate index patch count mismatch.');
  invariant(index.counts.recordCount === candidate.records.length, 'Candidate index record count mismatch.');
  invariant(index.counts.gameReleaseCount === candidate.gameReleases.length, 'Candidate index game-release count mismatch.');
  invariant(index.counts.sourceSnapshotCount === candidate.sourceSnapshots.length, 'Candidate index source-snapshot count mismatch.');
  invariant(index.counts.sourceRefCount === candidate.sourceRefs.length, 'Candidate index source-ref count mismatch.');
  invariant(index.counts.tombstoneCount === candidate.tombstones.length, 'Candidate index tombstone count mismatch.');
  return candidate;
}

export async function writeGenericWeaponTemplates({ sourceCodeRepo, commit = PINNED_COMMIT, outputDir, sourceRoot = ROOT } = {}) {
  invariant(outputDir, 'outputDir is required. Pass --output-dir.');
  const built = await buildGenericWeaponTemplates({ sourceCodeRepo, commit, sourceRoot });
  const resolved = path.resolve(outputDir);
  await mkdir(resolved, { recursive: true });
  const candidateDirectory = path.join(resolved, OUTPUT_CANDIDATE_DIRECTORY);
  await rm(candidateDirectory, { recursive: true, force: true });
  await mkdir(candidateDirectory, { recursive: true });
  await rm(path.join(resolved, LEGACY_OUTPUT_CANDIDATE), { force: true });

  const parts = partitionGenericWeaponCandidate(built.candidate, built.authoring)
    .map(({ filename, part }) => ({ filename, part, bytes: jsonBytes(part) }));
  for (const part of parts) {
    invariant(part.bytes.length < MAX_CANDIDATE_PART_BYTES,
      `Candidate part must stay below 10 MB: ${part.filename} is ${part.bytes.length} bytes`);
  }
  const index = {
    schemaVersion: CANDIDATE_INDEX_SCHEMA,
    candidateSchemaVersion: built.candidate.schemaVersion,
    files: parts.map(({ filename, part, bytes }) => ({
      filename,
      familyId: part.familyId,
      sha256: sha256(bytes),
      counts: { patchCount: part.patches.length, recordCount: part.records.length }
    })),
    counts: {
      fileCount: parts.length,
      familyFileCount: parts.length - 1,
      patchCount: built.candidate.patches.length,
      recordCount: built.candidate.records.length,
      gameReleaseCount: built.candidate.gameReleases.length,
      sourceSnapshotCount: built.candidate.sourceSnapshots.length,
      sourceRefCount: built.candidate.sourceRefs.length,
      tombstoneCount: built.candidate.tombstones.length
    }
  };
  const outputs = [
    ...parts.map(({ filename, bytes }) => ({
      relativePath: path.posix.join(OUTPUT_CANDIDATE_DIRECTORY, filename),
      absolutePath: path.join(candidateDirectory, filename),
      bytes
    })),
    {
      relativePath: path.posix.join(OUTPUT_CANDIDATE_DIRECTORY, OUTPUT_CANDIDATE_INDEX),
      absolutePath: path.join(candidateDirectory, OUTPUT_CANDIDATE_INDEX),
      bytes: jsonBytes(index)
    },
    { relativePath: OUTPUT_SNAPSHOT, absolutePath: path.join(resolved, OUTPUT_SNAPSHOT), bytes: jsonBytes(built.snapshot) }
  ];
  for (const output of outputs) await writeFile(output.absolutePath, output.bytes);
  return {
    ...built,
    candidateIndex: index,
    outputPaths: outputs.map((output) => output.absolutePath),
    outputSizes: Object.fromEntries(outputs.map((output) => [output.relativePath, output.bytes.length]))
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
    if (!known.has(argv[index]) || !argv[index + 1]) {
      throw new Error('Usage: node scripts/content/imports/generic-weapon-templates.mjs --source-code-repo <repo> --commit <commit> --output-dir <directory>');
    }
  }
  const sourceCodeRepo = argument(argv, '--source-code-repo') ?? process.env.DARKTIDE_SOURCE_CODE_REPO;
  const commit = argument(argv, '--commit') ?? PINNED_COMMIT;
  const outputDir = argument(argv, '--output-dir');
  if (!sourceCodeRepo || !outputDir) {
    throw new Error('Usage: node scripts/content/imports/generic-weapon-templates.mjs --source-code-repo <repo> --commit <commit> --output-dir <directory>');
  }
  const result = await writeGenericWeaponTemplates({ sourceCodeRepo, commit, outputDir });
  process.stdout.write(`Generic weapon-template candidate valid: ${result.stats.patchCount} patches, ${result.stats.generatedRecordCount} generated records.\n${result.outputPaths.map((item) => path.resolve(item)).join('\n')}\n`);
}

if (process.argv[1] && pathToFileURL(path.resolve(process.argv[1])).href === import.meta.url) {
  main(process.argv.slice(2)).catch((error) => {
    process.stderr.write(`${error.stack ?? error}\n`);
    process.exitCode = 1;
  });
}
