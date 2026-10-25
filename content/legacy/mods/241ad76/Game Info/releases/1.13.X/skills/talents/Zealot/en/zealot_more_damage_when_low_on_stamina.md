# Desperation: source evidence

[繁體中文](../zealot_more_damage_when_low_on_stamina.md) | [Player description](README.md#zealot_more_damage_when_low_on_stamina) | [Technical index](SOURCE_INDEX.md) | [English comparison](LOCALIZATION_COMPARISON.md#zealot_more_damage_when_low_on_stamina)

Release 1.13.1; fixed SHA `7e662fcda16219d775b84af50322be2e9cd9d62e`. Talent `zealot_more_damage_when_low_on_stamina`; name key `loc_talent_zealot_increased_damage_on_low_stamina`; description key `loc_talent_zealot_damage_based_on_stamina_desc`. Node `node_e6beb408-b6d9-4b1b-b30c-91e9a92d0590`; category Skill; one point. Mechanisms and examples reuse verified source evidence; no in-game test was performed.

## Source-confirmed behavior and static derivation

- The current talent loads `zealot_more_power_when_low_on_stamina`, with `lerp_t = 1 − current / max` and `melee_damage` ranging from 0 to 0.2.
- Although the identifier remains `zealot_melee_damage_on_stamina_depleted`, this does not mean it loads the separate 5-second proc template. Do not add that old 5-second effect to the current mechanism.

## Fixed source evidence

- [scripts/settings/buff/archetype_buff_templates/zealot_buff_templates.lua — L4378-L4434](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/zealot_buff_templates.lua#L4378-L4434)
- [scripts/settings/talent/talent_settings_zealot.lua — L226-L229](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/talent/talent_settings_zealot.lua#L226-L229)
- [scripts/utilities/attack/damage_calculation.lua — L289-L303](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/attack/damage_calculation.lua#L289-L303)
- [scripts/settings/ability/archetype_talents/talents/zealot_talents.lua — L1224-L1255](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/zealot_talents.lua#L1224-L1255)
- [scripts/ui/views/talent_builder_view/layouts/zealot_tree.lua — L1672-L1697](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/ui/views/talent_builder_view/layouts/zealot_tree.lua#L1672-L1697)

## Example assumptions and limits

- **Operation**: Melee damage bonus = 20% × the proportion of Stamina spent. Full Stamina gives no bonus, half Stamina gives +10%, and empty Stamina gives +20%. As Stamina recovers, the bonus decreases.
- **Damage example**: Maximum Stamina 6 with 2 remaining means 4 ÷ 6 spent. The bonus is 20% × 4 ÷ 6 ≈ 13.33%, so base damage 100 becomes about 113.33. Other same-stage Melee damage bonuses are added first.

- The accepted Chinese comparison at hash `3a2192a6` finds no explicit effect-direction contradiction. Omitted formulas, caps and finer restrictions remain supplements.
- Actual game behavior and presentation remain unobserved.

Mechanisms reuse the fixed-version evidence, with local Build 25606770 English text corresponding to 1.13.1. Actual presentation and behavior remain unobserved in game. Missing details are supplementary explanations.

<a id="original-english-template-and-reconstruction"></a>

## Original English template and reconstruction

Steam Build `25606770`; `content/localization/ui`, resource hash `63564edcb7c3c5ee`; language `en` (code `0`).

- Name key `loc_talent_zealot_increased_damage_on_low_stamina`, hash `00b548f8`, entry 47: **Desperation**.
- Description key `loc_talent_zealot_damage_based_on_stamina_desc`, hash `3a2192a6`, entry 3764.

Full raw template:

~~~text
Up to {damage:%s} Melee Damage based on missing Stamina.
~~~

| Placeholder | Value | Formatting |
|---|---|---|
| `damage` | 0.2 → +20% | `percentage`, prefix `+`; `talent_settings.zealot_more_damage_when_low_on_stamina.melee_damage` |

The minimal display mapping at `zealot_talents.lua` L1224-L1255 supplies the accepted maximum Melee damage bonus. The current English template uses only `damage`; its unused `duration` mapping to the old template does not add a timer to the selected effect.

Static reconstruction; not an observed game screen:

~~~text
Up to +20% Melee Damage based on missing Stamina.
~~~

## English comparison

The English gives up to +20% Melee Damage based on missing Stamina, agreeing with the current continuous proportion-based effect. It does not state a 5-second duration. The exact interpolation, full/half/empty cases, decrease during recovery, same-stage addition and distinction from the old proc identifier supplement the description.

## Icon source

[Original image](https://gameslantern.com/storage/sites/darktide/exporter/talents/zealot/default/zealot_more_damage_when_low_on_stamina.webp) | [Media-Assets Issue](https://github.com/SyuanTsai/Media-Assets/issues/8#issuecomment-5929296872) | [Existing attachment](https://github.com/user-attachments/assets/dbe8719f-76fb-444c-a79d-2bf116b628fb). The icon identifies the talent; it is not mechanism evidence.
