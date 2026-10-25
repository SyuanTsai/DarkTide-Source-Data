# Crunch!: source evidence

[繁體中文](../ogryn_fully_charged_attacks_gain_damage_and_stagger.md) | [Player description](README.md#ogryn_fully_charged_attacks_gain_damage_and_stagger) | [Technical index](SOURCE_INDEX.md) | [English comparison](LOCALIZATION_COMPARISON.md#ogryn_fully_charged_attacks_gain_damage_and_stagger)

Release 1.13.1; fixed SHA `7e662fcda16219d775b84af50322be2e9cd9d62e`. Talent `ogryn_fully_charged_attacks_gain_damage_and_stagger`; name key `loc_talent_ogryn_fully_charged_attacks_gain_damage_and_stagger`; description key `loc_talent_ogryn_fully_charged_attacks_gain_damage_and_stagger_new_desc`. Node `node_49ec4564-0c9a-4bb4-815e-b023b090d05d`; category Talent; one point. Mechanisms and examples reuse verified source evidence; no in-game test was performed.

## Source-confirmed behavior and static derivation

- The active buffs are `windup_increases_power_parent/child`, rather than the old `fully_charged_attacks` buff's 40% value. Each `windup_trigger` adds one stack; an `auto_completed` sweep fills the count to 4 when it begins. `sweep_finish` exits the effect.
- `ActionWindup` uses `latest_chain_time` for the first trigger; subsequent triggers default to 0.25s intervals. Each stack adds 0.075 to both `melee_damage` and `melee_impact_modifier`.

## Fixed source evidence

- [scripts/settings/buff/archetype_buff_templates/ogryn_buff_templates.lua — L2507-L2560](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/ogryn_buff_templates.lua#L2507-L2560)
- [scripts/settings/talent/talent_settings_ogryn.lua — L185-L189](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/talent/talent_settings_ogryn.lua#L185-L189)
- [scripts/extension_systems/weapon/actions/action_windup.lua — L7-L80](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/weapon/actions/action_windup.lua#L7-L80)
- [scripts/utilities/attack/damage_calculation.lua — L278-L300](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/attack/damage_calculation.lua#L278-L300)
- [scripts/utilities/attack/stagger_calculation.lua — L190-L205](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/attack/stagger_calculation.lua#L190-L205)
- [scripts/settings/ability/archetype_talents/talents/ogryn_talents.lua — L1909-L1930](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/ogryn_talents.lua#L1909-L1930)
- [scripts/ui/views/talent_builder_view/layouts/ogryn_tree.lua — L656-L680](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/ui/views/talent_builder_view/layouts/ogryn_tree.lua#L656-L680)

## Example assumptions and limits

- **Charge bonus**: Charging a heavy attack builds up to 4 stacks, each granting +7.5% melee damage and Impact. Charging until the attack is automatically released fills the stacks.

- **Duration**: The bonus applies to that sweep and is removed when it finishes. The first stack's timing depends on the weapon's windup action; subsequent stacks normally arrive every 0.25s. Timing does not start from the button press for every weapon.

- **Damage example**: Four stacks grant `4 × 7.5% = 30%`. Base damage of 100 becomes 130 without other bonuses, or `100 × (1 + 20% + 30%) = 150` with an existing +20% at the same stage.

- **Impact example**: Base Impact of 100 becomes 130 at full stacks. Whether the enemy staggers still depends on its threshold; Impact is not itself damage.

Mechanisms reuse the fixed-version evidence, with local Build 25606770 English text corresponding to 1.13.1. Actual presentation and behavior remain unobserved in game. Missing details are supplementary explanations.

<a id="original-english-template-and-reconstruction"></a>

## Original English template and reconstruction

Steam Build `25606770`; `content/localization/ui`, resource hash `63564edcb7c3c5ee`; language `en` (code `0`).

- Name key `loc_talent_ogryn_fully_charged_attacks_gain_damage_and_stagger`, hash `43e35dc2`, entry 4389: **Crunch!**.
- Description key `loc_talent_ogryn_fully_charged_attacks_gain_damage_and_stagger_new_desc`, hash `d8632c1b`, entry 14026.

Full raw template:

~~~text
Up to {damage:%s} Damage bonus & {stagger:%s} Impact bonus to your charged Melee Attack, based on charge time.
~~~

| Placeholder | Value | Formatting |
|---|---|---|
| damage | ogryn_thrust.melee_damage × max_stacks = 0.075 × 4 = 0.3 | Percentage with explicit + prefix → +30% |
| stagger | ogryn_thrust.melee_impact_modifier × max_stacks = 0.075 × 4 = 0.3 | Percentage with explicit + prefix → +30% |

Only the missing display mapping in the cited talent definition, lines 1909–1930, was read. Accepted values, mechanisms and common formatting were reused. The [Writer] suffix is export metadata, not part of the description.

Static reconstruction; not an observed game screen:

~~~text
Up to +30% Damage bonus & +30% Impact bonus to your charged Melee Attack, based on charge time.
~~~

## English comparison

The independently read English describes charge-time-dependent bonuses of up to +30% damage and +30% Impact to the charged melee attack. This matches the accepted four × 7.5% bonuses; it does not state the obsolete 40% value. Stack timing, automatic full stacks, removal after the sweep and the separate damage/Impact calculations supplement the text. No explicit English contradiction is established.

## Icon source

[Original image](https://gameslantern.com/storage/sites/darktide/exporter/talents/ogryn/default/ogryn_fully_charged_attacks_gain_damage_and_stagger.webp) | [Media-Assets Issue](https://github.com/SyuanTsai/Media-Assets/issues/10#issuecomment-5931394406) | [Existing attachment](https://github.com/user-attachments/assets/e9d72852-9fa6-4e02-aded-e261adb660f0). The icon identifies the talent; it is not mechanism evidence.
