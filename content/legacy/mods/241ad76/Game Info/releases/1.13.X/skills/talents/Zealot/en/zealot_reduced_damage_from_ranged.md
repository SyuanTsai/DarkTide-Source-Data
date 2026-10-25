# Wait in Line: source evidence

[繁體中文](../zealot_reduced_damage_from_ranged.md) | [Player description](README.md#zealot_reduced_damage_from_ranged) | [Technical index](SOURCE_INDEX.md) | [English comparison](LOCALIZATION_COMPARISON.md#zealot_reduced_damage_from_ranged)

Release 1.13.1; fixed SHA `7e662fcda16219d775b84af50322be2e9cd9d62e`. Talent `zealot_reduced_damage_from_ranged`; name key `loc_talent_zealot_reduced_damage_from_ranged`; description key `loc_talent_zealot_reduced_damage_from_ranged_desc`. Node `node_dfa2e434-62d7-460d-b620-ae1ae2cb31f7`; category Skill; one point. Mechanisms and examples reuse verified source evidence; no in-game test was performed.

## Source-confirmed behavior and static derivation

- Permanent `ranged_damage_taken_multiplier` = 0.8. Shared damage calculation multiplies it in only for `is_ranged_attack`, not a `breed.ranged` condition.
- The verified Chinese document notes that both languages broadly say Ranged Enemies, so it found no Chinese-only contradiction and retained attack-type eligibility as a supplement. That Chinese translation finding is preserved separately from the independent English comparison below.

## Fixed source evidence

- [scripts/settings/buff/archetype_buff_templates/zealot_buff_templates.lua — L4729-L4735](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/zealot_buff_templates.lua#L4729-L4735)
- [scripts/settings/talent/talent_settings_zealot.lua — L239-L241](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/talent/talent_settings_zealot.lua#L239-L241)
- [scripts/utilities/attack/damage_calculation.lua — L590-L610](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/attack/damage_calculation.lua#L590-L610)
- [scripts/settings/ability/archetype_talents/talents/zealot_talents.lua — L3230-L3248](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/zealot_talents.lua#L3230-L3248)
- [scripts/ui/views/talent_builder_view/layouts/zealot_tree.lua — L2060-L2087](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/ui/views/talent_builder_view/layouts/zealot_tree.lua#L2060-L2087)

## Example assumptions and limits

- **How it works:** damage from Ranged attacks is reduced by 20%. Eligibility follows the attack type, not simply whether the enemy carries a gun. If the same gunner switches to Melee, this talent does not reduce that damage.
- **Reduction example:** this talent alone changes incoming Ranged damage 100 to 100 × 0.8 = 80. With a separate 25% general reduction, the result is 100 × 0.8 × 0.75 = 60.

- The original game text uses the 1.13.1 / Steam Build 25606770 `ui` resource. Differences between description and implementation still require an in-game check.
- The existing Chinese comparison for hash `5dbe3a42` found no explicit translation conflict in the effect's direction; omitted formulas, caps and detailed limits were not treated as Chinese translation errors.

Mechanisms reuse the fixed-version evidence, with local Build 25606770 English text corresponding to 1.13.1. Actual presentation and behavior remain unobserved in game. Missing details are supplementary explanations.

<a id="original-english-template-and-reconstruction"></a>

## Original English template and reconstruction

Steam Build `25606770`; `content/localization/ui`, resource hash `63564edcb7c3c5ee`; language `en` (code `0`).

- Name key `loc_talent_zealot_reduced_damage_from_ranged`, hash `f8ea87eb`, entry 16166: **Wait in Line**.
- Description key `loc_talent_zealot_reduced_damage_from_ranged_desc`, hash `5dbe3a42`, entry 6082.

Full raw template:

~~~text
{dr:%s} Damage Resistance vs Ranged Enemies.
~~~

| Placeholder | Value | Formatting |
|---|---|---|
| `dr` | `0.8` | `value_manipulation`: `round((1 − 0.8) × 100) = 20`; `percentage`, `+` prefix: `+20%` |

The display mapping uses the verified `damage_taken` value. The known percentage formatter uses the manipulated percentage directly, without a second multiplication by 100.

Static reconstruction; not an observed game screen:

~~~text
+20% Damage Resistance vs Ranged Enemies.
~~~

## English comparison

The English value agrees with the 0.8 multiplier. However, its explicit condition “vs Ranged Enemies” identifies an enemy category, while the accepted mechanism tests `is_ranged_attack`. In particular, a gunner's Melee hit does not qualify. This is an English condition erratum against the existing source evidence, distinct from the Chinese finding that both languages share the wording. Actual game presentation and behaviour remain unobserved. Multiplicative combination details are supplements.

## Icon source

[Original image](https://gameslantern.com/storage/sites/darktide/exporter/talents/zealot/default/zealot_reduced_damage_from_ranged.webp) | [Media-Assets Issue](https://github.com/SyuanTsai/Media-Assets/issues/8#issuecomment-5929296872) | [Existing attachment](https://github.com/user-attachments/assets/ec2c5209-fa69-4340-b6d9-bca627da0840). The icon identifies the talent; it is not mechanism evidence.
