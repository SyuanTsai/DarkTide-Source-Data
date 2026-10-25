# Voltaic Restoration: source evidence

[繁體中文](../cryptic_coherency_toughness_on_ability.md) | [Player description](README.md#cryptic_coherency_toughness_on_ability) | [Technical index](SOURCE_INDEX.md) | [English comparison](LOCALIZATION_COMPARISON.md#cryptic_coherency_toughness_on_ability)

Release 1.13.1; fixed SHA `7e662fcda16219d775b84af50322be2e9cd9d62e`. Talent `cryptic_coherency_toughness_on_ability`; name key `loc_talent_cryptic_coherency_toughness_on_ability`; description key `loc_talent_cryptic_coherency_toughness_on_ability_desc`. Node `node_898ff194-0732-4782-b33a-f24581ca52d0`; category Talent; one point. Mechanisms and examples reuse verified source evidence; no in-game test was performed.

## Source-confirmed behavior and static derivation

- `on_combat_ability` triggers once per activation and applies `replenish_percentage = 0.2` to each member of `in_coherence_units`.
- `coherency_system` includes the player when building the Coherency chain.

## Fixed source evidence

- [scripts/extension_systems/coherency/coherency_system.lua — L186-L195](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/coherency/coherency_system.lua#L186-L195)
- [scripts/extension_systems/coherency/coherency_system.lua — L236-L254](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/coherency/coherency_system.lua#L236-L254)
- [scripts/extension_systems/toughness/player_unit_toughness_extension.lua — L253-L285](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/toughness/player_unit_toughness_extension.lua#L253-L285)
- [scripts/settings/talent/talent_settings_cryptic.lua — L457-L459](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/talent/talent_settings_cryptic.lua#L457-L459)
- [scripts/settings/buff/archetype_buff_templates/cryptic_buff_templates.lua — L2560-L2579](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/cryptic_buff_templates.lua#L2560-L2579)
- [scripts/settings/ability/archetype_talents/talents/cryptic_talents.lua — L2003-L2017](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/cryptic_talents.lua#L2003-L2017)
- [scripts/ui/views/talent_builder_view/layouts/cryptic_tree.lua — L1936-L1961](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/ui/views/talent_builder_view/layouts/cryptic_tree.lua#L1936-L1961)

## Example assumptions and limits

- **Trigger**: Activating your Combat Ability restores 20% of each recipient's own maximum Toughness to you and allies in Coherency. Using your Blitz does not trigger it.
- **Recovery example**: At your maximum Toughness of 100, you recover `100 × 20% = 20` points. A teammate with maximum Toughness 200 recovers `200 × 20% = 40` points.
- **Counting**: Recovery is per ability activation. Spending 3 Capacitance charges in one activation does not change it to 60%.

The example uses each recipient's own maximum Toughness and isolates the listed recovery fraction. Recovery bonuses and each recipient's Toughness cap still affect the actual amount received.

Mechanisms reuse the fixed-version evidence, with local Build 25606770 English text corresponding to 1.13.1. Actual presentation and behavior remain unobserved in game. Missing details are supplementary explanations.

<a id="original-english-template-and-reconstruction"></a>

## Original English template and reconstruction

Steam Build `25606770`; `content/localization/ui`, resource hash `63564edcb7c3c5ee`; language `en` (code `0`).

- Name key `loc_talent_cryptic_coherency_toughness_on_ability`, hash `9e27f37f`, entry 10205: **Voltaic Restoration**.
- Description key `loc_talent_cryptic_coherency_toughness_on_ability_desc`, hash `5c2bb368`, entry 5978.

Full raw template:

~~~text
Restore {toughness:%s} Toughness to you and Allies in Coherency on Ability Use.
~~~

| Placeholder | Value | Formatting |
|---|---|---|
| `toughness` | `0.2` → `20%` | Percentage; no added prefix. |

The display mapping is `cryptic_talents.lua` L2011-L2016. The value reuses the verified settings above.

Static reconstruction; not an observed game screen:

~~~text
Restore 20% Toughness to you and Allies in Coherency on Ability Use.
~~~

## English comparison

The English correctly states 20% Toughness recovery for the player and allies in Coherency on ability use. It does not explicitly promise recovery from every ability category or per charge spent. Combat Ability eligibility, each recipient's maximum-Toughness basis and once-per-activation counting are supplements. No explicit English contradiction was found.

## Icon source

[Original image](https://gameslantern.com/storage/sites/darktide/exporter/talents/cryptic/default/cryptic_coherency_toughness_on_ability.webp) | [Media-Assets Issue](https://github.com/SyuanTsai/Media-Assets/issues/13#issuecomment-5935653628) | [Existing attachment](https://github.com/user-attachments/assets/bb7b86c4-512f-495f-a82a-7011cae498d6). The icon identifies the talent; it is not mechanism evidence.
