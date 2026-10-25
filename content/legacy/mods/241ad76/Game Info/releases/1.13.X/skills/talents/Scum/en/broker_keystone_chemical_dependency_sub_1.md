# Chem Enhanced: source evidence

[繁體中文](../broker_keystone_chemical_dependency_sub_1.md) | [Player description](README.md#broker_keystone_chemical_dependency_sub_1) | [Technical index](SOURCE_INDEX.md) | [English comparison](LOCALIZATION_COMPARISON.md#broker_keystone_chemical_dependency_sub_1)

Release 1.13.1; fixed SHA `7e662fcda16219d775b84af50322be2e9cd9d62e`. Talent `broker_keystone_chemical_dependency_sub_1`; name key `loc_talent_broker_keystone_chemical_dependency_sub_1`; description key `loc_talent_broker_keystone_chemical_dependency_sub_1_desc`. Node `node_c557fdde-e5e1-4849-b9ba-1d5302550fb0`; category Keystone; one point. Mechanisms and examples reuse verified source evidence; no in-game test was performed.

## Source-confirmed behavior and static derivation

- The upgrade's special rule enables the stack buff's `conditional_stat_buffs.critical_strike_chance`, with a value of 0.05 and stat type `value`. `Buff._calculate_stat_buffs` repeatedly adds it according to stack count: +0.05 per stack and +0.15 at 3 stacks. One, two and three stacks therefore give +5, +10 and +15 percentage points.
- `CriticalStrike.chance` calculates `clamp(base_chance + generic critical_strike_chance + Melee or Ranged-specific chance + weapon modifier, 0, 1)`. Broker's archetype has `base_critical_strike_chance = 0.10`, so with only this upgrade and 3 stacks the result is 0.10 + 3 × 0.05 = 0.25.
- This upgrade only enables the conditional Critical Chance stat. Stack duration, maximum count, resource-recovery multiplier and sequential decay remain controlled by the core Chemical Dependency buff.

## Fixed source evidence

- [scripts/settings/ability/archetype_talents/talents/broker_talents.lua — L2512-L2538](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/broker_talents.lua#L2512-L2538)
- [scripts/settings/talent/talent_settings_broker.lua — L454-L463](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/talent/talent_settings_broker.lua#L454-L463)
- [scripts/settings/buff/archetype_buff_templates/broker_buff_templates.lua — L3524-L3566](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/broker_buff_templates.lua#L3524-L3566)
- [scripts/settings/buff/buff_settings.lua — L757-L759](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/buff_settings.lua#L757-L759)
- [scripts/extension_systems/buff/buffs/buff.lua — L689-L727](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/buff/buffs/buff.lua#L689-L727)
- [scripts/settings/archetype/archetypes/broker_archetype.lua — L20-L25](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/archetype/archetypes/broker_archetype.lua#L20-L25)
- [scripts/utilities/attack/critical_strike.lua — L13-L39](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/attack/critical_strike.lua#L13-L39)
- [scripts/settings/ability/archetype_talents/talents/broker_talents.lua — L2512-L2538](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/broker_talents.lua#L2512-L2538)
- [scripts/ui/views/talent_builder_view/layouts/broker_tree.lua — L1566-L1588](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/ui/views/talent_builder_view/layouts/broker_tree.lua#L1566-L1588)

## Example assumptions and limits

- **Per-stack bonus:** each stack adds 5 percentage points of general Critical Chance, included in both Melee and Ranged Critical Chance calculations.

- **Maximum-stack example:** Scum's base Critical Chance is 10%. At 3 stacks, 3 × 5% adds 15 percentage points, giving 10% + 15% = 25% before extra weapon chance.

- **Critical effect:** this upgrade increases Critical Chance, rather than Critical Damage. Dependency still decays one stack every 90 seconds under the core rules; Stimm use refreshes the timer.

The 25% example excludes weapon handling templates, Melee/Ranged-specific Critical Chance and other talents. All applicable modifiers are added before the final 0%–100% clamp. This effect does not guarantee a Critical hit on every attack or change the Critical Damage multiplier. Mechanisms reuse the fixed-version evidence, with local Build 25606770 English text corresponding to 1.13.1. Actual presentation and behavior remain unobserved in game. Missing details are supplementary explanations.

<a id="original-english-template-and-reconstruction"></a>

## Original English template and reconstruction

Steam Build `25606770`; `content/localization/ui`, resource hash `63564edcb7c3c5ee`; language `en` (code `0`).

- Name key `loc_talent_broker_keystone_chemical_dependency_sub_1`, hash `6d979983`, entry 7122: **Chem Enhanced**.
- Description key `loc_talent_broker_keystone_chemical_dependency_sub_1_desc`, hash `3356ae07`, entry 3343.

Full raw template:

~~~text
Each stack of {dependency:%s} additionally grants {critical_chance:%s} Critical Hit Chance.
~~~

| Placeholder | Value | Formatting |
|---|---|---|
| `dependency` | `loc_term_glossary_chemical_dependency` | Localized string → `Dependency` (hash `0d7c24c6`, entry 883) |
| `critical_chance` | `broker_keystone_chemical_dependency_stack.conditional_stat_buffs.critical_strike_chance = 0.05` | Percentage with explicit `+` prefix → `+5%` |

Display mapping: [broker_talents.lua L2516–2533](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/broker_talents.lua#L2516-L2533). The stat value and general-chance interpretation reuse accepted evidence.

Static reconstruction; not an observed game screen:

~~~text
Each stack of Dependency additionally grants +5% Critical Hit Chance.
~~~

## English comparison

English explicitly grants Critical Hit Chance per Dependency stack, matching the general 0.05 chance addition. It does not promise Critical Damage or guaranteed Critical hits. Percentage-point addition, the base-chance example, final clamping and inherited Dependency timing are supplements.

## Icon source

[Original image](https://gameslantern.com/storage/sites/darktide/exporter/talents/broker/keystone_modifier/broker_keystone_chemical_dependency_sub_1.webp) | [Media-Assets Issue](https://github.com/SyuanTsai/Media-Assets/issues/12#issuecomment-5933978534) | [Existing attachment](https://github.com/user-attachments/assets/b7fff291-d5f3-4213-bfef-8b28b8065889). The icon identifies the talent; it is not mechanism evidence.
