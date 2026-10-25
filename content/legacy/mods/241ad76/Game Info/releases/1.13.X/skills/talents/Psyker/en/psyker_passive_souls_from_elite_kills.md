# Warp Siphon: source evidence

[繁體中文](../psyker_passive_souls_from_elite_kills.md) | [Player description](README.md#psyker_passive_souls_from_elite_kills) | [Technical index](SOURCE_INDEX.md) | [English comparison](LOCALIZATION_COMPARISON.md#psyker_passive_souls_from_elite_kills)

Release 1.13.1; fixed SHA `7e662fcda16219d775b84af50322be2e9cd9d62e`. Talent `psyker_passive_souls_from_elite_kills`; name key `loc_talent_psyker_souls`; description key `loc_talent_psyker_souls_new_desc`. Node `node_25c8ee81-d16b-4d5b-b0fa-fc1e7b40c26f`; category Keystone; one point. Mechanisms and examples reuse verified source evidence; no in-game test was performed.

## Source-confirmed behavior and static derivation

- The kill handler checks only `params.tags.elite` or `params.tags.special` and adds one stack when either condition passes. If another talent enables `psyker_increased_soul_generation`, it adds two stacks per qualifying kill.
- The base soul stack limit is four and the duration is 25 seconds. Warp Battery raises the limit to six. Stack events reset the shared duration, including at the cap. Expiry removes one stack and starts a new timer for the remaining stacks; all stacks do not expire together.
- The Damage buff linearly interpolates using `current_resource / max_resource`. Initialization fixes `max_resource` at `max_souls_talent = 6`. Maximum Damage is 0.24, so each stack contributes `0.24 / 6 = 0.04`, or four percentage points.
- The Combat Ability event reads the current soul count `N` and restores `0.075 × N` of the ability resource required for one charge. All souls are removed after the ability event completes. This restores a resource proportion, rather than a fixed number of seconds.

## Fixed source evidence

- [scripts/settings/ability/archetype_talents/talents/psyker_talents.lua — L410-L460](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/psyker_talents.lua#L410-L460)
- [scripts/settings/talent/talent_settings_psyker.lua — L180-L186](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/talent/talent_settings_psyker.lua#L180-L186)
- [scripts/settings/talent/talent_settings_psyker.lua — L241-L255](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/talent/talent_settings_psyker.lua#L241-L255)
- [scripts/settings/buff/archetype_buff_templates/psyker_buff_templates.lua — L115-L121](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/psyker_buff_templates.lua#L115-L121)
- [scripts/settings/buff/archetype_buff_templates/psyker_buff_templates.lua — L141-L160](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/psyker_buff_templates.lua#L141-L160)
- [scripts/settings/buff/archetype_buff_templates/psyker_buff_templates.lua — L189-L215](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/psyker_buff_templates.lua#L189-L215)
- [scripts/settings/buff/archetype_buff_templates/psyker_buff_templates.lua — L217-L228](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/psyker_buff_templates.lua#L217-L228)
- [scripts/settings/buff/archetype_buff_templates/psyker_buff_templates.lua — L297-L361](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/psyker_buff_templates.lua#L297-L361)
- [scripts/settings/buff/archetype_buff_templates/psyker_buff_templates.lua — L1528-L1548](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/psyker_buff_templates.lua#L1528-L1548)
- [scripts/extension_systems/buff/buff_extension_base.lua — L434-L462](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/buff/buff_extension_base.lua#L434-L462)
- [scripts/extension_systems/buff/buff_extension_base.lua — L560-L589](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/buff/buff_extension_base.lua#L560-L589)
- [scripts/extension_systems/buff/buff_extension_base.lua — L635-L663](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/buff/buff_extension_base.lua#L635-L663)
- [scripts/extension_systems/ability/player_unit_ability_extension.lua — L1081-L1102](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/ability/player_unit_ability_extension.lua#L1081-L1102)
- [scripts/settings/ability/archetype_talents/talents/psyker_talents.lua — L410-L460](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/psyker_talents.lua#L410-L460)
- [scripts/ui/views/talent_builder_view/layouts/psyker_tree.lua — L1235-L1265](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/ui/views/talent_builder_view/layouts/psyker_tree.lua#L1235-L1265)

## Example assumptions and limits

- **Gaining and retaining charges:** Personally kill an Elite or Specialist Enemy to gain one Warp Charge, up to four stacks, lasting 25 seconds. Gaining another charge resets the shared timer. Expiry removes one stack and restarts the 25-second countdown.

- **Damage example:** Each stack adds 4% Damage. With no other bonuses, four stacks turn 100 Damage into `100 × (1 + 4% × 4) = 116`; six stacks with Warp Battery give 124.

- **Cooldown example:** Using a Combat Ability spends every Warp Charge. Each restores 7.5% of the cooldown required for one use of that ability. For a 30-second cooldown and four stacks, this immediately restores `30 × 7.5% × 4 = 9` seconds of progress, leaving about 21 seconds.

- **Abilities with multiple charges:** Restoration first fills the charge currently counting down; any progress exceeding the amount required for that charge carries over to subsequent charges.

The +4% per stack is a general Damage bonus; actual Damage still depends on the weapon, target armour, attack type and other bonuses. Converting restored progress to seconds assumes a fixed cooldown per charge; the implementation restores a proportion of one charge's ability resource. Gaining two stacks per kill comes from another talent and is not the base effect of this Keystone. Mechanisms reuse the fixed-version evidence, with local Build 25606770 English text corresponding to 1.13.1. Actual presentation and behavior remain unobserved in game. Missing details are supplementary explanations.

<a id="original-english-template-and-reconstruction"></a>

## Original English template and reconstruction

Steam Build `25606770`; `content/localization/ui`, resource hash `63564edcb7c3c5ee`; language `en` (code `0`).

- Name key `loc_talent_psyker_souls`, hash `7f1f1d93`, entry 8254: **Warp Siphon**.
- Description key `loc_talent_psyker_souls_new_desc`, hash `9ea525d4`, entry 10237.

Full raw template:

~~~text
Killing an Elite or Specialist Enemy gains you a Warp Charge for {duration:%s}s, stacking {stack:%s} time(s). Each Stack increases Base Damage by {damage:%s}.

Your next Combat Ability spends all available Warp Charges to reduce the Cooldown of that Combat Ability by {cooldown_reduction:%s} per Warp Charge.
~~~

| Placeholder | Value | Formatting |
|---|---|---|
| `duration` | 25 | Number; seconds are in the template. |
| `stack` | 4 | Number. |
| `damage` | 0.24 / 6 = 0.04 | Percentage with `+` prefix: +4%. |
| `cooldown_reduction` | 0.075 | Percentage: 7.5%. |

The existing placeholder mapping in `scripts/settings/ability/archetype_talents/talents/psyker_talents.lua` L410-L444 supplies `duration` and `stack` from `psyker_souls`, `damage` from `talent_settings_2.passive_1.damage / talent_settings_2.offensive_2_1.max_souls_talent`, and `cooldown_reduction` from `talent_settings_2.combat_ability_1.cooldown_reduction_percent`. Values reuse the verified evidence; the shared percentage format retains the decimal in 7.5%.

Static reconstruction; not an observed game screen:

~~~text
Killing an Elite or Specialist Enemy gains you a Warp Charge for 25s, stacking 4 time(s). Each Stack increases Base Damage by +4%.

Your next Combat Ability spends all available Warp Charges to reduce the Cooldown of that Combat Ability by 7.5% per Warp Charge.
~~~

## English comparison

The English directly states the qualifying kills, base duration and cap, Damage per stack, and expenditure of all Warp Charges for a cooldown benefit. These agree with the verified values. It does not describe the shared timer, one-stack decay and refresh, the six-stack Damage denominator, restoration of ability resources or overflow between ability charges; those are supplementary details. No explicit English contradiction is identified.

## Icon source

[Original image](https://gameslantern.com/storage/sites/darktide/exporter/talents/psyker/keystone/psyker_passive_souls_from_elite_kills.webp) | [Media-Assets Issue](https://github.com/SyuanTsai/Media-Assets/issues/7#issuecomment-5928024966) | [Existing attachment](https://github.com/user-attachments/assets/07eff6fd-5c1a-49f2-8a72-d689ec6bb42e). The icon identifies the talent; it is not mechanism evidence.
