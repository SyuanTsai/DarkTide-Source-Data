# Salvation Doctrine: source evidence

[繁體中文](../cryptic_revive_speed_and_dr.md) | [Player description](README.md#cryptic_revive_speed_and_dr) | [Technical index](SOURCE_INDEX.md) | [English comparison](LOCALIZATION_COMPARISON.md#cryptic_revive_speed_and_dr)

Release 1.13.1; fixed SHA `7e662fcda16219d775b84af50322be2e9cd9d62e`. Talent `cryptic_revive_speed_and_dr`; name key `loc_talent_cryptic_revive_speed_and_dr`; description key `loc_talent_cryptic_revive_speed_and_dr_desc`. Node `node_f274c4fb-a29e-497a-a783-08f5ee20f839`; category Talent; one point. Mechanisms and examples reuse verified source evidence; no in-game test was performed.

## Source-confirmed behavior and static derivation

- `_passive_revive_conditional` checks the four types in `valid_help_interactions` and `interactor:is_interacting` to activate damage reduction.
- `revive_speed_modifier = 0.25` is always supplied; those same four interaction types map to that stat.

## Fixed source evidence

- [scripts/settings/buff/archetype_buff_templates/cryptic_buff_templates.lua — L3007-L3024](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/cryptic_buff_templates.lua#L3007-L3024)
- [scripts/settings/interaction/interaction_settings.lua — L17-L26](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/interaction/interaction_settings.lua#L17-L26)
- [scripts/extension_systems/interaction/interactor_extension.lua — L134-L164](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/interaction/interactor_extension.lua#L134-L164)
- [scripts/utilities/attack/damage_calculation.lua — L584-L611](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/attack/damage_calculation.lua#L584-L611)
- [scripts/settings/talent/talent_settings_cryptic.lua — L531-L534](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/talent/talent_settings_cryptic.lua#L531-L534)
- [scripts/settings/buff/archetype_buff_templates/cryptic_buff_templates.lua — L3026-L3042](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/cryptic_buff_templates.lua#L3026-L3042)
- [scripts/settings/ability/archetype_talents/talents/cryptic_talents.lua — L2243-L2266](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/cryptic_talents.lua#L2243-L2266)
- [scripts/ui/views/talent_builder_view/layouts/cryptic_tree.lua — L1962-L1986](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/ui/views/talent_builder_view/layouts/cryptic_tree.lua#L1962-L1986)

## Example assumptions and limits

- **Effect**: While reviving a downed ally, pulling up a hanging ally, removing a net or rescuing a captured ally, take 25% less damage and perform the assistance action 25% faster.
- **Time example**: An assistance action that originally takes 4 seconds becomes `4 ÷ 1.25 = 3.2` seconds with no other speed bonuses.
- **Damage-reduction example**: During assistance, an original 100 damage becomes `100 × 0.75 = 75`. Once you stop assisting, this damage reduction ends.

The time example assumes no other speed bonuses; the damage example isolates this damage-taken multiplier. Damage reduction applies only while the qualifying assistance interaction is active.

Mechanisms reuse the fixed-version evidence, with local Build 25606770 English text corresponding to 1.13.1. Actual presentation and behavior remain unobserved in game. Missing details are supplementary explanations.

<a id="original-english-template-and-reconstruction"></a>

## Original English template and reconstruction

Steam Build `25606770`; `content/localization/ui`, resource hash `63564edcb7c3c5ee`; language `en` (code `0`).

- Name key `loc_talent_cryptic_revive_speed_and_dr`, hash `06f7094a`, entry 426: **Salvation Doctrine**.
- Description key `loc_talent_cryptic_revive_speed_and_dr_desc`, hash `16a4ff53`, entry 1473.

Full raw template:

~~~text
Gain {damage_reduction:%s} Damage Resistance while Reviving an Ally. Gain {revive_speed:%s} Revive Speed.
~~~

| Placeholder | Value | Formatting |
|---|---|---|
| `damage_reduction` | `0.75` → `25` → `+25%` | `round(100 × (1 − value))`, percentage with `+` prefix. |
| `revive_speed` | `0.25` → `+25%` | Percentage with `+` prefix. |

Display mappings are `cryptic_talents.lua` L2251-L2265. The previously checked percentage formatter applies `value_manipulation` directly before adding `%`, without another ×100. Values reuse the verified settings above.

Static reconstruction; not an observed game screen:

~~~text
Gain +25% Damage Resistance while Reviving an Ally. Gain +25% Revive Speed.
~~~

## English comparison

The English correctly states +25% Damage Resistance while reviving and +25% Revive Speed. It names a supported interaction and does not explicitly exclude other assistance types. Pulling up, removing nets and rescuing, the interaction-state condition and the speed/damage examples are supplements. No explicit English contradiction was found.

## Icon source

[Original image](https://gameslantern.com/storage/sites/darktide/exporter/talents/cryptic/default/cryptic_revive_speed_and_dr.webp) | [Media-Assets Issue](https://github.com/SyuanTsai/Media-Assets/issues/13#issuecomment-5935653628) | [Existing attachment](https://github.com/user-attachments/assets/a86f113d-1a3e-4fc6-b1d1-24fe727b118d). The icon identifies the talent; it is not mechanism evidence.
