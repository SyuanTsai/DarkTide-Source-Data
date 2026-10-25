# Omnissian Recharge Litany: source evidence

[繁體中文](../cryptic_multi_hits_restore_toughness.md) | [Player description](README.md#cryptic_multi_hits_restore_toughness) | [Technical index](SOURCE_INDEX.md) | [English comparison](LOCALIZATION_COMPARISON.md#cryptic_multi_hits_restore_toughness)

Release 1.13.1; fixed SHA `7e662fcda16219d775b84af50322be2e9cd9d62e`. Talent `cryptic_multi_hits_restore_toughness`; name key `loc_talent_cryptic_multi_hits_restore_toughness`; description key `loc_talent_cryptic_multi_hits_restore_toughness_desc`. Node `node_3dfdfc48-08a2-428d-8e64-f2a7d9e8a3d0`; category Talent; one point. Mechanisms and examples reuse verified source evidence; no in-game test was performed.

## Source-confirmed behavior and static derivation

- The hit test uses `target_number` when it is greater than zero, otherwise `target_index`, and requires the selected value to equal 3. The `multi_hit_window` limits triggers to at least 0.25 seconds apart. There is no damage-type filter.
- Each update calls `replenish_percentage` with `0.1 / 3 × dt`. With `allow_proc_while_active`, another qualifying hit resets the active start time.

## Fixed source evidence

- [scripts/extension_systems/toughness/player_unit_toughness_extension.lua — L253-L285](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/toughness/player_unit_toughness_extension.lua#L253-L285)
- [scripts/settings/talent/talent_settings_cryptic.lua — L361-L366](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/talent/talent_settings_cryptic.lua#L361-L366)
- [scripts/settings/buff/archetype_buff_templates/cryptic_buff_templates.lua — L2090-L2135](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/cryptic_buff_templates.lua#L2090-L2135)
- [scripts/settings/ability/archetype_talents/talents/cryptic_talents.lua — L1675-L1697](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/cryptic_talents.lua#L1675-L1697)
- [scripts/ui/views/talent_builder_view/layouts/cryptic_tree.lua — L351-L379](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/ui/views/talent_builder_view/layouts/cryptic_tree.lua#L351-L379)

## Example assumptions and limits

- **Trigger**: Hitting the **third enemy with the same attack** starts recovery of **10% of maximum Toughness over 3 seconds**. Both melee and ranged hits can trigger it.
- **Refreshing**: Another qualifying attack restarts the 3-second period. Triggers are at least **0.25 seconds apart**; hitting the fourth or fifth enemy does not add stacks.
- **Example**: At 150 maximum Toughness, restore `150 × 10% ÷ 3 = 5` points per second, or 15 points over the full effect.

- The example assumes 150 maximum Toughness and no other recovery bonuses: 5 points per second, totaling 15 over 3 seconds.
- Restoration uses maximum Toughness, respects recovery bonuses and cannot exceed the maximum.
- Retriggering during the effect resets its duration; it does not create multiple simultaneous recovery effects.
- The English's 3 or more threshold agrees with triggering on the third valid hit. The exact hit counter and minimum trigger interval are supplementary details. Actual presentation and behavior remain unobserved in game.

Mechanisms reuse the fixed-version evidence, with local Build 25606770 English text corresponding to 1.13.1. Actual presentation and behavior remain unobserved in game. Missing details are supplementary explanations.

<a id="original-english-template-and-reconstruction"></a>

## Original English template and reconstruction

Steam Build `25606770`; `content/localization/ui`, resource hash `63564edcb7c3c5ee`; language `en` (code `0`).

- Name key `loc_talent_cryptic_multi_hits_restore_toughness`, hash `bdd7631c`, entry 12241: **Omnissian Recharge Litany**.
- Description key `loc_talent_cryptic_multi_hits_restore_toughness_desc`, hash `6db4bbd5`, entry 7131.

Full raw template:

~~~text
Hitting {number:%s} or more enemies with an Attack restores {toughness:%s} Toughness over {duration:%s}s.
~~~

| Placeholder | Value | Formatting |
|---|---|---|
| `number` | 3 | `number`: verified `talent_settings.cryptic_multi_hits_restore_toughness.num_hits = 3` |
| `toughness` | 10% | `percentage`: verified `talent_settings.cryptic_multi_hits_restore_toughness.toughness_regen = 0.1` |
| `duration` | 3 | `number`: verified `talent_settings.cryptic_multi_hits_restore_toughness.toughness_regen_time = 3` |

The display mappings in `cryptic_talents.lua` L1683–L1696 use the already verified hit threshold, recovery amount and duration.

Static reconstruction; not an observed game screen:

~~~text
Hitting 3 or more enemies with an Attack restores 10% Toughness over 3s.
~~~

## English comparison

The English threshold of 3 or more enemies with one attack matches an effect triggered when that attack reaches its third valid target; it does not promise another stack for each later target. The 10% restoration and 3-second duration agree. Hit-counter selection, melee/ranged eligibility, the 0.25-second window, refreshing and recovery calculations are supplementary details.

## Icon source

[Original image](https://gameslantern.com/storage/sites/darktide/exporter/talents/cryptic/default/cryptic_multi_hits_restore_toughness.webp) | [Media-Assets Issue](https://github.com/SyuanTsai/Media-Assets/issues/13#issuecomment-5935647528) | [Existing attachment](https://github.com/user-attachments/assets/d9876bb9-a417-45e8-814c-acbc24233120). The icon identifies the talent; it is not mechanism evidence.
