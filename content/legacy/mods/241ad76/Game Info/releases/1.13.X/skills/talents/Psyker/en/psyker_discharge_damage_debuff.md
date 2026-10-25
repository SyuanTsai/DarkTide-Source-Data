# Warp Rupture: source evidence

[繁體中文](../psyker_discharge_damage_debuff.md) | [Player description](README.md#psyker_discharge_damage_debuff) | [Technical index](SOURCE_INDEX.md) | [English comparison](LOCALIZATION_COMPARISON.md#psyker_discharge_damage_debuff)

Release 1.13.1; fixed SHA `7e662fcda16219d775b84af50322be2e9cd9d62e`. Talent `psyker_discharge_damage_debuff`; name key `loc_talent_psyker_shout_damage_per_warp_charge`; description key `loc_talent_psyker_discharge_damage_debuff_description`. Node `node_685300ac-9564-437d-9611-de94d66ec880`; category Ability; one point. Mechanisms and examples reuse verified source evidence; no in-game test was performed.

## Source-confirmed behavior and static derivation

- On a target hit, the shout special rule applies `psyker_discharge_damage_debuff` to the target. The template has `max_stacks=1`, lasts 8 seconds and supplies `stat_buffs.damage=-0.1` and `damage_taken_multiplier=1.1`.
- Talent text presents these as 10% less Damage Dealt and 10% more Damage Taken by the target. They affect separate offensive and defensive fields of that target; describing only increased Damage Taken would omit the other effect.

## Fixed source evidence

- [scripts/settings/ability/archetype_talents/talents/psyker_talents.lua — L376-L409](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/psyker_talents.lua#L376-L409)
- [scripts/settings/talent/talent_settings_psyker.lua — L128-L132](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/talent/talent_settings_psyker.lua#L128-L132)
- [scripts/settings/buff/archetype_buff_templates/psyker_buff_templates.lua — L446-L455](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/psyker_buff_templates.lua#L446-L455)
- [scripts/extension_systems/ability/actions/action_psyker_shout.lua — L108-L111](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/ability/actions/action_psyker_shout.lua#L108-L111)
- [scripts/extension_systems/ability/actions/action_psyker_shout.lua — L179-L185](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/ability/actions/action_psyker_shout.lua#L179-L185)
- [scripts/settings/ability/archetype_talents/talents/psyker_talents.lua — L376-L409](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/psyker_talents.lua#L376-L409)
- [scripts/ui/views/talent_builder_view/layouts/psyker_tree.lua — L542-L565](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/ui/views/talent_builder_view/layouts/psyker_tree.lua#L542-L565)

## Example assumptions and limits

- **Ability modifier**: Enemies hit by Venting Shriek deal 10% less damage and take 10% more damage for 8 seconds.

- **Damage example**: With no other bonuses, an Enemy originally dealing 100 damage now deals `100 × 0.9 = 90`; originally taking 100 damage, it now takes `100 × 1.1 = 110`.

- Ignore other damage bonuses/reductions and use an original 100 Damage Dealt and 100 Damage Taken to illustrate the two modifiers. The target's example damage to the player becomes 90; the player's example damage to that target becomes 110, for 8 seconds.
- These examples isolate the two modifiers. Actual combat results also depend on target armour, damage type and other stat fields.
- The source shows a one-stack buff cap. Exact timing boundaries when reapplying, refreshing or replacing the effect were not tested in game. Mechanisms reuse the fixed-version evidence, with local Build 25606770 English text corresponding to 1.13.1. Actual presentation and behavior remain unobserved in game. Missing details are supplementary explanations.

<a id="original-english-template-and-reconstruction"></a>

## Original English template and reconstruction

Steam Build `25606770`; `content/localization/ui`, resource hash `63564edcb7c3c5ee`; language `en` (code `0`).

- Name key `loc_talent_psyker_shout_damage_per_warp_charge`, hash `dc5e455f`, entry 14287: **Warp Rupture**.
- Description key `loc_talent_psyker_discharge_damage_debuff_description`, hash `c5561004`, entry 12732.

Full raw template:

~~~text
{talent_name:%s} decreases the Damage Dealt by enemies hit by {damage_reduction:%s} and increases their Damage Taken by {damage_taken:%s} for {duration:%s}s.
~~~

| Placeholder | Value | Formatting |
|---|---|---|
| `talent_name` | `loc_talent_psyker_shout_vent_warp_charge` | Localized string → `Venting Shriek` |
| `damage_reduction` | `−0.1` | `abs(value) × 100` → `10%` |
| `damage_taken` | `1.1` | Rounded `(value − 1) × 100` → `10%` |
| `duration` | `8` | Number → `8`; the template adds `s` |

Only missing display fields in `psyker_talents.lua` L376–403 were read. `talent_name` resolves to **Venting Shriek** (`loc_talent_psyker_shout_vent_warp_charge`, hash `90f1bcf1`, entry 9370). Accepted damage −0.1 becomes 10% via `abs(value) × 100`; accepted damage-taken multiplier 1.1 becomes 10% via rounded `(value − 1) × 100`. Duration is the accepted 8 seconds. Mechanics and common formatting were reused.

Static reconstruction; not an observed game screen:

~~~text
Venting Shriek decreases the Damage Dealt by enemies hit by 10% and increases their Damage Taken by 10% for 8s.
~~~

## English comparison

Read independently, the English assigns both effects to enemies hit by Venting Shriek: less Damage Dealt and more Damage Taken, each 10%, lasting 8 seconds. It agrees with both accepted target-side stat fields and the duration. The isolated arithmetic, one-stack cap, other combat modifiers and refresh-timing limits supplement the description; no explicit English contradiction was found.

## Icon source

[Original image](https://gameslantern.com/storage/sites/darktide/exporter/talents/psyker/ability_modifier/psyker_discharge_damage_debuff.webp) | [Media-Assets Issue](https://github.com/SyuanTsai/Media-Assets/issues/7#issuecomment-5928024966) | [Existing attachment](https://github.com/user-attachments/assets/8a145b7f-771a-42b6-a809-56650cd24f7e). The icon identifies the talent; it is not mechanism evidence.
