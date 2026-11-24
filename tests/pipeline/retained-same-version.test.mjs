import { test } from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import { checkDataFile } from '../../pipeline/lib/data-files.mjs';
import { stringifyCanonical } from '../../pipeline/lib/canonical-json.mjs';

const example = JSON.parse(readFileSync('pipeline/schema/examples/0.0.0-example/skills.json', 'utf8'));
const validateRetainedVersion = (version) => {
  const data = structuredClone(example);
  data.gameVersion = '1.13.4';
  data.sourceCommit = '1'.repeat(40);
  data.textBatch = 'new-batch';
  const item = data.items[0];
  item.retainedFrom = {
    gameVersion: version,
    sourceCommit: item.source.commit,
    textBatch: item.source.text.batch,
  };
  return checkDataFile('skills', stringifyCanonical(data)).errors;
};

// Scenario: retained provenance names the current file version.
// Purpose: reject retained provenance from the release being regenerated.
test('UnitT95_same-version retainedFrom is rejected', () => {
  assert.ok(validateRetainedVersion('1.13.4').some((error) => error.path === '/items/0/retainedFrom/gameVersion' && error.message === 'Retained version must be older'));
});

// Scenario: retained provenance names a version newer than the file version.
// Purpose: reject future retained versions with a specific diagnostic.
test('UnitT96_future retainedFrom version is rejected', () => {
  assert.ok(validateRetainedVersion('2.0.0').some((error) => error.path === '/items/0/retainedFrom/gameVersion' && error.message === 'Retained version must be older'));
});

// Scenario: retained provenance names an older version.
// Purpose: preserve validation of legitimately retained older content.
test('UnitT97_older retainedFrom version is accepted', () => {
  assert.deepEqual(validateRetainedVersion('1.13.3'), []);
});
