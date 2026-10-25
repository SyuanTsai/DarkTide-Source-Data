# Prescience: source evidence

[繁體中文](../psyker_aura_crit_chance_aura.md) | [Player description](README.md#psyker_aura_crit_chance_aura) | [Technical index](SOURCE_INDEX.md) | [English comparison](LOCALIZATION_COMPARISON.md#psyker_aura_crit_chance_aura)

Release 1.13.1; fixed SHA `7e662fcda16219d775b84af50322be2e9cd9d62e`. Talent `psyker_aura_crit_chance_aura`; name key `loc_ability_psyker_gunslinger_aura`; description key `loc_ability_psyker_gunslinger_aura_description`. Node `node_592db669-6d46-45a9-aa87-c66bc5d52a53`; category Aura; one point. Mechanisms and examples reuse verified source evidence; no in-game test was performed.

## Source-confirmed behavior and static derivation

- At the fixed source SHA, this aura grants `critical_strike_chance=0.05` with a maximum of 1 stack. The Coherency set includes the player; units within that set receive the aura.
- Shared critical-chance calculation adds this value directly to archetype base Critical Hit Chance and relevant bonuses, then clamps the result between 0 and 1. Thus 0.05 adds 5 percentage points rather than multiplying the existing chance by 1.05.

## Fixed source evidence

- [scripts/ui/views/talent_builder_view/layouts/psyker_tree.lua — L662-L689](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/ui/views/talent_builder_view/layouts/psyker_tree.lua#L662-L689)
- [scripts/settings/ability/archetype_talents/talents/psyker_talents.lua — L891-L925](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/psyker_talents.lua#L891-L925)
- [scripts/settings/buff/archetype_buff_templates/psyker_buff_templates.lua — L1351-L1368](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/psyker_buff_templates.lua#L1351-L1368)
- [scripts/extension_systems/coherency/coherency_system.lua — L188-L195](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/coherency/coherency_system.lua#L188-L195)
- [scripts/extension_systems/coherency/unit_coherency_extension.lua — L279-L311](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/coherency/unit_coherency_extension.lua#L279-L311)
- [scripts/utilities/attack/critical_strike.lua — L13-L39](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/attack/critical_strike.lua#L13-L39)
- [scripts/settings/ability/archetype_talents/talents/psyker_talents.lua — L891-L925](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/psyker_talents.lua#L891-L925)
- [scripts/ui/views/talent_builder_view/layouts/psyker_tree.lua — L662-L689](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/ui/views/talent_builder_view/layouts/psyker_tree.lua#L662-L689)

## Example assumptions and limits

- **Aura**: You and teammates in Coherency gain 5 percentage points of Critical Hit Chance. The same aura does not stack multiple times.

- **Chance example**: An original 10% Critical Hit Chance becomes 10% + 5% = 15%, rather than 10% × 1.05 = 10.5%.

- Assume Critical Hit Chance is 10% after weapon and other bonuses but before this aura, with no other changes. `10% + 5 percentage points = 15%`, rather than 10.5%.
- Critical Hit Chance also depends on weapon, archetype and other bonuses; shared calculation caps the final chance at 100%.
- This effect increases Critical Hit Chance; it does not also increase Critical Damage.
- Text and source both correspond to 1.13.1; actual behavior remains pending in-game comparison, without in-game testing. Mechanisms reuse the fixed-version evidence, with local Build 25606770 English text corresponding to 1.13.1. Actual presentation and behavior remain unobserved in game. Missing details are supplementary explanations.

<a id="original-english-template-and-reconstruction"></a>

## Original English template and reconstruction

Steam Build `25606770`; `content/localization/ui`, resource hash `63564edcb7c3c5ee`; language `en` (code `0`).

- Name key `loc_ability_psyker_gunslinger_aura`, hash `23f5f870`, entry 2334: **Prescience**.
- Description key `loc_ability_psyker_gunslinger_aura_description`, hash `a2000c1d`, entry 10464.

Full raw template:

~~~text
You and Allies in Coherency gain {critical_strike_chance:%s} Critical Hit Chance.
~~~

| Placeholder | Value | Formatting |
|---|---|---|
| `critical_strike_chance` | `0.05` | Percentage with `+` prefix → `+5%` |

Only missing display fields in `psyker_talents.lua` L891–920 were read. `critical_strike_chance` finds the accepted value 0.05 in the aura buff; percentage formatting with `+` prefix gives `+5%`. `max_stacks` is not used by this English template. Accepted mechanics and common formatting were reused.

Static reconstruction; not an observed game screen:

~~~text
You and Allies in Coherency gain +5% Critical Hit Chance.
~~~

## English comparison

Read independently, the English grants you and Allies in Coherency +5% Critical Hit Chance. This agrees with the accepted self-inclusive aura's additive 0.05 chance stat. It does not claim a Critical Damage increase or specify a multiplicative increase to existing chance. The percentage-point example, one-stack cap and final chance clamp are supplementary details.

## Icon source

[Original image](https://gameslantern.com/storage/sites/darktide/exporter/talents/psyker/aura/psyker_aura_crit_chance_aura.webp) | [Media-Assets Issue](https://github.com/SyuanTsai/Media-Assets/issues/7#issuecomment-5928024966) | [Existing attachment](https://github.com/user-attachments/assets/44e929da-988f-4845-b68b-95320025d339). The icon identifies the talent; it is not mechanism evidence.
