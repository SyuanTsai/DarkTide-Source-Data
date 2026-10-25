# Force Distribution Actuators: source evidence

[繁體中文](../cryptic_push_stagger_stamina.md) | [Player description](README.md#cryptic_push_stagger_stamina) | [Technical index](SOURCE_INDEX.md) | [English comparison](LOCALIZATION_COMPARISON.md#cryptic_push_stagger_stamina)

Release 1.13.1; fixed SHA `7e662fcda16219d775b84af50322be2e9cd9d62e`. Talent `cryptic_push_stagger_stamina`; name key `loc_talent_cryptic_push_stagger_stamina`; description key `loc_talent_cryptic_push_stagger_stamina_desc`. Node `node_231eefb6-059b-4bb2-a656-a9bf662486d0`; category Talent; one point. Mechanisms and examples reuse verified source evidence; no in-game test was performed.

## Source-confirmed behavior and static derivation

- The condition is `current Stamina / maximum Stamina >= 0.5`.
- While that condition holds, `push_impact_modifier = 0.75` is active. It follows current Stamina dynamically; it is not a permanent 75% weapon-damage bonus.

## Fixed source evidence

- [scripts/settings/talent/talent_settings_cryptic.lua — L620-L623](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/talent/talent_settings_cryptic.lua#L620-L623)
- [scripts/settings/buff/archetype_buff_templates/cryptic_buff_templates.lua — L3294-L3419](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/cryptic_buff_templates.lua#L3294-L3419)
- [scripts/utilities/attack/stagger_calculation.lua — L190-L205](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/attack/stagger_calculation.lua#L190-L205)
- [scripts/settings/ability/archetype_talents/talents/cryptic_talents.lua — L2518-L2537](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/cryptic_talents.lua#L2518-L2537)
- [scripts/ui/views/talent_builder_view/layouts/cryptic_tree.lua — L835-L863](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/ui/views/talent_builder_view/layouts/cryptic_tree.lua#L835-L863)

## Example assumptions and limits

- While your current Stamina is at least 50% of maximum Stamina, your Pushes gain 75% Impact. Exactly 50% qualifies.
- **Example**: With 6 maximum Stamina bars, you need at least 3 bars. A Push with an original Impact of 100 becomes `100 × (1 + 75%) = 175`.
- This improves Push and stagger control. Whether a Push interrupts an enemy still depends on that enemy's Impact threshold.

The example isolates the Push Impact modifier. Actual interruption depends on enemy Impact thresholds; the bonus does not guarantee an interruption against every enemy.

Mechanisms reuse the fixed-version evidence, with local Build 25606770 English text corresponding to 1.13.1. Actual presentation and behavior remain unobserved in game. Missing details are supplementary explanations.

<a id="original-english-template-and-reconstruction"></a>

## Original English template and reconstruction

Steam Build `25606770`; `content/localization/ui`, resource hash `63564edcb7c3c5ee`; language `en` (code `0`).

- Name key `loc_talent_cryptic_push_stagger_stamina`, hash `ec311974`, entry 15354: **Force Distribution Actuators**.
- Description key `loc_talent_cryptic_push_stagger_stamina_desc`, hash `19866afe`, entry 1659.

Full raw template:

~~~text
Your Pushes have {push_strength:%s} Impact when at or above {stamina:%s} Stamina.
~~~

| Placeholder | Value | Formatting |
|---|---|---|
| `push_strength` | `0.75` → `+75%` | Percentage with `+` prefix. |
| `stamina` | `0.5` → `50%` | Percentage; no added prefix. |

Display mappings are `cryptic_talents.lua` L2526-L2536. The values reuse the verified settings listed above.

Static reconstruction; not an observed game screen:

~~~text
Your Pushes have +75% Impact when at or above 50% Stamina.
~~~

## English comparison

The English explicitly includes the boundary with “at or above,” matching the inclusive 50% check. It correctly names Push Impact and +75%. The maximum-Stamina basis, dynamic condition and enemy thresholds are supplements. No explicit English contradiction was found.

## Icon source

[Original image](https://gameslantern.com/storage/sites/darktide/exporter/talents/cryptic/default/cryptic_push_stagger_stamina.webp) | [Media-Assets Issue](https://github.com/SyuanTsai/Media-Assets/issues/13#issuecomment-5935653628) | [Existing attachment](https://github.com/user-attachments/assets/6d7a17f5-be3e-4659-bc09-84cfb22bd20f). The icon identifies the talent; it is not mechanism evidence.
