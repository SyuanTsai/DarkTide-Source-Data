# Found Some More: source evidence

[繁體中文](../ogryn_free_reload_after_ability.md) | [Player description](README.md#ogryn_free_reload_after_ability) | [Technical index](SOURCE_INDEX.md) | [English comparison](LOCALIZATION_COMPARISON.md#ogryn_free_reload_after_ability)

Release 1.13.1; fixed SHA `7e662fcda16219d775b84af50322be2e9cd9d62e`. Talent `ogryn_free_reload_after_ability`; name key `loc_talent_ogryn_free_reload_after_ability`; description key `loc_talent_cryptic_passive_ammo_replenishment_desc`. Node `node_87ca6136-03a7-45da-96b2-7ebd9e04f36a`; category Talent; one point. Mechanisms and examples reuse verified source evidence; no in-game test was performed.

## Source-confirmed behavior and static derivation

- The current passive is `ogryn_passive_ammo_replenishment`, rather than the free reload after an ability claimed by the internal `name` comment. Interval 15s, percentage 0.01; the server calls `Ammo.add_to_all_slots`.
- For each weapon slot, `amount = 0.01 × max_reserve + carryover`. It floors the amount to an integer and preserves the fractional remainder. Reserve capacity is `max_reserve + missing_clip`.

## Fixed source evidence

- [scripts/settings/buff/archetype_buff_templates/ogryn_buff_templates.lua — L3838-L3854](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/ogryn_buff_templates.lua#L3838-L3854)
- [scripts/settings/talent/talent_settings_ogryn.lua — L56-L59](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/talent/talent_settings_ogryn.lua#L56-L59)
- [scripts/utilities/ammo.lua — L494-L528](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/ammo.lua#L494-L528)
- [scripts/extension_systems/buff/buffs/interval_buff.lua — L19-L48](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/buff/buffs/interval_buff.lua#L19-L48)
- [scripts/settings/ability/archetype_talents/talents/ogryn_talents.lua — L2753-L2771](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/ogryn_talents.lua#L2753-L2771)
- [scripts/ui/views/talent_builder_view/layouts/ogryn_tree.lua — L540-L567](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/ui/views/talent_builder_view/layouts/ogryn_tree.lua#L540-L567)

## Example assumptions and limits

- **Replenishment**: Restore reserve ammunition about every 15s, based on 1% of maximum ammo reserve. No combat-ability use or reload is required.

- **Integer example**: With maximum reserve 200, each tick grants `200 × 1% = 2` rounds. With maximum reserve 75, each tick accumulates 0.75 rounds; the fractional remainder carries forward. The first four grants are 0, 1, 1 and 1 rounds, totalling 3.

- **Ammo limit**: Ammunition is added to the reserve, not directly to the magazine. While the magazine is missing ammunition, the same deficit can temporarily be stored in the reserve; combined magazine and reserve ammo still cannot exceed their combined capacities.

Ticks follow server updates; the first interval includes a small initialization offset. The example starts with zero fractional carryover and enough missing ammunition. Mechanisms reuse the fixed-version evidence, with local Build 25606770 English text corresponding to 1.13.1. Actual presentation and behavior remain unobserved in game. Missing details are supplementary explanations.

<a id="original-english-template-and-reconstruction"></a>

## Original English template and reconstruction

Steam Build `25606770`; `content/localization/ui`, resource hash `63564edcb7c3c5ee`; language `en` (code `0`).

- Name key `loc_talent_ogryn_free_reload_after_ability`, hash `e56eeef1`, entry 14884: **Found Some More**.
- Description key `loc_talent_cryptic_passive_ammo_replenishment_desc`, hash `41aa3ba1`, entry 4257.

Full raw template:

~~~text
Every {interval:%s}s, replenish {percent:%s} of your Max Ammo Reserve.
~~~

| Placeholder | Value | Formatting |
|---|---|---|
| interval | shared_talent_settings.ogryn_passive_ammo_replenishment.interval = 15 | Number → 15 |
| percent | shared_talent_settings.ogryn_passive_ammo_replenishment.percent_ammo_replenish_per_tick = 0.01 | Percentage without prefix → 1% |

Only the missing display mapping in the cited talent definition, lines 2753–2771, was read. Accepted values, mechanisms and common formatting were reused.

Static reconstruction; not an observed game screen:

~~~text
Every 15s, replenish 1% of your Max Ammo Reserve.
~~~

## English comparison

The independently read English describes periodic reserve replenishment every 15s based on 1% of maximum reserve, matching the accepted passive. It does not claim a free reload after an ability; the internal identifier and old name comment do not override the active description. Fractional carryover, reserve placement, the combined-capacity limit and update timing supplement the text. No explicit English contradiction is established.

## Icon source

[Original image](https://gameslantern.com/storage/sites/darktide/exporter/talents/ogryn/default/ogryn_free_reload_after_ability.webp) | [Media-Assets Issue](https://github.com/SyuanTsai/Media-Assets/issues/10#issuecomment-5931394406) | [Existing attachment](https://github.com/user-attachments/assets/5a19ac08-20bc-41ee-8af1-bbc6194fa852). The icon identifies the talent; it is not mechanism evidence.
