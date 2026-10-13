# Source authoring and generated analysis

## Ownership

DarkTide-Source-Data owns stable technical record IDs, release references, numeric or explicitly unknown values, safe source summaries, technical review receipts, and explicit game-change records. DarkTide-Web owns official wording, errata, terms as presented to players, announcements, and Traditional Chinese presentation. The browser extension consumes the shared player-facing output and owns DOM matching/rendering. Do not duplicate another repository's authored fields.

## W01 contract

The authoring shape is a public, minimum-compatible v17-A subset of content/schema/source-authoring.schema.json. It keeps the shared record names and identity fields for skill, claim, evidence, blessing, blessing-variant, weapon, stat-definition, stat-curve, and term. Claim identity includes targetRef, property, typed value, context, basis, and evidenceRefs. Blessing variants preserve blessingRef, weaponRefs, definedTiers, obtainableTiers, and tierValues; an unknown obtainableTiers value stays unknown. Weapon identity includes familyId, markId, templateKey, statRefs, optional attack/armor references, and dataCoverage. Stat curves preserve units, ordered x/y knots, interpolation, and edge policy without calculating. Web presentation, term localization, announcements, alternate kind names, and unknown kinds are rejected. Each record has one Source owner and a gameReleaseId. A known scalar remains a decimal string with a unit. A known range retains its min, max, unit, optional step, and inclusive flag without calculation. Unknown and not-applicable remain distinct typed states. References must resolve to IDs in this authoring set.

A review receipt binds both the targetDigest and dependenciesDigest. The dependency digest covers only the target's transitive referenced records and source snapshots plus its game release ID/version. A changed dependency makes the derived review state stale; unrelated records do not stale the target. The compiler checks the digest but does not create a human review or attest that the reviewer is authorized. Test receipts use a synthetic `fixture-reviewer` solely to exercise digest invalidation; they are not real approvals and must never be used for a public candidate.

The sample at content/authoring/w01-preview.json is entirely synthetic. It is fixtureOnly and pending. Its output says so and formal mode must reject it. It is not a game fact, a source acquisition, a public-source privacy approval, or an approved release.

## Generation

Run npm test for focused unit coverage, then npm run content:preview. The compiler writes immutable content-addressed output beneath dist-w01/source/<sourceRevision>, plus a deterministic receipt. It does not write the production dist directory. npm run content:formal is expected to fail for the W01 fixture.

Generated files are technical.json, analysis.md, game-changes.json, game-changes.md, and source-manifest.json. The sourceRevision hashes canonical technical authoring; the manifest lists generated artifact hashes; the receipt records the manifest hash. Data revisions do not imply official game changes: gameChanges must be authored explicitly with the same changeId.

## Boundaries and remaining work

This subset deliberately omits complete source/tool provenance, cross-release compatibility and tombstone/alias rules, attack-profile/damage-profile/armor-class/target-profile and modifier-rule registries, the full context vocabulary, and complete armor data. W02 must formalize those fields against v17-A before this becomes the complete schema. The W01 compiler and schema reject undeclared public keys for the included technical subset, but they are not a complete formal schema. After public-source and sanitizer checks, a real candidate may appear in a public PR while still pending; that does not approve its content. A human review receipt bound to the exact sanitized content and dependency closure is required before a formal shared release. Key allowlisting cannot prove that values are safe. Keep private raw exports and proof outside this public repository.
## Public composition request

After npm run content:preview, run npm run content:request from a clean authoring/schema state on the pinned public Source remote. It writes an immutable request beneath dist-w01/requests/<sourceRevision>-<commit>.json containing only the public Source repository, full Git commit, sourceRevision, and source-manifest SHA-256. It records no raw source, private proof, or credentials. Re-running the same build produces the same request bytes.

DarkTide-Web consumes that request by checking the exact Source remote and HEAD commit, then verifying the generated manifest and artifact hashes before updating source.lock.json and the candidate artifacts. Replaying the same request uses the same W01 candidate branch and composition receipt. An open PR on that branch is reused; the executor does not create another PR if a prior one was closed. Fixture requests remain pending and cannot authorize a formal release.
