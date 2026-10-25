# Ammunition-Restoration Pod: source evidence

[繁體中文](../cryptic_passive_ammo_replenishment.md) | [Player description](README.md#cryptic_passive_ammo_replenishment) | [Technical index](SOURCE_INDEX.md) | [English comparison](LOCALIZATION_COMPARISON.md#cryptic_passive_ammo_replenishment)

Release 1.13.1; fixed SHA `7e662fcda16219d775b84af50322be2e9cd9d62e`. Talent `cryptic_passive_ammo_replenishment`; name key `loc_talent_cryptic_passive_ammo_replenishment`; description key `loc_talent_cryptic_passive_ammo_replenishment_desc`. Node `node_ea18c305-acab-479a-8fd9-3c700199f611`; category Talent; one point. Mechanisms and examples reuse verified source evidence; no in-game test was performed.

## Source-confirmed behavior and static derivation

- At a 15-second interval, `Ammo.add_to_all_slots(0.01)` iterates weapon slots and replenishes only those with `max_reserve > 0`.
- It applies `floor(amount)` and retains fractional amounts in `give_ammo_carryover_percentages`.
- `new_amount = min(reserve + gain, max_reserve + missing_clip)`; the cap is not simply the reserve maximum.

## Fixed source evidence

- [scripts/utilities/ammo.lua — L494-L528](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/ammo.lua#L494-L528)
- [scripts/settings/talent/talent_settings_cryptic.lua — L520-L523](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/talent/talent_settings_cryptic.lua#L520-L523)
- [scripts/settings/buff/archetype_buff_templates/cryptic_buff_templates.lua — L2932-L2946](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/cryptic_buff_templates.lua#L2932-L2946)
- [scripts/settings/ability/archetype_talents/talents/cryptic_talents.lua — L2181-L2199](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/cryptic_talents.lua#L2181-L2199)
- [scripts/ui/views/talent_builder_view/layouts/cryptic_tree.lua — L1987-L2012](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/ui/views/talent_builder_view/layouts/cryptic_tree.lua#L1987-L2012)

## Example assumptions and limits

- **Ammo recovery**: Every 15 seconds, replenish 1% of maximum reserve ammo into your reserves, rather than directly into the clip.
- **Rounding example**: With a reserve cap of 250 rounds, each interval accrues `250 × 1% = 2.5` rounds. First gain 2 and retain 0.5; the next interval then grants 3. Four consecutive intervals grant 10 rounds in total.
- **Cap and exceptions**: Reserves can also include the ammo needed to fill the missing part of the clip. A fully supplied weapon cannot accumulate ammo indefinitely. Weapons without an ammo reserve do not gain ammo from this effect.

The rounding example assumes enough capacity for all restored rounds and no pre-existing fractional carryover. Full-weapon capacity still limits actual recovery; the effect replenishes reserves rather than filling the clip directly.

Mechanisms reuse the fixed-version evidence, with local Build 25606770 English text corresponding to 1.13.1. Actual presentation and behavior remain unobserved in game. Missing details are supplementary explanations.

<a id="original-english-template-and-reconstruction"></a>

## Original English template and reconstruction

Steam Build `25606770`; `content/localization/ui`, resource hash `63564edcb7c3c5ee`; language `en` (code `0`).

- Name key `loc_talent_cryptic_passive_ammo_replenishment`, hash `dc9bf3b0`, entry 14304: **Ammunition-Restoration Pod**.
- Description key `loc_talent_cryptic_passive_ammo_replenishment_desc`, hash `41aa3ba1`, entry 4257.

Full raw template:

~~~text
Every {interval:%s}s, replenish {percent:%s} of your Max Ammo Reserve.
~~~

| Placeholder | Value | Formatting |
|---|---|---|
| `interval` | `15` | Number; the template supplies `s`. |
| `percent` | `0.01` → `1%` | Percentage; no added prefix. |

Display mappings are `cryptic_talents.lua` L2189-L2198. Values reuse the verified settings above.

Static reconstruction; not an observed game screen:

~~~text
Every 15s, replenish 1% of your Max Ammo Reserve.
~~~

## English comparison

The English correctly names the 15-second interval and 1% of maximum Ammo Reserve. It does not state that ammo is loaded directly into the clip. Fractional carryover, the reserve-plus-missing-clip cap and eligibility of ammo-using slots are supplements. No explicit English contradiction was found.

## Icon source

[Original image](https://gameslantern.com/storage/sites/darktide/exporter/talents/cryptic/default/cryptic_passive_ammo_replenishment.webp) | [Media-Assets Issue](https://github.com/SyuanTsai/Media-Assets/issues/13#issuecomment-5935653628) | [Existing attachment](https://github.com/user-attachments/assets/5330c87c-7abe-4993-8eb2-5cb11586c013). The icon identifies the talent; it is not mechanism evidence.
