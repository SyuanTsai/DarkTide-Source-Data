# Skill record authoring

## Skill record authoring

Use the current Source authoring schema and W08 compiler for Source-owned skill facts. Record the stable skill identity, game release, claims, typed values, contexts, source snapshots, and evidence references supported by the exact input. Do not infer mechanics from a display name, presentation text, or an unverified source excerpt. Keep an unknown value explicit rather than filling it from an older release.

### Dependencies and review

Resolve every reference through the existing schema and compiler. A Source review receipt is valid only for the exact target digest and dependency digest; changing a referenced record or source snapshot makes the existing receipt stale. The compiler validates this binding but does not create a reviewer decision. Synthetic fixtures remain test-only and cannot be used for a formal candidate.

### Ownership

This workflow covers technical skill facts only. DarkTide-Web owns localized descriptions, errata, and player-facing terminology. A Source skill record does not authorize a matching Web presentation or an Extension DOM match.

Historical prompt source: [Skill-Info-Workflow.md](https://github.com/SyuanTsai/Warhammer-40-000-DARKTIDE-Mods/blob/241ad76ce62330472aa423055a5b85db59bb6c0d/AI%20Prompt/Skill-Info-Workflow.md).
