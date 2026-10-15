import { createHash } from 'node:crypto';

const REVIEW_STATES = new Set(['draft', 'pending', 'approved', 'rejected', 'stale']);
const UNITS = new Set(['ratio', 'percent', 's', 'm', 'damage', 'impact', 'point', 'rating']);
const DECIMAL = /^-?(?:0|[1-9]\d*)(?:\.\d+)?$/;
const WEB_OWNED_FIELDS = new Set([
  'announcement', 'detailSections', 'errata', 'localizations', 'official', 'presentation',
  'termLocalization', 'title', 'zhTW'
]);
const PRIVATE_FIELD = /^(?:credentials?|privateProof|privateLocator|rawPath|absolutePath|secret)$/i;
const AUTHORING_FIELDS = new Set([
  'schemaVersion', 'fixtureOnly', 'gameReleaseId', 'gameVersion', 'sourceRefs', 'records',
  'gameChanges', 'reviewReceipts'
]);
const SOURCE_REF_FIELDS = new Set([
  'sourceId', 'fixtureOnly', 'safeSummary', 'repository', 'commit', 'path', 'gameBuild', 'snapshot'
]);
const SNAPSHOT_FIELDS = new Set(['build', 'commit', 'manifestSha256', 'contentSha256']);
const RECORD_FIELDS = new Set([
  'recordId', 'owner', 'kind', 'gameReleaseId', 'payload', 'sourceRefs', 'reviewState'
]);
const RECORD_PAYLOAD_FIELDS = new Map([
  ['skill', new Set(['termRef', 'claimRefs'])],
  ['claim', new Set(['targetRef', 'property', 'value', 'context', 'basis', 'evidenceRefs'])],
  ['evidence', new Set(['sourceRef', 'safeSummary'])],
  ['blessing', new Set(['variantRefs'])],
  ['blessing-variant', new Set(['blessingRef', 'weaponRefs', 'definedTiers', 'obtainableTiers', 'tierValues'])],
  ['weapon', new Set(['familyId', 'markId', 'templateKey', 'statRefs', 'attackProfileRefs', 'dataCoverage', 'armorRefs', 'theoreticalInputRange'])],
  ['stat-definition', new Set(['quantity', 'inputUnit', 'outputUnit', 'theoreticalInputRange', 'obtainableInputRange', 'curveRef', 'claimRefs'])],
  ['stat-curve', new Set(['inputUnit', 'outputUnit', 'knots', 'interpolation', 'edgePolicy'])],
  ['term', new Set(['termKey', 'contextKey', 'technicalDefinitionEn', 'claimRefs'])]
]);
const REQUIRED_PAYLOAD_FIELDS = new Map([
  ['claim', ['targetRef', 'property', 'value', 'context', 'basis', 'evidenceRefs']],
  ['evidence', ['sourceRef', 'safeSummary']],
  ['blessing', ['variantRefs']],
  ['blessing-variant', ['blessingRef', 'weaponRefs', 'definedTiers', 'obtainableTiers', 'tierValues']],
  ['weapon', ['familyId', 'markId', 'templateKey', 'statRefs', 'attackProfileRefs', 'dataCoverage']],
  ['stat-definition', ['quantity', 'inputUnit', 'outputUnit', 'theoreticalInputRange', 'obtainableInputRange', 'curveRef']],
  ['stat-curve', ['inputUnit', 'outputUnit', 'knots', 'interpolation', 'edgePolicy']],
  ['term', ['termKey', 'contextKey', 'technicalDefinitionEn', 'claimRefs']]
]);
const GAME_CHANGE_FIELDS = new Set([
  'changeId', 'owner', 'gameReleaseId', 'entityKind', 'recordId', 'operation', 'comparison',
  'changedFields', 'evidenceRefs', 'verificationMethod', 'reviewState'
]);
const GAME_CHANGE_ENTITY_KINDS = new Set([
  'skill', 'claim', 'blessing', 'blessing-variant', 'weapon', 'stat-definition', 'stat-curve', 'term'
]);
const COMPARISON_FIELDS = new Set(['fromGameVersion', 'toGameVersion']);
const CHANGED_FIELD_FIELDS = new Set(['field', 'before', 'after', 'unit']);
const REVIEW_RECEIPT_FIELDS = new Set([
  'targetId', 'targetDigest', 'dependenciesDigest', 'reviewer', 'reviewedAt', 'dimensions'
]);
const TYPED_VALUE_FIELDS = new Set([
  'status', 'decimal', 'min', 'max', 'unit', 'step', 'inclusive', 'reasonCode'
]);
const CLAIM_BASES = new Set(['code-observed', 'code-derived', 'game-tested', 'unknown']);
const CONTEXT_FIELDS = new Set([
  'attackMode', 'charge', 'armorClass', 'targetId', 'hitZone', 'critical', 'weakspot', 'distance',
  'weaponStat', 'comparisonStat'
]);
const COMPARISON_STAT_FIELDS = new Set(['status', 'decimal', 'unit']);
const DATA_COVERAGE_FIELDS = new Set(['status', 'missing']);
const DATA_COVERAGE_MISSING_FIELDS = new Set(['field', 'reasonCode', 'sourceRef']);
const TIER_VALUE_FIELDS = new Set(['tier', 'value']);
const KNOT_FIELDS = new Set(['x', 'y']);
const POLICY_FIELDS = new Set(['status', 'value', 'reasonCode']);
function canonicalize(value) {
  if (Array.isArray(value)) return value.map(canonicalize);
  if (value !== null && typeof value === 'object') {
    const sorted = {};
    for (const key of Object.keys(value).sort()) sorted[key] = canonicalize(value[key]);
    return sorted;
  }
  return value;
}

export function canonicalJsonBytes(value) {
  return Buffer.from(JSON.stringify(canonicalize(value), null, 2) + '\n', 'utf8');
}

export function sha256(bytes) {
  return createHash('sha256').update(bytes).digest('hex');
}

function requireString(value, label) {
  if (typeof value !== 'string' || value.trim() === '') {
    throw new Error(label + ' must be a non-empty string');
  }
  return value;
}

function assertSafePublic(value, location = 'authoring') {
  if (Array.isArray(value)) {
    value.forEach((item, index) => assertSafePublic(item, location + '[' + index + ']'));
    return;
  }
  if (value === null || typeof value !== 'object') return;
  for (const [key, child] of Object.entries(value)) {
    if (PRIVATE_FIELD.test(key)) throw new Error('private field is not allowed at ' + location);
    assertSafePublic(child, location + '.' + key);
  }
}

function assertSourceOwned(value, location) {
  if (Array.isArray(value)) {
    value.forEach((item, index) => assertSourceOwned(item, location + '[' + index + ']'));
    return;
  }
  if (value === null || typeof value !== 'object') return;
  for (const [key, child] of Object.entries(value)) {
    if (WEB_OWNED_FIELDS.has(key)) throw new Error('Web-owned field is not allowed in Source: ' + key);
    if (key === 'owner' && child !== 'source') throw new Error('non-Source owner is not allowed at ' + location);
    assertSourceOwned(child, location + '.' + key);
  }
}
function assertOnlyKeys(value, allowed, location, label) {
  for (const key of Object.keys(value)) {
    if (WEB_OWNED_FIELDS.has(key)) throw new Error('Web-owned field is not allowed in Source: ' + key);
    if (!allowed.has(key)) throw new Error(label + ' field is not allowed at ' + location + ': ' + key);
  }
}

function requireProperties(value, required, location) {
  for (const key of required) {
    if (!Object.hasOwn(value, key)) throw new Error(location + '.' + key + ' is required');
  }
}

function validateTypedValue(value, location) {
  if (value === null || typeof value !== 'object' || Array.isArray(value)) {
    throw new Error('typed value must be an object at ' + location);
  }
  const status = requireString(value.status, location + '.status');
  if (status === 'known') {
    assertOnlyKeys(value, TYPED_VALUE_FIELDS, location, 'typed value');
    const hasScalar = Object.hasOwn(value, 'decimal');
    const hasMin = Object.hasOwn(value, 'min');
    const hasMax = Object.hasOwn(value, 'max');
    const isRange = hasMin || hasMax;
    if (hasScalar === isRange || (isRange && (!hasMin || !hasMax))) {
      throw new Error('known value must be either a decimal scalar or a min/max range at ' + location);
    }
    if (hasScalar) {
      if (typeof value.decimal !== 'string' || !DECIMAL.test(value.decimal)) {
        throw new Error('known decimal is invalid at ' + location);
      }
    } else {
      for (const endpoint of ['min', 'max']) {
        if (typeof value[endpoint] !== 'string' || !DECIMAL.test(value[endpoint])) {
          throw new Error('known range ' + endpoint + ' is invalid at ' + location);
        }
      }
    }
    if (!UNITS.has(value.unit)) throw new Error('known unit is invalid at ' + location);
    if (value.step !== undefined && (typeof value.step !== 'string' || !DECIMAL.test(value.step))) {
      throw new Error('known step is invalid at ' + location);
    }
    if (value.inclusive !== undefined && typeof value.inclusive !== 'boolean') {
      throw new Error('known inclusive must be boolean at ' + location);
    }
    return;
  }
  if (status === 'unknown') {
    assertOnlyKeys(value, new Set(['status', 'reasonCode']), location, 'typed value');
    requireString(value.reasonCode, location + '.reasonCode');
    return;
  }
  if (status === 'not-applicable') {
    assertOnlyKeys(value, new Set(['status']), location, 'typed value');
    return;
  }
  throw new Error('unsupported typed value status at ' + location);
}

function validateRecordPayload(record, location) {
  const payload = record.payload;
  const allowed = RECORD_PAYLOAD_FIELDS.get(record.kind);
  if (!allowed) throw new Error('unsupported Source record kind: ' + record.kind);
  assertSourceOwned(payload, location + '.payload');
  assertOnlyKeys(payload, allowed, location + '.payload', 'payload');
  requireProperties(payload, REQUIRED_PAYLOAD_FIELDS.get(record.kind) ?? [], location + '.payload');

  if (record.kind === 'skill' && !Object.hasOwn(payload, 'termRef') && !Object.hasOwn(payload, 'claimRefs')) {
    throw new Error('skill payload requires termRef or claimRefs at ' + location);
  }
  for (const key of ['termRef', 'curveRef', 'sourceRef', 'targetRef', 'blessingRef']) {
    if (payload[key] !== undefined) requireString(payload[key], location + '.payload.' + key);
  }
  for (const key of ['claimRefs', 'evidenceRefs', 'variantRefs', 'statRefs', 'weaponRefs', 'attackProfileRefs', 'armorRefs']) {
    if (payload[key] !== undefined && !Array.isArray(payload[key])) {
      throw new Error(location + '.payload.' + key + ' must be an array');
    }
    if (Array.isArray(payload[key])) payload[key].forEach((ref, index) => requireString(ref, location + '.payload.' + key + '[' + index + ']'));
  }

  if (record.kind === 'claim') {
    requireString(payload.property, location + '.payload.property');
    if (!CLAIM_BASES.has(payload.basis)) throw new Error('unsupported claim basis at ' + location);
    if (payload.context === null || typeof payload.context !== 'object' || Array.isArray(payload.context)) {
      throw new Error(location + '.payload.context must be an object');
    }
    assertOnlyKeys(payload.context, CONTEXT_FIELDS, location + '.payload.context', 'claim context');
    if (Object.hasOwn(payload.context, 'weaponStat') !== Object.hasOwn(payload.context, 'comparisonStat')) {
      throw new Error(location + '.payload.context must pair weaponStat with comparisonStat');
    }
    for (const [key, value] of Object.entries(payload.context)) {
      if (key === 'weaponStat') {
        requireString(value, location + '.payload.context.weaponStat');
      } else if (key === 'comparisonStat') {
        validateTypedValue(value, location + '.payload.context.comparisonStat');
        assertOnlyKeys(value, COMPARISON_STAT_FIELDS, location + '.payload.context.comparisonStat', 'comparison stat');
        if (value.status !== 'known' || typeof value.decimal !== 'string' || value.unit !== 'percent') {
          throw new Error(location + '.payload.context.comparisonStat must be a known scalar percent');
        }
      } else if (['charge', 'distance'].includes(key) && typeof value === 'object' && value !== null) {
        validateTypedValue(value, location + '.payload.context.' + key);
      } else if (typeof value !== 'string' && typeof value !== 'boolean') {
        throw new Error(location + '.payload.context.' + key + ' must be a string or boolean');
      }
    }
    validateTypedValue(payload.value, location + '.payload.value');
  }

  if (record.kind === 'blessing-variant') {
    if (!Array.isArray(payload.definedTiers) || payload.definedTiers.length === 0 ||
        payload.definedTiers.some(tier => !Number.isInteger(tier) || tier < 1) ||
        new Set(payload.definedTiers).size !== payload.definedTiers.length) {
      throw new Error(location + '.payload.definedTiers must contain unique positive integer tiers');
    }
    validateTypedValue(payload.obtainableTiers, location + '.payload.obtainableTiers');
    if (!Array.isArray(payload.tierValues) || payload.tierValues.length === 0) {
      throw new Error(location + '.payload.tierValues must contain at least one tier value');
    }
    const tierValues = new Set();
    payload.tierValues.forEach((item, index) => {
      const itemLocation = location + '.payload.tierValues[' + index + ']';
      if (item === null || typeof item !== 'object' || Array.isArray(item)) throw new Error(itemLocation + ' must be an object');
      assertOnlyKeys(item, TIER_VALUE_FIELDS, itemLocation, 'tier value');
      if (!Number.isInteger(item.tier) || !payload.definedTiers.includes(item.tier) || tierValues.has(item.tier)) {
        throw new Error(itemLocation + '.tier must be a unique defined tier');
      }
      tierValues.add(item.tier);
      validateTypedValue(item.value, itemLocation + '.value');
    });
  }

  if (record.kind === 'weapon') {
    requireString(payload.familyId, location + '.payload.familyId');
    requireString(payload.markId, location + '.payload.markId');
    requireString(payload.templateKey, location + '.payload.templateKey');
    if (payload.theoreticalInputRange !== undefined) validateTypedValue(payload.theoreticalInputRange, location + '.payload.theoreticalInputRange');
    const coverage = payload.dataCoverage;
    if (coverage === null || typeof coverage !== 'object' || Array.isArray(coverage)) throw new Error(location + '.payload.dataCoverage must be an object');
    assertOnlyKeys(coverage, DATA_COVERAGE_FIELDS, location + '.payload.dataCoverage', 'data coverage');
    if (!['complete', 'partial', 'unknown'].includes(coverage.status)) throw new Error(location + '.payload.dataCoverage.status is invalid');
    if (!Array.isArray(coverage.missing)) throw new Error(location + '.payload.dataCoverage.missing must be an array');
    coverage.missing.forEach((item, index) => {
      const itemLocation = location + '.payload.dataCoverage.missing[' + index + ']';
      if (item === null || typeof item !== 'object' || Array.isArray(item)) throw new Error(itemLocation + ' must be an object');
      assertOnlyKeys(item, DATA_COVERAGE_MISSING_FIELDS, itemLocation, 'data coverage missing item');
      requireString(item.field, itemLocation + '.field');
      requireString(item.reasonCode, itemLocation + '.reasonCode');
      if (item.sourceRef !== undefined) requireString(item.sourceRef, itemLocation + '.sourceRef');
    });
  }

  if (record.kind === 'stat-definition') {
    requireString(payload.quantity, location + '.payload.quantity');
    if (!UNITS.has(payload.inputUnit) || !UNITS.has(payload.outputUnit)) throw new Error(location + '.payload units are invalid');
    validateTypedValue(payload.theoreticalInputRange, location + '.payload.theoreticalInputRange');
    validateTypedValue(payload.obtainableInputRange, location + '.payload.obtainableInputRange');
  }

  if (record.kind === 'stat-curve') {
    if (!UNITS.has(payload.inputUnit) || !UNITS.has(payload.outputUnit)) throw new Error(location + '.payload units are invalid');
    if (!Array.isArray(payload.knots) || payload.knots.length === 0) throw new Error(location + '.payload.knots must be a non-empty ordered array');
    payload.knots.forEach((knot, index) => {
      const knotLocation = location + '.payload.knots[' + index + ']';
      if (knot === null || typeof knot !== 'object' || Array.isArray(knot)) throw new Error(knotLocation + ' must be an object');
      assertOnlyKeys(knot, KNOT_FIELDS, knotLocation, 'curve knot');
      for (const key of ['x', 'y']) {
        if (typeof knot[key] !== 'string' || !DECIMAL.test(knot[key])) throw new Error(knotLocation + '.' + key + ' must be a decimal string');
      }
    });
    for (const key of ['interpolation', 'edgePolicy']) {
      const policy = payload[key];
      const policyLocation = location + '.payload.' + key;
      if (policy === null || typeof policy !== 'object' || Array.isArray(policy)) throw new Error(policyLocation + ' must be an object');
      assertOnlyKeys(policy, POLICY_FIELDS, policyLocation, 'curve policy');
      if (policy.status === 'unknown') {
        if (Object.keys(policy).some(field => !['status', 'reasonCode'].includes(field))) throw new Error(policyLocation + ' unknown state has extra fields');
        requireString(policy.reasonCode, policyLocation + '.reasonCode');
      } else if (policy.status === 'known') {
        if (Object.keys(policy).some(field => !['status', 'value'].includes(field))) throw new Error(policyLocation + ' known state has extra fields');
        requireString(policy.value, policyLocation + '.value');
      } else {
        throw new Error(policyLocation + '.status must be known or unknown');
      }
    }
  }

  if (record.kind === 'term') {
    for (const key of ['termKey', 'contextKey', 'technicalDefinitionEn']) requireString(payload[key], location + '.payload.' + key);
    if (!Array.isArray(payload.claimRefs)) throw new Error(location + '.payload.claimRefs must be an array');
  }
  if (record.kind === 'evidence') requireString(payload.safeSummary, location + '.payload.safeSummary');
}

function validateSourceRef(source, location) {
  if (source === null || typeof source !== 'object' || Array.isArray(source)) {
    throw new Error(location + ' must be an object');
  }
  assertOnlyKeys(source, SOURCE_REF_FIELDS, location, 'source reference');
  requireString(source.sourceId, location + '.sourceId');
  for (const key of ['safeSummary', 'repository', 'commit', 'gameBuild']) {
    if (source[key] !== undefined) requireString(source[key], location + '.' + key);
  }
  if (source.fixtureOnly !== undefined && typeof source.fixtureOnly !== 'boolean') {
    throw new Error(location + '.fixtureOnly must be boolean');
  }
  if (source.path !== undefined) {
    requireString(source.path, location + '.path');
    if (source.path.startsWith('/') || /^[A-Za-z]:/.test(source.path) || source.path.includes('\\') || source.path.split('/').includes('..')) {
      throw new Error(location + '.path must be a repository-relative path');
    }
  }
  if (source.snapshot !== undefined) {
    if (source.snapshot === null || typeof source.snapshot !== 'object' || Array.isArray(source.snapshot)) {
      throw new Error(location + '.snapshot must be an object');
    }
    assertOnlyKeys(source.snapshot, SNAPSHOT_FIELDS, location + '.snapshot', 'snapshot');
  }
}

function validateGameChange(change, location) {
  assertOnlyKeys(change, GAME_CHANGE_FIELDS, location, 'game change');
  if (!GAME_CHANGE_ENTITY_KINDS.has(change.entityKind)) {
    throw new Error('unsupported Source game-change entityKind: ' + change.entityKind);
  }
  if (change.comparison !== undefined) {
    if (change.comparison === null || typeof change.comparison !== 'object' || Array.isArray(change.comparison)) {
      throw new Error(location + '.comparison must be an object');
    }
    assertOnlyKeys(change.comparison, COMPARISON_FIELDS, location + '.comparison', 'comparison');
    for (const key of Object.keys(change.comparison)) requireString(change.comparison[key], location + '.comparison.' + key);
  }
  if (change.changedFields !== undefined) {
    if (!Array.isArray(change.changedFields)) throw new Error(location + '.changedFields must be an array');
    change.changedFields.forEach((field, index) => {
      const fieldLocation = location + '.changedFields[' + index + ']';
      if (field === null || typeof field !== 'object' || Array.isArray(field)) {
        throw new Error(fieldLocation + ' must be an object');
      }
      assertOnlyKeys(field, CHANGED_FIELD_FIELDS, fieldLocation, 'changed field');
      requireString(field.field, fieldLocation + '.field');
      for (const key of ['before', 'after']) {
        if (field[key] !== undefined && field[key] !== null && typeof field[key] === 'object') {
          validateTypedValue(field[key], fieldLocation + '.' + key);
        } else if (field[key] !== undefined && typeof field[key] !== 'string') {
          throw new Error(fieldLocation + '.' + key + ' must be a string or typed value');
        }
      }
      if (field.unit !== undefined) requireString(field.unit, fieldLocation + '.unit');
    });
  }
}

function reviewableContent(item) {
  return item.changeId
    ? {
        changeId: item.changeId,
        gameReleaseId: item.gameReleaseId,
        entityKind: item.entityKind,
        recordId: item.recordId,
        operation: item.operation,
        comparison: item.comparison,
        changedFields: item.changedFields,
        evidenceRefs: item.evidenceRefs,
        verificationMethod: item.verificationMethod
      }
    : {
        recordId: item.recordId,
        kind: item.kind,
        gameReleaseId: item.gameReleaseId,
        payload: item.payload,
        sourceRefs: item.sourceRefs
      };
}

function reviewableDigest(item, targetId) {
  return sha256(canonicalJsonBytes({ targetId, reviewable: reviewableContent(item) }));
}

function dependencyDigest(item, context) {
  const sources = context.sourceById;
  const records = context.recordById;
  const dependencies = new Map();
  const pending = [];
  const addSource = sourceId => pending.push({ type: 'source', id: sourceId });
  const addRecord = recordId => pending.push({ type: 'record', id: recordId });
  const addLinks = value => {
    for (const { key, ref } of collectRecordRefs(value)) {
      if (key === 'sourceRef' || key === 'sourceRefs') addSource(ref);
      else addRecord(ref);
    }
  };

  for (const sourceId of item.sourceRefs ?? []) addSource(sourceId);
  if (item.changeId && item.recordId) addRecord(item.recordId);
  addLinks(item.payload ?? item);

  while (pending.length > 0) {
    const next = pending.pop();
    const key = next.type + ':' + next.id;
    if (dependencies.has(key)) continue;
    if (next.type === 'source') {
      const source = sources.get(next.id);
      if (!source) throw new Error('unresolved source dependency: ' + next.id);
      dependencies.set(key, { type: 'source', id: next.id, content: source });
      continue;
    }
    const record = records.get(next.id);
    if (!record) throw new Error('unresolved record dependency: ' + next.id);
    dependencies.set(key, { type: 'record', id: next.id, content: reviewableContent(record) });
    for (const sourceId of record.sourceRefs ?? []) addSource(sourceId);
    addLinks(record.payload);
  }

  const orderedDependencies = [...dependencies.values()].sort((left, right) => {
    const leftKey = left.type + ':' + left.id;
    const rightKey = right.type + ':' + right.id;
    return leftKey < rightKey ? -1 : leftKey > rightKey ? 1 : 0;
  });
  const gameReleaseId = item.gameReleaseId ?? context.authoring.gameReleaseId;
  return sha256(canonicalJsonBytes({
    gameRelease: { gameReleaseId, gameVersion: context.authoring.gameVersion },
    dependencies: orderedDependencies
  }));
}

function collectRecordRefs(value, key = '', output = []) {
  if (Array.isArray(value)) {
    if (key.endsWith('Refs')) {
      for (const ref of value) {
        if (typeof ref !== 'string') throw new Error(key + ' entries must be strings');
        output.push({ key, ref });
      }
      return output;
    }
    value.forEach(item => collectRecordRefs(item, key, output));
    return output;
  }
  if (value !== null && typeof value === 'object') {
    for (const [childKey, child] of Object.entries(value)) {
      if (childKey.endsWith('Ref') && typeof child === 'string') {
        output.push({ key: childKey, ref: child });
      } else {
        collectRecordRefs(child, childKey, output);
      }
    }
  }
  return output;
}

function deriveReviewState(item, targetId, receiptsByTarget, context) {
  const declaredState = item.reviewState ?? 'pending';
  if (!REVIEW_STATES.has(declaredState)) throw new Error('invalid reviewState for ' + targetId);
  const receipt = receiptsByTarget.get(targetId);
  if (declaredState === 'approved' && !receipt) {
    throw new Error('approved reviewState requires a matching review receipt for ' + targetId);
  }
  if (!receipt) return declaredState;
  requireString(receipt.reviewer, 'review receipt reviewer');
  requireString(receipt.reviewedAt, 'review receipt reviewedAt');
  if (!Array.isArray(receipt.dimensions) || receipt.dimensions.length === 0) {
    throw new Error('review receipt dimensions must be a non-empty array');
  }
  if (receipt.targetDigest !== reviewableDigest(item, targetId) ||
      receipt.dependenciesDigest !== dependencyDigest(item, context)) {
    return 'stale';
  }
  return 'approved';
}

function validateAuthoring(authoring) {
  if (authoring === null || typeof authoring !== 'object' || Array.isArray(authoring)) {
    throw new Error('source authoring must be an object');
  }
  assertOnlyKeys(authoring, AUTHORING_FIELDS, 'authoring', 'authoring');
  if (authoring.schemaVersion !== '2.0.0') throw new Error('source schemaVersion must be 2.0.0');
  requireString(authoring.gameReleaseId, 'gameReleaseId');
  requireString(authoring.gameVersion, 'gameVersion');
  if (authoring.fixtureOnly !== undefined && typeof authoring.fixtureOnly !== 'boolean') {
    throw new Error('fixtureOnly must be boolean');
  }
  if (!Array.isArray(authoring.sourceRefs) || !Array.isArray(authoring.records)) {
    throw new Error('sourceRefs and records must be arrays');
  }
  if (authoring.gameChanges !== undefined && !Array.isArray(authoring.gameChanges)) {
    throw new Error('gameChanges must be an array when present');
  }
  if (authoring.reviewReceipts !== undefined && !Array.isArray(authoring.reviewReceipts)) {
    throw new Error('reviewReceipts must be an array when present');
  }

  const sourceIds = new Set();
  for (const [index, source] of authoring.sourceRefs.entries()) {
    const location = 'sourceRefs[' + index + ']';
    validateSourceRef(source, location);
    const id = source.sourceId;
    if (sourceIds.has(id)) throw new Error('duplicate sourceId: ' + id);
    sourceIds.add(id);
  }

  const recordIds = new Set();
  for (const [index, record] of authoring.records.entries()) {
    const location = 'records[' + index + ']';
    if (record === null || typeof record !== 'object' || Array.isArray(record)) {
      throw new Error(location + ' must be an object');
    }
    assertOnlyKeys(record, RECORD_FIELDS, location, 'record');
    const id = requireString(record.recordId, location + '.recordId');
    if (recordIds.has(id)) throw new Error('duplicate recordId: ' + id);
    recordIds.add(id);
    const kind = requireString(record.kind, location + '.kind');
    if (!RECORD_PAYLOAD_FIELDS.has(kind)) throw new Error('unsupported Source record kind: ' + kind);
    if (record.owner !== 'source') throw new Error('record owner must be source: ' + id);
    if (record.gameReleaseId !== authoring.gameReleaseId) {
      throw new Error('record gameReleaseId does not match source release: ' + id);
    }
    if (record.payload === null || typeof record.payload !== 'object' || Array.isArray(record.payload)) {
      throw new Error('record payload must be an object: ' + id);
    }
    if (!Array.isArray(record.sourceRefs)) throw new Error('record sourceRefs must be an array: ' + id);
    for (const sourceId of record.sourceRefs) {
      requireString(sourceId, location + '.sourceRefs entry');
      if (!sourceIds.has(sourceId)) throw new Error('unresolved sourceRef ' + sourceId + ' on ' + id);
    }
    if (record.reviewState !== undefined && !REVIEW_STATES.has(record.reviewState)) {
      throw new Error('invalid reviewState for ' + id);
    }
    validateRecordPayload(record, location);
  }

  const changes = authoring.gameChanges ?? [];
  const changeIds = new Set();
  for (const [index, change] of changes.entries()) {
    const location = 'gameChanges[' + index + ']';
    if (change === null || typeof change !== 'object' || Array.isArray(change)) {
      throw new Error(location + ' must be an object');
    }
    const id = requireString(change.changeId, location + '.changeId');
    if (changeIds.has(id)) throw new Error('duplicate changeId: ' + id);
    changeIds.add(id);
    if (change.owner !== 'source') throw new Error('game change owner must be source: ' + id);
    requireString(change.gameReleaseId, location + '.gameReleaseId');
    if (change.gameReleaseId !== authoring.gameReleaseId) {
      throw new Error('game change gameReleaseId does not match source release: ' + id);
    }
    requireString(change.operation, location + '.operation');
    requireString(change.verificationMethod, location + '.verificationMethod');
    if (change.recordId !== undefined) requireString(change.recordId, location + '.recordId');
    if (!Array.isArray(change.evidenceRefs)) throw new Error(location + '.evidenceRefs must be an array');
    for (const ref of change.evidenceRefs) requireString(ref, location + '.evidenceRefs entry');
    if (change.reviewState !== undefined && !REVIEW_STATES.has(change.reviewState)) {
      throw new Error('invalid reviewState for ' + id);
    }
    validateGameChange(change, location);
  }

  const knownTargets = new Set([...recordIds, ...changeIds]);
  const receiptsByTarget = new Map();
  for (const [index, receipt] of (authoring.reviewReceipts ?? []).entries()) {
    const location = 'reviewReceipts[' + index + ']';
    if (receipt === null || typeof receipt !== 'object' || Array.isArray(receipt)) {
      throw new Error(location + ' must be an object');
    }
    assertOnlyKeys(receipt, REVIEW_RECEIPT_FIELDS, location, 'review receipt');
    const targetId = requireString(receipt.targetId, location + '.targetId');
    if (!knownTargets.has(targetId)) throw new Error('review receipt target is unknown: ' + targetId);
    if (receiptsByTarget.has(targetId)) throw new Error('duplicate review receipt for ' + targetId);
    requireString(receipt.targetDigest, location + '.targetDigest');
    requireString(receipt.dependenciesDigest, location + '.dependenciesDigest');
    if (!/^[a-f0-9]{64}$/.test(receipt.targetDigest) || !/^[a-f0-9]{64}$/.test(receipt.dependenciesDigest)) {
      throw new Error('review receipt digest is invalid');
    }
    requireString(receipt.reviewer, location + '.reviewer');
    requireString(receipt.reviewedAt, location + '.reviewedAt');
    if (!Array.isArray(receipt.dimensions) || receipt.dimensions.length === 0) {
      throw new Error('review receipt dimensions must be a non-empty array');
    }
    receipt.dimensions.forEach((dimension, dimensionIndex) => requireString(dimension, location + '.dimensions[' + dimensionIndex + ']'));
    receiptsByTarget.set(targetId, receipt);
  }

  for (const record of authoring.records) {
    for (const { key, ref } of collectRecordRefs(record.payload)) {
      if (key === 'sourceRef' || key === 'sourceRefs') {
        if (!sourceIds.has(ref)) throw new Error('unresolved ' + key + ' reference: ' + ref);
      } else if (!recordIds.has(ref)) {
        throw new Error('unresolved ' + key + ' reference: ' + ref);
      }
    }
  }
  for (const change of changes) {
    if (change.recordId && !recordIds.has(change.recordId)) {
      throw new Error('game change references unknown record: ' + change.recordId);
    }
    for (const { key, ref } of collectRecordRefs(change)) {
      if (key === 'sourceRef' || key === 'sourceRefs') {
        if (!sourceIds.has(ref)) throw new Error('unresolved game-change ' + key + ' reference: ' + ref);
      } else if (!knownTargets.has(ref)) {
        throw new Error('unresolved game-change ' + key + ' reference: ' + ref);
      }
    }
  }

  return receiptsByTarget;
}

function markdownStatusBanner(fixtureOnly, publicationEligible) {
  if (fixtureOnly) return '> **Fixture only / pending:** synthetic contract output; not approved game facts.\n\n';
  if (!publicationEligible) return '> **Pending review:** not approved for publication.\n\n';
  return '';
}

function markdownForAnalysis(authoring, records, publicationEligible, fixtureOnly) {
  const banner = markdownStatusBanner(fixtureOnly, publicationEligible);
  const lines = [banner + '# Technical source analysis', '', 'Game release: ' + authoring.gameReleaseId, ''];
  for (const record of records) {
    lines.push('## ' + record.recordId, '', '- Kind: ' + record.kind, '- Review: ' + record.reviewState, '');
    lines.push('~~~json', JSON.stringify(canonicalize(record.payload), null, 2), '~~~', '');
  }
  return lines.join('\n');
}

function markdownForChanges(authoring, changes, publicationEligible, fixtureOnly) {
  const banner = markdownStatusBanner(fixtureOnly, publicationEligible);
  const lines = [banner + '# Game content changes', '', 'Game release: ' + authoring.gameReleaseId, ''];
  if (changes.length === 0) {
    lines.push('No reviewed game changes are included in this release.');
  }
  for (const change of changes) {
    lines.push(
      '## ' + change.changeId,
      '',
      '- Record: ' + (change.recordId ?? 'unassigned'),
      '- Operation: ' + (change.operation ?? 'unspecified'),
      '- Review: ' + change.reviewState,
      '',
      '~~~json',
      JSON.stringify(canonicalize(change), null, 2),
      '~~~',
      ''
    );
  }
  return lines.join('\n');
}

export function compileSource(authoring, { mode = 'preview' } = {}) {
  if (!['preview', 'formal'].includes(mode)) throw new Error('mode must be preview or formal');
  assertSafePublic(authoring);
  const receiptsByTarget = validateAuthoring(authoring);
  const reviewContext = {
    authoring,
    sourceById: new Map(authoring.sourceRefs.map(source => [source.sourceId, source])),
    recordById: new Map(authoring.records.map(record => [record.recordId, record]))
  };
  const records = authoring.records.map(record => ({
    ...record,
    reviewState: deriveReviewState(record, record.recordId, receiptsByTarget, reviewContext)
  }));
  const changes = (authoring.gameChanges ?? []).map(change => ({
    ...change,
    reviewState: deriveReviewState(change, change.changeId, receiptsByTarget, reviewContext)
  }));
  const fixtureOnly = authoring.fixtureOnly === true ||
    authoring.sourceRefs.some(source => source.fixtureOnly === true);
  const publicationEligible = !fixtureOnly &&
    records.every(record => record.reviewState === 'approved') &&
    changes.every(change => change.reviewState === 'approved');

  if (mode === 'formal' && !publicationEligible) {
    throw new Error('formal source output requires non-fixture inputs and matching approved review receipts');
  }

  const releaseWithoutRevision = {
    schemaVersion: authoring.schemaVersion,
    gameReleaseId: authoring.gameReleaseId,
    gameVersion: authoring.gameVersion,
    fixtureOnly,
    publicationEligible,
    sourceRefs: authoring.sourceRefs,
    records,
    gameChanges: changes
  };
  const sourceRevision = sha256(canonicalJsonBytes(releaseWithoutRevision));
  const technical = { ...releaseWithoutRevision, sourceRevision };
  const files = new Map([
    ['technical.json', canonicalJsonBytes(technical)],
    ['analysis.md', Buffer.from(markdownForAnalysis(authoring, records, publicationEligible, fixtureOnly), 'utf8')],
    ['game-changes.json', canonicalJsonBytes({
      fixtureOnly,
      publicationEligible,
      gameReleaseId: authoring.gameReleaseId,
      sourceRevision,
      changes
    })],
    ['game-changes.md', Buffer.from(markdownForChanges(authoring, changes, publicationEligible, fixtureOnly), 'utf8')]
  ]);
  const listedFiles = [...files.entries()]
    .sort(([left], [right]) => left < right ? -1 : left > right ? 1 : 0)
    .map(([name, bytes]) => ({ path: name, sizeBytes: bytes.length, sha256: sha256(bytes) }));
  const manifest = {
    schemaVersion: '1.0.0',
    gameReleaseId: authoring.gameReleaseId,
    gameVersion: authoring.gameVersion,
    sourceRevision,
    fixtureOnly,
    publicationEligible,
    files: listedFiles
  };
  const manifestBytes = canonicalJsonBytes(manifest);
  files.set('source-manifest.json', manifestBytes);

  return {
    files,
    manifest,
    sourceRevision,
    manifestSha256: sha256(manifestBytes),
    fixtureOnly,
    publicationEligible
  };
}
