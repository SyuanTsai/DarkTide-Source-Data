# Mind in Motion: source evidence

[繁體中文](../psyker_venting_improvements.md) | [Player description](README.md#psyker_venting_improvements) | [Technical index](SOURCE_INDEX.md) | [English comparison](LOCALIZATION_COMPARISON.md#psyker_venting_improvements)

Release 1.13.1; fixed SHA `7e662fcda16219d775b84af50322be2e9cd9d62e`. Talent `psyker_venting_improvements`; name key `loc_talent_psyker_venting_doesnt_slow`; description key `loc_talent_psyker_improved_venting_desc`. Node `node_dafc9b1b-859e-44df-bea9-33fecbd3afc7`; category Talent; one point. Mechanisms and examples reuse verified source evidence; no in-game test was performed.

## Source-confirmed behavior and static derivation

- `vent_warp_charge_decrease_movement_reduction = 0`, `reload_decrease_movement_reduction = 0` and `movement_speed = 0.05` are all in `stat_buffs`.
- `check_active_func` controls only the active-state display; it does not turn unconditional stats into `conditional_stat` effects.

## Fixed source evidence

- [scripts/settings/buff/archetype_buff_templates/psyker_buff_templates.lua — L1955-L1983](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/psyker_buff_templates.lua#L1955-L1983)
- [scripts/settings/talent/talent_settings_psyker.lua — L236-L240](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/talent/talent_settings_psyker.lua#L236-L240)
- [scripts/settings/ability/archetype_talents/talents/psyker_talents.lua — L1594-L1610](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/psyker_talents.lua#L1594-L1610)
- [scripts/ui/views/talent_builder_view/layouts/psyker_tree.lua — L747-L774](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/ui/views/talent_builder_view/layouts/psyker_tree.lua#L747-L774)

## Example assumptions and limits

- **Effect**: remove the movement penalties caused by Quelling Peril and Reloading, and gain 5% Movement Speed. Slows from other sources are still calculated separately.

- **Movement example**: with no other modifiers, if movement at this stage was 5 metres per second, it becomes 5 × (1 + 5%) = 5.25 metres per second.

Mechanisms reuse the fixed-version evidence, with local Build 25606770 English text corresponding to 1.13.1. Actual presentation and behavior remain unobserved in game. Missing details are supplementary explanations.

<a id="original-english-template-and-reconstruction"></a>

## Original English template and reconstruction

Steam Build `25606770`; `content/localization/ui`, resource hash `63564edcb7c3c5ee`; language `en` (code `0`).

- Name key `loc_talent_psyker_venting_doesnt_slow`, hash `f93d1ade`, entry 16183: **Mind in Motion**.
- Description key `loc_talent_psyker_improved_venting_desc`, hash `86b17787`, entry 8745.

Full raw template:

~~~text
{movement_speed:%s} Movement Speed. Your Movement Speed is not reduced while Quelling Peril or Reloading.
~~~

| Placeholder | Value | Formatting |
|---|---|---|
| `movement_speed` | `0.05` | percentage, `+` prefix → `+5%` |

[Display mapping](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/psyker_talents.lua#L1599-L1605) selects the verified Movement Speed bonus. Shared percentage formatting is reused; the narrative export suffix is outside the template.

Static reconstruction; not an observed game screen:

~~~text
+5% Movement Speed. Your Movement Speed is not reduced while Quelling Peril or Reloading.
~~~

## English comparison

The English gives +5% Movement Speed as a separate effect and removes the slowing associated with Quelling or Reloading, consistent with the unconditional stats. It does not explain the active-state display check or the separate handling of unrelated slows; these are supplements.

## Icon source

[Original image](https://gameslantern.com/storage/sites/darktide/exporter/talents/psyker/default/psyker_venting_improvements.webp) | [Media-Assets Issue](https://github.com/SyuanTsai/Media-Assets/issues/7#issuecomment-5928034845) | [Existing attachment](https://github.com/user-attachments/assets/86748037-d25a-449c-881a-b80060374012). The icon identifies the talent; it is not mechanism evidence.
