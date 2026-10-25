# Too Stubborn to Die: source evidence

[繁體中文](../ogryn_toughness_on_low_health.md) | [Player description](README.md#ogryn_toughness_on_low_health) | [Technical index](SOURCE_INDEX.md) | [English comparison](LOCALIZATION_COMPARISON.md#ogryn_toughness_on_low_health)

Release 1.13.1; fixed SHA `7e662fcda16219d775b84af50322be2e9cd9d62e`. Talent `ogryn_toughness_on_low_health`; name key `loc_talent_ogryn_toughness_gain_increase_on_low_health`; description key `loc_talent_ogryn_toughness_gain_increase_on_low_health_desc`. Node `node_8f283711-065f-4147-af2b-ea22b8d6d9bf`; category Talent; one point. Mechanisms and examples reuse verified source evidence; no in-game test was performed.

## Source-confirmed behavior and static derivation

- `conditional_stat_buffs.toughness_replenish_modifier=1` applies while `current_health_percent < 0.5`.
- The relevant `recover_toughness` and `recover_percentage_toughness` paths read this stat. Percentage recovery skips it when `ignore_stat_buffs=true`; natural Coherency regeneration uses separate rate stats.

## Fixed source evidence

- [scripts/settings/buff/archetype_buff_templates/ogryn_buff_templates.lua — L1644-L1669](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/ogryn_buff_templates.lua#L1644-L1669)
- [scripts/settings/talent/talent_settings_ogryn.lua — L360-L364](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/talent/talent_settings_ogryn.lua#L360-L364)
- [scripts/extension_systems/toughness/player_unit_toughness_extension.lua — L218-L279](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/toughness/player_unit_toughness_extension.lua#L218-L279)
- [scripts/extension_systems/toughness/player_unit_toughness_extension.lua — L125-L149](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/toughness/player_unit_toughness_extension.lua#L125-L149)
- [scripts/settings/ability/archetype_talents/talents/ogryn_talents.lua — L883-L903](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/ogryn_talents.lua#L883-L903)
- [scripts/ui/views/talent_builder_view/layouts/ogryn_tree.lua — L385-L409](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/ui/views/talent_builder_view/layouts/ogryn_tree.lua#L385-L409)

## Example assumptions and limits

- **Condition**: While Health is below 50% of its maximum, Toughness replenishment amounts increase by 100%. The bonus is inactive at exactly 50% and is lost when Health recovers above the threshold.

- **Recovery example**: A base recovery of 15 becomes `15 × (1 + 100%) = 30` with no other modifiers. With an existing +20% at the same stage, recovery rises from 18 to 33. Actual recovery is still capped by missing Toughness.

- **Scope**: Increases recovery amounts that use Toughness replenishment modifiers. It does not generate a recovery by itself or double all natural Coherency regeneration rates.

Mechanisms reuse the fixed-version evidence, with local Build 25606770 English text corresponding to 1.13.1. Actual presentation and behavior remain unobserved in game. Missing details are supplementary explanations.

<a id="original-english-template-and-reconstruction"></a>

## Original English template and reconstruction

Steam Build `25606770`; `content/localization/ui`, resource hash `63564edcb7c3c5ee`; language `en` (code `0`).

- Name key `loc_talent_ogryn_toughness_gain_increase_on_low_health`, hash `70213004`, entry 7283: **Too Stubborn to Die**.
- Description key `loc_talent_ogryn_toughness_gain_increase_on_low_health_desc`, hash `191ac350`, entry 1635.

Full raw template, represented as a JSON string to preserve its trailing space:

~~~json
"{toughness_multiplier:%s} Toughness Replenishment while below {health:%s} Health. "
~~~

| Placeholder | Value | Formatting |
|---|---|---|
| toughness_multiplier | defensive_3.toughness_replenish_modifier = 1 | Percentage with explicit + prefix → +100% |
| health | defensive_3.increased_toughness_health_threshold = 0.5 | Percentage without prefix → 50% |

The display mapping at the cited talent definition, lines 883–903, was already confirmed before handoff and is reused.

Static reconstruction; not an observed game screen:

~~~text
+100% Toughness Replenishment while below 50% Health.
~~~

## English comparison

The independently read English gives a +100% Toughness replenishment bonus while below 50% Health. Both the strict threshold and the amount match the accepted evidence. Eligible recovery paths, the stat-bypass exception, the separate natural-regeneration rates and the additive, capped recovery example supplement the text. No explicit English contradiction is established.

## Icon source

[Original image](https://gameslantern.com/storage/sites/darktide/exporter/talents/ogryn/default/ogryn_toughness_on_low_health.webp) | [Media-Assets Issue](https://github.com/SyuanTsai/Media-Assets/issues/10#issuecomment-5931394406) | [Existing attachment](https://github.com/user-attachments/assets/72cbf891-ecd4-425c-8d46-97cb4d4863f9). The icon identifies the talent; it is not mechanism evidence.
