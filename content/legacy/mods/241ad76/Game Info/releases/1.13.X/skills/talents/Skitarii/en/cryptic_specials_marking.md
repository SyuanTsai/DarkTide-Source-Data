# Target Prioritization Psalms: source evidence

[繁體中文](../cryptic_specials_marking.md) | [Player description](README.md#cryptic_specials_marking) | [Technical index](SOURCE_INDEX.md) | [English comparison](LOCALIZATION_COMPARISON.md#cryptic_specials_marking)

Release 1.13.1; fixed SHA `7e662fcda16219d775b84af50322be2e9cd9d62e`. Talent `cryptic_specials_marking`; name key `loc_talent_cryptic_specials_marking`; description key `loc_talent_cryptic_specials_marking_desc`. Node `node_6e6089cb-eef5-4d79-af92-27af4666a13d`; category Talent; one point. Mechanisms and examples reuse verified source evidence; no in-game test was performed.

## Source-confirmed behavior and static derivation

The talent uses the `broker_proximity_target` outline. The local, non-`DEDICATED_SERVER` branch runs a broadphase check approximately every `0.25` seconds and tracks `breed.tags.special`. It does not use a SmartTag extension or a damage buff. An outline must not be treated as an event that triggers all `smart_tag` talents.

## Fixed source evidence

- [scripts/settings/buff/archetype_buff_templates/cryptic_buff_templates.lua — L3319-L3419](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/cryptic_buff_templates.lua#L3319-L3419)
- [scripts/settings/outline/outline_settings.lua — L115-L128](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/outline/outline_settings.lua#L115-L128)
- [scripts/settings/talent/talent_settings_cryptic.lua — L624-L626](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/talent/talent_settings_cryptic.lua#L624-L626)
- [scripts/settings/buff/archetype_buff_templates/cryptic_buff_templates.lua — L3421-L3448](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/cryptic_buff_templates.lua#L3421-L3448)
- [scripts/settings/ability/archetype_talents/talents/cryptic_talents.lua — L2538-L2552](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/cryptic_talents.lua#L2538-L2552)
- [scripts/ui/views/talent_builder_view/layouts/cryptic_tree.lua — L2316-L2345](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/ui/views/talent_builder_view/layouts/cryptic_tree.lua#L2316-L2345)

## Example assumptions and limits

- **Operation**: Living Specialists within **12.5 metres** show an outline; no manual marking is required.
- **Updates**: The outline updates approximately every **0.25 seconds** and is removed when the enemy leaves the range or dies.
- **Marking distinction**: This is an enemy outline indicator. The talent itself grants no damage bonus, charge recovery, or additional manual-marking reward.

Outline presentation on other players' clients still requires in-game confirmation. A shared visual indicator for the entire team is not promised.

Mechanisms reuse the fixed-version evidence, with local Build 25606770 English text corresponding to 1.13.1. Actual presentation and behavior remain unobserved in game. Missing details are supplementary explanations.

<a id="original-english-template-and-reconstruction"></a>

## Original English template and reconstruction

Steam Build `25606770`; `content/localization/ui`, resource hash `63564edcb7c3c5ee`; language `en` (code `0`).

- Name key `loc_talent_cryptic_specials_marking`, hash `08e4cc0d`, entry 550: **Target Prioritization Psalms**.
- Description key `loc_talent_cryptic_specials_marking_desc`, hash `5d780574`, entry 6056.

Full raw template:

~~~text
Specialists that get within {range:%s}m of you are Marked.
~~~

| Placeholder | Value | Formatting |
|---|---|---|
| `{range:%s}` | `12.5` | Number; template adds `m` |

The existing display mapping in `scripts/settings/ability/archetype_talents/talents/cryptic_talents.lua` (L2546-L2551) uses the verified `outline_range` value.

Static reconstruction; not an observed game screen:

~~~text
Specialists that get within 12.5m of you are Marked.
~~~

## English comparison

The English identifies the correct enemy category and range. “Marked” is broad wording and does not explicitly claim SmartTag behavior or a damage effect. The outline implementation, update interval, removal conditions, and distinction from manual-marking rewards are supplementary details. Whether other players see the outline remains unconfirmed in game.

## Icon source

[Original image](https://gameslantern.com/storage/sites/darktide/exporter/talents/cryptic/default/cryptic_specials_marking.webp) | [Media-Assets Issue](https://github.com/SyuanTsai/Media-Assets/issues/13#issuecomment-5935653628) | [Existing attachment](https://github.com/user-attachments/assets/f821891a-e246-41c9-ae45-97f93d0b8547). The icon identifies the talent; it is not mechanism evidence.
