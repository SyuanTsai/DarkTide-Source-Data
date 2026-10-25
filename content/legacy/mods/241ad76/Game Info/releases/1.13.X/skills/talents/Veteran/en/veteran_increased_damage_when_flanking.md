# Covert Operative: source evidence

[繁體中文](../veteran_increased_damage_when_flanking.md) | [Player description](README.md#veteran_increased_damage_when_flanking) | [Technical index](SOURCE_INDEX.md) | [Original English comparison](LOCALIZATION_COMPARISON.md#veteran_increased_damage_when_flanking)

## Identity and mechanism

- Release 1.13.1, fixed SHA `7e662fcda16219d775b84af50322be2e9cd9d62e`. One-point passive talent `veteran_increased_damage_when_flanking`; installed buff `veteran_flanking_damage`. Its shared description key is explicitly referenced by this Veteran talent. [One-point talent node](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/ui/views/talent_builder_view/layouts/veteran_tree.lua#L2040-L2066); [Talent and display field](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/veteran_talents.lua#L3113-L3135).
- Exact English name key `loc_talent_veteran_2_tier_1_name_3`, hash `0576e6de`: **Covert Operative**. Description key `loc_talent_zealot_increased_flanking_damage_description`, hash `19928629`.
- Original English: Steam Build `25606770`, extracted 2026-10-02, resource `content/localization/ui`, resource hash `63564edcb7c3c5ee`, locale `en` (code `0`). UI JSONL SHA-256: `fb54bb69880e08b3a6e1c359bd970ed2416748bf5513d45c4b8a39c545e8c668`.

- The buff grants `allow_flanking` and configures `flanking_damage = 0.30`. The display reads the configured flanking value as +30%. [Flanking permission and damage buff](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/veteran_buff_templates.lua#L3512-L3521); [Talent and display field](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/veteran_talents.lua#L3113-L3135).
- AttackPositioning permits this flanking condition only for `attack_type = ranged`. It compares attack direction with target facing: `dot > 0` is the strict rear half-plane, while the exact side boundary (`dot = 0`) and front side fail. Melee attacks do not qualify. [Ranged-only rear-side check](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/attack/attack_positioning.lua#L9-L65).
- Damage calculation adds a separate flanking contribution to the previously calculated damage: `flanking contribution = damage × (effective flanking_damage − 1)`. Isolating this talent gives an effective multiplier of 1.30, so a prior 100-damage result becomes `100 + 100 × (1.30 − 1) = 130`. This is not a contribution to the earlier general `damage_stat_buffs` total. [Separate flanking contribution placement](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/attack/damage_calculation.lua#L88-L101); [Flanking damage contribution](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/attack/damage_calculation.lua#L857-L862).

## Ranged rear-side damage examples

Assume the preceding damage calculation has produced 100 damage, no additional backstab damage or other flanking bonuses, the stated attack type and directional check, and no later modifiers. The direction examples are hypothetical inputs to the established condition, not measured in-game shots. [Ranged-only rear-side check](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/attack/attack_positioning.lua#L9-L65); [Separate flanking contribution placement](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/attack/damage_calculation.lua#L88-L101); [Flanking damage contribution](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/attack/damage_calculation.lua#L857-L862).

| Assumptions | Substitution and result | Player meaning |
|---|---|---|
| Ranged hit; rear-side check passes (`dot > 0`) | `100 + 100 × (1.30 − 1) = 130 damage`. | This isolated hit gains 30 damage after its prior 100-damage calculation. |
| Ranged hit; exact side boundary or front (`dot ≤ 0`) | No contribution from this talent: prior `100 damage` remains `100`. | A shot exactly on the side boundary does not qualify. |
| Melee hit from the rear; no other backstab bonus | No contribution from this talent: prior `100 damage` remains `100`. | Rear position alone is insufficient; this effect is ranged-only. |

## Original English template and reconstruction

Full raw template, hash `19928629`:

```text
{damage:%s} Damage to Ranged Backstab Attacks.
```

| Parameter | Definition and formatting | Reconstructed value |
|---|---|---|
| `damage` | Read `veteran_flanking_damage.stat_buffs.flanking_damage = 0.30`; percentage formatter and `+` prefix | `+30%` |

[Talent and display field](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/veteran_talents.lua#L3113-L3135); [Flanking permission and damage buff](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/veteran_buff_templates.lua#L3512-L3521); [Buff-value lookup](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/ui/views/talent_builder_view/utilities/talent_layout_parser.lua#L467-L499); [Percentage formatting](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/ui/views/talent_builder_view/utilities/talent_layout_parser.lua#L379-L404).

Static plain-text reconstruction:

```text
+30% Damage to Ranged Backstab Attacks.
```

Runtime color markup is excluded; this is not an observed game screen. The 30% value, ranged qualifier and rear-attack context agree with the established effect. Exact directional boundaries and separate damage-contribution placement supplement the text. Sharing a description key with another class does not create an English erratum.

## Limits

Exact in-game directional boundaries, target-facing updates, individual special attack sources, complete damage outcomes and final UI have not been measured. The examples assume the stated attack type, prior damage result and no additional backstab/flanking bonuses.

## Icon source

[Original image](https://gameslantern.com/storage/sites/darktide/exporter/talents/veteran/default/veteran_increased_damage_when_flanking.webp) | [Media-Assets Issue](https://github.com/SyuanTsai/Media-Assets/issues/6#issuecomment-5922929234) | [Issue attachment](https://github.com/user-attachments/assets/e836f77f-9bb2-4b87-938a-3bab63656ff1)

The icon identifies the talent; it is not mechanism evidence.
