# Burst of Energy: source evidence

[繁體中文](../broker_passive_stun_immunity_on_toughness_broken.md) | [Player description](README.md#broker_passive_stun_immunity_on_toughness_broken) | [Technical index](SOURCE_INDEX.md) | [English comparison](LOCALIZATION_COMPARISON.md#broker_passive_stun_immunity_on_toughness_broken)

Release 1.13.1; fixed SHA `7e662fcda16219d775b84af50322be2e9cd9d62e`. Talent `broker_passive_stun_immunity_on_toughness_broken`; name key `loc_talent_broker_passive_stun_immunity_on_toughness_broken`; description key `loc_talent_broker_passive_stun_immunity_on_toughness_broken_desc`. Node `node_d774a7a8-87a2-4b0e-973e-5f735b67109f`; category Talent; one point. Mechanisms and examples reuse verified source evidence; no in-game test was performed.

## Source-confirmed behavior and static derivation

- `on_player_toughness_broken` with `CheckProcFunctions.is_self` activates the `stun_immune` proc keyword for 6 seconds. The server replenishes 0.5 of maximum Toughness.
- A `ProcBuff` with a cooldown cannot activate again while active. `cooling_down` uses `active_start + active_duration + cooldown`, so the 10-second cooldown starts after the 6-second effect ends.

## Fixed source evidence

- [scripts/extension_systems/buff/buffs/proc_buff.lua — L150-L181](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/buff/buffs/proc_buff.lua#L150-L181)
- [scripts/extension_systems/toughness/player_unit_toughness_extension.lua — L253-L285](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/toughness/player_unit_toughness_extension.lua#L253-L285)
- [scripts/settings/talent/talent_settings_broker.lua — L354-L358](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/talent/talent_settings_broker.lua#L354-L358)
- [scripts/settings/buff/archetype_buff_templates/broker_buff_templates.lua — L1888-L1912](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/broker_buff_templates.lua#L1888-L1912)
- [scripts/settings/ability/archetype_talents/talents/broker_talents.lua — L1521-L1544](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/broker_talents.lua#L1521-L1544)
- [scripts/ui/views/talent_builder_view/layouts/broker_tree.lua — L200-L230](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/ui/views/talent_builder_view/layouts/broker_tree.lua#L200-L230)

## Example assumptions and limits

- **Trigger effect**: when your Toughness breaks, immediately restore 50% of maximum Toughness and gain Stun Immunity for 6 seconds.
- **Recovery and cooldown example**: at 100 maximum Toughness, this talent alone restores Toughness from 0 to 50. The trigger first gives 6 seconds of Stun Immunity, followed by a 10-second cooldown. With no other changes, eligible triggers are at least 6 + 10 = 16 seconds apart.

The example isolates this talent at 100 maximum Toughness; the 16-second trigger interval assumes no other changes. Mechanisms reuse the fixed-version evidence, with local Build 25606770 English text corresponding to 1.13.1. Actual presentation and behavior remain unobserved in game. Missing details are supplementary explanations.

<a id="original-english-template-and-reconstruction"></a>

## Original English template and reconstruction

Steam Build `25606770`; `content/localization/ui`, resource hash `63564edcb7c3c5ee`; language `en` (code `0`).

- Name key `loc_talent_broker_passive_stun_immunity_on_toughness_broken`, hash `42123092`, entry 4284: **Burst of Energy**.
- Description key `loc_talent_broker_passive_stun_immunity_on_toughness_broken_desc`, hash `261ee901`, entry 2465.

Full raw template:

~~~text
Gain Stun Immunity for {duration:%s}s and restore {toughness:%s} Toughness when Toughness is broken. {cooldown:%s}s Cooldown.
~~~

| Placeholder | Value | Formatting |
|---|---|---|
| `{duration:%s}` | `talent_settings.broker_passive_stun_immunity_on_toughness_broken.duration = 6` → `6` | `number` |
| `{toughness:%s}` | `talent_settings.broker_passive_stun_immunity_on_toughness_broken.toughness = 0.5` → `+50%` | `percentage`; prefix `+` |
| `{cooldown:%s}` | `talent_settings.broker_passive_stun_immunity_on_toughness_broken.cooldown = 10` → `10` | `number` |

The existing display mapping at `broker_talents.lua` L1525-L1539 reads duration, Toughness recovery, and cooldown from the talent settings. Verified values are reused.

Static reconstruction; not an observed game screen:

~~~text
Gain Stun Immunity for 6s and restore +50% Toughness when Toughness is broken. 10s Cooldown.
~~~

## English comparison

The English's Toughness-break trigger, 6-second Stun Immunity, 50% recovery, and 10-second cooldown agree with the accepted values. It does not state when the cooldown begins. The cooldown starting after the active effect, the self-event condition, and the maximum-Toughness recovery basis are supplements.

## Icon source

[Original image](https://gameslantern.com/storage/sites/darktide/exporter/talents/broker/default/broker_passive_stun_immunity_on_toughness_broken.webp) | [Media-Assets Issue](https://github.com/SyuanTsai/Media-Assets/issues/12#issuecomment-5933987866) | [Existing attachment](https://github.com/user-attachments/assets/6f9a1e1d-3722-4f74-98ff-a17aadbd2ce4). The icon identifies the talent; it is not mechanism evidence.
