# Withering Fire: source evidence

[繁體中文](../veteran_increased_ranged_cleave.md) | [Player description](README.md#veteran_increased_ranged_cleave) | [Technical index](SOURCE_INDEX.md) | [Original English comparison](LOCALIZATION_COMPARISON.md#veteran_increased_ranged_cleave)

## Identity and mechanism

- Release 1.13.1, fixed SHA `7e662fcda16219d775b84af50322be2e9cd9d62e`. One-point passive talent `veteran_increased_ranged_cleave`; installs the same-named buff. [One-point node](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/ui/views/talent_builder_view/layouts/veteran_tree.lua#L804-L831); [Talent and display value](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/veteran_talents.lua#L3136-L3151).
- Exact English name key `loc_talent_veteran_increased_ranged_cleave`, hash `9a700597`: **Withering Fire**. Description key `loc_talent_veteran_increased_ranged_cleave_desc`, hash `51fc5118`.
- Original English: Steam Build `25606770`, extracted 2026-10-02, resource `content/localization/ui`, resource hash `63564edcb7c3c5ee`, locale `en` (code `0`). UI JSONL SHA-256: `fb54bb69880e08b3a6e1c359bd970ed2416748bf5513d45c4b8a39c545e8c668`.

- The setting cleave=0.5 adds 0.5 to ranged_max_hit_mass_attack_modifier, an additive multiplier with baseline 1. With this talent alone, the attack modifier is 1.5. [Cleave setting](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/talent/talent_settings_veteran.lua#L61-L63); [Ranged attack hit-mass stat](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/veteran_buff_templates.lua#L3522-L3528); [Additive multiplier stat category](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/buff_settings.lua#L951-L957); [Ranged cleave stat fields](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/buff_settings.lua#L1048-L1058).
- damage_profile.max_hit_mass applies this modifier to ranged attack hit mass. An assumed base attack budget of 6 therefore becomes `6 × 1.5 = 9 hit-mass units`. This is an illustrative budget, not a universal weapon base value. [Ranged hit-mass calculation](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/attack/damage_profile.lua#L36-L80).
- The greater budget accommodates more penetration resistance, but enemy hit mass and the weapon/profile still determine the number of targets penetrated. It does not directly increase damage against one target or guarantee 50% more enemies hit. [Ranged hit-mass calculation](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/attack/damage_profile.lua#L36-L80); [Ranged attack hit-mass stat](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/veteran_buff_templates.lua#L3522-L3528).

## Ranged penetration-budget example

Assume a ranged attack with an illustrative base attack hit-mass budget of 6 units, no other hit-mass modifiers and this talent active. The fixed version does not give all weapons a shared base budget of 6. [Cleave setting](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/talent/talent_settings_veteran.lua#L61-L63); [Ranged attack hit-mass stat](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/veteran_buff_templates.lua#L3522-L3528); [Ranged hit-mass calculation](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/attack/damage_profile.lua#L36-L80); [Additive multiplier stat category](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/buff_settings.lua#L951-L957).

| Assumptions | Substitution and result | Player meaning |
|---|---|---|
| Assumed base budget 6 units; talent alone | Modifier `1 + 0.5 = 1.5`; budget `6 × 1.5 = 9 hit-mass units`, an increase of 3 units (50%). | The larger budget handles more penetration resistance; it does not imply exactly 50% more targets or greater single-target damage. |

## Original English template and reconstruction

Full raw template, hash `51fc5118`:

```text
{cleave:%s} Ranged Cleave.
```

| Parameter | Definition and formatting | Reconstructed value |
|---|---|---|
| `cleave` | Read talent setting cleave=0.5; percentage formatter multiplies by 100 with + prefix | `+50%` |

[Talent and display value](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/veteran_talents.lua#L3136-L3151); [Cleave setting](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/talent/talent_settings_veteran.lua#L61-L63); [Percentage formatting](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/ui/views/talent_builder_view/utilities/talent_layout_parser.lua#L379-L404).

Static plain-text reconstruction:

```text
+50% Ranged Cleave.
```

Runtime color markup is excluded; this is not an observed game screen. The +50% Ranged Cleave reconstruction agrees with the 0.5 ranged attack hit-mass modifier. Weapon/profile dependence, additive stat basis, target resistance and the distinction from target count or single-target damage supplement the short text. No English contradiction is supported.

## Limits

Individual game penetration outcomes, weapon/profile-specific budgets and final game UI have not been measured. The 6→9 example uses its stated hypothetical base budget; no universal base value or fixed target-count gain is claimed.

## Icon source

[Original image](https://gameslantern.com/storage/sites/darktide/exporter/talents/veteran/default/veteran_increased_ranged_cleave.webp) | [Media-Assets Issue](https://github.com/SyuanTsai/Media-Assets/issues/6#issuecomment-5922922455) | [Issue attachment](https://github.com/user-attachments/assets/ba2f9f5e-0466-433d-a93d-68b1f9606dd7)

The icon identifies the talent; it is not mechanism evidence.
