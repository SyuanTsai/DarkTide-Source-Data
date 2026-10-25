# Bruiser: source evidence

[繁體中文](../ogryn_ally_elite_kills_grant_cooldown.md) | [Player description](README.md#ogryn_ally_elite_kills_grant_cooldown) | [Technical index](SOURCE_INDEX.md) | [English comparison](LOCALIZATION_COMPARISON.md#ogryn_ally_elite_kills_grant_cooldown)

Release 1.13.1; fixed SHA `7e662fcda16219d775b84af50322be2e9cd9d62e`. Talent `ogryn_ally_elite_kills_grant_cooldown`; name key `loc_talent_ogryn_cooldown_on_elite_kills`; description key `loc_talent_ogryn_cooldown_on_elite_kills_new_desc`. Node `node_b4cba785-e870-4ca2-86fb-380262f7a8ac`; category Talent; one point. Mechanisms and examples reuse verified source evidence; no in-game test was performed.

## Source-confirmed behavior and static derivation

- `on_minion_death` requires an Elite and `attacking_unit` in `in_coherence_units`. The child has maximum one stack, duration 4s and refresh. Whenever `t > timer` (initially `t + 1`), it calls `restore_ability_resource(0.5)`. This is not a one-time reduction of 50% of total cooldown.

## Fixed source evidence

- [scripts/settings/buff/archetype_buff_templates/ogryn_buff_templates.lua — L1424-L1493](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/ogryn_buff_templates.lua#L1424-L1493)
- [scripts/settings/talent/talent_settings_ogryn.lua — L343-L348](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/talent/talent_settings_ogryn.lua#L343-L348)
- [scripts/extension_systems/ability/player_unit_ability_extension.lua — L1127-L1168](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/ability/player_unit_ability_extension.lua#L1127-L1168)
- [scripts/settings/ability/archetype_talents/talents/ogryn_talents.lua — L1352-L1372](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/ogryn_talents.lua#L1352-L1372)
- [scripts/ui/views/talent_builder_view/layouts/ogryn_tree.lua — L2194-L2224](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/ui/views/talent_builder_view/layouts/ogryn_tree.lua#L2194-L2224)

## Example assumptions and limits

- **Trigger**: When you or an ally in Coherency kills an Elite, restore approximately 0.5s of additional Combat Ability cooldown per second for 4s. Specialists that are not Elites do not trigger it.

- **Refresh**: Another qualifying kill resets the 4s countdown without increasing the restoration per second. The effect has a maximum of one stack.

- **Timing example**: Normal cooldown recovery restores 1s per second, with an additional 0.5s per tick. If all four extra ticks are received, 4s advances cooldown by `4 + 4 × 0.5 = 6s`, saving an additional 2s. Actual recovery depends on whether cooldown is already full and on update timing.

The ordering of 4s expiry and the final per-second restoration depends on buff update timing. The player example explicitly assumes that all four extra ticks are received. Mechanisms reuse the fixed-version evidence, with local Build 25606770 English text corresponding to 1.13.1. Actual presentation and behavior remain unobserved in game. Missing details are supplementary explanations.

<a id="original-english-template-and-reconstruction"></a>

## Original English template and reconstruction

Steam Build `25606770`; `content/localization/ui`, resource hash `63564edcb7c3c5ee`; language `en` (code `0`).

- Name key `loc_talent_ogryn_cooldown_on_elite_kills`, hash `b17401b3`, entry 11424: **Bruiser**.
- Description key `loc_talent_ogryn_cooldown_on_elite_kills_new_desc`, hash `d14f6cb0`, entry 13505.

Full raw template:

~~~text
 {cooldown_regen} Ability Cooldown Regeneration for {duration:%s}s after you or an Ally in Coherency kill an Elite Enemy.
~~~

| Placeholder | Value | Formatting |
|---|---|---|
| cooldown_regen | talent_settings_2.coop_3.increased_cooldown_regeneration = 0.5 | Percentage with explicit + prefix → +50% |
| duration | talent_settings_2.coop_3.duration = 4 | Number → 4 |

Only the missing display mapping in the cited talent definition, lines 1352–1372, was read. Accepted values, mechanisms and common formatting were reused. The missing display value was also read in talent_settings_ogryn.lua L343–348. The raw template and reconstruction retain the initial space.

Static reconstruction; not an observed game screen:

~~~text
 +50% Ability Cooldown Regeneration for 4s after you or an Ally in Coherency kill an Elite Enemy.
~~~

## English comparison

The independently read English increases Ability Cooldown Regeneration by 50% for 4s after your or a Coherency ally's Elite kill. It agrees with the accepted additional 0.5s recovery per approximately one-second tick, rather than promising an immediate 50% reduction of total cooldown. Refresh without stacking, non-Elite Specialist exclusion and conditional four-tick calculation supplement the text. The existing expiry/update-timing qualification is retained. No explicit English contradiction is established.

## Icon source

[Original image](https://gameslantern.com/storage/sites/darktide/exporter/talents/ogryn/default/ogryn_ally_elite_kills_grant_cooldown.webp) | [Media-Assets Issue](https://github.com/SyuanTsai/Media-Assets/issues/10#issuecomment-5931394406) | [Existing attachment](https://github.com/user-attachments/assets/9e138d4c-f301-46c6-9eef-5aff038efc7c). The icon identifies the talent; it is not mechanism evidence.
