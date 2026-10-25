# Fully Loaded: source evidence

[繁體中文](../veteran_ammo_increase.md) | [Player description](README.md#veteran_ammo_increase) | [Technical index](SOURCE_INDEX.md) | [Original English comparison](LOCALIZATION_COMPARISON.md#veteran_ammo_increase)

## Identity and mechanism

- Release 1.13.1, fixed SHA `7e662fcda16219d775b84af50322be2e9cd9d62e`. One-point passive talent `veteran_ammo_increase`. [One-point talent node](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/ui/views/talent_builder_view/layouts/veteran_tree.lua#L910-L940); [Talent and display field](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/veteran_talents.lua#L2503-L2526).
- Exact English name key `loc_talent_veteran_ammo_increase`, hash `f2231e7d`: **Fully Loaded**. Description key `loc_talent_veteran_ammo_increase_desc`, hash `3dd8af7f`.
- Original English: Steam Build `25606770`, extracted 2026-10-02, resource `content/localization/ui`, resource hash `63564edcb7c3c5ee`, locale `en` (code `0`). UI JSONL SHA-256: `fb54bb69880e08b3a6e1c359bd970ed2416748bf5513d45c4b8a39c545e8c668`.

- The installed buff adds `ammo_reserve_capacity = 0.25`. This stat is an additive multiplier with base `1`, so the isolated capacity multiplier is `1.25`. [Reserve-capacity buff](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/veteran_buff_templates.lua#L1059-L1065); [Additive multiplier base](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/buff_settings.lua#L693-L695).
- The weapon extension applies the capacity multiplier separately to base current reserve ammo and base maximum reserve ammo, floors each result, then clamps to its hard ammo limit. The examples assume that hard limit is not reached. [Reserve application, flooring and hard limit](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/weapon/player_unit_weapon_extension.lua#L1326-L1344).
- Magazine capacity uses a separate `clip_size_modifier` field. Fully Loaded changes reserve ammo rather than the number of rounds loaded in the magazine. [Reserve application, flooring and hard limit](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/weapon/player_unit_weapon_extension.lua#L1326-L1344); [Separate magazine-size stat](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/buff_settings.lua#L1048-L1058).
- With other bonuses at this same additive capacity stage, use `1 + existing bonus + 0.25`, rather than multiplying the already-bonused capacity by `1.25`. [Reserve-capacity buff](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/veteran_buff_templates.lua#L1059-L1065); [Additive multiplier base](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/buff_settings.lua#L693-L695).

## Capacity examples

Use the stated base maximum reserve, a hard limit above the computed result and no other modifier except where named. Hold weapon and slot settings fixed. These static calculations isolate maximum reserve capacity and are not game measurements. [Reserve-capacity buff](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/veteran_buff_templates.lua#L1059-L1065); [Additive multiplier base](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/buff_settings.lua#L693-L695); [Reserve application, flooring and hard limit](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/weapon/player_unit_weapon_extension.lua#L1326-L1344).

| Assumptions | Substitution and result | Player meaning |
|---|---|---|
| Base maximum reserve 100; no other capacity bonus | `floor(100 × 1.25) = 125 rounds`. | Maximum reserve rises by 25 rounds; magazine capacity is unchanged by this talent. |
| Base maximum reserve 150; no other capacity bonus | `floor(150 × 1.25) = floor(187.5) = 187 rounds`. | The fractional half-round is discarded, giving a 37-round increase. |
| Base maximum reserve 100; existing +20% bonus at the same stage | Before: `100 × 1.20 = 120`; after: `100 × (1 + 0.20 + 0.25) = 145 rounds`. Relative change: `25 ÷ 120 ≈ 20.83%`. | The new additive bonus is not a separate 25% multiplication of the already-bonused 120 rounds. |

## Original English template and reconstruction

Full raw template, hash `3dd8af7f`:

```text
{ammo:%s} Ammo.
```

| Parameter | Definition and formatting | Reconstructed value |
|---|---|---|
| `ammo` | Raw `stat_buffs.ammo_reserve_capacity = 0.25`; percentage formatter and `+` prefix | `+25%` |

[Talent and display field](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/veteran_talents.lua#L2503-L2526); [Reserve-capacity buff](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/veteran_buff_templates.lua#L1059-L1065); [Raw buff-template value lookup](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/ui/views/talent_builder_view/utilities/talent_layout_parser.lua#L467-L499); [Outer parameter formatting](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/ui/views/talent_builder_view/utilities/talent_layout_parser.lua#L613-L651); [Percentage formatting](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/ui/views/talent_builder_view/utilities/talent_layout_parser.lua#L379-L404).

Static plain-text reconstruction:

```text
+25% Ammo.
```

Runtime color markup is excluded; this is not an observed game screen. The English percentage agrees with the reserve-capacity stat. Its broad Ammo wording does not specify magazine capacity, flooring, hard limits or additive stacking. Those details supplement the text; no explicit English contradiction is supported.

## Limits

Actual weapon reserves, slot changes, network hard limits and final game UI have not been measured in game. Weapon base values and flooring can change the effective round gain.

## Icon source

[Original image](https://gameslantern.com/storage/sites/darktide/exporter/talents/veteran/default/veteran_ammo_increase.webp) | [Media-Assets Issue](https://github.com/SyuanTsai/Media-Assets/issues/6#issuecomment-5922922455) | [Issue attachment](https://github.com/user-attachments/assets/4087a451-e4ae-429b-afe6-75369e2903f3)

The icon identifies the talent; it is not mechanism evidence.
