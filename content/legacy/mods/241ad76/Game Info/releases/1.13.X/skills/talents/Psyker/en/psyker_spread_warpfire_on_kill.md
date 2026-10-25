# Wildfire: source evidence

[繁體中文](../psyker_spread_warpfire_on_kill.md) | [Player description](README.md#psyker_spread_warpfire_on_kill) | [Technical index](SOURCE_INDEX.md) | [English comparison](LOCALIZATION_COMPARISON.md#psyker_spread_warpfire_on_kill)

Release 1.13.1; fixed SHA `7e662fcda16219d775b84af50322be2e9cd9d62e`. Talent `psyker_spread_warpfire_on_kill`; name key `loc_talent_psyker_warpfire_spread`; description key `loc_talent_psyker_warpfire_spread_desc`. Node `node_ebeb44ed-54d4-44f6-a211-f7060668f98a`; category Talent; one point. Mechanisms and examples reuse verified source evidence; no in-game test was performed.

## Source-confirmed behavior and static derivation

- `warp_fire.on_remove_stack_func` records `stacks_on_death = min(stacks before death, 4)`; `stop_func` checks the owner's special rule.
- The actual radius is hard-coded to 5; it does not use the residual `PSET` distance of 15.
- The `while` loop decrements one shared `stacks_to_share` pool, one stack at a time. A target whose existing stacks are `>= stacks_on_death` is skipped.

## Fixed source evidence

- [scripts/settings/buff/weapon_buff_templates.lua — L129-L230](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/weapon_buff_templates.lua#L129-L230)
- [scripts/settings/talent/talent_settings_psyker.lua — L244-L248](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/talent/talent_settings_psyker.lua#L244-L248)
- [scripts/settings/ability/archetype_talents/talents/psyker_talents.lua — L1692-L1707](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/psyker_talents.lua#L1692-L1707)
- [scripts/ui/views/talent_builder_view/layouts/psyker_tree.lua — L690-L717](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/ui/views/talent_builder_view/layouts/psyker_tree.lua#L690-L717)

## Example assumptions and limits

- **Trigger**: when an enemy affected by your Soulblaze dies, distribute up to 4 stacks among enemies within 5 metres; the final hit does not have to come from Soulblaze.

- **Distribution**: the total available cannot exceed the victim's stack count at death. This spread also cannot raise any recipient above that stack ceiling.

- **Stack example**: if the victim had 6 stacks and two nearby eligible enemies each had 0, the shared total is min(6, 4) = 4. Giving them 1 stack in turn leaves each with 2 stacks. With only one eligible target, that target can receive 4 stacks.

#### Existing Traditional Chinese text correction

- The Traditional Chinese wording narrows the trigger to being burned to death by your Soulblaze. The English and verified execution condition require the enemy to be affected by your Soulblaze when it dies; another attack can deliver the killing blow.

The existing Chinese evidence notes that both localizations use per-enemy wording while the fixed source distributes a shared pool of up to 4 stacks; the difference still awaits in-game confirmation and is not a Traditional Chinese mistranslation. The English assessment below reads the upper-limit wording independently. Mechanisms reuse the fixed-version evidence, with local Build 25606770 English text corresponding to 1.13.1. Actual presentation and behavior remain unobserved in game. Missing details are supplementary explanations.

<a id="original-english-template-and-reconstruction"></a>

## Original English template and reconstruction

Steam Build `25606770`; `content/localization/ui`, resource hash `63564edcb7c3c5ee`; language `en` (code `0`).

- Name key `loc_talent_psyker_warpfire_spread`, hash `19f630c7`, entry 1690: **Wildfire**.
- Description key `loc_talent_psyker_warpfire_spread_desc`, hash `7f4f685e`, entry 8271.

Full raw template:

~~~text
When an Enemy dies while affected by your Soulblaze, nearby Enemies each gain up to {stacks:%s} Stacks of Soulblaze. They cannot gain more stacks than the dying Enemy had.
~~~

| Placeholder | Value | Formatting |
|---|---|---|
| `stacks` | `4` | number → `4` |

[Display mapping](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/psyker_talents.lua#L1697-L1702) selects the verified `talent_settings_2.offensive_2_2.stacks_to_share` value of 4. Shared number formatting is reused.

Static reconstruction; not an observed game screen:

~~~text
When an Enemy dies while affected by your Soulblaze, nearby Enemies each gain up to 4 Stacks of Soulblaze. They cannot gain more stacks than the dying Enemy had.
~~~

## English comparison

The English clearly requires an enemy to die while affected by your Soulblaze, rather than requiring a Soulblaze killing blow. Its “each gain up to 4” wording states a per-enemy ceiling without expressly guaranteeing an independent four-stack allocation to every target; the shared pool can still yield amounts below that ceiling. The shared distribution budget, existing-stack check and exact radius are therefore supplements, not a clear English contradiction. The existing source note about the apparent distribution difference and lack of in-game confirmation is retained.

## Icon source

[Original image](https://gameslantern.com/storage/sites/darktide/exporter/talents/psyker/default/psyker_spread_warpfire_on_kill.webp) | [Media-Assets Issue](https://github.com/SyuanTsai/Media-Assets/issues/7#issuecomment-5928034845) | [Existing attachment](https://github.com/user-attachments/assets/1e6189fe-4a6e-4fda-bbe9-e2a38c75ff2a). The icon identifies the talent; it is not mechanism evidence.
