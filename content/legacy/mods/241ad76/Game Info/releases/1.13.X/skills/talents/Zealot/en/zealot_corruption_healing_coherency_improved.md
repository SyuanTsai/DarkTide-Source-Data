# Beacon of Purity: source evidence

[繁體中文](../zealot_corruption_healing_coherency_improved.md) | [Player description](README.md#zealot_corruption_healing_coherency_improved) | [Technical index](SOURCE_INDEX.md) | [English comparison](LOCALIZATION_COMPARISON.md#zealot_corruption_healing_coherency_improved)

Release 1.13.1; fixed SHA `7e662fcda16219d775b84af50322be2e9cd9d62e`. Talent `zealot_corruption_healing_coherency_improved`; name key `loc_talent_zealot_corruption_healing_coherency_improved`; description key `loc_talent_zealot_corruption_healing_coherency_improved_desc`. Node `node_69985978-58fd-4215-9404-5ebfe1869483`; category Aura; one point. Mechanisms and examples reuse verified source evidence; no in-game test was performed.

## Source-confirmed behavior and static derivation

- Improved `format_values` reads `talent_settings_3.coop_2.corruption_heal_amount_increased = 1.5` and `interval = 1`. The older base definition not directly on the tree has **0.5**; it is not the current default class Aura, so do not describe the class as inherently removing 0.5 per second.
- The `zealot_corruption_healing_coherency_improved` Buff has `interval = 1`; its server `interval_func` calls `health_extension:reduce_permanent_damage(1.5)`. The base template calls the same method with **0.5**.
- Both templates share a `coherency_id`, with improved `priority = 1` and base `priority = 2`. This Corruption Aura has no explicit `max_stacks` field; the unique-ID Coherency selector chooses one Aura buff.
- `reduce_permanent_damage` takes a fixed amount and limits permanent damage to a floor derived from maximum Health and Wound count, so actual removal may be less than **1.5**.
- A recipient with `prevent_coherency_buffs_from_other_players` only receives Auras from that same player's source in the generic selector. This recipient exception is not granted by any of the three Zealot Aura definitions here.
- At **200 Health**, `max_wounds = 4`, `current_wounds = 3`: `floor = math.floor(200 × (1 − 3/4) + 1) = 51`. Corruption starting at 60 falls by 1.5 each second, stopping at the **51** floor. With all **4 Wounds** intact, floor is **0**.

## Fixed source evidence

- [scripts/settings/ability/archetype_talents/talents/zealot_talents.lua — L828-L859](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/zealot_talents.lua#L828-L859)
- [scripts/settings/talent/talent_settings_zealot.lua — L452-L458](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/talent/talent_settings_zealot.lua#L452-L458)
- [scripts/settings/talent/talent_settings_zealot.lua — L514-L518](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/talent/talent_settings_zealot.lua#L514-L518)
- [scripts/settings/buff/archetype_buff_templates/zealot_buff_templates.lua — L1014-L1090](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/zealot_buff_templates.lua#L1014-L1090)
- [scripts/extension_systems/coherency/coherency_system.lua — L188-L195](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/coherency/coherency_system.lua#L188-L195)
- [scripts/extension_systems/coherency/unit_coherency_extension.lua — L256-L311](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/coherency/unit_coherency_extension.lua#L256-L311)
- [scripts/extension_systems/health/player_unit_health_extension.lua — L270-L286](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/health/player_unit_health_extension.lua#L270-L286)
- [scripts/settings/ability/archetype_talents/talents/zealot_talents.lua — L839-L859](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/zealot_talents.lua#L839-L859)
- [scripts/ui/views/talent_builder_view/layouts/zealot_tree.lua — L514-L539](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/ui/views/talent_builder_view/layouts/zealot_tree.lua#L514-L539)

## Example assumptions and limits

- **Effect**: Every **1 second**, remove **1.5 Corruption points** from you and allies in Coherency. This is a fixed amount, not **1.5%** of maximum Health.
- **Recovery example**: With all Wounds intact and **10 Corruption**, one recovery gives `10 − 1.5 = 8.5`. With no new Corruption, **7** recoveries remove the full 10.
- **Wound limit**: Cannot restore a fully lost Wound. At **200 maximum Health / 4 Wounds**, with one Wound lost and **60 Corruption**, removal stops at **51**; the Aura cannot recover the lost Wound.
- **Duplicate sources**: Multiple allies with the same Aura still remove **1.5 points per second**, rather than 3 or more.

- All Wounds intact, Corruption **10**: `max(0, 10 − 1.5) = 8.5`; on the seventh recovery, `max(0, 1 − 1.5) = 0`.
- With one Wound lost at **200 Health / 4 Wounds**: `60 → 58.5 → 57 → 55.5 → 54 → 52.5 → 51`; further recovery remains **51**.
- `interval = 1 second` is a periodic setting. The first tick's phase or delay after Aura application has not been tested in game.
- “Heal Corruption” does not mean restoring all lost Health. It handles permanent Corruption damage through `reduce_permanent_damage`.
- Examples assume no other Corruption changes; the zero-floor example assumes the Wound floor does not interrupt removal.
- Build **25606770**, description hash **`afc49dc9`**: Chinese removal wording and English “Heal Corruption ... every 1s” have the same direction. Existing evidence establishes fixed-point removal, without a clear Chinese mistranslation. Actual text/runtime presentation remains unobserved.

Mechanisms reuse the fixed-version evidence, with local Build 25606770 English text corresponding to 1.13.1. Actual presentation and behavior remain unobserved in game. Missing details are supplementary explanations.

<a id="original-english-template-and-reconstruction"></a>

## Original English template and reconstruction

Steam Build `25606770`; `content/localization/ui`, resource hash `63564edcb7c3c5ee`; language `en` (code `0`).

- Name key `loc_talent_zealot_corruption_healing_coherency_improved`, hash `f1ac826d`, entry 15696: **Beacon of Purity**.
- Description key `loc_talent_zealot_corruption_healing_coherency_improved_desc`, hash `afc49dc9`, entry 11315.

Full raw template:

~~~text
Heal {corruption:%s} Corruption from the current Wound for you and Allies in Coherency every {interval:%s}s.
~~~

| Placeholder | Value | Formatting |
|---|---|---|
| `{corruption:%s}` | `1.5` → `1.5` | Number |
| `{interval:%s}` | `1` → `1` | Number; the template supplies s |

The missing display mapping was read only in `zealot_talents.lua` L839-L859; both values use number formatting and previously verified settings. No additional runtime source read was needed.

Static reconstruction; not an observed game screen:

~~~text
Heal 1.5 Corruption from the current Wound for you and Allies in Coherency every 1s.
~~~

## English comparison

The English explicitly limits removal to the current Wound, includes you and Coherency allies, and states a fixed 1.5 Corruption every 1s. This agrees with accepted removal and the lost-Wound floor; it does not promise 1.5% Health or recovery of a fully lost Wound. Unique-Aura selection, recipient exception, first-tick uncertainty and the existing floor examples are supplementary. No explicit English contradiction was found, and the Chinese localization direction remains consistent.

## Icon source

[Original image](https://gameslantern.com/storage/sites/darktide/exporter/talents/zealot/aura/zealot_corruption_healing_coherency_improved.webp) | [Media-Assets Issue](https://github.com/SyuanTsai/Media-Assets/issues/8#issuecomment-5929289315) | [Existing attachment](https://github.com/user-attachments/assets/ac37d3b8-a749-4604-98ba-2781c220761f). The icon identifies the talent; it is not mechanism evidence.
