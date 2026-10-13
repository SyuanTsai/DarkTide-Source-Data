# W01 pending Source candidates

Status: **pending human review**. These are preview-only technical candidates; they are not approved for publication.

## Psyker parameter candidate

At the pinned public source commit, the `psyker_brain_burst_improved` buff template assigns decimal literal 1.5 to `stat_buffs.smite_damage_multiplier`. The four-record candidate records this as a code-observed parameter value with ratio units.

This claim covers only the source parameter. It does not establish a final damage multiplier, runtime application, a calculated combat result, or an official game change. The candidate includes no game-change records. It also does not establish that a separate Steam build contains the same source revision.

- [Psyker talent definition at the pinned commit](https://github.com/Aussiemon/Darktide-Source-Code/blob/ba6c148f3c2768ca3ce20d846a12e56e2f433f3e/scripts/settings/ability/archetype_talents/talents/psyker_talents.lua#L231-L263) connects the brain-burst-improved description to its buff template.
- [Psyker buff-template assignment at the pinned commit](https://github.com/Aussiemon/Darktide-Source-Code/blob/ba6c148f3c2768ca3ce20d846a12e56e2f433f3e/scripts/settings/buff/archetype_buff_templates/psyker_buff_templates.lua#L528-L534) contains the `smite_damage_multiplier` assignment.
- [Talent layout parser](https://github.com/Aussiemon/Darktide-Source-Code/blob/ba6c148f3c2768ca3ce20d846a12e56e2f433f3e/scripts/ui/views/talent_builder_view/utilities/talent_layout_parser.lua#L379-L403) applies the configured value manipulation, and [its format rendering](https://github.com/Aussiemon/Darktide-Source-Code/blob/ba6c148f3c2768ca3ce20d846a12e56e2f433f3e/scripts/ui/views/talent_builder_view/utilities/talent_layout_parser.lua#L629-L635) applies the configured prefix. Together, the pinned talent definition's `(value - 1) * 100` binding and source parameter 1.5 yield a **code-derived description-format value of 50 percent**. This is only a displayed parameter binding; it does not claim final damage or confirm that a Steam build or localized official description matches this code snapshot.

The authoring record pins both files to commit `ba6c148f3c2768ca3ce20d846a12e56e2f433f3e`. The candidate gameVersion is the code release label 1.13.2; it does not claim a private build-to-commit match.

## Chainaxe representative candidate

The separate 17-record representative candidate uses the same pending review gate and compiler. Its scope is limited to public source literals at commit `ba6c148f3c2768ca3ce20d846a12e56e2f433f3e`:

- [P1 chainaxe trait definitions](https://github.com/Aussiemon/Darktide-Source-Code/blob/ba6c148f3c2768ca3ce20d846a12e56e2f433f3e/scripts/settings/equipment/weapon_traits/weapon_traits_bespoke_chainaxe_p1.lua#L92-L145) define the movement-speed-on-activation tiers as 0.17, 0.18, 0.19, and 0.2. The selected entries each bind `active_duration = 2` ([lines 119–143](https://github.com/Aussiemon/Darktide-Source-Code/blob/ba6c148f3c2768ca3ce20d846a12e56e2f433f3e/scripts/settings/equipment/weapon_traits/weapon_traits_bespoke_chainaxe_p1.lua#L119-L143)). The duration claim covers this template parameter only; it does not state that an in-game effect was tested for two seconds.
- [Trait value parser](https://github.com/Aussiemon/Darktide-Source-Code/blob/ba6c148f3c2768ca3ce20d846a12e56e2f433f3e/scripts/utilities/trait_value_parser.lua#L8-L20) applies custom value manipulation or default percentage scaling, and [its format rendering](https://github.com/Aussiemon/Darktide-Source-Code/blob/ba6c148f3c2768ca3ce20d846a12e56e2f433f3e/scripts/utilities/trait_value_parser.lua#L99-L105) applies the configured prefix. For the selected defined tier 1 value 0.17, this supports a **code-derived description-format value of 17 percent**. The candidate does not say tier 1 is obtainable, default, or highest, and does not claim a tested runtime movement result or Steam/localized-description match.
- [The `chainaxe_p1_m1` weapon template](https://github.com/Aussiemon/Darktide-Source-Code/blob/ba6c148f3c2768ca3ce20d846a12e56e2f433f3e/scripts/settings/equipment/weapon_templates/chain_axes/chainaxe_p1_m1.lua#L2072-L2076) appends the P1 trait definitions. The candidate records `familyId=chainaxe_p1`, `markId=chainaxe_p1_m1`, and `templateKey=chainaxe_p1_m1`; it makes no display-name inference.
- [The default-light chainaxe profile](https://github.com/Aussiemon/Darktide-Source-Code/blob/ba6c148f3c2768ca3ce20d846a12e56e2f433f3e/scripts/settings/equipment/weapon_templates/chain_axes/settings_templates/chain_axe_damage_profile_templates.lua#L159-L198) contains raw attack-power table endpoints `[80, 140]` and an armored-parameter alias.
- [The referenced damage-profile table](https://github.com/Aussiemon/Darktide-Source-Code/blob/ba6c148f3c2768ca3ce20d846a12e56e2f433f3e/scripts/settings/damage/damage_profile_settings.lua#L32-L35) defines `lerp_1_5` as `[1.035, 1.965]`. The suffix is a table name; the stored values are those two raw endpoints, not a scalar 1.5.

The stat curves retain only the raw table positions 1 and 2 with the source values. Those positions are table ordinals, not weapon rating. Interpolation and edge behavior remain `NOT_VERIFIED`; no interpolation, damage calculation, or final action damage is claimed. The weapon data coverage marks action/profile override resolution `NOT_IMPORTED`, so these parent template parameters are not represented as a resolved runtime attack. The four tier definitions are code-defined; obtainable tiers remain `NOT_VERIFIED`.

The representative candidate's 17 records are all pending, with no review receipts or game changes and `publicationEligible=false`. Formal compilation must reject both non-fixture candidates until their content has human review receipts bound to the exact reviewed content and dependency closure. The pinned code release label is 1.13.2; the candidate does not claim that a private Steam build matches this source commit.

## Generated preview

The Source CI workflow builds the default synthetic fixture and both candidates through the same compiler. Download the `syp-311-w01-source-preview` artifact from a workflow run to inspect each `dist-w01/source/<sourceRevision>/` directory, including `analysis.md`, `game-changes.md`, `technical.json`, `game-changes.json`, `source-manifest.json`, and `receipt.json`. These generated files are review materials, not approval or a formal release.

Generating a composition request requires a clean Source working tree. The request pins the commit alongside the preview revision and manifest digest, so tracked or untracked Source changes must be committed before the public pin is written. Ignored `dist-w01` preview output is allowed.
