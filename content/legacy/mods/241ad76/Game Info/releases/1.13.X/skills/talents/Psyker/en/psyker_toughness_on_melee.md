# Warp Expenditure: source evidence

[繁體中文](../psyker_toughness_on_melee.md) | [Player description](README.md#psyker_toughness_on_melee) | [Technical index](SOURCE_INDEX.md) | [English comparison](LOCALIZATION_COMPARISON.md#psyker_toughness_on_melee)

Release 1.13.1; fixed SHA `7e662fcda16219d775b84af50322be2e9cd9d62e`. Talent `psyker_toughness_on_melee`; name key `loc_talent_psyker_warp_charge_generation_generates_toughness`; description key `loc_talent_psyker_toughness_on_melee_description`. Node `node_aeefc406-9103-4749-a827-a90a0525baea`; category Talent; one point. Mechanisms and examples reuse verified source evidence; no in-game test was performed.

## Source-confirmed behavior and static derivation

- After `on_melee_hit`, the effect first checks `weakspot_kill`. If true, it adds the restoration-over-time Buff; only the `elseif target_index == 1` branch grants instant restoration.
- The sustained Buff has `max_stacks = 1` and `refresh_duration_on_stack = true`. Its update restores the configured amount in proportion to `dt / 3`.

## Fixed source evidence

- [scripts/settings/buff/archetype_buff_templates/psyker_buff_templates.lua — L3783-L3818](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/psyker_buff_templates.lua#L3783-L3818)
- [scripts/settings/talent/talent_settings_psyker.lua — L49-L53](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/talent/talent_settings_psyker.lua#L49-L53)
- [scripts/extension_systems/toughness/player_unit_toughness_extension.lua — L253-L285](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/toughness/player_unit_toughness_extension.lua#L253-L285)
- [scripts/settings/ability/archetype_talents/talents/psyker_talents.lua — L1032-L1055](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/psyker_talents.lua#L1032-L1055)
- [scripts/ui/views/talent_builder_view/layouts/psyker_tree.lua — L90-L116](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/ui/views/talent_builder_view/layouts/psyker_tree.lua#L90-L116)

## Example assumptions and limits

- **Ordinary hit**: hitting the first enemy with a melee attack restores 2.5% of maximum Toughness.

- **Weakspot Kill**: a melee hit that kills an enemy through its Weakspot instead restores 15% of maximum Toughness over 3 seconds; this kill does not also grant the preceding 2.5%. Triggering it again resets the 3 seconds without stacking the restoration rate.

- **Restoration example**: with 100 maximum Toughness, no other bonuses and a sufficient deficit, an ordinary hit restores 2.5 points. A Weakspot Kill restores 100 × 15% ÷ 3 = 5 points per second, for 15 points over 3 seconds.

The sustained-restoration example is a continuous-time derivation. The final update frame and differences in the actual display have not been tested in game. Mechanisms reuse the fixed-version evidence, with local Build 25606770 English text corresponding to 1.13.1. Actual presentation and behavior remain unobserved in game. Missing details are supplementary explanations.

<a id="original-english-template-and-reconstruction"></a>

## Original English template and reconstruction

Steam Build `25606770`; `content/localization/ui`, resource hash `63564edcb7c3c5ee`; language `en` (code `0`).

- Name key `loc_talent_psyker_warp_charge_generation_generates_toughness`, hash `42b1f6c1`, entry 4316: **Warp Expenditure**.
- Description key `loc_talent_psyker_toughness_on_melee_description`, hash `3f010d59`, entry 4099.

Full raw template:

~~~text
Melee Weakspot Kills restore {toughness:%s} Toughness over {duration:%s}s. Successful Melee Attacks restore {instant_toughness:%s} Toughness instantly.
~~~

| Placeholder | Value | Formatting |
|---|---|---|
| `toughness` | `0.15` | percentage → `15%` |
| `duration` | `3` | number → `3` |
| `instant_toughness` | `0.025` | percentage → `2.5%` |

[Display mapping](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/psyker_talents.lua#L1037-L1050) selects the verified melee Toughness amounts and duration. Shared percentage and number formatting is reused.

Static reconstruction; not an observed game screen:

~~~text
Melee Weakspot Kills restore 15% Toughness over 3s. Successful Melee Attacks restore 2.5% Toughness instantly.
~~~

## English comparison

The English describes the verified instant and sustained restoration amounts and duration. It does not specify the first-target restriction, the mutually exclusive Weakspot Kill branch, refresh behavior or the maximum-Toughness basis. These are supplements; its broad wording does not explicitly promise both rewards on the same kill.

## Icon source

[Original image](https://gameslantern.com/storage/sites/darktide/exporter/talents/psyker/default/psyker_toughness_on_melee.webp) | [Media-Assets Issue](https://github.com/SyuanTsai/Media-Assets/issues/7#issuecomment-5928034845) | [Existing attachment](https://github.com/user-attachments/assets/cb5dcadd-924f-442d-a21f-cb8f873b182d). The icon identifies the talent; it is not mechanism evidence.
