# Sample Collector: source evidence

[繁體中文](../broker_passive_stimm_cd_on_kill.md) | [Player description](README.md#broker_passive_stimm_cd_on_kill) | [Technical index](SOURCE_INDEX.md) | [English comparison](LOCALIZATION_COMPARISON.md#broker_passive_stimm_cd_on_kill)

Release 1.13.1; fixed SHA `7e662fcda16219d775b84af50322be2e9cd9d62e`. Talent `broker_passive_stimm_cd_on_kill`; name key `loc_talent_broker_passive_stimm_cd_on_kill`; description key `loc_talent_broker_passive_stimm_cd_seconds_on_kill_desc`. Node `node_a43d9e96-9651-4ff6-8627-49dbd87e668b`; category Talent; one point. Mechanisms and examples reuse verified source evidence; no in-game test was performed.

## Source-confirmed behavior and static derivation

- `on_kill` checks that `pocketable_ability` resource recovery is not paused. It uses 1 if the enemy `has_keyword(toxin)`, otherwise 0.5, then calls `restore_ability_resource`.
- The Broker syringe recovers one resource per second. The examples exclude resource-recovery modifiers and naturally elapsed time.

## Fixed source evidence

- [scripts/extension_systems/ability/player_unit_ability_extension.lua — L1127-L1157](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/ability/player_unit_ability_extension.lua#L1127-L1157)
- [scripts/settings/ability/player_abilities/abilities/broker_abilities.lua — L139-L160](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/player_abilities/abilities/broker_abilities.lua#L139-L160)
- [scripts/settings/buff/archetype_buff_templates/broker_buff_templates.lua — L2325-L2354](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/broker_buff_templates.lua#L2325-L2354)
- [scripts/settings/ability/archetype_talents/talents/broker_talents.lua — L1920-L1958](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/broker_talents.lua#L1920-L1958)
- [scripts/ui/views/talent_builder_view/layouts/broker_tree.lua — L846-L878](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/ui/views/talent_builder_view/layouts/broker_tree.lua#L846-L878)

## Example assumptions and limits

- **Recovery**: While your Stimm cooldown is recovering, each kill reduces it by 0.5s. Killing an enemy infected with Chem Toxin instead reduces it by 1s. The two amounts do not add together.

- **Cooldown example**: With 20s remaining, four ordinary kills remove 4 × 0.5 = 2s, leaving 18s; four kills of Chem Toxin infected enemies remove 4s, leaving 16s.

- **Limits**: This has no effect while Stimm recovery is paused. Once recovery is complete, excess recovery cannot be saved for the next use.

#### Traditional Chinese wording erratum

- The Chinese original places the toxin name in the enemy-count position, equivalent to “kill … enemies.” The actual condition is killing an enemy infected with Chem Toxin, which instead reduces cooldown by 1s per kill.

The Chinese wording puts `{toxin}` in a count position; the English template instead describes a toxin-infected enemy. The parameter is a toxin status name, not an enemy count. Mechanisms reuse the fixed-version evidence, with local Build 25606770 English text corresponding to 1.13.1. Actual presentation and behavior remain unobserved in game. Missing details are supplementary explanations.

<a id="original-english-template-and-reconstruction"></a>

## Original English template and reconstruction

Steam Build `25606770`; `content/localization/ui`, resource hash `63564edcb7c3c5ee`; language `en` (code `0`).

- Name key `loc_talent_broker_passive_stimm_cd_on_kill`, hash `c7530a4c`, entry 12874: **Sample Collector**.
- Description key `loc_talent_broker_passive_stimm_cd_seconds_on_kill_desc`, hash `f234d4bf`, entry 15736.

Full raw template:

~~~text
Kills reduce {restore:%s}s of your {stimm:%s} Cooldown. Killing {toxin:%s} infected Enemies instead restores {restore_toxined:%s}s.
~~~

| Placeholder | Value | Formatting |
|---|---|---|
| `{restore:%s}` | 0.5 | `number` → `0.5` |
| `{restore_toxined:%s}` | 1 | `number` → `1` |
| `{stimm:%s}` | `loc_talent_broker_stimm` | `loc_string` → `Cartel Special` |
| `{toxin:%s}` | `loc_term_glossary_broker_toxin` | `loc_string` → `Chem Toxin` |

The existing display map at `broker_talents.lua` L1920-L1958 reads the two verified recovery values and localizes the Stimm and toxin keys. `Cartel Special`: hash `7a34c61a`, entry 7944; `Chem Toxin`: hash `5ea7edc3`, entry 6134. The previously verified number formatter preserves 0.5; suffix metadata is not display text.

Static reconstruction; not an observed game screen:

~~~text
Kills reduce 0.5s of your Cartel Special Cooldown. Killing Chem Toxin infected Enemies instead restores 1s.
~~~

## English comparison

The English explicitly says “infected Enemies” and “instead,” matching the toxin condition and replacement amount. Its wording does not contain the Chinese count-position error. Paused recovery, full-resource limits and example assumptions are supplements.

## Icon source

[Original image](https://gameslantern.com/storage/sites/darktide/exporter/talents/broker/default/broker_passive_stimm_cd_on_kill.webp) | [Media-Assets Issue](https://github.com/SyuanTsai/Media-Assets/issues/12#issuecomment-5933987866) | [Existing attachment](https://github.com/user-attachments/assets/19fc62d1-22a4-4366-9195-e523695c2a90). The icon identifies the talent; it is not mechanism evidence.
