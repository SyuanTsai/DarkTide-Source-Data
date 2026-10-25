# Powerdrive: source evidence

[繁體中文](../cryptic_overload_keystone_abilities.md) | [Player description](README.md#cryptic_overload_keystone_abilities) | [Technical index](SOURCE_INDEX.md) | [English comparison](LOCALIZATION_COMPARISON.md#cryptic_overload_keystone_abilities)

Release 1.13.1; fixed SHA `7e662fcda16219d775b84af50322be2e9cd9d62e`. Talent `cryptic_overload_keystone_abilities`; name key `loc_talent_cryptic_overload_keystone_abilities`; description key `loc_talent_cryptic_overload_keystone_abilities_desc`. Node `node_1291b67e-1c33-4fc0-833a-7656d99a79d4`; category Keystone; one point. Mechanisms and examples reuse verified source evidence; no in-game test was performed.

## Source-confirmed behavior and static derivation

- With this modifier enabled, the Power Overload passive accepts `on_combat_ability`. It requires `ability_cost > 0` and adds `ability_cost × 5` stacks. Settings specify 5 stacks per charge; the root Keystone threshold is 30.
- `_add_overload_stack` compares the visible count plus the increment with the threshold. Reaching or exceeding 30 triggers one overload and clears existing accumulation; excess does not carry into the next cycle.
- Voltaic Emitter sends the charge count consumed by that use as `ability_cost` at the start of its action. Advanced Combat Doctrines activation sends `floor(0.25) = 0`, so it adds no stacks through the ordinary activation entry. The stance's ending branch returns before `super.start`, but removing the stance buff still runs the dedicated `stop_func` settlement below.
- The stance `stop_func` separately calculates `floor(cooldown_percent_used + 0.25) × 5` and passes it to the Keystone through `cryptic_buffs_event_give_overload_keystone_stacks`. Absence of `on_combat_ability` in the ending toggle branch therefore does not mean no stacks are granted on ending. Activation's `ability_cost = floor(0.25) = 0`; ongoing and shot costs accumulate in `cooldown_percent_used`, and resource restoration does not subtract from the recorded consumption.
- Chordclaw activation sends `on_combat_ability` only when `active = false`. Later uses while `active = true` continue spending charges but do not enter this stack-gain path again.

## Fixed source evidence

- [scripts/settings/ability/archetype_talents/talents/cryptic_talents.lua — L1374-L1392](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/cryptic_talents.lua#L1374-L1392)
- [scripts/settings/talent/talent_settings_cryptic.lua — L264-L272](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/talent/talent_settings_cryptic.lua#L264-L272)
- [scripts/settings/buff/archetype_buff_templates/cryptic_buff_templates.lua — L1595-L1614](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/cryptic_buff_templates.lua#L1595-L1614)
- [scripts/settings/buff/archetype_buff_templates/cryptic_buff_templates.lua — L1749-L1772](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/cryptic_buff_templates.lua#L1749-L1772)
- [scripts/extension_systems/ability/actions/action_cryptic_discharge.lua — L69-L80](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/ability/actions/action_cryptic_discharge.lua#L69-L80)
- [scripts/extension_systems/ability/actions/action_cryptic_precision_stance_toggle.lua — L40-L60](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/ability/actions/action_cryptic_precision_stance_toggle.lua#L40-L60)
- [scripts/extension_systems/ability/actions/action_cryptic_precision_stance_toggle.lua — L104-L113](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/ability/actions/action_cryptic_precision_stance_toggle.lua#L104-L113)
- [scripts/settings/buff/archetype_buff_templates/cryptic_buff_templates.lua — L449-L459](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/cryptic_buff_templates.lua#L449-L459)
- [scripts/settings/buff/archetype_buff_templates/cryptic_buff_templates.lua — L490-L525](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/cryptic_buff_templates.lua#L490-L525)
- [scripts/settings/buff/archetype_buff_templates/cryptic_buff_templates.lua — L1658-L1681](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/cryptic_buff_templates.lua#L1658-L1681)
- [scripts/extension_systems/weapon/actions/action_cryptic_chordclaw_activation.lua — L34-L65](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/weapon/actions/action_cryptic_chordclaw_activation.lua#L34-L65)
- [scripts/settings/ability/archetype_talents/talents/cryptic_talents.lua — L1374-L1392](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/cryptic_talents.lua#L1374-L1392)
- [scripts/ui/views/talent_builder_view/layouts/cryptic_tree.lua — L1797-L1819](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/ui/views/talent_builder_view/layouts/cryptic_tree.lua#L1797-L1819)

## Example assumptions and limits

- **Trigger**: With Voltaic Emitter, each consumed charge adds **5 Power Overload stacks**. The Chordclaw counts **only its first activation**; charges spent on continued attacks during that same activation do not grant more stacks.
- **Advanced Combat Doctrines**: When the stance ends, its activation, ongoing and shot charge consumption is totalled. Each complete charge adds 5 stacks; a remainder smaller than one charge is discarded.
- **Charge example**: One stance consumes `0.25` charges on activation, `1.6` while maintained and `0.2` through shots, totalling `2.05`. Two complete charges count, giving `2 × 5 = 10` stacks. Charges recovered along the way do not subtract from the consumption already recorded.
- **Overload example**: Starting at 22 stacks, consuming 2 charges adds 10: `22 + 10 = 32`. One overload triggers immediately and resets the count to zero; the 2 excess stacks are discarded.

- The fixed-source example is 22 existing stacks plus 10 from 2 charges, reaching 32 and triggering once at the 30-stack threshold. The excess 2 do not remain.
- Advanced Combat Doctrines settles separately when the stance ends. Later charge spending during a continuous Chordclaw activation is not counted by this modifier.
- Crossing 30 triggers once and resets to zero; overflowing stacks do not carry over.
- Both language templates summarise 5 stacks per charge spent. The verified ability-specific event behavior remains unobserved in game. The independent English comparison below distinguishes its explicit per-charge claim from omitted settlement details.

Mechanisms reuse the fixed-version evidence, with local Build 25606770 English text corresponding to 1.13.1. Actual presentation and behavior remain unobserved in game. Missing details are supplementary explanations.

<a id="original-english-template-and-reconstruction"></a>

## Original English template and reconstruction

Steam Build `25606770`; `content/localization/ui`, resource hash `63564edcb7c3c5ee`; language `en` (code `0`).

- Name key `loc_talent_cryptic_overload_keystone_abilities`, hash `bb01bbb3`, entry 12058: **Powerdrive**.
- Description key `loc_talent_cryptic_overload_keystone_abilities_desc`, hash `6c9f2d5b`, entry 7056.

Full raw template:

~~~text
Gain {stacks:%s} stacks for each Charge spent.
~~~

| Placeholder | Value | Formatting |
|---|---|---|
| `stacks` | 5 | `number`: `num_stacks_gained_per_combat_ability_charge = 5` |

The mapping in `cryptic_talents.lua` L1382–L1391 uses the already verified setting. The `overload` mapping supplies `loc_talent_cryptic_overload_keystone` but is unused by this raw template.

Static reconstruction; not an observed game screen:

~~~text
Gain 5 stacks for each Charge spent.
~~~

## English comparison

The value of 5 stacks per counted charge matches the verified setting. However, the English's unqualified “for each Charge spent” explicitly includes later charges spent during a continuous Chordclaw activation, while the verified behavior grants no additional stacks for those charges. That per-charge claim is an explicit English contradiction. Deferred whole-charge settlement for Advanced Combat Doctrines, recorded-consumption recovery behavior and overflow handling are supplements. This conclusion uses the existing accepted evidence; no new mechanism investigation was performed.

## Icon source

[Original image](https://gameslantern.com/storage/sites/darktide/exporter/talents/cryptic/keystone_modifier/cryptic_overload_keystone_abilities.webp) | [Media-Assets Issue](https://github.com/SyuanTsai/Media-Assets/issues/13#issuecomment-5935647528) | [Existing attachment](https://github.com/user-attachments/assets/d7c8f168-1f4e-42cc-a3d7-926d3b4382f1). The icon identifies the talent; it is not mechanism evidence.
