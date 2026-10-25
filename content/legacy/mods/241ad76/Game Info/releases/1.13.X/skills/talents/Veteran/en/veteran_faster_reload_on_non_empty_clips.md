# Tactical Reload: source evidence

[繁體中文](../veteran_faster_reload_on_non_empty_clips.md) | [Player description](README.md#veteran_faster_reload_on_non_empty_clips) | [Technical index](SOURCE_INDEX.md) | [Original English comparison](LOCALIZATION_COMPARISON.md#veteran_faster_reload_on_non_empty_clips)

## Identity and mechanism

- Release 1.13.1, fixed SHA `7e662fcda16219d775b84af50322be2e9cd9d62e`. One-point passive talent `veteran_faster_reload_on_non_empty_clips`; installed buff `veteran_reload_speed_on_non_empty_clip`. [One-point talent node](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/ui/views/talent_builder_view/layouts/veteran_tree.lua#L67-L95); [Talent and display field](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/veteran_talents.lua#L2362-L2378).
- Exact English name key `loc_talent_ranger_reload_speed_empty_mag`, hash `2be2baca`: **Tactical Reload**. Description key `loc_talent_veteran_reload_speed_non_empty_mag_desc`, hash `09e8437d`.
- Original English: Steam Build `25606770`, extracted 2026-10-02, resource `content/localization/ui`, resource hash `63564edcb7c3c5ee`, locale `en` (code `0`). UI JSONL SHA-256: `fb54bb69880e08b3a6e1c359bd970ed2416748bf5513d45c4b8a39c545e8c668`.

- The installed buff grants `reload_speed = 0.25` when reloading begins with a non-empty magazine (`ammo percentage > 0`). The bonus remains active through that reload; an empty-magazine start is excluded. [Non-empty reload condition and buff](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/veteran_buff_templates.lua#L1751-L1785); [Reload-speed value](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/talent/talent_settings_veteran.lua#L138-L140); [Reload-state handling](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/weapon/actions/action_reload_state.lua#L91-L114).
- Reload-speed scaling changes the affected action's elapsed time. Isolating this +25% speed bonus gives `new affected duration = base affected duration ÷ 1.25`. A 4s affected action therefore takes 3.2s, not 3s. [Reload-speed stat type](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/buff_settings.lua#L960-L961); [Action time-scale modifiers](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/action/action_handler.lua#L356-L365); [Shared action-time scaling](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/action/action_handler.lua#L383-L429).
- The internal name key contains `empty_mag`, but the actual English description and installed buff refer to ammo in the magazine. The key spelling does not define an empty-magazine trigger. [Talent and display field](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/veteran_talents.lua#L2362-L2378); [Non-empty reload condition and buff](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/veteran_buff_templates.lua#L1751-L1785).

## Reload action examples

Assume a hypothetical reload action whose 4-second unmodified duration is affected by reload speed, no other modifiers and the stated starting magazine condition. These static calculations isolate that action and do not measure a weapon’s entire reload sequence. [Non-empty reload condition and buff](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/veteran_buff_templates.lua#L1751-L1785); [Shared action-time scaling](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/action/action_handler.lua#L383-L429).

| Assumptions | Substitution and result | Player meaning |
|---|---|---|
| Start with ammo in the magazine; this bonus is active | `4 ÷ (1 + 0.25) = 3.2s`; saved time `4 − 3.2 = 0.8s`, or `0.8 ÷ 4 = 20%`. | A +25% speed bonus reduces this affected action’s time by 20%, not 25%. |
| Start empty; its own unmodified affected-action baseline is 4s | No bonus from this talent: `4 ÷ 1 = 4s`. | Tactical Reload does not speed up an empty-magazine start; other modifiers remain excluded. |

## Original English template and reconstruction

Full raw template, hash `09e8437d`:

```text
{reload_speed:%s} Reload Speed if your weapon contains Ammo.
```

| Parameter | Definition and formatting | Reconstructed value |
|---|---|---|
| `reload_speed` | `talent_settings_2.offensive_1_2.reload_speed = 0.25`; percentage formatter and `+` prefix | `+25%` |

[Talent and display field](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/veteran_talents.lua#L2362-L2378); [Reload-speed value](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/talent/talent_settings_veteran.lua#L138-L140); [Percentage formatting](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/ui/views/talent_builder_view/utilities/talent_layout_parser.lua#L379-L404).

Static plain-text reconstruction:

```text
+25% Reload Speed if your weapon contains Ammo.
```

Runtime color markup is excluded; this is not an observed game screen. The percentage and ammo-in-magazine condition agree with the established mechanism. Retention through the reload and speed-to-time conversion supplement the text. No English erratum is supported by the internal name-key wording.

## Limits

Weapon-specific reload phases, interruptions, special reload modes and final game UI have not been measured in game. The 4s→3.2s example concerns an affected action under its stated assumptions, not a universal complete-reload time.

## Icon source

[Original image](https://gameslantern.com/storage/sites/darktide/exporter/talents/veteran/default/veteran_faster_reload_on_non_empty_clips.webp) | [Media-Assets Issue](https://github.com/SyuanTsai/Media-Assets/issues/6#issuecomment-5922922455) | [Issue attachment](https://github.com/user-attachments/assets/a5b64063-ac9d-404d-98ac-528f24aafb65)

The icon identifies the talent; it is not mechanism evidence.
