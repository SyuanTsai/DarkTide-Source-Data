# Grenadier: source evidence

[繁體中文](../veteran_extra_grenade.md) | [Player description](README.md#veteran_extra_grenade) | [Technical index](SOURCE_INDEX.md) | [Original English comparison](LOCALIZATION_COMPARISON.md#veteran_extra_grenade)

## Identity, capacity and additional grenade

- Release 1.13.1, fixed SHA `7e662fcda16219d775b84af50322be2e9cd9d62e`. Blitz modifier; the node costs one talent point. [One-point Blitz modifier node](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/ui/views/talent_builder_view/layouts/veteran_tree.lua#L358-L383); [Installed passives and display parameters](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/veteran_talents.lua#L85-L127).
- Talent: `veteran_extra_grenade`. Exact English name key `loc_talent_veteran_extra_grenade`, hash `034b1131`: **Grenadier**.
- Actual description key `loc_talent_veteran_extra_grenade_and_throw_chance_description`, hash `61aa0cc5`.
- Original English: Steam Build `25606770`, extracted 2026-10-02, resource `content/localization/ui`, resource hash `63564edcb7c3c5ee`, locale `en` (code `0`). UI JSONL SHA-256: `fb54bb69880e08b3a6e1c359bd970ed2416748bf5513d45c4b8a39c545e8c668`.
- The talent installs both `veteran_extra_grenade` and `veteran_extra_grenade_throw_chance`. The former adds **one grenade** to capacity; the latter supplies a **20% chance** to throw one additional projectile. [Installed passives and display parameters](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/veteran_talents.lua#L85-L127); [Extra grenade capacity](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/veteran_buff_templates.lua#L935-L941); [Additional grenade chance](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/veteran_buff_templates.lua#L1290-L1296).
- All three Veteran grenade abilities use the extra-capacity stat. Without other capacity changes, their base maximum of three becomes **four**: Shredder Frag Grenade, Krak Grenade and Smoke Grenade. [Three grenade abilities and base capacities](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/player_abilities/abilities/veteran_abilities.lua#L27-L62); [Frag capacity setting](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/talent/talent_settings_veteran.lua#L9-L11); [Krak capacity setting](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/talent/talent_settings_veteran.lua#L102-L104); [Smoke capacity setting](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/talent/talent_settings_veteran.lua#L202-L204); [Accepted grenade terminology and resource model](veteran_replenish_grenades.md).
- Each throw makes one server-side random check. On success, it spawns another grenade with a slightly offset direction, without a second charge consumption. The additional projectile's fuse override is the base fuse plus **0.3 seconds**; Krak collision-fuse behavior still follows its separate grenade rules. This is not a guarantee that both projectiles detonate at the same time. [Server roll and additional projectile](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/weapon/actions/action_throw_grenade.lua#L130-L164); [Krak projectile configuration](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/projectile/player_projectile_templates.lua#L348-L373); [Collision/lifetime handling](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/projectile_damage/projectile_damage_extension.lua#L232-L279); [Additional grenade chance](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/veteran_buff_templates.lua#L1290-L1296).

## Capacity, consumption and probability examples

Assume the selected grenade has base capacity three, no other capacity modifiers apply, each throw consumes its normal one charge and the 20% roll is available. The ten-throw example includes any necessary replenishment between throws; it is not ten throws from a four-grenade inventory. The counts below are static calculations, not measured outcomes. [Extra grenade capacity](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/veteran_buff_templates.lua#L935-L941); [Additional grenade chance](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/veteran_buff_templates.lua#L1290-L1296); [Three grenade abilities and base capacities](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/player_abilities/abilities/veteran_abilities.lua#L27-L62); [Server roll and additional projectile](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/weapon/actions/action_throw_grenade.lua#L130-L164).

| Assumptions | Substitution and result | Player meaning |
|---|---|---|
| Base maximum is three grenades; select this talent | `3 + 1 = 4 grenades`. | You can carry one more grenade of the selected type. |
| Start with four charges; one throw successfully produces the extra projectile | Charges: `4 − 1 = 3`; projectiles from that throw: `1 + 1 = 2`. | A successful extra throw uses one inventory grenade, not two. |
| Ten throws, with replenishment as needed; each has 20% extra-projectile chance | Expected additional projectiles: `10 × 0.20 = 2`; expected total: `10 + 2 = 12 projectiles`, for ten normal charge consumptions. | This is an average over repeated trials, not two guaranteed extra grenades in each set of ten or a trigger every fifth throw. |

## Original English template and reconstruction

Full raw template, hash `61aa0cc5`:

```text
You can carry {ammo:%s} extra Grenade(s). {chance:%s} chance to throw an additional Grenade (this still only consumes a single Grenade).
```

| Parameter | Definition and formatting | Reconstructed value |
|---|---|---|
| `ammo` | Find installed `extra_max_amount_of_grenades = 1`; `value` type uses the default string formatter | `1` |
| `chance` | Find installed `extra_grenade_throw_chance = 0.20`; outer custom manipulation computes `abs(value) × 100`; percentage formatting without a plus prefix | `20%` |

[Installed passives and display parameters](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/veteran_talents.lua#L85-L127); [Extra grenade capacity](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/veteran_buff_templates.lua#L935-L941); [Additional grenade chance](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/veteran_buff_templates.lua#L1290-L1296); [Buff-template value lookup](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/ui/views/talent_builder_view/utilities/talent_layout_parser.lua#L467-L499); [Parameter formatting and fallback selection](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/ui/views/talent_builder_view/utilities/talent_layout_parser.lua#L613-L651); [Default value-to-string formatting](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/ui/views/talent_builder_view/utilities/talent_layout_parser.lua#L429-L435); [Percentage formatting and custom manipulation](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/ui/views/talent_builder_view/utilities/talent_layout_parser.lua#L379-L404).

The outer custom chance conversion supplies `20`; percentage formatting does not multiply it by 100 again. The `ammo` parameter denotes extra capacity, rather than current inventory or a 100% percentage value.

Static plain-text reconstruction:

```text
You can carry 1 extra Grenade(s). 20% chance to throw an additional Grenade (this still only consumes a single Grenade).
```

Runtime color markup is excluded; this is not an observed game screen. All three explicit English claims agree with the existing mechanism evidence. Grenade coverage, projectile direction and fuse details supplement the description; no English erratum is supported.

## Limits

Actual random outcomes, projectile trajectories, collision-fuse timing and final game UI have not been measured in game. Expected projectile counts do not imply a guaranteed damage gain: enemy hits and each grenade's effects remain separate.

## Icon source

[Original image](https://gameslantern.com/storage/sites/darktide/exporter/talents/veteran/tactical_modifier/veteran_extra_grenade.webp) | [Media-Assets Issue](https://github.com/SyuanTsai/Media-Assets/issues/6#issuecomment-5922922455) | [Issue attachment](https://github.com/user-attachments/assets/2bec21d1-d677-4386-942d-2c2697c285d1)

The icon identifies the talent; it is not mechanism evidence.
