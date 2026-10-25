# Channelled Devastation: source evidence

[繁體中文](../broker_passive_crit_grants_damage.md) | [Player description](README.md#broker_passive_crit_grants_damage) | [Technical index](SOURCE_INDEX.md) | [English comparison](LOCALIZATION_COMPARISON.md#broker_passive_crit_grants_damage)

Release 1.13.1; fixed SHA `7e662fcda16219d775b84af50322be2e9cd9d62e`. Talent `broker_passive_crit_grants_damage`; name key `loc_talent_broker_passive_crit_grants_damage`; description key `loc_talent_broker_passive_crit_grants_damage_desc`. Node `node_fac6179f-a86a-489f-bb1a-b9382fd6630a`; category Talent; one point. Mechanisms and examples reuse verified source evidence; no in-game test was performed.

## Source-confirmed behavior and static derivation

- `update` calls `CriticalStrike.chance(..., false)` using the currently wielded weapon's keywords and handling template. It calculates `floor(chance / 0.01)`, caps this at 30, then multiplies by `melee_damage_per_stack = 0.005`.

## Fixed source evidence

- [scripts/utilities/attack/critical_strike.lua — L13-L39](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/attack/critical_strike.lua#L13-L39)
- [scripts/utilities/attack/damage_calculation.lua — L293-L301](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/attack/damage_calculation.lua#L293-L301)
- [scripts/settings/buff/archetype_buff_templates/broker_buff_templates.lua — L3164-L3209](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/broker_buff_templates.lua#L3164-L3209)
- [scripts/settings/ability/archetype_talents/talents/broker_talents.lua — L3064-L3116](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/broker_talents.lua#L3064-L3116)
- [scripts/ui/views/talent_builder_view/layouts/broker_tree.lua — L1089-L1115](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/ui/views/talent_builder_view/layouts/broker_tree.lua#L1089-L1115)

## Example assumptions and limits

- **Calculation**: Each complete percentage point of current Critical Hit Chance grants 0.5% Melee Damage. At most 30 percentage points count, for a total of 15%. You do not need to land a Critical Hit first, and Critical Hit Chance is not consumed.

- **Damage example**: At 12.8% Critical Hit Chance, 12 steps count, giving 12 × 0.5% = 6% Damage. Base 100 becomes 106. With another 25% Damage bonus at the same stage, 100 × (1 + 25% + 6%) = 131.

- **Dynamic updates**: Changes to your weapon, temporary bonuses or Critical Hit Chance also update the Melee Damage bonus.

Mechanisms reuse the fixed-version evidence, with local Build 25606770 English text corresponding to 1.13.1. Actual presentation and behavior remain unobserved in game. Missing details are supplementary explanations.

<a id="original-english-template-and-reconstruction"></a>

## Original English template and reconstruction

Steam Build `25606770`; `content/localization/ui`, resource hash `63564edcb7c3c5ee`; language `en` (code `0`).

- Name key `loc_talent_broker_passive_crit_grants_damage`, hash `b59bc562`, entry 11711: **Channelled Devastation**.
- Description key `loc_talent_broker_passive_crit_grants_damage_desc`, hash `ef095720`, entry 15538.

Full raw template:

~~~text
Each {critical_chance:%s} of your current Critical Hit Chance grants a stack of {melee_damage:%s} Melee Damage.

Stacks {max_stacks:%s} times (up to {max_melee_damage:%s} Melee Damage).
~~~

| Placeholder | Value | Formatting |
|---|---|---|
| `{critical_chance:%s}` | `crit_per_stack = 0.01` | `percentage` → `1%` |
| `{melee_damage:%s}` | `melee_damage_per_stack = 0.005` | `percentage`, `+` prefix → `+0.5%` |
| `{max_stacks:%s}` | `crit_cap = 30` | `number` → `30` |
| `{max_melee_damage:%s}` | `max_melee_damage = 0.15` | `percentage`, `+` prefix → `+15%` |

The existing display map at `broker_talents.lua` L3064-L3116 reads the four verified fields from `broker_passive_crit_grants_damage`. Reused percentage formatting retains the fractional 0.5% bonus; number formatting displays 30.

Static reconstruction; not an observed game screen:

~~~text
Each 1% of your current Critical Hit Chance grants a stack of +0.5% Melee Damage.

Stacks 30 times (up to +15% Melee Damage).
~~~

## English comparison

The English explicitly bases its stacks on current Critical Hit Chance and gives 1%, +0.5%, 30 and +15%, matching the verified calculation and cap. Whole-step rounding, weapon-dependent updates and additive combination supplement it. “Grants a stack” does not require a prior Critical Hit or consume Critical Hit Chance.

## Icon source

[Original image](https://gameslantern.com/storage/sites/darktide/exporter/talents/broker/default/broker_passive_crit_grants_damage.webp) | [Media-Assets Issue](https://github.com/SyuanTsai/Media-Assets/issues/12#issuecomment-5933987866) | [Existing attachment](https://github.com/user-attachments/assets/97f78fa5-afd9-4fe0-b24f-fe54147da399). The icon identifies the talent; it is not mechanism evidence.
