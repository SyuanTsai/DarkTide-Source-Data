# Anarchist: source evidence

[繁體中文](../broker_coherency_anarchist.md) | [Player description](README.md#broker_coherency_anarchist) | [Technical index](SOURCE_INDEX.md) | [English comparison](LOCALIZATION_COMPARISON.md#broker_coherency_anarchist)

Release 1.13.1; fixed SHA `7e662fcda16219d775b84af50322be2e9cd9d62e`. Talent `broker_coherency_anarchist`; name key `loc_talent_broker_aura_anarchist`; description key `loc_talent_broker_aura_anarchist_desc`. Node `node_821e29e2-e6df-445f-817d-2f2d5c79c617`; category Aura; one point. Mechanisms and examples reuse verified source evidence; no in-game test was performed.

## Source-confirmed behavior and static derivation

- Anarchist provides `critical_strike_chance = 0.05`, with a maximum of one stack and duplicate removal by `coherency_id`. Critical Chance bonuses add.

## Fixed source evidence

- [scripts/settings/talent/talent_settings_broker.lua — L206-L214](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/talent/talent_settings_broker.lua#L206-L214)
- [scripts/extension_systems/coherency/unit_coherency_extension.lua — L260-L309](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/coherency/unit_coherency_extension.lua#L260-L309)
- [scripts/utilities/attack/critical_strike.lua — L13-L39](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/attack/critical_strike.lua#L13-L39)
- [scripts/settings/talent/talent_settings_broker.lua — L206-L215](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/talent/talent_settings_broker.lua#L206-L215)
- [scripts/settings/buff/archetype_buff_templates/broker_buff_templates.lua — L902-L916](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/broker_buff_templates.lua#L902-L916)
- [scripts/settings/ability/archetype_talents/talents/broker_talents.lua — L821-L838](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/broker_talents.lua#L821-L838)
- [scripts/ui/views/talent_builder_view/layouts/broker_tree.lua — L407-L433](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/ui/views/talent_builder_view/layouts/broker_tree.lua#L407-L433)

## Example assumptions and limits

- **Recipients:** you and allies in Coherency gain additional Critical Chance. The same Aura does not apply multiple times.

- **Chance example:** an initial 10% becomes 10% + 5% = 15%; an initial 25% becomes 30%.

Mechanisms reuse the fixed-version evidence, with local Build 25606770 English text corresponding to 1.13.1. Actual presentation and behavior remain unobserved in game. Missing details are supplementary explanations.

<a id="original-english-template-and-reconstruction"></a>

## Original English template and reconstruction

Steam Build `25606770`; `content/localization/ui`, resource hash `63564edcb7c3c5ee`; language `en` (code `0`).

- Name key `loc_talent_broker_aura_anarchist`, hash `9337fdef`, entry 9522: **Anarchist**.
- Description key `loc_talent_broker_aura_anarchist_desc`, hash `d1ab227e`, entry 13535.

Full raw template:

~~~text
{critical_chance:%s} Critical Chance for you and allies in Coherency.
~~~

| Placeholder | Value | Formatting |
|---|---|---|
| `critical_chance` | `talent_settings.coherency.anarchist.critical_strike_chance = 0.05` | Percentage with explicit plus prefix → `+5%` |

Display mapping: [broker_talents.lua L826–832](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/broker_talents.lua#L826-L832). The accepted value and shared percentage formatter are reused.

Static reconstruction; not an observed game screen:

~~~text
+5% Critical Chance for you and allies in Coherency.
~~~

## English comparison

English identifies +5% Critical Chance for self and Coherency allies, matching the existing evidence. Addition in percentage points and duplicate prevention are supplementary calculation details.

## Icon source

[Original image](https://gameslantern.com/storage/sites/darktide/exporter/talents/broker/aura/broker_coherency_anarchist.webp) | [Media-Assets Issue](https://github.com/SyuanTsai/Media-Assets/issues/12#issuecomment-5933978534) | [Existing attachment](https://github.com/user-attachments/assets/213537c0-9bdc-49a7-9b60-67aaeb58f395). The icon identifies the talent; it is not mechanism evidence.
