# Pulverise: source evidence

[繁體中文](../ogryn_charge_applies_bleed.md) | [Player description](README.md#ogryn_charge_applies_bleed) | [Technical index](SOURCE_INDEX.md) | [English comparison](LOCALIZATION_COMPARISON.md#ogryn_charge_applies_bleed)

Release 1.13.1; fixed SHA `7e662fcda16219d775b84af50322be2e9cd9d62e`. Talent `ogryn_charge_applies_bleed`; name key `loc_talent_ogryn_bleed_on_bull_rush`; description key `loc_talent_ogryn_bleed_on_bull_rush_desc`. Node `node_c8dc2052-517d-42cf-84e5-ff8161b2f99f`; category Combat ability; one point. Mechanisms and examples reuse verified source evidence; no in-game test was performed.

## Source-confirmed behavior and static derivation

- Talent settings give `combat_ability_1.stacks = 5`. The Indomitable passive installs `ogryn_charge_bleed`, triggered by the lunge template only for `damage_type = ogryn_lunge` hits.
- `ogryn_charge_bleed` clears `hit_units` at each `lunge_start`. The first hit on a living target adds 5 Bleed stacks and records the target in that set.
- Generic `bleed` is an `interval_buff` with duration 1.5, interval 0.5, `interval_stack_removal = true` and maximum stacks 16. Each tick uses `n = current_stack_count` to compute `power_level = 500 × (n/16)² × (3 − 2n/16)`, then calls `DamageProfileTemplates.bleeding`. After retention expires, damage continues and each interval removes one stack. Reapplication resets the timer.
- The bleeding profile has attack `power_distribution = 175`; its armour damage modifier varies with target armour. PowerLevel is therefore not a fixed actual damage value.
- The accepted single-tick Health-damage examples convert Power through `damage_output = 0.002`, profile attack and armour modifier. The Bleed coefficient is `175 × 0.5 = 87.5`, while the Burn comparison coefficient is `400 × 1.5 = 600`; each is then multiplied by `smoothstep(n/max)`. PowerLevel is not used directly as Health damage.

## Fixed source evidence

- [scripts/settings/ability/archetype_talents/talents/ogryn_talents.lua — L1373-L1392](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/ogryn_talents.lua#L1373-L1392)
- [scripts/settings/talent/talent_settings_ogryn.lua — L380-L384](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/talent/talent_settings_ogryn.lua#L380-L384)
- [scripts/settings/ability/player_abilities/abilities/ogryn_abilities.lua — L59-L74](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/player_abilities/abilities/ogryn_abilities.lua#L59-L74)
- [scripts/settings/lunge/ogryn_lunge_templates.lua — L14-L64](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/lunge/ogryn_lunge_templates.lua#L14-L64)
- [scripts/settings/lunge/ogryn_lunge_templates.lua — L105-L108](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/lunge/ogryn_lunge_templates.lua#L105-L108)
- [scripts/settings/buff/archetype_buff_templates/ogryn_buff_templates.lua — L910-L952](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/ogryn_buff_templates.lua#L910-L952)
- [scripts/settings/buff/weapon_buff_templates.lua — L235-L275](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/weapon_buff_templates.lua#L235-L275)
- [scripts/extension_systems/buff/buffs/interval_buff.lua — L21-L64](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/buff/buffs/interval_buff.lua#L21-L64)
- [scripts/settings/damage/damage_profiles/buff_damage_profile_templates.lua — L443-L465](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/damage/damage_profiles/buff_damage_profile_templates.lua#L443-L465)
- [scripts/extension_systems/buff/buffs/interval_buff.lua — L1-L120](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/buff/buffs/interval_buff.lua#L1-L120)
- [scripts/settings/buff/weapon_buff_templates.lua — L50-L78](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/weapon_buff_templates.lua#L50-L78)
- [scripts/settings/buff/weapon_buff_templates.lua — L235-L259](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/weapon_buff_templates.lua#L235-L259)
- [scripts/settings/damage/damage_profiles/buff_damage_profile_templates.lua — L19-L68](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/damage/damage_profiles/buff_damage_profile_templates.lua#L19-L68)
- [scripts/settings/damage/damage_profiles/buff_damage_profile_templates.lua — L301-L328](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/damage/damage_profiles/buff_damage_profile_templates.lua#L301-L328)
- [scripts/settings/damage/damage_profiles/buff_damage_profile_templates.lua — L443-L465](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/damage/damage_profiles/buff_damage_profile_templates.lua#L443-L465)
- [scripts/settings/damage/power_level_settings.lua — L7-L25](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/damage/power_level_settings.lua#L7-L25)
- [scripts/utilities/attack/damage_profile.lua — L386-L445](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/attack/damage_profile.lua#L386-L445)
- [scripts/settings/ability/archetype_talents/talents/ogryn_talents.lua — L1373-L1392](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/ogryn_talents.lua#L1373-L1392)
- [scripts/ui/views/talent_builder_view/layouts/ogryn_tree.lua — L1267-L1292](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/ui/views/talent_builder_view/layouts/ogryn_tree.lua#L1267-L1292)

## Example assumptions and limits

- **Trigger**: A charge hit on a surviving enemy applies 5 Bleed stacks. Each enemy receives this application only once per charge.

- **Stacks and duration**: Bleed has a maximum of 16 stacks. Reapplication resets its 1.5s retention timer, with damage approximately every 0.5s. Once applications stop and the retention timer expires, stacks are removed one at a time on successive ticks.

- **Damage example**: Against an Unarmoured target and without other modifiers, 5 stacks deal 87.5 × (5 ÷ 16)² × [3 − 2 × (5 ÷ 16)] ≈ 20.29 per tick; 8 stacks deal 43.75. Bleed damage is not directly proportional to stack count.

Bleed can stack from other sources, with maximum total stacks 16. Reapplication during retention resets the 1.5s timer. The existing approximately 4s depletion example follows the 0.5s interval and game update points; new Bleed applications reset timing. Damage examples count only an Unarmoured target without other modifiers and describe single ticks, not cumulative damage. English and code evidence both correspond to 1.13.1.

<a id="original-english-template-and-reconstruction"></a>

## Original English template and reconstruction

Steam Build `25606770`; `content/localization/ui`, resource hash `63564edcb7c3c5ee`; language `en` (code `0`).

- Name key `loc_talent_ogryn_bleed_on_bull_rush`, hash `335781c4`, entry 3344: **Pulverise**.
- Description key `loc_talent_ogryn_bleed_on_bull_rush_desc`, hash `5f1e4b89`, entry 6162.

Full raw template:

~~~text
Apply {stacks:%s} stacks of Bleed on Enemies hit by {ability:%s}.
~~~

| Placeholder | Value | Formatting |
|---|---|---|
| stacks | combat_ability_1.stacks = 5 | Number → 5 |
| ability | loc_talent_ogryn_bull_rush_distance | Localized name → Indomitable |

Referenced name `loc_talent_ogryn_bull_rush_distance`, hash `71d7d60a`, entry 7401: **Indomitable**. Only the necessary English display map at L1373–L1392 was read; mechanism evidence was reused.

Static reconstruction; not an observed game screen:

~~~text
Apply 5 stacks of Bleed on Enemies hit by Indomitable.
~~~

## English comparison

The English independently states 5 Bleed stacks on enemies hit by Indomitable, agreeing with the accepted talent value and lunge-hit trigger. The surviving-target condition, once-per-target limit, shared Bleed timing/maximum/decay and nonlinear damage examples are supplementary. No explicit English contradiction is established.

## Icon source

[Original image](https://gameslantern.com/storage/sites/darktide/exporter/talents/ogryn/ability_modifier/ogryn_charge_applies_bleed.webp) | [Media-Assets Issue](https://github.com/SyuanTsai/Media-Assets/issues/10#issuecomment-5931383354) | [Existing attachment](https://github.com/user-attachments/assets/9194fb70-c794-460d-af2a-068ae6c4fd31). The icon identifies the talent; it is not mechanism evidence.
