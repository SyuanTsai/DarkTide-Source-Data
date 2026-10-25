# Voltaic Arcs: source evidence

[繁體中文](../cryptic_discharge_generates_arcs.md) | [Player description](README.md#cryptic_discharge_generates_arcs) | [Technical index](SOURCE_INDEX.md) | [English comparison](LOCALIZATION_COMPARISON.md#cryptic_discharge_generates_arcs)

Release 1.13.1; fixed SHA `7e662fcda16219d775b84af50322be2e9cd9d62e`. Talent `cryptic_discharge_generates_arcs`; name key `loc_talent_cryptic_discharge_arc_bonus`; description key `loc_talent_cryptic_discharge_arc_bonus_desc`. Node `node_76d47f27-b1fe-4614-a013-9cdcfb6ac12b`; category Ability; one point. Mechanisms and examples reuse verified source evidence; no in-game test was performed.

## Source-confirmed behavior and static derivation

- The talent special rule calls `_trigger_arcs_in_front` when `ActionCrypticDischarge` activates. It multiplies the number of full charges consumed by that use by one arc per charge, with a template cap of 5 arcs.
- Each initial target must be alive, not `untargetable`, belong to the enemy faction and lie in front of the caster, with a flattened-direction dot product >0.5. The broadphase query radius is 12m. Arcs are created in broadphase-result order until the cap is reached.
- Each root uses a chain lightning effect with a 12m radius, at most one child target per step and a maximum of 4 links. Targets receive a short Electrocution buff. The link damage profile has attack power 0; Impact and subsequent Electrocution damage still depend on the damage profile and enemy conditions. Each arc cannot be converted into a fixed amount of Health damage.

## Fixed source evidence

- [scripts/settings/ability/archetype_talents/talents/cryptic_talents.lua — L222-L239](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/cryptic_talents.lua#L222-L239)
- [scripts/settings/talent/talent_settings_cryptic.lua — L90-L96](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/talent/talent_settings_cryptic.lua#L90-L96)
- [scripts/extension_systems/ability/actions/action_cryptic_discharge.lua — L89-L143](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/ability/actions/action_cryptic_discharge.lua#L89-L143)
- [scripts/extension_systems/ability/actions/action_cryptic_discharge.lua — L143-L188](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/ability/actions/action_cryptic_discharge.lua#L143-L188)
- [scripts/settings/fx/effect_templates/arc_chain_lightning_source/discharge_ability_arc_chain_lightning_source.lua — L16-L47](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/fx/effect_templates/arc_chain_lightning_source/discharge_ability_arc_chain_lightning_source.lua#L16-L47)
- [scripts/settings/fx/effect_templates/arc_chain_lightning_source/discharge_ability_arc_chain_lightning_source.lua — L100-L144](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/fx/effect_templates/arc_chain_lightning_source/discharge_ability_arc_chain_lightning_source.lua#L100-L144)
- [scripts/settings/buff/weapon_buff_templates.lua — L2752-L2798](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/weapon_buff_templates.lua#L2752-L2798)
- [scripts/settings/damage/damage_profiles/demolitions_damage_profile_templates.lua — L1820-L1822](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/damage/damage_profiles/demolitions_damage_profile_templates.lua#L1820-L1822)
- [scripts/settings/ability/archetype_talents/talents/cryptic_talents.lua — L222-L240](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/cryptic_talents.lua#L222-L240)
- [scripts/ui/views/talent_builder_view/layouts/cryptic_tree.lua — L1032-L1054](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/ui/views/talent_builder_view/layouts/cryptic_tree.lua#L1032-L1054)

## Example assumptions and limits

- **Trigger**: Using Voltaic Emitter releases one forward arc per full charge of Capacitance consumed. Consuming 3 charges releases 3 arcs.
- **Range**: Initial targets must be alive and within 12m in front of you. Each arc can continue to nearby valid targets for at most 4 links, dealing Electrocution damage and Impact.
- **Exceptions**: With insufficient nearby targets, fewer arcs or links occur. Damage still depends on armour and attack resolution; the arc count is not a Health-damage value.

- Arc count is based on the charges consumed, with a template maximum of 5. A normal Voltaic Emitter use consumes at most 3 charges, so it normally generates at most 3 arcs. Actual link-target count is limited by available nearby enemies and link validation.
- Damage is calculated separately for each target and damage stage. The source supplies no single total damage amount applicable to every enemy.

Mechanisms reuse the fixed-version evidence, with local Build 25606770 English text corresponding to 1.13.1. Actual presentation and behavior remain unobserved in game. Missing details are supplementary explanations.

<a id="original-english-template-and-reconstruction"></a>

## Original English template and reconstruction

Steam Build `25606770`; `content/localization/ui`, resource hash `63564edcb7c3c5ee`; language `en` (code `0`).

- Name key `loc_talent_cryptic_discharge_arc_bonus`, hash `c021d976`, entry 12387: **Voltaic Arcs**.
- Description key `loc_talent_cryptic_discharge_arc_bonus_desc`, hash `b7638357`, entry 11831.

Full raw template:

~~~text
When using {ability_name:%s}, you release {num_arcs:%s} forward-facing Arcs per Charge spent. Each deals high damage and Impact.
~~~

| Placeholder | Value | Formatting |
|---|---|---|
| `{ability_name:%s}` | Voltaic Emitter | `loc_string`; `loc_talent_cryptic_discharge` |
| `{num_arcs:%s}` | 1 | `number` |

The minimally read display map is `cryptic_talents.lua` L222-L240. `ability_name` refers to `loc_talent_cryptic_discharge` (hash `0c5b9c4a`, English entry 793). `num_arcs` uses the verified `discharge_ability.cryptic_discharge_arc_bonus.num_arcs_per_charge_used` value of 1.

Static reconstruction; not an observed game screen:

~~~text
When using Voltaic Emitter, you release 1 forward-facing Arcs per Charge spent. Each deals high damage and Impact.
~~~

## English comparison

The English trigger, forward direction and one arc per charge agree with the accepted evidence. “High damage” is qualitative: it establishes no fixed Health-damage amount. The zero attack power of the link profile does not by itself contradict the description, because subsequent Electrocution damage is also part of the accepted mechanism. Target validity, range, cap and chaining limits are supplementary details.

## Icon source

[Original image](https://gameslantern.com/storage/sites/darktide/exporter/talents/cryptic/ability_modifier/cryptic_discharge_generates_arcs.webp) | [Media-Assets Issue](https://github.com/SyuanTsai/Media-Assets/issues/13#issuecomment-5935640756) | [Existing attachment](https://github.com/user-attachments/assets/9d074da8-541c-4fec-bc2b-47e53be42bad). The icon identifies the talent; it is not mechanism evidence.
