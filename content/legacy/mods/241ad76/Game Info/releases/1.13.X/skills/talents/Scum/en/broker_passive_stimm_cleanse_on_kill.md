# Blessed Stimms: source evidence

[繁體中文](../broker_passive_stimm_cleanse_on_kill.md) | [Player description](README.md#broker_passive_stimm_cleanse_on_kill) | [Technical index](SOURCE_INDEX.md) | [English comparison](LOCALIZATION_COMPARISON.md#broker_passive_stimm_cleanse_on_kill)

Release 1.13.1; fixed SHA `7e662fcda16219d775b84af50322be2e9cd9d62e`. Talent `broker_passive_stimm_cleanse_on_kill`; name key `loc_talent_broker_passive_stimm_cleanse_on_kill`; description key `loc_talent_broker_passive_stimm_cleanse_on_kill_desc`. Node `node_75d309a1-bc24-4856-bf61-814272a077e2`; category Talent; one point. Mechanisms and examples reuse verified source evidence; no in-game test was performed.

## Source-confirmed behavior and static derivation

- `on_syringe_used` adds the child Buff. Its start/refresh resets `corruption_cleansed`. Each `on_kill` first checks whether the accumulated amount is below `0.5 × max_health`, then calls `reduce_permanent_damage(0.01 × max_health)`. Accumulation uses the actual amount cleared.
- The child ends when the syringe keyword is lost. Health's `reduce_permanent_damage` preserves the Wound floor through `fixed_permanent_damage`; this does not directly heal ordinary Health damage.

## Fixed source evidence

- [scripts/settings/buff/archetype_buff_templates/broker_buff_templates.lua — L2018-L2056](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/broker_buff_templates.lua#L2018-L2056)
- [scripts/extension_systems/health/player_unit_health_extension.lua — L270-L286](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/health/player_unit_health_extension.lua#L270-L286)
- [scripts/settings/buff/archetype_buff_templates/broker_buff_templates.lua — L2008-L2017](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/broker_buff_templates.lua#L2008-L2017)
- [scripts/settings/ability/archetype_talents/talents/broker_talents.lua — L1629-L1659](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/broker_talents.lua#L1629-L1659)
- [scripts/ui/views/talent_builder_view/layouts/broker_tree.lua — L1733-L1761](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/ui/views/talent_builder_view/layouts/broker_tree.lua#L1733-L1761)

## Example assumptions and limits

- **Recovery**: After using a Stimm, each Kill while its effects remain clears Corruption equal to 1% of maximum Health. Corruption that has consumed an entire Health segment cannot be cleared.

- **Recovery example**: At maximum Health 200, each Kill clears at most 2. Clearing stops once the accumulated amount reaches 100. Using another Stimm resets the accumulated amount for that use.

- **Threshold exception**: Each Kill checks the 50% threshold before applying a full clear. If 99 has been cleared and this Kill clears 2, the total reaches 101 before stopping. The last clear can therefore slightly exceed the stated threshold.

The final clear exceeding the 50% threshold is a static derivation and has not been tested in game. Mechanisms reuse the fixed-version evidence, with local Build 25606770 English text corresponding to 1.13.1. Actual presentation and behavior remain unobserved in game. Missing details are supplementary explanations.

<a id="original-english-template-and-reconstruction"></a>

## Original English template and reconstruction

Steam Build `25606770`; `content/localization/ui`, resource hash `63564edcb7c3c5ee`; language `en` (code `0`).

- Name key `loc_talent_broker_passive_stimm_cleanse_on_kill`, hash `df6da11d`, entry 14492: **Blessed Stimms**.
- Description key `loc_talent_broker_passive_stimm_cleanse_on_kill_desc`, hash `565482d8`, entry 5611.

Full raw template:

~~~text
While Stimmed, Kills clear {cleanse_amount:%s} Corruption (up to {cleanse_threshold:%s} per Stimm).
~~~

| Placeholder | Value | Formatting |
|---|---|---|
| `cleanse_amount` | `cleanse_amount = 0.01` | Percentage: `1%` |
| `cleanse_threshold` | `cleanse_threshold = 0.5` | Percentage: `50%` |

The accepted child-Buff values supply the substitutions. The display mapping at `broker_talents.lua` L1629-L1659 reads those fields. Reuse the accepted percentage formatting.

Static reconstruction; not an observed game screen:

~~~text
While Stimmed, Kills clear 1% Corruption (up to 50% per Stimm).
~~~

## English comparison

The English's Stimmed condition and 1% clear per Kill agree. Its "up to 50% per Stimm" states a hard upper bound, but the accepted pre-clear check allows the final clear to cross that threshold, as in 99 → 101 at maximum Health 200. This is an explicit boundary contradiction shared by the original Chinese and English wording; it is not a Chinese translation error. The Wound floor, actual-cleared accumulation and reset behavior supplement the description.

## Icon source

[Original image](https://gameslantern.com/storage/sites/darktide/exporter/talents/broker/default/broker_passive_stimm_cleanse_on_kill.webp) | [Media-Assets Issue](https://github.com/SyuanTsai/Media-Assets/issues/12#issuecomment-5933987866) | [Existing attachment](https://github.com/user-attachments/assets/6f1ead13-0e28-4983-86e7-44478bd76cdc). The icon identifies the talent; it is not mechanism evidence.
