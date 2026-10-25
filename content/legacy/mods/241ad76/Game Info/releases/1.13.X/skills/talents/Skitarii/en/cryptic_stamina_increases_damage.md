# Channelled Motive Force: source evidence

[繁體中文](../cryptic_stamina_increases_damage.md) | [Player description](README.md#cryptic_stamina_increases_damage) | [Technical index](SOURCE_INDEX.md) | [English comparison](LOCALIZATION_COMPARISON.md#cryptic_stamina_increases_damage)

Release 1.13.1; fixed SHA `7e662fcda16219d775b84af50322be2e9cd9d62e`. Talent `cryptic_stamina_increases_damage`; name key `loc_talent_cryptic_stamina_increases_damage`; description key `loc_talent_cryptic_stamina_increases_damage_desc`. Node `node_a33d4e99-fff1-4e68-a431-b76674437dfd`; category Talent; one point. Mechanisms and examples reuse verified source evidence; no in-game test was performed.

## Source-confirmed behavior and static derivation

- Each update accumulates the positive difference `last - current`. When `max_stamina` changes, that update's difference is excluded. At an accumulated amount of at least 1, it subtracts 1 and adds a single-stack buff that refreshes its duration, retaining the remainder. Its `damage = 0.15` adds to other `damage_stat_buffs` in the same calculation stage.

## Fixed source evidence

- [scripts/settings/buff/archetype_buff_templates/cryptic_buff_templates.lua — L2847-L2864](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/cryptic_buff_templates.lua#L2847-L2864)
- [scripts/utilities/attack/damage_calculation.lua — L282-L321](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/attack/damage_calculation.lua#L282-L321)
- [scripts/settings/talent/talent_settings_cryptic.lua — L500-L504](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/talent/talent_settings_cryptic.lua#L500-L504)
- [scripts/settings/buff/archetype_buff_templates/cryptic_buff_templates.lua — L2800-L2846](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/cryptic_buff_templates.lua#L2800-L2846)
- [scripts/utilities/attack/damage_calculation.lua — L232-L245](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/attack/damage_calculation.lua#L232-L245)
- [scripts/settings/ability/archetype_talents/talents/cryptic_talents.lua — L2133-L2156](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/cryptic_talents.lua#L2133-L2156)
- [scripts/ui/views/talent_builder_view/layouts/cryptic_tree.lua — L380-L409](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/ui/views/talent_builder_view/layouts/cryptic_tree.lua#L380-L409)

## Example assumptions and limits

- **Trigger**: After spending **1 Stamina bar in total**, gain **15% Damage for 4 seconds**. The bar does not need to be spent all at once.
- **Accumulation and refreshing**: Stamina recovery does not subtract from accumulated spending. Spending another accumulated bar restarts the 4-second duration; the damage bonus does not stack.
- **Example**: Spending 0.4 bars followed by 0.6 bars triggers it. At 100 base damage with an existing 25% bonus in the same stage, the result is `100 × (1 + 25% + 15%) = 140` damage.

- The spending example uses `0.4 + 0.6 = 1` bar. The damage example assumes 100 base damage and an existing same-stage 25% bonus, giving 140 damage through addition of the 15% bonus.
- The tracked amount is measured in Stamina bars and can accumulate across separate actions. Recovery does not remove already accumulated expenditure; a change to maximum Stamina excludes that update's difference.
- Actual presentation and behavior remain unobserved in game. The accumulation and calculation details supplement the English.

Mechanisms reuse the fixed-version evidence, with local Build 25606770 English text corresponding to 1.13.1. Actual presentation and behavior remain unobserved in game. Missing details are supplementary explanations.

<a id="original-english-template-and-reconstruction"></a>

## Original English template and reconstruction

Steam Build `25606770`; `content/localization/ui`, resource hash `63564edcb7c3c5ee`; language `en` (code `0`).

- Name key `loc_talent_cryptic_stamina_increases_damage`, hash `a201b166`, entry 10465: **Channelled Motive Force**.
- Description key `loc_talent_cryptic_stamina_increases_damage_desc`, hash `0a1fb7eb`, entry 636.

Full raw template:

~~~text
Spending {stamina:%s} Stamina grants {damage:%s} Damage for {duration:%s}s.
~~~

| Placeholder | Value | Formatting |
|---|---|---|
| `stamina` | 1 | `number`: verified `talent_settings.cryptic_stamina_increases_damage.stamina_consumed_to_proc = 1` |
| `damage` | +15% | `percentage`, prefix `+`: verified `talent_settings.cryptic_stamina_increases_damage.damage = 0.15` |
| `duration` | 4 | `number`: verified `talent_settings.cryptic_stamina_increases_damage.duration = 4` |

The display mappings in `cryptic_talents.lua` L2141–L2155 format the Stamina threshold as a number and use the already verified damage bonus and duration.

Static reconstruction; not an observed game screen:

~~~text
Spending 1 Stamina grants +15% Damage for 4s.
~~~

## English comparison

The English spending threshold, damage bonus and duration agree with the accepted behavior. It does not require all the Stamina to be spent in one action. Bars as the unit, accumulation across actions, preservation through recovery, exclusion of maximum-Stamina changes, duration refreshing and same-stage addition are supplementary details.

## Icon source

[Original image](https://gameslantern.com/storage/sites/darktide/exporter/talents/cryptic/default/cryptic_stamina_increases_damage.webp) | [Media-Assets Issue](https://github.com/SyuanTsai/Media-Assets/issues/13#issuecomment-5935647528) | [Existing attachment](https://github.com/user-attachments/assets/8f013bd2-f685-4be4-8678-11ac630d6659). The icon identifies the talent; it is not mechanism evidence.
