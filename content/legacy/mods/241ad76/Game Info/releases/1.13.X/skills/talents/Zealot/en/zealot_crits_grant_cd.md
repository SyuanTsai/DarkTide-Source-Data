# Invocation of Death: source evidence

[繁體中文](../zealot_crits_grant_cd.md) | [Player description](README.md#zealot_crits_grant_cd) | [Technical index](SOURCE_INDEX.md) | [English comparison](LOCALIZATION_COMPARISON.md#zealot_crits_grant_cd)

Release 1.13.1; fixed SHA `7e662fcda16219d775b84af50322be2e9cd9d62e`. Talent `zealot_crits_grant_cd`; name key `loc_talent_maniac_cooldown_on_melee_crits`; description key `loc_talent_maniac_cooldown_on_melee_crits_buff_desc`. Node `node_5e1591e1-f942-4d8d-9b53-0d11864a59ef`; category Ability; one point. Mechanisms and examples reuse verified source evidence; no in-game test was performed.

## Source-confirmed behavior and static derivation

- The talent's passive is `zealot_combat_ability_crits_reduce_cooldown`. Its parent proc Buff listens to `on_hit` and `on_sweep_start`. An `on_hit` checks `on_melee_crit_hit` only while `template_data.active` is true, and the player must have `combat_ability`. Success sets `active=false` and adds `zealot_crits_cooldown_buff`; only the next `sweep_start` resets `active=true`.
- The cooldown Buff has `duration=talent_settings.crits_grants_cd.duration=3.25` seconds. Its `start_func` sets `timer=fixed time+1`. On each timer expiry, `update_func` restores 1.0 combat ability resource and advances the timer by 1 second.
- A single trigger normally settles three times, at about +1, +2 and +3 seconds. The 3.25-second duration leaves time for the third settlement. Additional Critical Hits during the same sweep do not start another Buff.
- Base natural recharge runs alongside this extra `restore_ability_resource`; the charge resource pool still has a cap.

## Fixed source evidence

- [scripts/settings/ability/archetype_talents/talents/zealot_talents.lua — L357-L382](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/zealot_talents.lua#L357-L382)
- [scripts/settings/talent/talent_settings_zealot.lua — L5-L8](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/talent/talent_settings_zealot.lua#L5-L8)
- [scripts/settings/buff/archetype_buff_templates/zealot_buff_templates.lua — L3979-L4067](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/zealot_buff_templates.lua#L3979-L4067)
- [scripts/extension_systems/buff/buffs/buff.lua — L29-L48](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/buff/buffs/buff.lua#L29-L48)
- [scripts/extension_systems/buff/buffs/buff.lua — L103-L127](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/buff/buffs/buff.lua#L103-L127)
- [scripts/extension_systems/buff/buffs/buff.lua — L305-L328](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/buff/buffs/buff.lua#L305-L328)
- [scripts/extension_systems/buff/buff_extension_base.lua — L434-L461](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/buff/buff_extension_base.lua#L434-L461)
- [scripts/settings/ability/archetype_talents/talents/zealot_talents.lua — L357-L382](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/zealot_talents.lua#L357-L382)
- [scripts/ui/views/talent_builder_view/layouts/zealot_tree.lua — L1244-L1269](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/ui/views/talent_builder_view/layouts/zealot_tree.lua#L1244-L1269)

## Example assumptions and limits

- **Trigger**: A Melee Critical Hit grants faster combat ability recovery for about 3.25 seconds. Hitting multiple enemies during one swing triggers it at most once.
- **Refresh**: A Critical Hit on the next swing can refresh duration; the additional per-second recovery rate does not stack.
- **Cooldown example**: Each second gives extra progress equivalent to 1 second of base cooldown. A complete single effect usually restores at about seconds 1, 2 and 3, giving 3 extra seconds. With natural recovery working normally, those 3 seconds advance about 6 seconds of cooldown in total.

- Trigger frequency depends on Critical Chance per hit, how attacks are divided into sweeps, and whether the game classifies the attack as a melee crit.
- The internal duration is 3.25 seconds, while formatting uses `num_decimals=0`. The integer displayed on the interface does not establish an execution duration of exactly 3 seconds.
- Reapplying the same Buff refreshes its duration, but `refresh_func` does not reset its custom timer. Under frequent triggers, the precise tick phase affects total recovery.
- The accepted Chinese note at hash `ec418944` records compatible effect directions; trigger, stacking, recovery and calculations supplement the wording. Actual game behavior and presentation remain unobserved.

Mechanisms reuse the fixed-version evidence, with local Build 25606770 English text corresponding to 1.13.1. Actual presentation and behavior remain unobserved in game. Missing details are supplementary explanations.

<a id="original-english-template-and-reconstruction"></a>

## Original English template and reconstruction

Steam Build `25606770`; `content/localization/ui`, resource hash `63564edcb7c3c5ee`; language `en` (code `0`).

- Name key `loc_talent_maniac_cooldown_on_melee_crits`, hash `c907a59f`, entry 12975: **Invocation of Death**.
- Description key `loc_talent_maniac_cooldown_on_melee_crits_buff_desc`, hash `ec418944`, entry 15357.

Full raw template:

~~~text
{cooldown_regen:%s} Ability Cooldown Regeneration for {duration:%s}s on Melee Critical Hits.
~~~

| Placeholder | Value | Formatting |
|---|---|---|
| `cooldown_regen` | 1.0 → +100% | `percentage`, `+` prefix |
| `duration` | 3.25 → 3 | `number`, `num_decimals=0`; display precision only |

The minimal display mapping at `zealot_talents.lua` L357-L377 supplies the accepted settings and integer duration formatting. Its unused `time` field is not inserted.

Static reconstruction; not an observed game screen:

~~~text
+100% Ability Cooldown Regeneration for 3s on Melee Critical Hits.
~~~

## English comparison

The English correctly describes additional regeneration on Melee Critical Hits. Its +100% matches 1 extra resource/s on the natural 1 resource/s basis. The displayed 3 seconds is the declared zero-decimal formatting of the accepted 3.25-second internal duration; this formatting difference does not establish an English erratum. Once-per-sweep gating, duration refresh without rate stacking, timer phase and the resource cap are supplements.

## Icon source

[Original image](https://gameslantern.com/storage/sites/darktide/exporter/talents/zealot/ability_modifier/zealot_crits_grant_cd.webp) | [Media-Assets Issue](https://github.com/SyuanTsai/Media-Assets/issues/8#issuecomment-5929289315) | [Existing attachment](https://github.com/user-attachments/assets/e185301f-93c5-4f93-8c09-7aa351258173). The icon identifies the talent; it is not mechanism evidence.
