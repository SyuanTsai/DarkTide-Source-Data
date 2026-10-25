# Stay Close!: source evidence

[繁體中文](../ogryn_toughness_regen_aura.md) | [Player description](README.md#ogryn_toughness_regen_aura) | [Technical index](SOURCE_INDEX.md) | [English comparison](LOCALIZATION_COMPARISON.md#ogryn_toughness_regen_aura)

Release 1.13.1; fixed SHA `7e662fcda16219d775b84af50322be2e9cd9d62e`. Talent `ogryn_toughness_regen_aura`; name key `loc_talent_ogryn_toughness_regen_aura`; description key `loc_talent_ogryn_toughness_regen_aura_desc`. Node `node_8d3ffc06-6e43-4888-bddb-adae115908fa`; category Aura; one point. Mechanisms and examples reuse verified source evidence; no in-game test was performed.

## Source-confirmed behavior and static derivation

- The aura writes shared value 0.2 to `toughness_replenish_modifier`, with maximum stacks 1.
- Toughness restoration methods read that attribute. A percentage restoration path configured to ignore buffs does not apply it. Natural Coherency regeneration uses a separate set of rate attributes.
- The tree groups this Aura node with the other two Ogryn auras in `exclusive_group = aura`; the Coherency chain includes the owner.

## Fixed source evidence

- [scripts/settings/ability/archetype_talents/talents/ogryn_talents.lua — L718-L742](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/ogryn_talents.lua#L718-L742)
- [scripts/settings/buff/archetype_buff_templates/ogryn_buff_templates.lua — L104-L121](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/ogryn_buff_templates.lua#L104-L121)
- [scripts/settings/talent/talent_settings_ogryn.lua — L111-L113](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/talent/talent_settings_ogryn.lua#L111-L113)
- [scripts/extension_systems/toughness/player_unit_toughness_extension.lua — L218-L267](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/toughness/player_unit_toughness_extension.lua#L218-L267)
- [scripts/extension_systems/toughness/player_unit_toughness_extension.lua — L133-L143](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/toughness/player_unit_toughness_extension.lua#L133-L143)
- [scripts/ui/views/talent_builder_view/layouts/ogryn_tree.lua — L248-L270](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/ui/views/talent_builder_view/layouts/ogryn_tree.lua#L248-L270)
- [scripts/extension_systems/coherency/coherency_system.lua — L188-L195](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/coherency/coherency_system.lua#L188-L195)
- [scripts/settings/ability/archetype_talents/talents/ogryn_talents.lua — L718-L742](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/ogryn_talents.lua#L718-L742)
- [scripts/ui/views/talent_builder_view/layouts/ogryn_tree.lua — L247-L272](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/ui/views/talent_builder_view/layouts/ogryn_tree.lua#L247-L272)

## Example assumptions and limits

- **Replenishment effect**: You and allies in Coherency gain +20% to eligible Toughness replenishment from melee kills, talents and other sources. Effects explicitly configured to ignore replenishment bonuses are excluded.

- **Replenishment example**: An eligible base restoration of 15 Toughness becomes 15 × 1.20 = 18 without other modifiers. Actual restoration is capped by missing Toughness: with a deficit of only 5, restore only 5.

- **Stacking and cooldown**: The aura has at most 1 stack and no separate cooldown. It increases eligible restoration amounts, does not create a restoration event by itself, and does not increase natural Coherency regeneration speed.

The 20% modifies eligible restoration amounts and does not imply +20% natural Coherency regeneration speed. Paths ignoring buffs bypass the modifier. Final restoration also depends on the deficit and other restoration modifiers. English and code evidence both correspond to 1.13.1.

<a id="original-english-template-and-reconstruction"></a>

## Original English template and reconstruction

Steam Build `25606770`; `content/localization/ui`, resource hash `63564edcb7c3c5ee`; language `en` (code `0`).

- Name key `loc_talent_ogryn_toughness_regen_aura`, hash `e1d180e7`, entry 14642: **Stay Close!**.
- Description key `loc_talent_ogryn_toughness_regen_aura_desc`, hash `89218b06`, entry 8895.

Full raw template:

~~~text
{toughness_regen_rate_modifier:%s} Toughness Replenishment for you and Allies in Coherency.
~~~

| Placeholder | Value | Formatting |
|---|---|---|
| toughness_regen_rate_modifier | find_value from ogryn_toughness_regen_aura.stat_buffs.toughness_replenish_modifier = 0.2 | Percentage × 100, explicit + prefix → +20% |

The format map resolves the replenishment amount attribute despite the placeholder name containing rate. Only the necessary map at L718–L742 was read; mechanism evidence was reused.

Static reconstruction; not an observed game screen:

~~~text
+20% Toughness Replenishment for you and Allies in Coherency.
~~~

## English comparison

The English is independently read as a Toughness Replenishment bonus for the owner and Coherency allies. It does not specify faster natural Coherency regeneration or automatic restoration. Its +20% value and recipient scope match the accepted evidence. Ignore-buff exceptions, eligible restoration paths, deficit cap, examples and selection/stacking limits supplement the text. No explicit English contradiction is established.

## Icon source

[Original image](https://gameslantern.com/storage/sites/darktide/exporter/talents/ogryn/aura/ogryn_toughness_regen_aura.webp) | [Media-Assets Issue](https://github.com/SyuanTsai/Media-Assets/issues/10#issuecomment-5931383354) | [Existing attachment](https://github.com/user-attachments/assets/014cd689-2381-43e8-9241-b0a13af77036). The icon identifies the talent; it is not mechanism evidence.
