# Axial Slash: source evidence

[繁體中文](../cryptic_chordclaw_horizontal_swipe.md) | [Player description](README.md#cryptic_chordclaw_horizontal_swipe) | [Technical index](SOURCE_INDEX.md) | [English comparison](LOCALIZATION_COMPARISON.md#cryptic_chordclaw_horizontal_swipe)

Release 1.13.1; fixed SHA `7e662fcda16219d775b84af50322be2e9cd9d62e`. Talent `cryptic_chordclaw_horizontal_swipe`; name key `loc_talent_cryptic_chordclaw_horizontal_swipe`; description key `loc_talent_cryptic_chordclaw_horizontal_swipe_desc`. Node `node_9d962b30-33ec-48bc-915f-f19f4a2d8ed2`; category Ability; one point. Mechanisms and examples reuse verified source evidence; no in-game test was performed.

## Source-confirmed behavior and static derivation

- The talent enables only the `cryptic_chordclaw_do_horizontal_swipe` special rule. The weapon action handler uses this rule to switch the ability lunge attack from the default big sticky attack branch to `action_horizontal_attack_1`.
- The horizontal action is a Heavy sweep with `guaranteed_crit = true`, using the `chordclaw_horizontal` damage profile. Its target-order attack power values are 500, 480, 450, 410 and 360, then 300 for later targets. Impact power is 100, 90, 80, 70 and 60, then 50. These are power distributions, not Health lost by every enemy.
- This talent changes the attack action and damage profile. Its template adds neither a fixed extra damage amount nor a new charge cost. The Chordclaw ability settings still determine the ability's use cost.
- The `from_charge` branch at L1030-L1038 always selects `action_heavy_sticky_attack_1`, bypassing the three talent-condition branches used for quick activation. This talent therefore replaces quick activation; holding to charge retains the original Heavy stab.

## Fixed source evidence

- [scripts/settings/ability/archetype_talents/talents/cryptic_talents.lua — L513-L522](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/cryptic_talents.lua#L513-L522)
- [scripts/settings/equipment/weapon_action_handler_data.lua — L697-L710](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_action_handler_data.lua#L697-L710)
- [scripts/settings/equipment/weapon_templates/combat_abilities/cryptic_transonic_claw.lua — L561-L575](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/combat_abilities/cryptic_transonic_claw.lua#L561-L575)
- [scripts/settings/equipment/weapon_templates/combat_abilities/cryptic_transonic_claw.lua — L739-L751](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/combat_abilities/cryptic_transonic_claw.lua#L739-L751)
- [scripts/settings/damage/damage_profiles/archetypes/cryptic_damage_profile_templates.lua — L459-L527](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/damage/damage_profiles/archetypes/cryptic_damage_profile_templates.lua#L459-L527)
- [scripts/settings/equipment/weapon_templates/combat_abilities/cryptic_transonic_claw.lua — L663-L751](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/combat_abilities/cryptic_transonic_claw.lua#L663-L751)
- [scripts/settings/damage/damage_profiles/archetypes/cryptic_damage_profile_templates.lua — L459-L550](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/damage/damage_profiles/archetypes/cryptic_damage_profile_templates.lua#L459-L550)
- [scripts/settings/equipment/weapon_templates/combat_abilities/cryptic_transonic_claw.lua — L1007-L1039](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/combat_abilities/cryptic_transonic_claw.lua#L1007-L1039)
- [scripts/settings/ability/archetype_talents/talents/cryptic_talents.lua — L513-L522](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/cryptic_talents.lua#L513-L522)
- [scripts/ui/views/talent_builder_view/layouts/cryptic_tree.lua — L1147-L1170](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/ui/views/talent_builder_view/layouts/cryptic_tree.lua#L1147-L1170)

## Example assumptions and limits

- **How it works**: Selecting Axial Slash replaces the Chordclaw ability's default Heavy stab with a horizontal sweep. It remains a guaranteed Critical Strike.
- **How it works**: The sweep can hit multiple targets according to the weapon's Cleave settings. Actual target count and Health damage depend on the targets and hit results.
- **Target-order example**: Comparing only the damage distribution with the same hit location, armour and modifiers, the second target relative to the first is 480 ÷ 500 = 96%. If the first takes 100 damage, the second takes 96. The fifth takes 100 × 360 ÷ 500 = 72. Actual results still depend on each target's conditions.
- **Holding the input**: Quick activation uses the sweep. Holding to charge and then releasing still uses the original Heavy stab.

- Selecting Axial Slash and attacking through the Chordclaw ability selects the sweep branch. Attack power for the first five targets is 500, 480, 450, 410 and 360; later targets use 300. These are not Health-damage points.
- Against a target that can receive a Critical Strike, the sweep's attack setting guarantees the Critical Strike. Actual Health damage still depends on target protection and hit location.
- The description supplies no fixed damage number. Damage-profile power distributions still undergo target, protection and hit calculations.
- Whether the attack chain hits multiple targets depends on the sweep, Cleave and enemy positions. Each attack is not guaranteed to hit all targets listed by the profile.

Mechanisms reuse the fixed-version evidence, with local Build 25606770 English text corresponding to 1.13.1. Actual presentation and behavior remain unobserved in game. Missing details are supplementary explanations.

<a id="original-english-template-and-reconstruction"></a>

## Original English template and reconstruction

Steam Build `25606770`; `content/localization/ui`, resource hash `63564edcb7c3c5ee`; language `en` (code `0`).

- Name key `loc_talent_cryptic_chordclaw_horizontal_swipe`, hash `f6fe2e81`, entry 16042: **Axial Slash**.
- Description key `loc_talent_cryptic_chordclaw_horizontal_swipe_desc`, hash `262d64b6`, entry 2469.

Full raw template:

~~~text
Your Chordclaw now executes a Horizontal Sweep attack.
~~~

| Placeholder | Value | Formatting |
|---|---|---|
| None | No placeholders | Original English is a complete literal string |

The English template requires no display-value lookup or interpolation. Existing action/profile evidence is reused without retracing it.

Static reconstruction; not an observed game screen:

~~~text
Your Chordclaw now executes a Horizontal Sweep attack.
~~~

## English comparison

The original English says the Chordclaw executes a horizontal sweep, agreeing with the quick-activation action branch. The charged branch retaining the Heavy stab, guaranteed Critical Strike, target-order power distribution, unchanged ability cost and hit/Cleave limits supplement the description. Omitted internal power values are not an explicit contradiction.

## Icon source

[Original image](https://gameslantern.com/storage/sites/darktide/exporter/talents/cryptic/ability_modifier/cryptic_chordclaw_horizontal_swipe.webp) | [Media-Assets Issue](https://github.com/SyuanTsai/Media-Assets/issues/13#issuecomment-5935640756) | [Existing attachment](https://github.com/user-attachments/assets/94595162-990c-418a-9bbc-9b3e90ed790b). The icon identifies the talent; it is not mechanism evidence.
