import assert from 'node:assert/strict';
import test from 'node:test';
import { createCompositionRequest, SOURCE_REPOSITORY } from '../scripts/content/request.mjs';

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