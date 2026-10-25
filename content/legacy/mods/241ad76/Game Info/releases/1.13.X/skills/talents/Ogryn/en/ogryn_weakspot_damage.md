# Strike True: source evidence

[繁體中文](../ogryn_weakspot_damage.md) | [Player description](README.md#ogryn_weakspot_damage) | [Technical index](SOURCE_INDEX.md) | [English comparison](LOCALIZATION_COMPARISON.md#ogryn_weakspot_damage)

Release 1.13.1; fixed SHA `7e662fcda16219d775b84af50322be2e9cd9d62e`. Talent `ogryn_weakspot_damage`; name key `loc_talent_ogryn_weakspot_damage`; description key `loc_talent_ogryn_weakspot_damage_desc`. Node `node_82121611-7178-4ee6-827c-3a0b82f36d0e`; category Talent; one point. Mechanisms and examples reuse verified source evidence; no in-game test was performed.

## Source-confirmed behavior and static derivation

- `melee_weakspot_power_modifier=0.1`. `PowerLevel` requires a Weakspot and melee `attack_type`; it adds with general, melee and other power modifiers.

## Fixed source evidence

- [scripts/settings/buff/archetype_buff_templates/ogryn_buff_templates.lua — L3147-L3153](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/ogryn_buff_templates.lua#L3147-L3153)
- [scripts/settings/talent/talent_settings_ogryn.lua — L118-L120](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/talent/talent_settings_ogryn.lua#L118-L120)
- [scripts/utilities/attack/power_level.lua — L25-L61](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/attack/power_level.lua#L25-L61)
- [scripts/utilities/attack/power_level.lua — L63-L91](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/attack/power_level.lua#L63-L91)
- [scripts/settings/ability/archetype_talents/talents/ogryn_talents.lua — L2633-L2648](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/ogryn_talents.lua#L2633-L2648)
- [scripts/ui/views/talent_builder_view/layouts/ogryn_tree.lua — L2225-L2253](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/ui/views/talent_builder_view/layouts/ogryn_tree.lua#L2225-L2253)

## Example assumptions and limits

- **Effect**: A melee hit on an enemy Weakspot increases that attack's Strength by 10%. It does not affect ranged Weakspot hits or melee hits that miss the Weakspot.

- **Strength example**: Original Strength of 500 becomes `500 × 1.1 = 550` on a Weakspot hit. With an existing +20% Strength at the same stage, it becomes `500 × (1 + 20% + 10%) = 650`.

- **Damage calculation**: The bonus applies to Strength before the weapon's damage, Impact and other curves. It differs from effects that only increase additional Weakspot damage; do not assume final damage is always multiplied by 1.1.

Mechanisms reuse the fixed-version evidence, with local Build 25606770 English text corresponding to 1.13.1. Actual presentation and behavior remain unobserved in game. Missing details are supplementary explanations.

<a id="original-english-template-and-reconstruction"></a>

## Original English template and reconstruction

Steam Build `25606770`; `content/localization/ui`, resource hash `63564edcb7c3c5ee`; language `en` (code `0`).

- Name key `loc_talent_ogryn_weakspot_damage`, hash `d427f84f`, entry 13714: **Strike True**.
- Description key `loc_talent_ogryn_weakspot_damage_desc`, hash `658a5b8e`, entry 6610.

Full raw template:

~~~text
{damage:%s} Melee Weakspot Strength
~~~

| Placeholder | Value | Formatting |
|---|---|---|
| damage | shared power = 0.1 | Percentage with explicit + prefix → +10% |

Only the missing display mapping in the cited talent definition, lines 2633–2648, was read. Accepted values, mechanisms and common formatting were reused.

Static reconstruction; not an observed game screen:

~~~text
+10% Melee Weakspot Strength
~~~

## English comparison

The independently read English grants +10% Melee Weakspot Strength, matching the accepted melee_weakspot_power_modifier, hit condition and value. Same-stage addition, ranged/non-Weakspot exclusions and the distinction between Strength and final damage supplement the text. No explicit English contradiction is established.

## Icon source

[Original image](https://gameslantern.com/storage/sites/darktide/exporter/talents/ogryn/default/ogryn_weakspot_damage.webp) | [Media-Assets Issue](https://github.com/SyuanTsai/Media-Assets/issues/10#issuecomment-5931394406) | [Existing attachment](https://github.com/user-attachments/assets/dae8db6d-b212-4abd-a84b-246c0910e0b3). The icon identifies the talent; it is not mechanism evidence.
