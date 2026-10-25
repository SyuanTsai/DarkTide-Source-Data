# Man and Cyber-Mastiff: source evidence

[繁體中文](../adamant_toughness_regen_near_companion.md) | [Player description](README.md#adamant_toughness_regen_near_companion) | [Technical index](SOURCE_INDEX.md) | [English comparison](LOCALIZATION_COMPARISON.md#adamant_toughness_regen_near_companion)

Release 1.13.1; fixed SHA `7e662fcda16219d775b84af50322be2e9cd9d62e`. Talent `adamant_toughness_regen_near_companion`; node `node_3684f20d-bb13-4f40-ba64-43d402eea435`; category Passive talent; one point.

## Source-confirmed behavior and static derivation

- The buff obtains the first living owned companion through `companion_spawner` and checks squared distance <= 64. It checks conditions every 0.1s; server updates call `replenish_percentage` with `0.05 × dt` while active, using normal Toughness recovery bonuses.
- Losing a living companion does not explicitly clear `is_active`; leaving range or becoming disabled does write it back. The normal live-dog condition is clear, but removal/respawn transitions still require execution verification.

## Fixed source evidence

- [scripts/extension_systems/toughness/player_unit_toughness_extension.lua — L253-L279](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/toughness/player_unit_toughness_extension.lua#L253-L279)
- [scripts/settings/buff/archetype_buff_templates/adamant_buff_templates.lua — L3314-L3372](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/adamant_buff_templates.lua#L3314-L3372)
- [scripts/settings/talent/talent_settings_adamant.lua — L210-L213](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/talent/talent_settings_adamant.lua#L210-L213)
- [scripts/settings/ability/archetype_talents/talents/adamant_talents.lua — L885-L903](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/adamant_talents.lua#L885-L903)
- [scripts/ui/views/talent_builder_view/layouts/adamant_tree.lua — L411-L439](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/ui/views/talent_builder_view/layouts/adamant_tree.lua#L411-L439)

## Example assumptions and limits

- **Behavior**: While within 8m of your Cyber-Mastiff, recover 5% of maximum Toughness per second. Recovery stops while disabled and unable to act normally.

- **Recovery example**: At maximum Toughness 100, no other recovery bonus and sufficient deficit, recover 100 × 5% = 5 points per second, or 15 points over 3s. If only 2 points are missing, only 2 can be restored.

The recovery example assumes the player remains in range of a living owned Cyber-Mastiff, is not disabled, has no additional recovery bonus and has sufficient missing Toughness for the stated amount.

Possible `is_active` persistence at the moment of companion removal or respawn has not been verified. The player description does not claim precise stopping across that boundary.

Values and behavior reuse fixed-version evidence; examples are static derivations. Chinese, English and code evidence all refer to 1.13.1. Game execution and the final game UI were not observed. Wording differences are compared with the accepted implementation evidence; omitted details are not automatically translation errors.

<a id="original-english-template-and-reconstruction"></a>

## Original English template and reconstruction

Steam Build `25606770`; `content/localization/ui`, resource hash `63564edcb7c3c5ee`; language `en` (code `0`).

- Name key `loc_talent_adamant_toughness_regen_near_companion`, hash `107782a6`, entry 1076: **Man and Cyber-Mastiff**.
- Description key `loc_talent_adamant_toughness_regen_near_companion_desc`, hash `f6bc6fb8`, entry 16022.

Full raw template:

```text
Replenish {toughness:%s} Toughness per second while within {range:%s}m of your Cyber-Mastiff.
```

The display maps `toughness` and `range` to the corresponding `talent_settings.toughness_regen_near_companion` values below. Values and shared formatting reuse the accepted evidence.

| Placeholder | Value | Formatting |
|---|---|---|
| toughness | toughness_percentage_per_second = 0.05 | Percentage, no prefix → 5% |
| range | 8 | Number → 8; template adds m |

Static reconstruction; not an observed game screen:

```text
Replenish 5% Toughness per second while within 8m of your Cyber-Mastiff.
```

## English comparison limits

The independently read English matches the own-companion range and 5% per-second recovery under the normal live-companion condition. Maximum-Toughness basis, recovery modifiers/deficit limits, disabled state and check cadence are supplementary. Companion removal/respawn behavior cannot be confirmed from the existing evidence. No explicit English contradiction is established for this talent. Mechanisms, citations, shared formatting and icon provenance reuse the existing evidence.

## Icon source

[Original image](https://gameslantern.com/storage/sites/darktide/exporter/talents/adamant/default/adamant_toughness_regen_near_companion.webp) | [Media-Assets Issue](https://github.com/SyuanTsai/Media-Assets/issues/11#issuecomment-5932554216) | [Existing attachment](https://github.com/user-attachments/assets/a6716d2d-1100-4bbe-be59-683b5b9176b4). The icon identifies the talent; it is not mechanism evidence.
