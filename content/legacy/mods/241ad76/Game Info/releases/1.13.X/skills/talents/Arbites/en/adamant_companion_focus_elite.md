# Unleashed Brutality: source evidence

[繁體中文](../adamant_companion_focus_elite.md) | [Player description](README.md#adamant_companion_focus_elite) | [Technical index](SOURCE_INDEX.md) | [English comparison](LOCALIZATION_COMPARISON.md#adamant_companion_focus_elite)

Release 1.13.1; fixed SHA `7e662fcda16219d775b84af50322be2e9cd9d62e`. Talent `adamant_companion_focus_elite`; node `node_44f3d117-9099-42ab-9b11-8ff7a5ef1a66`; category Keystone; one point.

## Source-confirmed behavior and static derivation

- The companion dog target selector reads the `adamant_companion_elite_focus` special rule. It adds weight 10 separately for `tags.elite` and `tags.special`.
- The passive stat buff supplies both `companion_damage_vs_elites = 0.25` and `companion_damage_vs_special = 0.25`. Shared damage calculation reads the corresponding owner modifier according to companion-attacker and target-tag conditions.

## Fixed source evidence

- [scripts/settings/ability/archetype_talents/talents/adamant_talents.lua — L2474-L2493](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/adamant_talents.lua#L2474-L2493)
- [scripts/settings/talent/talent_settings_adamant.lua — L411-L419](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/talent/talent_settings_adamant.lua#L411-L419)
- [scripts/settings/buff/archetype_buff_templates/adamant_buff_templates.lua — L3180-L3187](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/adamant_buff_templates.lua#L3180-L3187)
- [scripts/extension_systems/perception/target_selection_templates/companion_dog_target_selection_template.lua — L125-L130](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/perception/target_selection_templates/companion_dog_target_selection_template.lua#L125-L130)
- [scripts/extension_systems/perception/target_selection_templates/companion_dog_target_selection_template.lua — L256-L288](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/perception/target_selection_templates/companion_dog_target_selection_template.lua#L256-L288)
- [scripts/utilities/attack/damage_calculation.lua — L334-L355](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/attack/damage_calculation.lua#L334-L355)
- [scripts/settings/ability/archetype_talents/talents/adamant_talents.lua — L2474-L2493](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/adamant_talents.lua#L2474-L2493)
- [scripts/ui/views/talent_builder_view/layouts/adamant_tree.lua — L1935-L1961](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/ui/views/talent_builder_view/layouts/adamant_tree.lua#L1935-L1961)

## Example assumptions and limits

- **Target priority**: The Cyber-Mastiff prioritizes Elite and Specialist Enemies. Distance, threat and its current target still influence selection; choosing one of these enemies is not guaranteed every time.

- **Damage examples**: Cyber-Mastiff Damage against Elites and Specialists increases by 25%. With this bonus alone, base damage 100 becomes 125. With another +25% bonus in the same stage, the result is 100 × (1 + 25% + 25%) = 150.

For a target carrying `elite` or `special`, this talent alone takes base Cyber-Mastiff damage 100 to 125.

Elite and Specialist classification follows the enemy breed tags. If both classifications are present, modifier aggregation must follow the actual target tags and shared stat resolution. This existing boundary remains recorded. Damage examples isolate the talent except for the explicitly stated additional +25% in the same stage.

Values and behavior reuse fixed-version evidence; examples are static derivations. Chinese, English and code evidence all refer to 1.13.1. Game execution and the final game UI were not observed. Wording differences are compared with the accepted implementation evidence; omitted details are not automatically translation errors.

<a id="original-english-template-and-reconstruction"></a>

## Original English template and reconstruction

Steam Build `25606770`; `content/localization/ui`, resource hash `63564edcb7c3c5ee`; language `en` (code `0`).

- Name key `loc_talent_adamant_cyber_mastiff_elites`, hash `c511d9b9`, entry 12714: **Unleashed Brutality**.
- Description key `loc_talent_adamant_cyber_mastiff_elites_desc`, hash `596a5388`, entry 5792.

Full raw template:

```text
Your Cyber-Mastiff prioritises Elite and Specialist Enemies, and deals {damage:%s} Damage to them.
```

The display maps `damage` to `talent_settings.companion_focus_elite.damage`. Values and shared formatting reuse the accepted evidence.

| Placeholder | Value | Formatting |
|---|---|---|
| damage | 0.25 | Percentage with + prefix → +25% |

Static reconstruction; not an observed game screen:

```text
Your Cyber-Mastiff prioritises Elite and Specialist Enemies, and deals +25% Damage to them.
```

## English comparison limits

The independently read English matches prioritizing Elite and Specialist Enemies and the +25% Damage bonus after applying the configured display prefix. Selection weights, competing factors, tag-dependent damage eligibility, aggregation and examples are supplementary. No explicit English contradiction is established for this talent. Mechanisms, citations, shared formatting and icon provenance reuse the existing evidence.

## Icon source

[Original image](https://gameslantern.com/storage/sites/darktide/exporter/talents/adamant/keystone/adamant_companion_focus_elite.webp) | [Media-Assets Issue](https://github.com/SyuanTsai/Media-Assets/issues/11#issuecomment-5932554216) | [Existing attachment](https://github.com/user-attachments/assets/d61cee49-95ce-43fb-ae8a-b05ba598366b). The icon identifies the talent; it is not mechanism evidence.
