# Crystalline Will: source evidence

[繁體中文](../psyker_alternative_peril_explosion.md) | [Player description](README.md#psyker_alternative_peril_explosion) | [Technical index](SOURCE_INDEX.md) | [English comparison](LOCALIZATION_COMPARISON.md#psyker_alternative_peril_explosion)

Release 1.13.1; fixed SHA `7e662fcda16219d775b84af50322be2e9cd9d62e`. Talent `psyker_alternative_peril_explosion`; name key `loc_talent_psyker_alternative_peril_explosion`; description key `loc_talent_psyker_alternative_peril_explosion_new_desc`. Node `node_25ffe424-4f39-4206-8304-66333fe44fa5`; category Talent; one point. Mechanisms and examples reuse verified source evidence; no in-game test was performed.

## Source-confirmed behavior and static derivation

- The special rule `psyker_no_knock_down_overload` causes `ActionOverloadExplosion` to skip its original `instakill`. The passive checks `action_warp_charge_explode` / `action_complete` in `on_action_finish`. If no Elite kill follows, it calls `remove_wounds(1)`; `current_wounds <= 1` instead causes `instakill`. The explosion's `plasma_overheat` profile reads `overheat_explosion_damage_modifier`, and the radius template reads `radius_modifier`.

## Fixed source evidence

- [scripts/settings/buff/archetype_buff_templates/psyker_buff_templates.lua — L3641-L3703](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/psyker_buff_templates.lua#L3641-L3703)
- [scripts/settings/talent/talent_settings_psyker.lua — L124-L127](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/talent/talent_settings_psyker.lua#L124-L127)
- [scripts/extension_systems/weapon/actions/action_overload_explosion.lua — L103-L141](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/weapon/actions/action_overload_explosion.lua#L103-L141)
- [scripts/settings/damage/explosion_templates/player_explosion_templates.lua — L9-L31](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/damage/explosion_templates/player_explosion_templates.lua#L9-L31)
- [scripts/settings/damage/damage_profiles/common_damage_profile_templates.lua — L575-L595](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/damage/damage_profiles/common_damage_profile_templates.lua#L575-L595)
- [scripts/settings/ability/archetype_talents/talents/psyker_talents.lua — L2763-L2788](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/psyker_talents.lua#L2763-L2788)
- [scripts/ui/views/talent_builder_view/layouts/psyker_tree.lua — L1972-L1996](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/ui/views/talent_builder_view/layouts/psyker_tree.lua#L1972-L1996)

## Example assumptions and limits

- **Explosion effect**: Overload Explosion Damage increases by 100% and radius by 25%, changing the cost of surviving the explosion.

- **Wound cost**: After an explosion, ordinarily remove one Wound; with only one Wound left, you die. If this explosion kills an Elite enemy, its Wound cost is waived.

- **Damage and radius example**: Compare only these two modifiers. An original 100 explosion Damage becomes 100 × 2 = 200; an original 10-metre explosion radius becomes 10 × 1.25 = 12.5 metres. Actual Damage remains subject to distance falloff and enemy armour.

The delayed source check is `t <= damage_t`, rather than `>=`. Whether a delayed update can miss the resolution, and whether repeated explosions retain flags, have not been tested in game. The full interaction of Wound removal with current maximum Health and Medicae restoration is not inferred from the talent description. Mechanisms reuse the fixed-version evidence, with local Build 25606770 English text corresponding to 1.13.1. Actual presentation and behavior remain unobserved in game. Missing details are supplementary explanations.

<a id="original-english-template-and-reconstruction"></a>

## Original English template and reconstruction

Steam Build `25606770`; `content/localization/ui`, resource hash `63564edcb7c3c5ee`; language `en` (code `0`).

- Name key `loc_talent_psyker_alternative_peril_explosion`, hash `fef3e1de`, entry 16552: **Crystalline Will**.
- Description key `loc_talent_psyker_alternative_peril_explosion_new_desc`, hash `7ea53d48`, entry 8219.

Full raw template:

~~~text
{overload_damage:%s} Overload Explosion Damage and {overload_radius:%s} Overload Explosion Radius.

Overloading through Perils of the Warp no longer knocks you down, but you still take the appropriate Corruption Damage. If the explosion kills an Elite enemy, you don't take any Corruption Damage.
~~~

| Placeholder | Value | Formatting |
|---|---|---|
| `overload_damage` | 1 | Percentage ×100, with `+` prefix: +100%. |
| `overload_radius` | 0.25 | Percentage ×100, with `+` prefix: +25%. |

Display mapping: [psyker_talents.lua L2768-L2779](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/psyker_talents.lua#L2768-L2779). Values reuse the accepted Chinese evidence.

Static reconstruction; not an observed game screen:

~~~text
+100% Overload Explosion Damage and +25% Overload Explosion Radius.

Overloading through Perils of the Warp no longer knocks you down, but you still take the appropriate Corruption Damage. If the explosion kills an Elite enemy, you don't take any Corruption Damage.
~~~

## English comparison

The Damage and radius bonuses agree, as does bypassing the ordinary overload incapacitation with an Elite-kill exception to the cost. The English calls that cost “Corruption Damage”; the accepted evidence directly establishes Wound removal or death at the final Wound, but leaves its full Health and Medicae interaction unresolved. That terminology remains Cannot confirm rather than an asserted English error. The update and final-Wound conditions are supplementary details.

## Icon source

[Original image](https://gameslantern.com/storage/sites/darktide/exporter/talents/psyker/default/psyker_alternative_peril_explosion.webp) | [Media-Assets Issue](https://github.com/SyuanTsai/Media-Assets/issues/7#issuecomment-5928034845) | [Existing attachment](https://github.com/user-attachments/assets/6b51b11f-eed5-45f3-b539-6b4502778099). The icon identifies the talent; it is not mechanism evidence.
