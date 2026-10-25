# Marksman's Focus: source evidence

[繁體中文](../veteran_snipers_focus.md) | [Player description](README.md#veteran_snipers_focus) | [Technical index](SOURCE_INDEX.md) | [Original English comparison](LOCALIZATION_COMPARISON.md#veteran_snipers_focus)

## Identity and version

- Implementation: Release 1.13.1, fixed SHA `7e662fcda16219d775b84af50322be2e9cd9d62e`. [Current keystone node](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/ui/views/talent_builder_view/layouts/veteran_tree.lua#L1710-L1740); [Talent and display parameters](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/veteran_talents.lua#L2585-L2626).
- Talent: `veteran_snipers_focus`. Name key `loc_talent_veteran_snipers_focus`, hash `90f993d2`: **Marksman's Focus**.
- Description key `loc_talent_veteran_snipers_focus_duration_desc`, hash `bd7cf7c2`.
- Original English: Steam Build `25606770`, extracted 2026-10-02, resource `content/localization/ui`, resource hash `63564edcb7c3c5ee`, locale `en` (code `0`). UI JSONL SHA-256: `fb54bb69880e08b3a6e1c359bd970ed2416748bf5513d45c4b8a39c545e8c668`.

## Source-confirmed trigger and refresh

The talent installs the server-only `veteran_snipers_focus` proc, subscribed to `on_hit` with chance `1`. Its start function selects the normal stacking buff or the 15-stack variant according to `veteran_snipers_focus_increased_stacks`. The proc returns unless `hit_weakspot` is true. It adds **three stacks** only when `attack_result = died` and **`attack_type = ranged`**. This is a strict attack-type check: the proc does not accept a different type merely because its damage profile has `count_as_ranged_attack`. A nonlethal weakspot hit does not add stacks. [Talent and display parameters](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/veteran_talents.lua#L2585-L2626); [Focus proc and stacking buff](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/veteran_buff_templates.lua#L2755-L2883).

Any other eligible weakspot hit refreshes the selected stacking buff's duration **only if it already has a positive stack count**. That branch does not exclude melee, so a melee weakspot hit can refresh existing Focus, including a melee weakspot kill. It does not create Focus from zero. A non-weakspot hit neither adds nor refreshes stacks. `current_stacks` reads the internal counter, while `refresh_duration_of_stacking_buff` resets the existing buff's shared start time. [Focus proc and stacking buff](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/veteran_buff_templates.lua#L2755-L2883); [Explicit refresh and current-stack lookup](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/buff/buff_extension_base.lua#L592-L615).

The normal `on_hit` event is emitted by `_handle_buffs` with the attack result, type and weakspot field. Attacks on allied players, the excluded `grimoire` damage type, `skip_on_hit_proc` profiles and already handled events do not emit this usual event. The generic proc checks activation and chance before executing the function. No cooldown is configured here; `_can_activate` permits activation when no cooldown is defined. These are conditions for emitted events, not a claim that every weapon effect emits the same event. [Attack event fields and exclusions](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/attack/attack.lua#L550-L620); [Excluded damage type](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/attack/attack.lua#L86-L88); [Proc event processing](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/buff/buffs/proc_buff.lua#L304-L380); [Proc activation and cooldown lookup](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/buff/buffs/proc_buff.lua#L174-L194).

## Effective stacks, shared timer and decay

The normal stat buff has `duration = 5`, `max_stacks = 10`, `max_stacks_cap = 31`, and both `refresh_duration_on_stack` and `refresh_duration_on_remove_stack` enabled. Its clone changes only the effective `max_stacks` to **15**. The internal counter can reach 31; `stat_buff_stacking_count` limits applied stats to 10 or 15. Extra raw counts do not increase damage or reload speed. [Duration and effective caps](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/talent/talent_settings_veteran.lua#L35-L39); [Focus stat buff and clone](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/veteran_buff_templates.lua#L2803-L2883); [Effective stat-stack count](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/buff/buffs/buff.lua#L404-L410); [Hard-cap check](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/buff/buff_extension_base.lua#L560-L589).

`add_internally_controlled_buff_with_stacks` performs three individual add attempts. The server-side concrete method checks whether the buff can be added, then calls the common add routine. Stacks share one buff object; adding a stack refreshes its start time, including successful additions above the effective-stat cap. At the hard internal cap of 31, `_check_max_stacks_cap` rejects the new stack but first resets the existing start time because `refresh_duration_on_stack` is true, then calls the refresh hook. Thus a qualifying ranged weakspot kill still refreshes Focus at 31 without increasing its count or effect. [Three-stack loop and add conditions](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/buff/buff_extension_base.lua#L384-L433); [Server-side concrete add method](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/buff/player_unit_buff_extension.lua#L209-L260); [RPC-synced add calls the common routine](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/buff/player_unit_buff_extension.lua#L656-L678); [Shared object and stack refresh](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/buff/buff_extension_base.lua#L434-L488); [Refresh before hard-cap rejection](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/buff/buff_extension_base.lua#L560-L589).

Expiry is strict: the buff becomes finished when `t > start_time + 5`, not at equality. Removing a stack from within the effective cap resets the shared timer if stacks remain; resetting the start time also clears the finished flag. The final stack's expiry removes the buff. With exactly three internal stacks after the last refresh at `t₀`, no later weakspot hits or forced removals, the first update after `t₀ + 5 seconds` changes 3 to 2. Approximately 5 more seconds later it changes 2 to 1, and approximately another 5 seconds later it ends. These **5/10/15-second** points are static derivation with update delay, not measured frame timings. [Strict expiry test](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/buff/buffs/buff.lua#L29-L44); [Finished and last-stack removal checks](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/buff/buffs/buff.lua#L346-L369); [Stack removal and timer reset](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/buff/buff_extension_base.lua#L635-L698); [Start-time reset clears expiry](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/buff/buffs/buff.lua#L619-L639).

While the pre-removal internal count is above the effective cap, the common removal path does not refresh duration. Several index entries refer to the same stacking object; expiry iteration can clear those overflow counts in the same update before the in-cap removal resets the timer. Do not promise 31 separate five-second intervals, or additional effect above 10/15. Exact same-frame ordering and HUD display of raw versus effective counts have not been tested. [Expiry iteration](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/buff/buff_extension_base.lua#L187-L206); [Stack removal and timer reset](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/buff/buff_extension_base.lua#L635-L698); [Internal stack changes](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/buff/buffs/buff.lua#L453-L515).

## Ranged finesse component and whole-hit damage

Each effective stack adds `0.075` to `ranged_finesse_modifier_bonus`. Its type is `additive_multiplier`; the common stat calculation starts from the neutral value and adds the configured delta once per effective stack. It therefore adds **75 percentage points** to that modifier at 10 stacks, or **112.5 percentage points** at 15. This does not establish either percentage as the whole-hit increase. [Per-stack Focus stats](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/veteran_buff_templates.lua#L2803-L2883); [Ranged finesse and reload stat types](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/buff_settings.lua#L945-L962); [Stat aggregation](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/buff/buffs/buff.lua#L689-L727).

`DamageCalculation.calculate` invokes `_finesse_boost_damage` when the hit is critical or hits a weakspot. The latter builds the extra component from the attack's finesse boost, armor interaction, critical/weakspot boosts and other terms, then adds the ranged finesse modifier once for a ranged attack. A critical weakspot hit uses the combined extra component; Focus is not applied twice. An ordinary noncritical body hit gets no finesse component from this call, and the ranged-only stat is not added to melee finesse. [Damage stage and critical-or-weakspot gate](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/attack/damage_calculation.lua#L60-L110); [Shared finesse calculation](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/attack/damage_calculation.lua#L672-L783).

For a controlled comparison of the same ranged finesse hit, define:

- `B`: the same hit's armor/rending-adjusted non-finesse damage immediately before the finesse addition.
- `F`: `base_finesse_damage` before the additive finesse stat modifier; it is an extra component, not the whole hit.
- `s`: other additive deltas in that same finesse modifier stage.
- `n`: effective Focus stacks, capped at 10 for the base skill or 15 with the cap modifier.

Hold the attack, target, critical/weakspot state, armor/rending treatment and other modifiers fixed. Assume later multipliers are 1, later additions are 0 and no clamp binds. Focus contributes:

```text
Before = B + F × (1 + s)
After  = B + F × (1 + s + 0.075n)
Added damage = 0.075nF
Whole-hit relative increase = 0.075nF / [B + F × (1 + s)]
```

The relative formula requires positive before-damage. `F` must be computed for that same hit; subtracting an unrelated body-shot result from a headshot result does not isolate it. See [Precision Strikes](veteran_increased_weakspot_damage.md#percentage-and-hit-damage-derivation) for the component's other terms and limits. [Damage stage and ordering](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/attack/damage_calculation.lua#L60-L110); [Extra component and additive modifiers](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/attack/damage_calculation.lua#L672-L783).

### Controlled damage examples

These are illustrative damage units under the assumptions above, not weapon measurements. The baseline for each row is explicitly stated.

| Assumptions | Substitution and result | Player meaning |
|---|---|---|
| `B = 100`, `F = 40`, `s = 0`, from 0 to 10 stacks | Before `100 + 40 = 140`; after `100 + 40 × 1.75 = 170`; added `30`; whole-hit gain `30 / 140 ≈ 21.43%`. | A 75% increase to the isolated extra component raises this entire hit by 21.43%. |
| `B = F = 100`, `s = 0`, from 0 to 10 stacks | Before `200`; after `100 + 100 × 1.75 = 275`; added `75`; gain `75 / 200 = 37.5%`. | A larger extra component gives a larger whole-hit gain. |
| `B = F = 100`, weakspot hit, Precision Strikes already active (`s = 0.30`), from 0 to 10 stacks | Before `100 + 100 × 1.30 = 230`; after `100 + 100 × (1 + 0.30 + 0.75) = 305`; added `75`; gain `75 / 230 ≈ 32.61%`. | Both bonuses add in the same modifier. Focus alone adds 32.61% relative to the already boosted 230 baseline. |
| `B = 100`, `F = 40`, `s = 0`, from 0 to 15 stacks with the cap modifier | Before `140`; after `100 + 40 × 2.125 = 185`; added `45`; gain `45 / 140 ≈ 32.14%`. | The raised cap adds more effect under the same assumptions. |
| Same components, compare 10 to 15 stacks | Before `170`; after `185`; added `15`; gain `15 / 170 ≈ 8.82%`. | The five additional stacks are an 8.82% improvement over an already capped base-skill hit in this example. |

## Reload speed and action duration

Each effective stack adds `0.01` to `reload_speed`, also an `additive_multiplier`. At 10 stacks the isolated stat is `1.10`; at 15 it is `1.15`. `ActionHandler._calculate_time_scale` combines the selected additive speed stats, weapon-handling scale and other action factors, then clamps the scale to network bounds and any action-kind limit. `_calculate_action_total_time` divides the chosen unscaled action time by that scale. The `reload_state` gameplay limit is 2; network bounds are retrieved from runtime type information. A lasgun reload action explicitly includes `reload_speed` in its `time_scale_stat_buffs`; that confirms wiring for this action, not a universal fixed reload time for all weapons. [Per-stack Focus stats](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/veteran_buff_templates.lua#L2803-L2883); [Stat types](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/buff_settings.lua#L945-L962); [Reload time and action scale](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/action/action_handler.lua#L356-L429); [Action-kind limits](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/action/action_handler_settings.lua#L59-L69); [Network time-scale type information](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/network_lookup/network_constants.lua#L197-L200); [Example reload action](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/lasguns/lasgun_p1_m1.lua#L378-L400); [Reload stat selection](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/lasguns/lasgun_p1_m1.lua#L432-L450).

For an affected action with illustrative unscaled time `T₀`, other selected additive reload-speed deltas totalling `r`, all other scale factors 1, and no limit binding:

```text
Before time = T₀ / (1 + r)
After time  = T₀ / (1 + r + 0.01n)
Relative time saved = 1 − (1 + r) / (1 + r + 0.01n)
```

Actual reloads can have multiple stages, custom time functions, animations and chain windows. These examples model the traced affected action's duration under fixed assumptions; they do not claim every complete reload is precisely this simple.

| Assumptions | Substitution and result | Player meaning |
|---|---|---|
| `T₀ = 4 seconds`, `r = 0`, 10 stacks | Before `4s`; after `4 / 1.10 ≈ 3.64s`; saved `4 − 4 / 1.10 ≈ 0.36s`, or `9.09%`. | +10% speed is about 9.09% less time, not 10% less time. |
| `T₀ = 4 seconds`, `r = 0`, 15 stacks | After `4 / 1.15 ≈ 3.48s`; saved about `0.52s`, or `13.04%`. | +15% speed is about 13.04% less time. |
| `T₀ = 4 seconds`, existing `r = 0.20`, add 10 stacks | Before `4 / 1.20 ≈ 3.33s`; after `4 / 1.30 ≈ 3.08s`; saved about `0.26s`; relative saving `1 − 1.20 / 1.30 ≈ 7.69%`. | Existing additive speed changes the relative time benefit. |

## Adjacent modifiers and inactive definitions

These branches alter Focus only when their own special rules are active; they are not base-skill output:

- [Long Range Assassin](veteran_snipers_focus_increased_stacks.md) (`veteran_snipers_focus_increased_stacks`) selects the clone with 15 effective stacks. It preserves the five-second timer, per-stack stats and hard internal cap 31. [Related talent definition](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/veteran_talents.lua#L2697-L2716); [Variant selection and stat clone](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/veteran_buff_templates.lua#L2755-L2883).
- [Chink in their Armour](veteran_snipers_focus_rending_bonus.md) (`veteran_snipers_focus_rending_bonus`) adds the separate `veteran_snipers_focus_rending_buff` on crossing upward to at least **10 raw stacks**, and removes it on falling below 10 or when Focus stops. Its stat is `rending_multiplier = 0.15`. The threshold remains 10 even with a 15-stack effective cap; this is not 15% universal whole-hit damage. [Threshold handler](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/veteran_buff_templates.lua#L2707-L2753); [Update and stop branches](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/veteran_buff_templates.lua#L2836-L2881); [Separate rending buff](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/veteran_buff_templates.lua#L2903-L2910).
- [Tunnel Vision](veteran_snipers_focus_toughness_bonus.md) (`veteran_snipers_focus_toughness_bonus`) conditionally adds `toughness_replenish_modifier = 0.04` per effective stack and restores **10% of maximum Stamina** on each qualifying ranged weakspot kill. The modifier changes applicable Toughness replenishment; it is not immediate Toughness recovery per layer. Stamina restoration is clamped to its maximum. [Optional stamina proc](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/veteran_buff_templates.lua#L2755-L2802); [Conditional replenishment stat](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/veteran_buff_templates.lua#L2803-L2835); [Stamina.add_stamina_percent](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/attack/stamina.lua#L102-L118).

The threshold helper also checks `template_data.threat_bonus`, but this active Focus setup does not assign that flag. The existence of the separate threat buff does not establish baseline threat reduction. [Threshold helper](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/veteran_buff_templates.lua#L2707-L2753); [Active Focus setup](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/veteran_buff_templates.lua#L2755-L2883); [Separate threat buff](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/veteran_buff_templates.lua#L2895-L2902).

The definition `veteran_snipers_focus_stacks_on_still` and its special-rule identifier remain in the source. A fixed-SHA search found no current talent-tree node or implementation branch consuming that rule. The active core buff has no movement, crouching or landing branch that adds or removes stacks, and no stationary accumulator. Its old `grace_time = 6` and `grace_time_hit = 3` display parameters are absent from the current raw template. These remnants are not evidence of present six-/three-second behavior or a contradiction in the current English text. [Unused stillness definition](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/veteran_talents.lua#L2677-L2696); [Current core and adjacent definitions](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/veteran_talents.lua#L2585-L2716); [Active Focus implementation](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/veteran_buff_templates.lua#L2704-L2910); [Current core node](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/ui/views/talent_builder_view/layouts/veteran_tree.lua#L1710-L1740).

## Original English template and reconstruction

Full raw description, hash `bd7cf7c2`:

```text
Ranged Weakspot kills grant {stacks:%s} stack(s) of Focus. Up to {max_stacks:%s} Max Stacks. Lasts {duration:%s}s. Stacks are refreshed on Weakspot Hit and decay one at a time.

Each stack of Focus grants {power:%s} Ranged Finesse Strength, and {reload_speed:%s} Reload Speed.
```

| Parameter | Definition and formatting | Reconstructed value |
|---|---|---|
| `stacks` | Number, configured value `3` | `3` |
| `max_stacks` | Number, base setting `10` | `10` |
| `duration` | Number, setting `5`; literal `s` belongs to the template | `5` |
| `power` | Percentage, value `0.075`, multiply by 100, prefix `+` | `+7.5%` |
| `reload_speed` | Percentage, value `0.01`, multiply by 100, prefix `+` | `+1%` |
| `grace_time` | Number `6`; unused by the current template | Not substituted |
| `grace_time_hit` | Number `3`; unused by the current template | Not substituted |
| 15-stack variant | `max_stacks` above is the base display parameter; the optional rule selects a different stat buff | Do not silently replace the base template's `10` with `15` |

The percentage formatter retains the decimal in `7.5%`. Values are localized through the configured template and string parameters; this is static plain-text substitution, with runtime color markup excluded. [Talent display parameters](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/veteran_talents.lua#L2585-L2626); [Duration and effective caps](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/talent/talent_settings_veteran.lua#L35-L39); [Percentage and number formatters](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/ui/views/talent_builder_view/utilities/talent_layout_parser.lua#L379-L426); [Parameter formatting and prefix](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/ui/views/talent_builder_view/utilities/talent_layout_parser.lua#L613-L651); [Description localization](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/ui/views/talent_builder_view/utilities/talent_layout_parser.lua#L690-L713); [Localization interpolation](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/managers/localization/localization_manager.lua#L285-L320).

Static reconstruction, preserving the original spelling, capitalization, punctuation and paragraph break:

```text
Ranged Weakspot kills grant 3 stack(s) of Focus. Up to 10 Max Stacks. Lasts 5s. Stacks are refreshed on Weakspot Hit and decay one at a time.

Each stack of Focus grants +7.5% Ranged Finesse Strength, and +1% Reload Speed.
```

The original English is consistent with the core trigger, base cap, timer, refresh, decay and per-stack stats. Its omissions about component damage, speed-to-time conversion, internal overflow and optional branches are not explicit contradictions. No English player-page erratum is supported.

## Limits

This dossier combines direct fixed-source reading and controlled static arithmetic. It does not establish observed in-game timing, final game UI formatting, raw-counter HUD display or qualifying event emission for every special weapon. Adjacent modifiers are included to explain core branching; their full independent descriptions and comparisons require separate dossiers.

## Icon source

[Original image](https://gameslantern.com/storage/sites/darktide/exporter/talents/veteran/keystone/veteran_snipers_focus.webp) | [Media-Assets Issue](https://github.com/SyuanTsai/Media-Assets/issues/6#issuecomment-5922929234) | [Issue attachment](https://github.com/user-attachments/assets/4376889f-d2eb-4efe-836a-5e0ce5ae27f4)

The icon identifies the talent; it is not mechanism evidence.
