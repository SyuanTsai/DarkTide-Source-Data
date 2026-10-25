# Slice and Dice: source evidence

[繁體中文](../cryptic_chordclaw_consecutive_bonus.md) | [Player description](README.md#cryptic_chordclaw_consecutive_bonus) | [Technical index](SOURCE_INDEX.md) | [English comparison](LOCALIZATION_COMPARISON.md#cryptic_chordclaw_consecutive_bonus)

Release 1.13.1; fixed SHA `7e662fcda16219d775b84af50322be2e9cd9d62e`. Talent `cryptic_chordclaw_consecutive_bonus`; name key `loc_talent_cryptic_chordclaw_consecutive_bonus`; description key `loc_talent_cryptic_chordclaw_consecutive_bonus_desc`. Node `node_5313efe8-b680-4879-8b64-65e9996ff694`; category Ability; one point. Mechanisms and examples reuse verified source evidence; no in-game test was performed.

## Source-confirmed behavior and static derivation

- The talent special rule calls `add_internally_controlled_buff` on every ability activation in `ActionCrypticChordclawActivation.start`. Stack count is not determined by the number of Capacitance charges consumed.
- The buff sets `max_stacks = max_stacks_cap = 3`, `duration = 5` and `refresh_duration_on_stack = true`. Each stack adds `stat_buffs.cryptic_chordclaw_damage = 0.2`. This stat buff uses `additive_multiplier`. Chordclaw damage profiles include this specific stat key, so the bonus affects Chordclaw attacks rather than giving a general damage bonus to all weapons.
- The damage modifier affects attack calculation. Actual Health lost still depends on weapon attack settings, hit location, target protection and other modifiers. A 20% stack cannot be converted into a fixed amount of Health damage.

## Fixed source evidence

- [scripts/settings/ability/archetype_talents/talents/cryptic_talents.lua — L546-L568](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/cryptic_talents.lua#L546-L568)
- [scripts/settings/talent/talent_settings_cryptic.lua — L158-L162](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/talent/talent_settings_cryptic.lua#L158-L162)
- [scripts/extension_systems/weapon/actions/action_cryptic_chordclaw_activation.lua — L27-L46](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/weapon/actions/action_cryptic_chordclaw_activation.lua#L27-L46)
- [scripts/settings/buff/archetype_buff_templates/cryptic_buff_templates.lua — L982-L998](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/cryptic_buff_templates.lua#L982-L998)
- [scripts/settings/buff/buff_settings.lua — L762-L762](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/buff_settings.lua#L762-L762)
- [scripts/settings/damage/damage_profiles/archetypes/cryptic_damage_profile_templates.lua — L190-L212](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/damage/damage_profiles/archetypes/cryptic_damage_profile_templates.lua#L190-L212)
- [scripts/settings/damage/damage_profiles/archetypes/cryptic_damage_profile_templates.lua — L325-L340](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/damage/damage_profiles/archetypes/cryptic_damage_profile_templates.lua#L325-L340)
- [scripts/settings/damage/damage_profiles/archetypes/cryptic_damage_profile_templates.lua — L536-L550](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/damage/damage_profiles/archetypes/cryptic_damage_profile_templates.lua#L536-L550)
- [scripts/settings/ability/archetype_talents/talents/cryptic_talents.lua — L546-L568](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/cryptic_talents.lua#L546-L568)
- [scripts/ui/views/talent_builder_view/layouts/cryptic_tree.lua — L2269-L2292](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/ui/views/talent_builder_view/layouts/cryptic_tree.lua#L2269-L2292)

## Example assumptions and limits

- **How it works**: Each Chordclaw ability activation adds one Chordclaw damage stack, +20% per stack, up to 3. Adding a stack refreshes the 5s duration.
- **How it works**: Three stacks give +60% Chordclaw damage. With an illustrative base Chordclaw damage of 100, considering only this effect, the values are approximately 120 / 140 / 160.

- With illustrative base Chordclaw damage 100, one activation gives 100 × (1 + 20%) = 120, considering only this bonus.
- At three stacks, 100 × (1 + 3 × 20%) = 160. The three-stack bonus cap is 60%.
- Each activation adds one stack, rather than each Chordclaw hit. The maximum is 3; another activation does not exceed it.
- The 20% is a Chordclaw attack-calculation modifier, rather than a fixed extra 20 Health damage. The example's 100 is an illustrative baseline.
- Both language templates specify Chordclaw ability use, 20% damage, 5s and at most 3 stacks, agreeing with the accepted settings.

Mechanisms reuse the fixed-version evidence, with local Build 25606770 English text corresponding to 1.13.1. Actual presentation and behavior remain unobserved in game. Missing details are supplementary explanations.

<a id="original-english-template-and-reconstruction"></a>

## Original English template and reconstruction

Steam Build `25606770`; `content/localization/ui`, resource hash `63564edcb7c3c5ee`; language `en` (code `0`).

- Name key `loc_talent_cryptic_chordclaw_consecutive_bonus`, hash `9cf4cd86`, entry 10140: **Slice and Dice**.
- Description key `loc_talent_cryptic_chordclaw_consecutive_bonus_desc`, hash `0ec90e2e`, entry 970.

Full raw template:

~~~text
Using the Chordclaw Ability increases damage dealt by the Chordclaw by {damage:%s} for {duration:%s}s. Stacking {max_stacks:%s} times.
~~~

| Placeholder | Value | Formatting |
|---|---|---|
| `{damage:%s}` | 0.2 → 20% | `percentage`; no + prefix |
| `{duration:%s}` | 5 | `number`; s supplied by template |
| `{max_stacks:%s}` | 3 | `number` |

The minimally read display map is `cryptic_talents.lua` L554-L568. The verified `chordclaw_ability.consecutive_bonus` settings supply `chordclaw_damage = 0.2`, `duration = 5` and `max_stacks = 3`.

Static reconstruction; not an observed game screen:

~~~text
Using the Chordclaw Ability increases damage dealt by the Chordclaw by 20% for 5s. Stacking 3 times.
~~~

## English comparison

The original English explicitly limits the damage bonus to Chordclaw, with ability use, 20% per stack, 5s and a three-stack cap agreeing with the accepted evidence. Activation-based stack addition, independence from charge count, duration refresh and additive attack-calculation details supplement the description.

## Icon source

[Original image](https://gameslantern.com/storage/sites/darktide/exporter/talents/cryptic/ability_modifier/cryptic_chordclaw_consecutive_bonus.webp) | [Media-Assets Issue](https://github.com/SyuanTsai/Media-Assets/issues/13#issuecomment-5935640756) | [Existing attachment](https://github.com/user-attachments/assets/a4bee55e-0868-4104-89c8-e2009e89ae4d). The icon identifies the talent; it is not mechanism evidence.
