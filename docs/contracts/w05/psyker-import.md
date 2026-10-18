# Psyker W05 import

This is a pending, source-technical v2 candidate generated from the fixed W01 representative input. It is a scoped import for pipeline validation, not a published or fully build-verified game record.

## Projection and identity

The mapper projects the Psyker skill's complete W01 closure from the 125-record input: one skill, four claims, one term, and nine original evidence records. It adds one provenance evidence record and one release-compatibility record, producing 17 records in total. Stable record IDs, claim values, units, contexts, basis text, negation, evidence links, and source-reference occurrence order are retained.

The skill `nameKey` is the actual game localization key `loc_talent_psyker_brain_burst_improved`. It is the `display_name` value for `psyker_brain_burst_improved` in the pinned current code file `scripts/settings/ability/archetype_talents/talents/psyker_talents.lua`, lines 231–239, at commit `ba6c148f3c2768ca3ce20d846a12e56e2f433f3e`. The machine-readable identity mapping is in `psyker-import.json` under `skillIdentity`.

## Source and release scope

The six English legacy-analysis evidence records remain scoped to release 1.13.1 and continue to cite the byte-exact archived English artifact. Their record-level code-source occurrences are preserved in input order and mapped to the corresponding source IDs at historical code commit `7e662fcda16219d775b84af50322be2e9cd9d62e`. The current 1.13.2 claim and code evidence references retain their `ba6c148f3c2768ca3ce20d846a12e56e2f433f3e` source IDs. Claims that cross-reference historical evidence carry the explicit compatibility reference.

The compatibility assertion is limited to the 15 unique code files cited by the archived English analysis (28 citation locations). Their Git blob IDs match between the pinned 1.13.1 and 1.13.2 code snapshots. This establishes no whole-repository, full-game, Steam-build, or runtime equivalence. The English and zh-TW archived files remain raw-byte verified at Mods commit `241ad76ce62330472aa423055a5b85db59bb6c0d`; only the English archive is used by these claims.

The candidate has 32 source metadata entries: 15 historical code refs, 15 current code refs, the English archive, and the scoped provenance artifact. These release-specific IDs preserve source commit meaning; historical IDs are not rewritten to point at the current code commit.

The 1.13.1 and 1.13.2 releases and all candidate sources use the explicit quarantine marker `gameBuild: "UNVERIFIED"`. The exact Steam build mapping has not been established. The candidate is `publicationEligible: false`, has no review receipts, and must remain pending. A formal publication gate must reject `UNVERIFIED` even if review receipts are later present.

## Reproducibility pins

The mapper checks the normalized Git LF bytes of W01 and its provenance JSON, so LF and CRLF checkouts rebuild the same values without changing either file. The archived Markdown files are checked as raw bytes and are never EOL-normalized.

| Artifact | Pin or digest |
| --- | --- |
| Source Data input commit | `67a175213c5222eb389672cc46aff9f93aed0f73` |
| W01 input SHA-256 (Git LF bytes) | `5201134d9913af3e89b437046bb6cfdd96bac92ab1c49a86e296d3051abf77bf` |
| Legacy provenance SHA-256 (Git LF bytes) | `f1b1cbcb70ae8df1d9e2f33b270d98edd3a1d99951e011a271d4f09df9ea3286` |
| English archive SHA-256 / size | `0865a4c7c71e2fc21ed2c1c8d19c87e5cfbea3523a7ae957684ba5ce7d420403` / 18,196 bytes |
| zh-TW archive SHA-256 / size | `cedc22b9acc3f69d0ef1906ce254b60ad5782d42699b636c2348ca80841acbef` / 14,563 bytes |
| Selected 15-file manifest SHA-256 | `28bcb2490b628da9506e0face79266ec8714e919789b9cdb4ee471098f709e38` |
| Selected 15-file content SHA-256 | `7124405ac4d524ee52d99fe936fb7b62bb9bc78a457648401f92be8964734052` |
| Mapper SHA-256 (normalized LF bytes) | `3102c900f0eb2a9416f41970ad6d83a076aa856710c64648bbbf6dd2da88bf5f` |

`psyker-import.json` contains per-file Git blob IDs, exact raw-object byte counts and SHA-256 digests; the complete original-to-current/historical source-ID mappings; and each selected record's original source-reference sequence. These artifact digests are derived from raw Git object bytes, excluding checkout EOL conversion. The older Source Data provenance still records the matching cited-file Git blob IDs, but its byte counts and artifact SHA-256 values came from a CRLF checkout representation; the manifest marks that limitation and supersedes those particular values with the raw Git digests. Archive source metadata points to the pinned public Source Data mirror and preserves the original public Mods pin in the manifest. Non-code source records omit inapplicable code-repository commit/path fields.

## Rebuild and validation

Run from the Source Data repository root with Node.js:

```powershell
node scripts/content/contract-w05-psyker.mjs --write
node --test tests/contract-w05-psyker.test.mjs
```

The mapper reads only the fixed Source Data W01 input, archive, and safe provenance file; it does not require a Mods or code-repository checkout. It checks code blob identities against the pinned provenance, while raw code byte counts and SHA-256 values are frozen from the pinned Git object audit and locked by a 15-row test fixture plus manifest/content aggregates. It writes `content/authoring/v2/w05-psyker.json` and this import manifest. The tests cover the fixed closure and semantic/source lineage, raw Git metadata fixture, the repository's real v2 validator, changed-input rejection, equivalent LF/CRLF regeneration, and refusal to overwrite changed output files. At W05 validation, all five tests pass and the v2 validator accepts the pending candidate while deriving `publicationEligible: false`.

Before writing, the CLI checks both output paths. It creates missing files, treats identical existing bytes as an idempotent success, and refuses if either existing file differs; this prevents a changed candidate or manifest from being overwritten or partially replaced. There is no implicit force option.
