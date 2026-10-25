# Sustained Assault Doctrine: source evidence

[繁體中文](../cryptic_stacking_melee_damage.md) | [Player description](README.md#cryptic_stacking_melee_damage) | [Technical index](SOURCE_INDEX.md) | [English comparison](LOCALIZATION_COMPARISON.md#cryptic_stacking_melee_damage)

Release 1.13.1; fixed SHA `7e662fcda16219d775b84af50322be2e9cd9d62e`. Talent `cryptic_stacking_melee_damage`; name key `loc_talent_cryptic_stacking_melee_damage`; description key `loc_talent_cryptic_stacking_melee_damage_desc`. Node `node_987f94ff-7679-4651-8217-d9592c83efe3`; category Talent; one point. Mechanisms and examples reuse verified source evidence; no in-game test was performed.

## Source-confirmed behavior and static derivation

- The trigger is `on_sweep_finish` with `num_hit_units > 0`.
- The actual Buff stat is `damage`, rather than `melee_damage`. It has an 8-second duration, a maximum of 5 stacks and duration refresh, with no setting for one-stack-at-a-time decay.

## Fixed source evidence

- [scripts/settings/buff/archetype_buff_templates/cryptic_buff_templates.lua — L2749-L2766](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/cryptic_buff_templates.lua#L2749-L2766)
- [scripts/utilities/attack/damage_calculation.lua — L232-L245](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/attack/damage_calculation.lua#L232-L245)
- [scripts/settings/talent/talent_settings_cryptic.lua — L489-L493](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/talent/talent_settings_cryptic.lua#L489-L493)
- [scripts/settings/buff/archetype_buff_templates/cryptic_buff_templates.lua — L2734-L2748](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/cryptic_buff_templates.lua#L2734-L2748)
- [scripts/settings/ability/archetype_talents/talents/cryptic_talents.lua — L2094-L2117](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/cryptic_talents.lua#L2094-L2117)
- [scripts/ui/views/talent_builder_view/layouts/cryptic_tree.lua — L2036-L2065](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/ui/views/talent_builder_view/layouts/cryptic_tree.lua#L2036-L2065)

## Example assumptions and limits

- **Stacks**: A melee swing hitting at least one enemy grants one Damage stack. Each swing grants at most one stack, each giving 3%, up to 5 stacks.
- **Duration**: Another trigger resets the 8-second countdown. This effect can also increase ranged damage.
- **Damage example**: Five stacks give 15%, taking base damage 100 to 115. With an existing 25% bonus in the same stage, `100 × (1 + 25% + 15%) = 140`.

The damage example isolates this bonus and the stated same-stage modifier. One successful swing grants one stack regardless of how many enemies it hits; the entire effect expires after the duration rather than decaying one stack at a time.

Mechanisms reuse the fixed-version evidence, with local Build 25606770 English text corresponding to 1.13.1. Actual presentation and behavior remain unobserved in game. Missing details are supplementary explanations.

<a id="original-english-template-and-reconstruction"></a>

## Original English template and reconstruction

Steam Build `25606770`; `content/localization/ui`, resource hash `63564edcb7c3c5ee`; language `en` (code `0`).

- Name key `loc_talent_cryptic_stacking_melee_damage`, hash `062af30d`, entry 377: **Sustained Assault Doctrine**.
- Description key `loc_talent_cryptic_stacking_melee_damage_desc`, hash `32d4da44`, entry 3313.

Full raw template:

~~~text
{damage:%s} Damage on successful Melee Attack for {duration:%s}s. Stacks {stacks:%s} times.
~~~

| Placeholder | Value | Formatting |
|---|---|---|
| `damage` | `0.03` → `+3%` | Percentage with `+` prefix. |
| `duration` | `8` | Number; the template supplies `s`. |
| `stacks` | `5` | Number. |

Display mappings are `cryptic_talents.lua` L2102-L2116. Values reuse the verified settings above.

Static reconstruction; not an observed game screen:

~~~text
+3% Damage on successful Melee Attack for 8s. Stacks 5 times.
~~~

## English comparison

The English correctly makes a successful Melee Attack the trigger while naming the bonus as “Damage,” without restricting it to Melee Damage. The 3% / 8 seconds / 5-stack values match. Per-swing counting, refresh, expiry and additive examples are supplements. No explicit English contradiction was found.

## Icon source

[Original image](https://gameslantern.com/storage/sites/darktide/exporter/talents/cryptic/default/cryptic_stacking_melee_damage.webp) | [Media-Assets Issue](https://github.com/SyuanTsai/Media-Assets/issues/13#issuecomment-5935653628) | [Existing attachment](https://github.com/user-attachments/assets/9e58fba3-e137-4f3e-89c3-ea7f5ebb0f24). The icon identifies the talent; it is not mechanism evidence.
