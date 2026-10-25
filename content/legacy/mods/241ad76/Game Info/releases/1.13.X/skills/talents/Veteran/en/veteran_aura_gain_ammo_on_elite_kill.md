# Scavenger

[繁體中文](../veteran_aura_gain_ammo_on_elite_kill.md) | [Base effects](BASE_EFFECTS.md#veteran_aura_gain_ammo_on_elite_kill) | [Technical index](SOURCE_INDEX.md)

## How it works

- When you or an ally affected by this aura kills an Elite or Specialist Enemy, replenish 0.25% of maximum reserve Ammo for the killer and allies in the killer's Coherency. The aura has a 5s proc cooldown.
- With 400 maximum reserve rounds and sufficient room, one payout supplies `400 × 0.25% = 1 round`. Fractions of a round carry over to later payouts.
- Ammo goes into the reserve without loading the magazine. The replenishment ceiling is maximum reserve Ammo plus the magazine's missing rounds. Survivalist raises the aura rate to 0.5%; it replaces the 0.25% rate.

## Source-confirmed behavior and static derivation

Release 1.13.1, fixed SHA `7e662fcda16219d775b84af50322be2e9cd9d62e`. Talent identifier: `veteran_aura_gain_ammo_on_elite_kill`.

- This effect is enabled by the class base-talent list. It is not an additional selectable node beyond the 77 nodes in the player tree index.
- The base aura uses identifier `veteran_aura` and priority 1. Survivalist uses the same identifier at priority 2, so the higher-priority aura replaces the base rate.
- Each aura receiver has its own `proc_buff`. The `on_minion_death` check accepts Elite/Specialist deaths. The effect function also requires `template_context.unit == params.attacking_unit` before traversing the killer's `in_coherence_units`, which includes the killer.
- After a successful check, `ProcBuff` calls the effect function and then updates `_active_start_time` unconditionally. A receiver's aura may therefore enter its 5s cooldown even when the function returns early because that receiver was not the killer. The stated kill condition is subject to this cooldown; it does not promise a separate payout for every personal kill.
- For each Ammo slot, `amount = max_reserve × 0.0025 + carryover`. The integer payout is `floor(amount)` and the fractional remainder is retained. The new reserve is `min(old_reserve + integer_payout, max_reserve + missing_clip)`.
- The killer's 1% Survivalist base passive is a separate buff with a separate 5s cooldown and can apply to the same kill.

## Fixed source evidence

- [scripts/settings/archetype/archetypes/veteran_archetype.lua — L50-L74](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/archetype/archetypes/veteran_archetype.lua#L50-L74)
- [scripts/settings/ability/archetype_talents/talents/veteran_talents.lua — L646-L666](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/veteran_talents.lua#L646-L666)
- [scripts/settings/talent/talent_settings_veteran.lua — L105-L109](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/talent/talent_settings_veteran.lua#L105-L109)
- [scripts/settings/buff/archetype_buff_templates/veteran_buff_templates.lua — L1488-L1596](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/veteran_buff_templates.lua#L1488-L1596)
- [scripts/settings/buff/helper_functions/check_proc_functions.lua — L196-L206](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/helper_functions/check_proc_functions.lua#L196-L206)
- [scripts/extension_systems/buff/buffs/proc_buff.lua — L310-L350](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/buff/buffs/proc_buff.lua#L310-L350)
- [scripts/extension_systems/coherency/coherency_system.lua — L188-L255](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/coherency/coherency_system.lua#L188-L255)
- [scripts/utilities/ammo.lua — L494-L529](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/ammo.lua#L494-L529)
- [scripts/extension_systems/coherency/unit_coherency_extension.lua — L256-L311](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/coherency/unit_coherency_extension.lua#L256-L311)

<a id="original-english-template-and-reconstruction"></a>

## Original English template and reconstruction

Steam Build `25606770`; `content/localization/ui`, resource hash `63564edcb7c3c5ee`; language `en` (code `0`).

- Name key: `loc_talent_veteran_elite_kills_grant_ammo_coop`; hash `b6f9523d`; entry 11811; exact name: **Scavenger**.
- Description key: `loc_talent_veteran_elite_kills_grant_ammo_coop_cd_desc`; hash `dfe86d07`; entry 14525.

Full raw template:

```text
Replenish {ammo:%s} Ammo for you and Allies in Coherency whenever any of you Kill an Elite or Specialist Enemy. This can only occur once every {cooldown:%s}s.
```

The accepted same-version display mapping uses `talent_settings_2.coherency.ammo_replenishment_percent` and `cooldown`. Values and shared formatting evidence were already checked; substitution below is a static reconstruction.

| Placeholder | Accepted value | Formatting |
|---|---|---|
| ammo | 0.0025 of maximum reserve Ammo | Percentage formatting × 100 gives 0.25%. |
| cooldown | 5 seconds | Number formatting gives 5; the template supplies s. |

Statically reconstructed text; not an observed game screen:

```text
Replenish 0.25% Ammo for you and Allies in Coherency whenever any of you Kill an Elite or Specialist Enemy. This can only occur once every 5s.
```

[Independent English comparison](LOCALIZATION_COMPARISON.md#veteran_aura_gain_ammo_on_elite_kill).

## Evidence limits

- Exact team event ordering and live payouts were not measured.
- Mechanisms and citations reuse the accepted Chinese dossier. In-game execution and final game UI observation were not performed.
