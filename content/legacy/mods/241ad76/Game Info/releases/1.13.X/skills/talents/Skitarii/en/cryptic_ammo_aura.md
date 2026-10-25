# Ammunition Deposit: source evidence

[繁體中文](../cryptic_ammo_aura.md) | [Player description](README.md#cryptic_ammo_aura) | [Technical index](SOURCE_INDEX.md) | [English comparison](LOCALIZATION_COMPARISON.md#cryptic_ammo_aura)

Release 1.13.1; fixed SHA `7e662fcda16219d775b84af50322be2e9cd9d62e`. Talent `cryptic_ammo_aura`; name key `loc_talent_cryptic_ammo_aura`; description key `loc_talent_cryptic_ammo_aura_toughness_desc`. Node `node_4d9ce721-2e3e-4c09-8fa2-345ff9c390bc`; category Aura; one point. Mechanisms and examples reuse verified source evidence; no in-game test was performed.

## Source-confirmed behavior and static derivation

- The talent adds the `cryptic_coherency_empty` Coherency marker and applies the `cryptic_ammo_aura` passive to the caster, giving `toughness = 25`. On the server, that passive's `start_func` enumerates `Managers.player:human_players()` and gives `cryptic_ammo_aura_effect` to each player with a living player unit. It does not check Coherency, distance or the team chain. Each step of the effect template adds `ammo_reserve_capacity = 0.15`, using an `additive_multiplier` stat buff. `PlayerUnitWeaponExtension` multiplies each weapon's current and maximum Ammo Reserve by the total modifier. The base multiplier 1 + 0.15 = 1.15; for example, 101 × 1.15 = 116.15 is rounded down to 116 rounds. Human players joining the mission later also receive the effect through `player_spawned_func`. On ending, the code removes the effects it previously applied. The existing local talent text says “You and Allies in Coherency,” but the fixed source distributes the Ammo Reserve effect across mission players, without a Coherency check; the version correspondence is 1.13.1. The `stepped_stat_buff`'s `min_max_step_func` returns `0, 1`, and all step values are 0.15, so multiple sources still select a single 15% step rather than adding 15% for each teammate.

## Fixed source evidence

- [scripts/settings/ability/archetype_talents/talents/cryptic_talents.lua — L1090-L1115](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/cryptic_talents.lua#L1090-L1115)
- [scripts/settings/talent/talent_settings_cryptic.lua — L39-L42](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/talent/talent_settings_cryptic.lua#L39-L42)
- [scripts/settings/buff/archetype_buff_templates/cryptic_buff_templates.lua — L117-L197](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/cryptic_buff_templates.lua#L117-L197)
- [scripts/settings/buff/archetype_buff_templates/cryptic_buff_templates.lua — L198-L224](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/cryptic_buff_templates.lua#L198-L224)
- [scripts/settings/buff/buff_settings.lua — L694-L694](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/buff_settings.lua#L694-L694)
- [scripts/extension_systems/weapon/player_unit_weapon_extension.lua — L1324-L1337](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/weapon/player_unit_weapon_extension.lua#L1324-L1337)
- [scripts/extension_systems/weapon/player_unit_weapon_extension.lua — L1408-L1424](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/weapon/player_unit_weapon_extension.lua#L1408-L1424)
- [scripts/extension_systems/buff/buffs/stepped_stat_buff.lua — L10-L66](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/buff/buffs/stepped_stat_buff.lua#L10-L66)
- [scripts/settings/ability/archetype_talents/talents/cryptic_talents.lua — L1090-L1115](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/cryptic_talents.lua#L1090-L1115)
- [scripts/ui/views/talent_builder_view/layouts/cryptic_tree.lua — L63-L93](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/ui/views/talent_builder_view/layouts/cryptic_tree.lua#L63-L93)

## Example assumptions and limits

- **How it works**: Gain 25 Toughness and increase Ammo Reserve capacity by 15%.
- **Example**: A maximum reserve of 101 rounds becomes 101 × 1.15 = 116.15, rounded down to 116 rounds. Current reserve also adjusts when capacity changes.
- **Recipients**: The Ammo Reserve bonus applies to you and player-controlled allies in the mission, without requiring Coherency range. If multiple allies select this talent, the capacity bonus remains 15%.

- At a reserve capacity of 101 rounds, `floor(101 × 1.15) = 116` rounds. Fractional rounds are not retained. Avoid using floating-point products close to integer boundaries to infer the game display; exact presentation still needs an in-game check.
- The source directly distributes the Ammo Reserve capacity effect to all human players, without excluding distant allies through Coherency distance or chain checks.
- The personal +25 Toughness passive applies only to the caster; the source gives the Ammo Reserve effect to mission players.
- The earlier Chinese record retained the difference between the localized Coherency condition and fixed-source distribution scope without declaring a Chinese translation error. Whether Build 25606770 exhibits that same implementation in game remained unconfirmed. This English comparison independently identifies the explicit scope mismatch against the specified accepted source evidence.

Mechanisms reuse the fixed-version evidence, with local Build 25606770 English text corresponding to 1.13.1. Actual presentation and behavior remain unobserved in game. Missing details are supplementary explanations.

<a id="original-english-template-and-reconstruction"></a>

## Original English template and reconstruction

Steam Build `25606770`; `content/localization/ui`, resource hash `63564edcb7c3c5ee`; language `en` (code `0`).

- Name key `loc_talent_cryptic_ammo_aura`, hash `a45966fb`, entry 10614: **Ammunition Deposit**.
- Description key `loc_talent_cryptic_ammo_aura_toughness_desc`, hash `cc394399`, entry 13194.

Full raw template:

~~~text
Gain {toughness:%s} Toughness.

You and Allies in Coherency have {ammo:%s} Ammo Reserve.
~~~

| Placeholder | Value | Formatting |
|---|---|---|
| `{toughness:%s}` | 25 → +25 | `number`; explicit + prefix |
| `{ammo:%s}` | 0.15 → +15% | `percentage`; explicit + prefix |

The minimally read display mapping is `cryptic_talents.lua` L1090-L1115. Both values use `cryptic_ammo_aura` settings already verified as Toughness 25 and Ammo Reserve capacity 0.15.

Static reconstruction; not an observed game screen:

~~~text
Gain +25 Toughness.

You and Allies in Coherency have +15% Ammo Reserve.
~~~

## English comparison

The caster's +25 Toughness and +15% Ammo Reserve agree with the existing evidence. The English explicitly restricts the allied recipients to Coherency; the accepted fixed source instead distributes the effect to human players throughout the mission without a Coherency check. This is an explicit English scope contradiction against that evidence, independently read from the English wording. In-game manifestation remains unobserved. Flooring, current-reserve adjustment, late joins, removal and non-stacking are supplementary details.

## Icon source

[Original image](https://gameslantern.com/storage/sites/darktide/exporter/talents/cryptic/aura/cryptic_ammo_aura.webp) | [Media-Assets Issue](https://github.com/SyuanTsai/Media-Assets/issues/13#issuecomment-5935585681) | [Existing attachment](https://github.com/user-attachments/assets/59dcc637-0b0f-4f3b-8e79-f4fdf53b6cef). The icon identifies the talent; it is not mechanism evidence.
