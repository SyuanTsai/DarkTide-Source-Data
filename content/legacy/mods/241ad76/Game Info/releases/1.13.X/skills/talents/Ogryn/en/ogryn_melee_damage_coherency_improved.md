# Bonebreaker's Aura: source evidence

[繁體中文](../ogryn_melee_damage_coherency_improved.md) | [Player description](README.md#ogryn_melee_damage_coherency_improved) | [Technical index](SOURCE_INDEX.md) | [English comparison](LOCALIZATION_COMPARISON.md#ogryn_melee_damage_coherency_improved)

Release 1.13.1; fixed SHA `7e662fcda16219d775b84af50322be2e9cd9d62e`. Talent `ogryn_melee_damage_coherency_improved`; name key `loc_talent_damage_aura`; description key `loc_talent_damage_aura_improved_new`. Node `node_3f7b629b-0f4b-4b74-9086-17b78f2a31c5`; category Aura; one point. Mechanisms and examples reuse verified source evidence; no in-game test was performed.

## Source-confirmed behavior and static derivation

- The talent format uses shared value 0.1; the aura writes the `melee_damage` attribute.
- The upgraded aura has maximum stacks 1 and Coherency priority 2. The base melee aura has value 0.075 and priority 1.
- The tree groups this Aura node with the other two Ogryn auras in `exclusive_group = aura`. The Coherency chain includes the owner.

## Fixed source evidence

- [scripts/settings/ability/archetype_talents/talents/ogryn_talents.lua — L651-L690](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/ogryn_talents.lua#L651-L690)
- [scripts/settings/buff/archetype_buff_templates/ogryn_buff_templates.lua — L1354-L1390](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/ogryn_buff_templates.lua#L1354-L1390)
- [scripts/settings/talent/talent_settings_ogryn.lua — L298-L302](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/talent/talent_settings_ogryn.lua#L298-L302)
- [scripts/ui/views/talent_builder_view/layouts/ogryn_tree.lua — L195-L218](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/ui/views/talent_builder_view/layouts/ogryn_tree.lua#L195-L218)
- [scripts/extension_systems/coherency/coherency_system.lua — L188-L195](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/coherency/coherency_system.lua#L188-L195)
- [scripts/utilities/attack/damage_calculation.lua — L287-L305](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/attack/damage_calculation.lua#L287-L305)
- [scripts/settings/ability/archetype_talents/talents/ogryn_talents.lua — L669-L690](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/ogryn_talents.lua#L669-L690)
- [scripts/ui/views/talent_builder_view/layouts/ogryn_tree.lua — L194-L219](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/ui/views/talent_builder_view/layouts/ogryn_tree.lua#L194-L219)

## Example assumptions and limits

- **Activation**: You and allies receiving the aura in Coherency gain +10% Melee Attack Damage. The owner is included in the Coherency chain.

- **Damage examples**: A melee hit normally dealing 100 damage becomes 100 × 1.10 = 110 without other modifiers. With another 20% bonus in the same stage, it becomes 100 × (1 + 20% + 10%) = 130.

- **Stacking and cooldown**: The aura has at most 1 stack and no separate cooldown. Its upgraded 10% value replaces the base 7.5%; the two values are not added.

The examples count this melee aura bonus only, with the stated same-stage assumption for the 20% combination. Other damage modifiers, target armour, hit location and final damage resolution are outside those formulas. The upgraded 10% does not also add the base 7.5% as a second independent aura. English and code evidence both correspond to 1.13.1.

<a id="original-english-template-and-reconstruction"></a>

## Original English template and reconstruction

Steam Build `25606770`; `content/localization/ui`, resource hash `63564edcb7c3c5ee`; language `en` (code `0`).

- Name key `loc_talent_damage_aura`, hash `3e5b6e34`, entry 4068: **Bonebreaker's Aura**.
- Description key `loc_talent_damage_aura_improved_new`, hash `68da370d`, entry 6833. The [Writer] suffix is resource metadata, not part of the displayed template.

Full raw template:

~~~text
{damage:%s} Melee Attack Damage for you and Allies in Coherency.

This is an augmented version of {talent_name:%s}.
~~~

| Placeholder | Value | Formatting |
|---|---|---|
| damage | talent_settings_2.coherency.melee_damage_improved = 0.1 | Percentage × 100, explicit + prefix → +10% |
| talent_name | loc_talent_ogryn_2_base_4 | Localized name → Intimidating Presence |

Referenced name `loc_talent_ogryn_2_base_4`, hash `c99667f7`, entry 13013: **Intimidating Presence**. Only the necessary English display map at L669–L690 was read; mechanism evidence was reused.

Static reconstruction; not an observed game screen:

~~~text
+10% Melee Attack Damage for you and Allies in Coherency.

This is an augmented version of Intimidating Presence.
~~~

## English comparison

The independently read English specifies +10% Melee Attack Damage for the owner and allies in Coherency, and names the augmented base aura. These agree with the accepted value, recipient chain and upgraded priority. Same-stage addition, base replacement, maximum stack count, no separate cooldown and the exclusive aura group are further details. No explicit English contradiction is established.

## Icon source

[Original image](https://gameslantern.com/storage/sites/darktide/exporter/talents/ogryn/aura/ogryn_melee_damage_coherency_improved.webp) | [Media-Assets Issue](https://github.com/SyuanTsai/Media-Assets/issues/10#issuecomment-5931383354) | [Existing attachment](https://github.com/user-attachments/assets/78f209fd-3e8b-456d-954d-c67fdf6e23ee). The icon identifies the talent; it is not mechanism evidence.
