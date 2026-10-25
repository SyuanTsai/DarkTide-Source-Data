# Walk It Off: source evidence

[繁體中文](../adamant_stamina_spent_replenish_toughness.md) | [Player description](README.md#adamant_stamina_spent_replenish_toughness) | [Technical index](SOURCE_INDEX.md) | [English comparison](LOCALIZATION_COMPARISON.md#adamant_stamina_spent_replenish_toughness)

Release 1.13.1; fixed SHA `7e662fcda16219d775b84af50322be2e9cd9d62e`. Talent `adamant_stamina_spent_replenish_toughness`; name key `loc_talent_adamant_stamina_regens_toughness`; description key `loc_talent_adamant_stamina_spent_replenish_toughness_desc`. Node `node_89e56162-d28d-49d5-a01a-ca818154041f`; category Passive talent; one point.

## Source-confirmed behavior and static derivation

Each update accumulates decreases in `current_stamina`, excluding decreases caused by changes to maximum Stamina. At 1 accumulated point, the buff subtracts 1 and adds the child buff; this occurs at most once per update and the remainder is retained. The child buff has `max_stacks = 1` and `refresh_duration_on_stack = true`, replenishing maximum Toughness at `0.1 × dt / 3` over 3s.

## Fixed source evidence

- [scripts/settings/buff/archetype_buff_templates/adamant_buff_templates.lua — L3095-L3157](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/adamant_buff_templates.lua#L3095-L3157)
- [scripts/extension_systems/toughness/player_unit_toughness_extension.lua — L253-L279](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/toughness/player_unit_toughness_extension.lua#L253-L279)
- [scripts/settings/buff/archetype_buff_templates/adamant_buff_templates.lua — L3095-L3139](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/adamant_buff_templates.lua#L3095-L3139)
- [scripts/settings/talent/talent_settings_adamant.lua — L483-L487](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/talent/talent_settings_adamant.lua#L483-L487)
- [scripts/settings/ability/archetype_talents/talents/adamant_talents.lua — L2782-L2804](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/adamant_talents.lua#L2782-L2804)
- [scripts/ui/views/talent_builder_view/layouts/adamant_tree.lua — L613-L637](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/ui/views/talent_builder_view/layouts/adamant_tree.lua#L613-L637)

## Example assumptions and limits

- **Trigger and refresh**: Each accumulated 1 point of Stamina spent starts Toughness recovery lasting 3s. Spending another full point during the effect resets the 3s duration; the recovery rate does not stack.

- **Recovery example**: At maximum Toughness 100, with sufficient deficit and no other recovery bonus, recovery is about 100 × 10% ÷ 3 = 3.33 points per second. Triggering again after 2s and continuing until expiry gives about 3.33 × 5 ≈ 16.67 points in total using the unrounded rate, rather than instantly restoring 20 points.

Values and behavior reuse the verified fixed-version evidence. The examples are static derivations, not in-game tests. English and code evidence both refer to 1.13.1; differences still require an in-game check. Omitted details are supplementary rather than translation errors.

<a id="original-english-template-and-reconstruction"></a>

## Original English template and reconstruction

Steam Build `25606770`; `content/localization/ui`, resource hash `63564edcb7c3c5ee`; language `en` (code `0`).

- Name key `loc_talent_adamant_stamina_regens_toughness`, hash `69689f35`, entry 6875: **Walk It Off**.
- Description key `loc_talent_adamant_stamina_spent_replenish_toughness_desc`, hash `5bfeac39`, entry 5964.

Full raw template:

```text
Spending {stamina:%s} Stamina replenishes {toughness:%s} Toughness over {duration:%s}s.
```

| Placeholder | Value | Formatting |
|---|---|---|
| stamina | talent_settings.stamina_spent_replenish_toughness.stamina = 1 | Number → 1 |
| toughness | talent_settings.stamina_spent_replenish_toughness.toughness = 0.1 | Percentage, no prefix → 10% |
| duration | talent_settings.stamina_spent_replenish_toughness.duration = 3 | Number → 3; template adds s |

Static reconstruction; not an observed game screen:

```text
Spending 1 Stamina replenishes 10% Toughness over 3s.
```

## English comparison

The independently read English agrees with spending 1 Stamina and replenishing 10% Toughness over 3s. Spending-accounting details, duration refresh, maximum-Toughness basis, recovery modifiers and deficit limits supplement the description. No explicit English contradiction is established.

## Icon source

[Original image](https://gameslantern.com/storage/sites/darktide/exporter/talents/adamant/default/adamant_stamina_spent_replenish_toughness.webp) | [Media-Assets Issue](https://github.com/SyuanTsai/Media-Assets/issues/11#issuecomment-5932563852) | [Existing attachment](https://github.com/user-attachments/assets/4c4b06a3-049f-4272-b1d2-a8a472f541b0). The icon identifies the talent; it is not mechanism evidence.
