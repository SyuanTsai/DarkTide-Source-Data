# Shroudfield: source evidence

[繁體中文](../zealot_stealth.md) | [Player description](README.md#zealot_stealth) | [Technical index](SOURCE_INDEX.md) | [English comparison](LOCALIZATION_COMPARISON.md#zealot_stealth)

Release 1.13.1; fixed SHA `7e662fcda16219d775b84af50322be2e9cd9d62e`. Talent `zealot_stealth`; name key `loc_ability_zealot_stealth`; description key `loc_ability_zealot_stealth_rending_description`. Node `node_f1b10508-b92d-45c4-8661-941d3eadac13`; category Ability; one point. Mechanisms and examples reuse verified source evidence; no in-game test was performed.

## Source-confirmed behavior and static derivation

- `PlayerAbilities.zealot_invisibility` uses the `zealot_invisibility` Buff as its ability template: `cooldown=30`, `max_charges=1`, `resource_cost_per_charge=30`, and `resource_regen_per_second=1`. The base Buff has `duration=3`.
- The Buff explicitly sets `movement_speed=0.2`, `critical_strike_chance=1`, `finesse_modifier_bonus=1.5`, `backstab_damage=1.5`, `flanking_damage=1.5`, and `melee_rending_multiplier=1`. Its keywords are `invisible`, `allow_backstabbing`, and `allow_flanking`.
- The Buff receives events including `on_shoot`, `on_hit`, `on_revive`, `on_rescue`, `on_pull_up`, `on_remove_net`, and `on_action_start`. The proc handles the player's own events, ignores the listed damage-over-time types, and skips zero damage unless the result is `toughness_absorbed`. The `action_name` filter lets grenade and throwing-knife actions enter the exit process. An initial 0.5-second `exit_grace` prevents non-damage events from stripping Stealth immediately.
- Display values are read directly from the Buff template. Without the duration extension, the cooldown is 30 seconds.

## Fixed source evidence

- [scripts/settings/ability/archetype_talents/talents/zealot_talents.lua — L240-L333](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/zealot_talents.lua#L240-L333)
- [scripts/settings/ability/player_abilities/abilities/zealot_abilities.lua — L60-L76](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/player_abilities/abilities/zealot_abilities.lua#L60-L76)
- [scripts/settings/buff/archetype_buff_templates/zealot_buff_templates.lua — L4157-L4195](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/zealot_buff_templates.lua#L4157-L4195)
- [scripts/settings/buff/archetype_buff_templates/zealot_buff_templates.lua — L4206-L4269](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/zealot_buff_templates.lua#L4206-L4269)
- [scripts/settings/buff/archetype_buff_templates/zealot_buff_templates.lua — L4271-L4301](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/zealot_buff_templates.lua#L4271-L4301)
- [scripts/utilities/attack/damage_calculation.lua — L672-L782](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/attack/damage_calculation.lua#L672-L782)
- [scripts/utilities/attack/attack_positioning.lua — L9-L65](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/attack/attack_positioning.lua#L9-L65)
- [scripts/settings/ability/archetype_talents/talents/zealot_talents.lua — L240-L333](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/zealot_talents.lua#L240-L333)
- [scripts/ui/views/talent_builder_view/layouts/zealot_tree.lua — L752-L784](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/ui/views/talent_builder_view/layouts/zealot_tree.lua#L752-L784)

## Example assumptions and limits

- **Stealth and cooldown**: Enter Stealth for 3 seconds; base cooldown 30 seconds, maximum 1 charge.
- **Bonuses**: Gain 20% Movement Speed, 100 percentage points of Critical Chance, 100% Melee Rending, and 150% bonuses to Backstab/flanking damage and the extra Finesse damage component. Backstab applies to qualifying melee positioning; flanking applies to the corresponding ranged positioning. They are not two bonuses added to the same hit.
- **Ending Stealth**: Your ordinary shooting, qualifying effective hits, grenade/throwing-knife actions and assistance actions such as reviving or rescuing can end Stealth. Listed damage-over-time events do not end it by themselves. The first 0.5 seconds provide a grace period for non-damage events.
- **Finesse example**: Fix the attack type, hit zone and armour, and consider only Finesse. A base component of 100 plus an extra Weakspot/Critical component of 50 changes from 150 to 100 + 50 × (1 + 150%) = 225, a 50% increase to the whole hit. With an extra component of 100, 200 becomes 350, a 75% increase. Backstab, Rending and other factors are calculated separately.
- **Movement example**: A base speed of 5 m/s with no other modifiers becomes 5 × 1.2 = 6 m/s.

- These are stat modifiers, not numbers that can be added into one total damage multiplier. Critical Hits, Finesse, Backstab, flanking and Rending have different conditions and calculation stages.
- Proc filters mean certain damage types, zero-damage results, other players' events and unpermitted `action_name` values may not end Stealth. The short description covers the main behavior; these events do not share one unconditional trigger.
- Other talents can refund or accelerate cooldown recovery. The 30-second value is the base resource cost and natural-recharge estimate without additional modifiers.
- The Chinese source note records matching effect directions for the two languages at hash `644f101d`. Trigger details, modifiers, recovery and calculations supplement the wording. Actual game behavior and display remain unobserved.

Mechanisms reuse the fixed-version evidence, with local Build 25606770 English text corresponding to 1.13.1. Actual presentation and behavior remain unobserved in game. Missing details are supplementary explanations.

<a id="original-english-template-and-reconstruction"></a>

## Original English template and reconstruction

Steam Build `25606770`; `content/localization/ui`, resource hash `63564edcb7c3c5ee`; language `en` (code `0`).

- Name key `loc_ability_zealot_stealth`, hash `e94fd822`, entry 15155: **Shroudfield**.
- Description key `loc_ability_zealot_stealth_rending_description`, hash `644f101d`, entry 6522.

Full raw template:

~~~text
Enter Stealth for {duration:%s}s. While in Stealth gain {movement_speed:%s} Movement Speed, {backstab_damage:%s} Backstab Damage, {finesse_damage:%s} Finesse Damage, {crit_chance:%s} Critical Chance & {rending:%s} Melee Rending. Attacking makes you leave Stealth.

Base Cooldown: {cooldown:%s}s
~~~

| Placeholder | Value | Formatting |
|---|---|---|
| `duration` | 3 | `number`; Buff `duration` |
| `movement_speed` | 0.2 → +20% | `percentage`, `+` prefix |
| `backstab_damage` | 1.5 → +150% | `percentage`, `+` prefix |
| `finesse_damage` | 1.5 → +150% | `percentage`, `+` prefix; `finesse_modifier_bonus` |
| `crit_chance` | 1 → +100% | `percentage`, `+` prefix |
| `rending` | 1 → +100% | `percentage`, `+` prefix; `melee_rending_multiplier` |
| `cooldown` | 30 | `number`; `PlayerAbilities.zealot_invisibility.cooldown` |

Formatting reuses `zealot_talents.lua` L240-L324 and the accepted Buff values. The unused `talent_name` format entry is not inserted into this template.

Static reconstruction; not an observed game screen:

~~~text
Enter Stealth for 3s. While in Stealth gain +20% Movement Speed, +150% Backstab Damage, +150% Finesse Damage, +100% Critical Chance & +100% Melee Rending. Attacking makes you leave Stealth.

Base Cooldown: 30s
~~~

## English comparison

The English gives the same base duration, cooldown and modifier values as the accepted evidence. “Attacking makes you leave Stealth” describes the ordinary attack behavior; the template does not enumerate the proc filters, initial grace period or assistance actions. Those exceptions and the separate Finesse/damage stages are supplements, not an established English contradiction.

## Icon source

[Original image](https://gameslantern.com/storage/sites/darktide/exporter/talents/zealot/ability/zealot_stealth.webp) | [Media-Assets Issue](https://github.com/SyuanTsai/Media-Assets/issues/8#issuecomment-5929289315) | [Existing attachment](https://github.com/user-attachments/assets/313c803f-9a12-4470-9660-ce9a8fd308c9). The icon identifies the talent; it is not mechanism evidence.
