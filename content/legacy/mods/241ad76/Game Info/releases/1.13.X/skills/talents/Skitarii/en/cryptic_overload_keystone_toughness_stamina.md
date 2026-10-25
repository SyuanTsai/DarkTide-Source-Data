# Invigorating Overload: source evidence

[繁體中文](../cryptic_overload_keystone_toughness_stamina.md) | [Player description](README.md#cryptic_overload_keystone_toughness_stamina) | [Technical index](SOURCE_INDEX.md) | [English comparison](LOCALIZATION_COMPARISON.md#cryptic_overload_keystone_toughness_stamina)

Release 1.13.1; fixed SHA `7e662fcda16219d775b84af50322be2e9cd9d62e`. Talent `cryptic_overload_keystone_toughness_stamina`; name key `loc_talent_cryptic_overload_keystone_toughness_stamina`; description key `loc_talent_cryptic_overload_keystone_toughness_stamina_desc`. Node `node_2296b656-a1b9-42b7-8b38-32801a972c29`; category Keystone; one point. Mechanisms and examples reuse verified source evidence; no in-game test was performed.

## Source-confirmed behavior and static derivation

- The verified settings are `toughness_percent_restored = 0.2` and `stamina_percent_restored = 0.2`. Each overload iterates the current Coherency units and applies the original 8-second group buff. With this modifier selected, it also calls the percentage-based Toughness and Stamina restoration functions.
- Toughness recovery starts from `max_toughness × 0.2`. Because `ignore_stat_buffs = false`, it also multiplies by `toughness_replenish_modifier` and `toughness_replenish_multiplier`. Actual recovery cannot exceed the missing amount and can be blocked by conditions that disable Toughness replenishment.
- Stamina recovery uses the player's maximum Stamina times `0.2`, then clamps the current value between zero and maximum Stamina. Maximum Stamina includes the class, weapon and existing Stamina modifiers.

## Fixed source evidence

- [scripts/settings/ability/archetype_talents/talents/cryptic_talents.lua — L1306-L1324](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/cryptic_talents.lua#L1306-L1324)
- [scripts/settings/talent/talent_settings_cryptic.lua — L279-L281](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/talent/talent_settings_cryptic.lua#L279-L281)
- [scripts/settings/buff/archetype_buff_templates/cryptic_buff_templates.lua — L1574-L1590](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/cryptic_buff_templates.lua#L1574-L1590)
- [scripts/utilities/toughness/toughness.lua — L16-L25](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/toughness/toughness.lua#L16-L25)
- [scripts/extension_systems/toughness/player_unit_toughness_extension.lua — L253-L279](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/toughness/player_unit_toughness_extension.lua#L253-L279)
- [scripts/utilities/attack/stamina.lua — L102-L119](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/attack/stamina.lua#L102-L119)
- [scripts/utilities/attack/stamina.lua — L151-L175](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/attack/stamina.lua#L151-L175)
- [scripts/settings/ability/archetype_talents/talents/cryptic_talents.lua — L1306-L1324](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/cryptic_talents.lua#L1306-L1324)
- [scripts/ui/views/talent_builder_view/layouts/cryptic_tree.lua — L986-L1008](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/ui/views/talent_builder_view/layouts/cryptic_tree.lua#L986-L1008)

## Example assumptions and limits

- **Trigger**: On Power Overload, you and allies in Coherency each restore **20% of maximum Toughness** and **20% of maximum Stamina**.
- **Recovery example**: At `100` maximum Toughness and `5` maximum Stamina bars, one overload restores `100 × 20% = 20` Toughness points and `5 × 20% = 1` Stamina bar. If only 12 Toughness points are missing, it restores only 12.
- **Other bonuses**: Toughness recovery still uses your Toughness Replenishment bonuses. With only a +25% replenishment bonus, `20 × 1.25 = 25` points; recovery cannot exceed maximum Toughness.

- With maximum Toughness `100` and maximum Stamina `50`, and at least 20 Toughness and 10 Stamina missing, one overload restores 20 Toughness points and 10 Stamina units. If only 12 Toughness points are missing, the maximum recovery is 12.
- Each percentage uses its resource's maximum, not its current value. Resources that are already full do not overflow their cap.
- Toughness replenishment modifiers and blocking conditions still apply. Maximum Stamina can change with the weapon or other bonuses.

Mechanisms reuse the fixed-version evidence, with local Build 25606770 English text corresponding to 1.13.1. Actual presentation and behavior remain unobserved in game. Missing details are supplementary explanations.

<a id="original-english-template-and-reconstruction"></a>

## Original English template and reconstruction

Steam Build `25606770`; `content/localization/ui`, resource hash `63564edcb7c3c5ee`; language `en` (code `0`).

- Name key `loc_talent_cryptic_overload_keystone_toughness_stamina`, hash `cbfe10b4`, entry 13177: **Invigorating Overload**.
- Description key `loc_talent_cryptic_overload_keystone_toughness_stamina_desc`, hash `7c6a74c0`, entry 8080.

Full raw template:

~~~text
You and allies in coherency restore {toughness:%s} Toughness and {stamina:%s} Stamina when the overload occurrs.
~~~

| Placeholder | Value | Formatting |
|---|---|---|
| `toughness` | 20% | `percentage`: `toughness_percent_restored = 0.2` |
| `stamina` | 20% | `percentage`: `stamina_percent_restored = 0.2` |

The formatting block in `cryptic_talents.lua` L1314–L1323 uses the already verified values in `talent_settings_cryptic.lua` L279–L281. Neither percentage has a `+` prefix. The original English spelling `occurrs` is preserved in both the raw text and static reconstruction.

Static reconstruction; not an observed game screen:

~~~text
You and allies in coherency restore 20% Toughness and 20% Stamina when the overload occurrs.
~~~

## English comparison

The English explicitly names the player and allies in Coherency, the overload trigger, and 20% recovery for both resources. These match the verified settings and calls. The maximum-value basis, missing-resource caps, Toughness replenishment modifiers and blocking conditions are supplements. No explicit English contradiction was identified.

## Icon source

[Original image](https://gameslantern.com/storage/sites/darktide/exporter/talents/cryptic/keystone_modifier/cryptic_overload_keystone_toughness_stamina.webp) | [Media-Assets Issue](https://github.com/SyuanTsai/Media-Assets/issues/13#issuecomment-5935640756) | [Existing attachment](https://github.com/user-attachments/assets/cfc8d67b-448d-4b33-afac-86fd412b2a6d). The icon identifies the talent; it is not mechanism evidence.
