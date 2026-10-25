# Duck and Dive: source evidence

[繁體中文](../veteran_dodging_grants_stamina.md) | [Player description](README.md#veteran_dodging_grants_stamina) | [Technical index](SOURCE_INDEX.md) | [Original English comparison](LOCALIZATION_COMPARISON.md#veteran_dodging_grants_stamina)

## Identity and mechanism

- Release 1.13.1, fixed SHA `7e662fcda16219d775b84af50322be2e9cd9d62e`. One-point passive talent `veteran_dodging_grants_stamina`; installs veteran_stamina_on_ranged_dodges. The description export’s [Narrative] suffix is metadata, excluded from raw description text. [One-point node](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/ui/views/talent_builder_view/layouts/veteran_tree.lua#L1580-L1604); [Talent and display values](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/veteran_talents.lua#L1750-L1771).
- Exact English name key `loc_talent_ranger_stamina_on_ranged_dodge`, hash `fede6efe`: **Duck and Dive**. Description key `loc_talent_veteran_stamina_on_ranged_dodge_movement_speed_desc`, hash `76c89d3d`.
- Original English: Steam Build `25606770`, extracted 2026-10-02, resource `content/localization/ui`, resource hash `63564edcb7c3c5ee`, locale `en` (code `0`). UI JSONL SHA-256: `fb54bb69880e08b3a6e1c359bd970ed2416748bf5513d45c4b8a39c545e8c668`.

- movement_speed=0.05 is in stat_buffs and applies continuously while the talent is present. It is not a temporary bonus obtained after dodging. [Passive speed, ranged-dodge recovery and cooldown](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/veteran_buff_templates.lua#L1935-L1948); [Movement speed and Stamina recovery settings](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/talent/talent_settings_veteran.lua#L151-L154).
- on_ranged_dodge restores stamina_percent=0.3, with cooldown_duration=3. The action must produce the successful ranged-dodge event; simply pressing a movement key does not itself qualify. Stamina.add_stamina_percent uses maximum Stamina and caps the resulting amount at the maximum. [Passive speed, ranged-dodge recovery and cooldown](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/veteran_buff_templates.lua#L1935-L1948); [Movement speed and Stamina recovery settings](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/talent/talent_settings_veteran.lua#L151-L154); [Maximum-Stamina fraction and cap](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/attack/stamina.lua#L102-L119).
- The reused dossier establishes the event consumer and recovery, but does not separately trace the event producers for every named Dodging, Sprinting and Sliding route in the English text. Full named-mode coverage remains unconfirmed; the talent definition’s internal name is not substituted for producer evidence.

## Stamina recovery and movement-speed examples

Assume a qualifying ranged-dodge event outside the 3-second recovery cooldown, maximum Stamina 6 and no other recovery effects; compare enough missing Stamina with current Stamina 5. For speed, use an illustrative starting speed of 5 metres/second and this 5% modifier alone. The speed example does not establish a universal base movement speed. [Passive speed, ranged-dodge recovery and cooldown](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/veteran_buff_templates.lua#L1935-L1948); [Movement speed and Stamina recovery settings](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/talent/talent_settings_veteran.lua#L151-L154); [Maximum-Stamina fraction and cap](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/attack/stamina.lua#L102-L119).

| Assumptions | Substitution and result | Player meaning |
|---|---|---|
| Maximum Stamina 6; qualifying event outside cooldown | Base recovery `6 × 0.3 = 1.8 Stamina points`; at current Stamina 5, actual recovery `min(1.8, 6 − 5) = 1`. | Recovery restores Stamina rather than changing the movement action’s cost, and cannot overfill. |
| Illustrative starting movement speed 5 metres/s; talent modifier only | `5 × (1 + 0.05) = 5.25 metres/s`. | The 5% speed bonus is continuous; the starting value is hypothetical. |

## Original English template and reconstruction

Full raw template, hash `76c89d3d`:

```text
{movement_speed:%s} Movement Speed. {stamina:%s} Stamina on avoiding Ranged Attacks by Dodging, Sprinting or Sliding.
```

| Parameter | Definition and formatting | Reconstructed value |
|---|---|---|
| `movement_speed` | talent_settings_2.defensive_2.movement_speed=0.05; percentage formatting with + prefix | `+5%` |
| `stamina` | talent_settings_2.defensive_2.stamina_percent=0.3; percentage formatting with + prefix | `+30%` |

[Talent and display values](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/veteran_talents.lua#L1750-L1771); [Movement speed and Stamina recovery settings](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/talent/talent_settings_veteran.lua#L151-L154); [Percentage formatting](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/ui/views/talent_builder_view/utilities/talent_layout_parser.lua#L379-L404).

Static plain-text reconstruction:

```text
+5% Movement Speed. +30% Stamina on avoiding Ranged Attacks by Dodging, Sprinting or Sliding.
```

Runtime color markup is excluded; this is not an observed game screen. The +5% movement speed, continuous speed effect and +30% Stamina recovery agree with accepted evidence. The 3-second recovery cooldown and maximum-Stamina basis/cap are not described. Full event-producer coverage for the three named movement modes is Cannot confirm within the reused evidence. The Chinese-only Stamina-cost translation error is not present in English. No explicit English contradiction or English erratum is supported.

## Limits

The accepted evidence establishes on_ranged_dodge recovery, but does not separately trace all English-named Dodging, Sprinting and Sliding producer paths. Those paths and in-game outcomes remain unconfirmed. Recovery requires a qualifying avoidance event outside cooldown and is capped; the movement-speed example assumes an illustrative base value.

## Icon source

[Original image](https://gameslantern.com/storage/sites/darktide/exporter/talents/veteran/default/veteran_dodging_grants_stamina.webp) | [Media-Assets Issue](https://github.com/SyuanTsai/Media-Assets/issues/6#issuecomment-5922929234) | [Issue attachment](https://github.com/user-attachments/assets/8567315b-bea7-4be4-aaec-22d7096945a9)

The icon identifies the talent; it is not mechanism evidence.
