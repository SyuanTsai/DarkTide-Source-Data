# Guardsman

[繁體中文](../veteran_base_ranged_damage.md) | [Base effects](BASE_EFFECTS.md#veteran_base_ranged_damage) | [Technical index](SOURCE_INDEX.md)

## How it works

- Gain 25% Ranged Damage, added to other damage bonuses at the same calculation stage.
- Assume stage base damage of 100, with other multipliers held at 1. With this effect alone, `100 × (1 + 25%) = 125 damage`. With another 15% ranged bonus at the same stage, `100 × (1 + 25% + 15%) = 140 damage`.

## Source-confirmed behavior and static derivation

Release 1.13.1, fixed SHA `7e662fcda16219d775b84af50322be2e9cd9d62e`. Talent identifier: `veteran_base_ranged_damage`.

- The class base-talent list enables `veteran_base_ranged_damage`; it is not an additional selectable node beyond the 77 nodes in the player tree index.
- The base passive installs the buff of the same identifier, with `ranged_damage = 0.25`.
- `buff_settings` classifies `ranged_damage` as an `additive_multiplier`. `damage_calculation` adds its value minus 1 to `damage_stat_buffs` only for `attack_type == ranged`.
- The examples isolate this damage stage; target armour, hit location, distance and other multipliers are excluded. Another 15% bonus at the same stage is added to the baseline; do not multiply 125 by 1.15.
- The implementation's internal `name` is "Increased Ranged Damage". The exact same-build localized display name is **Guardsman**.

## Fixed source evidence

- [scripts/settings/archetype/archetypes/veteran_archetype.lua — L50-L74](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/archetype/archetypes/veteran_archetype.lua#L50-L74)
- [scripts/settings/ability/archetype_talents/talents/veteran_talents.lua — L1400-L1416](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/veteran_talents.lua#L1400-L1416)
- [scripts/settings/talent/talent_settings_veteran.lua — L64-L66](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/talent/talent_settings_veteran.lua#L64-L66)
- [scripts/settings/buff/archetype_buff_templates/veteran_buff_templates.lua — L2122-L2131](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/veteran_buff_templates.lua#L2122-L2131)
- [scripts/settings/buff/buff_settings.lua — L943-L944](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/buff_settings.lua#L943-L944)
- [scripts/utilities/attack/damage_calculation.lua — L232-L242](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/attack/damage_calculation.lua#L232-L242)
- [scripts/utilities/attack/damage_calculation.lua — L317-L319](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/attack/damage_calculation.lua#L317-L319)

<a id="original-english-template-and-reconstruction"></a>

## Original English template and reconstruction

Steam Build `25606770`; `content/localization/ui`, resource hash `63564edcb7c3c5ee`; language `en` (code `0`).

- Name key: `loc_talent_veteran_base_ranged_damage`; hash `0c3fe87c`; entry 787; exact name: **Guardsman**.
- Description key: `loc_talent_veteran_base_ranged_damage_desc`; hash `45d3d98d`; entry 4532.

Full raw template:

```text
{ranged_damage:%s} Ranged Damage.
```

The necessary display mapping at `veteran_talents.lua` lines 1400–1416 uses percentage formatting with a `+` prefix and `talent_settings.veteran_base_ranged_damage.ranged_damage`. The accepted dossier supplies the 0.25 value; shared percentage formatting evidence is reused.

| Placeholder | Accepted value | Formatting |
|---|---|---|
| ranged_damage | 0.25 | Percentage formatting × 100, with explicit + prefix, gives +25%. |

Statically reconstructed text; not an observed game screen:

```text
+25% Ranged Damage.
```

[Independent English comparison](LOCALIZATION_COMPARISON.md#veteran_base_ranged_damage).

## Evidence limits

- The Chinese heading uses the explanatory label Increased Ranged Damage; the exact English UI name is Guardsman.
- Mechanisms and citations reuse the accepted Chinese dossier. In-game execution and final game UI observation were not performed.
