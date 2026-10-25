# Hyper-Critical: source evidence

[繁體中文](../broker_passive_melee_crit_instakill.md) | [Player description](README.md#broker_passive_melee_crit_instakill) | [Technical index](SOURCE_INDEX.md) | [English comparison](LOCALIZATION_COMPARISON.md#broker_passive_melee_crit_instakill)

Release 1.13.1; fixed SHA `7e662fcda16219d775b84af50322be2e9cd9d62e`. Talent `broker_passive_melee_crit_instakill`; name key `loc_talent_broker_passive_melee_crit_instakill`; description key `loc_talent_broker_passive_melee_crit_instakill_desc`. Node `node_d20bf7ae-9dcb-4dfe-b765-2c8db80bf91f`; category Talent; one point. Mechanisms and examples reuse verified source evidence; no in-game test was performed.

## Source-confirmed behavior and static derivation

- After `on_crit_melee`, read `HEALTH_ALIVE`, require a human-sized enemy and exclude `enemy_type` Captain. Set `threshold = actual_damage_dealt × 2`, then compare post-hit `current_health < threshold × 0.5`.
- `Attack._execute` first applies Health damage through `_handle_attack`, then emits the Buff event through `_handle_buffs`. The comparison therefore uses post-hit Health against one hit's Damage.

## Fixed source evidence

- [scripts/utilities/attack/attack.lua — L357-L386](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/attack/attack.lua#L357-L386)
- [scripts/settings/buff/archetype_buff_templates/broker_buff_templates.lua — L2140-L2194](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/broker_buff_templates.lua#L2140-L2194)
- [scripts/settings/ability/archetype_talents/talents/broker_talents.lua — L1713-L1733](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/broker_talents.lua#L1713-L1733)
- [scripts/ui/views/talent_builder_view/layouts/broker_tree.lua — L1482-L1510](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/ui/views/talent_builder_view/layouts/broker_tree.lua#L1482-L1510)

## Example assumptions and limits

- **Trigger**: After a Critical Melee Hit against a human-sized enemy, execute it if it is still alive and its remaining Health is strictly below the actual Damage dealt by that hit. Captain enemies are excluded.

- **Health threshold example**: An enemy starts with 190 Health and the Critical Hit deals 100, leaving 90. Since 90 < 100, it is executed. Starting with 200 leaves 100; 100 is not below 100, so execution does not trigger.

- **Meaning of twice the Damage**: Provided this hit actually removes the same amount of Health, the condition is equivalent to pre-hit Health below twice the Damage. It does not mean post-hit Health below twice the Damage.

Additional damage, multiple hits in the same frame and Health scaling may affect the value read by the event. The example assumes a single hit with matching damage. Mechanisms reuse the fixed-version evidence, with local Build 25606770 English text corresponding to 1.13.1. Actual presentation and behavior remain unobserved in game. Missing details are supplementary explanations.

<a id="original-english-template-and-reconstruction"></a>

## Original English template and reconstruction

Steam Build `25606770`; `content/localization/ui`, resource hash `63564edcb7c3c5ee`; language `en` (code `0`).

- Name key `loc_talent_broker_passive_melee_crit_instakill`, hash `f0e426c8`, entry 15652: **Hyper-Critical**.
- Description key `loc_talent_broker_passive_melee_crit_instakill_desc`, hash `41e81648`, entry 4268.

Full raw template:

~~~text
Critical Melee Hits instantly kill human sized Enemies if their current Health is less than {threshold:%s} times the amount of Damage of the attack.
~~~

| Placeholder | Value | Formatting |
|---|---|---|
| `threshold` | `health_by_damage_threshold = 2` | Number: `2` |

The accepted threshold supplies 2. The talent display mapping at `broker_talents.lua` L1713-L1733 reads `health_by_damage_threshold` as a number. Reuse the accepted number formatting; the `[Dev]` suffix is resource metadata, outside the displayed template.

Static reconstruction; not an observed game screen:

~~~text
Critical Melee Hits instantly kill human sized Enemies if their current Health is less than 2 times the amount of Damage of the attack.
~~~

## English comparison

The Critical Melee Hit and human-sized target conditions agree. The phrase "current Health" does not specify whether Health is read before or after the hit: twice the Damage matches the pre-hit equivalent only under the stated single-hit assumptions, while the implementation compares post-hit Health with one hit's Damage. The timing of the English threshold cannot be confirmed from this wording alone; it is not recorded as a clear contradiction. The Captain exclusion and strict post-hit example are supplementary details. The Chinese document separately records that its Chinese description omits the melee restriction; this English template includes it.

## Icon source

[Original image](https://gameslantern.com/storage/sites/darktide/exporter/talents/broker/default/broker_passive_melee_crit_instakill.webp) | [Media-Assets Issue](https://github.com/SyuanTsai/Media-Assets/issues/12#issuecomment-5933987866) | [Existing attachment](https://github.com/user-attachments/assets/83713f05-33fd-41c1-86f2-c536d7a1f06c). The icon identifies the talent; it is not mechanism evidence.
