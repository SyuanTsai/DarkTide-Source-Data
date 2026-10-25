# Companion Aura: source evidence

[繁體中文](../adamant_companion_aura.md) | [Base effects](BASE_EFFECTS.md#adamant_companion_aura) | [Technical index](SOURCE_INDEX.md) | [English comparison](LOCALIZATION_COMPARISON.md#adamant_companion_aura)

Release 1.13.1; fixed SHA `7e662fcda16219d775b84af50322be2e9cd9d62e`. Base talent `adamant_companion_aura`; no selectable talent point is spent.

## Source-confirmed behavior and static derivation

- The base `adamant_companion_aura` supplies special rule `adamant_dog_counts_towards_coherency`, passive `adamant_companion_counts_for_coherency` and coherency aura `adamant_companion_aura_base`. This base aura template has no `stat_buffs`.
- The passive listens for its own Cyber-Mastiff spawning and attaches `adamant_companion_coherency_tracking_buff`. The companion coherency extension is enabled only when `adamant_dog_counts_towards_coherency` is present; otherwise `disabled = true`.
- The separate tree node `adamant_companion_coherency` uses `adamant_companion_aura` with `toughness_damage_taken_modifier = -0.075`. Its 7.5% Toughness Damage Reduction is not part of this base aura.

## Fixed source evidence

- [scripts/settings/archetype/archetypes/adamant_archetype.lua — L60-L62](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/archetype/archetypes/adamant_archetype.lua#L60-L62)
- [scripts/settings/ability/archetype_talents/talents/adamant_talents.lua — L722-L742](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/adamant_talents.lua#L722-L742)
- [scripts/settings/buff/archetype_buff_templates/adamant_buff_templates.lua — L534-L547](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/adamant_buff_templates.lua#L534-L547)
- [scripts/settings/buff/archetype_buff_templates/adamant_buff_templates.lua — L613-L654](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/adamant_buff_templates.lua#L613-L654)
- [scripts/extension_systems/coherency/companion_coherency_extension.lua — L26-L33](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/coherency/companion_coherency_extension.lua#L26-L33)
- [scripts/settings/ability/archetype_talents/talents/adamant_talents.lua — L743-L772](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/adamant_talents.lua#L743-L772)
- [scripts/settings/talent/talent_settings_adamant.lua — L60-L62](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/talent/talent_settings_adamant.lua#L60-L62)
- [scripts/settings/buff/archetype_buff_templates/adamant_buff_templates.lua — L548-L564](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/adamant_buff_templates.lua#L548-L564)

## Example assumptions and limits

- **Coherency membership**: The base passive lets your Cyber-Mastiff count as a squad member for Coherency.

- **Base scope**: This base aura does not directly apply a numerical effect such as Toughness Damage Reduction. The companion's Coherency eligibility and additional numerical aura bonuses are separate effects.

When the companion spawns, the base passive gives it the tracking effect and lets it participate in Coherency membership checks. The base template has no direct stat buffs. Actual allied access to their own Coherency effects still depends on distance and those effects' conditions.

Values and behavior reuse the verified fixed-version evidence. These are static explanations, not in-game tests. The local English Build and fixed source both correspond to 1.13.1.

<a id="original-english-template-and-reconstruction"></a>

## Original English template and reconstruction

Steam Build `25606770`; `content/localization/ui`, resource hash `63564edcb7c3c5ee`; language `en` (code `0`).

- Display-name key `loc_talent_adamant_companion_coherency`, hash `ce3146d6`, entry 13330: **Part of the Squad**. The document heading identifies the base aura.
- Description key `loc_talent_adamant_companion_coherency_desc`, hash `f0d0f1f5`, entry 15646.

Full raw text; no placeholders:

~~~text
Your Cyber Mastiff counts towards unit Coherency.
~~~

## English comparison

The independently read English states that the companion counts towards Coherency, matching the base membership effect. Own-companion tracking, special-rule activation and distance/effect conditions are supplementary. The English does not claim the separate 7.5% Toughness Damage Reduction, and this base record does not assign it. No explicit English contradiction is established.
