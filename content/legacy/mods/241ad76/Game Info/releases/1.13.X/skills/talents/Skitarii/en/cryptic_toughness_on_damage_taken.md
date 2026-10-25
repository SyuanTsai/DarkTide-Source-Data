# Kinetic Energy Distributors: source evidence

[繁體中文](../cryptic_toughness_on_damage_taken.md) | [Player description](README.md#cryptic_toughness_on_damage_taken) | [Technical index](SOURCE_INDEX.md) | [English comparison](LOCALIZATION_COMPARISON.md#cryptic_toughness_on_damage_taken)

Release 1.13.1; fixed SHA `7e662fcda16219d775b84af50322be2e9cd9d62e`. Talent `cryptic_toughness_on_damage_taken`; name key `loc_talent_cryptic_toughness_on_damage_taken`; description key `loc_talent_cryptic_toughness_on_damage_taken_desc`. Node `node_3e6adc1b-2f91-43a9-9653-c2fa76c19f0b`; category Talent; one point. Mechanisms and examples reuse verified source evidence; no in-game test was performed.

## Source-confirmed behavior and static derivation

- The generator sets `allow_proc_while_active = true`. This template sets `cooldown = 10`, but `ProcBuff` reads `cooldown_duration`; the 10-second value does not enter cooldown checks in this fixed source.
- `on_damage_taken` requires `attacked_unit == self` and `damage_amount > 0`. It resets `toughness_left_to_restore = 0.25` and the 5-second active duration.
- `Damage.deal_damage` stores the Health-damage component in `damage_amount` and Toughness damage separately in `toughness_damage_amount`. This condition tests only the former.

## Fixed source evidence

- [scripts/settings/buff/archetype_buff_templates/cryptic_buff_templates.lua — L77-L111](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/cryptic_buff_templates.lua#L77-L111)
- [scripts/extension_systems/buff/buffs/proc_buff.lua — L151-L194](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/buff/buffs/proc_buff.lua#L151-L194)
- [scripts/extension_systems/toughness/player_unit_toughness_extension.lua — L253-L285](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/toughness/player_unit_toughness_extension.lua#L253-L285)
- [scripts/settings/talent/talent_settings_cryptic.lua — L579-L583](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/talent/talent_settings_cryptic.lua#L579-L583)
- [scripts/settings/buff/archetype_buff_templates/cryptic_buff_templates.lua — L3130-L3146](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/cryptic_buff_templates.lua#L3130-L3146)
- [scripts/utilities/attack/damage.lua — L154-L225](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/attack/damage.lua#L154-L225)
- [scripts/settings/ability/archetype_talents/talents/cryptic_talents.lua — L2318-L2340](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/cryptic_talents.lua#L2318-L2340)
- [scripts/ui/views/talent_builder_view/layouts/cryptic_tree.lua — L1290-L1316](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/ui/views/talent_builder_view/layouts/cryptic_tree.lua#L1290-L1316)

## Example assumptions and limits

- **Trigger**: After you take positive Health damage, restore 25% of maximum Toughness over 5 seconds. Losing Toughness alone does not trigger this effect.
- **Refresh**: Taking qualifying damage again restarts recovery; the recovery rate does not stack.
- **Recovery example**: At 100 maximum Toughness, recover `100 × 25% ÷ 5 = 5` points per second. Taking damage again at 2 seconds extends recovery until 7 seconds, restoring up to 35 points over that period.

The recovery example assumes enough missing Toughness and no other recovery bonuses; the Toughness cap still applies. The original 10-second cooldown claim conflicts with the fixed-source evidence and requires confirmation in the same game build. No in-game confirmation was performed.

Mechanisms reuse the fixed-version evidence, with local Build 25606770 English text corresponding to 1.13.1. Actual presentation and behavior remain unobserved in game. Missing details are supplementary explanations.

<a id="original-english-template-and-reconstruction"></a>

## Original English template and reconstruction

Steam Build `25606770`; `content/localization/ui`, resource hash `63564edcb7c3c5ee`; language `en` (code `0`).

- Name key `loc_talent_cryptic_toughness_on_damage_taken`, hash `8db3fdfa`, entry 9176: **Kinetic Energy Distributors**.
- Description key `loc_talent_cryptic_toughness_on_damage_taken_desc`, hash `655fac7c`, entry 6596.

Full raw template:

~~~text
Taking damage restores {toughness:%s} Toughness over {duration:%s}s. {cooldown:%s}s Cooldown.
~~~

| Placeholder | Value | Formatting |
|---|---|---|
| `toughness` | `0.25` → `25%` | Percentage; no added prefix. |
| `duration` | `5` | Number; the template supplies `s`. |
| `cooldown` | `10` | Number; the template supplies `s`. This display value does not establish an effective cooldown. |

Display mappings are `cryptic_talents.lua` L2326-L2339. All values reuse the verified settings listed above. The reconstruction preserves the raw cooldown claim for comparison.

Static reconstruction; not an observed game screen:

~~~text
Taking damage restores 25% Toughness over 5s. 10s Cooldown.
~~~

## English comparison

The English correctly describes 25% Toughness recovery over 5 seconds. Its explicit “10s Cooldown” contradicts the accepted fixed-source finding: the template writes `cooldown`, while `ProcBuff` consumes `cooldown_duration`. This is an English text/implementation discrepancy, pending same-build in-game confirmation. Health-only eligibility, the maximum-Toughness basis and refresh behavior are omitted details, not separate errors.

## Icon source

[Original image](https://gameslantern.com/storage/sites/darktide/exporter/talents/cryptic/default/cryptic_toughness_on_damage_taken.webp) | [Media-Assets Issue](https://github.com/SyuanTsai/Media-Assets/issues/13#issuecomment-5935653628) | [Existing attachment](https://github.com/user-attachments/assets/eae28459-1a70-43fc-a5ff-35d2b3adc0eb). The icon identifies the talent; it is not mechanism evidence.
