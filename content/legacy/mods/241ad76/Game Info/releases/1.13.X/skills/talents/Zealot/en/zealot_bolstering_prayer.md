# Chorus of Spiritual Fortitude: source evidence

[繁體中文](../zealot_bolstering_prayer.md) | [Player description](README.md#zealot_bolstering_prayer) | [Technical index](SOURCE_INDEX.md) | [English comparison](LOCALIZATION_COMPARISON.md#zealot_bolstering_prayer)

Release 1.13.1; fixed SHA `7e662fcda16219d775b84af50322be2e9cd9d62e`. Talent `zealot_bolstering_prayer`; name key `loc_talent_zealot_bolstering_prayer`; description key `loc_talent_zealot_bolstering_prayer_expanded_description`. Node `node_c286494b-4e57-42a2-9c41-04809ee97c41`; category Ability; one point. Mechanisms and examples reuse verified source evidence; no in-game test was performed.

## Source-confirmed behavior and static derivation

- `PlayerAbilities.zealot_relic` has `cooldown = 60`, `max_charges = 1` and regeneration of **1 resource unit/second**. `ActionZealotChannel.start` spends the charge then calls `pause_ability_resource_regen`. Its `pause_fulfilled_func` resumes recovery when the wielded slot is no longer `slot_combat_ability`; cooldown progress therefore starts after putting away the relic.
- `action_zealot_channel.lua` sets the next tick to activation time **t**; `fixed_update` advances it every **0.8 seconds**. The approximately **3.67-second** action yields **5** ticks at **0/0.8/1.6/2.4/3.2 seconds**. Each `_on_channel_tick` restores **20% Toughness** to `in_coherence_units`, adds a **+15 maximum Toughness** buff and refreshes a **1.5-second** `unkillable`/`stun_immune` buff. `CoherencySystem` includes the holder in the chain, so the caster receives the effects.
- Separately, each fixed-update frame restores Coherency-set Toughness at **25%/second**; the frame before the first tick is adjusted by **1.75×**. Talent `format_values` adds **20% + 25% = 45%**, but execution separates **20% per pulse** from **25% per second**. Do not describe **45%** as recovery on each pulse.
- Temporary maximum-Toughness buff: `duration = 10`, **+15 per stack**, `max_stacks = 5`, `refresh_duration_on_stack = true`, up to **+75**. Reapplication resets the stacked buff's `start_time`.
- Stagger targeting starts with a **10-metre** radius, increasing by **0.1 metre/second** of channeling. For the first **0.5 seconds**, `power_level = 0`; afterward it is **500**. Suppression is handled separately by action updates: the first tick affects aggroed minions in line of sight without a distance limit; later ticks use melee range.

## Fixed source evidence

- [scripts/settings/ability/archetype_talents/talents/zealot_talents.lua — L92-L167](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/zealot_talents.lua#L92-L167)
- [scripts/settings/talent/talent_settings_zealot.lua — L539-L547](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/talent/talent_settings_zealot.lua#L539-L547)
- [scripts/settings/ability/player_abilities/abilities/zealot_abilities.lua — L37-L58](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/player_abilities/abilities/zealot_abilities.lua#L37-L58)
- [scripts/settings/equipment/weapon_templates/combat_abilities/zealot_relic.lua — L112-L132](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/combat_abilities/zealot_relic.lua#L112-L132)
- [scripts/extension_systems/weapon/actions/action_zealot_channel.lua — L44-L163](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/weapon/actions/action_zealot_channel.lua#L44-L163)
- [scripts/extension_systems/weapon/actions/action_zealot_channel.lua — L182-L274](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/weapon/actions/action_zealot_channel.lua#L182-L274)
- [scripts/settings/buff/archetype_buff_templates/zealot_buff_templates.lua — L80-L158](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/zealot_buff_templates.lua#L80-L158)
- [scripts/extension_systems/coherency/coherency_system.lua — L186-L205](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/coherency/coherency_system.lua#L186-L205)
- [scripts/extension_systems/toughness/player_unit_toughness_extension.lua — L253-L285](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/toughness/player_unit_toughness_extension.lua#L253-L285)
- [scripts/extension_systems/ability/player_unit_ability_extension.lua — L826-L860](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/ability/player_unit_ability_extension.lua#L826-L860)
- [scripts/extension_systems/toughness/player_unit_toughness_extension.lua — L200-L210](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/toughness/player_unit_toughness_extension.lua#L200-L210)
- [scripts/settings/ability/archetype_talents/talents/zealot_talents.lua — L92-L167](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/zealot_talents.lua#L92-L167)
- [scripts/ui/views/talent_builder_view/layouts/zealot_tree.lua — L540-L568](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/ui/views/talent_builder_view/layouts/zealot_tree.lua#L540-L568)

## Example assumptions and limits

- **Channeling**: Raise the relic for about **3.67 seconds**, pulsing immediately and then every **0.8 seconds**. A full channel has about **5 pulses**, affecting you and allies in Coherency.
- **Toughness recovery**: Each pulse restores **20% of current maximum Toughness**; channeling additionally restores **25% of maximum Toughness per second**. Each pulse adds **15 maximum Toughness**, up to **5 stacks / +75**, lasting **10 seconds** after the last pulse.
- **Recovery example**: Ignore continuous recovery between pulses. With maximum Toughness **100** and current **40**, the first pulse restores `100 × 20% = 20`, then adds **15** to both current and maximum, giving **75/115**. Subsequent per-second recovery also uses the current maximum; at 115 it is `115 × 25% = 28.75`.
- **Protection and control**: Each pulse grants **1.5 seconds** of Unkillable and ordinary hit Stagger immunity, while Staggering and Suppressing nearby susceptible enemies. Unkillable does not mean no damage is taken.
- **Cooldown**: Base **60 seconds**, **1 charge**. Natural recovery pauses while holding the relic and resumes after putting it away. Interrupting early reduces pulse count.

- Recovery depends on current maximum Toughness, deficit, replenishment bonuses and recovery blocks. Temporary maximum stacks increase later recovery's baseline.
- Text and code both correspond to **1.13.1**. Actual presentation remains unobserved. The original Chinese evidence retains the **45% formatted sum** versus separate execution as pending an in-game check, without declaring a Chinese-only mistranslation; the independently read English conclusion below is distinct.
- Hordes-mode Corruption healing from an additional keyword is excluded; that effect requires an external Buff keyword.
- The existing **75/115** and **28.75/second** examples isolate the stated stages and do not promise fixed full-channel recovery.

Mechanisms reuse the fixed-version evidence, with local Build 25606770 English text corresponding to 1.13.1. Actual presentation and behavior remain unobserved in game. Missing details are supplementary explanations.

<a id="original-english-template-and-reconstruction"></a>

## Original English template and reconstruction

Steam Build `25606770`; `content/localization/ui`, resource hash `63564edcb7c3c5ee`; language `en` (code `0`).

- Name key `loc_talent_zealot_bolstering_prayer`, hash `b1a2ee76`, entry 11442: **Chorus of Spiritual Fortitude**.
- Description key `loc_talent_zealot_bolstering_prayer_expanded_description`, hash `ae04279a`, entry 11200.

Full raw template:

~~~text
Wield a holy relic that releases pulses of energy every {interval:%s}s, staggering and suppressing nearby enemies. While channeling, Allies in Coherency have Stun Immunity and Unkillable.

Each pulse Replenishes {toughness:%s} Toughness to Allies in Coherency and grants them an additional {flat_toughness:%s} Max Toughness up to a total of {max_toughness}, lasting {duration:%s}s.

{cooldown:%s}s Base Cooldown.
~~~

| Placeholder | Value | Formatting |
|---|---|---|
| `{interval:%s}` | `0.8` → `0.8` | Number |
| `{toughness:%s}` | `0.20 + 0.25 = 0.45` → `45%` | Percentage; display sum, not per-pulse runtime amount |
| `{flat_toughness:%s}` | `15` → `+15` | Number with explicit + prefix |
| `{max_toughness}` | `abs(15) × 5 = 75` → `+75` | Number manipulation with explicit + prefix |
| `{duration:%s}` | `10` → `10` | Number |
| `{cooldown:%s}` | `60` → `60` | Number |

Only missing display mappings in `zealot_talents.lua` L92-L153 were consulted. Values reuse the verified Chinese evidence. The raw template's untyped `{max_toughness}` is retained and paired with its existing format value. Unused `team_toughness`, `self_toughness` and `stacks` are not part of this template.

Static reconstruction; not an observed game screen:

~~~text
Wield a holy relic that releases pulses of energy every 0.8s, staggering and suppressing nearby enemies. While channeling, Allies in Coherency have Stun Immunity and Unkillable.

Each pulse Replenishes 45% Toughness to Allies in Coherency and grants them an additional +15 Max Toughness up to a total of +75, lasting 10s.

60s Base Cooldown.
~~~

## English comparison

The independently read English explicitly assigns the statically reconstructed **45%** to **each pulse**. Accepted execution restores **20% per pulse**, with **25% per second** separately; adding rates with different time bases cannot make 45% a pulse amount. This is an explicit English contradiction, distinct from the Chinese record's pending localization/display conclusion. Pulse interval, +15/+75 maximum bonus, 10-second duration and 60-second base cooldown agree. Caster inclusion, continuous recovery, 1.5-second protection refresh, detailed targeting, recovery conditions and cooldown pause are supplements.

## Icon source

[Original image](https://gameslantern.com/storage/sites/darktide/exporter/talents/zealot/ability/zealot_bolstering_prayer.webp) | [Media-Assets Issue](https://github.com/SyuanTsai/Media-Assets/issues/8#issuecomment-5929289315) | [Existing attachment](https://github.com/user-attachments/assets/4ae30922-3e39-4ded-8e19-35ec595befa0). The icon identifies the talent; it is not mechanism evidence.
