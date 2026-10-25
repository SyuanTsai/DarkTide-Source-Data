# Slippery Customer: source evidence

[繁體中文](../broker_passive_dodge_melee_on_slide.md) | [Player description](README.md#broker_passive_dodge_melee_on_slide) | [Technical index](SOURCE_INDEX.md) | [English comparison](LOCALIZATION_COMPARISON.md#broker_passive_dodge_melee_on_slide)

Release 1.13.1; fixed SHA `7e662fcda16219d775b84af50322be2e9cd9d62e`. Talent `broker_passive_dodge_melee_on_slide`; name key `loc_talent_broker_passive_dodge_melee_on_slide`; description key `loc_talent_broker_passive_dodge_melee_on_slide_desc`. Node `node_5c6828fd-4ac1-427e-bd39-793677a16ccc`; category Talent; one point. Mechanisms and examples reuse verified source evidence; no in-game test was performed.

## Source-confirmed behavior and static derivation

- `movement_state.method == sliding` enables `count_as_dodge_vs_melee`. `Dodge.is_dodging` reads this keyword in the `melee` and `incapacitating_grab` categories.

## Fixed source evidence

- [scripts/extension_systems/character_state_machine/character_states/utilities/dodge.lua — L103-L140](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/character_state_machine/character_states/utilities/dodge.lua#L103-L140)
- [scripts/settings/buff/archetype_buff_templates/broker_buff_templates.lua — L1128-L1147](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/broker_buff_templates.lua#L1128-L1147)
- [scripts/settings/ability/archetype_talents/talents/broker_talents.lua — L1127-L1135](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/broker_talents.lua#L1127-L1135)
- [scripts/ui/views/talent_builder_view/layouts/broker_tree.lua — L490-L517](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/ui/views/talent_builder_view/layouts/broker_tree.lua#L490-L517)

## Example assumptions and limits

- **How it works**: while sliding, you have Melee Dodge status, so Enemy Melee attacks follow their Dodge rules. This does not directly make you immune to all Damage.
- **Trigger limit**: starting a slide does not mean an attack has already been successfully Dodged. You must actually avoid an attack that qualifies for the check to trigger talents tied to a Successful Dodge.

The accepted explanation distinguishes the Dodging state from an actual Successful Dodge event. No additional example is introduced. Mechanisms reuse the fixed-version evidence, with local Build 25606770 English text corresponding to 1.13.1. Actual presentation and behavior remain unobserved in game. Missing details are supplementary explanations.

<a id="original-english-template-and-reconstruction"></a>

## Original English template and reconstruction

Steam Build `25606770`; `content/localization/ui`, resource hash `63564edcb7c3c5ee`; language `en` (code `0`).

- Name key `loc_talent_broker_passive_dodge_melee_on_slide`, hash `abb5fdd2`, entry 11052: **Slippery Customer**.
- Description key `loc_talent_broker_passive_dodge_melee_on_slide_desc`, hash `2eb1aa86`, entry 3043.

Full raw template:

~~~text
While sliding, you count as Dodging against Melee Attacks.
~~~

| Placeholder | Value | Formatting |
|---|---|---|
| None | No placeholders in the English template | No substitution required |

The English description has no placeholders. Its text is retained directly from the paired localization entry; no display-value source lookup was needed.

Static reconstruction; not an observed game screen:

~~~text
While sliding, you count as Dodging against Melee Attacks.
~~~

## English comparison

The English explicitly describes counting as Dodging while sliding, matching the conditional Melee Dodge keyword. It does not say that sliding itself produces a Successful Dodge event or universal Damage immunity. The grab checking branch and requirement to actually avoid a qualifying attack are supplementary limits.

## Icon source

[Original image](https://gameslantern.com/storage/sites/darktide/exporter/talents/broker/default/broker_passive_dodge_melee_on_slide.webp) | [Media-Assets Issue](https://github.com/SyuanTsai/Media-Assets/issues/12#issuecomment-5933987866) | [Existing attachment](https://github.com/user-attachments/assets/a1732698-da8a-42ec-8f53-f0a57c964056). The icon identifies the talent; it is not mechanism evidence.
