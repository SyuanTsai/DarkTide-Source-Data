# No Pain!: source evidence

[繁體中文](../ogryn_taunt_restore_toughness.md) | [Player description](README.md#ogryn_taunt_restore_toughness) | [Technical index](SOURCE_INDEX.md) | [English comparison](LOCALIZATION_COMPARISON.md#ogryn_taunt_restore_toughness)

Release 1.13.1; fixed SHA `7e662fcda16219d775b84af50322be2e9cd9d62e`. Talent `ogryn_taunt_restore_toughness`; name key `loc_talent_ogryn_taunt_restore_toughness`; description key `loc_talent_ogryn_taunt_restore_toughness_new_desc`. Node `node_2f3d7564-5550-4782-bc81-919d31b686dd`; category Combat ability; one point. Mechanisms and examples reuse verified source evidence; no in-game test was performed.

## Source-confirmed behavior and static derivation

- `talent_settings_shared.ogryn_taunt_restore_toughness` sets duration 3.25s, `instant_toughness=0.1`, `max_stacks=20` and `toughness_per_hit=0.005`.
- After executing a shout, `ActionOgrynShout` sends `on_ogryn_shout` regardless of whether `num_hits` is 0. The passive first calls `replenish_percentage(...,0.1)`, then adds `min(num_hits,20)` stacks of the over-time buff.
- The over-time buff's `update_func` continuously restores a fraction of maximum Toughness equal to `stack_count × 0.005 × dt`. Adding stacks refreshes the duration (`refresh_duration_on_stack=true`), with at most 20 stacks. Both repeat-taunt pulses trigger through the same shout flow.

## Fixed source evidence

- [scripts/settings/ability/archetype_talents/talents/ogryn_talents.lua — L2507-L2537](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/ogryn_talents.lua#L2507-L2537)
- [scripts/settings/talent/talent_settings_ogryn.lua — L150-L155](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/talent/talent_settings_ogryn.lua#L150-L155)
- [scripts/settings/buff/archetype_buff_templates/ogryn_buff_templates.lua — L3364-L3400](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/ogryn_buff_templates.lua#L3364-L3400)
- [scripts/extension_systems/ability/actions/action_ogryn_shout.lua — L81-L105](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/ability/actions/action_ogryn_shout.lua#L81-L105)
- [scripts/settings/buff/archetype_buff_templates/ogryn_buff_templates.lua — L415-L437](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/ogryn_buff_templates.lua#L415-L437)
- [scripts/extension_systems/toughness/player_unit_toughness_extension.lua — L253-L279](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/toughness/player_unit_toughness_extension.lua#L253-L279)
- [scripts/settings/ability/archetype_talents/talents/ogryn_talents.lua — L2507-L2537](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/ogryn_talents.lua#L2507-L2537)
- [scripts/ui/views/talent_builder_view/layouts/ogryn_tree.lua — L1498-L1524](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/ui/views/talent_builder_view/layouts/ogryn_tree.lua#L1498-L1524)

## Example assumptions and limits

- **Immediate replenishment**: Loyal Protector and its two repeats at 3s and 6s each restore 10% of maximum Toughness immediately, even with no enemies nearby.

- **Restoration over time**: Each enemy affected by a taunt adds one stack that restores 0.5% of maximum Toughness per second. The limit is 20 stacks, or 10% per second. The effect lasts 3.25s; adding stacks restarts the duration.

- **Step-by-step example**: With maximum Toughness 100 and four enemies affected by each of three taunts, immediate replenishment totals 100 × 10% × 3 = 30. Restoration stacks rise from 4 to 8 to 12, giving 2, 4 and 6 Toughness per second.

- **Total example**: Ignoring update error, assuming sufficient missing Toughness throughout and no other replenishment bonuses, the first 3s restore 2 × 3 = 6, the next 3s restore 4 × 3 = 12, and the final 3.25s restore 6 × 3.25 = 19.5. Including immediate replenishment gives 67.5. Actual restoration is capped by missing Toughness at each point in time.

- **English duration difference**: The same-build English displays 3s; the accepted buff duration is 3.25s. The examples use the buff duration.

Each pulse adds enemy-based stacks subject to the 20-stack cap. Actual restoration cannot exceed the current Toughness deficit. The update function restores continuously over time, rather than only at integer-second instants. The 67.5 total ignores fixed-update boundaries and natural regeneration. The display map uses 3s while the buff uses 3.25s: the independently read English explicitly differs in duration. This common display-versus-implementation difference alone does not establish a Chinese mistranslation. English and code both correspond to 1.13.1; actual presentation and behavior remain unobserved in game.

<a id="original-english-template-and-reconstruction"></a>

## Original English template and reconstruction

Steam Build `25606770`; `content/localization/ui`, resource hash `63564edcb7c3c5ee`; language `en` (code `0`).

- Name key `loc_talent_ogryn_taunt_restore_toughness`, hash `bd671992`, entry 12218: **No Pain!**.
- Description key `loc_talent_ogryn_taunt_restore_toughness_new_desc`, hash `03dc3a99`, entry 243. `[Writer]` is export metadata, not displayed text. The raw template's trailing space and spelling `tougness` are retained.

Full raw template as a JSON string (including the trailing space):

~~~json
"{talent_name:%s} and its Repeats, Replenish {tougness:%s} Toughness and an additional {toughness_per_hit:%s} each 1s per enemy affected, up to {max:%s}, for {duration:%s}s. "
~~~

| Placeholder | Value | Formatting |
|---|---|---|
| talent_name | loc_ability_ogryn_taunt_shout | Localized string → Loyal Protector |
| tougness | instant_toughness 0.1 | Percentage → 10%; no prefix |
| toughness_per_hit | 0.005 | Percentage → 0.5%; no prefix |
| max | 0.005 × 20 = 0.1 | Percentage → 10%; no prefix |
| duration | Display-map value 3 | Number → 3; template supplies s; distinct from buff duration 3.25s |

Only the missing display map in the cited talent definition, lines 2507–2537, was read. Existing values, mechanism and formatter evidence were reused.

Static reconstruction; not an observed game screen:

~~~text
Loyal Protector and its Repeats, Replenish 10% Toughness and an additional 0.5% each 1s per enemy affected, up to 10%, for 3s.
~~~

## English comparison

The independently read English agrees with immediate 10% restoration, the repeat pulses, 0.5% per affected enemy per second, and the 10% per-second cap. Its explicit 3s duration differs from the accepted 3.25s buff. Empty-taunt restoration, continuous updates, refresh rules and the 67.5 example supplement the text. The duration difference is recorded without reopening the verified mechanism research.

## Icon source

[Original image](https://gameslantern.com/storage/sites/darktide/exporter/talents/ogryn/ability_modifier/ogryn_taunt_restore_toughness.webp) | [Media-Assets Issue](https://github.com/SyuanTsai/Media-Assets/issues/10#issuecomment-5931383354) | [Existing attachment](https://github.com/user-attachments/assets/80ee299a-c486-4957-bf40-6b1d631fd748). The icon identifies the talent; it is not mechanism evidence.
