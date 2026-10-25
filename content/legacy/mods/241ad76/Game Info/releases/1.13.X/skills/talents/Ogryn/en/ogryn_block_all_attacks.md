# Unbreakable: source evidence

[繁體中文](../ogryn_block_all_attacks.md) | [Player description](README.md#ogryn_block_all_attacks) | [Technical index](SOURCE_INDEX.md) | [English comparison](LOCALIZATION_COMPARISON.md#ogryn_block_all_attacks)

Release 1.13.1; fixed SHA `7e662fcda16219d775b84af50322be2e9cd9d62e`. Talent `ogryn_block_all_attacks`; name key `loc_talent_ogryn_block_all_attacks`; description key `loc_talent_ogryn_block_all_attacks_variant_desc`. Node `node_abc9d2b7-97eb-4431-9596-61435a15bff7`; category Talent; one point. Mechanisms and examples reuse verified source evidence; no in-game test was performed.

## Source-confirmed behavior and static derivation

- Uses the perfect-block version, which grants `block_unblockable` only while `is_perfect_blocking`. `on_perfect_block` adds `damage_boost`, maximum one stack, duration 5s and `melee_damage=0.2`; `sweep_finish` exits it.

## Fixed source evidence

- [scripts/settings/buff/archetype_buff_templates/ogryn_buff_templates.lua — L3463-L3509](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/ogryn_buff_templates.lua#L3463-L3509)
- [scripts/settings/talent/talent_settings_ogryn.lua — L164-L167](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/talent/talent_settings_ogryn.lua#L164-L167)
- [scripts/utilities/attack/block.lua — L90-L125](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/attack/block.lua#L90-L125)
- [scripts/utilities/attack/block.lua — L252-L273](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/attack/block.lua#L252-L273)
- [scripts/utilities/attack/damage_calculation.lua — L278-L300](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/attack/damage_calculation.lua#L278-L300)
- [scripts/settings/ability/archetype_talents/talents/ogryn_talents.lua — L2491-L2506](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/ogryn_talents.lua#L2491-L2506)
- [scripts/ui/views/talent_builder_view/layouts/ogryn_tree.lua — L1694-L1718](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/ui/views/talent_builder_view/layouts/ogryn_tree.lua#L1694-L1718)

## Example assumptions and limits

- **Perfect Block**: Normally, the first approximately 0.3s after beginning a block is the Perfect Block window. During it, you can block melee attacks marked as unblockable; ordinary blocking requirements such as angle still apply.

- **Damage bonus**: A successful Perfect Block grants +20% damage to the next melee sweep, retained for at most 5s. Completing the sweep consumes it, even if it misses. Further Perfect Blocks refresh the duration without adding percentages.

- **Damage example**: Base damage of 100 becomes 120. With an existing +30% at the same stage, it becomes `100 × (1 + 30% + 20%) = 150`.

Mechanisms reuse the fixed-version evidence, with local Build 25606770 English text corresponding to 1.13.1. Actual presentation and behavior remain unobserved in game. Missing details are supplementary explanations.

<a id="original-english-template-and-reconstruction"></a>

## Original English template and reconstruction

Steam Build `25606770`; `content/localization/ui`, resource hash `63564edcb7c3c5ee`; language `en` (code `0`).

- Name key `loc_talent_ogryn_block_all_attacks`, hash `017d4d2d`, entry 83: **Unbreakable**.
- Description key `loc_talent_ogryn_block_all_attacks_variant_desc`, hash `b565afeb`, entry 11697.

Full raw template:

~~~text
Your Perfect Blocks can block all Melee Attacks. On Perfect Block gain {damage:%s} Melee Damage on next Attack.
~~~

| Placeholder | Value | Formatting |
|---|---|---|
| damage | shared ogryn_block_all_attacks.melee_damage = 0.2 | Percentage with explicit + prefix → +20% |

Only the missing display mapping in the cited talent definition, lines 2491–2506, was read. Accepted values, mechanisms and common formatting were reused. The [Writer] suffix is export metadata, not part of the description.

Static reconstruction; not an observed game screen:

~~~text
Your Perfect Blocks can block all Melee Attacks. On Perfect Block gain +20% Melee Damage on next Attack.
~~~

## English comparison

The independently read English lets Perfect Blocks block all melee attacks and grants +20% melee damage on the next attack. This matches the accepted unblockable-attack keyword during Perfect Block and next-sweep bonus. It does not state that normal blocking requirements disappear. The approximately 0.3s window, 5s retention, consumption on a missed sweep, refresh and additive calculation supplement the text. No explicit English contradiction is established.

## Icon source

[Original image](https://gameslantern.com/storage/sites/darktide/exporter/talents/ogryn/default/ogryn_block_all_attacks.webp) | [Media-Assets Issue](https://github.com/SyuanTsai/Media-Assets/issues/10#issuecomment-5931394406) | [Existing attachment](https://github.com/user-attachments/assets/3ff7d7eb-6206-4d77-91c5-483259320072). The icon identifies the talent; it is not mechanism evidence.
