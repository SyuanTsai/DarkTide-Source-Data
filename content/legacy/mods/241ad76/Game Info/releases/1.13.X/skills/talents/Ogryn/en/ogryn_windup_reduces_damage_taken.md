# Implacable: source evidence

[繁體中文](../ogryn_windup_reduces_damage_taken.md) | [Player description](README.md#ogryn_windup_reduces_damage_taken) | [Technical index](SOURCE_INDEX.md) | [English comparison](LOCALIZATION_COMPARISON.md#ogryn_windup_reduces_damage_taken)

Release 1.13.1; fixed SHA `7e662fcda16219d775b84af50322be2e9cd9d62e`. Talent `ogryn_windup_reduces_damage_taken`; name key `loc_talent_ogryn_windup_reduces_damage_taken`; description key `loc_talent_ogryn_windup_reduces_damage_taken_desc`. Node `node_27d9c0ef-dd49-4aaa-a921-1c334c824caf`; category Talent; one point. Mechanisms and examples reuse verified source evidence; no in-game test was performed.

## Source-confirmed behavior and static derivation

- While `action_settings.kind == windup`, `damage_taken_multiplier=0.85`. There is no separate duration or extra stacking.

## Fixed source evidence

- [scripts/settings/buff/archetype_buff_templates/ogryn_buff_templates.lua — L527-L547](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/ogryn_buff_templates.lua#L527-L547)
- [scripts/utilities/attack/damage_calculation.lua — L587-L612](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/attack/damage_calculation.lua#L587-L612)
- [scripts/settings/ability/archetype_talents/talents/ogryn_talents.lua — L904-L930](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/ogryn_talents.lua#L904-L930)
- [scripts/ui/views/talent_builder_view/layouts/ogryn_tree.lua — L967-L994](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/ui/views/talent_builder_view/layouts/ogryn_tree.lua#L967-L994)

## Example assumptions and limits

- **Condition**: Gain 15% damage reduction while charging a heavy melee attack. The reduction ends when charging ends; it does not automatically continue throughout the subsequent swing.

- **Damage-reduction example**: With only this effect, damage of 100 becomes `100 × 0.85 = 85`. With another independent 20% reduction, it becomes `100 × 0.85 × 0.8 = 68`.

Mechanisms reuse the fixed-version evidence, with local Build 25606770 English text corresponding to 1.13.1. Actual presentation and behavior remain unobserved in game. Missing details are supplementary explanations.

<a id="original-english-template-and-reconstruction"></a>

## Original English template and reconstruction

Steam Build `25606770`; `content/localization/ui`, resource hash `63564edcb7c3c5ee`; language `en` (code `0`).

- Name key `loc_talent_ogryn_windup_reduces_damage_taken`, hash `944c3baa`, entry 9595: **Implacable**.
- Description key `loc_talent_ogryn_windup_reduces_damage_taken_desc`, hash `fed4526c`, entry 16542.

Full raw template:

~~~text
{damage_taken_multiplier:%s} Damage Reduction while charging Melee Attacks.
~~~

| Placeholder | Value | Formatting |
|---|---|---|
| damage_taken_multiplier | conditional_stat_buffs.damage_taken_multiplier = 0.85 | (1 − value) × 100; percentage with explicit + prefix → +15% |

Only the missing display mapping in the cited talent definition, lines 904–930, was read. Accepted values, mechanisms and common formatting were reused.

Static reconstruction; not an observed game screen:

~~~text
+15% Damage Reduction while charging Melee Attacks.
~~~

## English comparison

The independently read English grants +15% damage reduction while charging melee attacks, matching the accepted windup condition and multiplier. It does not promise a bonus throughout the swing. The absence of a separate duration or stacks and the independent-multiplier calculation supplement the text. No explicit English contradiction is established.

## Icon source

[Original image](https://gameslantern.com/storage/sites/darktide/exporter/talents/ogryn/default/ogryn_windup_reduces_damage_taken.webp) | [Media-Assets Issue](https://github.com/SyuanTsai/Media-Assets/issues/10#issuecomment-5931394406) | [Existing attachment](https://github.com/user-attachments/assets/bb088b60-c1e8-42a7-b68e-3ef59f5d9eb9). The icon identifies the talent; it is not mechanism evidence.
