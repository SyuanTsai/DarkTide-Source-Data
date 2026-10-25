# Pocket Toxin: source evidence

[繁體中文](../broker_passive_blitz_inflicts_toxin.md) | [Player description](README.md#broker_passive_blitz_inflicts_toxin) | [Technical index](SOURCE_INDEX.md) | [English comparison](LOCALIZATION_COMPARISON.md#broker_passive_blitz_inflicts_toxin)

Release 1.13.1; fixed SHA `7e662fcda16219d775b84af50322be2e9cd9d62e`. Talent `broker_passive_blitz_inflicts_toxin`; name key `loc_talent_broker_passive_blitz_inflicts_toxin`; description key `loc_talent_broker_passive_blitz_inflicts_toxin_desc_02`. Node `node_d45a4b7d-86c8-4c79-aa87-a8294787f0ad`; category Talent; one point. Mechanisms and examples reuse verified source evidence; no in-game test was performed.

## Source-confirmed behavior and static derivation

- Server-side `on_hit` requires `attacking_slot_name = slot_grenade_ability` and `attack_type = explosion`. The special-rule table selects 3/6/10 stacks and adds `neurotoxin_interval_buff3`.
- This passive and the Chem Grenade ground liquid's own Toxin application are separate branches. Ten stacks must not be described as the liquid's application amount per tick.

## Fixed source evidence

- [scripts/settings/buff/weapon_buff_templates.lua — L1493-L1523](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/weapon_buff_templates.lua#L1493-L1523)
- [scripts/extension_systems/buff/buffs/interval_buff.lua — L25-L63](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/buff/buffs/interval_buff.lua#L25-L63)
- [scripts/settings/buff/archetype_buff_templates/broker_buff_templates.lua — L2986-L3033](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/broker_buff_templates.lua#L2986-L3033)
- [scripts/settings/ability/archetype_talents/talents/broker_talents.lua — L2180-L2239](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/broker_talents.lua#L2180-L2239)
- [scripts/ui/views/talent_builder_view/layouts/broker_tree.lua — L1306-L1335](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/ui/views/talent_builder_view/layouts/broker_tree.lua#L1306-L1335)

## Example assumptions and limits

- **Stacks applied**: Blackout's explosion adds 3 stacks, Boom Bringer adds 6, and Chem Grenade adds 10. A Blitz explosion must hit the enemy; this does not apply to every explosion.

- **Stack example**: An enemy with 2 stacks of the same Toxin type hit by an explosion that adds 6 reaches 2 + 6 = 8 stacks. The cap is 30, and reapplication restarts the timer.

- **Damage behavior**: The same Toxin resolves every 0.35s. Eight stacks give input Power 500 × 8 ÷ 30 ≈ 133.33, then the Toxin curve and armour determine Damage.

Mechanisms reuse the fixed-version evidence, with local Build 25606770 English text corresponding to 1.13.1. Actual presentation and behavior remain unobserved in game. Missing details are supplementary explanations.

<a id="original-english-template-and-reconstruction"></a>

## Original English template and reconstruction

Steam Build `25606770`; `content/localization/ui`, resource hash `63564edcb7c3c5ee`; language `en` (code `0`).

- Name key `loc_talent_broker_passive_blitz_inflicts_toxin`, hash `9f79e627`, entry 10295: **Pocket Toxin**.
- Description key `loc_talent_broker_passive_blitz_inflicts_toxin_desc_02`, hash `8757c0f2`, entry 8788.

Full raw template:

~~~text
Blitz explosions infect Enemies with stacks of {toxin:%s} differently, depending on your chosen Blitz.

{blinder:%s}: {blinder_stacks:%s} stacks.
{missile_launcher:%s}: {missile_launcher_stacks:%s} stacks.
{chem_grenade:%s}: {chem_grenade_stacks:%s} stacks.
~~~

| Placeholder | Value | Formatting |
|---|---|---|
| `{toxin:%s}` | `loc_term_glossary_broker_toxin` | `loc_string` → `Chem Toxin` |
| `{blinder:%s}` | `loc_talent_broker_blitz_flash_grenade_improved` | `loc_string` → `Blackout` |
| `{blinder_stacks:%s}` | `stacks_to_add[quick_flash_grenade] = 3` | `number` → `3` |
| `{missile_launcher:%s}` | `loc_talent_broker_blitz_missile_launcher` | `loc_string` → `Boom Bringer` |
| `{missile_launcher_stacks:%s}` | `stacks_to_add[broker_missile_launcher] = 6` | `number` → `6` |
| `{chem_grenade:%s}` | `loc_talent_broker_blitz_tox_grenade` | `loc_string` → `Chem Grenade` |
| `{chem_grenade_stacks:%s}` | `stacks_to_add[tox_grenade] = 10` | `number` → `10` |

The existing display map at `broker_talents.lua` L2180-L2239 selects the verified stack counts by `special_rules` and localizes the three Blitz names. Same-build entries: Blackout hash `3176e093`, entry 3220; Boom Bringer `a29ee6e4`, entry 10506; Chem Grenade `5ecc7244`, entry 6138. Reused Chem Toxin entry: hash `5ea7edc3`, entry 6134. Number formatting is reused.

Static reconstruction; not an observed game screen:

~~~text
Blitz explosions infect Enemies with stacks of Chem Toxin differently, depending on your chosen Blitz.

Blackout: 3 stacks.
Boom Bringer: 6 stacks.
Chem Grenade: 10 stacks.
~~~

## English comparison

The English explicitly names Blitz explosions and distinguishes the chosen Blitz's 3/6/10 stacks, matching the verified slot/type condition and table. It does not attribute ten stacks to each ground-liquid tick. The shared cap, refresh and Power example are supplements.

## Icon source

[Original image](https://gameslantern.com/storage/sites/darktide/exporter/talents/broker/default/broker_passive_blitz_inflicts_toxin.webp) | [Media-Assets Issue](https://github.com/SyuanTsai/Media-Assets/issues/12#issuecomment-5933987866) | [Existing attachment](https://github.com/user-attachments/assets/6125da40-9e12-4107-bb5b-a8aa330a4b89). The icon identifies the talent; it is not mechanism evidence.
