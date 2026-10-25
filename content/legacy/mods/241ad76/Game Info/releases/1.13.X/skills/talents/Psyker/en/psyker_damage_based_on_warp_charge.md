# Warp Rider: source evidence

[繁體中文](../psyker_damage_based_on_warp_charge.md) | [Player description](README.md#psyker_damage_based_on_warp_charge) | [Technical index](SOURCE_INDEX.md) | [English comparison](LOCALIZATION_COMPARISON.md#psyker_damage_based_on_warp_charge)

Release 1.13.1; fixed SHA `7e662fcda16219d775b84af50322be2e9cd9d62e`. Talent `psyker_damage_based_on_warp_charge`; name key `loc_talent_psyker_damage_based_on_warp_charge`; description key `loc_talent_psyker_damage_based_on_warp_charge_desc`. Node `node_502ba655-95d9-419a-a825-c688915e2983`; category Talent; one point. Mechanisms and examples reuse verified source evidence; no in-game test was performed.

## Source-confirmed behavior and static derivation

- The actual Buff has lerped `damage` from a minimum of `0` to a maximum of `0.2`, with `lerp_t = current_percentage`.
- The old 10–25% string in the Lua `name` is not the effect used here.

## Fixed source evidence

- [scripts/settings/buff/archetype_buff_templates/psyker_buff_templates.lua — L1485-L1505](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/psyker_buff_templates.lua#L1485-L1505)
- [scripts/settings/talent/talent_settings_psyker.lua — L208-L211](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/talent/talent_settings_psyker.lua#L208-L211)
- [scripts/utilities/attack/damage_calculation.lua — L232-L245](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/attack/damage_calculation.lua#L232-L245)
- [scripts/settings/ability/archetype_talents/talents/psyker_talents.lua — L1236-L1252](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/psyker_talents.lua#L1236-L1252)
- [scripts/ui/views/talent_builder_view/layouts/psyker_tree.lua — L965-L991](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/ui/views/talent_builder_view/layouts/psyker_tree.lua#L965-L991)

## Example assumptions and limits

- **Effect**: the Damage bonus rises proportionally with current Peril. At 0% / 50% / 100% Peril, it grants 0% / 10% / 20% Damage respectively.

- **Damage example**: at 50% Peril, with a baseline Damage of 100 at this stage and all other multipliers fixed at 1, 100 × (1 + 20% × 50%) = 110 points. With an existing 25% bonus in the same stage, Damage rises from 125 to 135 points.

Mechanisms reuse the fixed-version evidence, with local Build 25606770 English text corresponding to 1.13.1. Actual presentation and behavior remain unobserved in game. Missing details are supplementary explanations.

<a id="original-english-template-and-reconstruction"></a>

## Original English template and reconstruction

Steam Build `25606770`; `content/localization/ui`, resource hash `63564edcb7c3c5ee`; language `en` (code `0`).

- Name key `loc_talent_psyker_damage_based_on_warp_charge`, hash `02e8b371`, entry 181: **Warp Rider**.
- Description key `loc_talent_psyker_damage_based_on_warp_charge_desc`, hash `bfd23655`, entry 12362.

Full raw template:

~~~text
Deal up to {max_damage:%s} Damage (increases as your Peril increases).
~~~

| Placeholder | Value | Formatting |
|---|---|---|
| `max_damage` | `0.2` | percentage, `+` prefix → `+20%` |

[Display mapping](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/psyker_talents.lua#L1241-L1247) uses the verified `talent_settings_2.offensive_1_1.damage` value of 0.2. Shared percentage formatting is reused. Writer suffixes are export metadata outside the template.

Static reconstruction; not an observed game screen:

~~~text
Deal up to +20% Damage (increases as your Peril increases).
~~~

## English comparison

The English explicitly makes the Damage bonus increase with Peril and caps it at +20%, matching the verified Buff. It omits the zero endpoint, linear interpolation and additive damage stage; these remain supplements.

## Icon source

[Original image](https://gameslantern.com/storage/sites/darktide/exporter/talents/psyker/default/psyker_damage_based_on_warp_charge.webp) | [Media-Assets Issue](https://github.com/SyuanTsai/Media-Assets/issues/7#issuecomment-5928034845) | [Existing attachment](https://github.com/user-attachments/assets/8f79e11c-ea7c-4e52-957b-007bd85bcf1b). The icon identifies the talent; it is not mechanism evidence.
