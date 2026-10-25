# Artificer Servo-Skull: source evidence

[繁體中文](../cryptic_servo_skull_improved.md) | [Player description](README.md#cryptic_servo_skull_improved) | [Technical index](SOURCE_INDEX.md) | [English comparison](LOCALIZATION_COMPARISON.md#cryptic_servo_skull_improved)

Release 1.13.1; fixed SHA `7e662fcda16219d775b84af50322be2e9cd9d62e`. Talent `cryptic_servo_skull_improved`; name key `loc_talent_cryptic_servo_skull_improved`; description key `loc_talent_cryptic_servo_skull_improved_clarified_desc`. Node `node_15960c27-305b-4ad6-8cb9-1ceec79789b9`; category Blitz; one point. Mechanisms and examples reuse verified source evidence; no in-game test was performed.

## Source-confirmed behavior and static derivation

- The talent adds the `cryptic_servo_skull_improved` and `no_grenades` rules and uses `cryptic_servo_skull_order_base_inactive`. The passive template `cryptic_servo_skull_order` continuously listens for hit events. When the main hacking skull is spawned with the improved rule, it immediately receives `cryptic_servo_skull_permanent_buff`. This permanent template copies the temporary buff and removes its duration, keywords and start/end functions, retaining the stat buffs: damage +0.25 and `minion_shoot_cooldown_modifier = 0.5`. The shooting action directly multiplies its base cooldown by that modifier. Each time the main hacking skull hits a living target, the player-side proc applies `cryptic_servo_skull_debuff` to the target (Damage taken multiplier +0.15 for 5s) and adds 1 stack of `flamer_assault`. At 8 stacks, further hits instead reset the Burn duration. The improved skull shoots with `companion_servo_skull_single_shot_improved`; its base shooting cooldown is 3–3.25s. Both tagged attack orders and data interrogation use the Servo-Skull control flow. Data interrogation accepts only interactable targets whose `interaction_type` is `decoding`.

## Fixed source evidence

- [scripts/settings/ability/archetype_talents/talents/cryptic_talents.lua — L629-L669](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/cryptic_talents.lua#L629-L669)
- [scripts/settings/talent/talent_settings_cryptic.lua — L50-L59](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/talent/talent_settings_cryptic.lua#L50-L59)
- [scripts/settings/ability/player_abilities/abilities/cryptic_abilities.lua — L34-L68](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/player_abilities/abilities/cryptic_abilities.lua#L34-L68)
- [scripts/utilities/spawn_companions_from_talent.lua — L10-L32](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/spawn_companions_from_talent.lua#L10-L32)
- [scripts/settings/buff/archetype_buff_templates/cryptic_buff_templates.lua — L1063-L1149](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/cryptic_buff_templates.lua#L1063-L1149)
- [scripts/settings/buff/archetype_buff_templates/cryptic_buff_templates.lua — L1154-L1210](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/cryptic_buff_templates.lua#L1154-L1210)
- [scripts/extension_systems/behavior/nodes/actions/bt_shoot_action.lua — L716-L723](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/behavior/nodes/actions/bt_shoot_action.lua#L716-L723)
- [scripts/settings/breed/breed_actions/companion/companion_servo_skull_actions.lua — L16-L57](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/breed/breed_actions/companion/companion_servo_skull_actions.lua#L16-L57)
- [scripts/settings/breed/breed_shoot_templates/companion/companion_servo_skull_shoot_templates.lua — L15-L45](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/breed/breed_shoot_templates/companion/companion_servo_skull_shoot_templates.lua#L15-L45)
- [scripts/utilities/companion/companion_servo_skull_ability.lua — L423-L490](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/companion/companion_servo_skull_ability.lua#L423-L490)
- [scripts/settings/ability/archetype_talents/talents/cryptic_talents.lua — L629-L669](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/cryptic_talents.lua#L629-L669)
- [scripts/ui/views/talent_builder_view/layouts/cryptic_tree.lua — L1678-L1712](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/ui/views/talent_builder_view/layouts/cryptic_tree.lua#L1678-L1712)

## Example assumptions and limits

- **How it works**: A Servo-Skull follows you. Double-tap the Tag input to order it to attack a valid enemy, or order it to decode an interactable data terminal.
- **How it works**: The base Servo-Skull bonuses become permanent: its shooting damage increases by 25%, and its shooting cooldown is halved.
- **Example**: Starting with 100 damage per shot and a 3s shooting cooldown, the permanent bonus gives 125 damage per shot and a 1.5s cooldown. When the skull hits an enemy, that enemy takes 15% more damage for 5s and gains 1 Burn stack. Burn reaches at most 8 stacks; at the cap, further hits reset its duration.

- A base shooting cooldown of 3s × 0.5 = 1.5s; damage per shot of 100 × 1.25 = 125. After a shot hits, the target's Damage taken multiplier increases by 0.15 for 5s.
- Consecutive hits on the same enemy refresh its 5s vulnerability and add Burn stacks one at a time up to 8. Further hits reset the Burn duration.
- A shooting order requires a living skull, a living target and a skull state that accepts orders. An unprovoked Daemonhost does not accept this attack order.
- The extra 15% Damage taken effect is triggered only by Servo-Skull hits. It lasts 5s, has at most 1 stack per target and restarts its timer on a hit.
- The talent value 0.5 is a shooting cooldown multiplier, so it halves cooldown. It is not a damage increase.

Mechanisms reuse the fixed-version evidence, with local Build 25606770 English text corresponding to 1.13.1. Actual presentation and behavior remain unobserved in game. Missing details are supplementary explanations.

<a id="original-english-template-and-reconstruction"></a>

## Original English template and reconstruction

Steam Build `25606770`; `content/localization/ui`, resource hash `63564edcb7c3c5ee`; language `en` (code `0`).

- Name key `loc_talent_cryptic_servo_skull_improved`, hash `a3e27be3`, entry 10576: **Artificer Servo-Skull**.
- Description key `loc_talent_cryptic_servo_skull_improved_clarified_desc`, hash `4bb85179`, entry 4920.

Full raw template:

~~~text
You are accompanied by a Servo-Skull that you can order by Double Tapping your Tag input. You can order it to Shoot at nearby Enemies. You can also order it to complete a data interrogation.

The Activated bonuses from the Servo-Skull Blitz base ability are now permanent.
~~~

| Placeholder | Value | Formatting |
|---|---|---|
| None in this description | No substitutions | The raw English template is already complete |

The minimally read display map is `cryptic_talents.lua` L629-L669. It configures `damage_taken` as a percentage with + prefix, `burn_stacks` as a number and `debuff_duration` as a number. Those values (0.15 → +15%, 8 and 5) are confirmed in the existing evidence, but none of these placeholders occurs in this English template; they are not inserted into its reconstruction.

Static reconstruction; not an observed game screen:

~~~text
You are accompanied by a Servo-Skull that you can order by Double Tapping your Tag input. You can order it to Shoot at nearby Enemies. You can also order it to complete a data interrogation.

The Activated bonuses from the Servo-Skull Blitz base ability are now permanent.
~~~

## English comparison

The permanent companion, double-tap Tag orders, shooting, data interrogation and permanent base Blitz bonuses agree with the existing evidence. The description does not list the 25% damage bonus, halved cooldown, 15%/5s vulnerability, Burn stacking or target restrictions. Those are supplementary details, rather than explicit English contradictions.

## Icon source

[Original image](https://gameslantern.com/storage/sites/darktide/exporter/talents/cryptic/tactical/cryptic_servo_skull_improved.webp) | [Media-Assets Issue](https://github.com/SyuanTsai/Media-Assets/issues/13#issuecomment-5935585681) | [Existing attachment](https://github.com/user-attachments/assets/0efafa0a-aad0-4bb8-869f-133db37cf152). The icon identifies the talent; it is not mechanism evidence.
