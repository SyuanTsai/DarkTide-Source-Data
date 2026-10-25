# Empathic Evasion: source evidence

[繁體中文](../psyker_dodge_after_crits.md) | [Player description](README.md#psyker_dodge_after_crits) | [Technical index](SOURCE_INDEX.md) | [English comparison](LOCALIZATION_COMPARISON.md#psyker_dodge_after_crits)

Release 1.13.1; fixed SHA `7e662fcda16219d775b84af50322be2e9cd9d62e`. Talent `psyker_dodge_after_crits`; name key `loc_talent_psyker_dodge_after_crits`; description key `loc_talent_psyker_dodge_after_crits_description`. Node `node_b64d3e49-d2d6-4565-8195-fba8f68d014c`; category Talent; one point. Mechanisms and examples reuse verified source evidence; no in-game test was performed.

## Source-confirmed behavior and static derivation

- The `proc_buff` has `active_duration = 1` and `proc_keywords = count_as_dodge_vs_ranged`.
- Its event entry uses the critical flag and `on_hit`. Shared `proc_buff` behavior resets the active time.

## Fixed source evidence

- [scripts/settings/buff/archetype_buff_templates/psyker_buff_templates.lua — L2976-L3007](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/psyker_buff_templates.lua#L2976-L3007)
- [scripts/settings/ability/archetype_talents/talents/psyker_talents.lua — L1464-L1485](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/psyker_talents.lua#L1464-L1485)
- [scripts/ui/views/talent_builder_view/layouts/psyker_tree.lua — L908-L935](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/ui/views/talent_builder_view/layouts/psyker_tree.lua#L908-L935)

## Example assumptions and limits

- **Effect**: after a Critical Hit, count as Dodging against Ranged Attacks for 1 second; triggering it again resets the duration.

- **Timing example**: a proc at 0 seconds lasts until approximately 1 second. Another proc at 0.6 seconds extends it until approximately 1.6 seconds.

- **Scope**: this is a ranged-dodge check. It does not provide melee invulnerability, and explosions or ground fire cannot all be treated as ranged hits to which it grants immunity.

Whether a given ranged damage source uses a dodge check depends on that attack's implementation; the effect cannot be treated as universal immunity. Mechanisms reuse the fixed-version evidence, with local Build 25606770 English text corresponding to 1.13.1. Actual presentation and behavior remain unobserved in game. Missing details are supplementary explanations.

<a id="original-english-template-and-reconstruction"></a>

## Original English template and reconstruction

Steam Build `25606770`; `content/localization/ui`, resource hash `63564edcb7c3c5ee`; language `en` (code `0`).

- Name key `loc_talent_psyker_dodge_after_crits`, hash `390d90d6`, entry 3698: **Empathic Evasion**.
- Description key `loc_talent_psyker_dodge_after_crits_description`, hash `654d056c`, entry 6589.

Full raw template:

~~~text
A Critical Hit makes you count as Dodging against Ranged Attacks for {duration:%s}s.
~~~

| Placeholder | Value | Formatting |
|---|---|---|
| `duration` | `1` | number → `1` |

[Display mapping](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/psyker_talents.lua#L1469-L1480) reads the verified active duration. Shared number formatting is reused.

Static reconstruction; not an observed game screen:

~~~text
A Critical Hit makes you count as Dodging against Ranged Attacks for 1s.
~~~

## English comparison

The English Critical Hit trigger, one-second duration and explicit ranged-dodge scope agree with the existing evidence. It describes counting as Dodging rather than universal damage immunity. Timer refresh and the dependence on each attack's dodge check are supplements.

## Icon source

[Original image](https://gameslantern.com/storage/sites/darktide/exporter/talents/psyker/default/psyker_dodge_after_crits.webp) | [Media-Assets Issue](https://github.com/SyuanTsai/Media-Assets/issues/7#issuecomment-5928034845) | [Existing attachment](https://github.com/user-attachments/assets/946f549a-ed56-4711-aee8-39ce35a0a6b1). The icon identifies the talent; it is not mechanism evidence.
