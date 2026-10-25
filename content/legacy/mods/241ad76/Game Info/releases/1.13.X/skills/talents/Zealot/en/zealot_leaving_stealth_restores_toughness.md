# Invigorating Revelation: source evidence

[繁體中文](../zealot_leaving_stealth_restores_toughness.md) | [Player description](README.md#zealot_leaving_stealth_restores_toughness) | [Technical index](SOURCE_INDEX.md) | [English comparison](LOCALIZATION_COMPARISON.md#zealot_leaving_stealth_restores_toughness)

Release 1.13.1; fixed SHA `7e662fcda16219d775b84af50322be2e9cd9d62e`. Talent `zealot_leaving_stealth_restores_toughness`; name key `loc_talent_zealot_leaving_stealth_restores_toughness`; description key `loc_talent_zealot_stealth_toughness_dr_desc`. Node `node_d4c52149-9efe-492d-947e-f4c9e1b4bef7`; category Ability; one point. Mechanisms and examples reuse verified source evidence; no in-game test was performed.

## Source-confirmed behavior and static derivation

- The node registers `special_rules.zealot_leave_stealth_toughness_regen`. When `zealot_invisibility.start_func` detects this rule, it calls `Toughness.replenish_percentage` with `toughness_to_restore=0.5`. Its `stop_func` adds `zealot_leaving_stealth_restores_toughness`.
- Restoration on entry is based on 50% of maximum Toughness, not a percentage of missing Toughness. The shared `Toughness.recover_percentage_toughness` limits the requested amount to missing Toughness, so excess restoration is not stored.
- The exit Buff lasts 8 seconds and has `stat_buffs.damage_taken_multiplier=0.7`. Unlike the Chorus upgrade's `toughness_damage_taken_multiplier`, this is the general `damage_taken_multiplier`, not only Toughness damage.
- The Buff has `max_stacks=1`. Entry does not apply the post-exit damage reduction; exit does not restore another 50% Toughness.

## Fixed source evidence

- [scripts/settings/ability/archetype_talents/talents/zealot_talents.lua — L600-L631](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/zealot_talents.lua#L600-L631)
- [scripts/settings/talent/talent_settings_zealot.lua — L157-L161](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/talent/talent_settings_zealot.lua#L157-L161)
- [scripts/settings/buff/archetype_buff_templates/zealot_buff_templates.lua — L439-L453](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/zealot_buff_templates.lua#L439-L453)
- [scripts/settings/buff/archetype_buff_templates/zealot_buff_templates.lua — L4280-L4311](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/zealot_buff_templates.lua#L4280-L4311)
- [scripts/extension_systems/toughness/player_unit_toughness_extension.lua — L253-L285](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/toughness/player_unit_toughness_extension.lua#L253-L285)
- [scripts/utilities/attack/damage_calculation.lua — L590-L610](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/attack/damage_calculation.lua#L590-L610)
- [scripts/settings/ability/archetype_talents/talents/zealot_talents.lua — L600-L631](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/zealot_talents.lua#L600-L631)
- [scripts/ui/views/talent_builder_view/layouts/zealot_tree.lua — L919-L943](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/ui/views/talent_builder_view/layouts/zealot_tree.lua#L919-L943)

## Example assumptions and limits

- **Toughness restoration**: Entering Shroudfield immediately restores 50% maximum Toughness. Leaving Stealth does not restore it again.
- **Damage reduction**: After leaving Stealth, gain 30% damage reduction for 8 seconds.
- **Restoration and damage example**: With maximum Toughness 100 and current Toughness 20, entry restores 100 × 50% = 50 to reach 70. If only 30 is missing, only 30 is restored. After exit, damage of 100 becomes 100 × 0.7 = 70; with another independent 25% reduction it becomes 52.5.

- The general `damage_taken_multiplier` is still combined with enemy attack damage, armour, blocking, Toughness transfer and other calculation stages. It does not guarantee that every final damage outcome is exactly 30% lower.
- The 8-second post-Stealth timer begins when the Buff is added. External removal or interactions with other abilities can change its actual lifetime.
- The Chinese inventory describes Toughness restoration and damage reduction on leaving Stealth; its accepted source note records compatible timing at this fixed version. Hash `cc97b988` has matching effect directions in both languages. Trigger details, stacking, restoration and calculations supplement the wording. Actual game display and behavior remain unobserved.

Mechanisms reuse the fixed-version evidence, with local Build 25606770 English text corresponding to 1.13.1. Actual presentation and behavior remain unobserved in game. Missing details are supplementary explanations.

<a id="original-english-template-and-reconstruction"></a>

## Original English template and reconstruction

Steam Build `25606770`; `content/localization/ui`, resource hash `63564edcb7c3c5ee`; language `en` (code `0`).

- Name key `loc_talent_zealot_leaving_stealth_restores_toughness`, hash `5be8c25c`, entry 5959: **Invigorating Revelation**.
- Description key `loc_talent_zealot_stealth_toughness_dr_desc`, hash `cc97b988`, entry 13226.

Full raw template:

~~~text
{talent_name:%s} Replenishes {toughness:%s} Toughness. Gain {dr:%s} Damage Resistance for {duration:%s}s upon exiting Stealth.
~~~

| Placeholder | Value | Formatting |
|---|---|---|
| `talent_name` | `loc_ability_zealot_stealth`: Shroudfield | `loc_string`; hash `e94fd822`, entry 15155 |
| `toughness` | 0.5 → 50% | `percentage`; `toughness_to_restore` |
| `dr` | 0.7 → round((1 − 0.7) × 100) = 30 → +30% | `percentage`, `+` prefix, explicit value manipulation |
| `duration` | 8 | `value`; `damage_reduction_duration` |

The minimal display mapping at `zealot_talents.lua` L600-L628 supplies the existing settings and name key. Mechanism values reuse the accepted evidence.

Static reconstruction; not an observed game screen:

~~~text
Shroudfield Replenishes 50% Toughness. Gain +30% Damage Resistance for 8s upon exiting Stealth.
~~~

## English comparison

The English attaches “upon exiting Stealth” to the damage-resistance sentence. It does not explicitly place the first sentence's Toughness restoration on exit, so the accepted entry/exit split is a supplement rather than a contradiction. Its 50% restoration and +30% resistance for 8 seconds match the evidence. Maximum-Toughness basis, cap, one stack and other damage stages are omitted details.

## Icon source

[Original image](https://gameslantern.com/storage/sites/darktide/exporter/talents/zealot/ability_modifier/zealot_leaving_stealth_restores_toughness.webp) | [Media-Assets Issue](https://github.com/SyuanTsai/Media-Assets/issues/8#issuecomment-5929289315) | [Existing attachment](https://github.com/user-attachments/assets/d5730c05-1fc1-4fd5-9943-53bf390b9a7d). The icon identifies the talent; it is not mechanism evidence.
