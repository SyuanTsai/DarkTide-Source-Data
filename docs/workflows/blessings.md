# Blessing record authoring

## Blessing variants and evidence

Use the current Source authoring schema and W08 compiler for blessing mechanics and variant facts. Keep a blessing record separate from its variants. A variant records only the exact `blessingRef`, `weaponRefs`, `definedTiers`, `obtainableTiers`, and tier values supported by the pinned source. `definedTiers` describes authored tier data; it does not prove that a tier is obtainable. Preserve an empty or unknown weapon applicability list as such; do not infer a family, mark, or chainaxe binding from nearby text or a single candidate row.

## Values and review

Preserve source values, units, tier-specific descriptions, and references without calculating missing values. Resolve dependencies through the existing registries and attach review receipts only through the existing digest-bound workflow. A changed variant or dependency requires a fresh review of the affected target. The compiler checks receipts; it does not approve content.

## Ownership

This workflow covers Source-owned mechanics and applicability facts. DarkTide-Web owns player-facing blessing wording, errata, and localized term labels. Do not copy Web presentation text into Source records or claim an applicability relationship that Source does not encode.

Historical prompt source: [Blessings-Workflow.md](https://github.com/SyuanTsai/Warhammer-40-000-DARKTIDE-Mods/blob/241ad76ce62330472aa423055a5b85db59bb6c0d/AI%20Prompt/Blessings-Workflow.md).
