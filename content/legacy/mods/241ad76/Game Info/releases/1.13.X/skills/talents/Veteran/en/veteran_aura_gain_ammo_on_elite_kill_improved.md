# Survivalist: source evidence

[繁體中文](../veteran_aura_gain_ammo_on_elite_kill_improved.md) | [Player description](README.md#veteran_aura_gain_ammo_on_elite_kill_improved) | [Technical index](SOURCE_INDEX.md) | [Original English comparison](LOCALIZATION_COMPARISON.md#veteran_aura_gain_ammo_on_elite_kill_improved)

## Identity and mechanism

- Release 1.13.1, fixed SHA `7e662fcda16219d775b84af50322be2e9cd9d62e`. One-point Aura talent `veteran_aura_gain_ammo_on_elite_kill_improved`. [One-point Aura node](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/ui/views/talent_builder_view/layouts/veteran_tree.lua#L1497-L1523); [Talent, display fields and selected aura](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/veteran_talents.lua#L667-L695).
- Exact English name key `loc_talent_veteran_elite_kills_grant_ammo_coop_improved`, hash `828d045a`: **Survivalist**. Description key `loc_talent_veteran_elite_kills_grant_ammo_coop_improved_cd_desc`, hash `c68ffc9a`.
- Original English: Steam Build `25606770`, extracted 2026-10-02, resource `content/localization/ui`, resource hash `63564edcb7c3c5ee`, locale `en` (code `0`). UI JSONL SHA-256: `fb54bb69880e08b3a6e1c359bd970ed2416748bf5513d45c4b8a39c545e8c668`.

- A unit receiving this aura can replenish ammo after that unit kills an Elite or Specialist. The successful payout goes to the killer and their Allies in Coherency, at `0.005` of each recipient's maximum reserve ammo. [Survivalist aura proc](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/veteran_buff_templates.lua#L1542-L1596); [Aura percentages and cooldown](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/talent/talent_settings_veteran.lua#L105-L109); [Coherency membership including owner](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/coherency/coherency_system.lua#L188-L255).
- Each receiving unit has its own proc buff with a 5-second cooldown. The qualifying-death check tests enemy tags; the killer-identity test occurs inside the payout function. The proc wrapper starts cooldown after that function returns, even when the function exits without adding ammo. A qualifying death can therefore consume that unit's aura cooldown without a payout. This does not guarantee that every eligible kill produces another grant. [Survivalist aura proc](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/veteran_buff_templates.lua#L1542-L1596); [Proc call and cooldown start](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/buff/buffs/proc_buff.lua#L311-L354).
- The aura uses `veteran_aura` priority `2`, replacing the owner's priority-`1` Scavenger aura. It raises the selected aura from 0.25% to 0.5%; the two aura percentages do not add. Exact Scavenger name key `loc_talent_veteran_elite_kills_grant_ammo_coop`, hash `b6f9523d`. [Talent, display fields and selected aura](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/veteran_talents.lua#L667-L695); [Base Scavenger aura](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/veteran_talents.lua#L646-L666); [Aura percentages and cooldown](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/talent/talent_settings_veteran.lua#L105-L109); [Aura selection and application](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/coherency/unit_coherency_extension.lua#L256-L311).
- Ammo is added to reserve, not directly to the clip. Per slot, `amount = max_ammo_reserve × percentage + carryover`; the integer part is granted and the fractional remainder is retained. Reserve is capped at `max_ammo_reserve + missing_clip`. [Reserve-based ammo addition and fractional carry](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/ammo.lua#L494-L529).
- The Veteran's separate personal passive grants 1% on their own Elite/Specialist kill, with its own 5-second cooldown. It does not share that 1% with teammates. Its grant and the aura use the same per-slot fractional carry bookkeeping, but separate buff cooldowns. [Independent personal ammo passive](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/veteran_buff_templates.lua#L3529-L3556); [Personal ammo percentage and cooldown](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/talent/talent_settings_veteran.lua#L67-L70); [Reserve-based ammo addition and fractional carry](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/ammo.lua#L494-L529).

## Ammo examples

Assume the named grants succeed with their respective cooldowns ready. Hold maximum reserve ammo fixed, start fractional carry at zero and exclude other grants unless stated. Reserve/clip capacity must allow the indicated amount. These are static calculations, not game measurements. [Reserve-based ammo addition and fractional carry](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/ammo.lua#L494-L529); [Aura percentages and cooldown](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/talent/talent_settings_veteran.lua#L105-L109); [Personal ammo percentage and cooldown](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/talent/talent_settings_veteran.lua#L67-L70).

| Assumptions | Substitution and result | Player meaning |
|---|---|---|
| Maximum reserve 400; one aura payout | `400 × 0.005 = 2 rounds`. | The aura restores two reserve rounds, rather than a fixed 0.5 round or an automatic reload. |
| Maximum reserve 150; four successful aura payouts; no other ammo grant | Each raw grant is `150 × 0.005 = 0.75 round`; integer grants are `0, 1, 1, 1`, totaling `3 rounds`. | The retained fraction accumulates; it is not discarded after each grant. |
| Maximum reserve 400; Veteran personal 1% and aura 0.5% both succeed | Veteran: `400 × (0.01 + 0.005) = 6 rounds`. An ally receiving only the aura: `400 × 0.005 = 2 rounds`. | The Veteran’s combined personal gain is not the team-wide percentage. |
| Maximum reserve 400; clip missing 10; current reserve 409; aura grant 2 | Allowed reserve cap: `400 + 10 = 410`; new reserve: `min(409 + 2, 410) = 410 rounds`. | Only one round fits this cap; reserve ammo is still not loaded into the clip. |

## Original English template and reconstruction

Full raw template, hash `c68ffc9a`:

```text
Replenish {ammo_2:%s} Ammo for you and Allies in Coherency whenever any of you Kill an Elite or Specialist Enemy. This can only occur once every {cooldown:%s}s.

This is an augmented version of {talent_name:%s}.
```

| Parameter | Definition and formatting | Reconstructed value |
|---|---|---|
| `ammo_2` | `ammo_replenishment_percent_improved = 0.005`; percentage formatter | `0.5%` |
| `cooldown` | `cooldown = 5`; number formatter; raw template supplies `s` | `5` |
| `talent_name` | Localized `loc_talent_veteran_elite_kills_grant_ammo_coop` / `b6f9523d` | `Scavenger` |
| `ammo_1` (unused) | `ammo_replenishment_percent = 0.0025`; percentage formatter; not referenced by this raw template | `0.25%` (not inserted) |

[Talent, display fields and selected aura](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/veteran_talents.lua#L667-L695); [Aura percentages and cooldown](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/talent/talent_settings_veteran.lua#L105-L109); [Percentage/number formatting](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/ui/views/talent_builder_view/utilities/talent_layout_parser.lua#L379-L427); [Localized-string formatting](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/ui/views/talent_builder_view/utilities/talent_layout_parser.lua#L426-L428).

Static plain-text reconstruction:

```text
Replenish 0.5% Ammo for you and Allies in Coherency whenever any of you Kill an Elite or Specialist Enemy. This can only occur once every 5s.

This is an augmented version of Scavenger.
```

Runtime color markup is excluded; this is not an observed game screen. The English percentage, eligible enemy classes, Coherency recipients, cooldown and augmented Scavenger identity agree with the established mechanism. Reserve basis, fractional carry, separate personal grants and cooldown-without-payout behavior supplement the description. The Chinese-only rounds-unit error is not an English erratum.

## Limits

Exact team death ordering, receipt of overlapping aura events, weapon-slot behavior and final game UI have not been measured in game. Grants in the examples are conditional on successful payouts and available ammo capacity.

## Icon source

[Original image](https://gameslantern.com/storage/sites/darktide/exporter/talents/veteran/aura/veteran_aura_gain_ammo_on_elite_kill_improved.webp) | [Media-Assets Issue](https://github.com/SyuanTsai/Media-Assets/issues/6#issuecomment-5922929234) | [Issue attachment](https://github.com/user-attachments/assets/c2dffa00-cd24-478f-96c7-4007f4239e6a)

The icon identifies the talent; it is not mechanism evidence.
