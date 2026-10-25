# Peril Equilibrium: source evidence

[繁體中文](../psyker_weapon_attacks_peril_equilibrium.md) | [Player description](README.md#psyker_weapon_attacks_peril_equilibrium) | [Technical index](SOURCE_INDEX.md) | [English comparison](LOCALIZATION_COMPARISON.md#psyker_weapon_attacks_peril_equilibrium)

Release 1.13.1; fixed SHA `7e662fcda16219d775b84af50322be2e9cd9d62e`. Talent `psyker_weapon_attacks_peril_equilibrium`; name key `loc_talent_psyker_weapon_attacks_peril_equilibrium`; description key `loc_talent_psyker_weapon_attacks_peril_equilibrium_desc`. Node `node_237fc277-fe42-473b-aeda-70d82fc2d9e8`; category Talent; one point. Mechanisms and examples reuse verified source evidence; no in-game test was performed.

## Source-confirmed behavior and static derivation

- `on_hit` requires `attacking_unit = self`, `damage != 0`, a non-Warp Damage type and a melee or ranged attack. A proc counter is consumed one at a time per update. When `current < threshold`, it sets `min(current + 0.02, 0.75)` directly, without passing through `warp_charge_amount`.

## Fixed source evidence

- [scripts/settings/buff/archetype_buff_templates/psyker_buff_templates.lua — L3844-L3919](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/psyker_buff_templates.lua#L3844-L3919)
- [scripts/settings/talent/talent_settings_psyker.lua — L102-L105](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/talent/talent_settings_psyker.lua#L102-L105)
- [scripts/settings/ability/archetype_talents/talents/psyker_talents.lua — L2628-L2647](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/psyker_talents.lua#L2628-L2647)
- [scripts/ui/views/talent_builder_view/layouts/psyker_tree.lua — L1895-L1922](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/ui/views/talent_builder_view/layouts/psyker_tree.lua#L1895-L1922)

## Example assumptions and limits

- **How it works**: A non-Warp melee or ranged hit that deals Damage adds 2 percentage points of Peril, up to 75%. It stops adding Peril at 75% and does not lower Peril that is already above that threshold.

- **Peril example**: Three successive triggers at 70% Peril give 70% → 72% → 74% → 75%. An initial 90% remains at 90%.

Mechanisms reuse the fixed-version evidence, with local Build 25606770 English text corresponding to 1.13.1. Actual presentation and behavior remain unobserved in game. Missing details are supplementary explanations.

<a id="original-english-template-and-reconstruction"></a>

## Original English template and reconstruction

Steam Build `25606770`; `content/localization/ui`, resource hash `63564edcb7c3c5ee`; language `en` (code `0`).

- Name key `loc_talent_psyker_weapon_attacks_peril_equilibrium`, hash `63ed565b`, entry 6501: **Peril Equilibrium**.
- Description key `loc_talent_psyker_weapon_attacks_peril_equilibrium_desc`, hash `dc54df8c`, entry 14284.

Full raw template:

~~~text
While below {threshold:%s} Peril, non-warp hits Generate {amount:%s} Peril.
~~~

| Placeholder | Value | Formatting |
|---|---|---|
| `threshold` | 0.75 | Percentage ×100: 75%. |
| `amount` | 0.02 | Percentage ×100: 2%. |

Display mapping: [psyker_talents.lua L2633-L2642](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/psyker_talents.lua#L2633-L2642). Values reuse the accepted Chinese evidence.

Static reconstruction; not an observed game screen:

~~~text
While below 75% Peril, non-warp hits Generate 2% Peril.
~~~

## English comparison

The English matches the below-75% condition and 2-percentage-point generation. The damaging-hit checks, clamping, queued processing and bypass of generation modifiers are supplementary details.

## Icon source

[Original image](https://gameslantern.com/storage/sites/darktide/exporter/talents/psyker/default/psyker_weapon_attacks_peril_equilibrium.webp) | [Media-Assets Issue](https://github.com/SyuanTsai/Media-Assets/issues/7#issuecomment-5928034845) | [Existing attachment](https://github.com/user-attachments/assets/c84a6cc0-5f99-4eee-a394-9b234a1fa5dd). The icon identifies the talent; it is not mechanism evidence.
