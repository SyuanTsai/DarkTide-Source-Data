# Out of Pocket: source evidence

[繁體中文](../zealot_reload_from_melee.md) | [Player description](README.md#zealot_reload_from_melee) | [Technical index](SOURCE_INDEX.md) | [English comparison](LOCALIZATION_COMPARISON.md#zealot_reload_from_melee)

Release 1.13.1; fixed SHA `7e662fcda16219d775b84af50322be2e9cd9d62e`. Talent `zealot_reload_from_melee`; name key `loc_talent_zealot_reload_from_backstab`; description key `loc_talent_zealot_reload_from_melee_desc`. Node `node_ce599414-0b4e-4aae-b521-ef5f375e1b74`; category Skill; one point. Mechanisms and examples reuse verified source evidence; no in-game test was performed.

## Source-confirmed behavior and static derivation

- After `on_melee_kill`, `missing_ammo_in_clips × 0.1` is added to `ammo_pool`. The floored amount is passed to `transfer_from_reserve_to_clip`, and that floored amount is deducted rather than the amount actually transferred. Therefore, insufficient reserves do not retain the untransferred whole-round credit.
- Shared Ammo modes `free_ammunition_transfer` and `infinite_ammo` are exceptions to the ordinary finite-reserve examples.
- The same-hash English explicitly says `from your Reserve`; the verified Chinese text reverses the transfer direction by naming reserves as the replenished resource. This is the existing Chinese translation error.

## Fixed source evidence

- [scripts/settings/buff/archetype_buff_templates/zealot_buff_templates.lua — L4681-L4720](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/zealot_buff_templates.lua#L4681-L4720)
- [scripts/settings/talent/talent_settings_zealot.lua — L233-L235](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/talent/talent_settings_zealot.lua#L233-L235)
- [scripts/utilities/ammo.lua — L202-L217](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/ammo.lua#L202-L217)
- [scripts/utilities/ammo.lua — L452-L465](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/ammo.lua#L452-L465)
- [scripts/settings/ability/archetype_talents/talents/zealot_talents.lua — L3184-L3198](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/zealot_talents.lua#L3184-L3198)
- [scripts/ui/views/talent_builder_view/layouts/zealot_tree.lua — L2037-L2059](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/ui/views/talent_builder_view/layouts/zealot_tree.lua#L2037-L2059)

## Example assumptions and limits

- **How it works:** each Melee Kill transfers 10% of the ammunition currently missing from the magazine from your reserves. It does not create extra total ammunition or replenish reserves.
- **Reload example:** magazine capacity 30 with 10 rounds leaves 20 missing. A kill transfers 20 × 10% = 2 rounds from reserves, giving 12 rounds. Next, 18 are missing: 1.8 rounds are credited, 1 is transferred this time, and the remaining 0.8 carries over to later kills.
- **Limits:** a full magazine adds no new credit. Normally, no reserves means no transfer; insufficient reserves limit the transfer to the amount available.

#### Original Traditional Chinese correction

- The original Chinese says it restores missing ammunition reserves. The effect instead consumes reserves to refill the magazine, without increasing reserves or total ammunition.

- The original game text uses the 1.13.1 / Steam Build 25606770 `ui` resource. Differences between description and implementation still require an in-game check.
- The existing Chinese correction for hash `730a8c75` is retained: English identifies reserves as the source, and `transfer_from_reserve_to_clip` confirms transfer from reserves into the magazine. It is not an English erratum.

Mechanisms reuse the fixed-version evidence, with local Build 25606770 English text corresponding to 1.13.1. Actual presentation and behavior remain unobserved in game. Missing details are supplementary explanations.

<a id="original-english-template-and-reconstruction"></a>

## Original English template and reconstruction

Steam Build `25606770`; `content/localization/ui`, resource hash `63564edcb7c3c5ee`; language `en` (code `0`).

- Name key `loc_talent_zealot_reload_from_backstab`, hash `de287263`, entry 14405: **Out of Pocket**.
- Description key `loc_talent_zealot_reload_from_melee_desc`, hash `730a8c75`, entry 7480.

Full raw template:

~~~text
Melee Kills replenish {ammo:%s} of your Missing Ammo from your Reserve.
~~~

| Placeholder | Value | Formatting |
|---|---|---|
| `ammo` | `0.1` | `percentage`: `10%` |

The display mapping uses `talent_settings.zealot_reload_from_melee.ammo`. The name key retains `reload_from_backstab`, while the current description and accepted trigger are Melee Kills.

Static reconstruction; not an observed game screen:

~~~text
Melee Kills replenish 10% of your Missing Ammo from your Reserve.
~~~

## English comparison

The English independently agrees with Melee Kills replenishing missing ammunition from reserves. It does not claim to replenish reserves. The magazine basis, fractional pool, rounding, insufficient-reserve loss of whole credit and special Ammo modes are supplements; no explicit English contradiction was found. The separate Chinese direction error is preserved above.

## Icon source

[Original image](https://gameslantern.com/storage/sites/darktide/exporter/talents/zealot/default/zealot_reload_from_melee.webp) | [Media-Assets Issue](https://github.com/SyuanTsai/Media-Assets/issues/8#issuecomment-5929296872) | [Existing attachment](https://github.com/user-attachments/assets/e1dda6ab-d49e-4d08-bd44-f684dae4913f). The icon identifies the talent; it is not mechanism evidence.
