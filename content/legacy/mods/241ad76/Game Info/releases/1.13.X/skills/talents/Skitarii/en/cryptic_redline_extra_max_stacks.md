# Resource Optimisation Canticles: source evidence

[繁體中文](../cryptic_redline_extra_max_stacks.md) | [Player description](README.md#cryptic_redline_extra_max_stacks) | [Technical index](SOURCE_INDEX.md) | [English comparison](LOCALIZATION_COMPARISON.md#cryptic_redline_extra_max_stacks)

Release 1.13.1; fixed SHA `7e662fcda16219d775b84af50322be2e9cd9d62e`. Talent `cryptic_redline_extra_max_stacks`; name key `loc_talent_cryptic_power_generation_capacitance_for_charge`; description key `loc_talent_cryptic_redline_stacks_clarified_desc`. Node `node_ba657afe-4100-4881-98a2-20c43f4e0a16`; category Keystone; one point. Mechanisms and examples reuse verified source evidence; no in-game test was performed.

## Source-confirmed behavior and static derivation

- The talent definition supplies `ability_extra_charges = +1` and enables the extra-stack rule. The settings specify 1 extra maximum charge and 1 extra Redline Capacitors stack.
- The Redline Capacitors root passive already supplies one extra maximum Combat Ability charge. When its stack buff starts, it checks the extra-stack rule and increases both `max_stacks` and `max_stacks_cap` by 1. Its stepped table is also built through the base 4 plus the extra 1 stack.
- A separate passive buff supplies this additional `+1` charge. The ability system adds `ability_extra_charges` to that Combat Ability's maximum charges. The original Redline Toughness formula remains unchanged: at 5 stacks, `1 − 0.05 × 5 = 0.75`.

## Fixed source evidence

- [scripts/settings/ability/archetype_talents/talents/cryptic_talents.lua — L1452-L1481](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/cryptic_talents.lua#L1452-L1481)
- [scripts/settings/talent/talent_settings_cryptic.lua — L331-L345](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/talent/talent_settings_cryptic.lua#L331-L345)
- [scripts/settings/buff/archetype_buff_templates/cryptic_buff_templates.lua — L1868-L1936](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/cryptic_buff_templates.lua#L1868-L1936)
- [scripts/settings/buff/archetype_buff_templates/cryptic_buff_templates.lua — L1967-L1973](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/cryptic_buff_templates.lua#L1967-L1973)
- [scripts/extension_systems/ability/player_unit_ability_extension.lua — L734-L770](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/ability/player_unit_ability_extension.lua#L734-L770)
- [scripts/settings/buff/buff_settings.lua — L692-L692](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/buff_settings.lua#L692-L692)
- [scripts/settings/ability/player_abilities/abilities/cryptic_abilities.lua — L70-L168](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/player_abilities/abilities/cryptic_abilities.lua#L70-L168)
- [scripts/settings/ability/archetype_talents/talents/cryptic_talents.lua — L1452-L1481](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/cryptic_talents.lua#L1452-L1481)
- [scripts/ui/views/talent_builder_view/layouts/cryptic_tree.lua — L1241-L1263](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/ui/views/talent_builder_view/layouts/cryptic_tree.lua#L1241-L1263)

## Example assumptions and limits

- **Effect**: Adds **1 maximum Combat Ability charge** and **1 maximum Redline Capacitors stack**, raising the stack cap from **4 to 5**.
- **Charge example**: The Skitarii Combat Ability base cap is 3 charges, Redline Capacitors adds 1, and this talent adds another 1: `3 + 1 + 1 = 5` charges. Voltaic Emitter still consumes at most 3 charges per use.
- **Toughness damage example**: At 5 Redline stacks, the Toughness damage taken multiplier is `0.75`. An attack that would deal 100 Toughness damage instead deals `75`.
- **Recovery example**: At 5 Redline stacks, natural recovery is increased by 25%. With no other modifiers, the rate rises from 2% of one charge per second to `2% × 1.25 = 2.5%` per second.

- The charge cap applies to abilities managed by the Combat Ability charge system. The actual maximum depends on that ability's original cap.
- The 5-stack reduction concerns Toughness damage taken; it does not mean Health damage is also reduced by 25%.
- The root Keystone's existing extra maximum charge is a prerequisite effect. The English does not need to repeat it in this modifier's description.

Mechanisms reuse the fixed-version evidence, with local Build 25606770 English text corresponding to 1.13.1. Actual presentation and behavior remain unobserved in game. Missing details are supplementary explanations.

<a id="original-english-template-and-reconstruction"></a>

## Original English template and reconstruction

Steam Build `25606770`; `content/localization/ui`, resource hash `63564edcb7c3c5ee`; language `en` (code `0`).

- Name key `loc_talent_cryptic_power_generation_capacitance_for_charge`, hash `47a760ec`, entry 4654: **Resource Optimisation Canticles**.
- Description key `loc_talent_cryptic_redline_stacks_clarified_desc`, hash `b176ca53`, entry 11427.

Full raw template:

~~~text
{charges:%s} Max Ability Charges and {redline_stack:%s} {talent_name:%s} Max Stacks.
~~~

| Placeholder | Value | Formatting |
|---|---|---|
| `charges` | +1 | `number`, prefix `+`: `ability_extra_charges = 1` |
| `redline_stack` | +1 | `number`, prefix `+`: `extra_redline_max_stacks = 1` |
| `talent_name` | Redline Capacitors | `loc_string`: `loc_talent_cryptic_power_generation` |

The display mappings in `cryptic_talents.lua` L1465–L1480 use the already verified settings. The parent English name is paired with `loc_talent_cryptic_power_generation`, hash `765c4c20`, entry `7686`: Redline Capacitors.

Static reconstruction; not an observed game screen:

~~~text
+1 Max Ability Charges and +1 Redline Capacitors Max Stacks.
~~~

## English comparison

The English explicitly adds one maximum ability charge and one maximum Redline Capacitors stack, matching the two settings. The resulting charge cap includes the root Keystone's existing extra charge. The 5-stack Toughness and recovery calculations, charge-system limit and unchanged per-use spending cap are supplements. No explicit English contradiction was identified.

## Icon source

[Original image](https://gameslantern.com/storage/sites/darktide/exporter/talents/cryptic/keystone_modifier/cryptic_redline_extra_max_stacks.webp) | [Media-Assets Issue](https://github.com/SyuanTsai/Media-Assets/issues/13#issuecomment-5935647528) | [Existing attachment](https://github.com/user-attachments/assets/96e3fb15-c1fd-4702-a6ef-0f69b10931fe). The icon identifies the talent; it is not mechanism evidence.
