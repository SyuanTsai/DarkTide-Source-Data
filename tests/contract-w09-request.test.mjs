import test from 'node:test';
import assert from 'node:assert/strict';
import { createHash } from 'node:crypto';
import { readFileSync } from 'node:fs';
import { mkdtemp, readFile, rm, writeFile } from 'node:fs/promises';
import { spawnSync } from 'node:child_process';
import { fileURLToPath } from 'node:url';
import os from 'node:os';
import path from 'node:path';
import { buildContractCandidate } from '../scripts/content/contract-w05-build.mjs';
import { createReviewReceipt, loadRepresentativeFixture } from '../scripts/content/contract-validator.mjs';

const sourceRoot = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const implementationUrl = new URL('../scripts/content/contract-w09-request.mjs', import.meta.url);
const api = await import(implementationUrl.href).catch(() => ({}));
const canonical = (value) => Array.isArray(value)
  ? `[${value.map(canonical).join(',')}]`
  : value && typeof value === 'object'
    ? `{${Object.keys(value).sort().map((key) => `${JSON.stringify(key)}:${canonical(value[key])}`).join(',')}}`
    : JSON.stringify(value);
const sha256 = (value) => createHash('sha256').update(value).digest('hex');
const canonicalSha256 = (value) => sha256(canonical(value));

function makeRequest(overrides = {}) {
  const schema = 'w09-source-request/1';
  const repository = 'SyuanTsai/DarkTide-Source-Data';
  const sourceRevision = 'b'.repeat(64);
  const manifestSha256 = 'c'.repeat(64);
  const gameReleaseId = 'darktide:1.13.1';
  const sourceCommit = 'a'.repeat(40);
  const requestId = canonicalSha256({ schema, repository, sourceRevision, manifestSha256, gameReleaseId });
  const releaseId = 'w09-' + canonicalSha256({ sourceRevision, gameReleaseId }).slice(0, 32);
  const changedRecords = [
    { registry: 'records', gameReleaseId, recordId: 'darktide:claim:added', kind: 'claim', change: 'added' },
    { registry: 'records', gameReleaseId, recordId: 'darktide:claim:updated', kind: 'claim', change: 'updated', fields: ['/payload/value'] },
    { registry: 'records', gameReleaseId, recordId: 'former-record-id', kind: null, change: 'removed' }
  ];
  const request = {
    schema,
    repository,
    sourceCommit,
    sourceRevision,
    manifestSha256,
    gameReleaseId,
    releaseId,
    requestId,
    sourceInputs: [
      { role: 'baseline', commit: sourceCommit, path: 'content/authoring/v2/w05-psyker.json', sha256: '1'.repeat(64) },
      { role: 'authoring', commit: sourceCommit, path: 'content/authoring/v2/w06-skills-blessings.json', sha256: '2'.repeat(64) },
      { role: 'candidate', commit: sourceCommit, path: 'content/authoring/v2/w07-weapons.json', sha256: '3'.repeat(64) }
    ],
    packetFiles: [
      'analysis.md', 'source-revision.json', 'source-revision.md', 'source-manifest.json', 'source-receipt.json', 'technical.json'
    ].map((file, index) => ({ path: file, sha256: String(index + 4).repeat(64), sizeBytes: index + 10 })),
    changedRecords,
    changedClaims: changedRecords.filter((item) => item.kind === 'claim'),
    eligibility: {
      mode: 'candidate',
      status: 'pending',
      publicationEligible: false,
      buildIdentityVerified: false,
      fixtureOnly: false,
      reasons: ['candidate mode is preview-only']
    }
  };
  return { ...request, ...overrides };
}

function requireExport(name) {
  assert.equal(typeof api[name], 'function', `contract-w09-request.mjs must export ${name}`);
  return api[name];
}

// Scenario: The W09 request contract is consumed by a separate Web repository without importing Source files.
// Purpose: Keep its validator and packet verifier available from the one-file cache interface.
test('UnitT01_request_module_exports_standalone_receiver_contract', () => {
  assert.equal(typeof api.validateW09SourceRequest, 'function');
  assert.equal(typeof api.verifyW09SourcePacket, 'function');
  assert.equal(typeof api.resolvePublishedW09SourceArchive, 'function');
  assert.equal(typeof api.handoffW09SourceRequest, 'function');
  assert.deepEqual(api.W09_SOURCE_PACKET_FILES, [
    'analysis.md', 'source-revision.json', 'source-revision.md', 'source-manifest.json', 'source-receipt.json', 'technical.json'
  ]);
  const source = readFileSync(fileURLToPath(implementationUrl), 'utf8');
  assert.doesNotMatch(source, /from\s+['"]\.\.?\//u, 'the receiver cache module must not statically import Source-relative code');
});

// Scenario: A retry observes the same verified Source revision and packet after a metadata-only commit.
// Purpose: Reuse stable request/release identity while retaining the full commit as provenance.
test('UnitT02_same_revision_and_manifest_reuse_identity_across_commits', () => {
  const validate = requireExport('validateW09SourceRequest');
  const first = makeRequest();
  const retry = {
    ...first,
    sourceCommit: 'd'.repeat(40),
    sourceInputs: first.sourceInputs.map((item, index) => index === 0
      ? { ...item, commit: api.W09_ACCEPTED_W07_BASELINE_COMMIT, path: 'content/authoring/v2/w07-weapons.json', sha256: api.W09_ACCEPTED_W07_BASELINE_SHA256 }
      : { ...item, commit: 'd'.repeat(40) })
  };
  assert.doesNotThrow(() => validate(first));
  assert.doesNotThrow(() => validate(retry));
  assert.equal(retry.requestId, first.requestId);
  assert.equal(retry.releaseId, first.releaseId);
});

// Scenario: A caller changes a manifest pin while reusing an existing request ID or invents a release ID.
// Purpose: Reject conflicting packet identity and arbitrary trigger identifiers before any handoff.
test('UnitT03_conflicting_manifest_and_forged_release_identity_are_rejected', () => {
  const validate = requireExport('validateW09SourceRequest');
  const conflict = makeRequest({ manifestSha256: 'e'.repeat(64) });
  assert.throws(() => validate(conflict), /requestId|manifest|identity/iu);
  const forged = makeRequest({ releaseId: 'release-from-caller' });
  assert.throws(() => validate(forged), /releaseId|identity/iu);
});

// Scenario: A request contains a full SHA-1 or SHA-256 commit, or a truncated value between those lengths.
// Purpose: Accept only full Git object IDs and reject malformed 41-to-63-character values.
test('UnitT04_commit_ids_must_be_full_40_or_64_character_hashes', () => {
  const validate = requireExport('validateW09SourceRequest');
  const valid64 = makeRequest();
  valid64.sourceCommit = 'f'.repeat(64);
  valid64.sourceInputs = valid64.sourceInputs.map((item) => ({ ...item, commit: valid64.sourceCommit }));
  assert.doesNotThrow(() => validate(valid64));
  for (const length of [41, 63]) {
    const invalid = makeRequest();
    invalid.sourceCommit = 'a'.repeat(length);
    invalid.sourceInputs = invalid.sourceInputs.map((item) => ({ ...item, commit: invalid.sourceCommit }));
    assert.throws(() => validate(invalid), /full Git commit SHA/iu);
  }
});

// Scenario: A revision removes a known claim and an unrelated record whose prior kind cannot be proven.
// Purpose: Preserve all removals for invalidation, include only proven removed claims, and never infer kind from ID text.
test('UnitT05_removals_are_explicit_and_unknown_kind_is_not_guessed', () => {
  const validate = requireExport('validateW09SourceRequest');
  const request = makeRequest();
  assert.doesNotThrow(() => validate(request));
  assert.ok(request.changedRecords.some((item) => item.recordId === 'former-record-id' && item.change === 'removed' && item.kind === null));
  assert.ok(request.changedClaims.every((item) => item.kind === 'claim'));
  assert.ok(!request.changedClaims.some((item) => item.recordId === 'former-record-id'));
});

// Scenario: A packet has a missing file, unlisted extra file, or bytes that disagree with its request pins.
// Purpose: Verify exact six-file packet identity before trusting any request metadata.
test('UnitT06_packet_verifier_requires_exact_files_and_raw_bytes', async () => {
  const verify = requireExport('verifyW09SourcePacket');
  const root = await mkdtemp(path.join(os.tmpdir(), 'w09-packet-test-'));
  try {
    const request = makeRequest();
    for (const file of request.packetFiles) {
      await writeFile(path.join(root, file.path), Buffer.alloc(file.sizeBytes, 1));
    }
    await assert.rejects(verify({ request, packetDir: root }), /hash|bytes|manifest|packet/iu);
    await assert.rejects(verify({ request: { ...request, packetFiles: request.packetFiles.slice(1) }, packetDir: root }), /file|exact|packet/iu);
  } finally {
    await rm(root, { recursive: true, force: true });
  }
});

// Scenario: A handoff replays the accepted, unapproved W07 baseline even after current authoring receives human approval.
// Purpose: Keep the historical candidate hashes and pending gate fixed without coupling this regression to mutable main data.
test('InterT01_prepare_binds_fixed_git_inputs_and_replays_w05_candidate', async () => {
  requireExport('prepareW09SourceHandoff');
  const verifyRevision = requireExport('verifyW09SourceRevision');
  const verifyPacket = requireExport('verifyW09SourcePacket');
  const createArchive = requireExport('createW09SourceArchive');
  const verifyArchive = requireExport('verifyW09SourceArchive');
  const publishArchive = requireExport('publishW09SourceArchive');
  const fixtureRoot = await mkdtemp(path.join(os.tmpdir(), 'w09-source-fixture-'));
  const fixtureSourceRoot = path.join(fixtureRoot, 'source');
  const outputRoot = path.join(fixtureRoot, 'handoff');
  const clone = spawnSync('git', ['clone', '--no-hardlinks', sourceRoot, fixtureSourceRoot], { encoding: 'utf8', maxBuffer: 1024 * 1024 });
  assert.equal(clone.status, 0, clone.stderr);
  const pinBaseline = spawnSync('git', ['-C', fixtureSourceRoot, 'checkout', '--detach', api.W09_ACCEPTED_W07_BASELINE_COMMIT], { encoding: 'utf8' });
  assert.equal(pinBaseline.status, 0, pinBaseline.stderr);
  const setOrigin = spawnSync('git', ['-C', fixtureSourceRoot, 'remote', 'set-url', 'origin', 'https://github.com/SyuanTsai/DarkTide-Source-Data.git'], { encoding: 'utf8' });
  assert.equal(setOrigin.status, 0, setOrigin.stderr);
  const headResult = spawnSync('git', ['-C', fixtureSourceRoot, 'rev-parse', 'HEAD'], { encoding: 'utf8' });
  assert.equal(headResult.status, 0, headResult.stderr);
  const expectedCommit = headResult.stdout.trim();
  try {
    const cliPath = fileURLToPath(implementationUrl);
    const result = spawnSync(process.execPath, [cliPath, '--prepare', '--source-root', fixtureSourceRoot, '--output-root', outputRoot, '--mode', 'candidate'], {
      cwd: fixtureSourceRoot,
      encoding: 'utf8',
      maxBuffer: 1024 * 1024
    });
    assert.equal(result.status, 0, result.stderr);
    const summary = JSON.parse(result.stdout);
    assert.equal(summary.requests.length, 2);
    assert.deepEqual(summary.requests.map((item) => item.gameReleaseId).sort(), ['darktide:1.13.1', 'darktide:1.13.2']);
    const requestRows = await Promise.all(summary.requests.map(async (item) => ({
      summary: item,
      request: JSON.parse(await readFile(path.join(outputRoot, 'requests', `${item.requestId}.json`), 'utf8'))
    })));
    for (const { summary: requestSummary, request } of requestRows) {
      assert.equal(request.sourceCommit, expectedCommit);
      assert.equal(request.sourceRevision, 'fa83649a220c3593d6bc9bda6c05b71fdb30f60783fb0b37c11298ab19ba0662');
      assert.equal(request.manifestSha256, '41227789afd6dd00d9915040509f1e5be517e0d4fb23c9850c76d65e10e489b4');
      assert.equal(request.eligibility.status, 'pending');
      assert.equal(request.eligibility.mode, 'candidate');
      assert.equal(request.sourceInputs.length, 3);
      assert.deepEqual(request.sourceInputs.map((item) => item.role), ['baseline', 'authoring', 'candidate']);
      assert.ok(request.sourceInputs.every((item) => item.path === 'content/authoring/v2/w07-weapons.json'
        && item.sha256 === 'a728b2e8dc65078ade88b01f87537323eb781fc8665f16c8166140292eb63acb'));
      assert.equal(request.sourceInputs[0].commit, api.W09_ACCEPTED_W07_BASELINE_COMMIT);
      assert.ok(request.sourceInputs.slice(1).every((item) => item.commit === expectedCommit));
      assert.ok(request.packetFiles.some((item) => item.path === 'technical.json'));
      assert.equal(request.changedRecords.length, 0, 'the W09 baseline uses the accepted W07 revision without inventing a new delta');
      const packetDir = path.join(outputRoot, 'packets', request.sourceRevision);
      const packet = await verifyPacket({ request, packetDir });
      assert.equal(packet.manifest.sourceRevision, request.sourceRevision);
      const archiveBytes = await createArchive({ request, packetDir });
      const archived = verifyArchive({ bytes: archiveBytes, request });
      assert.equal(archived.files.get('technical.json').length, request.packetFiles.find((item) => item.path === 'technical.json').sizeBytes);
      await assert.doesNotReject(verifyRevision({ request, packetDir, sourceRoot: fixtureSourceRoot, expectedCommit }));
      const pending = await api.dispatchW09SourceRequest({
        request, packetDir, sourceRoot: fixtureSourceRoot, expectedCommit, token: '',
        fetchImpl: async () => { throw new Error('must not dispatch without a configured token'); }
      });
      assert.equal(pending.status, 'pending');
      assert.match(pending.reason, /credential|token|candidate/iu);
      if (requestSummary.gameReleaseId === 'darktide:1.13.1') {
        const pendingArchive = await publishArchive({
          request, packetDir, sourceRoot: fixtureSourceRoot, expectedCommit, token: 'test-only-token',
          fetchImpl: async () => { throw new Error('must not publish an ineligible candidate'); }
        });
        assert.equal(pendingArchive.status, 'pending');
      }
      assert.equal(requestSummary.eligibility.status, 'pending');
    }
  } finally {
    await rm(fixtureRoot, { recursive: true, force: true });
  }
});

// Scenario: A formal request is dispatched without or with a configured cross-repository credential.
// Purpose: Preserve a pending request without credentials and expose only the derived release ID in the event payload.
test('UnitT07_dispatch_cannot_trust_a_handwritten_formal_eligibility_flag', async () => {
  const dispatch = requireExport('dispatchW09SourceRequest');
  const request = makeRequest({
    eligibility: {
      mode: 'formal', status: 'eligible', publicationEligible: true,
      buildIdentityVerified: true, fixtureOnly: false, reasons: []
    }
  });
  let fetchCalled = false;
  await assert.rejects(dispatch({
    request,
    packetDir: os.tmpdir(),
    sourceRoot,
    expectedCommit: request.sourceCommit,
    token: 'test-token',
    fetchImpl: async () => { fetchCalled = true; throw new Error('must not call fetch'); }
  }), /packet|file|manifest|request/iu);
  assert.equal(fetchCalled, false);
});

// Scenario: The CLI is invoked without arguments on a clean checkout.
// Purpose: Keep its default behavior read-only and require explicit paths before preparing any artifacts.
test('UnitT08_no_argument_cli_is_read_only', async () => {
  const cliPath = fileURLToPath(implementationUrl);
  const before = spawnSync('git', ['-C', sourceRoot, 'status', '--porcelain'], { encoding: 'utf8' });
  assert.equal(before.status, 0, before.stderr);
  const result = spawnSync(process.execPath, [cliPath], { cwd: sourceRoot, encoding: 'utf8' });
  assert.equal(result.status, 0, result.stderr);
  assert.match(result.stdout, /usage|read-only/iu);
  const after = spawnSync('git', ['-C', sourceRoot, 'status', '--porcelain'], { encoding: 'utf8' });
  assert.equal(after.status, 0, after.stderr);
  assert.equal(after.stdout, before.stdout);
});

// Scenario: A modified fixed input blob or a packet built from a different pinned input is presented for replay.
// Purpose: Reject mismatched commit and input provenance before accepting the Source request.
test('UnitT09_revision_verifier_rejects_wrong_pinned_commit', async () => {
  const verifyRevision = requireExport('verifyW09SourceRevision');
  const request = makeRequest();
  await assert.rejects(verifyRevision({ request, sourceRoot, expectedCommit: 'f'.repeat(40) }), /commit|identity|pin/iu);
});

// Scenario: Source handoff runs in a PR or on main, while formal dispatch is requested manually.
// Purpose: Keep workflow permissions read-only, serialize without cancellation, and gate the only dispatch path on a derived release ID.
test('UnitT10_workflow_is_readonly_and_formal_dispatch_is_explicitly_gated', async () => {
  const source = await readFile(path.join(sourceRoot, '.github', 'workflows', 'shared-source-handoff.yml'), 'utf8');
  const w01 = await readFile(path.join(sourceRoot, '.github', 'workflows', 'w01-source-ci.yml'), 'utf8');
  assert.match(source, /permissions:\s+contents:\s+read/u);
  assert.match(source, /cancel-in-progress:\s+false/u);
  assert.match(source, /workflow_dispatch:/u);
  assert.match(source, /github\.event_name == 'push'/u);
  assert.match(source, /fetch-depth:\s+0/u);
  assert.match(source, /release_id:/u);
  assert.match(source, /--mode formal/u);
  assert.match(source, /--fallback-candidate/u);
  assert.match(source, /--publish-archive/u);
  assert.match(source, /--dispatch/u);
  assert.match(source, /--all-releases/u);
  assert.match(source, /permissions:\s+contents:\s+write/u);
  assert.match(source, /SOURCE_ARCHIVE_TOKEN:\s+\$\{\{\s*github\.token\s*\}\}/u);
  assert.match(source, /secrets\.WEB_HANDOFF_TOKEN/u);
  assert.match(w01, /fetch-depth:\s+0/u);
  assert.doesNotMatch(source, /administration:\s+(?:read|write)/u);
  assert.doesNotMatch(source, /write-all|CLOUDFLARE_API_TOKEN/iu);
});

// Scenario: An existing W09 request is retried from a later metadata-only Source commit.
// Purpose: Reuse the original commit/input provenance and resolve the same immutable public archive rather than creating a conflicting request.
test('InterT02_metadata_only_retry_reuses_original_request_and_archive_from_official_no_git_origin', async () => {
  const prepare = requireExport('prepareW09SourceHandoff');
  const createArchive = requireExport('createW09SourceArchive');
  const verifyPublishedArchive = requireExport('verifyPublishedW09SourceArchive');
  const verifyRevision = requireExport('verifyW09SourceRevision');
  const root = await mkdtemp(path.join(os.tmpdir(), 'w09-metadata-retry-'));
  const cloneRoot = path.join(root, 'source');
  const outputRoot = path.join(root, 'handoff');
  try {
    const clone = spawnSync('git', ['clone', '--no-hardlinks', sourceRoot, cloneRoot], { encoding: 'utf8', maxBuffer: 1024 * 1024 });
    assert.equal(clone.status, 0, clone.stderr);
    const pinBaseline = spawnSync('git', ['-C', cloneRoot, 'checkout', '--detach', api.W09_ACCEPTED_W07_BASELINE_COMMIT], { encoding: 'utf8' });
    assert.equal(pinBaseline.status, 0, pinBaseline.stderr);
    const wrongOrigin = spawnSync('git', ['-C', cloneRoot, 'remote', 'set-url', 'origin', 'https://github.com/Other/Source-Data'], { encoding: 'utf8' });
    assert.equal(wrongOrigin.status, 0, wrongOrigin.stderr);
    await assert.rejects(prepare({ sourceRoot: cloneRoot, outputRoot, mode: 'candidate' }), /official repository|origin/iu);
    const wrongHost = spawnSync('git', ['-C', cloneRoot, 'remote', 'set-url', 'origin', 'https://example.invalid/SyuanTsai/DarkTide-Source-Data'], { encoding: 'utf8' });
    assert.equal(wrongHost.status, 0, wrongHost.stderr);
    await assert.rejects(prepare({ sourceRoot: cloneRoot, outputRoot, mode: 'candidate' }), /official repository|origin/iu);
    const setOrigin = spawnSync('git', ['-C', cloneRoot, 'remote', 'set-url', 'origin', 'https://github.com/SyuanTsai/DarkTide-Source-Data'], { encoding: 'utf8' });
    assert.equal(setOrigin.status, 0, setOrigin.stderr);
    const firstCommit = spawnSync('git', ['-C', cloneRoot, 'rev-parse', 'HEAD'], { encoding: 'utf8' });
    assert.equal(firstCommit.status, 0, firstCommit.stderr);
    const first = await prepare({ sourceRoot: cloneRoot, outputRoot, mode: 'candidate', expectedCommit: firstCommit.stdout.trim() });
    const firstRequest = first.requests[0];
    const firstPacketDir = path.join(outputRoot, 'packets', firstRequest.sourceRevision);
    const trailingSlashOrigin = spawnSync('git', ['-C', cloneRoot, 'remote', 'set-url', 'origin', 'https://github.com/SyuanTsai/DarkTide-Source-Data/'], { encoding: 'utf8' });
    assert.equal(trailingSlashOrigin.status, 0, trailingSlashOrigin.stderr);
    await assert.doesNotReject(verifyRevision({ request: firstRequest, packetDir: firstPacketDir, sourceRoot: cloneRoot, expectedCommit: firstCommit.stdout.trim() }));
    const archiveBefore = await createArchive({ request: firstRequest, packetDir: firstPacketDir });

    const emptyCommit = spawnSync('git', [
      '-C', cloneRoot, '-c', 'user.name=W09 test', '-c', 'user.email=w09-test@example.invalid',
      'commit', '--allow-empty', '-m', 'W09 metadata-only retry fixture'
    ], { encoding: 'utf8', maxBuffer: 1024 * 1024 });
    assert.equal(emptyCommit.status, 0, emptyCommit.stderr);
    const secondCommit = spawnSync('git', ['-C', cloneRoot, 'rev-parse', 'HEAD'], { encoding: 'utf8' });
    assert.equal(secondCommit.status, 0, secondCommit.stderr);
    assert.notEqual(secondCommit.stdout.trim(), firstCommit.stdout.trim());
    const second = await prepare({ sourceRoot: cloneRoot, outputRoot, mode: 'candidate', expectedCommit: secondCommit.stdout.trim() });
    const reused = second.requests.find((item) => item.requestId === firstRequest.requestId);
    assert.ok(reused);
    assert.equal(reused.sourceCommit, firstRequest.sourceCommit);
    assert.deepEqual(reused.sourceInputs, firstRequest.sourceInputs);
    const archiveAfter = await createArchive({ request: reused, packetDir: path.join(outputRoot, 'packets', reused.sourceRevision) });
    assert.deepEqual(archiveAfter, archiveBefore);
    await assert.doesNotReject(verifyRevision({ request: reused, packetDir: path.join(outputRoot, 'packets', reused.sourceRevision), sourceRoot: cloneRoot, expectedCommit: reused.sourceCommit }));

    const tagName = api.w09SourceArchiveTag(reused.releaseId);
    const assetName = api.w09SourceArchiveAssetName(reused.releaseId);
    const release = {
      id: 51, tag_name: tagName, draft: false, prerelease: true, immutable: false,
      assets: [{ id: 52, name: assetName, state: 'uploaded', url: 'https://api.github.com/repos/SyuanTsai/DarkTide-Source-Data/releases/assets/52' }]
    };
    const tagRefUrl = `https://api.github.com/repos/${api.W09_SOURCE_REPOSITORY}/git/ref/tags/${encodeURIComponent(tagName)}`;
    const published = await verifyPublishedArchive({
      request: reused,
      fetchImpl: async (url) => {
        if (url.includes('/releases/tags/')) return new Response(JSON.stringify(release), { status: 200, headers: { 'content-type': 'application/json' } });
        if (url === tagRefUrl) return new Response(JSON.stringify({ ref: `refs/tags/${tagName}`, object: { type: 'commit', sha: reused.sourceCommit } }), { status: 200 });
        return new Response(archiveAfter, { status: 200 });
      }
    });
    assert.equal(published.status, 'verified');
    assert.equal(published.requestId, firstRequest.requestId);
    assert.equal(published.providerImmutable, false, 'provider immutability is reported without being treated as an unrequested prerequisite');
  } finally {
    await rm(root, { recursive: true, force: true });
  }
});

// Scenario: A formally eligible, test-only representative contract passes the verified Source archive and dispatch route.
// Purpose: Exercise draft creation, exact asset upload, publish verification, idempotent reuse, and a release_id-only Web event with stubbed HTTP.
test('InterT03_formal_archive_and_dispatch_require_verified_content_addressed_release', async () => {
  const prepare = requireExport('prepareW09SourceHandoff');
  const publishArchive = requireExport('publishW09SourceArchive');
  const handoffRequest = requireExport('handoffW09SourceRequest');
  const resolveArchive = requireExport('resolvePublishedW09SourceArchive');
  const root = await mkdtemp(path.join(os.tmpdir(), 'w09-formal-route-'));
  const fixtureSourceRoot = path.join(root, 'source');
  const outputRoot = path.join(root, 'handoff');
  try {
    const clone = spawnSync('git', ['clone', '--no-hardlinks', sourceRoot, fixtureSourceRoot], { encoding: 'utf8', maxBuffer: 1024 * 1024 });
    assert.equal(clone.status, 0, clone.stderr);
    const setOrigin = spawnSync('git', ['-C', fixtureSourceRoot, 'remote', 'set-url', 'origin', 'https://github.com/SyuanTsai/DarkTide-Source-Data.git'], { encoding: 'utf8' });
    assert.equal(setOrigin.status, 0, setOrigin.stderr);

    const contract = await loadRepresentativeFixture();
    contract.fixtureOnly = false;
    for (const record of [...contract.records, ...contract.tombstones]) {
      for (const target of record.reviewTargets) {
        contract.reviewReceipts.push(createReviewReceipt(contract, {
          recordId: record.recordId,
          gameReleaseId: record.gameReleaseId,
          ...target
        }, {
          reviewer: { kind: 'human', id: 'test-fixture-reviewer' },
          reviewedAt: '2026-10-20T00:00:00Z'
        }));
      }
      record.reviewState = 'approved';
    }
    contract.publicationEligible = true;
    const inputPath = path.join(fixtureSourceRoot, api.W09_SOURCE_INPUT_PATHS.w07);
    await writeFile(inputPath, `${JSON.stringify(contract, null, 2)}\n`, 'utf8');
    const add = spawnSync('git', ['-C', fixtureSourceRoot, 'add', api.W09_SOURCE_INPUT_PATHS.w07], { encoding: 'utf8' });
    assert.equal(add.status, 0, add.stderr);
    const commit = spawnSync('git', [
      '-C', fixtureSourceRoot, '-c', 'user.name=W09 test', '-c', 'user.email=w09-test@example.invalid',
      'commit', '-m', 'W09 isolated formal route fixture'
    ], { encoding: 'utf8', maxBuffer: 1024 * 1024 });
    assert.equal(commit.status, 0, commit.stderr);
    const sourceCommit = spawnSync('git', ['-C', fixtureSourceRoot, 'rev-parse', 'HEAD'], { encoding: 'utf8' });
    assert.equal(sourceCommit.status, 0, sourceCommit.stderr);
    const expectedCommit = sourceCommit.stdout.trim();
    const inputSha = sha256(await readFile(inputPath));
    const inputRefs = ['baseline', 'authoring', 'candidate'].map((role) => ({
      role, commit: expectedCommit, path: api.W09_SOURCE_INPUT_PATHS.w07, sha256: inputSha
    }));
    const prepared = await prepare({ sourceRoot: fixtureSourceRoot, outputRoot, mode: 'formal', expectedCommit, inputRefs });
    assert.equal(prepared.mode, 'formal');
    assert.equal(prepared.requests[0].eligibility.status, 'eligible');
    const request = prepared.requests[0];
    const packetDir = path.join(outputRoot, 'packets', request.sourceRevision);
    const assetUrl = `https://api.github.com/repos/SyuanTsai/DarkTide-Source-Data/releases/assets/72`;
    const signedAssetUrl = 'https://release-assets.githubusercontent.com/github-production-release-asset/test?signature=unit-test-only';
    const tagName = api.w09SourceArchiveTag(request.releaseId);
    const tagRefUrl = `https://api.github.com/repos/${api.W09_SOURCE_REPOSITORY}/git/ref/tags/${encodeURIComponent(tagName)}`;
    const assetName = api.w09SourceArchiveAssetName(request.releaseId);
    let archiveBytes;
    let release = null;
    let tagCommit = null;
    let creationCount = 0;
    let uploadCount = 0;
    let publishCount = 0;
    let dispatchBody;
    const fetchImpl = async (url, options = {}) => {
      if (url.endsWith(`/releases/tags/${encodeURIComponent(tagName)}`)) {
        return release
          ? new Response(JSON.stringify(release), { status: 200, headers: { 'content-type': 'application/json' } })
          : new Response('', { status: 404 });
      }
      if (url === `https://api.github.com/repos/${api.W09_SOURCE_REPOSITORY}/git/ref/tags/${encodeURIComponent(tagName)}` && options.method === 'GET') {
        return tagCommit
          ? new Response(JSON.stringify({ ref: `refs/tags/${tagName}`, object: { type: 'commit', sha: tagCommit } }), { status: 200, headers: { 'content-type': 'application/json' } })
          : new Response('', { status: 404 });
      }
      if (url === `https://api.github.com/repos/${api.W09_SOURCE_REPOSITORY}/git/refs` && options.method === 'POST') {
        const body = JSON.parse(options.body);
        assert.equal(body.ref, `refs/tags/${tagName}`);
        assert.equal(body.sha, request.sourceCommit);
        tagCommit = body.sha;
        return new Response(JSON.stringify({ ref: body.ref, object: { type: 'commit', sha: body.sha } }), { status: 201, headers: { 'content-type': 'application/json' } });
      }
      if (url === `https://api.github.com/repos/${api.W09_SOURCE_REPOSITORY}/releases` && options.method === 'POST') {
        creationCount += 1;
        const body = JSON.parse(options.body);
        assert.equal(body.tag_name, tagName);
        assert.equal(body.target_commitish, request.sourceCommit);
        assert.equal(body.draft, true);
        release = { id: 71, tag_name: tagName, draft: true, prerelease: true, immutable: false, assets: [] };
        return new Response(JSON.stringify(release), { status: 201, headers: { 'content-type': 'application/json' } });
      }
      if (url.startsWith('https://uploads.github.com/repos/') && options.method === 'POST') {
        uploadCount += 1;
        archiveBytes = Buffer.from(options.body);
        release.assets = [{ id: 72, name: assetName, state: 'uploaded', url: assetUrl }];
        return new Response(JSON.stringify({ id: 72, name: assetName, state: 'uploaded', url: assetUrl }), { status: 201 });
      }
      if (url === assetUrl && options.method === 'GET') {
        assert.equal(options.redirect, 'manual');
        if (options.headers.Authorization) assert.equal(options.headers.Authorization, 'Bearer unit-test-token');
        return new Response(null, { status: 302, headers: { location: signedAssetUrl } });
      }
      if (url === signedAssetUrl && options.method === 'GET') {
        assert.equal(options.redirect, 'manual');
        assert.equal(options.headers.Authorization, undefined, 'GitHub bearer credentials must not cross to the signed asset host');
        return new Response(archiveBytes, { status: 200 });
      }
      if (url === `https://api.github.com/repos/${api.W09_SOURCE_REPOSITORY}/releases/71` && options.method === 'PATCH') {
        publishCount += 1;
        release = { ...release, draft: false, prerelease: true, immutable: false };
        return new Response(JSON.stringify(release), { status: 200, headers: { 'content-type': 'application/json' } });
      }
      if (url === `https://api.github.com/repos/${api.W09_WEB_REPOSITORY}/dispatches` && options.method === 'POST') {
        dispatchBody = JSON.parse(options.body);
        return new Response(null, { status: 204 });
      }
      throw new Error(`unexpected stub request: ${options.method ?? 'GET'} ${url}`);
    };
    let conflictingTagReleaseCreates = 0;
    const conflictingTagFetch = async (url, options = {}) => {
      if (url.endsWith(`/releases/tags/${encodeURIComponent(tagName)}`)) return new Response('', { status: 404 });
      if (url === tagRefUrl) {
        return new Response(JSON.stringify({ ref: `refs/tags/${tagName}`, object: { type: 'commit', sha: 'f'.repeat(40) } }), { status: 200 });
      }
      if (url === `https://api.github.com/repos/${api.W09_SOURCE_REPOSITORY}/releases` && options.method === 'POST') conflictingTagReleaseCreates += 1;
      throw new Error('unexpected request after conflicting Source tag detection');
    };
    await assert.rejects(publishArchive({ request, packetDir, sourceRoot: fixtureSourceRoot, expectedCommit, token: 'unit-test-token', fetchImpl: conflictingTagFetch }), /tag points to a different commit/u);
    assert.equal(conflictingTagReleaseCreates, 0, 'a conflicting pre-existing Git tag must block release creation');

    const missingWebToken = await handoffRequest({
      request, packetDir, sourceRoot: fixtureSourceRoot, expectedCommit,
      sourceArchiveToken: 'unit-test-token', webHandoffToken: '', fetchImpl
    });
    assert.equal(missingWebToken.archive.status, 'published', 'durable Source archive publication must proceed without the cross-repository Web token');
    assert.equal(missingWebToken.dispatch.status, 'pending');
    assert.equal(missingWebToken.archive.providerImmutable, false);
    assert.equal(creationCount, 1);
    assert.equal(uploadCount, 1);
    assert.equal(publishCount, 1);
    const retry = await handoffRequest({
      request, packetDir, sourceRoot: fixtureSourceRoot, expectedCommit,
      sourceArchiveToken: 'unit-test-token', webHandoffToken: 'web-test-token', fetchImpl
    });
    assert.equal(retry.archive.status, 'reused');
    assert.equal(retry.dispatch.status, 'dispatched');
    assert.equal(creationCount, 1);
    assert.equal(uploadCount, 1);
    assert.equal(publishCount, 1);
    assert.deepEqual(dispatchBody, { event_type: 'w09-source-release', client_payload: { release_id: request.releaseId } });

    const resolved = await resolveArchive({ releaseId: request.releaseId, fetchImpl });
    assert.equal(resolved.status, 'verified');
    assert.deepEqual(resolved.request, request);
    assert.equal(resolved.files.get('technical.json').length, request.packetFiles.find((item) => item.path === 'technical.json').sizeBytes);
    assert.equal(typeof resolved.archiveSha256, 'string');

    const metadataCommit = spawnSync('git', [
      '-C', fixtureSourceRoot, '-c', 'user.name=W09 test', '-c', 'user.email=w09-test@example.invalid',
      'commit', '--allow-empty', '-m', 'W09 fresh-runner metadata-only retry fixture'
    ], { encoding: 'utf8', maxBuffer: 1024 * 1024 });
    assert.equal(metadataCommit.status, 0, metadataCommit.stderr);
    const laterCommitResult = spawnSync('git', ['-C', fixtureSourceRoot, 'rev-parse', 'HEAD'], { encoding: 'utf8' });
    assert.equal(laterCommitResult.status, 0, laterCommitResult.stderr);
    const laterCommit = laterCommitResult.stdout.trim();
    const laterInputRefs = ['baseline', 'authoring', 'candidate'].map((role) => ({
      role, commit: laterCommit, path: api.W09_SOURCE_INPUT_PATHS.w07, sha256: inputSha
    }));
    const retryOutputRoot = path.join(root, 'fresh-runner-handoff');
    const freshRunner = await prepare({ sourceRoot: fixtureSourceRoot, outputRoot: retryOutputRoot, mode: 'formal', expectedCommit: laterCommit, inputRefs: laterInputRefs });
    const freshRequest = freshRunner.requests[0];
    assert.equal(freshRequest.requestId, request.requestId);
    assert.equal(freshRequest.releaseId, request.releaseId);
    assert.notEqual(freshRequest.sourceCommit, request.sourceCommit);
    const freshPacketDir = path.join(retryOutputRoot, 'packets', freshRequest.sourceRevision);
    const freshHandoff = await handoffRequest({
      request: freshRequest, packetDir: freshPacketDir, sourceRoot: fixtureSourceRoot, expectedCommit: laterCommit,
      sourceArchiveToken: 'unit-test-token', webHandoffToken: 'web-test-token', fetchImpl
    });
    assert.equal(freshHandoff.archive.status, 'reused');
    assert.equal(freshHandoff.archive.request.sourceCommit, request.sourceCommit, 'fresh runners must reuse the original archive provenance');
    assert.equal(freshHandoff.dispatch.status, 'dispatched');
    assert.equal(creationCount, 1);
    assert.equal(uploadCount, 1);
    assert.equal(publishCount, 1);

    const publicRelease = { ...release, assets: [{ id: 72, name: assetName, state: 'uploaded', url: assetUrl }] };
    let hostileFollowups = 0;
    const hostileFetch = async (url) => {
      if (url.endsWith(`/releases/tags/${encodeURIComponent(tagName)}`)) {
        return new Response(JSON.stringify(publicRelease), { status: 200, headers: { 'content-type': 'application/json' } });
      }
      if (url === assetUrl) return new Response(null, { status: 302, headers: { location: 'https://evil.example/archive?signature=do-not-leak' } });
      hostileFollowups += 1;
      throw new Error('untrusted host must not be requested');
    };
    await assert.rejects(resolveArchive({ releaseId: request.releaseId, fetchImpl: hostileFetch }), (error) => {
      assert.match(error.message, /not an allowed HTTPS GitHub asset host/u);
      assert.doesNotMatch(error.message, /evil\.example|do-not-leak/u);
      return true;
    });
    assert.equal(hostileFollowups, 0);

    let redirectHops = 0;
    const loopingFetch = async (url) => {
      if (url.endsWith(`/releases/tags/${encodeURIComponent(tagName)}`)) {
        return new Response(JSON.stringify(publicRelease), { status: 200, headers: { 'content-type': 'application/json' } });
      }
      if (url === assetUrl) return new Response(null, { status: 302, headers: { location: 'https://release-assets.githubusercontent.com/archive?hop=0' } });
      if (url.startsWith('https://release-assets.githubusercontent.com/')) {
        redirectHops += 1;
        return new Response(null, { status: 302, headers: { location: `https://release-assets.githubusercontent.com/archive?hop=${redirectHops}` } });
      }
      throw new Error('unexpected URL in redirect-limit test');
    };
    await assert.rejects(resolveArchive({ releaseId: request.releaseId, fetchImpl: loopingFetch }), /redirect limit/u);
    assert.equal(redirectHops, 3);

    const wrongTagFetch = async (url) => {
      if (url.endsWith(`/releases/tags/${encodeURIComponent(tagName)}`)) {
        return new Response(JSON.stringify(publicRelease), { status: 200, headers: { 'content-type': 'application/json' } });
      }
      if (url === assetUrl) return new Response(archiveBytes, { status: 200 });
      if (url === tagRefUrl) {
        return new Response(JSON.stringify({ ref: `refs/tags/${tagName}`, object: { type: 'commit', sha: 'f'.repeat(40) } }), { status: 200 });
      }
      throw new Error('unexpected URL in wrong-tag test');
    };
    await assert.rejects(resolveArchive({ releaseId: request.releaseId, fetchImpl: wrongTagFetch }), /Git tag does not point to the archive request commit/u);

    const annotatedTagSha = 'd'.repeat(40);
    let annotatedTagReads = 0;
    const annotatedTagFetch = async (url) => {
      if (url.endsWith(`/releases/tags/${encodeURIComponent(tagName)}`)) {
        return new Response(JSON.stringify(publicRelease), { status: 200, headers: { 'content-type': 'application/json' } });
      }
      if (url === assetUrl) return new Response(archiveBytes, { status: 200 });
      if (url === tagRefUrl) {
        return new Response(JSON.stringify({ ref: `refs/tags/${tagName}`, object: { type: 'tag', sha: annotatedTagSha } }), { status: 200 });
      }
      if (url === `https://api.github.com/repos/${api.W09_SOURCE_REPOSITORY}/git/tags/${annotatedTagSha}`) {
        annotatedTagReads += 1;
        return new Response(JSON.stringify({ sha: annotatedTagSha, object: { type: 'commit', sha: request.sourceCommit } }), { status: 200 });
      }
      throw new Error('unexpected URL in annotated-tag test');
    };
    const annotatedResolved = await resolveArchive({ releaseId: request.releaseId, fetchImpl: annotatedTagFetch });
    assert.equal(annotatedResolved.status, 'verified');
    assert.equal(annotatedTagReads, 1);
  } finally {
    await rm(root, { recursive: true, force: true });
  }
});

// Scenario: A Source working commit changes the W05 builder or validator to execute a harmless local canary during import.
// Purpose: Verify the W09 runtime loader rejects unapproved Git blobs before importing any Source build module.
test('InterT04_unapproved_builder_and_validator_blobs_are_rejected_before_import', async () => {
  const prepare = requireExport('prepareW09SourceHandoff');
  const root = await mkdtemp(path.join(os.tmpdir(), 'w09-runtime-pin-'));
  try {
    for (const relativePath of ['scripts/content/contract-w05-build.mjs', 'scripts/content/contract-validator.mjs']) {
      const caseRoot = path.join(root, relativePath.includes('validator') ? 'modified-validator' : 'modified-builder');
      const caseClone = spawnSync('git', ['clone', '--no-hardlinks', sourceRoot, caseRoot], { encoding: 'utf8', maxBuffer: 1024 * 1024 });
      assert.equal(caseClone.status, 0, caseClone.stderr);
      const setOrigin = spawnSync('git', ['-C', caseRoot, 'remote', 'set-url', 'origin', api.W09_SOURCE_ORIGIN], { encoding: 'utf8' });
      assert.equal(setOrigin.status, 0, setOrigin.stderr);
      const canaryPath = path.join(root, relativePath.includes('validator') ? 'validator-imported.txt' : 'builder-imported.txt');
      const modulePath = path.join(caseRoot, relativePath);
      const original = await readFile(modulePath, 'utf8');
      await writeFile(modulePath, `${original}\nawait (await import('node:fs/promises')).writeFile(${JSON.stringify(canaryPath)}, 'executed', 'utf8');\n`, 'utf8');
      const add = spawnSync('git', ['-C', caseRoot, 'add', relativePath], { encoding: 'utf8' });
      assert.equal(add.status, 0, add.stderr);
      const commit = spawnSync('git', [
        '-C', caseRoot, '-c', 'user.name=W09 test', '-c', 'user.email=w09-test@example.invalid',
        'commit', '-m', 'SYP-341\n\nTest unapproved runtime canary'
      ], { encoding: 'utf8', maxBuffer: 1024 * 1024 });
      assert.equal(commit.status, 0, commit.stderr);
      const current = spawnSync('git', ['-C', caseRoot, 'rev-parse', 'HEAD'], { encoding: 'utf8' });
      assert.equal(current.status, 0, current.stderr);
      let prepareError;
      try {
        await prepare({ sourceRoot: caseRoot, outputRoot: path.join(root, `handoff-${path.basename(caseRoot)}`), mode: 'candidate', expectedCommit: current.stdout.trim() });
      } catch (error) {
        prepareError = error;
      }
      await assert.rejects(readFile(canaryPath), { code: 'ENOENT' }, 'no canary side effect may run before all runtime pins pass');
      assert.ok(prepareError, 'an unapproved W05 runtime must be rejected');
      assert.match(prepareError.message, /approved Source runtime|pinned Source runtime|runtime pin|runtime hash/iu);
    }
  } finally {
    await rm(root, { recursive: true, force: true });
  }
});

// Scenario: A valid request is created at the accepted W07 H0, then the W05 builder receives only a comment and HEAD advances to H1.
// Purpose: Replay the historical request with its approved Git blobs instead of requiring the working tree to equal old code.
test('InterT05_historical_request_replays_after_a_comment_only_w05_commit', async () => {
  const prepare = requireExport('prepareW09SourceHandoff');
  const verifyRevision = requireExport('verifyW09SourceRevision');
  const root = await mkdtemp(path.join(os.tmpdir(), 'w09-historical-runtime-'));
  const cloneRoot = path.join(root, 'source');
  const outputRoot = path.join(root, 'handoff-h0');
  try {
    const clone = spawnSync('git', ['clone', '--no-hardlinks', sourceRoot, cloneRoot], { encoding: 'utf8', maxBuffer: 1024 * 1024 });
    assert.equal(clone.status, 0, clone.stderr);
    const pinBaseline = spawnSync('git', ['-C', cloneRoot, 'checkout', '--detach', api.W09_ACCEPTED_W07_BASELINE_COMMIT], { encoding: 'utf8' });
    assert.equal(pinBaseline.status, 0, pinBaseline.stderr);
    const setOrigin = spawnSync('git', ['-C', cloneRoot, 'remote', 'set-url', 'origin', api.W09_SOURCE_ORIGIN], { encoding: 'utf8' });
    assert.equal(setOrigin.status, 0, setOrigin.stderr);
    const h0Result = spawnSync('git', ['-C', cloneRoot, 'rev-parse', 'HEAD'], { encoding: 'utf8' });
    assert.equal(h0Result.status, 0, h0Result.stderr);
    const h0 = h0Result.stdout.trim();
    const prepared = await prepare({ sourceRoot: cloneRoot, outputRoot, mode: 'candidate', expectedCommit: h0 });
    const request = prepared.requests[0];
    const packetDir = path.join(outputRoot, 'packets', request.sourceRevision);
    const builderPath = path.join(cloneRoot, 'scripts/content/contract-w05-build.mjs');
    const builderBytes = await readFile(builderPath, 'utf8');
    await writeFile(builderPath, `${builderBytes}\n// Comment-only W09 historical replay fixture.\n`, 'utf8');
    const add = spawnSync('git', ['-C', cloneRoot, 'add', 'scripts/content/contract-w05-build.mjs'], { encoding: 'utf8' });
    assert.equal(add.status, 0, add.stderr);
    const commit = spawnSync('git', [
      '-C', cloneRoot, '-c', 'user.name=W09 test', '-c', 'user.email=w09-test@example.invalid',
      'commit', '-m', 'SYP-341\n\nAdd a comment to the W05 historical replay fixture'
    ], { encoding: 'utf8', maxBuffer: 1024 * 1024 });
    assert.equal(commit.status, 0, commit.stderr);
    const h1Result = spawnSync('git', ['-C', cloneRoot, 'rev-parse', 'HEAD'], { encoding: 'utf8' });
    assert.equal(h1Result.status, 0, h1Result.stderr);
    const h1 = h1Result.stdout.trim();
    assert.notEqual(h1, h0);
    assert.equal(request.sourceCommit, h0);
    await assert.doesNotReject(verifyRevision({ request, packetDir, sourceRoot: cloneRoot, expectedCommit: h0 }));
    const headAfter = spawnSync('git', ['-C', cloneRoot, 'rev-parse', 'HEAD'], { encoding: 'utf8' });
    assert.equal(headAfter.stdout.trim(), h1, 'historical replay must not checkout or reset the Source working tree');
    const status = spawnSync('git', ['-C', cloneRoot, 'status', '--porcelain', '--untracked-files=no'], { encoding: 'utf8' });
    assert.equal(status.stdout, '');
  } finally {
    await rm(root, { recursive: true, force: true });
  }
});

// Scenario: A formal release attempt leaves either a tag without a release or an empty draft, then only README metadata advances HEAD.
// Purpose: Recover the tag-anchored original request from pinned inputs, resume exact bytes, and fail closed on a conflicting asset.
test('InterT06_partial_archive_checkpoints_resume_from_the_verified_tag_commit', async () => {
  const prepare = requireExport('prepareW09SourceHandoff');
  const publishArchive = requireExport('publishW09SourceArchive');
  const createArchive = requireExport('createW09SourceArchive');
  const root = await mkdtemp(path.join(os.tmpdir(), 'w09-partial-archive-'));
  const cloneRoot = path.join(root, 'source');
  try {
    const clone = spawnSync('git', ['clone', '--no-hardlinks', sourceRoot, cloneRoot], { encoding: 'utf8', maxBuffer: 1024 * 1024 });
    assert.equal(clone.status, 0, clone.stderr);
    const setOrigin = spawnSync('git', ['-C', cloneRoot, 'remote', 'set-url', 'origin', api.W09_SOURCE_ORIGIN], { encoding: 'utf8' });
    assert.equal(setOrigin.status, 0, setOrigin.stderr);

    const contract = await loadRepresentativeFixture();
    contract.fixtureOnly = false;
    for (const record of [...contract.records, ...contract.tombstones]) {
      for (const target of record.reviewTargets) {
        contract.reviewReceipts.push(createReviewReceipt(contract, {
          recordId: record.recordId,
          gameReleaseId: record.gameReleaseId,
          ...target
        }, {
          reviewer: { kind: 'human', id: 'test-fixture-reviewer' },
          reviewedAt: '2026-10-20T00:00:00Z'
        }));
      }
      record.reviewState = 'approved';
    }
    contract.publicationEligible = true;
    const inputPath = path.join(cloneRoot, api.W09_SOURCE_INPUT_PATHS.w07);
    await writeFile(inputPath, `${JSON.stringify(contract, null, 2)}\n`, 'utf8');
    const add = spawnSync('git', ['-C', cloneRoot, 'add', api.W09_SOURCE_INPUT_PATHS.w07], { encoding: 'utf8' });
    assert.equal(add.status, 0, add.stderr);
    const fixtureCommit = spawnSync('git', [
      '-C', cloneRoot, '-c', 'user.name=W09 test', '-c', 'user.email=w09-test@example.invalid',
      'commit', '-m', 'SYP-341\n\nCreate isolated formal Source archive fixture'
    ], { encoding: 'utf8', maxBuffer: 1024 * 1024 });
    assert.equal(fixtureCommit.status, 0, fixtureCommit.stderr);
    const h0Result = spawnSync('git', ['-C', cloneRoot, 'rev-parse', 'HEAD'], { encoding: 'utf8' });
    assert.equal(h0Result.status, 0, h0Result.stderr);
    const h0 = h0Result.stdout.trim();
    const inputSha = sha256(await readFile(inputPath));
    const initialRefs = ['baseline', 'authoring', 'candidate'].map((role) => ({
      role, commit: h0, path: api.W09_SOURCE_INPUT_PATHS.w07, sha256: inputSha
    }));
    const outputH0 = path.join(root, 'handoff-h0');
    const initial = await prepare({ sourceRoot: cloneRoot, outputRoot: outputH0, mode: 'formal', expectedCommit: h0, inputRefs: initialRefs });
    assert.equal(initial.requests.length, 2);
    assert.ok(initial.requests.every((request) => request.eligibility.status === 'eligible'));
    const firstAtH0 = initial.requests[0];
    const secondAtH0 = initial.requests[1];

    const makePartialProvider = (request, { failCreate = false, failUpload = false } = {}) => {
      const tagName = api.w09SourceArchiveTag(request.releaseId);
      const assetName = api.w09SourceArchiveAssetName(request.releaseId);
      const assetUrl = `https://api.github.com/repos/${api.W09_SOURCE_REPOSITORY}/releases/assets/${request.gameReleaseId.endsWith('1.13.1') ? 81 : 82}`;
      const tagRefUrl = `https://api.github.com/repos/${api.W09_SOURCE_REPOSITORY}/git/ref/tags/${encodeURIComponent(tagName)}`;
      const state = { tagCommit: null, release: null, bytes: null, createCalls: 0, uploadCalls: 0, patchCalls: 0, tagCreateCalls: 0, failedCreate: false, failedUpload: false };
      const fetchImpl = async (url, options = {}) => {
        if (url === `https://api.github.com/repos/${api.W09_SOURCE_REPOSITORY}/releases/tags/${encodeURIComponent(tagName)}`) {
          return state.release
            ? new Response(JSON.stringify(state.release), { status: 200, headers: { 'content-type': 'application/json' } })
            : new Response('', { status: 404 });
        }
        if (url === tagRefUrl && options.method === 'GET') {
          return state.tagCommit
            ? new Response(JSON.stringify({ ref: `refs/tags/${tagName}`, object: { type: 'commit', sha: state.tagCommit } }), { status: 200 })
            : new Response('', { status: 404 });
        }
        if (url === `https://api.github.com/repos/${api.W09_SOURCE_REPOSITORY}/git/refs` && options.method === 'POST') {
          const body = JSON.parse(options.body);
          assert.equal(body.ref, `refs/tags/${tagName}`);
          assert.equal(body.sha, h0);
          state.tagCommit = body.sha;
          state.tagCreateCalls += 1;
          return new Response(JSON.stringify({ ref: body.ref, object: { type: 'commit', sha: body.sha } }), { status: 201 });
        }
        if (url === `https://api.github.com/repos/${api.W09_SOURCE_REPOSITORY}/releases` && options.method === 'POST') {
          state.createCalls += 1;
          const body = JSON.parse(options.body);
          assert.equal(body.tag_name, tagName);
          assert.equal(body.target_commitish, h0, 'partial publication recovery must retain the verified tag commit');
          assert.equal(body.draft, true);
          if (failCreate && !state.failedCreate) {
            state.failedCreate = true;
            return new Response('temporary test failure', { status: 502 });
          }
          state.release = { id: request.gameReleaseId.endsWith('1.13.1') ? 81 : 82, tag_name: tagName, draft: true, prerelease: true, immutable: false, assets: [] };
          return new Response(JSON.stringify(state.release), { status: 201, headers: { 'content-type': 'application/json' } });
        }
        if (url.startsWith('https://uploads.github.com/repos/') && options.method === 'POST') {
          state.uploadCalls += 1;
          if (failUpload && !state.failedUpload) {
            state.failedUpload = true;
            return new Response('temporary upload failure', { status: 502 });
          }
          state.bytes = Buffer.from(options.body);
          state.release.assets = [{ id: request.gameReleaseId.endsWith('1.13.1') ? 81 : 82, name: assetName, state: 'uploaded', url: assetUrl }];
          return new Response(JSON.stringify(state.release.assets[0]), { status: 201 });
        }
        if (url === assetUrl && options.method === 'GET') return new Response(state.bytes, { status: 200 });
        if (url === `https://api.github.com/repos/${api.W09_SOURCE_REPOSITORY}/releases/${request.gameReleaseId.endsWith('1.13.1') ? 81 : 82}` && options.method === 'PATCH') {
          state.patchCalls += 1;
          state.release = { ...state.release, draft: false };
          return new Response(JSON.stringify(state.release), { status: 200, headers: { 'content-type': 'application/json' } });
        }
        throw new Error(`unexpected partial-archive test request: ${options.method ?? 'GET'} ${url}`);
      };
      return { state, fetchImpl };
    };

    const tagOnly = makePartialProvider(firstAtH0, { failCreate: true });
    const firstPacketH0 = path.join(outputH0, 'packets', firstAtH0.sourceRevision);
    await assert.rejects(publishArchive({ request: firstAtH0, packetDir: firstPacketH0, sourceRoot: cloneRoot, expectedCommit: h0, token: 'unit-test-token', fetchImpl: tagOnly.fetchImpl }), /release creation failed with HTTP 502/u);
    assert.equal(tagOnly.state.tagCommit, h0);
    assert.equal(tagOnly.state.release, null, 'the first checkpoint contains a tag but no release');

    const emptyDraft = makePartialProvider(secondAtH0, { failUpload: true });
    const secondPacketH0 = path.join(outputH0, 'packets', secondAtH0.sourceRevision);
    await assert.rejects(publishArchive({ request: secondAtH0, packetDir: secondPacketH0, sourceRoot: cloneRoot, expectedCommit: h0, token: 'unit-test-token', fetchImpl: emptyDraft.fetchImpl }), /upload failed with HTTP 502/u);
    assert.equal(emptyDraft.state.tagCommit, h0);
    assert.equal(emptyDraft.state.release?.draft, true);
    assert.deepEqual(emptyDraft.state.release?.assets, [], 'the second checkpoint contains an empty draft');

    const readmePath = path.join(cloneRoot, 'README.md');
    const readme = await readFile(readmePath, 'utf8');
    await writeFile(readmePath, `${readme}\n<!-- metadata-only W09 retry fixture -->\n`, 'utf8');
    const readmeAdd = spawnSync('git', ['-C', cloneRoot, 'add', 'README.md'], { encoding: 'utf8' });
    assert.equal(readmeAdd.status, 0, readmeAdd.stderr);
    const metadataCommit = spawnSync('git', [
      '-C', cloneRoot, '-c', 'user.name=W09 test', '-c', 'user.email=w09-test@example.invalid',
      'commit', '-m', 'SYP-341\n\nAdd README-only retry metadata'
    ], { encoding: 'utf8', maxBuffer: 1024 * 1024 });
    assert.equal(metadataCommit.status, 0, metadataCommit.stderr);
    const h1Result = spawnSync('git', ['-C', cloneRoot, 'rev-parse', 'HEAD'], { encoding: 'utf8' });
    assert.equal(h1Result.status, 0, h1Result.stderr);
    const h1 = h1Result.stdout.trim();
    assert.notEqual(h1, h0);
    const retryRefs = [
      { role: 'baseline', commit: h0, path: api.W09_SOURCE_INPUT_PATHS.w07, sha256: inputSha },
      { role: 'authoring', commit: h1, path: api.W09_SOURCE_INPUT_PATHS.w07, sha256: inputSha },
      { role: 'candidate', commit: h1, path: api.W09_SOURCE_INPUT_PATHS.w07, sha256: inputSha }
    ];
    const outputH1 = path.join(root, 'fresh-runner-handoff-h1');
    const retried = await prepare({ sourceRoot: cloneRoot, outputRoot: outputH1, mode: 'formal', expectedCommit: h1, inputRefs: retryRefs });
    const firstAtH1 = retried.requests.find((item) => item.gameReleaseId === firstAtH0.gameReleaseId);
    const allCurrentRefs = ['baseline', 'authoring', 'candidate'].map((role) => ({
      role, commit: h1, path: api.W09_SOURCE_INPUT_PATHS.w07, sha256: inputSha
    }));
    const allCurrentRoot = path.join(root, 'all-current-handoff-h1');
    const allCurrent = await prepare({ sourceRoot: cloneRoot, outputRoot: allCurrentRoot, mode: 'formal', expectedCommit: h1, inputRefs: allCurrentRefs });
    const secondAtH1 = allCurrent.requests.find((item) => item.gameReleaseId === secondAtH0.gameReleaseId);
    assert.ok(firstAtH1 && secondAtH1);
    assert.equal(firstAtH1.requestId, firstAtH0.requestId);
    assert.equal(secondAtH1.requestId, secondAtH0.requestId);
    assert.notEqual(firstAtH1.sourceCommit, firstAtH0.sourceCommit);
    assert.equal(secondAtH1.sourceInputs.find((item) => item.role === 'baseline').commit, h1);
    const firstPacketH1 = path.join(outputH1, 'packets', firstAtH1.sourceRevision);
    const secondPacketH1 = path.join(allCurrentRoot, 'packets', secondAtH1.sourceRevision);

    const resumedTagOnly = await publishArchive({ request: firstAtH1, packetDir: firstPacketH1, sourceRoot: cloneRoot, expectedCommit: h1, token: 'unit-test-token', fetchImpl: tagOnly.fetchImpl });
    assert.equal(resumedTagOnly.status, 'published');
    assert.equal(resumedTagOnly.request.sourceCommit, h0);
    assert.equal(tagOnly.state.tagCreateCalls, 1, 'recovery must not recreate or move the existing tag');
    assert.equal(tagOnly.state.createCalls, 2);
    assert.equal(tagOnly.state.uploadCalls, 1);
    assert.equal(tagOnly.state.patchCalls, 1);

    const resumedDraft = await publishArchive({ request: secondAtH1, packetDir: secondPacketH1, sourceRoot: cloneRoot, expectedCommit: h1, token: 'unit-test-token', fetchImpl: emptyDraft.fetchImpl });
    assert.equal(resumedDraft.status, 'published');
    assert.equal(resumedDraft.request.sourceCommit, h0);
    assert.equal(emptyDraft.state.tagCreateCalls, 1, 'draft recovery must preserve the original tag');
    assert.equal(emptyDraft.state.createCalls, 1, 'an existing draft must be reused');
    assert.equal(emptyDraft.state.uploadCalls, 2);
    assert.equal(emptyDraft.state.patchCalls, 1);
    assert.ok(emptyDraft.state.bytes?.length > 0);

    const conflict = makePartialProvider(firstAtH0);
    conflict.state.tagCommit = h0;
    conflict.state.release = {
      id: 91, tag_name: api.w09SourceArchiveTag(firstAtH0.releaseId), draft: true, prerelease: true, immutable: false,
      assets: [{ id: 92, name: api.w09SourceArchiveAssetName(firstAtH0.releaseId), state: 'uploaded', url: `https://api.github.com/repos/${api.W09_SOURCE_REPOSITORY}/releases/assets/92` }]
    };
    const conflictingAssetUrl = conflict.state.release.assets[0].url;
    let conflictWrites = 0;
    const conflictFetch = async (url, options = {}) => {
      if (url.endsWith(`/releases/tags/${encodeURIComponent(api.w09SourceArchiveTag(firstAtH0.releaseId))}`)) return new Response(JSON.stringify(conflict.state.release), { status: 200, headers: { 'content-type': 'application/json' } });
      if (url.endsWith(`/git/ref/tags/${encodeURIComponent(api.w09SourceArchiveTag(firstAtH0.releaseId))}`)) return new Response(JSON.stringify({ ref: `refs/tags/${api.w09SourceArchiveTag(firstAtH0.releaseId)}`, object: { type: 'commit', sha: h0 } }), { status: 200 });
      if (url === conflictingAssetUrl && options.method === 'GET') return new Response('conflicting asset bytes', { status: 200 });
      if (options.method === 'POST' || options.method === 'PATCH') conflictWrites += 1;
      throw new Error('no release mutation is permitted after an asset conflict');
    };
    await assert.rejects(publishArchive({ request: firstAtH1, packetDir: firstPacketH1, sourceRoot: cloneRoot, expectedCommit: h1, token: 'unit-test-token', fetchImpl: conflictFetch }), /archive|asset|bytes|gzip|hash/iu);
    assert.equal(conflictWrites, 0, 'a conflicting pre-existing asset must never be overwritten or published');

    const h1Readme = await readFile(readmePath, 'utf8');
    await writeFile(readmePath, h1Readme + '\n<!-- metadata-only W09 retry H2 -->\n', 'utf8');
    const h2Add = spawnSync('git', ['-C', cloneRoot, 'add', 'README.md'], { encoding: 'utf8' });
    assert.equal(h2Add.status, 0, h2Add.stderr);
    const h2Commit = spawnSync('git', [
      '-C', cloneRoot, '-c', 'user.name=W09 test', '-c', 'user.email=w09-test@example.invalid',
      'commit', '-m', 'SYP-341\n\nAdd second README-only retry metadata'
    ], { encoding: 'utf8', maxBuffer: 1024 * 1024 });
    assert.equal(h2Commit.status, 0, h2Commit.stderr);
    const h2Result = spawnSync('git', ['-C', cloneRoot, 'rev-parse', 'HEAD'], { encoding: 'utf8' });
    assert.equal(h2Result.status, 0, h2Result.stderr);
    const h2 = h2Result.stdout.trim();
    assert.notEqual(h2, h1);
    const retryRefsH2 = [
      { role: 'baseline', commit: h1, path: api.W09_SOURCE_INPUT_PATHS.w07, sha256: inputSha },
      { role: 'authoring', commit: h2, path: api.W09_SOURCE_INPUT_PATHS.w07, sha256: inputSha },
      { role: 'candidate', commit: h2, path: api.W09_SOURCE_INPUT_PATHS.w07, sha256: inputSha }
    ];
    const outputH2 = path.join(root, 'fresh-runner-handoff-h2');
    const retriedH2 = await prepare({ sourceRoot: cloneRoot, outputRoot: outputH2, mode: 'formal', expectedCommit: h2, inputRefs: retryRefsH2 });
    const firstAtH2 = retriedH2.requests.find((item) => item.gameReleaseId === firstAtH0.gameReleaseId);
    const secondAtH2 = retriedH2.requests.find((item) => item.gameReleaseId === secondAtH0.gameReleaseId);
    assert.ok(firstAtH2 && secondAtH2);
    assert.equal(firstAtH2.requestId, firstAtH0.requestId);
    assert.equal(secondAtH2.requestId, secondAtH0.requestId);
    assert.equal(firstAtH2.sourceInputs.find((item) => item.role === 'baseline').commit, h1);
    assert.equal(firstAtH2.sourceCommit, h2);
    const firstPacketH2 = path.join(outputH2, 'packets', firstAtH2.sourceRevision);
    const secondPacketH2 = path.join(outputH2, 'packets', secondAtH2.sourceRevision);
    const firstArchiveH0 = await createArchive({ request: firstAtH0, packetDir: firstPacketH0 });
    const secondArchiveH0 = await createArchive({ request: secondAtH0, packetDir: secondPacketH0 });

    const makeStoredArchiveProvider = (request, bytes, { draft }) => {
      const releaseTag = api.w09SourceArchiveTag(request.releaseId);
      const assetName = api.w09SourceArchiveAssetName(request.releaseId);
      const id = request.gameReleaseId.endsWith('1.13.1') ? 111 : 112;
      const assetUrl = 'https://api.github.com/repos/' + api.W09_SOURCE_REPOSITORY + '/releases/assets/' + id;
      const tagUrl = 'https://api.github.com/repos/' + api.W09_SOURCE_REPOSITORY + '/releases/tags/' + encodeURIComponent(releaseTag);
      const refUrl = 'https://api.github.com/repos/' + api.W09_SOURCE_REPOSITORY + '/git/ref/tags/' + encodeURIComponent(releaseTag);
      const state = {
        tagCommit: h0,
        bytes: Buffer.from(bytes),
        release: {
          id,
          tag_name: releaseTag,
          draft,
          prerelease: true,
          immutable: false,
          assets: [{ id, name: assetName, state: 'uploaded', url: assetUrl }]
        },
        postCalls: 0,
        patchCalls: 0,
        assetReads: 0
      };
      const fetchImpl = async (url, options = {}) => {
        if (url === tagUrl && (options.method ?? 'GET') === 'GET') {
          return Response.json(state.release);
        }
        if (url === refUrl && (options.method ?? 'GET') === 'GET') {
          return Response.json({ ref: 'refs/tags/' + releaseTag, object: { type: 'commit', sha: state.tagCommit } });
        }
        if (url === assetUrl && (options.method ?? 'GET') === 'GET') {
          state.assetReads += 1;
          return new Response(state.bytes, { status: 200 });
        }
        if (url === 'https://api.github.com/repos/' + api.W09_SOURCE_REPOSITORY + '/releases/' + id && options.method === 'PATCH') {
          state.patchCalls += 1;
          state.release = { ...state.release, draft: false };
          return Response.json(state.release);
        }
        if (options.method === 'POST') {
          state.postCalls += 1;
          return new Response('unexpected archive mutation', { status: 409 });
        }
        throw new Error('unexpected stored-archive request: ' + (options.method ?? 'GET') + ' ' + url);
      };
      return { state, fetchImpl };
    };

    const publishedStore = makeStoredArchiveProvider(firstAtH0, firstArchiveH0, { draft: false });
    const publishedRetry = await publishArchive({
      request: firstAtH2, packetDir: firstPacketH2, sourceRoot: cloneRoot, expectedCommit: h2,
      token: 'unit-test-token', fetchImpl: publishedStore.fetchImpl
    });
    assert.equal(publishedRetry.status, 'reused');
    assert.equal(publishedRetry.sourceCommit, h0);
    assert.equal(publishedRetry.request.sourceCommit, h0);
    assert.equal(publishedStore.state.tagCommit, h0);
    assert.equal(publishedStore.state.patchCalls, 0, 'a published archive retry must be read-only');
    assert.equal(publishedStore.state.postCalls, 0, 'a published archive retry must not create or upload anything');
    assert.ok(publishedStore.state.assetReads > 0);

    const draftStore = makeStoredArchiveProvider(secondAtH0, secondArchiveH0, { draft: true });
    const draftRetry = await publishArchive({
      request: secondAtH2, packetDir: secondPacketH2, sourceRoot: cloneRoot, expectedCommit: h2,
      token: 'unit-test-token', fetchImpl: draftStore.fetchImpl
    });
    assert.equal(draftRetry.status, 'published');
    assert.equal(draftRetry.sourceCommit, h0);
    assert.equal(draftRetry.request.sourceCommit, h0);
    assert.equal(draftStore.state.tagCommit, h0);
    assert.equal(draftStore.state.patchCalls, 1, 'an uploaded draft retry only publishes the existing archive');
    assert.equal(draftStore.state.postCalls, 0, 'an uploaded draft retry must not create a tag, release, or asset');
    assert.ok(draftStore.state.assetReads > 0);
  } finally {
    await rm(root, { recursive: true, force: true });
  }
});

// Scenario: A W05 revision adds or updates claims, removes a previously typed claim, and removes a record with no typed baseline kind.
// Purpose: Preserve every changed record tuple while deriving claim invalidation only from verified kind data, never an ID prefix.
test('UnitT11_changed_record_derivation_preserves_all_tuples_without_guessing_kind', () => {
  const derive = requireExport('deriveW09ChangedRecords');
  const gameReleaseId = 'darktide:1.13.1';
  const revision = { changes: {
    records: {
      added: [JSON.stringify([gameReleaseId, 'looks-like-claim:new'])],
      removed: [JSON.stringify([gameReleaseId, 'former-claim'])],
      updated: [{ key: JSON.stringify([gameReleaseId, 'updated-claim']), fields: ['/payload/value'] }]
    },
    tombstones: {
      added: [],
      removed: [JSON.stringify([gameReleaseId, 'darktide:claim:untyped-removed'])],
      updated: []
    }
  } };
  const technical = {
    records: [
      { gameReleaseId, recordId: 'looks-like-claim:new', kind: 'weapon' },
      { gameReleaseId, recordId: 'updated-claim', kind: 'claim' }
    ],
    tombstones: []
  };
  const baseline = {
    records: [{ gameReleaseId, recordId: 'former-claim', kind: 'claim' }],
    tombstones: [{ gameReleaseId, recordId: 'darktide:claim:untyped-removed' }]
  };
  const changed = derive({ revision, technical, baseline });
  assert.equal(changed.length, 4);
  assert.equal(changed.find((item) => item.recordId === 'looks-like-claim:new').kind, 'weapon');
  assert.equal(changed.find((item) => item.recordId === 'former-claim').kind, 'claim');
  assert.equal(changed.find((item) => item.recordId === 'darktide:claim:untyped-removed').kind, null);
  const claims = changed.filter((item) => item.kind === 'claim');
  assert.deepEqual(new Set(claims.map((item) => item.recordId)), new Set(['updated-claim', 'former-claim']));
});
