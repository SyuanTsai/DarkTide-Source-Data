# Advanced Combat Doctrines: source evidence

[繁體中文](../cryptic_precision_stance.md) | [Player description](README.md#cryptic_precision_stance) | [Technical index](SOURCE_INDEX.md) | [English comparison](LOCALIZATION_COMPARISON.md#cryptic_precision_stance)

Release 1.13.1; fixed SHA `7e662fcda16219d775b84af50322be2e9cd9d62e`. Talent `cryptic_precision_stance`; name key `loc_talent_cryptic_precision_stance`; description key `loc_talent_cryptic_precision_stance_drain_cost_combined_desc`. Node `node_c465a486-1c34-40e4-a34f-84b020753a16`; category Ability; one point. Mechanisms and examples reuse verified source evidence; no in-game test was performed.

## Source-confirmed behavior and static derivation

- This ability uses Capacitance as its charge pool and requires at least one full charge to activate. `min_charges_percent_usage_cost = 0.25`, so activation actually consumes only 25% of one 50-point charge, or 12.5 points. Without increased capacity, three full charges total 150 points.
- The ability also sets an active cost of 1 resource point/s, while base `resource_regen_per_second` is likewise 1 point/s; the two cancel. The precision stance buff separately drains 10% of one charge's cost per second (5 internal resource points at a 50-point cost) and 1% per shot (0.5 internal points). Its update function applies the per-second drain only while not reloading. Reaching zero resource disables the stance.
- Activation automatically switches to `slot_secondary`, enabling auto-aim and applying Spread modifier −0.9 and Recoil modifier −0.6. Leaving `slot_secondary` invalidates the buff. Pressing the ability again directly removes the existing buff and returns, so it does not repeat the activation cost or activation event.
- The Reload Speed passive applies immediately while the precision stance is active and lingers for 5s after it ends, with a +25% bonus. Additional Stamina recovery, kill-triggered damage and shooting-related Critical Strike/Cleave effects come from their respective talent nodes; this main ability alone does not supply them.
- On ending, the code counts full charges consumed as floor(total percentage drained per second and per shot + initial 25%). Only accumulation to a full charge records consumption for the overload keystone's per-charge effects. For example, the 25% activation cost plus 7s of non-reloading drain totals 95%, flooring to 0 charges; reaching 100% records 1 charge.

## Fixed source evidence

- [scripts/settings/ability/archetype_talents/talents/cryptic_talents.lua — L241-L318](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/cryptic_talents.lua#L241-L318)
- [scripts/settings/ability/player_abilities/abilities/cryptic_abilities.lua — L116-L141](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/player_abilities/abilities/cryptic_abilities.lua#L116-L141)
- [scripts/settings/ability/ability_templates/cryptic_precision_stance.lua — L22-L43](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/ability_templates/cryptic_precision_stance.lua#L22-L43)
- [scripts/settings/ability/ability_action_handler_data.lua — L41-L46](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/ability_action_handler_data.lua#L41-L46)
- [scripts/settings/ability/ability_action_handler_data.lua — L131-L138](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/ability_action_handler_data.lua#L131-L138)
- [scripts/extension_systems/ability/actions/action_cryptic_precision_stance_toggle.lua — L40-L120](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/ability/actions/action_cryptic_precision_stance_toggle.lua#L40-L120)
- [scripts/extension_systems/ability/player_unit_ability_extension.lua — L617-L650](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/ability/player_unit_ability_extension.lua#L617-L650)
- [scripts/extension_systems/ability/player_unit_ability_extension.lua — L983-L996](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/ability/player_unit_ability_extension.lua#L983-L996)
- [scripts/extension_systems/ability/player_unit_ability_extension.lua — L1388-L1403](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/ability/player_unit_ability_extension.lua#L1388-L1403)
- [scripts/settings/buff/archetype_buff_templates/cryptic_buff_templates.lua — L360-L408](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/cryptic_buff_templates.lua#L360-L408)
- [scripts/settings/buff/archetype_buff_templates/cryptic_buff_templates.lua — L428-L459](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/cryptic_buff_templates.lua#L428-L459)
- [scripts/settings/buff/archetype_buff_templates/cryptic_buff_templates.lua — L479-L527](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/cryptic_buff_templates.lua#L479-L527)
- [scripts/settings/buff/archetype_buff_templates/cryptic_buff_templates.lua — L644-L696](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/cryptic_buff_templates.lua#L644-L696)
- [scripts/settings/talent/talent_settings_cryptic.lua — L98-L119](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/talent/talent_settings_cryptic.lua#L98-L119)
- [scripts/settings/buff/archetype_buff_templates/cryptic_buff_templates.lua — L1531-L1536](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/cryptic_buff_templates.lua#L1531-L1536)
- [scripts/settings/buff/archetype_buff_templates/cryptic_buff_templates.lua — L1673-L1688](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/cryptic_buff_templates.lua#L1673-L1688)
- [scripts/settings/buff/archetype_buff_templates/cryptic_buff_templates.lua — L298-L344](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/cryptic_buff_templates.lua#L298-L344)
- [scripts/extension_systems/ability/player_unit_ability_extension.lua — L773-L879](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/ability/player_unit_ability_extension.lua#L773-L879)
- [scripts/settings/ability/archetype_talents/talents/cryptic_talents.lua — L241-L318](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/cryptic_talents.lua#L241-L318)
- [scripts/ui/views/talent_builder_view/layouts/cryptic_tree.lua — L1744-L1773](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/ui/views/talent_builder_view/layouts/cryptic_tree.lua#L1744-L1773)

## Example assumptions and limits

- **Aiming effects**: Switches to your ranged weapon and assists aiming at enemies near the reticule. While active, Spread decreases by 90% and Recoil by 60%. This supplies no separate fixed damage bonus.
- **Activation cost**: Requires at least 1 full charge to activate, but actually spends only 25% of one charge. At 50 points per charge, activation costs 50 × 25% = 12.5 points.
- **Ongoing and shooting costs**: Separately drains 10% of one charge/s, or 50 × 10% = 5 points/s, plus 50 × 1% = 0.5 points per shot. These percentages all use one charge; increasing maximum charge capacity does not increase each deduction.
- **Duration example**: With only one charge, or 50 points, activation leaves 37.5 points. Without shooting, reloading or extra recovery, it lasts 37.5 ÷ 5 = 7.5s. With three full charges, it lasts (150 − 12.5) ÷ 5 = 27.5s.
- **Shooting example**: Starting with three full charges, activating for 10s and firing 20 shots leaves 150 − 12.5 − 10 × 5 − 20 × 0.5 = 77.5 points. This excludes reloading and extra recovery.
- **Reloading**: Reloading pauses the 5-point/s ongoing drain. Reload Speed increases by 25% and lingers for 5s after the stance ends. With no other bonuses, a 2s reload takes 2 ÷ 1.25 = 1.6s.
- **Recovery limits**: While active, base natural recovery and the extra upkeep cost cancel; the class's original kill-triggered recovery also stops. Other natural recovery bonuses can offset some drain. For example, +50% natural recovery leaves net drain of 5 − 0.5 = 4.5 points/s.
- **Ending and reuse**: Reactivating the ability, leaving the ranged weapon or exhausting Capacitance ends the stance. Normal recovery resumes afterwards. Starting at 0 points with only natural recovery of 1 point/s, it takes 50s to obtain one charge and activate again.

- With one full charge, no shooting/reloading or other bonuses: (50 − 12.5) ÷ 5 = 7.5s. With three: (150 − 12.5) ÷ 5 = 27.5s.
- Starting with three charges, activating for 10s and shooting 20 times without reloading leaves 150 − 12.5 − 10 × 5 − 20 × 0.5 = 77.5 points.
- Powerdrive counts floor(total charges consumed) when the stance ends. For example, 0.25 + 0.7 = 0.95 is below one charge, adding 0 stacks; 2.05 charges count as 2 and add 10 stacks.
- Activation 25%, drain 10%/s and 1%/shot all use one charge's cost, rather than percentages of the whole three-charge resource pool.
- A pool containing more than one charge can extend the stance. Per-second and per-shot costs still use one charge, rather than being recalculated from the pool maximum.

Mechanisms reuse the fixed-version evidence, with local Build 25606770 English text corresponding to 1.13.1. Actual presentation and behavior remain unobserved in game. Missing details are supplementary explanations.

<a id="original-english-template-and-reconstruction"></a>

## Original English template and reconstruction

Steam Build `25606770`; `content/localization/ui`, resource hash `63564edcb7c3c5ee`; language `en` (code `0`).

- Name key `loc_talent_cryptic_precision_stance`, hash `c4f43796`, entry 12705: **Advanced Combat Doctrines**.
- Description key `loc_talent_cryptic_precision_stance_drain_cost_combined_desc`, hash `090d6895`, entry 564.

Full raw template:

~~~text
Spend {capacitance_instant:%s} {capacitance_keyword:%s} and Swap to your Secondary Weapon. Your weapon locks onto enemies close to your targeting reticule, granting you inhuman accuracy. You gain {spread:%s} Spread, {recoil:%s} Recoil, and {reload_speed:%s} Reload Speed for the duration. The reload speed lingers for {duration:%s}s after the ability ends.

While active, you drain {capacitance_drain:%s} {capacitance_keyword:%s} per second, and an additional {capacitance_shot:%s} per shot. The drain is paused while reloading.

The Ability is disabled if you switch from your Secondary Weapon, if you reach {zero_capacitance:%s} {capacitance_keyword:%s} and {zero_charges:%s} Charges, or if you reactivate it. Only usable if you have at least {charge_min:%s} Charge available.

No Cooldown.
~~~

| Placeholder | Value | Formatting |
|---|---|---|
| `{capacitance_instant:%s}` | 0.25 → 25% | `percentage` |
| `{capacitance_keyword:%s}` | Capacitance | `loc_string`; `loc_talent_cryptic_power_keyword` |
| `{spread:%s}` | −0.9 → −90% | `percentage` |
| `{recoil:%s}` | −0.6 → −60% | `percentage` |
| `{reload_speed:%s}` | 0.25 → +25% | `percentage`; explicit + prefix |
| `{duration:%s}` | 5 | `number`; s supplied by template |
| `{capacitance_drain:%s}` | 0.1 → 10% | `percentage` |
| `{capacitance_shot:%s}` | 0.01 → 1% | `percentage` |
| `{zero_capacitance:%s}` | 0 → 0% | `percentage` |
| `{zero_charges:%s}` | 0 | `number` |
| `{charge_min:%s}` | 1 | `number` |

The minimally read display map is `cryptic_talents.lua` L259-L318. The verified precision-stance settings supply activation cost 0.25, drain 0.1, shot cost 0.01, Spread −0.9, Recoil −0.6, Reload Speed 0.25 and lingering time 5. The map supplies literal zero values and minimum charge 1. Capacitance uses `loc_talent_cryptic_power_keyword` (hash `ecc15a9f`, English entry 15388). The map's talent_name and two_charges/three_charges fields are not placeholders in this original English template.

Static reconstruction; not an observed game screen:

~~~text
Spend 25% Capacitance and Swap to your Secondary Weapon. Your weapon locks onto enemies close to your targeting reticule, granting you inhuman accuracy. You gain -90% Spread, -60% Recoil, and +25% Reload Speed for the duration. The reload speed lingers for 5s after the ability ends.

While active, you drain 10% Capacitance per second, and an additional 1% per shot. The drain is paused while reloading.

The Ability is disabled if you switch from your Secondary Weapon, if you reach 0% Capacitance and 0 Charges, or if you reactivate it. Only usable if you have at least 1 Charge available.

No Cooldown.
~~~

## English comparison

The original English activation/drain/shot percentages, weapon switch and aiming effects, Spread/Recoil/Reload Speed values, 5s lingering Reload Speed, reloading pause, ending conditions, minimum one charge and absence of a fixed cooldown agree with the accepted evidence. The single-charge denominator, 1-point/s base-recovery/upkeep cancellation, original kill-recovery suspension, toggle-off branch and full-charge rounding for Powerdrive supplement the wording.

## Icon source

[Original image](https://gameslantern.com/storage/sites/darktide/exporter/talents/cryptic/ability/cryptic_precision_stance.webp) | [Media-Assets Issue](https://github.com/SyuanTsai/Media-Assets/issues/13#issuecomment-5935640756) | [Existing attachment](https://github.com/user-attachments/assets/fe67d92b-3b1a-4da7-bf6a-43bb643e80d6). The icon identifies the talent; it is not mechanism evidence.
