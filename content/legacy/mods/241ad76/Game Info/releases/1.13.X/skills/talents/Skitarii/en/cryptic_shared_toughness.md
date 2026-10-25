# Power Overflow: source evidence

[繁體中文](../cryptic_shared_toughness.md) | [Player description](README.md#cryptic_shared_toughness) | [Technical index](SOURCE_INDEX.md) | [English comparison](LOCALIZATION_COMPARISON.md#cryptic_shared_toughness)

Release 1.13.1; fixed SHA `7e662fcda16219d775b84af50322be2e9cd9d62e`. Talent `cryptic_shared_toughness`; name key `loc_talent_cryptic_shared_toughness`; description key `loc_talent_cryptic_shared_toughness_desc`. Node `node_942817f8-a5de-4c69-9f24-bd1865adea98`; category Talent; one point. Mechanisms and examples reuse verified source evidence; no in-game test was performed.

## Source-confirmed behavior and static derivation

- `on_toughness_replenished` requires `reason != shared`, a positive wanted amount, `actual_recovered_amount == 0` and `current_percent >= 1`. It calls `replenish_flat(false, shared)` with `params.amount × 0.25` for every `coherency_unit` other than the player.
- The source `wanted_amount` has already received the player's recovery bonuses. Each recipient's flat recovery then applies that recipient's bonuses. This does not share arbitrary overflow left after partially filling the player's Toughness.

## Fixed source evidence

- [scripts/extension_systems/toughness/player_unit_toughness_extension.lua — L253-L285](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/toughness/player_unit_toughness_extension.lua#L253-L285)
- [scripts/extension_systems/toughness/player_unit_toughness_extension.lua — L295-L322](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/toughness/player_unit_toughness_extension.lua#L295-L322)
- [scripts/settings/talent/talent_settings_cryptic.lua — L494-L496](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/talent/talent_settings_cryptic.lua#L494-L496)
- [scripts/settings/buff/archetype_buff_templates/cryptic_buff_templates.lua — L2767-L2799](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/cryptic_buff_templates.lua#L2767-L2799)
- [scripts/settings/ability/archetype_talents/talents/cryptic_talents.lua — L2118-L2132](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/cryptic_talents.lua#L2118-L2132)
- [scripts/ui/views/talent_builder_view/layouts/cryptic_tree.lua — L757-L782](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/ui/views/talent_builder_view/layouts/cryptic_tree.lua#L757-L782)

## Example assumptions and limits

- **Trigger**: If your Toughness was **already full**, and the next recovery event restores **nothing to you**, each teammate in Coherency separately receives **25% of that event's intended recovery**.
- **Example**: While you are full, an effect that would restore 20 points gives each teammate `20 × 25% = 5` points. Three teammates can receive 15 points in total; the 5 points are not divided among them.
- **Exceptions**: If you are missing 2 points and receive a 20-point recovery, the 18-point overflow is not shared. Recovery received through sharing cannot be passed on again. Each teammate's recovery bonuses and maximum Toughness still apply.

- The example starts with the player full and an intended recovery of 20 points, giving each teammate 5 points and three teammates 15 in total.
- The intended source amount includes the player's recovery bonuses; recipients apply their own recovery bonuses to the flat shared amount and are capped at their own maximum.
- Partially filling the player does not trigger sharing, and recovery with the `shared` reason cannot be shared again. The English each explicitly supports per-recipient recovery; these restrictions supplement the wording. Actual presentation and behavior remain unobserved in game.

Mechanisms reuse the fixed-version evidence, with local Build 25606770 English text corresponding to 1.13.1. Actual presentation and behavior remain unobserved in game. Missing details are supplementary explanations.

<a id="original-english-template-and-reconstruction"></a>

## Original English template and reconstruction

Steam Build `25606770`; `content/localization/ui`, resource hash `63564edcb7c3c5ee`; language `en` (code `0`).

- Name key `loc_talent_cryptic_shared_toughness`, hash `43bec6ab`, entry 4382: **Power Overflow**.
- Description key `loc_talent_cryptic_shared_toughness_desc`, hash `0f1a34d2`, entry 986.

Full raw template:

~~~text
When at full Toughness, {toughness_share:%s} of excess Toughness Replenished is distributed to each Ally in Coherency.
~~~

| Placeholder | Value | Formatting |
|---|---|---|
| `toughness_share` | 25% | `percentage`: verified `talent_settings.cryptic_shared_toughness.toughness_replenish_percent = 0.25`; no prefix |

The display mapping in `cryptic_talents.lua` L2126–L2131 uses the already verified sharing fraction.

Static reconstruction; not an observed game screen:

~~~text
When at full Toughness, 25% of excess Toughness Replenished is distributed to each Ally in Coherency.
~~~

## English comparison

The English requires full Toughness, states 25%, and explicitly says each Ally in Coherency, matching a separate amount for each recipient. It does not promise sharing the leftover amount from a recovery that first fills a deficit. The exact zero-actual-recovery check, positive intended amount, shared-reason exclusion and recovery-modifier stages are supplementary details. No explicit English contradiction was identified.

## Icon source

[Original image](https://gameslantern.com/storage/sites/darktide/exporter/talents/cryptic/default/cryptic_shared_toughness.webp) | [Media-Assets Issue](https://github.com/SyuanTsai/Media-Assets/issues/13#issuecomment-5935653628) | [Existing attachment](https://github.com/user-attachments/assets/dbeb2660-6b6d-4b09-b33a-bd21aef50f59). The icon identifies the talent; it is not mechanism evidence.
