# Purge the Unclean: source evidence

[繁體中文](../zealot_increased_damage_vs_resilient.md) | [Player description](README.md#zealot_increased_damage_vs_resilient) | [Technical index](SOURCE_INDEX.md) | [English comparison](LOCALIZATION_COMPARISON.md#zealot_increased_damage_vs_resilient)

Release 1.13.1; fixed SHA `7e662fcda16219d775b84af50322be2e9cd9d62e`. Talent `zealot_increased_damage_vs_resilient`; name key `loc_talent_zealot_3_passive_2`; description key `loc_talent_zealot_3_passive_2_description`. Node `node_a827f270-b198-4fa8-be77-59feaebb2fc1`; category Skill; one point. Mechanisms and examples reuse verified source evidence; no in-game test was performed.

## Source-confirmed behavior and static derivation

- The template adds .2 to `disgustingly_resilient_damage` and `resistant_damage`. These correspond to actual armour types used by `_apply_armor_type_buffs_to_damage`, rather than all enemies that look infected. The two mutually exclusive armour types do not combine the bonuses into +40%.

## Fixed source evidence

- [scripts/settings/buff/archetype_buff_templates/zealot_buff_templates.lua — L1000-L1010](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/zealot_buff_templates.lua#L1000-L1010)
- [scripts/settings/talent/talent_settings_zealot.lua — L469-L472](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/talent/talent_settings_zealot.lua#L469-L472)
- [scripts/utilities/attack/damage_calculation.lua — L192-L205](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/attack/damage_calculation.lua#L192-L205)
- [scripts/settings/ability/archetype_talents/talents/zealot_talents.lua — L1363-L1379](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/zealot_talents.lua#L1363-L1379)
- [scripts/ui/views/talent_builder_view/layouts/zealot_tree.lua — L122-L151](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/ui/views/talent_builder_view/layouts/zealot_tree.lua#L122-L151)

## Example assumptions and limits

- **Operation**: Deal 20% more damage against Infested and Unyielding armour types, judged from the hit location's armour type.
- **Damage example**: Counting only this armour-type bonus, 100 becomes 100 × 1.20 = 120. With an existing 10% bonus of the same type, 110 becomes 100 × (1 + 10% + 20%) = 130, an actual increase of about 18.18%.

- The accepted Chinese comparison at hash `96b4257f` finds no explicit effect-direction contradiction for the same description key/hash. Unlisted formulas, caps and finer restrictions are supplements.
- Actual game behavior and presentation remain unobserved.

Mechanisms reuse the fixed-version evidence, with local Build 25606770 English text corresponding to 1.13.1. Actual presentation and behavior remain unobserved in game. Missing details are supplementary explanations.

<a id="original-english-template-and-reconstruction"></a>

## Original English template and reconstruction

Steam Build `25606770`; `content/localization/ui`, resource hash `63564edcb7c3c5ee`; language `en` (code `0`).

- Name key `loc_talent_zealot_3_passive_2`, hash `57c6f92b`, entry 5693: **Purge the Unclean**.
- Description key `loc_talent_zealot_3_passive_2_description`, hash `96b4257f`, entry 9740.

Full raw template:

~~~text
{damage:%s} Increased Damage against Infested & Unyielding Enemies.
~~~

| Placeholder | Value | Formatting |
|---|---|---|
| `damage` | 0.20 → +20% | `percentage`, `+` prefix; `talent_settings_3.passive_2.damage_vs_disgusting` |

The minimal display mapping at `zealot_talents.lua` L1363-L1374 supplies the accepted damage value. Both relevant armour-type bonuses are .2 in the accepted mechanism. The JSONL suffix `[Narrative]` is metadata, not part of the English text.

Static reconstruction; not an observed game screen:

~~~text
+20% Increased Damage against Infested & Unyielding Enemies.
~~~

## English comparison

The English gives +20% damage against Infested and Unyielding enemies. These capitalized categories correspond to the accepted armour-type bonuses. The hit location determines applicability, rather than infected appearance; mutually exclusive types cannot produce +40% on one hit. These classification and combination details and the original 100→120/110→130 example supplement the English; no explicit contradiction is established.

## Icon source

[Original image](https://gameslantern.com/storage/sites/darktide/exporter/talents/zealot/default/zealot_increased_damage_vs_resilient.webp) | [Media-Assets Issue](https://github.com/SyuanTsai/Media-Assets/issues/8#issuecomment-5929289315) | [Existing attachment](https://github.com/user-attachments/assets/162368d9-1a5d-4273-a2cd-4ab8c3c22a6d). The icon identifies the talent; it is not mechanism evidence.
