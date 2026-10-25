# Benediction: source evidence

[繁體中文](../zealot_toughness_damage_reduction_coherency_improved.md) | [Player description](README.md#zealot_toughness_damage_reduction_coherency_improved) | [Technical index](SOURCE_INDEX.md) | [English comparison](LOCALIZATION_COMPARISON.md#zealot_toughness_damage_reduction_coherency_improved)

Release 1.13.1; fixed SHA `7e662fcda16219d775b84af50322be2e9cd9d62e`. Talent `zealot_toughness_damage_reduction_coherency_improved`; name key `loc_talent_zealot_aura_efficiency`; description key `loc_talent_zealot_toughness_aura_efficiency_desc`. Node `node_4411a1ae-e625-4cd6-9ae3-403b4a346801`; category Aura; one point. Mechanisms and examples reuse verified source evidence; no in-game test was performed.

## Source-confirmed behavior and static derivation

- Talent `format_values.damage_reduction` calculates `1 − talent_settings_2.coherency.toughness_damage_taken_multiplier`. Base multiplier is **0.925**; improved multiplier **0.85**, with `max_stacks = 1`.
- Both Buff templates use `coherency_id = zelot_maniac_coherency_aura`, with base `priority = 2` and improved `priority = 1`. Coherency selection prefers the smaller priority number and enables the winning Aura as a single active buff.
- The Coherency daisy-chain includes the holder's own unit. The extension checks source buffs in that set, so the holder can receive their own Aura.
- Reduction uses `toughness_damage_taken_multiplier`; it must not be described as Health damage reduction or reduction of all damage.
- A recipient with `prevent_coherency_buffs_from_other_players` only receives Auras from that same player's source in the generic selector. This is a recipient-side exception; none of the three Zealot Aura definitions here grants that keyword.

## Fixed source evidence

- [scripts/settings/ability/archetype_talents/talents/zealot_talents.lua — L779-L827](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/zealot_talents.lua#L779-L827)
- [scripts/settings/talent/talent_settings_zealot.lua — L319-L328](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/talent/talent_settings_zealot.lua#L319-L328)
- [scripts/settings/talent/talent_settings_zealot.lua — L381-L384](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/talent/talent_settings_zealot.lua#L381-L384)
- [scripts/settings/buff/archetype_buff_templates/zealot_buff_templates.lua — L3283-L3356](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/zealot_buff_templates.lua#L3283-L3356)
- [scripts/extension_systems/coherency/coherency_system.lua — L188-L195](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/coherency/coherency_system.lua#L188-L195)
- [scripts/extension_systems/coherency/unit_coherency_extension.lua — L256-L311](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/coherency/unit_coherency_extension.lua#L256-L311)
- [scripts/utilities/attack/damage_taken_calculation.lua — L234-L255](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/attack/damage_taken_calculation.lua#L234-L255)
- [scripts/settings/ability/archetype_talents/talents/zealot_talents.lua — L802-L827](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/zealot_talents.lua#L802-L827)
- [scripts/ui/views/talent_builder_view/layouts/zealot_tree.lua — L459-L485](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/ui/views/talent_builder_view/layouts/zealot_tree.lua#L459-L485)

## Example assumptions and limits

- **Effect**: You and allies in Coherency take **15% less Toughness damage**. This does not directly reduce Health damage.
- **Damage example**: Original Toughness damage **100** becomes `100 × (1 − 15%) = 85`. With an independently calculated **40%** Toughness damage reduction, the result is `100 × 0.85 × 0.6 = 51`.
- **Replacement and duplicate sources**: Replaces the base **7.5%** Toughness damage reduction Aura; they do not add to **22.5%**. Multiple allies providing Benediction still apply the **15%** reduction once.

- Isolated comparison: `100 × 0.85 = 85` Toughness damage; the base Aura gives `100 × 0.925 = 92.5`.
- If holder and an ally both have Benediction, the selector still chooses only one improved buff with the higher priority for that `coherency_id`.
- These examples isolate this multiplier. Other Toughness modifiers and damage calculations can affect final values.
- `max_stacks = 1` limits each Buff template's stacks; different sources sharing a `coherency_id` are additionally handled by unique-Aura priority selection.
- Build **25606770**, description hash **`90d53110`**: Chinese and English both include the holder and Coherency allies receiving Toughness damage reduction, with no confirmed explicit Chinese mistranslation. Actual game presentation remains unobserved.

Mechanisms reuse the fixed-version evidence, with local Build 25606770 English text corresponding to 1.13.1. Actual presentation and behavior remain unobserved in game. Missing details are supplementary explanations.

<a id="original-english-template-and-reconstruction"></a>

## Original English template and reconstruction

Steam Build `25606770`; `content/localization/ui`, resource hash `63564edcb7c3c5ee`; language `en` (code `0`).

- Name key `loc_talent_zealot_aura_efficiency`, hash `fc382324`, entry 16387: **Benediction**.
- Description key `loc_talent_zealot_toughness_aura_efficiency_desc`, hash `90d53110`, entry 9357.

Full raw template:

~~~json
"{damage_reduction:%s} Toughness Damage Reduction for you and Allies in Coherency. \n\nThis is an augmented version of the base Aura, {talent_name:%s}."
~~~

| Placeholder | Value | Formatting |
|---|---|---|
| `{damage_reduction:%s}` | `1 − 0.85 = 0.15` → `+15%` | Percentage with explicit + prefix |
| `{talent_name:%s}` | `loc_talent_zealot_2_base_3` → `The Emperor's Will` | Localized string; ui hash `b68eec69`, entry 11780 |

Missing display substitutions were read only in `zealot_talents.lua` L802-L827. The accepted improved multiplier is reused; `talent_name` pairs with the same-build base-Aura name. Runtime Aura-selection conclusions are retained from the verified Chinese evidence.

Static reconstruction; not an observed game screen:

~~~text
+15% Toughness Damage Reduction for you and Allies in Coherency.

This is an augmented version of the base Aura, The Emperor's Will.
~~~

## English comparison

The English explicitly gives +15% Toughness Damage Reduction to you and Coherency allies, consistent with the 0.85 damage multiplier and self-inclusive chain. It identifies an augmented base Aura without stating the base and improved values stack. Priority replacement, duplicate-source selection, recipient keyword exception and independent multiplier examples are supplementary. No explicit English contradiction or confirmed Chinese mistranslation was found.

## Icon source

[Original image](https://gameslantern.com/storage/sites/darktide/exporter/talents/zealot/aura/zealot_toughness_damage_reduction_coherency_improved.webp) | [Media-Assets Issue](https://github.com/SyuanTsai/Media-Assets/issues/8#issuecomment-5929289315) | [Existing attachment](https://github.com/user-attachments/assets/da0a72a9-f944-4291-a753-a8c87b696ad5). The icon identifies the talent; it is not mechanism evidence.
