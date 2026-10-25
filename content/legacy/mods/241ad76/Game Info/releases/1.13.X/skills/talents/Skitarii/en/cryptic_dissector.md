# Flensing Protocols: source evidence

[繁體中文](../cryptic_dissector.md) | [Player description](README.md#cryptic_dissector) | [Technical index](SOURCE_INDEX.md) | [English comparison](LOCALIZATION_COMPARISON.md#cryptic_dissector)

Release 1.13.1; fixed SHA `7e662fcda16219d775b84af50322be2e9cd9d62e`. Talent `cryptic_dissector`; name key `loc_talent_cryptic_dissector`; description key `loc_talent_cryptic_dissector_desc`. Node `node_99899d45-4249-4113-8f2a-4e126a692a7b`; category Keystone; one point. Mechanisms and examples reuse verified source evidence; no in-game test was performed.

## Source-confirmed behavior and static derivation

- The Skitarii Keystone node in `cryptic_tree.lua` L94–L124 uses the `cryptic_dissector` passive. The verified settings specify a base cap of 6 stacks, `damage = 0.025` per stack, a `0.025` Toughness damage step, one stack removed when taking damage, a 1-second interval, and 2 stacks plus 15% Toughness restored per Elite or Specialist kill.
- Initialization adds one hidden zero-effect stack and 6 visible stacks, so the talent starts full. The visible count is the actual buff count minus one. Honed Dissector increases both the logical limit and the buff cap by 2, to 8.
- `on_damage_taken` requires a hit on the owner, positive Health or Toughness damage, at least one visible stack, and a time at or beyond `stack_lost_cooldown_end_t`. A successful loss removes at most one stack and sets the next eligible time to the current time plus 1 second.
- `on_kill` requires a dead target with an Elite or Specialist tag. It restores `min(2, missing stacks)`, then calls `Toughness.replenish_percentage` with `0.15` and `false`, even when stacks are already full. This restores 15% of maximum Toughness, subject to Toughness Replenishment modifiers and the missing-Toughness cap.
- `cryptic_dissector_stack` adds `0.025` Damage per visible stack. Its stepped Toughness-damage table uses `1 − 0.025 × i`, as a `multiplicative_multiplier`. Six stacks give +15% Damage and a Toughness damage taken multiplier of `0.85`; 8 give +20% Damage and `0.80`.
- The base template recognizes three modifiers: Enhanced Capacitance Protocols fills missing stacks on Combat Ability use; Servo-Sinew Surge enables Critical Strike Chance and Melee Attack Speed per stack; Honed Dissector increases the stack cap. Their individual documents describe the modifiers.

## Fixed source evidence

- [scripts/ui/views/talent_builder_view/layouts/cryptic_tree.lua — L94-L124](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/ui/views/talent_builder_view/layouts/cryptic_tree.lua#L94-L124)
- [scripts/settings/ability/archetype_talents/talents/cryptic_talents.lua — L1116-L1161](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/cryptic_talents.lua#L1116-L1161)
- [scripts/settings/talent/talent_settings_cryptic.lua — L251-L263](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/talent/talent_settings_cryptic.lua#L251-L263)
- [scripts/settings/buff/archetype_buff_templates/cryptic_buff_templates.lua — L1365-L1392](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/cryptic_buff_templates.lua#L1365-L1392)
- [scripts/settings/buff/archetype_buff_templates/cryptic_buff_templates.lua — L1412-L1477](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/cryptic_buff_templates.lua#L1412-L1477)
- [scripts/settings/buff/archetype_buff_templates/cryptic_buff_templates.lua — L1488-L1528](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/cryptic_buff_templates.lua#L1488-L1528)
- [scripts/settings/buff/helper_functions/check_proc_functions.lua — L96-L117](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/helper_functions/check_proc_functions.lua#L96-L117)
- [scripts/utilities/toughness/toughness.lua — L16-L25](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/toughness/toughness.lua#L16-L25)
- [scripts/extension_systems/toughness/player_unit_toughness_extension.lua — L253-L278](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/toughness/player_unit_toughness_extension.lua#L253-L278)
- [scripts/extension_systems/buff/buffs/buff.lua — L689-L733](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/buff/buffs/buff.lua#L689-L733)
- [scripts/settings/buff/buff_settings.lua — L763-L763](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/buff_settings.lua#L763-L763)
- [scripts/settings/buff/buff_settings.lua — L1001-L1004](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/buff_settings.lua#L1001-L1004)
- [scripts/settings/ability/archetype_talents/talents/cryptic_talents.lua — L1116-L1161](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/cryptic_talents.lua#L1116-L1161)
- [scripts/ui/views/talent_builder_view/layouts/cryptic_tree.lua — L94-L124](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/ui/views/talent_builder_view/layouts/cryptic_tree.lua#L94-L124)

## Example assumptions and limits

- **Starting stacks**: Start with **6 stacks**, or **8** with Honed Dissector.
- **Per-stack effects**: Each stack grants **+2.5% Damage**; Toughness damage taken is multiplied by `1 − 2.5% × visible stack count`. At 6 stacks, Damage is +15% and Toughness damage taken is `0.85` (15% reduction). At 8, these become +20% and `0.80` (20% reduction). With illustrative base damage of `100` and no other damage modifiers, this gives `115` or `120`.
- **Losing stacks**: Taking Health or Toughness damage removes one stack, at most once per second. Stacks have no expiry and do not decay passively.
- **Restoring stacks and Toughness**: An Elite or Specialist kill restores up to **2 missing stacks** and **15% of maximum Toughness**. The Toughness recovery still occurs at full stacks.
- **Examples**: Taking damage at 6 stacks leaves 5. Further damage within that second removes no additional stack; the next eligible hit at or after 1 second can remove one. At a full 6 stacks, illustrative damage `100` becomes `100 × 1.15 = 115`, and incoming Toughness damage `100` becomes `100 × 0.85 = 85`. If only one stack is missing, a qualifying kill restores that one stack and still restores 15% of maximum Toughness.

- At 6 visible stacks, the Damage modifier is `6 × 2.5% = 15%`; with base damage `100` and no other modifiers, `100 × (1 + 15%) = 115`. With no other damage reduction and all 100 incoming damage borne by Toughness, `100 × 0.85 = 85`.
- A qualifying kill at 5/6 stacks gives 6; at 4/6 it also gives 6; at 5/8 it gives 7. All three restore 15% of maximum Toughness, capped by the missing amount.
- Recovery uses maximum Toughness, not current Toughness. The 1-second loss interval prevents every hit within the same second from removing a stack. Full stacks do not prevent Toughness recovery.

Mechanisms reuse the fixed-version evidence, with local Build 25606770 English text corresponding to 1.13.1. Actual presentation and behavior remain unobserved in game. Missing details are supplementary explanations.

<a id="original-english-template-and-reconstruction"></a>

## Original English template and reconstruction

Steam Build `25606770`; `content/localization/ui`, resource hash `63564edcb7c3c5ee`; language `en` (code `0`).

- Name key `loc_talent_cryptic_dissector`, hash `1a83e6d0`, entry 1730: **Flensing Protocols**.
- Description key `loc_talent_cryptic_dissector_desc`, hash `3e2c62db`, entry 4054.

Full raw template:

~~~text
You have up to {max_stacks:%s} stacks of {talent_name:%s}. Each stack grants {damage:%s} Damage and {tdr:%s} Toughness Damage Reduction.

Taking damage removes {removed_stacks:%s} stack(s). Can only occur once every {icd:%s}s. Elite and Specialist kills restore {elite_special_stack:%s} stack(s), and restore {toughness:%s} Toughness.
~~~

| Placeholder | Value | Formatting |
|---|---|---|
| `max_stacks` | 6 | `number`: `max_stacks = 6` |
| `talent_name` | Flensing Protocols | `loc_string`: `loc_talent_cryptic_dissector` |
| `damage` | +2.5% | `percentage`, prefix `+`: `damage = 0.025` |
| `tdr` | +2.5% | `percentage`, prefix `+`: `toughness_damage_taken_multiplier = 0.025` (the per-stack step) |
| `removed_stacks` | 1 | `number`: `stacks_lost_on_damage_taken = 1` |
| `icd` | 1 | `number`: `stacks_lost_on_damage_taken_cooldown = 1` |
| `elite_special_stack` | 2 | `number`: `stacks_per_elite_or_special_kill = 2` |
| `toughness` | 15% | `percentage`: `toughness_regen_percent_per_elite_or_special_kill = 0.15` |

The formatting block in `cryptic_talents.lua` L1125–L1160 uses the verified settings in `talent_settings_cryptic.lua` L251–L263. The Toughness Damage Reduction placeholder displays the positive per-stack step directly; it does not format the final stepped damage-taken multiplier.

Static reconstruction; not an observed game screen:

~~~text
You have up to 6 stacks of Flensing Protocols. Each stack grants +2.5% Damage and +2.5% Toughness Damage Reduction.

Taking damage removes 1 stack(s). Can only occur once every 1s. Elite and Specialist kills restore 2 stack(s), and restore 15% Toughness.
~~~

## English comparison

The English matches the base stack cap, both per-stack effects, the loss amount and interval, and the qualifying kill recovery amounts. It does not describe starting at full stacks, the positive-damage checks, hidden base stack, absence of passive decay, missing-stack cap, maximum-Toughness basis or modified 8-stack cap. These are supplements. No explicit English contradiction was identified.

## Icon source

[Original image](https://gameslantern.com/storage/sites/darktide/exporter/talents/cryptic/keystone/cryptic_dissector.webp) | [Media-Assets Issue](https://github.com/SyuanTsai/Media-Assets/issues/13#issuecomment-5935640756) | [Existing attachment](https://github.com/user-attachments/assets/856a3399-5f26-40e1-988e-8960086a92c9). The icon identifies the talent; it is not mechanism evidence.
