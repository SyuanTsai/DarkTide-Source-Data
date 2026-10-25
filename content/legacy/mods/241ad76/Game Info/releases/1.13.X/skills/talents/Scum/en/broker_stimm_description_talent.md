# Cartel Special: dedicated stimm source evidence

[繁體中文](../broker_stimm_description_talent.md) | [Base effects](BASE_EFFECTS.md#broker_stimm_description_talent) | [Technical index](SOURCE_INDEX.md) | [English comparison](LOCALIZATION_COMPARISON.md#broker_stimm_description_talent)

Release 1.13.1; fixed SHA `7e662fcda16219d775b84af50322be2e9cd9d62e`. Base talent `broker_stimm_description_talent`; no selectable talent point cost. Mechanisms and examples reuse verified source evidence; no in-game test was performed.

## Source-confirmed behavior and static derivation

- `broker_archetype.lua` includes `broker_stimm_description_talent` in the fixed `base_talents`. Its definition contains only `description`, `display_name` and two `loc_string` `format_values` (`stimm_lab` and `broker_stimm`); it specifies no `passive`, `player_ability`, `coherency` or other combat effect.
- The class separately has `conditional_base_talents.broker_syringe`. It activates only when `selected_talent_names` contains any talent from `TalentSettings.broker_stimm`, placing that node in `slot_pocketable_small`. The description node and actual syringe are separate: the former provides interface text; the latter provides the conditional item ability.
- `TalentSettings.broker_stimm` uses `_generate_stimm_talent` to create each Stimm talent and its Buff data. The actual recipes, use process and syringe effects are documented separately in the Stimm talents and `broker_syringe` source document.

## Fixed source evidence

- [scripts/settings/archetype/archetypes/broker_archetype.lua — L35-L89](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/archetype/archetypes/broker_archetype.lua#L35-L89)
- [scripts/settings/ability/archetype_talents/talents/broker_talents.lua — L3172-L3191](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/broker_talents.lua#L3172-L3191)
- [scripts/settings/ability/archetype_talents/talents/broker_talents.lua — L590-L597](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/broker_talents.lua#L590-L597)
- [scripts/settings/talent/talent_settings_broker.lua — L12-L30](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/talent/talent_settings_broker.lua#L12-L30)
- [scripts/ui/views/broker_stimm_builder_view/layouts/broker_stimm_tree.lua — L6-L36](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/ui/views/broker_stimm_builder_view/layouts/broker_stimm_tree.lua#L6-L36)

## Examples and limits

- Applying only `broker_stimm_description_talent` retains the description node's interface text without granting a syringe in the small pocketable slot. `broker_syringe` qualifies only after at least one `broker_stimm` talent is selected.
- This base node is not a list of Stimm effects. Each recipe's values and the syringe's activation, consumption, duration and cooldown are defined by other talents and abilities.
- This document confirms source configuration only; no in-game test was performed.
- Local text from Build 25606770 corresponds to the fixed public source's version 1.13.1.

<a id="original-english-template-and-reconstruction"></a>

## Original English template and reconstruction

Steam Build `25606770`; `content/localization/ui`, resource hash `63564edcb7c3c5ee`; language `en` (code `0`).

- Name key `loc_talent_broker_stimm`, hash `7a34c61a`, entry 7944: **Cartel Special**.
- Description key `loc_talent_broker_stimm_desc`, hash `042ba657`, entry 264.

Full raw template:

~~~text
Use the {stimm_lab:%s} to brew your {broker_stimm:%s}, a personal Stimm to use in the field.
~~~

| Placeholder | Value | Formatting |
|---|---|---|
| `stimm_lab` | `loc_broker_stimm_builder_view_display_name` | Localized string: `Stimm Lab`; hash `0c5a5ccd`, entry 792 |
| `broker_stimm` | `loc_talent_broker_stimm` | Localized string: `Cartel Special`; hash `7a34c61a`, entry 7944 |

Display mapping: `broker_talents.lua` L3172-L3186. Both placeholders are localized strings from the same English resource; no numerical value needs reconstruction.

Static reconstruction; not an observed game screen:

~~~text
Use the Stimm Lab to brew your Cartel Special, a personal Stimm to use in the field.
~~~

## English comparison

The independently read English directs the player to use the Stimm Lab to brew a personal Cartel Special for field use. This agrees with the accepted recipe interface and dedicated Stimm setup. It does not say that this description node itself grants the item or any combat effect. The separate conditional syringe, requirement to select a recipe, independent 30-point budget and effect definitions supplement the brief instruction; no clear contradiction appears.
