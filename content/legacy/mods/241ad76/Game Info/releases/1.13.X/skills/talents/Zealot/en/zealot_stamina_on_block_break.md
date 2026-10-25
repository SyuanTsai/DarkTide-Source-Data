# Retaliatory Defence: source evidence

[繁體中文](../zealot_stamina_on_block_break.md) | [Player description](README.md#zealot_stamina_on_block_break) | [Technical index](SOURCE_INDEX.md) | [English comparison](LOCALIZATION_COMPARISON.md#zealot_stamina_on_block_break)

Release 1.13.1; fixed SHA `7e662fcda16219d775b84af50322be2e9cd9d62e`. Talent `zealot_stamina_on_block_break`; name key `loc_talent_zealot_stamina_on_block_break`; description key `loc_talent_zealot_stamina_on_block_break_alt_desc`. Node `node_2aa8cb10-8d27-4716-b001-85aa3bf9cc41`; category Skill; one point. Mechanisms and examples reuse verified source evidence; no in-game test was performed.

## Source-confirmed behavior and static derivation

- The proc pairs `on_block` with `on_block_broken` and has a 12-second cooldown.
- `stun_immune_block_broken` uses `template_context.active` through `conditional_keywords_func`. With no `active_duration`, active means the effect is not on cooldown.
- `Block` checks immunity before dispatching the event and only then decides whether to apply Stun.

## Fixed source evidence

- [scripts/settings/buff/archetype_buff_templates/zealot_buff_templates.lua — L2483-L2511](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/zealot_buff_templates.lua#L2483-L2511)
- [scripts/settings/talent/talent_settings_zealot.lua — L118-L121](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/talent/talent_settings_zealot.lua#L118-L121)
- [scripts/utilities/attack/stamina.lua — L102-L118](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/attack/stamina.lua#L102-L118)
- [scripts/utilities/attack/block.lua — L206-L224](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/attack/block.lua#L206-L224)
- [scripts/extension_systems/buff/buffs/proc_buff.lua — L185-L215](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/buff/buffs/proc_buff.lua#L185-L215)
- [scripts/settings/ability/archetype_talents/talents/zealot_talents.lua — L2280-L2299](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/zealot_talents.lua#L2280-L2299)
- [scripts/ui/views/talent_builder_view/layouts/zealot_tree.lua — L811-L833](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/ui/views/talent_builder_view/layouts/zealot_tree.lua#L811-L833)

## Example assumptions and limits

- **Operation**: When the effect is available, a Block Break restores 50% of maximum Stamina and prevents the stun from that Block Break. Triggering it starts a 12-second cooldown.
- **Restoration example**: With maximum Stamina 6, a Block Break exhausting it to 0 restores 6 × 50% = 3. Another Block Break during the cooldown gives no further restoration.

- The accepted Chinese comparison at hash `2fb38d1a` finds no explicit effect-direction contradiction; omitted formulas, caps and finer restrictions remain supplements.
- Actual game behavior and presentation remain unobserved.

Mechanisms reuse the fixed-version evidence, with local Build 25606770 English text corresponding to 1.13.1. Actual presentation and behavior remain unobserved in game. Missing details are supplementary explanations.

<a id="original-english-template-and-reconstruction"></a>

## Original English template and reconstruction

Steam Build `25606770`; `content/localization/ui`, resource hash `63564edcb7c3c5ee`; language `en` (code `0`).

- Name key `loc_talent_zealot_stamina_on_block_break`, hash `2db26b4b`, entry 2984: **Retaliatory Defence**.
- Description key `loc_talent_zealot_stamina_on_block_break_alt_desc`, hash `2fb38d1a`, entry 3104.

Full raw template:

~~~text
On Block Break, you are no longer Stunned and instead restore {stamina:%s} Stamina. {cooldown:%s}s Cooldown.
~~~

| Placeholder | Value | Formatting |
|---|---|---|
| `stamina` | 0.5 → 50% | `percentage`; `talent_settings.zealot_stamina_on_block_break.stamina` |
| `cooldown` | 12 → 12 | `number`; `talent_settings.zealot_stamina_on_block_break.cooldown_duration` |

The minimal display mapping at `zealot_talents.lua` L2280-L2299 supplies the accepted restoration proportion and cooldown.

Static reconstruction; not an observed game screen:

~~~text
On Block Break, you are no longer Stunned and instead restore 50% Stamina. 12s Cooldown.
~~~

## English comparison

The English ties Block Break stun prevention and 50% Stamina restoration to a 12-second cooldown, agreeing with the accepted available-state effect. It does not explicitly promise stun protection while the talent is on cooldown. Maximum-Stamina basis, the active-state keyword test and immunity-before-event ordering supplement the description.

## Icon source

[Original image](https://gameslantern.com/storage/sites/darktide/exporter/talents/zealot/default/zealot_stamina_on_block_break.webp) | [Media-Assets Issue](https://github.com/SyuanTsai/Media-Assets/issues/8#issuecomment-5929296872) | [Existing attachment](https://github.com/user-attachments/assets/607612bf-67ee-475e-9a16-0b5541c7b4ea). The icon identifies the talent; it is not mechanism evidence.
