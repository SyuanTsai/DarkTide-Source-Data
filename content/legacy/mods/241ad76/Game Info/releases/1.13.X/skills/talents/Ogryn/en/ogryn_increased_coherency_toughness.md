# Lynchpin: source evidence

[繁體中文](../ogryn_increased_coherency_toughness.md) | [Player description](README.md#ogryn_increased_coherency_toughness) | [Technical index](SOURCE_INDEX.md) | [English comparison](LOCALIZATION_COMPARISON.md#ogryn_increased_coherency_toughness)

Release 1.13.1; fixed SHA `7e662fcda16219d775b84af50322be2e9cd9d62e`. Talent `ogryn_increased_coherency_toughness`; name key `loc_talent_ogryn_coherency_toughness_increase`; description key `loc_talent_ogryn_coherency_toughness_increase_desc`. Node `node_e4d5b83c-4a0c-4080-9bfb-46f46fbbd8f3`; category Talent; one point. Mechanisms and examples reuse verified source evidence; no in-game test was performed.

## Source-confirmed behavior and static derivation

- `toughness_regen_rate_modifier=1` is an `additive_multiplier`. Without another same-stage bonus, the aggregate value is 2.
- Toughness updates calculate `base_rate × weapon_rate_modifier × buff_rate_modifier × coherency_rate_modifier` after checking regeneration eligibility.
- This passive is applied to its owner. It is not an aura that grants the bonus to teammates.

## Fixed source evidence

- [scripts/settings/buff/archetype_buff_templates/ogryn_buff_templates.lua — L1080-L1086](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/ogryn_buff_templates.lua#L1080-L1086)
- [scripts/settings/talent/talent_settings_ogryn.lua — L312-L314](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/talent/talent_settings_ogryn.lua#L312-L314)
- [scripts/extension_systems/toughness/player_unit_toughness_extension.lua — L125-L149](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/toughness/player_unit_toughness_extension.lua#L125-L149)
- [scripts/settings/buff/buff_settings.lua — L1009-L1012](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/buff_settings.lua#L1009-L1012)
- [scripts/settings/ability/archetype_talents/talents/ogryn_talents.lua — L781-L797](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/ogryn_talents.lua#L781-L797)
- [scripts/ui/views/talent_builder_view/layouts/ogryn_tree.lua — L88-L112](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/ui/views/talent_builder_view/layouts/ogryn_tree.lua#L88-L112)

## Example assumptions and limits

- **Effect**: Increase your own Toughness regeneration rate through Coherency by 100%. This does not double Toughness recovered from attack hits.

- **Example**: With all other conditions unchanged, an original rate of 5 points per second becomes `5 × (1 + 100%) = 10`. If the same modifier stage already has +20%, the rate changes from 6 to `5 × (1 + 20% + 100%) = 11` points per second.

- **Requirement**: Coherency regeneration conditions and the waiting period still apply. This talent changes only the regeneration rate.

Mechanisms reuse the fixed-version evidence, with local Build 25606770 English text corresponding to 1.13.1. Actual presentation and behavior remain unobserved in game. Missing details are supplementary explanations.

<a id="original-english-template-and-reconstruction"></a>

## Original English template and reconstruction

Steam Build `25606770`; `content/localization/ui`, resource hash `63564edcb7c3c5ee`; language `en` (code `0`).

- Name key `loc_talent_ogryn_coherency_toughness_increase`, hash `e121aafb`, entry 14604: **Lynchpin**.
- Description key `loc_talent_ogryn_coherency_toughness_increase_desc`, hash `d0729082`, entry 13464.

Full raw template:

~~~text
{toughness_multiplier:%s} Coherency Toughness Regeneration.
~~~

| Placeholder | Value | Formatting |
|---|---|---|
| toughness_multiplier | toughness_1.toughness_bonus = 1 | Percentage with explicit + prefix → +100% |

Only the missing display mapping in the cited talent definition, lines 781–797, was read. Existing mechanisms and formatting were reused.

Static reconstruction; not an observed game screen:

~~~text
+100% Coherency Toughness Regeneration.
~~~

## English comparison

The independently read English specifies a +100% Coherency Toughness regeneration bonus. It matches the accepted additive rate modifier and does not claim to increase other recovery events. Owner-only application, combination with existing same-stage bonuses, examples and regeneration prerequisites supplement the text. No explicit English contradiction is established.

## Icon source

[Original image](https://gameslantern.com/storage/sites/darktide/exporter/talents/ogryn/default/ogryn_increased_coherency_toughness.webp) | [Media-Assets Issue](https://github.com/SyuanTsai/Media-Assets/issues/10#issuecomment-5931383354) | [Existing attachment](https://github.com/user-attachments/assets/47f9eea2-c58f-4ed3-8678-e42d2ec1701f). The icon identifies the talent; it is not mechanism evidence.
