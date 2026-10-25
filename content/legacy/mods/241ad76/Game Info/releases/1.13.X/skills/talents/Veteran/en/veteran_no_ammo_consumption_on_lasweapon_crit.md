# Shock Trooper: source evidence

[繁體中文](../veteran_no_ammo_consumption_on_lasweapon_crit.md) | [Player description](README.md#veteran_no_ammo_consumption_on_lasweapon_crit) | [Technical index](SOURCE_INDEX.md) | [Original English comparison](LOCALIZATION_COMPARISON.md#veteran_no_ammo_consumption_on_lasweapon_crit)

## Identity and mechanism

- Release 1.13.1, fixed SHA `7e662fcda16219d775b84af50322be2e9cd9d62e`. One-point passive talent `veteran_no_ammo_consumption_on_lasweapon_crit`; grants no_ammo_consumption_on_crits while its weapon/ammunition conditions hold. [One-point node](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/ui/views/talent_builder_view/layouts/veteran_tree.lua#L755-L780); [Talent definition](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/veteran_talents.lua#L1628-L1637).
- Exact English name key `loc_talent_veteran_no_ammo_consumption_on_lasweapon_crit`, hash `19d88433`: **Shock Trooper**. Description key `loc_talent_veteran_no_ammo_consumption_on_lasweapon_crit_desc`, hash `db8f86c6`.
- Original English: Steam Build `25606770`, extracted 2026-10-02, resource `content/localization/ui`, resource hash `63564edcb7c3c5ee`, locale `en` (code `0`). UI JSONL SHA-256: `fb54bb69880e08b3a6e1c359bd970ed2416748bf5513d45c4b8a39c545e8c668`.

- The passive requires a wielded slot_secondary weapon, at least one round of clip ammunition and the lasweapon keyword in the weapon template. It then grants no_ammo_consumption_on_crits. Weapon membership comes from that keyword, not its name or appearance. [Held weapon and ammunition conditions](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/veteran_buff_templates.lua#L594-L636).
- For a critical shot with this buff keyword, ActionShoot sets ammo_usage to zero and permits the shot. Noncritical shots retain their configured ammunition cost. Enemy contact is not required; an empty clip cannot fire through this effect. [Critical-shot permission](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/weapon/actions/action_shoot.lua#L255-L300); [Ammo usage and consumption](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/weapon/actions/action_shoot.lua#L481-L522).

## Ammunition cost examples

Use an eligible held Las-weapon. For the ten-shot example, assume a normal cost of one round per shot, exactly three critical shots, enough clip ammunition for all shots and no other ammo-cost effects. The one-round example assumes a critical shot under the same eligibility conditions. [Held weapon and ammunition conditions](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/veteran_buff_templates.lua#L594-L636); [Critical-shot permission](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/weapon/actions/action_shoot.lua#L255-L300); [Ammo usage and consumption](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/weapon/actions/action_shoot.lua#L481-L522).

| Assumptions | Substitution and result | Player meaning |
|---|---|---|
| Ten shots, exactly three critical; normal cost one round | `(10 − 3) × 1 + 3 × 0 = 7 rounds consumed`; compared with 10 rounds normally, 3 rounds are saved. | Only the critical shots waive their ammo cost; this does not predict critical chance. |
| One clip round; critical shot, including a miss | `1 − 0 = 1 round remaining`. At zero clip rounds, the eligibility condition fails and this effect cannot enable a shot. | The talent waives eligible shot cost; it does not refill the clip or permit firing from empty. |

## Original English template and reconstruction

Full raw template, hash `db8f86c6`:

```text
Critical Hits with Las-weapons consume no Ammo.
```

| Parameter | Definition and formatting | Reconstructed value |
|---|---|---|
| None | The exact template has no placeholders or numeric substitution. | Unchanged |

No substitution or numeric formatting is needed; the static plain text is identical to the exact English template.

Static plain-text reconstruction:

```text
Critical Hits with Las-weapons consume no Ammo.
```

Runtime color markup is excluded; this is not an observed game screen. The core critical-shot no-ammunition effect agrees with the accepted behavior. The English does not enumerate the lasweapon keyword, held-slot/clip conditions or noncritical-shot cost. Critical Hits could suggest enemy contact, but the text does not explicitly require it; intended contact-only scope is Cannot confirm, not an established contradiction. No English erratum is supported.

## Limits

Exact game shot/ammunition cases and final game UI have not been measured. Weapon eligibility is determined by the lasweapon keyword; no complete weapon list is claimed. The intended enemy-contact scope of Critical Hits is unresolved by the wording alone.

## Icon source

[Original image](https://gameslantern.com/storage/sites/darktide/exporter/talents/veteran/default/veteran_no_ammo_consumption_on_lasweapon_crit.webp) | [Media-Assets Issue](https://github.com/SyuanTsai/Media-Assets/issues/6#issuecomment-5922922455) | [Issue attachment](https://github.com/user-attachments/assets/cba2a46d-298c-434a-883d-e048f5ede32d)

The icon identifies the talent; it is not mechanism evidence.
