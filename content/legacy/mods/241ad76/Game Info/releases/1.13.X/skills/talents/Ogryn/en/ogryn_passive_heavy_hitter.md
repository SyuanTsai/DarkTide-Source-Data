# Heavy Hitter: source evidence

[繁體中文](../ogryn_passive_heavy_hitter.md) | [Player description](README.md#ogryn_passive_heavy_hitter) | [Technical index](SOURCE_INDEX.md) | [English comparison](LOCALIZATION_COMPARISON.md#ogryn_passive_heavy_hitter)

Release 1.13.1; fixed SHA `7e662fcda16219d775b84af50322be2e9cd9d62e`. Talent `ogryn_passive_heavy_hitter`; name key `loc_talent_ogryn_passive_heavy_hitter`; description key `loc_talent_ogryn_passive_heavy_hitter_new_desc`. Node `node_894ba06e-9e23-480b-9674-a1f4df246824`; category Keystone; one point. Mechanisms and examples reuse verified source evidence; no in-game test was performed.

## Source-confirmed behavior and static derivation

- The proc buff handles `on_hit` only on the server. It requires melee, rejects `target_number>1`, missing `damage_efficiency` and `push`. `CheckProcFunctions.on_heavy_hit` checks `params.is_heavy` or `melee_attack_strength == "heavy"`.
- Heavy hits add 2 stacks; other eligible melee hits add 1. The damage buff has `max_stacks=8`, duration 7.5s, `refresh_duration_on_stack=true` and melee damage 0.03 per stack.

## Fixed source evidence

- [scripts/settings/ability/archetype_talents/talents/ogryn_talents.lua — L517-L565](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/ogryn_talents.lua#L517-L565)
- [scripts/settings/talent/talent_settings_ogryn.lua — L101-L110](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/talent/talent_settings_ogryn.lua#L101-L110)
- [scripts/settings/buff/archetype_buff_templates/ogryn_buff_templates.lua — L180-L280](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/ogryn_buff_templates.lua#L180-L280)
- [scripts/settings/buff/helper_functions/check_proc_functions.lua — L438-L446](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/helper_functions/check_proc_functions.lua#L438-L446)
- [scripts/extension_systems/buff/buffs/proc_buff.lua — L150-L185](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/buff/buffs/proc_buff.lua#L150-L185)
- [scripts/settings/ability/archetype_talents/talents/ogryn_talents.lua — L517-L565](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/ogryn_talents.lua#L517-L565)
- [scripts/ui/views/talent_builder_view/layouts/ogryn_tree.lua — L709-L739](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/ui/views/talent_builder_view/layouts/ogryn_tree.lua#L709-L739)

## Example assumptions and limits

- **Building stacks**: Melee hits add stacks. Pushes do not count, and later targets cleaved by the same swing do not add further stacks.

- **Stacks and damage**: An ordinary hit adds 1 stack; a heavy hit adds 2. Each stack grants 3% melee damage, up to 8 stacks, or 24% at maximum.

- **Refresh and example**: Adding stacks resets the 7.5s duration. Four ordinary hits grant 12%; at 8 stacks, 100 base melee damage becomes 100 × (1 + 24%) = 124.

Later cleave hits from one swing do not add stacks. Neither the talent nor its buff defines a ProcBuff cooldown; adding stacks restarts the 7.5s lifetime. The stack ratio `heavy_hitter_lerp_value` is a module-local shared variable; interactions when multiple Ogryns are present have not been tested. The player example fixes a single character. Local Build 25606770 text and the fixed public source correspond to 1.13.1; actual presentation and behavior remain unobserved in game.

<a id="original-english-template-and-reconstruction"></a>

## Original English template and reconstruction

Steam Build `25606770`; `content/localization/ui`, resource hash `63564edcb7c3c5ee`; language `en` (code `0`).

- Name key `loc_talent_ogryn_passive_heavy_hitter`, hash `e189a8b0`, entry 14630: **Heavy Hitter**.
- Description key `loc_talent_ogryn_passive_heavy_hitter_new_desc`, hash `ccb2288d`, entry 13234.

Full raw template:

~~~text
{damage:%s} Melee Damage for {duration:%s}s on Melee Attack Hit. Stacks {stacks:%s} times. Gain {heavy_stacks:%s} Stacks on Heavy Attack Hit.
~~~

| Placeholder | Value | Formatting |
|---|---|---|
| damage | melee_damage 0.03 | Percentage with + prefix → +3% |
| duration | Buff duration 7.5 | Number automatically retains one decimal → 7.5; template supplies s |
| stacks | max_stacks 8 | Number → 8 |
| heavy_stacks | heavy_stacks 2 | Number → 2 |

Only the missing display map in the cited talent definition, lines 517–565, was read. The decimal behavior reuses [accepted formatting evidence](../../Veteran/en/veteran_increased_damage_based_on_range.md); the formatter was not reread. Existing mechanism and values were reused.

Static reconstruction; not an observed game screen:

~~~text
+3% Melee Damage for 7.5s on Melee Attack Hit. Stacks 8 times. Gain 2 Stacks on Heavy Attack Hit.
~~~

## English comparison

The independently read English agrees with melee-hit stacking, two stacks on a heavy hit, +3% melee damage, 7.5s and eight stacks. Push and cleave exclusions, server/event guards, duration refresh and the 124-damage example supplement the text. The existing multi-Ogryn shared-state uncertainty is retained. No explicit English contradiction is established.

## Icon source

[Original image](https://gameslantern.com/storage/sites/darktide/exporter/talents/ogryn/keystone/ogryn_passive_heavy_hitter.webp) | [Media-Assets Issue](https://github.com/SyuanTsai/Media-Assets/issues/10#issuecomment-5931383354) | [Existing attachment](https://github.com/user-attachments/assets/6ad5a8ad-f1c2-4c43-997a-02b89543ebd9). The icon identifies the talent; it is not mechanism evidence.
