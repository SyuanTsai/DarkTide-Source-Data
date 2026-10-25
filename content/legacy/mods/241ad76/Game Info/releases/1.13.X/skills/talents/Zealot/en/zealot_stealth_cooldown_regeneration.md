# Perfectionist: source evidence

[繁體中文](../zealot_stealth_cooldown_regeneration.md) | [Player description](README.md#zealot_stealth_cooldown_regeneration) | [Technical index](SOURCE_INDEX.md) | [English comparison](LOCALIZATION_COMPARISON.md#zealot_stealth_cooldown_regeneration)

Release 1.13.1; fixed SHA `7e662fcda16219d775b84af50322be2e9cd9d62e`. Talent `zealot_stealth_cooldown_regeneration`; name key `loc_talent_zealot_stealth_increased_damage`; description key `loc_talent_zealot_stealth_cooldown_regeneration_desc`. Node `node_de287eb8-d0e5-46ab-98c2-d71496a3bd4a`; category Ability; one point. Mechanisms and examples reuse verified source evidence; no in-game test was performed.

## Source-confirmed behavior and static derivation

- The node adds only `special_rules.zealot_invisibility_refund_cooldown`. It does not attach the similarly named `zealot_stealth_cooldown_regeneration` proc Buff as a passive.
- `zealot_invisibility.start_func` reads the special rule and sets `cooldown_on_kill`. While the Stealth Buff is active, `proc_func` receives the player's own kill result, chooses 0.5, 0.3 or 0.15 from the killed breed's tags, and calls `restore_ability_charge_percentage`. After success, `got_cooldown=true` limits the refund to once per Stealth.
- The settings are `monster=.5`, `ogryn=.3`, `other=.15`. The common ability recovery function refunds `resource_cost_per_charge × percentage`: a 30-resource charge gives 15, 9 or 4.5 resource.
- `buff_templates.lua` also contains a proc Buff named `zealot_stealth_cooldown_regeneration` with a 1-second cooldown, but this talent definition has no passive pointing to it. Use the accepted base-invisibility special-rule hook for calculation, not that unattached template's event throttle.

## Fixed source evidence

- [scripts/settings/ability/archetype_talents/talents/zealot_talents.lua — L2438-L2460](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/zealot_talents.lua#L2438-L2460)
- [scripts/settings/talent/talent_settings_zealot.lua — L149-L153](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/talent/talent_settings_zealot.lua#L149-L153)
- [scripts/settings/ability/player_abilities/abilities/zealot_abilities.lua — L60-L76](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/player_abilities/abilities/zealot_abilities.lua#L60-L76)
- [scripts/settings/buff/archetype_buff_templates/zealot_buff_templates.lua — L4241-L4267](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/zealot_buff_templates.lua#L4241-L4267)
- [scripts/settings/buff/archetype_buff_templates/zealot_buff_templates.lua — L4280-L4295](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/zealot_buff_templates.lua#L4280-L4295)
- [scripts/settings/buff/archetype_buff_templates/zealot_buff_templates.lua — L2735-L2786](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/zealot_buff_templates.lua#L2735-L2786)
- [scripts/extension_systems/ability/player_unit_ability_extension.lua — L1081-L1102](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/ability/player_unit_ability_extension.lua#L1081-L1102)
- [scripts/extension_systems/ability/player_unit_ability_extension.lua — L1437-L1461](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/ability/player_unit_ability_extension.lua#L1437-L1461)
- [scripts/settings/ability/archetype_talents/talents/zealot_talents.lua — L2438-L2460](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/zealot_talents.lua#L2438-L2460)
- [scripts/ui/views/talent_builder_view/layouts/zealot_tree.lua — L1865-L1889](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/ui/views/talent_builder_view/layouts/zealot_tree.lua#L1865-L1889)

## Example assumptions and limits

- **Trigger**: While in Shroudfield, kill an enemy with a qualifying effective attack that ends Stealth to refund ability cooldown. Maximum once per Stealth. Existing Bleed, Burning and similar damage-over-time kills do not give this refund.
- **Refund percentages**: Monstrosities restore 50% of one charge, Ogryns 30%, and other enemies 15%.
- **Cooldown example**: Shroudfield's base cooldown is 30 seconds, so refunds equal 30 × 50% = 15 seconds, 30 × 30% = 9 seconds, or 30 × 15% = 4.5 seconds of natural recharge progress. They remain capped at the amount currently missing.
- **Chinese original-text erratum**: The Chinese text adds “seconds” to the Monstrosity, Ogryn and other-enemy percentages. The correct units are 50%, 30% and 15% of one charge, not fixed refunds of 50, 30 and 15 seconds.

- The kill must be processed while the invisibility Buff is still active. Kills after leaving Stealth do not qualify.
- The once-per-Stealth lock is set after successful restoration. Results can differ when there is no space to restore resource or the target's breed information is absent.
- The similarly named `zealot_stealth_cooldown_regeneration` template is not this talent's attached passive. Its `cooldown_duration=1` does not establish a once-per-second refund for this talent.
- At paired hash `d641c97c`, the accepted Chinese note records the added “seconds” unit, while the fixed talent formats the values as percentages of one charge. Actual game presentation and behavior remain unobserved.

Mechanisms reuse the fixed-version evidence, with local Build 25606770 English text corresponding to 1.13.1. Actual presentation and behavior remain unobserved in game. Missing details are supplementary explanations.

<a id="original-english-template-and-reconstruction"></a>

## Original English template and reconstruction

Steam Build `25606770`; `content/localization/ui`, resource hash `63564edcb7c3c5ee`; language `en` (code `0`).

- Name key `loc_talent_zealot_stealth_increased_damage`, hash `997e4534`, entry 9896: **Perfectionist**.
- Description key `loc_talent_zealot_stealth_cooldown_regeneration_desc`, hash `d641c97c`, entry 13863.

Full raw template:

~~~text
Restore Ability Cooldown on Stealth Kill. Monstrosities restore {monster:%s}, Ogryns restore {ogryn:%s}, and others restore {other:%s}.
~~~

| Placeholder | Value | Formatting |
|---|---|---|
| `monster` | 0.5 → 50% | `percentage`; `zealot_stealth_cooldown_regeneration.monster` |
| `ogryn` | 0.3 → 30% | `percentage`; corresponding `ogryn` setting |
| `other` | 0.15 → 15% | `percentage`; corresponding `other` setting |

The minimal display mapping at `zealot_talents.lua` L2438-L2454 supplies the three accepted percentages without explicit sign prefixes.

Static reconstruction; not an observed game screen:

~~~text
Restore Ability Cooldown on Stealth Kill. Monstrosities restore 50%, Ogryns restore 30%, and others restore 15%.
~~~

## English comparison

Independently read, the English refers to a Stealth kill and percentage refunds by target type. Its 50%/30%/15% values match the accepted implementation and do not specify fixed seconds. The qualifying exit attack, damage-over-time exclusion, once-per-Stealth success lock and one-charge/cap basis are supplements. The Chinese unit correction remains separate; no English erratum is established.

## Icon source

[Original image](https://gameslantern.com/storage/sites/darktide/exporter/talents/zealot/ability_modifier/zealot_stealth_cooldown_regeneration.webp) | [Media-Assets Issue](https://github.com/SyuanTsai/Media-Assets/issues/8#issuecomment-5929289315) | [Existing attachment](https://github.com/user-attachments/assets/8532537c-fff4-4014-8ee6-e16572b9cdeb). The icon identifies the talent; it is not mechanism evidence.
