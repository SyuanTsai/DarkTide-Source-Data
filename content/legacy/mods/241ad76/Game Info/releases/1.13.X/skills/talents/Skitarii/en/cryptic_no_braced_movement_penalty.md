# Superior Tracking Litanies: source evidence

[繁體中文](../cryptic_no_braced_movement_penalty.md) | [Player description](README.md#cryptic_no_braced_movement_penalty) | [Technical index](SOURCE_INDEX.md) | [English comparison](LOCALIZATION_COMPARISON.md#cryptic_no_braced_movement_penalty)

Release 1.13.1; fixed SHA `7e662fcda16219d775b84af50322be2e9cd9d62e`. Talent `cryptic_no_braced_movement_penalty`; name key `loc_talent_cryptic_no_braced_movement_penalty`; description key `loc_talent_cryptic_no_braced_movement_penalty_desc`. Node `node_f8cb2f49-4d9d-4b86-90fb-d0446febb49d`; category Talent; one point. Mechanisms and examples reuse verified source evidence; no in-game test was performed.

## Source-confirmed behavior and static derivation

- The `alternate_fire` movement curve calculates `delta = 1 − mod`, then `delta *= 0.5` and `mod = 1 − delta`. It halves the penalty rather than multiplying movement speed by 1.5.
- `spread_modifier = -0.45` is an unconditional stat, separate from the movement condition.

## Fixed source evidence

- [scripts/utilities/alternate_fire.lua — L160-L173](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/alternate_fire.lua#L160-L173)
- [scripts/settings/talent/talent_settings_cryptic.lua — L607-L610](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/talent/talent_settings_cryptic.lua#L607-L610)
- [scripts/settings/buff/archetype_buff_templates/cryptic_buff_templates.lua — L3250-L3257](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/cryptic_buff_templates.lua#L3250-L3257)
- [scripts/extension_systems/spread/player_unit_weapon_spread_extension.lua — L170-L181](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/spread/player_unit_weapon_spread_extension.lua#L170-L181)
- [scripts/settings/ability/archetype_talents/talents/cryptic_talents.lua — L2448-L2470](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/cryptic_talents.lua#L2448-L2470)
- [scripts/ui/views/talent_builder_view/layouts/cryptic_tree.lua — L864-L889](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/ui/views/talent_builder_view/layouts/cryptic_tree.lua#L864-L889)

## Example assumptions and limits

- **Movement effect**: While bracing or aiming down sights, halve the original movement-speed penalty.
- **Movement example**: If your speed was 60% of normal movement speed, the penalty was 40%. With this talent, speed becomes `1 − 40% × 0.5 = 80%` of normal speed.
- **Spread effect**: Always reduces shooting Spread by 45%; bracing first is not required. If Spread is 10 under the same conditions with no other Spread bonuses, it becomes `10 × (1 − 45%) = 5.5`.

The movement example uses the original 60% speed factor. The Spread example assumes the same weapon conditions and no other Spread modifiers. Neither calculation is an in-game observation.

Mechanisms reuse the fixed-version evidence, with local Build 25606770 English text corresponding to 1.13.1. Actual presentation and behavior remain unobserved in game. Missing details are supplementary explanations.

<a id="original-english-template-and-reconstruction"></a>

## Original English template and reconstruction

Steam Build `25606770`; `content/localization/ui`, resource hash `63564edcb7c3c5ee`; language `en` (code `0`).

- Name key `loc_talent_cryptic_no_braced_movement_penalty`, hash `15be39ae`, entry 1411: **Superior Tracking Litanies**.
- Description key `loc_talent_cryptic_no_braced_movement_penalty_desc`, hash `f793a029`, entry 16086.

Full raw template:

~~~text
{movement_speed_modifier:%s} movement speed penalty while bracing or aiming down sights. Additionally, you gain {spread:%s} Spread.
~~~

| Placeholder | Value | Formatting |
|---|---|---|
| `movement_speed_modifier` | `0.5` → `50` → `-50%` | `round((1 − value) × 100)` supplies the percentage magnitude; `-` prefix. |
| `spread` | `-0.45` → `-45%` | Percentage; the negative sign comes from the value. |

Display mappings are `cryptic_talents.lua` L2456-L2469. The percentage formatter uses `value_manipulation` instead of multiplying by 100 again: [talent_layout_parser.lua L379-L403](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/ui/views/talent_builder_view/utilities/talent_layout_parser.lua#L379-L403). The values reuse the verified settings above.

Static reconstruction; not an observed game screen:

~~~text
-50% movement speed penalty while bracing or aiming down sights. Additionally, you gain -45% Spread.
~~~

## English comparison

The English correctly reduces the movement-speed penalty by 50% while bracing or aiming, and separately grants -45% Spread. “Additionally” does not explicitly require bracing for the Spread effect. The penalty calculation, unconditional Spread scope and original examples are supplements. No explicit English contradiction was found.

## Icon source

[Original image](https://gameslantern.com/storage/sites/darktide/exporter/talents/cryptic/default/cryptic_no_braced_movement_penalty.webp) | [Media-Assets Issue](https://github.com/SyuanTsai/Media-Assets/issues/13#issuecomment-5935653628) | [Existing attachment](https://github.com/user-attachments/assets/29715f83-8068-4375-9aa9-d00c34e8d8f3). The icon identifies the talent; it is not mechanism evidence.
