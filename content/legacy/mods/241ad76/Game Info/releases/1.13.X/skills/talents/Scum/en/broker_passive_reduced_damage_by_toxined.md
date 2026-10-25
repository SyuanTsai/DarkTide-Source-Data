# Targeted Toxin: source evidence

[繁體中文](../broker_passive_reduced_damage_by_toxined.md) | [Player description](README.md#broker_passive_reduced_damage_by_toxined) | [Technical index](SOURCE_INDEX.md) | [English comparison](LOCALIZATION_COMPARISON.md#broker_passive_reduced_damage_by_toxined)

Release 1.13.1; fixed SHA `7e662fcda16219d775b84af50322be2e9cd9d62e`. Talent `broker_passive_reduced_damage_by_toxined`; name key `loc_talent_broker_passive_reduced_damage_by_toxined`; description key `loc_talent_broker_passive_reduced_damage_by_toxined_desc`. Node `node_088ae839-61d1-45c5-9656-582439b3b638`; category Talent; one point. Mechanisms and examples reuse verified source evidence; no in-game test was performed.

## Source-confirmed behavior and static derivation

- `on_buff_added` uses an owner-forwarded event. After checking the `toxin` keyword, it branches on `tags.monster`/`captain`/`cultist_captain`. The debuff has `damage = -0.15` or `-0.3`, maximum one stack and no `duration`. It ends after the enemy loses Toxin.

## Fixed source evidence

- [scripts/settings/buff/archetype_buff_templates/broker_buff_templates.lua — L2529-L2566](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/broker_buff_templates.lua#L2529-L2566)
- [scripts/extension_systems/buff/buff_extension_base.lua — L1346-L1372](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/buff/buff_extension_base.lua#L1346-L1372)
- [scripts/utilities/attack/damage_calculation.lua — L233-L244](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/attack/damage_calculation.lua#L233-L244)
- [scripts/settings/talent/talent_settings_broker.lua — L386-L389](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/talent/talent_settings_broker.lua#L386-L389)
- [scripts/settings/buff/archetype_buff_templates/broker_buff_templates.lua — L2474-L2528](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/broker_buff_templates.lua#L2474-L2528)
- [scripts/settings/ability/archetype_talents/talents/broker_talents.lua — L2015-L2037](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/broker_talents.lua#L2015-L2037)
- [scripts/ui/views/talent_builder_view/layouts/broker_tree.lua — L1336-L1363](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/ui/views/talent_builder_view/layouts/broker_tree.lua#L1336-L1363)

## Example assumptions and limits

- **Behavior**: After you apply Chem Toxin to an enemy, its Damage dealt is reduced by 15%; monsters and Captain-type bosses instead have a 30% reduction. When Toxin disappears, the reduction is removed too.

- **Damage-reduction example**: With this effect alone, an enemy that would deal 100 Damage deals 85; a boss eligible for the 30% reduction deals 70. This reduces the enemy's output, so teammates attacked by it also benefit.

The original Chinese comparison notes that the English specifies enemies you infect, whereas the Chinese omits the inflicter. This is an incomplete condition, not a Chinese mistranslation under the existing comparison rule. Mechanisms reuse the fixed-version evidence, with local Build 25606770 English text corresponding to 1.13.1. Actual presentation and behavior remain unobserved in game. Missing details are supplementary explanations.

<a id="original-english-template-and-reconstruction"></a>

## Original English template and reconstruction

Steam Build `25606770`; `content/localization/ui`, resource hash `63564edcb7c3c5ee`; language `en` (code `0`).

- Name key `loc_talent_broker_passive_reduced_damage_by_toxined`, hash `78d6f9f3`, entry 7848: **Targeted Toxin**.
- Description key `loc_talent_broker_passive_reduced_damage_by_toxined_desc`, hash `615c771b`, entry 6319.

Full raw template:

~~~text
Enemies you infect with {toxin:%s} deal {default:%s} Damage. Monstrosities instead deal {monster:%s}.
~~~

| Placeholder | Value | Formatting |
|---|---|---|
| `{toxin:%s}` | `loc_term_glossary_broker_toxin` | `loc_string` → `Chem Toxin` |
| `{default:%s}` | `default_damage_debuff = -0.15` | `percentage`, no added prefix → `-15%` |
| `{monster:%s}` | `monster_damage_debuff = -0.3` | `percentage`, no added prefix → `-30%` |

The existing display map at `broker_talents.lua` L2015-L2037 uses the verified two negative Damage values and localizes the toxin key. Reused glossary: `Chem Toxin`, hash `5ea7edc3`, entry 6134. Percentage formatting preserves the negative signs.

Static reconstruction; not an observed game screen:

~~~text
Enemies you infect with Chem Toxin deal -15% Damage. Monstrosities instead deal -30%.
~~~

## English comparison

The English explicitly specifies enemies you infect and describes their Damage dealt, matching the owner-forwarded application and enemy-output debuff. The −15%/−30% values match. The verified monster/Captain tags, single stack and removal when Toxin disappears supplement the description; the phrase “instead” indicates replacement rather than addition.

## Icon source

[Original image](https://gameslantern.com/storage/sites/darktide/exporter/talents/broker/default/broker_passive_reduced_damage_by_toxined.webp) | [Media-Assets Issue](https://github.com/SyuanTsai/Media-Assets/issues/12#issuecomment-5933987866) | [Existing attachment](https://github.com/user-attachments/assets/28aafc63-bbd4-4097-a93f-3fb0d62f8710). The icon identifies the talent; it is not mechanism evidence.
