# Practiced Efficiency

[繁體中文](../veteran_survivalist_passive.md) | [Base effects](BASE_EFFECTS.md#veteran_survivalist_passive) | [Technical index](SOURCE_INDEX.md)

## How it works

- Your Elite or Specialist kills replenish 1% of your maximum reserve Ammo, at most once every 5s.
- With 400 maximum reserve rounds and sufficient room, one payout supplies `400 × 1% = 4 rounds`. Fractional rounds carry over; Ammo goes directly into the reserve without loading the magazine.
- This personal payout is separate from Scavenger or Survivalist. If the 1% passive and the 0.5% Survivalist aura both apply to the same kill, a 400-round maximum reserve gives `400 × (1% + 0.5%) = 6 rounds` for you, subject to the replenishment ceiling.

## Source-confirmed behavior and static derivation

Release 1.13.1, fixed SHA `7e662fcda16219d775b84af50322be2e9cd9d62e`. Talent identifier: `veteran_survivalist_passive`.

- The class base-talent list directly enables `veteran_survivalist_passive`. Its identifier differs from the aura's; it is not an additional selectable node beyond the 77 nodes in the player tree index.
- The template subscribes to `on_kill` and uses `cooldown_duration = 5`. The later `check_proc_func` definition overrides the earlier one and accepts `tags.elite or tags.special`.
- `on_kill` is sent when the player's own attack causes the death; `params.tags` contains the target's classifications.
- The server proc calls `Ammo.add_to_all_slots(0.01)` only for `template_context.unit`. It does not share this personal payout with teammates.
- Each slot pays `floor(max_reserve × 0.01 + carryover)` and retains the fractional remainder. Reserve replenishment is capped at `max_reserve + missing_clip`.
- This passive and the aura share each slot's fractional-carryover accounting, while their buff cooldowns remain separate.
- The internal definition retains `name = "Increased Ranged Damage"`; that label does not give this passive another damage bonus. Its exact localized English name is **Practiced Efficiency**.

## Fixed source evidence

- [scripts/settings/archetype/archetypes/veteran_archetype.lua — L50-L74](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/archetype/archetypes/veteran_archetype.lua#L50-L74)
- [scripts/settings/ability/archetype_talents/talents/veteran_talents.lua — L1417-L1436](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/veteran_talents.lua#L1417-L1436)
- [scripts/settings/talent/talent_settings_veteran.lua — L67-L70](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/talent/talent_settings_veteran.lua#L67-L70)
- [scripts/settings/buff/archetype_buff_templates/veteran_buff_templates.lua — L3529-L3556](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/veteran_buff_templates.lua#L3529-L3556)
- [scripts/settings/buff/helper_functions/check_proc_functions.lua — L196-L206](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/helper_functions/check_proc_functions.lua#L196-L206)
- [scripts/utilities/attack/attack.lua — L669-L709](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/attack/attack.lua#L669-L709)
- [scripts/utilities/ammo.lua — L494-L529](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/ammo.lua#L494-L529)
- [scripts/extension_systems/buff/buffs/proc_buff.lua — L150-L181](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/buff/buffs/proc_buff.lua#L150-L181)

<a id="original-english-template-and-reconstruction"></a>

## Original English template and reconstruction

Steam Build `25606770`; `content/localization/ui`, resource hash `63564edcb7c3c5ee`; language `en` (code `0`).

- Name key: `loc_talent_veteran_survivalist_passive`; hash `55ea75f0`; entry 5587; exact name: **Practiced Efficiency**.
- Description key: `loc_talent_veteran_survivalist_passive_desc`; hash `88860a94`; entry 8857.

Full raw template:

```text
Elite and Specialist kills restore {ammo:%s} Max Ammo to your reserve. Can only ocurr once every {cooldown:%s}s.
```

The necessary display mapping at `veteran_talents.lua` lines 1417–1436 uses percentage formatting for `talent_settings.veteran_survivalist_passive.ammo` and number formatting for its `cooldown`, without a `+` prefix. The accepted mechanism dossier supplies 0.01 and 5; shared formatting evidence is reused.

| Placeholder | Accepted value | Formatting |
|---|---|---|
| ammo | 0.01 | Percentage formatting × 100 gives 1%, without a + prefix. |
| cooldown | 5 seconds | Number formatting gives 5; the template supplies s. |

Statically reconstructed text; not an observed game screen:

```text
Elite and Specialist kills restore 1% Max Ammo to your reserve. Can only ocurr once every 5s.
```

[Independent English comparison](LOCALIZATION_COMPARISON.md#veteran_survivalist_passive).

## Evidence limits

- The raw English template spells occur as ocurr; the verbatim template and static reconstruction preserve that spelling.
- Mechanisms and citations reuse the accepted Chinese dossier. In-game execution and final game UI observation were not performed.
