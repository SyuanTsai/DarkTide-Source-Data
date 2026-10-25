# Mettle: source evidence

[繁體中文](../psyker_crits_regen_toughness_movement_speed.md) | [Player description](README.md#psyker_crits_regen_toughness_movement_speed) | [Technical index](SOURCE_INDEX.md) | [English comparison](LOCALIZATION_COMPARISON.md#psyker_crits_regen_toughness_movement_speed)

Release 1.13.1; fixed SHA `7e662fcda16219d775b84af50322be2e9cd9d62e`. Talent `psyker_crits_regen_toughness_movement_speed`; name key `loc_talent_psyker_crits_regen_tougness_and_movement_speed`; description key `loc_talent_psyker_crits_regen_toughness_speed_description`. Node `node_a9e156c8-8c1a-4421-a5de-ec60da158b5d`; category Talent; one point. Mechanisms and examples reuse verified source evidence; no in-game test was performed.

## Source-confirmed behavior and static derivation

- `on_critical_strike` sets the `crit` flag, and `on_hit` applies `stacking_movement_buff`.
- The speed stat scales with `stack_count`. The `update_func` itself calculates only `0.1 × dt / 4` without multiplying by `stack_count`. Shared `Buff.update` executes `update_func` once per instance.

## Fixed source evidence

- [scripts/settings/buff/archetype_buff_templates/psyker_buff_templates.lua — L3008-L3064](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/psyker_buff_templates.lua#L3008-L3064)
- [scripts/settings/talent/talent_settings_psyker.lua — L54-L59](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/talent/talent_settings_psyker.lua#L54-L59)
- [scripts/extension_systems/toughness/player_unit_toughness_extension.lua — L253-L285](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/toughness/player_unit_toughness_extension.lua#L253-L285)
- [scripts/extension_systems/buff/buffs/buff.lua — L29-L48](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/buff/buffs/buff.lua#L29-L48)
- [scripts/settings/ability/archetype_talents/talents/psyker_talents.lua — L1486-L1514](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/psyker_talents.lua#L1486-L1514)
- [scripts/ui/views/talent_builder_view/layouts/psyker_tree.lua — L117-L142](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/ui/views/talent_builder_view/layouts/psyker_tree.lua#L117-L142)

## Example assumptions and limits

- **Trigger**: after a Critical Hit, restore 10% of maximum Toughness over 4 seconds and gain 5% Movement Speed.

- **Stacks and refresh**: Movement Speed stacks up to 3 times, for a total increase of 15%; triggering the effect again resets the 4 seconds. Toughness continues to regenerate at 2.5% of maximum per second and does not multiply with the Movement Speed stack count.

- **Restoration example**: with 100 maximum Toughness, a sufficient deficit and no other bonuses, the 4-second effect restores 100 × 10% = 10 points. At 3 stacks it still restores 2.5 points per second, while the movement multiplier is 1 + 3 × 5% = 1.15.

Mechanisms reuse the fixed-version evidence, with local Build 25606770 English text corresponding to 1.13.1. Actual presentation and behavior remain unobserved in game. Missing details are supplementary explanations.

<a id="original-english-template-and-reconstruction"></a>

## Original English template and reconstruction

Steam Build `25606770`; `content/localization/ui`, resource hash `63564edcb7c3c5ee`; language `en` (code `0`).

- Name key `loc_talent_psyker_crits_regen_tougness_and_movement_speed`, hash `56d92a9d`, entry 5638: **Mettle**.
- Description key `loc_talent_psyker_crits_regen_toughness_speed_description`, hash `0da7190a`, entry 899.

Full raw template:

~~~text
Critical Hits replenish {toughness:%s} Toughness over {seconds:%s}s.

Critical Hits also grant {movement_speed:%s} Movement Speed for {seconds:%s}s, stacking {stacks:%s} times.
~~~

| Placeholder | Value | Formatting |
|---|---|---|
| `toughness` | `0.1` | percentage → `10%` |
| `seconds` | `4` | number → `4` |
| `movement_speed` | `0.05` | percentage, `+` prefix → `+5%` |
| `stacks` | `3` | number → `3` |

[Display mapping](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/psyker_talents.lua#L1491-L1509) selects the verified Toughness amount, Movement Speed, duration and stack cap. Shared formatting is reused.

Static reconstruction; not an observed game screen:

~~~text
Critical Hits replenish 10% Toughness over 4s.

Critical Hits also grant +5% Movement Speed for 4s, stacking 3 times.
~~~

## English comparison

The English places sustained Toughness restoration and stacking Movement Speed in separate paragraphs. The stated amounts, duration and speed cap agree with the verified effects; it does not claim Toughness restoration stacks. Its fixed restoration rate, maximum-Toughness basis and refresh behavior are supplements.

## Icon source

[Original image](https://gameslantern.com/storage/sites/darktide/exporter/talents/psyker/default/psyker_crits_regen_toughness_movement_speed.webp) | [Media-Assets Issue](https://github.com/SyuanTsai/Media-Assets/issues/7#issuecomment-5928034845) | [Existing attachment](https://github.com/user-attachments/assets/53013aa9-f833-431c-8b85-3e548dbc318c). The icon identifies the talent; it is not mechanism evidence.
