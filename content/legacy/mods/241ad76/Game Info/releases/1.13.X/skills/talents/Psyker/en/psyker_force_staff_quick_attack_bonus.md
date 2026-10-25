# Empyric Shock: source evidence

[繁體中文](../psyker_force_staff_quick_attack_bonus.md) | [Player description](README.md#psyker_force_staff_quick_attack_bonus) | [Technical index](SOURCE_INDEX.md) | [English comparison](LOCALIZATION_COMPARISON.md#psyker_force_staff_quick_attack_bonus)

Release 1.13.1; fixed SHA `7e662fcda16219d775b84af50322be2e9cd9d62e`. Talent `psyker_force_staff_quick_attack_bonus`; name key `loc_talent_psyker_force_staff_quick_attack_bonus`; description key `loc_talent_psyker_force_staff_quick_attack_bonus_desc`. Node `node_de28df8a-4aed-426c-8122-73893a04aa5b`; category Talent; one point. Mechanisms and examples reuse verified source evidence; no in-game test was performed.

## Source-confirmed behavior and static derivation

- A `force_staff_primary` hit applies a debuff to the target, with a maximum of 5 stacks and a refreshing 10-second duration. `warp_damage_taken_multiplier = 1.06` is multiplicative: each stack multiplies the value, giving its power at multiple stacks. `damage_calculation` applies it in the target Damage-taken stage of the `is_warp_damage` branch.

## Fixed source evidence

- [scripts/settings/buff/archetype_buff_templates/psyker_buff_templates.lua — L3538-L3565](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/psyker_buff_templates.lua#L3538-L3565)
- [scripts/utilities/attack/damage_calculation.lua — L599-L611](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/attack/damage_calculation.lua#L599-L611)
- [scripts/settings/buff/buff_settings.lua — L1024-L1032](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/buff_settings.lua#L1024-L1032)
- [scripts/extension_systems/buff/buffs/buff.lua — L694-L730](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/buff/buffs/buff.lua#L694-L730)
- [scripts/settings/ability/archetype_talents/talents/psyker_talents.lua — L2530-L2575](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/psyker_talents.lua#L2530-L2575)
- [scripts/ui/views/talent_builder_view/layouts/psyker_tree.lua — L2027-L2054](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/ui/views/talent_builder_view/layouts/psyker_tree.lua#L2027-L2054)

## Example assumptions and limits

- **How it works**: A Force Staff Primary Attack hit makes that enemy take 6% more Warp Damage per stack, with stacks multiplying. Both your and your Allies' Warp Attacks benefit.

- **Stacks and refresh**: Up to 5 stacks, lasting 10 seconds. Another hit adds a stack and resets the duration; hits at maximum stacks still refresh it.

- **Damage example**: A target originally taking 100 Warp Damage takes 100 × 1.06 = 106 at one stack. At five stacks, 100 × 1.06⁵ ≈ 133.82, an increase of approximately 33.82%.

Mechanisms reuse the fixed-version evidence, with local Build 25606770 English text corresponding to 1.13.1. Actual presentation and behavior remain unobserved in game. Missing details are supplementary explanations.

<a id="original-english-template-and-reconstruction"></a>

## Original English template and reconstruction

Steam Build `25606770`; `content/localization/ui`, resource hash `63564edcb7c3c5ee`; language `en` (code `0`).

- Name key `loc_talent_psyker_force_staff_quick_attack_bonus`, hash `94dc0150`, entry 9633: **Empyric Shock**.
- Description key `loc_talent_psyker_force_staff_quick_attack_bonus_desc`, hash `c4f73f93`, entry 12708.

Full raw template:

~~~text
{damage_taken:%s} Warp-Damage Taken by victims of your Force Staff's Primary Attack. Max Stacks {max_stacks:%s}. Lasts {duration:%s}s.
~~~

| Placeholder | Value | Formatting |
|---|---|---|
| `damage_taken` | 1.06 | `(value - 1) × 100`: 6%. |
| `max_stacks` | 5 | Number: 5. |
| `duration` | 10 | Number: 10. |

Display mapping: [psyker_talents.lua L2535-L2571](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/psyker_talents.lua#L2535-L2571). Buff values and shared formatter behavior reuse the accepted evidence.

Static reconstruction; not an observed game screen:

~~~text
6% Warp-Damage Taken by victims of your Force Staff's Primary Attack. Max Stacks 5. Lasts 10s.
~~~

## English comparison

The affected target, per-stack 6% Warp Damage Taken, five-stack limit and duration agree. The English does not specify addition between stacks, so the multiplicative formula is supplementary. Allies' benefit and refresh behavior are also supplementary.

## Icon source

[Original image](https://gameslantern.com/storage/sites/darktide/exporter/talents/psyker/default/psyker_force_staff_quick_attack_bonus.webp) | [Media-Assets Issue](https://github.com/SyuanTsai/Media-Assets/issues/7#issuecomment-5928034845) | [Existing attachment](https://github.com/user-attachments/assets/f556046f-b193-4776-963d-798307d2c36a). The icon identifies the talent; it is not mechanism evidence.
