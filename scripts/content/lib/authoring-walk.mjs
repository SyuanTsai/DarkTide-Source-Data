// Dependency traversal copied from contract-validator.mjs; keep in sync with review digest rules.
const compareLexical = (left, right) => left < right ? -1 : left > right ? 1 : 0;
const hasOwn = (object, key) => Object.prototype.hasOwnProperty.call(object, key);
const DIGEST_BACKLINK_FIELDS = new Set(['claimRefs']);
const IDENTITY_REFERENCE_FIELDS = new Set(['targetRef', 'blessingRef', 'weaponRef', 'weaponRefs', 'entityRef', 'predecessorRef', 'parentRef', 'classificationRef']);
const IDENTITY_PAYLOAD_FIELDS = Object.freeze({
  skill: ['nameKey', 'applicability'],
  blessing: ['nameKey'],
  'blessing-variant': ['blessingRef', 'weaponRefs', 'definedTiers', 'obtainableTiers'],
  weapon: ['familyId', 'markId', 'templateKey'],
  'attack-profile': ['familyId', 'markId', 'itemKey', 'templateKey', 'action', 'mode', 'charge', 'contexts'],
  'stat-definition': ['quantity', 'inputUnit', 'outputUnit'],
  'stat-curve': ['inputUnit', 'outputUnit', 'interpolation', 'edgePolicy'],
  'damage-profile': ['profileKey'],
  'armor-class': ['classKey', 'classificationRef'],
  'target-profile': ['profileKey'],
  'modifier-rule': ['ruleKey', 'triggerText', 'operation', 'stackingGroup', 'exclusions'],
  claim: ['property', 'targetRef', 'context', 'basis'],
  evidence: ['evidenceKind', 'sourceRef', 'safeSummary'],
  term: ['termKey', 'contextKey'],
  catalog: ['catalogKey'],
  curio: ['nameKey'],
  perk: ['nameKey'],
  classification: ['taxonomy', 'code', 'labelEn', 'parentRef'],
  'game-change': ['comparison', 'entityRef', 'operation'],
  'release-compatibility': ['fromGameReleaseId', 'toGameReleaseId']
});

function recordKey(recordId, releaseId) { return `${releaseId}\u0000${recordId}`; }
function receiptKey(target) { return `${recordKey(target.recordId, target.gameReleaseId)}\u0000${target.fieldPath}\u0000${target.dimension}`; }

function walkObjects(value, visit, parentKey = '') {
  if (!value || typeof value !== 'object') return;
  if (Array.isArray(value)) { for (const item of value) walkObjects(item, visit, parentKey); return; }
  visit(value, parentKey);
  for (const [key, child] of Object.entries(value)) walkObjects(child, visit, key);
}

function getAllRecordRefs(record) {
  const edges = [];
  walkObjects(record.payload, (item, parentKey) => {
    if (typeof item.recordId === 'string' && typeof item.gameReleaseId === 'string') edges.push({ ref: item, field: parentKey });
  });
  return edges;
}



function reviewProjection(value, { omitClaimRefs = false } = {}) {
  if (Array.isArray(value)) return value.map((child) => reviewProjection(child, { omitClaimRefs }));
  if (!value || typeof value !== 'object') return value;
  return Object.fromEntries(Object.entries(value)
    .filter(([key]) => !omitClaimRefs || !DIGEST_BACKLINK_FIELDS.has(key))
    .map(([key, child]) => [key, reviewProjection(child, { omitClaimRefs })]));
}

function identityPayloadProjection(item) {
  const payload = item.payload ?? {};
  const fields = IDENTITY_PAYLOAD_FIELDS[item.kind] ?? [];
  const projected = Object.fromEntries(fields.filter((field) => hasOwn(payload, field)).map((field) => [field, payload[field]]));
  if (item.kind === 'target-profile' && Array.isArray(payload.hitZones)) {
    projected.hitZones = payload.hitZones.map(({ zoneId, armorRef, weakspot, critEligible }) => ({ zoneId, armorRef, weakspot, critEligible }));
  }
  if (item.kind === 'damage-profile' && payload.rawSourceDefinition?.parentProfileRef) {
    projected.parentProfileRef = payload.rawSourceDefinition.parentProfileRef;
  }
  if (item.kind === 'damage-profile' && Array.isArray(payload.segments)) {
    projected.segments = payload.segments.map(({ segmentId, quantity, hitZone, conditions }) => ({ segmentId, quantity, hitZone, conditions }));
  }
  return reviewProjection(projected, { omitClaimRefs: true });
}


function collectSourceLinks(record) {
  const links = [...(record.sourceRefs ?? [])];
  for (const missing of record.dataCoverage?.missing ?? []) if (missing.sourceRef) links.push(missing.sourceRef);
  walkObjects(record.payload, (item) => { if (typeof item.sourceId === 'string' && typeof item.gameReleaseId === 'string') links.push(item); });
  return links;
}


function dependencyClosure(contract, rootItem, recordMap, sourceMap, releaseMap) {
  const visited = new Map();
  const rootKey = recordKey(rootItem.recordId, rootItem.gameReleaseId);
  const visitItem = (item, mode = 'full', isTombstone = false, followClaimRefs = mode === 'full') => {
    const key = recordKey(item.recordId, item.gameReleaseId);
    const modeRank = mode === 'full' ? 2 : 1;
    const expandsClaimRefs = mode === 'full' && (key === rootKey || followClaimRefs);
    const previous = visited.get(key);
    if (previous && previous.modeRank >= modeRank && (!expandsClaimRefs || previous.expandsClaimRefs)) return;
    const links = collectSourceLinks(item);
    const sourceRefs = links.map((link) => sourceMap.get(`${link.gameReleaseId}\u0000${link.sourceId}`)).filter(Boolean);
    const release = releaseMap.get(item.gameReleaseId);
    visited.set(key, {
      key: `${item.gameReleaseId}:${item.recordId}`,
      mode,
      modeRank,
      expandsClaimRefs,
      isRoot: key === rootKey,
      item,
      isTombstone,
      release,
      sourceRefs: sourceRefs.sort((a, b) => compareLexical(a.sourceId, b.sourceId))
    });
    for (const link of links) if (link.compatibilityRef) visit(recordMap.get(recordKey(link.compatibilityRef, item.gameReleaseId)), 'full');
    const recordRefs = mode === 'identity'
      ? getAllRecordRefs({ ...item, payload: identityPayloadProjection(item) })
      : getAllRecordRefs(item);
    if (!isTombstone) for (const { ref, field } of recordRefs) {
      const followsClaimDependency = expandsClaimRefs && DIGEST_BACKLINK_FIELDS.has(field);
      if (DIGEST_BACKLINK_FIELDS.has(field) && !followsClaimDependency) continue;
      const identityEdge = IDENTITY_REFERENCE_FIELDS.has(field);
      if (mode === 'identity' && identityEdge) {
        if (ref.compatibilityRef) visit(recordMap.get(recordKey(ref.compatibilityRef, item.gameReleaseId)), 'full');
        visit(recordMap.get(recordKey(ref.recordId, ref.gameReleaseId)), 'identity', false);
        continue;
      }
      const targetMode = identityEdge ? 'identity' : 'full';
      // A comparison stat contributes its own typed value definition, but its claimRefs are
      // sibling claims. Other full entity/applicability refs keep their forward claim closure.
      const followsTargetClaims = expandsClaimRefs && targetMode === 'full' && field !== 'statRef';
      visit(recordMap.get(recordKey(ref.recordId, ref.gameReleaseId)), targetMode, followsTargetClaims);
      if (ref.compatibilityRef) visit(recordMap.get(recordKey(ref.compatibilityRef, item.gameReleaseId)), 'full');
    }
  };
  const visit = (record, mode = 'full', followClaimRefs = mode === 'full') => { if (record) visitItem(record, mode, false, followClaimRefs); };
  visitItem(rootItem, 'full', !rootItem.payload);
  return [...visited.values()].sort((a, b) => compareLexical(a.key, b.key));
}

export function createRecordDependencyWalker(contract, { blessingOwnership = false, details = false } = {}) {
  const omitWeaponRefs = (value) => {
    if (Array.isArray(value)) return value.map(omitWeaponRefs);
    if (!value || typeof value !== 'object') return value;
    return Object.fromEntries(Object.entries(value).filter(([field]) => field !== 'weaponRefs').map(([field, child]) => [field, omitWeaponRefs(child)]));
  };
  const items = blessingOwnership
    ? contract.records.filter((item) => item.kind !== 'weapon').map((item) => ({ ...item, payload: omitWeaponRefs(item.payload) }))
    : contract.records;
  const records = new Map(items.map((item) => [recordKey(item.recordId, item.gameReleaseId), item]));
  const sources = new Map(contract.sourceRefs.map((item) => [`${item.gameReleaseId}\u0000${item.sourceId}`, item]));
  const releases = new Map(contract.gameReleases.map((item) => [item.gameReleaseId, item]));
  return (item) => dependencyClosure(contract, blessingOwnership ? records.get(recordKey(item.recordId, item.gameReleaseId)) : item, records, sources, releases).map(({ item: dependency, mode }) => details ? { item: dependency, mode } : dependency);
}
