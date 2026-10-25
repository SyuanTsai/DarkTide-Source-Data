# Can't Hit Me...Again: source evidence

[繁體中文](../ogryn_ranged_damage_immunity.md) | [Player description](README.md#ogryn_ranged_damage_immunity) | [Technical index](SOURCE_INDEX.md) | [English comparison](LOCALIZATION_COMPARISON.md#ogryn_ranged_damage_immunity)

Release 1.13.1; fixed SHA `7e662fcda16219d775b84af50322be2e9cd9d62e`. Talent `ogryn_ranged_damage_immunity`; name key `loc_talent_ogryn_ranged_damage_immunity`; description key `loc_talent_ogryn_ranged_damage_immunity_desc`. Node `node_8da16e7f-a2a1-4400-9b7e-e6ea62d8e57d`; category Talent; one point. Mechanisms and examples reuse verified source evidence; no in-game test was performed.

## Source-confirmed behavior and static derivation

- `on_damage_taken` requires ranged damage and `attacked_unit == self`. Active duration is 2.5s, followed by a 4s cooldown; retriggering while active is not allowed. `ranged_damage_taken_multiplier=0.8`.

## Fixed source evidence

- [scripts/settings/buff/archetype_buff_templates/ogryn_buff_templates.lua — L3308-L3336](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/ogryn_buff_templates.lua#L3308-L3336)
- [scripts/settings/talent/talent_settings_ogryn.lua — L137-L141](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/talent/talent_settings_ogryn.lua#L137-L141)
- [scripts/extension_systems/buff/buffs/proc_buff.lua — L150-L184](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/buff/buffs/proc_buff.lua#L150-L184)
- [scripts/utilities/attack/damage.lua — L202-L229](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/attack/damage.lua#L202-L229)
- [scripts/utilities/attack/damage_calculation.lua — L587-L626](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/attack/damage_calculation.lua#L587-L626)
- [scripts/settings/ability/archetype_talents/talents/ogryn_talents.lua — L2369-L2395](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/ogryn_talents.lua#L2369-L2395)
- [scripts/ui/views/talent_builder_view/layouts/ogryn_tree.lua — L1899-L1927](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/ui/views/talent_builder_view/layouts/ogryn_tree.lua#L1899-L1927)

## Example assumptions and limits

- **Trigger**: Taking ranged damage yourself grants 20% ranged damage reduction for 2.5s. Damage affecting only Toughness can trigger it. The triggering first hit has already been resolved and does not receive the reduction retroactively.

- **Duration and cooldown**: Further hits during the effect do not restart the timer. A 4s cooldown begins when the effect ends. A trigger at 0s ends at 2.5s and can trigger again at 6.5s.

- **Damage-reduction example**: While active, ranged damage of 100 at this stage becomes 80. Melee damage receives no reduction from this effect.

Mechanisms reuse the fixed-version evidence, with local Build 25606770 English text corresponding to 1.13.1. Actual presentation and behavior remain unobserved in game. Missing details are supplementary explanations.

<a id="original-english-template-and-reconstruction"></a>

## Original English template and reconstruction

Steam Build `25606770`; `content/localization/ui`, resource hash `63564edcb7c3c5ee`; language `en` (code `0`).

- Name key `loc_talent_ogryn_ranged_damage_immunity`, hash `27d5a227`, entry 2578: **Can't Hit Me...Again**.
- Description key `loc_talent_ogryn_ranged_damage_immunity_desc`, hash `5b06263e`, entry 5903.

Full raw template:

~~~text
{resistance:%s} Damage Resistance vs Ranged for {duration:%s}s after getting hit by a Ranged Attack. {cooldown:%s}s Cooldown.
~~~

| Placeholder | Value | Formatting |
|---|---|---|
| resistance | shared ranged_damage_taken_multiplier = 0.8 | math_round((1 − value) × 100); percentage with explicit + prefix → +20% |
| duration | shared duration = 2.5 | Number → 2.5 |
| cooldown | shared cooldown = 4 | Number → 4 |

Only the missing display mapping in the cited talent definition, lines 2369–2395, was read. Accepted values, mechanisms and common formatting were reused.

Static reconstruction; not an observed game screen:

~~~text
+20% Damage Resistance vs Ranged for 2.5s after getting hit by a Ranged Attack. 4s Cooldown.
~~~

## English comparison

The independently read English grants +20% ranged damage resistance for 2.5s after a ranged hit, with a 4s cooldown. This matches the accepted trigger, ranged-only multiplier and values. Toughness-only triggering, lack of retroactive reduction or active-period refresh, and cooldown beginning after the effect ends supplement the text. No explicit English contradiction is established.

## Icon source

[Original image](https://gameslantern.com/storage/sites/darktide/exporter/talents/ogryn/default/ogryn_ranged_damage_immunity.webp) | [Media-Assets Issue](https://github.com/SyuanTsai/Media-Assets/issues/10#issuecomment-5931394406) | [Existing attachment](https://github.com/user-attachments/assets/b7e2a92b-0a60-459a-87c9-6276b204f64e). The icon identifies the talent; it is not mechanism evidence.
