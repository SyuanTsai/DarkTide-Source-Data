# Volley Adept: source evidence

[繁體中文](../veteran_reload_speed_on_elite_kill.md) | [Player description](README.md#veteran_reload_speed_on_elite_kill) | [Technical index](SOURCE_INDEX.md) | [Original English comparison](LOCALIZATION_COMPARISON.md#veteran_reload_speed_on_elite_kill)

## Identity and mechanism

- Release 1.13.1, fixed SHA `7e662fcda16219d775b84af50322be2e9cd9d62e`. One-point passive talent and installed buff `veteran_reload_speed_on_elite_kill`. [One-point talent node](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/ui/views/talent_builder_view/layouts/veteran_tree.lua#L96-L124); [Talent and display field](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/veteran_talents.lua#L987-L1003).
- Exact English name key `loc_talent_veteran_reload_speed_on_elite_kill`, hash `a07849b9`: **Volley Adept**. Description key `loc_talent_veteran_reload_speed_on_elite_kill_desc`, hash `7c429a4b`.
- Original English: Steam Build `25606770`, extracted 2026-10-02, resource `content/localization/ui`, resource hash `63564edcb7c3c5ee`, locale `en` (code `0`). UI JSONL SHA-256: `fb54bb69880e08b3a6e1c359bd970ed2416748bf5513d45c4b8a39c545e8c668`.

- An `on_elite_or_special_kill` proc grants `reload_speed = 0.30` for the next reload. Repeated qualifying kills do not bank additional reload uses. [Kill trigger, pending use and reload retention](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/veteran_buff_templates.lua#L1307-L1367); [Reload-speed value](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/talent/talent_settings_veteran.lua#L181-L183); [Elite or Specialist kill check](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/helper_functions/check_proc_functions.lua#L120-L134).
- The pending use is consumed by the `on_reload` ammo-insertion event, rather than merely pressing reload. The conditional speed bonus remains active until that reload ends. The exact insertion point depends on the weapon’s reload action. [Kill trigger, pending use and reload retention](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/veteran_buff_templates.lua#L1307-L1367); [Reload-state handling](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/weapon/actions/action_reload_state.lua#L91-L114).
- Reload-speed bonuses add to the baseline of 1: this talent alone gives `1 + 0.30 = 1.30`; with Tactical Reload active from a non-empty magazine start, `1 + 0.30 + 0.25 = 1.55`. The values are not multiplied together. [Reload-speed stat type](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/buff_settings.lua#L960-L961); [Tactical Reload condition and value](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/veteran_buff_templates.lua#L1751-L1785); [Action time-scale modifiers](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/action/action_handler.lua#L356-L365); [Shared action-time scaling](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/action/action_handler.lua#L383-L429).

## Reload action examples

Assume a hypothetical reload action whose unmodified 4-second duration is affected by reload speed, a pending Volley Adept use and no other speed modifiers except Tactical Reload where specified. These static examples isolate that affected action; they do not measure an entire weapon reload sequence. [Kill trigger, pending use and reload retention](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/veteran_buff_templates.lua#L1307-L1367); [Shared action-time scaling](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/action/action_handler.lua#L383-L429).

| Assumptions | Substitution and result | Player meaning |
|---|---|---|
| Volley Adept only; pending use available | `4 ÷ (1 + 0.30) ≈ 3.08s`; saved time `4 − 4/1.30 ≈ 0.92s`, or about `23.08%`. | +30% speed shortens this affected action by about 23.08%. |
| Volley Adept and Tactical Reload; start with ammo in the magazine | `4 ÷ (1 + 0.30 + 0.25) ≈ 2.58s`; saved time about `1.42s`, or `35.48%` of the 4s baseline. | The bonuses give a combined 1.55 speed multiplier; neither multiplying 1.30 by 1.25 nor subtracting 55% from duration is appropriate. |

## Original English template and reconstruction

Full raw template, hash `7c429a4b`:

```text
{reload_speed:%s} Reload Speed on Elite & Specialist Enemy Kill.
```

| Parameter | Definition and formatting | Reconstructed value |
|---|---|---|
| `reload_speed` | `talent_settings_2.offensive_2_3.reload_speed = 0.30`; percentage formatter and `+` prefix | `+30%` |

[Talent and display field](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/veteran_talents.lua#L987-L1003); [Reload-speed value](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/talent/talent_settings_veteran.lua#L181-L183); [Percentage formatting](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/ui/views/talent_builder_view/utilities/talent_layout_parser.lua#L379-L404).

Static plain-text reconstruction:

```text
+30% Reload Speed on Elite & Specialist Enemy Kill.
```

Runtime color markup is excluded; this is not an observed game screen. The percentage and eligible kill categories agree with the established mechanism. The next-reload use, consumption/retention and additive speed calculations supplement the original text. No English erratum is supported.

## Limits

The exact ammo-insertion point, interruption behavior, weapon-specific reload phases and final game UI have not been measured in game. The examples concern a speed-affected action under their stated assumptions, not a universal complete-reload time.

## Icon source

[Original image](https://gameslantern.com/storage/sites/darktide/exporter/talents/veteran/default/veteran_reload_speed_on_elite_kill.webp) | [Media-Assets Issue](https://github.com/SyuanTsai/Media-Assets/issues/6#issuecomment-5922922455) | [Issue attachment](https://github.com/user-attachments/assets/009ef44a-cf3d-44cf-ac8b-cda57c6fd83d)

The icon identifies the talent; it is not mechanism evidence.
