# Target Down!: source evidence

[繁體中文](../veteran_improved_tag_dead_bonus.md) | [Player description](README.md#veteran_improved_tag_dead_bonus) | [Technical index](SOURCE_INDEX.md) | [Original English comparison](LOCALIZATION_COMPARISON.md#veteran_improved_tag_dead_bonus)

## Identity and mechanism

- Release 1.13.1, fixed SHA `7e662fcda16219d775b84af50322be2e9cd9d62e`. One-point Focus Target modifier `veteran_improved_tag_dead_bonus`; enables the allied defense-reward rule. [One-point Keystone modifier](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/ui/views/talent_builder_view/layouts/veteran_tree.lua#L1947-L1969); [Modifier and display values](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/veteran_talents.lua#L3021-L3040); [Defense-reward special rule](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/veteran_buff_templates.lua#L3350-L3352).
- Exact English name key `loc_talent_veteran_improved_tag_dead_bonus`, hash `76b4ca1d`: **Target Down!**. Description key `loc_talent_veteran_improved_tag_dead_bonus_description`, hash `57da5a14`.
- Original English: Steam Build `25606770`, extracted 2026-10-02, resource `content/localization/ui`, resource hash `63564edcb7c3c5ee`, locale `en` (code `0`). UI JSONL SHA-256: `fb54bb69880e08b3a6e1c359bd970ed2416748bf5513d45c4b8a39c545e8c668`.

- The death event must match the current outlined target. There is no owner-killing-blow requirement. When the defense rule is enabled, reward fraction is stacks_applied×0.05 for both resources; unapplied stored stacks do not contribute. [Marked-target death and resource rewards](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/veteran_buff_templates.lua#L3286-L3309); [Defense-reward special rule](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/veteran_buff_templates.lua#L3350-L3352).
- The reward loop covers in_coherence_units without excluding the owner. The Coherency chain includes that owner as well as connected members, so both the owner and allies in Coherency receive the effect. [Marked-target death and resource rewards](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/veteran_buff_templates.lua#L3286-L3309); [Coherency recipient units](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/coherency/unit_coherency_extension.lua#L200-L205); [Coherency chain includes its owner](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/coherency/coherency_system.lua#L188-L255).
- For each recipient, requested Toughness recovery is 0.05×applied stacks×maximum Toughness. The call passes ignore_stat_buffs=true, bypassing general Toughness-replenishment stat multipliers; the actual grant is limited by the deficit and allowed recovery. Stamina uses the recipient's maximum Stamina and also stops at its maximum. [Marked-target death and resource rewards](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/veteran_buff_templates.lua#L3286-L3309); [Toughness.replenish_percentage](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/toughness/toughness.lua#L16-L24); [Toughness recovery modifiers and deficit limit](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/toughness/player_unit_toughness_extension.lua#L253-L285); [Stamina.add_stamina_percent](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/attack/stamina.lua#L16-L24); [Maximum-Stamina limit](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/attack/stamina.lua#L102-L118).
- Expiry clears the outlined target; replacing it selects a new target and removes the previous mark. A former target's subsequent death is no longer eligible for this marked-target reward. With [Focused Fire](veteran_improved_tag_more_damage.md), six applied stacks give a nominal fraction of 0.30 rather than the base four-stack 0.20. [Mark expiry clears the target](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/veteran_buff_templates.lua#L3383-L3400); [Target replacement](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/veteran_buff_templates.lua#L3236-L3285); [Base and modified stack settings](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/talent/talent_settings_veteran.lua#L40-L45); [Marked-target death and resource rewards](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/veteran_buff_templates.lua#L3286-L3309).

## Applied-stack recovery examples

Assume a qualifying currently marked enemy dies, the modifier is selected, and the recipient is the owner or a member of the current Coherency chain. Recovery is allowed. Unless a row states otherwise, maximum Toughness is 100 points and maximum Stamina is 6 points. Current resource amounts and applied/stored stacks are stated separately; these are static calculations, not gameplay measurements.

| Assumptions | Substitution and result | Player meaning |
|---|---|---|
| 4 applied stacks; current Toughness 50/100 and Stamina 2/6 | Fraction `4 × 0.05 = 0.20`; Toughness `100 × 0.20 = 20 points`, giving `70/100`; Stamina `6 × 0.20 = 1.2 points`, giving `3.2/6`. | Both resources use the recipient's own maximum and restore the full request when the deficit is sufficient. |
| 4 applied stacks; current Toughness 95/100 and Stamina 5.8/6 | Toughness grant `min(20,100−95)=5 points`; Stamina grant `min(1.2,6−5.8)=0.2 points`; results `100/100` and `6/6`. | The same nominal 20% recovery does not overfill either resource. |
| Focused Fire selected; 2 applied stacks; 6 stored but unapplied; sufficient deficits | Fraction `2 × 0.05 = 0.10`; requests `100 × 0.10 = 10 Toughness points` and `6 × 0.10 = 0.6 Stamina points`. | The six stored stacks do not make this a 30% reward; only the two applied to the dead target count. |
| Focused Fire selected; 6 applied stacks; sufficient deficits | Fraction `6 × 0.05 = 0.30`; requests `100 × 0.30 = 30 Toughness points` and `6 × 0.30 = 1.8 Stamina points`. | The separate six-stack modifier permits a larger reward when six stacks were actually applied. |
| 4 applied stacks; maximum Toughness 100; deficit at least 20; illustrative general +25% recovery stat | Requested Toughness `100 × 0.20 = 20 points`; the general modifier is bypassed, so the grant is `20`, not `20 × 1.25 = 25 points`. | This specific reward ignores general Toughness-replenishment stat bonuses. |

## Original English template and reconstruction

Full raw template, hash `57da5a14`:

```text
If an Enemy you have Tagged dies, replenish {toughness:%s} Toughness and {stamina:%s} Stamina for each stack of Focus Target applied, to you and Allies in Coherency.
```

| Parameter | Definition and formatting | Reconstructed value |
|---|---|---|
| `toughness` | Literal 0.05; default percentage conversion ×100, no + prefix | `5%` |
| `stamina` | Literal 0.05; default percentage conversion ×100, no + prefix | `5%` |

[Modifier and display values](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/veteran_talents.lua#L3021-L3040); [Percentage formatting](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/ui/views/talent_builder_view/utilities/talent_layout_parser.lua#L379-L404).

Static plain-text reconstruction:

```text
If an Enemy you have Tagged dies, replenish 5% Toughness and 5% Stamina for each stack of Focus Target applied, to you and Allies in Coherency.
```

Runtime color markup is excluded; this is not an observed game screen. Death of the tagged enemy without an owner-kill requirement, both owner/allied recipients and 5% recovery per applied stack agree with the reconstructed English. Maximum-resource bases, deficit/recovery limits, the general Toughness-stat bypass, expiry/replacement eligibility and the optional six-stack cap are omitted. No explicit English contradiction or supported English erratum is present.

## Limits

Examples assume a valid current mark, qualifying Coherency membership, allowed recovery and the stated resource values. Any six-stack storage/application example requires Focused Fire; the 30% example also requires six stacks actually applied to the enemy. Runtime membership/event ordering, gameplay outcomes and final UI appearance were not measured.

## Icon source

[Original image](https://gameslantern.com/storage/sites/darktide/exporter/talents/veteran/keystone_modifier/veteran_improved_tag_dead_bonus.webp) | [Media-Assets Issue](https://github.com/SyuanTsai/Media-Assets/issues/6#issuecomment-5922929234) | [Issue attachment](https://github.com/user-attachments/assets/47cc6995-f2fa-407d-9cb0-4dd91fcdc10d)

The icon identifies the talent; it is not mechanism evidence.
