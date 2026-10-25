# Focus Target!: source evidence

[繁體中文](../veteran_improved_tag.md) | [Player description](README.md#veteran_improved_tag) | [Technical index](SOURCE_INDEX.md) | [Original English comparison](LOCALIZATION_COMPARISON.md#veteran_improved_tag)

## Identity and mechanism

- Release 1.13.1, fixed SHA `7e662fcda16219d775b84af50322be2e9cd9d62e`. One-point Keystone `veteran_improved_tag`; provides the improved-tag passive and special rule. [One-point Keystone](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/ui/views/talent_builder_view/layouts/veteran_tree.lua#L1913-L1946); [Keystone and display values](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/veteran_talents.lua#L2978-L3020).
- Exact English name key `loc_talent_veteran_improved_tag`, hash `91015968`: **Focus Target!**. Description key `loc_talent_veteran_improved_tag_description`, hash `88d879aa`.
- Original English: Steam Build `25606770`, extracted 2026-10-02, resource `content/localization/ui`, resource hash `63564edcb7c3c5ee`, locale `en` (code `0`). UI JSONL SHA-256: `fb54bb69880e08b3a6e1c359bd970ed2416748bf5513d45c4b8a39c545e8c668`.

- Stored stacks and applied target stacks are separate values. Storage starts at 1 and gains 1 every 1.5 seconds, normally up to 4; the optional stack-limit modifier raises storage to 6. Only this owner's enemy_over_here_veteran tag event is accepted. [Base and modifier stack limits](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/talent/talent_settings_veteran.lua#L40-L45); [Storage, tag events and death rewards](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/veteran_buff_templates.lua#L3212-L3335); [Owner tag event](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/smart_tag/smart_tag_extension.lua#L205-L217).
- A tag refreshes remove_t to t+25. For the same target, the extra application is stored stacks minus currently applied stacks. If this is zero or negative, the handler returns before resetting storage: the target retains its stacks and storage stays unchanged. If positive, it adds only the difference and resets storage to 1. Switching targets removes the old external debuffs, applies the current full stored count to the new target and resets storage to 1. [Same-target early return and conditional storage reset](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/veteran_buff_templates.lua#L3236-L3285).
- Gaining stored stacks naturally does not update the already tagged target; another qualifying tag is needed. At expiry, this owner's target debuffs and outlined target reference are removed. [Stack accumulation, expiry and target application](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/veteran_buff_templates.lua#L3368-L3418).
- Each target debuff stack multiplies damage_taken_multiplier by 1.05, with a debuff-template maximum of 6. N applied stacks give 1.05^N, not 1+0.05N. This is a target damage-taken stage and benefits attacks from the owner and allies. [Target damage-taken debuff](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/veteran_buff_templates.lua#L3479-L3486); [Multiplicative damage-taken stat](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/buff_settings.lua#L775-L775); [Buff stat aggregation](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/buff/buffs/buff.lua#L404-L410); [Stacked stat calculation](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/buff/buffs/buff.lua#L689-L747); [Target damage-taken stage](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/attack/damage_calculation.lua#L587-L614).
- If the currently outlined enemy dies before expiry, the reward handler does not require the owner to land the kill. After handling rewards, storage becomes max(current storage,2). Death after this mark has expired does not grant its marked-target death reward. [Storage, tag events and death rewards](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/veteran_buff_templates.lua#L3212-L3335); [Stack accumulation, expiry and target application](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/veteran_buff_templates.lua#L3368-L3418).

## Damage and tag-state examples

Assume one tagging Veteran, the base 4-stack storage limit, a valid target and server updates applying the listed states. The damage example uses an otherwise 100-point result at the target damage-taken stage, with other target multipliers equal to 1. Times are theoretical; these are static calculations, not gameplay measurements.

| Assumptions | Substitution and result | Player meaning |
|---|---|---|
| 4 applied stacks; otherwise 100 damage | `100 × 1.05^4 = 121.550625 damage`, about `121.55`; gain `21.550625%`. | Each stack multiplies the target damage; four stacks give about 21.55% more damage. |
| Storage starts at 1 and reaches base cap 4 | `(4 − 1) × 1.5 = 4.5 seconds`. | Three stack-gain intervals are needed; actual update timing may be slightly later. |
| Same target has 2 applied stacks; storage is 4 | Additional application `4 − 2 = 2 stacks`; target becomes `4`; storage resets to `1`. | The re-tag upgrades the target to four stacks rather than adding four onto its existing two. |
| Same target has 2 applied stacks; storage is 1 | Difference `1 − 2 = −1`, so no stacks are added; target stays `2`, storage stays `1`. | Only the 25-second timer refreshes; the existing target debuff is not weakened. |
| Same target has 4 applied stacks; storage is 3 | Difference `3 − 4 = −1`; target stays `4`, storage stays `3` rather than resetting to `1`. | This re-tag refreshes the timer without consuming or resetting the stored stacks. |
| Currently marked target dies before expiry | From storage 1: `max(1,2)=2`; from storage 3: `max(3,2)=3`. | Storage reaches at least two stacks and any higher stored amount is preserved, without requiring the owner's killing blow. |

## Original English template and reconstruction

Full raw template, hash `88d879aa`:

```text
Gain Focus Target every {time:%s}s (Stacks {max_stacks:%s} times).

Tagging an Enemy applies the Focus Target stacks to them, causing them to take {damage:%s} additional Damage for each stack, and resets your Focus Target stacks to 1.
```

| Parameter | Definition and formatting | Reconstructed value |
|---|---|---|
| `time` | stack_time=1.5; number formatting with one decimal place; template supplies s | `1.5` |
| `max_stacks` | Base talent setting max_stacks=4; number formatting | `4` |
| `damage` | Look up damage_taken_multiplier=1.05; custom (value − 1)×100 gives 5 before % suffix, with + prefix; no second ×100 | `+5%` |

[Keystone and display values](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/veteran_talents.lua#L2978-L3020); [Base and modifier stack limits](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/talent/talent_settings_veteran.lua#L40-L45); [Target damage-taken debuff](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/veteran_buff_templates.lua#L3479-L3486); [Percentage and number formatting](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/ui/views/talent_builder_view/utilities/talent_layout_parser.lua#L379-L425); [Custom outer value manipulation](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/ui/views/talent_builder_view/utilities/talent_layout_parser.lua#L613-L651).

Static plain-text reconstruction:

```text
Gain Focus Target every 1.5s (Stacks 4 times).

Tagging an Enemy applies the Focus Target stacks to them, causing them to take +5% additional Damage for each stack, and resets your Focus Target stacks to 1.
```

Runtime color markup is excluded; this is not an observed game screen. The stack interval, base cap and per-stack damage increase agree with the reconstructed English. Its unqualified reset-to-1 claim contradicts same-target re-tags that add no stacks: those return before the reset and preserve storage. Initial storage, multiplicative compounding, same-target difference application, target replacement, expiry/refresh, lack of automatic target updates and the marked-target death floor are omitted.

## Limits

The examples use one owner and the base 4-stack limit; the optional modifier is separate. The 1.5-second stack gain and 25-second expiry are handled by server updates, so observed timing may be slightly later. Multiple Veterans tagging one enemy, shared debuff limits/removal order and gameplay damage/UI outcomes were not measured.

## Icon source

[Original image](https://gameslantern.com/storage/sites/darktide/exporter/talents/veteran/keystone/veteran_improved_tag.webp) | [Media-Assets Issue](https://github.com/SyuanTsai/Media-Assets/issues/6#issuecomment-5922929234) | [Issue attachment](https://github.com/user-attachments/assets/85048589-7642-40e7-9d4b-ab325da2ea25)

The icon identifies the talent; it is not mechanism evidence.
