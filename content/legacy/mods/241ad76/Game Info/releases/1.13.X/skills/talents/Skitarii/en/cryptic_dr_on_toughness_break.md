# Adaptive Combat Engram: source evidence

[繁體中文](../cryptic_dr_on_toughness_break.md) | [Player description](README.md#cryptic_dr_on_toughness_break) | [Technical index](SOURCE_INDEX.md) | [English comparison](LOCALIZATION_COMPARISON.md#cryptic_dr_on_toughness_break)

Release 1.13.1; fixed SHA `7e662fcda16219d775b84af50322be2e9cd9d62e`. Talent `cryptic_dr_on_toughness_break`; name key `loc_talent_cryptic_dr_on_toughness_break`; description key `loc_talent_cryptic_dr_on_toughness_break_desc`. Node `node_3215cbda-7600-4e99-85d5-b29a6a22bc08`; category Talent; one point. Mechanisms and examples reuse verified source evidence; no in-game test was performed.

## Source-confirmed behavior and static derivation

- `on_player_toughness_broken` accepts only events with `params.unit` equal to the buff owner. `ProcBuff` tests cooldown against `active_start + active_duration + cooldown_duration`, so the minimum interval between triggers is 20 seconds, not 15.
- The buff becomes active after the Toughness-break event. It does not retroactively reduce the already resolved damage that broke Toughness.

## Fixed source evidence

- [scripts/extension_systems/buff/buffs/proc_buff.lua — L151-L174](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/buff/buffs/proc_buff.lua#L151-L174)
- [scripts/utilities/attack/damage_calculation.lua — L584-L611](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/attack/damage_calculation.lua#L584-L611)
- [scripts/settings/talent/talent_settings_cryptic.lua — L615-L619](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/talent/talent_settings_cryptic.lua#L615-L619)
- [scripts/settings/buff/archetype_buff_templates/cryptic_buff_templates.lua — L3273-L3293](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/cryptic_buff_templates.lua#L3273-L3293)
- [scripts/utilities/attack/damage_calculation.lua — L232-L245](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/attack/damage_calculation.lua#L232-L245)
- [scripts/settings/ability/archetype_talents/talents/cryptic_talents.lua — L2491-L2517](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/cryptic_talents.lua#L2491-L2517)
- [scripts/ui/views/talent_builder_view/layouts/cryptic_tree.lua — L294-L324](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/ui/views/talent_builder_view/layouts/cryptic_tree.lua#L294-L324)

## Example assumptions and limits

- **Trigger**: When your own Toughness breaks, gain **30% Damage Reduction for 5 seconds**.
- **Cooldown**: After the 5-second effect ends, wait another **15 seconds** before it can trigger again. The earliest next trigger is **20 seconds after the previous trigger**.
- **Example**: With no other reduction, `100 × (1 − 30%) = 70` damage. With another independent 25% reduction, `100 × 0.70 × 0.75 = 52.5` damage.

- The 70-damage example assumes no other reduction. The 52.5-damage example includes an independent 25% reduction, multiplied by this effect's `0.70` multiplier.
- Protection begins after the break event and does not change the damage already used to break Toughness.
- The same-build English describes a 15-second trigger interval, while the accepted implementation has a 5-second effect followed by a 15-second cooldown. This is an English-text discrepancy against fixed-version evidence; it is not a Chinese translation error. Actual behavior remains unobserved in game.

Mechanisms reuse the fixed-version evidence, with local Build 25606770 English text corresponding to 1.13.1. Actual presentation and behavior remain unobserved in game. Missing details are supplementary explanations.

<a id="original-english-template-and-reconstruction"></a>

## Original English template and reconstruction

Steam Build `25606770`; `content/localization/ui`, resource hash `63564edcb7c3c5ee`; language `en` (code `0`).

- Name key `loc_talent_cryptic_dr_on_toughness_break`, hash `971612d9`, entry 9761: **Adaptive Combat Engram**.
- Description key `loc_talent_cryptic_dr_on_toughness_break_desc`, hash `05a4e1a1`, entry 342.

Full raw template:

~~~text
On Toughness break gain {damage_resistance:%s} Damage Resistance for {duration:%s}s. Can only occur once every {cooldown:%s}s.
~~~

| Placeholder | Value | Formatting |
|---|---|---|
| `damage_resistance` | +30% | `percentage`, prefix `+`: verified multiplier `0.70`, transformed by `math_round((1 - value) * 100)` |
| `duration` | 5 | `number`: verified `talent_settings.cryptic_dr_on_toughness_break.active_duration = 5` |
| `cooldown` | 15 | `number`: verified `talent_settings.cryptic_dr_on_toughness_break.cooldown_duration = 15` |

The display mappings in `cryptic_talents.lua` L2500–L2516 reconstruct the original wording from the verified values. The original cooldown placeholder remains 15; the corrected 20-second interval is explained separately.

Static reconstruction; not an observed game screen:

~~~text
On Toughness break gain +30% Damage Resistance for 5s. Can only occur once every 15s.
~~~

## English comparison

The English Toughness-break trigger, 30% resistance and 5-second duration agree with the accepted mechanism. The explicit sentence Can only occur once every 15s presents 15 seconds as the interval between activations, which conflicts with the verified 5-second active period plus 15-second cooldown, giving a minimum of 20 seconds. The owner-only trigger, non-retroactive protection and multiplicative examples are supplementary details.

## Icon source

[Original image](https://gameslantern.com/storage/sites/darktide/exporter/talents/cryptic/default/cryptic_dr_on_toughness_break.webp) | [Media-Assets Issue](https://github.com/SyuanTsai/Media-Assets/issues/13#issuecomment-5935647528) | [Existing attachment](https://github.com/user-attachments/assets/ea4be2ad-8b84-4e83-a056-993beed7b39c). The icon identifies the talent; it is not mechanism evidence.
