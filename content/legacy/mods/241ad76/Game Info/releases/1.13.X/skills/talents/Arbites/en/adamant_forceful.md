# Forceful: source evidence

[繁體中文](../adamant_forceful.md) | [Player description](README.md#adamant_forceful) | [Technical index](SOURCE_INDEX.md) | [English comparison](LOCALIZATION_COMPARISON.md#adamant_forceful)

Release 1.13.1; fixed SHA `7e662fcda16219d775b84af50322be2e9cd9d62e`. Talent `adamant_forceful`; node `node_23717e1a-a7ea-44f6-b168-9bd668cd29a3`; category Keystone; one point.

## Source-confirmed behavior and static derivation

- The stacking proc excludes companion hits and later targets with `target_number > 1`. A hit adds a stack only when `on_staggering_hit` returns true; a block event adds one directly. The stack template has maximum 10 and duration 5s.
- Each stack supplies `impact_modifier = 0.05` and `damage_taken_multiplier = 0.975`. The latter is a `multiplicative_multiplier` in the stat-buff types. `Buff.stat_buff_stacking_count` repeatedly applies it according to `stack_count`; the general damage calculation then multiplies incoming damage by the target's damage-taken multiplier.
- Removal requires `damage > 0` or `damage_absorbed > 0`, with an existing `attack_result` other than `blocked`. It sets `next_allowed_remove_t = t + 0.25`. `wanted_stacks` controls stacks leaving one at a time; the buff ends when the count reaches zero.

## Fixed source evidence

- [scripts/settings/ability/archetype_talents/talents/adamant_talents.lua — L1495-L1530](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/adamant_talents.lua#L1495-L1530)
- [scripts/settings/talent/talent_settings_adamant.lua — L268-L284](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/talent/talent_settings_adamant.lua#L268-L284)
- [scripts/settings/buff/archetype_buff_templates/adamant_buff_templates.lua — L1207-L1415](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/adamant_buff_templates.lua#L1207-L1415)
- [scripts/extension_systems/buff/buffs/buff.lua — L397-L410](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/buff/buffs/buff.lua#L397-L410)
- [scripts/extension_systems/buff/buffs/buff.lua — L689-L727](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/buff/buffs/buff.lua#L689-L727)
- [scripts/settings/buff/buff_settings.lua — L774-L775](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/buff_settings.lua#L774-L775)
- [scripts/utilities/attack/damage_calculation.lua — L587-L615](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/attack/damage_calculation.lua#L587-L615)
- [scripts/extension_systems/buff/buffs/buff.lua — L29-L44](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/buff/buffs/buff.lua#L29-L44)
- [scripts/extension_systems/buff/buff_extension_base.lua — L643-L660](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/buff/buff_extension_base.lua#L643-L660)
- [scripts/settings/ability/archetype_talents/talents/adamant_talents.lua — L1495-L1530](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/adamant_talents.lua#L1495-L1530)
- [scripts/ui/views/talent_builder_view/layouts/adamant_tree.lua — L156-L187](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/ui/views/talent_builder_view/layouts/adamant_tree.lua#L156-L187)

## Example assumptions and limits

- **Gaining stacks and refreshing**: A hit that Staggers its first target, or a successful block, grants one stack, up to 10. Cyber-Mastiff hits do not count. The stacks share a 5s timer, reset when stacks are added or reduced by taking damage.

- **Removal on damage**: A positive damage or Toughness-absorbed damage event removes at most one stack every 0.25s. Blocked events do not remove stacks.

- **Full-stack example**: Each stack grants +5% Impact, totaling +50% at 10 stacks. Each stack has a damage-taken multiplier of 0.975; the shared stacking rule gives `0.975^10 ≈ 0.776`, about 22.4% less than baseline damage. This is multiplicative, rather than a directly added 25% reduction. Base damage of 100 becomes `100 × 0.975¹⁰ ≈ 77.63 damage` at full stacks.

At 10 stacks, the Impact modifier is `10 × 0.05 = +0.50` and the damage-taken multiplier is `0.975^10 ≈ 0.77633`. The multiplicative example isolates Forceful. Other damage modifiers, damage types and additional game multipliers still enter the shared formula. Damage is measured in points and timer/rate limits in seconds. Values and behavior reuse the fixed-version evidence; examples are static derivations. Game execution and the final game UI were not observed. Wording differences are compared against existing implementation evidence without assuming a translation error.

<a id="original-english-template-and-reconstruction"></a>

## Original English template and reconstruction

Steam Build `25606770`; `content/localization/ui`, resource hash `63564edcb7c3c5ee`; language `en` (code `0`).

- Name key `loc_talent_adamant_forceful`, hash `c9c8172f`, entry 13025: **Forceful**.
- Description key `loc_talent_adamant_forceful_base_alt_desc`, hash `bcf0df40`, entry 12178.
- `forceful_name` resolves through the same name key.

Full raw template:

```text
Staggering Hits and Blocked Attacks grant Stacks of {forceful_name:%s}. Lasting {duration:%s}s and stacking {stacks:%s} times. Each stack gives {impact:%s} Impact and {dr:%s} Damage Resistance. Remove stack on damage taken.
```

The display mappings read `talent_settings.forceful`. Impact uses default percentage formatting with a `+` prefix. Damage Resistance uses its explicit manipulation in place of default percentage multiplication, also with a `+` prefix. Duration and stack count use number formatting, and `forceful_name` is a localized-name lookup. Values reuse the accepted evidence.

| Placeholder | Value | Formatting |
|---|---|---|
| forceful_name | Forceful | Localized lookup of the name key |
| duration | 5 | Number → 5; template adds s |
| stacks | 10 | Number → 10 |
| impact | 0.05 | Percentage × 100 with `+` prefix → +5% |
| dr | 0.975 | Explicit (1 − value) × 100 with `+` prefix → +2.5% |

Static reconstruction; not an observed game screen:

```text
Staggering Hits and Blocked Attacks grant Stacks of Forceful. Lasting 5s and stacking 10 times. Each stack gives +5% Impact and +2.5% Damage Resistance. Remove stack on damage taken.
```

## English comparison limits

The independently read English matches the trigger categories, base duration, cap, per-stack stats and general removal condition. Detailed event filters, the 0.25s removal throttle, shared-timer refresh, multiplicative composition and examples are supplementary. The English does not explicitly claim separate per-stack expiry or additive damage resistance. No explicit English contradiction is established for this talent. Mechanisms, citations, shared formatting and icon provenance reuse the existing evidence.

## Icon source

[Original image](https://gameslantern.com/storage/sites/darktide/exporter/talents/adamant/keystone/adamant_forceful.webp) | [Media-Assets Issue](https://github.com/SyuanTsai/Media-Assets/issues/11#issuecomment-5932554216) | [Existing attachment](https://github.com/user-attachments/assets/b838686c-aaa0-49a2-bbea-fc9e074bb6cf). The icon identifies the talent; it is not mechanism evidence.
