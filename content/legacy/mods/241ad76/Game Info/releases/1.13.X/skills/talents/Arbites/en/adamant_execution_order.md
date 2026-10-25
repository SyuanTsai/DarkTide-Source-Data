# Execution Order: source evidence

[繁體中文](../adamant_execution_order.md) | [Player description](README.md#adamant_execution_order) | [Technical index](SOURCE_INDEX.md) | [English comparison](LOCALIZATION_COMPARISON.md#adamant_execution_order)

Release 1.13.1; fixed SHA `7e662fcda16219d775b84af50322be2e9cd9d62e`. Talent `adamant_execution_order`; node `node_52c3f35e-7fe4-4321-a04c-2a51eccac74c`; category Keystone; one point.

## Source-confirmed behavior and static derivation

- The selector queries within 40m, with `dot > 0.5` and line of sight. The `monster`, `captain` and `cultist_captain` instant-type branches do not require `t > next_t`. Selection stops at the first eligible candidate; `chosen_distance` does not establish nearest-target selection. Already marked units are excluded from candidates, without clearing other marks. Removal requires the unit to be beyond 40m, behind the player and not aggroed.
- Only the server handles `on_hit`. A marked target's death invokes `_execution_order_proc`, replenishing 0.15 of maximum Toughness and granting the owner an 8s buff with +10% Damage / +10% Attack Speed, plus any selected upgrade child buffs. The same proc also grants the companion buff. `on_minion_death` returns directly, so arbitrary kills by teammates do not trigger it.
- The companion-hit branch requires `damage_profile.initial_pounce` and the victim to remain among the marked `targets/deleted_units`, then grants an 8s buff with `companion_damage_modifier = 1.5`. Shared damage calculation adds the owner's companion-damage modifier to the companion's damage stat. Ogryn and Monstrosity continuous-pinning profiles also carry this flag: its name does not prove only one trigger per pounce. Marked kills independently grant the same companion buff.

## Fixed source evidence

- [scripts/settings/ability/archetype_talents/talents/adamant_talents.lua — L2132-L2165](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/adamant_talents.lua#L2132-L2165)
- [scripts/settings/talent/talent_settings_adamant.lua — L102-L119](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/talent/talent_settings_adamant.lua#L102-L119)
- [scripts/settings/buff/archetype_buff_templates/adamant_buff_templates.lua — L845-L955](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/adamant_buff_templates.lua#L845-L955)
- [scripts/settings/buff/archetype_buff_templates/adamant_buff_templates.lua — L958-L990](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/adamant_buff_templates.lua#L958-L990)
- [scripts/settings/buff/archetype_buff_templates/adamant_buff_templates.lua — L991-L1097](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/adamant_buff_templates.lua#L991-L1097)
- [scripts/settings/buff/archetype_buff_templates/adamant_buff_templates.lua — L1098-L1122](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/adamant_buff_templates.lua#L1098-L1122)
- [scripts/utilities/toughness/toughness.lua — L16-L35](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/toughness/toughness.lua#L16-L35)
- [scripts/utilities/attack/damage_calculation.lua — L265-L276](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/attack/damage_calculation.lua#L265-L276)
- [scripts/utilities/action/action_handler.lua — L356-L428](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/action/action_handler.lua#L356-L428)
- [scripts/utilities/attack/damage_calculation.lua — L236-L276](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/attack/damage_calculation.lua#L236-L276)
- [scripts/settings/damage/damage_profiles/archetypes/adamant_damage_profile_templates.lua — L227-L240](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/damage/damage_profiles/archetypes/adamant_damage_profile_templates.lua#L227-L240)
- [scripts/settings/ability/archetype_talents/talents/adamant_talents.lua — L2132-L2165](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/adamant_talents.lua#L2132-L2165)
- [scripts/ui/views/talent_builder_view/layouts/adamant_tree.lua — L91-L122](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/ui/views/talent_builder_view/layouts/adamant_tree.lua#L91-L122)

## Example assumptions and limits

- **Automatic marking**: Selects Elites, Specialists or Bosses within 40m in front of you and in line of sight for Mercy Sanction. After marking an ordinary Elite or Specialist, selection waits 3s; Monstrosities and Bosses bypass that waiting period. Multiple marks can remain at once.

- **Marked-kill effect**: You or your own Cyber-Mastiff killing a marked target replenishes 15% of maximum Toughness and grants you +10% Damage and +10% Attack Speed, plus +150% direct Cyber-Mastiff Damage, for 8s. Retriggering refreshes the duration without increasing the magnitude. A kill by another teammate alone does not trigger this effect.

- **Cyber-Mastiff pounce**: The Cyber-Mastiff's initial pounce hit on a marked target also grants the 8s +150% companion-damage bonus. Later pinning attacks against Ogryn enemies and Monstrosities can also refresh it. This companion-damage bonus excludes Bleed.

- **Examples**: With maximum Toughness 100, replenish 15 points, capped at full Toughness. Isolating the damage bonuses, player base damage 100 becomes 110 and companion base damage 100 becomes 250. With an existing same-stage 25% player-damage bonus, `100 × (1 + 25% + 10%) = 135 damage`. An attack action with adjustable speed taking 1s instead takes `1 ÷ 1.1 ≈ 0.91s`.

When maximum Toughness is 100 and the current deficit is at least 15, a qualifying marked kill replenishes 15 points. The owner's damage and attack-speed bonuses expire after 8s. A qualifying Cyber-Mastiff pounce hit on a marked target gives isolated companion damage `1 + 1.5 = 2.5` times the base for 8s.

The English broadly describes companion attacks on a marked enemy, while the fixed hit branch requires `initial_pounce`. Later Ogryn/Monstrosity pinning attacks can carry the flag, and marked kills provide a separate route to the same buff. The wording boundary remains unresolved. Periodic marking is conditional on valid candidates, range, facing, line of sight and target category; it is not an unconditional mark every 3s.

The damage examples isolate the stated additive bonuses, excluding enemy defenses and other modifiers. Damage and Toughness examples are in points; durations are in seconds; range is in metres. Values and behavior reuse the fixed-version evidence; examples are static derivations. Game execution and the final game UI were not observed. A discrepancy in the wording is recorded against existing implementation evidence without assuming a translation error.

<a id="original-english-template-and-reconstruction"></a>

## Original English template and reconstruction

Steam Build `25606770`; `content/localization/ui`, resource hash `63564edcb7c3c5ee`; language `en` (code `0`).

- Name key `loc_talent_adamant_exterminator`, hash `22ae6e5d`, entry 2256: **Execution Order**.
- Description key `loc_talent_execution_order_description`, hash `720bc321`, entry 7415.

Full raw template:

```text
Periodically mark Elites, Specialists and Bosses for Mercy Sanction. Killing a marked enemy replenishes {toughness:%s} Toughness.

Your Cyber-Mastiff gains {dog_damage:%s} Cyber-Mastiff Damage for {time:%s}s after attacking a marked enemy. You gain {damage:%s} Damage and {attack_speed:%s} Attack Speed for {time:%s}s after killing a Marked Enemy.
```

The display mappings read `talent_settings.execution_order`. `time` uses number formatting. The four fractional stat values use percentage formatting; only `damage`, `dog_damage` and `attack_speed` specify a `+` prefix. Values reuse the accepted evidence.

| Placeholder | Value | Formatting |
|---|---|---|
| time | 8 | Number → 8; template adds s |
| toughness | 0.15 | Percentage × 100 → 15% |
| damage | 0.10 | Percentage × 100 with `+` prefix → +10% |
| dog_damage | 1.50 | Percentage × 100 with `+` prefix → +150% |
| attack_speed | 0.10 | Percentage × 100 with `+` prefix → +10% |

Static reconstruction; not an observed game screen:

```text
Periodically mark Elites, Specialists and Bosses for Mercy Sanction. Killing a marked enemy replenishes 15% Toughness.

Your Cyber-Mastiff gains +150% Cyber-Mastiff Damage for 8s after attacking a marked enemy. You gain +10% Damage and +10% Attack Speed for 8s after killing a Marked Enemy.
```

## English comparison limits

The independently read English matches marking categories, marked-kill recovery and the numerical player/companion bonuses. Range, selection, cadence exceptions, mark retention/removal, trigger ownership, refresh, Bleed limits and examples are supplementary. The scope of `after attacking` versus the `initial_pounce` condition cannot be confirmed from the existing evidence. No explicit English contradiction is established for this talent. Mechanisms, citations, shared formatting and icon provenance reuse the existing evidence.

## Icon source

[Original image](https://gameslantern.com/storage/sites/darktide/exporter/talents/adamant/keystone/adamant_execution_order.webp) | [Media-Assets Issue](https://github.com/SyuanTsai/Media-Assets/issues/11#issuecomment-5932554216) | [Existing attachment](https://github.com/user-attachments/assets/66f3dd5d-68b9-415a-8330-b6daf3fb427c). The icon identifies the talent; it is not mechanism evidence.
