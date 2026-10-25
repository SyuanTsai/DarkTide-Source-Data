# Data Sensor Protocol: source evidence

[繁體中文](../cryptic_ally_coherency_defenses.md) | [Player description](README.md#cryptic_ally_coherency_defenses) | [Technical index](SOURCE_INDEX.md) | [English comparison](LOCALIZATION_COMPARISON.md#cryptic_ally_coherency_defenses)

Release 1.13.1; fixed SHA `7e662fcda16219d775b84af50322be2e9cd9d62e`. Talent `cryptic_ally_coherency_defenses`; name key `loc_talent_cryptic_allies_broken`; description key `loc_talent_cryptic_ally_coherency_defenses_desc`. Node `node_f7b75f2e-e6df-4be2-855c-c05da6151f7b`; category Talent; one point. Mechanisms and examples reuse verified source evidence; no in-game test was performed.

## Source-confirmed behavior and static derivation

Both ProcBuffs are installed on the talent holder and each has `cooldown_duration = 15`. The beneficiary is `params.attacked_unit`, who must be in the Coherency chain, alive, and not `will_die`.

Stamina recovery requires `toughness_damage_amount > 0`; Toughness recovery requires `damage_amount > 0`, the Health damage component. `damage.lua` broadcasts the event to all `valid_player_units`, and the Coherency chain includes the holder themselves.

## Fixed source evidence

- [scripts/extension_systems/coherency/coherency_system.lua — L186-L195](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/coherency/coherency_system.lua#L186-L195)
- [scripts/utilities/attack/damage.lua — L154-L178](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/attack/damage.lua#L154-L178)
- [scripts/utilities/attack/damage.lua — L202-L225](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/attack/damage.lua#L202-L225)
- [scripts/extension_systems/toughness/player_unit_toughness_extension.lua — L253-L285](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/toughness/player_unit_toughness_extension.lua#L253-L285)
- [scripts/extension_systems/buff/buffs/proc_buff.lua — L151-L174](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/buff/buffs/proc_buff.lua#L151-L174)
- [scripts/settings/talent/talent_settings_cryptic.lua — L661-L666](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/talent/talent_settings_cryptic.lua#L661-L666)
- [scripts/settings/buff/archetype_buff_templates/cryptic_buff_templates.lua — L3717-L3753](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/cryptic_buff_templates.lua#L3717-L3753)
- [scripts/settings/buff/archetype_buff_templates/cryptic_buff_templates.lua — L3685-L3716](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/cryptic_buff_templates.lua#L3685-L3716)
- [scripts/settings/ability/archetype_talents/talents/cryptic_talents.lua — L2697-L2729](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/cryptic_talents.lua#L2697-L2729)
- [scripts/ui/views/talent_builder_view/layouts/cryptic_tree.lua — L2372-L2397](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/ui/views/talent_builder_view/layouts/cryptic_tree.lua#L2372-L2397)

## Example assumptions and limits

- **Stamina recovery**: When **you or an ally within Coherency** take Toughness damage, **the injured player** restores **25% of their maximum Stamina**.
- **Toughness recovery**: When you or an ally within Coherency take Health damage, the injured player restores **25% of their maximum Toughness**. Lethal attacks do not trigger this effect.
- **Cooldowns**: Each recovery type has its own **15-second** cooldown, but triggers of the same type share your cooldown. If ally A triggers Stamina recovery and ally B takes Toughness damage **5 seconds** later, that same effect cannot trigger again.
- **Recovery example**: If the injured player's maximum Stamina is **6 bars** and maximum Toughness is **120**, the corresponding recovery is `6 × 25% = 1.5` Stamina bars or `120 × 25% = 30` Toughness points. The entire team does not recover simultaneously.

#### Traditional Chinese localization note

The verified Chinese document notes that its original wording says, in translation, “When you or … an ally take damage, allies restore …”. The beneficiary is the player who took that damage: your injury restores your own resource; an ally's injury restores that ally's resource. Recovery is not transferred to other allies.

The effects have separate cooldowns on the holder, rather than separate cooldowns for each injured ally. The recipient must meet the alive and nonlethal checks.

Mechanisms reuse the fixed-version evidence, with local Build 25606770 English text corresponding to 1.13.1. Actual presentation and behavior remain unobserved in game. Missing details are supplementary explanations.

<a id="original-english-template-and-reconstruction"></a>

## Original English template and reconstruction

Steam Build `25606770`; `content/localization/ui`, resource hash `63564edcb7c3c5ee`; language `en` (code `0`).

- Name key `loc_talent_cryptic_allies_broken`, hash `2dada14c`, entry 2982: **Data Sensor Protocol**.
- Description key `loc_talent_cryptic_ally_coherency_defenses_desc`, hash `307b308a`, entry 3146.

Full raw template:

~~~text
When you or an Ally in Coherency take toughness damage, they restore {stamina:%s} Stamina. {stamina_cd:%s}s Cooldown.
When you or an Ally in Coherency take health damage, they restore {toughness:%s} Toughness. {toughness_cd:%s}s Cooldown.
~~~

| Placeholder | Value | Formatting |
|---|---|---|
| `{stamina:%s}` | `0.25` → `25%` | Percentage |
| `{stamina_cd:%s}` | `15` | Number; template adds `s` |
| `{toughness:%s}` | `0.25` → `25%` | Percentage |
| `{toughness_cd:%s}` | `15` | Number; template adds `s` |

The existing display mapping in `scripts/settings/ability/archetype_talents/talents/cryptic_talents.lua` (L2711-L2728) uses `stamina_percent_restored`, `stamina_cooldown_duration`, `toughness_percent_to_regen`, and `toughness_cooldown_duration`. The verified values are reused.

Static reconstruction; not an observed game screen:

~~~text
When you or an Ally in Coherency take toughness damage, they restore 25% Stamina. 15s Cooldown.
When you or an Ally in Coherency take health damage, they restore 25% Toughness. 15s Cooldown.
~~~

## English comparison

Read independently, the English “they” refers to the player who took damage, including “you” in the condition. Its beneficiaries, damage types, recovery values and cooldowns match the accepted evidence. Maximum-resource bases, nonlethal checks and cooldown sharing across injured players are supplementary details. The separate Chinese localization note is not an English erratum.

## Icon source

[Original image](https://gameslantern.com/storage/sites/darktide/exporter/talents/cryptic/default/cryptic_ally_coherency_defenses.webp) | [Media-Assets Issue](https://github.com/SyuanTsai/Media-Assets/issues/13#issuecomment-5935656030) | [Existing attachment](https://github.com/user-attachments/assets/0bbe1f46-d58e-414d-9ab3-1c8ed0170a41). The icon identifies the talent; it is not mechanism evidence.
