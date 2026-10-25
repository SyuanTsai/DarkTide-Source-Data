# Redirect Fire!: source evidence

[繁體中文](../veteran_improved_tag_dead_coherency_bonus.md) | [Player description](README.md#veteran_improved_tag_dead_coherency_bonus) | [Technical index](SOURCE_INDEX.md) | [Original English comparison](LOCALIZATION_COMPARISON.md#veteran_improved_tag_dead_coherency_bonus)

## Identity and mechanism

- Release 1.13.1, fixed SHA `7e662fcda16219d775b84af50322be2e9cd9d62e`. One-point Focus Target modifier `veteran_improved_tag_dead_coherency_bonus`; enables the allied damage-reward rule. [One-point Keystone modifier](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/ui/views/talent_builder_view/layouts/veteran_tree.lua#L1970-L1992); [Modifier and display lookup](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/veteran_talents.lua#L3041-L3074).
- Exact English name key `loc_talent_veteran_improved_tag_dead_coherency_bonus`, hash `16f9e496`: **Redirect Fire!**. Description key `loc_talent_veteran_improved_tag_dead_coherency_bonus_description`, hash `df1f9c55`.
- Original English: Steam Build `25606770`, extracted 2026-10-02, resource `content/localization/ui`, resource hash `63564edcb7c3c5ee`, locale `en` (code `0`). UI JSONL SHA-256: `fb54bb69880e08b3a6e1c359bd970ed2416748bf5513d45c4b8a39c545e8c668`.

- Death of the current marked target grants one allied damage-buff stack per Focus Target stack actually applied to that enemy. No owner-killing-blow restriction is imposed. The in_coherence_units recipient set includes the owner as well as connected Coherency allies, with no owner exclusion in this grant. [Current marked-target death condition](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/veteran_buff_templates.lua#L3286-L3309); [Applied-stack allied damage reward](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/veteran_buff_templates.lua#L3311-L3321); [Coherency recipient units](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/coherency/unit_coherency_extension.lua#L200-L205); [Coherency chain includes its owner](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/coherency/coherency_system.lua#L188-L255).
- The base damage buff has duration=10, max_stacks=4, refresh_duration_on_stack=true and damage=0.025 per stack. With [Focused Fire](veteran_improved_tag_more_damage.md), the copied increased-stacks template has max_stacks=6 and the same per-stack value. [Damage buff and six-stack variant](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/veteran_buff_templates.lua#L3487-L3504).
- A qualifying death adds its applied stack count to an existing buff and resets its start time. Effective stat stacks are capped at the selected maximum; a new lower-stack marked death does not replace a stronger existing buff with that lower count. The duration can refresh even at the effective cap. [Applied-stack allied damage reward](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/veteran_buff_templates.lua#L3311-L3321); [Existing buff stacking and start-time refresh](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/buff/buff_extension_base.lua#L439-L457); [Effective stack cap](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/buff/buffs/buff.lua#L689-L747).
- The damage stat is additive_multiplier: N effective stacks contribute 0.025N, added to other same-stage damage bonuses. For an otherwise 100-point baseline and an existing 0.25 bonus, four stacks give 100×(1+0.25+0.025×4)=135, rather than multiplying the existing 125 by 1.10. [Additive damage stat](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/buff_settings.lua#L763-L763); [Buff stat aggregation](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/buff/buffs/buff.lua#L404-L410); [Effective stack cap](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/buff/buffs/buff.lua#L689-L747); [Damage-stat combination](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/attack/damage_calculation.lua#L232-L242).
- The English grants Damage, so the Chinese damage-reduction translation erratum does not apply. A mark that has expired or been replaced no longer qualifies that previous enemy for a new reward. [Applied-stack allied damage reward](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/veteran_buff_templates.lua#L3311-L3321); [Damage buff and six-stack variant](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/veteran_buff_templates.lua#L3487-L3504); [Mark expiry clears the target](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/veteran_buff_templates.lua#L3383-L3400); [Target replacement](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/veteran_buff_templates.lua#L3236-L3285).

## Additive damage and refresh examples

Assume a valid currently marked enemy dies, the modifier is selected, and the recipient is the owner or a member of the current Coherency chain. Damage examples isolate an otherwise 100-point baseline at the stated damage-stat stage, with other stages unchanged. Repeated-death examples occur before buff expiry and use the base four-stack cap unless Focused Fire is stated. These are static calculations, not gameplay measurements.

| Assumptions | Substitution and result | Player meaning |
|---|---|---|
| 4 effective damage stacks; no other same-stage bonus | Contribution `0.025 × 4 = 0.10`; damage `100 × (1+0.10) = 110 points`. | The isolated buff increases this baseline by 10%. |
| 4 effective stacks; existing same-stage +25% damage | Before `100 × 1.25 = 125 points`; after `100 × (1+0.25+0.10) = 135 points`; relative gain `(135−125)/125 = 8%`. | The new 10-percentage-point contribution produces an 8% gain relative to the already-buffed result. |
| 2 stacks gained at t=0; another qualifying 1-stack marked death at t=6s | Effective count `min(4,2+1)=3`; contribution `0.025×3=0.075`; refreshed theoretical expiry `6+10=16s`. | The second reward accumulates to three stacks and refreshes the full duration rather than replacing it with one stack. |
| Already at base cap 4; qualifying 1-stack marked death at t=8s | Effective count remains `min(4,4+1)=4`; theoretical expiry refreshes to `8+10=18s`. | The bonus remains 10%, while another eligible reward can extend the timer even at the cap. |
| Focused Fire selected; 6 effective damage stacks; no other same-stage bonus | Contribution `0.025×6=0.15`; damage `100×(1+0.15)=115 points`. | The optional six-stack variant permits a 15% isolated damage-stat contribution. |

## Original English template and reconstruction

Full raw template, hash `df1f9c55`:

```text
If an Enemy you have Tagged dies, grant {damage:%s} Damage for each stack of Focus Target applied, to you and Allies in Coherency. Lasts {duration:%s}s.
```

| Parameter | Definition and formatting | Reconstructed value |
|---|---|---|
| `damage` | Read damage=0.025; default percentage conversion ×100 gives 2.5 with one decimal place, % suffix and + prefix | `+2.5%` |
| `duration` | Read base allied-buff duration=10; number formatting; template supplies s | `10` |

[Modifier and display lookup](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/veteran_talents.lua#L3041-L3074); [Damage buff and six-stack variant](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/veteran_buff_templates.lua#L3487-L3504); [Percentage and number formatting](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/ui/views/talent_builder_view/utilities/talent_layout_parser.lua#L379-L425); [Decimal precision](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/ui/views/talent_builder_view/utilities/talent_layout_parser.lua#L354-L377).

Static plain-text reconstruction:

```text
If an Enemy you have Tagged dies, grant +2.5% Damage for each stack of Focus Target applied, to you and Allies in Coherency. Lasts 10s.
```

Runtime color markup is excluded; this is not an observed game screen. The tagged-enemy death trigger, owner and Coherency allies, additive damage direction/per-applied-stack magnitude and 10-second duration agree with the reconstructed English. Same-stage aggregation, accumulation/refresh on repeated deaths, effective caps and current-mark lifetime/replacement are omitted. No explicit English contradiction or supported English erratum is present; the Chinese damage-reduction erratum is not inherited.

## Limits

Examples assume the stated damage stages, effective stack counts, valid current marks and Coherency recipients. Timing examples are theoretical and server-update dependent. The six-stack variant requires Focused Fire. Runtime membership/removal ordering, multiple-owner interactions and gameplay damage/UI outcomes were not measured.

## Icon source

[Original image](https://gameslantern.com/storage/sites/darktide/exporter/talents/veteran/keystone_modifier/veteran_improved_tag_dead_coherency_bonus.webp) | [Media-Assets Issue](https://github.com/SyuanTsai/Media-Assets/issues/6#issuecomment-5922929234) | [Issue attachment](https://github.com/user-attachments/assets/48ecea96-bdaa-49e6-b9b7-ee3ac26fc1c5)

The icon identifies the talent; it is not mechanism evidence.
