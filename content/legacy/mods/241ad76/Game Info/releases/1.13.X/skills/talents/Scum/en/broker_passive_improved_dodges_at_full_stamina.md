# Jittery: source evidence

[繁體中文](../broker_passive_improved_dodges_at_full_stamina.md) | [Player description](README.md#broker_passive_improved_dodges_at_full_stamina) | [Technical index](SOURCE_INDEX.md) | [English comparison](LOCALIZATION_COMPARISON.md#broker_passive_improved_dodges_at_full_stamina)

Release 1.13.1; fixed SHA `7e662fcda16219d775b84af50322be2e9cd9d62e`. Talent `broker_passive_improved_dodges_at_full_stamina`; name key `loc_talent_broker_passive_improved_dodges_at_full_stamina`; description key `loc_talent_broker_passive_improved_dodges_at_full_stamina_desc`. Node `node_c8272e59-a92d-4d10-b768-fc7539d3886f`; category Talent; one point. Mechanisms and examples reuse verified source evidence; no in-game test was performed.

## Source-confirmed behavior and static derivation

- The `conditional` tests `stamina_percentage >= 0.75`, with `dodge_reset_modifier = -0.4`. Reset time is (`archetype.consecutive_dodges_reset` + the weapon's extra time) × `buff_modifier`.

## Fixed source evidence

- [scripts/extension_systems/character_state_machine/character_states/player_character_state_dodging.lua — L251-L268](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/character_state_machine/character_states/player_character_state_dodging.lua#L251-L268)
- [scripts/settings/talent/talent_settings_broker.lua — L343-L346](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/talent/talent_settings_broker.lua#L343-L346)
- [scripts/settings/buff/archetype_buff_templates/broker_buff_templates.lua — L1812-L1834](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/broker_buff_templates.lua#L1812-L1834)
- [scripts/settings/ability/archetype_talents/talents/broker_talents.lua — L1340-L1362](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/broker_talents.lua#L1340-L1362)
- [scripts/ui/views/talent_builder_view/layouts/broker_tree.lua — L879-L906](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/ui/views/talent_builder_view/layouts/broker_tree.lua#L879-L906)

## Example assumptions and limits

- **Condition**: At 75% of maximum Stamina or higher, the wait for the consecutive-Dodge count to recover is reduced by 40%. The bonus is lost below the threshold.

- **Timing example**: If stopping consecutive Dodges normally requires a 1-second wait, it becomes 1 × (1 − 40%) = 0.6s. With 4 maximum Stamina, retaining at least 4 × 75% = 3 points enables the bonus.

The local wording and fixed source differ at exactly 75%; this boundary has not been tested in game. The original Chinese record notes that both languages say “above 75%,” while the fixed source uses inclusive `>=`. It treats this as a shared boundary difference awaiting in-game confirmation rather than a Chinese mistranslation. Mechanisms reuse the fixed-version evidence, with local Build 25606770 English text corresponding to 1.13.1. Actual presentation and behavior remain unobserved in game. Missing details are supplementary explanations.

<a id="original-english-template-and-reconstruction"></a>

## Original English template and reconstruction

Steam Build `25606770`; `content/localization/ui`, resource hash `63564edcb7c3c5ee`; language `en` (code `0`).

- Name key `loc_talent_broker_passive_improved_dodges_at_full_stamina`, hash `27778997`, entry 2555: **Jittery**.
- Description key `loc_talent_broker_passive_improved_dodges_at_full_stamina_desc`, hash `abe61ad9`, entry 11061.

Full raw template:

~~~text
{dodge_cooldown_reset_modifier:%s} Dodge Recovery Speed while Stamina is above {stamina:%s}.
~~~

| Placeholder | Value | Formatting |
|---|---|---|
| `{dodge_cooldown_reset_modifier:%s}` | −0.4 | Custom `abs(value × 100)`, `percentage`, `+` prefix → `+40%` |
| `{stamina:%s}` | 0.75 | `percentage` → `75%` |

The existing display map at `broker_talents.lua` L1340-L1362 uses the verified reset modifier and threshold. The reused percentage formatter applies the custom manipulation without multiplying the resulting 40 by 100 again.

Static reconstruction; not an observed game screen:

~~~text
+40% Dodge Recovery Speed while Stamina is above 75%.
~~~

## English comparison

The English explicitly excludes equality with “above 75%,” whereas the verified condition includes exactly 75%. This is an English threshold contradiction against the fixed evidence; actual in-game behavior remains unobserved. “Dodge Recovery Speed” labels the reset-wait modifier: the established mechanism shortens time by 40%, as the original 1s→0.6s example explains.

## Icon source

[Original image](https://gameslantern.com/storage/sites/darktide/exporter/talents/broker/default/broker_passive_improved_dodges_at_full_stamina.webp) | [Media-Assets Issue](https://github.com/SyuanTsai/Media-Assets/issues/12#issuecomment-5933987866) | [Existing attachment](https://github.com/user-attachments/assets/ab7d66da-9caa-4c94-9ddf-279a30441f67). The icon identifies the talent; it is not mechanism evidence.
