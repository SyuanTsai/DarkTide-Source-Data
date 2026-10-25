# Heat of Battle: source evidence

[繁體中文](../ogryn_blo_wield_speed.md) | [Player description](README.md#ogryn_blo_wield_speed) | [Technical index](SOURCE_INDEX.md) | [English comparison](LOCALIZATION_COMPARISON.md#ogryn_blo_wield_speed)

Release 1.13.1; fixed SHA `7e662fcda16219d775b84af50322be2e9cd9d62e`. Talent `ogryn_blo_wield_speed`; name key `loc_talent_ogryn_blo_wield_speed`; description key `loc_talent_ogryn_blo_fire_rate_desc`. Node `node_19d2bd1b-f551-494a-afc5-cb511ae26574`; category Keystone; one point. Mechanisms and examples reuse verified source evidence; no in-game test was performed.

## Source-confirmed behavior and static derivation

- The talent's display value is 0.015 per stack. The effect is ranged fire rate and increases with Burst Limiter Override's 10 stacks, reaching 15% at maximum.
- The local inventory identifies this as Heat of Battle, the ranged-fire-rate node, distinct from Just Getting Started! in the melee Heavy Hitter branch.

## Fixed source evidence

- [scripts/settings/ability/archetype_talents/talents/ogryn_talents.lua — L2665-L2684](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/ogryn_talents.lua#L2665-L2684)
- [scripts/settings/talent/talent_settings_ogryn.lua — L203-L210](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/talent/talent_settings_ogryn.lua#L203-L210)
- [scripts/settings/buff/archetype_buff_templates/ogryn_buff_templates.lua — L3579-L3637](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/ogryn_buff_templates.lua#L3579-L3637)
- [scripts/extension_systems/weapon/actions/action_shoot.lua — L1239-L1249](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/weapon/actions/action_shoot.lua#L1239-L1249)
- [scripts/settings/ability/archetype_talents/talents/ogryn_talents.lua — L2665-L2684](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/ogryn_talents.lua#L2665-L2684)
- [scripts/ui/views/talent_builder_view/layouts/ogryn_tree.lua — L1928-L1951](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/ui/views/talent_builder_view/layouts/ogryn_tree.lua#L1928-L1951)

## Example assumptions and limits

- **Prerequisite**: Build Burst Limiter Override stacks through ranged kills. This node follows those stacks; it does not generate stacks or extend their duration by itself. The existing limit is 10 stacks, with duration reset to 10s on each stack addition.

- **Per-stack effect**: Gain 1.5% ranged fire rate per stack, up to 10 stacks.

- **Example**: Six stacks grant 9% ranged fire rate; 10 grant 15%. If the base firing interval is 1s, at full stacks it becomes about 1 ÷ 1.15 = 0.87s.

The effect is ranged fire rate; firing intervals shrink by the inverse attack-speed multiplier. `blo_passive_lerp_value` is a module-shared ratio; interactions when multiple Ogryns are present have not been tested. Mechanisms are verified against the fixed public-source SHA; local Build 25606770 text and the public source correspond to 1.13.1. Actual presentation and behavior remain unobserved in game.

<a id="original-english-template-and-reconstruction"></a>

## Original English template and reconstruction

Steam Build `25606770`; `content/localization/ui`, resource hash `63564edcb7c3c5ee`; language `en` (code `0`).

- Name key `loc_talent_ogryn_blo_wield_speed`, hash `fa4b3c95`, entry 16253: **Heat of Battle**.
- Description key `loc_talent_ogryn_blo_fire_rate_desc`, hash `7290e9ce`, entry 7454. `[Writer]` is export metadata, not displayed text.

Full raw template:

~~~text
{talent_name:%s} also grants {fire_rate:%s} Fire Rate per Stack.
~~~

| Placeholder | Value | Formatting |
|---|---|---|
| talent_name | loc_talent_ogryn_chance_to_not_consume_ammo | Localized string → Burst Limiter Override |
| fire_rate | fire_rate 0.015 | Percentage with + prefix → +1.5% |

Only the missing display map in the cited talent definition, lines 2665–2684, was read. Existing mechanism, numerical and formatter evidence was reused.

Static reconstruction; not an observed game screen:

~~~text
Burst Limiter Override also grants +1.5% Fire Rate per Stack.
~~~

## English comparison

The independently read English gives Burst Limiter Override an additional +1.5% fire rate per stack, agreeing with the accepted ranged effect and value. The ranged-kill prerequisite, parent cap and duration, 9%/15% examples and inverse firing-interval calculation supplement the text. The existing multi-Ogryn shared-state limit is retained. No explicit English contradiction is established.

## Icon source

[Original image](https://gameslantern.com/storage/sites/darktide/exporter/talents/ogryn/keystone_modifier/ogryn_blo_wield_speed.webp) | [Media-Assets Issue](https://github.com/SyuanTsai/Media-Assets/issues/10#issuecomment-5931383354) | [Existing attachment](https://github.com/user-attachments/assets/a9ec95cc-0b91-4558-81b5-faefcf1207d7). The icon identifies the talent; it is not mechanism evidence.
