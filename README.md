# DarkTide Source Data

This public repository stores sanitized, source-backed technical data authoring, validation contracts, and generated technical analysis for Warhammer 40,000: Darktide.

## Ownership

- This repository owns stable game-data identities, technical claims, numeric and conditional data, safe evidence summaries, technical reviews, and game-content change records.
- DarkTide-Web owns Traditional Chinese presentation, faithful official-text excerpts, errata wording, announcements, and the shared player-facing release.
- The browser extension owns local site matching, DOM integration, rendering, loading, and packaging. It consumes the same shared data release as the website.

## Public boundary

Do not commit private raw exports, complete source archives, private proof, credentials, or proprietary game source code. Public claims must use reviewable source references and must distinguish observed facts, derived facts, and unknowns. Generated documentation and release files are derived outputs, not authoring sources.

W01 examples marked `fixtureOnly` and `pending` are synthetic contract fixtures. They are not approved game facts and cannot enter a formal release. This repository does not provide damage calculations, a calculator, or MOD impact assessments.

## Generic blessing import

The generic blessing importer reads a pinned public Darktide source clone with Git plumbing and parses Lua statically; it does not check out or execute game code and adds no runtime dependency.
Its candidate contains only newly generated pending records and provenance. The importer validates cross-record references against an in-memory merge with the existing authoring bundle; it does not copy approved authoring records into the candidate.

```powershell
$env:DARKTIDE_SOURCE_CODE_REPO = 'C:\src\Darktide-Source-Code'
node scripts/content/imports/generic-blessings.mjs `
  --source-code-repo $env:DARKTIDE_SOURCE_CODE_REPO `
  --commit e46b8926cfa3fa35503e4b80b15aab7a804314e4 `
  --output-dir content/imports/generic
```

Integration tests use that local path by default. Set `DARKTIDE_SOURCE_CODE_REPO` to another clone containing the pinned commit; tests skip with an explanatory message when the clone or commit is unavailable.
