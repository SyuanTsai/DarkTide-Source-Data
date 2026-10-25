# Resurgence: source evidence

[繁體中文](../cryptic_coherency_regen_aura.md) | [Base effect](BASE_EFFECTS.md#cryptic_coherency_regen_aura) | [Technical index](SOURCE_INDEX.md) | [English comparison](LOCALIZATION_COMPARISON.md#cryptic_coherency_regen_aura)

Release 1.13.1; fixed SHA `7e662fcda16219d775b84af50322be2e9cd9d62e`. Talent `cryptic_coherency_regen_aura`; name key `loc_talent_cryptic_coherency_regen_aura`; description key `loc_talent_cryptic_coherency_regen_aura_desc`. Base effect; no selectable talent point cost. Mechanisms and examples reuse verified source evidence; no in-game test was performed.

## Source-confirmed behavior and static derivation

- `cryptic_coherency_regen_aura` installs the matching Coherency template, with `min_toughness_coherency_regen_rate_modifier = 0.25`. During combat, the Toughness extension checks Coherency regeneration modifiers and computes the minimum with `max(minimum-rate modifier − 1, 0)`. The normal Coherency recovery rate is multiplied by **0.25**, then by weapon, stance and other Toughness modifiers.
- Recovery still requires missing Toughness, an expired recovery delay, and Toughness regeneration not being disabled.
- When forming the daisy-chain, the Coherency system explicitly adds the holder first. Added chain members enter through `on_coherency_enter`; `UnitCoherencyExtension` inserts them into `in_coherence_units`, then searches that set to enable Coherency auras. The holder is therefore also a recipient: the base Aura affects self and other valid players in the Coherency chain.
- The base and improved nodes share `coherency_id`. The improved Aura has `priority = 1`, ahead of the base Aura's `priority = 2`; a recipient in both chains enables only the higher-priority effect.

## Fixed source evidence

- [Fixed-version source](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/cryptic_talents.lua#L1016-L1033)
- [Fixed-version source](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/talent/talent_settings_cryptic.lua#L32-L34)
- [Fixed-version source](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/cryptic_buff_templates.lua#L252-L269)
- [Fixed-version source](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/buff_settings.lua#L888-L888)
- [Fixed-version source](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/toughness/player_unit_toughness_extension.lua#L116-L149)
- [Fixed-version source](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/coherency/coherency_system.lua#L187-L251)
- [Fixed-version source](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/coherency/unit_coherency_extension.lua#L200-L214)
- [Fixed-version source](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/coherency/unit_coherency_extension.lua#L279-L311)

## Example assumptions and limits

- **Operation**: You and allies within Coherency can regenerate Toughness even with enemies nearby. The Coherency recovery rate is at least **25% of its normal rate**.
- **Example**: If normal Coherency regeneration is **10 points/second**, the minimum rate in combat is `10 × 25% = 2.5` points/second, recovering **10 points over 4 seconds**. Actual recovery still depends on weapon, movement, other recovery modifiers, recovery delay and missing Toughness.
- **Recovery conditions**: The normal post-damage recovery delay must finish and normal Coherency regeneration must be available. This effect does not remove the delay or raise Toughness above its maximum.

- With you or an ally in the Coherency chain normally recovering **10 points/second**, and other factors unchanged, combat's minimum is `10 × 0.25 = 2.5` points/second. Over **4 seconds**, recover up to **10 points**, stopping at maximum if less is missing.
- **25%** is a minimum multiplier of the normal Coherency recovery rate, not 25% of maximum Toughness per second or a one-time recovery of 25 points.
- Normal recovery delay, disable conditions, weapon and movement multipliers, other recovery attributes and maximum Toughness still apply.
- The base and improved Auras share `coherency_id`; the improved `priority = 1` replaces base `priority = 2` for a recipient in both Aura chains.

Mechanisms reuse the fixed-version evidence, with local Build 25606770 English text corresponding to 1.13.1. Actual presentation and behavior remain unobserved in game. Missing details are supplementary explanations.

<a id="original-english-template-and-reconstruction"></a>

## Original English template and reconstruction

Steam Build `25606770`; `content/localization/ui`, resource hash `63564edcb7c3c5ee`; language `en` (code `0`).

- Name key `loc_talent_cryptic_coherency_regen_aura`, hash `82e9b3ce`, entry 8512: **Resurgence**.
- Description key `loc_talent_cryptic_coherency_regen_aura_desc`, hash `f34842d1`, entry 15809.

Full raw template:

~~~text
You and Allies in Coherency regenerate {toughness:%s} Coherency Toughness regardless of enemy proximity.
~~~

| Placeholder | Value | Formatting |
|---|---|---|
| `{toughness:%s}` | `0.25` → `25%` | Percentage |

The existing display/name mapping in `scripts/settings/ability/archetype_talents/talents/cryptic_talents.lua` (L1016-L1033) uses `min_toughness_coherency_regen_rate_modifier` and the paired `loc_talent_cryptic_coherency_regen_aura` name. The verified value is reused.

Static reconstruction; not an observed game screen:

~~~text
You and Allies in Coherency regenerate 25% Coherency Toughness regardless of enemy proximity.
~~~

## English comparison

The English explicitly includes you and allies in Coherency, and correctly removes the enemy-proximity restriction. “25% Coherency Toughness” does not explicitly state recovery of 25% of maximum Toughness each second; the normal Coherency-rate basis is supplementary information. Recovery delay, other modifiers, maximum-Toughness cap and improved-Aura replacement are also supplements. No explicit English contradiction was found.
