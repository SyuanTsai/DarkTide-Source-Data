# Vicious Offering: source evidence

[繁體中文](../zealot_toughness_on_heavy_kills.md) | [Player description](README.md#zealot_toughness_on_heavy_kills) | [Technical index](SOURCE_INDEX.md) | [English comparison](LOCALIZATION_COMPARISON.md#zealot_toughness_on_heavy_kills)

Release 1.13.1; fixed SHA `7e662fcda16219d775b84af50322be2e9cd9d62e`. Talent `zealot_toughness_on_heavy_kills`; name key `loc_talent_zealot_toughness_on_heavy_kills`; description key `loc_talent_zealot_toughness_on_heavy_kills_desc`. Node `node_b71544c5-61d9-4c06-8de3-0b834357c0c9`; category Skill; one point. Mechanisms and examples reuse verified source evidence; no in-game test was performed.

## Source-confirmed behavior and static derivation

- The proc requires `on_kill`, then the `on_heavy_hit` check. A Heavy Attack must kill; a Heavy hit alone is insufficient.
- Each qualifying event restores `toughness_percentage = 0.1` of maximum Toughness through percentage restoration.
- This template has no `cooldown_duration` or `max_stacks` restriction on the restoration proc.

## Fixed source evidence

- [scripts/settings/buff/archetype_buff_templates/zealot_buff_templates.lua — L471-L484](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/zealot_buff_templates.lua#L471-L484)
- [scripts/settings/buff/helper_functions/check_proc_functions.lua — L438-L446](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/helper_functions/check_proc_functions.lua#L438-L446)
- [scripts/extension_systems/toughness/player_unit_toughness_extension.lua — L253-L285](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/toughness/player_unit_toughness_extension.lua#L253-L285)
- [scripts/settings/ability/archetype_talents/talents/zealot_talents.lua — L2865-L2886](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/zealot_talents.lua#L2865-L2886)
- [scripts/ui/views/talent_builder_view/layouts/zealot_tree.lua — L399-L425](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/ui/views/talent_builder_view/layouts/zealot_tree.lua#L399-L425)

## Example assumptions and limits

- **Operation**: A Heavy Attack kill restores an extra 10% of maximum Toughness. Merely hitting without a kill does not trigger this talent.
- **Restoration example**: With maximum Toughness 100 and no other restoration bonuses, this talent adds 10 restoration per qualifying kill. If only 4 Toughness is missing, it restores 4.
- **Separation**: Normal Melee-kill Toughness restoration is calculated separately from this talent's extra restoration.

- The accepted Chinese erratum changes “Heavy hit” to “Heavy Attack kill.” This is a Chinese wording correction, separate from the independently read English.
- Actual game behavior and presentation remain unobserved.

Mechanisms reuse the fixed-version evidence, with local Build 25606770 English text corresponding to 1.13.1. Actual presentation and behavior remain unobserved in game. Missing details are supplementary explanations.

<a id="original-english-template-and-reconstruction"></a>

## Original English template and reconstruction

Steam Build `25606770`; `content/localization/ui`, resource hash `63564edcb7c3c5ee`; language `en` (code `0`).

- Name key `loc_talent_zealot_toughness_on_heavy_kills`, hash `4033ba2a`, entry 4171: **Vicious Offering**.
- Description key `loc_talent_zealot_toughness_on_heavy_kills_desc`, hash `d50c0dd8`, entry 13785.

Full raw template:

~~~text
Replenish {toughness:%s} Toughness on Heavy Attack Kill.
~~~

| Placeholder | Value | Formatting |
|---|---|---|
| `toughness` | 0.1 → 10% | `percentage`; `find_value` reads `zealot_toughness_on_heavy_kills.toughness_percentage` |

The minimal display mapping at `zealot_talents.lua` L2865-L2886 reads the accepted Toughness-restoration proportion.

Static reconstruction; not an observed game screen:

~~~text
Replenish 10% Toughness on Heavy Attack Kill.
~~~

## English comparison

The English explicitly requires a Heavy Attack Kill and gives 10% Toughness, agreeing with the accepted kill event and restoration proportion. It does not make the Chinese text's “Heavy hit” error. Maximum-Toughness basis, missing-Toughness cap, absence of a template cooldown/stack restriction and separation from normal Melee-kill restoration supplement the description.

## Icon source

[Original image](https://gameslantern.com/storage/sites/darktide/exporter/talents/zealot/default/zealot_toughness_on_heavy_kills.webp) | [Media-Assets Issue](https://github.com/SyuanTsai/Media-Assets/issues/8#issuecomment-5929296872) | [Existing attachment](https://github.com/user-attachments/assets/eb0f681c-574a-447c-b917-9413f146fd72). The icon identifies the talent; it is not mechanism evidence.
