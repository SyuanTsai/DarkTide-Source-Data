# Krak Grenade: source evidence

[繁體中文](../veteran_krak_grenade.md) | [Player description](README.md#veteran_krak_grenade) | [Technical index](SOURCE_INDEX.md) | [Original English comparison](LOCALIZATION_COMPARISON.md#veteran_krak_grenade)

## Identity, sticking and fuse

- Release 1.13.1, fixed SHA `7e662fcda16219d775b84af50322be2e9cd9d62e`. This one-point Blitz node replaces the grenade ability with Krak Grenade. [One-point Blitz node](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/ui/views/talent_builder_view/layouts/veteran_tree.lua#L1030-L1056); [Krak ability and display fields](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/veteran_talents.lua#L43-L64).
- Talent: `veteran_krak_grenade`. Exact English name key `loc_talent_ability_krak_grenade`, hash `7cde0528`: **Krak Grenade**. Actual description key `loc_talent_ability_krak_grenade_desc`, hash `c7aead0a`.
- Original English: Steam Build `25606770`, extracted 2026-10-02, resource `content/localization/ui`, resource hash `63564edcb7c3c5ee`, locale `en` (code `0`). UI JSONL SHA-256: `fb54bb69880e08b3a6e1c359bd970ed2416748bf5513d45c4b8a39c545e8c668`.
- Base capacity is **three grenade charges**. The ability consumes charges rather than a combat-ability cooldown. [Krak ability resource](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/player_abilities/abilities/veteran_abilities.lua#L51-L62); [Base Krak capacity](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/talent/talent_settings_veteran.lua#L209-L211).
- Sticky armor types are `armored`, `super_armor` and `resistant`, corresponding to Flak Armour, Carapace Armour and Unyielding. TrueFlight seeks suitable armor hit zones; this is not a promise to stick to every enemy or every body part. [Sticky armor and projectile configuration](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/projectile/player_projectile_templates.lua#L348-L373); [TrueFlight eligible armor hit zones](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/locomotion/utilities/true_flight_functions/true_flight_krak_grenade.lua#L69-L120).
- Collision or sticking starts a **one-second fuse**. Without collision, `max_lifetime = 2` is the threshold for starting that fuse, not an immediate two-second detonation; the resulting no-collision timeline is approximately `2 + 1 = 3 seconds`. Collision updates `new_life_time`, so the actual timing depends on contact and update boundaries. [Sticky armor and projectile configuration](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/projectile/player_projectile_templates.lua#L348-L373); [Collision and lifetime fuse handling](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/projectile_damage/projectile_damage_extension.lua#L232-L279).

## Explosion and damage basis

- The close explosion reaches **1.5m**; the outer blast extends to **5m** and uses a separate profile with distance falloff. The close explosion can penetrate shields. [Krak inner/outer explosion and shield penetration](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/damage/explosion_templates/player_grenade_explosion_templates.lua#L225-L257).
- The close profile's attack distribution is `2,400`; at power level `500`, output-damage scale `20` and normalization maximum `10,000`, the static normalization is `500 ÷ 10,000 × 20 = 1`. For a non-boss, ordinary hit zone and no other modifiers, the unarmoured close result is **2,400 damage units**. Carapace's armor damage multiplier is `2`, giving **4,800** under the same assumptions. [Close Krak damage profile and boss power modifier](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/damage/damage_profiles/demolitions_damage_profile_templates.lua#L338-L385); [Power-level normalization values](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/damage/power_level_settings.lua#L7-L29); [Power-scaled damage distribution](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/attack/damage_profile.lua#L377-L444); [Damage and armor calculation](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/attack/damage_calculation.lua#L219-L228).
- `boss_power_level_modifier = 0.8` changes the power input for bosses. It is not sufficient to describe every boss result as a universal 20% final-damage reduction. Outer-blast damage and later modifiers likewise require their own conditions. [Close Krak damage profile and boss power modifier](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/damage/damage_profiles/demolitions_damage_profile_templates.lua#L338-L385); [Power-scaled damage distribution](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/attack/damage_profile.lua#L377-L444).
- [Grenade Tinkerer](veteran_improved_grenades.md) adds `krak_damage = 0.75` at the applicable damage-stat stage. That modifier does not remove armor, distance or boss differences. [Grenade Tinkerer modifiers](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/veteran_buff_templates.lua#L1297-L1306); [Profile-specific damage-stat application](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/attack/damage_calculation.lua#L570-L584).

## Damage and timing examples

For damage examples, use the close explosion, a non-boss target, an ordinary hit zone, no critical/weakspot or other damage modifiers, and the stated armor multiplier. Timing starts at projectile spawn and assumes the specified collision history. These are static calculations, not game measurements. [Close Krak damage profile and boss power modifier](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/damage/damage_profiles/demolitions_damage_profile_templates.lua#L338-L385); [Power-level normalization values](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/damage/power_level_settings.lua#L7-L29); [Power-scaled damage distribution](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/attack/damage_profile.lua#L377-L444); [Damage and armor calculation](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/attack/damage_calculation.lua#L219-L228); [Sticky armor and projectile configuration](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/projectile/player_projectile_templates.lua#L348-L373); [Collision and lifetime fuse handling](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/projectile_damage/projectile_damage_extension.lua#L232-L279); [Base Krak capacity](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/talent/talent_settings_veteran.lua#L209-L211).

| Assumptions | Substitution and result | Player meaning |
|---|---|---|
| Close-profile distribution 2,400, power 500, scale 20, maximum 10,000 | `2,400 × (500 ÷ 10,000) × 20 = 2,400 damage units`. | The listed power normalization is neutral at this input; power and final damage are distinct. |
| Same close hit; compare armor multipliers 1 and 2 | Unarmoured: `2,400 × 1 = 2,400`; Carapace: `2,400 × 2 = 4,800 damage units`. | The armor stage doubles this isolated result, not every hit against every enemy. |
| Stick at 0.4s after projectile spawn; one-second fuse | `0.4 + 1 = 1.4 seconds`, approximately. | Collision/sticking starts the fuse; the timer is not always three seconds. |
| No collision; two-second lifetime threshold and one-second fuse | `2 + 1 = 3 seconds`, approximately. | The two-second threshold begins the fuse rather than detonating immediately. |
| Start with three charges; one throw, no extra-projectile roll or replenishment | `3 − 1 = 2 grenade charges`. | Grenade inventory cost is separate from sticking and damage. |

## Original English template and static text

Full raw description, hash `c7aead0a`:

```text
Throw a grenade that deals devastating Damage. Sticks to Flak Armoured, Carapace Armoured & Unyielding Enemies.
```

| Parameter | Definition and formatting | Use in this description |
|---|---|---|
| `talent_name` | `loc_talent_ability_krak_grenade`, hash `7cde0528`; localized string | Unused; the actual description has no placeholder |

[Krak ability and display fields](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/veteran_talents.lua#L43-L64); [Localized-name formatting](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/ui/views/talent_builder_view/utilities/talent_layout_parser.lua#L426-L428).

There are no numeric placeholders to reconstruct. The static plain-text description is identical to the raw text above; this is not an observed game screen. Its armor-category wording agrees with the established sticking evidence, while the exact damage, capacity, fuse and radii are supplemental mechanism details. No English erratum is supported.

## Limits

Actual homing, sticking against individual hit zones, shield interactions, collision/update timing, damage against bosses or outer-blast targets and final game UI have not been measured in game. The 4,800 example is conditional and must not be read as a fixed value for every detonation.

## Icon source

[Original image](https://gameslantern.com/storage/sites/darktide/exporter/talents/veteran/tactical/veteran_krak_grenade.webp) | [Media-Assets Issue](https://github.com/SyuanTsai/Media-Assets/issues/6#issuecomment-5922922455) | [Issue attachment](https://github.com/user-attachments/assets/b0967626-73da-49a8-a1b9-1f4d6c1daffa)

The icon identifies the talent; it is not mechanism evidence.
