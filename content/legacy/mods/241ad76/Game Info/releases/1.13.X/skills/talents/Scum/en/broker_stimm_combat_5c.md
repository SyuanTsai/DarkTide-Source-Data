# Vultoprene II: source evidence

[繁體中文](../broker_stimm_combat_5c.md) | [Player description](README.md#broker_stimm_combat_5c) | [Technical index](SOURCE_INDEX.md) | [English comparison](LOCALIZATION_COMPARISON.md#broker_stimm_combat_5c)

Release 1.13.1; fixed SHA `7e662fcda16219d775b84af50322be2e9cd9d62e`. Talent `broker_stimm_combat_5c`; name key `loc_talent_broker_stimm_combat_c`; description key `loc_talent_stat_power_level / loc_talent_stat_critical_strike_chance`. Node `node_cd8fcca5-ca27-4800-965d-f36fc8e3d140`; category Stimm recipe; 5 points. Mechanisms and examples reuse verified source evidence; no in-game test was performed.

## Source-confirmed behavior and static derivation

- This recipe has `cost = max_points`, so it is bought once rather than repeatedly purchased as multiple ranks. Selected prerequisite recipes remain active together; each node's effects add or multiply according to its stat type.
- `power_level_modifier = 0.04`. `PowerLevel` calculates Power before applying weapon curves; this cannot be treated as a fixed 4% increase to every final damage result.
- `critical_strike_chance` is a `value` stat, added to the base and other Critical Strike Chance values before `clamp01`.

## Fixed source evidence

- [scripts/settings/buff/archetype_buff_templates/broker_buff_templates.lua — L4091-L4108](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/broker_buff_templates.lua#L4091-L4108)
- [scripts/settings/buff/archetype_buff_templates/broker_buff_templates.lua — L4128-L4168](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/broker_buff_templates.lua#L4128-L4168)
- [scripts/settings/buff/archetype_buff_templates/broker_buff_templates.lua — L4210-L4248](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/broker_buff_templates.lua#L4210-L4248)
- [scripts/extension_systems/buff/buffs/buff.lua — L689-L727](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/buff/buffs/buff.lua#L689-L727)
- [scripts/utilities/attack/power_level.lua — L25-L91](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/attack/power_level.lua#L25-L91)
- [scripts/utilities/attack/critical_strike.lua — L13-L39](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/attack/critical_strike.lua#L13-L39)
- [scripts/settings/talent/talent_settings_broker.lua — L641-L649](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/talent/talent_settings_broker.lua#L641-L649)
- [scripts/ui/views/broker_stimm_builder_view/layouts/broker_stimm_tree.lua — L240-L263](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/ui/views/broker_stimm_builder_view/layouts/broker_stimm_tree.lua#L240-L263)

## Example assumptions and limits

- **Recipe cost**: 5 points. Once selected, it takes effect when using the dedicated Stimm, with a basic duration of 15 seconds.

- **Power**: Gain 4%, additive with prerequisite recipes and other Power bonuses at the same stage. Power then contributes to weapon Damage, Stagger and Cleave calculations.

- **Power example**: With this node alone, 500 × (1 + 4%) = 520. Selecting from Wildfire I through this tier gives five Power nodes: 500 × (1 + 5 × 4%) = 600.

- **Critical Strike Chance**: Gain 10 percentage points; Vultoprene I and II together add 15 percentage points.

- **Critical example**: An original 10% becomes 10% + 10% = 20% with this node alone; both Vultoprene nodes together give 25%, with the final result clamped to 0%–100%.

`syringe_broker_buff` reads and applies the same user's recipes together. Field sharing uses the provider's recipes, with externally controlled duration determined separately by the field settings. Mechanisms reuse the fixed-version evidence, with local Build 25606770 English text corresponding to 1.13.1. Actual presentation and behavior remain unobserved in game. Missing details are supplementary explanations.

<a id="original-english-template-and-reconstruction"></a>

## Original English template and reconstruction

Steam Build `25606770`; `content/localization/ui`, resource hash `63564edcb7c3c5ee`; language `en` (code `0`).

- Name key `loc_talent_broker_stimm_combat_c`, hash `0f81fa53`, entry 1012: **Vultoprene II**.
- Description key `loc_talent_stat_power_level`, hash `f8a49d31`, entry 16147; key supplied by the accepted source mapping, paired by hash.
- Description key `loc_talent_stat_critical_strike_chance`, hash `a4e46663`, entry 10639; key supplied by the accepted source mapping, paired by hash.

Full raw template:

~~~text
{power_level:%s} Strength.
{critical_strike_chance:%s} Critical Strike Chance.
~~~

| Placeholder | Value | Formatting |
|---|---|---|
| Name `tier` | Tier 2 → Roman numeral `II` | Raw name template: `Vultoprene {tier:%s}` → `Vultoprene II` |
| `power_level` | `power_level_modifier = 0.04` | Percentage with `+`: `+4%` |
| `critical_strike_chance` | `0.1` | Percentage with `+`: `+10%` |

The component keys come from the accepted document, paired to the same-build English entries by hash; these JSONL entries have no key fields. Display mapping `talent_settings_broker.lua` L641-L649 supplies the name tier and stat values. Reuse the [shared recipe display generator L12-L53](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/talent/talent_settings_broker.lua#L12-L53) and accepted percentage formatting. Components below preserve definition order without claiming observed game layout.

Static reconstruction; not an observed game screen:

~~~text
+4% Strength.
+10% Critical Strike Chance.
~~~

## English comparison

The independently read English names Strength and Critical Strike Chance, reconstructed as +4% and +10%. Both match the accepted stat mappings and values. The Critical Strike Chance label and value match an additive percentage-point bonus; stacking and clamping supplement it. Recipe cost, duration, Power stacking and weapon curves are also supplementary details; no clear contradiction appears.

## Icon source

[Original image](https://gameslantern.com/storage/sites/darktide/exporter/talents/broker/broker_stimm/broker_stimm_combat_5c.webp) | [Media-Assets Issue](https://github.com/SyuanTsai/Media-Assets/issues/12#issuecomment-5934604124) | [Existing attachment](https://github.com/user-attachments/assets/c91fbea3-470d-4fa1-ac50-d2ab5c741a35). The icon identifies the talent; it is not mechanism evidence.
