import assert from 'node:assert/strict';
import test from 'node:test';
import { readFile } from 'node:fs/promises';
import { compileSource, canonicalJsonBytes, sha256 } from '../scripts/content/compile.mjs';
import {
  assertPreviewRequestReceipt,
  createCompositionRequest,
  generateCompositionRequest,
  parseCompositionRequestOptions,
  SOURCE_REPOSITORY
} from '../scripts/content/request.mjs';

// Scenario: the Source compiler publishes a minimal request for a fixed generated revision.
// Purpose: the request contains only the public repo, commit, source revision, and manifest digest.
test('UnitT10_composition-request-contains-only-public-source-pin-fields', () => {
  const request = createCompositionRequest({
    repository: SOURCE_REPOSITORY,
    commit: '2c1e26ecde70773fc2588a8a70baba9a28770586',
    sourceRevision: 'a'.repeat(64),
    manifestSha256: 'b'.repeat(64)
  });
  assert.deepEqual(Object.keys(request), ['repository', 'commit', 'sourceRevision', 'manifestSha256']);
  assert.equal(request.repository, SOURCE_REPOSITORY);
});

// Scenario: an unpinned repository, abbreviated commit, or private/extra payload field is supplied.
// Purpose: requests remain public, deterministic pins and cannot carry proof or arbitrary metadata.
test('UnitT20_composition-request-rejects-extra-or-unpinned-fields', () => {
  const base = {
    repository: SOURCE_REPOSITORY,
    commit: '2c1e26ecde70773fc2588a8a70baba9a28770586',
    sourceRevision: 'a'.repeat(64),
    manifestSha256: 'b'.repeat(64)
  };
  assert.throws(() => createCompositionRequest({ ...base, privateProof: 'must-not-appear' }), /only repository/);
  assert.throws(() => createCompositionRequest({ ...base, repository: 'https://example.invalid/repo' }), /public Source repository/);
  assert.throws(() => createCompositionRequest({ ...base, commit: 'abc123' }), /full Git SHA/);
});

// Scenario: A composition request selects one checked-in Source authoring input.
// Purpose: Reuse the build allowlist and reject unsafe, duplicate, formal, or unknown options.
test('UnitT30_composition-request-options-share-safe-input-selection', () => {
  assert.deepEqual(parseCompositionRequestOptions([]), { input: 'w01-preview.json' });
  assert.deepEqual(parseCompositionRequestOptions(['--input', 'w01-real-representative-candidate.json']), {
    input: 'w01-real-representative-candidate.json'
  });
  assert.deepEqual(parseCompositionRequestOptions(['--mode', 'preview']), { input: 'w01-preview.json' });
  assert.throws(() => parseCompositionRequestOptions(['--input', '../private.json']), /exactly/);
  assert.throws(() => parseCompositionRequestOptions(['--input', 'w01-preview.json', '--input', 'w01-preview.json']), /usage:/);
  assert.throws(() => parseCompositionRequestOptions(['--mode', 'formal']), /preview-only/);
  assert.throws(() => parseCompositionRequestOptions(['--unknown', 'value']), /usage:/);
});

// Scenario: The compiler marks a test-only, receipt-bound non-fixture preview eligible.
// Purpose: Keep the request gate compatible with later human-reviewed previews without accepting formal output.
test('UnitT40_composition-request-accepts-compiler-derived-eligible-preview-only', () => {
  const authoring = approvedTestAuthoring();
  const compiled = compileSource(authoring);
  assert.equal(compiled.fixtureOnly, false);
  assert.equal(compiled.publicationEligible, true);

  const accepted = assertPreviewRequestReceipt({
    ...compiled,
    mode: 'preview',
    previewOnly: true
  });
  assert.equal(accepted.publicationEligible, true);
  assert.throws(() => assertPreviewRequestReceipt({ ...accepted, mode: 'formal' }), /preview/);
  assert.throws(() => assertPreviewRequestReceipt({ ...accepted, previewOnly: false }), /preview/);
  assert.throws(() => assertPreviewRequestReceipt({ ...accepted, fixtureOnly: undefined }), /booleans/);
  assert.throws(() => assertPreviewRequestReceipt({ ...accepted, publicationEligible: 'yes' }), /booleans/);
});

// Scenario: Default and explicitly selected fixture requests run through the real Source build.
// Purpose: Preserve default request bytes and verify the representative candidate's exact public pin.
test('UnitT50_composition-request-generates-default-and-representative-preview-pins', async () => {
  const implicitDefault = await generateCompositionRequest();
  const explicitDefault = await generateCompositionRequest({ input: 'w01-preview.json' });
  const defaultBytes = await readFile(implicitDefault.requestPath);
  assert.deepEqual(await readFile(explicitDefault.requestPath), defaultBytes);
  assert.deepEqual(defaultBytes, canonicalJsonBytes(implicitDefault.request));
  assert.equal(implicitDefault.request.sourceRevision, '94d2e7767bf60d56793a6b9a910376c975fef3439afe5931fbb03d763913ef4b');
  assert.equal(implicitDefault.request.manifestSha256, '27a06a383ab06ab0d15720bd2b0a3e0e8e905755679665a32988ca704c80acb6');
  assert.deepEqual(Object.keys(implicitDefault.request), ['repository', 'commit', 'sourceRevision', 'manifestSha256']);

  const representative = await generateCompositionRequest({ input: 'w01-real-representative-candidate.json' });
  assert.equal(representative.request.sourceRevision, '5e74a3edd31866a90f2f1dd30b6b6dbf623b968577516b238342a1620b32a880');
  assert.equal(representative.request.manifestSha256, '3814b573bd510b43c05ad86e4dcf569101f1c9648088d262d8329006175cdc99');
  assert.deepEqual(Object.keys(representative.request), ['repository', 'commit', 'sourceRevision', 'manifestSha256']);
});

function approvedTestAuthoring() {
  const source = {
    sourceId: 'fixture:snapshot:request-test',
    fixtureOnly: false,
    safeSummary: 'Test-only pinned source snapshot.',
    snapshot: { build: 'test-build', commit: 'test-commit' }
  };
  const record = {
    recordId: 'fixture:term:request-test',
    owner: 'source',
    kind: 'term',
    gameReleaseId: 'fixture-game-1',
    payload: {
      termKey: 'test-term',
      contextKey: 'test-context',
      technicalDefinitionEn: 'A test-only term.',
      claimRefs: []
    },
    sourceRefs: [source.sourceId],
    reviewState: 'approved'
  };
  const reviewable = {
    recordId: record.recordId,
    kind: record.kind,
    gameReleaseId: record.gameReleaseId,
    payload: record.payload,
    sourceRefs: record.sourceRefs
  };
  const canonicalDigest = value => sha256(canonicalJsonBytes(value));
  return {
    fixtureOnly: false,
    schemaVersion: '2.0.0',
    gameReleaseId: 'fixture-game-1',
    gameVersion: 'fixture-preview',
    sourceRefs: [source],
    records: [record],
    gameChanges: [],
    reviewReceipts: [{
      targetId: record.recordId,
      targetDigest: canonicalDigest({ targetId: record.recordId, reviewable }),
      dependenciesDigest: canonicalDigest({
        gameRelease: { gameReleaseId: 'fixture-game-1', gameVersion: 'fixture-preview' },
        dependencies: [{ type: 'source', id: source.sourceId, content: source }]
      }),
      reviewer: 'test-only-reviewer',
      reviewedAt: '2026-10-13T00:00:00.000Z',
      dimensions: ['test-only-contract']
    }]
  };
}
