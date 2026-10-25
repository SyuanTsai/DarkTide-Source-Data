# Enfeeble: source evidence

[繁體中文](../psyker_chain_lightning_improved_target_buff.md) | [Player description](README.md#psyker_chain_lightning_improved_target_buff) | [Technical index](SOURCE_INDEX.md) | [English comparison](LOCALIZATION_COMPARISON.md#psyker_chain_lightning_improved_target_buff)

Release 1.13.1; fixed SHA `7e662fcda16219d775b84af50322be2e9cd9d62e`. Talent `psyker_chain_lightning_improved_target_buff`; name key `loc_talent_psyker_chain_lightning_improved_target_buff`; description key `loc_talent_psyker_chain_lightning_improved_target_buff_alt_description`. Node `node_8da8c02b-211b-48bc-a170-f06b79b545b9`; category Blitz; one point. Mechanisms and examples reuse verified source evidence; no in-game test was performed.

## Source-confirmed behavior and static derivation

- At the fixed source SHA, this upgrade provides a special rule. Smite's base and charged actions select the improved target electrocution effect when that rule applies. The chain attack installs the effect on the target and removes it when the target leaves the chain. Charged Strike's on-hit proc also selects the improved electrocution effect when this rule is present.
- The improved template sets the target's `damage_taken_multiplier=1.1`. Shared damage calculation multiplies the target's damage-taken multiplier into base damage, so attacks from other sources also benefit. Isolating this effect gives `100 × 1.1 = 110` for an attack originally dealing 100 damage.

## Fixed source evidence

- [scripts/ui/views/talent_builder_view/layouts/psyker_tree.lua — L827-L849](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/ui/views/talent_builder_view/layouts/psyker_tree.lua#L827-L849)
- [scripts/settings/ability/archetype_talents/talents/psyker_talents.lua — L819-L849](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/psyker_talents.lua#L819-L849)
- [scripts/settings/equipment/weapon_templates/grenades/psyker_chain_lightning.lua — L447-L464](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/grenades/psyker_chain_lightning.lua#L447-L464)
- [scripts/settings/equipment/weapon_templates/grenades/psyker_chain_lightning.lua — L587-L605](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/grenades/psyker_chain_lightning.lua#L587-L605)
- [scripts/extension_systems/weapon/actions/action_chain_lightning.lua — L539-L576](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/weapon/actions/action_chain_lightning.lua#L539-L576)
- [scripts/settings/buff/weapon_buff_templates.lua — L1088-L1128](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/weapon_buff_templates.lua#L1088-L1128)
- [scripts/settings/buff/archetype_buff_templates/psyker_buff_templates.lua — L3518-L3537](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/psyker_buff_templates.lua#L3518-L3537)
- [scripts/utilities/attack/damage_calculation.lua — L598-L612](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/attack/damage_calculation.lua#L598-L612)
- [scripts/settings/ability/archetype_talents/talents/psyker_talents.lua — L819-L849](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/psyker_talents.lua#L819-L849)
- [scripts/ui/views/talent_builder_view/layouts/psyker_tree.lua — L827-L849](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/ui/views/talent_builder_view/layouts/psyker_tree.lua#L827-L849)

## Example assumptions and limits

- **How it works**: Enemies electrocuted by your Smite take 10% more damage; teammates' attacks also benefit. With Charged Strike, electrocution applied by melee heavy attacks has the same effect.

- **Damage example**: Isolating this target damage-taken multiplier with all other conditions equal, original damage of 100 becomes 100 × 1.1 = 110. The bonus ends when the electrocution effect is removed.

- Assume the target remains affected by electrocution applied by you, with only this talent and no other damage increases/reductions. `100 × 1.1 = 110`: a teammate or other source originally dealing 100 damage now deals 110.
- The increase affects only targets currently electrocuted by you. Smite removes the controlled electrocution effect when its chain leaves a target; the version applied by melee heavy attacks instead has a 2-second duration.
- Examples isolate this multiplier. Other damage bonuses, armour, hit location and damage type still affect actual values.
- Text and source both correspond to 1.13.1; actual behavior remains pending in-game comparison, without in-game testing. Mechanisms reuse the fixed-version evidence, with local Build 25606770 English text corresponding to 1.13.1. Actual presentation and behavior remain unobserved in game. Missing details are supplementary explanations.

<a id="original-english-template-and-reconstruction"></a>

## Original English template and reconstruction

Steam Build `25606770`; `content/localization/ui`, resource hash `63564edcb7c3c5ee`; language `en` (code `0`).

- Name key `loc_talent_psyker_chain_lightning_improved_target_buff`, hash `030a19d8`, entry 190: **Enfeeble**.
- Description key `loc_talent_psyker_chain_lightning_improved_target_buff_alt_description`, hash `da40a0a2`, entry 14154.

Full raw template:

~~~text
Enemies Electrocuted by you take {damage:%s} increased Base Damage from all sources.
~~~

| Placeholder | Value | Formatting |
|---|---|---|
| `damage` | `damage_taken_multiplier=1.1`; `(1.1−1)×100=10` | Percentage with `+` prefix → `+10%` |

Only missing display fields at `psyker_talents.lua` L819–844 were read. `damage` finds `damage_taken_multiplier` in `psyker_protectorate_spread_chain_lightning_interval_improved`; the accepted value is 1.1. The map applies `(value−1)×100=10` and percentage formatting with a `+` prefix → `+10%`. Existing mechanisms and common formatting were reused.

Static reconstruction; not an observed game screen:

~~~text
Enemies Electrocuted by you take +10% increased Base Damage from all sources.
~~~

## English comparison

Read independently, the English specifies enemies electrocuted by you, +10% increased Base Damage, and all sources. These agree with the improved target's 1.1 damage-taken multiplier in shared base damage calculation. It omits the chain-removal condition and Charged Strike's 2-second improved effect; these are supplementary limitations, not English errata.

## Icon source

[Original image](https://gameslantern.com/storage/sites/darktide/exporter/talents/psyker/tactical_modifier/psyker_chain_lightning_improved_target_buff.webp) | [Media-Assets Issue](https://github.com/SyuanTsai/Media-Assets/issues/7#issuecomment-5928024966) | [Existing attachment](https://github.com/user-attachments/assets/0519f0ec-0ce9-4846-8ed4-95a0b9c092de). The icon identifies the talent; it is not mechanism evidence.
