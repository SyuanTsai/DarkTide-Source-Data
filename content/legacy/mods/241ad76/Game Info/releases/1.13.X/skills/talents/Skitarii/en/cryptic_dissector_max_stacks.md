# Honed Dissector: source evidence

[繁體中文](../cryptic_dissector_max_stacks.md) | [Player description](README.md#cryptic_dissector_max_stacks) | [Technical index](SOURCE_INDEX.md) | [English comparison](LOCALIZATION_COMPARISON.md#cryptic_dissector_max_stacks)

Release 1.13.1; fixed SHA `7e662fcda16219d775b84af50322be2e9cd9d62e`. Talent `cryptic_dissector_max_stacks`; name key `loc_talent_cryptic_dissector_max_stacks`; description key `loc_talent_cryptic_dissector_max_stacks_desc`. Node `node_dcc243dd-aaf5-41cd-be8c-5db40d46967f`; category Keystone; one point. Mechanisms and examples reuse verified source evidence; no in-game test was performed.

## Source-confirmed behavior and static derivation

- `talent_settings_cryptic.lua` defines `max_stacks = 6` and `extra_max_stacks = 2`. The talent definition displays `6 + 2` and enables the special rule `cryptic_dissector_extra_max_stacks`.
- `cryptic_dissector`'s `start_func` checks this rule and sets `num_max_stacks = 8`. The `cryptic_dissector_stack` `start_func` also increases `max_stacks` and `max_stacks_cap` by 2, keeping the visible count and externally controlled buff cap aligned. Initialization adds `num_max_stacks` stacks, so the passive starts at a full 8 visible stacks. The stepped table is also generated through `6 + 2 = 8`: Damage remains 2.5% per stack and the eighth Toughness damage taken step is `0.80`.

## Fixed source evidence

- [scripts/ui/views/talent_builder_view/layouts/cryptic_tree.lua — L1124-L1146](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/ui/views/talent_builder_view/layouts/cryptic_tree.lua#L1124-L1146)
- [scripts/settings/ability/archetype_talents/talents/cryptic_talents.lua — L1162-L1177](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/cryptic_talents.lua#L1162-L1177)
- [scripts/settings/talent/talent_settings_cryptic.lua — L251-L263](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/talent/talent_settings_cryptic.lua#L251-L263)
- [scripts/settings/buff/archetype_buff_templates/cryptic_buff_templates.lua — L1369-L1391](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/cryptic_buff_templates.lua#L1369-L1391)
- [scripts/settings/buff/archetype_buff_templates/cryptic_buff_templates.lua — L1488-L1528](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/cryptic_buff_templates.lua#L1488-L1528)
- [scripts/settings/ability/archetype_talents/talents/cryptic_talents.lua — L1162-L1177](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/cryptic_talents.lua#L1162-L1177)
- [scripts/ui/views/talent_builder_view/layouts/cryptic_tree.lua — L1124-L1146](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/ui/views/talent_builder_view/layouts/cryptic_tree.lua#L1124-L1146)

## Example assumptions and limits

- **Effect**: Raises the Flensing Protocols stack cap from **6 to 8**; starts at **8 stacks**.
- **Example**: Damage remains +2.5% per stack, so 8 stacks give **+20% Damage**. The Toughness damage taken multiplier is `1 − 0.025 × 8 = 0.80`. With no other damage bonuses, base attack damage `100` becomes `120`; with no other damage reduction, 100 incoming Toughness damage becomes `80`.

- `6 + 2 = 8` stacks; `8 × 2.5% = 20%` Damage, giving `100 → 120` with no other Damage modifiers. Toughness multiplier `1 − 0.025 × 8 = 0.80` gives `100 → 80` with no other damage reduction.
- This raises the Flensing Protocols cap without increasing the per-stack values or changing damage-based stack loss, Elite/Specialist kill stack restoration, or kill-based Toughness recovery.
- Starting at full stacks and the unchanged per-stack effects are supplementary details.

Mechanisms reuse the fixed-version evidence, with local Build 25606770 English text corresponding to 1.13.1. Actual presentation and behavior remain unobserved in game. Missing details are supplementary explanations.

<a id="original-english-template-and-reconstruction"></a>

## Original English template and reconstruction

Steam Build `25606770`; `content/localization/ui`, resource hash `63564edcb7c3c5ee`; language `en` (code `0`).

- Name key `loc_talent_cryptic_dissector_max_stacks`, hash `a5e601c2`, entry 10689: **Honed Dissector**.
- Description key `loc_talent_cryptic_dissector_max_stacks_desc`, hash `52304209`, entry 5342.

Full raw template:

~~~text
Increase Max Stacks to {max_stacks:%s}.
~~~

| Placeholder | Value | Formatting |
|---|---|---|
| `max_stacks` | 8 | `number`: `max_stacks + extra_max_stacks = 6 + 2` |

The display mapping in `cryptic_talents.lua` L1171–L1176 adds the two already verified settings. The original English does not name the parent Keystone in this short template.

Static reconstruction; not an observed game screen:

~~~text
Increase Max Stacks to 8.
~~~

## English comparison

The English states that maximum stacks increase to 8, matching the base 6 plus 2 extra. Starting at 8 and retaining the original per-stack values and other stack rules are supplements. No explicit English contradiction was identified.

## Icon source

[Original image](https://gameslantern.com/storage/sites/darktide/exporter/talents/cryptic/keystone_modifier/cryptic_dissector_max_stacks.webp) | [Media-Assets Issue](https://github.com/SyuanTsai/Media-Assets/issues/13#issuecomment-5935647528) | [Existing attachment](https://github.com/user-attachments/assets/17ab9d2c-793b-40c4-83bd-cb3c4bdee444). The icon identifies the talent; it is not mechanism evidence.
