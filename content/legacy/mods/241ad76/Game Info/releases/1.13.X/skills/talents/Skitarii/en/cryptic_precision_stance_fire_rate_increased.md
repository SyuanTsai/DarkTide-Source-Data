# Writ of Ammunition Enumeration: source evidence

[繁體中文](../cryptic_precision_stance_fire_rate_increased.md) | [Player description](README.md#cryptic_precision_stance_fire_rate_increased) | [Technical index](SOURCE_INDEX.md) | [English comparison](LOCALIZATION_COMPARISON.md#cryptic_precision_stance_fire_rate_increased)

Release 1.13.1; fixed SHA `7e662fcda16219d775b84af50322be2e9cd9d62e`. Talent `cryptic_precision_stance_fire_rate_increased`; name key `loc_talent_cryptic_precision_stance_fire_rate_increased`; description key `loc_talent_cryptic_precision_stance_fire_rate_increased_desc`. Node `node_9f2a7af2-4bde-47c2-a856-379c9ca8e034`; category Ability; one point. Mechanisms and examples reuse verified source evidence; no in-game test was performed.

## Source-confirmed behavior and static derivation

- The talent applies both base and delayed conditional templates: `cryptic_precision_stance_fire_rate_increased_base` and `cryptic_precision_stance_fire_rate_increased_delayed`. The base template gives +0.15 `ranged_attack_speed` while the precision stance keyword is active. The delayed template gives the difference between the two values: 0.30 − 0.15 = an additional +0.15.
- When the delayed template detects that the stance has just activated, it sets its start time to t + 4. While the stance remains active, reaching that time enables the additional bonus. Interrupting the stance clears this state, resets the timer and withdraws the additional bonus; reactivation starts a new timer.

## Fixed source evidence

- [scripts/settings/ability/archetype_talents/talents/cryptic_talents.lua — L338-L372](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/cryptic_talents.lua#L338-L372)
- [scripts/settings/talent/talent_settings_cryptic.lua — L110-L114](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/talent/talent_settings_cryptic.lua#L110-L114)
- [scripts/settings/buff/archetype_buff_templates/cryptic_buff_templates.lua — L587-L604](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/cryptic_buff_templates.lua#L587-L604)
- [scripts/settings/buff/archetype_buff_templates/cryptic_buff_templates.lua — L606-L641](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/cryptic_buff_templates.lua#L606-L641)
- [scripts/utilities/action/action_handler.lua — L402-L423](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/action/action_handler.lua#L402-L423)
- [scripts/settings/ability/archetype_talents/talents/cryptic_talents.lua — L338-L372](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/cryptic_talents.lua#L338-L372)
- [scripts/ui/views/talent_builder_view/layouts/cryptic_tree.lua — L940-L962](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/ui/views/talent_builder_view/layouts/cryptic_tree.lua#L940-L962)

## Example assumptions and limits

- **How it works**: While Advanced Combat Doctrines is active, ranged Fire Rate increases by 15%. Maintaining the stance continuously for 4s increases the total bonus to 30%.
- **Reset condition**: Leaving the stance removes the bonus. Reactivation starts again at 15% and begins a new 4s timer.
- **Fire Rate example**: Starting at 5 rounds/s, considering only the Fire Rate affected by this multiplier, the initial rate is 5 × 1.15 = 5.75 rounds/s. After 4s, it is 5 × 1.30 = 6.5 rounds/s. Other action and weapon limits are separate.

- The 30% is the combined total of two Fire Rate effects. The delayed effect activates only after the stance has remained active continuously for 4s.
- This is a ranged Fire Rate modifier. It makes no claim of increased damage or Reload Speed.

Mechanisms reuse the fixed-version evidence, with local Build 25606770 English text corresponding to 1.13.1. Actual presentation and behavior remain unobserved in game. Missing details are supplementary explanations.

<a id="original-english-template-and-reconstruction"></a>

## Original English template and reconstruction

Steam Build `25606770`; `content/localization/ui`, resource hash `63564edcb7c3c5ee`; language `en` (code `0`).

- Name key `loc_talent_cryptic_precision_stance_fire_rate_increased`, hash `521de828`, entry 5336: **Writ of Ammunition Enumeration**.
- Description key `loc_talent_cryptic_precision_stance_fire_rate_increased_desc`, hash `305b77d8`, entry 3140.

Full raw template:

~~~text
While {talent_name:%s} is active, gain {fire_rate:%s} Fire Rate, increased to {fire_rate_increased:%s} Fire Rate after {duration:%s}s.
~~~

| Placeholder | Value | Formatting |
|---|---|---|
| `{talent_name:%s}` | Advanced Combat Doctrines | `loc_string`; `loc_talent_cryptic_precision_stance` |
| `{fire_rate:%s}` | 0.15 → +15% | `percentage`; explicit + prefix |
| `{fire_rate_increased:%s}` | 0.30 → +30% | `percentage`; explicit + prefix |
| `{duration:%s}` | 4 | `number`; s supplied by template |

The minimally read display map is `cryptic_talents.lua` L338-L372. The ability name uses `loc_talent_cryptic_precision_stance` (hash `c4f43796`, English entry 12705). The verified Fire Rate values are 0.15 and 0.30; `duration` uses `buff_start_delay`, 4.

Static reconstruction; not an observed game screen:

~~~text
While Advanced Combat Doctrines is active, gain +15% Fire Rate, increased to +30% Fire Rate after 4s.
~~~

## English comparison

The English stance condition, initial +15%, total +30% and 4s delay agree with the accepted evidence. Continuous activation, timer reset on interruption, the two additive components and other action/weapon limits supplement the wording. The English does not promise a damage or Reload Speed bonus.

## Icon source

[Original image](https://gameslantern.com/storage/sites/darktide/exporter/talents/cryptic/ability_modifier/cryptic_precision_stance_fire_rate_increased.webp) | [Media-Assets Issue](https://github.com/SyuanTsai/Media-Assets/issues/13#issuecomment-5935640756) | [Existing attachment](https://github.com/user-attachments/assets/ac9ea4d6-352f-4ad1-95f2-a2de10d39d2d). The icon identifies the talent; it is not mechanism evidence.
