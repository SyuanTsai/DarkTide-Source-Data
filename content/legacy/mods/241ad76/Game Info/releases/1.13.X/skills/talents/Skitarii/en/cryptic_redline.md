# Redline Capacitors: source evidence

[繁體中文](../cryptic_redline.md) | [Player description](README.md#cryptic_redline) | [Technical index](SOURCE_INDEX.md) | [English comparison](LOCALIZATION_COMPARISON.md#cryptic_redline)

Release 1.13.1; fixed SHA `7e662fcda16219d775b84af50322be2e9cd9d62e`. Talent `cryptic_redline`; name key `loc_talent_cryptic_power_generation`; description key `loc_talent_cryptic_redline_charge_stacking_clarified_desc`. Node `node_4c399707-0cd3-4618-af06-a16a6cf05d28`; category Keystone; one point. Mechanisms and examples reuse verified source evidence; no in-game test was performed.

## Source-confirmed behavior and static derivation

- The Skitarii Keystone node in `cryptic_tree.lua` L125–L153 uses the `cryptic_redline` passive. The displayed settings are 5% per stack, 12 seconds, 4 stacks and +1 maximum charge.
- The passive supplies `ability_extra_charges = 1` and listens for Combat Ability charge restoration and consumption events. Their `num_charges_gained` or `num_charges_consumed` determines how many times `cryptic_redline_stack` is added. The ability system sends these events only when charges actually increase or are consumed.
- `cryptic_redline_stack` has both `max_stacks` and `max_stacks_cap` set to 4, with `duration = 12`. Adding a stack resets its start time; another trigger at the cap refreshes the duration without adding a stack. On expiry, if multiple stacks remain, only one is removed and the timer restarts. Stacks therefore decay individually, approximately 12 seconds apart.
- Both `combat_ability_resource_regen_modifier` and `combat_ability_resource_restored_modifier` are `0.05` per stack. `Buff._calculate_stat_buffs` applies them for each stack, and `buff_settings` defines both as `additive_multiplier`. Natural regeneration multiplies by the regeneration modifier. Direct restoration applies the restored modifier only when `restore_ability_resource` receives `ignore_stat_buffs = false`. `restore_ability_charge_percentage` explicitly uses `ignore_stat_buffs = true`, so that path ignores the Redline restoration multiplier.
- Toughness damage taken uses a `stepped_stat_buffs` table, rather than multiplying `0.95` four times. Its value is `1 − 0.05 × stack count`, using `multiplicative_multiplier`: stacks 1–4 give `0.95`, `0.90`, `0.85` and `0.80`.
- `ability_extra_charges` adds to the ability's maximum charges. The usable limit still depends on whether the ability uses charges and on its own `max_charges` / `stat_buff` settings.

## Fixed source evidence

- [scripts/ui/views/talent_builder_view/layouts/cryptic_tree.lua — L125-L153](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/ui/views/talent_builder_view/layouts/cryptic_tree.lua#L125-L153)
- [scripts/settings/ability/archetype_talents/talents/cryptic_talents.lua — L1393-L1431](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/cryptic_talents.lua#L1393-L1431)
- [scripts/settings/talent/talent_settings_cryptic.lua — L331-L353](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/talent/talent_settings_cryptic.lua#L331-L353)
- [scripts/settings/buff/archetype_buff_templates/cryptic_buff_templates.lua — L1868-L1936](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/cryptic_buff_templates.lua#L1868-L1936)
- [scripts/extension_systems/buff/buffs/buff.lua — L689-L733](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/buff/buffs/buff.lua#L689-L733)
- [scripts/extension_systems/buff/buffs/stepped_stat_buff.lua — L10-L29](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/buff/buffs/stepped_stat_buff.lua#L10-L29)
- [scripts/extension_systems/buff/buff_extension_base.lua — L412-L462](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/buff/buff_extension_base.lua#L412-L462)
- [scripts/extension_systems/buff/buff_extension_base.lua — L560-L589](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/buff/buff_extension_base.lua#L560-L589)
- [scripts/extension_systems/buff/buff_extension_base.lua — L635-L662](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/buff/buff_extension_base.lua#L635-L662)
- [scripts/extension_systems/ability/player_unit_ability_extension.lua — L734-L770](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/ability/player_unit_ability_extension.lua#L734-L770)
- [scripts/extension_systems/ability/player_unit_ability_extension.lua — L773-L879](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/ability/player_unit_ability_extension.lua#L773-L879)
- [scripts/extension_systems/ability/player_unit_ability_extension.lua — L1120-L1179](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/ability/player_unit_ability_extension.lua#L1120-L1179)
- [scripts/settings/buff/buff_settings.lua — L742-L743](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/buff_settings.lua#L742-L743)
- [scripts/settings/buff/buff_settings.lua — L1001-L1004](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/buff_settings.lua#L1001-L1004)
- [scripts/extension_systems/ability/player_unit_ability_extension.lua — L1081-L1102](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/ability/player_unit_ability_extension.lua#L1081-L1102)
- [scripts/settings/ability/archetype_talents/talents/cryptic_talents.lua — L1393-L1431](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/cryptic_talents.lua#L1393-L1431)
- [scripts/ui/views/talent_builder_view/layouts/cryptic_tree.lua — L125-L153](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/ui/views/talent_builder_view/layouts/cryptic_tree.lua#L125-L153)

## Example assumptions and limits

- **Trigger**: Each Combat Ability charge actually spent or restored adds **one stack**. Spending 2 charges at once adds 2 stacks, up to **4**.
- **Per-stack effects**: Natural Capacitance recovery is increased by **5% per stack**, and Toughness Damage Reduction by **5% per stack**. At 4 stacks, a natural rate of 2% of one charge per second becomes `2% × (1 + 20%) = 2.4%` per second. Incoming Toughness damage of `100` becomes `100 × (1 − 20%) = 80`.
- **Duration**: The stack effect lasts **12 seconds**; adding a stack restarts the timer. Another trigger at 4 stacks refreshes the timer without exceeding the cap. With no new trigger, one stack is lost every 12 seconds.
- **Charge cap**: Maximum Combat Ability charges increase from **3 to 4**.
- **Restoration exceptions**: Kill restoration, weakspot-kill restoration and Higher Purpose's direct restoration are not increased by this modifier.

- At 4 stacks, the Toughness damage multiplier is `1 − 0.05 × 4 = 0.80`. With no other damage reduction and all 100 incoming damage borne by Toughness, the damage taken is `80`.
- A natural recovery rate of `2%/s` becomes `2.4%/s` at 4 stacks. This is 20% more resource recovery per second, not a direct 20% reduction in cooldown seconds.
- At 3 stacks, restoring 2 Combat Ability charges adds the first stack to reach 4; the second addition cannot exceed the cap but resets the 12-second timer.
- The events concern Combat Ability charges, not Blitz charges or a generic resource. Events at the stack cap can still refresh the duration.
- Actual recovery time also depends on the ability's base resource rate, other bonuses, pauses and resource limits. Direct restoration depends on its path: Higher Purpose's `restore_ability_charge_percentage` ignores stat buffs.

Mechanisms reuse the fixed-version evidence, with local Build 25606770 English text corresponding to 1.13.1. Actual presentation and behavior remain unobserved in game. Missing details are supplementary explanations.

<a id="original-english-template-and-reconstruction"></a>

## Original English template and reconstruction

Steam Build `25606770`; `content/localization/ui`, resource hash `63564edcb7c3c5ee`; language `en` (code `0`).

- Name key `loc_talent_cryptic_power_generation`, hash `765c4c20`, entry 7686: **Redline Capacitors**.
- Description key `loc_talent_cryptic_redline_charge_stacking_clarified_desc`, hash `22a7f709`, entry 2254.

Full raw template:

~~~text
Spending or gaining a Charge grants {tdr:%s} Toughness Damage Reduction and {capacitance:%s} {capacitance_keyword:%s} generation for {duration:%s}s. Stacking {max_stacks:%s} times. Stacks decay one at a time.
Additionally, you have {max_charges:%s} Max Ability Charges.
~~~

| Placeholder | Value | Formatting |
|---|---|---|
| `tdr` | +5% | `percentage`, prefix `+`: `toughness_damage_taken_multiplier_step = 0.05` |
| `capacitance` | +5% | `percentage`, prefix `+`: `combat_ability_cooldown_regen_modifier = 0.05` |
| `capacitance_keyword` | Capacitance | `loc_string`: `loc_talent_cryptic_power_keyword` |
| `duration` | 12 | `number`: `duration = 12` |
| `max_stacks` | 4 | `number`: `max_stacks = 4` |
| `max_charges` | +1 | `number`, prefix `+`: `ability_extra_charges = 1` |

The formatting block is in `cryptic_talents.lua` L1402–L1430; numeric values reuse the verified settings. The already paired English keyword `loc_talent_cryptic_power_keyword` supplies Capacitance.

Static reconstruction; not an observed game screen:

~~~text
Spending or gaining a Charge grants +5% Toughness Damage Reduction and +5% Capacitance generation for 12s. Stacking 4 times. Stacks decay one at a time.
Additionally, you have +1 Max Ability Charges.
~~~

## English comparison

The English states the charge-gain/spending trigger, 5% per-stack Toughness Damage Reduction and Capacitance generation, 12-second duration, 4-stack cap, individual decay and +1 maximum ability charge. These agree with the verified evidence. It does not specify event quantities, timer refresh at the cap, the stepped Toughness formula or which direct restoration paths ignore the modifier. Those are supplements; no explicit English contradiction was identified.

## Icon source

[Original image](https://gameslantern.com/storage/sites/darktide/exporter/talents/cryptic/keystone/cryptic_redline.webp) | [Media-Assets Issue](https://github.com/SyuanTsai/Media-Assets/issues/13#issuecomment-5935640756) | [Existing attachment](https://github.com/user-attachments/assets/55fe932f-c298-4b33-ad21-efab7b9244e5). The icon identifies the talent; it is not mechanism evidence.
