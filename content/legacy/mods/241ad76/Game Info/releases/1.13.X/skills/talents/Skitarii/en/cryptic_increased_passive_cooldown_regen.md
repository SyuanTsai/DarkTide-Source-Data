# Augmented Power-Cycle: source evidence

[繁體中文](../cryptic_increased_passive_cooldown_regen.md) | [Player description](README.md#cryptic_increased_passive_cooldown_regen) | [Technical index](SOURCE_INDEX.md) | [English comparison](LOCALIZATION_COMPARISON.md#cryptic_increased_passive_cooldown_regen)

Release 1.13.1; fixed SHA `7e662fcda16219d775b84af50322be2e9cd9d62e`. Talent `cryptic_increased_passive_cooldown_regen`; name key `loc_talent_cryptic_increased_passive_cooldown_regen`; description key `loc_talent_cryptic_increased_passive_cooldown_regen_desc`. Node `node_b540e7b8-df34-4676-b412-e95eec0b05b0`; category Ability; one point. Mechanisms and examples reuse verified source evidence; no in-game test was performed.

## Source-confirmed behavior and static derivation

- The talent setting is `cooldown_percent_regen_per_second = 0.01`. The template converts this into +0.5 `combat_ability_resource_regen_modifier`: baseline cooldown 50s ÷ (1 / 0.01) = 0.5. This stat buff is an additive multiplier, changing the default modifier from 1 to 1.5 and multiplying the base Capacitance recovery rate.
- Skitarii's Voltaic Emitter costs 50 points per charge, stores at most 3 charges and naturally restores 1 resource point/s. Pool capacity is max_charges × cost_per_charge = 150. With this bonus it restores 1.5 points/s. Fractional progress accumulates, while usable full charges are floor(resource / 50).
- This recovery multiplier applies to the current Combat Ability resource. The precision stance has an ongoing cost of 1 point/s while active. With this talent selected, considering that ongoing cost alone, net recovery is therefore 0.5 points/s. Stance activation and shooting costs remain separate.

## Fixed source evidence

- [scripts/settings/ability/archetype_talents/talents/cryptic_talents.lua — L1652-L1674](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/cryptic_talents.lua#L1652-L1674)
- [scripts/settings/talent/talent_settings_cryptic.lua — L1-L13](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/talent/talent_settings_cryptic.lua#L1-L13)
- [scripts/settings/talent/talent_settings_cryptic.lua — L444-L446](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/talent/talent_settings_cryptic.lua#L444-L446)
- [scripts/settings/buff/archetype_buff_templates/cryptic_buff_templates.lua — L2073-L2089](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/cryptic_buff_templates.lua#L2073-L2089)
- [scripts/settings/ability/player_abilities/abilities/cryptic_abilities.lua — L70-L91](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/player_abilities/abilities/cryptic_abilities.lua#L70-L91)
- [scripts/settings/ability/player_abilities/abilities/cryptic_abilities.lua — L116-L130](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/player_abilities/abilities/cryptic_abilities.lua#L116-L130)
- [scripts/extension_systems/ability/player_unit_ability_extension.lua — L846-L869](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/ability/player_unit_ability_extension.lua#L846-L869)
- [scripts/extension_systems/ability/player_unit_ability_extension.lua — L1323-L1345](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/ability/player_unit_ability_extension.lua#L1323-L1345)
- [scripts/settings/ability/archetype_talents/talents/cryptic_talents.lua — L1652-L1674](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/cryptic_talents.lua#L1652-L1674)
- [scripts/ui/views/talent_builder_view/layouts/cryptic_tree.lua — L1486-L1512](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/ui/views/talent_builder_view/layouts/cryptic_tree.lua#L1486-L1512)

## Example assumptions and limits

- **Recovery**: Restores an additional 1% of one Capacitance charge per second, increasing base natural recovery from 2% to 3% per second.
- **Time example**: With no other bonuses or ongoing costs, refilling one charge from empty takes 100% ÷ 3% ≈ 33.33s. Refilling three empty charges takes 300% ÷ 3% = 100s.
- **Ability interaction**: Advanced Combat Doctrines has separate activation, upkeep and shooting costs. The refill times above cannot be used to estimate how long the stance can be maintained.

- The 1% is an extra recovery rate based on one 50-point charge, rather than 1% of the whole three-charge pool per second.
- The example assumes the Combat Ability is inactive, with no recovery pauses, other recovery multipliers or ongoing costs. Actual recovery depends on the ability's current state.

Mechanisms reuse the fixed-version evidence, with local Build 25606770 English text corresponding to 1.13.1. Actual presentation and behavior remain unobserved in game. Missing details are supplementary explanations.

<a id="original-english-template-and-reconstruction"></a>

## Original English template and reconstruction

Steam Build `25606770`; `content/localization/ui`, resource hash `63564edcb7c3c5ee`; language `en` (code `0`).

- Name key `loc_talent_cryptic_increased_passive_cooldown_regen`, hash `2995a918`, entry 2701: **Augmented Power-Cycle**.
- Description key `loc_talent_cryptic_increased_passive_cooldown_regen_desc`, hash `34a7eed6`, entry 3427.

Full raw template:

~~~text
Generate {power:%s} {capacitance_keyword:%s} each second.
~~~

| Placeholder | Value | Formatting |
|---|---|---|
| `{power:%s}` | 0.01 → 1% | `percentage`; no + prefix |
| `{capacitance_keyword:%s}` | Capacitance | `loc_string`; `loc_talent_cryptic_power_keyword` |

The minimally read display map is `cryptic_talents.lua` L1652-L1674. `power` uses the verified `cryptic_increased_passive_cooldown_regen.cooldown_percent_regen_per_second = 0.01`. The Capacitance name uses `loc_talent_cryptic_power_keyword` (hash `ecc15a9f`, English entry 15388). The map also supplies `power_keyword`, but the original English contains no such placeholder.

Static reconstruction; not an observed game screen:

~~~text
Generate 1% Capacitance each second.
~~~

## English comparison

The English 1% per-second generation agrees with the accepted extra recovery amount. The single-charge basis, addition to existing natural recovery, conversion to an additive resource-recovery multiplier, full-charge progress/display and ability costs supplement the description. It does not explicitly state a conflicting denominator or that 1% replaces base recovery.

## Icon source

[Original image](https://gameslantern.com/storage/sites/darktide/exporter/talents/cryptic/ability_modifier/cryptic_increased_passive_cooldown_regen.webp) | [Media-Assets Issue](https://github.com/SyuanTsai/Media-Assets/issues/13#issuecomment-5935640756) | [Existing attachment](https://github.com/user-attachments/assets/39f22717-a782-4201-b5b3-f63a166bedd1). The icon identifies the talent; it is not mechanism evidence.
