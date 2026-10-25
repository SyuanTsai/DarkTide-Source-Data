# Bio-Lodestone: source evidence

[繁體中文](../psyker_empowered_grenades_passive_improved.md) | [Player description](README.md#psyker_empowered_grenades_passive_improved) | [Technical index](SOURCE_INDEX.md) | [English comparison](LOCALIZATION_COMPARISON.md#psyker_empowered_grenades_passive_improved)

Release 1.13.1; fixed SHA `7e662fcda16219d775b84af50322be2e9cd9d62e`. Talent `psyker_empowered_grenades_passive_improved`; name key `loc_talent_psyker_increase_empower_chain_lighting_chance`; description key `loc_talent_psyker_increase_empower_chain_lighting_chance_description`. Node `node_0bb80aeb-f367-4e65-bcb5-04e91aad3c23`; category Keystone; one point. Mechanisms and examples reuse verified source evidence; no in-game test was performed.

## Source-confirmed behavior and static derivation

- This modifier copies Empowered Psionics' `proc_buff` and replaces `proc_events.on_hit` from 0.10 with `talent_settings_3.spec_passive_2.empowered_chain_lightning_chance = 0.15`.
- The shared `on_hit` handler also runs `CheckProcFunctions.on_kill(params)`. It does not guarantee a trigger on every hit; only a successful kill calls the charge-add function.
- With Overpowering Souls also selected, Elite kills use the guaranteed-charge `on_kill` event. The ordinary `on_hit` path excludes that Elite kill, preventing an additional 15% proc for the same kill.

## Fixed source evidence

- [scripts/settings/ability/archetype_talents/talents/psyker_talents.lua — L1752-L1789](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/psyker_talents.lua#L1752-L1789)
- [scripts/settings/talent/talent_settings_psyker.lua — L310-L319](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/talent/talent_settings_psyker.lua#L310-L319)
- [scripts/settings/buff/archetype_buff_templates/psyker_buff_templates.lua — L2271-L2288](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/psyker_buff_templates.lua#L2271-L2288)
- [scripts/settings/buff/archetype_buff_templates/psyker_buff_templates.lua — L2356-L2387](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/psyker_buff_templates.lua#L2356-L2387)
- [scripts/settings/ability/archetype_talents/talents/psyker_talents.lua — L1752-L1789](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/psyker_talents.lua#L1752-L1789)
- [scripts/ui/views/talent_builder_view/layouts/psyker_tree.lua — L1374-L1399](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/ui/views/talent_builder_view/layouts/psyker_tree.lua#L1374-L1399)

## Example assumptions and limits

- **How it works:** The chance to gain empowerment on killing an enemy rises from 10% to 15%; the storage cap does not change.

- **Chance example:** With storage available each time, the expected number of empowerments from 100 kills rises from `100 × 10% = 10` to `100 × 15% = 15`. Random outcomes are not guaranteed to equal the expectation.

At the charge cap, a successful proc cannot increase stored stacks beyond that cap. The expected-value example assumes storage is available on each kill and chances are independent; random in-game outcomes need not equal the average. Mechanisms reuse the fixed-version evidence, with local Build 25606770 English text corresponding to 1.13.1. Actual presentation and behavior remain unobserved in game. Missing details are supplementary explanations.

<a id="original-english-template-and-reconstruction"></a>

## Original English template and reconstruction

Steam Build `25606770`; `content/localization/ui`, resource hash `63564edcb7c3c5ee`; language `en` (code `0`).

- Name key `loc_talent_psyker_increase_empower_chain_lighting_chance`, hash `05299d2a`, entry 318: **Bio-Lodestone**.
- Description key `loc_talent_psyker_increase_empower_chain_lighting_chance_description`, hash `542f4465`, entry 5469.

Full raw template:

~~~text
Increases the chance to gain {talent_name:%s} on Kill from {proc_chance_before:%s} to {proc_chance_after:%s}.
~~~

| Placeholder | Value | Formatting |
|---|---|---|
| `talent_name` | `loc_talent_psyker_empowered_ability` | Localized string: Empowered Psionics; hash `9bac9dab`, entry 10047. |
| `proc_chance_before` | 0.10 | Percentage: 10%. |
| `proc_chance_after` | 0.15 | Percentage: 15%. |

The existing mapping in `scripts/settings/ability/archetype_talents/talents/psyker_talents.lua` L1757-L1784 localizes `talent_name` and reads `proc_events.on_hit` from `psyker_empowered_grenades_passive` and `psyker_empowered_grenades_passive_improved`. Accepted probabilities, the same-build English name and shared formatting are reused.

Static reconstruction; not an observed game screen:

~~~text
Increases the chance to gain Empowered Psionics on Kill from 10% to 15%.
~~~

## English comparison

The English explicitly describes a kill-based chance increase from 10% to 15%, matching the accepted proc values and kill check. It does not state a larger storage cap or a guaranteed trigger. Storage limits, the expected-value assumptions and interaction with guaranteed Elite charges from Overpowering Souls supplement the description; no explicit English contradiction is identified.

## Icon source

[Original image](https://gameslantern.com/storage/sites/darktide/exporter/talents/psyker/keystone_modifier/psyker_empowered_grenades_passive_improved.webp) | [Media-Assets Issue](https://github.com/SyuanTsai/Media-Assets/issues/7#issuecomment-5928024966) | [Existing attachment](https://github.com/user-attachments/assets/827d3ef0-dce8-4cb8-8af1-c5ad142d4ec1). The icon identifies the talent; it is not mechanism evidence.
