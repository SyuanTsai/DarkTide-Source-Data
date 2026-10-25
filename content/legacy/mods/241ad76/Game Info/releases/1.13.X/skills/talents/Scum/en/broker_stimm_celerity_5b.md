# Reflex: source evidence

[繁體中文](../broker_stimm_celerity_5b.md) | [Player description](README.md#broker_stimm_celerity_5b) | [Technical index](SOURCE_INDEX.md) | [English comparison](LOCALIZATION_COMPARISON.md#broker_stimm_celerity_5b)

Release 1.13.1; fixed SHA `7e662fcda16219d775b84af50322be2e9cd9d62e`. Talent `broker_stimm_celerity_5b`; name key `loc_talent_broker_stimm_celerity_b`; description key `loc_talent_stat_reload_speed / loc_talent_stat_recoil_modifier`. Node `node_8b44a279-b6fb-410a-9805-22f5e25d470c`; category Stimm recipe; 5 points. Mechanisms and examples reuse verified source evidence; no in-game test was performed.

## Source-confirmed behavior and static derivation

- This recipe has `cost = max_points`, so it is bought once rather than repeatedly purchased as multiple ranks. Selected prerequisite recipes remain active together; each node's effects add or multiply according to its stat type.
- `reload_speed = 0.3` and `recoil_modifier = −0.5`, reducing base `recoil_modifier` from 1 to 0.5. The recoil extension multiplies gain by this value and decay by its reciprocal. This does not directly halve each shot's on-screen displacement.

## Fixed source evidence

- [scripts/settings/buff/archetype_buff_templates/broker_buff_templates.lua — L4091-L4108](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/broker_buff_templates.lua#L4091-L4108)
- [scripts/settings/buff/archetype_buff_templates/broker_buff_templates.lua — L4128-L4168](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/broker_buff_templates.lua#L4128-L4168)
- [scripts/settings/buff/archetype_buff_templates/broker_buff_templates.lua — L4210-L4248](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/broker_buff_templates.lua#L4210-L4248)
- [scripts/extension_systems/buff/buffs/buff.lua — L689-L727](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/buff/buffs/buff.lua#L689-L727)
- [scripts/utilities/action/action_handler.lua — L356-L428](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/action/action_handler.lua#L356-L428)
- [scripts/extension_systems/recoil/player_unit_weapon_recoil_extension.lua — L87-L114](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/recoil/player_unit_weapon_recoil_extension.lua#L87-L114)
- [scripts/settings/talent/talent_settings_broker.lua — L550-L557](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/talent/talent_settings_broker.lua#L550-L557)
- [scripts/ui/views/broker_stimm_builder_view/layouts/broker_stimm_tree.lua — L737-L760](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/ui/views/broker_stimm_builder_view/layouts/broker_stimm_tree.lua#L737-L760)

## Example assumptions and limits

- **Recipe cost**: 5 points. Once selected, it takes effect when using the dedicated Stimm, with a basic duration of 15 seconds.

- **Reload Speed**: Gain 30%. A speed-scaled reload action normally lasting 2 seconds takes 2 ÷ 1.3 ≈ 1.538 seconds.

- **Recoil control**: Shooting generates 50% less recoil unsteadiness; unsteadiness recovers faster after firing stops.

- **Recoil example**: A gain of 0.2 unsteadiness per shot becomes 0.2 × 0.5 = 0.1. Decay of 0.2 per second becomes 0.2 ÷ 0.5 = 0.4. Actual muzzle displacement still follows the weapon's recoil curve.

`syringe_broker_buff` reads and applies the same user's recipes together. Field sharing uses the provider's recipes, with externally controlled duration determined separately by the field settings. Mechanisms reuse the fixed-version evidence, with local Build 25606770 English text corresponding to 1.13.1. Actual presentation and behavior remain unobserved in game. Missing details are supplementary explanations.

<a id="original-english-template-and-reconstruction"></a>

## Original English template and reconstruction

Steam Build `25606770`; `content/localization/ui`, resource hash `63564edcb7c3c5ee`; language `en` (code `0`).

- Name key `loc_talent_broker_stimm_celerity_b`, hash `d33a89f3`, entry 13650: **Reflex**.
- Description key `loc_talent_stat_reload_speed`, hash `9020f1a1`, entry 9316; key supplied by the accepted source mapping, paired by hash.
- Description key `loc_talent_stat_recoil_modifier`, hash `302c7f95`, entry 3131; key supplied by the accepted source mapping, paired by hash.

Full raw template:

~~~text
{reload_speed:%s} Reload Speed.
{recoil_modifier:%s} Recoil.
~~~

| Placeholder | Value | Formatting |
|---|---|---|
| Name `tier` | `nil` → empty string | Raw name template: `Reflex {tier:%s}`; no Roman numeral is appended |
| `reload_speed` | `0.3` | Percentage with `+`: `+30%` |
| `recoil_modifier` | `−0.5` | Percentage: `−50%` |

The component keys are paired by their accepted hashes; the component JSONL entries omit key fields. Display mappings at `talent_settings_broker.lua` L550-L557 supply the values and leave the name tier empty. Reuse the [shared name/stat generator L12-L53](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/talent/talent_settings_broker.lua#L12-L53) and accepted percentage formatting. The title trims the template's trailing space; component order below does not claim observed game layout.

Static reconstruction; not an observed game screen:

~~~text
+30% Reload Speed.
-50% Recoil.
~~~

## English comparison

The English components state Reload Speed and Recoil, with reconstructed +30% and −50%. These match the accepted stat changes. The recoil label does not explain unsteadiness gain, reciprocal decay or the weapon curve; those details and the original examples supplement the description. No clear contradiction appears.

## Icon source

[Original image](https://gameslantern.com/storage/sites/darktide/exporter/talents/broker/broker_stimm/broker_stimm_celerity_5b.webp) | [Media-Assets Issue](https://github.com/SyuanTsai/Media-Assets/issues/12#issuecomment-5934604124) | [Existing attachment](https://github.com/user-attachments/assets/21b33eec-94cc-4cea-b531-1ff788ff6bc9). The icon identifies the talent; it is not mechanism evidence.
