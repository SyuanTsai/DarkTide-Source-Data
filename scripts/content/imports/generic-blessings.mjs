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
const TRAIT_VALUE_PARSER = 'scripts/utilities/trait_value_parser.lua';
const BUFF_SETTINGS = 'scripts/settings/buff/buff_settings.lua';
const TABLE_UTILITIES = 'scripts/foundation/utilities/table.lua';
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

function enumReference(ref, locals, enumMembers) {
  if (typeof ref !== 'string') return null;
  for (const [root, names] of enumMembers) {
    const member = ref.startsWith(root + '.') ? ref.slice(root.length + 1) : null;
    if (member && !member.includes('.') && names.has(member)) return ref;
  }
  const [alias, ...members] = ref.split('.');
  if (members.length !== 1) return null;
  const bound = locals?.[alias];
  const root = bound?.type === 'reference' ? bound.ref : alias;
  return enumMembers.get(root)?.has(members[0]) ? `${root}.${members[0]}` : null;
}

function keyMatches(node, part, locals, enumMembers) {
  if (typeof part === 'number') return false;
  if (typeof part === 'string') {
    return (node?.type === 'string' && node.value === part)
      || (node?.type === 'reference' && node.ref.endsWith(`.${part}`));
  }
  const nodeEnum = node?.type === 'reference' && enumReference(node.ref, locals, enumMembers);
  const partEnum = enumReference(part.ref, locals, enumMembers);
  return (nodeEnum && partEnum && nodeEnum === partEnum)
    || (node?.type === 'reference' && node.ref === part.ref)
    || (node?.type === 'string' && node.value === part.ref.split('.').at(-1));
}

function containsUnsupported(node) {
  if (!node) return false;
  if (node.type === 'unsupported') return true;
  return node.type === 'table' && node.entries.some((entry) => containsUnsupported(entry.key) || containsUnsupported(entry.value));
}

export function resolveTraitPath(root, parts, locals, enumMembers = new Map()) {
  let current = root;
  const resolvedPath = [];
  for (const part of parts) {
    if (current?.type === 'reference' && !current.ref.includes('.') && locals[current.ref]) current = locals[current.ref];
    invariant(current?.type === 'table', `Trait path ${parts.map((item) => typeof item === 'string' ? item : item.ref).join('.')} crossed a non-table node.`);
    const entry = typeof part === 'number'
      ? getTableEntries(current).filter((item) => item.key == null)[part - 1]
      : getTableEntries(current).find((item) => keyMatches(item.key, part, locals, enumMembers));
    invariant(entry, `Trait path component ${typeof part === 'string' ? part : part.ref} was not found in a tier table.`);
    resolvedPath.push(entry.key?.type === 'reference' ? { ref: entry.key.ref } : part);
    current = entry.value;
  }
  if (current?.type === 'reference' && !current.ref.includes('.') && locals[current.ref]) current = locals[current.ref];
  return { node: current, resolvedPath, hasUnsupported: containsUnsupported(current) };
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

function decimalShift(decimal, places) {
  const match = /^([+-]?)(\d*)(?:\.(\d*))?(?:[eE]([+-]?\d+))?$/u.exec(decimal);
  invariant(match, `Unsupported decimal literal ${decimal}.`);
  const sign = match[1] === '-' ? '-' : '';
  const digits = `${match[2] || '0'}${match[3] || ''}`;
  const exponent = Number(match[4] ?? '0') + places;
  const point = (match[2] || '0').length + exponent;
  let rendered;
  if (point <= 0) rendered = `0.${'0'.repeat(-point)}${digits}`;
  else if (point >= digits.length) rendered = `${digits}${'0'.repeat(point - digits.length)}`;
  else rendered = `${digits.slice(0, point)}.${digits.slice(point)}`;
  rendered = rendered.replace(/^(\d+)\.0+$/u, '$1').replace(/(\.\d*?)0+$/u, '$1').replace(/^0+(?=\d)/u, '');
  return `${sign}${rendered || '0'}`;
}

function formatKey(entry) {
  invariant(entry.key?.type === 'string', `Format value at line ${entry.startLine} must have a static string key.`);
  return entry.key.value;
}

function formatUnit(formatNode, parts) {
  const formatType = nodeString(getTableField(formatNode, 'format_type'));
  if (formatType === 'percentage') return 'percent';
  const leaf = parts.at(-1);
  return typeof leaf === 'string' && /(?:^|_)duration$/u.test(leaf) ? 's' : 'point';
}

function pathsOverlap(left, right) {
  const length = Math.min(left.length, right.length);
  return left.slice(0, length).every((part, index) => part === right[index]);
}

function displayDecimal(node, formatNode) {
  const decimal = decimalFromNode(node);
  return nodeString(getTableField(formatNode, 'format_type')) === 'percentage' ? decimalShift(decimal, 2) : decimal;
}

function sourceIdForPath(sourcePath, commit) {
  return generatedSourceId(sourcePath, commit);
}

function expressionEnd(tokens, startIndex) {
  let depth = 0;
  for (let cursor = startIndex; cursor < tokens.length; cursor += 1) {
    const token = tokens[cursor];
    if (['{', '(', '['].includes(token.value)) depth += 1;
    if (['}', ')', ']'].includes(token.value)) depth -= 1;
    if (depth === 0 && tokens[cursor + 1]?.line > token.line) return cursor;
  }
  return tokens.length - 1;
}

function templateAssignments(source, sourcePath, name) {
  const tokens = tokenizeLua(source, { filename: sourcePath });
  const assignments = [];
  for (let index = 0; index < tokens.length - 4; index += 1) {
    if (!['templates', 'base_templates'].includes(tokens[index].value) || tokens[index + 1].value !== '.' || tokens[index + 2].value !== name) continue;
    let cursor = index + 3;
    const parts = [];
    while (tokens[cursor]?.value === '.' && tokens[cursor + 1]?.type === 'identifier') {
      parts.push(tokens[cursor + 1].value);
      cursor += 2;
    }
    if (tokens[cursor]?.value !== '=' || !tokens[cursor + 1]) {
      let equals = cursor;
      while (tokens[equals] && tokens[equals].line === tokens[cursor]?.line && tokens[equals].value !== '=') equals += 1;
      if (tokens[cursor]?.value === '[' && tokens[equals]?.value === '=') {
        assignments.push({ parts, node: { type: 'unsupported', startLine: tokens[cursor].line, endLine: tokens[equals].endLine, raw: source.slice(tokens[cursor].start, tokens[equals].end) }, startLine: tokens[index].line, isDefinition: false });
        index = equals;
      }
      continue;
    }
    const startIndex = cursor + 1;
    const endIndex = expressionEnd(tokens, startIndex);
    const expression = source.slice(tokens[startIndex].start, tokens[endIndex].end);
    let node;
    try {
      node = parseLuaStatic(`return ${expression}`, { filename: `${sourcePath}:${name}`, allowUnsupported: true }).returned;
    } catch {
      node = { type: 'unsupported', startLine: tokens[startIndex].line, endLine: tokens[endIndex].endLine, raw: expression };
    }
    assignments.push({ parts, node, startLine: tokens[index].line, isDefinition: parts.length === 0 });
    index = endIndex;
  }
  return assignments;
}

function sameTemplateKey(left, right) {
  return left?.type === right?.type && ((left.type === 'string' && left.value === right.value)
    || (left.type === 'number' && left.value === right.value)
    || (left.type === 'reference' && left.ref === right.ref));
}

function mergeTemplateTables(destination, source) {
  invariant(destination?.type === 'table' && source?.type === 'table', 'table.merge must combine static tables.');
  const merged = structuredClone(destination);
  let sourceArrayIndex = 0;
  for (const entry of source.entries) {
    if (entry.key == null) {
      sourceArrayIndex += 1;
      const destinationEntry = merged.entries.filter((item) => item.key == null)[sourceArrayIndex - 1];
      if (destinationEntry) destinationEntry.value = structuredClone(entry.value);
      else merged.entries.push(structuredClone(entry));
      continue;
    }
    const existing = merged.entries.find((item) => sameTemplateKey(item.key, entry.key));
    if (existing) existing.value = structuredClone(entry.value);
    else merged.entries.push(structuredClone(entry));
  }
  return merged;
}
function setTemplatePath(root, parts, value) {
  invariant(root?.type === 'table', 'Post-clone buff template assignment must target a table.');
  let current = root;
  for (let index = 0; index < parts.length - 1; index += 1) {
    const key = { type: 'string', value: parts[index] };
    let entry = current.entries.find((item) => sameTemplateKey(item.key, key));
    if (!entry || entry.value?.type !== 'table') {
      const nested = { type: 'table', entries: [] };
      if (entry) entry.value = nested;
      else {
        entry = { key, value: nested };
        current.entries.push(entry);
      }
    }
    current = entry.value;
  }
  const key = { type: 'string', value: parts.at(-1) };
  const entry = current.entries.find((item) => sameTemplateKey(item.key, key));
  if (entry) entry.value = structuredClone(value);
  else current.entries.push({ key, value: structuredClone(value) });
}

function localReferences(source, sourcePath) {
  const tokens = tokenizeLua(source, { filename: sourcePath });
  const requires = new Map();
  const locals = {};
  for (let index = 0; index < tokens.length - 6; index += 1) {
    if (tokens[index].value !== 'local' || tokens[index + 1].type !== 'identifier' || tokens[index + 2].value !== '=') continue;
    const name = tokens[index + 1].value;
    if (tokens[index + 3].value === 'require' && tokens[index + 4].value === '(' && tokens[index + 5].type === 'string') {
      requires.set(name, tokens[index + 5].value);
      continue;
    }
    if (tokens[index + 3].type === 'identifier' && tokens[index + 4].value === '.' && tokens[index + 5].type === 'identifier') {
      locals[name] = { type: 'reference', ref: `${tokens[index + 3].value}.${tokens[index + 5].value}` };
    }
  }
  return { requires, locals };
}

function enumMembersFromSettings(reader) {
  if (!reader.paths.includes(BUFF_SETTINGS)) return new Map();
  const source = reader.read(BUFF_SETTINGS);
  const parsed = parseLuaStatic(source, { filename: BUFF_SETTINGS, allowUnsupported: true });
  const statBuffTypes = getTableField(parsed.locals.buff_settings, 'stat_buff_types');
  const names = new Set(getTableEntries(statBuffTypes).map((entry) => nodeString(entry.key)).filter(Boolean));
  const tokens = tokenizeLua(source, { filename: BUFF_SETTINGS });
  const enumCall = tokens.some((token, index) => token.value === 'buff_settings'
    && tokens[index + 1]?.value === '.' && tokens[index + 2]?.value === 'stat_buffs'
    && tokens[index + 3]?.value === '=' && tokens[index + 4]?.value === 'table'
    && tokens[index + 5]?.value === '.' && tokens[index + 6]?.value === 'enum'
    && tokens.slice(index + 7, index + 16).some((item) => item.value === 'stat_buff_names'));
  const enumSource = reader.paths.includes(TABLE_UTILITIES) ? reader.read(TABLE_UTILITIES) : '';
  const enumPreservesMemberNames = !enumSource || /\bt\s*\[\s*value\s*\]\s*=\s*value\b/u.test(enumSource);
  return enumCall && enumPreservesMemberNames && names.size > 0
    ? new Map([['BuffSettings.stat_buffs', names]])
    : new Map();
}
export function makeBuffTemplateResolver(reader) {
  const cache = new Map();
  const resolving = new Set();
  const buffPaths = reader.paths.filter((sourcePath) => !reader.files
    || sourcePath === 'scripts/settings/buff/weapon_buff_templates.lua'
    || sourcePath.startsWith('scripts/settings/buff/weapon_traits_buff_templates/')).sort(lexical);
  const enumMembers = enumMembersFromSettings(reader);
  const contexts = new Map();
  const context = (sourcePath) => {
    if (!contexts.has(sourcePath)) {
      const source = reader.read(sourcePath);
      contexts.set(sourcePath, { sourcePath, source, assignments: new Map(), ...localReferences(source, sourcePath) });
    }
    return contexts.get(sourcePath);
  };
  const assignmentsFor = (sourcePath, name) => {
    const item = context(sourcePath);
    if (!item.assignments.has(name)) item.assignments.set(name, templateAssignments(item.source, sourcePath, name));
    return item.assignments.get(name);
  };
  const definitionsByName = new Map();
  for (const sourcePath of buffPaths) {
    const source = reader.read(sourcePath);
    for (const match of source.matchAll(/\b(?:templates|base_templates)\.([A-Za-z_]\w*)\s*=/gu)) {
      const definitions = definitionsByName.get(match[1]) ?? [];
      definitions.push(sourcePath);
      definitionsByName.set(match[1], definitions);
    }
    if (sourcePath !== BUFF_SETTINGS) reader.files?.delete(sourcePath);
  }

  const normalizeTemplate = (node, locals) => {
    if (!node || node.type !== 'table') return node;
    const normalized = structuredClone(node);
    const visit = (item) => {
      if (item?.type === 'reference') {
        const equivalent = enumReference(item.ref, locals, enumMembers);
        if (equivalent) item.ref = equivalent;
      }
      if (item?.type === 'table') item.entries.forEach((entry) => { visit(entry.key); visit(entry.value); });
    };
    visit(normalized);
    return normalized;
  };
  const resolveExpression = (expression, sourceContext) => {
    if (expression?.type === 'table') return { node: normalizeTemplate(expression, sourceContext.locals), sourcePaths: [] };
    if (expression?.type !== 'call' || !['table.clone', 'table.merge'].includes(expression.ref)) return null;
    const resolveArgument = (argument) => {
      if (argument?.type === 'table') return { node: normalizeTemplate(argument, sourceContext.locals), sourcePaths: [] };
      if (argument?.type !== 'reference') return null;
      const [alias, ...nameParts] = argument.ref.split('.');
      const required = sourceContext.requires.get(alias);
      if (!required || nameParts.length === 0) return null;
      return resolveInFile(required.endsWith('.lua') ? required : `${required}.lua`, nameParts.at(-1));
    };
    if (expression.ref === 'table.clone') return resolveArgument(expression.args[0]);
    const destination = resolveArgument(expression.args[0]);
    const source = resolveArgument(expression.args[1]);
    if (!destination || !source) return null;
    return { node: mergeTemplateTables(destination.node, source.node), sourcePaths: [...new Set([...destination.sourcePaths, ...source.sourcePaths])] };
  };
  const resolveInFile = (sourcePath, name) => {
    if (!buffPaths.includes(sourcePath)) return null;
    const assignments = assignmentsFor(sourcePath, name);
    const definitions = assignments.filter((assignment) => assignment.isDefinition);
    if (definitions.length !== 1) return null;
    const sourceContext = context(sourcePath);
    const resolved = resolveExpression(definitions[0].node, sourceContext);
    if (resolved?.node?.type !== 'table') return null;
    const node = structuredClone(resolved.node);
    const postAssignments = [];
    for (const assignment of assignments.filter((item) => !item.isDefinition && item.startLine > definitions[0].startLine)) {
      if (assignment.parts.length === 0) return { node: assignment.node, sourcePaths: [...new Set([sourcePath, ...resolved.sourcePaths])], postAssignments: [assignment], enumMembers };
      setTemplatePath(node, assignment.parts, assignment.node);
      postAssignments.push(assignment);
    }
    return { node, sourcePaths: [...new Set([sourcePath, ...resolved.sourcePaths, ...(enumMembers.size ? [BUFF_SETTINGS] : [])])], postAssignments, enumMembers };
  };
  const resolve = (name) => {
    if (cache.has(name)) return cache.get(name);
    if (resolving.has(name)) return null;
    resolving.add(name);
    const candidates = definitionsByName.get(name) ?? [];
    const result = candidates.length === 1 ? resolveInFile(candidates[0], name) : null;
    resolving.delete(name);
    cache.set(name, result);
    return result;
  };
  return resolve;
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

function record(recordId, kind, payload, sourceIds, dataCoverage, reviewTargets) {
  return {
    recordId,
    kind,
    owner: 'source',
    gameReleaseId: GAME_RELEASE_ID,
    sourceRefs: [...new Set(Array.isArray(sourceIds) ? sourceIds : [sourceIds])].map(sourceLink),
    dataCoverage,
    reviewState: 'pending',
    payload,
    reviewTargets
  };
}

function extractTrait({ traitName, traitNode, parsed, sourcePath, sourceId, weaponRecordIds, linkedTemplates, resolveBuffTemplate, commit }) {
  const identity = traitIdentity(traitName);
  const formatValues = getTableField(traitNode, 'format_values');
  const formatEntries = getTableEntries(formatValues).filter((entry) => entry.key?.type === 'string' && entry.value?.type === 'table');
  const traitOverrideFormats = formatEntries.filter((entry) => {
    const findValue = getTableField(entry.value, 'find_value');
    return nodeString(getTableField(findValue, 'find_value_type')) === 'trait_override';
  });
  const valueManipulations = formatEntries.map((entry) => getTableField(entry.value, 'value_manipulation')).filter((node) => node?.type === 'function');
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
      return { tier: index + 1, value: { status: 'known', decimal, unit: nodeString(getTableField(formatNode, 'format_type')) === 'percentage' ? 'ratio' : 'point' } };
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
  const formatDescriptors = [];
  const formatClaims = [];
  const formatEvidence = [];
  let postAssignmentClaimCount = 0;
  for (const entry of formatEntries) {
    const key = formatKey(entry);
    const formatNode = entry.value;
    const findValue = getTableField(formatNode, 'find_value');
    const findValueType = nodeString(getTableField(findValue, 'find_value_type')) ?? 'default';
    const parts = findValue?.type === 'table' ? pathParts(getTableField(findValue, 'path')) : [];
    const manipulation = getTableField(formatNode, 'value_manipulation');
    const hasValueManipulation = manipulation?.type === 'function';
    formatDescriptors.push({ key, findValueType, hasValueManipulation });
    for (const tier of definedTiers) {
      let resolved = null;
      let sourcePaths = [sourcePath, TRAIT_VALUE_PARSER];
      let postAssignmentAffected = false;
      if (!hasValueManipulation) {
        try {
          if (findValueType === 'trait_override') {
            const buffName = nodeString(getTableField(findValue, 'buff_template_name'));
            const buffTiers = getTableArray(getTableField(buffs, buffName));
            resolved = resolveTraitPath(buffTiers[tier - 1], parts, parsed.locals);
          } else if (findValueType === 'rarity_value') {
            const rarityNode = getTableArray(getTableField(findValue, 'trait_value'))[tier - 1];
            resolved = { node: rarityNode, resolvedPath: ['trait_value', tier] };
          } else if (findValueType === 'buff_template') {
            const buffName = nodeString(getTableField(findValue, 'buff_template_name'));
            const template = buffName && resolveBuffTemplate(buffName);
            if (template) {
              resolved = resolveTraitPath(template.node, parts, parsed.locals, template.enumMembers);
              postAssignmentAffected = template.postAssignments.some((assignment) => pathsOverlap(assignment.parts, parts));
              sourcePaths = [...new Set([...sourcePaths, ...template.sourcePaths])];
            }
          } else if (findValueType === 'default') {
            resolved = { node: getTableField(formatNode, 'value'), resolvedPath: ['value'] };
          }
        } catch {
          resolved = null;
        }
      }
      const sourceIds = sourcePaths.map((item) => sourceIdForPath(item, commit));
      const propertyUnit = formatUnit(formatNode, parts);
      const displayKind = propertyUnit === 'percent' ? 'percent' : 'value';
      const property = `description.format_values.${key}.defined_tier_${tier}_display_${displayKind}`;
      const claimId = `darktide:claim:${identity.family}:p${traitName.match(/_p(\d+)_/u)[1]}-${traitName.match(/_p\d+_(.+)$/u)[1].replaceAll('_', '-')}-${key.replaceAll('_', '-')}-tier${tier}-display-${displayKind}`;
      const evidenceId = `darktide:evidence:${identity.family}:p${traitName.match(/_p(\d+)_/u)[1]}-${traitName.match(/_p\d+_(.+)$/u)[1].replaceAll('_', '-')}-${key.replaceAll('_', '-')}-tier${tier}-display-${displayKind}-code`;
      const known = !hasValueManipulation && resolved?.node?.type === 'number' && !resolved.hasUnsupported;
      if (known && postAssignmentAffected) postAssignmentClaimCount += 1;
      const value = known
        ? { status: 'known', decimal: displayDecimal(resolved.node, formatNode), unit: propertyUnit }
        : { status: 'unknown', reasonCode: 'NOT_EXPOSED_BY_SOURCE' };
      if (!known) variantMissing.push({ field: `/payload/claimRefs/${property}`, reasonCode: 'NOT_EXPOSED_BY_SOURCE' });
      const summary = known
        ? `Pinned Lua source defines format value ${key} through ${findValueType}; defined tier ${tier} resolves to literal ${decimalFromNode(resolved.node)}, displayed as ${value.decimal} ${propertyUnit}. This supports the static description value only, not verified obtainable tiers or runtime behavior.`
        : `Pinned Lua source defines format value ${key} for defined tier ${tier}, but its display value is not statically exposed${hasValueManipulation ? ' because value_manipulation is a function' : ''}. The importer does not execute or infer the value.`;
      formatEvidence.push(record(evidenceId, 'evidence', {
        evidenceKind: 'code-observed', sourceRef: sourceLink(sourceIds.at(-1)), safeSummary: summary
      }, sourceIds, { status: 'complete', missing: [] }, [{ fieldPath: '/payload', dimension: 'evidence' }]));
      formatClaims.push(record(claimId, 'claim', {
        targetRef: { recordId: identity.variantId, gameReleaseId: GAME_RELEASE_ID }, property, value, context: {},
        basis: known ? 'code-derived' : 'unknown', evidenceRefs: [{ recordId: evidenceId, gameReleaseId: GAME_RELEASE_ID }]
      }, sourceIds, known ? { status: 'complete', missing: [] } : { status: 'partial', missing: [{ field: '/payload/value', reasonCode: 'NOT_EXPOSED_BY_SOURCE' }] }, [
        { fieldPath: '/payload/targetRef', dimension: 'identity' }, { fieldPath: '/payload/value', dimension: 'technical' },
        { fieldPath: '/payload/context', dimension: 'context' }, { fieldPath: '/payload/basis', dimension: 'technical' },
        { fieldPath: '/payload/evidenceRefs', dimension: 'evidence' }
      ]));
    }
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
      variantRefs: [{ recordId: identity.variantId, gameReleaseId: GAME_RELEASE_ID }],
      ...(formatClaims.length > 0 ? { claimRefs: formatClaims.map((claim) => ({ recordId: claim.recordId, gameReleaseId: GAME_RELEASE_ID })) } : {})
    },
    sourceId,
    { status: 'partial', missing: [{ field: '/payload/nameKey', reasonCode: 'NOT_VERIFIED' }] },
    [
      { fieldPath: '/payload/nameKey', dimension: 'identity' },
      { fieldPath: '/payload/variantRefs', dimension: 'evidence' },
      ...(formatClaims.length > 0 ? [{ fieldPath: '/payload/claimRefs', dimension: 'evidence' }] : [])
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
    formatValues: formatDescriptors,
    valueManipulations,
    postAssignmentClaimCount,
    linkedTemplates,
    missingTemplates,
    tierTraces,
    tierSources,
    records: [blessing, variant, ...formatClaims, ...formatEvidence],
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
  reader.read(TRAIT_VALUE_PARSER);
  const resolveBuffTemplate = makeBuffTemplateResolver(reader);
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
      linkedTemplates,
      resolveBuffTemplate,
      commit
    }));
    extractedTraits.push(...traits);
    traitFiles.push({ sourcePath, sourceId, traits, returned: parsed.returned });
  }
  extractedTraits.sort((left, right) => lexical(left.traitName, right.traitName));

  const sourceSnapshot = snapshotFromFiles(reader.files, commit);
  const toolSha256 = sha256(await readFile(fileURLToPath(import.meta.url)));
  const traitFileByPath = new Map(traitFiles.map((item) => [item.sourcePath, item]));
  const sourcePaths = new Set(extractedTraits.flatMap((trait) => trait.records.flatMap((record) => record.sourceRefs.map((ref) => {
    const sourceId = ref.sourceId;
    return [...reader.files.values()].find((file) => generatedSourceId(file.path, commit) === sourceId)?.path;
  }).filter(Boolean))));
  const genericSourceRefs = [...sourcePaths].sort(lexical).map((sourcePath) => {
    const file = reader.files.get(sourcePath);
    const traitFile = traitFileByPath.get(sourcePath);
    const startLine = traitFile?.traits.length ? Math.min(...traitFile.traits.map((trait) => trait.startLine)) : 1;
    const endLine = traitFile?.traits.length ? Math.max(...traitFile.traits.map((trait) => trait.endLine)) : file.text.split(/\r?\n/u).length;
    return {
      sourceId: sourceIdForPath(sourcePath, commit),
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
      safeSummary: traitFile
        ? `Pinned public Lua source parsed without execution. ${traitFile.traits.length} bespoke traits span lines ${startLine}-${endLine}; generated records, when present, are derived from parsed trait tables and tier nodes.`
        : 'Pinned public Lua source was read without execution to resolve a static buff-template value referenced by a bespoke trait description.'
    };
  }).sort((left, right) => lexical(left.path, right.path));

  const generatedRecords = extractedTraits
    .filter((trait) => !existingRecordIds.has(trait.blessingId) && !existingRecordIds.has(trait.variantId))
    .flatMap((trait) => trait.records)
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
    formatClaimCount: extractedTraits.reduce((sum, trait) => sum + trait.formatValues.length * trait.variantPayload.definedTiers.length, 0),
    knownFormatClaimCount: extractedTraits.flatMap((trait) => trait.records).filter((record) => record.kind === 'claim' && record.payload.value.status === 'known').length,
    unknownFormatClaimCount: extractedTraits.flatMap((trait) => trait.records).filter((record) => record.kind === 'claim' && record.payload.value.status === 'unknown').length,
    postAssignmentClaimCount: extractedTraits.reduce((sum, trait) => sum + trait.postAssignmentClaimCount, 0),
    generatedPostAssignmentClaimCount: extractedTraits.filter((trait) => !existingRecordIds.has(trait.blessingId) && !existingRecordIds.has(trait.variantId)).reduce((sum, trait) => sum + trait.postAssignmentClaimCount, 0),
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
