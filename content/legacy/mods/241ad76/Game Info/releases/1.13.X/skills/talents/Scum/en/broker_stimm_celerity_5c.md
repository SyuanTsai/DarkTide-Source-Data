# Fervor: source evidence

[繁體中文](../broker_stimm_celerity_5c.md) | [Player description](README.md#broker_stimm_celerity_5c) | [Technical index](SOURCE_INDEX.md) | [English comparison](LOCALIZATION_COMPARISON.md#broker_stimm_celerity_5c)

Release 1.13.1; fixed SHA `7e662fcda16219d775b84af50322be2e9cd9d62e`. Talent `broker_stimm_celerity_5c`; name key `loc_talent_broker_stimm_celerity_c`; description key `loc_talent_stat_movement_speed / loc_talent_stat_dodge_distance_modifier / loc_talent_stat_dodge_speed_multiplier / loc_talent_stat_dodge_cooldown_reset_modifier`. Node `node_7cb667f6-6558-44b4-b47d-67abf6bdef36`; category Stimm recipe; 5 points. Mechanisms and examples reuse verified source evidence; no in-game test was performed.

## Source-confirmed behavior and static derivation

- This recipe has `cost = max_points`, so it is bought once rather than repeatedly purchased as multiple ranks. Selected prerequisite recipes remain active together; each node's effects add or multiply according to its stat type.
- `movement_speed` and `dodge_distance_modifier` each add 0.1; `dodge_speed_multiplier` is multiplicative at 1.1. `dodge_cooldown_reset_modifier = −0.1` lowers the base 1 to 0.9 and affects `consecutive_dodges_cooldown`. Total Dodge duration is derived from distance, speed curves and fixed steps; do not directly claim original duration ÷ 1.1.

## Fixed source evidence

- [scripts/settings/buff/archetype_buff_templates/broker_buff_templates.lua — L4091-L4108](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/broker_buff_templates.lua#L4091-L4108)
- [scripts/settings/buff/archetype_buff_templates/broker_buff_templates.lua — L4128-L4168](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/broker_buff_templates.lua#L4128-L4168)
- [scripts/settings/buff/archetype_buff_templates/broker_buff_templates.lua — L4210-L4248](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/broker_buff_templates.lua#L4210-L4248)
- [scripts/extension_systems/buff/buffs/buff.lua — L689-L727](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/buff/buffs/buff.lua#L689-L727)
- [scripts/extension_systems/character_state_machine/character_states/player_character_state_dodging.lua — L114-L145](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/character_state_machine/character_states/player_character_state_dodging.lua#L114-L145)
- [scripts/extension_systems/character_state_machine/character_states/player_character_state_dodging.lua — L255-L273](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/character_state_machine/character_states/player_character_state_dodging.lua#L255-L273)
- [scripts/settings/buff/buff_settings.lua — L793-L806](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/buff_settings.lua#L793-L806)
- [scripts/settings/talent/talent_settings_broker.lua — L558-L580](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/talent/talent_settings_broker.lua#L558-L580)
- [scripts/ui/views/broker_stimm_builder_view/layouts/broker_stimm_tree.lua — L540-L563](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/ui/views/broker_stimm_builder_view/layouts/broker_stimm_tree.lua#L540-L563)

## Example assumptions and limits

- **Recipe cost**: 5 points. Once selected, it takes effect when using the dedicated Stimm, with a basic duration of 15 seconds.

- **Movement and Dodge**: Gain 10% Movement Speed and Dodge Distance, and multiply Dodge Speed by 1.1.

- **Movement example**: With no other bonuses, movement at 4m/s becomes 4 × 1.1 = 4.4m/s, and Dodge Distance 2.5m becomes 2.5 × 1.1 = 2.75m.

- **Effective-dodge recovery**: After consecutive dodging stops, the wait to recover effective dodges is 10% shorter. A 1-second wait becomes 1 × (1 − 10%) = 0.9 seconds. This does not change the basic interval between two dodges.

`syringe_broker_buff` reads and applies the same user's recipes together. Field sharing uses the provider's recipes, with externally controlled duration determined separately by the field settings. Mechanisms reuse the fixed-version evidence, with local Build 25606770 English text corresponding to 1.13.1. Actual presentation and behavior remain unobserved in game. Missing details are supplementary explanations.

<a id="original-english-template-and-reconstruction"></a>

## Original English template and reconstruction

Steam Build `25606770`; `content/localization/ui`, resource hash `63564edcb7c3c5ee`; language `en` (code `0`).

- Name key `loc_talent_broker_stimm_celerity_c`, hash `9b5b6688`, entry 10024: **Fervor**.
- Description key `loc_talent_stat_movement_speed`, hash `090b8be4`, entry 563; key supplied by the accepted source mapping, paired by hash.
- Description key `loc_talent_stat_dodge_distance_modifier`, hash `ac38ced9`, entry 11086; key supplied by the accepted source mapping, paired by hash.
- Description key `loc_talent_stat_dodge_speed_multiplier`, hash `f5994101`, entry 15955; key supplied by the accepted source mapping, paired by hash.
- Description key `loc_talent_stat_dodge_cooldown_reset_modifier`, hash `1863559c`, entry 1592; key supplied by the accepted source mapping, paired by hash.

Full raw template:

~~~text
{movement_speed:%s} Movement Speed.
{dodge_distance_modifier:%s} Dodge Distance.
{dodge_speed_multiplier:%s} Dodge Speed.
{dodge_cooldown_reset_modifier:%s} Dodge Recovery Speed.
~~~

| Placeholder | Value | Formatting |
|---|---|---|
| Name `tier` | `nil` → empty string | Raw name template: `Fervor {tier:%s}`; no Roman numeral is appended |
| `movement_speed` | `0.1` | Percentage with `+`: `+10%` |
| `dodge_distance_modifier` | `0.1` | Percentage with `+`: `+10%` |
| `dodge_speed_multiplier` | `1.1` | Custom `(value − 1) × 100`, with `+`: `+10%` |
| `dodge_cooldown_reset_modifier` | `−0.1` | Custom `abs(value × 100)`, with `+`: `+10%` |

The component keys are paired by their accepted hashes; these JSONL entries omit key fields. The display mappings at `talent_settings_broker.lua` L558-L580 supply the values and custom transforms. Reuse the [shared name/stat generator L12-L53](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/talent/talent_settings_broker.lua#L12-L53) and accepted formatting. Apply custom transforms once. The title trims the empty-tier trailing space; components below preserve definition order without claiming observed spacing or layout.

Static reconstruction; not an observed game screen:

~~~text
+10% Movement Speed.
+10% Dodge Distance.
+10% Dodge Speed.
+10% Dodge Recovery Speed.
~~~

## English comparison

Movement Speed, Dodge Distance and Dodge Speed agree with the accepted 10% modifiers. "Dodge Recovery Speed" is an abbreviated label: the verified effect shortens the effective-dodge recovery wait by 10%, rather than modifying the basic interval between dodges. Whether "Speed" intends a literal recovery-rate percentage or the displayed wait modifier cannot be confirmed from this label alone; no clear contradiction is recorded. Cost, shared lifetime, stacking and total Dodge-duration limitations supplement the description.

## Icon source

[Original image](https://gameslantern.com/storage/sites/darktide/exporter/talents/broker/broker_stimm/broker_stimm_celerity_5c.webp) | [Media-Assets Issue](https://github.com/SyuanTsai/Media-Assets/issues/12#issuecomment-5934604124) | [Existing attachment](https://github.com/user-attachments/assets/12ddbfdc-82bd-4ece-ba73-e6550451e5a4). The icon identifies the talent; it is not mechanism evidence.
