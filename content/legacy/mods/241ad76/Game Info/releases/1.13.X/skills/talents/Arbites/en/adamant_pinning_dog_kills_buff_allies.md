# Canine Morale: source evidence

[繁體中文](../adamant_pinning_dog_kills_buff_allies.md) | [Player description](README.md#adamant_pinning_dog_kills_buff_allies) | [Technical index](SOURCE_INDEX.md) | [English comparison](LOCALIZATION_COMPARISON.md#adamant_pinning_dog_kills_buff_allies)

Release 1.13.1; fixed SHA `7e662fcda16219d775b84af50322be2e9cd9d62e`. Talent `adamant_pinning_dog_kills_buff_allies`; name key `loc_talent_adamant_pinning_dog_kills_buff_allies`; description key `loc_talent_adamant_pinning_dog_kills_buff_allies_description`. Node `node_4137c1d3-f155-4dbb-ae2f-01eeae998353`; category Passive talent; one point.

## Source-confirmed behavior and static derivation

- Own-companion pounce/finish events record and clear the pinned target. `on_kill` requires `attacked_unit` to match that target. The owner or own companion kill can trigger the buff; another teammate killing on their own does not. Companion kills resolve to owner events through `AttackingUnitResolver`. No Elite/Specialist restriction applies.
- The trigger-time coherency set includes self. Each recipient receives a child buff with `max_stacks = 1`, refresh and duration 5s. Toughness damage is multiplied by 0.8. Recovery is `maximum Toughness × 0.1 × dt / 5`, with normal recovery modifiers and the missing-Toughness cap.

## Fixed source evidence

- [scripts/utilities/attack/attack.lua — L216-L223](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/attack/attack.lua#L216-L223)
- [scripts/utilities/attack/attack.lua — L669-L709](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/attack/attack.lua#L669-L709)
- [scripts/utilities/attack/attacking_unit_resolver.lua — L33-L43](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/attack/attacking_unit_resolver.lua#L33-L43)
- [scripts/extension_systems/behavior/nodes/actions/bt_companion_target_pounced_action.lua — L202-L232](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/behavior/nodes/actions/bt_companion_target_pounced_action.lua#L202-L232)
- [scripts/settings/buff/archetype_buff_templates/adamant_buff_templates.lua — L2984-L3004](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/adamant_buff_templates.lua#L2984-L3004)
- [scripts/extension_systems/toughness/player_unit_toughness_extension.lua — L253-L279](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/toughness/player_unit_toughness_extension.lua#L253-L279)
- [scripts/extension_systems/coherency/coherency_system.lua — L188-L195](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/coherency/coherency_system.lua#L188-L195)
- [scripts/settings/talent/talent_settings_adamant.lua — L445-L449](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/talent/talent_settings_adamant.lua#L445-L449)
- [scripts/settings/buff/archetype_buff_templates/adamant_buff_templates.lua — L2940-L2983](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/adamant_buff_templates.lua#L2940-L2983)
- [scripts/settings/ability/archetype_talents/talents/adamant_talents.lua — L2933-L2960](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/adamant_talents.lua#L2933-L2960)
- [scripts/ui/views/talent_builder_view/layouts/adamant_tree.lua — L2096-L2121](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/ui/views/talent_builder_view/layouts/adamant_tree.lua#L2096-L2121)

## Example assumptions and limits

- **Trigger and recipients**: When you or your own Cyber-Mastiff kill an enemy it is currently pinning, you and allies in Coherency at that moment receive the buff. The enemy does not need to be an Elite or Specialist.

- **Recovery and reduction**: For 5s, take 20% less Toughness damage and recover 2% of maximum Toughness per second. Another trigger refreshes the duration without increasing the recovery rate or stacking the reduction.

- **Examples**: With maximum Toughness 100, recovery is 100 × 10% ÷ 5 = 2 points per second, or 10 over the full 5s, capped at missing Toughness. An isolated incoming Toughness-damage value of 100 becomes 100 × 0.8 = 80.

If pin release and death occur in the same update, activation still depends on event ordering. This runtime boundary has not been tested in game.

Values and behavior reuse the verified fixed-version evidence. The examples are static derivations, not in-game tests. English and code evidence both refer to 1.13.1; differences still require an in-game check. Omitted details are supplementary rather than translation errors.

<a id="original-english-template-and-reconstruction"></a>

## Original English template and reconstruction

Steam Build `25606770`; `content/localization/ui`, resource hash `63564edcb7c3c5ee`; language `en` (code `0`).

- Name key `loc_talent_adamant_pinning_dog_kills_buff_allies`, hash `4fbc08d1`, entry 5176: **Canine Morale**.
- Description key `loc_talent_adamant_pinning_dog_kills_buff_allies_description`, hash `6250ddd6`, entry 6384.

The resource-record suffix `[Writer]` is metadata, not displayed text.

Full raw template:

```text
Killing Pounced Targets grants Allies in Coherency {tdr:%s} Toughness Damage Reduction and {toughness:%s} Toughness over {duration:%s}s.
```

| Placeholder | Value | Formatting |
|---|---|---|
| tdr | talent_settings.pinning_dog_kills_buff_allies.tdr = 0.8 | Custom manipulation round((1 − value) × 100) overrides percentage conversion; + prefix and % suffix → +20% |
| toughness | talent_settings.pinning_dog_kills_buff_allies.toughness = 0.1 | Percentage, + prefix → +10% |
| duration | talent_settings.pinning_dog_kills_buff_allies.duration = 5 | Number → 5; template adds s |

Static reconstruction; not an observed game screen:

```text
Killing Pounced Targets grants Allies in Coherency +20% Toughness Damage Reduction and +10% Toughness over 5s.
```

## English comparison

The independently read English agrees with the pounced-target kill condition, allies in Coherency, 20% Toughness Damage Reduction and 10% Toughness recovered over 5s. Ownership and kill attribution, self-inclusion, trigger-time recipients, refresh and numerical examples are supplementary. The same-update pin-release/death boundary remains unconfirmed. No explicit English contradiction is established.

## Icon source

[Original image](https://gameslantern.com/storage/sites/darktide/exporter/talents/adamant/default/adamant_pinning_dog_kills_buff_allies.webp) | [Media-Assets Issue](https://github.com/SyuanTsai/Media-Assets/issues/11#issuecomment-5932563852) | [Existing attachment](https://github.com/user-attachments/assets/fc2bbfe4-50b8-4c9c-b775-20f1c2c33792). The icon identifies the talent; it is not mechanism evidence.
