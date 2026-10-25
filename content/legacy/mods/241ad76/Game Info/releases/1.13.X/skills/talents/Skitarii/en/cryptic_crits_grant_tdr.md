# Power Redistribution Uplink: source evidence

[繁體中文](../cryptic_crits_grant_tdr.md) | [Player description](README.md#cryptic_crits_grant_tdr) | [Technical index](SOURCE_INDEX.md) | [English comparison](LOCALIZATION_COMPARISON.md#cryptic_crits_grant_tdr)

Release 1.13.1; fixed SHA `7e662fcda16219d775b84af50322be2e9cd9d62e`. Talent `cryptic_crits_grant_tdr`; name key `loc_talent_cryptic_crits_grant_tdr`; description key `loc_talent_cryptic_crits_grant_tdr_desc`. Node `node_6561d779-b477-4e35-a588-e74c910e92c9`; category Talent; one point. Mechanisms and examples reuse verified source evidence; no in-game test was performed.

## Source-confirmed behavior and static derivation

- The generator sets `toughness_left_to_restore = 0.25` on each trigger. This template assigns `toughness_restored_on_proc = 0.075`, which does not override the generator's `toughness_regen_on_proc` field. However, `active_duration = 3` and the rate is `0.075 / 3`, so a full single activation still restores only `0.075`. There is no immediate restoration.
- The trigger uses `on_hit` with `on_crit`, and `allow_proc_while_active = true`. The Toughness damage multiplier is `0.85`, multiplied by other independent damage reductions.

## Fixed source evidence

- [scripts/settings/buff/archetype_buff_templates/cryptic_buff_templates.lua — L77-L111](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/cryptic_buff_templates.lua#L77-L111)
- [scripts/extension_systems/toughness/player_unit_toughness_extension.lua — L253-L285](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/toughness/player_unit_toughness_extension.lua#L253-L285)
- [scripts/utilities/attack/damage_taken_calculation.lua — L234-L255](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/attack/damage_taken_calculation.lua#L234-L255)
- [scripts/extension_systems/buff/buffs/proc_buff.lua — L151-L174](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/buff/buffs/proc_buff.lua#L151-L174)
- [scripts/settings/talent/talent_settings_cryptic.lua — L370-L374](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/talent/talent_settings_cryptic.lua#L370-L374)
- [scripts/settings/buff/archetype_buff_templates/cryptic_buff_templates.lua — L2150-L2161](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/cryptic_buff_templates.lua#L2150-L2161)
- [scripts/settings/ability/archetype_talents/talents/cryptic_talents.lua — L1713-L1736](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/cryptic_talents.lua#L1713-L1736)
- [scripts/ui/views/talent_builder_view/layouts/cryptic_tree.lua — L267-L293](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/ui/views/talent_builder_view/layouts/cryptic_tree.lua#L267-L293)

## Example assumptions and limits

- **Trigger**: After a critical hit, restore **2.5% of maximum Toughness per second for 3 seconds** and gain **15% Toughness Damage Reduction**.
- **Refreshing**: Another critical hit restarts the duration. The restoration rate and damage reduction do not stack.
- **Example**: At 100 maximum Toughness, restore `100 × 2.5% = 2.5` points per second, or 7.5 points over the full 3 seconds. With no other damage reduction, 100 points of Toughness damage become `100 × 0.85 = 85`.

- The restoration example assumes 100 maximum Toughness and no other recovery bonuses: 2.5 points per second, 7.5 over 3 seconds. The damage example assumes no other reduction and gives 85 points from an initial 100.
- Restoration uses maximum Toughness, is affected by Toughness recovery bonuses and cannot exceed the maximum.
- The same-build wording does not clearly separate ongoing restoration from damage reduction. The per-second rate is a supplementary explanation; actual presentation and behavior remain unobserved in game.

Mechanisms reuse the fixed-version evidence, with local Build 25606770 English text corresponding to 1.13.1. Actual presentation and behavior remain unobserved in game. Missing details are supplementary explanations.

<a id="original-english-template-and-reconstruction"></a>

## Original English template and reconstruction

Steam Build `25606770`; `content/localization/ui`, resource hash `63564edcb7c3c5ee`; language `en` (code `0`).

- Name key `loc_talent_cryptic_crits_grant_tdr`, hash `1e644149`, entry 1990: **Power Redistribution Uplink**.
- Description key `loc_talent_cryptic_crits_grant_tdr_desc`, hash `12420803`, entry 1181.

Full raw template:

~~~text
Critical hits restore {toughness:%s} Toughness and grant {tdr:%s} Toughness Damage Reduction over {duration:%s}s.
~~~

| Placeholder | Value | Formatting |
|---|---|---|
| `toughness` | 7.5% | `percentage`: verified `talent_settings.cryptic_crits_grant_tdr.toughness_restored = 0.075` |
| `tdr` | +15% | `percentage`, prefix `+`: `abs(1 - toughness_damage_taken_multiplier)`, with multiplier `0.85` |
| `duration` | 3 | `number`: verified `talent_settings.cryptic_crits_grant_tdr.duration = 3` |

The display mappings in `cryptic_talents.lua` L1721–L1735 use the already verified amount, damage multiplier and duration.

Static reconstruction; not an observed game screen:

~~~text
Critical hits restore 7.5% Toughness and grant +15% Toughness Damage Reduction over 3s.
~~~

## English comparison

The English identifies critical hits, 7.5% Toughness restoration, 15% Toughness Damage Reduction and a 3-second period. It does not explicitly promise immediate restoration; the phrase over 3s supports the ongoing effect. The per-second rate, maximum-Toughness basis, refreshing rules and multiplicative reduction are supplementary details. No explicit English contradiction was identified.

## Icon source

[Original image](https://gameslantern.com/storage/sites/darktide/exporter/talents/cryptic/default/cryptic_crits_grant_tdr.webp) | [Media-Assets Issue](https://github.com/SyuanTsai/Media-Assets/issues/13#issuecomment-5935647528) | [Existing attachment](https://github.com/user-attachments/assets/6ce866b5-8bad-4668-94c0-c0c6c5a06944). The icon identifies the talent; it is not mechanism evidence.
