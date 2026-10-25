# Pickpocket: source evidence

[繁體中文](../broker_passive_low_ammo_regen.md) | [Player description](README.md#broker_passive_low_ammo_regen) | [Technical index](SOURCE_INDEX.md) | [English comparison](LOCALIZATION_COMPARISON.md#broker_passive_low_ammo_regen)

Release 1.13.1; fixed SHA `7e662fcda16219d775b84af50322be2e9cd9d62e`. Talent `broker_passive_low_ammo_regen`; name key `loc_talent_broker_passive_low_ammo_regen`; description key `loc_talent_broker_passive_low_ammo_regen_desc_04`. Node `node_21d23a99-f022-4bb4-831a-e2c1da111e98`; category Talent; one point. Mechanisms and examples reuse verified source evidence; no in-game test was performed.

## Source-confirmed behavior and static derivation

- Only runs when `max_reserve > 0`. If `current < floor(max × 0.2)`, add `floor(max × 0.2) − current`, with a minimum refill of 1. It does not grant a fixed 20% of maximum reserve on every Kill.

## Fixed source evidence

- [scripts/settings/buff/archetype_buff_templates/broker_buff_templates.lua — L2932-L2963](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/broker_buff_templates.lua#L2932-L2963)
- [scripts/settings/ability/archetype_talents/talents/broker_talents.lua — L2123-L2154](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/broker_talents.lua#L2123-L2154)
- [scripts/ui/views/talent_builder_view/layouts/broker_tree.lua — L1995-L2024](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/ui/views/talent_builder_view/layouts/broker_tree.lua#L1995-L2024)

## Example assumptions and limits

- **Trigger**: Kill an Elite or Specialist with a Melee Attack while Ammo Reserve is below 20% of its maximum, then refill the reserve to that threshold. Ammunition in the clip is excluded from the threshold.

- **Refill example**: With maximum reserve 150, the threshold is ⌊150 × 20%⌋ = 30 rounds. At 8 rounds, gain 22 to reach 30; at 30, nothing triggers. With a maximum of 37, the rounded-down threshold is 7 rounds.

Mechanisms reuse the fixed-version evidence, with local Build 25606770 English text corresponding to 1.13.1. Actual presentation and behavior remain unobserved in game. Missing details are supplementary explanations.

<a id="original-english-template-and-reconstruction"></a>

## Original English template and reconstruction

Steam Build `25606770`; `content/localization/ui`, resource hash `63564edcb7c3c5ee`; language `en` (code `0`).

- Name key `loc_talent_broker_passive_low_ammo_regen`, hash `f774ba92`, entry 16076: **Pickpocket**.
- Description key `loc_talent_broker_passive_low_ammo_regen_desc_04`, hash `aa6ac8e6`, entry 10990.

Full raw template:

~~~text
Killing an Elite or Specialist Enemy with a Melee Attack while Ammo Reserve is below {ammo_threshold:%s} will refill it to {ammo_threshold:%s}.
~~~

| Placeholder | Value | Formatting |
|---|---|---|
| `ammo_threshold` | `ammo_threshold = 0.2` | Percentage: `20%`; used in both places |
| `ammo_return` (unused by this template) | Not needed for reconstruction | The selected description does not contain this placeholder |

The accepted threshold supplies 0.2. The display mapping at `broker_talents.lua` L2123-L2154 reads `ammo_threshold`. It also defines `ammo_return`, but the paired `_desc_04` template does not use it; no unnecessary value is inferred. Reuse the accepted percentage formatting.

Static reconstruction; not an observed game screen:

~~~text
Killing an Elite or Specialist Enemy with a Melee Attack while Ammo Reserve is below 20% will refill it to 20%.
~~~

## English comparison

The English specifies a Melee Kill on an Elite or Specialist, reserve below 20%, and a refill to 20%. Those conditions and the refill target agree with the accepted evidence. Integer flooring, reserve-only counting and the positive-capacity guard supplement the description; no clear contradiction appears.

## Icon source

[Original image](https://gameslantern.com/storage/sites/darktide/exporter/talents/broker/default/broker_passive_low_ammo_regen.webp) | [Media-Assets Issue](https://github.com/SyuanTsai/Media-Assets/issues/12#issuecomment-5933987866) | [Existing attachment](https://github.com/user-attachments/assets/3247cd98-e623-4d24-a821-db3f3a6ee20a). The icon identifies the talent; it is not mechanism evidence.
