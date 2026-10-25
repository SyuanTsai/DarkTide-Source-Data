# Unfaltering: source evidence

[繁體中文](../zealot_uninterruptible_no_slow_heavies.md) | [Player description](README.md#zealot_uninterruptible_no_slow_heavies) | [Technical index](SOURCE_INDEX.md) | [English comparison](LOCALIZATION_COMPARISON.md#zealot_uninterruptible_no_slow_heavies)

Release 1.13.1; fixed SHA `7e662fcda16219d775b84af50322be2e9cd9d62e`. Talent `zealot_uninterruptible_no_slow_heavies`; name key `loc_talent_zealot_uninterruptible_no_slow_heavies`; description key `loc_talent_zealot_uninterruptible_no_slow_heavies_desc`. Node `node_4afa8c9e-b961-4078-8231-963c3c9cbeab`; category Skill; one point. Mechanisms and examples reuse verified source evidence; no in-game test was performed.

## Source-confirmed behavior and static derivation

- `conditional_stat_buffs_func` passes only while the current `action.kind == windup`; `conditional_keywords` use the same condition.
- It grants `uninterruptible`, `stun_immune` and `weapon_action_movespeed_reduction_multiplier = 0`.
- The action movement formula first takes `1 − movement_mod`, then multiplies by `reduction_multiplier`, so this removes only the slowdown caused by that action.

## Fixed source evidence

- [scripts/settings/buff/archetype_buff_templates/zealot_buff_templates.lua — L2046-L2070](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/zealot_buff_templates.lua#L2046-L2070)
- [scripts/extension_systems/buff/buffs/buff.lua — L137-L141](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/buff/buffs/buff.lua#L137-L141)
- [scripts/extension_systems/weapon/weapon_action_movement.lua — L114-L119](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/weapon/weapon_action_movement.lua#L114-L119)
- [scripts/utilities/attack/stun.lua — L11-L38](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/attack/stun.lua#L11-L38)
- [scripts/settings/ability/archetype_talents/talents/zealot_talents.lua — L1942-L1958](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/zealot_talents.lua#L1942-L1958)
- [scripts/ui/views/talent_builder_view/layouts/zealot_tree.lua — L1477-L1499](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/ui/views/talent_builder_view/layouts/zealot_tree.lua#L1477-L1499)

## Example assumptions and limits

- **Operation**: During Heavy Attack windup, prevents ordinary hit stun and action interruption and removes that windup action's own movement slowdown. Once the attack swings, the windup condition no longer holds.
- **Speed example**: Base Movement Speed 5 metres/second with a windup that normally multiplies it by 0.5 gives 2.5 metres/second. Removing that action's slowdown allows 5 metres/second. Other sources of speed modifiers are still calculated separately.
- **Control exceptions**: This is not immunity to every knockback, net or pounce, and cannot stop attacks that explicitly ignore immunity.

- The accepted Chinese comparison at hash `9e2ba609` finds no explicit effect-direction contradiction. Omitted formulas, caps and finer restrictions remain supplements.
- Actual game behavior and presentation remain unobserved.

Mechanisms reuse the fixed-version evidence, with local Build 25606770 English text corresponding to 1.13.1. Actual presentation and behavior remain unobserved in game. Missing details are supplementary explanations.

<a id="original-english-template-and-reconstruction"></a>

## Original English template and reconstruction

Steam Build `25606770`; `content/localization/ui`, resource hash `63564edcb7c3c5ee`; language `en` (code `0`).

- Name key `loc_talent_zealot_uninterruptible_no_slow_heavies`, hash `87775a98`, entry 8795: **Unfaltering**.
- Description key `loc_talent_zealot_uninterruptible_no_slow_heavies_desc`, hash `9e2ba609`, entry 10207.

Full raw template:

~~~text
Become Uninterruptible while charging Melee Attacks. Remove {reduction:%s} of Heavy Melee Attack Movement Speed penalties.
~~~

| Placeholder | Value | Formatting |
|---|---|---|
| `reduction` | 1 − 0 = 1 → +100% | `percentage`, prefix `+`; `1 - talent_settings.zealot_uninterruptible_no_slow_heavies.multiplier` |

The minimal display mapping at `zealot_talents.lua` L1942-L1958 supplies the accepted removal proportion.

Static reconstruction; not an observed game screen:

~~~text
Become Uninterruptible while charging Melee Attacks. Remove +100% of Heavy Melee Attack Movement Speed penalties.
~~~

## English comparison

The English states Uninterruptible while charging and removal of 100% of Heavy Melee Attack movement penalties, matching the windup condition and zero slowdown multiplier. It does not explicitly promise protection after the swing begins or removal of every external speed modifier. The action.kind test, formula, stun protection and control/bypass exceptions supplement the wording.

## Icon source

[Original image](https://gameslantern.com/storage/sites/darktide/exporter/talents/zealot/default/zealot_uninterruptible_no_slow_heavies.webp) | [Media-Assets Issue](https://github.com/SyuanTsai/Media-Assets/issues/8#issuecomment-5929296872) | [Existing attachment](https://github.com/user-attachments/assets/7af1f56a-9932-428e-91c5-47b14836d6cb). The icon identifies the talent; it is not mechanism evidence.
