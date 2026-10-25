# Got Your Back: source evidence

[繁體中文](../zealot_melee_kills_restore_toughness_to_target.md) | [Player description](README.md#zealot_melee_kills_restore_toughness_to_target) | [Technical index](SOURCE_INDEX.md) | [English comparison](LOCALIZATION_COMPARISON.md#zealot_melee_kills_restore_toughness_to_target)

Release 1.13.1; fixed SHA `7e662fcda16219d775b84af50322be2e9cd9d62e`. Talent `zealot_melee_kills_restore_toughness_to_target`; name key `loc_talent_zealot_melee_kills_restore_toughness_to_target`; description key `loc_talent_zealot_melee_kills_restore_toughness_to_target_desc`. Node `node_c10e9c6e-1e1c-48db-8e08-f218097bdbdb`; category Skill; one point. Mechanisms and examples reuse verified source evidence; no in-game test was performed.

## Source-confirmed behavior and static derivation

- After `on_melee_kill`, both `attacked_unit` and `attacked_unit_target_unit` must exist, and the latter must not equal the holder. Restore 0.075 of maximum Toughness to that target and 0.05 to the holder. The template has no Coherency or distance test, and no cooldown.
- The code only excludes the holder and `nil`; it does not additionally test whether the target is a player. A different target without a Toughness extension does not guarantee ally restoration. The player description uses the normal ally-combat situation.

## Fixed source evidence

- [scripts/settings/buff/archetype_buff_templates/zealot_buff_templates.lua — L4779-L4816](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/zealot_buff_templates.lua#L4779-L4816)
- [scripts/settings/talent/talent_settings_zealot.lua — L242-L245](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/talent/talent_settings_zealot.lua#L242-L245)
- [scripts/extension_systems/toughness/player_unit_toughness_extension.lua — L253-L285](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/toughness/player_unit_toughness_extension.lua#L253-L285)
- [scripts/settings/ability/archetype_talents/talents/zealot_talents.lua — L3249-L3267](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/zealot_talents.lua#L3249-L3267)
- [scripts/ui/views/talent_builder_view/layouts/zealot_tree.lua — L2111-L2133](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/ui/views/talent_builder_view/layouts/zealot_tree.lua#L2111-L2133)

## Example assumptions and limits

- **Trigger:** a Melee Kill against an enemy targeting another ally restores 7.5% of that ally's maximum Toughness and an additional 5% of yours. It does not trigger if the enemy targets you or has no target.
- **Restoration example:** with the ally's maximum Toughness 120 and yours 100, the ally restores 120 × 7.5% = 9 points, and you restore an extra 100 × 5% = 5. Each recipient follows their own restoration bonuses and missing-Toughness limit. Normal Melee Kill restoration is separate.
- **Distance condition:** the talent adds no Coherency range requirement. What matters is the killed enemy's target at that moment.

- The original game text uses the 1.13.1 / Steam Build 25606770 `ui` resource. Differences between description and implementation still require an in-game check.
- The verified Chinese comparison for hash `185f78b2` found no explicit translation conflict in the direction of the effect. Omitted formulas, caps and detailed limits are supplements.

Mechanisms reuse the fixed-version evidence, with local Build 25606770 English text corresponding to 1.13.1. Actual presentation and behavior remain unobserved in game. Missing details are supplementary explanations.

<a id="original-english-template-and-reconstruction"></a>

## Original English template and reconstruction

Steam Build `25606770`; `content/localization/ui`, resource hash `63564edcb7c3c5ee`; language `en` (code `0`).

- Name key `loc_talent_zealot_melee_kills_restore_toughness_to_target`, hash `28db6608`, entry 2645: **Got Your Back**.
- Description key `loc_talent_zealot_melee_kills_restore_toughness_to_target_desc`, hash `185f78b2`, entry 1591.

Full raw template:

~~~text
Melee Kills vs Enemies targeting an ally replenish {toughness:%s} Toughness to the ally, and an additional {self_toughness:%s} Toughness to you.
~~~

| Placeholder | Value | Formatting |
|---|---|---|
| `toughness` | `0.075` | `percentage`: `7.5%` |
| `self_toughness` | `0.05` | `percentage`: `5%` |

The display mapping uses the verified `toughness` and `self_toughness` values. The existing percentage formatter preserves 7.5%.

Static reconstruction; not an observed game screen:

~~~text
Melee Kills vs Enemies targeting an ally replenish 7.5% Toughness to the ally, and an additional 5% Toughness to you.
~~~

## English comparison

The English independently agrees with the ordinary ally-targeting Melee Kill, recipient split and both restoration values. It does not add a Coherency requirement. Maximum-resource bases, per-recipient modifiers/caps and the code's broader non-self/non-nil target test are supplements; no explicit English contradiction was found.

## Icon source

[Original image](https://gameslantern.com/storage/sites/darktide/exporter/talents/zealot/default/zealot_melee_kills_restore_toughness_to_target.webp) | [Media-Assets Issue](https://github.com/SyuanTsai/Media-Assets/issues/8#issuecomment-5929296872) | [Existing attachment](https://github.com/user-attachments/assets/5ddb9790-0039-4a22-97e6-8ff7c82719c0). The icon identifies the talent; it is not mechanism evidence.
