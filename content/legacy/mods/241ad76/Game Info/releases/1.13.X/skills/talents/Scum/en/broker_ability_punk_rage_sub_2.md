# Pulverising Strikes: source evidence

[繁體中文](../broker_ability_punk_rage_sub_2.md) | [Player description](README.md#broker_ability_punk_rage_sub_2) | [Technical index](SOURCE_INDEX.md) | [English comparison](LOCALIZATION_COMPARISON.md#broker_ability_punk_rage_sub_2)

Release 1.13.1; fixed SHA `7e662fcda16219d775b84af50322be2e9cd9d62e`. Talent `broker_ability_punk_rage_sub_2`; name key `loc_talent_broker_ability_punk_rage_sub_2`; description key `loc_talent_broker_ability_punk_rage_sub_2_desc`. Node `node_0625b695-b695-49f5-9050-551fbd7e9699`; category Ability; one point. Mechanisms and examples reuse verified source evidence; no in-game test was performed.

## Source-confirmed behavior and static derivation

- This node enables the `rage_cleave` special rule. During rage, it adds 0.5 each to `max_hit_mass_attack_modifier` and `max_hit_mass_impact_modifier`; both are additive. The displayed +50% Cleave uses the attack hit-mass modifier. These change the penetration/hit-mass budget and impact, rather than directly increasing Damage.
- During the state, server updates check the ramping buff's stacks and progressively catch up to the elapsed-time threshold. When rage stops, its stop process ends the created stack buffs individually. Each stack has `stat_buffs.melee_power_level_modifier = 0.025`, with `max_stacks = 10`, giving a total cap of 10 × 0.025 = 0.25.
- The main rage buff also provides `melee_power_level_modifier = 0.35`. BuffSettings makes this statistic additive, so combining only the main ability and this node gives at most 0.35 + 0.25 = 0.60 Power Level modifier. Other talents, weapons and targets still affect final Damage.
- Stacks are driven by time spent in rage, not triggered by Melee hits. Melee hits separately trigger rage's own duration extension.

## Fixed source evidence

- [scripts/settings/ability/archetype_talents/talents/broker_talents.lua — L372-L424](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/broker_talents.lua#L372-L424)
- [scripts/settings/talent/talent_settings_broker.lua — L142-L168](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/talent/talent_settings_broker.lua#L142-L168)
- [scripts/settings/buff/archetype_buff_templates/broker_buff_templates.lua — L542-L554](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/broker_buff_templates.lua#L542-L554)
- [scripts/settings/buff/archetype_buff_templates/broker_buff_templates.lua — L559-L606](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/broker_buff_templates.lua#L559-L606)
- [scripts/settings/buff/archetype_buff_templates/broker_buff_templates.lua — L663-L675](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/broker_buff_templates.lua#L663-L675)
- [scripts/settings/buff/archetype_buff_templates/broker_buff_templates.lua — L683-L744](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/broker_buff_templates.lua#L683-L744)
- [scripts/settings/buff/buff_settings.lua — L860-L878](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/buff_settings.lua#L860-L878)
- [scripts/utilities/attack/power_level.lua — L25-L91](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/attack/power_level.lua#L25-L91)
- [scripts/utilities/attack/damage_profile.lua — L42-L64](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/attack/damage_profile.lua#L42-L64)
- [scripts/settings/ability/archetype_talents/talents/broker_talents.lua — L372-L424](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/broker_talents.lua#L372-L424)
- [scripts/ui/views/talent_builder_view/layouts/broker_tree.lua — L1903-L1925](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/ui/views/talent_builder_view/layouts/broker_tree.lua#L1903-L1925)

## Example assumptions and limits

- **Cleave example:** during rage, Damage and Stagger Cleave capacities each increase by 50%; an initial capacity of 10 becomes 15. Actual enemies Cleaved still depend on enemy mass and weapon limits.

- **Gradually increasing Power:** gain one Melee Power stack for approximately every second rage persists. Each grants +2.5%, up to 10 stacks for a maximum +25%.

- **Combined with rage:** if you have rage's own +35% Melee Power Level, counting only these effects at the stack cap gives 35% + (10 × 2.5%) = 60% Power Level modifier. This is not +60% final Damage. For example, Power 500 becomes 500 × 1.6 = 800.

Cleave and impact mass modifiers do not give a fixed extra enemy count or direct Damage percentage. Time to reach 10 stacks and actual rage end depend on Melee extensions and update timing; a use cannot be assumed to reach the full cap within the base 10-second state. Mechanisms reuse the fixed-version evidence, with local Build 25606770 English text corresponding to 1.13.1. Actual presentation and behavior remain unobserved in game. Missing details are supplementary explanations.

<a id="original-english-template-and-reconstruction"></a>

## Original English template and reconstruction

Steam Build `25606770`; `content/localization/ui`, resource hash `63564edcb7c3c5ee`; language `en` (code `0`).

- Name key `loc_talent_broker_ability_punk_rage_sub_2`, hash `fb15cb7e`, entry 16308: **Pulverising Strikes**.
- Description key `loc_talent_broker_ability_punk_rage_sub_2_desc`, hash `fb3a2cef`, entry 16317.

Full raw template:

~~~text
{cleave:%s} Cleave while {punk_rage:%s} is active.

Additionally, gain {melee_power:%s} Melee Power for every second spent with the ability active, up to {max_stacks:%s} times.
~~~

| Placeholder | Value | Formatting |
|---|---|---|
| `cleave` | `broker_punk_rage_stance.conditional_stat_buffs.max_hit_mass_attack_modifier = 0.5` | Percentage with explicit plus prefix → `+50%` |
| `punk_rage` | `loc_talent_broker_ability_punk_rage` | Localized string → `Rampage!` (hash `b37505a2`, entry 11575) |
| `melee_power` | `broker_punk_rage_ramping_melee_power.stat_buffs.melee_power_level_modifier = 0.025` | Percentage with explicit plus prefix; adaptive one decimal → `+2.5%` |
| `max_stacks` | `broker_punk_rage_ramping_melee_power.max_stacks = 10` | Number → `10` |

Display mapping: [broker_talents.lua L376–415](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/broker_talents.lua#L376-L415). All values reuse the accepted evidence. The missing fractional-display basis was resolved by the shared [percentage/decimal formatter L354–404](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/ui/views/talent_builder_view/utilities/talent_layout_parser.lua#L354-L404): 0.025 × 100 = 2.5 selects one decimal.

Static reconstruction; not an observed game screen:

~~~text
+50% Cleave while Rampage! is active.

Additionally, gain +2.5% Melee Power for every second spent with the ability active, up to 10 times.
~~~

## English comparison

English ties +50% Cleave to active Rampage! and gives +2.5% Melee Power per second spent in the ability, up to 10 times. This matches the existing time-driven stacks; it does not say hits trigger them or that Power equals final Damage. Separate Damage/Stagger mass budgets, cleanup and update timing, and addition with rage's base Power are supplements.

## Icon source

[Original image](https://gameslantern.com/storage/sites/darktide/exporter/talents/broker/ability_modifier/broker_ability_punk_rage_sub_2.webp) | [Media-Assets Issue](https://github.com/SyuanTsai/Media-Assets/issues/12#issuecomment-5933978534) | [Existing attachment](https://github.com/user-attachments/assets/1a4c2d3b-dfba-4840-a85d-c8d5390e3a42). The icon identifies the talent; it is not mechanism evidence.
