# Holy Tools: source evidence

[繁體中文](../zealot_weapon_special_damage.md) | [Player description](README.md#zealot_weapon_special_damage) | [Technical index](SOURCE_INDEX.md) | [English comparison](LOCALIZATION_COMPARISON.md#zealot_weapon_special_damage)

Release 1.13.1; fixed SHA `7e662fcda16219d775b84af50322be2e9cd9d62e`. Talent `zealot_weapon_special_damage`; name key `loc_talent_zealot_weapon_special_damage`; description key `loc_talent_zealot_weapon_special_damage_desc`. Node `node_4753943d-671c-4898-b061-b0d1f22accd5`; category Skill; one point. Mechanisms and examples reuse verified source evidence; no in-game test was performed.

## Source-confirmed behavior and static derivation

- `on_weapon_special_activate` requires `params.wielded_slot == slot_primary`. The effect lasts 5 seconds, has one refreshing stack and grants `melee_damage` +0.2. `on_sweep_finish` calls `force_finish` directly, without a hit check.

## Fixed source evidence

- [scripts/settings/buff/archetype_buff_templates/zealot_buff_templates.lua — L4736-L4778](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/zealot_buff_templates.lua#L4736-L4778)
- [scripts/settings/talent/talent_settings_zealot.lua — L246-L249](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/talent/talent_settings_zealot.lua#L246-L249)
- [scripts/utilities/attack/damage_calculation.lua — L289-L303](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/attack/damage_calculation.lua#L289-L303)
- [scripts/settings/ability/archetype_talents/talents/zealot_talents.lua — L3268-L3287](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/zealot_talents.lua#L3268-L3287)
- [scripts/ui/views/talent_builder_view/layouts/zealot_tree.lua — L2088-L2110](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/ui/views/talent_builder_view/layouts/zealot_tree.lua#L2088-L2110)

## Example assumptions and limits

- **Trigger:** activating a Melee Weapon Special grants +20% damage to the next Melee attack within 5 seconds. The effect is consumed when that attack ends, including a missed swing. If you do not swing before the deadline, it expires.
- **Damage example:** base damage 100 becomes 100 × 1.2 = 120. With an existing same-stage 25% Melee damage bonus, the result is 100 × (1 + 25% + 20%) = 145. For one sweep, the effect lasts until that swing ends.

- Whether a particular Weapon Special sends the activate event depends on its weapon action. Each weapon has not been tested in game, so this does not guarantee that every special input triggers the effect.
- The original game text uses the 1.13.1 / Steam Build 25606770 `ui` resource. Differences between description and implementation still require an in-game check.
- The verified Chinese comparison for hash `21bf1b41` found no explicit translation conflict in the direction of the effect. Omitted formulas, caps and detailed limits are supplements.

Mechanisms reuse the fixed-version evidence, with local Build 25606770 English text corresponding to 1.13.1. Actual presentation and behavior remain unobserved in game. Missing details are supplementary explanations.

<a id="original-english-template-and-reconstruction"></a>

## Original English template and reconstruction

Steam Build `25606770`; `content/localization/ui`, resource hash `63564edcb7c3c5ee`; language `en` (code `0`).

- Name key `loc_talent_zealot_weapon_special_damage`, hash `af1ee73d`, entry 11270: **Holy Tools**.
- Description key `loc_talent_zealot_weapon_special_damage_desc`, hash `21bf1b41`, entry 2199.

Full raw template:

~~~text
{damage:%s} Damage on your next Melee Attack within {duration:%s}s after activating your Weapon Special.
~~~

| Placeholder | Value | Formatting |
|---|---|---|
| `damage` | `0.2` | `percentage`, `+` prefix: `+20%` |
| `duration` | `5` | `number`: `5` |

The display mapping uses the verified `damage` and `duration` fields of `talent_settings.zealot_weapon_special_damage`.

Static reconstruction; not an observed game screen:

~~~text
+20% Damage on your next Melee Attack within 5s after activating your Weapon Special.
~~~

## English comparison

The English independently agrees on the next Melee attack, +20% damage and a 5-second window after Weapon Special activation. It does not explicitly claim that every weapon's special input qualifies. The primary-slot event requirement, refreshing stack and sweep-end consumption even on a miss are supplements; no explicit English contradiction was found.

## Icon source

[Original image](https://gameslantern.com/storage/sites/darktide/exporter/talents/zealot/default/zealot_weapon_special_damage.webp) | [Media-Assets Issue](https://github.com/SyuanTsai/Media-Assets/issues/8#issuecomment-5929296872) | [Existing attachment](https://github.com/user-attachments/assets/28bd1a77-6a4b-44e5-b46c-1d1a334479e7). The icon identifies the talent; it is not mechanism evidence.
