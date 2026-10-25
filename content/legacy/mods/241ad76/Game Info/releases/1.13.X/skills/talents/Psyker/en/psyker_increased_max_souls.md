# Warp Battery: source evidence

[繁體中文](../psyker_increased_max_souls.md) | [Player description](README.md#psyker_increased_max_souls) | [Technical index](SOURCE_INDEX.md) | [English comparison](LOCALIZATION_COMPARISON.md#psyker_increased_max_souls)

Release 1.13.1; fixed SHA `7e662fcda16219d775b84af50322be2e9cd9d62e`. Talent `psyker_increased_max_souls`; name key `loc_talent_psyker_increased_souls`; description key `loc_talent_psyker_increased_souls_desc`. Node `node_0eee06a4-3acd-4b44-ae64-61376c34b3da`; category Keystone; one point. Mechanisms and examples reuse verified source evidence; no in-game test was performed.

## Source-confirmed behavior and static derivation

- At initialization, the special rule replaces the available soul buff with the `max_stacks = 6` version. `talent_resource.max_resource` is already fixed at six, so raising the cap does not dilute the +4% Damage per stack. Duration and consumption checks reuse the original soul functions.

## Fixed source evidence

- [scripts/settings/talent/talent_settings_psyker.lua — L241-L243](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/talent/talent_settings_psyker.lua#L241-L243)
- [scripts/settings/buff/archetype_buff_templates/psyker_buff_templates.lua — L98-L121](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/psyker_buff_templates.lua#L98-L121)
- [scripts/settings/buff/archetype_buff_templates/psyker_buff_templates.lua — L322-L361](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/psyker_buff_templates.lua#L322-L361)
- [scripts/settings/buff/archetype_buff_templates/psyker_buff_templates.lua — L1528-L1548](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/psyker_buff_templates.lua#L1528-L1548)
- [scripts/settings/ability/archetype_talents/talents/psyker_talents.lua — L1676-L1691](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/psyker_talents.lua#L1676-L1691)
- [scripts/ui/views/talent_builder_view/layouts/psyker_tree.lua — L1598-L1624](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/ui/views/talent_builder_view/layouts/psyker_tree.lua#L1598-L1624)

## Example assumptions and limits

- **How it works:** Warp Charge storage increases from four to six stacks. Damage and cooldown effects per stack remain unchanged.

- **Damage example:** Six stacks give `6 × 4% = 24%` Damage. Without other bonuses, `100 × 1.24 = 124`. This is eight more than 116 at the original four-stack cap.

- **Cooldown example:** Six stacks restore `6 × 7.5% = 45%` of one ability charge's cooldown; for a 30-second cooldown, this restores 13.5 seconds of progress.

The examples assume no other modifiers and have not been verified in game. Mechanisms reuse the fixed-version evidence, with local Build 25606770 English text corresponding to 1.13.1. Actual presentation and behavior remain unobserved in game. Missing details are supplementary explanations.

<a id="original-english-template-and-reconstruction"></a>

## Original English template and reconstruction

Steam Build `25606770`; `content/localization/ui`, resource hash `63564edcb7c3c5ee`; language `en` (code `0`).

- Name key `loc_talent_psyker_increased_souls`, hash `a643d61c`, entry 10706: **Warp Battery**.
- Description key `loc_talent_psyker_increased_souls_desc`, hash `e69bf6d1`, entry 14968.

Full raw template:

~~~text
Can store up to {soul_amount:%s} Warp Charges.
~~~

| Placeholder | Value | Formatting |
|---|---|---|
| `soul_amount` | 6 | Number. |

The existing mapping in `scripts/settings/ability/archetype_talents/talents/psyker_talents.lua` L1681-L1686 supplies `soul_amount` from `max_souls_talent`. Accepted value and common number formatting are reused.

Static reconstruction; not an observed game screen:

~~~text
Can store up to 6 Warp Charges.
~~~

## English comparison

The English explicitly sets storage at up to six Warp Charges, agreeing with the accepted buff variant. It does not change per-charge Damage, cooldown restoration, duration or consumption. The fixed six-resource denominator and resulting examples supplement the cap statement; no explicit English contradiction is identified.

## Icon source

[Original image](https://gameslantern.com/storage/sites/darktide/exporter/talents/psyker/keystone_modifier/psyker_increased_max_souls.webp) | [Media-Assets Issue](https://github.com/SyuanTsai/Media-Assets/issues/7#issuecomment-5928034845) | [Existing attachment](https://github.com/user-attachments/assets/47c3ad89-c6a0-4c8c-a452-b8af3e859043). The icon identifies the talent; it is not mechanism evidence.
