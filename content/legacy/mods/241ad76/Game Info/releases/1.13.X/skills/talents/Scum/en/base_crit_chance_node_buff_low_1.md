# Critical Chance Boost: source evidence

[繁體中文](../base_crit_chance_node_buff_low_1.md) | [Player description](README.md#base_crit_chance_node_buff_low_1) | [Technical index](SOURCE_INDEX.md) | [English comparison](LOCALIZATION_COMPARISON.md#base_crit_chance_node_buff_low_1)

Release 1.13.1; fixed SHA `7e662fcda16219d775b84af50322be2e9cd9d62e`. Talent `base_crit_chance_node_buff_low_1`; name key `loc_talent_crit_chance_low`; description key `loc_talent_crit_chance_low_desc`. Node `node_089c4280-425c-40cd-8ec6-0aa812fe11ff`; category Talent; one point. Mechanisms and examples reuse verified source evidence; no in-game test was performed.

## Source-confirmed behavior and static derivation

- The single-tier node applies tier 1 of `player_crit_chance_node_buff_low_1`, with a value of 0.05. `CriticalStrike.chance` adds the bonus, then clamps the result to 0–1.

## Fixed source evidence

- [scripts/settings/buff/player_buff_templates.lua — L637-L665](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/player_buff_templates.lua#L637-L665)
- [scripts/utilities/attack/critical_strike.lua — L13-L39](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/attack/critical_strike.lua#L13-L39)
- [scripts/extension_systems/buff/buffs/buff.lua — L226-L254](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/buff/buffs/buff.lua#L226-L254)
- [scripts/settings/ability/archetype_talents/talents/base_talents.lua — L2622-L2645](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/base_talents.lua#L2622-L2645)
- [scripts/ui/views/talent_builder_view/layouts/broker_tree.lua — L907-L935](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/ui/views/talent_builder_view/layouts/broker_tree.lua#L907-L935)

## Example assumptions and limits

- **Chance example**: An initial 10% Critical Hit Chance becomes 10% + 5% = 15%; an initial 25% becomes 30%.

Mechanisms reuse the fixed-version evidence, with local Build 25606770 English text corresponding to 1.13.1. Actual presentation and behavior remain unobserved in game. Missing details are supplementary explanations.

<a id="original-english-template-and-reconstruction"></a>

## Original English template and reconstruction

Steam Build `25606770`; `content/localization/ui`, resource hash `63564edcb7c3c5ee`; language `en` (code `0`).

- Name key `loc_talent_crit_chance_low`, hash `3ec7f5ef`, entry 4089: **Critical Chance Boost**.
- Description key `loc_talent_crit_chance_low_desc`, hash `3019333a`, entry 3125.

Full raw template:

~~~text
{crit_chance:%s} Critical Hit Chance.
~~~

| Placeholder | Value | Formatting |
|---|---|---|
| `{crit_chance:%s}` | Tier 1: 0.05 | Tier-aware Buff lookup; `percentage`, `+` prefix → `+5%` |

The existing display map at `base_talents.lua` L2622-L2645 resolves `player_crit_chance_node_buff_low_1.stat_buffs.critical_strike_chance` with `tier = true`. This single-tier node uses the verified tier-1 value; the reused percentage formatter multiplies 0.05 by 100.

Static reconstruction; not an observed game screen:

~~~text
+5% Critical Hit Chance.
~~~

## English comparison

The English names an increase in Critical Hit Chance and the reconstructed +5% matches the verified 0.05 addition. This is a five-percentage-point increase. The additive calculation and 0–1 clamp supplement the short description.

## Icon source

[Original image](https://gameslantern.com/storage/sites/darktide/exporter/talents/broker/stat/base_crit_chance_node_buff_low_1.webp) | [Media-Assets Issue](https://github.com/SyuanTsai/Media-Assets/issues/12#issuecomment-5933987866) | [Existing attachment](https://github.com/user-attachments/assets/f936a91e-7097-49cc-b8f5-88dff18117eb). The icon identifies the talent; it is not mechanism evidence.
