# Bash and Blast: source evidence

[繁體中文](../ogryn_melee_improves_ranged.md) | [Player description](README.md#ogryn_melee_improves_ranged) | [Technical index](SOURCE_INDEX.md) | [English comparison](LOCALIZATION_COMPARISON.md#ogryn_melee_improves_ranged)

Release 1.13.1; fixed SHA `7e662fcda16219d775b84af50322be2e9cd9d62e`. Talent `ogryn_melee_improves_ranged`; name key `loc_talent_ogryn_melee_improves_ranged`; description key `loc_talent_ogryn_melee_improves_ranged_desc`. Node `node_b8096b53-1713-464f-83f5-ea40310afd3b`; category Talent; one point. Mechanisms and examples reuse verified source evidence; no in-game test was performed.

## Source-confirmed behavior and static derivation

- `on_melee_kill` adds the child, with maximum 5 stacks, duration 10s and refresh. Each stack grants `ranged_damage=0.03`.

## Fixed source evidence

- [scripts/settings/buff/archetype_buff_templates/ogryn_buff_templates.lua — L3337-L3363](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/ogryn_buff_templates.lua#L3337-L3363)
- [scripts/settings/talent/talent_settings_ogryn.lua — L142-L146](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/talent/talent_settings_ogryn.lua#L142-L146)
- [scripts/utilities/attack/damage_calculation.lua — L278-L320](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/attack/damage_calculation.lua#L278-L320)
- [scripts/settings/ability/archetype_talents/talents/ogryn_talents.lua — L2554-L2577](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/ogryn_talents.lua#L2554-L2577)
- [scripts/ui/views/talent_builder_view/layouts/ogryn_tree.lua — L2171-L2193](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/ui/views/talent_builder_view/layouts/ogryn_tree.lua#L2171-L2193)

## Example assumptions and limits

- **Trigger and stacks**: Each melee kill grants one stack of +3% ranged damage, up to 5 stacks / 15%, lasting 10s. Another melee kill restarts the timer.

- **Damage example**: At full stacks, base ranged damage of 100 becomes 115. With another +20% at the same stage, it becomes `100 × (1 + 20% + 5 × 3%) = 135`.

Mechanisms reuse the fixed-version evidence, with local Build 25606770 English text corresponding to 1.13.1. Actual presentation and behavior remain unobserved in game. Missing details are supplementary explanations.

<a id="original-english-template-and-reconstruction"></a>

## Original English template and reconstruction

Steam Build `25606770`; `content/localization/ui`, resource hash `63564edcb7c3c5ee`; language `en` (code `0`).

- Name key `loc_talent_ogryn_melee_improves_ranged`, hash `3a7fe3c8`, entry 3792: **Bash and Blast**.
- Description key `loc_talent_ogryn_melee_improves_ranged_desc`, hash `01fff66e`, entry 124.

Full raw template:

~~~text
{damage:%s} Ranged Damage on Melee Kill. Lasts {duration:%s}s. Max Stacks {max_stacks:%s}.
~~~

| Placeholder | Value | Formatting |
|---|---|---|
| damage | shared ranged_damage = 0.03 | Percentage with explicit + prefix → +3% |
| duration | shared duration = 10 | Number → 10 |
| max_stacks | shared max_stacks = 5 | Number → 5 |

Only the missing display mapping in the cited talent definition, lines 2554–2577, was read. Accepted values, mechanisms and common formatting were reused.

Static reconstruction; not an observed game screen:

~~~text
+3% Ranged Damage on Melee Kill. Lasts 10s. Max Stacks 5.
~~~

## English comparison

The independently read English grants +3% ranged damage on melee kills for 10s, up to five stacks. This agrees with the accepted per-kill stack and values. Refresh and same-stage additive calculation supplement the text. No explicit English contradiction is established.

## Icon source

[Original image](https://gameslantern.com/storage/sites/darktide/exporter/talents/ogryn/default/ogryn_melee_improves_ranged.webp) | [Media-Assets Issue](https://github.com/SyuanTsai/Media-Assets/issues/10#issuecomment-5931394406) | [Existing attachment](https://github.com/user-attachments/assets/fdf1eb1f-b76f-4452-beac-f2205fc32d2b). The icon identifies the talent; it is not mechanism evidence.
