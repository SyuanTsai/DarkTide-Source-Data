# Mobile Emplacement: source evidence

[繁體中文](../ogryn_bracing_reduces_damage_taken.md) | [Player description](README.md#ogryn_bracing_reduces_damage_taken) | [Technical index](SOURCE_INDEX.md) | [English comparison](LOCALIZATION_COMPARISON.md#ogryn_bracing_reduces_damage_taken)

Release 1.13.1; fixed SHA `7e662fcda16219d775b84af50322be2e9cd9d62e`. Talent `ogryn_bracing_reduces_damage_taken`; name key `loc_talent_ogryn_bracing_reduces_damage_taken`; description key `loc_talent_ogryn_bracing_or_shooting_reduces_damage_taken_desc`. Node `node_f0ccd932-4fd0-4f73-a020-fc4cb666b60f`; category Talent; one point. Mechanisms and examples reuse verified source evidence; no in-game test was performed.

## Source-confirmed behavior and static derivation

- Conditional `damage_taken_multiplier=0.75` applies while `braced || shooting || (t <= end + 0.5)`. It does not restrict the incoming attack type.

## Fixed source evidence

- [scripts/settings/buff/archetype_buff_templates/ogryn_buff_templates.lua — L572-L599](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/ogryn_buff_templates.lua#L572-L599)
- [scripts/utilities/attack/damage_calculation.lua — L587-L612](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/attack/damage_calculation.lua#L587-L612)
- [scripts/settings/ability/archetype_talents/talents/ogryn_talents.lua — L957-L982](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/ogryn_talents.lua#L957-L982)
- [scripts/ui/views/talent_builder_view/layouts/ogryn_tree.lua — L2254-L2280](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/ui/views/talent_builder_view/layouts/ogryn_tree.lua#L2254-L2280)

## Example assumptions and limits

- **Condition**: Take 25% less damage while bracing a ranged weapon or shooting. The shooting condition remains for approximately 0.5s after shooting stops.

- **Damage-reduction example**: Damage of 100 at this stage becomes `100 × 0.75 = 75`. With another independent 20% reduction, it becomes 60.

- **Duration**: Active whenever the bracing or shooting condition is met, without extra stacks or a fixed cooldown.

Mechanisms reuse the fixed-version evidence, with local Build 25606770 English text corresponding to 1.13.1. Actual presentation and behavior remain unobserved in game. Missing details are supplementary explanations.

<a id="original-english-template-and-reconstruction"></a>

## Original English template and reconstruction

Steam Build `25606770`; `content/localization/ui`, resource hash `63564edcb7c3c5ee`; language `en` (code `0`).

- Name key `loc_talent_ogryn_bracing_reduces_damage_taken`, hash `d5fdb21f`, entry 13840: **Mobile Emplacement**.
- Description key `loc_talent_ogryn_bracing_or_shooting_reduces_damage_taken_desc`, hash `7467e28d`, entry 7564.

Full raw template:

~~~text
You take {damage_taken_multiplier:%s} reduced Damage while bracing or shooting a Ranged Weapon.
~~~

| Placeholder | Value | Formatting |
|---|---|---|
| damage_taken_multiplier | buff-template conditional_stat_buffs.damage_taken_multiplier = 0.75 | math_round((1 − value) × 100); percentage without prefix → 25% |

Only the missing display mapping in the cited talent definition, lines 957–982, was read. Accepted values, mechanisms and common formatting were reused.

Static reconstruction; not an observed game screen:

~~~text
You take 25% reduced Damage while bracing or shooting a Ranged Weapon.
~~~

## English comparison

The independently read English reduces damage taken by 25% while bracing or shooting a ranged weapon. It matches the accepted 0.75 multiplier and conditions, without restricting incoming damage to ranged attacks. The 0.5s shooting-state retention, lack of stacks/cooldown and independent-multiplier calculation supplement the text. No explicit English contradiction is established.

## Icon source

[Original image](https://gameslantern.com/storage/sites/darktide/exporter/talents/ogryn/default/ogryn_bracing_reduces_damage_taken.webp) | [Media-Assets Issue](https://github.com/SyuanTsai/Media-Assets/issues/10#issuecomment-5931394406) | [Existing attachment](https://github.com/user-attachments/assets/38b1d6e0-b6a5-4692-92a2-fe6caf0b9083). The icon identifies the talent; it is not mechanism evidence.
