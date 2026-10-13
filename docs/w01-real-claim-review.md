# W01 Psyker parameter candidate

Status: **pending human review**. This is a preview-only technical candidate; it is not approved for publication.

## Claim scope

At the pinned public source commit, the psyker_brain_burst_improved buff template assigns the decimal literal 1.5 to stat_buffs.smite_damage_multiplier. The candidate records this as a code-observed parameter value with ratio units.

This claim covers only the source parameter. It does not establish a final damage multiplier, runtime application, a calculated combat result, or an official game change. The candidate includes no game-change records. It also does not establish that a separate Steam build contains the same source revision.

## Public evidence

- [Psyker talent definition at the pinned commit](https://github.com/Aussiemon/Darktide-Source-Code/blob/ba6c148f3c2768ca3ce20d846a12e56e2f433f3e/scripts/settings/ability/archetype_talents/talents/psyker_talents.lua#L231-L263) connects the brain-burst-improved description to its buff template.
- [Psyker buff-template assignment at the pinned commit](https://github.com/Aussiemon/Darktide-Source-Code/blob/ba6c148f3c2768ca3ce20d846a12e56e2f433f3e/scripts/settings/buff/archetype_buff_templates/psyker_buff_templates.lua#L528-L534) contains the smite_damage_multiplier assignment.

The authoring record pins both files to commit ba6c148f3c2768ca3ce20d846a12e56e2f433f3e. The candidate gameVersion is the code release label 1.13.2; it does not claim a private build-to-commit match.

## Review gate and generated preview

The candidate contains four pending Source records, no review receipts, no game changes, and publicationEligible=false. Formal compilation must reject it. A generated preview and its manifest are review materials; they are not human approval.

The Source CI workflow builds the default synthetic fixture and this candidate through the same compiler. Download the syp-311-w01-source-preview artifact from the workflow run to inspect each dist-w01/source/<sourceRevision>/ directory, including analysis.md, game-changes.md, technical.json, game-changes.json, source-manifest.json, and receipt.json.
