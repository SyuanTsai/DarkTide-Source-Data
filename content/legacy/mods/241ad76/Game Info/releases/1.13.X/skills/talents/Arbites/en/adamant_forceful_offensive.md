# Targets Acquired: source evidence

[繁體中文](../adamant_forceful_offensive.md) | [Player description](README.md#adamant_forceful_offensive) | [Technical index](SOURCE_INDEX.md) | [English comparison](LOCALIZATION_COMPARISON.md#adamant_forceful_offensive)

Release 1.13.1; fixed SHA `7e662fcda16219d775b84af50322be2e9cd9d62e`. Talent `adamant_forceful_offensive`; node `node_adef8607-f04c-4b80-84a9-70247ea03536`; category Keystone; one point.

## Source-confirmed behavior and static derivation

- At maximum stacks, the Forceful stack update creates the immediate `adamant_forceful_offensive` buff. Leaving maximum stacks removes it and creates an `offensive_duration` variant with a 3s duration.
- Both variants use `attack_speed = 0.10` and `max_hit_mass_attack_modifier = 0.50`. This is a maximum-stack threshold bonus, not a bonus that increases with each stack.

## Fixed source evidence

- [scripts/settings/ability/archetype_talents/talents/adamant_talents.lua — L1626-L1650](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/adamant_talents.lua#L1626-L1650)
- [scripts/settings/talent/talent_settings_adamant.lua — L268-L284](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/talent/talent_settings_adamant.lua#L268-L284)
- [scripts/settings/buff/archetype_buff_templates/adamant_buff_templates.lua — L1310-L1357](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/adamant_buff_templates.lua#L1310-L1357)
- [scripts/settings/buff/archetype_buff_templates/adamant_buff_templates.lua — L1500-L1522](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/adamant_buff_templates.lua#L1500-L1522)
- [scripts/utilities/action/action_handler.lua — L356-L428](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/action/action_handler.lua#L356-L428)
- [scripts/utilities/attack/damage_profile.lua — L36-L62](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/attack/damage_profile.lua#L36-L62)
- [scripts/settings/ability/archetype_talents/talents/adamant_talents.lua — L1626-L1650](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/adamant_talents.lua#L1626-L1650)
- [scripts/ui/views/talent_builder_view/layouts/adamant_tree.lua — L937-L961](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/ui/views/talent_builder_view/layouts/adamant_tree.lua#L937-L961)

## Example assumptions and limits

- **Condition and duration**: At 10 Forceful stacks, gain +10% Attack Speed and +50% Cleave. These bonuses remain for 3s after leaving maximum stacks.

- **Speed and Cleave examples**: With this effect alone, an attack action that normally takes 1s and supports speed scaling takes 1 ÷ 1.1 ≈ 0.91s. A damaging Cleave hit-mass budget of 10 becomes 10 × 1.5 = 15. This does not guarantee hitting 50% more enemies and does not also increase the stagger Cleave budget.

At 10 stacks the bonuses activate; after leaving 10 stacks they can remain for at most another 3s. Cleave target count depends on the weapon, attack and target hit mass through shared calculations. A +50% stat is not a guarantee of a fixed number of extra targets.

The examples isolate this talent. The speed example applies to an action that supports Attack Speed scaling and uses seconds; the Cleave example uses a hit-mass budget. Values and behavior reuse fixed-version evidence; examples are static derivations. Chinese, English and code evidence all refer to 1.13.1. Game execution and the final game UI were not observed. Wording differences are compared with the accepted implementation evidence; omitted details are not automatically translation errors.

<a id="original-english-template-and-reconstruction"></a>

## Original English template and reconstruction

Steam Build `25606770`; `content/localization/ui`, resource hash `63564edcb7c3c5ee`; language `en` (code `0`).

- Name key `loc_talent_adamant_forceful_ranged`, hash `c6a4c517`, entry 12826: **Targets Acquired**.
- Description key `loc_talent_adamant_forceful_melee_alt_desc`, hash `57827aa3`, entry 5683.

Full raw template:

```text
While at Max Stacks, and for {duration:%s}s afterwards, Gain {attack_speed:%s} Attack Speed and {cleave:%s} Cleave.
```

The display maps `duration`, `attack_speed` and `cleave` to the corresponding `talent_settings.forceful` values below. Values and shared formatting reuse the accepted evidence.

| Placeholder | Value | Formatting |
|---|---|---|
| duration | stun_immune_linger_time = 3 | Number → 3; template adds s |
| attack_speed | 0.10 | Percentage with + prefix → +10% |
| cleave | 0.50 | Percentage with + prefix → +50% |

Static reconstruction; not an observed game screen:

```text
While at Max Stacks, and for 3s afterwards, Gain +10% Attack Speed and +50% Cleave.
```

## English comparison limits

The independently read English matches the maximum-stack condition, 3s post-maximum duration, +10% Attack Speed and +50% Cleave. The threshold behavior, action-duration example and damaging-Cleave scope are supplementary; the English does not promise a fixed additional enemy count. No explicit English contradiction is established for this talent. Mechanisms, citations, shared formatting and icon provenance reuse the existing evidence.

## Icon source

[Original image](https://gameslantern.com/storage/sites/darktide/exporter/talents/adamant/keystone_modifier/adamant_forceful_offensive.webp) | [Media-Assets Issue](https://github.com/SyuanTsai/Media-Assets/issues/11#issuecomment-5932554216) | [Existing attachment](https://github.com/user-attachments/assets/3ecc49e6-a4c7-4d77-926d-623e4f8f34f6). The icon identifies the talent; it is not mechanism evidence.
