# Go Again!: source evidence

[繁體中文](../ogryn_taunt_staggers_reduce_cooldown.md) | [Player description](README.md#ogryn_taunt_staggers_reduce_cooldown) | [Technical index](SOURCE_INDEX.md) | [English comparison](LOCALIZATION_COMPARISON.md#ogryn_taunt_staggers_reduce_cooldown)

Release 1.13.1; fixed SHA `7e662fcda16219d775b84af50322be2e9cd9d62e`. Talent `ogryn_taunt_staggers_reduce_cooldown`; name key `loc_talent_ogryn_taunt_stagger_cd`; description key `loc_talent_ogryn_taunt_stagger_cd_description`. Node `node_7600d19e-f407-41d6-853d-2bcd13a7a9c8`; category Combat ability; one point. Mechanisms and examples reuse verified source evidence; no in-game test was performed.

## Source-confirmed behavior and static derivation

- The buff has `cooldown_reduction_percentage = 0.015`. Its `on_hit` proc first checks the target's stagger state at the hit event through `CheckProcFunctions.on_stagger_hit`, then limits `attack_type` to `melee` or `push`.
- `next_proc_t = t + 0.1` throttles triggers. Each effective proc calls `restore_ability_charge_percentage("combat_ability", 0.015)`. The ability extension restores resource equal to the cost of one charge times that fraction, equivalent to 1.5% of a single-charge base cooldown.

## Fixed source evidence

- [scripts/settings/ability/archetype_talents/talents/ogryn_talents.lua — L146-L172](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/ogryn_talents.lua#L146-L172)
- [scripts/settings/buff/archetype_buff_templates/ogryn_buff_templates.lua — L439-L470](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/ogryn_buff_templates.lua#L439-L470)
- [scripts/settings/buff/helper_functions/check_proc_functions.lua — L537-L541](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/helper_functions/check_proc_functions.lua#L537-L541)
- [scripts/extension_systems/ability/player_unit_ability_extension.lua — L1081-L1103](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/ability/player_unit_ability_extension.lua#L1081-L1103)
- [scripts/settings/ability/player_abilities/abilities/ogryn_abilities.lua — L59-L74](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/player_abilities/abilities/ogryn_abilities.lua#L59-L74)
- [scripts/settings/ability/player_abilities/abilities/ogryn_abilities.lua — L111-L127](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/player_abilities/abilities/ogryn_abilities.lua#L111-L127)
- [scripts/settings/ability/archetype_talents/talents/ogryn_talents.lua — L146-L172](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/ogryn_talents.lua#L146-L172)
- [scripts/ui/views/talent_builder_view/layouts/ogryn_tree.lua — L1293-L1317](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/ui/views/talent_builder_view/layouts/ogryn_tree.lua#L1293-L1317)

## Example assumptions and limits

- **Trigger**: A melee attack or push that hits a staggered enemy restores 1.5% of one combat ability charge. Triggers must be at least 0.1s apart. Ranged hits, explosion-type hits, and the taunt itself do not trigger this effect.

- **Trigger clarification**: Already staggered enemies also qualify; a fresh stagger is not required. All targets share the 0.1s interval, so simultaneous hits on multiple enemies count only once.

- **Cooldown example**: Loyal Protector has a base cooldown of 50s. One qualifying trigger restores 50 × 1.5% = 0.75s; 10 restore 7.5s, in addition to natural cooldown recovery during that time.

Only melee/push hits on staggered enemies qualify. All targets share the 0.1s interval, and restoration remains subject to the ability resource cap. English and code evidence both correspond to 1.13.1.

<a id="original-english-template-and-reconstruction"></a>

## Original English template and reconstruction

Steam Build `25606770`; `content/localization/ui`, resource hash `63564edcb7c3c5ee`; language `en` (code `0`).

- Name key `loc_talent_ogryn_taunt_stagger_cd`, hash `ba791594`, entry 12028: **Go Again!**.
- Description key `loc_talent_ogryn_taunt_stagger_cd_description`, hash `7bd31d11`, entry 8041.

Full raw template:

~~~text
Staggering an Enemy replenishes {cooldown_reduction:%s} Cooldown of your {talent_name:%s}.
~~~

| Placeholder | Value | Formatting |
|---|---|---|
| cooldown_reduction | find_value from ogryn_taunt_staggers_reduce_cooldown.cooldown_reduction_percentage = 0.015 | Percentage × 100, num_decimals = 1, no prefix → 1.5% |
| talent_name | loc_ability_ogryn_taunt_shout | Localized name → Loyal Protector |

Referenced name `loc_ability_ogryn_taunt_shout`, hash `58a5830b`, entry 5754: **Loyal Protector**. Only the necessary English display map at L146–L172 was read; mechanism evidence was reused.

Static reconstruction; not an observed game screen:

~~~text
Staggering an Enemy replenishes 1.5% Cooldown of your Loyal Protector.
~~~

## English comparison

The English mentions Stagger and states 1.5% cooldown restoration for Loyal Protector. The implementation checks the target's stagger state; it does not require a fresh stagger from this hit. The melee/push restriction, exclusion of ranged/taunt triggers, 0.1s throttle, resource cap and calculation examples supplement the text. The Chinese word choice for Stagger is not used as an English contradiction. No explicit English contradiction is established.

## Icon source

[Original image](https://gameslantern.com/storage/sites/darktide/exporter/talents/ogryn/ability_modifier/ogryn_taunt_staggers_reduce_cooldown.webp) | [Media-Assets Issue](https://github.com/SyuanTsai/Media-Assets/issues/10#issuecomment-5931383354) | [Existing attachment](https://github.com/user-attachments/assets/a6d612af-aed7-465e-aa07-e23fc7255876). The icon identifies the talent; it is not mechanism evidence.
