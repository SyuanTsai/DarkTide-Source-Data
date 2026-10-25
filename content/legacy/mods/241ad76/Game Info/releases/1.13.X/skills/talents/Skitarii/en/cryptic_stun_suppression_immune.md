# Target-Neutralization Feedback: source evidence

[繁體中文](../cryptic_stun_suppression_immune.md) | [Player description](README.md#cryptic_stun_suppression_immune) | [Technical index](SOURCE_INDEX.md) | [English comparison](LOCALIZATION_COMPARISON.md#cryptic_stun_suppression_immune)

Release 1.13.1; fixed SHA `7e662fcda16219d775b84af50322be2e9cd9d62e`. Talent `cryptic_stun_suppression_immune`; name key `loc_talent_cryptic_stun_suppression_immune`; description key `loc_talent_cryptic_stun_suppression_immune_desc`. Node `node_d994641d-8ecc-44f0-82f9-cb16beef27ec`; category Talent; one point. Mechanisms and examples reuse verified source evidence; no in-game test was performed.

## Source-confirmed behavior and static derivation

- The trigger combines `on_kill` with `on_weakspot_kill`.
- While active, the buff supplies the `stun_immune` and `suppression_immune` proc keywords. It provides no damage multiplier and no general immunity to disabling effects.

## Fixed source evidence

- [scripts/settings/buff/helper_functions/check_proc_functions.lua — L84-L95](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/helper_functions/check_proc_functions.lua#L84-L95)
- [scripts/settings/talent/talent_settings_cryptic.lua — L418-L420](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/talent/talent_settings_cryptic.lua#L418-L420)
- [scripts/settings/buff/archetype_buff_templates/cryptic_buff_templates.lua — L2368-L2387](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/cryptic_buff_templates.lua#L2368-L2387)
- [scripts/settings/ability/archetype_talents/talents/cryptic_talents.lua — L1873-L1887](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/cryptic_talents.lua#L1873-L1887)
- [scripts/ui/views/talent_builder_view/layouts/cryptic_tree.lua — L783-L807](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/ui/views/talent_builder_view/layouts/cryptic_tree.lua#L783-L807)

## Example assumptions and limits

- Weakspot kills grant 5 seconds of immunity to ordinary hit Stun and Suppression.
- Another qualifying kill refreshes the 5-second duration. For example, a trigger at 0 seconds followed by another at 3 seconds keeps the effect active until 8 seconds.
- This grants no damage reduction. It does not make you immune to nets, pounces or every form of forced control.

The example illustrates duration refresh only. The immunity keywords cover ordinary hit Stun and Suppression; they do not establish immunity to all enemy disabling actions. This is a static explanation, not an in-game observation.

Mechanisms reuse the fixed-version evidence, with local Build 25606770 English text corresponding to 1.13.1. Actual presentation and behavior remain unobserved in game. Missing details are supplementary explanations.

<a id="original-english-template-and-reconstruction"></a>

## Original English template and reconstruction

Steam Build `25606770`; `content/localization/ui`, resource hash `63564edcb7c3c5ee`; language `en` (code `0`).

- Name key `loc_talent_cryptic_stun_suppression_immune`, hash `d14ec87d`, entry 13504: **Target-Neutralization Feedback**.
- Description key `loc_talent_cryptic_stun_suppression_immune_desc`, hash `38272d6c`, entry 3641.

Full raw template:

~~~text
Weakspot kills grant Stun and Suppression Immunity for {duration:%s}s.
~~~

| Placeholder | Value | Formatting |
|---|---|---|
| `duration` | `5` | Number; the template supplies `s`. |

The display mapping is `cryptic_talents.lua` L1881-L1886. The 5-second value reuses the verified settings listed above.

Static reconstruction; not an observed game screen:

~~~text
Weakspot kills grant Stun and Suppression Immunity for 5s.
~~~

## English comparison

The English names the correct trigger, duration and two immunity types. “Stun” is read in the scope of the verified `stun_immune` keyword; the text does not explicitly promise immunity to every disabling action. Refresh behavior, the distinction from damage reduction and the nets/pounces limitation are supplements. No explicit English contradiction was found.

## Icon source

[Original image](https://gameslantern.com/storage/sites/darktide/exporter/talents/cryptic/default/cryptic_stun_suppression_immune.webp) | [Media-Assets Issue](https://github.com/SyuanTsai/Media-Assets/issues/13#issuecomment-5935653628) | [Existing attachment](https://github.com/user-attachments/assets/127fa97e-a0cf-4421-bff2-7edb8edaed86). The icon identifies the talent; it is not mechanism evidence.
