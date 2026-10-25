# Advanced Power Management: source evidence

[繁體中文](../cryptic_redline_strength.md) | [Player description](README.md#cryptic_redline_strength) | [Technical index](SOURCE_INDEX.md) | [English comparison](LOCALIZATION_COMPARISON.md#cryptic_redline_strength)

Release 1.13.1; fixed SHA `7e662fcda16219d775b84af50322be2e9cd9d62e`. Talent `cryptic_redline_strength`; name key `loc_talent_cryptic_power_generation_toughness`; description key `loc_talent_cryptic_redline_strength_clarified_desc`. Node `node_3257b11f-d4b3-4657-9a70-e6ca255c1a73`; category Keystone; one point. Mechanisms and examples reuse verified source evidence; no in-game test was performed.

## Source-confirmed behavior and static derivation

- The talent definition points to the `cryptic_redline_strength` passive. The verified settings are `power_level_modifier = 0.05` per stack, a 5-stack maximum and 10-second duration.
- The passive listens for Combat Ability use, reads how many charges were held before use, and adds that many child-buff stacks. The child buff has a cap of 5 and a Power Level modifier of `0.05` per stack. Adding stacks refreshes its duration.
- Buff `stat_buffs` are applied for each stack; the Power Level modifier is an `additive_multiplier`. `PowerLevel.power_level_buff_modifier` adds this general modifier to contextual modifiers. The resulting Power Level then enters the attack-type curves, so +15% Power must not be presented as a guaranteed +15% final damage.

## Fixed source evidence

- [scripts/settings/ability/archetype_talents/talents/cryptic_talents.lua — L1432-L1451](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/cryptic_talents.lua#L1432-L1451)
- [scripts/settings/talent/talent_settings_cryptic.lua — L337-L341](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/talent/talent_settings_cryptic.lua#L337-L341)
- [scripts/settings/buff/archetype_buff_templates/cryptic_buff_templates.lua — L1938-L1966](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/cryptic_buff_templates.lua#L1938-L1966)
- [scripts/extension_systems/buff/buffs/buff.lua — L689-L733](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/buff/buffs/buff.lua#L689-L733)
- [scripts/settings/buff/buff_settings.lua — L926-L927](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/buff_settings.lua#L926-L927)
- [scripts/utilities/attack/power_level.lua — L25-L60](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/attack/power_level.lua#L25-L60)
- [scripts/utilities/attack/power_level.lua — L63-L91](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/attack/power_level.lua#L63-L91)
- [scripts/extension_systems/weapon/actions/action_cryptic_chordclaw_activation.lua — L34-L65](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/weapon/actions/action_cryptic_chordclaw_activation.lua#L34-L65)
- [scripts/settings/ability/archetype_talents/talents/cryptic_talents.lua — L1432-L1451](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/cryptic_talents.lua#L1432-L1451)
- [scripts/ui/views/talent_builder_view/layouts/cryptic_tree.lua — L1195-L1217](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/ui/views/talent_builder_view/layouts/cryptic_tree.lua#L1195-L1217)

## Example assumptions and limits

- **Trigger**: On Combat Ability use, add one effect stack for each charge held **before using the ability**, up to **5 stacks**.
- **Effect**: Each stack increases **Power by 5% for 10 seconds**. Adding stacks resets the countdown. Another trigger at 5 stacks refreshes the duration without exceeding the cap.
- **Example**: Holding 3 charges before use grants 3 stacks, or +15% Power. An original Power Level of `500` becomes `575`. This does not guarantee 15% more final damage; damage still depends on attack type, weapon damage settings, target armour and other conditions.
- **Chordclaw limit**: Repeated Chordclaw actions during a continuous activation do not trigger this effect again. End the Chordclaw activation, then activate the ability again.

- Three charges held before use give `3 × 5% = 15%` Power, turning a base Power Level of `500` into `575`. If the attack originally dealt 100 damage, this modifier alone is insufficient to derive the new damage; the weapon damage curves and enemy armour data are also required.
- Stack gain uses charges held before Combat Ability use, rather than how many charges that use consumes.
- Power Level is not final damage percentage. Final damage depends on attack type, damage settings, armour and other modifiers.

Mechanisms reuse the fixed-version evidence, with local Build 25606770 English text corresponding to 1.13.1. Actual presentation and behavior remain unobserved in game. Missing details are supplementary explanations.

<a id="original-english-template-and-reconstruction"></a>

## Original English template and reconstruction

Steam Build `25606770`; `content/localization/ui`, resource hash `63564edcb7c3c5ee`; language `en` (code `0`).

- Name key `loc_talent_cryptic_power_generation_toughness`, hash `ef81a91f`, entry 15572: **Advanced Power Management**.
- Description key `loc_talent_cryptic_redline_strength_clarified_desc`, hash `4e708242`, entry 5109.

Full raw template:

~~~text
On Ability use, gain {strength:%s} Strength for each Charge you had on use, for {duration:%s}s.
~~~

| Placeholder | Value | Formatting |
|---|---|---|
| `strength` | 5% | `percentage`, no `+` prefix: `power_level_modifier_per_stack = 0.05` |
| `duration` | 10 | `number`: `duration = 10` |

The formatting block in `cryptic_talents.lua` L1441–L1450 uses the already verified settings. The original English calls this modifier Strength; the accepted mechanism identifies the actual `power_level_modifier` / Power Level stat.

Static reconstruction; not an observed game screen:

~~~text
On Ability use, gain 5% Strength for each Charge you had on use, for 10s.
~~~

## English comparison

The English matches ability use, the number of charges held on use, 5% per charge and 10 seconds. It does not explicitly promise a final-damage percentage: Strength is the displayed wording for the verified Power Level effect. The 5-stack cap, refresh behavior and continuous-Chordclaw restriction are supplements. No explicit English contradiction was identified.

## Icon source

[Original image](https://gameslantern.com/storage/sites/darktide/exporter/talents/cryptic/keystone_modifier/cryptic_redline_strength.webp) | [Media-Assets Issue](https://github.com/SyuanTsai/Media-Assets/issues/13#issuecomment-5935647528) | [Existing attachment](https://github.com/user-attachments/assets/0fead35c-7d81-43dc-be42-f88f95123f84). The icon identifies the talent; it is not mechanism evidence.
