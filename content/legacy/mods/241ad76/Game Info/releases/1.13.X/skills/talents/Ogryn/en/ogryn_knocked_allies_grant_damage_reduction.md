# Won't Give In: source evidence

[繁體中文](../ogryn_knocked_allies_grant_damage_reduction.md) | [Player description](README.md#ogryn_knocked_allies_grant_damage_reduction) | [Technical index](SOURCE_INDEX.md) | [English comparison](LOCALIZATION_COMPARISON.md#ogryn_knocked_allies_grant_damage_reduction)

Release 1.13.1; fixed SHA `7e662fcda16219d775b84af50322be2e9cd9d62e`. Talent `ogryn_knocked_allies_grant_damage_reduction`; name key `loc_talent_ogryn_tanky_with_downed_allies`; description key `loc_talent_ogryn_tanky_with_downed_allies_desc`. Node `node_361c0f03-d3f0-47a9-8669-2f71f6c2b5a1`; category Talent; one point. Mechanisms and examples reuse verified source evidence; no in-game test was performed.

## Source-confirmed behavior and static derivation

- Every 0.1s, checks other `valid_player_units`. Their squared distance must be strictly less than `20²`, and `PlayerUnitStatus.requires_help` must be true.
- With `lerp_t = count / 3`, `damage_taken_multiplier` interpolates from 1 to 0.4. A standard four-player team can contribute at most three allies.

## Fixed source evidence

- [scripts/settings/buff/archetype_buff_templates/ogryn_buff_templates.lua — L1571-L1643](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/ogryn_buff_templates.lua#L1571-L1643)
- [scripts/settings/talent/talent_settings_ogryn.lua — L355-L359](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/talent/talent_settings_ogryn.lua#L355-L359)
- [scripts/utilities/attack/player_unit_status.lua — L23-L33](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/attack/player_unit_status.lua#L23-L33)
- [scripts/utilities/attack/player_unit_status.lua — L102-L106](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/attack/player_unit_status.lua#L102-L106)
- [scripts/utilities/attack/damage_calculation.lua — L587-L612](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/attack/damage_calculation.lua#L587-L612)
- [scripts/settings/ability/archetype_talents/talents/ogryn_talents.lua — L862-L882](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/ogryn_talents.lua#L862-L882)
- [scripts/ui/views/talent_builder_view/layouts/ogryn_tree.lua — L600-L624](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/ui/views/talent_builder_view/layouts/ogryn_tree.lua#L600-L624)

## Example assumptions and limits

- **Condition**: Each ally less than 20m away who needs help, such as while downed, disabled or hanging from a ledge, reduces the damage you take by 20%. That ally's contribution disappears when rescued or out of range.

- **Damage-reduction example**: With 1, 2 or 3 qualifying allies, damage of 100 at this stage becomes 80, 60 or 40. Three allies give `100 × (1 − 3 × 20%) = 40`.

Mechanisms reuse the fixed-version evidence, with local Build 25606770 English text corresponding to 1.13.1. Actual presentation and behavior remain unobserved in game. Missing details are supplementary explanations.

<a id="original-english-template-and-reconstruction"></a>

## Original English template and reconstruction

Steam Build `25606770`; `content/localization/ui`, resource hash `63564edcb7c3c5ee`; language `en` (code `0`).

- Name key `loc_talent_ogryn_tanky_with_downed_allies`, hash `229fa257`, entry 2252: **Won't Give In**.
- Description key `loc_talent_ogryn_tanky_with_downed_allies_desc`, hash `3845cefa`, entry 3647.

Full raw template:

~~~text
{damage_taken:%s} Damage Reduction for each Knocked Down or Incapacitated Ally within {range:%s} metres.
~~~

| Placeholder | Value | Formatting |
|---|---|---|
| damage_taken | (1 − defensive_2.max) / 3 = (1 − 0.4) / 3 = 0.2 | Percentage with explicit + prefix → +20% |
| range | defensive_2.distance = 20 | Number → 20 |

Only the missing display mapping in the cited talent definition, lines 862–882, was read. Accepted values, mechanisms and common formatting were reused.

Static reconstruction; not an observed game screen:

~~~text
+20% Damage Reduction for each Knocked Down or Incapacitated Ally within 20 metres.
~~~

## English comparison

The independently read English grants +20% damage reduction per knocked-down or incapacitated ally within 20m. This matches the accepted per-ally reduction and range. The broader requires_help status details, strict distance boundary, 0.1s updates, three-ally standard-team limit and linear calculation supplement the text. No explicit English contradiction is established.

## Icon source

[Original image](https://gameslantern.com/storage/sites/darktide/exporter/talents/ogryn/default/ogryn_knocked_allies_grant_damage_reduction.webp) | [Media-Assets Issue](https://github.com/SyuanTsai/Media-Assets/issues/10#issuecomment-5931394406) | [Existing attachment](https://github.com/user-attachments/assets/58952102-1822-4093-81f9-48b8cbc8f8a7). The icon identifies the talent; it is not mechanism evidence.
