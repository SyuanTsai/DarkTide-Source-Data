# Scourge: source evidence

[繁體中文](../zealot_crits_apply_bleed.md) | [Player description](README.md#zealot_crits_apply_bleed) | [Technical index](SOURCE_INDEX.md) | [English comparison](LOCALIZATION_COMPARISON.md#zealot_crits_apply_bleed)

Release 1.13.1; fixed SHA `7e662fcda16219d775b84af50322be2e9cd9d62e`. Talent `zealot_crits_apply_bleed`; name key `loc_talent_zealot_bleed_melee_crit_chance`; description key `loc_talent_zealot_bleed_melee_crit_chance_desc`. Node `node_0e6bc32b-bdab-4856-94e7-f141355cc9a0`; category Skill; one point. Mechanisms and examples reuse verified source evidence; no in-game test was performed.

## Source-confirmed behavior and static derivation

- `on_hit` checks whether the target is already bleeding before granting the crit effect. It then adds two Bleed stacks only if `is_critical_strike`, `damage>0` and `HEALTH_ALIVE` hold. `on_bleeding_minion_death` separately checks Melee and `attacker==holder`; different events cannot guarantee exactly one bonus stack per kill.
- Bleed power is `500 × x² × (3−2x)`, with `x=stacks/16`. The profile attack value is 175; output `20/10000` and power normalization cancel the 500. Unarmoured ADM .5 yields `175 × smoothstep × .5`.

## Fixed source evidence

- [scripts/settings/buff/archetype_buff_templates/zealot_buff_templates.lua — L1593-L1658](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/zealot_buff_templates.lua#L1593-L1658)
- [scripts/settings/talent/talent_settings_zealot.lua — L357-L361](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/talent/talent_settings_zealot.lua#L357-L361)
- [scripts/settings/buff/weapon_buff_templates.lua — L235-L260](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/weapon_buff_templates.lua#L235-L260)
- [scripts/settings/damage/damage_profiles/buff_damage_profile_templates.lua — L59-L68](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/damage/damage_profiles/buff_damage_profile_templates.lua#L59-L68)
- [scripts/settings/damage/damage_profiles/buff_damage_profile_templates.lua — L443-L466](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/damage/damage_profiles/buff_damage_profile_templates.lua#L443-L466)
- [scripts/utilities/attack/power_level.lua — L21-L23](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/attack/power_level.lua#L21-L23)
- [scripts/utilities/attack/power_level.lua — L63-L94](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/attack/power_level.lua#L63-L94)
- [scripts/settings/damage/power_level_settings.lua — L7-L29](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/damage/power_level_settings.lua#L7-L29)
- [scripts/utilities/attack/damage_profile.lua — L386-L444](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/attack/damage_profile.lua#L386-L444)
- [scripts/extension_systems/buff/buffs/interval_buff.lua — L17-L64](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/buff/buffs/interval_buff.lua#L17-L64)
- [scripts/settings/ability/archetype_talents/talents/zealot_talents.lua — L1457-L1521](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/zealot_talents.lua#L1457-L1521)
- [scripts/ui/views/talent_builder_view/layouts/zealot_tree.lua — L11-L36](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/ui/views/talent_builder_view/layouts/zealot_tree.lua#L11-L36)

## Example assumptions and limits

- **Applying Bleed**: A Melee Critical Hit that deals damage while the enemy remains alive applies 2 Bleed stacks. A Melee hit on an already bleeding enemy grants 1 stack of Melee Critical Chance: +10 percentage points per stack, max 3, lasting 3 seconds. Another trigger resets duration.
- **Trigger order**: Existing Bleed is checked before this crit applies Bleed. The first crit on a previously non-bleeding enemy therefore does not also grant Critical Chance merely from its newly applied Bleed. A Melee kill event on a bleeding enemy can also grant the bonus.
- **Critical Chance example**: Base Melee Critical Chance 5% becomes 5% + 3 × 10% = 35% at 3 stacks, not 5% × 1.3.
- **Bleed damage example**: Bleed ticks about every 0.5 seconds, up to 16 stacks. Against a fixed Unarmoured hit location with no other modifiers, one tick at 2 stacks deals 175 × (2 ÷ 16)² × [3 − 2 × (2 ÷ 16)] × 0.5 ≈ 3.76 damage; 8 stacks deal 43.75. Damage does not rise proportionally with stacks.
- **Bleed duration**: Adding stacks resets the 1.5-second retention period. After expiry, stacks decay one by one with each tick rather than all disappearing at 1.5 seconds.

- The Bleed example fixes armour and excludes other modifiers. It is an individual tick, not fixed damage per second against every enemy.
- The accepted Chinese comparison at hash `cddf2bee` finds no explicit translation contradiction in effect direction for the same description key/hash. Unlisted formulas, caps and finer restrictions are supplements.
- Actual game behavior and presentation remain unobserved.

Mechanisms reuse the fixed-version evidence, with local Build 25606770 English text corresponding to 1.13.1. Actual presentation and behavior remain unobserved in game. Missing details are supplementary explanations.

<a id="original-english-template-and-reconstruction"></a>

## Original English template and reconstruction

Steam Build `25606770`; `content/localization/ui`, resource hash `63564edcb7c3c5ee`; language `en` (code `0`).

- Name key `loc_talent_zealot_bleed_melee_crit_chance`, hash `bc085cdc`, entry 12126: **Scourge**.
- Description key `loc_talent_zealot_bleed_melee_crit_chance_desc`, hash `cddf2bee`, entry 13310.

Full raw template:

~~~text
Melee Critical Hits apply Bleed, causing Damage over time.

Melee Hits on Bleeding Enemies grant {crit_chance:%s} Critical Chance for {duration:%s}s. Stacks {max_stacks:%s} times.
~~~

| Placeholder | Value | Formatting |
|---|---|---|
| `crit_chance` | 0.10 → +10% | `percentage`, `+` prefix; `talent_settings_2.offensive_1.melee_critical_strike_chance` |
| `duration` | 3 | `number`; corresponding `duration` |
| `max_stacks` | 3 | `number`; `zealot_bleeding_crits_effect.max_stacks` |

The minimal display mapping at `zealot_talents.lua` L1457-L1482 uses the accepted crit-effect values. Developer info for Bleed is not inserted into the English template.

Static reconstruction; not an observed game screen:

~~~text
Melee Critical Hits apply Bleed, causing Damage over time.

Melee Hits on Bleeding Enemies grant +10% Critical Chance for 3s. Stacks 3 times.
~~~

## English comparison

The English identifies Melee Critical Hits as the Bleed source and Melee hits on bleeding enemies as the +10% Critical Chance trigger, with 3-second duration and 3 stacks. These effects and values match the accepted behavior. The crit bonus is Melee-specific; bleeding-target checks precede new Bleed application. Positive damage, surviving targets, separate kill events, refresh/decay and nonlinear per-tick examples are supplementary details rather than English errors.

## Icon source

[Original image](https://gameslantern.com/storage/sites/darktide/exporter/talents/zealot/default/zealot_crits_apply_bleed.webp) | [Media-Assets Issue](https://github.com/SyuanTsai/Media-Assets/issues/8#issuecomment-5929289315) | [Existing attachment](https://github.com/user-attachments/assets/96dc3500-2674-43bb-9fa9-10992eb3bcb8). The icon identifies the talent; it is not mechanism evidence.
