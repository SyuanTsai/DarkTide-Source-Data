# Impactful: source evidence

[繁體中文](../ogryn_heavy_hitter_stagger.md) | [Player description](README.md#ogryn_heavy_hitter_stagger) | [Technical index](SOURCE_INDEX.md) | [English comparison](LOCALIZATION_COMPARISON.md#ogryn_heavy_hitter_stagger)

Release 1.13.1; fixed SHA `7e662fcda16219d775b84af50322be2e9cd9d62e`. Talent `ogryn_heavy_hitter_stagger`; name key `loc_talent_ogryn_passive_heavy_hitter_stagger`; description key `loc_talent_ogryn_passive_heavy_hitter_stagger_desc`. Node `node_907d2d91-f87f-4ae9-b433-8a26e1c3ccd8`; category Keystone; one point. Mechanisms and examples reuse verified source evidence; no in-game test was performed.

## Source-confirmed behavior and static derivation

- The modifier buff has a maximum of one stack. Its lerped stat runs from 0 to `stagger × max_stacks`, with `stagger=0.075` and the Heavy Hitter maximum of 8.
- The interpolation reads the shared Heavy Hitter stack ratio. Thus the melee Impact bonus is `0.075N` at `N` stacks, up to `0.075 × 8 = 0.60`.
- This stat modifies melee attack Impact. Weapon attack and target resistance affect stagger; the percentage does not directly represent damage.
- `heavy_hitter_lerp_value` is module-local shared state. Interactions between multiple Ogryns were not tested; examples assume one character.

## Fixed source evidence

- [scripts/settings/ability/archetype_talents/talents/ogryn_talents.lua — L2436-L2455](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/ogryn_talents.lua#L2436-L2455)
- [scripts/settings/talent/talent_settings_ogryn.lua — L101-L110](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/talent/talent_settings_ogryn.lua#L101-L110)
- [scripts/settings/buff/archetype_buff_templates/ogryn_buff_templates.lua — L180-L221](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/ogryn_buff_templates.lua#L180-L221)
- [scripts/settings/buff/archetype_buff_templates/ogryn_buff_templates.lua — L323-L336](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/ogryn_buff_templates.lua#L323-L336)
- [scripts/utilities/attack/stagger_calculation.lua — L190-L203](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/attack/stagger_calculation.lua#L190-L203)
- [scripts/settings/ability/archetype_talents/talents/ogryn_talents.lua — L2436-L2455](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/ogryn_talents.lua#L2436-L2455)
- [scripts/ui/views/talent_builder_view/layouts/ogryn_tree.lua — L2048-L2071](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/ui/views/talent_builder_view/layouts/ogryn_tree.lua#L2048-L2071)

## Example assumptions and limits

- **Requirement**: The melee Impact bonus follows the current Heavy Hitter stack count. This node does not build a separate set of stacks.

- **Formula and cap**: Each stack adds 7.5%, up to 8 stacks. At full stacks, melee Impact increases by 60%.

- **Example**: At 4 stacks, the increase is 30%. If an attack has base Impact 100, at 8 stacks it becomes `100 × 1.6 = 160`.

Mechanisms are verified against the fixed public-source SHA, and local Build 25606770 Chinese and English text correspond to 1.13.1. Actual presentation and behavior remain unobserved in game. Missing details are supplementary explanations.

<a id="original-english-template-and-reconstruction"></a>

## Original English template and reconstruction

Steam Build `25606770`; `content/localization/ui`, resource hash `63564edcb7c3c5ee`; language `en` (code `0`).

- Name key `loc_talent_ogryn_passive_heavy_hitter_stagger`, hash `7d3c1644`, entry 8126: **Impactful**.
- Description key `loc_talent_ogryn_passive_heavy_hitter_stagger_desc`, hash `657b35a0`, entry 6607.

Full raw template:

~~~text
{talent_name:%s} also grants {impact:%s} Impact for each stack.
~~~

| Placeholder | Value | Formatting |
|---|---|---|
| talent_name | loc_talent_ogryn_passive_heavy_hitter | Localized string → Heavy Hitter; accepted same-build name |
| impact | 0.075 | Percentage with explicit + prefix → +7.5%; existing decimal-formatting evidence reused |

Only the missing display mapping in the cited talent definition, lines 2436–2455, was read. Existing mechanism and formatter evidence was reused.

Static reconstruction; not an observed game screen:

~~~text
Heavy Hitter also grants +7.5% Impact for each stack.
~~~

## English comparison

The independently read English links an Impact bonus to each Heavy Hitter stack and makes no damage claim. It matches the accepted melee Impact modifier. The maximum, arithmetic, weapon and target-resistance limits, and untested shared-state interaction supplement the text. No explicit English contradiction is established.

## Icon source

[Original image](https://gameslantern.com/storage/sites/darktide/exporter/talents/ogryn/keystone_modifier/ogryn_heavy_hitter_stagger.webp) | [Media-Assets Issue](https://github.com/SyuanTsai/Media-Assets/issues/10#issuecomment-5931383354) | [Existing attachment](https://github.com/user-attachments/assets/e8883b71-72ad-4780-92e7-395f6a32ead8). The icon identifies the talent; it is not mechanism evidence.
