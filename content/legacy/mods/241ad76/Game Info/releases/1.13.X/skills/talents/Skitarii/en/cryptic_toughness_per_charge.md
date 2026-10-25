# Auto-Repair Doctrines: source evidence

[繁體中文](../cryptic_toughness_per_charge.md) | [Player description](README.md#cryptic_toughness_per_charge) | [Technical index](SOURCE_INDEX.md) | [English comparison](LOCALIZATION_COMPARISON.md#cryptic_toughness_per_charge)

Release 1.13.1; fixed SHA `7e662fcda16219d775b84af50322be2e9cd9d62e`. Talent `cryptic_toughness_per_charge`; name key `loc_talent_cryptic_toughness_per_charge`; description key `loc_talent_cryptic_toughness_per_charge_desc`. Node `node_04679cd0-b399-4ced-a6e8-e655bf0c3b06`; category Talent; one point. Mechanisms and examples reuse verified source evidence; no in-game test was performed.

## Source-confirmed behavior and static derivation

- Every update reads the integer `remaining_ability_charges` and calls `replenish_percentage` with `(0.03 + 0.005n) × dt`. There is no distance, kill or Coherency condition.

## Fixed source evidence

- [scripts/extension_systems/toughness/player_unit_toughness_extension.lua — L253-L285](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/toughness/player_unit_toughness_extension.lua#L253-L285)
- [scripts/extension_systems/ability/player_unit_ability_extension.lua — L1058-L1075](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/ability/player_unit_ability_extension.lua#L1058-L1075)
- [scripts/settings/talent/talent_settings_cryptic.lua — L603-L606](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/talent/talent_settings_cryptic.lua#L603-L606)
- [scripts/settings/buff/archetype_buff_templates/cryptic_buff_templates.lua — L3228-L3249](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/cryptic_buff_templates.lua#L3228-L3249)
- [scripts/settings/ability/archetype_talents/talents/cryptic_talents.lua — L2427-L2447](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/cryptic_talents.lua#L2427-L2447)
- [scripts/ui/views/talent_builder_view/layouts/cryptic_tree.lua — L645-L671](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/ui/views/talent_builder_view/layouts/cryptic_tree.lua#L645-L671)

## Example assumptions and limits

- **Recovery**: Continuously restore **3% of maximum Toughness per second**, plus **0.5% of maximum Toughness per second for each full charge currently held**.
- **Example**: At 200 maximum Toughness with 3 full charges, recover `200 × (3% + 3 × 0.5%) = 9` points per second. With 0 charges, still recover `200 × 3% = 6` points per second.
- **Limits**: Incomplete charges do not count. Recovery cannot exceed maximum Toughness.

- The example assumes 200 maximum Toughness and no other recovery bonuses: 9 points per second with 3 full charges and 6 points per second with none.
- Recovery uses maximum Toughness, can be affected by recovery bonuses and stops at the maximum.
- Full-charge counting and the maximum-Toughness basis supplement the English's current-charge wording. Actual presentation and behavior remain unobserved in game.

Mechanisms reuse the fixed-version evidence, with local Build 25606770 English text corresponding to 1.13.1. Actual presentation and behavior remain unobserved in game. Missing details are supplementary explanations.

<a id="original-english-template-and-reconstruction"></a>

## Original English template and reconstruction

Steam Build `25606770`; `content/localization/ui`, resource hash `63564edcb7c3c5ee`; language `en` (code `0`).

- Name key `loc_talent_cryptic_toughness_per_charge`, hash `1af984d6`, entry 1762: **Auto-Repair Doctrines**.
- Description key `loc_talent_cryptic_toughness_per_charge_desc`, hash `04db1c7b`, entry 293.

Full raw template:

~~~text
Replenish {toughness:%s} Toughness per second. Increased by {toughness_per_charge:%s} per Current Charge.
~~~

| Placeholder | Value | Formatting |
|---|---|---|
| `toughness` | +3% | `percentage`, prefix `+`: verified `talent_settings.cryptic_toughness_per_charge.toughness_regen_per_second = 0.03` |
| `toughness_per_charge` | +0.5% | `percentage`, prefix `+`: verified `talent_settings.cryptic_toughness_per_charge.increased_toughness_regen_per_charge = 0.005` |

The display mappings in `cryptic_talents.lua` L2435–L2446 use the already verified base and per-charge recovery rates.

Static reconstruction; not an observed game screen:

~~~text
Replenish +3% Toughness per second. Increased by +0.5% per Current Charge.
~~~

## English comparison

The English 3%-per-second recovery and additional 0.5% per current charge agree with the accepted rate. It does not define full-charge counting, the maximum-Toughness denominator, recovery modifiers or the cap. Those details and the original examples are supplements; no explicit English contradiction was identified.

## Icon source

[Original image](https://gameslantern.com/storage/sites/darktide/exporter/talents/cryptic/default/cryptic_toughness_per_charge.webp) | [Media-Assets Issue](https://github.com/SyuanTsai/Media-Assets/issues/13#issuecomment-5935647528) | [Existing attachment](https://github.com/user-attachments/assets/003d8e80-1bb4-46b0-aad1-e2f6d78be693). The icon identifies the talent; it is not mechanism evidence.
