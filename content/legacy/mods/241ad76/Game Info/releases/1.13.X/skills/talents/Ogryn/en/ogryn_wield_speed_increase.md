# Dedicated Practice: source evidence

[繁體中文](../ogryn_wield_speed_increase.md) | [Player description](README.md#ogryn_wield_speed_increase) | [Technical index](SOURCE_INDEX.md) | [English comparison](LOCALIZATION_COMPARISON.md#ogryn_wield_speed_increase)

Release 1.13.1; fixed SHA `7e662fcda16219d775b84af50322be2e9cd9d62e`. Talent `ogryn_wield_speed_increase`; name key `loc_talent_ogryn_wield_speed_increase`; description key `loc_talent_ogryn_wield_speed_increase_desc`. Node `node_cc251802-f60d-41bf-9528-7428fa11391b`; category Talent; one point. Mechanisms and examples reuse verified source evidence; no in-game test was performed.

## Source-confirmed behavior and static derivation

- `wield_speed=0.35`. Depending on `use_wield_speed`, `ActionHandler` adds the stat to `time_scale` and uses `action time / time_scale`.

## Fixed source evidence

- [scripts/settings/buff/archetype_buff_templates/ogryn_buff_templates.lua — L3301-L3307](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/ogryn_buff_templates.lua#L3301-L3307)
- [scripts/settings/talent/talent_settings_ogryn.lua — L134-L136](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/talent/talent_settings_ogryn.lua#L134-L136)
- [scripts/utilities/action/action_handler.lua — L356-L429](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/action/action_handler.lua#L356-L429)
- [scripts/settings/ability/archetype_talents/talents/ogryn_talents.lua — L2538-L2553](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/ogryn_talents.lua#L2538-L2553)
- [scripts/ui/views/talent_builder_view/layouts/ogryn_tree.lua — L2098-L2124](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/ui/views/talent_builder_view/layouts/ogryn_tree.lua#L2098-L2124)

## Example assumptions and limits

- **Effect**: Increase Weapon Swap Speed by 35%, reducing the duration of weapon-draw actions controlled by this speed stat. Reload Speed is not increased.

- **Timing example**: An original 1s action becomes `1 ÷ 1.35 ≈ 0.741s`, approximately 25.9% shorter. It does not become 35% of the original duration or receive a direct 35% duration reduction.

#### Existing Traditional Chinese wording correction

- The Chinese wording “武器切換速度縮短為 +35%” confuses speed with duration. It should mean Weapon Swap Speed increases by 35%; the same action takes approximately 74.1% of its original duration.

Mechanisms reuse the fixed-version evidence, with local Build 25606770 English text corresponding to 1.13.1. Actual presentation and behavior remain unobserved in game. Missing details are supplementary explanations.

<a id="original-english-template-and-reconstruction"></a>

## Original English template and reconstruction

Steam Build `25606770`; `content/localization/ui`, resource hash `63564edcb7c3c5ee`; language `en` (code `0`).

- Name key `loc_talent_ogryn_wield_speed_increase`, hash `b44ee911`, entry 11626: **Dedicated Practice**.
- Description key `loc_talent_ogryn_wield_speed_increase_desc`, hash `6349b08e`, entry 6450.

Full raw template:

~~~text
{wield_speed:%s} Weapon Swap Speed.
~~~

| Placeholder | Value | Formatting |
|---|---|---|
| wield_speed | shared wield_speed = 0.35 | Percentage with explicit + prefix → +35% |

Only the missing display mapping in the cited talent definition, lines 2538–2553, was read. Accepted values, mechanisms and common formatting were reused.

Static reconstruction; not an observed game screen:

~~~text
+35% Weapon Swap Speed.
~~~

## English comparison

The independently read English states +35% Weapon Swap Speed, matching the accepted wield_speed stat. The action-duration reciprocal and lack of a Reload Speed bonus supplement the English. The verified Chinese wording correction is retained separately: its wording confuses increased speed with remaining duration. No explicit English contradiction is established.

## Icon source

[Original image](https://gameslantern.com/storage/sites/darktide/exporter/talents/ogryn/default/ogryn_wield_speed_increase.webp) | [Media-Assets Issue](https://github.com/SyuanTsai/Media-Assets/issues/10#issuecomment-5931394406) | [Existing attachment](https://github.com/user-attachments/assets/5974d1c4-5b31-42b8-af90-022202c4614e). The icon identifies the talent; it is not mechanism evidence.
