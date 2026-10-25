# That One Didn't Count: source evidence

[繁體中文](../ogryn_replenish_rock_on_miss.md) | [Player description](README.md#ogryn_replenish_rock_on_miss) | [Technical index](SOURCE_INDEX.md) | [English comparison](LOCALIZATION_COMPARISON.md#ogryn_replenish_rock_on_miss)

Release 1.13.1; fixed SHA `7e662fcda16219d775b84af50322be2e9cd9d62e`. Talent `ogryn_replenish_rock_on_miss`; name key `loc_talent_ogryn_replenish_rock_on_miss_name`; description key `loc_talent_ogryn_replenish_rock_on_miss_desc`. Node `node_699c29c6-383b-478b-a462-792679f03b8c`; category Blitz; one point. Mechanisms and examples reuse verified source evidence; no in-game test was performed.

## Source-confirmed behavior and static derivation

- The passive listens to the player projectile-completion event and accepts only the Ogryn friendly rock.
- If the projectile reports a hit and weakspot-hit count 0, the check rejects the trigger. Other qualifying cases call the ability system to restore 1 Blitz charge.
- Shared settings give cooldown 5s. The rock ability maximum is 4; restoration remains limited by the current ability capacity.
- `impact_hit` is set to true in the `is_damagable` branch, which is not restricted to enemy/minion targets. Destructible objects can therefore affect the miss condition.

## Fixed source evidence

- [scripts/settings/ability/archetype_talents/talents/ogryn_talents.lua — L1931-L1955](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/ogryn_talents.lua#L1931-L1955)
- [scripts/settings/buff/archetype_buff_templates/ogryn_buff_templates.lua — L2630-L2679](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/ogryn_buff_templates.lua#L2630-L2679)
- [scripts/settings/talent/talent_settings_ogryn.lua — L182-L184](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/talent/talent_settings_ogryn.lua#L182-L184)
- [scripts/settings/ability/player_abilities/abilities/ogryn_abilities.lua — L164-L177](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/player_abilities/abilities/ogryn_abilities.lua#L164-L177)
- [scripts/extension_systems/projectile_damage/projectile_damage_extension.lua — L410-L430](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/projectile_damage/projectile_damage_extension.lua#L410-L430)
- [scripts/extension_systems/projectile_damage/projectile_damage_extension.lua — L493-L563](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/projectile_damage/projectile_damage_extension.lua#L493-L563)
- [scripts/settings/ability/archetype_talents/talents/ogryn_talents.lua — L1931-L1955](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/ogryn_talents.lua#L1931-L1955)
- [scripts/ui/views/talent_builder_view/layouts/ogryn_tree.lua — L1548-L1570](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/ui/views/talent_builder_view/layouts/ogryn_tree.lua#L1548-L1570)

## Example assumptions and limits

- **Trigger**: Refund 1 rock if the throw hits at least one weakspot, or hits no damageable target at all. Hitting terrain can still count as a miss; hitting a destructible object may invalidate it.

- **Charge example**: After throwing the last rock, a qualifying throw restores the count from 0 to 1. Each trigger restores only 1 rock, and the total cannot exceed 4.

- **Cooldown example**: The 5s cooldown starts from the previous refund. If a second rock finishes its flight at 4s, it does not refund a rock even if its hit conditions qualify. The check occurs at projectile completion, not merely from the times the throw buttons were pressed.

- **Original English scope**: The game text says “hit no enemies”, while the accepted hit flag includes damageable objects. A destructible hit can therefore prevent a refund without an enemy hit; specific in-game cases have not been tested.

The check uses hit and weakspot counts reported when the projectile completes. A normal enemy hit without a weakspot is not a miss. Each trigger restores only 1 rock and cannot exceed the current charge maximum. The English/code scope difference above follows existing evidence; it is not a new mechanism investigation. Specific destructible targets and final runtime behavior have not been verified in game. English and code evidence both correspond to 1.13.1.

<a id="original-english-template-and-reconstruction"></a>

## Original English template and reconstruction

Steam Build `25606770`; `content/localization/ui`, resource hash `63564edcb7c3c5ee`; language `en` (code `0`).

- Name key `loc_talent_ogryn_replenish_rock_on_miss_name`, hash `0c11b8c8`, entry 772: **That One Didn't Count**.
- Description key `loc_talent_ogryn_replenish_rock_on_miss_desc`, hash `af804692`, entry 11298.

Full raw template:

~~~text
{talent_name:%s} Replenishes a Charge if you hit a Weakspot or hit no enemies. {cooldown_duration:%s}s Cooldown.
~~~

| Placeholder | Value | Formatting |
|---|---|---|
| talent_name | loc_ability_ogryn_friend_rock | Localized name → Big Friendly Rock |
| cooldown_duration | Verified shared cooldown 5 | Number → 5; the template supplies s |

Referenced name `loc_ability_ogryn_friend_rock`, hash `ff2a25bd`, entry 16566: **Big Friendly Rock**.

Static reconstruction; not an observed game screen:

~~~text
Big Friendly Rock Replenishes a Charge if you hit a Weakspot or hit no enemies. 5s Cooldown.
~~~

## English comparison

The independently read English agrees with the weakspot refund, one restored charge and 5s cooldown. Its “hit no enemies” condition differs from the accepted broader damageable-target hit flag, so the player description states the narrower qualifying condition and preserves an English erratum. Completion-time evaluation, terrain/destructible distinctions, charge cap and examples supplement the text. This judgement uses existing mechanism evidence without a new source trace.

## Icon source

[Original image](https://gameslantern.com/storage/sites/darktide/exporter/talents/ogryn/tactical_modifier/ogryn_replenish_rock_on_miss.webp) | [Media-Assets Issue](https://github.com/SyuanTsai/Media-Assets/issues/10#issuecomment-5931383354) | [Existing attachment](https://github.com/user-attachments/assets/3d000b06-db5c-4ff3-96c9-54d09216587d). The icon identifies the talent; it is not mechanism evidence.
