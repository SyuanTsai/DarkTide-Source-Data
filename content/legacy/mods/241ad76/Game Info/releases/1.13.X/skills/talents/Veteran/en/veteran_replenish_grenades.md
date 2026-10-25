# Demolition Stockpile: source evidence

[繁體中文](../veteran_replenish_grenades.md) | [Player description](README.md#veteran_replenish_grenades) | [Technical index](SOURCE_INDEX.md) | [English comparison](LOCALIZATION_COMPARISON.md#veteran_replenish_grenades)

- Release: 1.13.1; fixed source SHA: `7e662fcda16219d775b84af50322be2e9cd9d62e`.
- Talent: `veteran_replenish_grenades`; display-name key: `loc_talent_ranger_replenish_grenade`; description key: `loc_talent_veteran_grenade_regeneration_per_grenade_desc`.
- Same-version game English: `content/localization/ui`, resource hash `63564edcb7c3c5ee`, language `en` (code `0`), Steam Build `25606770`, extracted 2026-10-02. The name key resolves uniquely to **Demolition Stockpile**, hash `4762b23c`; the description resolves uniquely to hash `3b1bc587`.
- The current tree node is a one-point `tactical_modifier` with `max_points = 1`. It modifies the equipped Blitz rather than granting an aura or replacing the grenade type. [Current tree node](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/ui/views/talent_builder_view/layouts/veteran_tree.lua#L1111-L1141).

## Source-confirmed behavior

- **Installation and recipient**: the talent installs `veteran_grenade_replenishment` as a passive. The talent extension adds that passive to its owner's buff extension. The buff uses `template_context.unit` and that unit's `grenade_ability`; it replenishes the owner. [Grenade ability type constant](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/veteran_buff_templates.lua#L33-L38). [Talent definition and display parameters](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/veteran_talents.lua#L1988-L2030); [Passive buff installation](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/talent/player_unit_talent_extension.lua#L164-L175); [Grenade replenishment buff](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/veteran_buff_templates.lua#L1813-L1911).
- **Amount and grenade selection**: `grenade_restored = 1`; Frag uses 60 seconds, Smoke 60 seconds and Krak 90 seconds. `start_func` chooses the interval by the current grenade ability name; if no name was found, `update_func` retries. An unmatched name keeps the 75-second fallback. Shredder Frag Grenade adds a passive to the base Frag grenade rather than replacing its `player_ability`; the base talent installs `PlayerAbilities.veteran_frag_grenade`. The displayed variant name is supplied by the separate Shredder name key. [Base Frag ability and Shredder passive](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/veteran_talents.lua#L33-L42), [Shredder passive definition](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/veteran_talents.lua#L1021-L1039). [Interval and amount settings](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/talent/talent_settings_veteran.lua#L141-L147); [Grenade replenishment buff](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/veteran_buff_templates.lua#L1813-L1911); [Grenade ability configuration](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/player_abilities/abilities/veteran_abilities.lua#L27-L62).
- **Deficit and cancellation**: no grenade ability, or zero missing charges, clears `next_grenade_t` and `missing_charges`. On the first update with a deficit and no deadline, the buff sets `next_grenade_t = t + C` and returns. Existing deadlines are preserved when another grenade is thrown. [Grenade replenishment buff](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/veteran_buff_templates.lua#L1813-L1911); [Remaining, missing and maximum charges](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/ability/player_unit_ability_extension.lua#L712-L770).
- **Deadline and repeated grants**: replenishment occurs only at an update where `t > next_grenade_t`. At exact equality, it does not occur. The update restores one charge and clears the deadline; a subsequent update starts the next interval if a deficit remains. One late update does not catch up multiple intervals. This is a periodic grant, with no kill requirement, random chance or stacking buff. [Grenade replenishment buff](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/veteran_buff_templates.lua#L1813-L1911).

## Shared settlement and static derivation

The deficit is `max_ability_charges − remaining_ability_charges`. `get_target_ability_resource_pool` uses the ability type itself unless the equipped ability declares an override; the cited three grenade definitions have no such override, so restoration targets the equipped `grenade_ability` pool. [Resource pool mapping](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/ability/player_unit_ability_extension.lua#L1364-L1380). `restore_ability_charge(type, 1)` converts one charge into `resource_cost_per_charge × 1`, then calls `restore_ability_resource` with `ignore_stat_buffs = true`. This skips flat and multiplicative restoration-amount bonuses, while retaining resource-cost calculation and capacity limits. For a charge-based ability, maximum resource is `max_charges × resource_cost_per_charge`. [Maximum resource](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/ability/player_unit_ability_extension.lua#L1323-L1348). New resource is clamped to the resource maximum; new charges are derived with floor-and-epsilon rounding and clamped to maximum charges. Grenades use `only_uses_charges = true`; their shared capacity stat is `extra_max_amount_of_grenades`. [Remaining, missing and maximum charges](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/ability/player_unit_ability_extension.lua#L712-L770); [Charge restoration and resource limits](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/ability/player_unit_ability_extension.lua#L1105-L1179); [Resource cost per charge](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/ability/player_unit_ability_extension.lua#L1437-L1461); [Grenade ability configuration](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/player_abilities/abilities/veteran_abilities.lua#L27-L62).

- **Sequential restoration**: assuming a fixed loadout, no other restoration and two missing grenades, two independent 60-second intervals give approximately `60 × 2 = 120 seconds` for Frag/Smoke; Krak gives approximately `90 × 2 = 180 seconds`. Update boundaries make these approximate times, not exact scheduler guarantees.
- **Preserved deadline**: if the first deficit is observed at `t = 100`, Frag schedules `t = 160`. At `t = 160`, nothing is restored; the first update with `t > 160` restores one. Throwing another at `t = 130` does not change that deadline. A remaining deficit begins its next interval on a later update.
- **Capacity cancellation**: if another supply fills the capacity before the deadline, observing zero deficit clears it. A later throw has no banked replenishment progress and schedules a fresh interval.
- **Capacity upgrade**: increasing capacity changes the deficit and resource maximum, not the `grenades_restored = 1` argument. Restoring a three-grenade deficit takes three sequential intervals under the same assumptions.

## Original English template and reconstruction

Raw description template, hash `3b1bc587`:

```text
Replenish {amount:%s} grenade(s) at set intervals.
{smoke_grenade:%s} every {smoke_time:%s}s.
{frag_grenade:%s} every {frag_time:%s}s.
{krak_grenade:%s} every {krak_time:%s}s.
```

| Parameter | Definition / English resource pairing | Reconstructed value |
|---|---|---|
| `amount` | `format_type = value`, `grenade_restored` | `1` |
| `smoke_time` | `format_type = value`, `smoke_time` | `60` |
| `frag_time` | `format_type = value`, `frag_time` | `60` |
| `krak_time` | `format_type = value`, `krak_time` | `90` |
| `smoke_grenade` | `loc_string` → `loc_ability_smoke_grenade`, hash `c98e8baf` | `Smoke Grenade` |
| `frag_grenade` | `loc_string` → `loc_talent_veteran_grenade_apply_bleed`, hash `1decdc88` | `Shredder Frag Grenade` |
| `krak_grenade` | `loc_string` → `loc_talent_ability_krak_grenade`, hash `7cde0528` | `Krak Grenade` |

All quoted strings above are from the same English UI resource. The parser selects `FORMATTING_FUNCTIONS[format_type]` or its default. `value` falls back to `tostring`; `loc_string` localizes its key. The localization manager substitutes `{key:%s}` with `string.format`, while the template supplies the literal `s` unit suffix. [Interpolation and template processing](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/managers/localization/localization_manager.lua#L285-L320). The resulting plain text is a **static reconstruction**, without runtime color markup or proof of the final game screen:

```text
Replenish 1 grenade(s) at set intervals.
Smoke Grenade every 60s.
Shredder Frag Grenade every 60s.
Krak Grenade every 90s.
```

The generic `time = 75` parameter is not referenced by this template. The stale internal `name` saying “every 60 seconds” is not the localized description or the mechanism. [Talent definition and display parameters](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/veteran_talents.lua#L1988-L2030); [Interval and amount settings](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/talent/talent_settings_veteran.lua#L141-L147); [Localized strings and default formatting](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/ui/views/talent_builder_view/utilities/talent_layout_parser.lua#L426-L434); [Formatting parameter construction](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/ui/views/talent_builder_view/utilities/talent_layout_parser.lua#L613-L651); [Description localization](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/ui/views/talent_builder_view/utilities/talent_layout_parser.lua#L690-L713).

## Limits and unresolved cases

- These conclusions apply to a fixed loadout while the buff remains active. Whether changing the grenade ability during play rebuilds this buff, or updates an already selected interval, has not been traced. The retry branch only runs while `ability_found` is false.
- `start_func` immediately uses the ability extension after `ScriptUnit.has_extension`; whether an initialization without that extension can occur in normal play is unconfirmed. The later update fallback is not proof that every abnormal initialization succeeds.
- Examples are static arithmetic and branch derivation. Exact runtime scheduling, final UI text and in-game behavior have not been tested.

## Icon source

[Original image](https://gameslantern.com/storage/sites/darktide/exporter/talents/veteran/tactical_modifier/veteran_replenish_grenades.webp) | [Media-Assets Issue](https://github.com/SyuanTsai/Media-Assets/issues/6) | [Issue attachment](https://github.com/user-attachments/assets/511ac082-cbea-4af3-8f8e-3dfeab7ca2bf)

The image identifies the talent; it is not mechanism evidence.
