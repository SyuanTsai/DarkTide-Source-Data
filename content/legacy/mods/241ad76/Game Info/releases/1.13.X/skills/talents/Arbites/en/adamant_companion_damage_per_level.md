# Companion Damage per Level: source evidence

[繁體中文](../adamant_companion_damage_per_level.md) | [Base effects](BASE_EFFECTS.md#adamant_companion_damage_per_level) | [Technical index](SOURCE_INDEX.md) | [English comparison](LOCALIZATION_COMPARISON.md#adamant_companion_damage_per_level)

Release 1.13.1; fixed SHA `7e662fcda16219d775b84af50322be2e9cd9d62e`. Base talent `adamant_companion_damage_per_level`; no selectable talent point is spent.

## Source-confirmed behavior and static derivation

- The base passive installs `adamant_companion_damage_per_level`. It reads owner `profile.current_level`, computes `fifth_level = floor(level / 5)` and `lerp_value = fifth_level / 6`, and interpolates companion damage multiplier from 1 to 2. The formula is `1 + floor(level / 5) / 6`: level 10 gives 4/3 and level 30 gives 2.
- For a companion attacker, `damage_calculation` reads owner `stat_buffs.companion_damage_multiplier` and applies it to `damage_multiplier`, except when `damage_type = bleeding`. Owner `companion_damage_modifier` is a separate additive field in `damage_stat_buffs`, not this level multiplier.
- Pounce uses the target breed's `initial_damage_profile` for the initial hit; ongoing bites repeatedly use its `damage_profile` at `damage_frequency`. The shared initial profile has attack distribution 0 and impact 10. Human attack distribution is 100; Ogryn is 200 and monster is 300. Ogryn/monster profiles have `initial_pounce` and `dog_bleed` tags; the human profile lacks both.
- Attack power distribution and `POWER_LEVEL = 500` enter normal power calculation. They are not final health-damage points. Breed armour modifiers and boost curves also affect damage.

## Fixed source evidence

- [scripts/settings/archetype/archetypes/adamant_archetype.lua — L63-L65](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/archetype/archetypes/adamant_archetype.lua#L63-L65)
- [scripts/settings/ability/archetype_talents/talents/adamant_talents.lua — L21-L29](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/adamant_talents.lua#L21-L29)
- [scripts/settings/buff/archetype_buff_templates/adamant_buff_templates.lua — L64-L85](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/adamant_buff_templates.lua#L64-L85)
- [scripts/utilities/attack/damage_calculation.lua — L265-L276](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/attack/damage_calculation.lua#L265-L276)
- [scripts/settings/damage/damage_profiles/archetypes/adamant_damage_profile_templates.lua — L181-L235](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/damage/damage_profiles/archetypes/adamant_damage_profile_templates.lua#L181-L235)
- [scripts/settings/damage/damage_profiles/archetypes/adamant_damage_profile_templates.lua — L236-L287](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/damage/damage_profiles/archetypes/adamant_damage_profile_templates.lua#L236-L287)
- [scripts/extension_systems/behavior/nodes/actions/bt_companion_target_pounced_action.lua — L45-L85](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/behavior/nodes/actions/bt_companion_target_pounced_action.lua#L45-L85)
- [scripts/extension_systems/behavior/nodes/actions/bt_companion_target_pounced_action.lua — L140-L183](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/behavior/nodes/actions/bt_companion_target_pounced_action.lua#L140-L183)
- [scripts/settings/breed/breeds/cultist/cultist_melee_breed.lua — L391-L399](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/breed/breeds/cultist/cultist_melee_breed.lua#L391-L399)
- [scripts/settings/breed/breeds/cultist/cultist_mutant_breed.lua — L421-L430](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/breed/breeds/cultist/cultist_mutant_breed.lua#L421-L430)
- [scripts/settings/breed/breeds/chaos/chaos_spawn_breed.lua — L461-L469](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/breed/breeds/chaos/chaos_spawn_breed.lua#L461-L469)

## Example assumptions and limits

- **Level scaling**: Your Cyber-Mastiff's non-Bleeding damage gains one sixth of the baseline damage for every full 5 levels. Levels 1–4 use multiplier 1; level 10 is approximately 1.33 and level 30 is 2.

- **Damage example**: With other conditions unchanged, an attack dealing 100 at low level becomes 100 × (1 + 2 ÷ 6) ≈ 133.33 at level 10 and 100 × 2 = 200 at level 30. Bleeding damage does not receive this multiplier.

At level 10, `1 + floor(10 / 5) / 6 = 4/3`; at level 30, `1 + 6/6 = 2`. For a human pounce profile with attack distribution 100, the level-30 companion multiplier doubles that damage-multiplier term; armour, power and hit location still change final health damage. The profile values 100/200/300 are distributions, not final damage. Bleeding DoT does not receive this companion multiplier. Ogryn/monster bleed tags do not independently guarantee bleeding; separate passive conditions still apply.

Values and behavior reuse the verified fixed-version evidence. The examples are static derivations, not in-game tests. The local English Build and fixed source both correspond to 1.13.1.

<a id="original-english-template-and-reconstruction"></a>

## Original English template and reconstruction

Steam Build `25606770`; `content/localization/ui`, resource hash `63564edcb7c3c5ee`; language `en` (code `0`).

- Display-name key `loc_inventory_title_slot_companion_gear_full`, hash `222be16d`, entry 2218: **Cyber-Mastiff**. The document heading preserves the base passive's internal name.
- Description key `loc_talent_arbites_mastiff_description`, hash `78dd0b24`, entry 7851.

Full raw text; no placeholders:

~~~text
You are accompanied by a trusty Cyber-Mastiff who will automatically attack and pin enemies.
~~~

## English comparison

The independently read English describes the companion attacking and pinning enemies; it supplies no level-scaling formula or damage amount. The verified owner-level formula, Bleeding exclusion, separate modifier, pounce-profile details and numerical examples therefore supplement the generic companion text. No explicit English contradiction is established.
