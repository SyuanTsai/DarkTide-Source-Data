# No Respite: source evidence

[繁體中文](../zealot_melee_crits_restore_stamina.md) | [Player description](README.md#zealot_melee_crits_restore_stamina) | [Technical index](SOURCE_INDEX.md) | [English comparison](LOCALIZATION_COMPARISON.md#zealot_melee_crits_restore_stamina)

Release 1.13.1; fixed SHA `7e662fcda16219d775b84af50322be2e9cd9d62e`. Talent `zealot_melee_crits_restore_stamina`; name key `loc_talent_zealot_melee_crits_restore_stamina`; description key `loc_talent_zealot_melee_crits_restore_stamina_desc`. Node `node_5832cbce-960a-4303-b772-3f8813fde6d0`; category Skill; one point. Mechanisms and examples reuse verified source evidence; no in-game test was performed.

## Source-confirmed behavior and static derivation

- `on_hit` is paired with `on_crit_melee`, with a cooldown of 1 second. `Stamina.add_stamina_percent(.1)` restores Stamina based on its maximum, then clamps the result to the cap.

## Fixed source evidence

- [scripts/settings/buff/archetype_buff_templates/zealot_buff_templates.lua — L2292-L2311](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/zealot_buff_templates.lua#L2292-L2311)
- [scripts/settings/talent/talent_settings_zealot.lua — L89-L92](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/talent/talent_settings_zealot.lua#L89-L92)
- [scripts/utilities/attack/stamina.lua — L102-L118](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/attack/stamina.lua#L102-L118)
- [scripts/settings/ability/archetype_talents/talents/zealot_talents.lua — L2142-L2161](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/zealot_talents.lua#L2142-L2161)
- [scripts/ui/views/talent_builder_view/layouts/zealot_tree.lua — L1698-L1723](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/ui/views/talent_builder_view/layouts/zealot_tree.lua#L1698-L1723)

## Example assumptions and limits

- Melee Critical Hits restore 10% of maximum Stamina, at most once per second. A kill is not required.
- **Restoration example:** with maximum Stamina 6, each trigger restores 6 × 10% = 0.6 points. If only 0.2 points are missing, it restores only 0.2 points. A critical sweep hitting several enemies still follows the 1-second cooldown.

- The original game text uses the 1.13.1 / Steam Build 25606770 `ui` resource. Differences between description and implementation still require an in-game check.
- The verified Chinese comparison for hash `01adc74d` found no explicit translation conflict in the direction of the effect. Omitted formulas, caps and detailed limits are supplements, not translation errors.

Mechanisms reuse the fixed-version evidence, with local Build 25606770 English text corresponding to 1.13.1. Actual presentation and behavior remain unobserved in game. Missing details are supplementary explanations.

<a id="original-english-template-and-reconstruction"></a>

## Original English template and reconstruction

Steam Build `25606770`; `content/localization/ui`, resource hash `63564edcb7c3c5ee`; language `en` (code `0`).

- Name key `loc_talent_zealot_melee_crits_restore_stamina`, hash `a0fbdd92`, entry 10401: **No Respite**.
- Description key `loc_talent_zealot_melee_crits_restore_stamina_desc`, hash `01adc74d`, entry 100.

Full raw template:

~~~text
Replenish {stamina:%s} Stamina on Melee Critical Hit. {cooldown:%s}s Cooldown.
~~~

| Placeholder | Value | Formatting |
|---|---|---|
| `stamina` | `0.1` | `percentage`: `10%` |
| `cooldown` | `1` | `number`: `1` |

The existing talent display mapping assigns `stamina` to `talent_settings.zealot_melee_crits_restore_stamina.stamina` and `cooldown` to its `cooldown_duration`. The mapping and verified values reconstruct the wording below.

Static reconstruction; not an observed game screen:

~~~text
Replenish 10% Stamina on Melee Critical Hit. 1s Cooldown.
~~~

## English comparison

The English independently matches Melee Critical Hit restoration and the 1-second cooldown. It does not specify the maximum-Stamina basis or the cap on restoration; those details are supplements. No explicit English contradiction was found.

## Icon source

[Original image](https://gameslantern.com/storage/sites/darktide/exporter/talents/zealot/default/zealot_melee_crits_restore_stamina.webp) | [Media-Assets Issue](https://github.com/SyuanTsai/Media-Assets/issues/8#issuecomment-5929296872) | [Existing attachment](https://github.com/user-attachments/assets/6406ef43-19df-4cab-9091-e5c490d72cef). The icon identifies the talent; it is not mechanism evidence.
