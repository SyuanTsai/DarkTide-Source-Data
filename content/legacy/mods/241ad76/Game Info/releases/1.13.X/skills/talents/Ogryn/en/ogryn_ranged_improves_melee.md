# Spray and Slay: source evidence

[繁體中文](../ogryn_ranged_improves_melee.md) | [Player description](README.md#ogryn_ranged_improves_melee) | [Technical index](SOURCE_INDEX.md) | [English comparison](LOCALIZATION_COMPARISON.md#ogryn_ranged_improves_melee)

Release 1.13.1; fixed SHA `7e662fcda16219d775b84af50322be2e9cd9d62e`. Talent `ogryn_ranged_improves_melee`; name key `loc_talent_ogryn_ranged_improves_melee`; description key `loc_talent_ogryn_ranged_improves_melee_desc`. Node `node_fce211eb-69a1-47f3-a8c4-74589f2d1918`; category Talent; one point. Mechanisms and examples reuse verified source evidence; no in-game test was performed.

## Source-confirmed behavior and static derivation

- `on_ammo_consumed` requires `current_slot_clip_percentage == 0`. Active duration is 6s, with `melee_damage=0.15` and `melee_attack_speed=0.075`. There is no cooldown, and it can retrigger.

## Fixed source evidence

- [scripts/settings/buff/archetype_buff_templates/ogryn_buff_templates.lua — L3423-L3455](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/ogryn_buff_templates.lua#L3423-L3455)
- [scripts/settings/talent/talent_settings_ogryn.lua — L156-L160](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/talent/talent_settings_ogryn.lua#L156-L160)
- [scripts/extension_systems/buff/buffs/proc_buff.lua — L173-L184](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/buff/buffs/proc_buff.lua#L173-L184)
- [scripts/utilities/action/action_handler.lua — L356-L429](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/action/action_handler.lua#L356-L429)
- [scripts/utilities/attack/damage_calculation.lua — L278-L300](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/attack/damage_calculation.lua#L278-L300)
- [scripts/settings/ability/archetype_talents/talents/ogryn_talents.lua — L2578-L2602](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/ogryn_talents.lua#L2578-L2602)
- [scripts/ui/views/talent_builder_view/layouts/ogryn_tree.lua — L2148-L2170](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/ui/views/talent_builder_view/layouts/ogryn_tree.lua#L2148-L2170)

## Example assumptions and limits

- **Trigger**: Consuming ammunition that empties the current weapon's clip grants +15% melee damage and +7.5% melee Attack Speed for 6s. Switching to a melee weapon then lets you use the bonuses.

- **Stacks and refresh**: Another qualifying trigger restarts the timer without stacking percentages. Simply continuing to hold an empty clip does not repeatedly trigger the effect.

- **Calculation example**: Base melee damage of 100 becomes 115. An Attack-Speed-scaled 1s action becomes `1 ÷ 1.075 ≈ 0.930s`. Other same-stage damage and speed bonuses add within their respective stats.

Mechanisms reuse the fixed-version evidence, with local Build 25606770 English text corresponding to 1.13.1. Actual presentation and behavior remain unobserved in game. Missing details are supplementary explanations.

<a id="original-english-template-and-reconstruction"></a>

## Original English template and reconstruction

Steam Build `25606770`; `content/localization/ui`, resource hash `63564edcb7c3c5ee`; language `en` (code `0`).

- Name key `loc_talent_ogryn_ranged_improves_melee`, hash `49b80f06`, entry 4776: **Spray and Slay**.
- Description key `loc_talent_ogryn_ranged_improves_melee_desc`, hash `7ba7e606`, entry 8029.

Full raw template:

~~~text
{damage:%s} Melee Damage and {attack_speed:%s} Melee Attack Speed for {duration:%s}s after emptying your Clip.
~~~

| Placeholder | Value | Formatting |
|---|---|---|
| damage | shared melee_damage = 0.15 | Percentage with explicit + prefix → +15% |
| attack_speed | shared melee_attack_speed = 0.075 | Percentage with explicit + prefix → +7.5% |
| duration | shared duration = 6 | Number → 6 |

Only the missing display mapping in the cited talent definition, lines 2578–2602, was read. Accepted values, mechanisms and common formatting were reused.

Static reconstruction; not an observed game screen:

~~~text
+15% Melee Damage and +7.5% Melee Attack Speed for 6s after emptying your Clip.
~~~

## English comparison

The independently read English grants the melee damage and Attack Speed bonuses for 6s after emptying the clip. It matches the accepted trigger and values. The ammunition-consumption event, refresh without percentage stacking or cooldown, lack of repeated triggers from merely holding an empty clip and additive/reciprocal calculations supplement the text. No explicit English contradiction is established.

## Icon source

[Original image](https://gameslantern.com/storage/sites/darktide/exporter/talents/ogryn/default/ogryn_ranged_improves_melee.webp) | [Media-Assets Issue](https://github.com/SyuanTsai/Media-Assets/issues/10#issuecomment-5931394406) | [Existing attachment](https://github.com/user-attachments/assets/eeae1229-b245-43fc-9840-960c36f5787e). The icon identifies the talent; it is not mechanism evidence.
