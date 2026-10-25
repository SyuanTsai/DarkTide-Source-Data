# Monstrosity Hunter: source evidence

[繁體中文](../adamant_monster_hunter.md) | [Player description](README.md#adamant_monster_hunter) | [Technical index](SOURCE_INDEX.md) | [English comparison](LOCALIZATION_COMPARISON.md#adamant_monster_hunter)

Release 1.13.1; fixed SHA `7e662fcda16219d775b84af50322be2e9cd9d62e`. Talent `adamant_monster_hunter`; name key `loc_talent_adamant_monster_hunter`; description key `loc_talent_adamant_monster_hunter_desc`. Node `node_48e362cb-c6b4-4d38-a325-08667444b783`; category Passive talent; one point.

## Source-confirmed behavior and static derivation

`damage_vs_ogryn_and_monsters = 0.2`. `DamageCalculation` uses one `target_is_ogryn_or_monster` OR condition to add the bonus once to the general damage stage.

## Fixed source evidence

- [scripts/utilities/attack/damage_calculation.lua — L391-L402](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/attack/damage_calculation.lua#L391-L402)
- [scripts/settings/talent/talent_settings_adamant.lua — L480-L482](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/talent/talent_settings_adamant.lua#L480-L482)
- [scripts/settings/buff/archetype_buff_templates/adamant_buff_templates.lua — L3036-L3042](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/adamant_buff_templates.lua#L3036-L3042)
- [scripts/settings/ability/archetype_talents/talents/adamant_talents.lua — L2805-L2820](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/adamant_talents.lua#L2805-L2820)
- [scripts/ui/views/talent_builder_view/layouts/adamant_tree.lua — L1991-L2017](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/ui/views/talent_builder_view/layouts/adamant_tree.lua#L1991-L2017)

## Example assumptions and limits

- **Damage example**: Against a qualifying target, base damage 100 becomes 100 × (1 + 20%) = 120. With an existing same-stage 25% bonus, damage is 100 × (1 + 25% + 20%) = 145.

- **Scope**: Both melee and ranged attacks qualify. A target matching both types receives the bonus only once.

Values and behavior reuse the verified fixed-version evidence. The examples are static derivations, not in-game tests. English and code evidence both refer to 1.13.1; differences still require an in-game check. Omitted details are supplementary rather than translation errors.

<a id="original-english-template-and-reconstruction"></a>

## Original English template and reconstruction

Steam Build `25606770`; `content/localization/ui`, resource hash `63564edcb7c3c5ee`; language `en` (code `0`).

- Name key `loc_talent_adamant_monster_hunter`, hash `bd4a689a`, entry 12209: **Monstrosity Hunter**.
- Description key `loc_talent_adamant_monster_hunter_desc`, hash `7ec647c9`, entry 8227.

Full raw template:

```text
{damage:%s} Damage to Ogryns and Monstrosities.
```

| Placeholder | Value | Formatting |
|---|---|---|
| damage | talent_settings.monster_hunter.damage = 0.2 | Percentage, + prefix → +20% |

Static reconstruction; not an observed game screen:

```text
+20% Damage to Ogryns and Monstrosities.
```

## English comparison

The independently read English agrees with the two target types and 20% Damage bonus. Melee/ranged scope, single application through the OR condition and additive examples are supplementary. No explicit English contradiction is established.

## Icon source

[Original image](https://gameslantern.com/storage/sites/darktide/exporter/talents/adamant/default/adamant_monster_hunter.webp) | [Media-Assets Issue](https://github.com/SyuanTsai/Media-Assets/issues/11#issuecomment-5932563852) | [Existing attachment](https://github.com/user-attachments/assets/62b4954d-42c3-4eab-a6ea-a17719414e19). The icon identifies the talent; it is not mechanism evidence.
