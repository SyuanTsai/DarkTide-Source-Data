# Ammo Stash: source evidence

[繁體中文](../ogryn_increased_ammo_reserve.md) | [Player description](README.md#ogryn_increased_ammo_reserve) | [Technical index](SOURCE_INDEX.md) | [English comparison](LOCALIZATION_COMPARISON.md#ogryn_increased_ammo_reserve)

Release 1.13.1; fixed SHA `7e662fcda16219d775b84af50322be2e9cd9d62e`. Talent `ogryn_increased_ammo_reserve`; name key `loc_talent_ogryn_increased_ammo`; description key `loc_talent_ogryn_increased_ammo_desc`. Node `node_2b77018d-399b-4b87-bc1b-141e27a53e6a`; category Talent; one point. Mechanisms and examples reuse verified source evidence; no in-game test was performed.

## Source-confirmed behavior and static derivation

- `ammo_reserve_capacity=0.25`. Weapon updates calculate the maximum as `floor(base_max_ammo × capacity_modifier)`. Magazine capacity uses a separate `clip_size_modifier`.

## Fixed source evidence

- [scripts/settings/buff/archetype_buff_templates/ogryn_buff_templates.lua — L1959-L1965](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/ogryn_buff_templates.lua#L1959-L1965)
- [scripts/settings/talent/talent_settings_ogryn.lua — L214-L216](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/talent/talent_settings_ogryn.lua#L214-L216)
- [scripts/extension_systems/weapon/player_unit_weapon_extension.lua — L1405-L1443](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/weapon/player_unit_weapon_extension.lua#L1405-L1443)
- [scripts/settings/ability/archetype_talents/talents/ogryn_talents.lua — L1135-L1151](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/ogryn_talents.lua#L1135-L1151)
- [scripts/ui/views/talent_builder_view/layouts/ogryn_tree.lua — L486-L514](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/ui/views/talent_builder_view/layouts/ogryn_tree.lua#L486-L514)

## Example assumptions and limits

- **Effect**: Increase the weapon's maximum ammo reserve by 25%. This does not increase magazine capacity.

- **Capacity example**: A base maximum reserve of 200 becomes `200 × (1 + 25%) = 250` rounds. For a base maximum of 101, `101 × 1.25 = 126.25`, rounded down to 126 rounds.

- **Calculation**: Add other reserve-capacity bonuses at the same stage. Replenishment based on a percentage of maximum ammo reserve also uses the increased maximum.

Mechanisms reuse the fixed-version evidence, with local Build 25606770 English text corresponding to 1.13.1. Actual presentation and behavior remain unobserved in game. Missing details are supplementary explanations.

<a id="original-english-template-and-reconstruction"></a>

## Original English template and reconstruction

Steam Build `25606770`; `content/localization/ui`, resource hash `63564edcb7c3c5ee`; language `en` (code `0`).

- Name key `loc_talent_ogryn_increased_ammo`, hash `4d649644`, entry 5032: **Ammo Stash**.
- Description key `loc_talent_ogryn_increased_ammo_desc`, hash `1a862478`, entry 1731.

Full raw template:

~~~text
Increase your ammo reserve by {max_ammo:%s}.
~~~

| Placeholder | Value | Formatting |
|---|---|---|
| max_ammo | passive_3.increased_max_ammo = 0.25 | Percentage with explicit + prefix → +25% |

Only the missing display mapping in the cited talent definition, lines 1135–1151, was read. Accepted values, mechanisms and common formatting were reused.

Static reconstruction; not an observed game screen:

~~~text
Increase your ammo reserve by +25%.
~~~

## English comparison

The independently read English names the ammo reserve and a +25% increase, matching the accepted reserve-capacity stat. It makes no magazine-capacity claim. Integer rounding, same-stage addition and replenishment based on the increased reserve maximum supplement the text. No explicit English contradiction is established.

## Icon source

[Original image](https://gameslantern.com/storage/sites/darktide/exporter/talents/ogryn/default/ogryn_increased_ammo_reserve.webp) | [Media-Assets Issue](https://github.com/SyuanTsai/Media-Assets/issues/10#issuecomment-5931394406) | [Existing attachment](https://github.com/user-attachments/assets/fab49cb9-e155-47d2-8b8c-2ad8235a0f48). The icon identifies the talent; it is not mechanism evidence.
