# Malocator: source evidence

[繁體中文](../adamant_execution_order_cdr.md) | [Player description](README.md#adamant_execution_order_cdr) | [Technical index](SOURCE_INDEX.md) | [English comparison](LOCALIZATION_COMPARISON.md#adamant_execution_order_cdr)

Release 1.13.1; fixed SHA `7e662fcda16219d775b84af50322be2e9cd9d62e`. Talent `adamant_execution_order_cdr`; node `node_dbdb2b08-b8ce-4dc5-88c9-139f0486b54c`; category Keystone; one point.

## Source-confirmed behavior and static derivation

- The Marked Kill proc adds `adamant_execution_order_cdr` according to the selected special rule. Its duration uses `execution_order.time = 8`. The settings also contain `cdr_time = 3`, but this template does not read that field.
- The server-side timer calls `restore_ability_resource(combat_ability, 0.5)` approximately once per second. Arbites Combat Abilities naturally gain 1 resource per second; `resource_cost_per_charge` is set in cooldown seconds. The restore method clamps resource to its maximum.

## Fixed source evidence

- [scripts/settings/ability/archetype_talents/talents/adamant_talents.lua — L2239-L2276](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/adamant_talents.lua#L2239-L2276)
- [scripts/settings/talent/talent_settings_adamant.lua — L102-L119](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/talent/talent_settings_adamant.lua#L102-L119)
- [scripts/settings/buff/archetype_buff_templates/adamant_buff_templates.lua — L958-L977](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/adamant_buff_templates.lua#L958-L977)
- [scripts/settings/buff/archetype_buff_templates/adamant_buff_templates.lua — L1150-L1183](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/adamant_buff_templates.lua#L1150-L1183)
- [scripts/settings/ability/player_abilities/abilities/adamant_abilities.lua — L7-L24](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/player_abilities/abilities/adamant_abilities.lua#L7-L24)
- [scripts/extension_systems/ability/player_unit_ability_extension.lua — L1127-L1179](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/ability/player_unit_ability_extension.lua#L1127-L1179)
- [scripts/settings/ability/archetype_talents/talents/adamant_talents.lua — L2257-L2276](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/adamant_talents.lua#L2257-L2276)
- [scripts/ui/views/talent_builder_view/layouts/adamant_tree.lua — L1752-L1777](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/ui/views/talent_builder_view/layouts/adamant_tree.lua#L1752-L1777)

## Example assumptions and limits

- **Trigger and duration**: You or your Cyber-Mastiff killing a Marked target grants 8s of additional cooldown regeneration.

- **Cooldown example**: Restore an additional 0.5s of Combat Ability cooldown each second, nominally 4s over 8s. Starting with 20s remaining, after 8s and eight restoration ticks the remainder is 20 − 8 − 8 × 0.5 = 8s. Restoration is limited to the unregenerated cooldown; expiry update order may result in one fewer tick. Retriggering refreshes the duration without increasing the restoration rate.

After a Marked Kill, nominal additional restoration is 8 × 0.5 = 4s. If only 1.2s are missing, restoration cannot exceed that 1.2s and fills the resource.

Restoration follows the per-second timer. Actual tick count depends on expiry update order; 4s is a nominal upper total and remains subject to the resource clamp.

Values and behavior reuse fixed-version evidence; examples are static derivations. Chinese, English and code evidence all refer to 1.13.1. Game execution and the final game UI were not observed. Wording differences are compared with the accepted implementation evidence; omitted details are not automatically translation errors.

<a id="original-english-template-and-reconstruction"></a>

## Original English template and reconstruction

Steam Build `25606770`; `content/localization/ui`, resource hash `63564edcb7c3c5ee`; language `en` (code `0`).

- Name key `loc_talent_adamant_exterminator_ability_cooldown`, hash `c0ecae0e`, entry 12431: **Malocator**.
- Description key `loc_talent_execution_order_cdr_on_kill_description`, hash `1cb35d28`, entry 1868. The `[Writer]` suffix is resource metadata.

Full raw template:

```text
{regen:%s} Cooldown Regeneration for {time:%s}s after Marked Kill.
```

The display maps `regen` and `time` to the corresponding `talent_settings.execution_order` values below. Values and shared formatting reuse the accepted evidence.

| Placeholder | Value | Formatting |
|---|---|---|
| regen | cdr = 0.5 | Percentage with + prefix → +50% |
| time | 8 | Number → 8; template adds s |

Static reconstruction; not an observed game screen:

```text
+50% Cooldown Regeneration for 8s after Marked Kill.
```

## English comparison limits

The independently read English matches the Marked Kill trigger, +50% Cooldown Regeneration and 8s duration. The unused 3s setting, timer behavior, nominal examples, resource clamp and refresh behavior are supplementary. No explicit English contradiction is established for this talent. Mechanisms, citations, shared formatting and icon provenance reuse the existing evidence.

## Icon source

[Original image](https://gameslantern.com/storage/sites/darktide/exporter/talents/adamant/keystone_modifier/adamant_execution_order_cdr.webp) | [Media-Assets Issue](https://github.com/SyuanTsai/Media-Assets/issues/11#issuecomment-5932554216) | [Existing attachment](https://github.com/user-attachments/assets/83df9392-fcfa-43e9-b9e0-ceef6f50ade7). The icon identifies the talent; it is not mechanism evidence.
