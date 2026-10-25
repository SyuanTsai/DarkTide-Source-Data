# Probing Strikes: source evidence

[繁體中文](../cryptic_chordclaw_quick_stab_combo.md) | [Player description](README.md#cryptic_chordclaw_quick_stab_combo) | [Technical index](SOURCE_INDEX.md) | [English comparison](LOCALIZATION_COMPARISON.md#cryptic_chordclaw_quick_stab_combo)

Release 1.13.1; fixed SHA `7e662fcda16219d775b84af50322be2e9cd9d62e`. Talent `cryptic_chordclaw_quick_stab_combo`; name key `loc_talent_cryptic_chordclaw_quick_stab_combo`; description key `loc_talent_cryptic_chordclaw_quick_stab_combo_clarified_desc`. Node `node_bf90aeb2-d7bf-4f42-86ea-ecbc7f9f163c`; category Ability; one point. Mechanisms and examples reuse verified source evidence; no in-game test was performed.

## Source-confirmed behavior and static derivation

- The talent special rule switches quick activation to `action_stab_1/2/3`. All three have `guaranteed_crit = true` and use `chordclaw_stab_bleed`. The held-input `from_charge` branch explicitly retains `action_heavy_sticky_attack_1`.
- The damage profile's `on_damage_dealt` applies `bleed_long = 6`. `Attack._handle_buffs` applies it when damage >0 and the target has an available buff extension. Each damaging stab therefore adds 6 stacks; a miss adds none.
- `bleed_long` is capped at 18 stacks, lasts 9.5s and has `interval = 0.375`. Adding stacks restarts its timer. Actual damage per Bleed tick still depends on the `bleeding` damage profile, stack ratio, enemy armour and other modifiers. Six stacks do not mean a fixed 6 damage.

## Fixed source evidence

- [scripts/settings/ability/archetype_talents/talents/cryptic_talents.lua — L494-L512](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/cryptic_talents.lua#L494-L512)
- [scripts/settings/equipment/weapon_action_handler_data.lua — L697-L710](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_action_handler_data.lua#L697-L710)
- [scripts/settings/equipment/weapon_templates/combat_abilities/cryptic_transonic_claw.lua — L561-L580](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/combat_abilities/cryptic_transonic_claw.lua#L561-L580)
- [scripts/settings/equipment/weapon_templates/combat_abilities/cryptic_transonic_claw.lua — L752-L1002](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/combat_abilities/cryptic_transonic_claw.lua#L752-L1002)
- [scripts/settings/damage/damage_profiles/archetypes/cryptic_damage_profile_templates.lua — L214-L344](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/damage/damage_profiles/archetypes/cryptic_damage_profile_templates.lua#L214-L344)
- [scripts/settings/buff/weapon_buff_templates.lua — L275-L284](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/weapon_buff_templates.lua#L275-L284)
- [scripts/settings/equipment/weapon_templates/combat_abilities/cryptic_transonic_claw.lua — L1007-L1039](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/combat_abilities/cryptic_transonic_claw.lua#L1007-L1039)
- [scripts/utilities/attack/attack.lua — L713-L749](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/attack/attack.lua#L713-L749)
- [scripts/settings/ability/archetype_talents/talents/cryptic_talents.lua — L494-L512](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/cryptic_talents.lua#L494-L512)
- [scripts/ui/views/talent_builder_view/layouts/cryptic_tree.lua — L1171-L1194](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/ui/views/talent_builder_view/layouts/cryptic_tree.lua#L1171-L1194)

## Example assumptions and limits

- **How it works**: Quick Chordclaw activation performs three successive quick stabs. Each stab that deals Health damage adds 6 Bleed stacks to that enemy.
- **How it works**: All three hitting the same enemy can add at most 18 Bleed stacks. The Bleed effect itself is also capped at 18 stacks.
- **How it works**: Holding the input uses the regular Heavy Attack and does not select the three-quick-stab sequence.
- **Duration**: Bleed lasts 9.5s; applying it again restarts the timer. If all three stabs damage the same enemy, they add 6 + 6 + 6 = 18 stacks, reaching the cap.

- Three quick stabs each dealing Health damage to the same enemy add 6 + 6 + 6 = 18 Bleed stacks, reaching the 18-stack cap.
- If only two of the three deal Health damage, those two add 12 stacks in total. A missed stab does not apply Bleed through the damage event.
- A fixed Health-damage amount per stab cannot be read directly from this damage setting. Damage depends on the target, power and other modifiers.
- New Bleed stacks are limited by the target's existing stacks and the 18-stack cap. Adding stacks resets the effect's duration.

Mechanisms reuse the fixed-version evidence, with local Build 25606770 English text corresponding to 1.13.1. Actual presentation and behavior remain unobserved in game. Missing details are supplementary explanations.

<a id="original-english-template-and-reconstruction"></a>

## Original English template and reconstruction

Steam Build `25606770`; `content/localization/ui`, resource hash `63564edcb7c3c5ee`; language `en` (code `0`).

- Name key `loc_talent_cryptic_chordclaw_quick_stab_combo`, hash `65665761`, entry 6599: **Probing Strikes**.
- Description key `loc_talent_cryptic_chordclaw_quick_stab_combo_clarified_desc`, hash `e0d3d43f`, entry 14579.

Full raw template:

~~~text
Your Chordclaw now executes {num_stab:%s} Quick Stab attacks, that apply {bleed_stacks:%s} stack(s) of Bleed.

Holding the input will perform the regular attack.
~~~

| Placeholder | Value | Formatting |
|---|---|---|
| `{num_stab:%s}` | 3 | `number` |
| `{bleed_stacks:%s}` | 6 | `number` |

The minimally read display map is `cryptic_talents.lua` L494-L512. It supplies the literal `num_stab = 3` and `bleed_stacks = 6`, both formatted as numbers.

Static reconstruction; not an observed game screen:

~~~text
Your Chordclaw now executes 3 Quick Stab attacks, that apply 6 stack(s) of Bleed.

Holding the input will perform the regular attack.
~~~

## English comparison

The English specifies three quick stabs, six Bleed stacks and a regular attack when holding the input, agreeing with the accepted branches and stack value. It does not explicitly say that each damaging stab applies six stacks. This per-stab condition, guaranteed Critical Strikes, 18-stack cap, 9.5s duration, tick interval, refresh and damage limits supplement the wording rather than contradict it.

## Icon source

[Original image](https://gameslantern.com/storage/sites/darktide/exporter/talents/cryptic/ability_modifier/cryptic_chordclaw_quick_stab_combo.webp) | [Media-Assets Issue](https://github.com/SyuanTsai/Media-Assets/issues/13#issuecomment-5935640756) | [Existing attachment](https://github.com/user-attachments/assets/7d516cae-80f0-4d48-b562-b5a21f6ddcd1). The icon identifies the talent; it is not mechanism evidence.
