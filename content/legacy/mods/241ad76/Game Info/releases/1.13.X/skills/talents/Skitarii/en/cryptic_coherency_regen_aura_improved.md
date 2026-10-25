# Resurgence: source evidence

[繁體中文](../cryptic_coherency_regen_aura_improved.md) | [Player description](README.md#cryptic_coherency_regen_aura_improved) | [Technical index](SOURCE_INDEX.md) | [English comparison](LOCALIZATION_COMPARISON.md#cryptic_coherency_regen_aura_improved)

Release 1.13.1; fixed SHA `7e662fcda16219d775b84af50322be2e9cd9d62e`. Talent `cryptic_coherency_regen_aura_improved`; name key `loc_talent_cryptic_coherency_regen_aura`; description key `loc_talent_cryptic_coherency_regen_aura_improved_desc`. Node `node_e9138b1a-56be-4048-bdfa-e8c1e7ede57d`; category Aura; one point. Mechanisms and examples reuse verified source evidence; no in-game test was performed.

## Source-confirmed behavior and static derivation

- The talent applies the Coherency template `cryptic_coherency_regen_aura_improved` and `cryptic_coherency_regen_aura_improved_personal_boost`. The Coherency template uses the same `coherency_id` as the base version, with priority 1, and sets `min_toughness_coherency_regen_rate_modifier = 0.5`. The Toughness extension subtracts the base value of 1 from this additive multiplier and, during combat, multiplies the normal Coherency regeneration rate by 0.5. The personal passive gives only the caster `stat_buffs.toughness = 25`. `CoherencySystem` includes the player themself when building its daisy chain. `UnitCoherencyExtension` receives and stores the player's own Coherency-entry event, then activates the available auras in the chain from the complete `in_coherence_units` set. The 50% minimum regeneration rate therefore applies to the caster and allies in the Coherency chain. Regeneration still depends on a Toughness deficit, its regeneration delay, whether regeneration is disabled, weapon/movement multipliers and other regeneration modifiers.

## Fixed source evidence

- [scripts/settings/ability/archetype_talents/talents/cryptic_talents.lua — L1034-L1058](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/cryptic_talents.lua#L1034-L1058)
- [scripts/settings/talent/talent_settings_cryptic.lua — L35-L38](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/talent/talent_settings_cryptic.lua#L35-L38)
- [scripts/settings/buff/archetype_buff_templates/cryptic_buff_templates.lua — L270-L297](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/cryptic_buff_templates.lua#L270-L297)
- [scripts/settings/buff/buff_settings.lua — L888-L888](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/buff_settings.lua#L888-L888)
- [scripts/extension_systems/toughness/player_unit_toughness_extension.lua — L116-L149](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/toughness/player_unit_toughness_extension.lua#L116-L149)
- [scripts/extension_systems/coherency/coherency_system.lua — L187-L251](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/coherency/coherency_system.lua#L187-L251)
- [scripts/extension_systems/coherency/unit_coherency_extension.lua — L200-L214](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/coherency/unit_coherency_extension.lua#L200-L214)
- [scripts/extension_systems/coherency/unit_coherency_extension.lua — L279-L311](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/coherency/unit_coherency_extension.lua#L279-L311)
- [scripts/settings/ability/archetype_talents/talents/cryptic_talents.lua — L1034-L1058](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/cryptic_talents.lua#L1034-L1058)
- [scripts/ui/views/talent_builder_view/layouts/cryptic_tree.lua — L38-L62](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/ui/views/talent_builder_view/layouts/cryptic_tree.lua#L38-L62)

## Example assumptions and limits

- **How it works**: Gain 25 Toughness. You and allies in Coherency retain at least 50% of the normal Coherency Toughness regeneration rate even when enemies are nearby.
- **Example**: At a normal Coherency regeneration rate of 10 points/s, the minimum combat rate for you and allies is 10 × 50% = 5 points/s. With uninterrupted regeneration and sufficient deficit, 4s restores 20 points, subject to the Toughness deficit and personal regeneration modifiers.
- **Regeneration conditions**: The Toughness regeneration delay after taking damage must still finish, and normal Coherency regeneration must remain available. This effect does not cancel the delay or let Toughness exceed its maximum.

- With a normal Coherency regeneration rate of 10 points/s, the minimum combat rate is 10 × 0.5 = 5 points/s. Four seconds restores 20 points; if the deficit is smaller, regeneration stops at maximum Toughness.
- Fifty percent is a minimum multiplier of normal Coherency Toughness regeneration, not 50% of maximum Toughness per second or a one-time restoration of 50 points.
- Each recipient still uses their own weapon, movement and other regeneration modifiers, regeneration delay and Toughness cap.
- The personal +25 Toughness is the caster's passive bonus; the Coherency regeneration aura applies to the caster and allies in the Coherency chain.
- The existing base version uses a 25% minimum rate; this improved version uses 50%. Neither removes the regeneration delay.

Mechanisms reuse the fixed-version evidence, with local Build 25606770 English text corresponding to 1.13.1. Actual presentation and behavior remain unobserved in game. Missing details are supplementary explanations.

<a id="original-english-template-and-reconstruction"></a>

## Original English template and reconstruction

Steam Build `25606770`; `content/localization/ui`, resource hash `63564edcb7c3c5ee`; language `en` (code `0`).

- Name key `loc_talent_cryptic_coherency_regen_aura`, hash `82e9b3ce`, entry 8512: **Resurgence**.
- Description key `loc_talent_cryptic_coherency_regen_aura_improved_desc`, hash `a053ecfc`, entry 10362.

Full raw template:

~~~json
"Gain {toughness_flat:%s} Toughness. \n\nYou and Allies in Coherency regenerate {toughness:%s} Coherency Toughness regardless of enemy proximity."
~~~

| Placeholder | Value | Formatting |
|---|---|---|
| `{toughness_flat:%s}` | 25 → +25 | `number`; explicit + prefix |
| `{toughness:%s}` | 0.5 → 50% | `percentage`; no prefix |

The minimally read display map is `cryptic_talents.lua` L1034-L1058. The two values use `cryptic_coherency_regen_aura_improved.toughness` and `min_toughness_coherency_regen_rate_modifier`, already verified as 25 and 0.5. The raw template is shown as a JSON string to preserve its space before the first line break.

Static reconstruction; not an observed game screen:

~~~text
Gain +25 Toughness.

You and Allies in Coherency regenerate 50% Coherency Toughness regardless of enemy proximity.
~~~

## English comparison

The caster's +25 Toughness and 50% Coherency regeneration with nearby enemies agree with the accepted evidence. Here 50% refers to the normal Coherency regeneration rate. Self-inclusion, minimum-rate behavior, delay, recipient modifiers and maximum-Toughness limits supplement the text; it does not explicitly claim to bypass those limits.

## Icon source

[Original image](https://gameslantern.com/storage/sites/darktide/exporter/talents/cryptic/aura/cryptic_coherency_regen_aura_improved.webp) | [Media-Assets Issue](https://github.com/SyuanTsai/Media-Assets/issues/13#issuecomment-5935585681) | [Existing attachment](https://github.com/user-attachments/assets/7090c8fb-aaaa-4015-a5c1-21e7093507be). The icon identifies the talent; it is not mechanism evidence.
