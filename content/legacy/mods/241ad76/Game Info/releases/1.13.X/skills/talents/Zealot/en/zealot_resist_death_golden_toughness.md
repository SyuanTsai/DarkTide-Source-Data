# Risen: source evidence

[繁體中文](../zealot_resist_death_golden_toughness.md) | [Player description](README.md#zealot_resist_death_golden_toughness) | [Technical index](SOURCE_INDEX.md) | [English comparison](LOCALIZATION_COMPARISON.md#zealot_resist_death_golden_toughness)

Release 1.13.1; fixed SHA `7e662fcda16219d775b84af50322be2e9cd9d62e`. Talent `zealot_resist_death_golden_toughness`; name key `loc_talent_zealot_resist_death_recuperate`; description key `loc_talent_resist_death_toughness_desc`. Node `node_2eb4f6f4-6d27-4ecd-a41c-bac7a014a6c0`; category Keystone; one point. Mechanisms and examples reuse verified source evidence; no in-game test was performed.

## Source-confirmed behavior and static derivation

- Passive `zealot_resist_death_golden_toughness` checks `unkillable` each update. On entering this state, its first scheduled time is `t+0.75` seconds; thereafter it adds one `zealot_resist_death_golden_toughness_buff` stack each second.
- The child Buff has `duration=5`, `max_stacks=8`, `refresh_duration_on_stack=true`, and `toughness_bonus_flat=5` per stack. It raises maximum Toughness rather than creating a separate pool that can exceed the cap.
- When maximum Toughness rises, the Toughness extension leaves existing `toughness_damage` unchanged, so `current_toughness=max_toughness−toughness_damage` increases equally. When the maximum falls, it reduces damage by the cap difference, floored at 0; current Toughness already gained is therefore not deducted along with the cap decrease.
- During the base 8-second Unkillable effect, stacks can be gained around 0.75, 1.75, 2.75…7.75 seconds, up to 8. During temporary 4-second Unkillable, gains around 0.75, 1.75, 2.75 and 3.75 seconds give 4 stacks (+20 maximum and current Toughness).

## Fixed source evidence

- [scripts/settings/ability/archetype_talents/talents/zealot_talents.lua — L3429-L3453](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/zealot_talents.lua#L3429-L3453)
- [scripts/settings/buff/archetype_buff_templates/zealot_buff_templates.lua — L5102-L5142](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/zealot_buff_templates.lua#L5102-L5142)
- [scripts/settings/talent/talent_settings_zealot.lua — L250-L270](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/talent/talent_settings_zealot.lua#L250-L270)
- [scripts/extension_systems/toughness/player_unit_toughness_extension.lua — L200-L209](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/toughness/player_unit_toughness_extension.lua#L200-L209)
- [scripts/ui/views/talent_builder_view/layouts/zealot_tree.lua — L2181-L2204](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/ui/views/talent_builder_view/layouts/zealot_tree.lua#L2181-L2204)
- [scripts/ui/views/talent_builder_view/layouts/zealot_tree.lua — L1270-L1295](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/ui/views/talent_builder_view/layouts/zealot_tree.lua#L1270-L1295)
- [scripts/ui/views/talent_builder_view/layouts/zealot_tree.lua — L1990-L2012](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/ui/views/talent_builder_view/layouts/zealot_tree.lua#L1990-L2012)
- [scripts/settings/ability/archetype_talents/talents/zealot_talents.lua — L3429-L3453](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/zealot_talents.lua#L3429-L3453)
- [scripts/ui/views/talent_builder_view/layouts/zealot_tree.lua — L2181-L2204](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/ui/views/talent_builder_view/layouts/zealot_tree.lua#L2181-L2204)

## Example assumptions and limits

- **Stacking**: While Unkillable, gain the first stack about 0.75 seconds after starting, then one per second. Each adds 5 maximum Toughness, capped at 8 stacks and +40.
- **Duration**: Added stacks reset the whole effect's 5-second duration. Unkillable ending stops stack gains, while the countdown from the last stack continues.
- **Toughness example**: Starting with maximum 100 and current 60, one stack makes maximum 105 and current 65. After all 8 stacks with no other changes, current/maximum becomes 100/140. When the effect expires and the cap returns to 100, current 100 is retained. If current was only 70 before expiry, it stays 70/100.
- **Temporary Unkillable**: In 4 seconds, gains around 0.75, 1.75, 2.75 and 3.75 seconds give 4 stacks, totaling +20. Actual triggers depend on update timing.

- Timing is a static derivation. Current Toughness retained when the bonus expires remains limited by the restored original cap.
- The accepted Chinese comparison at hash `568ffaee` records both languages giving per-second maximum Toughness during Unkillable, a total cap and 5-second bonus. Coupled changes to current Toughness supplement the description.
- Actual game behavior and presentation remain unobserved; omitted details supplement the description.

Mechanisms reuse the fixed-version evidence, with local Build 25606770 English text corresponding to 1.13.1. Actual presentation and behavior remain unobserved in game. Missing details are supplementary explanations.

<a id="original-english-template-and-reconstruction"></a>

## Original English template and reconstruction

Steam Build `25606770`; `content/localization/ui`, resource hash `63564edcb7c3c5ee`; language `en` (code `0`).

- Name key `loc_talent_zealot_resist_death_recuperate`, hash `95780e03`, entry 9657: **Risen**.
- Description key `loc_talent_resist_death_toughness_desc`, hash `568ffaee`, entry 5622.

Full raw template:

~~~json
"While Unkillable, each second gain {toughness_bonus:%s} Max Toughness up to a total of {max_toughness:%s}, lasting {duration:%s}s. "
~~~

| Placeholder | Value | Formatting |
|---|---|---|
| `toughness_bonus` | 5 → +5 | `number`, `+` prefix; `talent_settings.zealot_resist_death_subnodes.toughness_bonus` |
| `max_toughness` | 40 → +40 | `number`, `+` prefix; corresponding `max_toughness_bonus` |
| `duration` | 5 | `number`; corresponding `toughness_bonus_duration` |

The minimal display mapping at `zealot_talents.lua` L3429-L3452 uses the accepted flat per-stack bonus, total bonus cap and duration. The raw template is JSON-quoted to preserve its trailing space.

Static reconstruction; not an observed game screen:

~~~text
While Unkillable, each second gain +5 Max Toughness up to a total of +40, lasting 5s.
~~~

## English comparison

The English gives +5 maximum Toughness each second while Unkillable, up to +40, lasting 5 seconds. These quantities, flat-value target and duration agree with the accepted stacking Buff. First gain after about 0.75 seconds, whole-effect refresh on adding a stack, continued countdown after Unkillable, and current-Toughness retention when the cap falls supplement the description. No English erratum is established.

## Icon source

[Original image](https://gameslantern.com/storage/sites/darktide/exporter/talents/zealot/keystone_modifier/zealot_resist_death_golden_toughness.webp) | [Media-Assets Issue](https://github.com/SyuanTsai/Media-Assets/issues/8#issuecomment-5929289315) | [Existing attachment](https://github.com/user-attachments/assets/439077af-f74c-4c06-8a8a-dbeab52d9a53). The icon identifies the talent; it is not mechanism evidence.
