# Fury of the Faithful: source evidence

[繁體中文](../zealot_attack_speed_post_ability.md) | [Player description](README.md#zealot_attack_speed_post_ability) | [Technical index](SOURCE_INDEX.md) | [English comparison](LOCALIZATION_COMPARISON.md#zealot_attack_speed_post_ability)

Release 1.13.1; fixed SHA `7e662fcda16219d775b84af50322be2e9cd9d62e`. Talent `zealot_attack_speed_post_ability`; name key `loc_talent_maniac_attack_speed_after_dash`; description key `loc_talent_zealot_attack_speed_after_dash_new_desc`. Node `node_5bf70f4d-96f3-446a-8a74-f4b4db160455`; category Ability; one point. Mechanisms and examples reuse verified source evidence; no in-game test was performed.

## Source-confirmed behavior and static derivation

- The node selects `PlayerAbilities.zealot_targeted_dash_improved` and enables the `dash` special rule. Underlying settings: `cooldown = 30`, `distance = 7`, `has_target_distance = 21`, `duration = 3`, `toughness = 0.5`; the lunge template directly sets `restore_toughness = 0.5`.
- The lunge template adds Attack Speed and melee buffs with a delay. Attack Speed reads `attack_speed = 0.2`, with `duration = active_duration 10 + 1` for an internal timing margin. These buffs are independent: Attack Speed expires by its timer, while the melee buff is checked through `on_hit` events.
- The melee buff has `melee_damage = 0.25`, `melee_critical_strike_chance = 1`, `melee_rending_multiplier = 1` and `duration = 3`. It requires a Melee Hit; Push efficiency and Ranged Attacks are excluded. For weapon specials with `keep_buff_ability_active_on_special`, special activation/deactivation and sticky-sweep state determine whether the buff ends early.

## Fixed source evidence

- [scripts/settings/ability/archetype_talents/talents/zealot_talents.lua — L383-L428](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/zealot_talents.lua#L383-L428)
- [scripts/settings/talent/talent_settings_zealot.lua — L304-L318](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/talent/talent_settings_zealot.lua#L304-L318)
- [scripts/settings/talent/talent_settings_zealot.lua — L420-L430](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/talent/talent_settings_zealot.lua#L420-L430)
- [scripts/settings/ability/player_abilities/abilities/zealot_abilities.lua — L7-L36](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/player_abilities/abilities/zealot_abilities.lua#L7-L36)
- [scripts/settings/lunge/zealot_lunge_templates.lua — L79-L92](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/lunge/zealot_lunge_templates.lua#L79-L92)
- [scripts/settings/buff/archetype_buff_templates/zealot_buff_templates.lua — L1233-L1329](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/zealot_buff_templates.lua#L1233-L1329)
- [scripts/settings/buff/archetype_buff_templates/zealot_buff_templates.lua — L4135-L4155](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/zealot_buff_templates.lua#L4135-L4155)
- [scripts/utilities/action/action_handler.lua — L356-L429](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/action/action_handler.lua#L356-L429)
- [scripts/utilities/attack/damage_calculation.lua — L289-L303](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/attack/damage_calculation.lua#L289-L303)
- [scripts/settings/ability/archetype_talents/talents/zealot_talents.lua — L383-L428](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/zealot_talents.lua#L383-L428)
- [scripts/ui/views/talent_builder_view/layouts/zealot_tree.lua — L596-L626](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/ui/views/talent_builder_view/layouts/zealot_tree.lua#L596-L626)

## Example assumptions and limits

- **Dash and cooldown**: Dash forward, with a normal distance of **7 metres** or up to **21 metres** with a selected target. Collision and traversable paths affect movement. Base cooldown **30 seconds**, **1 charge**.
- **Toughness recovery**: Activation restores **50% of maximum Toughness**. At maximum 100/current20, restore **50** to reach **70**; at current70, only the missing **30** is restored.
- **Attack Speed**: Gain **20% Attack Speed** for about **11 seconds**. Isolating this bonus, an affected 1-second action takes `1 ÷ 1.2 ≈ 0.833 seconds`. Another activation refreshes the duration.
- **Next Melee Hit**: Within **3 seconds**, the next qualifying Melee Hit gains **25% Melee Damage**, a guaranteed Critical Hit and **100% melee Rending**. Pushes and ranged hits do not consume this enhancement.
- **Damage example**: Isolate the Melee Damage stage first: baseline100 gives `100 × 1.25 = 125`; with an existing same-stage **20%** bonus, the result is **145**. Critical extra damage and Rending's armour effects are separate; 125 is not every weapon's final damage.
- **Special attacks**: Certain weapon specials that remain attached to an enemy can retain the enhancement until that attack ends. Exact behavior depends on the weapon.

- Lunge `distance` and target distance are movement/targeting settings, not a guarantee of the same travel distance on every terrain.
- The Attack Speed Buff's extra **1 second** is an internal template duration. HUD presentation and perceived in-game duration remain unobserved.
- “Next” refers to a hit passing the `on_melee_hit` filters; Pushes and Ranged Attacks do not consume it.
- Build **25606770**, description hash **`f5695318`**: Chinese and English share the same `time` field. The display mapping is **10 seconds**, while Buff duration is **10 + 1 = 11 seconds**. The Chinese record retains this pending in-game display check and no Chinese-only direction error. The independent English/source-duration comparison below preserves that limitation.

Mechanisms reuse the fixed-version evidence, with local Build 25606770 English text corresponding to 1.13.1. Actual presentation and behavior remain unobserved in game. Missing details are supplementary explanations.

<a id="original-english-template-and-reconstruction"></a>

## Original English template and reconstruction

Steam Build `25606770`; `content/localization/ui`, resource hash `63564edcb7c3c5ee`; language `en` (code `0`).

- Name key `loc_talent_maniac_attack_speed_after_dash`, hash `813869f7`, entry 8392: **Fury of the Faithful**.
- Description key `loc_talent_zealot_attack_speed_after_dash_new_desc`, hash `f5695318`, entry 15939.

Full raw template:

~~~text
Dash forward, Replenishing {toughness:%s} Toughness & gaining {attack_speed:%s} Attack Speed for {time:%s}s. Your next Melee Hit gains {damage:%s} Damage, has {rending:%s} Rending, and is a guaranteed Critical Hit.

Base Cooldown: {cooldown:%s}s

This is an augmented version of {talent_name:%s}.
~~~

| Placeholder | Value | Formatting |
|---|---|---|
| `{toughness:%s}` | `0.5` → `50%` | Percentage |
| `{attack_speed:%s}` | `0.2` → `+20%` | Percentage with + prefix |
| `{time:%s}` | `10` → `10` | Value; internal Buff duration is separately 11s |
| `{damage:%s}` | `0.25` → `+25%` | Percentage with + prefix |
| `{rending:%s}` | `1` → `+100%` | Percentage with + prefix |
| `{cooldown:%s}` | `30` → `30` | Number |
| `{talent_name:%s}` | `loc_talent_zealot_2_combat` → `Chastise the Wicked` | Localized string; ui hash `b89423e1`, entry 11900 |

Only the missing English display mapping in `zealot_talents.lua` L383-L420 was consulted. The paired base-ability name and accepted settings are reused; the displayed time value is not substituted with the separate internal Buff duration.

Static reconstruction; not an observed game screen:

~~~text
Dash forward, Replenishing 50% Toughness & gaining +20% Attack Speed for 10s. Your next Melee Hit gains +25% Damage, has +100% Rending, and is a guaranteed Critical Hit.

Base Cooldown: 30s

This is an augmented version of Chastise the Wicked.
~~~

## English comparison

The English correctly states recovery, Attack Speed amount, melee damage, Rending, Critical Hit and base cooldown. Its statically reconstructed Attack Speed duration is **10s**, while accepted Buff evidence specifies **10 + 1 = 11s**. Record that numerical contradiction against the internal duration, retaining the existing uncertainty about HUD and perceived in-game timing; it is not a Chinese-only translation error. The 3-second melee window, hit filters, special-attack retention, recovery cap and damage-stage examples are supplements.

## Icon source

[Original image](https://gameslantern.com/storage/sites/darktide/exporter/talents/zealot/ability/zealot_attack_speed_post_ability.webp) | [Media-Assets Issue](https://github.com/SyuanTsai/Media-Assets/issues/8#issuecomment-5929289315) | [Existing attachment](https://github.com/user-attachments/assets/bd841f6f-e0ff-4cfa-a3ac-f7d08bfbc80e). The icon identifies the talent; it is not mechanism evidence.
