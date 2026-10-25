# Electro-Strike Conduit: source evidence

[繁體中文](../cryptic_melee_crits_electrocute_first.md) | [Player description](README.md#cryptic_melee_crits_electrocute_first) | [Technical index](SOURCE_INDEX.md) | [English comparison](LOCALIZATION_COMPARISON.md#cryptic_melee_crits_electrocute_first)

Release 1.13.1; fixed SHA `7e662fcda16219d775b84af50322be2e9cd9d62e`. Talent `cryptic_melee_crits_electrocute_first`; name key `loc_talent_cryptic_melee_crits_electrocute_first`; description key `loc_talent_cryptic_melee_crits_electrocute_first_desc`. Node `node_b15d80d0-fe7e-4552-a519-65dc496b9157`; category Talent; one point. Mechanisms and examples reuse verified source evidence; no in-game test was performed.

## Source-confirmed behavior and static derivation

- The trigger combines `on_crit_melee` and `on_first_target_melee_hit`.
- A target that is alive and has a `buff_system` receives `cryptic_electrocution_default`. That buff has a 3-second duration, a maximum of 1 stack and duration refresh.

## Fixed source evidence

- [scripts/settings/buff/weapon_buff_templates.lua — L2619-L2674](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/weapon_buff_templates.lua#L2619-L2674)
- [scripts/settings/buff/archetype_buff_templates/cryptic_buff_templates.lua — L2456-L2474](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/cryptic_buff_templates.lua#L2456-L2474)
- [scripts/settings/ability/archetype_talents/talents/cryptic_talents.lua — L1947-L1956](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/cryptic_talents.lua#L1947-L1956)
- [scripts/ui/views/talent_builder_view/layouts/cryptic_tree.lua — L1374-L1403](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/ui/views/talent_builder_view/layouts/cryptic_tree.lua#L1374-L1403)

## Example assumptions and limits

- **Trigger**: A melee Critical Hit applies Electrocution to the first target of that swing. The target must still be alive after the hit.
- **Electrocution**: The status lasts 3 seconds, and applying it again refreshes the duration. Cleaving through 5 enemies in one swing does not Electrocute all 5.
- **Exception**: There is no additional trigger cooldown. Whether an enemy can be kept under continuous control still depends on its own resistances.

The Electrocution duration and trigger do not guarantee uninterrupted control against every enemy. Enemy resistances still apply; no in-game control test was performed.

Mechanisms reuse the fixed-version evidence, with local Build 25606770 English text corresponding to 1.13.1. Actual presentation and behavior remain unobserved in game. Missing details are supplementary explanations.

<a id="original-english-template-and-reconstruction"></a>

## Original English template and reconstruction

Steam Build `25606770`; `content/localization/ui`, resource hash `63564edcb7c3c5ee`; language `en` (code `0`).

- Name key `loc_talent_cryptic_melee_crits_electrocute_first`, hash `0ba02e89`, entry 745: **Electro-Strike Conduit**.
- Description key `loc_talent_cryptic_melee_crits_electrocute_first_desc`, hash `3fc35e67`, entry 4146.

Full raw template:

~~~text
Melee Critical hits Electrocute the first target hit.
~~~

| Placeholder | Value | Formatting |
|---|---|---|
| None | Literal template | No display placeholders. |

This template is literal; no source read for display values was needed.

Static reconstruction; not an observed game screen:

~~~text
Melee Critical hits Electrocute the first target hit.
~~~

## English comparison

The English correctly specifies melee Critical Hits and the first target hit. It does not claim that every cleaved target is Electrocuted. Target survival and the Buff system requirement, the 3-second refresh, lack of an additional trigger cooldown and resistance limits are supplements. No explicit English contradiction was found.

## Icon source

[Original image](https://gameslantern.com/storage/sites/darktide/exporter/talents/cryptic/default/cryptic_melee_crits_electrocute_first.webp) | [Media-Assets Issue](https://github.com/SyuanTsai/Media-Assets/issues/13#issuecomment-5935653628) | [Existing attachment](https://github.com/user-attachments/assets/a754db43-e82a-44d0-af91-ea8d874d8c3c). The icon identifies the talent; it is not mechanism evidence.
