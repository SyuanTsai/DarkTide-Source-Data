# Brutish Strength: source evidence

[繁體中文](../ogryn_pushing_applies_brittleness.md) | [Player description](README.md#ogryn_pushing_applies_brittleness) | [Technical index](SOURCE_INDEX.md) | [English comparison](LOCALIZATION_COMPARISON.md#ogryn_pushing_applies_brittleness)

Release 1.13.1; fixed SHA `7e662fcda16219d775b84af50322be2e9cd9d62e`. Talent `ogryn_pushing_applies_brittleness`; name key `loc_talent_ogryn_pushing_applies_brittlenes`; description key `loc_talent_ogryn_pushing_applies_brittlenes_desc`. Node `node_11f1b2c0-3982-411e-b0fd-9f51ef609d6c`; category Talent; one point. Mechanisms and examples reuse verified source evidence; no in-game test was performed.

## Source-confirmed behavior and static derivation

- `on_push_hit` adds four `rending_debuff` stacks. The common debuff has duration 5s, maximum/cap 16, refresh and 0.025 per stack. Target Rending and attacker Rending are combined.

## Fixed source evidence

- [scripts/settings/buff/archetype_buff_templates/ogryn_buff_templates.lua — L3401-L3422](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/ogryn_buff_templates.lua#L3401-L3422)
- [scripts/settings/talent/talent_settings_ogryn.lua — L147-L149](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/talent/talent_settings_ogryn.lua#L147-L149)
- [scripts/settings/buff/weapon_buff_templates.lua — L366-L376](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/weapon_buff_templates.lua#L366-L376)
- [scripts/utilities/attack/damage_calculation.lua — L64-L84](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/attack/damage_calculation.lua#L64-L84)
- [scripts/utilities/attack/damage_calculation.lua — L629-L660](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/attack/damage_calculation.lua#L629-L660)
- [scripts/settings/ability/archetype_talents/talents/ogryn_talents.lua — L2476-L2490](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/ogryn_talents.lua#L2476-L2490)
- [scripts/ui/views/talent_builder_view/layouts/ogryn_tree.lua — L1648-L1670](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/ui/views/talent_builder_view/layouts/ogryn_tree.lua#L1648-L1670)

## Example assumptions and limits

- **Trigger and stacks**: Pushing a still-living enemy applies 4 Brittleness stacks, each worth 2.5%, for 10% total. Maximum 16 stacks / 40%, lasting 5s; another application refreshes the duration.

- **Effect**: The debuff stays on the enemy, so allies also benefit. Brittleness combines with the attacker's Rending to improve armour multipliers; it does not grant a fixed equivalent increase to final damage.

- **Damage example**: Assuming an original Carapace Armour multiplier of 0.5 and base damage of 100, one push gives `100 × (0.5 + 4 × 2.5%) = 60`. At all 16 stacks it gives 90. The part exceeding an armour multiplier of 1 follows the excess-Rending rules.

Mechanisms reuse the fixed-version evidence, with local Build 25606770 English text corresponding to 1.13.1. Actual presentation and behavior remain unobserved in game. Missing details are supplementary explanations.

<a id="original-english-template-and-reconstruction"></a>

## Original English template and reconstruction

Steam Build `25606770`; `content/localization/ui`, resource hash `63564edcb7c3c5ee`; language `en` (code `0`).

- Name key `loc_talent_ogryn_pushing_applies_brittlenes`, hash `353eeb71`, entry 3464: **Brutish Strength**.
- Description key `loc_talent_ogryn_pushing_applies_brittlenes_desc`, hash `f63bfc12`, entry 15988.

Full raw template:

~~~text
{stacks:%s} Stacks of Brittleness on Push.
~~~

| Placeholder | Value | Formatting |
|---|---|---|
| stacks | shared ogryn_pushing_applies_brittleness.stacks = 4 | Number → 4 |

Only the missing display mapping in the cited talent definition, lines 2476–2490, was read. Accepted values, mechanisms and common formatting were reused.

Static reconstruction; not an observed game screen:

~~~text
4 Stacks of Brittleness on Push.
~~~

## English comparison

The independently read English applies four Brittleness stacks on a push, matching the accepted application count. It does not state the per-stack percentage, cap, duration or armour formula. Those details, the living-target condition and benefits to allies supplement the text. No explicit English contradiction is established.

## Icon source

[Original image](https://gameslantern.com/storage/sites/darktide/exporter/talents/ogryn/default/ogryn_pushing_applies_brittleness.webp) | [Media-Assets Issue](https://github.com/SyuanTsai/Media-Assets/issues/10#issuecomment-5931394406) | [Existing attachment](https://github.com/user-attachments/assets/024bec9b-772c-4313-b7b8-d119efdcf8f1). The icon identifies the talent; it is not mechanism evidence.
