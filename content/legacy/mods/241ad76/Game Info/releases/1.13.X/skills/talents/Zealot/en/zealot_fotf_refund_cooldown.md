# Unrelenting Fury: source evidence

[繁體中文](../zealot_fotf_refund_cooldown.md) | [Player description](README.md#zealot_fotf_refund_cooldown) | [Technical index](SOURCE_INDEX.md) | [English comparison](LOCALIZATION_COMPARISON.md#zealot_fotf_refund_cooldown)

Release 1.13.1; fixed SHA `7e662fcda16219d775b84af50322be2e9cd9d62e`. Talent `zealot_fotf_refund_cooldown`; name key `loc_talent_zealot_dash_increased_duration`; description key `loc_talent_zealot_fotf_refund_cooldown_desc`. Node `node_1a024b73-36a7-4c24-a4be-f9844f422b4f`; category Ability; one point. Mechanisms and examples reuse verified source evidence; no in-game test was performed.

## Source-confirmed behavior and static derivation

- `zealot_dash_buff.start_func` detects this talent's special rule and adds `zealot_fotf_refund_cooldown` when the dash Buff starts. The refund window lasts 5 seconds.
- The refund Buff listens to `on_kill` and filters with `CheckProcFunctions.on_elite_or_special_kill`. On a successful server-side trigger, it calls `restore_ability_charge_percentage('combat_ability',0.2)`, then sets `remove_buff=true`. Each Buff window can succeed at most once.
- `PlayerUnitAbilityExtension.restore_ability_charge_percentage` multiplies the ability's `resource_cost_per_charge` by the refund percentage and caps the result at the resource pool limit. The base dash costs 30 per charge, so 20% refunds 6 resource; natural regeneration of 1/s makes this equivalent to about 6 seconds of base recharge.
- Fury of the Faithful's double-charge variant changes `max_charges`. Refunds still use one charge's cost: 20% of one charge, not 20% of the two-charge pool.

## Fixed source evidence

- [scripts/settings/ability/archetype_talents/talents/zealot_talents.lua — L2504-L2527](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/zealot_talents.lua#L2504-L2527)
- [scripts/settings/talent/talent_settings_zealot.lua — L179-L182](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/talent/talent_settings_zealot.lua#L179-L182)
- [scripts/settings/buff/archetype_buff_templates/zealot_buff_templates.lua — L1233-L1280](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/zealot_buff_templates.lua#L1233-L1280)
- [scripts/settings/buff/archetype_buff_templates/zealot_buff_templates.lua — L2827-L2862](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/zealot_buff_templates.lua#L2827-L2862)
- [scripts/settings/ability/player_abilities/abilities/zealot_abilities.lua — L7-L36](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/player_abilities/abilities/zealot_abilities.lua#L7-L36)
- [scripts/extension_systems/ability/player_unit_ability_extension.lua — L1081-L1102](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/ability/player_unit_ability_extension.lua#L1081-L1102)
- [scripts/extension_systems/ability/player_unit_ability_extension.lua — L1437-L1461](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/ability/player_unit_ability_extension.lua#L1437-L1461)
- [scripts/settings/ability/archetype_talents/talents/zealot_talents.lua — L2504-L2527](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/zealot_talents.lua#L2504-L2527)
- [scripts/ui/views/talent_builder_view/layouts/zealot_tree.lua — L1426-L1449](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/ui/views/talent_builder_view/layouts/zealot_tree.lua#L1426-L1449)

## Example assumptions and limits

- **Trigger**: Kill an Elite or Specialist within 5 seconds of using Fury of the Faithful to refund 20% of the cooldown resource required for one charge. Maximum one refund per use.
- **Cooldown example**: With base cooldown 30 seconds, refund 30 × 20% = 6 seconds of natural recharge progress. If only 4 seconds remain to full, only the missing amount is restored. Double charges still use one charge's cost; the refund does not become 60 × 20% = 12 seconds.
- **Chinese original-text erratum**: The Chinese text incorrectly adds “seconds” after the percentage refund. The correct value is 20% of one charge, equivalent to 6 seconds of progress for a base 30-second cooldown.

- Elite/Specialist qualification follows the game's breed tags and kill result. Dealing damage or knocking an enemy down does not count as killing it.
- The 5-second window is added when the dash Buff starts. The initial lunge/setup after activation may introduce a very short delay.
- The Chinese inventory writes `{cooldown}` as seconds. The fixed SHA formats it as a percentage and runtime refunds a fraction of a single charge's cost. The same-hash English does not specify seconds, so this explicit unit issue is retained as a Chinese correction.
- Hash `0dec8750` pairs both languages. Actual game display and behavior remain unobserved.

Mechanisms reuse the fixed-version evidence, with local Build 25606770 English text corresponding to 1.13.1. Actual presentation and behavior remain unobserved in game. Missing details are supplementary explanations.

<a id="original-english-template-and-reconstruction"></a>

## Original English template and reconstruction

Steam Build `25606770`; `content/localization/ui`, resource hash `63564edcb7c3c5ee`; language `en` (code `0`).

- Name key `loc_talent_zealot_dash_increased_duration`, hash `c6a43b9e`, entry 12824: **Unrelenting Fury**.
- Description key `loc_talent_zealot_fotf_refund_cooldown_desc`, hash `0dec8750`, entry 918.

Full raw template:

~~~text
Killing an Elite or Specialist within {duration:%s}s of using {talent_name:%s} restores {cooldown:%s} Ability Cooldown. Maximum once per use.
~~~

| Placeholder | Value | Formatting |
|---|---|---|
| `duration` | 5 | `number`; refund-window duration |
| `talent_name` | `loc_talent_maniac_attack_speed_after_dash`: Fury of the Faithful | `loc_string`; hash `813869f7`, entry 8392 |
| `cooldown` | 0.2 → +20% | `percentage`, `+` prefix; `restored_percentage` |

The minimal display mapping at `zealot_talents.lua` L2504-L2523 supplies the accepted settings and Fury name key.

Static reconstruction; not an observed game screen:

~~~text
Killing an Elite or Specialist within 5s of using Fury of the Faithful restores +20% Ability Cooldown. Maximum once per use.
~~~

## English comparison

Independently read, the English uses the correctly formatted percentage, an Elite/Specialist kill within 5 seconds, and a once-per-use limit. These agree with the accepted refund behavior. It does not specify a fixed 20-second refund. The one-charge denominator, resource cap, breed-tag qualification and slight setup timing are supplements. The Chinese addition of “seconds” remains a separate erratum.

## Icon source

[Original image](https://gameslantern.com/storage/sites/darktide/exporter/talents/zealot/ability_modifier/zealot_fotf_refund_cooldown.webp) | [Media-Assets Issue](https://github.com/SyuanTsai/Media-Assets/issues/8#issuecomment-5929289315) | [Existing attachment](https://github.com/user-attachments/assets/d95452d2-3c7a-419f-9461-3d32dc95ce2f). The icon identifies the talent; it is not mechanism evidence.
