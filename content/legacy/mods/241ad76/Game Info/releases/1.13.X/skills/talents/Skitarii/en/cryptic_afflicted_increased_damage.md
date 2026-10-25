# Weakness Analysis Doctrine: source evidence

[繁體中文](../cryptic_afflicted_increased_damage.md) | [Player description](README.md#cryptic_afflicted_increased_damage) | [Technical index](SOURCE_INDEX.md) | [English comparison](LOCALIZATION_COMPARISON.md#cryptic_afflicted_increased_damage)

Release 1.13.1; fixed SHA `7e662fcda16219d775b84af50322be2e9cd9d62e`. Talent `cryptic_afflicted_increased_damage`; name key `loc_talent_cryptic_afflicted_increased_damage`; description key `loc_talent_cryptic_afflicted_increased_damage_desc`. Node `node_e725d712-ad48-46eb-b3a4-e760e83e2e9b`; category Talent; one point. Mechanisms and examples reuse verified source evidence; no in-game test was performed.

## Source-confirmed behavior and static derivation

- The proc first checks `on_melee_hit` or `on_ranged_hit`. It then checks the target's buffs for the `electrocuted` group or `AFFLICTED_KEYWORDS`. The damage bonus is applied to the player, rather than being limited to that target.

## Fixed source evidence

- [scripts/settings/buff/archetype_buff_templates/cryptic_buff_templates.lua — L2684-L2690](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/cryptic_buff_templates.lua#L2684-L2690)
- [scripts/utilities/attack/damage_calculation.lua — L282-L321](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/attack/damage_calculation.lua#L282-L321)
- [scripts/settings/talent/talent_settings_cryptic.lua — L479-L482](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/talent/talent_settings_cryptic.lua#L479-L482)
- [scripts/settings/buff/archetype_buff_templates/cryptic_buff_templates.lua — L2692-L2733](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/cryptic_buff_templates.lua#L2692-L2733)
- [scripts/utilities/attack/damage_calculation.lua — L232-L245](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/attack/damage_calculation.lua#L232-L245)
- [scripts/settings/ability/archetype_talents/talents/cryptic_talents.lua — L2074-L2093](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/cryptic_talents.lua#L2074-L2093)
- [scripts/ui/views/talent_builder_view/layouts/cryptic_tree.lua — L702-L731](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/ui/views/talent_builder_view/layouts/cryptic_tree.lua#L702-L731)

## Example assumptions and limits

- **Trigger**: Hitting an enemy affected by **Electrocution, Burning, Soulblaze, Bleeding or Toxin** with a melee or ranged attack grants **10% Damage for 8 seconds**.
- **Duration and scope**: After gaining the bonus, you can use it against other targets. Another qualifying hit restarts the 8-second countdown without adding stacks.
- **Example**: At 100 base damage with an existing same-stage 25% bonus, `100 × (1 + 25% + 10%) = 135` damage.

- The example assumes 100 base damage and another 25% bonus in the same stage, adding this talent's 10% to give 135.
- The bonus belongs to the player and remains usable against other targets for its duration. Qualifying hits refresh the duration without stacking.
- Scope and refreshing details supplement the English. Actual presentation and behavior remain unobserved in game.

Mechanisms reuse the fixed-version evidence, with local Build 25606770 English text corresponding to 1.13.1. Actual presentation and behavior remain unobserved in game. Missing details are supplementary explanations.

<a id="original-english-template-and-reconstruction"></a>

## Original English template and reconstruction

Steam Build `25606770`; `content/localization/ui`, resource hash `63564edcb7c3c5ee`; language `en` (code `0`).

- Name key `loc_talent_cryptic_afflicted_increased_damage`, hash `7e4a79f1`, entry 8205: **Weakness Analysis Doctrine**.
- Description key `loc_talent_cryptic_afflicted_increased_damage_desc`, hash `70e7ba50`, entry 7334.

Full raw template:

~~~text
{damage:%s} Damage for {duration:%s}s when hitting an Electrocuted, Soulblazed, Burning, Bleeding, or Toxin afflicted enemy with a Melee or Ranged attack.
~~~

| Placeholder | Value | Formatting |
|---|---|---|
| `damage` | +10% | `percentage`, prefix `+`: verified `talent_settings.cryptic_afflicted_increased_damage.damage = 0.1` |
| `duration` | 8 | `number`: verified `talent_settings.cryptic_afflicted_increased_damage.duration = 8` |

The display mappings in `cryptic_talents.lua` L2082–L2092 use the already verified damage bonus and duration.

Static reconstruction; not an observed game screen:

~~~text
+10% Damage for 8s when hitting an Electrocuted, Soulblazed, Burning, Bleeding, or Toxin afflicted enemy with a Melee or Ranged attack.
~~~

## English comparison

The English lists the same qualifying conditions, melee/ranged hit trigger, +10% Damage and 8-second duration. It presents a timed damage bonus and does not explicitly restrict it to the afflicted target. The player's ability to use that bonus against other targets, non-stacking refresh behavior, buff-keyword checks and same-stage calculation are supplementary details; no explicit English contradiction was identified.

## Icon source

[Original image](https://gameslantern.com/storage/sites/darktide/exporter/talents/cryptic/default/cryptic_afflicted_increased_damage.webp) | [Media-Assets Issue](https://github.com/SyuanTsai/Media-Assets/issues/13#issuecomment-5935647528) | [Existing attachment](https://github.com/user-attachments/assets/4683657a-edf5-4420-b60f-68eddc85ef43). The icon identifies the talent; it is not mechanism evidence.
