# Second Wind: source evidence

[繁體中文](../zealot_toughness_on_dodge.md) | [Player description](README.md#zealot_toughness_on_dodge) | [Technical index](SOURCE_INDEX.md) | [English comparison](LOCALIZATION_COMPARISON.md#zealot_toughness_on_dodge)

Release 1.13.1; fixed SHA `7e662fcda16219d775b84af50322be2e9cd9d62e`. Talent `zealot_toughness_on_dodge`; name key `loc_talent_zealot_toughness_on_dodge`; description key `loc_talent_zealot_toughness_on_dodge_desc`. Node `node_7e007113-75ff-4081-af02-5512abe200dc`; category Skill; one point. Mechanisms and examples reuse verified source evidence; no in-game test was performed.

## Source-confirmed behavior and static derivation

- The template subscribes to `on_successful_dodge`, with `cooldown_duration=.5` and `toughness_percentage=.15`. It calls `Toughness.replenish_percentage` on the holder, rather than granting a flat 15 points. The shared restoration method uses maximum Toughness and restoration stats, then caps the result at missing Toughness.

## Fixed source evidence

- [scripts/settings/buff/archetype_buff_templates/zealot_buff_templates.lua — L499-L512](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/zealot_buff_templates.lua#L499-L512)
- [scripts/extension_systems/toughness/player_unit_toughness_extension.lua — L253-L285](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/toughness/player_unit_toughness_extension.lua#L253-L285)
- [scripts/settings/ability/archetype_talents/talents/zealot_talents.lua — L2911-L2932](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/zealot_talents.lua#L2911-L2932)
- [scripts/ui/views/talent_builder_view/layouts/zealot_tree.lua — L259-L290](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/ui/views/talent_builder_view/layouts/zealot_tree.lua#L259-L290)

## Example assumptions and limits

- **Operation**: Successfully dodging an enemy attack restores 15% of maximum Toughness, at most once every 0.5 seconds. Merely performing a Dodge does not restore it.
- **Restoration example**: With maximum Toughness 100 and no other restoration bonuses, one trigger restores 100 × 15% = 15. At current Toughness 95, only 5 can be restored, reaching the cap.

- The accepted Chinese comparison at hash `7b3709d4` finds no explicit effect-direction contradiction for the same description key/hash. Unlisted formulas, caps and finer restrictions are supplements.
- Actual game behavior and presentation remain unobserved.

Mechanisms reuse the fixed-version evidence, with local Build 25606770 English text corresponding to 1.13.1. Actual presentation and behavior remain unobserved in game. Missing details are supplementary explanations.

<a id="original-english-template-and-reconstruction"></a>

## Original English template and reconstruction

Steam Build `25606770`; `content/localization/ui`, resource hash `63564edcb7c3c5ee`; language `en` (code `0`).

- Name key `loc_talent_zealot_toughness_on_dodge`, hash `0b5ba976`, entry 726: **Second Wind**.
- Description key `loc_talent_zealot_toughness_on_dodge_desc`, hash `7b3709d4`, entry 8009.

Full raw template:

~~~text
Replenish {toughness:%s} Toughness on a Successful Dodge.
~~~

| Placeholder | Value | Formatting |
|---|---|---|
| `toughness` | 0.15 → 15% | `percentage`; `zealot_toughness_on_dodge.toughness_percentage` |

The minimal display mapping at `zealot_talents.lua` L2911-L2927 supplies the accepted percentage. The cooldown is absent from the English template.

Static reconstruction; not an observed game screen:

~~~text
Replenish 15% Toughness on a Successful Dodge.
~~~

## English comparison

The English explicitly requires a **Successful** Dodge and restores 15% Toughness, matching the accepted event and percentage. It does not say every Dodge input works. Maximum-Toughness basis, restoration modifiers, the 0.5-second cooldown and missing-Toughness cap illustrated by 15 or 5 restored supplement the description; no English erratum is established.

## Icon source

[Original image](https://gameslantern.com/storage/sites/darktide/exporter/talents/zealot/default/zealot_toughness_on_dodge.webp) | [Media-Assets Issue](https://github.com/SyuanTsai/Media-Assets/issues/8#issuecomment-5929296872) | [Existing attachment](https://github.com/user-attachments/assets/7d6f33d9-5ed5-49d9-9f4c-333565e17216). The icon identifies the talent; it is not mechanism evidence.
