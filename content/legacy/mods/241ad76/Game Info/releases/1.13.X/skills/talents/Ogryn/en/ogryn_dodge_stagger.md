# Outta My Way!: source evidence

[繁體中文](../ogryn_dodge_stagger.md) | [Base effects](BASE_EFFECTS.md#ogryn_dodge_stagger) | [Technical index](SOURCE_INDEX.md) | [English comparison](LOCALIZATION_COMPARISON.md#ogryn_dodge_stagger)

Release 1.13.1; fixed SHA `7e662fcda16219d775b84af50322be2e9cd9d62e`. Base talent `ogryn_dodge_stagger`; no selectable talent point is spent. Name key `loc_talent_ogryn_dodge_stagger`; description key `loc_talent_ogryn_dodge_stagger_desc`. Mechanisms and examples reuse verified source evidence; no in-game test was performed.

## Source-confirmed behavior and static derivation

- During `dodge_update`, a sphere overlap check with radius 1.5 is made at `player position + dodge_direction`. It excludes `elite / special` and non-`human_sized` enemies. Each `dodge_start` clears the set of hit enemies.
- `power_level = 500 / (consecutive_dodges × 2 − 1) × (4 − hit_distance)`. `ogryn_dodge_impact` has `attack=0` and `impact=0.5`; the Strength still passes through stagger curves and target thresholds.

## Fixed source evidence

- [scripts/settings/buff/archetype_buff_templates/ogryn_buff_templates.lua — L3064-L3098](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/ogryn_buff_templates.lua#L3064-L3098)
- [scripts/settings/buff/archetype_buff_templates/ogryn_buff_templates.lua — L3107-L3146](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/ogryn_buff_templates.lua#L3107-L3146)
- [scripts/settings/damage/damage_profiles/common_damage_profile_templates.lua — L1007-L1043](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/damage/damage_profiles/common_damage_profile_templates.lua#L1007-L1043)
- [scripts/settings/ability/archetype_talents/talents/ogryn_talents.lua — L2212-L2221](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/ogryn_talents.lua#L2212-L2221)
- [scripts/settings/archetype/archetypes/ogryn_archetype.lua — L50-L74](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/archetype/archetypes/ogryn_archetype.lua#L50-L74)

## Examples and limits

- **Trigger**: Dodging knocks aside ordinary human-sized enemies near the direction of movement. Elites, Specialists and large enemies are excluded. Each enemy is processed only once per dodge.

- **Area and strength**: The checked area is ahead in the dodge direction, with radius 1.5m. Greater distance and more consecutive dodges weaken the impact. It does not directly deal Health damage.

- **Strength example**: At a fixed enemy distance of 2m, the first dodge's impact Strength is `500 × (4 − 2) ÷ (2 × 1 − 1) = 1000`. The second gives `1000 ÷ 3 ≈ 333.3`. This Strength enters the stagger formula; it is not damage.

The character dodge system resets the consecutive-dodge count. Formula examples fix distance and count; they do not imply that every enemy is guaranteed to fall down. Local Build 25606770 corresponds to the fixed 1.13.1 source. Actual presentation and behavior remain unobserved in game.

<a id="original-english-template-and-reconstruction"></a>

## Original English template and reconstruction

Steam Build `25606770`; `content/localization/ui`, resource hash `63564edcb7c3c5ee`; language `en` (code `0`).

- Name key `loc_talent_ogryn_dodge_stagger`, hash `7abf1c42`, entry 7973: **Outta My Way!**.
- Description key `loc_talent_ogryn_dodge_stagger_desc`, hash `de464787`, entry 14415.

Full raw template:

~~~text
Dodging staggers nearby Non Elite/Specialist, human-sized, enemies.
~~~

| Placeholder | Value | Formatting |
|---|---|---|
| None | Empty format_values | Exported description is literal text |

Only the missing text mapping / display formatting in the cited talent definition, lines 2212–2221, was read. Accepted mechanisms, values, examples and common formatting were reused.

Static reconstruction; not an observed game screen:

~~~text
Dodging staggers nearby Non Elite/Specialist, human-sized, enemies.
~~~

## English comparison

The independently read English says dodging staggers nearby non-Elite/non-Specialist human-sized enemies, matching the accepted target filters and trigger. The directional sphere, once-per-dodge target processing, distance/consecutive-dodge scaling and zero direct damage supplement the text. No explicit English contradiction is established.
