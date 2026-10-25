# Quick Shards: source evidence

[繁體中文](../psyker_throwing_knives_cast_speed.md) | [Player description](README.md#psyker_throwing_knives_cast_speed) | [Technical index](SOURCE_INDEX.md) | [English comparison](LOCALIZATION_COMPARISON.md#psyker_throwing_knives_cast_speed)

Release 1.13.1; fixed SHA `7e662fcda16219d775b84af50322be2e9cd9d62e`. Talent `psyker_throwing_knives_cast_speed`; name key `loc_talent_psyker_throwing_knives_reduced_cooldown`; description key `loc_talent_psyker_throwing_knives_cast_speed_description`. Node `node_a0e99f21-5abe-407d-a328-c955e9cc27f2`; category Blitz; one point. Mechanisms and examples reuse verified source evidence; no in-game test was performed.

## Source-confirmed behavior and static derivation

- At the fixed source SHA, the passive for `psyker_throwing_knives_cast_speed` connects only to `psyker_reduced_throwing_knife_cooldown`. This persistent buff sets `grenade_ability_resource_regen_modifier=0.3`; the stat is an `additive_multiplier`, so its total multiplier is `1+0.3=1.3`.
- Each Assail use costs 3 resource and its base regeneration is 1 resource/second. Shared `PlayerUnitAbilityExtension` updates resource using `(base regen + flat regen) × regen modifier`. Thus recovery time per use is `3÷(1×1.3)=2.3077` seconds, about 23.08% shorter than the 3-second baseline.
- The format parameters `speed` / `stacks` / `duration` instead refer to `psyker_throwing_knife_stacking_speed_buff`. Although the source retains an `on_shoot_projectile` proc template with an 8-second duration, 5 stacks and 5% per stack, the current talent installs only the resource-regeneration buff. That proc template is not connected from the current tree node and is not Quick Shards' active effect.

## Fixed source evidence

- [scripts/ui/views/talent_builder_view/layouts/psyker_tree.lua — L639-L661](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/ui/views/talent_builder_view/layouts/psyker_tree.lua#L639-L661)
- [scripts/settings/ability/archetype_talents/talents/psyker_talents.lua — L738-L802](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/psyker_talents.lua#L738-L802)
- [scripts/settings/buff/archetype_buff_templates/psyker_buff_templates.lua — L535-L541](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/psyker_buff_templates.lua#L535-L541)
- [scripts/settings/buff/buff_settings.lua — L839-L839](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/buff_settings.lua#L839-L839)
- [scripts/settings/ability/player_abilities/abilities/psyker_abilities.lua — L132-L145](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/player_abilities/abilities/psyker_abilities.lua#L132-L145)
- [scripts/extension_systems/ability/player_unit_ability_extension.lua — L848-L863](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/ability/player_unit_ability_extension.lua#L848-L863)
- [scripts/settings/buff/archetype_buff_templates/psyker_buff_templates.lua — L2805-L2824](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/psyker_buff_templates.lua#L2805-L2824)
- [scripts/settings/ability/archetype_talents/talents/psyker_talents.lua — L738-L802](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/psyker_talents.lua#L738-L802)
- [scripts/ui/views/talent_builder_view/layouts/psyker_tree.lua — L639-L661](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/ui/views/talent_builder_view/layouts/psyker_tree.lua#L639-L661)

## Example assumptions and limits

- **How it works**: Assail's use-recovery rate increases by 30%.

- **Recovery example**: With only this talent, the original 3 seconds per use becomes 3 ÷ 1.3 ≈ 2.31 seconds. Refilling 10 uses from empty takes about 30 ÷ 1.3 ≈ 23.08 seconds. A 30% faster recovery rate does not mean a 30% shorter wait.

- Assume Assail costs 3 resource per use and regenerates a base 1 resource/second. Only Quick Shards applies, without other flat regeneration or effects that pause recovery. `3 ÷ (1 × 1.3) = 2.3077 seconds`; compared with `3 ÷ 1 = 3 seconds`, the wait decreases by `(3 − 2.3077) ÷ 3 ≈ 23.08%`. A 30% increased regeneration rate is not a 30% wait reduction.
- The 3 seconds is Assail's base resource-recovery time. Other resource-regeneration modifiers and recovery pauses affect actual times.
- A retained stacking-speed buff definition does not establish a current-node effect; this conclusion uses the node's actually installed passive.
- The fixed source SHA and local Build 25606770 correspond to 1.13.1. Mechanisms reuse the fixed-version evidence, with local Build 25606770 English text corresponding to 1.13.1. Actual presentation and behavior remain unobserved in game. Missing details are supplementary explanations.

<a id="original-english-template-and-reconstruction"></a>

## Original English template and reconstruction

Steam Build `25606770`; `content/localization/ui`, resource hash `63564edcb7c3c5ee`; language `en` (code `0`).

- Name key `loc_talent_psyker_throwing_knives_reduced_cooldown`, hash `55e1656b`, entry 5585: **Quick Shards**.
- Description key `loc_talent_psyker_throwing_knives_cast_speed_description`, hash `da103b93`, entry 14141.

Full raw template:

~~~text
{talent_name:%s} charges Replenish {recharge%s} faster.
~~~

| Placeholder | Value | Formatting |
|---|---|---|
| `talent_name` | `loc_ability_psyker_blitz_throwing_knives`; hash `9cd7d808` | Localized string → `Assail` |
| `recharge` (raw token `{recharge%s}`) | `grenade_ability_resource_regen_modifier=0.3`; `abs(0.3×100)=30` | Percentage, no prefix → `30%`; manually reconstructed token |

Only missing display fields at `psyker_talents.lua` L738–795 were read. `talent_name` localizes Assail; `recharge` finds the accepted regeneration modifier 0.3 and applies `abs(value×100)=30`, percentage without a sign prefix → `30%`. The raw English token is exactly `{recharge%s}`, without a colon. The reconstruction below manually substitutes the mapped value into that token; actual game formatting is unobserved. Unused `speed`/`stacks`/`duration` fields are not added to the displayed English.

Static reconstruction; not an observed game screen:

~~~text
Assail charges Replenish 30% faster.
~~~

## English comparison

Read independently, the English states that Assail charges replenish faster. The mapped value 30% agrees with the installed resource-regeneration modifier; it refers to use recovery rather than a stacking projectile-speed effect. The reciprocal-time examples, recovery limitations and inactive definitions are supplementary. The raw `{recharge%s}` token is preserved and manually filled for the static reconstruction; actual game rendering remains unconfirmed, without declaring a mechanism erratum.

## Icon source

[Original image](https://gameslantern.com/storage/sites/darktide/exporter/talents/psyker/tactical_modifier/psyker_throwing_knives_cast_speed.webp) | [Media-Assets Issue](https://github.com/SyuanTsai/Media-Assets/issues/7#issuecomment-5928024966) | [Existing attachment](https://github.com/user-attachments/assets/7db7b0d7-3d96-4b42-8f50-f9112f80badc). The icon identifies the talent; it is not mechanism evidence.
