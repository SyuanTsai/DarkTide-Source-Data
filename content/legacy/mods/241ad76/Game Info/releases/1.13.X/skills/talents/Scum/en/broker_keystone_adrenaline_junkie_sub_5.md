# Adrenaline Unbound: source evidence

[繁體中文](../broker_keystone_adrenaline_junkie_sub_5.md) | [Player description](README.md#broker_keystone_adrenaline_junkie_sub_5) | [Technical index](SOURCE_INDEX.md) | [English comparison](LOCALIZATION_COMPARISON.md#broker_keystone_adrenaline_junkie_sub_5)

Release 1.13.1; fixed SHA `7e662fcda16219d775b84af50322be2e9cd9d62e`. Talent `broker_keystone_adrenaline_junkie_sub_5`; name key `loc_talent_broker_keystone_adrenaline_junkie_sub_5`; description key `loc_talent_broker_keystone_adrenaline_junkie_sub_5_desc`. Node `node_084b7585-f08d-497a-939b-848ffcb58960`; category Keystone; one point. Mechanisms and examples reuse verified source evidence; no in-game test was performed.

## Source-confirmed behavior and static derivation

- The upgrade enables the `broker_keystone_adrenaline_junkie_restore_toughness` special rule. The Frenzy buff sets `restore_toughness` to the configured value `0.05` only on the server.
- `update_func` initializes `next_tick = t`. When `next_tick <= t`, it calls `Toughness.replenish_percentage(unit, 0.05)` and sets the next tick to `next_tick + 1`.
- `recover_percentage_toughness` calculates the target recovery as `max_toughness × fixed_percentage`, subtracts it from `toughness_damage`, and clamps that value to a minimum of 0. The theoretical recovery per tick is therefore 5% of maximum Toughness; actual recovery depends on the deficit and Toughness recovery modifiers.

## Fixed source evidence

- [scripts/settings/ability/archetype_talents/talents/broker_talents.lua — L2827-L2855](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/broker_talents.lua#L2827-L2855)
- [scripts/settings/talent/talent_settings_broker.lua — L464-L480](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/talent/talent_settings_broker.lua#L464-L480)
- [scripts/settings/buff/archetype_buff_templates/broker_buff_templates.lua — L3761-L3807](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/broker_buff_templates.lua#L3761-L3807)
- [scripts/settings/buff/archetype_buff_templates/broker_buff_templates.lua — L3818-L3829](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/broker_buff_templates.lua#L3818-L3829)
- [scripts/utilities/toughness/toughness.lua — L16-L25](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/toughness/toughness.lua#L16-L25)
- [scripts/extension_systems/toughness/player_unit_toughness_extension.lua — L253-L279](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/toughness/player_unit_toughness_extension.lua#L253-L279)
- [scripts/settings/ability/archetype_talents/talents/broker_talents.lua — L2827-L2855](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/broker_talents.lua#L2827-L2855)
- [scripts/ui/views/talent_builder_view/layouts/broker_tree.lua — L1834-L1856](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/ui/views/talent_builder_view/layouts/broker_tree.lua#L1834-L1856)

## Example assumptions and limits

- **Recovery amount**: restore 5% of maximum Toughness each second. At 100 maximum Toughness, each tick restores 100 × 0.05 = 5 points.
- **Recovery cap**: recovery cannot exceed the current Toughness deficit. A tick adds no Toughness when Toughness is already full.
- **Timing**: recovery occurs only during Adrenaline Frenzy. The first tick can occur immediately when Frenzy begins, followed by 1-second intervals.

**Recovery example**: with 100 maximum Toughness, a deficit of at least 5 points, and no other Toughness recovery modifiers, one tick restores 100 × 0.05 = 5 points. If only 3 points are missing, it restores at most 3. The 5% per second uses maximum Toughness, rather than missing Toughness; other recovery modifiers affect the amount, which cannot exceed maximum Toughness. Recovery runs only while the Frenzy buff is active. Its duration still follows the core keystone or the upgrade that extends Frenzy. Mechanisms reuse the fixed-version evidence, with local Build 25606770 English text corresponding to 1.13.1. Actual presentation and behavior remain unobserved in game. Missing details are supplementary explanations.

<a id="original-english-template-and-reconstruction"></a>

## Original English template and reconstruction

Steam Build `25606770`; `content/localization/ui`, resource hash `63564edcb7c3c5ee`; language `en` (code `0`).

- Name key `loc_talent_broker_keystone_adrenaline_junkie_sub_5`, hash `c11b1c30`, entry 12444: **Adrenaline Unbound**.
- Description key `loc_talent_broker_keystone_adrenaline_junkie_sub_5_desc`, hash `1af84a83`, entry 1761.

Full raw template:

~~~text
While {frenzy:%s} is active, you replenish {toughness:%s} Toughness each second.
~~~

| Placeholder | Value | Formatting |
|---|---|---|
| `{frenzy:%s}` | `loc_term_glossary_adrenaline_frenzy` → Adrenaline Frenzy | `loc_string` |
| `{toughness:%s}` | `broker_keystone_adrenaline_junkie_proc.sub_5_toughness_per_tick = 0.05` → `5%` | `percentage`; no prefix |

The existing display mapping at `broker_talents.lua` L2831-L2846 supplies the Frenzy glossary key and the proc buff's `sub_5_toughness_per_tick`. The verified value is reused. The same-build glossary resolves to **Adrenaline Frenzy** (`loc_term_glossary_adrenaline_frenzy`, hash `659d0629`, entry 6613).

Static reconstruction; not an observed game screen:

~~~text
While Adrenaline Frenzy is active, you replenish 5% Toughness each second.
~~~

## English comparison

The English correctly limits recovery to active Adrenaline Frenzy and states 5% each second. It leaves the maximum-Toughness basis, deficit cap, first-tick timing, and recovery modifiers unspecified; these are supplementary details, not English errata.

## Icon source

[Original image](https://gameslantern.com/storage/sites/darktide/exporter/talents/broker/keystone_modifier/broker_keystone_adrenaline_junkie_sub_5.webp) | [Media-Assets Issue](https://github.com/SyuanTsai/Media-Assets/issues/12#issuecomment-5933978534) | [Existing attachment](https://github.com/user-attachments/assets/49a6640b-2259-4b1b-9fd1-634da02747ce). The icon identifies the talent; it is not mechanism evidence.
