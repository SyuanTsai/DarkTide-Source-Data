# Souldrinker: source evidence

[繁體中文](../psyker_killing_enemy_with_warpfire_boosts.md) | [Player description](README.md#psyker_killing_enemy_with_warpfire_boosts) | [Technical index](SOURCE_INDEX.md) | [English comparison](LOCALIZATION_COMPARISON.md#psyker_killing_enemy_with_warpfire_boosts)

Release 1.13.1; fixed SHA `7e662fcda16219d775b84af50322be2e9cd9d62e`. Talent `psyker_killing_enemy_with_warpfire_boosts`; name key `loc_talent_psyker_nearby_soulblaze_reduced_damage`; description key `loc_talent_psyker_killing_enemy_with_warpfire_boosts_duration_desc`. Node `node_4315ba13-1c64-4293-981d-9bd75a1c6612`; category Talent; one point. Mechanisms and examples reuse verified source evidence; no in-game test was performed.

## Source-confirmed behavior and static derivation

- `on_minion_death` checks the `warpfire_burning` marker at death without requiring its owner to be you; its fallback checks your own `warpfire` kill. The death manager sends the event to `valid_enemy_player_units` without a radius check. The buff lasts 5 seconds, has a maximum of one stack and refreshes; its update restores a fixed 0.15 × `dt` ÷ 5 fraction of maximum Toughness.

## Fixed source evidence

- [scripts/settings/buff/archetype_buff_templates/psyker_buff_templates.lua — L3303-L3356](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/psyker_buff_templates.lua#L3303-L3356)
- [scripts/managers/minion/minion_death_manager.lua — L374-L398](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/managers/minion/minion_death_manager.lua#L374-L398)
- [scripts/extension_systems/toughness/player_unit_toughness_extension.lua — L253-L285](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/toughness/player_unit_toughness_extension.lua#L253-L285)
- [scripts/settings/ability/archetype_talents/talents/psyker_talents.lua — L2325-L2367](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/psyker_talents.lua#L2325-L2367)
- [scripts/ui/views/talent_builder_view/layouts/psyker_tree.lua — L1789-L1815](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/ui/views/talent_builder_view/layouts/psyker_tree.lua#L1789-L1815)

## Example assumptions and limits

- **Trigger**: When an enemy affected by Soulblaze dies, or you kill an enemy with Soulblaze, restore 15% of maximum Toughness over 5 seconds and gain 5 percentage points of Critical Hit Chance.

- **Refresh**: Another trigger resets the 5-second duration. The restoration rate and Critical Hit Chance bonus do not stack.

- **Restoration and chance example**: With 100 maximum Toughness, enough missing Toughness and no other modifiers, restore 100 × 15% ÷ 5 = 3 points per second. An initial 10% Critical Hit Chance becomes 10% + 5% = 15%.

The wording “Killing an Enemy with Soulblaze” leaves the relationship between Soulblaze and the killing blow ambiguous; this is recorded as a wording question, without an English erratum. Mechanisms reuse the fixed-version evidence, with local Build 25606770 English text corresponding to 1.13.1. Actual presentation and behavior remain unobserved in game. Missing details are supplementary explanations.

<a id="original-english-template-and-reconstruction"></a>

## Original English template and reconstruction

Steam Build `25606770`; `content/localization/ui`, resource hash `63564edcb7c3c5ee`; language `en` (code `0`).

- Name key `loc_talent_psyker_nearby_soulblaze_reduced_damage`, hash `fce15218`, entry 16431: **Souldrinker**.
- Description key `loc_talent_psyker_killing_enemy_with_warpfire_boosts_duration_desc`, hash `3db8d226`, entry 4027.

Full raw template:

~~~text
Killing an Enemy with Soulblaze restores {toughness:%s} Toughness over {duration:%s}s and grants {crit_chance:%s} Critical Hit Chance for the duration.
~~~

| Placeholder | Value | Formatting |
|---|---|---|
| `toughness` | 0.15 | Percentage ×100: 15%. |
| `duration` | 5 | Number: 5. |
| `crit_chance` | 0.05 | Percentage ×100: 5%. |

Display mapping: [psyker_talents.lua L2330-L2363](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/psyker_talents.lua#L2330-L2363). The buff lookups reuse the verified restoration, duration and Critical Hit Chance values.

Static reconstruction; not an observed game screen:

~~~text
Killing an Enemy with Soulblaze restores 15% Toughness over 5s and grants 5% Critical Hit Chance for the duration.
~~~

## English comparison

The restoration, duration and Critical Hit Chance match the accepted evidence. “Killing an Enemy with Soulblaze” can describe either a Soulblaze killing blow or killing an enemy bearing Soulblaze; the English alone does not resolve that distinction. Ownership, range and refresh behavior are supplementary details.

## Icon source

[Original image](https://gameslantern.com/storage/sites/darktide/exporter/talents/psyker/default/psyker_killing_enemy_with_warpfire_boosts.webp) | [Media-Assets Issue](https://github.com/SyuanTsai/Media-Assets/issues/7#issuecomment-5928034845) | [Existing attachment](https://github.com/user-attachments/assets/444fd0d1-2a66-48f9-b841-f7bf1bcc6ccf). The icon identifies the talent; it is not mechanism evidence.
