# Intimidating Presence: source evidence

[繁體中文](../ogryn_melee_damage_coherency.md) | [Base effects](BASE_EFFECTS.md#ogryn_melee_damage_coherency) | [Technical index](SOURCE_INDEX.md) | [English comparison](LOCALIZATION_COMPARISON.md#ogryn_melee_damage_coherency)

Release 1.13.1; fixed SHA `7e662fcda16219d775b84af50322be2e9cd9d62e`. Base talent `ogryn_melee_damage_coherency`; no selectable talent point is spent. Name key `loc_talent_ogryn_2_base_4`; description key `loc_talent_ogryn_2_base_4_description_new`. Mechanisms and examples reuse verified source evidence; no in-game test was performed.

## Source-confirmed behavior and static derivation

- The Coherency identifier is `ogryn_aura`, priority 1. The upgraded version uses the same identifier with priority 2. The base buff has `melee_damage=0.075` and `max_stacks=1`.
- When `coherency_system` builds `new_chain`, it includes the owner first, then links other units in Coherency.

## Fixed source evidence

- [scripts/settings/talent/talent_settings_ogryn.lua — L298-L302](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/talent/talent_settings_ogryn.lua#L298-L302)
- [scripts/settings/buff/archetype_buff_templates/ogryn_buff_templates.lua — L1354-L1390](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/ogryn_buff_templates.lua#L1354-L1390)
- [scripts/extension_systems/coherency/coherency_system.lua — L188-L215](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/coherency/coherency_system.lua#L188-L215)
- [scripts/settings/ability/archetype_talents/talents/ogryn_talents.lua — L651-L668](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/ogryn_talents.lua#L651-L668)
- [scripts/settings/archetype/archetypes/ogryn_archetype.lua — L50-L74](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/archetype/archetypes/ogryn_archetype.lua#L50-L74)

## Examples and limits

- **Aura effect**: You and allies in Coherency gain +7.5% melee damage.

- **Damage example**: With this bonus alone, base damage 100 becomes `100 × (1 + 7.5%) = 107.5`. With another +20% at the same stage, it becomes 127.5.

- **Replacement**: Selecting the upgraded melee aura changes the value to 10%; the two do not add to 17.5%. Other aura choices also replace this base aura.

 Local Build 25606770 corresponds to the fixed 1.13.1 source. Actual presentation and behavior remain unobserved in game.

<a id="original-english-template-and-reconstruction"></a>

## Original English template and reconstruction

Steam Build `25606770`; `content/localization/ui`, resource hash `63564edcb7c3c5ee`; language `en` (code `0`).

- Name key `loc_talent_ogryn_2_base_4`, hash `c99667f7`, entry 13013: **Intimidating Presence**.
- Description key `loc_talent_ogryn_2_base_4_description_new`, hash `36195984`, entry 3513.

Full raw template:

~~~text
{damage:%s} Heavy Melee Attack Damage for you and Allies in Coherency.
~~~

| Placeholder | Value | Formatting |
|---|---|---|
| damage | talent_settings_2.coherency.melee_damage = 0.075 | Percentage with explicit + prefix → +7.5% |

Only the missing text mapping / display formatting in the cited talent definition, lines 651–668, was read. Accepted mechanisms, values, examples and common formatting were reused.

Static reconstruction; not an observed game screen:

~~~text
+7.5% Heavy Melee Attack Damage for you and Allies in Coherency.
~~~

## English comparison

The independently read English explicitly limits the bonus to Heavy Melee Attack Damage. The accepted buff uses melee_damage 0.075, covering melee attacks generally. This is an English scope contradiction: the description is narrower than the verified effect. The 7.5% value and self/Coherency-ally recipients agree. Aura replacement and additive examples supplement the text.
