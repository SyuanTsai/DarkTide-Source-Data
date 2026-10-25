# Overpowering Souls: source evidence

[繁體中文](../psyker_empowered_ability_on_elite_kills.md) | [Player description](README.md#psyker_empowered_ability_on_elite_kills) | [Technical index](SOURCE_INDEX.md) | [English comparison](LOCALIZATION_COMPARISON.md#psyker_empowered_ability_on_elite_kills)

Release 1.13.1; fixed SHA `7e662fcda16219d775b84af50322be2e9cd9d62e`. Talent `psyker_empowered_ability_on_elite_kills`; name key `loc_talent_psyker_empowered_ability_on_elite_kills`; description key `loc_talent_psyker_empowered_ability_on_elite_kills_description`. Node `node_a5fc8414-3a27-4c9b-833c-a5b6c1836a86`; category Keystone; one point. Mechanisms and examples reuse verified source evidence; no in-game test was performed.

## Source-confirmed behavior and static derivation

- The modifier enables the special rule `psyker_empowered_grenades_stack_on_elite_kills`. Buff initialization reads the flag; the `on_kill` handler requires both the flag and `params.tags.elite` to add one stack.
- The base `on_hit` handler first verifies a kill. If the Elite-guarantee flag is active and the kill has the Elite tag, it returns, avoiding the ordinary chance path for that Elite. Other kills still use the base 10% path.
- Charge gains use the shared clamped charge counter. A guaranteed event at the cap cannot exceed the configured maximum.

## Fixed source evidence

- [scripts/settings/ability/archetype_talents/talents/psyker_talents.lua — L1790-L1805](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/psyker_talents.lua#L1790-L1805)
- [scripts/settings/talent/talent_settings_psyker.lua — L310-L315](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/talent/talent_settings_psyker.lua#L310-L315)
- [scripts/settings/buff/archetype_buff_templates/psyker_buff_templates.lua — L2260-L2269](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/psyker_buff_templates.lua#L2260-L2269)
- [scripts/settings/buff/archetype_buff_templates/psyker_buff_templates.lua — L2282-L2289](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/psyker_buff_templates.lua#L2282-L2289)
- [scripts/settings/buff/archetype_buff_templates/psyker_buff_templates.lua — L2345-L2365](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/psyker_buff_templates.lua#L2345-L2365)
- [scripts/settings/ability/archetype_talents/talents/psyker_talents.lua — L1790-L1805](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/psyker_talents.lua#L1790-L1805)
- [scripts/ui/views/talent_builder_view/layouts/psyker_tree.lua — L1423-L1448](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/ui/views/talent_builder_view/layouts/psyker_tree.lua#L1423-L1448)

## Example assumptions and limits

- **Trigger:** Killing an Elite Enemy guarantees one empowerment stack. Specialist and ordinary enemies retain the existing gain chance.

- **Stack example:** Killing an Elite at zero stacks gives one. The base cap is one, so another kill at the cap does not give two. Charged Up raises the cap to three.

Specialists and Elites are separate tag checks; this modifier's guarantee reads only `params.tags.elite`. The charge cap is also affected by the Charged Up modifier. Mechanisms reuse the fixed-version evidence, with local Build 25606770 English text corresponding to 1.13.1. Actual presentation and behavior remain unobserved in game. Missing details are supplementary explanations.

<a id="original-english-template-and-reconstruction"></a>

## Original English template and reconstruction

Steam Build `25606770`; `content/localization/ui`, resource hash `63564edcb7c3c5ee`; language `en` (code `0`).

- Name key `loc_talent_psyker_empowered_ability_on_elite_kills`, hash `faea4485`, entry 16291: **Overpowering Souls**.
- Description key `loc_talent_psyker_empowered_ability_on_elite_kills_description`, hash `23c36e9e`, entry 2325.

Full raw template:

~~~text
Guaranteed chance to gain {talent_name:%s} on Elite Kills.
~~~

| Placeholder | Value | Formatting |
|---|---|---|
| `talent_name` | `loc_talent_psyker_empowered_ability` | Localized string: Empowered Psionics; hash `9bac9dab`, entry 10047. |

The existing mapping in `scripts/settings/ability/archetype_talents/talents/psyker_talents.lua` L1795-L1800 localizes `talent_name` as Empowered Psionics using the same-build English entry. There is no numeric placeholder. The exported `[Narrative]` suffix on both entries is metadata, not part of the displayed name or description.

Static reconstruction; not an observed game screen:

~~~text
Guaranteed chance to gain Empowered Psionics on Elite Kills.
~~~

## English comparison

The English explicitly limits the guaranteed gain to Elite Kills, matching the accepted Elite-tag check. A guarantee concerns the successful gain event and does not assert unlimited storage. The capped counter, Charged Up variant and exclusion of guaranteed Elite kills from the ordinary chance path supplement the wording. No explicit English contradiction is identified.

## Icon source

[Original image](https://gameslantern.com/storage/sites/darktide/exporter/talents/psyker/keystone_modifier/psyker_empowered_ability_on_elite_kills.webp) | [Media-Assets Issue](https://github.com/SyuanTsai/Media-Assets/issues/7#issuecomment-5928024966) | [Existing attachment](https://github.com/user-attachments/assets/6312d53d-fec2-44c3-b04e-778d2e74e232). The icon identifies the talent; it is not mechanism evidence.
