# Payback Time: source evidence

[繁體中文](../ogryn_revenge_damage.md) | [Player description](README.md#ogryn_revenge_damage) | [Technical index](SOURCE_INDEX.md) | [English comparison](LOCALIZATION_COMPARISON.md#ogryn_revenge_damage)

Release 1.13.1; fixed SHA `7e662fcda16219d775b84af50322be2e9cd9d62e`. Talent `ogryn_revenge_damage`; name key `loc_talent_ogryn_revenge_damage`; description key `loc_talent_ogryn_revenge_damage_new_desc`. Node `node_dc6e3ffa-e5cb-4993-a914-04445d983656`; category Talent; one point. Mechanisms and examples reuse verified source evidence; no in-game test was performed.

## Source-confirmed behavior and static derivation

- `on_player_hit_received` and `on_successful_dodge` share `CheckProcFunctions.on_melee_hit`. The proc accepts `damage > 0`, `damage_absorbed > 0`, or a dodge event without a `damage` field.
- The child has `damage=0.15`, maximum one stack, duration 5s and refresh.

## Fixed source evidence

- [scripts/settings/buff/archetype_buff_templates/ogryn_buff_templates.lua — L1726-L1773](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/ogryn_buff_templates.lua#L1726-L1773)
- [scripts/settings/talent/talent_settings_ogryn.lua — L365-L368](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/talent/talent_settings_ogryn.lua#L365-L368)
- [scripts/settings/buff/helper_functions/check_proc_functions.lua — L368-L374](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/helper_functions/check_proc_functions.lua#L368-L374)
- [scripts/utilities/attack/damage_calculation.lua — L278-L300](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/attack/damage_calculation.lua#L278-L300)
- [scripts/settings/ability/archetype_talents/talents/ogryn_talents.lua — L1221-L1241](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/ogryn_talents.lua#L1221-L1241)
- [scripts/ui/views/talent_builder_view/layouts/ogryn_tree.lua — L1046-L1071](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/ui/views/talent_builder_view/layouts/ogryn_tree.lua#L1046-L1071)

## Example assumptions and limits

- **Trigger**: Successfully dodging a melee attack, or taking damage from a melee attack, grants +15% damage for 5s. Damage absorbed by Toughness also triggers it.

- **Stacks and refresh**: Both melee and ranged damage benefit. Repeated triggers refresh the duration without adding stacks.

- **Damage example**: Base damage of 100 becomes 115. With another +20% at the same stage, it becomes `100 × (1 + 20% + 15%) = 135`.

Both local Chinese and English descriptions say Attack without specifying melee; the fixed-SHA evidence uses on_melee_hit for the trigger. The actual trigger still awaits in-game confirmation. This cross-source question is preserved, without treating the omitted restriction as an English translation error. Mechanisms reuse the fixed-version evidence, with local Build 25606770 English text corresponding to 1.13.1. Actual presentation and behavior remain unobserved in game. Missing details are supplementary explanations.

<a id="original-english-template-and-reconstruction"></a>

## Original English template and reconstruction

Steam Build `25606770`; `content/localization/ui`, resource hash `63564edcb7c3c5ee`; language `en` (code `0`).

- Name key `loc_talent_ogryn_revenge_damage`, hash `b8069177`, entry 11869: **Payback Time**.
- Description key `loc_talent_ogryn_revenge_damage_new_desc`, hash `2474ccf6`, entry 2360.

Full raw template:

~~~text
{damage:%s} Damage for {duration:%s}s after a Successful Dodge, or being Hit by an Attack.
~~~

| Placeholder | Value | Formatting |
|---|---|---|
| damage | offensive_2_1.damage = 0.15 | Percentage with explicit + prefix → +15% |
| duration | offensive_2_1.time = 5 | Number → 5 |

Only the missing display mapping in the cited talent definition, lines 1221–1241, was read. Accepted values, mechanisms and common formatting were reused.

Static reconstruction; not an observed game screen:

~~~text
+15% Damage for 5s after a Successful Dodge, or being Hit by an Attack.
~~~

## English comparison

The independently read English gives +15% damage for 5s after a successful dodge or being hit by an attack, matching the accepted bonus and duration. It does not explicitly identify the attack type. The accepted on_melee_hit restriction is therefore a supplementary trigger detail and an existing cross-source question awaiting in-game confirmation, rather than an explicit English contradiction. Toughness absorption, damage scope, refresh and additive calculation also supplement the text.

## Icon source

[Original image](https://gameslantern.com/storage/sites/darktide/exporter/talents/ogryn/default/ogryn_revenge_damage.webp) | [Media-Assets Issue](https://github.com/SyuanTsai/Media-Assets/issues/10#issuecomment-5931394406) | [Existing attachment](https://github.com/user-attachments/assets/5d6152a6-dedb-49c4-a7d2-328d082084c0). The icon identifies the talent; it is not mechanism evidence.
