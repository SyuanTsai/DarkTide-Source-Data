# Source authoring and generated analysis

## Ownership

DarkTide-Source-Data owns stable technical record IDs, release references, numeric or explicitly unknown values, safe source summaries, technical review receipts, and explicit game-change records. DarkTide-Web owns official wording, errata, terms as presented to players, announcements, and Traditional Chinese presentation. The browser extension consumes the shared player-facing output and owns DOM matching/rendering. Do not duplicate another repository's authored fields.

## W01 contract

The authoring shape is a public, minimum-compatible v17-A subset of content/schema/source-authoring.schema.json. It keeps the shared record names and identity fields for skill, claim, evidence, blessing, blessing-variant, weapon, stat-definition, stat-curve, and term. Claim identity includes targetRef, property, typed value, context, basis, and evidenceRefs. A weapon comparison context may bind `weaponRef`, one `profile`, an `attackMode`, `weaponStat`, and a known scalar `comparisonStat`; avoid duplicate profile fields. A display value is separate from the raw value and must name a compiler-supported `displayFormat`; W01 validates its unit and formula against a closed weapon-stat/metric/profile allowlist. It is only used where the pinned UI formatting source supports an exact conversion. Blessing variants preserve blessingRef, weaponRefs, definedTiers, obtainableTiers, and tierValues; an unknown obtainableTiers value stays unknown. Weapon identity includes familyId, markId, templateKey, statRefs, optional attack/armor references, and dataCoverage. The W01 `displayedAttacks` summary has primary/light and secondary/heavy entries; every displayed segment has a contiguous 1-based index, a closed attack-type and target-role enum, and its own profile key. Its scope is fixed to `display-summary`, and nested source/evidence references must resolve in the authoring registries. It records the displayed role sequence, not the complete action chain. Stat curves preserve units, ordered x/y knots, interpolation, and edge policy without calculating. Web presentation, term localization, announcements, alternate kind names, and unknown kinds are rejected. Each record has one Source owner and a gameReleaseId. A known scalar remains a decimal string with a unit. A known range retains its min, max, unit, optional step, and inclusive flag without calculation. Unknown and not-applicable remain distinct typed states. References must resolve to IDs in this authoring set.

A review receipt binds both the targetDigest and dependenciesDigest. The dependency digest covers only the target's transitive referenced records and source snapshots plus its game release ID/version. A changed dependency makes the derived review state stale; unrelated records do not stale the target. The compiler checks the digest but does not create a human review or attest that the reviewer is authorized. Test receipts use a synthetic `fixture-reviewer` solely to exercise digest invalidation; they are not real approvals and must never be used for a public candidate.

The sample at content/authoring/w01-preview.json is entirely synthetic. It is fixtureOnly and pending. Its output says so and formal mode must reject it. It is not a game fact, a source acquisition, a public-source privacy approval, or an approved release.

## Generation

Run `npm run content:contract:validate`, then `npm test`, then `npm run content:preview` for the default W01 fixture. The build accepts only `w01-preview.json`, `w01-real-claim-candidate.json`, and `w01-real-representative-candidate.json`; choose one explicitly with `npm run content:preview -- --input <allowed-file>`. The compiler writes immutable content-addressed output beneath `dist-w01/source/<sourceRevision>`, plus a deterministic receipt. It does not write the production `dist` directory. `npm run content:formal` is expected to reject the synthetic W01 fixture; a successful preview is not a human review.

Generated files are technical.json, analysis.md, game-changes.json, game-changes.md, and source-manifest.json. The sourceRevision hashes canonical technical authoring; the manifest lists generated artifact hashes; the receipt records the manifest hash. Data revisions do not imply official game changes: gameChanges must be authored explicitly with the same changeId.

## Boundaries and remaining work

This subset deliberately omits complete source/tool provenance, cross-release compatibility and tombstone/alias rules, attack-profile/damage-profile/armor-class/target-profile and modifier-rule registries, the full context vocabulary, and complete armor data. W02 must formalize those fields against v17-A before this becomes the complete schema. The W01 compiler and schema reject undeclared public keys for the included technical subset, but they are not a complete formal schema. After public-source and sanitizer checks, a real candidate may appear in a public PR while still pending; that does not approve its content. A human review receipt bound to the exact sanitized content and dependency closure is required before a formal shared release. Key allowlisting cannot prove that values are safe. Keep private raw exports and proof outside this public repository.
## Public composition request

After a preview build, run npm run content:request from a clean authoring/schema state on the pinned public Source remote. Add --input followed by w01-preview.json, w01-real-claim-candidate.json, or w01-real-representative-candidate.json to pin that preview; for example, run `npm run content:request -- --input w01-real-representative-candidate.json`. The default remains w01-preview.json. It writes an immutable request beneath dist-w01/requests/<sourceRevision>-<commit>.json containing only the public Source repository, full Git commit, sourceRevision, and source-manifest SHA-256. It records no raw source, private proof, or credentials. Re-running the same build produces the same request bytes. The request command always builds in preview mode and cannot authorize a formal release.

DarkTide-Web consumes that request by checking the exact Source remote and HEAD commit, then verifying the generated manifest and artifact hashes before updating source.lock.json and the candidate artifacts. Replaying the same request uses the same W01 candidate branch and composition receipt. An open PR on that branch is reused; the executor does not create another PR if a prior one was closed. Fixture and non-fixture preview requests are composition pins only; neither records human approval or authorizes a formal release. Compiler-derived preview eligibility may reflect a later human review receipt, while a formal shared release still requires the existing formal compilation gate.

## W12 game-change technical log

The W12 helper derives a Source-only comparison log from an existing W05 package after verifying every file listed in the source manifest, the W05 receipt, and the current Source contract validator result. It does not edit the W05 package, create review receipts, assign a Web `contentVersion`, or mark a change as published on DarkTide-Web.

Run `npm run content:w12:changes -- --package-dir <W05-package-directory> --to-release <gameReleaseId> --out-dir <separate-output-root>`. Add `--from-release <gameReleaseId>` only when comparing an explicitly ordered earlier release. Omitting it records a baseline rather than treating first import as a game update. The command writes immutable `game-changes.json` and `game-changes.md` beneath `<separate-output-root>/<sourceRevision>/`; keep that output outside the W05 package directory. A subsequent Web publication requires its own shared package and approval path.

The [formal W12 baseline log](../analysis/w12/1fdd0881633c623ed8f5ad294613a0747d675e1dad2266b844ce42bf72f73520/game-changes.md) was generated from the already-approved W05 package. It reports no new confirmed game changes and retains the original source revision; it is not a new Source archive or a Web publication receipt.

The automatic `main` formal-handoff workflow runs only for changes beneath `content/` or to `scripts/content/contract-*.mjs`. W12 helper, tests, documentation, package-script, and workflow-metadata changes are validated by the pull-request test job without automatically requesting a new Source archive. The existing manual dispatch remains available for an explicitly selected existing release ID.

## Game info source workflow handoff

The historical `AI Prompt/Game-Info-Workflow.md` is a source reference, not an executable approval or release instruction. Its current entry point is this Source-owned workflow and the linked skill/blessing procedures, versioned schema, and W08 compiler. Do not use the old prompt to write current game facts into Mods Markdown or publish a second Pages corpus. Keep stable game facts, numeric values, explicit unknowns, source references, and dependency receipts in this repository; player wording, errata, localized terms, and official announcements belong to DarkTide-Web. A publication date or a dated announcement does not establish a game release or build. Run the existing validators and compiler for the changed Source-owned fields; compiler output does not create human review receipts.

## W15 terminology reference handoff

The fixed [W15 term reference candidate](../references/w15/term-candidates.json) has human approval for Source-owned technical-context writing reference only; its individual rows remain draft or pending. This approval does not assign a game release, approve current gameplay facts, or add runtime terms. See its [approval record](../references/w15/content-approval.json). The candidate retains the exact Mods commit, path, selector, fragment hash, and Source-owned context for each row. Web-owned Traditional Chinese wording uses the separate [Web term candidate](https://github.com/SyuanTsai/DarkTide-Web/blob/5cb1430fa3b4fed041481b82d6dbec7fc63b2a7b/content/authoring/v2/w15/term-candidates.json) and its [approval record](https://github.com/SyuanTsai/DarkTide-Web/blob/codex/SYP-349-w15-migration/docs/contracts/w15/content-approval.json). Moving a term into Source `content/` still requires the existing authoring, digest, and receipt workflow.

To regenerate or verify this file, run the W15 Web migration report from its repository root and pass this Source checkout as the output root:

```powershell
node scripts/content/w15-migration-report.mjs --write-source-m08 <Source-repository-root>
node scripts/content/w15-migration-report.mjs --verify-source-m08 <Source-repository-root>
```

## Local Game Info Markdown-reference check

The fixed M07 `scripts/game-info/validate_game_info.py` checks local Markdown links, image paths, and fragment anchors. It reads only the supplied local directory, does not request remote URLs, and is not a gameplay schema validator or evidence/review tool. By default it skips `vendor` and extracted-text directories; use repeated `--exclude-dir` options for other local snapshots. Remote references are counted but not fetched or asserted.

```powershell
python scripts/game-info/validate_game_info.py --root "<local Game Info directory>"
python -m unittest discover -s scripts/game-info/tests -p test_validate_game_info.py -v
```

The two synthetic tests cover explicit snapshot exclusions and the separate `--include-local-source` switch. This check replaces only the legacy local-link/anchor check in its documented scope; the W08 compiler and existing typed-content validators remain responsible for Source records and references.
