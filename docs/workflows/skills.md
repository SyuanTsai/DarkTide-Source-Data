# Skill record authoring

## Skill record authoring

Use the current Source authoring schema and W08 compiler for Source-owned skill facts. Record the stable skill identity, game release, claims, typed values, contexts, source snapshots, and evidence references supported by the exact input. Do not infer mechanics from a display name, presentation text, or an unverified source excerpt. Keep an unknown value explicit rather than filling it from an older release.

### Dependencies and review

Resolve every reference through the existing schema and compiler. A Source review receipt is valid only for the exact target digest and dependency digest; changing a referenced record or source snapshot makes the existing receipt stale. The compiler validates this binding but does not create a reviewer decision. Synthetic fixtures remain test-only and cannot be used for a formal candidate.

### Ownership

This workflow covers technical skill facts only. DarkTide-Web owns localized descriptions, errata, and player-facing terminology. A Source skill record does not authorize a matching Web presentation or an Extension DOM match.

## Evidence, validation, and preview

For each skill change, pin the Source commit and game build, trace the skill identity through its actual talent/ability definitions and referenced effects, and record only values, conditions, and dependencies supported by that source. Compare an earlier release only when the requested scope names one. Keep source locators and evidence references with the typed claim; keep player-facing translation and errata in Web.

Use the shared [Source content workflow](content.md#generation) for commands: `npm run content:contract:validate`, `npm test`, and `npm run content:preview -- --input <allowlisted-W01-file>`. The preview and `content:request` flow accepts only the three W01 inputs listed there; it is not a general importer for every historical prompt or an approval receipt. Formal release uses the existing W08/W09 owner flow after digest-bound human review.

The historical Skill-Info prompt's direct Mods Markdown, AI-LOGS page generation, and per-skill commit procedures are not current publication instructions. Retain its source-code analysis, version pinning, claim/evidence, and review discipline in the Source schema and compiler; use the shared Web renderer for localized player pages.

Historical prompt source: [Skill-Info-Workflow.md](https://github.com/SyuanTsai/Warhammer-40-000-DARKTIDE-Mods/blob/241ad76ce62330472aa423055a5b85db59bb6c0d/AI%20Prompt/Skill-Info-Workflow.md).
