# Demolition Team: source evidence

[繁體中文](../veteran_aura_elite_kills_restore_grenade.md) | [Player description](README.md#veteran_aura_elite_kills_restore_grenade) | [Technical index](SOURCE_INDEX.md) | [Original English comparison](LOCALIZATION_COMPARISON.md#veteran_aura_elite_kills_restore_grenade)

## Identity and mechanism

- Release 1.13.1, fixed SHA `7e662fcda16219d775b84af50322be2e9cd9d62e`. One-point passive talent `veteran_aura_elite_kills_restore_grenade`; installs veteran_aura_gain_grenade_on_elite_kill. Its default node is a passive despite aura in the identifier; it is not an equipped Aura selection. [One-point passive node](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/ui/views/talent_builder_view/layouts/veteran_tree.lua#L37-L66); [Talent and display values](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/veteran_talents.lua#L2196-L2211).
- Exact English name key `loc_talent_ranger_grenade_on_elite_kills_coop`, hash `45acd50d`: **Demolition Team**. Description key `loc_talent_veteran_grenade_on_elite_kills_coop_desc`, hash `6839ad59`.
- Original English: Steam Build `25606770`, extracted 2026-10-02, resource `content/localization/ui`, resource hash `63564edcb7c3c5ee`, locale `en` (code `0`). UI JSONL SHA-256: `fb54bb69880e08b3a6e1c359bd970ed2416748bf5513d45c4b8a39c545e8c668`.

- A qualifying kill of an Elite or Specialist rolls a 5% event chance. The killer must belong to the holder's in_coherence_units set, including the holder; an ally outside Coherency does not meet that condition. [Grenade-restoration proc](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/veteran_buff_templates.lua#L2064-L2114); [5% proc chance](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/talent/talent_settings_veteran.lua#L161-L163).
- On a successful proc, restoration is directed only to template_context.unit's ability_extension: the talent holder receives one grenade, subject to the carry limit. The actual recipient is established by the proc rather than the talent.name developer comment. [Grenade-restoration proc](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/veteran_buff_templates.lua#L2064-L2114); [Shared one-grenade restoration amount](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/talent/talent_settings_veteran.lua#L141-L147).
- This passive has no separate proc cooldown. The grenade_replenishment_cooldown field belonging to the shared stockpile settings does not turn this kill-chance passive into a timed grenade-generation effect. Each eligible opportunity remains a chance, with no guaranteed twentieth proc. [Grenade-restoration proc](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/veteran_buff_templates.lua#L2064-L2114); [Shared one-grenade restoration amount](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/talent/talent_settings_veteran.lua#L141-L147).
- The expected number of successful procs across n qualifying opportunities is `n × 0.05`; expected grenades received equal that count only if each success can restore the one grenade. Full capacity limits the actual restoration. [Grenade-restoration proc](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/veteran_buff_templates.lua#L2064-L2114); [5% proc chance](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/talent/talent_settings_veteran.lua#L161-L163).

## Chance and grenade-cap examples

The kill events meet the Elite/Specialist and holder-or-ally-in-Coherency conditions. For the expectation example, assume all 20 events receive their stated 5% chance and each success has space to restore one grenade. The cap example instead assumes one successful proc and a hypothetical four-grenade capacity. These examples are not measured game outcomes. [Grenade-restoration proc](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/veteran_buff_templates.lua#L2064-L2114); [5% proc chance](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/talent/talent_settings_veteran.lua#L161-L163).

| Assumptions | Substitution and result | Player meaning |
|---|---|---|
| 20 qualifying kill opportunities; 5% chance each; space for one grenade at every success | Expected successful procs: `20 × 0.05 = 1`; under the stated capacity assumption, expected restoration is `1 grenade`. | This is an average expectation, not a guaranteed success on the twentieth kill or in any particular sequence. |
| Successful proc; hypothetical capacity 4 grenades, current count 3 | `min(3 + 1, 4) = 4 grenades`. | The holder receives one grenade and reaches the carry limit; teammates do not receive this proc's grenade. |

## Original English template and reconstruction

Full raw template, hash `6839ad59`:

```text
You have a {chance:%s} chance to replenish a Grenade when you or an Ally in Coherency Kills an Elite or Specialist Enemy.
```

| Parameter | Definition and formatting | Reconstructed value |
|---|---|---|
| `chance` | talent_settings_2.coop_2.proc_chance=0.05; percentage conversion ×100 and % suffix; no + prefix | `5%` |

[Talent and display values](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/veteran_talents.lua#L2196-L2211); [5% proc chance](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/talent/talent_settings_veteran.lua#L161-L163); [Percentage formatting](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/ui/views/talent_builder_view/utilities/talent_layout_parser.lua#L379-L404).

Static plain-text reconstruction:

```text
You have a 5% chance to replenish a Grenade when you or an Ally in Coherency Kills an Elite or Specialist Enemy.
```

Runtime color markup is excluded; this is not an observed game screen. The chance, qualifying killer/enemy conditions and holder-only one-grenade restoration agree with the English. The text does not promise teammate restoration. Carry limits and the absence of a separate cooldown are omitted. No explicit English contradiction or supported English erratum is present.

## Limits

The 20-event expectation assumes that each qualifying opportunity is evaluated and that every successful proc has room to restore one grenade. Actual restoration can be limited by capacity. The four-grenade capacity is an explicit illustrative assumption. Live grenade-loadout changes, random sequences and gameplay outcomes were not measured.

## Icon source

[Original image](https://gameslantern.com/storage/sites/darktide/exporter/talents/veteran/default/veteran_aura_elite_kills_restore_grenade.webp) | [Media-Assets Issue](https://github.com/SyuanTsai/Media-Assets/issues/6#issuecomment-5922922455) | [Issue attachment](https://github.com/user-attachments/assets/3ec21db4-4013-4522-850f-14c583e25ea7)

The icon identifies the talent; it is not mechanism evidence.
