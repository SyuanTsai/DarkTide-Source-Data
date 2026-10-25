# Duty and Honour: source evidence

[繁體中文](../veteran_combat_ability_increase_and_restore_toughness_to_coherency.md) | [Player description](README.md#veteran_combat_ability_increase_and_restore_toughness_to_coherency) | [Technical index](SOURCE_INDEX.md) | [Original English comparison](LOCALIZATION_COMPARISON.md#veteran_combat_ability_increase_and_restore_toughness_to_coherency)

## Identity and description

- Release 1.13.1, fixed SHA `7e662fcda16219d775b84af50322be2e9cd9d62e`. Category: ability modifier; costs one talent point. [Current node](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/ui/views/talent_builder_view/layouts/veteran_tree.lua#L1310-L1332); [Talent and display parameters](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/veteran_talents.lua#L480-L517).
- Talent: `veteran_combat_ability_increase_and_restore_toughness_to_coherency`. Name key `loc_talent_veteran_combat_ability_increase_and_restore_toughness_to_coherency`, hash `0b0690e2`: **Duty and Honour**.
- Actual description key `loc_talent_veteran_combat_ability_increase_and_restore_toughness_to_coherency_description`, hash `b4e057ef`.
- Original English: Steam Build `25606770`, extracted 2026-10-02, resource `content/localization/ui`, resource hash `63564edcb7c3c5ee`, locale `en` (code `0`). UI JSONL SHA-256: `fb54bb69880e08b3a6e1c359bd970ed2416748bf5513d45c4b8a39c545e8c668`.

## Maximum, current Toughness and independent instances

- `ActionVeteranCombatAbility.start` grants `increase_toughness_to_coherency` to `in_coherence_units` before calling `recover_max_toughness` for the Squad Leader user. The Coherency chain includes the user, so both the user and allies in Coherency receive the flat maximum bonus. The later full-recovery call is personal; it does not give teammates the same full refill. [Grant before personal recovery](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/ability/actions/action_veteran_combat_ability.lua#L52-L78); [Coherency membership including the user](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/coherency/coherency_system.lua#L188-L255); [Recover personal Toughness](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/toughness/player_unit_toughness_extension.lua#L325-L340).
- The buff has `duration = 10` and `toughness_bonus_flat = 75`. It has no `max_stacks`, so repeated grants create independent instances with separate durations, rather than merely refreshing one instance. [Ten-second flat Toughness buff](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/veteran_buff_templates.lua#L2311-L2327); [New instances without a stack cap](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/buff/buff_extension_base.lua#L439-L484).
- Maximum Toughness is `ceil((base + toughness) × toughness_bonus) + toughness_bonus_flat`. Duty and Honour's **75 points per active instance are added after the percentage modifier**, not multiplied by that modifier. [Maximum Toughness calculation](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/toughness/player_unit_toughness_extension.lua#L79-L88); [Ten-second flat Toughness buff](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/veteran_buff_templates.lua#L2311-L2327).
- Current Toughness is maximum Toughness minus `toughness_damage`. Increasing maximum Toughness leaves that damage deficit unchanged, so current Toughness also rises by 75 points. The caster's subsequent personal recovery clears the deficit and fills the enlarged maximum; an ally retains the same missing amount. [Grant before personal recovery](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/ability/actions/action_veteran_combat_ability.lua#L52-L78); [Maximum Toughness calculation](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/toughness/player_unit_toughness_extension.lua#L79-L88); [Recover personal Toughness](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/toughness/player_unit_toughness_extension.lua#L325-L340).
- When the bonus expires, `handle_max_toughness_changes_due_to_buffs` subtracts the maximum decrease from the damage deficit, with a minimum deficit of zero. Current Toughness is retained up to the restored maximum: `160/175 → 100/100`, while `60/175 → 60/100`. This does not grant an additional full refill on expiry. [Adjusting the deficit when maximum Toughness changes](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/toughness/player_unit_toughness_extension.lua#L200-L209).

## Toughness and expiry examples

Assume no other maximum-Toughness, recovery or ability modifiers except the explicitly stated percentage example. Use the stated values immediately before or after the grant/expiry, without intervening damage or recovery. Ignore frame boundaries. These are static examples from the established mechanism, not game measurements.

| Assumptions | Substitution and result | Player meaning |
|---|---|---|
| Ally: ordinary maximum 100, current Toughness 30 | Missing Toughness stays `100 − 30 = 70`; new maximum `100 + 75 = 175`, current `175 − 70 = 105 points`. | The ally becomes **105/175**, gaining 75 current points while retaining the 70-point deficit. |
| Caster: the same original 30/100 | First increase the maximum to `100 + 75 = 175`, then clear the deficit: `175 − 0 = 175 points`. | Voice of Command's personal refill makes the caster **175/175**, not 105/175. |
| On expiry: current 160/175; restored maximum 100 | Old deficit `175 − 160 = 15`; adjusted deficit `max(15 − 75, 0) = 0`; current `100 − 0 = 100 points`. | Excess above the restored maximum disappears: **100/100**. |
| On expiry: current 60/175; restored maximum 100 | Old deficit `175 − 60 = 115`; adjusted deficit `max(115 − 75, 0) = 40`; current `100 − 40 = 60 points`. | Current Toughness remains **60/100** rather than losing another 75 points. |
| Two simultaneous active grants; ordinary maximum 100 | Maximum `100 + 75 + 75 = 250 points`; each instance keeps its own ten-second duration. | The enlarged maximum is **250** while both bonuses are active; it falls as each expires. |
| Base 100 with an existing 20% maximum modifier; no other flat bonus | `ceil(100 × 1.20) + 75 = 120 + 75 = 195 points`. | The 75 points are added after the percentage modifier; this is not `(100 + 75) × 1.20 = 210`. |

[Grant before personal recovery](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/ability/actions/action_veteran_combat_ability.lua#L52-L78); [Recover personal Toughness](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/toughness/player_unit_toughness_extension.lua#L325-L340); [Ten-second flat Toughness buff](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/veteran_buff_templates.lua#L2311-L2327); [Maximum Toughness calculation](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/toughness/player_unit_toughness_extension.lua#L79-L88); [Adjusting the deficit when maximum Toughness changes](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/toughness/player_unit_toughness_extension.lua#L200-L209); [New instances without a stack cap](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/buff/buff_extension_base.lua#L439-L484).

## Original English template and reconstruction

Full raw template, hash `b4e057ef`:

```text
{talent_name:%s} now also provides you and Allies in Coherency with {toughness:%s} Toughness for {duration:%s}s. This can exceed your maximum Toughness.
```

| Parameter | Definition and formatting | Reconstructed value |
|---|---|---|
| `talent_name` | Localized `loc_talent_veteran_combat_ability_stagger_nearby_enemies`, English hash `36c11826` | `Voice of Command` |
| `toughness` | `toughness_bonus_flat = 75`; number formatting with `prefix = "+"` | `+75` |
| `duration` | Buff duration 10; number formatting | `10` |

[Talent and display parameters](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/veteran_talents.lua#L480-L517); [Ten-second flat Toughness buff](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/veteran_buff_templates.lua#L2311-L2327); [Number and localized-name formatting](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/ui/views/talent_builder_view/utilities/talent_layout_parser.lua#L405-L427).

Static plain-text reconstruction:

```text
Voice of Command now also provides you and Allies in Coherency with +75 Toughness for 10s. This can exceed your maximum Toughness.
```

This excludes runtime color markup and is not an observed game screen. The English agrees on the ability, recipients, amount, ten-second duration and ability to exceed the ordinary maximum. The implementation raises the temporary maximum as well as current Toughness. Personal full recovery, additive placement, independent instances and expiry behavior supplement the short description; no explicit English contradiction or player-page erratum is supported.

## Limits

Exact runtime grant/expiry frames and repeated-use overlap have not been measured in game. The flat 75-point gain for allies is distinct from the caster's personal full recovery. These examples do not include intervening damage, recovery or additional modifiers.

## Icon source

[Original image](https://gameslantern.com/storage/sites/darktide/exporter/talents/veteran/ability_modifier/veteran_combat_ability_increase_and_restore_toughness_to_coherency.webp) | [Media-Assets Issue](https://github.com/SyuanTsai/Media-Assets/issues/6#issuecomment-5922929234) | [Issue attachment](https://github.com/user-attachments/assets/56d61b06-dd20-4832-8293-0220d1f3960c)

The icon identifies the talent; it is not mechanism evidence.
