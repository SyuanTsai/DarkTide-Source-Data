# Purloin Providence: source evidence

[繁體中文](../psyker_mark_kills_can_vent.md) | [Player description](README.md#psyker_mark_kills_can_vent) | [Technical index](SOURCE_INDEX.md) | [English comparison](LOCALIZATION_COMPARISON.md#psyker_mark_kills_can_vent)

Release 1.13.1; fixed SHA `7e662fcda16219d775b84af50322be2e9cd9d62e`. Talent `psyker_mark_kills_can_vent`; name key `loc_talent_psyker_mark_kills_can_vent`; description key `loc_talent_psyker_mark_kills_can_vent_description`. Node `node_4941c66a-d4ff-4dca-917f-a6bbf2bbdbfc`; category Keystone; one point. Mechanisms and examples reuse verified source evidence; no in-game test was performed.

## Source-confirmed behavior and static derivation

- `chance_to_vent_proc_chance = 1` and `chance_to_vent_warp_charge_percent = 0.05`. Only a kill of the current Marked target enters `_give_stack_of_unnatural_talent`; it sets `procced`, then the next update applies `decrease_immediate(0.05)`. Multiple events before the same update share the `procced` boolean, so a separate reduction for every event is not guaranteed.

## Fixed source evidence

- [scripts/settings/buff/archetype_buff_templates/psyker_buff_templates.lua — L734-L755](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/psyker_buff_templates.lua#L734-L755)
- [scripts/settings/buff/archetype_buff_templates/psyker_buff_templates.lua — L765-L771](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/psyker_buff_templates.lua#L765-L771)
- [scripts/settings/buff/archetype_buff_templates/psyker_buff_templates.lua — L832-L839](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/psyker_buff_templates.lua#L832-L839)
- [scripts/settings/buff/archetype_buff_templates/psyker_buff_templates.lua — L896-L904](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/psyker_buff_templates.lua#L896-L904)
- [scripts/settings/buff/archetype_buff_templates/psyker_buff_templates.lua — L924-L943](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/psyker_buff_templates.lua#L924-L943)
- [scripts/settings/ability/archetype_talents/talents/psyker_talents.lua — L2185-L2220](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/psyker_talents.lua#L2185-L2220)
- [scripts/ui/views/talent_builder_view/layouts/psyker_tree.lua — L1475-L1497](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/ui/views/talent_builder_view/layouts/psyker_tree.lua#L1475-L1497)

## Example assumptions and limits

- **Trigger:** Personally kill Disrupt Destiny's current Marked Enemy to immediately Quell five percentage points of Peril.

- **Peril example:** At 60% Peril, `60% − 5 percentage points = 55%`. At 3%, Peril falls to 0%.

The example assumes no other modifiers and has not been verified in game. Mechanisms reuse the fixed-version evidence, with local Build 25606770 English text corresponding to 1.13.1. Actual presentation and behavior remain unobserved in game. Missing details are supplementary explanations.

<a id="original-english-template-and-reconstruction"></a>

## Original English template and reconstruction

Steam Build `25606770`; `content/localization/ui`, resource hash `63564edcb7c3c5ee`; language `en` (code `0`).

- Name key `loc_talent_psyker_mark_kills_can_vent`, hash `c9b1ee8e`, entry 13020: **Purloin Providence**.
- Description key `loc_talent_psyker_mark_kills_can_vent_description`, hash `01016112`, entry 62.

Full raw template:

~~~text
Killing Enemies Marked by {talent_name:%s} have a {chance:%s} chance to instantly Quell {warp_charge_percentage:%s} of your Peril.
~~~

| Placeholder | Value | Formatting |
|---|---|---|
| `talent_name` | `loc_talent_psyker_marked_enemies_passive` | Localized string: Disrupt Destiny; hash `6a38907d`, entry 6922. |
| `chance` | 1 | Percentage: 100%. |
| `warp_charge_percentage` | 0.05 | Percentage: 5%. |

The existing mapping in `scripts/settings/ability/archetype_talents/talents/psyker_talents.lua` L2190-L2215 reads `chance_to_vent_proc_chance` and `chance_to_vent_warp_charge_percent` from `psyker_marked_enemies_passive` and localizes `talent_name`. Accepted values, the same-build name and common formatting are reused.

Static reconstruction; not an observed game screen:

~~~text
Killing Enemies Marked by Disrupt Destiny have a 100% chance to instantly Quell 5% of your Peril.
~~~

## English comparison

The English names the Marked-kill trigger, guaranteed chance and immediate Quelling, matching the accepted current-target gain event and 0.05 immediate reduction on the next update. Its percentage is a Peril-gauge change of five percentage points in the accepted evidence; it does not explicitly define a fraction of the current gauge value. The personal/current-target checks, zero floor and shared-flag event coalescing are supplementary details. No explicit English contradiction is identified.

## Icon source

[Original image](https://gameslantern.com/storage/sites/darktide/exporter/talents/psyker/keystone_modifier/psyker_mark_kills_can_vent.webp) | [Media-Assets Issue](https://github.com/SyuanTsai/Media-Assets/issues/7#issuecomment-5928024966) | [Existing attachment](https://github.com/user-attachments/assets/06e543d8-85dd-455b-8ac2-3f9f29b03cf1). The icon identifies the talent; it is not mechanism evidence.
