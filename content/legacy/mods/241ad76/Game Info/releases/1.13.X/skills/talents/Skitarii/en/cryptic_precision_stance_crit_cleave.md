# Piercing Sight: source evidence

[繁體中文](../cryptic_precision_stance_crit_cleave.md) | [Player description](README.md#cryptic_precision_stance_crit_cleave) | [Technical index](SOURCE_INDEX.md) | [English comparison](LOCALIZATION_COMPARISON.md#cryptic_precision_stance_crit_cleave)

Release 1.13.1; fixed SHA `7e662fcda16219d775b84af50322be2e9cd9d62e`. Talent `cryptic_precision_stance_crit_cleave`; name key `loc_talent_cryptic_precision_stance_crit_cleave`; description key `loc_talent_cryptic_precision_stance_crit_cleave_desc`. Node `node_bbc91e02-a605-4136-8d58-f767ac08da21`; category Ability; one point. Mechanisms and examples reuse verified source evidence; no in-game test was performed.

## Source-confirmed behavior and static derivation

- While the `Advanced Combat Doctrines` keyword is active, the base bonuses are `ranged_max_hit_mass_attack_modifier = 0.3` and `ranged_critical_strike_chance = 0.15`.
- The delayed buff supplies the differences between the initial and increased values: another `0.3` Ranged Cleave and `0.15` Ranged Critical Strike Chance. The totals become `0.6` and `0.3`.
- The delayed component uses `buff_start_delay = 4`. Activation sets its deadline to the activation time plus 4 seconds; the extra bonuses apply only after 4 continuous seconds of the ability. Ending the ability disables the base bonuses and clears the timer. A new activation starts a new 4-second wait.
- Ranged Cleave changes the attack's maximum hit-mass budget. It does not guarantee a fixed number of additional enemies: weapon Cleave, enemy hit mass and the attack's Cleave rules still matter. Critical Strike Chance is a probability modifier; other Critical Strike Chance sources and the attack's critical-strike checks also apply.

## Fixed source evidence

- [scripts/settings/ability/archetype_talents/talents/cryptic_talents.lua — L433-L473](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/cryptic_talents.lua#L433-L473)
- [scripts/settings/talent/talent_settings_cryptic.lua — L125-L131](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/talent/talent_settings_cryptic.lua#L125-L131)
- [scripts/settings/buff/archetype_buff_templates/cryptic_buff_templates.lua — L717-L738](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/cryptic_buff_templates.lua#L717-L738)
- [scripts/settings/buff/archetype_buff_templates/cryptic_buff_templates.lua — L739-L777](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/cryptic_buff_templates.lua#L739-L777)
- [scripts/utilities/attack/damage_profile.lua — L37-L88](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/attack/damage_profile.lua#L37-L88)
- [scripts/settings/archetype/archetypes/cryptic_archetype.lua — L10-L32](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/archetype/archetypes/cryptic_archetype.lua#L10-L32)
- [scripts/settings/ability/archetype_talents/talents/cryptic_talents.lua — L433-L473](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/cryptic_talents.lua#L433-L473)
- [scripts/ui/views/talent_builder_view/layouts/cryptic_tree.lua — L2554-L2576](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/ui/views/talent_builder_view/layouts/cryptic_tree.lua#L2554-L2576)

## Example assumptions and limits

- While Advanced Combat Doctrines is active, gain **30% Ranged Cleave** and **15 percentage points of Ranged Critical Strike Chance**. After **4 continuous seconds**, these increase to **60% Ranged Cleave** and **30 percentage points of Ranged Critical Strike Chance**.
- With an original hit-mass budget of `10`, the initial budget is `10 × 1.3 = 13`; after 4 seconds it is `10 × 1.6 = 16`. The number of enemies actually cleaved depends on their hit mass and the attack's rules for stopping Cleave.
- With an original Ranged Critical Strike Chance of `7.5%`, the initial chance is `7.5% + 15% = 22.5%`; after 4 seconds it is `7.5% + 30% = 37.5%`.
- Ending the ability removes both bonuses. Activating it again requires another 4 seconds to reach the increased values.

- The initial values are `0.3` and `0.15`. After 4 seconds, the totals are `0.3 + 0.3 = 0.6` and `0.15 + 0.15 = 0.30`; ending the ability resets the delayed component.
- The Cleave percentages modify hit-mass capacity and do not promise a fixed number of additional targets. The Critical Strike Chance examples add percentage points.
- Both language templates state the initial and increased values and the 4-second condition. The hit-mass basis and reset behavior are supplementary details.

Mechanisms reuse the fixed-version evidence, with local Build 25606770 English text corresponding to 1.13.1. Actual presentation and behavior remain unobserved in game. Missing details are supplementary explanations.

<a id="original-english-template-and-reconstruction"></a>

## Original English template and reconstruction

Steam Build `25606770`; `content/localization/ui`, resource hash `63564edcb7c3c5ee`; language `en` (code `0`).

- Name key `loc_talent_cryptic_precision_stance_crit_cleave`, hash `64749e8f`, entry 6535: **Piercing Sight**.
- Description key `loc_talent_cryptic_precision_stance_crit_cleave_desc`, hash `f7e91cd6`, entry 16104.

Full raw template:

~~~text
While {talent_name:%s} is active, gain {cleave:%s} Ranged Cleave and {crit_chance:%s} Ranged Critical Strike Chance, increased to {increased_cleave:%s} Ranged Cleave and {increased_crit_chance:%s} Ranged Critical Strike Chance after {duration:%s}s.
~~~

| Placeholder | Value | Formatting |
|---|---|---|
| `talent_name` | Advanced Combat Doctrines | `loc_string`: `loc_talent_cryptic_precision_stance` |
| `cleave` | 30% | `percentage`: `ranged_max_hit_mass_attack_modifier = 0.3` |
| `crit_chance` | 15% | `percentage`: `ranged_critical_strike_chance = 0.15` |
| `increased_cleave` | 60% | `percentage`: `increased_ranged_max_hit_mass_attack_modifier = 0.6` |
| `increased_crit_chance` | 30% | `percentage`: `increased_ranged_critical_strike_chance = 0.3` |
| `duration` | 4 | `number`: `increased_boost_delay = 4` |

The placeholder mappings are in `cryptic_talents.lua` L447–L473; the values reuse the verified settings. None of these percentage mappings adds a `+` prefix. The ability name is independently paired with `loc_talent_cryptic_precision_stance`, hash `c4f43796`, entry `12705`: Advanced Combat Doctrines.

Static reconstruction; not an observed game screen:

~~~text
While Advanced Combat Doctrines is active, gain 30% Ranged Cleave and 15% Ranged Critical Strike Chance, increased to 60% Ranged Cleave and 30% Ranged Critical Strike Chance after 4s.
~~~

## English comparison

The English text matches the active-ability condition, the initial 30% / 15% bonuses, the increased 60% / 30% bonuses and the 4-second delay. It does not specify the hit-mass calculation or timer reset; these are supplements. No explicit English contradiction was identified.

## Icon source

[Original image](https://gameslantern.com/storage/sites/darktide/exporter/talents/cryptic/ability_modifier/cryptic_precision_stance_crit_cleave.webp) | [Media-Assets Issue](https://github.com/SyuanTsai/Media-Assets/issues/13#issuecomment-5935640756) | [Existing attachment](https://github.com/user-attachments/assets/bedef96d-1746-44a5-a482-1abe4e5e15c6). The icon identifies the talent; it is not mechanism evidence.
