# Dominate: source evidence

[繁體中文](../ogryn_rending_on_elite_kills.md) | [Player description](README.md#ogryn_rending_on_elite_kills) | [Technical index](SOURCE_INDEX.md) | [English comparison](LOCALIZATION_COMPARISON.md#ogryn_rending_on_elite_kills)

Release 1.13.1; fixed SHA `7e662fcda16219d775b84af50322be2e9cd9d62e`. Talent `ogryn_rending_on_elite_kills`; name key `loc_talent_ogryn_rending_on_elite_kills`; description key `loc_talent_ogryn_rending_on_elite_kills_desc`. Node `node_fffcae3d-430c-4955-98ba-098c7eb9d71b`; category Talent; one point. Mechanisms and examples reuse verified source evidence; no in-game test was performed.

## Source-confirmed behavior and static derivation

- `on_elite_kill` activates `rending_multiplier=0.15` for `active_duration=10`, with `allow_proc_while_active`.
- For armour multipliers below 1, Rending first fills the deficit; excess uses the overdamage coefficient. Armour settings `armored`, `super_armor`, `resistant` and `berserker` support Rending. The example does not apply to other armour types.

## Fixed source evidence

- [scripts/settings/buff/archetype_buff_templates/ogryn_buff_templates.lua — L367-L385](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/ogryn_buff_templates.lua#L367-L385)
- [scripts/utilities/attack/damage_calculation.lua — L64-L84](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/attack/damage_calculation.lua#L64-L84)
- [scripts/utilities/attack/damage_calculation.lua — L629-L660](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/attack/damage_calculation.lua#L629-L660)
- [scripts/settings/damage/armor_settings.lua — L8-L24](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/damage/armor_settings.lua#L8-L24)
- [scripts/settings/buff/helper_functions/check_proc_functions.lua — L96-L113](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/helper_functions/check_proc_functions.lua#L96-L113)
- [scripts/settings/ability/archetype_talents/talents/ogryn_talents.lua — L1280-L1313](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/ogryn_talents.lua#L1280-L1313)
- [scripts/ui/views/talent_builder_view/layouts/ogryn_tree.lua — L1072-L1098](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/ui/views/talent_builder_view/layouts/ogryn_tree.lua#L1072-L1098)

## Example assumptions and limits

- **Trigger**: Killing an Elite grants +15% Rending for 10s. Further triggers refresh the duration without increasing the bonus.

- **Effect**: Rending improves an attack's damage multiplier against certain armour types. The actual increase depends on the weapon's existing armour multiplier; final damage cannot uniformly be multiplied by 1.15.

- **Damage example**: With an original Carapace Armour multiplier of 0.5, base damage of 100 deals 50. Adding 15% Rending gives `100 × (0.5 + 0.15) = 65`, a relative increase of 30%. If the original multiplier is already 1, excess Rending contributes only one quarter: `100 × (1 + 0.15 × 0.25) = 103.75`.

#### Chinese localization note

- The Chinese text adds a times unit after the Rending percentage, which is incorrect. The effect grants 15% Rending; it does not make Rending 15 times as large.

Mechanisms reuse the fixed-version evidence, with local Build 25606770 English text corresponding to 1.13.1. Actual presentation and behavior remain unobserved in game. Missing details are supplementary explanations.

<a id="original-english-template-and-reconstruction"></a>

## Original English template and reconstruction

Steam Build `25606770`; `content/localization/ui`, resource hash `63564edcb7c3c5ee`; language `en` (code `0`).

- Name key `loc_talent_ogryn_rending_on_elite_kills`, hash `111d199c`, entry 1113: **Dominate**.
- Description key `loc_talent_ogryn_rending_on_elite_kills_desc`, hash `4203de9c`, entry 4278.

Full raw template:

~~~text
{rending_multiplier:%s} Rending for {duration:%s}s on Elite Kill.
~~~

| Placeholder | Value | Formatting |
|---|---|---|
| rending_multiplier | proc_stat_buffs.rending_multiplier = 0.15 | Percentage with explicit + prefix → +15% |
| duration | active_duration = 10 | Number → 10 |

Only the missing display mapping in the cited talent definition, lines 1280–1313, was read. Accepted values, mechanisms and common formatting were reused.

Static reconstruction; not an observed game screen:

~~~text
+15% Rending for 10s on Elite Kill.
~~~

## English comparison

The independently read English grants +15% Rending for 10s on an Elite kill, matching the accepted trigger, value and duration. It uses a percentage without the incorrect times unit in Chinese, so the Chinese-only unit correction is not an English erratum. Refresh, supported armour types, deficit/overdamage rules and the damage examples supplement the text. No explicit English contradiction is established.

## Icon source

[Original image](https://gameslantern.com/storage/sites/darktide/exporter/talents/ogryn/default/ogryn_rending_on_elite_kills.webp) | [Media-Assets Issue](https://github.com/SyuanTsai/Media-Assets/issues/10#issuecomment-5931394406) | [Existing attachment](https://github.com/user-attachments/assets/0eb640b4-e206-4d0b-a982-f74b33baf5b2). The icon identifies the talent; it is not mechanism evidence.
