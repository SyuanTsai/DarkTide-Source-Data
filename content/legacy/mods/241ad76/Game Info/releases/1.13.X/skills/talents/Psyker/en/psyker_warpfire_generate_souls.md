# In Fire Reborn: source evidence

[繁體中文](../psyker_warpfire_generate_souls.md) | [Player description](README.md#psyker_warpfire_generate_souls) | [Technical index](SOURCE_INDEX.md) | [English comparison](LOCALIZATION_COMPARISON.md#psyker_warpfire_generate_souls)

Release 1.13.1; fixed SHA `7e662fcda16219d775b84af50322be2e9cd9d62e`. Talent `psyker_warpfire_generate_souls`; name key `loc_talent_psyker_warpfire_generates_souls`; description key `loc_talent_psyker_warpfire_generates_souls_desc`. Node `node_97a70547-63e0-473c-9e2f-79096161d4e5`; category Keystone; one point. Mechanisms and examples reuse verified source evidence; no in-game test was performed.

## Source-confirmed behavior and static derivation

- `on_minion_death` has probability 0.1. `check_proc_func` first accepts a `warpfire_burning` marker from any source at death; otherwise, it checks the player's own attacker and `damage_types.warpfire`. There is no Coherency or distance check. A proc adds one charge. The `increased_soul_generation` special rule outside the current tree can separately change this to two and is not a base effect.

## Fixed source evidence

- [scripts/settings/talent/talent_settings_psyker.lua — L257-L259](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/talent/talent_settings_psyker.lua#L257-L259)
- [scripts/settings/buff/archetype_buff_templates/psyker_buff_templates.lua — L2117-L2160](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/psyker_buff_templates.lua#L2117-L2160)
- [scripts/settings/ability/archetype_talents/talents/psyker_talents.lua — L1850-L1872](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/psyker_talents.lua#L1850-L1872)
- [scripts/ui/views/talent_builder_view/layouts/psyker_tree.lua — L1548-L1572](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/ui/views/talent_builder_view/layouts/psyker_tree.lua#L1548-L1572)

## Example assumptions and limits

- **Trigger:** If an enemy still has Soulblaze when it dies, or your Soulblaze deals the killing Damage, there is a 10% chance to gain one Warp Charge. The first condition does not require you to land the last hit.

- **Chance example:** Without truncation at the charge cap, 100 qualifying death events give an expected `100 × 10% = 10` stacks. Actual results depend on random rolls.

- **Selection limit:** Choose either In Fire Reborn or Psychic Vampire.

The example assumes no other modifiers and has not been verified in game. Both Chinese and English refer to killing with Soulblaze; the accepted fixed source also accepts an enemy carrying Soulblaze at death without requiring the player's last hit. This difference in trigger coverage remains pending in-game comparison and is not treated as a Chinese mistranslation. Mechanisms reuse the fixed-version evidence, with local Build 25606770 English text corresponding to 1.13.1. Actual presentation and behavior remain unobserved in game. Missing details are supplementary explanations.

<a id="original-english-template-and-reconstruction"></a>

## Original English template and reconstruction

Steam Build `25606770`; `content/localization/ui`, resource hash `63564edcb7c3c5ee`; language `en` (code `0`).

- Name key `loc_talent_psyker_warpfire_generates_souls`, hash `842629ba`, entry 8596: **In Fire Reborn**.
- Description key `loc_talent_psyker_warpfire_generates_souls_desc`, hash `d52dac75`, entry 13793.

Full raw template:

~~~text
Killing an Enemy with Soulblaze has a {chance:%s} chance to grant you a Warp Charge.
~~~

| Placeholder | Value | Formatting |
|---|---|---|
| `chance` | 0.1 | Percentage: 10%. |

The existing mapping in `scripts/settings/ability/archetype_talents/talents/psyker_talents.lua` L1855-L1867 reads `proc_events.on_minion_death` from `psyker_soul_on_warpfire_kill`. Accepted probability and common formatting are reused.

Static reconstruction; not an observed game screen:

~~~text
Killing an Enemy with Soulblaze has a 10% chance to grant you a Warp Charge.
~~~

## English comparison

The English explicitly gives a 10% chance and one Warp Charge, which match the accepted values. 'Killing an Enemy with Soulblaze' can suggest a killing blow dealt by Soulblaze, but does not clearly define whether 'with Soulblaze' describes the killing Damage or the enemy's status. The accepted trigger also permits a Soulblaze-marked enemy's death without the player's final hit, from any source of the marker. Retain that concrete coverage difference as Cannot confirm, pending in-game comparison, rather than asserting an explicit English exclusion. Charge-cap assumptions, absence of a Coherency/distance check, the separate special rule and exclusive choice with Psychic Vampire are supplements.

## Icon source

[Original image](https://gameslantern.com/storage/sites/darktide/exporter/talents/psyker/keystone_modifier/psyker_warpfire_generate_souls.webp) | [Media-Assets Issue](https://github.com/SyuanTsai/Media-Assets/issues/7#issuecomment-5928024966) | [Existing attachment](https://github.com/user-attachments/assets/f42fce6a-aab7-4622-a8b9-bd171fba4b33). The icon identifies the talent; it is not mechanism evidence.
