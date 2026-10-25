# Ablative Wards: source evidence

[繁體中文](../cryptic_corruption_resistance_doom.md) | [Player description](README.md#cryptic_corruption_resistance_doom) | [Technical index](SOURCE_INDEX.md) | [English comparison](LOCALIZATION_COMPARISON.md#cryptic_corruption_resistance_doom)

Release 1.13.1; fixed SHA `7e662fcda16219d775b84af50322be2e9cd9d62e`. Talent `cryptic_corruption_resistance_doom`; name key `loc_talent_cryptic_corruption_resistance_doom`; description key `loc_talent_cryptic_corruption_resistance_doom_desc`. Node `node_a3520b96-61cf-4da2-9b35-e4846de85f5e`; category Talent; one point. Mechanisms and examples reuse verified source evidence; no in-game test was performed.

## Source-confirmed behavior and static derivation

The effect uses `interval = 20` and `corruption_taken_multiplier = 0.1`. For its own periodic cost, `power = 50 × 1 × (1 / 0.1) = 500`. The dedicated profile uses attack `10`, player armour `1`, and damage output `20 / 10000`, producing `500 × 10 × 20 / 10000 = 10`; applying `permanent_damage_ratio = 1` and the `0.1` Corruption multiplier gives `1`.

`Attack.execute` uses the `grimoire` damage type, `ignore_toughness`, and `skip_on_hit_proc`. It executes only while `HEALTH_ALIVE` and not `requires_help`. This does not assume immunity to other shared incoming-damage modifiers.

## Fixed source evidence

- [scripts/settings/damage/damage_profiles/archetypes/cryptic_damage_profile_templates.lua — L836-L878](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/damage/damage_profiles/archetypes/cryptic_damage_profile_templates.lua#L836-L878)
- [scripts/settings/damage/power_level_settings.lua — L7-L37](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/damage/power_level_settings.lua#L7-L37)
- [scripts/utilities/attack/damage_calculation.lua — L219-L227](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/attack/damage_calculation.lua#L219-L227)
- [scripts/utilities/attack/damage_taken_calculation.lua — L356-L380](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/attack/damage_taken_calculation.lua#L356-L380)
- [scripts/utilities/attack/power_level.lua — L63-L89](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/attack/power_level.lua#L63-L89)
- [scripts/settings/talent/talent_settings_cryptic.lua — L569-L573](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/talent/talent_settings_cryptic.lua#L569-L573)
- [scripts/settings/buff/archetype_buff_templates/cryptic_buff_templates.lua — L3043-L3091](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/cryptic_buff_templates.lua#L3043-L3091)
- [scripts/settings/ability/archetype_talents/talents/cryptic_talents.lua — L2267-L2293](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/cryptic_talents.lua#L2267-L2293)
- [scripts/ui/views/talent_builder_view/layouts/cryptic_tree.lua — L2505-L2529](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/ui/views/talent_builder_view/layouts/cryptic_tree.lua#L2505-L2529)

## Example assumptions and limits

- **Defence**: Reduce ordinary incoming Corruption by **90%**. If otherwise identical conditions would add **10** Corruption, this resistance alone changes it to `10 × 0.10 = 1`.
- **Periodic cost**: Every **20 seconds**, incur a baseline **1 Corruption**. This cost already offsets the talent's own 90% resistance, so it must not be reduced again to 0.1.
- **Cost example**: With no other modifiers, remaining alive and requiring no assistance throughout, **60 seconds** produces **3** applications, adding **3 baseline Corruption**. Applications are skipped while in a help-required state, such as being downed or subdued.
- **Other effects**: Additional damage reduction, Corruption Resistance and other modifiers may still affect the actual cost. This talent does not remove accumulated Corruption.

The cost derivation and 60-second example use the stated unmodified baseline and eligible status throughout. Other shared incoming-damage modifiers may change the actual cost.

Mechanisms reuse the fixed-version evidence, with local Build 25606770 English text corresponding to 1.13.1. Actual presentation and behavior remain unobserved in game. Missing details are supplementary explanations.

<a id="original-english-template-and-reconstruction"></a>

## Original English template and reconstruction

Steam Build `25606770`; `content/localization/ui`, resource hash `63564edcb7c3c5ee`; language `en` (code `0`).

- Name key `loc_talent_cryptic_corruption_resistance_doom`, hash `9093d8ea`, entry 9343: **Ablative Wards**.
- Description key `loc_talent_cryptic_corruption_resistance_doom_desc`, hash `ed668132`, entry 15430.

Full raw template:

~~~text
Gain {corruption_resistance:%s} Corruption Resistance. Every {interval:%s}s, take {corruption_damage_flat:%s} Corruption Damage.
~~~

| Placeholder | Value | Formatting |
|---|---|---|
| `{corruption_resistance:%s}` | `0.1` → `+90%` | `math_round((1 − value) × 100)`; percentage; `+` prefix |
| `{interval:%s}` | `20` | Number; template adds `s` |
| `{corruption_damage_flat:%s}` | `1` | Number |

The existing display mapping in `scripts/settings/ability/archetype_talents/talents/cryptic_talents.lua` (L2275-L2292) uses `corruption_taken_multiplier`, `interval`, and `corruption_damage_taken`. The reused percentage formatter uses the manipulation result directly.

Static reconstruction; not an observed game screen:

~~~text
Gain +90% Corruption Resistance. Every 20s, take 1 Corruption Damage.
~~~

## English comparison

The English matches the 90% Corruption Resistance and unmodified periodic cost of 1 every 20 seconds. It does not explicitly exempt that cost from all other modifiers. Offsetting this talent's own resistance, skipping help-required states, and possible changes from other modifiers are supplementary details. No explicit English contradiction was found.

## Icon source

[Original image](https://gameslantern.com/storage/sites/darktide/exporter/talents/cryptic/default/cryptic_corruption_resistance_doom.webp) | [Media-Assets Issue](https://github.com/SyuanTsai/Media-Assets/issues/13#issuecomment-5935656030) | [Existing attachment](https://github.com/user-attachments/assets/1c4ea759-440c-48dd-bc21-3bc8303683d5). The icon identifies the talent; it is not mechanism evidence.
