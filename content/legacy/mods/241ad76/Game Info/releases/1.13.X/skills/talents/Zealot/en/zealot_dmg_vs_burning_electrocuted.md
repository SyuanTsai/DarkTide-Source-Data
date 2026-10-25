# Purifying Hatred: source evidence

[繁體中文](../zealot_dmg_vs_burning_electrocuted.md) | [Player description](README.md#zealot_dmg_vs_burning_electrocuted) | [Technical index](SOURCE_INDEX.md) | [English comparison](LOCALIZATION_COMPARISON.md#zealot_dmg_vs_burning_electrocuted)

Release 1.13.1; fixed SHA `7e662fcda16219d775b84af50322be2e9cd9d62e`. Talent `zealot_dmg_vs_burning_electrocuted`; name key `loc_talent_zealot_dmg_vs_burning_electrocuted`; description key `loc_talent_zealot_dmg_vs_burning_electrocuted_desc`. Node `node_85469f6c-0258-4ad5-82f5-9f23151c7b63`; category Skill; one point. Mechanisms and examples reuse verified source evidence; no in-game test was performed.

## Source-confirmed behavior and static derivation

- Grants `damage_vs_burning` and `damage_vs_electrocuted` +0.15 separately. Shared calculation checks `burning` and `electrocuted` separately and adds both to the same `damage_stat_buffs`, so the combined bonus is +0.30.
- The verified Chinese document retains “and” in both languages as a possible list of enemy types. It clarifies the OR condition and simultaneous addition without declaring incomplete wording a Chinese translation error.

## Fixed source evidence

- [scripts/settings/buff/archetype_buff_templates/zealot_buff_templates.lua — L4721-L4728](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/zealot_buff_templates.lua#L4721-L4728)
- [scripts/settings/talent/talent_settings_zealot.lua — L236-L238](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/talent/talent_settings_zealot.lua#L236-L238)
- [scripts/utilities/attack/damage_calculation.lua — L354-L365](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/attack/damage_calculation.lua#L354-L365)
- [scripts/settings/ability/archetype_talents/talents/zealot_talents.lua — L3214-L3229](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/zealot_talents.lua#L3214-L3229)
- [scripts/ui/views/talent_builder_view/layouts/zealot_tree.lua — L2134-L2156](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/ui/views/talent_builder_view/layouts/zealot_tree.lua#L2134-L2156)

## Example assumptions and limits

- **How it works:** gain +15% damage if the enemy is Burning and another +15% if it is Electrocuted. Each condition is checked separately; both states are not required for either bonus to apply.
- **Damage example:** base damage 100 with one qualifying condition becomes 100 × 1.15 = 115. Both conditions give 100 × (1 + 15% + 15%) = 130. Other same-stage damage bonuses are added first.

- The original game text uses the 1.13.1 / Steam Build 25606770 `ui` resource. Differences between description and implementation still require an in-game check.
- The verified Chinese comparison for hash `34bfb2f6` found no explicit translation conflict in the direction of the effect. Omitted formulas, caps and detailed limits are supplements.

Mechanisms reuse the fixed-version evidence, with local Build 25606770 English text corresponding to 1.13.1. Actual presentation and behavior remain unobserved in game. Missing details are supplementary explanations.

<a id="original-english-template-and-reconstruction"></a>

## Original English template and reconstruction

Steam Build `25606770`; `content/localization/ui`, resource hash `63564edcb7c3c5ee`; language `en` (code `0`).

- Name key `loc_talent_zealot_dmg_vs_burning_electrocuted`, hash `9b5165a8`, entry 10021: **Purifying Hatred**.
- Description key `loc_talent_zealot_dmg_vs_burning_electrocuted_desc`, hash `34bfb2f6`, entry 3433.

Full raw template:

~~~text
{damage:%s} Increased damage against Burning and Electrocuted Enemies.
~~~

| Placeholder | Value | Formatting |
|---|---|---|
| `damage` | `0.15` | `percentage`, `+` prefix: `+15%` |

The display mapping uses the verified `talent_settings.zealot_dmg_vs_burning_electrocuted.damage` value.

Static reconstruction; not an observed game screen:

~~~text
+15% Increased damage against Burning and Electrocuted Enemies.
~~~

## English comparison

Independently read, “Burning and Electrocuted Enemies” can list two qualifying enemy groups; it does not explicitly require both states on one enemy or cap their combined bonus at 15%. The 15% bonus agrees. Separate tests, simultaneous +30% and same-stage addition are supplements, not an explicit English contradiction.

## Icon source

[Original image](https://gameslantern.com/storage/sites/darktide/exporter/talents/zealot/default/zealot_dmg_vs_burning_electrocuted.webp) | [Media-Assets Issue](https://github.com/SyuanTsai/Media-Assets/issues/8#issuecomment-5929296872) | [Existing attachment](https://github.com/user-attachments/assets/8137f892-5370-4a69-b790-556f579414d2). The icon identifies the talent; it is not mechanism evidence.
