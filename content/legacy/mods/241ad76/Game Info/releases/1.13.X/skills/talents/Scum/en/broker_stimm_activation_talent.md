# Equip Cartel Special: source evidence

[繁體中文](../broker_stimm_activation_talent.md) | [Player description](README.md#broker_stimm_activation_talent) | [Technical index](SOURCE_INDEX.md) | [English comparison](LOCALIZATION_COMPARISON.md#broker_stimm_activation_talent)

Release 1.13.1; fixed SHA `7e662fcda16219d775b84af50322be2e9cd9d62e`. Talent `broker_stimm_activation_talent`; name key `loc_talent_broker_stimm_activation_talent`; description key `loc_talent_broker_stimm_activation_talent_desc`. Node `node_5c2139f8-0686-42f5-97fe-9b65e547e649`; category Stimm recipe; 0 points. Mechanisms and examples reuse verified source evidence; no in-game test was performed.

## Source-confirmed behavior and static derivation

- The starting node has `cost = 0` and only provides a description. Left- and right-click handlers return on `start`. Actual equipping depends on `conditional_base_talent_funcs.broker_syringe` finding any selected `broker_stimm` recipe.
- The dedicated item occupies `slot_pocketable_small`, with `givable = false`, `undroppable = true` and `auto_use = true`. Use consumes ability charge and pauses recovery, unlike the consumption of ordinary pickup Stimms.
- The independent recipe tree's `node_points` sets the 30-point budget. Both `cooldown_lerp_func` and `resource_cost_per_charge_lerp_func` use `ceil(lerp(15, 75, clamp01((P − 1) / (30 − 1))))`. At P = 0, the minimum becomes 0, but no selected recipe means the dedicated item is not eligible to equip.
- While `syringe_broker_buff` exists, `pause_fulfilled_func` returns false. Effects last 15 seconds; extra `syringe_duration` also delays the start of natural cooldown recovery.
- Long Lasting adds five seconds: [Value setting](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/talent/talent_settings_broker.lua#L374-L376); [Application to Stimm duration](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/broker_buff_templates.lua#L2001-L2006).

## Fixed source evidence

- [scripts/settings/archetype/archetypes/broker_archetype.lua — L72-L89](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/archetype/archetypes/broker_archetype.lua#L72-L89)
- [scripts/ui/views/broker_stimm_builder_view/broker_stimm_builder_view.lua — L1165-L1199](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/ui/views/broker_stimm_builder_view/broker_stimm_builder_view.lua#L1165-L1199)
- [scripts/settings/equipment/weapon_templates/pocketables/syringe_broker_pocketable.lua — L6-L35](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/pocketables/syringe_broker_pocketable.lua#L6-L35)
- [scripts/settings/ability/player_abilities/abilities/broker_abilities.lua — L140-L209](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/player_abilities/abilities/broker_abilities.lua#L140-L209)
- [scripts/settings/buff/archetype_buff_templates/broker_buff_templates.lua — L4091-L4108](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/broker_buff_templates.lua#L4091-L4108)
- [scripts/settings/buff/archetype_buff_templates/broker_buff_templates.lua — L4173-L4181](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/broker_buff_templates.lua#L4173-L4181)
- [scripts/settings/ability/archetype_talents/talents/broker_talents.lua — L3187-L3191](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/broker_talents.lua#L3187-L3191)
- [scripts/ui/views/broker_stimm_builder_view/layouts/broker_stimm_tree.lua — L11-L36](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/ui/views/broker_stimm_builder_view/layouts/broker_stimm_tree.lua#L11-L36)

## Example assumptions and limits

- **Equipping**: Select at least one effect in the Stimm recipe tree to equip your dedicated Stimm. The central icon itself costs no points.

- **Recipes and effects**: Recipes share 30 points, with each recipe costing 1–5 points. On use, the selected recipes act together for 15 seconds; Long Lasting adds another 5 seconds.

- **Recovery time**: Recovery starts after the effects end. With total recipe cost P, base recovery seconds are `15 + 60 × (P − 1) ÷ 29`, rounded up. One point gives 15 seconds, 15 points gives 44 seconds, and 30 points gives 75 seconds.

- **Full-cycle example**: At a recipe cost of 30 points, ignoring other recovery effects, the injection acts for 15 seconds and then recovers for 75 seconds: 15 + 75 = 90 seconds before reuse.

At P = 15, `ceil(15 + 60 × 14/29) = 44` seconds. At P = 30, recovery is 75 seconds, or 90 seconds including the basic 15-second effects. Fifteen seconds is the basic direct-injection duration; Stimm Supply uses its externally controlled field/linger duration. The starting node is not another upgradeable recipe and is excluded from the 29 recipe nodes. Mechanisms reuse the fixed-version evidence, with local Build 25606770 English text corresponding to 1.13.1. Actual presentation and behavior remain unobserved in game. Missing details are supplementary explanations.

<a id="original-english-template-and-reconstruction"></a>

## Original English template and reconstruction

Steam Build `25606770`; `content/localization/ui`, resource hash `63564edcb7c3c5ee`; language `en` (code `0`).

- Name key `loc_talent_broker_stimm_activation_talent`, hash `6158914f`, entry 6317: **Equip Cartel Special**.
- Description key `loc_talent_broker_stimm_activation_talent_desc`, hash `95c45406`, entry 9681.

Full raw template:

~~~text
Equips your Cartel Special.

While the Cartel Special is equipped, you are unable to use other Stimms.
~~~

| Placeholder | Value | Formatting |
|---|---|---|
| None | This paired template has no placeholders | Raw text is retained |

No display-value lookup is needed. The name and description use the exact paired same-build entries.

Static reconstruction; not an observed game screen:

~~~text
Equips your Cartel Special.

While the Cartel Special is equipped, you are unable to use other Stimms.
~~~

## English comparison

The English says this equips the Cartel Special, matching the dedicated item granted by selecting a recipe. The central starting icon itself has no click action; the recipe-selection requirement is supplementary interface detail. The English also says other Stimms cannot be used while it is equipped. Existing evidence establishes the small pocketable slot and the item's non-givable/non-droppable flags, but does not fully establish this universal use restriction; retain Cannot confirm without further mechanism research. Budget, duration and recovery formulas supplement the description.

## Icon source

[Original image](https://gameslantern.com/storage/sites/darktide/exporter/talents/broker/start/broker_stimm_activation_talent.webp) | [Media-Assets Issue](https://github.com/SyuanTsai/Media-Assets/issues/12#issuecomment-5934604124) | [Existing attachment](https://github.com/user-attachments/assets/51c007e0-bed4-4759-a369-04ab37032369). The icon identifies the talent; it is not mechanism evidence.
