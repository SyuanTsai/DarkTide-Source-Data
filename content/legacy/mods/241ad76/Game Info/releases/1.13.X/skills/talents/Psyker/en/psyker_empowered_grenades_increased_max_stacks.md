# Charged Up: source evidence

[繁體中文](../psyker_empowered_grenades_increased_max_stacks.md) | [Player description](README.md#psyker_empowered_grenades_increased_max_stacks) | [Technical index](SOURCE_INDEX.md) | [English comparison](LOCALIZATION_COMPARISON.md#psyker_empowered_grenades_increased_max_stacks)

Release 1.13.1; fixed SHA `7e662fcda16219d775b84af50322be2e9cd9d62e`. Talent `psyker_empowered_grenades_increased_max_stacks`; name key `loc_talent_psyker_increased_empowered_chain_lightning_stacks`; description key `loc_talent_psyker_increased_empowered_chain_lightning_stacks_description`. Node `node_56a1da66-78b5-4f11-8b20-967dc92650da`; category Keystone; one point. Mechanisms and examples reuse verified source evidence; no in-game test was performed.

## Source-confirmed behavior and static derivation

- Actual `charges` are clamped from zero to `max_stack_talent = 3`. The visual buff's cap is `3 + 1`, but `visual_stack_count` returns `min(stack_count, 3)` and `max_stat_stacks = 1`. The extra stack serves event/visual handling and is not a fourth usable charge.

## Fixed source evidence

- [scripts/settings/talent/talent_settings_psyker.lua — L339-L341](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/talent/talent_settings_psyker.lua#L339-L341)
- [scripts/settings/buff/archetype_buff_templates/psyker_buff_templates.lua — L2245-L2269](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/psyker_buff_templates.lua#L2245-L2269)
- [scripts/settings/buff/archetype_buff_templates/psyker_buff_templates.lua — L2388-L2431](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/psyker_buff_templates.lua#L2388-L2431)
- [scripts/settings/buff/archetype_buff_templates/psyker_buff_templates.lua — L2487-L2489](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/psyker_buff_templates.lua#L2487-L2489)
- [scripts/settings/ability/archetype_talents/talents/psyker_talents.lua — L1331-L1350](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/psyker_talents.lua#L1331-L1350)
- [scripts/ui/views/talent_builder_view/layouts/psyker_tree.lua — L1524-L1547](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/ui/views/talent_builder_view/layouts/psyker_tree.lua#L1524-L1547)

## Example assumptions and limits

- **How it works:** Empowered Psionics' storage cap rises from one to three stacks. Each empowered Blitz still spends one; storing more stacks does not increase a single empowerment's multiplier.

- **Stack example:** At two stacks, gaining one gives `2 + 1 = 3`. At three, another gain leaves the count at three.

The example assumes no other modifiers and has not been verified in game. Mechanisms reuse the fixed-version evidence, with local Build 25606770 English text corresponding to 1.13.1. Actual presentation and behavior remain unobserved in game. Missing details are supplementary explanations.

<a id="original-english-template-and-reconstruction"></a>

## Original English template and reconstruction

Steam Build `25606770`; `content/localization/ui`, resource hash `63564edcb7c3c5ee`; language `en` (code `0`).

- Name key `loc_talent_psyker_increased_empowered_chain_lightning_stacks`, hash `ae374526`, entry 11211: **Charged Up**.
- Description key `loc_talent_psyker_increased_empowered_chain_lightning_stacks_description`, hash `61957b58`, entry 6329.

Full raw template:

~~~text
You can now hold up to {max_stacks:%s}
Stacks of {talent_name:%s}.
~~~

| Placeholder | Value | Formatting |
|---|---|---|
| `talent_name` | `loc_talent_psyker_empowered_ability` | Localized string: Empowered Psionics; hash `9bac9dab`, entry 10047. |
| `max_stacks` | 3 | Number. |

The existing mapping in `scripts/settings/ability/archetype_talents/talents/psyker_talents.lua` L1336-L1345 localizes `talent_name` and supplies `max_stacks` from `talent_settings_3.offensive_2.max_stacks_talent`. Accepted values, the same-build name and common formatting are reused; the raw line break is retained.

Static reconstruction; not an observed game screen:

~~~text
You can now hold up to 3
Stacks of Empowered Psionics.
~~~

## English comparison

The English explicitly says up to three stacks of Empowered Psionics, agreeing with the accepted usable-charge cap. It does not promise stronger individual empowerments or a fourth charge. Per-use consumption, capped gains and the distinction between usable charges and visual/event stacks supplement the description; no explicit English contradiction is identified.

## Icon source

[Original image](https://gameslantern.com/storage/sites/darktide/exporter/talents/psyker/keystone_modifier/psyker_empowered_grenades_increased_max_stacks.webp) | [Media-Assets Issue](https://github.com/SyuanTsai/Media-Assets/issues/7#issuecomment-5928024966) | [Existing attachment](https://github.com/user-attachments/assets/1918d789-dd64-401d-b985-c99915053691). The icon identifies the talent; it is not mechanism evidence.
