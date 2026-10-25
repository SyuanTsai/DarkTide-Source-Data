# Voltaic Motivator: source evidence

[繁體中文](../cryptic_discharge_attack_speed_increase.md) | [Player description](README.md#cryptic_discharge_attack_speed_increase) | [Technical index](SOURCE_INDEX.md) | [English comparison](LOCALIZATION_COMPARISON.md#cryptic_discharge_attack_speed_increase)

Release 1.13.1; fixed SHA `7e662fcda16219d775b84af50322be2e9cd9d62e`. Talent `cryptic_discharge_attack_speed_increase`; name key `loc_talent_cryptic_discharge_two_charge_bonus`; description key `loc_talent_cryptic_discharge_attack_speed_bonus_desc`. Node `node_1ce53612-4ce0-40b6-8769-abcae20328b9`; category Ability; one point. Mechanisms and examples reuse verified source evidence; no in-game test was performed.

## Source-confirmed behavior and static derivation

- For the non-base Discharge version, when the talent special rule is selected, the action adds the Attack Speed buff on every use and sets its lerp value to charges consumed / maximum charges. The execution condition does not use `num_charges_used_required = 2` as a threshold.
- The buff has fixed `stat_buffs.attack_speed = 0.05` and also interpolates from 0 to (0.05 × 3), giving 0.05 × n according to the charges consumed. The total is 0.05 + 0.05n, lasting 15s.
- The display map's `charge = 2` comes from `num_charges_used_required`, but neither the action nor the buff reads this field as a trigger threshold. The fixed-version execution code also applies the base bonus when one charge is consumed. Text and source both correspond to 1.13.1; actual behavior remains unobserved in game.
- Neither the local Traditional Chinese nor the English template states an at-least-two-charge threshold. The unused `format_values.charge = 2` does not establish such a restriction in the current player description.

## Fixed source evidence

- [scripts/settings/ability/archetype_talents/talents/cryptic_talents.lua — L162-L194](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/cryptic_talents.lua#L162-L194)
- [scripts/settings/talent/talent_settings_cryptic.lua — L82-L89](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/talent/talent_settings_cryptic.lua#L82-L89)
- [scripts/extension_systems/ability/actions/action_cryptic_discharge.lua — L101-L105](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/ability/actions/action_cryptic_discharge.lua#L101-L105)
- [scripts/settings/buff/archetype_buff_templates/cryptic_buff_templates.lua — L846-L864](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/cryptic_buff_templates.lua#L846-L864)
- [scripts/utilities/action/action_handler.lua — L402-L423](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/action/action_handler.lua#L402-L423)
- [scripts/settings/ability/archetype_talents/talents/cryptic_talents.lua — L162-L194](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/cryptic_talents.lua#L162-L194)
- [scripts/ui/views/talent_builder_view/layouts/cryptic_tree.lua — L1055-L1077](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/ui/views/talent_builder_view/layouts/cryptic_tree.lua#L1055-L1077)

## Example assumptions and limits

- **How it works**: Using Voltaic Emitter grants +5% Attack Speed, plus another +5% per full charge of Capacitance consumed, for 15s.
- **Attack Speed example**: Consuming 1, 2 or 3 charges gives a total of +10%, +15% or +20%, respectively. If an affected attack action originally takes 1s, consuming 3 charges changes it to 1 ÷ 1.20 ≈ 0.833s.

- The proportional example assumes this talent scales normally with charges consumed. If another effect forces the action to treat the use as consuming 3 charges, the action uses 3 for the bonus calculation.
- The fixed-version code applies the bonus even with one charge. The display map's two-charge field is not used in the execution condition or current English template. Any difference in actual presentation requires same-version in-game observation; it is not established by the unused field alone.

Mechanisms reuse the fixed-version evidence, with local Build 25606770 English text corresponding to 1.13.1. Actual presentation and behavior remain unobserved in game. Missing details are supplementary explanations.

<a id="original-english-template-and-reconstruction"></a>

## Original English template and reconstruction

Steam Build `25606770`; `content/localization/ui`, resource hash `63564edcb7c3c5ee`; language `en` (code `0`).

- Name key `loc_talent_cryptic_discharge_two_charge_bonus`, hash `3b37ff32`, entry 3849: **Voltaic Motivator**.
- Description key `loc_talent_cryptic_discharge_attack_speed_bonus_desc`, hash `204600f6`, entry 2102.

Full raw template:

~~~text
When using {talent_name:%s} gain {attack_speed:%s} Attack Speed plus an additional {attack_speed_per_charge:%s} per Charge spent for {duration:%s}s.
~~~

| Placeholder | Value | Formatting |
|---|---|---|
| `{talent_name:%s}` | Voltaic Emitter | `loc_string`; `loc_talent_cryptic_discharge` |
| `{attack_speed:%s}` | 0.05 → +5% | `percentage`; explicit + prefix |
| `{attack_speed_per_charge:%s}` | 0.05 → +5% | `percentage`; explicit + prefix |
| `{duration:%s}` | 15 | `number`; s supplied by template |

The minimally read display map is `cryptic_talents.lua` L162-L194. The ability name uses `loc_talent_cryptic_discharge` (hash `0c5b9c4a`, English entry 793). The verified `two_charge_bonus` settings supply `attack_speed = 0.05`, `attack_speed_per_charge = 0.05` and `duration = 15`. The map also supplies `charge` from `num_charges_used_required = 2`, but this template has no charge placeholder; that unused value is not inserted.

Static reconstruction; not an observed game screen:

~~~text
When using Voltaic Emitter gain +5% Attack Speed plus an additional +5% per Charge spent for 15s.
~~~

## English comparison

The original English gives +5% base Attack Speed plus +5% per charge for 15s, agreeing with the accepted formula and duration. It contains no two-charge trigger threshold. Non-base-version execution, full-charge counting, forced-three-charge treatment and the action-time example are supplementary details.

## Icon source

[Original image](https://gameslantern.com/storage/sites/darktide/exporter/talents/cryptic/ability_modifier/cryptic_discharge_attack_speed_increase.webp) | [Media-Assets Issue](https://github.com/SyuanTsai/Media-Assets/issues/13#issuecomment-5935640756) | [Existing attachment](https://github.com/user-attachments/assets/b74a0dba-64ed-40b6-b630-792c413387cd). The icon identifies the talent; it is not mechanism evidence.
