# Servo-Skull: source evidence

[繁體中文](../cryptic_servo_skull_order.md) | [Base effect](BASE_EFFECTS.md#cryptic_servo_skull_order) | [Technical index](SOURCE_INDEX.md) | [English comparison](LOCALIZATION_COMPARISON.md#cryptic_servo_skull_order)

Release 1.13.1; fixed SHA `7e662fcda16219d775b84af50322be2e9cd9d62e`. Talent `cryptic_servo_skull_order`; name key `loc_talent_cryptic_servo_skull`; description key `loc_talent_cryptic_servo_skull_base_burn_desc`. Base effect; no selectable talent point cost. Mechanisms and examples reuse verified source evidence; no in-game test was performed.

## Source-confirmed behavior and static derivation

- `cryptic_servo_skull_order` equips `PlayerAbilities.cryptic_servo_skull_order_base` in the Blitz slot. It provides **1 use**, a **16-second** cooldown and recovery of **1 cooldown-resource second per second**. `pause_fulfilled_func` returns `false` while the companion has `cryptic_servo_skull_temporary_buff`, pausing cooldown recovery during empowerment.
- The talent's `cryptic_servo_skull_hack` special rule makes `SpawnCompanionsFromTalent` spawn the Servo-Skull with `can_shoot = true`. Activating the ability spends **1 use** and grants `cryptic_servo_skull_temporary_buff` for **8 seconds**. Its `minion_shoot_cooldown_modifier = 0.5` halves the firing interval, doubling the rate; `damage_modifier = 0.25` adds **25% Damage**.
- Starting this temporary effect installs the holder's independent `cryptic_servo_skull_order` `server_only_proc_buff`. It accepts `on_hit` only when `attack_instigator_unit` is the hacking Servo-Skull and the target remains alive. Hits apply `cryptic_servo_skull_debuff` with `damage_taken_modifier = 0.15` for **5 seconds**, plus **1 stack** of `flamer_assault`. At **8 Burn stacks**, another hit only refreshes the Burn duration.
- `cryptic_double_tag_templates` supplies control. An interactable data-interrogation target that passes the hacking checks enters the hacking state, with ability-use cost **0**. An enemy shooting command requires at least **30% of one Combat Ability charge**; the training area bypasses this threshold.
- Selecting `cryptic_servo_skull_improved` changes the ability to the inactive version. A copied companion empowerment effect has its duration and start/stop functions removed and is applied permanently, while the `cryptic_servo_skull_order` proc buff becomes passive. The base ability's manual eight-second empowerment therefore does not describe that improved node.

## Fixed source evidence

- [Fixed-version source](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/cryptic_talents.lua#L569-L628)
- [Fixed-version source](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/talent/talent_settings_cryptic.lua#L50-L64)
- [Fixed-version source](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/player_abilities/abilities/cryptic_abilities.lua#L34-L68)
- [Fixed-version source](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/ability_templates/cryptic_servo_skull_order_base.lua#L6-L39)
- [Fixed-version source](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/spawn_companions_from_talent.lua#L10-L41)
- [Fixed-version source](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/companion/companion_servo_skull_settings.lua#L15-L28)
- [Fixed-version source](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/cryptic_buff_templates.lua#L1063-L1209)
- [Fixed-version source](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/smart_tag/double_tag/cryptic_double_tag_templates.lua#L12-L139)
- [Fixed-version source](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/companion/companion_servo_skull_ability.lua#L423-L571)
- [Fixed-version source](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/breed/breed_actions/companion/companion_servo_skull_actions.lua#L19-L58)

## Example assumptions and limits

- **Companion**: Your Servo-Skull follows you and shoots enemies in combat. Activating its ability halves its firing interval and increases its damage by **25%** for **8 seconds**.
- **Empowered hits**: During empowerment, a Servo-Skull hit makes the target take **15% more damage** for **5 seconds** and applies **1 Burn stack**, up to **8**. At the cap, another hit refreshes the Burn duration.
- **Uses and cooldown**: The ability has **1 use** and a **16-second** cooldown. Cooldown recovery pauses during the **8-second** empowerment; without other cooldown modifiers, approximately **16 seconds** of recovery remain after empowerment ends.
- **Commands**: Double-tap the Tag input to order the Servo-Skull to attack a tagged enemy. Normally, at least **0.3 of one Capacitance charge** is required for a shooting command. Double-tapping can also order it to operate a hackable mission device; this does not spend the ability use.
- **Cooldown example**: An **8-second** pause followed by **16 seconds** of recovery gives approximately `8 + 16 = 24` seconds from activation to availability.
- **Damage and firing-rate example**: With no other effects, damage **100** becomes `100 × 1.25 = 125`; a **3-second** firing interval becomes `3 × 0.5 = 1.5` seconds.

- The timing and firing-rate examples are static derivations, not in-game measurements. Other cooldown modifiers can change the total wait. Actual shot damage depends on the companion attack and target; the example compares only the talent multiplier.
- The shooting-command threshold checks **Combat Ability Capacitance**. With [Noospheric Command](cryptic_servo_skull_improved_tagging.md), its extra firing-rate boost also spends that charge resource; see that talent for details.
- The improved node makes the damage, firing-rate and on-hit effects permanent. The base talent's timed ability rules do not apply to it.

Mechanisms reuse the fixed-version evidence, with local Build 25606770 English text corresponding to 1.13.1. Actual presentation and behavior remain unobserved in game. Missing details are supplementary explanations.

<a id="original-english-template-and-reconstruction"></a>

## Original English template and reconstruction

Steam Build `25606770`; `content/localization/ui`, resource hash `63564edcb7c3c5ee`; language `en` (code `0`).

- Name key `loc_talent_cryptic_servo_skull`, hash `a5b45cea`, entry 10673: **Servo-Skull**.
- Description key `loc_talent_cryptic_servo_skull_base_burn_desc`, hash `a5b8ce99`, entry 10674.

Full raw template:

~~~text
You are accompanied by a Servo-Skull that you can order by double-tapping your Tag input. You can order it to Shoot at nearby Enemies. You can also order it to complete a data interrogation.

Activating the Blitz empowers it for {duration:%s}s. Your Servo-Skull gains {attack_speed:%s} Fire Rate, {damage:%s} Damage, its attacks apply {burn_stacks:%s} stack(s) of Burn (Max {max_stacks:%s} stacks), and causes the target to take {damage_taken:%s} Damage for {debuff_duration:%s}s. {cooldown:%s}s Cooldown.
~~~

| Placeholder | Value | Formatting |
|---|---|---|
| `{duration:%s}` | `8` | Number; template adds `s` |
| `{attack_speed:%s}` | `0.5` → `+100%` | `math_round((1 / value − 1) × 100)`; percentage; `+` prefix |
| `{damage:%s}` | `0.25` → `+25%` | Percentage; `+` prefix |
| `{burn_stacks:%s}` / `{max_stacks:%s}` | `1` / `8` | Number |
| `{damage_taken:%s}` | `0.15` → `+15%` | Percentage; `+` prefix |
| `{debuff_duration:%s}` / `{cooldown:%s}` | `5` / `16` | Number; template adds `s` |

The existing display mapping in `scripts/settings/ability/archetype_talents/talents/cryptic_talents.lua` (L575-L614) uses the verified `servo_skull_shooting_base` fields. Fire Rate converts the `0.5` interval multiplier to `+100%`; the reused formatter directly adds `%` to the manipulated result. The name key is supplied at L571.

Static reconstruction; not an observed game screen:

~~~text
You are accompanied by a Servo-Skull that you can order by double-tapping your Tag input. You can order it to Shoot at nearby Enemies. You can also order it to complete a data interrogation.

Activating the Blitz empowers it for 8s. Your Servo-Skull gains +100% Fire Rate, +25% Damage, its attacks apply 1 stack(s) of Burn (Max 8 stacks), and causes the target to take +15% Damage for 5s. 16s Cooldown.
~~~

## English comparison

The English matches the companion commands, eight-second empowerment, doubled Fire Rate, 25% Damage, one Burn stack with an eight-stack cap, 15% increased damage taken for five seconds, and 16-second cooldown resource. The cooldown pauses during empowerment, so the unmodified activation-to-availability interval is approximately 24 seconds; this is a supplement, not a contradiction of the stated cooldown. Command-resource checks, living-target checks, Burn refresh and the improved node's different rules also supplement the wording.
