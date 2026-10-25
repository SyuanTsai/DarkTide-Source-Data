# For the Lil'Uns: source evidence

[繁體中文](../ogryn_protect_allies.md) | [Player description](README.md#ogryn_protect_allies) | [Technical index](SOURCE_INDEX.md) | [English comparison](LOCALIZATION_COMPARISON.md#ogryn_protect_allies)

Release 1.13.1; fixed SHA `7e662fcda16219d775b84af50322be2e9cd9d62e`. Talent `ogryn_protect_allies`; name key `loc_talent_ogryn_protect_allies_name`; description key `loc_talent_ogryn_protect_allies_desc`. Node `node_1ea4b738-84ef-45d6-8a69-151d578944d5`; category Talent; one point. Mechanisms and examples reuse verified source evidence; no in-game test was performed.

## Source-confirmed behavior and static derivation

- Two independent proc buffs exclude only yourself, without a Coherency check. The `toughness_broken` effect has active duration 10s, cooldown 20s and `allow_proc_while_active`; cooldown begins after the active effect ends.
- The `knocked_down` effect has no cooldown, active duration 10s, `revive_speed` +0.25 and `stun_immune`.

## Fixed source evidence

- [scripts/settings/buff/archetype_buff_templates/ogryn_buff_templates.lua — L2680-L2726](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/ogryn_buff_templates.lua#L2680-L2726)
- [scripts/settings/talent/talent_settings_ogryn.lua — L38-L44](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/talent/talent_settings_ogryn.lua#L38-L44)
- [scripts/settings/talent/talent_settings_ogryn.lua — L12-L15](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/talent/talent_settings_ogryn.lua#L12-L15)
- [scripts/extension_systems/buff/buffs/proc_buff.lua — L150-L184](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/buff/buffs/proc_buff.lua#L150-L184)
- [scripts/utilities/attack/damage_taken_calculation.lua — L223-L258](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/attack/damage_taken_calculation.lua#L223-L258)
- [scripts/extension_systems/interaction/interactor_extension.lua — L134-L156](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/interaction/interactor_extension.lua#L134-L156)
- [scripts/settings/interaction/interaction_settings.lua — L18-L25](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/interaction/interaction_settings.lua#L18-L25)
- [scripts/settings/ability/archetype_talents/talents/ogryn_talents.lua — L2269-L2317](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/ogryn_talents.lua#L2269-L2317)
- [scripts/ui/views/talent_builder_view/layouts/ogryn_tree.lua — L1571-L1593](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/ui/views/talent_builder_view/layouts/ogryn_tree.lua#L1571-L1593)

## Example assumptions and limits

- **Ally Toughness break**: When another ally's Toughness breaks, gain +10% Power and reduce Toughness damage taken by 25% for 10s. Your own Toughness break does not trigger it; there is no additional Coherency range requirement.

- **Duration and cooldown**: Another ally Toughness break while active resets the 10s duration. The 20s cooldown begins after the effect ends. For example, a trigger at 0s without further refresh ends at 10s and can trigger again at 30s.

- **Downed-ally rescue effect**: Another ally being knocked down independently grants +25% Revive Speed and Stun immunity for 10s. Further triggers refresh its duration; this effect is not limited by the 20s cooldown above.

- **Calculation examples**: Power of 500 becomes 550; Toughness damage of 100 at this stage becomes 75. With only +25% Revive Speed, an original 5s revive becomes `5 ÷ 1.25 = 4s`. With another +25% Revive Speed at the same stage, it becomes `5 ÷ 1.5 ≈ 3.33s`.

The revive example isolates the speed modifier; other interaction-time modifiers may change the actual duration. Mechanisms reuse the fixed-version evidence, with local Build 25606770 English text corresponding to 1.13.1. Actual presentation and behavior remain unobserved in game. Missing details are supplementary explanations.

<a id="original-english-template-and-reconstruction"></a>

## Original English template and reconstruction

Steam Build `25606770`; `content/localization/ui`, resource hash `63564edcb7c3c5ee`; language `en` (code `0`).

- Name key `loc_talent_ogryn_protect_allies_name`, hash `9fd98f36`, entry 10325: **For the Lil'Uns**.
- Description key `loc_talent_ogryn_protect_allies_desc`, hash `67e1573d`, entry 6760.

Full raw template:

~~~text
On Ally getting Toughness Broken, gain  {power:%s} Strength, and {toughness_damage_reduction:%s} Toughness Damage Reduction for {duration:%s}s. {cooldown:%s}s Cooldown.

On Ally getting Knocked Down, gain Stun Immunity, and {revive_speed:%s} Revive Speed for {duration:%s}s.
~~~

| Placeholder | Value | Formatting |
|---|---|---|
| power | shared ogryn_protect_allies.power_level_modifier = 0.1 | Percentage with explicit + prefix → +10% |
| toughness_damage_reduction | shared toughness_damage_reduction = 0.75 | math_round((1 − value) × 100); percentage with explicit + prefix → +25% |
| revive_speed | shared revive_speed_modifier = 0.25 | Percentage with explicit + prefix → +25% |
| duration | shared duration = 10 | Number → 10 |
| cooldown | ogryn_protect_allies_toughness_broken.cooldown_duration = 20 | Number → 20 |

Only the missing display mapping in the cited talent definition, lines 2269–2317, was read. Accepted values, mechanisms and common formatting were reused.

Static reconstruction; not an observed game screen:

~~~text
On Ally getting Toughness Broken, gain  +10% Strength, and +25% Toughness Damage Reduction for 10s. 20s Cooldown.

On Ally getting Knocked Down, gain Stun Immunity, and +25% Revive Speed for 10s.
~~~

## English comparison

The independently read English distinguishes an ally's Toughness break, granting +10% Strength and +25% Toughness damage reduction for 10s with a 20s cooldown, from an ally being knocked down, granting Stun immunity and +25% Revive Speed for 10s. These match the accepted two independent effects. No Coherency requirement is stated. Refresh, cooldown beginning after the active period and the calculation examples supplement the text. No explicit English contradiction is established.

## Icon source

[Original image](https://gameslantern.com/storage/sites/darktide/exporter/talents/ogryn/default/ogryn_protect_allies.webp) | [Media-Assets Issue](https://github.com/SyuanTsai/Media-Assets/issues/10#issuecomment-5931394406) | [Existing attachment](https://github.com/user-attachments/assets/d61a8184-294b-4ade-9847-3c5241828792). The icon identifies the talent; it is not mechanism evidence.
