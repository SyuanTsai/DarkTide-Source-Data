# Go Get 'Em!: source evidence

[繁體中文](../adamant_companion_focus_ranged.md) | [Player description](README.md#adamant_companion_focus_ranged) | [Technical index](SOURCE_INDEX.md) | [English comparison](LOCALIZATION_COMPARISON.md#adamant_companion_focus_ranged)

Release 1.13.1; fixed SHA `7e662fcda16219d775b84af50322be2e9cd9d62e`. Talent `adamant_companion_focus_ranged`; node `node_524d5b7c-7557-4a87-aa66-5ef726bdcf45`; category Keystone; one point.

## Source-confirmed behavior and static derivation

- The talent supplies the `adamant_companion_ranged_focus` special rule and `adamant_companion_focus_ranged` stat buff. The selector reads the special rule, adds `ranged_focus_weight = 10` to Ranged targets' `threatVal` and uses larger close/far distances.
- The stat buff supplies `companion_damage_vs_ranged = 0.50`. Shared damage calculation reads this owner stat and adds it to damage modifiers only when the attacker is a companion and the target has a `far` or `ranged` classification.

## Fixed source evidence

- [scripts/settings/ability/archetype_talents/talents/adamant_talents.lua — L2454-L2473](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/adamant_talents.lua#L2454-L2473)
- [scripts/settings/talent/talent_settings_adamant.lua — L411-L417](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/talent/talent_settings_adamant.lua#L411-L417)
- [scripts/settings/buff/archetype_buff_templates/adamant_buff_templates.lua — L3173-L3179](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/adamant_buff_templates.lua#L3173-L3179)
- [scripts/extension_systems/perception/target_selection_templates/companion_dog_target_selection_template.lua — L125-L130](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/perception/target_selection_templates/companion_dog_target_selection_template.lua#L125-L130)
- [scripts/extension_systems/perception/target_selection_templates/companion_dog_target_selection_template.lua — L213-L215](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/perception/target_selection_templates/companion_dog_target_selection_template.lua#L213-L215)
- [scripts/extension_systems/perception/target_selection_templates/companion_dog_target_selection_template.lua — L256-L310](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/perception/target_selection_templates/companion_dog_target_selection_template.lua#L256-L310)
- [scripts/utilities/attack/damage_calculation.lua — L265-L276](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/attack/damage_calculation.lua#L265-L276)
- [scripts/utilities/attack/damage_calculation.lua — L377-L380](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/attack/damage_calculation.lua#L377-L380)
- [scripts/settings/ability/archetype_talents/talents/adamant_talents.lua — L2454-L2473](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/adamant_talents.lua#L2454-L2473)
- [scripts/ui/views/talent_builder_view/layouts/adamant_tree.lua — L1908-L1934](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/ui/views/talent_builder_view/layouts/adamant_tree.lua#L1908-L1934)

## Example assumptions and limits

- **Target priority**: The Cyber-Mastiff prioritizes Ranged Enemies. Distance, threat and its current target still influence selection; choosing a Ranged Enemy is not guaranteed every time.

- **Damage examples**: Cyber-Mastiff Damage against Ranged Enemies increases by 50%. With this bonus alone, base damage 100 becomes 150. With another +25% bonus in the same stage, the result is 100 × (1 + 25% + 50%) = 175.

With this talent alone, base Cyber-Mastiff damage 100 against a Ranged target becomes 150. Other target types do not receive this specific bonus.

Target-selection weight is compared with terrain, distance, threat, line of sight and other weights. The weighting does not guarantee that the Cyber-Mastiff attacks only Ranged Enemies. Damage examples isolate this talent except for the explicitly stated additional +25% in the same stage.

Values and behavior reuse fixed-version evidence; examples are static derivations. Chinese, English and code evidence all refer to 1.13.1. Game execution and the final game UI were not observed. Wording differences are compared with the accepted implementation evidence; omitted details are not automatically translation errors.

<a id="original-english-template-and-reconstruction"></a>

## Original English template and reconstruction

Steam Build `25606770`; `content/localization/ui`, resource hash `63564edcb7c3c5ee`; language `en` (code `0`).

- Name key `loc_talent_adamant_cyber_mastiff_ranged`, hash `21c58137`, entry 2202: **Go Get 'Em!**.
- Description key `loc_talent_adamant_cyber_mastiff_ranged_desc`, hash `52fe19b9`, entry 5393.

Full raw template:

```text
Your Cyber-Mastiff prioritises Ranged Enemies, and deals {damage:%s} Damage to them.
```

The display maps `damage` to `talent_settings.companion_focus_ranged.damage`. Values and shared formatting reuse the accepted evidence.

| Placeholder | Value | Formatting |
|---|---|---|
| damage | 0.50 | Percentage with + prefix → +50% |

Static reconstruction; not an observed game screen:

```text
Your Cyber-Mastiff prioritises Ranged Enemies, and deals +50% Damage to them.
```

## English comparison limits

The independently read English matches prioritizing Ranged Enemies and the +50% Damage bonus after applying the configured display prefix. It does not promise that only Ranged Enemies are selected. Selection weights/distances, detailed damage eligibility, aggregation and examples are supplementary. No explicit English contradiction is established for this talent. Mechanisms, citations, shared formatting and icon provenance reuse the existing evidence.

## Icon source

[Original image](https://gameslantern.com/storage/sites/darktide/exporter/talents/adamant/keystone/adamant_companion_focus_ranged.webp) | [Media-Assets Issue](https://github.com/SyuanTsai/Media-Assets/issues/11#issuecomment-5932554216) | [Existing attachment](https://github.com/user-attachments/assets/6208ebde-9eb1-4a4d-923c-823a0e511bf9). The icon identifies the talent; it is not mechanism evidence.
