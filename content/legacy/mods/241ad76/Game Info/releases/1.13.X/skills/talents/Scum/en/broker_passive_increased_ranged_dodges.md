# Moving Target: source evidence

[繁體中文](../broker_passive_increased_ranged_dodges.md) | [Player description](README.md#broker_passive_increased_ranged_dodges) | [Technical index](SOURCE_INDEX.md) | [English comparison](LOCALIZATION_COMPARISON.md#broker_passive_increased_ranged_dodges)

Release 1.13.1; fixed SHA `7e662fcda16219d775b84af50322be2e9cd9d62e`. Talent `broker_passive_increased_ranged_dodges`; name key `loc_talent_broker_passive_increased_ranged_dodges`; description key `loc_talent_broker_passive_increased_ranged_dodges_desc`. Node `node_3d505fe8-4783-4d64-9bc8-df4a39546474`; category Talent; one point. Mechanisms and examples reuse verified source evidence; no in-game test was performed.

## Source-confirmed behavior and static derivation

- The secondary slot enables `extra_consecutive_dodges = 1`. `Dodge` adds `round(extra)` to the weapon's `diminishing_return_start` to obtain `consecutive_dodges_count`.

## Fixed source evidence

- [scripts/extension_systems/character_state_machine/character_states/utilities/dodge.lua — L246-L260](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/character_state_machine/character_states/utilities/dodge.lua#L246-L260)
- [scripts/settings/talent/talent_settings_broker.lua — L228-L230](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/talent/talent_settings_broker.lua#L228-L230)
- [scripts/settings/buff/archetype_buff_templates/broker_buff_templates.lua — L1013-L1031](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/broker_buff_templates.lua#L1013-L1031)
- [scripts/settings/ability/archetype_talents/talents/broker_talents.lua — L907-L922](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/broker_talents.lua#L907-L922)
- [scripts/ui/views/talent_builder_view/layouts/broker_tree.lua — L663-L689](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/ui/views/talent_builder_view/layouts/broker_tree.lua#L663-L689)

## Example assumptions and limits

- **How it works**: while wielding a Ranged weapon, gain 1 additional consecutive Effective Dodge before diminishing returns begin. The bonus is not retained after switching to a Melee weapon.
- **Count example**: a weapon with 3 Effective Dodges becomes 3 + 1 = 4. This bonus does not increase Dodge Distance or Dodge Speed.

The count example uses a weapon with 3 original Effective Dodges while the Ranged weapon is wielded. Mechanisms reuse the fixed-version evidence, with local Build 25606770 English text corresponding to 1.13.1. Actual presentation and behavior remain unobserved in game. Missing details are supplementary explanations.

<a id="original-english-template-and-reconstruction"></a>

## Original English template and reconstruction

Steam Build `25606770`; `content/localization/ui`, resource hash `63564edcb7c3c5ee`; language `en` (code `0`).

- Name key `loc_talent_broker_passive_increased_ranged_dodges`, hash `0158f675`, entry 78: **Moving Target**.
- Description key `loc_talent_broker_passive_increased_ranged_dodges_desc`, hash `a7db2b5d`, entry 10813.

Full raw template:

~~~text
Gain {extra_consecutive_dodges:%s} Effective Dodges while wielding your Ranged Weapon.
~~~

| Placeholder | Value | Formatting |
|---|---|---|
| `{extra_consecutive_dodges:%s}` | `talent_settings.broker_passive_increased_ranged_dodges.extra_consecutive_dodges = 1` → `+1` | `number`; prefix `+` |

The existing display mapping at `broker_talents.lua` L911-L917 reads the extra consecutive-Dodge count as a number with a `+` prefix. The verified value 1 is reused.

Static reconstruction; not an observed game screen:

~~~text
Gain +1 Effective Dodges while wielding your Ranged Weapon.
~~~

## English comparison

The English correctly describes a count of +1 Effective Dodges while wielding a Ranged weapon. The accepted implementation adds one to the consecutive-Dodge threshold before diminishing returns. The exact formula and absence of distance or speed bonuses are supplements.

## Icon source

[Original image](https://gameslantern.com/storage/sites/darktide/exporter/talents/broker/default/broker_passive_increased_ranged_dodges.webp) | [Media-Assets Issue](https://github.com/SyuanTsai/Media-Assets/issues/12#issuecomment-5933987866) | [Existing attachment](https://github.com/user-attachments/assets/95c8ba8f-bd1f-424f-bee5-435d83d4dfa6). The icon identifies the talent; it is not mechanism evidence.
