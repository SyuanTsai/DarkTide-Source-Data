# Righteous Warrior: source evidence

[繁體中文](../zealot_fanatic_rage_improved.md) | [Player description](README.md#zealot_fanatic_rage_improved) | [Technical index](SOURCE_INDEX.md) | [English comparison](LOCALIZATION_COMPARISON.md#zealot_fanatic_rage_improved)

Release 1.13.1; fixed SHA `7e662fcda16219d775b84af50322be2e9cd9d62e`. Talent `zealot_fanatic_rage_improved`; name key `loc_talent_zealot_fanatic_rage_improved`; description key `loc_talent_zealot_fanatic_rage_improved_desc`. Node `node_23264a41-d011-4792-a45e-ea68c7d5b27f`; category Keystone; one point. Mechanisms and examples reuse verified source evidence; no in-game test was performed.

## Source-confirmed behavior and static derivation

- This upgrade grants the `zealot_preacher_increased_crit_chance` special rule. The base Fury Buff grants `passive_1.crit_chance=0.15`; its conditional stat Buff adds `spec_passive_2.crit_chance=0.10` only while that special rule exists.
- This is 10 additional percentage points of Critical Chance, rather than multiplying the original chance by 1.1. It applies only while the Fury Buff exists; the upgrade has no extra stacks or independent cooldown.

## Fixed source evidence

- [scripts/settings/ability/archetype_talents/talents/zealot_talents.lua — L1108-L1138](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/zealot_talents.lua#L1108-L1138)
- [scripts/settings/talent/talent_settings_zealot.lua — L459-L468](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/talent/talent_settings_zealot.lua#L459-L468)
- [scripts/settings/talent/talent_settings_zealot.lua — L527-L529](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/talent/talent_settings_zealot.lua#L527-L529)
- [scripts/settings/buff/archetype_buff_templates/zealot_buff_templates.lua — L921-L978](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/zealot_buff_templates.lua#L921-L978)
- [scripts/ui/views/talent_builder_view/layouts/zealot_tree.lua — L1354-L1376](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/ui/views/talent_builder_view/layouts/zealot_tree.lua#L1354-L1376)
- [scripts/settings/ability/archetype_talents/talents/zealot_talents.lua — L1108-L1128](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/zealot_talents.lua#L1108-L1128)
- [scripts/ui/views/talent_builder_view/layouts/zealot_tree.lua — L1354-L1376](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/ui/views/talent_builder_view/layouts/zealot_tree.lua#L1354-L1376)

## Example assumptions and limits

- **Effect**: During Fury, gain another 10 percentage points of Critical Chance on top of Blazing Piety's 15, for a total talent bonus of 25 points.
- **Critical Chance example**: An existing 5% becomes 5% + 15% + 10% = 30% when entering Fury with this upgrade. This adds probability; it does not multiply the original 5% by 1.25.

- These are the bonuses from the talents. Weapon and character base values and other Critical Chance modifiers still affect the final display and roll.
- The accepted Chinese comparison at hash `cde6c5ff` records that both languages describe increasing the Critical Chance provided by Blazing Piety. Percentage-point and total-sum wording prevents misreading.
- Actual game behavior and presentation remain unobserved; omitted details are supplementary explanations.

Mechanisms reuse the fixed-version evidence, with local Build 25606770 English text corresponding to 1.13.1. Actual presentation and behavior remain unobserved in game. Missing details are supplementary explanations.

<a id="original-english-template-and-reconstruction"></a>

## Original English template and reconstruction

Steam Build `25606770`; `content/localization/ui`, resource hash `63564edcb7c3c5ee`; language `en` (code `0`).

- Name key `loc_talent_zealot_fanatic_rage_improved`, hash `4ae53808`, entry 4870: **Righteous Warrior**.
- Description key `loc_talent_zealot_fanatic_rage_improved_desc`, hash `cde6c5ff`, entry 13313.

Full raw template:

~~~text
{crit_chance:%s} Critical Hit Chance from {talent_name:%s}.
~~~

| Placeholder | Value | Formatting |
|---|---|---|
| `crit_chance` | 0.10 → +10% | `percentage`, `+` prefix; `talent_settings_3.spec_passive_2.crit_chance` |
| `talent_name` | `loc_talent_zealot_fanatic_rage`: Blazing Piety | `loc_string`; hash `e87afd11`, entry 15098 |

The minimal display mapping at `zealot_talents.lua` L1108-L1134 supplies the accepted extra chance and localized main Keystone name.

Static reconstruction; not an observed game screen:

~~~text
+10% Critical Hit Chance from Blazing Piety.
~~~

## English comparison

The English gives an extra +10% Critical Hit Chance from Blazing Piety, agreeing with the conditional additional 0.10. It does not state a relative multiplier. Fury-only application, additive percentage points, the combined 25-point talent bonus and example reaching 30% from a 5% base supplement the short description.

## Icon source

[Original image](https://gameslantern.com/storage/sites/darktide/exporter/talents/zealot/keystone_modifier/zealot_fanatic_rage_improved.webp) | [Media-Assets Issue](https://github.com/SyuanTsai/Media-Assets/issues/8#issuecomment-5929289315) | [Existing attachment](https://github.com/user-attachments/assets/9d85e538-7fb1-4308-99b9-7ed9408eead2). The icon identifies the talent; it is not mechanism evidence.
