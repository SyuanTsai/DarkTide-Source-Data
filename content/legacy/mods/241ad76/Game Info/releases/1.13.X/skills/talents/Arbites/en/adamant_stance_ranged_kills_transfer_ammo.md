# Blessed Armament: source evidence

[繁體中文](../adamant_stance_ranged_kills_transfer_ammo.md) | [Player description](README.md#adamant_stance_ranged_kills_transfer_ammo) | [Technical index](SOURCE_INDEX.md) | [English comparison](LOCALIZATION_COMPARISON.md#adamant_stance_ranged_kills_transfer_ammo)

Release 1.13.1; fixed SHA `7e662fcda16219d775b84af50322be2e9cd9d62e`. Talent `adamant_stance_ranged_kills_transfer_ammo`; node `node_c7200201-5541-4b79-bb97-f866d4859bd7`; category Ability; one point.

## Source-confirmed behavior and static derivation

- When the stance buff activates, it checks whether this upgrade is selected. Only a ranged kill enters the ammunition-transfer flow.
- Requested ammunition is Clip capacity × 10%, rounded upward. The flow takes the smaller of that request and the Clip deficit, transfers ammunition from Reserve into the Clip, and resets the reload state. Available Reserve further limits the transfer.
- The settings retain a 1.5s interval value. The current consumption flow instead checks that the trigger game timestamps differ. Whether the settings field is old or otherwise unused remains an existing question; it is not treated as an enforced 1.5s cooldown.

## Fixed source evidence

- [scripts/settings/ability/archetype_talents/talents/adamant_talents.lua — L320-L342](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/adamant_talents.lua#L320-L342)
- [scripts/settings/talent/talent_settings_adamant.lua — L35-L51](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/talent/talent_settings_adamant.lua#L35-L51)
- [scripts/settings/buff/archetype_buff_templates/adamant_buff_templates.lua — L735-L784](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/adamant_buff_templates.lua#L735-L784)
- [scripts/settings/ability/archetype_talents/talents/adamant_talents.lua — L320-L342](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/adamant_talents.lua#L320-L342)
- [scripts/ui/views/talent_builder_view/layouts/adamant_tree.lua — L1157-L1179](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/ui/views/talent_builder_view/layouts/adamant_tree.lua#L1157-L1179)

## Example assumptions and limits

- **Trigger**: Ranged kills replenish ammunition only during Castigator's Stance. Ammunition transfers from Reserve into the Clip.

- **Transfer calculation**: Each trigger calculates 10% of Clip capacity and rounds upward. A 30-round Clip gives `30 × 10% = 3 rounds`; if only one round is missing, transfer only one. If Reserve is insufficient, transfer only the ammunition remaining there; this effect does not create ammunition.

- **Active period**: The effect operates with Castigator's Stance, whose base duration is 10s.

Transfer is limited by the current Clip deficit and available Reserve. The English says once per Attack, while the existing implementation evidence establishes timestamp throttling; its exact attack grouping and observed interval remain unconfirmed. The raw description does not use the mapped cooldown field. Values and behavior reuse the fixed-version evidence; examples are static derivations. Game execution and the final game UI were not observed.

<a id="original-english-template-and-reconstruction"></a>

## Original English template and reconstruction

Steam Build `25606770`; `content/localization/ui`, resource hash `63564edcb7c3c5ee`; language `en` (code `0`).

- Name key `loc_talent_adamant_stance_ranged_kills_transfer_ammo`, hash `90beeaf5`, entry 9354: **Blessed Armament**.
- Description key `loc_talent_adamant_stance_ranged_kills_transfer_ammo_no_cd_desc`, hash `263d1e30`, entry 2472.
- Stance-name lookup `loc_talent_adamant_stance_ability_name`, hash `126c5ef0`, entry 1190: **Castigator's Stance**.

Full raw template:

```text
During {stance_name:%s}, ranged kills replenish up to {ammo:%s} of the total Ammo in your Clip from your Reserve, rounded up. Can occur once per Attack.
```

The `ammo` mapping uses percentage formatting for `talent_settings.combat_ability.stance.ammo_percent`, without a positive prefix. `stance_name` is a localized-name lookup. The mapped `cooldown` field is absent from this raw template.

| Placeholder | Value | Formatting |
|---|---|---|
| stance_name | Castigator's Stance | Localized lookup of the stance-name key |
| ammo | 0.1 | Percentage × 100, no positive prefix → 10% |

Static reconstruction; not an observed game screen:

```text
During Castigator's Stance, ranged kills replenish up to 10% of the total Ammo in your Clip from your Reserve, rounded up. Can occur once per Attack.
```

## English comparison limits

The independently read English matches the stance condition, ranged kills, Clip-capacity basis, rounding and Reserve transfer. Its once-per-Attack claim remains unconfirmed against the existing timestamp evidence. The numerical example and reload-state reset are supplementary. No explicit English contradiction is established. The existing question is retained without renewed mechanism tracing; citations, shared formatting and icon provenance are reused.

## Icon source

[Original image](https://gameslantern.com/storage/sites/darktide/exporter/talents/adamant/ability_modifier/adamant_stance_ranged_kills_transfer_ammo.webp) | [Media-Assets Issue](https://github.com/SyuanTsai/Media-Assets/issues/11#issuecomment-5932554216) | [Existing attachment](https://github.com/user-attachments/assets/8c312d8e-8b49-45cd-828e-62cffc6d0a25). The icon identifies the talent; it is not mechanism evidence.
