# Toxic Renewal: source evidence

[繁體中文](../broker_passive_replenish_toughness_while_toxined_enemies_in_proximity.md) | [Player description](README.md#broker_passive_replenish_toughness_while_toxined_enemies_in_proximity) | [Technical index](SOURCE_INDEX.md) | [English comparison](LOCALIZATION_COMPARISON.md#broker_passive_replenish_toughness_while_toxined_enemies_in_proximity)

Release 1.13.1; fixed SHA `7e662fcda16219d775b84af50322be2e9cd9d62e`. Talent `broker_passive_replenish_toughness_while_toxined_enemies_in_proximity`; name key `loc_talent_broker_toughness_on_toxined_kill`; description key `loc_talent_broker_passive_replenish_toughness_while_toxined_enemies_in_proximity_desc`. Node `node_b2bbbec7-1551-42ea-9d9b-9771eda40654`; category Talent; one point. Mechanisms and examples reuse verified source evidence; no in-game test was performed.

## Source-confirmed behavior and static derivation

- Toxin status on nearby enemies is queried every 0.2s. Every 1s, the server-side interval calls `Toughness.replenish_percentage(0.01 × min(n, 10))`.
- The knocked-down-state check uses `template_data.character_state_component`, but this `start_func` does not set that field. This fragment does not establish verified behavior while knocked down.

## Fixed source evidence

- [scripts/extension_systems/toughness/player_unit_toughness_extension.lua — L253-L285](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/toughness/player_unit_toughness_extension.lua#L253-L285)
- [scripts/settings/buff/archetype_buff_templates/broker_buff_templates.lua — L2741-L2829](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/broker_buff_templates.lua#L2741-L2829)
- [scripts/settings/ability/archetype_talents/talents/broker_talents.lua — L3117-L3171](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/broker_talents.lua#L3117-L3171)
- [scripts/ui/views/talent_builder_view/layouts/broker_tree.lua — L1364-L1394](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/ui/views/talent_builder_view/layouts/broker_tree.lua#L1364-L1394)

## Example assumptions and limits

- **Recovery**: For each enemy infected with Chem Toxin within 15m, restore 1% of maximum Toughness per second, counting at most 10 enemies. You do not need to have applied the Toxin yourself.

- **Recovery example**: At 100 maximum Toughness with four infected enemies nearby, restore 100 × 4 × 1% = 4 per second. At 10 or more enemies, the maximum is 10 per second. If only 3 Toughness is missing, only 3 is actually restored.

Actual recovery while knocked down has not been tested in game. Mechanisms reuse the fixed-version evidence, with local Build 25606770 English text corresponding to 1.13.1. Actual presentation and behavior remain unobserved in game. Missing details are supplementary explanations.

<a id="original-english-template-and-reconstruction"></a>

## Original English template and reconstruction

Steam Build `25606770`; `content/localization/ui`, resource hash `63564edcb7c3c5ee`; language `en` (code `0`).

- Name key `loc_talent_broker_toughness_on_toxined_kill`, hash `c7a7a696`, entry 12892: **Toxic Renewal**.
- Description key `loc_talent_broker_passive_replenish_toughness_while_toxined_enemies_in_proximity_desc`, hash `c1d98f78`, entry 12501.

Full raw template:

~~~text
Replenish {toughness_amount:%s} Toughness every {interval:%s}s for each {toxin:%s} infected Enemy within {range:%s}m, up to a maximum of {max_enemies} Enemies.
~~~

| Placeholder | Value | Formatting |
|---|---|---|
| `{toughness_amount:%s}` | `toughness_amount = 0.01` | Buff lookup; `percentage` → `1%` |
| `{interval:%s}` | 1 | Buff's `interval`; `number` → `1` |
| `{toxin:%s}` | `loc_term_glossary_broker_toxin` | `loc_string` → `Chem Toxin` |
| `{range:%s}` | 15 | Buff's `range`; `number` → `15` |
| `{max_enemies}` | 10 | Buff's `max_enemies`; `number` → `10`; raw token has no `:%s` |

The existing display map at `broker_talents.lua` L3117-L3171 reads the verified recovery amount, interval, range and enemy cap. The raw template's bare `{max_enemies}` token is preserved above; the reconstruction statically substitutes its mapped value of 10 and does not claim observed runtime rendering. Reused glossary: Chem Toxin hash `5ea7edc3`, entry 6134. The name's `[Writer]` suffix is metadata.

Static reconstruction; not an observed game screen:

~~~text
Replenish 1% Toughness every 1s for each Chem Toxin infected Enemy within 15m, up to a maximum of 10 Enemies.
~~~

## English comparison

The English gives recovery per infected enemy, interval 1s, range 15m and cap 10, matching the accepted evidence. The maximum-Toughness basis, missing-Toughness cap, owner-independent counting and query frequency supplement it. Recovery while knocked down remains unconfirmed; the wording states no specific knocked-down behavior.

## Icon source

[Original image](https://gameslantern.com/storage/sites/darktide/exporter/talents/broker/default/broker_passive_replenish_toughness_while_toxined_enemies_in_proximity.webp) | [Media-Assets Issue](https://github.com/SyuanTsai/Media-Assets/issues/12#issuecomment-5933987866) | [Existing attachment](https://github.com/user-attachments/assets/0d36baca-b919-457c-890e-535a0ce33236). The icon identifies the talent; it is not mechanism evidence.
