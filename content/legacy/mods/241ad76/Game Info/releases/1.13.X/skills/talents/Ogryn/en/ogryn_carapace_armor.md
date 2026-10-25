# Feel No Pain: source evidence

[繁體中文](../ogryn_carapace_armor.md) | [Player description](README.md#ogryn_carapace_armor) | [Technical index](SOURCE_INDEX.md) | [English comparison](LOCALIZATION_COMPARISON.md#ogryn_carapace_armor)

Release 1.13.1; fixed SHA `7e662fcda16219d775b84af50322be2e9cd9d62e`. Talent `ogryn_carapace_armor`; name key `loc_talent_ogryn_carapace_armor`; description key `loc_talent_ogryn_carapace_armor_any_damage_desc`. Node `node_916ca2ec-b1d0-41c4-807b-a250950f9d5b`; category Keystone; one point. Mechanisms and examples reuse verified source evidence; no in-game test was performed.

## Source-confirmed behavior and static derivation

- Each child-buff stack grants `toughness_replenish_modifier=0.03` and `toughness_damage_taken_multiplier=0.97`. Toughest!'s conditional stat buff adds 0.025 Toughness replenishment per stack.
- The parent starts with `start_at_max=true`. Each eligible damage event removes only one child; `internal_cd_t=t+1`. Restoration requires at least 2s since the most recent removal and more than 2s since the previous addition. On knockdown, the parent reduces the children to one.
- The child buff uses `stack_offset=-1`. There can be 11 internal children, but the player display and effective stat accumulation are 10 stacks.

## Fixed source evidence

- [scripts/settings/ability/archetype_talents/talents/ogryn_talents.lua — L1618-L1676](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/ogryn_talents.lua#L1618-L1676)
- [scripts/settings/buff/archetype_buff_templates/ogryn_buff_templates.lua — L600-L624](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/ogryn_buff_templates.lua#L600-L624)
- [scripts/settings/buff/archetype_buff_templates/ogryn_buff_templates.lua — L626-L719](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/ogryn_buff_templates.lua#L626-L719)
- [scripts/extension_systems/buff/buffs/parent_proc_buff.lua — L25-L47](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/buff/buffs/parent_proc_buff.lua#L25-L47)
- [scripts/extension_systems/buff/buffs/parent_proc_buff.lua — L63-L139](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/buff/buffs/parent_proc_buff.lua#L63-L139)
- [scripts/extension_systems/buff/buffs/parent_proc_buff.lua — L144-L191](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/buff/buffs/parent_proc_buff.lua#L144-L191)
- [scripts/extension_systems/buff/buffs/buff.lua — L397-L429](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/buff/buffs/buff.lua#L397-L429)
- [scripts/settings/buff/buff_settings.lua — L1000-L1012](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/buff_settings.lua#L1000-L1012)
- [scripts/extension_systems/toughness/player_unit_toughness_extension.lua — L218-L250](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/toughness/player_unit_toughness_extension.lua#L218-L250)
- [scripts/settings/ability/archetype_talents/talents/ogryn_talents.lua — L1618-L1676](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/ogryn_talents.lua#L1618-L1676)
- [scripts/ui/views/talent_builder_view/layouts/ogryn_tree.lua — L625-L655](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/ui/views/talent_builder_view/layouts/ogryn_tree.lua#L625-L655)

## Example assumptions and limits

- **Starting stacks and restoration**: Feel No Pain starts with 10 stacks. After losing a stack, at least 2s must pass before one is restored; more than 2s must also have passed since the previous addition.

- **Losing stacks from damage**: Taking damage, including damage absorbed by Toughness, removes one stack. Blocked attacks do not remove a stack. These damage triggers can remove a stack at most once per second.

- **Each stack**: Gain 3% Toughness replenishment; Toughness damage is multiplied by 0.97. Selecting Toughest! adds a further 2.5% Toughness replenishment per stack.

- **Full-stack example**: At 10 stacks, replenishment is multiplied by 1 + 10 × 3% = 1.30, or 1.55 with Toughest! Toughness damage is multiplied by 0.97^10 ≈ 0.737, so 100 becomes about 73.7. A replenishment amount of 20 becomes 20 × 1.3 = 26, or 31 with Toughest!, capped by the missing amount.

- **When knocked down**: Current effective Feel No Pain stacks are cleared, then restored one at a time.

- **English damage scope**: The original English says Damage Reduction without specifying the damage type. The accepted evidence confirms reduction of Toughness damage; it does not reduce Health damage.

After knockdown, restoration timing restarts and each addition restores one stack. Damage reduction changes only the Toughness damage multiplier. Both local Chinese and English broadly call this damage reduction without naming a damage type; the accepted public source reduces Toughness damage rather than Health damage. The English scope is therefore left qualified in the comparison, without assuming an explicit all-damage promise. This wording difference alone does not establish a Chinese mistranslation. Local Build 25606770 and the fixed public source correspond to 1.13.1; actual presentation and behavior remain unobserved in game.

<a id="original-english-template-and-reconstruction"></a>

## Original English template and reconstruction

Steam Build `25606770`; `content/localization/ui`, resource hash `63564edcb7c3c5ee`; language `en` (code `0`).

- Name key `loc_talent_ogryn_carapace_armor`, hash `9b72c015`, entry 10029: **Feel No Pain**.
- Description key `loc_talent_ogryn_carapace_armor_any_damage_desc`, hash `cae1c616`, entry 13103.
- Referenced name `loc_talent_ogryn_carapace_armor_more_toughness`, hash `70367a4e`, entry 7286: **Toughest!**

Full raw template:

~~~text
You are blessed with {stacks:%s} Stacks of Feel No Pain. Each Stack grants {toughness_regen:%s} Toughness Replenishment and {damage_reduction:%s} Damage Reduction.

Taking Damage removes one stack. Stacks are restored every {duration:%s}s.
~~~

| Placeholder | Value | Formatting |
|---|---|---|
| stacks | Child-buff max_stacks 10 | Number → 10; distinct from 11 internal children with stack_offset −1 |
| toughness_regen | toughness_replenish_modifier 0.03 | Percentage with + prefix → +3% |
| damage_reduction | toughness_damage_taken_multiplier 0.97 | Custom abs(1 − 0.97) × 100 = 3; percentage with + prefix → +3% |
| duration | Parent restore_child_duration 2 | Number → 2; template supplies s |

Only the missing display map in the cited talent definition, lines 1618–1676, was read. Existing mechanism, numerical and formatter evidence was reused.

Static reconstruction; not an observed game screen:

~~~text
You are blessed with 10 Stacks of Feel No Pain. Each Stack grants +3% Toughness Replenishment and +3% Damage Reduction.

Taking Damage removes one stack. Stacks are restored every 2s.
~~~

## English comparison

The independently read English agrees with the starting 10 effective stacks, +3% replenishment, losing one stack on damage and the nominal 2s restoration interval. Its term Damage Reduction does not specify Toughness or Health, so the confirmed Toughness-only implementation is stated and the English scope is not treated as fully confirmed. The multiplicative 0.97^10 formula, Toughest! interaction, blocked-hit exclusion, timing prerequisites and knockdown behavior supplement the text.

## Icon source

[Original image](https://gameslantern.com/storage/sites/darktide/exporter/talents/ogryn/keystone/ogryn_carapace_armor.webp) | [Media-Assets Issue](https://github.com/SyuanTsai/Media-Assets/issues/10#issuecomment-5931383354) | [Existing attachment](https://github.com/user-attachments/assets/9436a125-4e9f-4655-ae8f-4975db2f4af1). The icon identifies the talent; it is not mechanism evidence.
