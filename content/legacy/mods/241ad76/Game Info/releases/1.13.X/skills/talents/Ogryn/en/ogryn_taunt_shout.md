# Loyal Protector: source evidence

[繁體中文](../ogryn_taunt_shout.md) | [Player description](README.md#ogryn_taunt_shout) | [Technical index](SOURCE_INDEX.md) | [English comparison](LOCALIZATION_COMPARISON.md#ogryn_taunt_shout)

Release 1.13.1; fixed SHA `7e662fcda16219d775b84af50322be2e9cd9d62e`. Talent `ogryn_taunt_shout`; name key `loc_ability_ogryn_taunt_shout`; description key `loc_ability_ogryn_taunt_shout_new_desc`. Node `node_1642abd3-b5d6-4332-83d0-aec599fd3dca`; category Combat ability; one point. Mechanisms and examples reuse verified source evidence; no in-game test was performed.

## Source-confirmed behavior and static derivation

- The `ogryn_taunt_shout` action uses radius 12m. Eligible shout targets receive `taunted` and a forced light Stagger. The enemy buff has duration 15s and `unique_buff_id = taunted`.
- After activation, `ogryn_repeat_taunt` pulses at 3s and pulses again in its 6s `stop_func`. Readding the same unique buff makes `buff_extension_base` remove the old instance before adding a new one, resetting the 15s timer.
- The unused `ogryn_taunt_radius_increase` is not counted as an equipped range bonus; this example uses the actual 12m. Enemy exclusions follow the shout-target table.

## Fixed source evidence

- [scripts/settings/ability/player_abilities/abilities/ogryn_abilities.lua — L111-L127](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/player_abilities/abilities/ogryn_abilities.lua#L111-L127)
- [scripts/settings/ability/ability_templates/ogryn_taunt_shout.lua — L1-L83](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/ability_templates/ogryn_taunt_shout.lua#L1-L83)
- [scripts/settings/ability/archetype_talents/talents/ogryn_talents.lua — L73-L115](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/ogryn_talents.lua#L73-L115)
- [scripts/settings/buff/archetype_buff_templates/ogryn_buff_templates.lua — L415-L437](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/ogryn_buff_templates.lua#L415-L437)
- [scripts/settings/buff/archetype_buff_templates/ogryn_buff_templates.lua — L439-L470](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/ogryn_buff_templates.lua#L439-L470)
- [scripts/settings/buff/weapon_buff_templates.lua — L1174-L1182](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/weapon_buff_templates.lua#L1174-L1182)
- [scripts/extension_systems/buff/buff_extension_base.lua — L529-L557](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/buff/buff_extension_base.lua#L529-L557)
- [scripts/settings/ability/shout_target_templates.lua — L67-L86](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/shout_target_templates.lua#L67-L86)
- [scripts/extension_systems/ability/utilities/shout_ability.lua — L59-L161](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/ability/utilities/shout_ability.lua#L59-L161)
- [scripts/extension_systems/buff/buff_extension_base.lua — L529-L557](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/buff/buff_extension_base.lua#L529-L557)
- [scripts/settings/ability/archetype_talents/talents/ogryn_talents.lua — L73-L114](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/ogryn_talents.lua#L73-L114)
- [scripts/ui/views/talent_builder_view/layouts/ogryn_tree.lua — L1155-L1183](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/ui/views/talent_builder_view/layouts/ogryn_tree.lua#L1155-L1183)

## Example assumptions and limits

- **Taunt effect**: Taunt enemies within 12m, making them prioritize attacking you for 15s. The initial cast also Staggers enemies; excluded targets such as Daemonhosts are unaffected.

- **Repeated casts**: At 3s and 6s, emit another taunt from your position at that time. These repeats do not Stagger. Affecting the same enemy again resets its 15s duration.

- **Timing example**: An enemy within range at 0s, 3s and 6s can remain taunted until 6 + 15 = 21s after the initial cast. Base ability cooldown is 50s, with one charge.

The radius queries only eligible enemies; some special enemies are excluded by target settings or do not accept taunt. Repeat timing follows game updates. The English phrase “attack only you” is stronger than the confirmed prioritization statement; complete targeting behavior is not resolved by these records and has not been tested in game. This brief limit does not expand the translation into an AI behavior trace. English and code evidence both correspond to 1.13.1.

<a id="original-english-template-and-reconstruction"></a>

## Original English template and reconstruction

Steam Build `25606770`; `content/localization/ui`, resource hash `63564edcb7c3c5ee`; language `en` (code `0`).

- Name key `loc_ability_ogryn_taunt_shout`, hash `58a5830b`, entry 5754: **Loyal Protector**.
- Description key `loc_ability_ogryn_taunt_shout_new_desc`, hash `b6bbba98`, entry 11793. The [Writer] suffix is resource metadata.

Full raw template:

~~~text
Taunt Enemies within {radius:%s}m, making them attack only you for {duration:%s}s. The effect repeats after {first_pulse:%s}s, and after {second_pulse:%s}s.

Base Cooldown: {cooldown:%s}s
~~~

| Placeholder | Value | Formatting |
|---|---|---|
| radius | Verified shout radius 12 | Number → 12; template supplies m |
| duration | Verified taunted duration 15 | Number → 15; template supplies s |
| first_pulse | Verified first repeat time 3 | Number → 3; template supplies s |
| second_pulse | Verified second repeat time 6 | Number → 6; template supplies s |
| cooldown | Verified base ability cooldown 50 | Number → 50; template supplies s |

Static reconstruction; not an observed game screen:

~~~text
Taunt Enemies within 12m, making them attack only you for 15s. The effect repeats after 3s, and after 6s.

Base Cooldown: 50s
~~~

## English comparison

The independently read English agrees with radius 12m, duration 15s, repeat times 3/6s and base cooldown 50s. Its absolute “attack only you” guarantee is not fully established by the available targeting evidence, so the translated player description retains confirmed prioritization. Initial-only Stagger, exclusions, duration refresh, current pulse positions, one-charge capacity and the 21s example supplement the text. No explicit English contradiction is established.

## Icon source

[Original image](https://gameslantern.com/storage/sites/darktide/exporter/talents/ogryn/ability/ogryn_taunt_shout.webp) | [Media-Assets Issue](https://github.com/SyuanTsai/Media-Assets/issues/10#issuecomment-5931383354) | [Existing attachment](https://github.com/user-attachments/assets/01a8e7be-dff3-4d81-a426-5e38ae352606). The icon identifies the talent; it is not mechanism evidence.
