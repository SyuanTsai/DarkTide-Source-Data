# Target Selection: source evidence

[繁體中文](../adamant_pinning_dog_elite_damage.md) | [Player description](README.md#adamant_pinning_dog_elite_damage) | [Technical index](SOURCE_INDEX.md) | [English comparison](LOCALIZATION_COMPARISON.md#adamant_pinning_dog_elite_damage)

Release 1.13.1; fixed SHA `7e662fcda16219d775b84af50322be2e9cd9d62e`. Talent `adamant_pinning_dog_elite_damage`; name key `loc_talent_adamant_pinning_dog_elite_damage`; description key `loc_talent_adamant_pinning_dog_elite_damage_description`. Node `node_021a58e4-4b06-40cb-b978-3823adbd5a15`; category Passive talent; one point.

## Source-confirmed behavior and static derivation

- Own-companion pounce/finish events record and clear the pinned target. `on_kill` requires `attacked_unit` to match that target and pass the Elite/Specialist check. Companion kills are resolved to owner events through `AttackingUnitResolver`.
- The child buff has `max_stacks = 1`, refresh and duration 8s. `damage_vs_elites = 0.15` and `damage_vs_specials = 0.15` are added separately to the general damage stage.

## Fixed source evidence

- [scripts/utilities/attack/attack.lua — L216-L223](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/attack/attack.lua#L216-L223)
- [scripts/utilities/attack/attack.lua — L669-L709](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/attack/attack.lua#L669-L709)
- [scripts/utilities/attack/attacking_unit_resolver.lua — L33-L43](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/attack/attacking_unit_resolver.lua#L33-L43)
- [scripts/extension_systems/behavior/nodes/actions/bt_companion_target_pounced_action.lua — L202-L232](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/behavior/nodes/actions/bt_companion_target_pounced_action.lua#L202-L232)
- [scripts/settings/buff/archetype_buff_templates/adamant_buff_templates.lua — L2783-L2798](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/adamant_buff_templates.lua#L2783-L2798)
- [scripts/settings/buff/helper_functions/check_proc_functions.lua — L120-L133](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/helper_functions/check_proc_functions.lua#L120-L133)
- [scripts/utilities/attack/damage_calculation.lua — L334-L355](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/attack/damage_calculation.lua#L334-L355)
- [scripts/settings/talent/talent_settings_adamant.lua — L454-L457](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/talent/talent_settings_adamant.lua#L454-L457)
- [scripts/settings/buff/archetype_buff_templates/adamant_buff_templates.lua — L2749-L2782](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/adamant_buff_templates.lua#L2749-L2782)
- [scripts/settings/ability/archetype_talents/talents/adamant_talents.lua — L2893-L2912](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/adamant_talents.lua#L2893-L2912)
- [scripts/ui/views/talent_builder_view/layouts/adamant_tree.lua — L2043-L2069](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/ui/views/talent_builder_view/layouts/adamant_tree.lua#L2043-L2069)

## Example assumptions and limits

- **Trigger**: When you or your own Cyber-Mastiff kill an Elite or Specialist that it is currently pinning, gain 15% Damage against Elites and Specialists for the next 8s.

- **Refresh and limits**: Another trigger resets the 8s duration without stacking the damage bonus. Ordinary enemies dying do not trigger it, and attacks against ordinary enemies receive no bonus.

- **Damage example**: Against a qualifying target, base damage 100 becomes 115. With an existing same-stage 25% bonus, damage is 100 × (1 + 25% + 15%) = 140.

If pin release and death occur in the same update, activation still depends on event ordering. This runtime boundary has not been tested in game.

Values and behavior reuse the verified fixed-version evidence. The examples are static derivations, not in-game tests. English and code evidence both refer to 1.13.1; differences still require an in-game check. Omitted details are supplementary rather than translation errors.

<a id="original-english-template-and-reconstruction"></a>

## Original English template and reconstruction

Steam Build `25606770`; `content/localization/ui`, resource hash `63564edcb7c3c5ee`; language `en` (code `0`).

- Name key `loc_talent_adamant_pinning_dog_elite_damage`, hash `2a3cba7c`, entry 2740: **Target Selection**.
- Description key `loc_talent_adamant_pinning_dog_elite_damage_description`, hash `0b95c919`, entry 743.

The resource-record suffix `[Writer]` is metadata, not displayed text.

Full raw template:

```text
Killing a Pounced Elite / Specialist grants {damage:%s} Damage vs Elites and Specialists. Lasts {time:%s}s.
```

| Placeholder | Value | Formatting |
|---|---|---|
| damage | talent_settings.pinning_dog_elite_damage.damage = 0.15 | Percentage, + prefix → +15% |
| time | talent_settings.pinning_dog_elite_damage.duration = 8 | Number → 8; template adds s |

Static reconstruction; not an observed game screen:

```text
Killing a Pounced Elite / Specialist grants +15% Damage vs Elites and Specialists. Lasts 8s.
```

## English comparison

The independently read English agrees with killing a pounced Elite/Specialist, the affected target categories, 15% Damage and 8s duration. Owned-target tracking, companion kill attribution, refresh and additive examples are supplementary. The same-update pin-release/death boundary remains unconfirmed. No explicit English contradiction is established.

## Icon source

[Original image](https://gameslantern.com/storage/sites/darktide/exporter/talents/adamant/default/adamant_pinning_dog_elite_damage.webp) | [Media-Assets Issue](https://github.com/SyuanTsai/Media-Assets/issues/11#issuecomment-5932563852) | [Existing attachment](https://github.com/user-attachments/assets/4b7cf064-ea83-4334-a484-a222e22af7a3). The icon identifies the talent; it is not mechanism evidence.
