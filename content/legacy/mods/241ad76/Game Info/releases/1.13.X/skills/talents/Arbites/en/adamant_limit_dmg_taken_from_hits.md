# True Grit: source evidence

[繁體中文](../adamant_limit_dmg_taken_from_hits.md) | [Player description](README.md#adamant_limit_dmg_taken_from_hits) | [Technical index](SOURCE_INDEX.md) | [English comparison](LOCALIZATION_COMPARISON.md#adamant_limit_dmg_taken_from_hits)

Release 1.13.1; fixed SHA `7e662fcda16219d775b84af50322be2e9cd9d62e`. Talent `adamant_limit_dmg_taken_from_hits`; name key `loc_talent_adamant_limit_dmg_taken_from_hits`; description key `loc_talent_adamant_limit_dmg_taken_from_hits_desc`. Node `node_433d6dd9-c8c4-4f9b-8f0f-e86cc9e69c8a`; category Passive talent; one point.

## Source-confirmed behavior and static derivation

`DamageTakenCalculation` consumes the `limit_health_damage_taken` keyword and `max_health_damage_taken_per_hit = 50`. In the `not instakill` branch, it applies `math.min(limit)` separately to `health_damage` and `permanent_damage`, after Health penetration, wound and related calculations. This must not be interpreted as a Toughness damage cap.

## Fixed source evidence

- [scripts/utilities/attack/damage_taken_calculation.lua — L378-L403](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/attack/damage_taken_calculation.lua#L378-L403)
- [scripts/settings/buff/archetype_buff_templates/adamant_buff_templates.lua — L2324-L2334](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/adamant_buff_templates.lua#L2324-L2334)
- [scripts/settings/talent/talent_settings_adamant.lua — L161-L163](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/talent/talent_settings_adamant.lua#L161-L163)
- [scripts/settings/ability/archetype_talents/talents/adamant_talents.lua — L1118-L1132](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/adamant_talents.lua#L1118-L1132)
- [scripts/ui/views/talent_builder_view/layouts/adamant_tree.lua — L638-L664](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/ui/views/talent_builder_view/layouts/adamant_tree.lua#L638-L664)

## Example assumptions and limits

- **Protection**: A normal attack can deal at most 50 Health damage to you in one hit. This does not cap Toughness damage or prevent an instant kill.

- **Damage example**: After other Health damage reductions have been applied, an incoming 120 points becomes min(120, 50) = 50 points; an incoming 30 remains 30. This is a fixed cap, not 50% damage reduction.

Values and behavior reuse the verified fixed-version evidence. The examples are static derivations, not in-game tests. English and code evidence both refer to 1.13.1; differences still require an in-game check. Omitted details are supplementary rather than translation errors.

<a id="original-english-template-and-reconstruction"></a>

## Original English template and reconstruction

Steam Build `25606770`; `content/localization/ui`, resource hash `63564edcb7c3c5ee`; language `en` (code `0`).

- Name key `loc_talent_adamant_limit_dmg_taken_from_hits`, hash `3261784d`, entry 3281: **True Grit**.
- Description key `loc_talent_adamant_limit_dmg_taken_from_hits_desc`, hash `a25ab598`, entry 10489.

Full raw template:

```text
Limit the maximum Health Damage Taken from an Attack to {limit:%s}.
```

| Placeholder | Value | Formatting |
|---|---|---|
| limit | 50, from the accepted maximum Health damage per hit | Number → 50; no percentage sign |

Static reconstruction; not an observed game screen:

```text
Limit the maximum Health Damage Taken from an Attack to 50.
```

## English comparison

The independently read English agrees with a fixed maximum of 50 Health damage from an attack. The accepted record already confirms number formatting; no additional source read was needed for this reconstruction. Instant-kill exclusion, prior calculation order and separate permanent-damage handling supplement the description. No explicit English contradiction is established.

## Icon source

[Original image](https://gameslantern.com/storage/sites/darktide/exporter/talents/adamant/default/adamant_limit_dmg_taken_from_hits.webp) | [Media-Assets Issue](https://github.com/SyuanTsai/Media-Assets/issues/11#issuecomment-5932563852) | [Existing attachment](https://github.com/user-attachments/assets/d4c3f66c-8fa8-419f-8a46-f94c842a9b4e). The icon identifies the talent; it is not mechanism evidence.
