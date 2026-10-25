# Seer's Presence: source evidence

[繁體中文](../psyker_cooldown_aura_improved.md) | [Player description](README.md#psyker_cooldown_aura_improved) | [Technical index](SOURCE_INDEX.md) | [English comparison](LOCALIZATION_COMPARISON.md#psyker_cooldown_aura_improved)

Release 1.13.2; fixed SHA `ba6c148f3c2768ca3ce20d846a12e56e2f433f3e`. Talent `psyker_cooldown_aura_improved`; name key `loc_talent_psyker_cooldown_aura_improved`; description key `loc_talent_psyker_cooldown_aura_improved_description`. Node `node_c2759b06-3158-4d95-a860-492fd3b6594e`; category Aura; one point. Mechanisms use the fixed 1.13.2 source; original English templates remain from 1.13.1 / Steam Build 25606770. No in-game test was performed.

## Source-confirmed behavior and static derivation

- At the fixed source SHA, the talent displays 10% cooldown reduction. The aura buff sets `combat_ability_resource_cost_per_use_modifier=−0.1`, with a maximum of 1 stack. The Coherency set includes the player; units in the set receive the aura provided by teammates.
- The shared ability extension multiplies resource consumed per Combat Ability use by the processed per-use modifier. Therefore, with fixed regeneration speed, the time needed to recover one charge also decreases in the same 0.9 ratio. An original 40-second recovery for one use ideally becomes `40 × 0.9 = 36` seconds.

### Capacity changes when entering or leaving an aura

- **Source-confirmed**: A charge-based ability's resource capacity is `maximum charges × resource cost per charge`. The aura changes that cost and therefore the pool capacity. When capacity changes and neither the extra-charge grant nor the reduced-charge cap branch has already run, the shared update computes `p = clamp01(previous resource / previous capacity)`, then sets `new resource = new capacity × p`. It preserves the recovery proportion of the whole pool rather than its old resource amount.

- **Static derivation**: With two charges costing 40 each, the capacity is 80. If the pool contains 39 resource, gaining the 10% aura changes the per-charge cost to 36 and capacity to 72. The existing proportion is `39 / 80 = 48.75%`, so the new resource is `72 × 48.75% = 35.1`. Available charges remain `floor(35.1 / 36) = 0`. At 1 resource per second, with regeneration unpaused and no other effects, the first charge returns after `36 − 35.1 = 0.9 seconds`. Keeping 39 resource while changing the cost alone would cross the 36-resource threshold; 1.13.2 rescales resource before calculating charges in the same update.

- **Limits**: This proportional rule is in the `usage_cost_type == "charges"` branch. Resource-based abilities retain their separate capacity handling. Granting or capping a changed maximum charge count takes precedence, so this aura example cannot be generalized to every loadout change or respawn. Resource rounding, natural regeneration, pauses and other refunds affect the exact availability time. These are static resource-model calculations without in-game testing.

- [Capacity changes and branch order](https://github.com/Aussiemon/Darktide-Source-Code/blob/ba6c148f3c2768ca3ce20d846a12e56e2f433f3e/scripts/extension_systems/ability/player_unit_ability_extension.lua#L781-L827) | [Per-charge cost and aura modifier](https://github.com/Aussiemon/Darktide-Source-Code/blob/ba6c148f3c2768ca3ce20d846a12e56e2f433f3e/scripts/extension_systems/ability/player_unit_ability_extension.lua#L1444-L1468) | [Pool capacity](https://github.com/Aussiemon/Darktide-Source-Code/blob/ba6c148f3c2768ca3ce20d846a12e56e2f433f3e/scripts/extension_systems/ability/player_unit_ability_extension.lua#L1330-L1355) | [Natural regeneration and charge thresholds](https://github.com/Aussiemon/Darktide-Source-Code/blob/ba6c148f3c2768ca3ce20d846a12e56e2f433f3e/scripts/extension_systems/ability/player_unit_ability_extension.lua#L848-L884).

## Fixed source evidence

- [scripts/ui/views/talent_builder_view/layouts/psyker_tree.lua — L425-L451](https://github.com/Aussiemon/Darktide-Source-Code/blob/ba6c148f3c2768ca3ce20d846a12e56e2f433f3e/scripts/ui/views/talent_builder_view/layouts/psyker_tree.lua#L425-L451)
- [scripts/settings/ability/archetype_talents/talents/psyker_talents.lua — L869-L890](https://github.com/Aussiemon/Darktide-Source-Code/blob/ba6c148f3c2768ca3ce20d846a12e56e2f433f3e/scripts/settings/ability/archetype_talents/talents/psyker_talents.lua#L869-L890)
- [scripts/settings/talent/talent_settings_psyker.lua — L305-L309](https://github.com/Aussiemon/Darktide-Source-Code/blob/ba6c148f3c2768ca3ce20d846a12e56e2f433f3e/scripts/settings/talent/talent_settings_psyker.lua#L305-L309)
- [scripts/settings/talent/talent_settings_psyker.lua — L364-L366](https://github.com/Aussiemon/Darktide-Source-Code/blob/ba6c148f3c2768ca3ce20d846a12e56e2f433f3e/scripts/settings/talent/talent_settings_psyker.lua#L364-L366)
- [scripts/settings/buff/archetype_buff_templates/psyker_buff_templates.lua — L2672-L2690](https://github.com/Aussiemon/Darktide-Source-Code/blob/ba6c148f3c2768ca3ce20d846a12e56e2f433f3e/scripts/settings/buff/archetype_buff_templates/psyker_buff_templates.lua#L2672-L2690)
- [scripts/extension_systems/coherency/coherency_system.lua — L188-L195](https://github.com/Aussiemon/Darktide-Source-Code/blob/ba6c148f3c2768ca3ce20d846a12e56e2f433f3e/scripts/extension_systems/coherency/coherency_system.lua#L188-L195)
- [scripts/extension_systems/coherency/unit_coherency_extension.lua — L279-L311](https://github.com/Aussiemon/Darktide-Source-Code/blob/ba6c148f3c2768ca3ce20d846a12e56e2f433f3e/scripts/extension_systems/coherency/unit_coherency_extension.lua#L279-L311)
- [scripts/extension_systems/ability/player_unit_ability_extension.lua — L1435-L1441](https://github.com/Aussiemon/Darktide-Source-Code/blob/ba6c148f3c2768ca3ce20d846a12e56e2f433f3e/scripts/extension_systems/ability/player_unit_ability_extension.lua#L1435-L1441)
- [scripts/extension_systems/ability/player_unit_ability_extension.lua — L1461-L1466](https://github.com/Aussiemon/Darktide-Source-Code/blob/ba6c148f3c2768ca3ce20d846a12e56e2f433f3e/scripts/extension_systems/ability/player_unit_ability_extension.lua#L1461-L1466)
- [scripts/settings/ability/archetype_talents/talents/psyker_talents.lua — L869-L890](https://github.com/Aussiemon/Darktide-Source-Code/blob/ba6c148f3c2768ca3ce20d846a12e56e2f433f3e/scripts/settings/ability/archetype_talents/talents/psyker_talents.lua#L869-L890)
- [scripts/ui/views/talent_builder_view/layouts/psyker_tree.lua — L425-L451](https://github.com/Aussiemon/Darktide-Source-Code/blob/ba6c148f3c2768ca3ce20d846a12e56e2f433f3e/scripts/ui/views/talent_builder_view/layouts/psyker_tree.lua#L425-L451)

## Example assumptions and limits

- **Aura**: You and teammates in Coherency have 10% shorter Combat Ability cooldowns. The same aura does not stack multiple times.

- **Cooldown example**: With fixed recovery speed and no other modifiers, an original 40 seconds becomes 40 × (1 − 10%) = 36 seconds; an original 60 seconds becomes 54.

- Assume one Combat Ability charge originally recovers in 40 seconds, with fixed regeneration speed and no other cooldown effects. `40 × (1 − 0.10) = 36 seconds`: 4 seconds less waiting in this example. An original 60 seconds becomes about 54.
- The player's or teammate's Coherency aura must apply when the effect is used. Actual distance and update timing in the local game remain untested.
- Time examples assume fixed charge-regeneration speed. Multi-charge abilities, other cooldown modifiers or different resource-regeneration rules affect actual times.
- Mechanism source: 1.13.2. The original English remains from 1.13.1 / Steam Build 25606770; same-version 1.13.2 text has not been obtained. Actual presentation and behavior remain unobserved in game; omitted details are supplementary explanations.

<a id="original-english-template-and-reconstruction"></a>

## Original English template and reconstruction

Steam Build `25606770`; `content/localization/ui`, resource hash `63564edcb7c3c5ee`; language `en` (code `0`).

- Name key `loc_talent_psyker_cooldown_aura_improved`, hash `bf9a6ebc`, entry 12349: **Seer's Presence**.
- Description key `loc_talent_psyker_cooldown_aura_improved_description`, hash `8daf59be`, entry 9174.

Full raw template:

~~~text
{cooldown_reduction:%s} Cooldown Reduction on Abilities for you and Allies in Coherency.

This is an augmented version of {talent_name:%s}.
~~~

| Placeholder | Value | Formatting |
|---|---|---|
| `cooldown_reduction` | `abs(−0.1)=0.1` | Percentage with `+` prefix → `+10%` |
| `talent_name` | `loc_talent_psyker_aura_reduced_ability_cooldown`; hash `b6a94636`, entry 11791 | Localized string → `The Quickening` |

Only missing display fields in `psyker_talents.lua` L869–885 were read. `cooldown_reduction` uses the absolute value of the accepted −0.1 modifier, percentage with `+` prefix → `+10%`. `talent_name` localizes `loc_talent_psyker_aura_reduced_ability_cooldown`; hash `b6a94636`, entry 11791, to The Quickening. Accepted mechanisms and common formatters were reused.

Static reconstruction; not an observed game screen:

~~~text
+10% Cooldown Reduction on Abilities for you and Allies in Coherency.

This is an augmented version of The Quickening.
~~~

## English comparison

Independently read, the English gives you and Allies in Coherency +10% cooldown reduction. This agrees with the self-inclusive Coherency aura's −0.1 per-use resource modifier at fixed regeneration speed. It does not state the one-stack limit, application timing or conditional resource/time calculation; these are supplementary, without an English contradiction. The augmented-version name reconstructs to The Quickening, as paired by the original localization key.

## Icon source

[Original image](https://gameslantern.com/storage/sites/darktide/exporter/talents/psyker/aura/psyker_cooldown_aura_improved.webp) | [Media-Assets Issue](https://github.com/SyuanTsai/Media-Assets/issues/7#issuecomment-5928024966) | [Existing attachment](https://github.com/user-attachments/assets/61a749ff-c64c-47a7-8607-e19b59a688b3). The icon identifies the talent; it is not mechanism evidence.
