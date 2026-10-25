# Malefic Momentum: source evidence

[繁體中文](../psyker_kills_stack_other_weapon_damage.md) | [Player description](README.md#psyker_kills_stack_other_weapon_damage) | [Technical index](SOURCE_INDEX.md) | [English comparison](LOCALIZATION_COMPARISON.md#psyker_kills_stack_other_weapon_damage)

Release 1.13.1; fixed SHA `7e662fcda16219d775b84af50322be2e9cd9d62e`. Talent `psyker_kills_stack_other_weapon_damage`; name key `loc_talent_psyker_kills_stack_other_weapon_damage`; description key `loc_talent_psyker_kills_stack_other_weapon_damage_both_description`. Node `node_8e7a1179-6cbd-4f0d-9992-a0ca5282b30b`; category Talent; one point. Mechanisms and examples reuse verified source evidence; no in-game test was performed.

## Source-confirmed behavior and static derivation

- The Buff is selected by whether the kill's `damage_type` is in `warp_damage_types`, rather than by the currently held weapon.
- The non-Warp Damage Buff grants both `damage +0.05` and `warp_damage −0.05`. These cancel in the same additive stage for Warp Attacks.
- Each template has its own 10-second duration and 5-stack limit.

## Fixed source evidence

- [scripts/settings/buff/archetype_buff_templates/psyker_buff_templates.lua — L2832-L2886](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/psyker_buff_templates.lua#L2832-L2886)
- [scripts/utilities/attack/damage_calculation.lua — L517-L526](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/attack/damage_calculation.lua#L517-L526)
- [scripts/settings/ability/archetype_talents/talents/psyker_talents.lua — L1094-L1191](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/psyker_talents.lua#L1094-L1191)
- [scripts/ui/views/talent_builder_view/layouts/psyker_tree.lua — L775-L800](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/ui/views/talent_builder_view/layouts/psyker_tree.lua#L775-L800)

## Example assumptions and limits

- **Effect**: a kill with non-Warp Damage grants 5% Warp Damage; a kill with Warp Damage grants 5% non-Warp Damage.

- **Stacks and refresh**: the two groups each have a separate cap of 5 stacks and last 10 seconds. Gaining the same group's effect again resets that group's timer. Each group at full stacks adds 25% Damage.

- **Damage example**: compare only this damage-bonus stage, with all other multipliers fixed at 1. With a baseline of 100 points and no other bonus, 100 × (1 + 25%) = 125 points. With an existing 25% bonus in the same stage, Damage rises from 125 to 100 × (1 + 25% + 25%) = 150 points.

Mechanisms reuse the fixed-version evidence, with local Build 25606770 English text corresponding to 1.13.1. Actual presentation and behavior remain unobserved in game. Missing details are supplementary explanations.

<a id="original-english-template-and-reconstruction"></a>

## Original English template and reconstruction

Steam Build `25606770`; `content/localization/ui`, resource hash `63564edcb7c3c5ee`; language `en` (code `0`).

- Name key `loc_talent_psyker_kills_stack_other_weapon_damage`, hash `23bf2118`, entry 2324: **Malefic Momentum**.
- Description key `loc_talent_psyker_kills_stack_other_weapon_damage_both_description`, hash `ef213cd8`, entry 15546.

Full raw template:

~~~text
{warp_damage:%s} Damage to Warp Attacks for {duration:%s}s after a non-Warp based Kill. Stacks {stacks:%s} times.

{non_warp_damage:%s} Damage to non-Warp Attacks for {duration:%s}s after a Warp based Kill. Stacks {stacks:%s} times.
~~~

| Placeholder | Value | Formatting |
|---|---|---|
| `warp_damage` | `0.05` | percentage, `+` prefix → `+5%` |
| `non_warp_damage` | `0.05` generic damage bonus | percentage, `+` prefix → `+5%` |
| `duration` | `10` | number → `10` |
| `stacks` | `5` | number → `5` |

[Display mapping](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/psyker_talents.lua#L1099-L1143) reads the verified Warp and non-Warp Buff amounts, duration and cap. The non-Warp field uses the generic damage stat; its Warp cancellation is already established in the mechanism evidence. Shared formatting is reused.

Static reconstruction; not an observed game screen:

~~~text
+5% Damage to Warp Attacks for 10s after a non-Warp based Kill. Stacks 5 times.

+5% Damage to non-Warp Attacks for 10s after a Warp based Kill. Stacks 5 times.
~~~

## English comparison

The English independently separates the two kill types and the opposite attack categories they enhance, with matching amounts, durations and caps. The kill's damage-type classification, separate timers and additive cancellation that keeps the non-Warp bonus off Warp Attacks are supplements.

## Icon source

[Original image](https://gameslantern.com/storage/sites/darktide/exporter/talents/psyker/default/psyker_kills_stack_other_weapon_damage.webp) | [Media-Assets Issue](https://github.com/SyuanTsai/Media-Assets/issues/7#issuecomment-5928034845) | [Existing attachment](https://github.com/user-attachments/assets/cc72c2ff-3d22-42e0-be1d-69a9f4d7cb22). The icon identifies the talent; it is not mechanism evidence.
