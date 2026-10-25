# Gunsmith: source evidence

[繁體中文](../cryptic_auto_reload.md) | [Player description](README.md#cryptic_auto_reload) | [Technical index](SOURCE_INDEX.md) | [English comparison](LOCALIZATION_COMPARISON.md#cryptic_auto_reload)

Release 1.13.1; fixed SHA `7e662fcda16219d775b84af50322be2e9cd9d62e`. Talent `cryptic_auto_reload`; name key `loc_talent_cryptic_reload_speed_based_on_charge`; description key `loc_talent_cryptic_auto_reload_desc`. Node `node_35eda8e9-ea9c-40b7-9ed5-85474173f23e`; category Talent; one point. Mechanisms and examples reuse verified source evidence; no in-game test was performed.

## Source-confirmed behavior and static derivation

- `on_shoot` resets a 5-second cooldown. When it ends, `next_reload_t = cooldown_ended_t + 1`; each subsequent second transfers `ceil(max_ammo_in_clip × 0.075)`, limited by missing clip ammo and reserve ammo. Transfer is disallowed while `is_reloading`.
- `reload_speed = 0.15` is unconditional. Automatic reload operates on `slot_secondary`; the gun does not have to be currently held.

## Fixed source evidence

- [scripts/settings/talent/talent_settings_cryptic.lua — L652-L656](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/talent/talent_settings_cryptic.lua#L652-L656)
- [scripts/settings/buff/archetype_buff_templates/cryptic_buff_templates.lua — L3600-L3664](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/cryptic_buff_templates.lua#L3600-L3664)
- [scripts/utilities/ammo.lua — L452-L465](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/ammo.lua#L452-L465)
- [scripts/utilities/action/action_handler.lua — L402-L423](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/action/action_handler.lua#L402-L423)
- [scripts/settings/ability/archetype_talents/talents/cryptic_talents.lua — L2653-L2675](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/cryptic_talents.lua#L2653-L2675)
- [scripts/ui/views/talent_builder_view/layouts/cryptic_tree.lua — L1404-L1428](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/ui/views/talent_builder_view/layouts/cryptic_tree.lua#L1404-L1428)

## Example assumptions and limits

- **Reload Speed**: Gain 15% Reload Speed. An affected reload action that originally takes 2 seconds becomes `2 ÷ 1.15 ≈ 1.74` seconds.
- **Automatic reload**: After 5 full seconds without shooting, every additional second transfers ammo from reserves into the clip. After normal shooting, the first batch arrives at approximately 6 seconds. Each batch is 7.5% of clip capacity, rounded up.
- **Ammo example**: A 30-round clip gives `30 × 7.5% = 2.25`, rounded up to 3 rounds per batch. If the clip is missing 2 rounds, only 2 are transferred; if reserves contain only 1 round, only 1 is transferred.
- **Exceptions**: No transfer occurs during manual reloading, with a full clip or with empty reserves. Shooting again resets the wait. This moves reserve ammo into the clip; it does not create new ammo.

The reload-time example covers the affected action without other speed bonuses. Automatic reload uses existing reserves, clips transfer to the missing amount and reserve availability, and still works with the gun stowed. Timing is a static derivation, not a game-screen observation.

Mechanisms reuse the fixed-version evidence, with local Build 25606770 English text corresponding to 1.13.1. Actual presentation and behavior remain unobserved in game. Missing details are supplementary explanations.

<a id="original-english-template-and-reconstruction"></a>

## Original English template and reconstruction

Steam Build `25606770`; `content/localization/ui`, resource hash `63564edcb7c3c5ee`; language `en` (code `0`).

- Name key `loc_talent_cryptic_reload_speed_based_on_charge`, hash `d211baf4`, entry 13560: **Gunsmith**.
- Description key `loc_talent_cryptic_auto_reload_desc`, hash `612ee334`, entry 6306.

Full raw template:

~~~text
Gain {reload_speed:%s} Reload Speed. Additionally, after not shooting for {duration:%s}s, each second spent not shooting reloads {reload_percent:%s} of your Clip from your Ammo Reserve.
~~~

| Placeholder | Value | Formatting |
|---|---|---|
| `reload_speed` | `0.15` → `15%` | Percentage; no added prefix. |
| `duration` | `5` | Number; the template supplies `s`. |
| `reload_percent` | `0.075` → `7.5%` | Percentage; no added prefix. |

Display mappings are `cryptic_talents.lua` L2661-L2674. All values reuse the verified settings listed above. The name key is `loc_talent_cryptic_reload_speed_based_on_charge`, despite this talent's `cryptic_auto_reload` identifier.

Static reconstruction; not an observed game screen:

~~~text
Gain 15% Reload Speed. Additionally, after not shooting for 5s, each second spent not shooting reloads 7.5% of your Clip from your Ammo Reserve.
~~~

## English comparison

The English correctly gives 15% Reload Speed and describes transferring 7.5% of the clip from Ammo Reserve each second after a 5-second wait. This wording is compatible with the first batch around 6 seconds. Rounding, missing-ammo limits, manual-reload suppression, timer reset, stowed-gun operation and the reload-time example are supplements. No explicit English contradiction was found.

## Icon source

[Original image](https://gameslantern.com/storage/sites/darktide/exporter/talents/cryptic/default/cryptic_auto_reload.webp) | [Media-Assets Issue](https://github.com/SyuanTsai/Media-Assets/issues/13#issuecomment-5935653628) | [Existing attachment](https://github.com/user-attachments/assets/6e39714f-23a2-4d43-b5ae-6cfe4fa9b214). The icon identifies the talent; it is not mechanism evidence.
