# Channelled Aggression: source evidence

[繁體中文](../broker_ability_punk_rage_sub_1.md) | [Player description](README.md#broker_ability_punk_rage_sub_1) | [Technical index](SOURCE_INDEX.md) | [English comparison](LOCALIZATION_COMPARISON.md#broker_ability_punk_rage_sub_1)

Release 1.13.1; fixed SHA `7e662fcda16219d775b84af50322be2e9cd9d62e`. Talent `broker_ability_punk_rage_sub_1`; name key `loc_talent_broker_ability_punk_rage_sub_1`; description key `loc_talent_broker_ability_punk_rage_sub_1_desc_02`. Node `node_4a01428d-790a-49d5-adbb-e910b4272cbe`; category Ability; one point. Mechanisms and examples reuse verified source evidence; no in-game test was performed.

## Source-confirmed behavior and static derivation

- Selecting the talent enables `broker_rage_rending`. The `conditional_stat_buffs_funcs` of `broker_punk_rage_stance` toggle `melee_heavy_rending_multiplier = 0.25` solely by that rule. BuffSettings lists it as additive.
- Damage calculation reads this modifier only for a Melee attack whose `damage_profile.melee_attack_strength` is `heavy`, then includes it in the Rending multiplier. Subsequent armour-specific rules convert Rending into a Damage modifier capped at 1.
- `talent_settings` contains `sub_1_rending_threshold_t = 0.5`, also mapped as `ability_progress` in talent `format_values`. In the fixed source, runtime enabling checks talent selection rather than applying this 0.5 threshold to the effect's start time. The effect is therefore not described as limited to the first half of rage.

## Fixed source evidence

- [scripts/settings/ability/archetype_talents/talents/broker_talents.lua — L331-L370](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/broker_talents.lua#L331-L370)
- [scripts/settings/talent/talent_settings_broker.lua — L142-L168](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/talent/talent_settings_broker.lua#L142-L168)
- [scripts/settings/buff/archetype_buff_templates/broker_buff_templates.lua — L559-L606](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/broker_buff_templates.lua#L559-L606)
- [scripts/settings/buff/archetype_buff_templates/broker_buff_templates.lua — L615-L646](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/broker_buff_templates.lua#L615-L646)
- [scripts/settings/buff/buff_settings.lua — L875-L878](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/buff_settings.lua#L875-L878)
- [scripts/utilities/attack/damage_calculation.lua — L629-L660](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/attack/damage_calculation.lua#L629-L660)
- [scripts/utilities/attack/damage_calculation.lua — L69-L87](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/attack/damage_calculation.lua#L69-L87)
- [scripts/settings/ability/archetype_talents/talents/broker_talents.lua — L331-L371](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/broker_talents.lua#L331-L371)
- [scripts/ui/views/talent_builder_view/layouts/broker_tree.lua — L1926-L1948](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/ui/views/talent_builder_view/layouts/broker_tree.lua#L1926-L1948)

## Example assumptions and limits

- **Eligible attacks:** while rage is active, Melee Heavy Attacks gain +25% Rending.

- **Reading the effect:** Rending affects the armour-penetration calculation. It does not multiply Damage by 1.25 and does not apply to Light or Ranged Attacks.

- **Armour example:** assume an original armour Damage multiplier of 0.5 and armour that fully accepts this Rending. The multiplier becomes 0.5 + 0.25 = 0.75; the same 100 pre-armour Damage changes from 50 to 75. Different armour and existing weapon penetration change the actual increase.

The node adds a 0.25 Rending term to eligible Melee Heavy Attacks, not an unconditional original-Damage ×1.25. Final Damage depends on armour and other Rending, Power and Damage modifiers. The 0.5 progress setting is not a runtime time threshold in the accepted evidence. Mechanisms reuse the fixed-version evidence, with local Build 25606770 English text corresponding to 1.13.1. Actual presentation and behavior remain unobserved in game. Missing details are supplementary explanations.

<a id="original-english-template-and-reconstruction"></a>

## Original English template and reconstruction

Steam Build `25606770`; `content/localization/ui`, resource hash `63564edcb7c3c5ee`; language `en` (code `0`).

- Name key `loc_talent_broker_ability_punk_rage_sub_1`, hash `f1fa0859`, entry 15719: **Channelled Aggression**.
- Description key `loc_talent_broker_ability_punk_rage_sub_1_desc_02`, hash `472cc8e5`, entry 4622.

Full raw template:

~~~text
Heavy Attacks while {punk_rage:%s} is active have {rending:%s} Rending.
~~~

| Placeholder | Value | Formatting |
|---|---|---|
| `punk_rage` | `loc_talent_broker_ability_punk_rage` | Localized string → `Rampage!` (hash `b37505a2`, entry 11575) |
| `rending` | `broker_punk_rage_stance.conditional_stat_buffs.melee_heavy_rending_multiplier = 0.25` | Percentage with explicit plus prefix → `+25%` |

Display mapping: [broker_talents.lua L335–362](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/broker_talents.lua#L335-L362). Values reuse the accepted evidence. `ability_progress = 0.5` exists in the mapping but is absent from this raw description and does not establish an active time gate.

Static reconstruction; not an observed game screen:

~~~text
Heavy Attacks while Rampage! is active have +25% Rending.
~~~

## English comparison

English states +25% Rending for Heavy Attacks while Rampage! is active, matching the accepted Melee Heavy Attack effect. It does not state a first-half duration gate or equate Rending with Damage. The explicit Melee eligibility, armour-dependent calculation and unused progress setting are supplements.

## Icon source

[Original image](https://gameslantern.com/storage/sites/darktide/exporter/talents/broker/ability_modifier/broker_ability_punk_rage_sub_1.webp) | [Media-Assets Issue](https://github.com/SyuanTsai/Media-Assets/issues/12#issuecomment-5933978534) | [Existing attachment](https://github.com/user-attachments/assets/db7fee2b-9e46-49f1-a0ac-28cd6cea424f). The icon identifies the talent; it is not mechanism evidence.
