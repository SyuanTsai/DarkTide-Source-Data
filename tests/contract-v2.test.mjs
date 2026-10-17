import test from 'node:test';
import assert from 'node:assert/strict';
import { spawnSync } from 'node:child_process';
import { fileURLToPath } from 'node:url';
import path from 'node:path';
import {
  CONTRACT_RECORD_KINDS,
  assertSchemaValidatorParity,
  computeReviewDigests,
  createReviewReceipt,
  loadContractSchema,
  loadRepresentativeFixture,
  validateSourceContract
} from '../scripts/content/contract-validator.mjs';

const repoRoot = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const schema = await loadContractSchema();
const fixture = await loadRepresentativeFixture();
const validate = (candidate) => validateSourceContract(candidate, { schema });
const issueCodes = (candidate) => new Set(validate(candidate).issues.map((issue) => issue.code));
function addSyntheticGameTestEvidence(candidate, gameReleaseId) {
  const release = candidate.gameReleases.find((item) => item.gameReleaseId === gameReleaseId);
  assert.ok(release, `Missing synthetic release ${gameReleaseId}`);
  const sourceId = `fixture-game-test-${gameReleaseId}`;
  const recordId = `fixture:evidence:game-test:${gameReleaseId}`;
  const sourceRef = { sourceId, gameReleaseId };
  candidate.sourceRefs.push({
    ...sourceRef,
    sourceKind: 'game-test',
    gameBuild: release.gameBuild,
    snapshot: structuredClone(release.snapshot),
    tool: { name: 'synthetic-game-test-fixture', version: '1.0.0', sha256: '2'.repeat(64) },
    artifactSha256: '3'.repeat(64),
    safeSummary: 'Synthetic game-test evidence shape only; no real game execution or observation is claimed.'
  });
  candidate.records.push({
    recordId,
    kind: 'evidence',
    owner: 'source',
    gameReleaseId,
    payload: {
      evidenceKind: 'game-tested',
      sourceRef,
      safeSummary: 'Synthetic game-tested evidence shape only; no real game execution or observation is claimed.'
    },
    sourceRefs: [structuredClone(sourceRef)],
    dataCoverage: { status: 'complete', missing: [] },
    reviewTargets: [{ fieldPath: '/payload', dimension: 'evidence' }],
    reviewState: 'pending'
  });
  return { recordId, gameReleaseId };
}

// Scenario: The representative fixture contains every formal Source technical kind and two releases.
// Purpose: Enforce substantive schema/validator parity and ensure fixtures remain synthetic and unpublished.
test('UnitT00_loads-formal-schema-and-validates-representative-fixture', () => {
  const result = validate(fixture);
  assert.equal(schema.$schema, 'https://json-schema.org/draft/2020-12/schema');
  assert.deepEqual(assertSchemaValidatorParity(schema), []);
  assert.equal(result.valid, true, JSON.stringify(result.issues, null, 2));
  assert.equal(result.publicationEligible, false);
  assert.equal(fixture.fixtureOnly, true);
  assert.equal(new Set(fixture.records.map((record) => record.kind)).size, CONTRACT_RECORD_KINDS.length);
  assert.equal(fixture.gameReleases.length, 2);
  assert.match(result.validationReceipt.receiptSha256, /^[a-f0-9]{64}$/u);
});

// Scenario: A new schema keyword or record branch drifts from the importable validator's registry.
// Purpose: Fail on concrete differences in kind, units, unknown reasons, payload branches and required record envelope.
test('UnitT01_schema-and-validator-shapes-stay-aligned', () => {
  const changed = structuredClone(schema);
  changed.$defs.record.properties.kind.enum.pop();
  assert.ok(assertSchemaValidatorParity(changed).some((message) => message.includes('record kind enum')));
  assert.ok(assertSchemaValidatorParity(schema).length === 0);
});

// Scenario: A Source owner drops required technical identity or puts arbitrary keys into a kind payload.
// Purpose: Ensure each formal kind has a closed, non-empty typed payload shape.
test('UnitT02_schema-rejects-empty-kind-payload-and-untyped-extensions', () => {
  const missingContext = structuredClone(fixture);
  const attack = missingContext.records.find((record) => record.recordId === 'fixture:attack:alpha');
  delete attack.payload.contexts;
  assert.ok(issueCodes(missingContext).has('schema-required'));
  const arbitrary = structuredClone(fixture);
  arbitrary.records.find((record) => record.kind === 'weapon').payload.interpreter = { source: 'code' };
  assert.ok(issueCodes(arbitrary).has('schema-additionalProperties'));
});

// Scenario: A private-derived batch carries only safe provenance, while public-code records have public locators.
// Purpose: Prevent fabricated public URLs/commits for private evidence and require them for public code.
test('UnitT03_provenance-shape-respects-public-and-private-source-owners', () => {
  const privateLocator = structuredClone(fixture);
  privateLocator.sourceRefs[0].publicUrl = 'https://example.invalid/private/raw';
  assert.ok(issueCodes(privateLocator).has('private-locator'));
  const publicMissing = structuredClone(fixture);
  delete publicMissing.sourceRefs[1].commit;
  assert.ok(issueCodes(publicMissing).has('schema-required'));
});

// Scenario: A source ref, target kind or cross-release edge is missing or mis-scoped.
// Purpose: Require closed release-aware refs, expected kinds, and explicit compatibility evidence.
test('UnitT04_rejects-dangling-wrong-kind-and-unproven-cross-release-references', () => {
  const dangling = structuredClone(fixture);
  dangling.records.find((record) => record.recordId === 'fixture:weapon:alpha' && record.gameReleaseId === 'fixture-r1').payload.statRefs[0].recordId = 'fixture:missing';
  assert.ok(issueCodes(dangling).has('dangling-record-ref'));
  const wrongKind = structuredClone(fixture);
  wrongKind.records.find((record) => record.recordId === 'fixture:claim:damage').payload.evidenceRefs[0].recordId = 'fixture:stat:damage';
  assert.ok(issueCodes(wrongKind).has('wrong-kind-ref'));
  const crossRelease = structuredClone(fixture);
  delete crossRelease.records.find((record) => record.recordId === 'fixture:weapon:alpha' && record.gameReleaseId === 'fixture-r2').payload.predecessorRef.compatibilityRef;
  assert.ok(issueCodes(crossRelease).has('cross-release-without-compatibility'));
});

// Scenario: Two entries claim one release-scoped identity, or a tombstoned ID returns in a later release.
// Purpose: Preserve stable record identity, aliases and tombstone semantics without collapsing distinct releases.
test('UnitT05_enforces-composite-identity-and-non-reuse-after-tombstone', () => {
  const duplicate = structuredClone(fixture);
  duplicate.records.push(structuredClone(duplicate.records.find((record) => record.recordId === 'fixture:skill:alpha')));
  assert.ok(issueCodes(duplicate).has('duplicate-record'));
  const reused = structuredClone(fixture);
  const retired = structuredClone(reused.records.find((record) => record.recordId === 'fixture:weapon:retired'));
  retired.gameReleaseId = 'fixture-r2';
  reused.records.push(retired);
  assert.ok(issueCodes(reused).has('tombstone-record-conflict'));
});

// Scenario: A field omitted from import is confused with a known unknown value or a numeric zero.
// Purpose: Keep NOT_IMPORTED in coverage only while preserving exact zero, decimal range and unit information.
test('UnitT06_distinguishes-not-imported-from-unknown-and-known-zero', () => {
  const notUnknown = structuredClone(fixture);
  const claim = notUnknown.records.find((record) => record.recordId === 'fixture:claim:damage');
  claim.payload.value = { status: 'unknown', reasonCode: 'NOT_IMPORTED' };
  assert.ok(issueCodes(notUnknown).has('schema-enum') || issueCodes(notUnknown).has('schema-oneOf'));
  const badUnit = structuredClone(fixture);
  badUnit.records.find((record) => record.kind === 'stat-definition' && record.gameReleaseId === 'fixture-r1').payload.panelInputRange.unit = 'parsecs';
  assert.ok(issueCodes(badUnit).has('schema-oneOf'));
  assert.equal(validate(fixture).valid, true);
  assert.equal(fixture.records.find((record) => record.recordId === 'fixture:claim:damage').payload.value.decimal, '0');
  assert.equal(fixture.records.find((record) => record.kind === 'stat-definition' && record.gameReleaseId === 'fixture-r2').payload.obtainableInputRange.reasonCode, 'NOT_VERIFIED');
  assert.equal(fixture.records.find((record) => record.kind === 'blessing-variant' && record.gameReleaseId === 'fixture-r2').payload.obtainableTiers.reasonCode, 'NOT_VERIFIED');
  assert.equal(fixture.records.find((record) => record.recordId === 'fixture:attack:r2').dataCoverage.missing[0].reasonCode, 'NOT_IMPORTED');
});

// Scenario: An ordered curve has duplicate input knots or ranges are inverted.
// Purpose: Validate exact decimal ordering without converting source decimals through floating-point.
test('UnitT07_checks-exact-curve-order-and-range-bounds', () => {
  const duplicateKnot = structuredClone(fixture);
  duplicateKnot.records.find((record) => record.kind === 'stat-curve' && record.gameReleaseId === 'fixture-r1').payload.knots[1].input = '0.0';
  assert.ok(issueCodes(duplicateKnot).has('curve-order'));
  const inverted = structuredClone(fixture);
  inverted.records.find((record) => record.kind === 'stat-definition' && record.gameReleaseId === 'fixture-r1').payload.panelInputRange.max = '-1';
  assert.ok(issueCodes(inverted).has('inverted-range'));
});

// Scenario: A required human receipt is absent, correctly bound, or made stale by a true dependency edit.
// Purpose: Derive review state from field/dimension receipts and dependency closure, never from a self-authored approved flag.
test('UnitT08_review-receipts-are-human-bound-and-dependency-sensitive', () => {
  const selfApproved = structuredClone(fixture);
  selfApproved.records.find((record) => record.recordId === 'fixture:claim:damage').reviewState = 'approved';
  assert.ok(issueCodes(selfApproved).has('review-state-mismatch'));

  const approved = structuredClone(fixture);
  const claim = approved.records.find((record) => record.recordId === 'fixture:claim:damage');
  approved.reviewReceipts.push(...claim.reviewTargets.map((target) => createReviewReceipt(approved, {
    recordId: claim.recordId, gameReleaseId: claim.gameReleaseId, ...target
  }, { reviewer: { kind: 'human', id: 'fixture-human-reviewer' }, reviewedAt: '2026-10-18T00:00:00Z' })));
  claim.reviewState = 'approved';
  assert.equal(validate(approved).valid, true, JSON.stringify(validate(approved).issues, null, 2));
  assert.equal(validate(approved).publicationEligible, false);

  const stale = structuredClone(fixture);
  const weapon = stale.records.find((record) => record.recordId === 'fixture:weapon:alpha' && record.gameReleaseId === 'fixture-r1');
  const target = { recordId: weapon.recordId, gameReleaseId: weapon.gameReleaseId, fieldPath: '/payload', dimension: 'technical' };
  stale.reviewReceipts.push(createReviewReceipt(stale, target, { reviewer: { kind: 'human', id: 'fixture-human-reviewer' }, reviewedAt: '2026-10-18T00:00:00Z' }));
  weapon.reviewState = 'approved';
  stale.records.find((record) => record.recordId === 'fixture:stat:damage' && record.gameReleaseId === 'fixture-r1').payload.panelInputRange.max = '99';
  weapon.reviewState = 'stale';
  assert.equal(validate(stale).valid, true, JSON.stringify(validate(stale).issues, null, 2));
  assert.equal(validate(stale).publicationEligible, false);

  const digestsBefore = computeReviewDigests(fixture, target);
  const unrelated = structuredClone(fixture);
  unrelated.records.find((record) => record.kind === 'curio').payload.nameKey = 'fixture.curio.renamed';
  assert.deepEqual(computeReviewDigests(unrelated, target), digestsBefore);

  const claimTarget = { recordId: 'fixture:claim:damage', gameReleaseId: 'fixture-r1', fieldPath: '/payload/value', dimension: 'technical' };
  const claimDigests = computeReviewDigests(fixture, claimTarget);
  const siblingAdded = structuredClone(fixture);
  const targetStat = siblingAdded.records.find((record) => record.recordId === 'fixture:stat:damage' && record.gameReleaseId === 'fixture-r1');
  const siblingClaim = structuredClone(siblingAdded.records.find((record) => record.recordId === claimTarget.recordId && record.gameReleaseId === claimTarget.gameReleaseId));
  siblingClaim.recordId = 'fixture:claim:independent-sibling';
  siblingClaim.payload.property = 'independent-property';
  siblingClaim.payload.value.decimal = '7';
  siblingAdded.records.push(siblingClaim);
  targetStat.payload.claimRefs.push({ recordId: siblingClaim.recordId, gameReleaseId: siblingClaim.gameReleaseId });
  assert.deepEqual(computeReviewDigests(siblingAdded, claimTarget), claimDigests);
  assert.equal(validate(siblingAdded).valid, true, JSON.stringify(validate(siblingAdded).issues, null, 2));

  const skillTarget = { recordId: 'fixture:skill:alpha', gameReleaseId: 'fixture-r1', fieldPath: '/payload', dimension: 'technical' };
  const skillDigests = computeReviewDigests(fixture, skillTarget);
  assert.deepEqual(computeReviewDigests(siblingAdded, skillTarget), skillDigests);
  const claimValueChanged = structuredClone(fixture);
  claimValueChanged.records.find((record) => record.recordId === claimTarget.recordId).payload.value.decimal = '19';
  assert.notEqual(computeReviewDigests(claimValueChanged, skillTarget).dependenciesDigest, skillDigests.dependenciesDigest);

  const nestedSkillRoot = structuredClone(fixture);
  const observerClaim = structuredClone(nestedSkillRoot.records.find((record) => record.recordId === 'fixture:claim:damage'));
  observerClaim.recordId = 'fixture:claim:observer';
  observerClaim.payload.property = 'synthetic-observer-context';
  observerClaim.payload.value.decimal = '3';
  nestedSkillRoot.records.push(observerClaim);
  assert.equal(validate(nestedSkillRoot).valid, true, JSON.stringify(validate(nestedSkillRoot).issues, null, 2));
  const observerTarget = { recordId: observerClaim.recordId, gameReleaseId: observerClaim.gameReleaseId, fieldPath: '/payload/context', dimension: 'context' };
  const observerDigests = computeReviewDigests(nestedSkillRoot, observerTarget);
  const nestedClaimValueChanged = structuredClone(nestedSkillRoot);
  nestedClaimValueChanged.records.find((record) => record.recordId === 'fixture:claim:damage').payload.value.decimal = '19';
  assert.notEqual(computeReviewDigests(nestedClaimValueChanged, observerTarget).dependenciesDigest, observerDigests.dependenciesDigest);

  const nestedPerkRoot = structuredClone(fixture);
  const perkObserver = structuredClone(nestedPerkRoot.records.find((record) => record.recordId === 'fixture:claim:damage'));
  perkObserver.recordId = 'fixture:claim:perk-observer';
  perkObserver.payload.property = 'synthetic-perk-context';
  perkObserver.payload.context = { perkRefs: [{ recordId: 'fixture:perk:alpha', gameReleaseId: 'fixture-r1' }] };
  nestedPerkRoot.records.push(perkObserver);
  assert.equal(validate(nestedPerkRoot).valid, true, JSON.stringify(validate(nestedPerkRoot).issues, null, 2));
  const perkObserverTarget = { recordId: perkObserver.recordId, gameReleaseId: perkObserver.gameReleaseId, fieldPath: '/payload/context', dimension: 'context' };
  const perkObserverDigests = computeReviewDigests(nestedPerkRoot, perkObserverTarget);
  const nestedPerkClaimChanged = structuredClone(nestedPerkRoot);
  nestedPerkClaimChanged.records.find((record) => record.recordId === 'fixture:claim:damage').payload.value.decimal = '19';
  assert.notEqual(computeReviewDigests(nestedPerkClaimChanged, perkObserverTarget).dependenciesDigest, perkObserverDigests.dependenciesDigest);

  const edgeSwapRoot = structuredClone(fixture);
  const damageClaim = edgeSwapRoot.records.find((record) => record.recordId === 'fixture:claim:damage');
  const alternateClaim = structuredClone(damageClaim);
  alternateClaim.recordId = 'fixture:claim:alternate';
  alternateClaim.payload.property = 'synthetic-alternate-property';
  alternateClaim.payload.value.decimal = '7';
  edgeSwapRoot.records.push(alternateClaim);
  const alternatePerk = structuredClone(edgeSwapRoot.records.find((record) => record.recordId === 'fixture:perk:alpha'));
  alternatePerk.recordId = 'fixture:perk:alternate';
  alternatePerk.payload.nameKey = 'fixture.perk.alternate';
  alternatePerk.payload.claimRefs = [{ recordId: alternateClaim.recordId, gameReleaseId: alternateClaim.gameReleaseId }];
  edgeSwapRoot.records.push(alternatePerk);
  const edgeObserver = structuredClone(damageClaim);
  edgeObserver.recordId = 'fixture:claim:edge-observer';
  edgeObserver.payload.property = 'synthetic-edge-observer';
  edgeObserver.payload.context = {
    talentRefs: [{ recordId: 'fixture:skill:alpha', gameReleaseId: 'fixture-r1' }],
    perkRefs: [
      { recordId: 'fixture:perk:alpha', gameReleaseId: 'fixture-r1' },
      { recordId: 'fixture:perk:alternate', gameReleaseId: 'fixture-r1' }
    ]
  };
  edgeSwapRoot.records.push(edgeObserver);
  assert.equal(validate(edgeSwapRoot).valid, true, JSON.stringify(validate(edgeSwapRoot).issues, null, 2));
  const edgeObserverTarget = { recordId: edgeObserver.recordId, gameReleaseId: edgeObserver.gameReleaseId, fieldPath: '/payload/context', dimension: 'context' };
  const edgeObserverDigests = computeReviewDigests(edgeSwapRoot, edgeObserverTarget);
  const edgeSwapped = structuredClone(edgeSwapRoot);
  edgeSwapped.records.find((record) => record.recordId === 'fixture:perk:alpha').payload.claimRefs = [
    { recordId: 'fixture:claim:alternate', gameReleaseId: 'fixture-r1' }
  ];
  assert.equal(validate(edgeSwapped).valid, true, JSON.stringify(validate(edgeSwapped).issues, null, 2));
  assert.notEqual(computeReviewDigests(edgeSwapped, edgeObserverTarget).dependenciesDigest, edgeObserverDigests.dependenciesDigest);

  const fullDependencyChanged = structuredClone(fixture);
  fullDependencyChanged.records.find((record) => record.recordId === 'fixture:stat:damage' && record.gameReleaseId === 'fixture-r1').payload.panelInputRange.max = '99';
  assert.notEqual(computeReviewDigests(fullDependencyChanged, skillTarget).dependenciesDigest, skillDigests.dependenciesDigest);

  const targetIdentityChanged = structuredClone(fixture);
  targetIdentityChanged.records.find((record) => record.recordId === claimTarget.recordId).payload.targetRef.recordId = 'fixture:weapon:alpha';
  const identityDigest = computeReviewDigests(targetIdentityChanged, claimTarget);
  assert.equal(identityDigest.targetDigest, claimDigests.targetDigest);
  assert.notEqual(identityDigest.dependenciesDigest, claimDigests.dependenciesDigest);
  const targetContextChanged = structuredClone(fixture);
  targetContextChanged.records.find((record) => record.recordId === claimTarget.recordId).payload.context.mode = 'synthetic-alternate-mode';
  const contextDigest = computeReviewDigests(targetContextChanged, claimTarget);
  assert.notEqual(contextDigest.dependenciesDigest, claimDigests.dependenciesDigest);

  const sourceCommitOnlyChanged = structuredClone(fixture);
  const r2Release = sourceCommitOnlyChanged.gameReleases.find((release) => release.gameReleaseId === 'fixture-r2');
  const r2Source = sourceCommitOnlyChanged.sourceRefs.find((source) => source.sourceId === 'fixture-public-code-r2');
  const movedCommit = 'dddddddddddddddddddddddddddddddddddddddd';
  r2Release.snapshot.commit = movedCommit;
  r2Source.commit = movedCommit;
  r2Source.snapshot.commit = movedCommit;
  const r2Weapon = sourceCommitOnlyChanged.records.find((record) => record.recordId === 'fixture:weapon:alpha' && record.gameReleaseId === 'fixture-r2');
  const r2WeaponTarget = { recordId: r2Weapon.recordId, gameReleaseId: r2Weapon.gameReleaseId, fieldPath: '/payload', dimension: 'technical' };
  assert.deepEqual(computeReviewDigests(sourceCommitOnlyChanged, r2WeaponTarget), computeReviewDigests(fixture, r2WeaponTarget));
  assert.equal(validate(sourceCommitOnlyChanged).valid, true, JSON.stringify(validate(sourceCommitOnlyChanged).issues, null, 2));

  const releaseChanged = structuredClone(fixture);
  const releaseWeapon = releaseChanged.records.find((record) => record.recordId === 'fixture:weapon:alpha' && record.gameReleaseId === 'fixture-r1');
  const releaseTarget = { recordId: releaseWeapon.recordId, gameReleaseId: releaseWeapon.gameReleaseId, fieldPath: '/payload', dimension: 'technical' };
  releaseChanged.reviewReceipts.push(createReviewReceipt(releaseChanged, releaseTarget, { reviewer: { kind: 'human', id: 'fixture-human-reviewer' }, reviewedAt: '2026-10-18T00:00:00Z' }));
  releaseWeapon.reviewState = 'approved';
  releaseChanged.gameReleases[0].gameVersion = '1.0.2';
  releaseChanged.records.find((record) => record.kind === 'game-change').payload.comparison.fromGameVersion = '1.0.2';
  releaseWeapon.reviewState = 'stale';
  assert.equal(validate(releaseChanged).valid, true, JSON.stringify(validate(releaseChanged).issues, null, 2));

  const compatibilityChanged = structuredClone(fixture);
  const laterWeapon = compatibilityChanged.records.find((record) => record.recordId === 'fixture:weapon:alpha' && record.gameReleaseId === 'fixture-r2');
  const laterTarget = { recordId: laterWeapon.recordId, gameReleaseId: laterWeapon.gameReleaseId, fieldPath: '/payload', dimension: 'technical' };
  compatibilityChanged.reviewReceipts.push(createReviewReceipt(compatibilityChanged, laterTarget, { reviewer: { kind: 'human', id: 'fixture-human-reviewer' }, reviewedAt: '2026-10-18T00:00:00Z' }));
  laterWeapon.reviewState = 'approved';
  compatibilityChanged.records.find((record) => record.recordId === 'fixture:compat:r2').payload.rationale = 'Changed compatibility rationale.';
  laterWeapon.reviewState = 'stale';
  assert.equal(validate(compatibilityChanged).valid, true, JSON.stringify(validate(compatibilityChanged).issues, null, 2));

  const tombstoneChanged = structuredClone(fixture);
  const tombstoneTarget = { recordId: 'fixture:weapon:retired', gameReleaseId: 'fixture-r2', fieldPath: '/reason', dimension: 'identity' };
  tombstoneChanged.reviewReceipts.push(createReviewReceipt(tombstoneChanged, tombstoneTarget, { reviewer: { kind: 'human', id: 'fixture-human-reviewer' }, reviewedAt: '2026-10-18T00:00:00Z' }));
  tombstoneChanged.tombstones[0].reviewState = 'approved';
  tombstoneChanged.sourceRefs.find((source) => source.sourceId === 'fixture-public-code-r2').artifactSha256 = '2222222222222222222222222222222222222222222222222222222222222222';
  tombstoneChanged.tombstones[0].reviewState = 'stale';
  assert.equal(validate(tombstoneChanged).valid, true, JSON.stringify(validate(tombstoneChanged).issues, null, 2));
});

// Scenario: A game change reuses one snapshot or reports a modified field with no exact value change.
// Purpose: Require ordered distinct releases with different content snapshots and a real before/after delta.
test('UnitT09_game-change-records-bind-both-game-builds-and-source-owner', () => {
  const mismatch = structuredClone(fixture);
  mismatch.records.find((record) => record.kind === 'game-change').payload.comparison.fromGameBuild = 'unknown-build';
  assert.ok(issueCodes(mismatch).has('change-comparison-mismatch'));

  const sameRelease = structuredClone(fixture);
  const sameReleaseComparison = sameRelease.records.find((record) => record.kind === 'game-change').payload.comparison;
  for (const key of ['GameReleaseId', 'GameVersion', 'GameBuild', 'SnapshotId']) sameReleaseComparison[`from${key}`] = sameReleaseComparison[`to${key}`];
  assert.ok(issueCodes(sameRelease).has('invalid-change-release'));

  const reversedRelease = structuredClone(fixture);
  const reversedChange = reversedRelease.records.find((record) => record.kind === 'game-change');
  reversedChange.gameReleaseId = 'fixture-r1';
  reversedChange.sourceRefs = [{ sourceId: 'fixture-private-r1', gameReleaseId: 'fixture-r1' }];
  reversedChange.payload.entityRef = { recordId: 'fixture:weapon:alpha', gameReleaseId: 'fixture-r1' };
  reversedChange.payload.evidenceRefs = [{ recordId: 'fixture:evidence:alpha', gameReleaseId: 'fixture-r1' }];
  Object.assign(reversedChange.payload.comparison, {
    fromGameReleaseId: 'fixture-r2', toGameReleaseId: 'fixture-r1',
    fromGameVersion: '1.0.1', toGameVersion: '1.0.0',
    fromGameBuild: 'synthetic-build-002', toGameBuild: 'synthetic-build-001',
    fromSnapshotId: 'fixture-snapshot-r2', toSnapshotId: 'fixture-snapshot-r1'
  });
  assert.ok(issueCodes(reversedRelease).has('invalid-change-release'));

  const sameSnapshot = structuredClone(fixture);
  const fromRelease = sameSnapshot.gameReleases.find((release) => release.gameReleaseId === 'fixture-r1');
  const toRelease = sameSnapshot.gameReleases.find((release) => release.gameReleaseId === 'fixture-r2');
  fromRelease.snapshot.manifestSha256 = toRelease.snapshot.manifestSha256;
  fromRelease.snapshot.contentSha256 = toRelease.snapshot.contentSha256;
  sameSnapshot.sourceRefs.find((source) => source.gameReleaseId === 'fixture-r1').snapshot = structuredClone(fromRelease.snapshot);
  assert.ok(issueCodes(sameSnapshot).has('invalid-change-snapshot'));

  const unchangedField = structuredClone(fixture);
  const changedField = unchangedField.records.find((record) => record.kind === 'game-change').payload.changedFields[0];
  changedField.before.decimal = '1.250';
  changedField.after.decimal = '1.25';
  assert.ok(issueCodes(unchangedField).has('unchanged-game-change-field'));

  const modImpact = structuredClone(fixture);
  modImpact.records.find((record) => record.kind === 'game-change').payload.modImpact = 'synthetic';
  assert.ok(issueCodes(modImpact).has('schema-additionalProperties'));
});

// Scenario: A contributor runs the fixed public fixture checker without a private source checkout.
// Purpose: Provide a deterministic, read-only command and stable validation receipt for downstream repo pins.
test('UnitT10_cli-emits-deterministic-read-only-validation-receipt', () => {
  const cli = path.join(repoRoot, 'scripts', 'content', 'contract-validator.mjs');
  const first = spawnSync(process.execPath, [cli, '--check', '--source-root', repoRoot], { encoding: 'utf8' });
  const second = spawnSync(process.execPath, [cli, '--check', '--source-root', repoRoot], { encoding: 'utf8' });
  assert.equal(first.status, 0, first.stderr || first.stdout);
  assert.equal(second.status, 0, second.stderr || second.stdout);
  const a = JSON.parse(first.stdout); const b = JSON.parse(second.stdout);
  assert.equal(a.validationReceipt.receiptSha256, b.validationReceipt.receiptSha256);
  assert.equal(a.publicationEligible, false);
});

// Scenario: Malformed top-level and nested structures reach the semantic validator.
// Purpose: Return stable validation issues instead of throwing on missing arrays or null entries.
test('UnitT11_malformed-input-returns-validation-errors-without-throwing', () => {
  for (const candidate of [null, {}, { ...structuredClone(fixture), records: [null] }, { ...structuredClone(fixture), gameReleases: null }]) {
    assert.doesNotThrow(() => validate(candidate));
    assert.equal(validate(candidate).valid, false);
  }
});

// Scenario: A code-only observation is labeled game-tested on either a claim or a game-change record.
// Purpose: Require game-tested source metadata while allowing the record to retain both code and game-test evidence.
test('UnitT12_game-tested-claims-and-changes-require-game-test-source-evidence', () => {
  const codeOnlyClaim = structuredClone(fixture);
  codeOnlyClaim.records.find((record) => record.recordId === 'fixture:claim:damage').payload.basis = 'game-tested';
  assert.ok(issueCodes(codeOnlyClaim).has('game-test-evidence-required'));

  const combinedClaim = structuredClone(fixture);
  const claim = combinedClaim.records.find((record) => record.recordId === 'fixture:claim:damage');
  claim.payload.basis = 'game-tested';
  claim.payload.evidenceRefs.push(addSyntheticGameTestEvidence(combinedClaim, 'fixture-r1'));
  assert.equal(validate(combinedClaim).valid, true, JSON.stringify(validate(combinedClaim).issues, null, 2));
  assert.equal(validate(combinedClaim).publicationEligible, false);

  const codeOnlyChange = structuredClone(fixture);
  codeOnlyChange.records.find((record) => record.kind === 'game-change').payload.verificationMethod = 'game-tested';
  assert.ok(issueCodes(codeOnlyChange).has('game-test-evidence-required'));

  const combinedChange = structuredClone(fixture);
  const change = combinedChange.records.find((record) => record.kind === 'game-change');
  change.payload.verificationMethod = 'game-tested';
  change.payload.evidenceRefs.push(addSyntheticGameTestEvidence(combinedChange, 'fixture-r2'));
  assert.equal(validate(combinedChange).valid, true, JSON.stringify(validate(combinedChange).issues, null, 2));
  assert.equal(validate(combinedChange).publicationEligible, false);

  const codeSourceLabeledAsGameTest = structuredClone(fixture);
  codeSourceLabeledAsGameTest.records.find((record) => record.recordId === 'fixture:evidence:alpha').payload.evidenceKind = 'game-tested';
  assert.ok(issueCodes(codeSourceLabeledAsGameTest).has('game-test-source-required'));
});
