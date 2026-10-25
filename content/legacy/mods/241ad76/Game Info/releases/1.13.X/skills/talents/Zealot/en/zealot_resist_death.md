# Until Death: source evidence

[繁體中文](../zealot_resist_death.md) | [Player description](README.md#zealot_resist_death) | [Technical index](SOURCE_INDEX.md) | [English comparison](LOCALIZATION_COMPARISON.md#zealot_resist_death)

Release 1.13.1; fixed SHA `7e662fcda16219d775b84af50322be2e9cd9d62e`. Talent `zealot_resist_death`; name key `loc_talent_zealot_resist_death`; description key `loc_talent_zealot_resist_death_base_desc`. Node `node_0581bad8-f8c0-4321-a90b-756013fd3981`; category Keystone; one point. Mechanisms and examples reuse verified source evidence; no in-game test was performed.

## Source-confirmed behavior and static derivation

- The current tree attaches the passive Buff `zealot_resist_death`. It listens to `on_damage_taken` with proc chance 1, first checks whether the player already has the `unkillable` keyword, then identifies fatal damage through `params.will_die` or Health already ≤1 with incoming damage >0.
- The proc Buff has `active_duration=8` and `cooldown_duration=120`, and provides `unkillable` while active. The shared `ProcBuff` cooldown check uses activation time + active duration + cooldown duration. Thus the 120 seconds begin after the 8-second effect, not at activation.
- This is a single conditional proc Buff with no stacks. If another Unkillable effect is already active, this talent's fatal-damage check returns early and that damage does not start its cooldown.
- The three class core Keystones share `exclusive_group=keystone`; only one can be selected in the talent tree.

## Fixed source evidence

- [scripts/settings/ability/archetype_talents/talents/zealot_talents.lua — L2821-L2840](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/zealot_talents.lua#L2821-L2840)
- [scripts/settings/buff/archetype_buff_templates/zealot_buff_templates.lua — L3473-L3567](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/zealot_buff_templates.lua#L3473-L3567)
- [scripts/settings/buff/helper_functions/check_proc_functions.lua — L648-L662](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/helper_functions/check_proc_functions.lua#L648-L662)
- [scripts/extension_systems/buff/buffs/proc_buff.lua — L150-L194](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/buff/buffs/proc_buff.lua#L150-L194)
- [scripts/ui/views/talent_builder_view/layouts/zealot_tree.lua — L63-L95](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/ui/views/talent_builder_view/layouts/zealot_tree.lua#L63-L95)
- [scripts/settings/ability/archetype_talents/talents/zealot_talents.lua — L2821-L2840](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/zealot_talents.lua#L2821-L2840)
- [scripts/ui/views/talent_builder_view/layouts/zealot_tree.lua — L63-L95](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/ui/views/talent_builder_view/layouts/zealot_tree.lua#L63-L95)

## Example assumptions and limits

- **Trigger**: Fatal damage preserves your life and grants Unkillable for 8 seconds. You can still take damage; this does not reduce all damage to zero.
- **Cooldown example**: After the 8-second effect ends, a further 120-second cooldown runs. A trigger at second 0 ends at about second 8 and becomes available again at about second 128. Another active Unkillable effect prevents this talent from triggering.

- The fatal condition follows the damage event's `will_die`, or Health already ≤1 while still taking positive damage. It must not be generalized to any low-Health state.
- The total interval of 128 seconds is a static derivation from the two timer fields.
- The accepted Chinese comparison at hash `0da0b898` records fatal-damage triggering, Unkillable and cooldown in both languages; the omitted starting point is supplementary. Actual game presentation and behavior remain unobserved.

Mechanisms reuse the fixed-version evidence, with local Build 25606770 English text corresponding to 1.13.1. Actual presentation and behavior remain unobserved in game. Missing details are supplementary explanations.

<a id="original-english-template-and-reconstruction"></a>

## Original English template and reconstruction

Steam Build `25606770`; `content/localization/ui`, resource hash `63564edcb7c3c5ee`; language `en` (code `0`).

- Name key `loc_talent_zealot_resist_death`, hash `72493f76`, entry 7430: **Until Death**.
- Description key `loc_talent_zealot_resist_death_base_desc`, hash `0da0b898`, entry 895.

Full raw template:

~~~text
Fatal damage instead grants you Unkillable for {active_duration:%s}s. {cooldown_duration:%s}s Cooldown.
~~~

| Placeholder | Value | Formatting |
|---|---|---|
| `active_duration` | 8 | `number`; `talent_settings_2.passive_2.active_duration` |
| `cooldown_duration` | 120 | `number`; corresponding `cooldown_duration` |

The minimal display mapping at `zealot_talents.lua` L2821-L2835 uses the accepted passive settings. The 128-second total is not substituted for the template's 120-second cooldown field.

Static reconstruction; not an observed game screen:

~~~text
Fatal damage instead grants you Unkillable for 8s. 120s Cooldown.
~~~

## English comparison

The English matches the fatal-damage condition and 8 seconds of Unkillable. It states a 120-second cooldown without asserting that it starts at the triggering hit. The accepted post-effect starting point and resulting 128-second total interval are supplements, not an explicit contradiction. Other Unkillable suppression, positive-damage conditions and exclusive Keystone selection are also omitted details.

## Icon source

[Original image](https://gameslantern.com/storage/sites/darktide/exporter/talents/zealot/keystone/zealot_resist_death.webp) | [Media-Assets Issue](https://github.com/SyuanTsai/Media-Assets/issues/8#issuecomment-5929289315) | [Existing attachment](https://github.com/user-attachments/assets/382b6c6a-80b7-4c64-81f9-63d37df43671). The icon identifies the talent; it is not mechanism evidence.
