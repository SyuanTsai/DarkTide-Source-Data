# Trench Fighter Drill: source evidence

[繁體中文](../veteran_attack_speed.md) | [Player description](README.md#veteran_attack_speed) | [Technical index](SOURCE_INDEX.md) | [Original English comparison](LOCALIZATION_COMPARISON.md#veteran_attack_speed)

## Identity and melee attack speed

- Release 1.13.1, fixed SHA `7e662fcda16219d775b84af50322be2e9cd9d62e`. Passive talent; the node costs one talent point. [One-point passive node](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/ui/views/talent_builder_view/layouts/veteran_tree.lua#L516-L545); [Selected passive and display parameter](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/veteran_talents.lua#L2551-L2574).
- Talent: `veteran_attack_speed`. Exact English name key `loc_talent_veteran_attack_speed`, hash `4a711ae2`: **Trench Fighter Drill**.
- Actual description key `loc_talent_veteran_attack_speed_description`, hash `dff95aa9`.
- Original English: Steam Build `25606770`, extracted 2026-10-02, resource `content/localization/ui`, resource hash `63564edcb7c3c5ee`, locale `en` (code `0`). UI JSONL SHA-256: `fb54bb69880e08b3a6e1c359bd970ed2416748bf5513d45c4b8a39c545e8c668`.
- The installed passive adds `0.10` to `melee_attack_speed`. This is an additive speed multiplier with baseline `1`, giving **+10% Melee Attack Speed**. [Selected passive and display parameter](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/veteran_talents.lua#L2551-L2574); [Melee attack-speed stat](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/veteran_buff_templates.lua#L1076-L1082); [Additive multiplier with baseline one](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/buff_settings.lua#L863-L865).
- Weapon actions that include this stat in `time_scale_stat_buffs` use it in their action time scale. A representative Crowbar melee action includes it; the shared handler combines the declared speed stats and advances action time with that scale. This is a speed increase, rather than a direct 10% reduction in every attack's elapsed time. [Representative melee action using this stat](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/crowbars/crowbar_p1_m1.lua#L300-L306); [Action time-scale stat aggregation](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/action/action_handler.lua#L402-L419); [Scaled action-time progression](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/action/action_handler.lua#L356-L365).

## Attack-time examples

For an affected action with unmodified duration `T₀`, existing same-stat speed bonus `a`, every other scale factor equal to `1` and no limit binding, the isolated duration is `T = T₀ / (1 + a + 0.10)`. The examples hold the weapon action and all other conditions fixed. A one-second input is illustrative, not a measured duration for every weapon. [Additive multiplier with baseline one](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/buff_settings.lua#L863-L865); [Action time-scale stat aggregation](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/action/action_handler.lua#L402-L419); [Scaled action-time progression](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/action/action_handler.lua#L356-L365).

| Assumptions | Substitution and result | Player meaning |
|---|---|---|
| An affected action takes 1s without speed bonuses; compare this talent alone | `1 / (1 + 0.10) ≈ 0.9091s`; time saved `(1 − 0.9091) / 1 ≈ 9.09%`. | +10% speed shortens this isolated action by about 9.1%, rather than 10%. |
| The same 1s action already has +20% to this speed stat | Before: `1 / 1.20 ≈ 0.8333s`; after: `1 / (1 + 0.20 + 0.10) ≈ 0.7692s`; relative time saving `1 − 1.20 / 1.30 ≈ 7.69%`. | The same-stat bonuses add before the time conversion; the gain is measured against the already accelerated action. |

Actual attack chains also depend on the weapon's individual actions and timing. These static examples do not predict complete combo speed or damage per second.

## Original English template and reconstruction

Full raw template, hash `dff95aa9`:

```text
{melee_attack_speed:%s} Melee Attack Speed.
```

| Parameter | Definition and formatting | Reconstructed value |
|---|---|---|
| `melee_attack_speed` | Find `stat_buffs.melee_attack_speed = 0.10` in the installed passive; percentage formatting with `+` prefix | `+10%` |

[Selected passive and display parameter](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/veteran_talents.lua#L2551-L2574); [Melee attack-speed stat](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/veteran_buff_templates.lua#L1076-L1082); [Percentage display formatting](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/ui/views/talent_builder_view/utilities/talent_layout_parser.lua#L379-L404).

Static plain-text reconstruction:

```text
+10% Melee Attack Speed.
```

Runtime color markup is excluded; this is not an observed game screen. The English speed claim agrees with the existing mechanism evidence. Additive aggregation and action-time conversion supplement the short sentence; no English erratum is supported.

## Limits

Actual weapon timings, complete attack chains and final game UI have not been measured in game. The representative action establishes how this stat is used; the one-second examples isolate that scale rather than asserting a universal action duration.

## Icon source

[Original image](https://gameslantern.com/storage/sites/darktide/exporter/talents/veteran/default/veteran_attack_speed.webp) | [Media-Assets Issue](https://github.com/SyuanTsai/Media-Assets/issues/6#issuecomment-5922922455) | [Issue attachment](https://github.com/user-attachments/assets/4a13cdee-8f88-4412-8b56-e3b3b5590459)

The icon identifies the talent; it is not mechanism evidence.
