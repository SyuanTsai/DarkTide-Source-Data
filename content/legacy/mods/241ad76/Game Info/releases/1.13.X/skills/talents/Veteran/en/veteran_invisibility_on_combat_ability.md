# Infiltrate: source evidence

[繁體中文](../veteran_invisibility_on_combat_ability.md) | [Player description](README.md#veteran_invisibility_on_combat_ability) | [Technical index](SOURCE_INDEX.md) | [Original English comparison](LOCALIZATION_COMPARISON.md#veteran_invisibility_on_combat_ability)

## Identity and description

- Release 1.13.1, fixed SHA `7e662fcda16219d775b84af50322be2e9cd9d62e`. Category: combat ability; costs one talent point. [Current node](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/ui/views/talent_builder_view/layouts/veteran_tree.lua#L295-L327); [Talent and display values](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/veteran_talents.lua#L2032-L2113).
- Talent: `veteran_invisibility_on_combat_ability`. Name key `loc_talent_veteran_invisibility_on_combat_ability`, hash `9776b86d`: **Infiltrate**.
- Actual description key `loc_talent_veteran_invisibility_on_combat_ability_damage_desc`, hash `957cbfa6`.
- Original English: Steam Build `25606770`, extracted 2026-10-02, resource `content/localization/ui`, resource hash `63564edcb7c3c5ee`, locale `en` (code `0`). UI JSONL SHA-256: `fb54bb69880e08b3a6e1c359bd970ed2416748bf5513d45c4b8a39c545e8c668`.

## Mechanism

- The talent selects the stealth ability. Its `shock_trooper` ability-action branch replenishes the user's Toughness; the combat-ability event installs **up to 8 seconds of Stealth** with `movement_speed = 0.25`. [Talent and display values](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/veteran_talents.lua#L2032-L2113); [Shock Trooper ability recovery branch](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/ability/actions/action_veteran_combat_ability.lua#L51-L80); [Stealth start, exit and stop rules](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/veteran_buff_templates.lua#L1110-L1289).
- Starting Stealth immediately creates the custom damage bonus with `damage = 0.3`. `VeteranStealthBonusesBuff.duration()` returns `nil`, avoiding removal by the base duration timer. On first observing that Stealth has ended, it sets `stop_t = t + 8`. Therefore the bonus is active **during Stealth and for another eight seconds after leaving it**, rather than starting only on exit. [Damage bonus template](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/veteran_buff_templates.lua#L1083-L1095); [Stealth start, exit and stop rules](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/veteran_buff_templates.lua#L1110-L1289); [VeteranStealthBonusesBuff lifecycle](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/buff/buffs/veteran_stealth_bonuses_buff.lua#L7-L44).
- Exit handling subscribes to `on_shoot`, `on_hit`, `on_action_start` and four rescue-completion events. It does not use `on_player_hit_received` as an exit event. During the initial **0.5 seconds**, an event with no positive damage has a grace period. An external `attack_instigator` is excluded before the exit conditions. [Stealth start, exit and stop rules](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/veteran_buff_templates.lua#L1110-L1289).
- In the action-name branch, only `action_throw_grenade` passes the exit condition; throwing a grenade can end Stealth. The damage-event whitelist can ignore bleeding, burning, frag explosions and plasma damage events. A shooting event can still end Stealth, so that whitelist does not establish that firing a plasma weapon preserves Stealth. Existing bleeding or burning damage-over-time ticks do not end Stealth solely because of those damage events. [Stealth start, exit and stop rules](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/veteran_buff_templates.lua#L1110-L1289).
- When Stealth stops, it applies stagger and suppression to enemies within `in_melee_range + 1 = 6 metres`. This is not a guarantee that every enemy is knocked back. [Stealth start, exit and stop rules](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/veteran_buff_templates.lua#L1110-L1289); [Melee-range constant](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/damage/damage_settings.lua#L18-L25).
- Base ability cost is **40 resource units**, with natural recovery **1 unit/second**. Cooldown starts on use and continues during Stealth. The shared ability-resource behavior and optional extra charge are detailed in [Overwatch](veteran_combat_ability_extra_charge.md). [Base stealth ability cost and regeneration](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/player_abilities/abilities/veteran_abilities.lua#L73-L80); [Base resource settings](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/talent/talent_settings_veteran.lua#L5-L8); [Stealth activation](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/ability_templates/veteran_stealth_combat_ability.lua#L90-L101); [Consumption and recharge start](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/ability/player_unit_ability_extension.lua#L999-L1027); [Ability resource update](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/ability/player_unit_ability_extension.lua#L826-L869).
- The two damage-bonus definitions have no `max_stacks` field. Additional uses can create independently existing instances; the single-use examples below do not include overlapping bonuses. [Damage bonus template](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/veteran_buff_templates.lua#L1083-L1095); [Stealth start, exit and stop rules](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/veteran_buff_templates.lua#L1110-L1289); [VeteranStealthBonusesBuff lifecycle](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/buff/buffs/veteran_stealth_bonuses_buff.lua#L7-L44).

The related [Hunter's Resolve](veteran_toughness_bonus_leaving_invisibility.md) modifier grants its own Toughness damage reduction during and after Stealth; its independent timers and overlaps are documented separately.

## Recovery, damage and timing examples

Assume one use with no other recovery, damage, cooldown or resource effects; the recovery succeeds normally, and there are no overlapping ability bonuses. For the damage example, use a hypothetical 100-damage baseline at the affected stage and no later modifiers. Approximate times ignore frame boundaries.

| Assumptions | Substitution and result | Player meaning |
|---|---|---|
| Current Toughness 30; maximum 100 | Restore to 100; actual recovery `100 − 30 = 70 Toughness points`. | Replenishing all Toughness restores the missing amount. |
| Single damage bonus; baseline 100 | `100 × (1 + 0.30) = 130 damage units`. | The isolated +30% bonus gives 30 additional units under these assumptions. |
| Leave Stealth at about 3 seconds | Damage bonus ends at about `3 + 8 = 11 seconds` after use. | The eight-second post-Stealth period begins after leaving Stealth. |
| Same timeline and unmodified 40-second cooldown | At 11 seconds, about `40 − 11 = 29 seconds` remain. | Cooldown has already progressed during both Stealth and the remaining damage-bonus period. |

[Shock Trooper ability recovery branch](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/ability/actions/action_veteran_combat_ability.lua#L51-L80); [Damage bonus template](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/veteran_buff_templates.lua#L1083-L1095); [VeteranStealthBonusesBuff lifecycle](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/buff/buffs/veteran_stealth_bonuses_buff.lua#L7-L44); [Base stealth ability cost and regeneration](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/player_abilities/abilities/veteran_abilities.lua#L73-L80); [Consumption and recharge start](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/ability/player_unit_ability_extension.lua#L999-L1027); [Ability resource update](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/ability/player_unit_ability_extension.lua#L826-L869).

## Original English template and reconstruction

Full raw template, hash `957cbfa6`:

```text
Replenish all Toughness and enter Stealth for {duration:%s}s, gaining {movement_speed:%s} Movement Speed. Leaving Stealth Suppresses nearby Enemies. While in Stealth, and for {damage_duration:%s}s afterwards, you have {damage:%s} Damage. Attacking makes you leave Stealth.

Base Cooldown: {cooldown:%s}s.
```

| Parameter | Definition and formatting | Reconstructed value |
|---|---|---|
| `duration` | Number; `veteran_invisibility.duration = 8` | `8` |
| `movement_speed` | `movement_speed = 0.25`; percentage with `+` prefix | `+25%` |
| `damage_duration` | Number; damage-bonus template duration `8` | `8` |
| `damage` | `damage = 0.3`; custom `abs(value) × 100` replaces the default percentage conversion, then `+` prefix | `+30%` |
| `cooldown` | Number; base ability cooldown `40` | `40` |
| `talent_name` | Defined localized name `Infiltrate`, but absent from this raw template | Unused; not inserted |

[Talent and display values](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/veteran_talents.lua#L2032-L2113); [Damage bonus template](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/veteran_buff_templates.lua#L1083-L1095); [Stealth start, exit and stop rules](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/veteran_buff_templates.lua#L1110-L1289); [Base stealth ability cost and regeneration](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/player_abilities/abilities/veteran_abilities.lua#L73-L80); [Percentage/number formatting and custom manipulation](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/ui/views/talent_builder_view/utilities/talent_layout_parser.lua#L379-L426); [Buff-template value lookup](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/ui/views/talent_builder_view/utilities/talent_layout_parser.lua#L482-L499); [Parameter formatting](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/ui/views/talent_builder_view/utilities/talent_layout_parser.lua#L613-L651); [Description localization](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/ui/views/talent_builder_view/utilities/talent_layout_parser.lua#L690-L713).

The percentage formatter uses the custom `value_manipulation` when present and otherwise multiplies by 100; it does not apply both. Thus the damage display is +30%, not a second percentage multiplication. The custom damage-buff lifecycle is separate from its eight-second display duration. [Percentage/number formatting and custom manipulation](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/ui/views/talent_builder_view/utilities/talent_layout_parser.lua#L379-L426); [VeteranStealthBonusesBuff lifecycle](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/buff/buffs/veteran_stealth_bonuses_buff.lua#L7-L44).

Static plain-text reconstruction, preserving both original paragraphs:

```text
Replenish all Toughness and enter Stealth for 8s, gaining +25% Movement Speed. Leaving Stealth Suppresses nearby Enemies. While in Stealth, and for 8s afterwards, you have +30% Damage. Attacking makes you leave Stealth.

Base Cooldown: 40s.
```

This reconstruction excludes runtime color markup and is not an observed game screen. The exact English agrees with Toughness recovery, base duration/speed, damage during and after Stealth, suppression and the base cooldown. Event exceptions, rescue/grenade conditions, the radius/stagger details, recharge start and overlapping instances supplement the description; they do not establish an explicit contradiction. No English player-page erratum is supported.

## Limits

The examples isolate a single use and retain their recovery, damage and cooldown assumptions. Exact frame boundaries, every possible interaction/weapon event combination and overlapping-use damage in game have not been measured. Whitelisted damage events do not guarantee Stealth survives a separate shooting event. No universal knockback outcome is inferred.

## Icon source

[Original image](https://gameslantern.com/storage/sites/darktide/exporter/talents/veteran/ability/veteran_invisibility_on_combat_ability.webp) | [Media-Assets Issue](https://github.com/SyuanTsai/Media-Assets/issues/6#issuecomment-5922922455) | [Issue attachment](https://github.com/user-attachments/assets/0f9d7c51-7e6a-4f3d-a367-5c22d0adf308)

The icon identifies the talent; it is not mechanism evidence.
