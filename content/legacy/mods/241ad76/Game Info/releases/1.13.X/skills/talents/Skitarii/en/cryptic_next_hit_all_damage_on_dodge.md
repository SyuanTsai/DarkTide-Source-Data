# Precision Combat Augurs: source evidence

[繁體中文](../cryptic_next_hit_all_damage_on_dodge.md) | [Player description](README.md#cryptic_next_hit_all_damage_on_dodge) | [Technical index](SOURCE_INDEX.md) | [English comparison](LOCALIZATION_COMPARISON.md#cryptic_next_hit_all_damage_on_dodge)

Release 1.13.1; fixed SHA `7e662fcda16219d775b84af50322be2e9cd9d62e`. Talent `cryptic_next_hit_all_damage_on_dodge`; name key `loc_talent_cryptic_next_hit_damage_on_dodge`; description key `loc_talent_cryptic_next_attack_all_damage_on_dodge_desc`. Node `node_43262e68-cd8e-491e-8bd5-f0b4164fa561`; category Talent; one point. Mechanisms and examples reuse verified source evidence; no in-game test was performed.

## Source-confirmed behavior and static derivation

A successful dodge adds a one-stack `server_only_proc_buff`, with conditional `melee_damage` and `ranged_damage` modifiers of `0.15`. `on_shoot` or `on_sweep_finish` sets `attack_boost_active = false` and exits the effect. There is no expiry duration.

## Fixed source evidence

- [scripts/settings/buff/archetype_buff_templates/cryptic_buff_templates.lua — L3766-L3798](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/cryptic_buff_templates.lua#L3766-L3798)
- [scripts/utilities/attack/damage_calculation.lua — L295-L319](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/attack/damage_calculation.lua#L295-L319)
- [scripts/settings/talent/talent_settings_cryptic.lua — L667-L669](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/talent/talent_settings_cryptic.lua#L667-L669)
- [scripts/settings/buff/archetype_buff_templates/cryptic_buff_templates.lua — L3754-L3765](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/cryptic_buff_templates.lua#L3754-L3765)
- [scripts/settings/ability/archetype_talents/talents/cryptic_talents.lua — L2730-L2745](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/cryptic_talents.lua#L2730-L2745)
- [scripts/ui/views/talent_builder_view/layouts/cryptic_tree.lua — L2455-L2479](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/ui/views/talent_builder_view/layouts/cryptic_tree.lua#L2455-L2479)

## Example assumptions and limits

- **Trigger**: Successfully dodging an enemy attack grants **15% Damage** to your next melee swing or shot.
- **Consumption**: The effect is consumed when the melee swing finishes or you fire, even if the attack misses. Repeated dodges cannot store multiple uses.
- **Damage example**: Base damage **100** becomes `100 × 1.15 = 115`. With an existing **25%** bonus at the same stage, `100 × (1 + 25% + 15%) = 140`.

The within-frame damage order for multiple projectiles or delayed hits still requires testing. The bonus cannot be promised for every projectile that arrives later. The stored effect has no expiry duration and a maximum of one use.

Mechanisms reuse the fixed-version evidence, with local Build 25606770 English text corresponding to 1.13.1. Actual presentation and behavior remain unobserved in game. Missing details are supplementary explanations.

<a id="original-english-template-and-reconstruction"></a>

## Original English template and reconstruction

Steam Build `25606770`; `content/localization/ui`, resource hash `63564edcb7c3c5ee`; language `en` (code `0`).

- Name key `loc_talent_cryptic_next_hit_damage_on_dodge`, hash `cf9ae6f0`, entry 13413: **Precision Combat Augurs**.
- Description key `loc_talent_cryptic_next_attack_all_damage_on_dodge_desc`, hash `501926d3`, entry 5203.

Full raw template:

~~~text
{damage:%s} Damage for your Next Attack on Successful Dodge.
~~~

| Placeholder | Value | Formatting |
|---|---|---|
| `{damage:%s}` | `0.15` → `+15%` | Percentage; `+` prefix |

The existing display mapping in `scripts/settings/ability/archetype_talents/talents/cryptic_talents.lua` (L2739-L2744) uses the verified `damage` value.

Static reconstruction; not an observed game screen:

~~~text
+15% Damage for your Next Attack on Successful Dodge.
~~~

## English comparison

The English correctly promises damage for the next attack following a successful dodge; it does not restrict this to the next hit. Consumption on firing or finishing a swing, including a miss, the single stored use, and no expiry duration are supplementary details. Delayed and multiple-projectile ordering remains unobserved.

## Icon source

[Original image](https://gameslantern.com/storage/sites/darktide/exporter/talents/cryptic/default/cryptic_next_hit_all_damage_on_dodge.webp) | [Media-Assets Issue](https://github.com/SyuanTsai/Media-Assets/issues/13#issuecomment-5935656030) | [Existing attachment](https://github.com/user-attachments/assets/a18e19ec-6cad-4a2c-996b-6e7eddf47195). The icon identifies the talent; it is not mechanism evidence.
