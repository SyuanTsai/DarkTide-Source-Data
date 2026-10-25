# Assassination Protocols: source evidence

[繁體中文](../cryptic_ranged_vs_bfg.md) | [Player description](README.md#cryptic_ranged_vs_bfg) | [Technical index](SOURCE_INDEX.md) | [English comparison](LOCALIZATION_COMPARISON.md#cryptic_ranged_vs_bfg)

Release 1.13.1; fixed SHA `7e662fcda16219d775b84af50322be2e9cd9d62e`. Talent `cryptic_ranged_vs_bfg`; name key `loc_talent_cryptic_ranged_vs_bfg`; description key `loc_talent_cryptic_ranged_vs_bfg_desc`. Node `node_7d5dc6be-b293-4831-a12c-d79c725e5b7a`; category Talent; one point. Mechanisms and examples reuse verified source evidence; no in-game test was performed.

## Source-confirmed behavior and static derivation

- `ranged_damage_vs_ogryn`, `ranged_damage_vs_monsters` and `ranged_damage_vs_captains` are each `0.25`.
- Shared damage calculation checks `breed.tags` and adds the applicable bonuses. A target's physical size alone does not establish eligibility.

## Fixed source evidence

- [scripts/utilities/attack/damage_calculation.lua — L389-L413](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/attack/damage_calculation.lua#L389-L413)
- [scripts/settings/talent/talent_settings_cryptic.lua — L584-L588](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/talent/talent_settings_cryptic.lua#L584-L588)
- [scripts/settings/buff/archetype_buff_templates/cryptic_buff_templates.lua — L3147-L3155](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/cryptic_buff_templates.lua#L3147-L3155)
- [scripts/utilities/attack/damage_calculation.lua — L232-L245](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/attack/damage_calculation.lua#L232-L245)
- [scripts/settings/ability/archetype_talents/talents/cryptic_talents.lua — L2341-L2356](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/cryptic_talents.lua#L2341-L2356)
- [scripts/ui/views/talent_builder_view/layouts/cryptic_tree.lua — L1456-L1485](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/ui/views/talent_builder_view/layouts/cryptic_tree.lua#L1456-L1485)

## Example assumptions and limits

- **Targets**: Ranged attacks deal 25% more damage to Ogryn, Monstrosity or Captain enemies. Melee attacks do not benefit.
- **Damage example**: Against a target matching one of those categories, base ranged damage 100 becomes `100 × 1.25 = 125`. With an existing 20% bonus in the same stage, it becomes `100 × (1 + 20% + 25%) = 145`.

The examples assume a target matching one listed category and otherwise unchanged damage conditions. The bonus is additive with other bonuses in the same damage stage.

Mechanisms reuse the fixed-version evidence, with local Build 25606770 English text corresponding to 1.13.1. Actual presentation and behavior remain unobserved in game. Missing details are supplementary explanations.

<a id="original-english-template-and-reconstruction"></a>

## Original English template and reconstruction

Steam Build `25606770`; `content/localization/ui`, resource hash `63564edcb7c3c5ee`; language `en` (code `0`).

- Name key `loc_talent_cryptic_ranged_vs_bfg`, hash `575cea5a`, entry 5674: **Assassination Protocols**.
- Description key `loc_talent_cryptic_ranged_vs_bfg_desc`, hash `01397401`, entry 70.

Full raw template:

~~~text
Increase Ranged Damage vs Ogryns, Monstrosities and Captains by {damage:%s}.
~~~

| Placeholder | Value | Formatting |
|---|---|---|
| `damage` | `0.25` → `+25%` | Percentage with `+` prefix; mapped from `ranged_damage_vs_captains`. |

The display mapping is `cryptic_talents.lua` L2349-L2355. All three target-category values reuse the verified settings listed above.

Static reconstruction; not an observed game screen:

~~~text
Increase Ranged Damage vs Ogryns, Monstrosities and Captains by +25%.
~~~

## English comparison

The English correctly specifies Ranged Damage, the three enemy categories and +25%. The breed-tag test and additive calculation are supplements; the text does not classify enemies by visible size. No explicit English contradiction was found.

## Icon source

[Original image](https://gameslantern.com/storage/sites/darktide/exporter/talents/cryptic/default/cryptic_ranged_vs_bfg.webp) | [Media-Assets Issue](https://github.com/SyuanTsai/Media-Assets/issues/13#issuecomment-5935653628) | [Existing attachment](https://github.com/user-attachments/assets/c9876de0-2e5d-4421-9bee-326ac0c92290). The icon identifies the talent; it is not mechanism evidence.
