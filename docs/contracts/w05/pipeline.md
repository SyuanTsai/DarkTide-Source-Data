# W05 source-contract pipeline

W05 builds one reviewable Source-data candidate from an immutable baseline, the current authoring document, and a newly prepared candidate. The command accepts exactly three contract inputs and an explicit output root:

    npm run content:w05:build -- --baseline PATH --authoring PATH --candidate PATH --out-root PATH

The optional mode is candidate or formal; candidate is the default. A smoke build may pass the same JSON file for all three inputs. The default v2 representative fixture is suitable for a pipeline smoke test, not a real game-data release.

Every input is checked with the existing v2 contract validator before merging. The merge identifies registry entries by stable composite IDs: release ID for game releases, release plus source ID for source references, release plus record ID for records and tombstones, and the full review target plus dimension for receipts. Registry order has no meaning. A one-sided edit is retained, same-value edits coalesce, and simultaneous different edits produce a conflict envelope. Arrays inside records remain ordered values and conflict atomically. Missing properties remain distinct from explicit null. Deletion against an unchanged entry applies; deletion against an edit conflicts.

The optional sourceSnapshots registry is keyed globally by snapshot.snapshotId; gameReleaseId remains a mergeable field. When any input declares the registry, an omitted property on another input is treated as an empty registry. When all inputs omit it, the merged contract and legacy revision output keep it omitted. Snapshot entries are sorted by ID, so reordering does not create a conflict or change the content address. Revision JSON and Markdown list snapshot additions, removals, and updated field paths. Snapshot-bearing revisions use the w05-source-revision/2 address namespace so the expanded log cannot collide with older v1 immutable outputs; contracts that omit sourceSnapshots entirely retain the w05-source-revision/1 schema and address.

A conflict, malformed input, validation failure, or formal gate failure happens before output creation. The build never writes an active contract. On success it writes to a new content-addressed directory named by the source revision. Existing directories are immutable: the complete expected file set and exact bytes must match for an idempotent reuse; missing, extra, non-regular, or changed files cause rejection without repair or overwrite. New output is staged in a temporary sibling directory and renamed into place.

Review status is derived from the v2 review receipts and their target/dependency digests. Existing receipt records are preserved; the pipeline never creates or upgrades an approval. A changed dependency makes only affected receipts stale. A valid draft with no receipts remains draft when unchanged or when a single side sets that review state. State-only approved flags without current human receipts cannot create approval. The final publicationEligible value is recalculated by the v2 validator.

Candidate mode sets previewOnly in the receipt and keeps unverified source metadata visible. A candidate whose receipts are current and otherwise publication-eligible is rejected if a game release or source reference has a blank or UNVERIFIED build identity; this prevents a preview from claiming publishability. A pending candidate with UNVERIFIED metadata can still be built and keeps that value in technical.json and lists the release/source build identities plus the formal-output limitation in the manifest and receipt. Formal mode additionally requires verified build identities and a contract that the v2 validator marks publication-eligible from current human approvals.

Each output directory contains:

- technical.json: the validated merged v2 contract, including preserved receipt records.
- analysis.md: generated English technical claim analysis. Scalar, range, unknown, and not-applicable values are stated according to their v2 fields. Rule references include their referenced rule metadata and evidence; the pipeline does not evaluate or calculate a rule.
- source-revision.json and source-revision.md: a baseline-to-result Source-data revision record. This is not an official game-change notice and does not assert that the game itself changed.
- source-manifest.json: build identities, readable limitations, and exact SHA-256 and byte-size entries for technical, analysis, and revision files.
- source-receipt.json: build mode, preview and eligibility state, source revision, manifest digest, and the v2 validation receipt.

The content address covers the output mode, the normalized baseline semantics used by the revision log, and the complete merged contract, including actual review states. The generated files contain relative artifact names and no absolute checkout paths, so a fresh clone produces the same bytes for identical inputs.

The repository config pins future W05 authoring JSON and generated analysis files to LF endings. This keeps their committed bytes and manifest digests stable when a checkout has autocrlf enabled:

    /content/authoring/v2/** text eol=lf
    /docs/analysis/w05/** text eol=lf

W05 establishes the reusable pipeline and a bounded representative candidate. It does not perform the full frozen-content migration or later weapon-analysis and localization work.