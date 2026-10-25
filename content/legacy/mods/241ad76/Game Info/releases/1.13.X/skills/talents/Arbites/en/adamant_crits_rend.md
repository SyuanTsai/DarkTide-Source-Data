# Prosecution Blow: source evidence

[繁體中文](../adamant_crits_rend.md) | [Player description](README.md#adamant_crits_rend) | [Technical index](SOURCE_INDEX.md) | [English comparison](LOCALIZATION_COMPARISON.md#adamant_crits_rend)

Release 1.13.1; fixed SHA `7e662fcda16219d775b84af50322be2e9cd9d62e`. Talent `adamant_crits_rend`; name key `loc_talent_adamant_crits_rend`; description key `loc_talent_adamant_crits_rend_alt_desc`. Node `node_939b77d7-9bd1-48a9-8ae6-66beae3686ec`; category Passive talent; one point.

## Source-confirmed behavior and static derivation

The actual stat is `ranged_critical_strike_rending_multiplier = 0.2`. `_rending_multiplier` includes it according to attack type and conditions. Rending first fills the armour-modifier deficit toward 1; excess uses the armour's overdamage multiplier. It is not a direct `1 + r` multiplier on final damage.

## Fixed source evidence

- [scripts/utilities/attack/damage_calculation.lua — L63-L89](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/attack/damage_calculation.lua#L63-L89)
- [scripts/utilities/attack/damage_calculation.lua — L629-L670](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/attack/damage_calculation.lua#L629-L670)
- [scripts/settings/damage/armor_settings.lua — L8-L24](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/damage/armor_settings.lua#L8-L24)
- [scripts/settings/talent/talent_settings_adamant.lua — L376-L378](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/talent/talent_settings_adamant.lua#L376-L378)
- [scripts/settings/buff/archetype_buff_templates/adamant_buff_templates.lua — L3484-L3490](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/adamant_buff_templates.lua#L3484-L3490)
- [scripts/settings/ability/archetype_talents/talents/adamant_talents.lua — L2418-L2433](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/adamant_talents.lua#L2418-L2433)
- [scripts/ui/views/talent_builder_view/layouts/adamant_tree.lua — L1881-L1907](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/ui/views/talent_builder_view/layouts/adamant_tree.lua#L1881-L1907)

## Example assumptions and limits

- **How it works**: Ranged Critical Strikes gain 20% Rending, applied directly to the qualifying hit. This does not leave a timed buff stack behind.

- **Armour example**: Isolating the armour stage, assume damage basis 100 and a Carapace armour modifier of 0.5. The original 50 becomes 100 × (0.5 + 0.2) = 70, a 40% increase at this stage. Other critical-hit, weakspot and damage bonuses are calculated in their respective stages.

- **Beyond the armour deficit**: If the original Carapace modifier is already 1, the excess is converted at one quarter. This effect gives 100 × (1 + 0.2 × 0.25) = 105 points. Actual increases vary with the weapon and enemy.

Values and behavior reuse the verified fixed-version evidence. The examples are static derivations, not in-game tests. English and code evidence both refer to 1.13.1; differences still require an in-game check. Omitted details are supplementary rather than translation errors.

<a id="original-english-template-and-reconstruction"></a>

## Original English template and reconstruction

Steam Build `25606770`; `content/localization/ui`, resource hash `63564edcb7c3c5ee`; language `en` (code `0`).

- Name key `loc_talent_adamant_crits_rend`, hash `e58ef98a`, entry 14893: **Prosecution Blow**.
- Description key `loc_talent_adamant_crits_rend_alt_desc`, hash `7ccaaaa3`, entry 8099.

Full raw template:

```text
{rending:%s} Rending on Ranged Critical Strike.
```

| Placeholder | Value | Formatting |
|---|---|---|
| rending | talent_settings.crits_rend.rending = 0.2 | Percentage, + prefix → +20% |

Static reconstruction; not an observed game screen:

```text
+20% Rending on Ranged Critical Strike.
```

## English comparison

The independently read English agrees with the ranged critical-strike conditions and 20% Rending. Direct application, the armour-stage formula and conditional Carapace examples are supplementary. No explicit English contradiction is established.

## Icon source

[Original image](https://gameslantern.com/storage/sites/darktide/exporter/talents/adamant/default/adamant_crits_rend.webp) | [Media-Assets Issue](https://github.com/SyuanTsai/Media-Assets/issues/11#issuecomment-5932563852) | [Existing attachment](https://github.com/user-attachments/assets/e650aa60-14d1-446d-9fa3-fed8dd633716). The icon identifies the talent; it is not mechanism evidence.
