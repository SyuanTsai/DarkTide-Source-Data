# Adrenaline Assassin: source evidence

[繁體中文](../broker_keystone_adrenaline_junkie_sub_1.md) | [Player description](README.md#broker_keystone_adrenaline_junkie_sub_1) | [Technical index](SOURCE_INDEX.md) | [English comparison](LOCALIZATION_COMPARISON.md#broker_keystone_adrenaline_junkie_sub_1)

Release 1.13.1; fixed SHA `7e662fcda16219d775b84af50322be2e9cd9d62e`. Talent `broker_keystone_adrenaline_junkie_sub_1`; name key `loc_talent_broker_keystone_adrenaline_junkie_sub_1`; description key `loc_talent_broker_keystone_adrenaline_junkie_sub_1_desc`. Node `node_ec8f7ffd-0a53-4d62-b0a7-d1c1e5254bcd`; category Keystone; one point. Mechanisms and examples reuse verified source evidence; no in-game test was performed.

## Source-confirmed behavior and static derivation

- The upgrade enables the special rule `broker_keystone_adrenaline_junkie_no_regular_stacks`, replacing the ordinary `regular_grant = 1` with `sub_1_regular_grant = 0`.
- On a Weakspot hit, the proc sets `stacks_to_grant = regular_grant + sub_1_weakspot_additional_grant = 1 + 2 = 3`. Afterwards, regardless of Weakspot status, `params.is_critical_strike` adds `crit_grant = 1`. Thus a Critical Weakspot hit gives 3 + 1 = 4, and a non-Weakspot Critical hit gives 0 + 1 = 1. A non-Weakspot non-Critical hit gives 0; a non-Critical Weakspot hit gives 1 + 2 = 3.
- This upgrade only changes the conditions for gaining Adrenaline stacks. Frenzy triggered at 30 stacks retains the core effects. Only Melee hits pass this keystone's hit check; Ranged Weakspot hits do not.

## Fixed source evidence

- [scripts/settings/ability/archetype_talents/talents/broker_talents.lua — L2698-L2727](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/broker_talents.lua#L2698-L2727)
- [scripts/settings/talent/talent_settings_broker.lua — L464-L480](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/talent/talent_settings_broker.lua#L464-L480)
- [scripts/settings/buff/archetype_buff_templates/broker_buff_templates.lua — L3600-L3627](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/broker_buff_templates.lua#L3600-L3627)
- [scripts/settings/buff/archetype_buff_templates/broker_buff_templates.lua — L3630-L3660](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/broker_buff_templates.lua#L3630-L3660)
- [scripts/settings/buff/helper_functions/check_proc_functions.lua — L336-L370](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/helper_functions/check_proc_functions.lua#L336-L370)
- [scripts/settings/buff/archetype_buff_templates/broker_buff_templates.lua — L3686-L3698](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/broker_buff_templates.lua#L3686-L3698)
- [scripts/settings/ability/archetype_talents/talents/broker_talents.lua — L2698-L2727](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/broker_talents.lua#L2698-L2727)
- [scripts/ui/views/talent_builder_view/layouts/broker_tree.lua — L1788-L1810](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/ui/views/talent_builder_view/layouts/broker_tree.lua#L1788-L1810)

## Example assumptions and limits

- **Weakspot hits:** a Weakspot Melee hit gives the original 1 stack plus 2 additional stacks, for 3 total.

- **Ordinary hits:** a non-Weakspot Melee hit gives no regular stack. The Critical check still runs independently, so a non-Weakspot Critical Melee hit still grants 1 additional stack.

- **Critical Weakspot hit:** the Weakspot hit's 3 stacks plus the additional Critical stack give 4 total, still subject to the core 30-stack cap and stack-timing rules.

The 30-stack cap can make the actual number gained smaller than the calculated amount for one hit, and stacks cannot exceed that cap. Critical bonus handling remains independent of removal of the regular non-Weakspot grant; core timing and Frenzy effects remain in place. Mechanisms reuse the fixed-version evidence, with local Build 25606770 English text corresponding to 1.13.1. Actual presentation and behavior remain unobserved in game. Missing details are supplementary explanations.

<a id="original-english-template-and-reconstruction"></a>

## Original English template and reconstruction

Steam Build `25606770`; `content/localization/ui`, resource hash `63564edcb7c3c5ee`; language `en` (code `0`).

- Name key `loc_talent_broker_keystone_adrenaline_junkie_sub_1`, hash `f9457720`, entry 16186: **Adrenaline Assassin**.
- Description key `loc_talent_broker_keystone_adrenaline_junkie_sub_1_desc`, hash `02bab200`, entry 170.

Full raw template:

~~~text
Weakspot Hits now grants {stacks:%s} additional stack of {adrenaline:%s}. Regular Melee Hits grants none.
~~~

| Placeholder | Value | Formatting |
|---|---|---|
| `stacks` | `broker_keystone_adrenaline_junkie.sub_1_weakspot_additional_grant = 2` | Number with explicit `+` prefix → `+2` |
| `adrenaline` | `loc_term_glossary_adrenaline` | Localized string → `Adrenaline` (hash `c4f3b84d`, entry 12704) |

Display mapping: [broker_talents.lua L2702–2718](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/broker_talents.lua#L2702-L2718). Values and the retained independent Critical grant reuse accepted evidence.

Static reconstruction; not an observed game screen:

~~~text
Weakspot Hits now grants +2 additional stack of Adrenaline. Regular Melee Hits grants none.
~~~

## English comparison

English says Weakspot hits grant 2 additional stacks and regular Melee hits grant none. This matches the extra Weakspot grant and removal of the regular non-Weakspot grant. It does not say the core Critical bonus is removed; that independent bonus remains, producing the accepted 0/1/3/4 cases. Melee-only scope, cap and inherited timing are supplementary conditions.

## Icon source

[Original image](https://gameslantern.com/storage/sites/darktide/exporter/talents/broker/keystone_modifier/broker_keystone_adrenaline_junkie_sub_1.webp) | [Media-Assets Issue](https://github.com/SyuanTsai/Media-Assets/issues/12#issuecomment-5933978534) | [Existing attachment](https://github.com/user-attachments/assets/f2c76ddc-b60e-49ee-9e7c-1d94981a7448). The icon identifies the talent; it is not mechanism evidence.
