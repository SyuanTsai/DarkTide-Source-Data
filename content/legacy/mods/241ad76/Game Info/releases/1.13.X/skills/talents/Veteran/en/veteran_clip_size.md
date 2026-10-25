# Lock and Load: source evidence

[繁體中文](../veteran_clip_size.md) | [Player description](README.md#veteran_clip_size) | [Technical index](SOURCE_INDEX.md) | [Original English comparison](LOCALIZATION_COMPARISON.md#veteran_clip_size)

## Identity and mechanism

- Release 1.13.1, fixed SHA `7e662fcda16219d775b84af50322be2e9cd9d62e`. One-point passive talent `veteran_clip_size`. [One-point talent node](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/ui/views/talent_builder_view/layouts/veteran_tree.lua#L1662-L1685); [Talent and display field](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/veteran_talents.lua#L3097-L3112).
- Exact English name key `loc_talent_veteran_2_tier_2_name_2`, hash `58740664`: **Lock and Load**. Description key `loc_talent_adamant_clip_size_alt_desc`, hash `5f584f5e`.
- Original English: Steam Build `25606770`, extracted 2026-10-02, resource `content/localization/ui`, resource hash `63564edcb7c3c5ee`, locale `en` (code `0`). UI JSONL SHA-256: `fb54bb69880e08b3a6e1c359bd970ed2416748bf5513d45c4b8a39c545e8c668`.

- The buff supplies `clip_size_modifier = 0.25`, giving an isolated magazine multiplier of `1.25`. [Magazine-size buff](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/veteran_buff_templates.lua#L3505-L3511); [Magazine-size value](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/talent/talent_settings_veteran.lua#L58-L60).
- `PlayerUnitWeaponExtension._apply_stat_buffs` applies the magazine multiplier to each current and maximum clip-array field separately. It uses `clamp(floor(base field × clip_size_modifier), 0, ammo_small_hard_limit)`. Magazine fields below one round and multi-magazine weapons must be considered per field, rather than combining fields into one pool. [Per-magazine floor and hard limit](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/weapon/player_unit_weapon_extension.lua#L1326-L1346).
- Reserve capacity uses `ammo_reserve_capacity`, a separate stat. This talent does not directly add to maximum reserve ammo. [Magazine-size buff](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/veteran_buff_templates.lua#L3505-L3511); [Per-magazine floor and hard limit](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/weapon/player_unit_weapon_extension.lua#L1326-L1346).
- The full English description explicitly says `rounded up`; the fixed implementation uses `math.floor` at lines 1342–1343. The rounding direction is an English contradiction. [Per-magazine floor and hard limit](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/weapon/player_unit_weapon_extension.lua#L1326-L1346).

## Magazine capacity examples

Assume the stated base magazine capacity, no other magazine-size modifier and a hard limit above the result. Hold the weapon/magazine configuration fixed. These static calculations are not game measurements. [Magazine-size buff](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/veteran_buff_templates.lua#L3505-L3511); [Magazine-size value](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/talent/talent_settings_veteran.lua#L58-L60); [Per-magazine floor and hard limit](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/weapon/player_unit_weapon_extension.lua#L1326-L1346).

| Assumptions | Substitution and result | Player meaning |
|---|---|---|
| Base magazine capacity 40 | `floor(40 × 1.25) = 50 rounds`. | The magazine gains ten rounds; this talent does not directly increase maximum reserve. |
| Base magazine capacity 7 | `floor(7 × 1.25) = floor(8.75) = 8 rounds`. | The magazine gains one round; rounding up would give nine, which contradicts the implementation. |

## Original English template and reconstruction

Full raw template, hash `5f584f5e`:

```text
{clip_size:%s} Clip Size, rounded up.
```

| Parameter | Definition and formatting | Reconstructed value |
|---|---|---|
| `clip_size` | `talent_settings.clip_size.clip_size_modifier = 0.25`; percentage formatter and `+` prefix | `+25%` |

[Talent and display field](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/veteran_talents.lua#L3097-L3112); [Magazine-size value](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/talent/talent_settings_veteran.lua#L58-L60); [Percentage formatting](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/ui/views/talent_builder_view/utilities/talent_layout_parser.lua#L379-L404).

Static plain-text reconstruction:

```text
+25% Clip Size, rounded up.
```

Runtime color markup is excluded; this is not an observed game screen. The +25% display value agrees, but rounded up explicitly contradicts the implemented floor. Reserve scope, per-magazine fields and the hard limit are supplementary details. The player page includes the independently supported English rounding erratum.

## Limits

Actual weapon magazine configurations, initialization/network boundaries and final game UI have not been measured in game. Very small or multi-magazine weapons need their individual fields and hard limits considered.

## Icon source

[Original image](https://gameslantern.com/storage/sites/darktide/exporter/talents/veteran/default/veteran_clip_size.webp) | [Media-Assets Issue](https://github.com/SyuanTsai/Media-Assets/issues/6#issuecomment-5922929234) | [Issue attachment](https://github.com/user-attachments/assets/6632d16b-faac-444e-8139-99057e2f613a)

The icon identifies the talent; it is not mechanism evidence.
