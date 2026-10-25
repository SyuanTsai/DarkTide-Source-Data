# Reality Anchor: source evidence

[繁體中文](../psyker_overcharge_reduced_warp_charge.md) | [Player description](README.md#psyker_overcharge_reduced_warp_charge) | [Technical index](SOURCE_INDEX.md) | [English comparison](LOCALIZATION_COMPARISON.md#psyker_overcharge_reduced_warp_charge)

Release 1.13.1; fixed SHA `7e662fcda16219d775b84af50322be2e9cd9d62e`. Talent `psyker_overcharge_reduced_warp_charge`; name key `loc_ability_psyker_overcharge_reduced_warp_charge`; description key `loc_ability_psyker_overcharge_reduced_warp_charge_vent_speed_description`. Node `node_79ffb5f6-b82f-47c0-8eeb-5e28dcb2766a`; category Ability; one point. Mechanisms and examples reuse verified source evidence; no in-game test was performed.

## Source-confirmed behavior and static derivation

- While the `psyker_overcharge` keyword is active, the passive template enables two fields: `warp_charge_amount=0.8`, multiplying Peril Generation by 0.8; and `vent_warp_charge_speed=0.7`.
- `WarpCharge.start_venting` and `update_venting` multiply `vent_interval` and `vent_duration` by 0.7, shortening the corresponding time values by 30%.
- For a fixed amount of Peril removed, ignoring Quell increments, cancellation and other modifiers, a time factor of 0.7 is equivalent to a rate per second of `1 / 0.7 ≈ 1.429` times the original, about 42.9% faster. The game's +30% label expresses the time-coefficient reduction; it cannot directly be read as a 30% increase in rate per second.

## Fixed source evidence

- [scripts/settings/ability/archetype_talents/talents/psyker_talents.lua — L489-L520](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/psyker_talents.lua#L489-L520)
- [scripts/settings/buff/archetype_buff_templates/psyker_buff_templates.lua — L1200-L1217](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/psyker_buff_templates.lua#L1200-L1217)
- [scripts/utilities/warp_charge.lua — L251-L275](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/warp_charge.lua#L251-L275)
- [scripts/utilities/warp_charge.lua — L277-L315](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/warp_charge.lua#L277-L315)
- [scripts/settings/talent/talent_settings_psyker.lua — L331-L332](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/talent/talent_settings_psyker.lua#L331-L332)
- [scripts/settings/ability/archetype_talents/talents/psyker_talents.lua — L489-L520](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/psyker_talents.lua#L489-L520)
- [scripts/ui/views/talent_builder_view/layouts/psyker_tree.lua — L801-L826](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/ui/views/talent_builder_view/layouts/psyker_tree.lua#L801-L826)

## Example assumptions and limits

- **Ability modifier**: While Scrier's Gaze is active, generate 20% less Peril and take 30% less time to Quell the same amount of Peril.

- **Generation example**: An original gain of 10 Peril percentage points becomes `10 × 0.8 = 8` points. Existing accumulated Peril is not directly removed.

- **Quell example**: An original 10-second Quell process becomes `10 × 0.7 = 7` seconds. Expressed as a rate per second, this is `1 ÷ 0.7 ≈ 1.429` times the original rate, about 42.9% faster.

#### Chinese wording erratum

- The Chinese phrase “reduces already generated Peril” describes removing existing Peril. The corresponding English and accepted implementation refer to generating less new Peril while Gaze is active.

#### Additional example conditions and limits

- With Gaze active, a Quell process originally taking 10 seconds, no other modifiers and discrete ticks/cancellation ignored: `10 seconds × 0.7 = 7 seconds`; for the same Peril removal, average rate factor `10 / 7 ≈ 1.429`. Time falls by about 3 seconds; equivalent rate rises by about 42.9%.
- With Gaze active and no other modifiers, a warp attack originally generating 10 Peril percentage points generates `10 × 0.8 = 8` points, 2 points less, or 20% below the original amount.
- Quell-time examples ignore discrete Peril-reduction increments, interrupted actions, weapon-specific modifiers and other speed effects; actual combat timings vary.
- Both conditional effects apply only during the active Scrier's Gaze keyword state; they do not apply during the separate 10-second lingering damage buff. Mechanisms reuse the fixed-version evidence, with local Build 25606770 English text corresponding to 1.13.1. Actual presentation and behavior remain unobserved in game. Missing details are supplementary explanations.

<a id="original-english-template-and-reconstruction"></a>

## Original English template and reconstruction

Steam Build `25606770`; `content/localization/ui`, resource hash `63564edcb7c3c5ee`; language `en` (code `0`).

- Name key `loc_ability_psyker_overcharge_reduced_warp_charge`, hash `ed1671b1`, entry 15407: **Reality Anchor**.
- Description key `loc_ability_psyker_overcharge_reduced_warp_charge_vent_speed_description`, hash `93f0b5f7`, entry 9575.

Full raw template:

~~~text
{talent_name:%s} now also reduces your Peril Generated by {warp_charge:%s} and increases Quellling by {venting:%s} while active.
~~~

| Placeholder | Value | Formatting |
|---|---|---|
| `talent_name` | `loc_talent_psyker_combat_ability_overcharge_stance` | Localized string → `Scrier's Gaze` |
| `warp_charge` | `0.8` | Rounded `(1 − value) × 100`, `−` prefix → `-20%` |
| `venting` | `0.7` | `(1 − value) × 100`, `+` prefix → `+30%` |

Only missing display fields in `psyker_talents.lua` L489–515 were read. `talent_name` resolves to **Scrier's Gaze** (`loc_talent_psyker_combat_ability_overcharge_stance`, hash `b664d880`, entry 11771). Accepted generation multiplier 0.8 is converted by rounded `(1 − value) × 100` with a `−` prefix, giving `-20%`; accepted Quell-time coefficient 0.7 is converted by `(1 − value) × 100` with a `+` prefix, giving `+30%`. The original spelling `Quellling` is preserved. Mechanics and common formatting were reused.

Static reconstruction; not an observed game screen:

~~~text
Scrier's Gaze now also reduces your Peril Generated by -20% and increases Quellling by +30% while active.
~~~

## English comparison

Read independently, `Peril Generated` refers to the amount newly generated during active Gaze; it does not describe removing accumulated Peril. The displayed -20% reduction label agrees with the accepted 0.8 generation multiplier. `increases Quellling by +30%` does not identify a rate-per-second basis. Its mapped value represents 30% shorter Quell time via the 0.7 interval/duration coefficient; the existing fixed-amount example gives about 42.9% greater rate per second. This time/rate distinction supplements the broad English label rather than establishing a contradiction with an explicitly stated rate. The Chinese-only existing-Peril wording erratum is retained separately.

## Icon source

[Original image](https://gameslantern.com/storage/sites/darktide/exporter/talents/psyker/ability_modifier/psyker_overcharge_reduced_warp_charge.webp) | [Media-Assets Issue](https://github.com/SyuanTsai/Media-Assets/issues/7#issuecomment-5928024966) | [Existing attachment](https://github.com/user-attachments/assets/123c7e4e-3844-4ff0-94c0-5cf7f7772b8f). The icon identifies the talent; it is not mechanism evidence.
