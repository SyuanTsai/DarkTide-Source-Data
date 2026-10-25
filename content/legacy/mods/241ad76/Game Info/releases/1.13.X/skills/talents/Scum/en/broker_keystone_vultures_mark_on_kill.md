# Vulture's Mark: source evidence

[繁體中文](../broker_keystone_vultures_mark_on_kill.md) | [Player description](README.md#broker_keystone_vultures_mark_on_kill) | [Technical index](SOURCE_INDEX.md) | [English comparison](LOCALIZATION_COMPARISON.md#broker_keystone_vultures_mark_on_kill)

Release 1.13.1; fixed SHA `7e662fcda16219d775b84af50322be2e9cd9d62e`. Talent `broker_keystone_vultures_mark_on_kill`; name key `loc_talent_broker_keystone_vultures_mark_on_kill`; description key `loc_talent_broker_keystone_vultures_mark_on_kill_desc`. Node `node_004740df-29af-45f1-af0d-12d2c815a541`; category Keystone; one point. Mechanisms and examples reuse verified source evidence; no in-game test was performed.

## Source-confirmed behavior and static derivation

- Settings are `duration = 8` and `max_stacks = 3`. Each stack supplies `ranged_damage = 0.05`, `ranged_critical_strike_chance = 0.05` and `movement_speed = 0.05`. Damage and Movement Speed are `additive_multiplier` stats; Ranged Critical Chance is a `value` stat. Buff statistics apply each once per stack.
- Standard acquisition in `on_kill` requires `attack_result = died`, an `elite` or `special` tag, and `attack_type = ranged` or `damage_profile.count_as_ranged_attack`. A qualifying event adds a `vultures_mark` stack.
- `vultures_mark` has `refresh_duration_on_stack = true` and no `refresh_duration_on_remove_stack`. New stacks reset the shared timer; at expiry, the common stack duration ends and clears remaining stacks together. With Patient Hunter, the buff's `start_func` increases duration from 8 to 12 seconds.
- The Mark buff itself listens for `on_kill` to restore Toughness at the cap. Its check requires `at_max_stacks`, an Elite/Specialist kill and a Ranged kill, then calls `replenish_percentage(0.15)` for each unit in `coherency_extension:in_coherence_units()`. Kills below 3 stacks do not satisfy this restoration check.
- The exception uses `BrokerBuffUtils` to track Ranged hits on Elites/Specialists from the two designated Needle Pistols in the secondary slot. If a tracked target dies from `toxin` within `DamageSettings.ranged_close_squared`, `on_minion_death` also adds one Mark stack.
- Isolated 3-stack Ranged Damage is 100 × (1 + 3 × 0.05) = 115; with another same-stage 20%, 100 × (1 + 0.20 + 0.15) = 135. Broker's base Critical Chance of 10% + 3 × 5 percentage points gives 25% Ranged Critical Chance before weapon/other modifiers. With maximum Toughness 100 and at least 15 missing, qualifying restoration gives 100 × 0.15 = 15.

## Fixed source evidence

- [scripts/settings/ability/archetype_talents/talents/broker_talents.lua — L2388-L2425](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/broker_talents.lua#L2388-L2425)
- [scripts/settings/talent/talent_settings_broker.lua — L440-L450](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/talent/talent_settings_broker.lua#L440-L450)
- [scripts/settings/buff/archetype_buff_templates/broker_buff_templates.lua — L3348-L3430](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/broker_buff_templates.lua#L3348-L3430)
- [scripts/settings/buff/helper_functions/check_proc_functions.lua — L120-L133](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/helper_functions/check_proc_functions.lua#L120-L133)
- [scripts/settings/buff/helper_functions/check_proc_functions.lua — L216-L224](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/helper_functions/check_proc_functions.lua#L216-L224)
- [scripts/settings/buff/buff_settings.lua — L893-L945](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/buff_settings.lua#L893-L945)
- [scripts/extension_systems/buff/buffs/buff.lua — L689-L727](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/buff/buffs/buff.lua#L689-L727)
- [scripts/utilities/attack/damage_calculation.lua — L236-L245](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/attack/damage_calculation.lua#L236-L245)
- [scripts/utilities/attack/damage_calculation.lua — L317-L320](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/attack/damage_calculation.lua#L317-L320)
- [scripts/utilities/attack/critical_strike.lua — L13-L39](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/attack/critical_strike.lua#L13-L39)
- [scripts/extension_systems/coherency/unit_coherency_extension.lua — L51-L60](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/coherency/unit_coherency_extension.lua#L51-L60)
- [scripts/settings/buff/broker_buff_utils.lua — L99-L107](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/broker_buff_utils.lua#L99-L107)
- [scripts/settings/buff/broker_buff_utils.lua — L133-L190](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/broker_buff_utils.lua#L133-L190)
- [scripts/extension_systems/buff/buff_extension_base.lua — L187-L205](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/buff/buff_extension_base.lua#L187-L205)
- [scripts/extension_systems/buff/buff_extension_base.lua — L434-L461](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/buff/buff_extension_base.lua#L434-L461)
- [scripts/extension_systems/buff/buff_extension_base.lua — L631-L698](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/buff/buff_extension_base.lua#L631-L698)
- [scripts/settings/ability/archetype_talents/talents/broker_talents.lua — L2388-L2425](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/broker_talents.lua#L2388-L2425)
- [scripts/ui/views/talent_builder_view/layouts/broker_tree.lua — L722-L755](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/ui/views/talent_builder_view/layouts/broker_tree.lua#L722-L755)

## Example assumptions and limits

- **Gaining Marks:** kill an Elite or Specialist with a Ranged attack to gain 1 stack for 8 seconds. Another gain adds a stack and resets the shared timer, up to 3 stacks. Without another gain, all Marks disappear 8 seconds after the last gain.

- **Per-stack bonuses:** each stack adds 5% Ranged Damage, 5 percentage points of Ranged Critical Chance and 5% Movement Speed. At 3 stacks these are +15%, +15 percentage points and +15%, respectively.

- **Toughness at the cap:** while at 3 stacks, each further Ranged Elite or Specialist kill restores 15% of maximum Toughness to you and Allies in Coherency, limited by each recipient's missing Toughness.

- **Weapon exception:** a Close Range Needle Pistol Toxin kill can grant a Mark. First hit an Elite/Specialist with a Needle Pistol in the Ranged weapon slot; while its Toxin effect remains active, that target must die from Toxin within Close Range.

- **Damage example:** with no other modifiers, base Ranged Damage 100 at 3 stacks becomes 100 × (1 + 3 × 0.05) = 115. With another 20% at the same stage, it becomes 100 × (1 + 0.20 + 0.15) = 135.

- **Toughness example:** with maximum Toughness 100 and at least 15 missing, a qualifying Ranged Elite/Specialist kill at maximum stacks restores 100 × 0.15 = 15.

Damage and Critical Chance examples exclude weapon, armour, range, hit-location and other modifiers. Ranged Damage adds to the Damage calculation's additive pool; Critical Chance adds generic, Ranged-specific and weapon bonuses before clamping to 0%–100%. Toughness restoration requires the Mark buff's full-stack Elite/Specialist Ranged-kill check and is limited by each recipient's deficit. The Needle Pistol exception requires the specified weapon, slot, previous tracking and Close Range Toxin death; ordinary Ranged acquisition requires a direct Elite/Specialist kill. Mechanisms reuse the fixed-version evidence, with local Build 25606770 English text corresponding to 1.13.1. Actual presentation and behavior remain unobserved in game. Missing details are supplementary explanations.

<a id="original-english-template-and-reconstruction"></a>

## Original English template and reconstruction

Steam Build `25606770`; `content/localization/ui`, resource hash `63564edcb7c3c5ee`; language `en` (code `0`).

- Name key `loc_talent_broker_keystone_vultures_mark_on_kill`, hash `a46e752f`, entry 10615: **Vulture's Mark**.
- Description key `loc_talent_broker_keystone_vultures_mark_on_kill_desc`, hash `5b5c21fe`, entry 5921.

Full raw template:

~~~text
Killing a Special or Elite enemy with a ranged weapon grants you a stack of Vulture's Mark for {duration:%s}s (Stacks {max_stacks:%s} times).

Each stack grants {ranged_damage:%s} Ranged Damage, {crit_chance:%s} Ranged Critical Strike Chance, and {movement_speed:%s} Movement Speed.

While at max stacks, Special and Elite Ranged Kills restore {toughness:%s} Toughness to you and Allies in Coherency.
~~~

| Placeholder | Value | Formatting |
|---|---|---|
| `duration` | `broker_keystone_vultures_mark_on_kill.duration = 8` | Number → `8` |
| `max_stacks` | `broker_keystone_vultures_mark_on_kill.max_stacks = 3` | Number → `3` |
| `ranged_damage` | `broker_keystone_vultures_mark_on_kill.ranged_damage = 0.05` | Percentage with explicit `+` prefix → `+5%` |
| `crit_chance` | `broker_keystone_vultures_mark_on_kill.crit_chance = 0.05` | Percentage with explicit `+` prefix → `+5%` |
| `movement_speed` | `broker_keystone_vultures_mark_on_kill.movement_speed = 0.05` | Percentage with explicit `+` prefix → `+5%` |
| `toughness` | `broker_keystone_vultures_mark_on_kill.toughness_percent = 0.15` | Percentage → `15%` |

Display mapping: [broker_talents.lua L2392–2420](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/broker_talents.lua#L2392-L2420). All values reuse accepted evidence.

Static reconstruction; not an observed game screen:

~~~text
Killing a Special or Elite enemy with a ranged weapon grants you a stack of Vulture's Mark for 8s (Stacks 3 times).

Each stack grants +5% Ranged Damage, +5% Ranged Critical Strike Chance, and +5% Movement Speed.

While at max stacks, Special and Elite Ranged Kills restore 15% Toughness to you and Allies in Coherency.
~~~

## English comparison

English correctly identifies Ranged Elite/Specialist kills, the 8-second duration and 3-stack cap, the three per-stack bonuses and Toughness restoration on qualifying kills while already at the cap. Its Special enemy term corresponds to the accepted special tag. Shared-timer expiry, the Needle Pistol Toxin exception, additive Damage and percentage-point Critical Chance, clamping and each recipient's restoration limit supplement the description.

## Icon source

[Original image](https://gameslantern.com/storage/sites/darktide/exporter/talents/broker/keystone/broker_keystone_vultures_mark_on_kill.webp) | [Media-Assets Issue](https://github.com/SyuanTsai/Media-Assets/issues/12#issuecomment-5933978534) | [Existing attachment](https://github.com/user-attachments/assets/6cc42ba2-04c8-4a98-ae3e-5341b777ccdd). The icon identifies the talent; it is not mechanism evidence.
