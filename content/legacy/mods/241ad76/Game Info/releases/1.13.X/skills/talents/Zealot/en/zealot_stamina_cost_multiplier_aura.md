# Zealous: source evidence

[繁體中文](../zealot_stamina_cost_multiplier_aura.md) | [Player description](README.md#zealot_stamina_cost_multiplier_aura) | [Technical index](SOURCE_INDEX.md) | [English comparison](LOCALIZATION_COMPARISON.md#zealot_stamina_cost_multiplier_aura)

Release 1.13.1; fixed SHA `7e662fcda16219d775b84af50322be2e9cd9d62e`. Talent `zealot_stamina_cost_multiplier_aura`; name key `loc_talent_zealot_stamina_cost_multiplier_aura`; description key `loc_talent_zealot_stamina_cost_multiplier_delay_aura_description`. Node `node_a943bfdb-5117-4252-a3bb-ecaf704d5b9d`; category Aura; one point. Mechanisms and examples reuse verified source evidence; no in-game test was performed.

## Source-confirmed behavior and static derivation

- Talent `format_values` displays the **0.85** `stamina_cost_multiplier` as a percentage reduction and the absolute `stamina_delay` value as seconds. The Aura settings are **0.85** and **−0.15**.
- The Buff applies these through `stat_buffs.stamina_cost_multiplier` and `stat_buffs.stamina_regeneration_delay`; `max_stacks` reads Zealot `coop_2.max_stacks`, which is **1**.
- The Coherency selector deduplicates Auras by `coherency_id` and prefers smaller priority numbers. This Aura uses `zealot_stamina_cost_multiplier_aura`, `priority = 1`; the daisy-chain includes the holder.
- Template `related_talents` points to `zealot_toughness_damage_reduction_coherency_improved`. The Tactical Overlay matches either `buff_template_name` or `related_talents` and stops on the first match. If Benediction is encountered first, it could display that title or description. This is a display-metadata question; it does not change this template's Stamina stat buffs.
- A recipient with `prevent_coherency_buffs_from_other_players` only receives Auras from that same player's source. This recipient-side exception is not granted by any of the three Zealot Aura definitions here.
- `Stamina.drain` and `drain_pecentage` multiply expenditure by `stamina_cost_multiplier`. `Stamina.update` adds the delay stat to `regeneration_delay`, then waits for that delay before recovering at the per-second rate.
- The Tactical Overlay's Buff-name/`related_talents` lookup thus retains a possible Benediction display mismatch. No UI test was performed; this is not a confirmed Aura-effect error.

## Fixed source evidence

- [scripts/settings/ability/archetype_talents/talents/zealot_talents.lua — L860-L883](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/zealot_talents.lua#L860-L883)
- [scripts/settings/talent/talent_settings_zealot.lua — L99-L102](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/talent/talent_settings_zealot.lua#L99-L102)
- [scripts/settings/talent/talent_settings_zealot.lua — L319-L328](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/talent/talent_settings_zealot.lua#L319-L328)
- [scripts/settings/buff/archetype_buff_templates/zealot_buff_templates.lua — L3408-L3425](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/zealot_buff_templates.lua#L3408-L3425)
- [scripts/extension_systems/coherency/coherency_system.lua — L188-L195](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/coherency/coherency_system.lua#L188-L195)
- [scripts/extension_systems/coherency/unit_coherency_extension.lua — L256-L311](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/coherency/unit_coherency_extension.lua#L256-L311)
- [scripts/ui/hud/elements/tactical_overlay/hud_element_tactical_overlay.lua — L393-L449](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/ui/hud/elements/tactical_overlay/hud_element_tactical_overlay.lua#L393-L449)
- [scripts/utilities/attack/stamina.lua — L14-L60](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/attack/stamina.lua#L14-L60)
- [scripts/utilities/attack/stamina.lua — L121-L148](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/attack/stamina.lua#L121-L148)
- [scripts/settings/ability/archetype_talents/talents/zealot_talents.lua — L860-L883](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/zealot_talents.lua#L860-L883)
- [scripts/ui/views/talent_builder_view/layouts/zealot_tree.lua — L1450-L1476](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/ui/views/talent_builder_view/layouts/zealot_tree.lua#L1450-L1476)

## Example assumptions and limits

- **Effect**: You and allies in Coherency spend **15% less Stamina** and have **0.15 seconds** less Stamina recovery delay.
- **Cost example**: An action normally costing **20** Stamina costs `20 × (1 − 15%) = 17`. The cost falls by 15%; it is not 15% of the original cost.
- **Recovery example**: If recovery normally starts **0.50 seconds** after expenditure stops, it now starts after `0.50 − 0.15 = 0.35 seconds`. The recovery rate per second itself does not increase.
- **Duplicate sources**: Multiple allies providing Zealous still apply the effect once; they do not reduce Stamina cost by **30%**.

- Isolating only the **0.85** multiplier gives `20 × 0.85 = 17` Stamina cost.
- An original **0.50-second** delay plus **−0.15** gives **0.35 seconds**.
- These Stamina examples exclude other equipment and talents. A paused-regeneration state can still prevent recovery.
- The `related_talents` mismatch is retained as a technical question, not a confirmed player-visible error.
- Build **25606770**, description hash **`2b5c13bc`**: Chinese says Stamina cost “becomes” the substituted value, while English uses signed “Stamina Cost.” The fixed mapping reconstructs **−15%**, with cost actually multiplied by **0.85**. The Chinese “becomes” wording remains pending actual Build display confirmation; it is not a completed in-game display erratum.

Mechanisms reuse the fixed-version evidence, with local Build 25606770 English text corresponding to 1.13.1. Actual presentation and behavior remain unobserved in game. Missing details are supplementary explanations.

<a id="original-english-template-and-reconstruction"></a>

## Original English template and reconstruction

Steam Build `25606770`; `content/localization/ui`, resource hash `63564edcb7c3c5ee`; language `en` (code `0`).

- Name key `loc_talent_zealot_stamina_cost_multiplier_aura`, hash `2c4f35ed`, entry 2881: **Zealous**.
- Description key `loc_talent_zealot_stamina_cost_multiplier_delay_aura_description`, hash `2b5c13bc`, entry 2813.

Full raw template:

~~~text
{stamina_cost_multiplier:%s} Stamina Cost and {stamina_delay:%s}s Stamina Regeneration Delay Reduction, for you and Allies in Coherency.
~~~

| Placeholder | Value | Formatting |
|---|---|---|
| `{stamina_cost_multiplier:%s}` | `0.85` → `round((1 − 0.85) × 100) = 15` → `−15%` | Percentage manipulation supplies display number; explicit - prefix |
| `{stamina_delay:%s}` | `abs(−0.15)` → `0.15` | Number; template supplies s |

The missing display mapping was read only in `zealot_talents.lua` L860-L883. Reuse the known formatter behavior: `value_manipulation` supplies the display number directly, without a second multiplication by 100. The template supplies the delay-reduction wording.

Static reconstruction; not an observed game screen:

~~~text
-15% Stamina Cost and 0.15s Stamina Regeneration Delay Reduction, for you and Allies in Coherency.
~~~

## English comparison

Independently read, “-15% Stamina Cost” denotes a 15% reduction, not a cost of 15% of the original. “0.15s ... Delay Reduction” correctly describes an additive shortening of the delay, rather than a higher recovery rate. The recipients match the self-inclusive Coherency chain. Duplicate-source selection, recipient exceptions, pause conditions and the potential Tactical Overlay metadata mismatch are supplements. No explicit English contradiction is established; the Chinese “becomes” display wording remains separately pending.

## Icon source

[Original image](https://gameslantern.com/storage/sites/darktide/exporter/talents/zealot/aura/zealot_stamina_cost_multiplier_aura.webp) | [Media-Assets Issue](https://github.com/SyuanTsai/Media-Assets/issues/8#issuecomment-5929289315) | [Existing attachment](https://github.com/user-attachments/assets/9e356573-f707-473e-8a64-943ae670aeeb). The icon identifies the talent; it is not mechanism evidence.
