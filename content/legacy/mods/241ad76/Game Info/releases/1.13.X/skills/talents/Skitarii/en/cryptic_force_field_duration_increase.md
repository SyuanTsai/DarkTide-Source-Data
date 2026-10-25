# Overcharged Refraction Emitter: source evidence

[繁體中文](../cryptic_force_field_duration_increase.md) | [Player description](README.md#cryptic_force_field_duration_increase) | [Technical index](SOURCE_INDEX.md) | [English comparison](LOCALIZATION_COMPARISON.md#cryptic_force_field_duration_increase)

Release 1.13.1; fixed SHA `7e662fcda16219d775b84af50322be2e9cd9d62e`. Talent `cryptic_force_field_duration_increase`; name key `loc_talent_cryptic_force_field_duration_increase`; description key `loc_talent_cryptic_force_field_duration_increase_desc`. Node `node_c462607d-3464-41ba-b43c-6d210aa1d65f`; category Blitz; one point. Mechanisms and examples reuse verified source evidence; no in-game test was performed.

## Source-confirmed behavior and static derivation

- The node enables `cryptic_force_field_increased_duration_and_extra_explosion`. The ability selects the 12s `action_activate_increased_duration`, replacing the original 8s action.
- `ActionActivateForceShield` explodes immediately on activation and records `t + total_time × 0.5`. Reaching that time adds another explosion, and `finish` produces a final one. A full 12s duration therefore has explosions at 0, 6 and 12s, all with a 5m radius.
- If the action finishes early, only the reached timing events occur. For example, finishing at 4s still causes the `finish` explosion, but does not trigger the unreached 6s midpoint.

## Fixed source evidence

- [scripts/settings/ability/archetype_talents/talents/cryptic_talents.lua — L832-L855](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/cryptic_talents.lua#L832-L855)
- [scripts/settings/talent/talent_settings_cryptic.lua — L164-L181](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/talent/talent_settings_cryptic.lua#L164-L181)
- [scripts/settings/ability/ability_templates/cryptic_force_field.lua — L27-L60](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/ability_templates/cryptic_force_field.lua#L27-L60)
- [scripts/extension_systems/ability/actions/action_activate_force_shield.lua — L49-L84](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/ability/actions/action_activate_force_shield.lua#L49-L84)
- [scripts/extension_systems/ability/actions/action_activate_force_shield.lua — L86-L125](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/ability/actions/action_activate_force_shield.lua#L86-L125)
- [scripts/settings/buff/archetype_buff_templates/cryptic_buff_templates.lua — L1250-L1289](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/cryptic_buff_templates.lua#L1250-L1289)
- [scripts/settings/damage/explosion_templates/player_explosion_templates.lua — L278-L298](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/damage/explosion_templates/player_explosion_templates.lua#L278-L298)
- [scripts/settings/ability/archetype_talents/talents/cryptic_talents.lua — L832-L855](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/cryptic_talents.lua#L832-L855)
- [scripts/ui/views/talent_builder_view/layouts/cryptic_tree.lua — L1889-L1911](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/ui/views/talent_builder_view/layouts/cryptic_tree.lua#L1889-L1911)

## Example assumptions and limits

- **How it works**: Integrated Refraction Emitter lasts 12s, 4s longer than the base 8s.
- **How it works**: The field causes an Electrocution explosion on activation, at the midpoint and on ending. During a normal full duration, the extra explosion occurs 6s after activation.
- **Example**: The midpoint of a 12s field is 12 ÷ 2 = 6s, so its three explosions occur around 0, 6 and 12s. Each still has a 5m radius.

- Static timeline: with a full 12s duration, activation explodes at 0s, the midpoint at 6s and expiry at 12s. If forced to stop at 4s, the ending explosion still occurs, but the midpoint explosion does not.
- Twelve seconds is the configured duration. Certain interrupting player states can shorten the actual duration.
- This upgrade increases field duration and explosion count. It does not also increase the 5m radius or damage profile of each explosion.
- The earlier source record did not independently establish an identical game Build for the fixed SHA and localized description. This comparison uses the specified fixed source and Build 25606770 text, without an in-game observation.

Mechanisms reuse the fixed-version evidence, with local Build 25606770 English text corresponding to 1.13.1. Actual presentation and behavior remain unobserved in game. Missing details are supplementary explanations.

<a id="original-english-template-and-reconstruction"></a>

## Original English template and reconstruction

Steam Build `25606770`; `content/localization/ui`, resource hash `63564edcb7c3c5ee`; language `en` (code `0`).

- Name key `loc_talent_cryptic_force_field_duration_increase`, hash `1736bea5`, entry 1516: **Overcharged Refraction Emitter**.
- Description key `loc_talent_cryptic_force_field_duration_increase_desc`, hash `edf9be63`, entry 15466.

Full raw template:

~~~text
Increase the field duration to {increased_duration:%s}s. In addition, you electrocute nearby enemies an additional time at the midpoint of its duration.
~~~

| Placeholder | Value | Formatting |
|---|---|---|
| `{increased_duration:%s}` | 12 | `number`; literal s in the template |

The minimally read display map is `cryptic_talents.lua` L832-L855. `increased_duration` uses `force_field.increased_duration`, already verified as 12. It also configures the localized Integrated Refraction Emitter name, but that placeholder does not occur in this English template and is not added to the reconstruction.

Static reconstruction; not an observed game screen:

~~~text
Increase the field duration to 12s. In addition, you electrocute nearby enemies an additional time at the midpoint of its duration.
~~~

## English comparison

The 12s field duration and one additional midpoint Electrocution agree with the accepted source evidence. The full 0/6/12s timeline, ending explosion on an early interruption, unchanged 5m radius and unchanged damage profile supplement the English description. The existing source/Build observation limit is retained.

## Icon source

[Original image](https://gameslantern.com/storage/sites/darktide/exporter/talents/cryptic/tactical_modifier/cryptic_force_field_duration_increase.webp) | [Media-Assets Issue](https://github.com/SyuanTsai/Media-Assets/issues/13#issuecomment-5935585681) | [Existing attachment](https://github.com/user-attachments/assets/e70f3e4b-d2c2-4840-bc29-56ba85dd816d). The icon identifies the talent; it is not mechanism evidence.
