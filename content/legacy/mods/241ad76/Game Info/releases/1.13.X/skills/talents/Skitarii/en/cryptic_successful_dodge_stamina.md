# Evasive Servo Recovery: source evidence

[繁體中文](../cryptic_successful_dodge_stamina.md) | [Player description](README.md#cryptic_successful_dodge_stamina) | [Technical index](SOURCE_INDEX.md) | [English comparison](LOCALIZATION_COMPARISON.md#cryptic_successful_dodge_stamina)

Release 1.13.1; fixed SHA `7e662fcda16219d775b84af50322be2e9cd9d62e`. Talent `cryptic_successful_dodge_stamina`; name key `loc_talent_cryptic_successful_dodge_stamina`; description key `loc_talent_cryptic_successful_dodge_stamina_desc`. Node `node_f064bf43-9846-4821-8001-0d4b1fcaa4f2`; category Talent; one point. Mechanisms and examples reuse verified source evidence; no in-game test was performed.

## Source-confirmed behavior and static derivation

- `on_successful_dodge` directly calls `Stamina.add_stamina_percent(unit, 0.1)`. This template has no cooldown or stacks.

## Fixed source evidence

- [scripts/utilities/attack/stamina.lua — L102-L125](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/attack/stamina.lua#L102-L125)
- [scripts/settings/talent/talent_settings_cryptic.lua — L421-L423](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/talent/talent_settings_cryptic.lua#L421-L423)
- [scripts/settings/buff/archetype_buff_templates/cryptic_buff_templates.lua — L2428-L2437](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/cryptic_buff_templates.lua#L2428-L2437)
- [scripts/settings/ability/archetype_talents/talents/cryptic_talents.lua — L1912-L1926](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/cryptic_talents.lua#L1912-L1926)
- [scripts/ui/views/talent_builder_view/layouts/cryptic_tree.lua — L325-L350](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/ui/views/talent_builder_view/layouts/cryptic_tree.lua#L325-L350)

## Example assumptions and limits

- **Trigger**: Successfully dodging an enemy attack immediately restores **10% of maximum Stamina**. Simply pressing dodge without avoiding an attack does not count.
- **Example**: At 5 maximum Stamina bars, each successful dodge restores `5 × 10% = 0.5` bars. At 4.8 current bars, it only restores up to 5.

- The example uses a maximum of 5 Stamina bars: recovery is 0.5 bars per trigger, capped at 5 if the current amount is 4.8.
- The percentage uses maximum Stamina as its denominator. The English trigger and recovery direction agree with the verified mechanism; the denominator and cap are supplementary explanations.
- Actual presentation and behavior remain unobserved in game.

Mechanisms reuse the fixed-version evidence, with local Build 25606770 English text corresponding to 1.13.1. Actual presentation and behavior remain unobserved in game. Missing details are supplementary explanations.

<a id="original-english-template-and-reconstruction"></a>

## Original English template and reconstruction

Steam Build `25606770`; `content/localization/ui`, resource hash `63564edcb7c3c5ee`; language `en` (code `0`).

- Name key `loc_talent_cryptic_successful_dodge_stamina`, hash `3b7e8ada`, entry 3868: **Evasive Servo Recovery**.
- Description key `loc_talent_cryptic_successful_dodge_stamina_desc`, hash `99f3c08d`, entry 9926.

Full raw template:

~~~text
Successful dodges restore {stamina:%s} Stamina.
~~~

| Placeholder | Value | Formatting |
|---|---|---|
| `stamina` | 10% | `percentage`: verified `talent_settings.cryptic_successful_dodge_stamina.stamina_replenished_percent = 0.1`; no prefix |

The display mapping in `cryptic_talents.lua` L1920–L1925 uses the already verified Stamina restoration value.

Static reconstruction; not an observed game screen:

~~~text
Successful dodges restore 10% Stamina.
~~~

## English comparison

The English requires successful dodges and states 10% Stamina restoration, matching the event and recovery direction. It does not specify the maximum-Stamina denominator, immediate application, cap, or absence of a template cooldown and stacks. These are supplementary details; no explicit English contradiction was identified.

## Icon source

[Original image](https://gameslantern.com/storage/sites/darktide/exporter/talents/cryptic/default/cryptic_successful_dodge_stamina.webp) | [Media-Assets Issue](https://github.com/SyuanTsai/Media-Assets/issues/13#issuecomment-5935647528) | [Existing attachment](https://github.com/user-attachments/assets/4738c3e6-2609-414c-9c00-f50fea4dcef3). The icon identifies the talent; it is not mechanism evidence.
