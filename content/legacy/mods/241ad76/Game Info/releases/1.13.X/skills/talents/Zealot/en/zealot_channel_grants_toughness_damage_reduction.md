# Holy Cause: source evidence

[繁體中文](../zealot_channel_grants_toughness_damage_reduction.md) | [Player description](README.md#zealot_channel_grants_toughness_damage_reduction) | [Technical index](SOURCE_INDEX.md) | [English comparison](LOCALIZATION_COMPARISON.md#zealot_channel_grants_toughness_damage_reduction)

Release 1.13.1; fixed SHA `7e662fcda16219d775b84af50322be2e9cd9d62e`. Talent `zealot_channel_grants_toughness_damage_reduction`; name key `loc_talent_zealot_zealot_channel_grants_defensive_buff`; description key `loc_talent_zealot_zealot_channel_defensive_desc `. Node `node_72c78ca8-a422-429a-90cf-b85d0b36aa19`; category Ability; one point. Mechanisms and examples reuse verified source evidence; no in-game test was performed.

## Source-confirmed behavior and static derivation

- The node marks the ability with `special_rules.zealot_channel_grants_defensive_buff`. Every tick, `action_zealot_channel` adds one stack of `zealot_channel_toughness_damage_reduction` to `in_coherence_units`. This includes the caster, since the Chorus Coherency set contains self.
- The defensive Buff is a `stepped_stat_buff`, with `duration = 10` and Chorus `max_stacks = 5`. Its `toughness_damage_taken_multiplier` is calculated as `1 − 0.08 × stacks`. This changes Toughness damage taken only, not Health resistance or general damage resistance.
- Chorus ticks immediately, then every **0.8 seconds** during an action of about **3.6667 seconds**: approximately **0/0.8/1.6/2.4/3.2 seconds**. `refresh_duration_on_stack = true` resets the same effect's timer and adds stacks on each pulse, up to **5**.

## Fixed source evidence

- [scripts/settings/ability/archetype_talents/talents/zealot_talents.lua — L725-L778](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/zealot_talents.lua#L725-L778)
- [scripts/settings/talent/talent_settings_zealot.lua — L271-L275](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/talent/talent_settings_zealot.lua#L271-L275)
- [scripts/settings/talent/talent_settings_zealot.lua — L539-L547](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/talent/talent_settings_zealot.lua#L539-L547)
- [scripts/settings/buff/archetype_buff_templates/zealot_buff_templates.lua — L97-L130](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/zealot_buff_templates.lua#L97-L130)
- [scripts/extension_systems/weapon/actions/action_zealot_channel.lua — L44-L65](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/weapon/actions/action_zealot_channel.lua#L44-L65)
- [scripts/extension_systems/weapon/actions/action_zealot_channel.lua — L132-L163](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/weapon/actions/action_zealot_channel.lua#L132-L163)
- [scripts/settings/equipment/weapon_templates/combat_abilities/zealot_relic.lua — L112-L132](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/combat_abilities/zealot_relic.lua#L112-L132)
- [scripts/utilities/attack/damage_taken_calculation.lua — L223-L258](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/attack/damage_taken_calculation.lua#L223-L258)
- [scripts/settings/ability/archetype_talents/talents/zealot_talents.lua — L725-L778](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/zealot_talents.lua#L725-L778)
- [scripts/ui/views/talent_builder_view/layouts/zealot_tree.lua — L627-L650](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/ui/views/talent_builder_view/layouts/zealot_tree.lua#L627-L650)

## Example assumptions and limits

- **Operation**: Each Chorus of Spiritual Fortitude pulse gives you and Coherency allies **1 stack** of Toughness damage reduction: **8% per stack**, up to **5 stacks / 40%**.
- **Duration**: Lasts **10 seconds**; further pulses refresh the timer. Early interruption may prevent reaching 5 stacks.
- **Reduction example**: At full stacks, **100** Toughness damage becomes `100 × (1 − 5 × 8%) = 60`. With an independent **25%** Toughness reduction, `100 × 0.6 × 0.75 = 45`. This does not directly reduce Health damage.

- This is a Toughness damage multiplier, not Health damage reduction; it does not mean every `damage_taken_multiplier` calculation stage benefits.
- Leaving Coherency, Buff removal or limits imposed by other systems may produce fewer stacks or less reduction than the theoretical maximum.
- The original candidate description key contains duplicate **`zealot`** and a **trailing space**: `loc_talent_zealot_zealot_channel_defensive_desc `. It does not exactly match the local ui batch. Do not use a similar key as if it were an exact match.
- The existing inventory has an empty paired description. The ability special rule, pulse application and accepted Buff values establish the mechanism, but the candidate key does not establish exact description wording.
- Actual game wording and presentation remain unconfirmed; there is no basis for an English or Chinese description erratum.

Mechanisms reuse the fixed-version evidence, with local Build 25606770 English text corresponding to 1.13.1. Actual presentation and behavior remain unobserved in game. Missing details are supplementary explanations.

<a id="original-english-template-and-reconstruction"></a>

## Original English name and unavailable description

Steam Build `25606770`; `content/localization/ui`, resource hash `63564edcb7c3c5ee`; language `en` (code `0`).

- Name key `loc_talent_zealot_zealot_channel_grants_defensive_buff`, hash `6a8b51aa`, entry 6940: **Holy Cause**.
- Candidate description key (trailing space preserved): `loc_talent_zealot_zealot_channel_defensive_desc `.
- No exact description entry or hash is available in the local ui batch. There is no paired raw template or display reconstruction. The name is exact; the description remains unavailable.

## English comparison

The same-build name **Holy Cause** is exactly paired, but the documented candidate description key, including its trailing space, has no exact ui match. Therefore the English description cannot be independently judged or reconstructed. Preserve this as **Cannot confirm**, while translating all accepted mechanisms and examples. No similar key or invented text is substituted.

## Icon source

[Original image](https://gameslantern.com/storage/sites/darktide/exporter/talents/zealot/ability_modifier/zealot_channel_grants_toughness_damage_reduction.webp) | [Media-Assets Issue](https://github.com/SyuanTsai/Media-Assets/issues/8#issuecomment-5929289315) | [Existing attachment](https://github.com/user-attachments/assets/1ca3f2a1-fbd3-41f7-83f3-895522b50b29). The icon identifies the talent; it is not mechanism evidence.
