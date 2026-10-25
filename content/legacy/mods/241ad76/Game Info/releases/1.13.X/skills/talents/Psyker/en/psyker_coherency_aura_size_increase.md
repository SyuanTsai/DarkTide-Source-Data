# Puppet Master: source evidence

[繁體中文](../psyker_coherency_aura_size_increase.md) | [Player description](README.md#psyker_coherency_aura_size_increase) | [Technical index](SOURCE_INDEX.md) | [English comparison](LOCALIZATION_COMPARISON.md#psyker_coherency_aura_size_increase)

Release 1.13.1; fixed SHA `7e662fcda16219d775b84af50322be2e9cd9d62e`. Talent `psyker_coherency_aura_size_increase`; name key `loc_talent_psyker_coherency_size_increase`; description key `loc_talent_psyker_coherency_size_increase_description`. Node `node_b2a9dab7-310f-4938-a070-97187d356f75`; category Talent; one point. Mechanisms and examples reuse verified source evidence; no in-game test was performed.

## Source-confirmed behavior and static derivation

- `coherency_radius_modifier = 0.75` is an `additive_multiplier` with a base of `1`.
- `UnitCoherencyExtension.current_radius` uses `radius × modifier × multiplier`.

## Fixed source evidence

- [scripts/settings/buff/archetype_buff_templates/psyker_buff_templates.lua — L1850-L1857](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/psyker_buff_templates.lua#L1850-L1857)
- [scripts/settings/talent/talent_settings_psyker.lua — L43-L45](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/talent/talent_settings_psyker.lua#L43-L45)
- [scripts/extension_systems/coherency/unit_coherency_extension.lua — L144-L161](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/coherency/unit_coherency_extension.lua#L144-L161)
- [scripts/settings/ability/archetype_talents/talents/psyker_talents.lua — L1375-L1397](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/psyker_talents.lua#L1375-L1397)
- [scripts/ui/views/talent_builder_view/layouts/psyker_tree.lua — L1019-L1046](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/ui/views/talent_builder_view/layouts/psyker_tree.lua#L1019-L1046)

## Example assumptions and limits

- **Effect**: increase the Coherency Aura radius by 75%, allowing more distant allies to remain in Coherency.

- **Range example**: with other modifiers unchanged, an original radius of 8 metres becomes 8 × 1.75 = 14 metres. The increase is to radius; when comparing only the area of a flat circle, the area multiplier is 1.75² = 3.0625.

#### Existing Traditional Chinese text correction

- The Traditional Chinese wording says the Aura range becomes {radius_modifier} times the original, mixing a multiplier with a bonus amount. The verified effect increases radius by 75%, making it 1.75 times the original.

Mechanisms reuse the fixed-version evidence, with local Build 25606770 English text corresponding to 1.13.1. Actual presentation and behavior remain unobserved in game. Missing details are supplementary explanations.

<a id="original-english-template-and-reconstruction"></a>

## Original English template and reconstruction

Steam Build `25606770`; `content/localization/ui`, resource hash `63564edcb7c3c5ee`; language `en` (code `0`).

- Name key `loc_talent_psyker_coherency_size_increase`, hash `3d9caf6e`, entry 4017: **Puppet Master**.
- Description key `loc_talent_psyker_coherency_size_increase_description`, hash `5556945e`, entry 5553.

Full raw template:

~~~text
{radius_modifier:%s} Radius for your Coherency Aura.
~~~

| Placeholder | Value | Formatting |
|---|---|---|
| `radius_modifier` | `0.75` additive bonus | percentage, no prefix → `75%` |

[Display mapping](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/psyker_talents.lua#L1380-L1392) selects the verified additive radius modifier and has no `+` prefix. Shared percentage formatting produces `75%`; it does not insert an increase verb or turn this into the final `175%` radius.

Static reconstruction; not an observed game screen:

~~~text
75% Radius for your Coherency Aura.
~~~

## English comparison

The raw English and display mapping identify Radius and the 75% modifier, but the reconstructed sentence has neither “increase” nor a plus sign. The verified effect adds 75% to the radius, yielding 1.75 times the original. Whether the terse English intends a bonus or a final-radius percentage cannot be established from that sentence alone, so it is not recorded as an explicit contradiction. The radius formula and area example supplement the wording; the existing Chinese correction is translated separately.

## Icon source

[Original image](https://gameslantern.com/storage/sites/darktide/exporter/talents/psyker/default/psyker_coherency_aura_size_increase.webp) | [Media-Assets Issue](https://github.com/SyuanTsai/Media-Assets/issues/7#issuecomment-5928034845) | [Existing attachment](https://github.com/user-attachments/assets/1561e519-2633-4a6f-af9f-fffe6a6c8a03). The icon identifies the talent; it is not mechanism evidence.
