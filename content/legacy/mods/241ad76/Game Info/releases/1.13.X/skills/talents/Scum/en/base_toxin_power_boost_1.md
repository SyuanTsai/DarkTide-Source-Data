# Potent Tox: source evidence

[繁體中文](../base_toxin_power_boost_1.md) | [Player description](README.md#base_toxin_power_boost_1) | [Technical index](SOURCE_INDEX.md) | [English comparison](LOCALIZATION_COMPARISON.md#base_toxin_power_boost_1)

Release 1.13.1; fixed SHA `7e662fcda16219d775b84af50322be2e9cd9d62e`. Talent `base_toxin_power_boost_1`; name key `loc_talent_toxin_damage_boost`; description key `loc_talent_toxin_damage_boost_desc`. Node `node_8e4d87c9-49d0-4bee-a732-7ddeb3949022`; category Talent; one point. Mechanisms and examples reuse verified source evidence; no in-game test was performed.

## Source-confirmed behavior and static derivation

- Tier 1 grants `toxin_power = 0.1`. The `toxin_variant` Damage template lists `power_stat_buffs = toxin_power`; the `Attack` flow first multiplies `power_level`, then passes it to the Damage curve.

## Fixed source evidence

- [scripts/settings/buff/player_buff_templates.lua — L1162-L1190](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/player_buff_templates.lua#L1162-L1190)
- [scripts/settings/damage/damage_profiles/buff_damage_profile_templates.lua — L652-L683](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/damage/damage_profiles/buff_damage_profile_templates.lua#L652-L683)
- [scripts/utilities/attack/attack.lua — L270-L289](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/attack/attack.lua#L270-L289)
- [scripts/settings/ability/archetype_talents/talents/base_talents.lua — L1757-L1781](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/base_talents.lua#L1757-L1781)
- [scripts/ui/views/talent_builder_view/layouts/broker_tree.lua — L970-L998](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/ui/views/talent_builder_view/layouts/broker_tree.lua#L970-L998)

## Example assumptions and limits

- **Behavior**: Increases the Power used for Toxin Damage; it does not increase Toxin stacks or duration.

- **Power example**: With Toxin input Power of 500, this effect alone gives 500 × 1.1 = 550, then the Toxin Damage curve and enemy armour determine Damage. Each Toxin tick cannot simply be treated as dealing a fixed 10% more Damage.

Mechanisms reuse the fixed-version evidence, with local Build 25606770 English text corresponding to 1.13.1. Actual presentation and behavior remain unobserved in game. Missing details are supplementary explanations.

<a id="original-english-template-and-reconstruction"></a>

## Original English template and reconstruction

Steam Build `25606770`; `content/localization/ui`, resource hash `63564edcb7c3c5ee`; language `en` (code `0`).

- Name key `loc_talent_toxin_damage_boost`, hash `d8d25992`, entry 14046: **Potent Tox**.
- Description key `loc_talent_toxin_damage_boost_desc`, hash `f89ff0b1`, entry 16144.

Full raw template:

~~~text
{power:%s} Toxin Strength.
~~~

| Placeholder | Value | Formatting |
|---|---|---|
| `{power:%s}` | Tier 1: 0.1 | Tier-aware `toxin_power` lookup; `percentage`, `+` prefix → `+10%` |

The existing display map at `base_talents.lua` L1757-L1781 resolves `base_toxin_power_boost_1.stat_buffs.toxin_power` with `tier = true` (fallback 0.1). The verified value and reused percentage formatter give +10%. The JSONL `[Writer]` suffix belongs to metadata, not the talent name or description.

Static reconstruction; not an observed game screen:

~~~text
+10% Toxin Strength.
~~~

## English comparison

The English names Toxin Strength, consistent with the verified Toxin Power bonus. It makes no explicit claim of a fixed final Damage increase. The Power calculation, Damage curve, armour, and unchanged stacks/duration supplement the description.

## Icon source

[Original image](https://gameslantern.com/storage/sites/darktide/exporter/talents/broker/stat/base_toxin_power_boost_1.webp) | [Media-Assets Issue](https://github.com/SyuanTsai/Media-Assets/issues/12#issuecomment-5933987866) | [Existing attachment](https://github.com/user-attachments/assets/105c999d-8563-4033-aea2-15b5fc968cc4). The icon identifies the talent; it is not mechanism evidence.
