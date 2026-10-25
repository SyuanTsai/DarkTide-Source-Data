# Smoke Grenade: source evidence

[繁體中文](../veteran_smoke_grenade.md) | [Player description](README.md#veteran_smoke_grenade) | [Technical index](SOURCE_INDEX.md) | [Original English comparison](LOCALIZATION_COMPARISON.md#veteran_smoke_grenade)

## Identity and smoke behavior

- Release 1.13.1, fixed SHA `7e662fcda16219d775b84af50322be2e9cd9d62e`. This one-point Blitz node replaces the grenade ability with Smoke Grenade. [One-point Blitz node](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/ui/views/talent_builder_view/layouts/veteran_tree.lua#L266-L294); [Ability and display fields](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/veteran_talents.lua#L65-L84).
- Talent: `veteran_smoke_grenade`. Exact English name key `loc_ability_smoke_grenade`, hash `c98e8baf`: **Smoke Grenade**. Actual description key `loc_ability_smoke_grenade_description`, hash `f80c5f1d`.
- Original English: Steam Build `25606770`, extracted 2026-10-02, resource `content/localization/ui`, resource hash `63564edcb7c3c5ee`, locale `en` (code `0`). UI JSONL SHA-256: `fb54bb69880e08b3a6e1c359bd970ed2416748bf5513d45c4b8a39c545e8c668`.
- Base capacity is **three grenades**. The ability consumes grenade charges; it does not use a combat-ability cooldown. Other capacity or replenishment effects are separate. [Smoke ability resource](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/player_abilities/abilities/veteran_abilities.lua#L39-L50); [Base grenade capacity](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/talent/talent_settings_veteran.lua#L9-L11).
- The base fuse is approximately **1.5 seconds**. Its spawn parameters provide **15 seconds** of smoke, overriding the smoke extension's default 30-second duration. The cloud has an **inner radius of 4.5m** and **outer radius of 5.5m**, with `block_line_of_sight = true`. [Smoke projectile spawn parameters](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/projectile/player_projectile_templates.lua#L734-L759); [Smoke duration and radii](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/smoke_fog/smoke_fog_extension.lua#L29-L62).
- `check_fog_los` skips expired clouds and breeds with `ignore_smoke_fog_los`. For eligible checks, intersection with the inner sphere blocks line of sight; the test uses the inner radius, not the outer cloud radius. If the source starts inside, blocking depends on the caller's `count_standing_in_smoke` argument. [SmokeFogSystem.check_fog_los](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/smoke_fog/smoke_fog_system.lua#L220-L284).
- Players in smoke receive `in_smoke_fog`, with `concealed` and `hud_nameplates_disabled`; `left_smoke_fog` retains the concealment effect for about **0.5 seconds** after leaving. These are concealment/nameplate effects, not `damage_immune`. Already-launched attacks can still hit. [In-smoke and leaving-smoke effects](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/weapon_buff_templates.lua#L1271-L1298).
- The grenade's detonation has a separate impact/suppression blast. Its 10m explosion radius is not the smoke's sight-blocking radius. [Separate smoke detonation blast](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/damage/explosion_templates/player_grenade_explosion_templates.lua#L258-L280).
- [Grenade Tinkerer](veteran_improved_grenades.md) doubles the cloud duration with its +100% duration modifier alone; the base fuse remains separate. [Grenade Tinkerer modifiers](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/veteran_buff_templates.lua#L1297-L1306); [Smoke duration and radii](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/smoke_fog/smoke_fog_extension.lua#L29-L62).

## Timing and charge examples

Use the listed base values, no other capacity/duration effects and no Grenadier additional-projectile roll. For the timing examples, set grenade spawn/fuse start to time zero and assume cloud creation after the full base fuse. These are approximate static timelines, not in-game measurements. [Smoke projectile spawn parameters](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/projectile/player_projectile_templates.lua#L734-L759); [Smoke ability resource](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/player_abilities/abilities/veteran_abilities.lua#L39-L50); [Base grenade capacity](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/talent/talent_settings_veteran.lua#L9-L11); [In-smoke and leaving-smoke effects](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/weapon_buff_templates.lua#L1271-L1298); [Grenade Tinkerer modifiers](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/veteran_buff_templates.lua#L1297-L1306); [Smoke duration and radii](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/smoke_fog/smoke_fog_extension.lua#L29-L62).

| Assumptions | Substitution and result | Player meaning |
|---|---|---|
| Base 1.5s fuse and 15s cloud; no duration modifier | `1.5 + 15 = 16.5 seconds` from fuse start to cloud expiry. | The cloud itself lasts 15s; the fuse precedes it. |
| Grenade Tinkerer is the only duration modifier | Cloud: `15 × (1 + 1) = 30 seconds`; timeline: `1.5 + 30 = 31.5 seconds`. | +100% doubles the cloud duration without doubling the fuse. |
| Three charges before one normal throw; no replenishment | `3 − 1 = 2 grenade charges` remaining. | Capacity and per-throw charge cost are separate from cloud duration. |
| Leave an active cloud at time 5s; no re-entry or other concealment | `5 + 0.5 = 5.5 seconds`, approximately. | The leaving-smoke concealment persists for about half a second; this is not an invulnerability window. |

## Original English template and reconstruction

Full raw template, hash `f80c5f1d`:

```text
Throw a grenade that creates a lingering smoke cloud for {duration:%s}s. The cloud blocks line of sight for most enemies and reduces the sight range of enemies inside it.
```

| Parameter | Definition and formatting | Reconstructed value |
|---|---|---|
| `duration` | Smoke projectile's spawn-unit duration `15`; number formatter; the raw sentence supplies the trailing `s` | `15`, yielding `15s` |
| `talent_name` | `loc_ability_smoke_grenade`, hash `c98e8baf`; localized string, but no token in this template | Unused; would localize to `Smoke Grenade` |

[Ability and display fields](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/veteran_talents.lua#L65-L84); [Smoke projectile spawn parameters](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/projectile/player_projectile_templates.lua#L734-L759); [Parameter formatting with outer configuration](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/ui/views/talent_builder_view/utilities/talent_layout_parser.lua#L613-L651); [Number formatting](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/ui/views/talent_builder_view/utilities/talent_layout_parser.lua#L405-L425); [Localized-name formatting](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/ui/views/talent_builder_view/utilities/talent_layout_parser.lua#L426-L428).

Static plain-text reconstruction:

```text
Throw a grenade that creates a lingering smoke cloud for 15s. The cloud blocks line of sight for most enemies and reduces the sight range of enemies inside it.
```

Runtime color markup is excluded; this is not an observed game screen. The duration field reads the base spawn parameter. Grenade Tinkerer's runtime duration multiplier is described separately rather than silently replacing that field.

## English comparison and limits

The 15-second base duration and qualified line-of-sight blocking agree with the existing fixed-source evidence. The separate phrase **“reduces the sight range of enemies inside it”** remains **Cannot confirm**: the cited smoke method supports sight blocking, but does not by itself establish an independent reduction to enemy sight range. No numeric sight-distance penalty is claimed here, and this evidence gap is not an English erratum. [SmokeFogSystem.check_fog_los](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/smoke_fog/smoke_fog_system.lua#L220-L284).

Individual enemy behavior, already-launched attacks, exact cloud/linger update timing and final game UI have not been measured in game. Smoke provides concealment rather than guaranteed safety against every attack or enemy.

## Icon source

[Original image](https://gameslantern.com/storage/sites/darktide/exporter/talents/veteran/tactical/veteran_smoke_grenade.webp) | [Media-Assets Issue](https://github.com/SyuanTsai/Media-Assets/issues/6#issuecomment-5922922455) | [Issue attachment](https://github.com/user-attachments/assets/7b9b7141-a7fa-4f3b-944f-5f1141cdc04e)

The icon identifies the talent; it is not mechanism evidence.
