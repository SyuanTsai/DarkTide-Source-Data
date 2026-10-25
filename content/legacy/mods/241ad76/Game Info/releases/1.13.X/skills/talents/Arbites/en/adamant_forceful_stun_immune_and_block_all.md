# Adamant Will: source evidence

[繁體中文](../adamant_forceful_stun_immune_and_block_all.md) | [Player description](README.md#adamant_forceful_stun_immune_and_block_all) | [Technical index](SOURCE_INDEX.md) | [English comparison](LOCALIZATION_COMPARISON.md#adamant_forceful_stun_immune_and_block_all)

Release 1.13.1; fixed SHA `7e662fcda16219d775b84af50322be2e9cd9d62e`. Talent `adamant_forceful_stun_immune_and_block_all`; node `node_011c39aa-3025-4c37-b8de-608a36813a25`; category Keystone; one point.

## Source-confirmed behavior and static derivation

- The talent special rule makes the Forceful stack buff add the immediate immunity buff at `stack_count >= 10`. A transition from maximum to fewer stacks removes the immediate buff and creates a separate 3s linger buff.
- Both buffs supply `stun_immune` and `slowdown_immune`. `conditional_keywords_func` supplies `block_unblockable` only while `block_component.is_perfect_blocking` is true.

## Fixed source evidence

- [scripts/settings/ability/archetype_talents/talents/adamant_talents.lua — L1547-L1561](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/adamant_talents.lua#L1547-L1561)
- [scripts/settings/talent/talent_settings_adamant.lua — L268-L284](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/talent/talent_settings_adamant.lua#L268-L284)
- [scripts/settings/buff/archetype_buff_templates/adamant_buff_templates.lua — L1310-L1357](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/adamant_buff_templates.lua#L1310-L1357)
- [scripts/settings/buff/archetype_buff_templates/adamant_buff_templates.lua — L1523-L1569](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/adamant_buff_templates.lua#L1523-L1569)
- [scripts/settings/ability/archetype_talents/talents/adamant_talents.lua — L1547-L1561](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/adamant_talents.lua#L1547-L1561)
- [scripts/ui/views/talent_builder_view/layouts/adamant_tree.lua — L912-L936](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/ui/views/talent_builder_view/layouts/adamant_tree.lua#L912-L936)

## Example assumptions and limits

- **Trigger and duration**: At 10 Forceful stacks, gain Stun Immunity and Slowdown Immunity. These effects remain for 3s after leaving maximum stacks.

- **Perfect blocks**: While the effect is active, perfect blocks can block attacks that are normally unblockable. Ordinary blocks do not gain the same capability. Attacks must still meet the shared blocking checks; this effect does not imply continuous invulnerability.

Forceful rising from 9 to 10 stacks activates the effect. After damage removes one stack, the immunity and perfect-block conditional effect remain for 3s. The broad wording `all attacks` is subject to perfect-block state and the shared blocking logic for `block_unblockable`. The existing scope does not establish every attack type's coverage and does not extend the effect to other blocking states.

The transition example uses stack counts and seconds. Values and behavior reuse the fixed-version evidence; examples are static derivations. Game execution and the final game UI were not observed. The wording boundary is recorded against existing implementation evidence without assuming a translation error.

<a id="original-english-template-and-reconstruction"></a>

## Original English template and reconstruction

Steam Build `25606770`; `content/localization/ui`, resource hash `63564edcb7c3c5ee`; language `en` (code `0`).

- Name key `loc_talent_adamant_forceful_stamina_block_and_push_alt`, hash `d182e514`, entry 13528: **Adamant Will**.
- Description key `loc_talent_adamant_forceful_stun_immune_and_block_all_linger_desc`, hash `8e7f2015`, entry 9223. The `[Writer]` suffix is resource metadata.

Full raw template:

```text
While at Max Stacks, and for {duration:%s}s afterwards, Gain Stun Immunity, additionally, your perfect blocks can block all attacks.
```

The display maps `duration` to `talent_settings.forceful.stun_immune_linger_time` using number formatting. Values reuse the accepted evidence.

| Placeholder | Value | Formatting |
|---|---|---|
| duration | 3 | Number → 3; template adds s |

Static reconstruction; not an observed game screen:

```text
While at Max Stacks, and for 3s afterwards, Gain Stun Immunity, additionally, your perfect blocks can block all attacks.
```

## English comparison limits

The independently read English matches the maximum-stack condition, post-maximum duration, Stun Immunity and perfect-block requirement. Slowdown Immunity, the transition example and ordinary-block limits are supplementary. Complete coverage of `all attacks` cannot be confirmed from the existing keyword-level evidence; the shared blocking checks remain applicable. No explicit English contradiction is established for this talent. Mechanisms, citations, shared formatting and icon provenance reuse the existing evidence.

## Icon source

[Original image](https://gameslantern.com/storage/sites/darktide/exporter/talents/adamant/keystone_modifier/adamant_forceful_stun_immune_and_block_all.webp) | [Media-Assets Issue](https://github.com/SyuanTsai/Media-Assets/issues/11#issuecomment-5932554216) | [Existing attachment](https://github.com/user-attachments/assets/92922b1c-4991-480e-86af-e050b9faa496). The icon identifies the talent; it is not mechanism evidence.
