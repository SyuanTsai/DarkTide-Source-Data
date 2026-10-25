# Field Improvisation: source evidence

[繁體中文](../veteran_better_deployables.md) | [Player description](README.md#veteran_better_deployables) | [Technical index](SOURCE_INDEX.md) | [Original English comparison](LOCALIZATION_COMPARISON.md#veteran_better_deployables)

## Identity and mechanism

- Release 1.13.1, fixed SHA `7e662fcda16219d775b84af50322be2e9cd9d62e`. One-point passive talent `veteran_better_deployables`; provides improved_medical_crate and improved_ammo_pickups keywords. [One-point node](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/ui/views/talent_builder_view/layouts/veteran_tree.lua#L1142-L1172); [Talent and display values](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/veteran_talents.lua#L1967-L1987); [Deployable keywords](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/veteran_buff_templates.lua#L2379-L2386).
- Exact English name key `loc_talent_veteran_better_deployables`, hash `3c20f6f5`: **Field Improvisation**. Description key `loc_talent_veteran_better_deployables_description`, hash `2e81989a`.
- Original English: Steam Build `25606770`, extracted 2026-10-02, resource `content/localization/ui`, resource hash `63564edcb7c3c5ee`, locale `en` (code `0`). UI JSONL SHA-256: `fb54bb69880e08b3a6e1c359bd970ed2416748bf5513d45c4b8a39c545e8c668`.

- Ammo-crate interaction checks all side.player_units for the improved-ammo keyword. It does not require the talent holder to have placed the crate or to be in Coherency. Eligible grenade supplies refill to their limit; the grenade-pickup special rule can exclude a class. [Team keyword check and grenade replenishment](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/interaction/interactions/ammunition_interaction.lua#L99-L146); [Grenade-pickup special rule](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/interaction/interactions/ammunition_interaction.lua#L73-L83); [Ammo crate pickup properties](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/pickup/pickups/deployable/ammo_cache_deployable_pickup.lua#L3-L23).
- Medical-crate initialization checks the team keyword and caches the result. Improved settings are heal_multiplier=2, permanent_damage_multiplier=0.5 and toughness_percentage_per_second=0.01. Medical-crate radius remains 3 metres, base heal_rate=0.06, reserve=500 and lifetime=300 seconds. The talent does not enlarge those base limits. Downed healing additionally uses a 0.1 speed multiplier. [Medical crate team keyword cache](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/proximity/side_relation_gameplay_logic/proximity_heal.lua#L30-L54); [Improved medical crate settings](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/buff_settings.lua#L1080-L1085); [Healing, Toughness and downed multiplier](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/proximity/side_relation_gameplay_logic/proximity_heal.lua#L99-L141); [Medical crate radius, reserve and lifetime](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/deployables/templates/medical_crate.lua#L4-L19).
- Corruption reduction through reduce_permanent_damage retains the fixed floor from already lost wounds. The effect can remove eligible Corruption but cannot restore an already lost full health segment. [Lost-wound Corruption floor](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/health/player_unit_health_extension.lua#L270-L286); [Healing, Toughness and downed multiplier](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/proximity/side_relation_gameplay_logic/proximity_heal.lua#L99-L141).

## Supply and recovery examples

Assume an eligible grenade loadout with capacity 4 and 1 remaining; a non-downed recipient with maximum Health 200, sufficient missing Health and removable Corruption, no other healing modifiers, and a medical crate with reserve/time remaining; and maximum Toughness 150 with enough missing Toughness. The Corruption result remains subject to the lost-wound floor, and all recovery is capped by the recipient’s limits. [Team keyword check and grenade replenishment](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/interaction/interactions/ammunition_interaction.lua#L99-L146); [Grenade-pickup special rule](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/interaction/interactions/ammunition_interaction.lua#L73-L83); [Improved medical crate settings](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/buff_settings.lua#L1080-L1085); [Healing, Toughness and downed multiplier](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/proximity/side_relation_gameplay_logic/proximity_heal.lua#L99-L141); [Lost-wound Corruption floor](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/health/player_unit_health_extension.lua#L270-L286).

| Assumptions | Substitution and result | Player meaning |
|---|---|---|
| Eligible grenade capacity 4, current supply 1 | `4 − 1 = 3 Grenades` replenished. | An eligible ammo-crate use refills the missing supply. |
| Maximum Health 200; non-downed; no other healing modifiers | Base `200 × 0.06 = 12 Health/s`; improved `200 × 0.06 × 2 = 24 Health/s`; eligible Corruption reduction `24 × 0.5 = 12 Health/s`. | Healing is 100% faster. Corruption reduction is limited by the lost-wound floor; the assumed full rate requires enough missing Health and removable Corruption. |
| Maximum Toughness 150; enough missing Toughness | `150 × 0.01 = 1.5 Toughness/s`. | The 1% rate uses maximum Toughness, with recovery capped at the maximum. |

## Original English template and reconstruction

Full raw template, hash `2e81989a`:

```text
Ammo Crates also restore Grenades.
Medi-Packs Heal {damage_heal:%s} faster, cleanse Corruption & Replenish {toughness:%s} Toughness per second.
```

| Parameter | Definition and formatting | Reconstructed value |
|---|---|---|
| `damage_heal` | improved_medical_crate.heal_multiplier − 1 = 2 − 1 = 1; percentage formatting with + prefix | `+100%` |
| `toughness` | improved_medical_crate.toughness_percentage_per_second=0.01; percentage formatting without sign prefix | `1%` |

[Talent and display values](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/veteran_talents.lua#L1967-L1987); [Improved medical crate settings](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/buff_settings.lua#L1080-L1085); [Percentage formatting](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/ui/views/talent_builder_view/utilities/talent_layout_parser.lua#L379-L404).

Static plain-text reconstruction:

```text
Ammo Crates also restore Grenades.
Medi-Packs Heal +100% faster, cleanse Corruption & Replenish 1% Toughness per second.
```

Runtime color markup is excluded; this is not an observed game screen. The grenade restoration, +100% healing speed, eligible Corruption cleansing and 1% Toughness per second match the accepted behavior. Team-wide crate eligibility, the grenade-pickup exclusion, the lost-wound floor, unchanged crate limits and the downed healing multiplier are not described. No explicit English contradiction or English erratum is supported.

## Limits

Static recovery examples are not in-game measurements. Grenade-pickup exclusions, missing resources, lost-wound Corruption floors and remaining crate reserve/time limit actual recovery. Medical-crate initialization caches the team keyword; behavior after live loadout changes is not established here.

## Icon source

[Original image](https://gameslantern.com/storage/sites/darktide/exporter/talents/veteran/default/veteran_better_deployables.webp) | [Media-Assets Issue](https://github.com/SyuanTsai/Media-Assets/issues/6#issuecomment-5922929234) | [Issue attachment](https://github.com/user-attachments/assets/aba3bef3-ec36-4b94-8097-95a2f43d593e)

The icon identifies the talent; it is not mechanism evidence.
