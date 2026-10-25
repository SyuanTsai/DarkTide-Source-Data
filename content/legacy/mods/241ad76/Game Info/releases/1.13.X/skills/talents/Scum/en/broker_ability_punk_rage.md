# Rampage!: source evidence

[繁體中文](../broker_ability_punk_rage.md) | [Player description](README.md#broker_ability_punk_rage) | [Technical index](SOURCE_INDEX.md) | [English comparison](LOCALIZATION_COMPARISON.md#broker_ability_punk_rage)

Release 1.13.1; fixed SHA `7e662fcda16219d775b84af50322be2e9cd9d62e`. Talent `broker_ability_punk_rage`; name key `loc_talent_broker_ability_punk_rage`; description key `loc_talent_broker_ability_punk_rage_desc_3`. Node `node_a24b4ec0-aec0-45a1-b746-05dbd671e2e2`; category Ability; one point. Mechanisms and examples reuse verified source evidence; no in-game test was performed.

## Source-confirmed behavior and static derivation

- TalentSettings uses `rage_duration = 10`, `rage_melee_power_level_modifier = 0.35`, `rage_melee_attack_speed = 0.20`, `rage_damage_taken_multiplier = 0.75`, `rage_duration_extend = 0.3`, `rage_duration_max = 20` and `rage_duration_divisor = 2`. BuffSettings defines `melee_power_level_modifier` and `melee_attack_speed` as additive modifiers, and `damage_taken_multiplier` as multiplicative. A multiplier of 0.75 means 25% less Damage taken.
- Melee Power modifies Power Level rather than directly multiplying Damage. With only this ability, 35% Power Level and 20% Attack Speed enter separate statistics. The speed-derived action time is 1 / (1 + 0.20) = approximately 0.833.
- The ability action uses `refill_toughness = true` and consumes one charge within its 1-second action duration. The rage state extends on Melee `on_hit`, without requiring a kill. The shared extension function divides the base 0.3 seconds by 2^floor(elapsed since activation / 20), giving 0.15 and 0.075 seconds at the 20- and 40-second stages.
- The state buff currently has `stun_immune` and `slowdown_immune`, but does not have `suppression_immune`. `PlayerSuppressionExtension.add_suppression` skips accumulation only when `suppression_immune` is present. The Suppression immunity promised by both original language descriptions is therefore not established by this fixed-version evidence. This is an implementation/text gap, rather than a disagreement between the two languages.
- Rage consumes 30 resources for its one charge and naturally replenishes 1 per second. The pause-fulfilled check resumes natural replenishment only after `broker_punk_rage_stance` disappears.

## Fixed source evidence

- [scripts/settings/ability/archetype_talents/talents/broker_talents.lua — L261-L330](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/broker_talents.lua#L261-L330)
- [scripts/settings/talent/talent_settings_broker.lua — L142-L168](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/talent/talent_settings_broker.lua#L142-L168)
- [scripts/settings/ability/player_abilities/abilities/broker_abilities.lua — L67-L96](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/player_abilities/abilities/broker_abilities.lua#L67-L96)
- [scripts/settings/ability/ability_templates/broker_punk_rage.lua — L25-L43](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/ability_templates/broker_punk_rage.lua#L25-L43)
- [scripts/settings/buff/archetype_buff_templates/broker_buff_templates.lua — L559-L746](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/broker_buff_templates.lua#L559-L746)
- [scripts/settings/buff/buff_settings.lua — L775-L776](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/buff_settings.lua#L775-L776)
- [scripts/settings/buff/buff_settings.lua — L860-L878](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/buff_settings.lua#L860-L878)
- [scripts/extension_systems/suppression/player_suppression_extension.lua — L117-L128](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/suppression/player_suppression_extension.lua#L117-L128)
- [scripts/extension_systems/ability/player_unit_ability_extension.lua — L825-L884](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/ability/player_unit_ability_extension.lua#L825-L884)
- [scripts/settings/ability/archetype_talents/talents/broker_talents.lua — L261-L330](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/broker_talents.lua#L261-L330)
- [scripts/ui/views/talent_builder_view/layouts/broker_tree.lua — L814-L845](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/ui/views/talent_builder_view/layouts/broker_tree.lua#L814-L845)

## Example assumptions and limits

- **Activation:** replenish all Toughness, swap to your Melee Weapon and enter rage for a base 10 seconds.

- **Melee Power and Attack Speed:** gain additive +35% Melee Power Level and +20% Melee Attack Speed. Power Level affects attack output and impact, and cannot be treated as an equal percentage of final Damage. With only +20% Attack Speed, an initial 1-second action takes approximately 1 ÷ 1.20 = 0.83 seconds. For example, Power 500 becomes 500 × 1.35 = 675 before the weapon's Damage and Stagger curves.

- **Damage taken:** multiply Damage taken by 0.75. With only this effect, 100 incoming Damage becomes 100 × 0.75 = 75, a 25% reduction.

- **Duration extension:** each Melee hit initially extends rage by 0.3 seconds. For every 20 seconds elapsed since activation, the per-hit extension halves: 0.15 seconds during seconds 20–40 and 0.075 seconds during seconds 40–60. This diminishes individual extensions; it does not impose a total 20-second duration cap.

- **Immunity and cooldown:** rage grants Stun and Slowdown immunity. Natural replenishment for the base 30-second cooldown begins after rage ends.

+35% modifies Melee Power Level, not final Damage by a guaranteed +35%; weapon, armour and other modifiers determine final output. The existing fixed-version evidence verifies Stun and Slowdown immunity but has no state Suppression immunity flag; both original languages promise it, so the Chinese document did not classify this as a mistranslation. Mechanisms reuse the fixed-version evidence, with local Build 25606770 English text corresponding to 1.13.1. Actual presentation and behavior remain unobserved in game. Missing details are supplementary explanations.

<a id="original-english-template-and-reconstruction"></a>

## Original English template and reconstruction

Steam Build `25606770`; `content/localization/ui`, resource hash `63564edcb7c3c5ee`; language `en` (code `0`).

- Name key `loc_talent_broker_ability_punk_rage`, hash `b37505a2`, entry 11575: **Rampage!**.
- Description key `loc_talent_broker_ability_punk_rage_desc_3`, hash `be0f1026`, entry 12256.

Full raw template:

~~~text
Replenish all Toughness and enter {talent_name:%s} for {duration:%s}s. For the duration, gain {power:%s} Melee Power, {attack_speed:%s} Melee Attack Speed and {damage_taken:%s} Damage Reduction, as well as becoming Stun and Suppression immune.

Melee Strikes extend the duration by {rage_duration_extend:%s}s. After {rage_duration_max:%s}s, the duration extension granted by each hit is reduced.

Base Cooldown: {cooldown:%s}s.
~~~

| Placeholder | Value | Formatting |
|---|---|---|
| `talent_name` | `loc_talent_broker_ability_punk_rage` | Localized string → `Rampage!` |
| `duration` | `rage_duration = 10` | Number → `10` |
| `power` | `rage_melee_power_level_modifier = 0.35` | Percentage with explicit plus prefix → `+35%` |
| `attack_speed` | `rage_melee_attack_speed = 0.20` | Percentage with explicit plus prefix → `+20%` |
| `damage_taken` | `rage_damage_taken_multiplier = 0.75` | `abs(1 − value) × 100`, explicit plus prefix → `+25%`; no second ×100 |
| `rage_duration_extend` | `rage_duration_extend = 0.3` | Number with one decimal → `0.3` |
| `rage_duration_max` | `rage_duration_max = 20` | Number → `20` |
| `cooldown` | `punk_rage.cooldown = 30` | Number → `30` |

Display mapping: [broker_talents.lua L266–301 and L322–326](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/broker_talents.lua#L266-L326). Values reuse the accepted document; the unused exhaust placeholders are absent from this raw English template.

Static reconstruction; not an observed game screen:

~~~text
Replenish all Toughness and enter Rampage! for 10s. For the duration, gain +35% Melee Power, +20% Melee Attack Speed and +25% Damage Reduction, as well as becoming Stun and Suppression immune.

Melee Strikes extend the duration by 0.3s. After 20s, the duration extension granted by each hit is reduced.

Base Cooldown: 30s.
~~~

## English comparison

English says Melee Power rather than final Melee Damage, gives the verified 10-second state, +35% Power, +20% Attack Speed, +25% Damage Reduction, 0.3-second Melee-hit extension, diminution after 20 seconds and 30-second base cooldown. These agree with the existing evidence. Stun immunity is supported. For the promised Suppression immunity, no corresponding implementation evidence is found in the accepted record: the state lacks the required flag. This remains an implementation/text gap requiring in-game confirmation, without asserting a resolved English erratum. Slowdown immunity, the extension formula, weapon swap and cooldown pause are supplements.

## Icon source

[Original image](https://gameslantern.com/storage/sites/darktide/exporter/talents/broker/ability/broker_ability_punk_rage.webp) | [Media-Assets Issue](https://github.com/SyuanTsai/Media-Assets/issues/12#issuecomment-5933978534) | [Existing attachment](https://github.com/user-attachments/assets/ae8bc68a-7d1b-4ee7-8691-bed95ed8069d). The icon identifies the talent; it is not mechanism evidence.
