# Razor-Jaw Augment: source evidence

[繁體中文](../adamant_dog_pounces_bleed_nearby.md) | [Player description](README.md#adamant_dog_pounces_bleed_nearby) | [Technical index](SOURCE_INDEX.md) | [English comparison](LOCALIZATION_COMPARISON.md#adamant_dog_pounces_bleed_nearby)

Release 1.13.1; fixed SHA `7e662fcda16219d775b84af50322be2e9cd9d62e`. Talent `adamant_dog_pounces_bleed_nearby`; name key `loc_talent_adamant_dog_pounces_bleed_nearby`; description key `loc_talent_adamant_dog_pounces_bleed_nearby_desc`. Node `node_f3713ddf-8e7b-443e-97a6-b997188f6096`; category Passive talent; one point.

## Source-confirmed behavior and static derivation

- Only profiles carrying `dog_bleed` apply 6 Bleed stacks; the owner is the companion. The flag occurs on Ogryn/Monster pounce and `cyber_mastiff_push_aoe/close`. Ongoing human pounce itself does not carry the flag.
- Generic Bleed has a 16-stack cap, a 0.5s damage interval, 1.5s maintenance duration and `interval_stack_removal`.
- PowerLevel is `500 × smoothstep(n/16)`. The `bleeding` attack distribution is 175; Unarmoured ADM 0.5 gives `87.5 × smoothstep(n/16)`. This is an armour baseline assuming no other damage modifiers.

## Fixed source evidence

- [scripts/settings/damage/damage_profiles/archetypes/adamant_damage_profile_templates.lua — L227-L235](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/damage/damage_profiles/archetypes/adamant_damage_profile_templates.lua#L227-L235)
- [scripts/settings/damage/damage_profiles/minion_damage_profile_templates.lua — L3120-L3182](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/damage/damage_profiles/minion_damage_profile_templates.lua#L3120-L3182)
- [scripts/settings/buff/weapon_buff_templates.lua — L235-L259](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/weapon_buff_templates.lua#L235-L259)
- [scripts/extension_systems/buff/buffs/interval_buff.lua — L30-L64](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/buff/buffs/interval_buff.lua#L30-L64)
- [scripts/settings/damage/damage_profiles/buff_damage_profile_templates.lua — L59-L68](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/damage/damage_profiles/buff_damage_profile_templates.lua#L59-L68)
- [scripts/settings/damage/damage_profiles/buff_damage_profile_templates.lua — L443-L465](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/damage/damage_profiles/buff_damage_profile_templates.lua#L443-L465)
- [scripts/settings/talent/talent_settings_adamant.lua — L256-L258](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/talent/talent_settings_adamant.lua#L256-L258)
- [scripts/settings/buff/archetype_buff_templates/adamant_buff_templates.lua — L2691-L2723](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/adamant_buff_templates.lua#L2691-L2723)
- [scripts/extension_systems/behavior/nodes/actions/bt_companion_target_pounced_action.lua — L40-L61](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/behavior/nodes/actions/bt_companion_target_pounced_action.lua#L40-L61)
- [scripts/extension_systems/behavior/nodes/actions/bt_companion_target_pounced_action.lua — L125-L156](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/behavior/nodes/actions/bt_companion_target_pounced_action.lua#L125-L156)
- [scripts/settings/breed/breed_actions/companion/companion_dog_actions.lua — L250-L279](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/breed/breed_actions/companion/companion_dog_actions.lua#L250-L279)
- [scripts/settings/ability/archetype_talents/talents/adamant_talents.lua — L1449-L1463](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/adamant_talents.lua#L1449-L1463)
- [scripts/ui/views/talent_builder_view/layouts/adamant_tree.lua — L1010-L1038](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/ui/views/talent_builder_view/layouts/adamant_tree.lua#L1010-L1038)

## Example assumptions and limits

- **Trigger and stacks**: Hits from your Cyber-Mastiff's surrounding pounce push, and its pinning attacks against Ogryns or Monsters, each apply 6 stacks of Bleed. Bleed shares a 16-stack cap; another application adds stacks and resets the maintenance duration.

- **Duration and decay**: Damage ticks every 0.5s. After applications stop, stacks are maintained for 1.5s, then decrease one at a time on subsequent damage ticks.

- **Damage example**: At the Unarmoured baseline with no other modifiers, let the stack fraction be n ÷ 16. Damage per tick is 87.5 × (n ÷ 16)² × [3 − 2 × (n ÷ 16)]. Six stacks give approximately 27.69 points, 12 give 73.83 and 16 give 87.5. Twelve stacks do not deal twice the damage of six.

The exact English knock-away condition is not established by the existing flag evidence. This question is retained without extending the translation into control or attack-chain research.

Values and behavior reuse the verified fixed-version evidence. The examples are static derivations, not in-game tests. English and code evidence both refer to 1.13.1; differences still require an in-game check. Omitted details are supplementary rather than translation errors.

<a id="original-english-template-and-reconstruction"></a>

## Original English template and reconstruction

Steam Build `25606770`; `content/localization/ui`, resource hash `63564edcb7c3c5ee`; language `en` (code `0`).

- Name key `loc_talent_adamant_dog_pounces_bleed_nearby`, hash `fd617d6e`, entry 16457: **Razor-Jaw Augment**.
- Description key `loc_talent_adamant_dog_pounces_bleed_nearby_desc`, hash `549c0cdb`, entry 5497.

Full raw template:

```text
Enemies knocked away by your Cyber Mastiff's Pounce have {stacks:%s} Stack(s) of Bleed applied to them.
```

| Placeholder | Value | Formatting |
|---|---|---|
| stacks | talent_settings.dog_pounces_bleed_nearby.bleed_stacks = 6 | Number, no prefix → 6 |

Static reconstruction; not an observed game screen:

```text
Enemies knocked away by your Cyber Mastiff's Pounce have 6 Stack(s) of Bleed applied to them.
```

## English comparison

The independently read English agrees with six Bleed stacks. Existing profile flags establish the nearby pounce-push context, but the exact knock-away condition remains unconfirmed. Additional Ogryn/Monster pinning contexts, human-pounce restriction, shared Bleed timing/stacking and the nonlinear damage examples supplement the description. No explicit English contradiction is established.

## Icon source

[Original image](https://gameslantern.com/storage/sites/darktide/exporter/talents/adamant/default/adamant_dog_pounces_bleed_nearby.webp) | [Media-Assets Issue](https://github.com/SyuanTsai/Media-Assets/issues/11#issuecomment-5932563852) | [Existing attachment](https://github.com/user-attachments/assets/549d3657-c19a-49a6-b8ad-2c1e77080dfa). The icon identifies the talent; it is not mechanism evidence.
