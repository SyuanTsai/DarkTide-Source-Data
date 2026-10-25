# Strike Down: source evidence

[繁體中文](../adamant_melee_attacks_on_staggered_rend.md) | [Player description](README.md#adamant_melee_attacks_on_staggered_rend) | [Technical index](SOURCE_INDEX.md) | [English comparison](LOCALIZATION_COMPARISON.md#adamant_melee_attacks_on_staggered_rend)

Release 1.13.1; fixed SHA `7e662fcda16219d775b84af50322be2e9cd9d62e`. Talent `adamant_melee_attacks_on_staggered_rend`; name key `loc_talent_adamant_melee_attacks_on_staggered_rend`; description key `loc_talent_adamant_melee_attacks_on_staggered_rend_alt_desc`. Node `node_f74129c0-c6ba-47d0-a058-315793b06763`; category Passive talent; one point.

## Source-confirmed behavior and static derivation

The actual stat is `melee_rending_vs_staggered_multiplier = 0.15`. `_rending_multiplier` includes it according to attack type and conditions. Rending first fills the armour-modifier deficit toward 1; excess uses the armour's overdamage multiplier. It is not a direct `1 + r` multiplier on final damage.

## Fixed source evidence

- [scripts/utilities/attack/damage_calculation.lua — L63-L89](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/attack/damage_calculation.lua#L63-L89)
- [scripts/utilities/attack/damage_calculation.lua — L629-L670](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/attack/damage_calculation.lua#L629-L670)
- [scripts/settings/damage/armor_settings.lua — L8-L24](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/damage/armor_settings.lua#L8-L24)
- [scripts/settings/talent/talent_settings_adamant.lua — L231-L233](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/talent/talent_settings_adamant.lua#L231-L233)
- [scripts/settings/buff/archetype_buff_templates/adamant_buff_templates.lua — L2614-L2620](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/adamant_buff_templates.lua#L2614-L2620)
- [scripts/settings/ability/archetype_talents/talents/adamant_talents.lua — L1327-L1342](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/adamant_talents.lua#L1327-L1342)
- [scripts/ui/views/talent_builder_view/layouts/adamant_tree.lua — L1649-L1676](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/ui/views/talent_builder_view/layouts/adamant_tree.lua#L1649-L1676)

## Example assumptions and limits

- **How it works**: Melee attacks against staggered enemies gain 15% Rending, applied directly to the qualifying hit. This does not leave a timed buff stack behind.

- **Armour example**: Isolating the armour stage, assume damage basis 100 and a Carapace armour modifier of 0.5. The original 50 becomes 100 × (0.5 + 0.15) = 65, a 30% increase at this stage. Other critical-hit, weakspot and damage bonuses are calculated in their respective stages.

- **Beyond the armour deficit**: If the original Carapace modifier is already 1, the excess is converted at one quarter. This effect gives 100 × (1 + 0.15 × 0.25) = 103.75 points. Actual increases vary with the weapon and enemy.

Values and behavior reuse the verified fixed-version evidence. The examples are static derivations, not in-game tests. English and code evidence both refer to 1.13.1; differences still require an in-game check. Omitted details are supplementary rather than translation errors.

<a id="original-english-template-and-reconstruction"></a>

## Original English template and reconstruction

Steam Build `25606770`; `content/localization/ui`, resource hash `63564edcb7c3c5ee`; language `en` (code `0`).

- Name key `loc_talent_adamant_melee_attacks_on_staggered_rend`, hash `f2249181`, entry 15730: **Strike Down**.
- Description key `loc_talent_adamant_melee_attacks_on_staggered_rend_alt_desc`, hash `c925f6cc`, entry 12981.

Full raw template:

```text
{rending:%s} Melee Rending on Staggered Enemies.
```

| Placeholder | Value | Formatting |
|---|---|---|
| rending | talent_settings.melee_attacks_on_staggered_rend.rending_multiplier = 0.15 | Percentage, + prefix → +15% |

Static reconstruction; not an observed game screen:

```text
+15% Melee Rending on Staggered Enemies.
```

## English comparison

The independently read English agrees with the melee and staggered-target conditions and 15% Rending. Direct application, the armour-stage formula and conditional Carapace examples are supplementary. No explicit English contradiction is established.

## Icon source

[Original image](https://gameslantern.com/storage/sites/darktide/exporter/talents/adamant/default/adamant_melee_attacks_on_staggered_rend.webp) | [Media-Assets Issue](https://github.com/SyuanTsai/Media-Assets/issues/11#issuecomment-5932563852) | [Existing attachment](https://github.com/user-attachments/assets/fcb8d517-7a08-452a-a577-1ab15af469cb). The icon identifies the talent; it is not mechanism evidence.
