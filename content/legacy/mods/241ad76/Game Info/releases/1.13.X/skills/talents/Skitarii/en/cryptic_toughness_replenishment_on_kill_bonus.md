# Slaughter Protocol: source evidence

[繁體中文](../cryptic_toughness_replenishment_on_kill_bonus.md) | [Player description](README.md#cryptic_toughness_replenishment_on_kill_bonus) | [Technical index](SOURCE_INDEX.md) | [English comparison](LOCALIZATION_COMPARISON.md#cryptic_toughness_replenishment_on_kill_bonus)

Release 1.13.1; fixed SHA `7e662fcda16219d775b84af50322be2e9cd9d62e`. Talent `cryptic_toughness_replenishment_on_kill_bonus`; name key `loc_talent_cryptic_toughness_replenishment_on_kill_bonus`; description key `loc_talent_cryptic_toughness_replenishment_on_kill_bonus_desc`. Node `node_cf6f52f6-9bb1-4d59-b97e-ea5ac469e698`; category Talent; one point. Mechanisms and examples reuse verified source evidence; no in-game test was performed.

## Source-confirmed behavior and static derivation

The talent supplies `toughness_melee_replenish = 0.25`. At a remaining-charge count of `<= 0`, it adds `0.50 − 0.25 = 0.25`, giving a total bonus of `0.50`. This is not a fixed `replenish_percentage` of 25% or 50% of maximum Toughness.

`recover_toughness` uses the class's `recovery_percentages[melee_kill]`, the weapon modifier, and `toughness_melee_replenish + total_replenish_stat − 1`, then applies `total_replenish_multiplier`.

## Fixed source evidence

- [scripts/settings/buff/archetype_buff_templates/cryptic_buff_templates.lua — L3494-L3515](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/cryptic_buff_templates.lua#L3494-L3515)
- [scripts/extension_systems/toughness/player_unit_toughness_extension.lua — L223-L250](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/toughness/player_unit_toughness_extension.lua#L223-L250)
- [scripts/settings/talent/talent_settings_cryptic.lua — L630-L634](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/talent/talent_settings_cryptic.lua#L630-L634)
- [scripts/settings/buff/archetype_buff_templates/cryptic_buff_templates.lua — L3496-L3515](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/cryptic_buff_templates.lua#L3496-L3515)
- [scripts/settings/ability/archetype_talents/talents/cryptic_talents.lua — L2568-L2592](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/cryptic_talents.lua#L2568-L2592)
- [scripts/ui/views/talent_builder_view/layouts/cryptic_tree.lua — L2428-L2454](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/ui/views/talent_builder_view/layouts/cryptic_tree.lua#L2428-L2454)

## Example assumptions and limits

- **Operation**: Increase the Toughness amount a melee kill would normally restore by **25%**. With **no full Capacitance charges**, the increase becomes **50%**.
- **Recovery example**: If a melee kill normally restores **5** Toughness points, the normal bonus gives `5 × 1.25 = 6.25` points; at **0 charges**, `5 × 1.50 = 7.5` points.
- **Other bonuses**: With an existing **20%** Toughness recovery bonus at the same stage, the zero-charge result is `5 × (1 + 20% + 50%) = 8.5` points, capped at maximum Toughness.

The percentage modifies the existing melee-kill recovery rather than directly restoring that fraction of maximum Toughness. The examples assume the stated baseline and, where applicable, same-stage bonus.

Mechanisms reuse the fixed-version evidence, with local Build 25606770 English text corresponding to 1.13.1. Actual presentation and behavior remain unobserved in game. Missing details are supplementary explanations.

<a id="original-english-template-and-reconstruction"></a>

## Original English template and reconstruction

Steam Build `25606770`; `content/localization/ui`, resource hash `63564edcb7c3c5ee`; language `en` (code `0`).

- Name key `loc_talent_cryptic_toughness_replenishment_on_kill_bonus`, hash `70dde31f`, entry 7330: **Slaughter Protocol**.
- Description key `loc_talent_cryptic_toughness_replenishment_on_kill_bonus_desc`, hash `583f2cab`, entry 5728.

Full raw template:

~~~text
{toughness_percent:%s} Toughness Replenishment on Melee Kill. Increased to {toughness_percent_improved:%s} when at {zero_charges:%s} Charges.
~~~

| Placeholder | Value | Formatting |
|---|---|---|
| `{toughness_percent:%s}` | `0.25` → `+25%` | Percentage; `+` prefix |
| `{toughness_percent_improved:%s}` | `0.50` → `+50%` | Percentage; `+` prefix |
| `{zero_charges:%s}` | `0` | Number |

The existing display mapping in `scripts/settings/ability/archetype_talents/talents/cryptic_talents.lua` (L2576-L2591) uses `toughness_melee_replenish`, `improved_toughness_melee_replenish`, and `improved_min_charges`.

Static reconstruction; not an observed game screen:

~~~text
+25% Toughness Replenishment on Melee Kill. Increased to +50% when at 0 Charges.
~~~

## English comparison

The English specifies a Toughness Replenishment bonus on melee kills and raises it at zero charges. It does not state that either percentage is a fraction of maximum Toughness, so the recovery basis is supplementary information rather than an explicit contradiction. The full-charge threshold, same-stage addition and maximum-Toughness cap are also supplements.

## Icon source

[Original image](https://gameslantern.com/storage/sites/darktide/exporter/talents/cryptic/default/cryptic_toughness_replenishment_on_kill_bonus.webp) | [Media-Assets Issue](https://github.com/SyuanTsai/Media-Assets/issues/13#issuecomment-5935656030) | [Existing attachment](https://github.com/user-attachments/assets/b22c3c3e-70a0-4411-99a5-63bcf1a6fa5a). The icon identifies the talent; it is not mechanism evidence.
