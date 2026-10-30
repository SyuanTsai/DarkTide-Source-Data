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

// Scenario: Cross-record contexts, stat comparisons, and curve references appear before or after their target records.
// Purpose: Apply tier membership and unit compatibility rules independently of record order while preserving defined-but-not-obtainable tiers.
test('UnitT13_cross-record-context-units-and-curves-are-order-independent', () => {
  const outOfRangeClaimTier = structuredClone(fixture);
  outOfRangeClaimTier.records.find((record) => record.recordId === 'fixture:claim:damage').payload.context.tier = 99;
  assert.ok(issueCodes(outOfRangeClaimTier).has('context-tier-not-defined'));
  const reorderedOutOfRangeClaimTier = structuredClone(outOfRangeClaimTier);
  reorderedOutOfRangeClaimTier.records.reverse();
  assert.ok(issueCodes(reorderedOutOfRangeClaimTier).has('context-tier-not-defined'));

  const missingClaimVariant = structuredClone(fixture);
  const missingVariantClaim = missingClaimVariant.records.find((record) => record.recordId === 'fixture:claim:damage');
  delete missingVariantClaim.payload.context.variantRef;
  assert.ok(issueCodes(missingClaimVariant).has('context-tier-needs-variant'));

  const inferredDefinedTier = structuredClone(fixture);
  const inferredClaim = inferredDefinedTier.records.find((record) => record.recordId === 'fixture:claim:damage');
  inferredClaim.payload.targetRef = { recordId: 'fixture:variant:alpha', gameReleaseId: 'fixture-r1' };
  delete inferredClaim.payload.context.variantRef;
  inferredClaim.payload.context.tier = 3;
  assert.equal(validate(inferredDefinedTier).valid, true, JSON.stringify(validate(inferredDefinedTier).issues, null, 2));

  const outOfRangeAttackTier = structuredClone(fixture);
  outOfRangeAttackTier.records.find((record) => record.recordId === 'fixture:attack:alpha').payload.contexts[0].tier = 99;
  assert.ok(issueCodes(outOfRangeAttackTier).has('context-tier-not-defined'));

  const outOfRangeDamageConditionTier = structuredClone(fixture);
  const damage = outOfRangeDamageConditionTier.records.find((record) => record.recordId === 'fixture:damage:alpha');
  damage.payload.segments[0].conditions = [{
    variantRef: { recordId: 'fixture:variant:alpha', gameReleaseId: 'fixture-r1' },
    tier: 99
  }];
  assert.ok(issueCodes(outOfRangeDamageConditionTier).has('context-tier-not-defined'));

  const claimComparisonUnitMismatch = structuredClone(fixture);
  claimComparisonUnitMismatch.records.find((record) => record.recordId === 'fixture:claim:damage')
    .payload.context.statComparisons[0].inputUnit = 'damage';
  assert.ok(issueCodes(claimComparisonUnitMismatch).has('stat-comparison-unit'));
  const reorderedClaimComparisonUnitMismatch = structuredClone(claimComparisonUnitMismatch);
  reorderedClaimComparisonUnitMismatch.records.reverse();
  assert.ok(issueCodes(reorderedClaimComparisonUnitMismatch).has('stat-comparison-unit'));

  const attackComparisonUnitMismatch = structuredClone(fixture);
  attackComparisonUnitMismatch.records.find((record) => record.recordId === 'fixture:attack:alpha')
    .payload.statComparisons[0].inputUnit = 'damage';
  assert.ok(issueCodes(attackComparisonUnitMismatch).has('stat-comparison-unit'));

  const curveUnitMismatch = structuredClone(fixture);
  curveUnitMismatch.records.find((record) => record.recordId === 'fixture:curve:damage' && record.gameReleaseId === 'fixture-r1')
    .payload.inputUnit = 's';
  assert.ok(issueCodes(curveUnitMismatch).has('curve-unit-mismatch'));
  const reorderedCurveUnitMismatch = structuredClone(curveUnitMismatch);
  reorderedCurveUnitMismatch.records.reverse();
  assert.ok(issueCodes(reorderedCurveUnitMismatch).has('curve-unit-mismatch'));

  const reorderedValidFixture = structuredClone(fixture);
  reorderedValidFixture.records.reverse();
  assert.equal(validate(reorderedValidFixture).valid, true, JSON.stringify(validate(reorderedValidFixture).issues, null, 2));
});
// Scenario: A blessing has an unresolved localized name key represented as NOT_VERIFIED and its exact field is covered.
// Purpose: Permit this explicit unknown without weakening existing string names or allowing uncovered unknown identity.
test('UnitT14_blessing-name-key-unknown-requires-matching-not-verified-coverage', () => {
  const candidate = structuredClone(fixture);
  const blessing = candidate.records.find((record) => record.kind === 'blessing');
  blessing.payload.nameKey = { status: 'unknown', reasonCode: 'NOT_VERIFIED' };
  blessing.dataCoverage = { status: 'partial', missing: [{ field: '/payload/nameKey', reasonCode: 'NOT_VERIFIED' }] };
  assert.equal(validate(candidate).valid, true, JSON.stringify(validate(candidate).issues, null, 2));

  assert.equal(validate(fixture).valid, true);

  const uncovered = structuredClone(candidate);
  const uncoveredBlessing = uncovered.records.find((record) => record.kind === 'blessing');
  uncoveredBlessing.dataCoverage = { status: 'complete', missing: [] };
  assert.ok(issueCodes(uncovered).has('unknown-blessing-name-key-coverage'));
});

// Scenario: Pending, draft, and tombstone records each declare a review target whose JSON Pointer does not resolve.
// Purpose: Reject every bad declared target before a receipt exists, while keeping legal array indices and escaped object keys valid.
test('UnitT15_declared-review-target-pointers-are-validated-without-receipts', () => {
  const assertMissingDeclaredPointer = (candidate, listName, index) => {
    const prefix = `/${listName}/${index}/reviewTargets/`;
    assert.ok(validate(candidate).issues.some((issue) => issue.code === 'missing-review-field' && issue.path.startsWith(prefix)));
  };

  const pending = structuredClone(fixture);
  const pendingIndex = pending.records.findIndex((item) => item.reviewState === 'pending');
  const pendingRecord = pending.records[pendingIndex];
  pendingRecord.reviewTargets.push({ fieldPath: '/payload/does-not-exist', dimension: 'technical' });
  assertMissingDeclaredPointer(pending, 'records', pendingIndex);

  const draft = structuredClone(fixture);
  const draftIndex = draft.records.findIndex((item) => item.reviewState === 'pending');
  draft.records[draftIndex].reviewState = 'draft';
  draft.records[draftIndex].reviewTargets.push({ fieldPath: '/payload/does-not-exist', dimension: 'context' });
  assertMissingDeclaredPointer(draft, 'records', draftIndex);

  const tombstone = structuredClone(fixture);
  assert.ok(tombstone.tombstones.length > 0, 'The representative fixture must retain a tombstone');
  tombstone.tombstones[0].reviewTargets[0].fieldPath = '/does-not-exist';
  assertMissingDeclaredPointer(tombstone, 'tombstones', 0);

  const pointerCase = structuredClone(fixture);
  const pointerRecord = pointerCase.records.find((item) => Array.isArray(item.payload.segments) && item.payload.segments.length > 0);
  assert.ok(pointerRecord, 'The representative fixture must retain an array-valued payload field');
  pointerRecord.payload['review/a~key'] = 'synthetic pointer target';
  assert.doesNotThrow(() => computeReviewDigests(pointerCase, {
    recordId: pointerRecord.recordId,
    gameReleaseId: pointerRecord.gameReleaseId,
    fieldPath: '/payload/segments/0',
    dimension: 'technical'
  }));
  assert.doesNotThrow(() => computeReviewDigests(pointerCase, {
    recordId: pointerRecord.recordId,
    gameReleaseId: pointerRecord.gameReleaseId,
    fieldPath: '/payload/review~1a~0key',
    dimension: 'technical'
  }));
});

// Scenario: A raw W07 movement consumer reports a normalized speed-fraction change per second.
// Purpose: Accept the additive unit needed by the pinned sprint-speed consumer without changing legacy units.
test('UnitT16_w07-normalized-speed-rate-unit-is-supported', () => {
  const candidate = structuredClone(fixture);
  candidate.records.find((record) => record.recordId === 'fixture:claim:damage').payload.value.unit = 'normalized-speed-per-second';
  assert.equal(validate(candidate).valid, true, JSON.stringify(validate(candidate).issues, null, 2));
});

// Scenario: A W07 movement-curve selector is a field identifier, not a numeric quantity.
// Purpose: Preserve the source string while allowing its unit to be explicitly not applicable.
test('UnitT23_w07-selector-table-property-allows-not-applicable-unit', () => {
  const candidate = structuredClone(fixture);
  const weapon = candidate.records.find((record) => record.recordId === 'fixture:weapon:alpha');
  const sourceRef = candidate.sourceRefs.find((source) => source.gameReleaseId === weapon.gameReleaseId);
  weapon.payload.statTables = [{
    statKey: 'chainaxe_mobility_stat',
    templateKey: 'fixture_template',
    sourceLocator: { sourceRef: { sourceId: sourceRef.sourceId, gameReleaseId: sourceRef.gameReleaseId }, path: 'fixture-private.lua', line: 1, fieldPath: 'weapon_templates.fixture_template' },
    properties: [{
      property: 'weapon_movement_curve_templates.default.1.1',
      unit: { status: 'not-applicable' },
      sourceLocator: { sourceRef: { sourceId: sourceRef.sourceId, gameReleaseId: sourceRef.gameReleaseId }, path: 'fixture-private.lua', line: 2, fieldPath: 'weapon_movement_curve_templates.default.1.1' },
      orderedValues: [{ key: 'selector', rawValue: 'modifier' }]
    }]
  }];
  assert.equal(issueCodes(candidate).has('schema-oneOf'), false, JSON.stringify(validate(candidate).issues, null, 2));

  weapon.payload.statTableSemantics = [{
    statKey: 'chainaxe_mobility_stat',
    groupKey: 'mobility',
    bindings: [{
      property: 'weapon_movement_curve_templates.default.1.1',
      quantityKind: 'movement-curve-modifier',
      unit: 'ratio',
      consumerEvidence: [{
        sourceLocator: { sourceRef: { sourceId: sourceRef.sourceId, gameReleaseId: sourceRef.gameReleaseId }, path: 'fixture-private.lua', line: 3, fieldPath: 'weapon_movement_curve_templates.default.1.1' },
        rawValue: '"modifier"',
        summary: 'The source value selects a movement-curve modifier field.'
      }],
      theoreticalInputRange: { status: 'unknown', reasonCode: 'NOT_EXPOSED_BY_SOURCE' },
      obtainableInputRange: { status: 'unknown', reasonCode: 'NOT_EXPOSED_BY_SOURCE' }
    }]
  }];
  assert.ok(issueCodes(candidate).has('w07-stat-semantic-unit'));
  candidate.records.find((record) => record.recordId === 'fixture:weapon:alpha').payload.statTableSemantics[0].bindings[0].unit = { status: 'not-applicable' };
  assert.equal(issueCodes(candidate).has('w07-stat-semantic-unit'), false);
});

// Scenario: A W07 weapon binding points to a raw trait-template property whose typed table semantics row is omitted.
// Purpose: Require exact per-stat property coverage so a marker binding cannot disappear from the formal source model.
test('UnitT24_w07-stat-semantics-cover-every-source-binding-property', async () => {
  const { buildW07WeaponBundle } = await import('../scripts/content/contract-w07-weapons.mjs');
  const { candidate } = await buildW07WeaponBundle();
  assert.equal(validateSourceContract(candidate, { schema }).valid, true);

  const weapon = candidate.records.find((record) => record.kind === 'weapon' && record.payload.templateKey);
  const sourceBindings = weapon.payload.statBindings.flatMap((group) => group.bindings.map((binding) => ({
    statKey: group.statKey,
    property: binding.property,
    action: binding.action,
    profileKey: binding.profileKey
  })));
  const markerBindings = [
    sourceBindings.find((binding) => binding.statKey === 'chainaxe_dps_stat' && binding.action === 'action_right_light_pushfollow'),
    sourceBindings.find((binding) => binding.statKey === 'chainaxe_armor_pierce_stat' && binding.action === 'action_right_light_pushfollow'),
    sourceBindings.find((binding) => binding.statKey === 'chainaxe_sawing_stat' && binding.profileKey === 'light_chainaxe_sticky')
  ];
  assert.ok(markerBindings.every(Boolean), 'The pushfollow DPS/AP properties and sticky sawing profile must remain stat bindings');

  for (const { statKey, property } of markerBindings) {
    const semanticGroup = weapon.payload.statTableSemantics.find((group) => group.statKey === statKey);
    assert.ok(semanticGroup?.bindings.some((binding) => binding.property === property), `${statKey} must type ${property}`);
    const changed = structuredClone(candidate);
    const changedWeapon = changed.records.find((record) => record.recordId === weapon.recordId
      && record.gameReleaseId === weapon.gameReleaseId);
    const changedSemanticGroup = changedWeapon.payload.statTableSemantics.find((group) => group.statKey === statKey);
    changedSemanticGroup.bindings = changedSemanticGroup.bindings.filter((binding) => binding.property !== property);
    assert.ok(validateSourceContract(changed, { schema }).issues.some((issue) => issue.code === 'w07-stat-semantics-coverage'),
      `${statKey} must reject omitted semantic property ${property}`);
  }
});

// Scenario: A five-point W07 boost table has a normalized reference axis and a separately bounded finesse caller.
// Purpose: Preserve exact axis, interpolation, caller gate and raw table alignment without evaluating the curve.
test('UnitT25_w07-boost-curve-retains-axis-interpolation-and-caller-bounds', () => {
  const candidate = structuredClone(fixture);
  const releaseId = 'fixture-r2';
  const profile = candidate.records.find((record) => record.recordId === 'fixture:damage:r2');
  const sourceTemplate = candidate.sourceRefs.find((item) => item.gameReleaseId === releaseId && item.sourceKind === 'public-code');
  const addSource = (sourceId, sourcePath, artifactHex) => {
    const source = structuredClone(sourceTemplate);
    source.sourceId = sourceId;
    source.path = sourcePath;
    source.publicUrl = `${source.repository}/blob/${source.commit}/${sourcePath}`;
    source.artifactSha256 = artifactHex.repeat(64);
    candidate.sourceRefs.push(source);
    return { sourceId, gameReleaseId: releaseId };
  };
  const damageSourceRef = addSource('fixture-public-code-w07-damage-calculation', 'scripts/utilities/attack/damage_calculation.lua', 'a');
  const powerSourceRef = addSource('fixture-public-code-w07-power-level-settings', 'scripts/settings/damage/power_level_settings.lua', 'b');
  profile.sourceRefs.push(damageSourceRef, powerSourceRef);
  const axisLocator = {
    sourceRef: damageSourceRef,
    path: 'scripts/utilities/attack/damage_calculation.lua',
    line: 208,
    endLine: 217,
    fieldPath: 'source.five_point_damage_boost_curve_indexing_and_interpolation'
  };
  const callerLocator = {
    sourceRef: damageSourceRef,
    path: 'scripts/utilities/attack/damage_calculation.lua',
    line: 700,
    endLine: 704,
    fieldPath: 'source.finesse_boost_amount_cap_and_positive_amount_gate'
  };
  const tableLocator = (ordinal) => ({
    sourceRef: powerSourceRef,
    path: 'scripts/settings/damage/power_level_settings.lua',
    line: 124 + ordinal,
    fieldPath: `power_level_settings.boost_curves.default.${ordinal}`
  });
  const rawTableSource = {
    sourceRef: damageSourceRef,
    path: axisLocator.path,
    line: 208,
    fieldPath: 'damage_templates.synthetic_boost_profile'
  };
  delete profile.payload.segments;
  profile.payload.rawSourceDefinition = {
    ...rawTableSource,
    leaves: [{
      line: 125,
      fieldPath: 'damage_templates.synthetic_boost_profile.targets.default_target.boost_curve',
      rawValue: 'PowerLevelSettings.boost_curves.default',
      sourceRef: powerSourceRef,
      path: 'scripts/settings/damage/power_level_settings.lua'
    }],
    tables: [{
      tableKey: 'PowerLevelSettings.boost_curves.default',
      quantity: 'damage-boost-curve',
      unit: 'ratio',
      sourceLocator: tableLocator(1),
      orderedValues: ['0', '0.3', '0.6', '0.8', '1'].map((rawValue, index) => ({
        ordinal: index + 1,
        rawValue,
        decimal: rawValue,
        sourceLocator: tableLocator(index + 1)
      })),
      curveSemantics: {
        schemaVersion: 'w07-boost-curve-semantics/1.0.0',
        referenceAxis: {
          min: '0', max: '1', minInclusive: true, maxInclusive: true, unit: 'ratio',
          sourceLocators: [structuredClone(axisLocator)]
        },
        knots: ['0', '0.25', '0.5', '0.75', '1'].map((input, index) => ({ sourceOrdinal: index + 1, input })),
        interpolation: { value: 'piecewise-linear', sourceLocator: structuredClone(axisLocator) },
        callerInput: {
          min: '0', minInclusive: false, max: '1', maxInclusive: true, unit: 'ratio',
          predicate: 'finesse_boost_amount > 0',
          transform: 'math.min(finesse_boost_amount, 1)',
          sourceLocators: [callerLocator]
        }
      }
    }]
  };

  assert.equal(validateSourceContract(candidate, { schema }).valid, true, JSON.stringify(validateSourceContract(candidate, { schema }).issues, null, 2));

  const missingSemantics = structuredClone(candidate);
  delete missingSemantics.records.find((record) => record.recordId === profile.recordId).payload.rawSourceDefinition.tables[0].curveSemantics;
  assert.ok(validateSourceContract(missingSemantics, { schema }).issues.some((issue) => issue.code === 'w07-boost-curve-semantics'));

  const wrongAxis = structuredClone(candidate);
  wrongAxis.records.find((record) => record.recordId === profile.recordId).payload.rawSourceDefinition.tables[0].curveSemantics.knots[1].input = '0.24';
  assert.ok(validateSourceContract(wrongAxis, { schema }).issues.some((issue) => issue.code === 'w07-boost-curve-semantics'));

  const wrongCaller = structuredClone(candidate);
  wrongCaller.records.find((record) => record.recordId === profile.recordId).payload.rawSourceDefinition.tables[0].curveSemantics.callerInput.minInclusive = true;
  assert.ok(validateSourceContract(wrongCaller, { schema }).issues.some((issue) => issue.code === 'w07-boost-curve-semantics'));

  const wrongLocator = structuredClone(candidate);
  wrongLocator.records.find((record) => record.recordId === profile.recordId)
    .payload.rawSourceDefinition.tables[0].curveSemantics.interpolation.sourceLocator.endLine = 218;
  assert.ok(validateSourceContract(wrongLocator, { schema }).issues.some((issue) => issue.code === 'w07-boost-curve-semantics'));

  const wrongOutputUnit = structuredClone(candidate);
  wrongOutputUnit.records.find((record) => record.recordId === profile.recordId)
    .payload.rawSourceDefinition.tables[0].unit = { status: 'unknown', reasonCode: 'NOT_VERIFIED' };
  assert.ok(validateSourceContract(wrongOutputUnit, { schema }).issues.some((issue) => issue.code === 'w07-boost-curve-semantics'));

  const missingTypedTable = structuredClone(candidate);
  missingTypedTable.records.find((record) => record.recordId === profile.recordId).payload.rawSourceDefinition.tables = [];
  assert.ok(validateSourceContract(missingTypedTable, { schema }).issues.some((issue) => issue.code === 'w07-boost-curve-semantics'));

  const malformedSemantics = structuredClone(candidate);
  malformedSemantics.records.find((record) => record.recordId === profile.recordId)
    .payload.rawSourceDefinition.tables[0].curveSemantics.referenceAxis = null;
  assert.doesNotThrow(() => validateSourceContract(malformedSemantics, { schema }));
  assert.equal(validateSourceContract(malformedSemantics, { schema }).valid, false);
});

// Scenario: A W07 raw target and armor record preserve only static source facts, without invented legacy combat fields.
// Purpose: Accept the raw-only branch, reject mixed legacy/raw branches, and reject duplicate hit-zone identities.
test('UnitT17_w07-static-target-and-armor-use-exclusive-raw-branches', () => {
  const candidate = structuredClone(fixture);
  const source = candidate.sourceRefs.find((item) => item.gameReleaseId === 'fixture-r2');
  const sourceRef = { sourceId: source.sourceId, gameReleaseId: source.gameReleaseId };
  const locator = (fieldPath) => ({ sourceRef, path: source.path, line: 12, fieldPath });
  const armor = candidate.records.find((record) => record.kind === 'armor-class' && record.gameReleaseId === 'fixture-r2');
  const target = candidate.records.find((record) => record.kind === 'target-profile' && record.gameReleaseId === 'fixture-r2');
  const legacyArmorPayload = structuredClone(armor.payload);
  const legacyTargetPayload = structuredClone(target.payload);
  const modifier = candidate.records.find((record) => record.kind === 'modifier-rule');
  const legacyModifierPayload = structuredClone(modifier.payload);
  const modifierRelease = candidate.gameReleases.find((item) => item.gameReleaseId === modifier.gameReleaseId);
  const modifierSource = structuredClone(source);
  modifierSource.sourceId = 'fixture-public-code-w07-rules';
  modifierSource.gameReleaseId = modifier.gameReleaseId;
  modifierSource.gameBuild = modifierRelease.gameBuild;
  modifierSource.snapshot = structuredClone(modifierRelease.snapshot);
  modifierSource.path = 'fixture-w07-rules.lua';
  modifierSource.commit = 'a'.repeat(40);
  modifierSource.artifactSha256 = 'c'.repeat(64);
  modifierSource.safeSummary = 'Synthetic public-code provenance for Source contract shape tests only.';
  candidate.sourceRefs.push(modifierSource);
  const dependencySources = [
    { sourceId: 'fixture-public-code-w07-weakspot', path: 'scripts/utilities/attack/weakspot.lua' },
    { sourceId: 'fixture-public-code-w07-weakspot-settings', path: 'scripts/settings/damage/weakspot_settings.lua' }
  ].map((item) => ({
    ...structuredClone(source),
    ...item,
    gameReleaseId: modifier.gameReleaseId,
    gameBuild: modifierRelease.gameBuild,
    snapshot: structuredClone(modifierRelease.snapshot),
    commit: modifierRelease.snapshot.commit
  }));
  candidate.sourceRefs.push(...dependencySources);
  modifier.sourceRefs = [modifierSource, ...dependencySources].map(({ sourceId, gameReleaseId }) => ({ sourceId, gameReleaseId }));
  const modifierLocator = (fieldPath) => ({ sourceRef: { sourceId: modifierSource.sourceId, gameReleaseId: modifier.gameReleaseId }, path: modifierSource.path, line: 12, fieldPath });
  const dependencyLocator = (dependencySource, line, endLine, fieldPath) => ({
    sourceRef: { sourceId: dependencySource.sourceId, gameReleaseId: dependencySource.gameReleaseId },
    path: dependencySource.path,
    line,
    endLine,
    fieldPath
  });
  armor.payload = { sourceStatic: {
    schemaVersion: 'armor-class-static/1',
    classKey: 'fixture_light',
    enumRawValue: '"fixture_light"',
    sourceLocator: locator('armor_types.fixture_light')
  } };
  target.payload = { sourceStatic: {
    schemaVersion: 'minion-hit-schema/1.0.0',
    breedKey: 'fixture_minion',
    breedType: 'minion',
    registryLocator: locator('BreedSettings.fixture_minion'),
    registryRawValue: 'fixture_minion = true',
    breedLocator: locator('BreedTemplates.fixture_minion'),
    baseArmorClassRef: { recordId: armor.recordId, gameReleaseId: armor.gameReleaseId },
    baseArmorRawValue: 'armor_types.fixture_light',
    baseArmorLocator: locator('BreedTemplates.fixture_minion.base_armor_type'),
    rawHitZones: { rawValue: '{ body = {}, head = {} }', sourceLocator: locator('BreedTemplates.fixture_minion.hit_zones') },
    hitZones: ['body', 'head'].map((zoneId) => ({
      zoneId,
      rawSource: { rawValue: `${zoneId} = {}`, sourceLocator: locator(`BreedTemplates.fixture_minion.hit_zones.${zoneId}`) },
      actors: [],
      actorsRawValue: '{}',
      actorsLocator: locator(`BreedTemplates.fixture_minion.hit_zones.${zoneId}.actors`),
      otherRawFields: []
    })),
    weakspotTypes: [],
    armorOverrides: [],
    damageMultipliers: [
      { zoneId: 'unresolved_head', attackType: 'melee', decimal: '0.7', rawValue: '0.7', sourceLocator: locator('BreedTemplates.fixture_minion.hitzone_damage_multiplier.unresolved_head.melee') },
      { zoneId: 'unresolved_head', attackType: 'ranged', decimal: '0.4', rawValue: '0.4', sourceLocator: locator('BreedTemplates.fixture_minion.hitzone_damage_multiplier.unresolved_head.ranged') }
    ],
    unresolvedZoneReferences: [
      { fieldPath: 'hitzone_damage_multiplier', zoneId: 'unresolved_head', rawValue: '0.7', sourceLocator: locator('BreedTemplates.fixture_minion.hitzone_damage_multiplier.unresolved_head.melee') },
      { fieldPath: 'hitzone_damage_multiplier', zoneId: 'unresolved_head', rawValue: '0.4', sourceLocator: locator('BreedTemplates.fixture_minion.hitzone_damage_multiplier.unresolved_head.ranged') }
    ]
  } };
  modifier.payload = { sourceBranchModel: {
    schemaVersion: 'static-combat-relations/1',
    relationKey: 'weakspot-type-resolution',
    sourceFunction: { rawValue: 'function fixture_relation() end', sourceLocator: modifierLocator('fixture_relation') },
    conditionRows: [{ rawValue: 'if armor_type == armor_types.fixture_light then', sourceLocator: modifierLocator('fixture_relation.if') }],
    rawDependencies: [
      { rawValue: 'function Weakspot.weakspot_type(...)', sourceLocator: dependencyLocator(dependencySources[0], 9, 44, 'Weakspot.weakspot_type') },
      { rawValue: 'weakspot_settings = { head = ... }', sourceLocator: dependencyLocator(dependencySources[1], 4, 27, 'weakspot_settings') }
    ],
    havocOverrides: [],
    executionPolicy: 'static-only'
  } };
  assert.equal(validate(candidate).valid, true, JSON.stringify(validate(candidate).issues, null, 2));

  const symbolicMultiplier = structuredClone(candidate);
  const symbolicTarget = symbolicMultiplier.records.find((record) => record.kind === 'target-profile' && record.gameReleaseId === 'fixture-r2');
  symbolicTarget.payload.sourceStatic.damageMultipliers.push({
    attackType: 'melee', zoneId: 'body', decimal: '2', rawValue: 'hit_zone_damage_multiplier',
    sourceLocator: locator('BreedTemplates.fixture_minion.hitzone_damage_multiplier.body.melee'),
    resolvedConstant: {
      symbol: 'hit_zone_damage_multiplier', decimal: '2', rawValue: 'local hit_zone_damage_multiplier = 2',
      sourceLocator: { ...locator('BreedTemplates.fixture_minion.hit_zone_damage_multiplier'), line: 8 }
    }
  });
  assert.equal(validate(symbolicMultiplier).valid, true, JSON.stringify(validate(symbolicMultiplier).issues, null, 2));

  const missingMultiplierConstant = structuredClone(symbolicMultiplier);
  delete missingMultiplierConstant.records.find((record) => record.kind === 'target-profile' && record.gameReleaseId === 'fixture-r2')
    .payload.sourceStatic.damageMultipliers.at(-1).resolvedConstant;
  assert.ok(issueCodes(missingMultiplierConstant).has('w07-target-multiplier-constant'));

  const guessedMultiplierConstant = structuredClone(symbolicMultiplier);
  guessedMultiplierConstant.records.find((record) => record.kind === 'target-profile' && record.gameReleaseId === 'fixture-r2')
    .payload.sourceStatic.damageMultipliers.at(-1).decimal = '2.5';
  assert.ok(issueCodes(guessedMultiplierConstant).has('w07-target-multiplier-constant'));

  const wrongDeclaredEnum = structuredClone(candidate);
  const wrongEnumArmor = wrongDeclaredEnum.records.find((record) => record.kind === 'armor-class' && record.gameReleaseId === 'fixture-r2');
  wrongEnumArmor.payload.sourceStatic.enumRawValue = '"fixture_medium"';
  assert.ok(issueCodes(wrongDeclaredEnum).has('w07-armor-class-enum-binding'));

  const wrongArmorAccess = structuredClone(candidate);
  wrongArmorAccess.records.find((record) => record.kind === 'target-profile' && record.gameReleaseId === 'fixture-r2')
    .payload.sourceStatic.baseArmorRawValue = '"fixture_light"';
  assert.ok(issueCodes(wrongArmorAccess).has('w07-target-base-armor-value'));

  const mixedBranches = structuredClone(candidate);
  const mixedArmor = mixedBranches.records.find((record) => record.kind === 'armor-class' && record.gameReleaseId === 'fixture-r2');
  mixedArmor.payload = { ...legacyArmorPayload, sourceStatic: structuredClone(armor.payload.sourceStatic) };
  const mixedTarget = mixedBranches.records.find((record) => record.kind === 'target-profile' && record.gameReleaseId === 'fixture-r2');
  mixedTarget.payload = { ...legacyTargetPayload, sourceStatic: structuredClone(target.payload.sourceStatic) };
  const mixedModifier = mixedBranches.records.find((record) => record.recordId === modifier.recordId && record.gameReleaseId === modifier.gameReleaseId);
  mixedModifier.payload = { ...legacyModifierPayload, sourceBranchModel: structuredClone(modifier.payload.sourceBranchModel) };
  assert.ok(issueCodes(mixedBranches).has('schema-oneOf'));

  const duplicateZone = structuredClone(candidate);
  const duplicateTarget = duplicateZone.records.find((record) => record.kind === 'target-profile' && record.gameReleaseId === 'fixture-r2');
  duplicateTarget.payload.sourceStatic.hitZones[1].zoneId = duplicateTarget.payload.sourceStatic.hitZones[0].zoneId;
  assert.ok(issueCodes(duplicateZone).has('w07-target-zone-duplicate'));

  const missingExactOrphan = structuredClone(candidate);
  const orphanTarget = missingExactOrphan.records.find((record) => record.kind === 'target-profile' && record.gameReleaseId === 'fixture-r2');
  orphanTarget.payload.sourceStatic.unresolvedZoneReferences.shift();
  assert.ok(issueCodes(missingExactOrphan).has('w07-target-zone-binding'));

  const missingRequiredRelationProof = structuredClone(candidate);
  const relation = missingRequiredRelationProof.records.find((record) => record.recordId === modifier.recordId && record.gameReleaseId === modifier.gameReleaseId);
  relation.payload.sourceBranchModel.rawDependencies.pop();
  assert.ok(issueCodes(missingRequiredRelationProof).has('w07-modifier-dependency-coverage'));

  const truncatedRequiredSpan = structuredClone(candidate);
  const truncatedRelation = truncatedRequiredSpan.records.find((record) => record.recordId === modifier.recordId && record.gameReleaseId === modifier.gameReleaseId);
  truncatedRelation.payload.sourceBranchModel.rawDependencies[0].sourceLocator.endLine = 9;
  assert.ok(issueCodes(truncatedRequiredSpan).has('w07-modifier-dependency-coverage'));
});

// Scenario: A static Havoc armor override uses the source's quoted enum key while target armor uses an armor_types access.
// Purpose: Accept the exact quoted relation token without broadening target armor token validation.
test('UnitT22_w07-havoc-override-retains-quoted-class-token', () => {
  const candidate = structuredClone(fixture);
  const modifier = candidate.records.find((record) => record.kind === 'modifier-rule');
  const source = candidate.sourceRefs.find((item) => item.sourceKind === 'public-code');
  const release = candidate.gameReleases.find((item) => item.gameReleaseId === modifier.gameReleaseId);
  const armor = candidate.records.find((record) => record.kind === 'armor-class' && record.gameReleaseId === modifier.gameReleaseId);
  const armorPath = 'scripts/utilities/attack/armor.lua';
  const havocPath = 'scripts/settings/havoc/havoc_mutator_local_settings.lua';
  const extraSources = [armorPath, havocPath].map((path, index) => ({
    ...structuredClone(source),
    sourceId: 'fixture-public-code-w07-havoc-' + index,
    path,
    gameReleaseId: modifier.gameReleaseId,
    gameBuild: release.gameBuild,
    snapshot: structuredClone(release.snapshot),
    commit: release.snapshot.commit,
    artifactSha256: String(index + 5).repeat(64),
    safeSummary: 'Synthetic source row for the W07 quoted Havoc armor-token test.'
  }));
  candidate.sourceRefs.push(...extraSources);
  modifier.sourceRefs.push(...extraSources.map(({ sourceId, gameReleaseId }) => ({ sourceId, gameReleaseId })));
  const locator = (sourceRow, line, fieldPath) => ({
    sourceRef: { sourceId: sourceRow.sourceId, gameReleaseId: sourceRow.gameReleaseId },
    path: sourceRow.path,
    line,
    fieldPath
  });
  const rangeLocator = (sourceRow, line, endLine, fieldPath) => ({
    ...locator(sourceRow, line, fieldPath), endLine
  });
  armor.sourceRefs.push({ sourceId: extraSources[0].sourceId, gameReleaseId: extraSources[0].gameReleaseId });
  armor.payload = { sourceStatic: {
    schemaVersion: 'armor-class-static/1',
    classKey: 'fixture_light',
    enumRawValue: '"fixture_light"',
    sourceLocator: locator(extraSources[0], 20, 'armor_settings.fixture_light')
  } };
  modifier.payload = { sourceBranchModel: {
    schemaVersion: 'static-combat-relations/1',
    relationKey: 'armor-type-resolution',
    sourceFunction: { rawValue: 'function Armor.armor_type(...) end', sourceLocator: locator(extraSources[0], 25, 'Armor.armor_type') },
    conditionRows: [{ rawValue: 'if hit_zone_armor_override then', sourceLocator: locator(extraSources[0], 30, 'Armor.armor_type.hit_zone_armor_override') }],
    rawDependencies: [
      { rawValue: 'function Armor.armor_type(...) end', sourceLocator: rangeLocator(extraSources[0], 25, 74, 'Armor.armor_type') },
      { rawValue: 'havoc_mutator armor override map', sourceLocator: rangeLocator(extraSources[1], 514, 525, 'HavocMutatorSettings.armor_overrides') }
    ],
    havocOverrides: Array.from({ length: 10 }, (_, index) => ({
      zoneId: 'havoc_zone_' + index,
      armorClassRef: { recordId: armor.recordId, gameReleaseId: armor.gameReleaseId },
      rawValue: '"fixture_light"',
      sourceLocator: locator(extraSources[1], 514 + index, 'HavocMutatorSettings.armor_overrides.' + index)
    })),
    executionPolicy: 'static-only'
  } };
  assert.equal(validate(candidate).valid, true, JSON.stringify(validate(candidate).issues, null, 2));

  const wrongUnquotedToken = structuredClone(candidate);
  wrongUnquotedToken.records.find((record) => record.kind === 'modifier-rule').payload.sourceBranchModel.havocOverrides[0].rawValue = 'fixture_light';
  assert.ok(issueCodes(wrongUnquotedToken).has('w07-static-armor-reference'));
});

// Scenario: A W07 stat curve carries locator objects directly inside its callsiteLocators array.
// Purpose: Require each bare locator object to match the record's pinned same-release source path.
test('UnitT18_w07-bare-locator-array-items-are-source-bound', () => {
  const candidate = structuredClone(fixture);
  const source = candidate.sourceRefs.find((item) => item.gameReleaseId === 'fixture-r2');
  const sourceRef = { sourceId: source.sourceId, gameReleaseId: source.gameReleaseId };
  const locator = (fieldPath) => ({ sourceRef, path: source.path, line: 12, fieldPath });
  const curve = candidate.records.find((record) => record.kind === 'stat-curve' && record.gameReleaseId === 'fixture-r2');
  const definition = candidate.records.find((record) => record.kind === 'stat-definition'
    && record.gameReleaseId === curve.gameReleaseId
    && record.payload.curveRef?.recordId === curve.recordId);
  definition.payload.inputUnit = 'ratio';
  for (const rangeName of ['panelInputRange', 'theoreticalInputRange', 'obtainableInputRange']) {
    if (definition.payload[rangeName]?.status === 'known') definition.payload[rangeName].unit = 'ratio';
  }
  curve.sourceRefs = [{ sourceId: source.sourceId, gameReleaseId: source.gameReleaseId }];
  curve.payload.inputUnit = 'ratio';
  curve.payload.panelInputRange = { status: 'not-applicable' };
  curve.payload.knots = [
    { input: '0', output: '1', sourceOrdinal: 1, rawEndpoint: '1', sourceLocator: locator('curve.values.1') },
    { input: '1', output: '2', sourceOrdinal: 2, rawEndpoint: '2', sourceLocator: locator('curve.values.2') }
  ];
  curve.payload.interpolation = { value: 'linear', sourceLocator: locator('math.lerp') };
  curve.payload.edgePolicy = { value: 'extrapolate', scope: 'math.lerp function only', sourceLocator: locator('math.lerp') };
  curve.payload.callsiteLocators = [locator('damage_profile.lerp'), locator('math.lerp')];
  assert.equal(validate(candidate).valid, true, JSON.stringify(validate(candidate).issues, null, 2));

  const wrongPath = structuredClone(candidate);
  const targetCurve = wrongPath.records.find((record) => record.recordId === curve.recordId && record.gameReleaseId === curve.gameReleaseId);
  targetCurve.payload.callsiteLocators[0].path = 'wrong/path.lua';
  assert.ok(issueCodes(wrongPath).has('w07-locator-provenance'));
});

// Scenario: The W07 inspect action retains two ordered base-template generator definitions.
// Purpose: Require the last source definition, its declared output kind and each generated action assignment.
test('UnitT19_w07-generator-resolution-selects-last-ordered-definition', () => {
  const candidate = structuredClone(fixture);
  const weapon = candidate.records.find((record) => record.kind === 'weapon' && record.gameReleaseId === 'fixture-r2');
  const sourceLink = weapon.sourceRefs[0];
  const locator = (line, fieldPath) => ({ sourceRef: structuredClone(sourceLink), path: 'fixture.lua', line, fieldPath });
  const rangeEvidence = (line, fieldPath, rawValue) => ({
    rawValue,
    summary: 'Synthetic preview evidence used only to exercise the closed Source schema.',
    sourceLocator: { ...locator(line, fieldPath), endLine: line }
  });
  const previewEvidence = [rangeEvidence(2, 'items.preview', 'return 0.8')];
  const previewRules = {
    schemaVersion: 'w07-panel-preview-rules/1.0.0',
    scope: 'client-preview-defaults-only',
    perStatIncrementCap: {
      decimal: '0.8', unit: 'ratio', sourceLocators: previewEvidence,
      override: { fieldPath: 'Items.preview_stats_change.max_stat_value', rawValue: 'max_stat_value or preview default',
        panelCaller: { sourceLocators: [rangeEvidence(3, 'ui.preview', 'return Items.preview_stats_change()')] } }
    },
    itemBudget: { decimal: '380', unit: 'item-stat-rating', sourceLocators: previewEvidence },
    expertiseBudget: {
      formula: 'expertise_increase / expertise_multiplier * 6',
      expertiseMultiplier: { decimal: '10', unit: 'expertise-level-per-rank', sourceLocators: previewEvidence },
      maxExpertise: { decimal: '500', unit: 'expertise-level', sourceLocators: previewEvidence },
      capByRemainingItemBudget: true, lowerBound: '0', sourceLocators: previewEvidence
    },
    displayCap: { decimal: '100', unit: 'percent', formula: 'min(value, 100)', sourceLocators: previewEvidence },
    rounding: { rawValue: 'floor(value + 0.5)', sourceLocators: previewEvidence },
    conditionalBranches: [
      { key: 'no-current-item-total', rawValue: 'if not item_current_level then', behavior: 'Clamp displayed value only.', sourceLocators: previewEvidence },
      { key: 'current-item-total-present', rawValue: 'if item_max_level then', behavior: 'Apply remaining item budget.', sourceLocators: previewEvidence }
    ],
    storedExpertiseOverride: { rawValue: 'item.overrides.expertise_stat_increases', behavior: 'Stored values affect allocation order.', sourceLocators: previewEvidence },
    obtainableRange: { status: 'unknown', reasonCode: 'NOT_EXPOSED_BY_SOURCE', sourceLocators: previewEvidence }
  };
  const rawSource = (line, fieldPath) => ({ rawValue: 'synthetic source row', sourceLocator: locator(line, fieldPath) });
  const startInput = { inputKey: 'inspect', sourceLocator: locator(4, 'action_inputs.inspect') };
  const generatorKey = 'generate_inspect_action';
  const definition = (definitionIndex, line, endLine) => ({
    generatorKey,
    definitionIndex,
    endLine,
    sourceLocator: locator(line, 'base_template_settings.generate_inspect_action'),
    rawValue: 'function generate_inspect_action() return { action_inspect = true } end',
    returnKind: 'action-settings',
    generatedActions: [{ actionKey: 'action_inspect', continuationEdges: [] }],
    generatedContinuations: []
  });
  weapon.payload.panelPreviewRules = previewRules;
  weapon.payload.actionProfileResolution = {
    inputSetup: {
      setupKey: 'fixture_weapon_setup', inheritedSetupKey: 'fixture_default_setup',
      inputEntries: [{ inputKey: 'inspect', origin: 'weapon-mid-setup', rawValue: 'inspect = "inspect"', sourceLocator: locator(4, 'weapon_template.action_inputs.inspect.buffer_time'),
        inheritedDefinition: { rawValue: 'inspect = "inherited"', sourceLocator: locator(3, 'fixture_default_setup.action_inputs.inspect') } }],
      hierarchyRaw: rawSource(5, 'action_input_hierarchy.inspect'),
      setupSources: [
        { rawValue: 'inspect = "inherited"', sourceLocator: locator(3, 'fixture_default_setup.action_inputs') },
        { rawValue: 'inspect = "inspect"', sourceLocator: locator(4, 'weapon_template.action_inputs.inspect.buffer_time') }
      ]
    },
    localActions: [{ action: 'action_inspect', startInput, rawSource: rawSource(45, 'actions.action_inspect'),
      sourceRange: { ...locator(45, 'actions.action_inspect'), endLine: 55 } }],
    fallbackActions: [{ action: 'action_unwield', origin: 'base-template-settings', rawSource: rawSource(60, 'actions.action_unwield'),
      sourceRange: { ...locator(60, 'actions.action_unwield'), endLine: 70 } }],
    actionGenerators: [{ generatorKey, definitions: [definition(1, 10, 20), definition(2, 30, 40)], effectiveDefinitionIndex: 1 }],
    generatorBindings: [{
      generatorKey, ownerAction: 'action_inspect', ownerActionRange: { ...locator(45, 'actions.action_inspect'), endLine: 55 },
      assignedActionKey: 'action_inspect', returnKind: 'action-settings',
      callsite: { sourceLocator: locator(50, 'actions.action_inspect'), rawValue: 'generate_inspect_action()' }
    }],
    staticClosure: {
      localActionCount: 1, fallbackActionCount: 1, profileBindingCount: 0,
      literalContinuationEdgeCount: 0, generatedActionSettingsCount: 1,
      generatedContinuationEdgeCount: 0, inputEntryCount: 1
    },
    executionPolicy: 'static-only; functions not executed'
  };

  const wrongEffective = validate(candidate);
  assert.ok(wrongEffective.issues.some((issue) => issue.code === 'w07-generator-effective-definition'), JSON.stringify(wrongEffective.issues, null, 2));

  const lastDefinition = structuredClone(candidate);
  lastDefinition.records.find((record) => record.recordId === weapon.recordId && record.gameReleaseId === weapon.gameReleaseId)
    .payload.actionProfileResolution.actionGenerators[0].effectiveDefinitionIndex = 2;
  assert.equal(validate(lastDefinition).valid, true, JSON.stringify(validate(lastDefinition).issues, null, 2));

  const wrongOutputKind = structuredClone(lastDefinition);
  wrongOutputKind.records.find((record) => record.recordId === weapon.recordId && record.gameReleaseId === weapon.gameReleaseId)
    .payload.actionProfileResolution.actionGenerators[0].definitions[1].returnKind = 'continuation-list';
  assert.ok(issueCodes(wrongOutputKind).has('w07-generator-definition-identity'));
});

// Scenario: A generator callsite belongs to the action table row that encloses its source line.
// Purpose: Reject an ownerAction label or locator range that points to a different action row.
test('UnitT21_w07-generator-owner-must-match-containing-action-source-range', () => {
  const candidate = structuredClone(fixture);
  const weapon = candidate.records.find((record) => record.kind === 'weapon' && record.gameReleaseId === 'fixture-r2');
  const sourceLink = weapon.sourceRefs[0];
  const locator = (line, fieldPath) => ({ sourceRef: structuredClone(sourceLink), path: 'fixture.lua', line, fieldPath });
  const rangeLocator = (line, endLine, fieldPath) => ({ ...locator(line, fieldPath), endLine });
  const rangeEvidence = (line, fieldPath, rawValue) => ({
    rawValue,
    summary: 'Synthetic preview evidence used only to exercise the closed Source schema.',
    sourceLocator: rangeLocator(line, line, fieldPath)
  });
  const previewEvidence = [rangeEvidence(2, 'items.preview', 'return 0.8')];
  const previewRules = {
    schemaVersion: 'w07-panel-preview-rules/1.0.0', scope: 'client-preview-defaults-only',
    perStatIncrementCap: {
      decimal: '0.8', unit: 'ratio', sourceLocators: previewEvidence,
      override: { fieldPath: 'Items.preview_stats_change.max_stat_value', rawValue: 'max_stat_value or preview default',
        panelCaller: { sourceLocators: [rangeEvidence(3, 'ui.preview', 'return Items.preview_stats_change()')] } }
    },
    itemBudget: { decimal: '380', unit: 'item-stat-rating', sourceLocators: previewEvidence },
    expertiseBudget: {
      formula: 'expertise_increase / expertise_multiplier * 6',
      expertiseMultiplier: { decimal: '10', unit: 'expertise-level-per-rank', sourceLocators: previewEvidence },
      maxExpertise: { decimal: '500', unit: 'expertise-level', sourceLocators: previewEvidence },
      capByRemainingItemBudget: true, lowerBound: '0', sourceLocators: previewEvidence
    },
    displayCap: { decimal: '100', unit: 'percent', formula: 'min(value, 100)', sourceLocators: previewEvidence },
    rounding: { rawValue: 'floor(value + 0.5)', sourceLocators: previewEvidence },
    conditionalBranches: [
      { key: 'no-current-item-total', rawValue: 'if not item_current_level then', behavior: 'Clamp displayed value only.', sourceLocators: previewEvidence },
      { key: 'current-item-total-present', rawValue: 'if item_max_level then', behavior: 'Apply remaining item budget.', sourceLocators: previewEvidence }
    ],
    storedExpertiseOverride: { rawValue: 'item.overrides.expertise_stat_increases', behavior: 'Stored values affect allocation order.', sourceLocators: previewEvidence },
    obtainableRange: { status: 'unknown', reasonCode: 'NOT_EXPOSED_BY_SOURCE', sourceLocators: previewEvidence }
  };
  const rawSource = (line, fieldPath) => ({ rawValue: 'synthetic source row', sourceLocator: locator(line, fieldPath) });
  const ownerRange = rangeLocator(40, 60, 'actions.action_inspect');
  const otherRange = rangeLocator(70, 90, 'actions.action_unwield');
  const definition = {
    generatorKey: 'generate_inspect_action', definitionIndex: 1, endLine: 20,
    sourceLocator: locator(10, 'base_template_settings.generate_inspect_action'),
    rawValue: 'function generate_inspect_action() return { action_inspect = true } end',
    returnKind: 'action-settings', generatedActions: [{ actionKey: 'action_inspect', continuationEdges: [] }], generatedContinuations: []
  };
  weapon.payload.panelPreviewRules = previewRules;
  weapon.payload.actionProfileResolution = {
    inputSetup: {
      setupKey: 'fixture_weapon_setup', inheritedSetupKey: 'fixture_default_setup',
      inputEntries: [{ inputKey: 'inspect', origin: 'weapon-mid-setup', rawValue: 'inspect = "inspect"', sourceLocator: locator(4, 'weapon_template.action_inputs.inspect.buffer_time'),
        inheritedDefinition: { rawValue: 'inspect = "inherited"', sourceLocator: locator(3, 'fixture_default_setup.action_inputs.inspect') } }],
      hierarchyRaw: rawSource(5, 'action_input_hierarchy.inspect'), setupSources: [
        { rawValue: 'inspect = "inherited"', sourceLocator: locator(3, 'fixture_default_setup.action_inputs') },
        { rawValue: 'inspect = "inspect"', sourceLocator: locator(4, 'weapon_template.action_inputs.inspect.buffer_time') }
      ]
    },
    localActions: [{ action: 'action_inspect', startInput: null, rawSource: rawSource(40, 'actions.action_inspect'), sourceRange: ownerRange }],
    fallbackActions: [{ action: 'action_unwield', origin: 'base-template-settings', rawSource: rawSource(70, 'actions.action_unwield'), sourceRange: otherRange }],
    actionGenerators: [{ generatorKey: definition.generatorKey, definitions: [definition], effectiveDefinitionIndex: 1 }],
    generatorBindings: [{
      generatorKey: definition.generatorKey, ownerAction: 'action_inspect', ownerActionRange: structuredClone(ownerRange),
      assignedActionKey: 'action_inspect', returnKind: 'action-settings',
      callsite: { sourceLocator: locator(50, 'actions.action_inspect'), rawValue: 'generate_inspect_action()' }
    }],
    staticClosure: {
      localActionCount: 1, fallbackActionCount: 1, profileBindingCount: 0,
      literalContinuationEdgeCount: 0, generatedActionSettingsCount: 1,
      generatedContinuationEdgeCount: 0, inputEntryCount: 1
    },
    executionPolicy: 'static-only; functions not executed'
  };

  assert.equal(validate(candidate).valid, true, JSON.stringify(validate(candidate).issues, null, 2));

  const missingInheritedInputDefinition = structuredClone(candidate);
  delete missingInheritedInputDefinition.records.find((record) => record.kind === 'weapon' && record.gameReleaseId === 'fixture-r2')
    .payload.actionProfileResolution.inputSetup.inputEntries[0].inheritedDefinition;
  assert.ok(issueCodes(missingInheritedInputDefinition).has('schema-required'));

  const wrongInheritedInputKey = structuredClone(candidate);
  wrongInheritedInputKey.records.find((record) => record.kind === 'weapon' && record.gameReleaseId === 'fixture-r2')
    .payload.actionProfileResolution.inputSetup.inputEntries[0].inheritedDefinition.sourceLocator.fieldPath = 'fixture_default_setup.action_inputs.other';
  assert.ok(issueCodes(wrongInheritedInputKey).has('w07-action-input-override-provenance'));

  const wrongOverrideProperty = structuredClone(candidate);
  wrongOverrideProperty.records.find((record) => record.kind === 'weapon' && record.gameReleaseId === 'fixture-r2')
    .payload.actionProfileResolution.inputSetup.inputEntries[0].sourceLocator.fieldPath = 'weapon_template.action_inputs.inspect.required';
  assert.ok(issueCodes(wrongOverrideProperty).has('w07-action-input-override-provenance'));

  const entryBoundCandidate = structuredClone(candidate);
  const entryWeapon = entryBoundCandidate.records.find((record) => record.kind === 'weapon' && record.gameReleaseId === 'fixture-r2');
  const entryProfile = entryBoundCandidate.records.find((record) => record.kind === 'attack-profile' && record.gameReleaseId === 'fixture-r2');
  const entryDamageProfile = entryBoundCandidate.records.find((record) => record.kind === 'damage-profile' && record.gameReleaseId === 'fixture-r2');
  const entryArmor = entryBoundCandidate.records.find((record) => record.kind === 'armor-class' && record.gameReleaseId === 'fixture-r2');
  const entryTarget = entryBoundCandidate.records.find((record) => record.kind === 'target-profile' && record.gameReleaseId === 'fixture-r2');
  const entryArmorRef = { recordId: entryArmor.recordId, gameReleaseId: entryArmor.gameReleaseId };
  const entryEdge = {
    fromAction: 'action_unwield', inputKey: 'inspect.[]', toAction: 'action_inspect',
    sourceLocator: locator(55, 'actions.action_inspect.allowed_chain_actions.inspect.action_name'), conditions: []
  };
  entryArmor.payload = { sourceStatic: {
    schemaVersion: 'armor-class-static/1', classKey: 'fixture_light', enumRawValue: '"fixture_light"',
    sourceLocator: locator(11, 'armor_enum.fixture_light')
  } };
  entryTarget.payload = { sourceStatic: {
    schemaVersion: 'minion-hit-schema/1.0.0', breedKey: 'fixture_minion', breedType: 'minion',
    registryLocator: locator(12, 'BreedSettings.fixture_minion'), registryRawValue: 'fixture_minion = true',
    breedLocator: locator(13, 'BreedTemplates.fixture_minion'),
    baseArmorClassRef: entryArmorRef, baseArmorRawValue: 'armor_types.fixture_light',
    baseArmorLocator: locator(14, 'BreedTemplates.fixture_minion.base_armor_type'),
    rawHitZones: rawSource(15, 'BreedTemplates.fixture_minion.hit_zones'),
    hitZones: [{ zoneId: 'body', rawSource: rawSource(16, 'BreedTemplates.fixture_minion.hit_zones.body'),
      actors: [], actorsRawValue: '{}', actorsLocator: locator(17, 'BreedTemplates.fixture_minion.hit_zones.body.actors'), otherRawFields: [] }],
    weakspotTypes: [], armorOverrides: [], damageMultipliers: [], unresolvedZoneReferences: []
  } };
  entryWeapon.payload.actionContinuations = [structuredClone(entryEdge)];
  entryWeapon.payload.actionProfileResolution.staticClosure.profileBindingCount = 1;
  entryWeapon.payload.actionProfileResolution.staticClosure.literalContinuationEdgeCount = 1;
  entryProfile.payload.action = 'action_inspect';
  entryProfile.payload.weaponRef = { recordId: entryWeapon.recordId, gameReleaseId: entryWeapon.gameReleaseId };
  entryProfile.payload.continuations = [];
  entryProfile.payload.armorClassRefs = [entryArmorRef];
  entryDamageProfile.payload.profileKey = 'fixture_profile';
  entryProfile.payload.sourceBindings = [{
    branch: 'normal', profileRef: structuredClone(entryProfile.payload.damageProfileRefs[0]),
    rawValue: `DamageProfileTemplates.${entryDamageProfile.payload.profileKey}`,
    sourceLocator: locator(54, 'actions.action_inspect.damage_profile')
  }];
  entryProfile.payload.actionResolution = {
    origin: 'weapon-template', startInput: null, inputBindings: [],
    entryBindings: [structuredClone(entryEdge)], branchBindings: structuredClone(entryProfile.payload.sourceBindings),
    runtimeConditions: [], targetApplicability: 'all-static-registry-minion-hit-schemas'
  };
  assert.equal(validate(entryBoundCandidate).valid, true, JSON.stringify(validate(entryBoundCandidate).issues, null, 2));

  const unknownGeneratorInput = structuredClone(entryBoundCandidate);
  const unknownInputWeapon = unknownGeneratorInput.records.find((record) => record.kind === 'weapon' && record.gameReleaseId === 'fixture-r2');
  unknownInputWeapon.payload.actionProfileResolution.actionGenerators[0].definitions[0].generatedActions[0].startInput = 'undeclared_start';
  assert.ok(issueCodes(unknownGeneratorInput).has('w07-action-input-unknown'));

  const unknownEntryInput = structuredClone(entryBoundCandidate);
  const unknownEntryProfile = unknownEntryInput.records.find((record) => record.kind === 'attack-profile' && record.gameReleaseId === 'fixture-r2');
  unknownEntryProfile.payload.actionResolution.entryBindings[0].inputKey = 'undeclared.[]';
  assert.ok(issueCodes(unknownEntryInput).has('w07-action-input-unknown'));

  const missingEntryRow = structuredClone(entryBoundCandidate);
  const missingEntryProfile = missingEntryRow.records.find((record) => record.kind === 'attack-profile' && record.gameReleaseId === 'fixture-r2');
  missingEntryProfile.payload.actionResolution.entryBindings = [];
  assert.ok(issueCodes(missingEntryRow).has('w07-action-entry-binding'));

  const unknownDirectInput = structuredClone(entryBoundCandidate);
  const directWeapon = unknownDirectInput.records.find((record) => record.kind === 'weapon' && record.gameReleaseId === 'fixture-r2');
  const directProfile = unknownDirectInput.records.find((record) => record.kind === 'attack-profile' && record.gameReleaseId === 'fixture-r2');
  const undeclaredStart = { inputKey: 'undeclared_start', sourceLocator: locator(41, 'actions.action_inspect.start_input') };
  directWeapon.payload.actionProfileResolution.localActions[0].startInput = structuredClone(undeclaredStart);
  directProfile.payload.actionResolution.startInput = structuredClone(undeclaredStart);
  directProfile.payload.actionResolution.inputBindings = [{ inputKey: undeclaredStart.inputKey, role: 'start-input', sourceLocator: structuredClone(undeclaredStart.sourceLocator) }];
  assert.ok(issueCodes(unknownDirectInput).has('w07-action-input-unknown'));

  const unknownGeneratorStopInput = structuredClone(entryBoundCandidate);
  const stopWeapon = unknownGeneratorStopInput.records.find((record) => record.kind === 'weapon' && record.gameReleaseId === 'fixture-r2');
  stopWeapon.payload.actionProfileResolution.actionGenerators[0].definitions[0].generatedActions[0].stopInput = 'undeclared_stop';
  assert.ok(issueCodes(unknownGeneratorStopInput).has('w07-action-input-unknown'));

  const wrongOwner = structuredClone(candidate);
  const wrongBinding = wrongOwner.records.find((record) => record.kind === 'weapon' && record.gameReleaseId === weapon.gameReleaseId)
    .payload.actionProfileResolution.generatorBindings[0];
  wrongBinding.ownerAction = 'action_unwield';
  wrongBinding.ownerActionRange = structuredClone(otherRange);
  const wrongOwnerResult = validate(wrongOwner);
  assert.ok(wrongOwnerResult.issues.some((issue) => issue.code === 'w07-generator-owner-range'), JSON.stringify(wrongOwnerResult.issues, null, 2));

  const duplicateAttackProfile = structuredClone(candidate);
  const duplicateWeapon = duplicateAttackProfile.records.find((record) => record.kind === 'weapon' && record.gameReleaseId === weapon.gameReleaseId);
  duplicateWeapon.payload.attackProfileRefs.push(structuredClone(duplicateWeapon.payload.attackProfileRefs[0]));
  assert.ok(issueCodes(duplicateAttackProfile).has('w07-action-profile-ref-duplicate'));

  const foreignAttackProfile = structuredClone(candidate);
  const foreignWeapon = foreignAttackProfile.records.find((record) => record.kind === 'weapon' && record.gameReleaseId === weapon.gameReleaseId);
  foreignWeapon.payload.attackProfileRefs[0].gameReleaseId = 'fixture-r1';
  assert.ok(issueCodes(foreignAttackProfile).has('w07-action-profile-ref-release'));

  const outsideSpan = structuredClone(candidate);
  outsideSpan.records.find((record) => record.kind === 'weapon' && record.gameReleaseId === weapon.gameReleaseId)
    .payload.actionProfileResolution.generatorBindings[0].callsite.sourceLocator.line = 65;
  const outsideResult = validate(outsideSpan);
  assert.ok(outsideResult.issues.some((issue) => issue.code === 'w07-generator-owner-range'), JSON.stringify(outsideResult.issues, null, 2));

  const unknownLiteralTarget = structuredClone(candidate);
  const literalWeapon = unknownLiteralTarget.records.find((record) => record.kind === 'weapon' && record.gameReleaseId === weapon.gameReleaseId);
  literalWeapon.payload.actionContinuations = [{
    fromAction: 'action_inspect', inputKey: 'inspect', toAction: 'action_missing',
    sourceLocator: locator(51, 'actions.action_inspect.allowed_chain_actions.inspect.action_name'), conditions: []
  }];
  literalWeapon.payload.actionProfileResolution.staticClosure.literalContinuationEdgeCount = 1;
  assert.ok(issueCodes(unknownLiteralTarget).has('w07-action-target-resolution'));

  const unknownGeneratedEdgeTarget = structuredClone(candidate);
  const generatedWeapon = unknownGeneratedEdgeTarget.records.find((record) => record.kind === 'weapon' && record.gameReleaseId === weapon.gameReleaseId);
  const generatedDefinition = generatedWeapon.payload.actionProfileResolution.actionGenerators[0].definitions[0];
  generatedDefinition.generatedActions[0].continuationEdges = [{
    inputKey: 'inspect_3p_start', actionKey: 'action_missing', sourceLocator: locator(15, 'generate_inspect_action.action_inspect_3p')
  }];
  generatedWeapon.payload.actionProfileResolution.staticClosure.generatedContinuationEdgeCount = 1;
  assert.ok(issueCodes(unknownGeneratedEdgeTarget).has('w07-action-target-resolution'));

  const unknownGeneratedContinuationTarget = structuredClone(candidate);
  const generatedContinuationWeapon = unknownGeneratedContinuationTarget.records.find((record) => record.kind === 'weapon' && record.gameReleaseId === weapon.gameReleaseId);
  const resolution = generatedContinuationWeapon.payload.actionProfileResolution;
  resolution.actionGenerators[0] = {
    generatorKey: 'generate_wield_chain_actions', effectiveDefinitionIndex: 1,
    definitions: [{
      generatorKey: 'generate_wield_chain_actions', definitionIndex: 1, endLine: 20,
      sourceLocator: locator(10, 'base_template_settings.generate_wield_chain_actions'),
      rawValue: 'function generate_wield_chain_actions() return {} end', returnKind: 'continuation-list',
      generatedActions: [], generatedContinuations: [{
        actionKey: 'action_missing', chainTimeRawValue: '0.35', sourceLocator: locator(15, 'generate_wield_chain_actions.action_name')
      }]
    }]
  };
  resolution.generatorBindings[0] = {
    generatorKey: 'generate_wield_chain_actions', ownerAction: 'action_inspect', ownerActionRange: structuredClone(ownerRange),
    assignedActionKey: 'wield', returnKind: 'continuation-list',
    callsite: { sourceLocator: locator(50, 'actions.action_inspect.generate_wield_chain_actions'), rawValue: 'generate_wield_chain_actions()' }
  };
  resolution.staticClosure.generatedActionSettingsCount = 0;
  resolution.staticClosure.generatedContinuationEdgeCount = 1;
  assert.ok(issueCodes(unknownGeneratedContinuationTarget).has('w07-action-target-resolution'));

  const unknownActionSettingSlot = structuredClone(candidate);
  const settingWeapon = unknownActionSettingSlot.records.find((record) => record.kind === 'weapon' && record.gameReleaseId === weapon.gameReleaseId);
  settingWeapon.payload.actionProfileResolution.actionGenerators[0].definitions[0].generatedActions[0].actionKey = 'action_missing';
  assert.ok(issueCodes(unknownActionSettingSlot).has('w07-generator-assigned-action'));
});

// Scenario: The W07 finesse relation depends on several distinct complete source ranges.
// Purpose: Reject a first-line overlap or missing middle block when a dependency range is truncated.
test('UnitT20_w07-finesse-relation-requires-complete-distinct-source-spans', () => {
  const buildFinesseCandidate = () => {
    const candidate = structuredClone(fixture);
    const modifier = candidate.records.find((record) => record.kind === 'modifier-rule');
    const release = candidate.gameReleases.find((item) => item.gameReleaseId === modifier.gameReleaseId);
    const ownSource = candidate.sourceRefs.find((item) => item.gameReleaseId === modifier.gameReleaseId
      && item.sourceKind === 'public-code');
    const sourceTemplate = ownSource ?? candidate.sourceRefs.find((item) => item.sourceKind === 'public-code');
    assert.ok(sourceTemplate, 'Synthetic validator test needs a public-code source template');
    const dependencies = [
      ['scripts/utilities/attack/damage_calculation.lua', 672, 785, 'DamageCalculation.finesse_boost_damage'],
      ['scripts/settings/damage/weakspot_settings.lua', 4, 27, 'weakspot_settings'],
      ['scripts/settings/damage/power_level_settings.lua', 142, 151, 'PowerLevelSettings.power_level_settings'],
      ['scripts/settings/damage/power_level_settings.lua', 172, 194, 'PowerLevelSettings.boost_settings'],
      ['scripts/settings/damage/power_level_settings.lua', 123, 137, 'PowerLevelSettings.boost_curves.default'],
      ['scripts/utilities/attack/damage_calculation.lua', 208, 217, 'DamageCalculation.finesse_curve_lookup'],
      ['scripts/utilities/attack/damage_calculation.lua', 700, 704, 'DamageCalculation.finesse_crit_gate'],
      ['scripts/utilities/attack/damage_calculation.lua', 795, 834, 'DamageCalculation.hit_zone_damage_relation']
    ];
    const sourceRefs = dependencies.map(([sourcePath], index) => {
      const source = structuredClone(sourceTemplate);
      source.sourceId = 'fixture-public-code-w07-finesse-' + index;
      source.gameReleaseId = modifier.gameReleaseId;
      source.gameBuild = release.gameBuild;
      source.snapshot = structuredClone(release.snapshot);
      source.commit = release.snapshot.commit;
      source.path = sourcePath;
      source.artifactSha256 = String(index + 1).repeat(64);
      source.safeSummary = 'Synthetic raw dependency source for W07 validator tests only.';
      return source;
    });
    candidate.sourceRefs.push(...sourceRefs);
    modifier.sourceRefs = [...modifier.sourceRefs, ...sourceRefs.map(({ sourceId, gameReleaseId }) => ({ sourceId, gameReleaseId }))];
    const pointLocator = (source, line, fieldPath) => ({
      sourceRef: { sourceId: source.sourceId, gameReleaseId: source.gameReleaseId },
      path: source.path, line, fieldPath
    });
    const rangeLocator = (source, line, endLine, fieldPath) => ({
      sourceRef: { sourceId: source.sourceId, gameReleaseId: source.gameReleaseId },
      path: source.path, line, endLine, fieldPath
    });
    modifier.payload = {
      sourceBranchModel: {
        schemaVersion: 'static-combat-relations/1',
        relationKey: 'finesse-crit-boost',
        sourceFunction: {
          rawValue: 'function DamageCalculation.finesse_boost_damage(...) end',
          sourceLocator: pointLocator(sourceRefs[0], 672, 'DamageCalculation.finesse_boost_damage')
        },
        conditionRows: [{ rawValue: 'if target_is_weakspot then', sourceLocator: pointLocator(sourceRefs[0], 700, 'DamageCalculation.finesse_crit_gate') }],
        rawDependencies: dependencies.map(([sourcePath, line, endLine, fieldPath], index) => ({
          rawValue: 'Synthetic complete raw range for ' + sourcePath + ':' + line + '-' + endLine,
          sourceLocator: rangeLocator(sourceRefs[index], line, endLine, fieldPath)
        })),
        havocOverrides: [],
        executionPolicy: 'static-only'
      }
    };
    return { candidate, modifierId: modifier.recordId, releaseId: modifier.gameReleaseId };
  };

  const { candidate, modifierId, releaseId } = buildFinesseCandidate();
  assert.equal(validate(candidate).valid, true, JSON.stringify(validate(candidate).issues, null, 2));

  const truncatedFunction = structuredClone(candidate);
  const modifier = truncatedFunction.records.find((record) => record.recordId === modifierId && record.gameReleaseId === releaseId);
  modifier.payload.sourceBranchModel.rawDependencies[0].sourceLocator.endLine = 713;
  assert.ok(issueCodes(truncatedFunction).has('w07-modifier-dependency-coverage'));

  const missingPowerMiddle = structuredClone(candidate);
  const relation = missingPowerMiddle.records.find((record) => record.recordId === modifierId && record.gameReleaseId === releaseId);
  relation.payload.sourceBranchModel.rawDependencies.splice(3, 1);
  assert.ok(issueCodes(missingPowerMiddle).has('w07-modifier-dependency-coverage'));
});

// Scenario: One record has several independently reviewed fields that share the same dependency closure.
// Purpose: Reuse digest work only during one validation call, without weakening the receipt or stale-state checks.
test('UnitT26_validation-reuses-review-digest-work-within-one-call-only', () => {
  const countRootPayloadEnumerations = (targetCount) => {
    const candidate = structuredClone(fixture);
    const record = candidate.records.find((item) => item.recordId === 'fixture:claim:damage' && item.gameReleaseId === 'fixture-r1');
    const targets = record.reviewTargets.slice(0, targetCount);
    record.reviewTargets = targets;
    record.reviewState = 'approved';
    candidate.reviewReceipts.push(...targets.map((target) => createReviewReceipt(candidate, {
      recordId: record.recordId,
      gameReleaseId: record.gameReleaseId,
      ...target
    }, { reviewer: { kind: 'human', id: 'fixture-human-reviewer' }, reviewedAt: '2026-10-18T00:00:00Z' })));

    let ownKeysCount = 0;
    record.payload = new Proxy(record.payload, {
      ownKeys(target) {
        ownKeysCount += 1;
        return Reflect.ownKeys(target);
      }
    });
    const result = validate(candidate);
    assert.equal(result.valid, true, JSON.stringify(result.issues, null, 2));
    return ownKeysCount;
  };

  const oneTargetCount = countRootPayloadEnumerations(1);
  const threeTargetCount = countRootPayloadEnumerations(3);
  assert.equal(threeTargetCount, oneTargetCount,
    'Additional reviewed fields on the same record must reuse that record dependency digest within validation');

  const target = { recordId: 'fixture:claim:damage', gameReleaseId: 'fixture-r1', fieldPath: '/payload/context', dimension: 'context' };
  const candidate = structuredClone(fixture);
  const record = candidate.records.find((item) => item.recordId === target.recordId && item.gameReleaseId === target.gameReleaseId);
  const oldReceipt = createReviewReceipt(candidate, target, {
    reviewer: { kind: 'human', id: 'fixture-human-reviewer' }, reviewedAt: '2026-10-18T00:00:00Z'
  });
  const before = computeReviewDigests(candidate, target);
  candidate.reviewReceipts.push(oldReceipt);
  const dependency = candidate.records.find((item) => item.recordId === 'fixture:stat:damage' && item.gameReleaseId === 'fixture-r1');
  dependency.payload.panelInputRange.max = '99';
  const after = computeReviewDigests(candidate, target);
  assert.notEqual(after.dependenciesDigest, before.dependenciesDigest,
    'A later public digest call must recompute after dependency mutation');
  record.reviewState = 'stale';
  const staleResult = validate(candidate);
  assert.equal(staleResult.valid, true, JSON.stringify(staleResult.issues, null, 2));
  assert.equal(record.reviewState, 'stale', 'The old receipt must remain stale after dependency mutation');
});
