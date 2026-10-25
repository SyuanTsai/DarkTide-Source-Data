# Martyr's Purpose: source evidence

[繁體中文](../zealot_restore_stealth_cd_on_damage.md) | [Player description](README.md#zealot_restore_stealth_cd_on_damage) | [Technical index](SOURCE_INDEX.md) | [English comparison](LOCALIZATION_COMPARISON.md#zealot_restore_stealth_cd_on_damage)

Release 1.13.1; fixed SHA `7e662fcda16219d775b84af50322be2e9cd9d62e`. Talent `zealot_restore_stealth_cd_on_damage`; name key `loc_talent_zealot_damage_taken_restores_cd`; description key `loc_talent_zealot_damage_taken_restores_cd_new_description`. Node `node_5a6a015e-77a8-4675-a51b-7fd233eb1b26`; category Ability; one point. Mechanisms and examples reuse verified source evidence; no in-game test was performed.

## Source-confirmed behavior and static derivation

- The talent applies the passive Buff `zealot_cooldown_based_on_health`. The server-side Buff stores the `HealthExtension` and `AbilityExtension`; its timer starts at the latest fixed time +1.
- On each timer expiry, it reads `current_health_percent`, computes `multiplier=clamp((1-health_percent)/(1-0.25),0,1)`, directly calls `restore_ability_resource('combat_ability')` with `0.5×multiplier`, and advances the timer by 1 second. At or below 25% Health, the multiplier is capped at 1: at most 0.5 additional resource per second.
- This is not an `on_damage` proc. It continually evaluates current Health percentage; damage only increases recharge indirectly by lowering Health, while healing decreases the extra recharge.
- Natural recharge operates separately through `PlayerUnitAbilityExtension`. The time examples below assume natural regeneration of 1 resource/s and each Buff interval executing on schedule. Other bonuses, pauses, the cap and fixed updates affect the elapsed time.

## Fixed source evidence

- [scripts/settings/ability/archetype_talents/talents/zealot_talents.lua — L632-L656](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/zealot_talents.lua#L632-L656)
- [scripts/settings/talent/talent_settings_zealot.lua — L548-L552](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/talent/talent_settings_zealot.lua#L548-L552)
- [scripts/settings/buff/archetype_buff_templates/zealot_buff_templates.lua — L2512-L2549](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/zealot_buff_templates.lua#L2512-L2549)
- [scripts/extension_systems/ability/player_unit_ability_extension.lua — L773-L875](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/ability/player_unit_ability_extension.lua#L773-L875)
- [scripts/extension_systems/ability/player_unit_ability_extension.lua — L1437-L1461](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/ability/player_unit_ability_extension.lua#L1437-L1461)
- [scripts/settings/ability/archetype_talents/talents/zealot_talents.lua — L632-L656](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/zealot_talents.lua#L632-L656)
- [scripts/ui/views/talent_builder_view/layouts/zealot_tree.lua — L973-L999](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/ui/views/talent_builder_view/layouts/zealot_tree.lua#L973-L999)

## Example assumptions and limits

- **Behavior**: Lower Health makes your combat ability recharge faster. Full Health gives no extra recharge. At 25% Health or less, the maximum is equivalent to recovering an additional 0.5 seconds of base cooldown per second.
- **Formula**: Extra recovery = 0.5 × min[(1 − current Health fraction) ÷ 0.75, 1]. Healing reduces this bonus; another hit is not required for it to update.
- **Cooldown example**: At a steady 50% Health with normal natural recharge, total progress per second is 1 + 0.5 × 0.5 ÷ 0.75 ≈ 1.333 seconds, so a 30-second ability recharges in about 22.5 seconds. At 25% Health or less, 30 ÷ 1.5 = 20 seconds. Actual settlement occurs once per second, so timing may differ slightly.

- The talent value describes additional recharge. Total recharge also includes natural regeneration and other cooldown modifiers.
- Health is sampled once per second; crossing a Health threshold need not affect recharge in the same frame.
- The Chinese inventory describes an effect based on lost Health. The accepted source says individual incoming damage is not directly converted into cooldown recovery; those meanings do not directly conflict, so the note does not establish an erratum.
- The accepted Chinese comparison at hash `62f53f3a` records matching effect directions in both languages. Trigger, recovery and calculation details are supplementary. Actual game presentation and behavior remain unobserved.

Mechanisms reuse the fixed-version evidence, with local Build 25606770 English text corresponding to 1.13.1. Actual presentation and behavior remain unobserved in game. Missing details are supplementary explanations.

<a id="original-english-template-and-reconstruction"></a>

## Original English template and reconstruction

Steam Build `25606770`; `content/localization/ui`, resource hash `63564edcb7c3c5ee`; language `en` (code `0`).

- Name key `loc_talent_zealot_damage_taken_restores_cd`, hash `2d55be3c`, entry 2953: **Martyr's Purpose**.
- Description key `loc_talent_zealot_damage_taken_restores_cd_new_description`, hash `62f53f3a`, entry 6429.

Full raw template:

~~~text
Up to {cooldown_regen:%s} Ability Cooldown Regeneration based on Missing Health. Max reached at {current_health:%s} Current Health.
~~~

| Placeholder | Value | Formatting |
|---|---|---|
| `cooldown_regen` | 0.5 → +50% | `percentage`, `+` prefix; `combat_ability_cd_restore_on_damage.cooldown_regen` |
| `current_health` | 0.25 → 25% | `percentage`; `combat_ability_cd_restore_on_damage.max_health` |

The minimal display mapping at `zealot_talents.lua` L632-L656 supplies the accepted settings. Its unused `cooldown_restore` entry is not part of this English template.

Static reconstruction; not an observed game screen:

~~~text
Up to +50% Ability Cooldown Regeneration based on Missing Health. Max reached at 25% Current Health.
~~~

## English comparison

Independently read, the English bases regeneration on missing Health and places its maximum at 25% current Health; it does not require a new damage event or promise a direct conversion of each hit. The +50% value agrees with the maximum extra 0.5 resource/s when natural regeneration is 1 resource/s. The once-per-second sampling, linear interpolation, healing response and approximate recharge times are supplements, not English errata.

## Icon source

[Original image](https://gameslantern.com/storage/sites/darktide/exporter/talents/zealot/ability_modifier/zealot_restore_stealth_cd_on_damage.webp) | [Media-Assets Issue](https://github.com/SyuanTsai/Media-Assets/issues/8#issuecomment-5929289315) | [Existing attachment](https://github.com/user-attachments/assets/9e0abda0-3593-44eb-8ca8-9a7f282bcfd8). The icon identifies the talent; it is not mechanism evidence.
