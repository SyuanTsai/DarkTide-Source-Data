# Thick Skin: source evidence

[繁體中文](../ogryn_base_tank_passive.md) | [Base effects](BASE_EFFECTS.md#ogryn_base_tank_passive) | [Technical index](SOURCE_INDEX.md) | [English comparison](LOCALIZATION_COMPARISON.md#ogryn_base_tank_passive)

Release 1.13.1; fixed SHA `7e662fcda16219d775b84af50322be2e9cd9d62e`. Base talent `ogryn_base_tank_passive`; no selectable talent point is spent. Name key `loc_talent_ogryn_2_base_3`; description key `loc_talent_ogryn_tank_passive_desc`. Mechanisms and examples reuse verified source evidence; no in-game test was performed.

## Source-confirmed behavior and static derivation

- Tank settings: `damage_taken_multiplier=0.8`, `toughness_damage_taken_multiplier=0.75`, `damage_taken_while_dodging=0.5` and `dodge_linger_duration=0.25`.
- `conditional_stat_buffs` applies 0.5 while `Dodge.is_dodging`. `on_dodge_end` separately activates `proc_stat_buffs` for 0.25s. `ProcBuff` first calls the parent to calculate ordinary/conditional stats, then adds active proc stats. `damage_taken_multiplier` is multiplicative, so the previous dodge's lingering effect and the next dodge's effect multiply: general multiplier `0.8 × 0.5 × 0.5 = 0.2`; Toughness further multiplies by 0.75, giving 0.15. This is static derivation, not an in-game measurement.
- `static_movement_reduction_multiplier=0` removes only the slowdown delta from `weapon_template.static_speed_reduction_mod`. Other `weapon_action / alternate_fire` multipliers are independent.

## Fixed source evidence

- [scripts/settings/talent/talent_settings_ogryn.lua — L5-L11](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/talent/talent_settings_ogryn.lua#L5-L11)
- [scripts/settings/buff/archetype_buff_templates/ogryn_buff_templates.lua — L57-L81](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/ogryn_buff_templates.lua#L57-L81)
- [scripts/extension_systems/weapon/player_unit_weapon_extension.lua — L1496-L1512](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/weapon/player_unit_weapon_extension.lua#L1496-L1512)
- [scripts/utilities/attack/damage_calculation.lua — L587-L626](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/attack/damage_calculation.lua#L587-L626)
- [scripts/utilities/attack/damage_taken_calculation.lua — L223-L258](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/attack/damage_taken_calculation.lua#L223-L258)
- [scripts/settings/ability/archetype_talents/talents/ogryn_talents.lua — L467-L504](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/ogryn_talents.lua#L467-L504)
- [scripts/settings/archetype/archetypes/ogryn_archetype.lua — L50-L74](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/archetype/archetypes/ogryn_archetype.lua#L50-L74)
- [scripts/extension_systems/buff/buffs/buff.lua — L689-L727](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/buff/buffs/buff.lua#L689-L727)
- [scripts/extension_systems/buff/buffs/proc_buff.lua — L288-L299](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/buff/buffs/proc_buff.lua#L288-L299)
- [scripts/settings/buff/buff_settings.lua — L775-L775](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/buff_settings.lua#L775-L775)

## Examples and limits

- **Base reduction**: Reduce general damage by 20%, with a further 25% reduction to Toughness damage. Ignoring other modifiers, Health damage 100 becomes 80. Toughness damage passing through both stages becomes `100 × 0.8 × 0.75 = 60`.

- **Dodge protection**: Gain an additional 50% damage reduction while dodging, retained for 0.25s after the dodge ends. Counting only the base 20% and this 50%, damage 100 becomes `100 × 0.8 × 0.5 = 40`.

- **Consecutive dodges**: Starting another dodge within 0.25s of the previous dodge's end makes the two 50% reductions multiply during overlap. With the above base protection alone, general damage 100 becomes `100 × 0.8 × 0.5 × 0.5 = 20`; Toughness damage additionally multiplies by 0.75, giving 15.

- **Movement limits**: Remove the weapon's fixed movement slowdown. Aiming, attack actions and slowdowns from other sources follow their respective effects.

Damage examples isolate only the listed stages. Enemy attacks, Toughness bleedthrough, Corruption and special damage may follow other paths. Local Build 25606770 corresponds to the fixed 1.13.1 source. Actual presentation and behavior remain unobserved in game.

<a id="original-english-template-and-reconstruction"></a>

## Original English template and reconstruction

Steam Build `25606770`; `content/localization/ui`, resource hash `63564edcb7c3c5ee`; language `en` (code `0`).

- Name key `loc_talent_ogryn_2_base_3`, hash `277672aa`, entry 2554: **Thick Skin**.
- Description key `loc_talent_ogryn_tank_passive_desc`, hash `70b7dd54`, entry 7317.

Full raw template:

~~~text
{toughness_reduction%s} Toughness Damage Reduction & {damage_reduction%s} Damage Resistance. In addition, while Dodging, and for {duration:%s}s afterwards, you have a further {dr:%s} Damage Resistance.
~~~

| Placeholder | Value | Formatting |
|---|---|---|
| toughness_reduction | shared tank.toughness_damage_taken_multiplier = 0.75 | math_round((1 − value) × 100); percentage with explicit + prefix → +25% |
| damage_reduction | shared tank.damage_taken_multiplier = 0.8 | math_round((1 − value) × 100); percentage with explicit + prefix → +20% |
| duration | shared tank.dodge_linger_duration = 0.25 | Number → 0.25 |
| dr | shared tank.damage_taken_multiplier × tank.damage_taken_while_dodging = 0.8 × 0.5 = 0.4 | Percentage with explicit + prefix; no reduction conversion → +40% |

Only the missing text mapping / display formatting in the cited talent definition, lines 467–504, was read. Accepted mechanisms, values, examples and common formatting were reused. The exact exported placeholder spellings are retained in the raw template. The dr formatter directly displays the remaining multiplier 0.4 as +40%; it does not convert it to a reduction.

Static reconstruction; not an observed game screen:

~~~text
+25% Toughness Damage Reduction & +20% Damage Resistance. In addition, while Dodging, and for 0.25s afterwards, you have a further +40% Damage Resistance.
~~~

## English comparison

The independently read English agrees with the +25% Toughness reduction, +20% general reduction and 0.25s dodge linger. Its claim of a further +40% Damage Resistance conflicts with the accepted extra dodge multiplier 0.5 / 50% reduction. The reconstructed 40% comes from 0.8 × 0.5, the remaining general-damage fraction after base and dodge protection, not the additional reduction. Consecutive-dodge multiplication and removal of fixed weapon slowdown supplement the description.
