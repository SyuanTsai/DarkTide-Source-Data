# Street Smarts: source evidence

[繁體中文](../adamant_dodge_improvement.md) | [Player description](README.md#adamant_dodge_improvement) | [Technical index](SOURCE_INDEX.md) | [English comparison](LOCALIZATION_COMPARISON.md#adamant_dodge_improvement)

Release 1.13.1; fixed SHA `7e662fcda16219d775b84af50322be2e9cd9d62e`. Talent `adamant_dodge_improvement`; name key `loc_talent_adamant_dodge_improvement`; description key `loc_talent_adamant_dodge_improvement_desc`. Node `node_eea35a28-d324-4f45-b682-edadc7d4c5ef`; category Passive talent; one point.

## Source-confirmed behavior and static derivation

`extra_consecutive_dodges = 1` is added to `weapon_dodge_template.diminishing_return_start`. `dodge_linger_time_modifier = 0.25` scales only `archetype.dodge_linger_time = 0.2` under `uses_melee_dodge_rules`; other time bonuses are added separately.

## Fixed source evidence

- [scripts/extension_systems/character_state_machine/character_states/utilities/dodge.lua — L128-L167](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/character_state_machine/character_states/utilities/dodge.lua#L128-L167)
- [scripts/extension_systems/character_state_machine/character_states/utilities/dodge.lua — L246-L262](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/character_state_machine/character_states/utilities/dodge.lua#L246-L262)
- [scripts/settings/dodge/archetype_dodge_templates.lua — L193-L202](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/dodge/archetype_dodge_templates.lua#L193-L202)
- [scripts/settings/talent/talent_settings_adamant.lua — L488-L491](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/talent/talent_settings_adamant.lua#L488-L491)
- [scripts/settings/buff/archetype_buff_templates/adamant_buff_templates.lua — L3158-L3165](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/adamant_buff_templates.lua#L3158-L3165)
- [scripts/settings/ability/archetype_talents/talents/adamant_talents.lua — L2761-L2781](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/adamant_talents.lua#L2761-L2781)
- [scripts/ui/views/talent_builder_view/layouts/adamant_tree.lua — L1962-L1990](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/ui/views/talent_builder_view/layouts/adamant_tree.lua#L1962-L1990)

## Example assumptions and limits

- **Dodge count**: Gain 1 additional Effective Dodge. For example, a weapon originally allowing 3 consecutive Effective Dodges allows 3 + 1 = 4.

- **Timing**: The grace period after a melee dodge ends increases from 0.2s to 0.2 × 1.25 = 0.25s, an extra 0.05s. This does not extend the entire dodge action by 25%.

The same-build Chinese wording, rendered as increase Effective Dodges to a count, confuses the total with the increment. The accepted correction is increase by 1 rather than set the total to 1. English already says Increase ... by ..., so this Chinese-only erratum does not establish an English contradiction.

Values and behavior reuse the verified fixed-version evidence. The examples are static derivations, not in-game tests. English and code evidence both refer to 1.13.1; differences still require an in-game check. Omitted details are supplementary rather than translation errors.

<a id="original-english-template-and-reconstruction"></a>

## Original English template and reconstruction

Steam Build `25606770`; `content/localization/ui`, resource hash `63564edcb7c3c5ee`; language `en` (code `0`).

- Name key `loc_talent_adamant_dodge_improvement`, hash `ea92cdda`, entry 15239: **Street Smarts**.
- Description key `loc_talent_adamant_dodge_improvement_desc`, hash `4de76f4a`, entry 5074.

Full raw template:

```text
Increase Effective Dodges by {dodge:%s} and time considered Dodging by {dodge_duration:%s}.
```

| Placeholder | Value | Formatting |
|---|---|---|
| dodge | talent_settings.dodge_improvement.dodge = 1 | Number, + prefix → +1 |
| dodge_duration | talent_settings.dodge_improvement.dodge_duration = 0.25 | Percentage, + prefix → +25% |

Static reconstruction; not an observed game screen:

```text
Increase Effective Dodges by +1 and time considered Dodging by +25%.
```

## English comparison

The independently read English by wording agrees with one additional Effective Dodge and the 25% timing modifier. The melee post-dodge grace-period scope, separately added time bonuses and examples are supplementary. The Chinese total-versus-increment erratum does not apply to English. No explicit English contradiction is established.

## Icon source

[Original image](https://gameslantern.com/storage/sites/darktide/exporter/talents/adamant/default/adamant_dodge_improvement.webp) | [Media-Assets Issue](https://github.com/SyuanTsai/Media-Assets/issues/11#issuecomment-5932563852) | [Existing attachment](https://github.com/user-attachments/assets/cd883557-4048-43f0-a3b7-3a90bbc6ffe8). The icon identifies the talent; it is not mechanism evidence.
