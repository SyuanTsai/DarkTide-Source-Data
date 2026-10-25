# Break the Line: source evidence

[繁體中文](../adamant_charge.md) | [Player description](README.md#adamant_charge) | [Technical index](SOURCE_INDEX.md) | [English comparison](LOCALIZATION_COMPARISON.md#adamant_charge)

Release 1.13.1; fixed SHA `7e662fcda16219d775b84af50322be2e9cd9d62e`. Talent `adamant_charge`; node `node_db2750a5-ac31-469f-8e7d-294b6c750b35`; category Ability; one point.

## Source-confirmed behavior and static derivation

- The ability has a 20s cooldown and one charge. Activation enters a forward charge with base travel distance 3.75m and path hit radius 1m.
- The charge passive lasts only from the start to the end of the charge. It supplies Blocking, protection against ranged attacks, and dodge checks against Trapper nets and Pox Hound pounces.
- At the finish, a separate effect staggers targets within 5m in front. If a target was not already Staggered, it is usually forced into 2.5s heavy Stagger; Monstrosities and Captains are exceptions.
- The finish adds a 6s offensive buff with Damage +25% and Impact +50%.

## Fixed source evidence

- [scripts/settings/ability/archetype_talents/talents/adamant_talents.lua — L89-L125](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/adamant_talents.lua#L89-L125)
- [scripts/settings/talent/talent_settings_adamant.lua — L19-L34](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/talent/talent_settings_adamant.lua#L19-L34)
- [scripts/settings/ability/player_abilities/abilities/adamant_abilities.lua — L43-L58](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/player_abilities/abilities/adamant_abilities.lua#L43-L58)
- [scripts/settings/ability/ability_templates/adamant_charge.lua — L53-L84](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/ability_templates/adamant_charge.lua#L53-L84)
- [scripts/settings/lunge/adamant_lunge_templates.lua — L13-L78](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/lunge/adamant_lunge_templates.lua#L13-L78)
- [scripts/settings/buff/archetype_buff_templates/adamant_buff_templates.lua — L87-L140](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/adamant_buff_templates.lua#L87-L140)
- [scripts/extension_systems/character_state_machine/character_states/player_character_state_lunging.lua — L314-L374](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/character_state_machine/character_states/player_character_state_lunging.lua#L314-L374)
- [scripts/utilities/attack/damage_calculation.lua — L236-L263](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/attack/damage_calculation.lua#L236-L263)
- [scripts/utilities/attack/stagger_calculation.lua — L190-L204](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/attack/stagger_calculation.lua#L190-L204)
- [scripts/settings/ability/archetype_talents/talents/adamant_talents.lua — L89-L125](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/adamant_talents.lua#L89-L125)
- [scripts/ui/views/talent_builder_view/layouts/adamant_tree.lua — L294-L323](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/ui/views/talent_builder_view/layouts/adamant_tree.lua#L294-L323)

## Example assumptions and limits

- **Activation and cooldown**: Each activation consumes one ability charge; the base cooldown is 20s.

- **Bash and protection**: The charge strikes enemies near its path, then ends with a stagger effect on enemies in front. During the charge you count as Blocking and can dodge Trapper nets and Pox Hound pounces.

- **Damage and Impact**: After the charge ends, gain 25% Damage and 50% Impact for 6s. Isolating these bonuses, 100 damage becomes 125 and 100 units of Impact become 150. With an existing same-stage 25% damage bonus, `100 × (1 + 25% + 25%) = 150 damage`. Triggering the buff again restarts its duration.

The Damage and Impact bonuses apply to subsequent attacks after the charge ends; they do not merely raise the charge's own damage. Actual damage depends on armour, hit location and other modifiers. The finishing forced-Stagger rule has separate Monstrosity and Captain exceptions. Values and behavior reuse the fixed-version evidence; examples are static derivations. Game execution and the final game UI were not observed.

<a id="original-english-template-and-reconstruction"></a>

## Original English template and reconstruction

Steam Build `25606770`; `content/localization/ui`, resource hash `63564edcb7c3c5ee`; language `en` (code `0`).

- Name key `loc_talent_adamant_charge_ability_name`, hash `c274ea7a`, entry 12546: **Break the Line**.
- Description key `loc_ability_adamant_charge_blocking_desc`, hash `b214fa7a`, entry 11475.

Full raw template:

```text
Step forward and Bash, causing high Stagger to enemies in front of you, and gain {damage:%s} Damage, {stagger:%s} Impact, for {duration:%s}s. During the Bash you count as Blocking.

Base Cooldown: {cooldown:%s}s.
```

The necessary display mapping uses number formatting for cooldown and duration, and percentage formatting with a `+` prefix for damage and Impact. The placeholder named `stagger` reads the Impact setting. The mapped `range` value is not used in this raw template.

| Placeholder | Value | Formatting |
|---|---|---|
| damage | 0.25 | Percentage × 100 with `+` prefix → +25% |
| stagger | 0.50 | Impact percentage × 100 with `+` prefix → +50% |
| duration | 6 | Number formatting |
| cooldown | 20 | Number formatting |

Static reconstruction; not an observed game screen:

```text
Step forward and Bash, causing high Stagger to enemies in front of you, and gain +25% Damage, +50% Impact, for 6s. During the Bash you count as Blocking.

Base Cooldown: 20s.
```

## English comparison limits

The independently read English says high Stagger, rather than an increased chance of Staggering. It agrees with the general finish effect, Blocking and numerical bonuses; the Chinese probability-wording erratum is not transferred to English. Exact geometry, protection, enemy exceptions and calculation details are supplementary. No explicit English contradiction is established. Mechanisms, citations, shared formatting and icon provenance reuse the existing evidence.

## Icon source

[Original image](https://gameslantern.com/storage/sites/darktide/exporter/talents/adamant/ability/adamant_charge.webp) | [Media-Assets Issue](https://github.com/SyuanTsai/Media-Assets/issues/11#issuecomment-5932554216) | [Existing attachment](https://github.com/user-attachments/assets/a0aad2f2-d03d-486c-b583-1307a9780ac2). The icon identifies the talent; it is not mechanism evidence.
