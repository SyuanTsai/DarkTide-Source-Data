# Charged Strike: source evidence

[繁體中文](../psyker_chain_lightning_heavy_attacks.md) | [Player description](README.md#psyker_chain_lightning_heavy_attacks) | [Technical index](SOURCE_INDEX.md) | [English comparison](LOCALIZATION_COMPARISON.md#psyker_chain_lightning_heavy_attacks)

Release 1.13.1; fixed SHA `7e662fcda16219d775b84af50322be2e9cd9d62e`. Talent `psyker_chain_lightning_heavy_attacks`; name key `loc_talent_psyker_chain_lightning_heavy_attacks`; description key `loc_talent_psyker_chain_lightning_damage_heavy_attacks_desc`. Node `node_d958faa6-e3ea-4c79-bc84-3477063b09f7`; category Blitz; one point. Mechanisms and examples reuse verified source evidence; no in-game test was performed.

## Source-confirmed behavior and static derivation

- At the fixed source SHA, this talent installs an on-hit proc effect and filters heavy hits through `CheckProcFunctions.on_heavy_hit`. On triggering, it adds `psyker_heavy_swings_shock` to the hit target; with Enfeeble, it instead uses `psyker_heavy_swings_shock_improved`.
- Both variants are copied from the short electrocution template, with `duration=2` and `max_stacks=1`. They use the `psyker_heavy_swings_shock` damage settings to deal sustained damage during electrocution. This talent itself does not grant a fixed melee-damage bonus.

## Fixed source evidence

- [scripts/ui/views/talent_builder_view/layouts/psyker_tree.lua — L1949-L1971](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/ui/views/talent_builder_view/layouts/psyker_tree.lua#L1949-L1971)
- [scripts/settings/ability/archetype_talents/talents/psyker_talents.lua — L2519-L2529](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/psyker_talents.lua#L2519-L2529)
- [scripts/settings/buff/archetype_buff_templates/psyker_buff_templates.lua — L3518-L3537](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/psyker_buff_templates.lua#L3518-L3537)
- [scripts/settings/buff/weapon_buff_templates.lua — L1088-L1132](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/weapon_buff_templates.lua#L1088-L1132)
- [scripts/settings/ability/archetype_talents/talents/psyker_talents.lua — L2519-L2529](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/psyker_talents.lua#L2519-L2529)
- [scripts/ui/views/talent_builder_view/layouts/psyker_tree.lua — L1949-L1971](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/ui/views/talent_builder_view/layouts/psyker_tree.lua#L1949-L1971)

## Example assumptions and limits

- **Trigger**: After a melee heavy attack hits an enemy, it electrocutes that target for 2 seconds and deals damage over that duration.

- **With Enfeeble**: This 2-second electrocution also increases the target's damage taken by 10%. Isolating that damage-taken multiplier, original damage of 100 becomes 100 × 1.1 = 110.

- **With Enfeeble**: During this 2-second electrocution, the target also takes 10% more damage. Isolating that damage-taken multiplier gives `100 × 1.1 = 110` for an attack originally dealing 100.
- Selecting Enfeeble switches the target to the improved electrocution variant and applies that talent's all-source damage increase. Without it, only electrocution and sustained damage apply.
- The target electrocution effect has a maximum of 1 stack. Damage still varies with the target, attack state and damage settings; the accepted source fragment does not provide one fixed value applicable to every enemy.
- Text and source both correspond to 1.13.1; actual behavior remains pending in-game comparison, without in-game testing. Mechanisms reuse the fixed-version evidence, with local Build 25606770 English text corresponding to 1.13.1. Actual presentation and behavior remain unobserved in game. Missing details are supplementary explanations.

<a id="original-english-template-and-reconstruction"></a>

## Original English template and reconstruction

Steam Build `25606770`; `content/localization/ui`, resource hash `63564edcb7c3c5ee`; language `en` (code `0`).

- Name key `loc_talent_psyker_chain_lightning_heavy_attacks`, hash `b2c5eb1f`, entry 11520: **Charged Strike**.
- Description key `loc_talent_psyker_chain_lightning_damage_heavy_attacks_desc`, hash `e84d2a21`, entry 15077.

Full raw template:

~~~text
Your Heavy Melee Attacks electrocute enemies hit, damaging them.
~~~

| Placeholder | Value | Formatting |
|---|---|---|
| None | The exported description contains no placeholders | Original English is already complete |

The original English has no placeholders; it needs no display-value reconstruction or additional source read. Name/description keys and fixed source pointers reuse the accepted document.

Static reconstruction; not an observed game screen:

~~~text
Your Heavy Melee Attacks electrocute enemies hit, damaging them.
~~~

## English comparison

Read independently, the English specifies heavy melee attacks electrocuting hit enemies and damaging them. This agrees with the accepted heavy-hit proc and sustained electrocution damage. It does not state the 2-second duration, one-stack maximum, variable damage or Enfeeble interaction; these are supplementary, with no explicit English contradiction.

## Icon source

[Original image](https://gameslantern.com/storage/sites/darktide/exporter/talents/psyker/tactical_modifier/psyker_chain_lightning_heavy_attacks.webp) | [Media-Assets Issue](https://github.com/SyuanTsai/Media-Assets/issues/7#issuecomment-5928024966) | [Existing attachment](https://github.com/user-attachments/assets/e21d55d1-68fa-4d4d-a19b-2b6050753a7e). The icon identifies the talent; it is not mechanism evidence.
