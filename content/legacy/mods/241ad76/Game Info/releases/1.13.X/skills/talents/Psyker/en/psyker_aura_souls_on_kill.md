# Psychic Vampire: source evidence

[繁體中文](../psyker_aura_souls_on_kill.md) | [Player description](README.md#psyker_aura_souls_on_kill) | [Technical index](SOURCE_INDEX.md) | [English comparison](LOCALIZATION_COMPARISON.md#psyker_aura_souls_on_kill)

Release 1.13.1; fixed SHA `7e662fcda16219d775b84af50322be2e9cd9d62e`. Talent `psyker_aura_souls_on_kill`; name key `loc_talent_psyker_souls_on_kill_coop`; description key `loc_talent_psyker_souls_on_kill_coop_desc`. Node `node_b5482701-b516-444a-92d4-df82bc410afd`; category Keystone; one point. Mechanisms and examples reuse verified source evidence; no in-game test was performed.

## Source-confirmed behavior and static derivation

- On the server, `on_minion_death` first checks whether `attacking_unit` is in the `is_unit_in_coherency` set. Only then does `math.random() < 0.04` add a soul through the talent holder's `buff_extension`. The Coherency system includes the player in that set. It does not grant one charge to every teammate.

## Fixed source evidence

- [scripts/settings/talent/talent_settings_psyker.lua — L219-L221](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/talent/talent_settings_psyker.lua#L219-L221)
- [scripts/settings/buff/archetype_buff_templates/psyker_buff_templates.lua — L1622-L1657](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/psyker_buff_templates.lua#L1622-L1657)
- [scripts/extension_systems/coherency/coherency_system.lua — L188-L195](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/coherency/coherency_system.lua#L188-L195)
- [scripts/settings/ability/archetype_talents/talents/psyker_talents.lua — L1398-L1413](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/psyker_talents.lua#L1398-L1413)
- [scripts/ui/views/talent_builder_view/layouts/psyker_tree.lua — L1573-L1597](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/ui/views/talent_builder_view/layouts/psyker_tree.lua#L1573-L1597)

## Example assumptions and limits

- **Trigger:** When you or an Ally in Coherency kills an enemy, you have a 4% chance to gain one Warp Charge. Allies do not receive your charge from this effect.

- **Chance example:** With storage available each time, 100 qualifying kills have expected gain `100 × 4% = 4` stacks; there is no guaranteed gain every 25 kills.

- **Selection limit:** Choose either Psychic Vampire or In Fire Reborn.

The example assumes no other modifiers and has not been verified in game. Mechanisms reuse the fixed-version evidence, with local Build 25606770 English text corresponding to 1.13.1. Actual presentation and behavior remain unobserved in game. Missing details are supplementary explanations.

<a id="original-english-template-and-reconstruction"></a>

## Original English template and reconstruction

Steam Build `25606770`; `content/localization/ui`, resource hash `63564edcb7c3c5ee`; language `en` (code `0`).

- Name key `loc_talent_psyker_souls_on_kill_coop`, hash `302abae8`, entry 3128: **Psychic Vampire**.
- Description key `loc_talent_psyker_souls_on_kill_coop_desc`, hash `03d352e7`, entry 241.

Full raw template:

~~~text
Whenever you or an ally in Coherency kill an Enemy, you have a {soul_chance:%s} chance to gain a Warp Charge.
~~~

| Placeholder | Value | Formatting |
|---|---|---|
| `soul_chance` | 0.04 | Percentage: 4%. |

The existing mapping in `scripts/settings/ability/archetype_talents/talents/psyker_talents.lua` L1403-L1408 supplies `soul_chance` from `talent_settings_2.coop_1.on_kill_proc_chance`. Accepted probability and common formatting are reused.

Static reconstruction; not an observed game screen:

~~~text
Whenever you or an ally in Coherency kill an Enemy, you have a 4% chance to gain a Warp Charge.
~~~

## English comparison

The English explicitly includes your own kills and kills by an Ally in Coherency, and identifies you as the recipient of the 4% chance for a Warp Charge. These agree with the accepted attacker-set check and holder-only gain. The available-storage assumption, probabilistic example and exclusive choice with In Fire Reborn supplement the wording; no explicit English contradiction is identified.

## Icon source

[Original image](https://gameslantern.com/storage/sites/darktide/exporter/talents/psyker/keystone_modifier/psyker_aura_souls_on_kill.webp) | [Media-Assets Issue](https://github.com/SyuanTsai/Media-Assets/issues/7#issuecomment-5928024966) | [Existing attachment](https://github.com/user-attachments/assets/36248d6b-7838-4004-86e5-645956cb8392). The icon identifies the talent; it is not mechanism evidence.
