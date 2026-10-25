# No Pushover: source evidence

[繁體中文](../ogryn_blocking_reduces_push_cost.md) | [Player description](README.md#ogryn_blocking_reduces_push_cost) | [Technical index](SOURCE_INDEX.md) | [English comparison](LOCALIZATION_COMPARISON.md#ogryn_blocking_reduces_push_cost)

Release 1.13.1; fixed SHA `7e662fcda16219d775b84af50322be2e9cd9d62e`. Talent `ogryn_blocking_reduces_push_cost`; name key `loc_talent_ogryn_blocking_reduces_push_cost`; description key `loc_talent_ogryn_empowered_pushes_desc`. Node `node_0de9050d-5ec9-4a98-af4b-d05ce723892d`; category Talent; one point. Mechanisms and examples reuse verified source evidence; no in-game test was performed.

## Source-confirmed behavior and static derivation

- The talent actually uses `ogryn_empowered_push`, with conditional `push_impact_modifier=2.5` and `active = !cooldown`. `on_push_finish` starts the 8s cooldown without a hit requirement.

## Fixed source evidence

- [scripts/settings/buff/archetype_buff_templates/ogryn_buff_templates.lua — L839-L861](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/ogryn_buff_templates.lua#L839-L861)
- [scripts/extension_systems/buff/buffs/proc_buff.lua — L173-L208](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/buff/buffs/proc_buff.lua#L173-L208)
- [scripts/utilities/attack/stagger_calculation.lua — L190-L214](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/attack/stagger_calculation.lua#L190-L214)
- [scripts/settings/ability/archetype_talents/talents/ogryn_talents.lua — L1875-L1908](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/ogryn_talents.lua#L1875-L1908)
- [scripts/ui/views/talent_builder_view/layouts/ogryn_tree.lua — L1391-L1417](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/ui/views/talent_builder_view/layouts/ogryn_tree.lua#L1391-L1417)

## Example assumptions and limits

- **Trigger**: While the effect is ready, your push gains +250% Impact. Completing that push starts an 8s cooldown; ordinary pushes during cooldown do not restart the countdown.

- **Impact example**: Base push Impact of 100 becomes `100 × (1 + 250%) = 350`. This is stagger strength, not 350 damage.

- **Consumption**: Cooldown starts when the push finishes. Even a push that hits no enemy consumes the empowered push.

Mechanisms reuse the fixed-version evidence, with local Build 25606770 English text corresponding to 1.13.1. Actual presentation and behavior remain unobserved in game. Missing details are supplementary explanations.

<a id="original-english-template-and-reconstruction"></a>

## Original English template and reconstruction

Steam Build `25606770`; `content/localization/ui`, resource hash `63564edcb7c3c5ee`; language `en` (code `0`).

- Name key `loc_talent_ogryn_blocking_reduces_push_cost`, hash `4594653e`, entry 4512: **No Pushover**.
- Description key `loc_talent_ogryn_empowered_pushes_desc`, hash `3278e768`, entry 3290.

Full raw template:

~~~text
Your Pushes have {push_impact_modifier:%s} Stagger. Can only trigger once every {cooldown:%s}s.
~~~

| Placeholder | Value | Formatting |
|---|---|---|
| push_impact_modifier | conditional_stat_buffs.push_impact_modifier = 2.5 | Percentage with explicit + prefix → +250% |
| cooldown | cooldown_duration = 8 | Number → 8 |

Only the missing display mapping in the cited talent definition, lines 1875–1908, was read. Accepted values, mechanisms and common formatting were reused.

Static reconstruction; not an observed game screen:

~~~text
Your Pushes have +250% Stagger. Can only trigger once every 8s.
~~~

## English comparison

The independently read English grants +250% Stagger to pushes and limits the trigger to once every 8s. This matches the accepted push Impact modifier and cooldown. It describes stagger strength, not damage. Consumption at push completion without a hit and non-refreshing ordinary pushes during cooldown supplement the text. No explicit English contradiction is established.

## Icon source

[Original image](https://gameslantern.com/storage/sites/darktide/exporter/talents/ogryn/default/ogryn_blocking_reduces_push_cost.webp) | [Media-Assets Issue](https://github.com/SyuanTsai/Media-Assets/issues/10#issuecomment-5931394406) | [Existing attachment](https://github.com/user-attachments/assets/b35eb9be-169c-48cf-a295-329eae3a3610). The icon identifies the talent; it is not mechanism evidence.
