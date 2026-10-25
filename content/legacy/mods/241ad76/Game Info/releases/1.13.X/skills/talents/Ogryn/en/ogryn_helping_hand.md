# Loyal Protector: source evidence

[繁體中文](../ogryn_helping_hand.md) | [Base effects](BASE_EFFECTS.md#ogryn_helping_hand) | [Technical index](SOURCE_INDEX.md) | [English comparison](LOCALIZATION_COMPARISON.md#ogryn_helping_hand)

Release 1.13.1; fixed SHA `7e662fcda16219d775b84af50322be2e9cd9d62e`. Base talent `ogryn_helping_hand`; no selectable talent point is spent. Name key `loc_talent_bonebreaker_revive_uninterruptible`; description key `loc_talent_bonebreaker_revive_uninterruptible_desc`. Mechanisms and examples reuse verified source evidence; no in-game test was performed.

## Source-confirmed behavior and static derivation

- `ogryn_passive_revive` checks interaction types `pull_up / remove_net / rescue / revive`, granting both `uninterruptible` and `push_speed_modifier=−0.9`.
- Shared `Push` resolution applies `push_speed_modifier` to incoming push speed. This is the speed at which the character is pushed, not the action speed of pushing an enemy. The old `ogryn_base_passive_revive` +25% revive/assist bonuses are absent from the current base list.

## Fixed source evidence

- [scripts/settings/buff/archetype_buff_templates/ogryn_buff_templates.lua — L997-L1033](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/ogryn_buff_templates.lua#L997-L1033)
- [scripts/extension_systems/character_state_machine/character_states/utilities/push.lua — L61-L78](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/character_state_machine/character_states/utilities/push.lua#L61-L78)
- [scripts/settings/buff/archetype_buff_templates/ogryn_buff_templates.lua — L82-L92](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/ogryn_buff_templates.lua#L82-L92)
- [scripts/settings/ability/archetype_talents/talents/ogryn_talents.lua — L505-L516](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/ogryn_talents.lua#L505-L516)
- [scripts/settings/archetype/archetypes/ogryn_archetype.lua — L50-L74](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/archetype/archetypes/ogryn_archetype.lua#L50-L74)

## Examples and limits

- **Rescue protection**: Gain an uninterruptible effect while reviving a downed ally, pulling up a hanging ally, removing a net or rescuing a captured ally. It ends when the rescue interaction ends.

- **Push example**: While rescuing, incoming push speed falls to 10% of its original value. With other conditions unchanged, speed 10 becomes `10 × (1 − 90%) = 1`. This does not grant damage immunity.

The uninterruptible keyword is not damage immunity or immunity to every special disable. Enemy disables have not been tested individually. Local Build 25606770 corresponds to the fixed 1.13.1 source. Actual presentation and behavior remain unobserved in game.

<a id="original-english-template-and-reconstruction"></a>

## Original English template and reconstruction

Steam Build `25606770`; `content/localization/ui`, resource hash `63564edcb7c3c5ee`; language `en` (code `0`).

- Name key `loc_talent_bonebreaker_revive_uninterruptible`, hash `acede63a`, entry 11129: **Loyal Protector**.
- Description key `loc_talent_bonebreaker_revive_uninterruptible_desc`, hash `bdd83157`, entry 12242.

Full raw template:

~~~text
Being damaged while Reviving or Assisting allies no longer interrupts you.
~~~

| Placeholder | Value | Formatting |
|---|---|---|
| None | Empty format_values | Exported description is literal text |

Only the missing text mapping / display formatting in the cited talent definition, lines 505–516, was read. Accepted mechanisms, values, examples and common formatting were reused. This is the base revive/assist passive ogryn_helping_hand. Its exported name is also Loyal Protector; the separate selectable Combat Ability has its own identifier.

Static reconstruction; not an observed game screen:

~~~text
Being damaged while Reviving or Assisting allies no longer interrupts you.
~~~

## English comparison

The independently read English says damage no longer interrupts reviving or assisting allies. This agrees with the accepted uninterruptible effect during the listed rescue interactions. Incoming push-speed reduction, its calculation, absence of the old revive-speed bonus and limits on damage/disable immunity supplement the text. No explicit English contradiction is established.
