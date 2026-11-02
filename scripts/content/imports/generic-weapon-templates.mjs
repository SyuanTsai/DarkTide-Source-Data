import { createHash } from 'node:crypto';
import { execFileSync } from 'node:child_process';
import { mkdir, readFile, writeFile } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath, pathToFileURL } from 'node:url';

import {
  findLuaTableAssignment,
  getLuaListItems,
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
const OUTPUT_CANDIDATE = 'weapon-template-candidates.json';
const OUTPUT_SNAPSHOT = 'weapons-snapshot.json';

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

function sourceResolver(authoring) {
  const sourcesByPath = new Map();
  for (const source of authoring.sourceRefs.filter((item) => item.gameReleaseId === GAME_RELEASE_ID && item.path)) {
    const rows = sourcesByPath.get(source.path) ?? [];
    rows.push(source);
    sourcesByPath.set(source.path, rows);
  }
  const resolve = (sourcePath) => {
    const sources = sourcesByPath.get(sourcePath) ?? [];
    invariant(sources.length > 0, `Authoring has no pinned sourceRef for ${sourcePath}`);
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

function generateDirectProfiles({ template, weapon, authoring, resolveSource, damageByProfileKey, generatedDamageByKey }) {
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
        damageRecord = pendingRecord(recordId, 'damage-profile', {
          profileKey: binding.profileKey,
          rawSourceDefinition: {
            sourceRef,
            path: template.path,
            line: binding.sourceLocator.line,
            fieldPath: binding.sourceLocator.fieldPath,
            leaves: [{
              line: binding.sourceLocator.line,
              fieldPath: binding.sourceLocator.fieldPath,
              rawValue: binding.rawValue
            }]
          }
        }, [sourceRef], [{
          field: '/payload/rawSourceDefinition/profileBody',
          reasonCode: 'NOT_IMPORTED',
          sourceRef
        }], [
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

function firstStaticRange(table) {
  const min = /\bmin\s*=\s*(-?(?:\d+\.\d*|\.\d+|\d+)(?:[eE][+-]?\d+)?)/u.exec(table.raw);
  const max = /\bmax\s*=\s*(-?(?:\d+\.\d*|\.\d+|\d+)(?:[eE][+-]?\d+)?)/u.exec(table.raw);
  if (!min || !max) return null;
  return {
    min: { rawValue: min[1], line: table.startLine + lineWithin(table.raw, min.index) - 1 },
    max: { rawValue: max[1], line: table.startLine + lineWithin(table.raw, max.index) - 1 }
  };
}

function generateTraitRangeStats({ template, weapon, reader, resolveSource, generatedStatsByTrait }) {
  if (!template.declaresBaseStats) return { records: [], statRefs: [] };
  const aliases = requireAliases(template.source);
  const baseStats = findLuaTableAssignment(template.source, 'weapon_template.base_stats', { filename: template.path });
  const references = new Map();
  for (const match of baseStats.raw.matchAll(/\b([A-Za-z_][A-Za-z0-9_]*_trait_templates)\.([A-Za-z_][A-Za-z0-9_]*)/gu)) {
    references.set(`${match[1]}\0${match[2]}`, { alias: match[1], traitKey: match[2] });
  }
  const records = [];
  const statRefs = [];
  for (const { alias, traitKey } of references.values()) {
    const sourcePath = aliases.get(alias)
      ?? `scripts/settings/equipment/weapon_templates/weapon_trait_templates/${alias}.lua`;
    if (!sourcePath || !resolveSource.paths.has(sourcePath) || !reader.paths.includes(sourcePath)) continue;
    const identity = `${alias}.${traitKey}`;
    let generated = generatedStatsByTrait.get(identity);
    if (!generated) {
      let table;
      try {
        table = findLuaTableAssignment(reader.read(sourcePath), identity, { filename: sourcePath });
      } catch {
        continue;
      }
      const range = firstStaticRange(table);
      if (!range) continue;
      const sourceRef = resolveSource(sourcePath);
      const curveId = `darktide:stat-curve:generic:${identifierSlug(identity)}`;
      const definitionId = `darktide:stat-definition:generic:${identifierSlug(identity)}`;
      const locator = (endpoint, name) => makeLocator(resolveSource, sourcePath, endpoint.line, `${identity}.parameter_range.${name}`);
      const curve = pendingRecord(curveId, 'stat-curve', {
        inputUnit: 'ratio',
        outputUnit: 'ratio',
        knots: [
          {
            input: range.min.rawValue,
            output: range.min.rawValue,
            sourceOrdinal: 1,
            rawEndpoint: range.min.rawValue,
            sourceLocator: locator(range.min, 'min')
          },
          {
            input: range.max.rawValue,
            output: range.max.rawValue,
            sourceOrdinal: 2,
            rawEndpoint: range.max.rawValue,
            sourceLocator: locator(range.max, 'max')
          }
        ],
        interpolation: { status: 'unknown', reasonCode: 'NOT_VERIFIED' },
        edgePolicy: { status: 'unknown', reasonCode: 'NOT_VERIFIED' },
        panelInputRange: { status: 'not-applicable' }
      }, [sourceRef], [
        { field: '/payload/interpolation', reasonCode: 'NOT_VERIFIED', sourceRef },
        { field: '/payload/edgePolicy', reasonCode: 'NOT_VERIFIED', sourceRef }
      ]);
      const definition = pendingRecord(definitionId, 'stat-definition', {
        quantity: `${identity}.parameter-range`,
        inputUnit: 'ratio',
        outputUnit: 'ratio',
        panelInputRange: { status: 'not-applicable' },
        theoreticalInputRange: {
          status: 'known',
          min: range.min.rawValue,
          max: range.max.rawValue,
          unit: 'ratio',
          inclusive: { min: true, max: true }
        },
        obtainableInputRange: { status: 'unknown', reasonCode: 'NOT_EXPOSED_BY_SOURCE' },
        curveRef: ref(curveId),
        claimRefs: []
      }, [sourceRef], [{
        field: '/payload/obtainableInputRange',
        reasonCode: 'NOT_EXPOSED_BY_SOURCE',
        sourceRef
      }, {
        field: '/payload/claimRefs',
        reasonCode: 'NOT_IMPORTED',
        sourceRef
      }]);
      generated = { curve, definition };
      generatedStatsByTrait.set(identity, generated);
      records.push(curve, definition);
    }
    const definitionRef = ref(generated.definition.recordId);
    if (!statRefs.some((item) => item.recordId === definitionRef.recordId)) statRefs.push(definitionRef);
  }
  return { records, statRefs };
}

function makeWeaponCandidate({ authoring, templates, reader }) {
  const weapons = authoring.records.filter((record) => record.gameReleaseId === GAME_RELEASE_ID && record.kind === 'weapon');
  const templateByKey = new Map(templates.map((template) => [template.templateKey, template]));
  const damageByProfileKey = new Map(authoring.records
    .filter((record) => record.gameReleaseId === GAME_RELEASE_ID && record.kind === 'damage-profile')
    .map((record) => [record.payload.profileKey, record]));
  const generatedDamageByKey = new Map();
  const generatedStatsByTrait = new Map();
  const resolveSource = sourceResolver(authoring);
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
        generatedDamageByKey
      });
      records.push(...profiles.damageRecords, ...profiles.attackRecords);
      attackProfileRefs.push(...profiles.attackRefs);
      resolution.staticClosure.profileBindingCount += profiles.attackRecords.reduce(
        (sum, record) => sum + record.payload.sourceBindings.length,
        0
      );
      const stats = generateTraitRangeStats({
        template,
        weapon,
        reader,
        resolveSource,
        generatedStatsByTrait
      });
      records.push(...stats.records);
      statRefs.push(...stats.statRefs.filter((statRef) => !statRefs.some((item) => item.recordId === statRef.recordId)));
      displayedAttacks = displayedAttacksForTemplate(template, weapon, authoring, resolveSource, evidenceId);
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
    const missing = (weapon.dataCoverage.missing ?? []).filter((item) => ![
      '/payload/actionProfileResolution',
      '/payload/all-actions-and-display-segments',
      '/payload/displayedAttacks',
      '/payload/actionContinuations'
    ].includes(item.field));
    const links = collectSourceLinks(fields).values();
    patches.push({
      recordId: weapon.recordId,
      gameReleaseId: weapon.gameReleaseId,
      fields,
      sourceRefs: [...links],
      dataCoverage: { status: missing.length === 0 ? 'complete' : 'partial', missing },
      reviewTargets: [
        { fieldPath: '/payload/actionProfileResolution', dimension: 'technical' },
        { fieldPath: '/payload/actionContinuations', dimension: 'technical' },
        { fieldPath: '/payload/displayedAttacks', dimension: 'technical' },
        { fieldPath: '/payload/panelPreviewRules', dimension: 'technical' },
        { fieldPath: '/payload/attackProfileRefs', dimension: 'technical' },
        { fieldPath: '/payload/statRefs', dimension: 'technical' }
      ]
    });
  }
  patches.sort((left, right) => lexical(left.recordId, right.recordId));
  records.sort((left, right) => lexical(left.recordId, right.recordId));
  return {
    schemaVersion: 'generic-weapon-template-candidate/1.0.0',
    gameReleases: [], sourceSnapshots: [], sourceRefs: [],
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
    generatedRecordCount: candidate.records.length
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
    unresolvedWeapons: [],
    reader
  };
}

export async function writeGenericWeaponTemplates({ sourceCodeRepo, commit = PINNED_COMMIT, outputDir, sourceRoot = ROOT } = {}) {
  invariant(outputDir, 'outputDir is required. Pass --output-dir.');
  const built = await buildGenericWeaponTemplates({ sourceCodeRepo, commit, sourceRoot });
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
