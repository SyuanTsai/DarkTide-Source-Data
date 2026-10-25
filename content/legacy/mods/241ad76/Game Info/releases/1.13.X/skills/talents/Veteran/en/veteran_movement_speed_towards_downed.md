# Leave No One Behind: source evidence

[繁體中文](../veteran_movement_speed_towards_downed.md) | [Player description](README.md#veteran_movement_speed_towards_downed) | [Technical index](SOURCE_INDEX.md) | [Original English comparison](LOCALIZATION_COMPARISON.md#veteran_movement_speed_towards_downed)

## Identity and mechanism

- Release 1.13.1, fixed SHA `7e662fcda16219d775b84af50322be2e9cd9d62e`. One-point passive talent `veteran_movement_speed_towards_downed`; installed buff `veteran_increased_move_speed_when_moving_towards_disabled_allies`. [One-point talent node](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/ui/views/talent_builder_view/layouts/veteran_tree.lua#L328-L357); [Talent and display fields](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/veteran_talents.lua#L1709-L1749).
- Exact English name key `loc_talent_veteran_movement_speed_towards_downed`, hash `43f6c65b`: **Leave No One Behind**. Description key `loc_talent_veteran_movement_speed_towards_downed_description`, hash `30d79ef9`.
- Original English: Steam Build `25606770`, extracted 2026-10-02, resource `content/localization/ui`, resource hash `63564edcb7c3c5ee`, locale `en` (code `0`). UI JSONL SHA-256: `fb54bb69880e08b3a6e1c359bd970ed2416748bf5513d45c4b8a39c545e8c668`.

- If another alive player who requires help lies within the forward directional check (`dot > 0.5`), the buff activates +20% Movement Speed and Stun Immunity. The check uses look direction; it does not test velocity or require moving toward the ally. No extra distance check appears in this condition. The dot threshold corresponds approximately to less than 60° from the look direction; exact coordinate tolerance is unmeasured. [Movement, recipient reduction and duration values](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/talent/talent_settings_veteran.lua#L249-L252); [Facing condition and rescue effects](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/veteran_buff_templates.lua#L2396-L2508); [Facing condition without a movement check](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/veteran_buff_templates.lua#L2425-L2458); [Directional threshold](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/veteran_buff_templates.lua#L2388-L2395).
- The buff supplies `revive_speed_modifier = 0.20` and `assist_speed_modifier = 0.20`. The recorded revive, pull_up, remove_net and rescue interactions all map to revive_speed_modifier, so these attributes are not multiplied twice. Their isolated interaction duration is `base duration / 1.20`. The rescue speed bonus is separate from the conditional movement/stun effects. [Facing condition and rescue effects](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/veteran_buff_templates.lua#L2396-L2508); [Interaction-to-speed-stat mapping](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/interaction/interaction_settings.lua#L17-L25); [Interaction duration scaling](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/interaction/interactor_extension.lua#L134-L166).
- Successfully reviving a knocked-down ally gives that revived ally `damage_taken_multiplier = 0.67` for 5 seconds: 33% Damage Reduction. The recipient is the revived ally. [Movement, recipient reduction and duration values](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/talent/talent_settings_veteran.lua#L249-L252); [Facing condition and rescue effects](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/veteran_buff_templates.lua#L2396-L2508).

## Movement, rescue speed and recipient reduction examples

Assume the stated eligibility condition, no other speed or reduction modifiers, an uninterrupted rescue interaction and the stated original movement speed, interaction duration or incoming damage. The reduction example occurs while the revived ally’s five-second buff is active. These are isolated static examples. [Movement, recipient reduction and duration values](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/talent/talent_settings_veteran.lua#L249-L252); [Facing condition and rescue effects](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/veteran_buff_templates.lua#L2396-L2508); [Interaction-to-speed-stat mapping](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/interaction/interaction_settings.lua#L17-L25); [Interaction duration scaling](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/interaction/interactor_extension.lua#L134-L166).

| Assumptions | Substitution and result | Player meaning |
|---|---|---|
| Movement condition active; base speed 5 m/s | `5 × (1 + 0.20) = 6 m/s`. | Movement speed increases 20% under the facing condition. |
| Eligible rescue originally takes 6s; no other speed modifiers | `6 / 1.20 = 5s`; time saved `1 / 6 ≈ 16.67%`. | 20% faster interaction speed means about 16.67% less time, not 20% less time. |
| Revived ally’s buff active; 100 incoming damage before this reduction | `100 × 0.67 = 67 damage`. | The revived ally takes 33 less damage in this isolated example for the five-second period. |

## Original English template and reconstruction

Full raw template, hash `30d79ef9`:

```text
{revive_speed:%s} Assist Speed & Revive Speed. {movement_speed%s} Movement Speed and Stun Immunity when moving towards a Knocked Down or Incapacitated Ally. Whenever you Revive a Knocked Down Ally, they receive {damage_reduction%s} Damage Reduction for {duration%s}s.
```

| Parameter | Definition and formatting | Reconstructed value |
|---|---|---|
| `revive_speed` | Read the buff’s revive_speed_modifier = 0.20; signed percentage formatter | `+20%` |
| `movement_speed` | Direct value defensive_1.movement_speed = 0.20; signed percentage formatter | `+20%` |
| `damage_reduction` | Direct damage_taken_multiplier = 0.67; custom `round((1 − value) × 100)`, then signed percentage display | `+33%` |
| `duration` | Direct duration 5; default value formatter, followed by literal `s` | `5` |

[Talent and display fields](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/veteran_talents.lua#L1709-L1749); [Movement, recipient reduction and duration values](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/talent/talent_settings_veteran.lua#L249-L252); [Facing condition and rescue effects](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/veteran_buff_templates.lua#L2396-L2508); [Buff-value lookup](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/ui/views/talent_builder_view/utilities/talent_layout_parser.lua#L467-L499); [Percentage and default value formatting](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/ui/views/talent_builder_view/utilities/talent_layout_parser.lua#L379-L435); [Custom display conversion](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/ui/views/talent_builder_view/utilities/talent_layout_parser.lua#L613-L651).

Static plain-text reconstruction:

```text
+20% Assist Speed & Revive Speed. +20% Movement Speed and Stun Immunity when moving towards a Knocked Down or Incapacitated Ally. Whenever you Revive a Knocked Down Ally, they receive +33% Damage Reduction for 5s.
```

Runtime color markup is excluded; this is not an observed game screen. The displayed speed values, Stun Immunity, revived-ally recipient and 33%/5s reduction agree with the accepted mechanism. The “moving towards” condition is an explicit English contradiction: the implementation checks facing, without requiring actual movement. The original English says “when moving towards” an ally. The verified condition is **looking toward an ally who requires help**; actual movement toward that ally is not required.

## Limits

In-game angular/coordinate tolerances, individual requires_help states, interaction timing under interruption, special damage cases and final game UI have not been measured. The formulas isolate the stated modifiers.

## Icon source

[Original image](https://gameslantern.com/storage/sites/darktide/exporter/talents/veteran/default/veteran_movement_speed_towards_downed.webp) | [Media-Assets Issue](https://github.com/SyuanTsai/Media-Assets/issues/6#issuecomment-5922922455) | [Issue attachment](https://github.com/user-attachments/assets/a882268c-6f4f-42ee-8973-a64dd6e882e7)

The icon identifies the talent; it is not mechanism evidence.
