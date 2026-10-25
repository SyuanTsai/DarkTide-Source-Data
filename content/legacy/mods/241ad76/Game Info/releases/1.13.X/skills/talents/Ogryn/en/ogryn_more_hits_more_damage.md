# Furious: source evidence

[繁體中文](../ogryn_more_hits_more_damage.md) | [Player description](README.md#ogryn_more_hits_more_damage) | [Technical index](SOURCE_INDEX.md) | [English comparison](LOCALIZATION_COMPARISON.md#ogryn_more_hits_more_damage)

Release 1.13.1; fixed SHA `7e662fcda16219d775b84af50322be2e9cd9d62e`. Talent `ogryn_more_hits_more_damage`; name key `loc_talent_ogryn_damage_per_enemy_hit_previous`; description key `loc_talent_ogryn_damage_per_enemy_hit_previous_new_desc`. Node `node_c3518d3e-c14f-453b-886b-5f8aac1c93c6`; category Talent; one point. Mechanisms and examples reuse verified source evidence; no in-game test was performed.

## Source-confirmed behavior and static derivation

- `on_sweep_finish` overwrites `template_data.hits` each time. `lerp_t=clamp(hits / 10, 0, 1)` interpolates `melee_damage` from 0 to `0.03 × 10`.
- There is no expiry timer, and hit counts from earlier sweeps do not accumulate.

## Fixed source evidence

- [scripts/settings/buff/archetype_buff_templates/ogryn_buff_templates.lua — L1774-L1818](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/ogryn_buff_templates.lua#L1774-L1818)
- [scripts/settings/talent/talent_settings_ogryn.lua — L374-L379](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/talent/talent_settings_ogryn.lua#L374-L379)
- [scripts/extension_systems/weapon/actions/action_sweep.lua — L944-L961](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/weapon/actions/action_sweep.lua#L944-L961)
- [scripts/utilities/attack/damage_calculation.lua — L232-L264](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/attack/damage_calculation.lua#L232-L264)
- [scripts/settings/ability/archetype_talents/talents/ogryn_talents.lua — L1263-L1279](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/ogryn_talents.lua#L1263-L1279)
- [scripts/ui/views/talent_builder_view/layouts/ogryn_tree.lua — L139-L163](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/ui/views/talent_builder_view/layouts/ogryn_tree.lua#L139-L163)

## Example assumptions and limits

- **How it works**: When a melee attack ends, each enemy hit by that attack adds 3% damage to the next melee attack. At most 10 enemies count, for a maximum of +30%.

- **Damage example**: Hitting 4 enemies makes the next attack's base 100 become `100 × (1 + 4 × 3%) = 112`. Hitting 10 or more gives 130. With an existing +20% bonus at the same stage, the four-enemy bonus gives 132.

- **Updates**: Each sweep replaces the previous bonus with its own hit count; counts do not accumulate. A miss resets it to zero. After hitting 4 enemies, hitting only 1 on the next sweep leaves +3% for the following attack.

Damage examples hold the other attack conditions constant and combine only the stated same-stage bonuses. Mechanisms reuse the fixed-version evidence, with local Build 25606770 English text corresponding to 1.13.1. Actual presentation and behavior remain unobserved in game. Missing details are supplementary explanations.

<a id="original-english-template-and-reconstruction"></a>

## Original English template and reconstruction

Steam Build `25606770`; `content/localization/ui`, resource hash `63564edcb7c3c5ee`; language `en` (code `0`).

- Name key `loc_talent_ogryn_damage_per_enemy_hit_previous`, hash `8984d87d`, entry 8918: **Furious**.
- Description key `loc_talent_ogryn_damage_per_enemy_hit_previous_new_desc`, hash `cc7b987b`, entry 13214.

Full raw template:

~~~text
For each Enemy you hit during the same Melee Attack, gain {damage:%s} Damage on your next Melee Attack.
~~~

| Placeholder | Value | Formatting |
|---|---|---|
| damage | offensive_2_3.melee_damage = 0.03 | Percentage with explicit + prefix → +3% |

Only the missing display mapping in the cited talent definition, lines 1263–1279, was read. Existing mechanisms and formatting were reused.

Static reconstruction; not an observed game screen:

~~~text
For each Enemy you hit during the same Melee Attack, gain +3% Damage on your next Melee Attack.
~~~

## English comparison

The independently read English ties the next melee attack's bonus to enemies hit during one preceding attack. It matches the accepted sweep hit count and 3% per enemy. The ten-enemy cap, calculations, replacement on every sweep, miss reset and absence of an expiry timer supplement the text. No explicit English contradiction is established.

## Icon source

[Original image](https://gameslantern.com/storage/sites/darktide/exporter/talents/ogryn/default/ogryn_more_hits_more_damage.webp) | [Media-Assets Issue](https://github.com/SyuanTsai/Media-Assets/issues/10#issuecomment-5931383354) | [Existing attachment](https://github.com/user-attachments/assets/aeba8245-43aa-438c-9357-a7ac4556a98d). The icon identifies the talent; it is not mechanism evidence.
