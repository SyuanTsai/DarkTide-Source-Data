# Alley Rat: source evidence

[繁體中文](../broker_passive_longer_dodges.md) | [Player description](README.md#broker_passive_longer_dodges) | [Technical index](SOURCE_INDEX.md) | [English comparison](LOCALIZATION_COMPARISON.md#broker_passive_longer_dodges)

Release 1.13.1; fixed SHA `7e662fcda16219d775b84af50322be2e9cd9d62e`. Talent `broker_passive_longer_dodges`; name key `loc_talent_broker_passive_longer_dodges`; description key `loc_talent_broker_passive_longer_dodges_desc`. Node `node_f6f53560-cd00-4602-9903-4961484ade18`; category Keystone; one point. Mechanisms and examples reuse verified source evidence; no in-game test was performed.

## Source-confirmed behavior and static derivation

- `talent_settings` sets `dodge_distance_modifier = 0.5`. The buff template assigns this to `stat_buffs.dodge_distance_modifier`; `buff_settings` classifies the stat as an `additive_multiplier`. It adds 0.5 to the base multiplier of 1 rather than multiplying the distance directly by 0.5.
- At Dodge start, the distance formula is `base_distance × weapon_distance_scale × buff_distance_modifier × diminishing_return_factor × sticky_factor`. The Broker archetype's base distance is 2.5 m. With no weapon override, diminishing returns, or sticky modifier, the result is 2.5 × 1 × 1.5 × 1 × 1 = 3.75 m.

## Fixed source evidence

- [scripts/settings/talent/talent_settings_broker.lua — L263-L265](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/talent/talent_settings_broker.lua#L263-L265)
- [scripts/settings/ability/archetype_talents/talents/broker_talents.lua — L1104-L1125](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/broker_talents.lua#L1104-L1125)
- [scripts/settings/buff/archetype_buff_templates/broker_buff_templates.lua — L1121-L1126](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/broker_buff_templates.lua#L1121-L1126)
- [scripts/settings/buff/buff_settings.lua — L799-L804](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/buff_settings.lua#L799-L804)
- [scripts/extension_systems/character_state_machine/character_states/player_character_state_dodging.lua — L114-L150](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/character_state_machine/character_states/player_character_state_dodging.lua#L114-L150)
- [scripts/extension_systems/character_state_machine/character_states/player_character_state_dodging.lua — L196-L217](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/character_state_machine/character_states/player_character_state_dodging.lua#L196-L217)
- [scripts/settings/dodge/archetype_dodge_templates.lua — L213-L220](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/dodge/archetype_dodge_templates.lua#L213-L220)
- [scripts/settings/ability/archetype_talents/talents/broker_talents.lua — L1104-L1126](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/broker_talents.lua#L1104-L1126)
- [scripts/ui/views/talent_builder_view/layouts/broker_tree.lua — L2140-L2167](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/ui/views/talent_builder_view/layouts/broker_tree.lua#L2140-L2167)

## Example assumptions and limits

- **Distance bonus**: Dodge Distance increases by 50%.
- **Distance example**: using the archetype's base distance of 2.5 metres, without weapon modifiers or consecutive-Dodge diminishing returns, the result is 2.5 × 1.5 = 3.75 metres.
- **Actual distance**: the weapon's Dodge settings, consecutive-Dodge diminishing returns, and attack state still affect the final distance travelled.

**Distance examples**: 2.5 m × (1 + 0.50) = 3.75 m. With a consecutive-Dodge diminishing-return factor of 0.8, it is 2.5 × 1.5 × 0.8 = 3.0 m. The 3.75 m result assumes Broker base distance and no weapon override, consecutive-Dodge diminishing returns, or sticky modifier; actual distance includes these factors. This talent increases the distance multiplier, not the Dodge Speed multiplier, consecutive-Dodge allowance, or Dodge-check duration. Mechanisms reuse the fixed-version evidence, with local Build 25606770 English text corresponding to 1.13.1. Actual presentation and behavior remain unobserved in game. Missing details are supplementary explanations.

<a id="original-english-template-and-reconstruction"></a>

## Original English template and reconstruction

Steam Build `25606770`; `content/localization/ui`, resource hash `63564edcb7c3c5ee`; language `en` (code `0`).

- Name key `loc_talent_broker_passive_longer_dodges`, hash `f8484bf1`, entry 16129: **Alley Rat**.
- Description key `loc_talent_broker_passive_longer_dodges_desc`, hash `22b08fe3`, entry 2258.

Full raw template:

~~~text
{dodge_distance_modifier:%s} Dodge Distance.
~~~

| Placeholder | Value | Formatting |
|---|---|---|
| `{dodge_distance_modifier:%s}` | `broker_passive_longer_dodges.stat_buffs.dodge_distance_modifier = 0.5` → `+50%` | `percentage`; prefix `+` |

The existing display mapping at `broker_talents.lua` L1108-L1121 reads the buff's `dodge_distance_modifier` as a percentage with a `+` prefix. The verified value 0.5 is reused.

Static reconstruction; not an observed game screen:

~~~text
+50% Dodge Distance.
~~~

## English comparison

The English's +50% Dodge Distance names the correct stat and matches its addition to the base distance multiplier. It leaves the full distance formula and the unchanged speed, Dodge allowance, and checking duration unspecified. Those details and the original examples are supplements.

## Icon source

[Original image](https://gameslantern.com/storage/sites/darktide/exporter/talents/broker/keystone_modifier/broker_passive_longer_dodges.webp) | [Media-Assets Issue](https://github.com/SyuanTsai/Media-Assets/issues/12#issuecomment-5933978534) | [Existing attachment](https://github.com/user-attachments/assets/8f760271-d6e2-4a80-88ef-01c7007941dc). The icon identifies the talent; it is not mechanism evidence.
