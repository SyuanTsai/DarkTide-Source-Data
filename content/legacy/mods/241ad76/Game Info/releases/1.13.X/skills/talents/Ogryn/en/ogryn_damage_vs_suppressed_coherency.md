# Coward Culling: source evidence

[繁體中文](../ogryn_damage_vs_suppressed_coherency.md) | [Player description](README.md#ogryn_damage_vs_suppressed_coherency) | [Technical index](SOURCE_INDEX.md) | [English comparison](LOCALIZATION_COMPARISON.md#ogryn_damage_vs_suppressed_coherency)

Release 1.13.1; fixed SHA `7e662fcda16219d775b84af50322be2e9cd9d62e`. Talent `ogryn_damage_vs_suppressed_coherency`; name key `loc_talent_ogryn_damage_vs_suppressed`; description key `loc_talent_ogryn_damage_vs_suppressed_new_desc`. Node `node_eb153946-19bd-4e03-8dcd-7feb7be78e56`; category Aura; one point. Mechanisms and examples reuse verified source evidence; no in-game test was performed.

## Source-confirmed behavior and static derivation

- The Coherency aura sets `damage_vs_suppressed` to 0.2. The talent separately installs a personal Suppression increase with value 0.25.
- The aura has `max_stacks = 1`. Its tree node shares `exclusive_group = aura` with the other two Ogryn auras.
- Coherency chain creation includes the unit itself, so aura recipients include the owner.

## Fixed source evidence

- [scripts/settings/ability/archetype_talents/talents/ogryn_talents.lua — L691-L717](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/ogryn_talents.lua#L691-L717)
- [scripts/settings/buff/archetype_buff_templates/ogryn_buff_templates.lua — L2041-L2058](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/ogryn_buff_templates.lua#L2041-L2058)
- [scripts/settings/buff/archetype_buff_templates/ogryn_buff_templates.lua — L3100-L3106](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/ogryn_buff_templates.lua#L3100-L3106)
- [scripts/settings/talent/talent_settings_ogryn.lua — L190-L192](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/talent/talent_settings_ogryn.lua#L190-L192)
- [scripts/settings/talent/talent_settings_ogryn.lua — L215-L219](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/talent/talent_settings_ogryn.lua#L215-L219)
- [scripts/ui/views/talent_builder_view/layouts/ogryn_tree.lua — L221-L244](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/ui/views/talent_builder_view/layouts/ogryn_tree.lua#L221-L244)
- [scripts/extension_systems/coherency/coherency_system.lua — L188-L195](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/coherency/coherency_system.lua#L188-L195)
- [scripts/utilities/attack/damage_calculation.lua — L435-L447](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/attack/damage_calculation.lua#L435-L447)
- [scripts/utilities/attack/suppression.lua — L26-L44](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/attack/suppression.lua#L26-L44)
- [scripts/settings/ability/archetype_talents/talents/ogryn_talents.lua — L691-L717](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/ogryn_talents.lua#L691-L717)
- [scripts/ui/views/talent_builder_view/layouts/ogryn_tree.lua — L220-L246](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/ui/views/talent_builder_view/layouts/ogryn_tree.lua#L220-L246)

## Example assumptions and limits

- **Activation**: Against a Suppressed enemy, you and allies in Coherency deal +20% Damage to that target.

- **Damage example**: A hit normally dealing 100 damage to a Suppressed target becomes 100 × 1.20 = 120 without other modifiers. An unsuppressed target does not receive this bonus.

- **Additional effect and stacking**: You also deal +25% Suppression. The aura has at most 1 stack, no separate cooldown, and must be chosen instead of the other two Ogryn auras. For example, an attack normally applying 10 Suppression applies 10 × 1.25 = 12.5. This Suppression increase applies only to you.

The damage example includes only this 20% conditional bonus; target Suppression state, other damage modifiers, armour and hit location can change actual damage. The personal +25% Suppression is calculated separately from the aura recipients' +20% Damage to Suppressed enemies. English and code evidence both correspond to 1.13.1.

<a id="original-english-template-and-reconstruction"></a>

## Original English template and reconstruction

Steam Build `25606770`; `content/localization/ui`, resource hash `63564edcb7c3c5ee`; language `en` (code `0`).

- Name key `loc_talent_ogryn_damage_vs_suppressed`, hash `c8846f9a`, entry 12949: **Coward Culling**.
- Description key `loc_talent_ogryn_damage_vs_suppressed_new_desc`, hash `4e68c42c`, entry 5105. The [Writer] suffix is resource metadata.

Full raw template:

~~~text
{damage:%s} Damage against Suppressed Enemies for you and Allies in Coherency. {suppression:%s} Suppression dealt.
~~~

| Placeholder | Value | Formatting |
|---|---|---|
| damage | talent_settings_1.aura.damage_vs_suppressed = 0.2 | Percentage × 100, explicit + prefix → +20% |
| suppression | shared_talent_settings.ogryn_suppression_increase.suppression = 0.25 | Percentage × 100, explicit + prefix → +25% |

Only the necessary display map at L691–L717 was read; the mechanism values and examples reuse existing evidence.

Static reconstruction; not an observed game screen:

~~~text
+20% Damage against Suppressed Enemies for you and Allies in Coherency. +25% Suppression dealt.
~~~

## English comparison

The English independently names conditional Damage to Suppressed enemies for the owner and Coherency allies, then a separate Suppression-dealt increase. Its +20% and +25% values match the accepted aura and personal passive. The second bonus is not transferred to all aura recipients. Calculation examples, stack limit, cooldown and exclusive aura choice supplement the text. No explicit English contradiction is established.

## Icon source

[Original image](https://gameslantern.com/storage/sites/darktide/exporter/talents/ogryn/aura/ogryn_damage_vs_suppressed_coherency.webp) | [Media-Assets Issue](https://github.com/SyuanTsai/Media-Assets/issues/10#issuecomment-5931383354) | [Existing attachment](https://github.com/user-attachments/assets/4b71152f-747b-450c-9d3a-82a313fc8360). The icon identifies the talent; it is not mechanism evidence.
