# Hammer of Judgement: source evidence

[繁體中文](../adamant_multiple_hits_attack_speed.md) | [Player description](README.md#adamant_multiple_hits_attack_speed) | [Technical index](SOURCE_INDEX.md) | [English comparison](LOCALIZATION_COMPARISON.md#adamant_multiple_hits_attack_speed)

Release 1.13.1; fixed SHA `7e662fcda16219d775b84af50322be2e9cd9d62e`. Talent `adamant_multiple_hits_attack_speed`; name key `loc_talent_adamant_multiple_hits_attack_speed`; description key `loc_talent_adamant_multiple_hits_attack_speed_desc`. Node `node_577dcd33-0991-437a-ac3f-93d5cf1eda97`; category Passive talent; one point.

## Source-confirmed behavior and static derivation

`on_hit` requires `attack_type = melee` and `target_number == 3`. It does not trigger on every third swing, nor refresh again at the fourth or fifth target of the same attack. `proc_stat_buffs.melee_attack_speed = 0.1` lasts 3s.

## Fixed source evidence

- [scripts/utilities/action/action_handler.lua — L356-L428](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/action/action_handler.lua#L356-L428)
- [scripts/settings/buff/archetype_buff_templates/adamant_buff_templates.lua — L2642-L2668](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/adamant_buff_templates.lua#L2642-L2668)
- [scripts/settings/talent/talent_settings_adamant.lua — L129-L133](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/talent/talent_settings_adamant.lua#L129-L133)
- [scripts/settings/ability/archetype_talents/talents/adamant_talents.lua — L991-L1014](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/adamant_talents.lua#L991-L1014)
- [scripts/ui/views/talent_builder_view/layouts/adamant_tree.lua — L465-L492](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/ui/views/talent_builder_view/layouts/adamant_tree.lua#L465-L492)

## Example assumptions and limits

- **Trigger and refresh**: Hitting the third enemy in the same melee attack grants 10% Melee Attack Speed for 3s. Meeting the condition again resets the duration; the multiplier does not stack.

- **Attack-speed example**: For an action segment affected by Attack Speed alone, an original duration of 1s becomes 1 ÷ 1.1 ≈ 0.909s.

Values and behavior reuse the verified fixed-version evidence. The examples are static derivations, not in-game tests. English and code evidence both refer to 1.13.1; differences still require an in-game check. Omitted details are supplementary rather than translation errors.

<a id="original-english-template-and-reconstruction"></a>

## Original English template and reconstruction

Steam Build `25606770`; `content/localization/ui`, resource hash `63564edcb7c3c5ee`; language `en` (code `0`).

- Name key `loc_talent_adamant_multiple_hits_attack_speed`, hash `fa31c3cc`, entry 16245: **Hammer of Judgement**.
- Description key `loc_talent_adamant_multiple_hits_attack_speed_desc`, hash `8c88fc12`, entry 9098.

Full raw template:

```text
{melee_attack_speed:%s} Melee Attack Speed for {duration:%s}s on hitting {hits:%s} or more enemies with a Melee Attack.
```

| Placeholder | Value | Formatting |
|---|---|---|
| melee_attack_speed | talent_settings.multiple_hits_attack_speed.melee_attack_speed = 0.1 | Percentage, prefix + → +10% |
| duration | talent_settings.multiple_hits_attack_speed.duration = 3 | Number → 3; template adds s |
| hits | talent_settings.multiple_hits_attack_speed.num_hits = 3 | Number → 3 |

Static reconstruction; not an observed game screen:

```text
+10% Melee Attack Speed for 3s on hitting 3 or more enemies with a Melee Attack.
```

## English comparison

The independently read English agrees with reaching the three-target threshold in a single melee attack and gaining +10% Melee Attack Speed for 3s. Refresh behavior and the action-duration calculation supplement the description. No explicit English contradiction is established.

## Icon source

[Original image](https://gameslantern.com/storage/sites/darktide/exporter/talents/adamant/default/adamant_multiple_hits_attack_speed.webp) | [Media-Assets Issue](https://github.com/SyuanTsai/Media-Assets/issues/11#issuecomment-5932554216) | [Existing attachment](https://github.com/user-attachments/assets/0f0f19ee-07a9-47a6-9acf-599b809569a4). The icon identifies the talent; it is not mechanism evidence.
