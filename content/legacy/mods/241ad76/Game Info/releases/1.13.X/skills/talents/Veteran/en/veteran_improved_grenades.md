# Grenade Tinkerer: source evidence

[繁體中文](../veteran_improved_grenades.md) | [Player description](README.md#veteran_improved_grenades) | [Technical index](SOURCE_INDEX.md) | [Original English comparison](LOCALIZATION_COMPARISON.md#veteran_improved_grenades)

## Identity and grenade-specific effects

- Release 1.13.1, fixed SHA `7e662fcda16219d775b84af50322be2e9cd9d62e`. Blitz modifier; the node costs one talent point. [One-point Blitz modifier node](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/ui/views/talent_builder_view/layouts/veteran_tree.lua#L971-L996); [Installed passive and display fields](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/veteran_talents.lua#L128-L205).
- Talent: `veteran_improved_grenades`. Exact English name key `loc_talent_veteran_improved_grenades`, hash `3d2c9347`: **Grenade Tinkerer**.
- Actual description key `loc_talent_veteran_improved_grenades_desc`, hash `60708f06`.
- Original English: Steam Build `25606770`, extracted 2026-10-02, resource `content/localization/ui`, resource hash `63564edcb7c3c5ee`, locale `en` (code `0`). UI JSONL SHA-256: `fb54bb69880e08b3a6e1c359bd970ed2416748bf5513d45c4b8a39c545e8c668`.
- The installed passive supplies `frag_damage = 0.25`, `explosion_radius_modifier_frag = 0.25`, `krak_damage = 0.75` and `smoke_fog_duration_modifier = 1`. These increase Frag explosion damage/radius by **25%**, Krak explosion damage by **75%**, and Smoke duration by **100%**. [Installed passive and display fields](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/veteran_talents.lua#L128-L205); [Four grenade modifier stats](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/veteran_buff_templates.lua#L1297-L1306).
- Frag and Krak damage profiles add their own corresponding stat to the damage-stat calculation. The Frag explosion's damage bonus does not apply to its separate bleed profile. Distance, armor and other damage modifiers still affect outcomes. [Frag damage profile stat](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/damage/damage_profiles/demolitions_damage_profile_templates.lua#L253-L259); [Krak damage profile stat](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/damage/damage_profiles/demolitions_damage_profile_templates.lua#L379-L385); [Profile-specific damage-stat application](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/attack/damage_calculation.lua#L570-L584); [Separate bleed damage profile](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/damage/damage_profiles/buff_damage_profile_templates.lua#L443-L466).
- The radius stat is additive over baseline one; the explosion scales both its inner and outer radii by `1.25` when this is the only radius modifier. It does not set the radius to 25% of its original size. [Additive radius stat type](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/buff_settings.lua#L808-L810); [Shared stat aggregation](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/buff/buffs/buff.lua#L681-L737); [Inner and outer explosion radius scaling](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/attack/explosion.lua#L484-L502); [Frag explosion radii](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/damage/explosion_templates/player_grenade_explosion_templates.lua#L25-L51).
- Smoke duration likewise uses an additive multiplier over baseline one. The grenade's 15-second spawn duration becomes `15 × (1 + 1) = 30 seconds` with this modifier alone, rather than adding 100 seconds. [Additive smoke-duration stat type](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/buff_settings.lua#L973-L975); [Shared stat aggregation](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/buff/buffs/buff.lua#L681-L737); [Smoke duration modifier application](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/smoke_fog/smoke_fog_extension.lua#L29-L40); [Smoke projectile spawn parameters](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/projectile/player_projectile_templates.lua#L734-L759).

## Damage, radius and duration examples

Isolate this talent, hold armor, distance/falloff and all other damage components fixed, and assume no other relevant modifiers or limits change the result. Damage inputs are illustrative values at the affected damage stage, before any later modifiers. Radius and duration examples use the stated template values. These are static calculations, not game measurements. [Four grenade modifier stats](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/veteran_buff_templates.lua#L1297-L1306); [Frag damage profile stat](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/damage/damage_profiles/demolitions_damage_profile_templates.lua#L253-L259); [Krak damage profile stat](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/damage/damage_profiles/demolitions_damage_profile_templates.lua#L379-L385); [Profile-specific damage-stat application](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/attack/damage_calculation.lua#L570-L584); [Inner and outer explosion radius scaling](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/attack/explosion.lua#L484-L502); [Frag explosion radii](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/damage/explosion_templates/player_grenade_explosion_templates.lua#L25-L51); [Smoke duration modifier application](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/smoke_fog/smoke_fog_extension.lua#L29-L40); [Smoke projectile spawn parameters](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/projectile/player_projectile_templates.lua#L734-L759).

| Assumptions | Substitution and result | Player meaning |
|---|---|---|
| Frag explosion damage input 500 units at the affected stage | `500 × (1 + 0.25) = 625 damage units`. | The isolated explosion component gains 125 damage units; this is not a universal final-hit value. |
| Frag inner radius 2m and outer radius 10m; only this radius modifier | `2 × 1.25 = 2.5m`; `10 × 1.25 = 12.5m`. | Both radii grow by 25%; the outer radius is not reduced to 2.5m. |
| Krak explosion damage input 2,400 units at the affected stage | `2,400 × (1 + 0.75) = 4,200 damage units`. | The isolated damage stage gains 1,800 units; armor and other stages remain separate. |
| Smoke grenade's 15-second spawn duration; only this duration modifier | `15 × (1 + 1) = 30 seconds`. | +100% doubles duration, adding 15 seconds in this example. |
| A separate bleed result of 100 units; hold stacks, armor and other modifiers fixed | This talent's Frag damage-stat contribution to the bleed profile is `0`; the fixed `100` remains `100 damage units`. | The +25% explosion modifier does not turn the same bleed result into 125. |

[Separate bleed damage profile](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/damage/damage_profiles/buff_damage_profile_templates.lua#L443-L466); [Profile-specific damage-stat application](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/attack/damage_calculation.lua#L570-L584).

## Original English template and reconstruction

Full raw template, hash `60708f06`:

```text
Improve your chosen Grenade.

{krak_grenade:%s}: {krak:%s} Damage.
{frag_grenade:%s}: {frag_damage:%s} Damage & Radius.
{smoke_grenade:%s}: {smoke:%s} Duration.
```

| Parameter | Definition and formatting | Reconstructed value |
|---|---|---|
| `krak_grenade` | `loc_ability_krak_grenade`, hash `67a1be46`; localized string | `Krak Grenade` |
| `frag_grenade` | `loc_ability_frag_grenade`, hash `86bb6780`; localized string | `Frag Grenade` |
| `smoke_grenade` | `loc_ability_smoke_grenade`, hash `c98e8baf`; localized string | `Smoke Grenade` |
| `frag_damage` | Raw stat `0.25`; outer `abs(value) × 100` conversion; signed percentage | `+25%`, used for both Damage & Radius in the raw sentence |
| `frag_radius` | Raw delta `0.25`; outer `(value − 1) × 100` conversion, but no placeholder in this template | Unused; its custom conversion would yield `−75` before percentage/prefix formatting |
| `krak` | Raw stat `0.75`; signed percentage formatting | `+75%` |
| `smoke` | Raw stat `1`; signed percentage formatting | `+100%` |

[Installed passive and display fields](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/veteran_talents.lua#L128-L205); [Four grenade modifier stats](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/veteran_buff_templates.lua#L1297-L1306); [Raw buff-template lookup](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/ui/views/talent_builder_view/utilities/talent_layout_parser.lua#L467-L499); [Parameter formatting with outer configuration](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/ui/views/talent_builder_view/utilities/talent_layout_parser.lua#L613-L651); [Percentage conversion](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/ui/views/talent_builder_view/utilities/talent_layout_parser.lua#L379-L404); [Localized-name formatting](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/ui/views/talent_builder_view/utilities/talent_layout_parser.lua#L426-L428).

The actual template uses `frag_damage` for the complete Frag Damage & Radius line, and never uses `frag_radius`. Its unused conversion therefore does not produce a displayed radius claim or change the installed radius stat. Custom percentage conversion runs once; other percentage fields use the default multiplication by 100. The display's `Frag Grenade` label is preserved even though the current Shredder Frag Grenade adds a separate bleed effect.

Static plain-text reconstruction:

```text
Improve your chosen Grenade.

Krak Grenade: +75% Damage.
Frag Grenade: +25% Damage & Radius.
Smoke Grenade: +100% Duration.
```

Runtime color markup is excluded; this is not an observed game screen. The English percentages agree with the four installed effects. The unused radius field and Chinese-only seconds wording do not create English errata.

## Limits

Actual explosion damage, targets reached by enlarged radii, bleed outcomes, cloud expiry and final game UI have not been measured in game. Examples isolate the listed stage or resource and do not predict every enemy's final damage.

## Icon source

[Original image](https://gameslantern.com/storage/sites/darktide/exporter/talents/veteran/tactical_modifier/veteran_improved_grenades.webp) | [Media-Assets Issue](https://github.com/SyuanTsai/Media-Assets/issues/6#issuecomment-5922922455) | [Issue attachment](https://github.com/user-attachments/assets/5179b403-3945-41a4-9c68-5278b6968c24)

The icon identifies the talent; it is not mechanism evidence.
