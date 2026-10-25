# Batter: source evidence

[繁體中文](../ogryn_heavy_bleeds.md) | [Player description](README.md#ogryn_heavy_bleeds) | [Technical index](SOURCE_INDEX.md) | [English comparison](LOCALIZATION_COMPARISON.md#ogryn_heavy_bleeds)

Release 1.13.1; fixed SHA `7e662fcda16219d775b84af50322be2e9cd9d62e`. Talent `ogryn_heavy_bleeds`; name key `loc_talent_ogryn_bleed_on_multiple_hit`; description key `loc_talent_ogryn_heavy_bleeds_new_desc`. Node `node_950e1baa-f9b8-4d12-a913-514249d4f38a`; category Talent; one point. Mechanisms and examples reuse verified source evidence; no in-game test was performed.

## Source-confirmed behavior and static derivation

- `on_hit` requires a damaging, non-killing melee hit. Heavy attacks apply 4 stacks; other melee attacks apply 1.
- It applies the shared Bleed template: maximum/cap 16 stacks, duration 1.5s, interval 0.5s and `interval_stack_removal`.
- Power is `smoothstep(n / 16) × 500`. The bleeding profile has attack 175 and an Unarmoured armour-damage modifier of 0.5. The general linear base output is `175 × 0.5 × smoothstep = 87.5 × smoothstep`.

## Fixed source evidence

- [scripts/settings/buff/archetype_buff_templates/ogryn_buff_templates.lua — L1131-L1168](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/ogryn_buff_templates.lua#L1131-L1168)
- [scripts/settings/talent/talent_settings_ogryn.lua — L330-L333](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/talent/talent_settings_ogryn.lua#L330-L333)
- [scripts/settings/buff/weapon_buff_templates.lua — L235-L259](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/weapon_buff_templates.lua#L235-L259)
- [scripts/settings/damage/damage_profiles/buff_damage_profile_templates.lua — L59-L68](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/damage/damage_profiles/buff_damage_profile_templates.lua#L59-L68)
- [scripts/settings/damage/damage_profiles/buff_damage_profile_templates.lua — L443-L465](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/damage/damage_profiles/buff_damage_profile_templates.lua#L443-L465)
- [scripts/extension_systems/buff/buffs/interval_buff.lua — L19-L68](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/buff/buffs/interval_buff.lua#L19-L68)
- [scripts/settings/damage/power_level_settings.lua — L7-L25](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/damage/power_level_settings.lua#L7-L25)
- [scripts/utilities/attack/power_level.lua — L63-L91](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/attack/power_level.lua#L63-L91)
- [scripts/utilities/attack/damage_calculation.lua — L219-L227](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/attack/damage_calculation.lua#L219-L227)
- [scripts/settings/ability/archetype_talents/talents/ogryn_talents.lua — L1199-L1220](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/ogryn_talents.lua#L1199-L1220)
- [scripts/ui/views/talent_builder_view/layouts/ogryn_tree.lua — L410-L432](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/ui/views/talent_builder_view/layouts/ogryn_tree.lua#L410-L432)

## Example assumptions and limits

- **Trigger**: A melee hit that damages an enemy which survives applies 1 Bleed stack; a heavy hit applies 4 stacks. Maximum 16 stacks.

- **Stacks and timing**: Applying Bleed again adds stacks and resets the 1.5s duration. Bleed deals damage about every 0.5s. Once stacks stop being added and the duration ends, each tick gradually removes 1 stack.

- **Damage formula**: Bleed damage increases nonlinearly with stacks. Against Unarmoured targets with no other modifiers, each tick deals `87.5 × (stacks ÷ 16)² × [3 − 2 × (stacks ÷ 16)]`.

- **Damage example**: At 4 stacks, `87.5 × 0.25² × 2.5 ≈ 13.67` damage; 8 stacks deal 43.75 and 16 deal 87.5. Thus 8 stacks do not deal twice the damage of 4. Other armour types and damage bonuses change the result.

Total damage over time depends on further stack applications, the target surviving and update timing. A single tick's damage is not a fixed total. Mechanisms reuse the fixed-version evidence, with local Build 25606770 English text corresponding to 1.13.1. Actual presentation and behavior remain unobserved in game. Missing details are supplementary explanations.

<a id="original-english-template-and-reconstruction"></a>

## Original English template and reconstruction

Steam Build `25606770`; `content/localization/ui`, resource hash `63564edcb7c3c5ee`; language `en` (code `0`).

- Name key `loc_talent_ogryn_bleed_on_multiple_hit`, hash `e541397f`, entry 14874: **Batter**.
- Description key `loc_talent_ogryn_heavy_bleeds_new_desc`, hash `8ad425e7`, entry 8980.

Full raw template:

~~~text
Inflict {stacks:%s} Stacks of Bleed on Melee Hit. Increased to {heavy_stacks:%s} on Heavy Melee Hit.
~~~

| Placeholder | Value | Formatting |
|---|---|---|
| stacks | offensive_3.light_stacks = 1 | Number with explicit + prefix → +1 |
| heavy_stacks | offensive_3.stacks = 4 | Number with explicit + prefix → +4 |

Only the missing display mapping in the cited talent definition, lines 1199–1220, was read. Accepted stack values and mechanisms were reused.

Static reconstruction; not an observed game screen:

~~~text
Inflict +1 Stacks of Bleed on Melee Hit. Increased to +4 on Heavy Melee Hit.
~~~

## English comparison

The independently read English states 1 Bleed stack on a melee hit, increased to 4 on a heavy melee hit. This matches the accepted application counts; "increased to" makes 4 the heavy-hit total, rather than 4 additional stacks. Damaging-hit and survival requirements, the 16-stack cap, duration and decay, and the nonlinear damage formula supplement the text. No explicit English contradiction is established.

## Icon source

[Original image](https://gameslantern.com/storage/sites/darktide/exporter/talents/ogryn/default/ogryn_heavy_bleeds.webp) | [Media-Assets Issue](https://github.com/SyuanTsai/Media-Assets/issues/10#issuecomment-5931394406) | [Existing attachment](https://github.com/user-attachments/assets/dbfbaef7-b829-41cf-96cb-a9d09192cfbd). The icon identifies the talent; it is not mechanism evidence.
