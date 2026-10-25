# Extra Pouches: source evidence

[繁體中文](../broker_passive_increased_blitz_ammo.md) | [Player description](README.md#broker_passive_increased_blitz_ammo) | [Technical index](SOURCE_INDEX.md) | [English comparison](LOCALIZATION_COMPARISON.md#broker_passive_increased_blitz_ammo)

Release 1.13.1; fixed SHA `7e662fcda16219d775b84af50322be2e9cd9d62e`. Talent `broker_passive_increased_blitz_ammo`; name key `loc_talent_broker_passive_increased_blitz_ammo`; description key `loc_talent_broker_passive_increased_blitz_ammo_desc`. Node `node_38569366-6b83-4815-a1e7-ca4f41f4a366`; category Talent; one point. Mechanisms and examples reuse verified source evidence; no in-game test was performed.

## Source-confirmed behavior and static derivation

- `extra_max_amount_of_grenades = 1`. The Broker's grenade/missile-launcher abilities add this stat Buff to `max_charges`.

## Fixed source evidence

- [scripts/settings/ability/player_abilities/abilities/broker_abilities.lua — L211-L269](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/player_abilities/abilities/broker_abilities.lua#L211-L269)
- [scripts/settings/buff/archetype_buff_templates/broker_buff_templates.lua — L2311-L2317](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/broker_buff_templates.lua#L2311-L2317)
- [scripts/settings/ability/archetype_talents/talents/broker_talents.lua — L1897-L1919](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/broker_talents.lua#L1897-L1919)
- [scripts/ui/views/talent_builder_view/layouts/broker_tree.lua — L1252-L1278](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/ui/views/talent_builder_view/layouts/broker_tree.lua#L1252-L1278)

## Example assumptions and limits

- **Capacity example**: A starting capacity of 3 Blitz uses becomes 3 + 1 = 4; a starting capacity of 2 becomes 3.

- **Scope**: Increases carrying capacity. It does not automatically regenerate one charge after each use.

Mechanisms reuse the fixed-version evidence, with local Build 25606770 English text corresponding to 1.13.1. Actual presentation and behavior remain unobserved in game. Missing details are supplementary explanations.

<a id="original-english-template-and-reconstruction"></a>

## Original English template and reconstruction

Steam Build `25606770`; `content/localization/ui`, resource hash `63564edcb7c3c5ee`; language `en` (code `0`).

- Name key `loc_talent_broker_passive_increased_blitz_ammo`, hash `a26229aa`, entry 10491: **Extra Pouches**.
- Description key `loc_talent_broker_passive_increased_blitz_ammo_desc`, hash `0e811057`, entry 956.

Full raw template:

~~~text
{ammo:%s} Blitz Charges.
~~~

| Placeholder | Value | Formatting |
|---|---|---|
| `{ammo:%s}` | `extra_max_amount_of_grenades = 1` | Buff lookup; `number`, `+` prefix → `+1` |

The existing display map at `broker_talents.lua` L1897-L1919 reads the verified `extra_max_amount_of_grenades` value from `broker_passive_increased_blitz_ammo`. Reused number formatting with the explicit prefix gives +1.

Static reconstruction; not an observed game screen:

~~~text
+1 Blitz Charges.
~~~

## English comparison

The English's +1 Blitz Charges matches the increase in maximum charges. The capacity calculation and distinction from automatic regeneration supplement the short description.

## Icon source

[Original image](https://gameslantern.com/storage/sites/darktide/exporter/talents/broker/default/broker_passive_increased_blitz_ammo.webp) | [Media-Assets Issue](https://github.com/SyuanTsai/Media-Assets/issues/12#issuecomment-5933987866) | [Existing attachment](https://github.com/user-attachments/assets/88f63a37-5b06-4bf2-93a5-95c9f3c98c48). The icon identifies the talent; it is not mechanism evidence.
