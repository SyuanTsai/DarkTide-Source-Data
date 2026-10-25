# Duellist: source evidence

[繁體中文](../zealot_increased_crit_and_weakspot_damage_after_dodge.md) | [Player description](README.md#zealot_increased_crit_and_weakspot_damage_after_dodge) | [Technical index](SOURCE_INDEX.md) | [English comparison](LOCALIZATION_COMPARISON.md#zealot_increased_crit_and_weakspot_damage_after_dodge)

Release 1.13.1; fixed SHA `7e662fcda16219d775b84af50322be2e9cd9d62e`. Talent `zealot_increased_crit_and_weakspot_damage_after_dodge`; name key `loc_talent_zealot_increased_finesse_post_dodge`; description key `loc_talent_zealot_duelist_new_desc`. Node `node_664d1608-49a2-47bc-8aa6-b2c9b655e865`; category Skill; one point. Mechanisms and examples reuse verified source evidence; no in-game test was performed.

## Source-confirmed behavior and static derivation

- The `proc_buff` has `active_duration = 3`. After `on_successful_dodge`, it applies `finesse_modifier_bonus = 0.5`. No cooldown is set, so shared `_can_activate` returns true and can reset `active_start_time`.
- `_finesse_boost_damage` first forms `base_finesse_damage`, then adds `finesse_modifier_bonus` to applicable same-stage Weakspot/Critical bonuses before multiplying the extra portion F: `B + F × (1 + s + 0.5)`.
- A hit that is both Weakspot and Critical first combines the curves; do not count the extra 0.5 twice.

## Fixed source evidence

- [scripts/settings/buff/archetype_buff_templates/zealot_buff_templates.lua — L4357-L4377](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/zealot_buff_templates.lua#L4357-L4377)
- [scripts/utilities/attack/damage_calculation.lua — L672-L782](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/attack/damage_calculation.lua#L672-L782)
- [scripts/extension_systems/buff/buffs/proc_buff.lua — L173-L184](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/buff/buffs/proc_buff.lua#L173-L184)
- [scripts/settings/ability/archetype_talents/talents/zealot_talents.lua — L1305-L1338](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/zealot_talents.lua#L1305-L1338)
- [scripts/ui/views/talent_builder_view/layouts/zealot_tree.lua — L486-L513](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/ui/views/talent_builder_view/layouts/zealot_tree.lua#L486-L513)

## Example assumptions and limits

- **Operation**: Successfully dodging an attack increases Finesse Damage by 50% for 3 seconds; another successful Dodge restarts the timer. This strengthens only extra Weakspot/Critical damage, so the increase for the entire hit depends on the weapon and target.
- **Weakspot example**: With no crit or other bonuses, base portion 100 and extra Weakspot portion 50, the original 150 becomes 100 + 50 × 1.5 = 175, an increase of about 16.67%. If the extra portion is 100, 200 becomes 250, a 25% increase.
- **Existing bonus**: With base and extra portions both 100 and an existing 25% same-stage bonus, 100 + 100 × 1.25 = 225 becomes 100 + 100 × (1 + 25% + 50%) = 275, an actual increase of about 22.22%.

- Examples use the same hit location and armour as their basis; body-hit damage is not substituted for B. No particular weapon was tested in game.
- The accepted Chinese comparison at hash `b41ec4a9` finds no explicit effect-direction contradiction; omitted formulas, caps and finer restrictions remain supplements.

Mechanisms reuse the fixed-version evidence, with local Build 25606770 English text corresponding to 1.13.1. Actual presentation and behavior remain unobserved in game. Missing details are supplementary explanations.

<a id="original-english-template-and-reconstruction"></a>

## Original English template and reconstruction

Steam Build `25606770`; `content/localization/ui`, resource hash `63564edcb7c3c5ee`; language `en` (code `0`).

- Name key `loc_talent_zealot_increased_finesse_post_dodge`, hash `ea05e792`, entry 15196: **Duellist**.
- Description key `loc_talent_zealot_duelist_new_desc`, hash `b41ec4a9`, entry 11613.

Full raw template:

~~~text
{damage:%s} Finesse Damage for {duration:%s}s on successful Dodge.
~~~

| Placeholder | Value | Formatting |
|---|---|---|
| `damage` | 0.5 → +50% | `percentage`, prefix `+`; `zealot_critstrike_damage_on_dodge.proc_stat_buffs.finesse_modifier_bonus` |
| `duration` | 3 → 3 | `value`; `zealot_critstrike_damage_on_dodge.active_duration` |

The minimal display mapping at `zealot_talents.lua` L1305-L1338 supplies the accepted bonus and duration.

Static reconstruction; not an observed game screen:

~~~text
+50% Finesse Damage for 3s on successful Dodge.
~~~

## English comparison

The English states Finesse Damage, +50%, 3 seconds and a successful Dodge, matching the accepted effect. It does not promise 50% more total damage per hit. The extra-damage formula, same-stage addition, timer refresh and single application to combined Weakspot/Critical damage supplement the wording.

## Icon source

[Original image](https://gameslantern.com/storage/sites/darktide/exporter/talents/zealot/default/zealot_increased_crit_and_weakspot_damage_after_dodge.webp) | [Media-Assets Issue](https://github.com/SyuanTsai/Media-Assets/issues/8#issuecomment-5929296872) | [Existing attachment](https://github.com/user-attachments/assets/dcdcc79a-ad1b-4fb3-9ac1-a6fcc1a71a56). The icon identifies the talent; it is not mechanism evidence.
