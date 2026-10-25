# System Shock: source evidence

[繁體中文](../cryptic_electrocution_applies_brittleness.md) | [Player description](README.md#cryptic_electrocution_applies_brittleness) | [Technical index](SOURCE_INDEX.md) | [English comparison](LOCALIZATION_COMPARISON.md#cryptic_electrocution_applies_brittleness)

Release 1.13.1; fixed SHA `7e662fcda16219d775b84af50322be2e9cd9d62e`. Talent `cryptic_electrocution_applies_brittleness`; name key `loc_talent_cryptic_electrocution_applies_brittleness`; description key `loc_talent_cryptic_electrocution_applies_brittleness_desc`. Node `node_1133b775-c6f7-4318-80a3-657a19b46604`; category Talent; one point. Mechanisms and examples reuse verified source evidence; no in-game test was performed.

## Source-confirmed behavior and static derivation

- The Electrocution group's `added`, `stack_added`, `max_refresh` and `stackable_refresh` Buff events grant 3 stacks of `rending_debuff`.
- The shared Buff has a maximum of 16 stacks, duration 5 seconds and `rending = 0.025` per stack.
- Rending and Brittleness combine in the shared armour-penetration damage calculation.

## Fixed source evidence

- [scripts/settings/buff/weapon_buff_templates.lua — L366-L376](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/weapon_buff_templates.lua#L366-L376)
- [scripts/utilities/attack/damage_calculation.lua — L615-L668](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/attack/damage_calculation.lua#L615-L668)
- [scripts/settings/talent/talent_settings_cryptic.lua — L497-L499](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/talent/talent_settings_cryptic.lua#L497-L499)
- [scripts/settings/buff/archetype_buff_templates/cryptic_buff_templates.lua — L2519-L2559](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/cryptic_buff_templates.lua#L2519-L2559)
- [scripts/utilities/attack/damage_calculation.lua — L64-L85](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/attack/damage_calculation.lua#L64-L85)
- [scripts/utilities/attack/damage_calculation.lua — L232-L245](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/attack/damage_calculation.lua#L232-L245)
- [scripts/settings/ability/archetype_talents/talents/cryptic_talents.lua — L1988-L2002](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/cryptic_talents.lua#L1988-L2002)
- [scripts/ui/views/talent_builder_view/layouts/cryptic_tree.lua — L1513-L1542](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/ui/views/talent_builder_view/layouts/cryptic_tree.lua#L1513-L1542)

## Example assumptions and limits

- **Trigger**: Applying Electrocution to an enemy, adding a stack or refreshing its duration adds 3 Brittleness stacks. Each gives 2.5%, for 7.5% added by that trigger.
- **Stacks and duration**: Brittleness lasts 5 seconds; applying it again refreshes the duration. The same Brittleness effect has a combined cap of 16 stacks, or 40%. For example, 6 consecutive triggers raise the count through 3, 6, 9, 12 and 15 to the cap of 16.
- **Damage example**: Brittleness improves the attack's effectiveness against armour; it cannot be treated as 7.5% more total damage. With an unarmoured damage baseline of 100 and an original armour modifier of 0.5, adding 7.5% Brittleness makes this stage `100 × (0.5 + 0.075) = 57.5`, compared with 50 before.
- **Team effect**: Brittleness is applied to the enemy, so teammates' attacks can also benefit. The actual increase varies with the weapon and armour.

The armour example requires an original armour modifier below 1, no crossing of 1 after the increase, no additional Rending and unchanged other multipliers. It also assumes `rending_armor_type_multiplier = 1` for that armour type. If this multiplier differs from 1, first convert to the effective Rending value.

Mechanisms reuse the fixed-version evidence, with local Build 25606770 English text corresponding to 1.13.1. Actual presentation and behavior remain unobserved in game. Missing details are supplementary explanations.

<a id="original-english-template-and-reconstruction"></a>

## Original English template and reconstruction

Steam Build `25606770`; `content/localization/ui`, resource hash `63564edcb7c3c5ee`; language `en` (code `0`).

- Name key `loc_talent_cryptic_electrocution_applies_brittleness`, hash `78199f16`, entry 7805: **System Shock**.
- Description key `loc_talent_cryptic_electrocution_applies_brittleness_desc`, hash `47a5f3d9`, entry 4653.

Full raw template:

~~~text
Electrocuting an enemy applies {stacks:%s} Stacks of 2.5% Brittleness to them.
~~~

| Placeholder | Value | Formatting |
|---|---|---|
| `stacks` | `3` | Number; `2.5%` is literal text in the template. |

The display mapping is `cryptic_talents.lua` L1996-L2001. The stack count and shared Brittleness values reuse the verified evidence listed above.

Static reconstruction; not an observed game screen:

~~~text
Electrocuting an enemy applies 3 Stacks of 2.5% Brittleness to them.
~~~

## English comparison

The English correctly describes applying Brittleness to the Electrocuted enemy, 3 stacks per trigger and 2.5% per stack. It does not claim a flat 7.5% total-damage multiplier. Electrocution refresh events, the shared cap, 5-second duration and armour-dependent team benefit are supplements. No explicit English contradiction was found.

## Icon source

[Original image](https://gameslantern.com/storage/sites/darktide/exporter/talents/cryptic/default/cryptic_electrocution_applies_brittleness.webp) | [Media-Assets Issue](https://github.com/SyuanTsai/Media-Assets/issues/13#issuecomment-5935653628) | [Existing attachment](https://github.com/user-attachments/assets/7f79455c-bf29-4b78-8706-dda075acb8d0). The icon identifies the talent; it is not mechanism evidence.
