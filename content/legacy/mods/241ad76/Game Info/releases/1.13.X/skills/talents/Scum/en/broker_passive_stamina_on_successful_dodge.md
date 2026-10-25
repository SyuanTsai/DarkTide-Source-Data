# Regained Posture: source evidence

[繁體中文](../broker_passive_stamina_on_successful_dodge.md) | [Player description](README.md#broker_passive_stamina_on_successful_dodge) | [Technical index](SOURCE_INDEX.md) | [English comparison](LOCALIZATION_COMPARISON.md#broker_passive_stamina_on_successful_dodge)

Release 1.13.1; fixed SHA `7e662fcda16219d775b84af50322be2e9cd9d62e`. Talent `broker_passive_stamina_on_successful_dodge`; name key `loc_talent_broker_passive_stamina_on_successful_dodge`; description key `loc_talent_broker_passive_stamina_on_successful_dodge_desc`. Node `node_763f2b5b-964d-42a3-b4d7-4fca89c0e311`; category Talent; one point. Mechanisms and examples reuse verified source evidence; no in-game test was performed.

## Source-confirmed behavior and static derivation

- `on_successful_dodge` calls `Stamina.add_stamina(percentage = 0.1)`. The amount uses maximum Stamina determined by the current weapon and properties.

## Fixed source evidence

- [scripts/utilities/attack/stamina.lua — L102-L119](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/attack/stamina.lua#L102-L119)
- [scripts/utilities/attack/stamina.lua — L151-L174](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/attack/stamina.lua#L151-L174)
- [scripts/settings/talent/talent_settings_broker.lua — L340-L342](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/talent/talent_settings_broker.lua#L340-L342)
- [scripts/settings/buff/archetype_buff_templates/broker_buff_templates.lua — L1797-L1811](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/broker_buff_templates.lua#L1797-L1811)
- [scripts/settings/ability/archetype_talents/talents/broker_talents.lua — L1050-L1065](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/broker_talents.lua#L1050-L1065)
- [scripts/ui/views/talent_builder_view/layouts/broker_tree.lua — L462-L489](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/ui/views/talent_builder_view/layouts/broker_tree.lua#L462-L489)

## Example assumptions and limits

- **Recovery**: each Successful Dodge restores 10% of maximum Stamina, without exceeding the Stamina cap.
- **Recovery example**: at 5 maximum Stamina, each trigger restores 5 × 10% = 0.5 points. At 4.8 current Stamina, it restores only 0.2 points.

The recovery example uses the current maximum Stamina and caps actual recovery at the deficit. Mechanisms reuse the fixed-version evidence, with local Build 25606770 English text corresponding to 1.13.1. Actual presentation and behavior remain unobserved in game. Missing details are supplementary explanations.

<a id="original-english-template-and-reconstruction"></a>

## Original English template and reconstruction

Steam Build `25606770`; `content/localization/ui`, resource hash `63564edcb7c3c5ee`; language `en` (code `0`).

- Name key `loc_talent_broker_passive_stamina_on_successful_dodge`, hash `296a3ab9`, entry 2688: **Regained Posture**.
- Description key `loc_talent_broker_passive_stamina_on_successful_dodge_desc`, hash `022ffbe4`, entry 138.

Full raw template:

~~~text
{stamina:%s} Stamina on Successful Dodge.
~~~

| Placeholder | Value | Formatting |
|---|---|---|
| `{stamina:%s}` | `talent_settings.broker_passive_stamina_on_successful_dodge.stamina = 0.1` → `+10%` | `percentage`; prefix `+` |

The existing display mapping at `broker_talents.lua` L1054-L1060 reads the talent's `stamina` setting. The verified value 0.1 is reused.

Static reconstruction; not an observed game screen:

~~~text
+10% Stamina on Successful Dodge.
~~~

## English comparison

The English's Successful Dodge trigger and +10% Stamina agree with the accepted evidence. The current-weapon/property basis for maximum Stamina and the deficit cap are supplements.

## Icon source

[Original image](https://gameslantern.com/storage/sites/darktide/exporter/talents/broker/default/broker_passive_stamina_on_successful_dodge.webp) | [Media-Assets Issue](https://github.com/SyuanTsai/Media-Assets/issues/12#issuecomment-5933987866) | [Existing attachment](https://github.com/user-attachments/assets/31e809e4-4465-4dde-9719-1f66f8face02). The icon identifies the talent; it is not mechanism evidence.
