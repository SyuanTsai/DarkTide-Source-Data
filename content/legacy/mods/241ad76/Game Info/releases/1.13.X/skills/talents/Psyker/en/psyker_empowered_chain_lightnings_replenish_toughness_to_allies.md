# Psychic Leeching: source evidence

[繁體中文](../psyker_empowered_chain_lightnings_replenish_toughness_to_allies.md) | [Player description](README.md#psyker_empowered_chain_lightnings_replenish_toughness_to_allies) | [Technical index](SOURCE_INDEX.md) | [English comparison](LOCALIZATION_COMPARISON.md#psyker_empowered_chain_lightnings_replenish_toughness_to_allies)

Release 1.13.1; fixed SHA `7e662fcda16219d775b84af50322be2e9cd9d62e`. Talent `psyker_empowered_chain_lightnings_replenish_toughness_to_allies`; name key `loc_talent_psyker_empowered_chain_lightnings_replenish_toughness_to_allies`; description key `loc_talent_psyker_empowered_chain_lightnings_replenish_toughness_to_allies_description`. Node `node_8ff8fcfb-3f13-497f-9288-0afc05b5cb55`; category Keystone; one point. Mechanisms and examples reuse verified source evidence; no in-game test was performed.

## Source-confirmed behavior and static derivation

- `talent_settings_3.spec_passive_1.toughness_for_allies = 0.2`. The modifier enables the special rule `psyker_empowered_grenades_toughness_on_attack`.
- When the empowerment buff handles the Smite-projectile/Smite-Damage events, it first attempts to spend a charge. On success, if the modifier is active, it iterates `coherency_extension:in_coherence_units()` and calls `replenish_percentage(..., 0.2)` for each unit.
- The chain-lightning start event restores Toughness only when `charges >= 1`; charge consumption occurs in `on_chain_lightning_finish`. These events do not repeat restoration according to the number of targets hit.

## Fixed source evidence

- [scripts/settings/ability/archetype_talents/talents/psyker_talents.lua — L1732-L1751](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/psyker_talents.lua#L1732-L1751)
- [scripts/settings/talent/talent_settings_psyker.lua — L373-L375](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/talent/talent_settings_psyker.lua#L373-L375)
- [scripts/settings/buff/archetype_buff_templates/psyker_buff_templates.lua — L2282-L2297](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/psyker_buff_templates.lua#L2282-L2297)
- [scripts/settings/buff/archetype_buff_templates/psyker_buff_templates.lua — L2298-L2344](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/psyker_buff_templates.lua#L2298-L2344)
- [scripts/settings/buff/archetype_buff_templates/psyker_buff_templates.lua — L2367-L2383](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/psyker_buff_templates.lua#L2367-L2383)
- [scripts/settings/ability/archetype_talents/talents/psyker_talents.lua — L1732-L1751](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/psyker_talents.lua#L1732-L1751)
- [scripts/ui/views/talent_builder_view/layouts/psyker_tree.lua — L1400-L1422](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/ui/views/talent_builder_view/layouts/psyker_tree.lua#L1400-L1422)

## Example assumptions and limits

- **Trigger:** While holding empowerment, use an empowered Blitz to restore 20% of maximum Toughness to you and each Ally in Coherency. Smite restores it when casting starts, Assail when thrown, and Brain Rupture when the attack resolves.

- **Restoration example:** A player with 100 maximum Toughness restores `100 × 20% = 20`; one with 150 restores 30. Each is capped by their own missing Toughness. Hitting more enemies with a single Smite does not increase this restoration.

Each unit's effective restoration cannot exceed its current Toughness deficit. Recipients are the `in_coherence_units` set returned by the Coherency system; following the talent wording, this document calls them you and Allies in Coherency without enumerating every eligibility boundary. An empowerment charge is required; without one, this empowered Toughness effect does not trigger. Mechanisms reuse the fixed-version evidence, with local Build 25606770 English text corresponding to 1.13.1. Actual presentation and behavior remain unobserved in game. Missing details are supplementary explanations.

<a id="original-english-template-and-reconstruction"></a>

## Original English template and reconstruction

Steam Build `25606770`; `content/localization/ui`, resource hash `63564edcb7c3c5ee`; language `en` (code `0`).

- Name key `loc_talent_psyker_empowered_chain_lightnings_replenish_toughness_to_allies`, hash `756c452b`, entry 7627: **Psychic Leeching**.
- Description key `loc_talent_psyker_empowered_chain_lightnings_replenish_toughness_to_allies_description`, hash `0f6ef5af`, entry 1005.

Full raw template:

~~~text
Using your Blitz while {talent_name:%s} is active replenishes {toughness:%s} Toughness to you and Allies in Coherency.
~~~

| Placeholder | Value | Formatting |
|---|---|---|
| `talent_name` | `loc_talent_psyker_empowered_ability` | Localized string: Empowered Psionics; hash `9bac9dab`, entry 10047. |
| `toughness` | 0.2 | Percentage: 20%. |

The existing mapping in `scripts/settings/ability/archetype_talents/talents/psyker_talents.lua` L1737-L1746 localizes `talent_name` and supplies `toughness` from `talent_settings_3.spec_passive_1.toughness_for_allies`. Accepted values, the same-build name and common formatting are reused.

Static reconstruction; not an observed game screen:

~~~text
Using your Blitz while Empowered Psionics is active replenishes 20% Toughness to you and Allies in Coherency.
~~~

## English comparison

The English makes the restoration conditional on using a Blitz with Empowered Psionics active and explicitly includes you and Allies in Coherency, agreeing with the accepted charge-gated events, recipient set and 20% value. It does not tie restoration to the number of enemies hit. The maximum-Toughness basis, deficit limit and distinct Blitz event timings supplement its wording; no explicit English contradiction is identified.

## Icon source

[Original image](https://gameslantern.com/storage/sites/darktide/exporter/talents/psyker/keystone_modifier/psyker_empowered_chain_lightnings_replenish_toughness_to_allies.webp) | [Media-Assets Issue](https://github.com/SyuanTsai/Media-Assets/issues/7#issuecomment-5928024966) | [Existing attachment](https://github.com/user-attachments/assets/38c99293-d836-4a4e-91fb-1f6a65a848f8). The icon identifies the talent; it is not mechanism evidence.
