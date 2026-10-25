# Terminus Warrant: source evidence

[繁體中文](../adamant_terminus_warrant.md) | [Player description](README.md#adamant_terminus_warrant) | [Technical index](SOURCE_INDEX.md) | [English comparison](LOCALIZATION_COMPARISON.md#adamant_terminus_warrant)

Release 1.13.1; fixed SHA `7e662fcda16219d775b84af50322be2e9cd9d62e`. Talent `adamant_terminus_warrant`; node `node_65d7f26b-711e-4ef9-ae0e-5bad2ac7a818`; category Keystone; one point.

## Source-confirmed behavior and static derivation

- The main proc listens to `on_hit`, `on_wield_melee`, `on_wield_ranged` and `on_shoot`. Ranged hits use an `attacked_unit` table to deduplicate targets within each shot: weakspot hits give three stacks and ordinary hits one. `on_shoot` clears that table. Each melee hit creates one Ranged Justice stack.
- If a Melee Justice ID exists, `on_wield_melee` creates the melee stat buff; `on_wield_ranged` similarly spends Ranged Justice. The corresponding Justice tracker exits when its stat buff activates, or when the keystone is lost. The base stack cap is 20.
- The core stat buffs have a base duration of 12s. Melee supplies `melee_power_level_modifier = 0.10` and `toughness_damage_taken_multiplier = 0.8`. Ranged supplies `ranged_power_level_modifier = 0.10`, `suppression_dealt = 0.5` and `ranged_max_hit_mass_attack_modifier = 0.5`.

## Fixed source evidence

- [scripts/settings/ability/archetype_talents/talents/adamant_talents.lua — L1826-L1885](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/adamant_talents.lua#L1826-L1885)
- [scripts/settings/talent/talent_settings_adamant.lua — L331-L370](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/talent/talent_settings_adamant.lua#L331-L370)
- [scripts/settings/buff/archetype_buff_templates/adamant_buff_templates.lua — L1574-L1731](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/adamant_buff_templates.lua#L1574-L1731)
- [scripts/settings/buff/archetype_buff_templates/adamant_buff_templates.lua — L1788-L1827](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/adamant_buff_templates.lua#L1788-L1827)
- [scripts/settings/buff/archetype_buff_templates/adamant_buff_templates.lua — L1828-L1932](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/adamant_buff_templates.lua#L1828-L1932)
- [scripts/utilities/attack/damage_taken_calculation.lua — L234-L258](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/attack/damage_taken_calculation.lua#L234-L258)
- [scripts/utilities/attack/power_level.lua — L25-L91](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/attack/power_level.lua#L25-L91)
- [scripts/settings/ability/archetype_talents/talents/adamant_talents.lua — L1826-L1885](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/adamant_talents.lua#L1826-L1885)
- [scripts/ui/views/talent_builder_view/layouts/adamant_tree.lua — L123-L155](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/ui/views/talent_builder_view/layouts/adamant_tree.lua#L123-L155)

## Example assumptions and limits

- **Accumulation and caps**: Each ranged enemy hit grants one Melee Justice stack; a weakspot hit on that enemy grants three instead. Each shot counts a given target only once, up to 20 stacks. Each melee hit grants one Ranged Justice stack, up to 20.

- **Switching and consumption**: Wielding the melee weapon consumes Melee Justice and grants +10% Melee Strength (PowerLevel) and 20% Toughness Damage Reduction for 12s. Wielding the ranged weapon consumes Ranged Justice and grants +10% Ranged Strength (PowerLevel), +50% Suppression and +50% Ranged Cleave for 12s. These core bonuses have fixed values; their magnitude does not scale with the number of stacks spent.

- **Toughness example**: The melee effect sets the Toughness-damage multiplier to 0.8, changing base Toughness damage of 100 to 80 points. It applies only while the 12s effect remains active.

- **Duration and PowerLevel examples**: Wielding the other weapon category ends the current buff early. Isolating this bonus, `PowerLevel 500 × 1.1 = 550`. With an existing same-stage 20% PowerLevel bonus, the value rises from 600 to 650. Both one stack and 20 stacks activate the same fixed core bonuses; the stack count separately affects selected upgrades.

Five ranged weakspot hits satisfying the counting conditions grant 15 stacks; five more ordinary hits reach 20. Wielding the melee weapon spends all those stacks and grants the fixed 12s melee bonus.

The core cap is 20 stacks. Separate upgrades provide team Toughness replenishment, cooldown restoration per second, or melee/ranged attack speed and critical chance; their details belong to the corresponding talent source pages. The examples isolate the specified modifiers. Toughness damage is in points and duration in seconds. PowerLevel enters later damage calculations; a +10% PowerLevel modifier is not a blanket +10% final-damage claim. Values and behavior reuse the fixed-version evidence; examples are static derivations. Game execution and the final game UI were not observed. Wording differences are compared against the existing implementation evidence without assuming a translation error.

## Chinese localization note

The existing Chinese record identifies its wording as granting an additional three stacks on a weakspot hit, which can imply `1 + 3 = 4`. The English says `grant 3 stacks`. The accepted weakspot branch directly grants three total stacks in place of the ordinary one. This is a Chinese-only mistranslation; it does not establish an English contradiction.

<a id="original-english-template-and-reconstruction"></a>

## Original English template and reconstruction

Steam Build `25606770`; `content/localization/ui`, resource hash `63564edcb7c3c5ee`; language `en` (code `0`).

- Name key `loc_talent_adamant_bullet_rain`, hash `0a84b343`, entry 662: **Terminus Warrant**.
- Description key `loc_talent_adamant_terminus_warrant_new_desc`, hash `26c20f58`, entry 2501.

Full raw template:

```text
Ranged Attacks grant stacks of Melee Justice for each Enemy Hit (max {max_stacks:%s}), Weakspot hits grant {weakspot_stacks:%s} stacks. Wielding your Primary Weapon spends your Melee Justice stacks to grant you {melee_strength:%s} Melee Strength and {tdr:%s} Toughness Damage Reduction for {melee_duration:%s}s.

Melee Hits grant stacks of Ranged Justice (max {max_stacks:%s}). Wielding your Secondary Weapon spends your Ranged Justice stacks to grant you {ranged_strength:%s} Ranged Strength, {ranged_cleave:%s} Ranged Cleave and {suppression:%s} Suppression for {ranged_duration:%s}s.
```

The display mappings read `talent_settings.terminus_warrant`. Count and duration fields use number formatting. Strength, Cleave and Suppression use default percentage formatting with a `+` prefix. `tdr` uses its explicit manipulation in place of default percentage multiplication, also with a `+` prefix. The mapped `melee_impact` field is absent from this raw template and is not added to its reconstruction. Values reuse the accepted evidence.

| Placeholder | Value | Formatting |
|---|---|---|
| max_stacks | 20 | Number → 20, in both clauses |
| weakspot_stacks | 3 | Number → 3 |
| melee_strength | 0.10 | Percentage × 100 with `+` prefix → +10% |
| tdr | 0.8 | Explicit round((1 − value) × 100) with `+` prefix → +20% |
| melee_duration | 12 | Number → 12; template adds s |
| ranged_strength | 0.10 | Percentage × 100 with `+` prefix → +10% |
| ranged_cleave | 0.50 | Percentage × 100 with `+` prefix → +50% |
| suppression | 0.50 | Percentage × 100 with `+` prefix → +50% |
| ranged_duration | 12 | Number → 12; template adds s |

Static reconstruction; not an observed game screen:

```text
Ranged Attacks grant stacks of Melee Justice for each Enemy Hit (max 20), Weakspot hits grant 3 stacks. Wielding your Primary Weapon spends your Melee Justice stacks to grant you +10% Melee Strength and +20% Toughness Damage Reduction for 12s.

Melee Hits grant stacks of Ranged Justice (max 20). Wielding your Secondary Weapon spends your Ranged Justice stacks to grant you +10% Ranged Strength, +50% Ranged Cleave and +50% Suppression for 12s.
```

## English comparison limits

The independently read English matches the opposite-weapon stack sources, three total weakspot stacks, both caps, weapon spending and numerical core effects. Ordinary stack counts, per-shot deduplication/reset, tracker exit, early buff termination, fixed magnitude, upgrade effects and examples are supplementary. No explicit English contradiction is established for this talent. Mechanisms, citations, shared formatting and icon provenance reuse the existing evidence.

## Icon source

[Original image](https://gameslantern.com/storage/sites/darktide/exporter/talents/adamant/keystone/adamant_terminus_warrant.webp) | [Media-Assets Issue](https://github.com/SyuanTsai/Media-Assets/issues/11#issuecomment-5932554216) | [Existing attachment](https://github.com/user-attachments/assets/47d0c2b2-0d8e-4906-a528-48f9488353e9). The icon identifies the talent; it is not mechanism evidence.
