# Bloodlust: source evidence

[繁體中文](../adamant_stance_dog_bloodlust.md) | [Player description](README.md#adamant_stance_dog_bloodlust) | [Technical index](SOURCE_INDEX.md) | [English comparison](LOCALIZATION_COMPARISON.md#adamant_stance_dog_bloodlust)

Release 1.13.1; fixed SHA `7e662fcda16219d775b84af50322be2e9cd9d62e`. Talent `adamant_stance_dog_bloodlust`; node `node_cbd2062a-c53b-47d8-a07c-3868aa343031`; category Ability; one point.

## Source-confirmed behavior and static derivation

- This upgrade triggers on Combat Ability activation and adds a Cyber-Mastiff damage buff lasting the base stance duration, with a +75% value.
- Companion attack damage reads its owner's companion-damage modifier. That modifier joins the damage bonus before the general damage calculation.
- The same stat type aggregates additively, allowing this upgrade to combine with Kill Order's +50% companion-damage modifier.

## Fixed source evidence

- [scripts/settings/ability/archetype_talents/talents/adamant_talents.lua — L256-L275](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/adamant_talents.lua#L256-L275)
- [scripts/settings/talent/talent_settings_adamant.lua — L35-L51](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/talent/talent_settings_adamant.lua#L35-L51)
- [scripts/settings/buff/archetype_buff_templates/adamant_buff_templates.lua — L821-L835](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/adamant_buff_templates.lua#L821-L835)
- [scripts/settings/buff/archetype_buff_templates/adamant_buff_templates.lua — L2531-L2546](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/adamant_buff_templates.lua#L2531-L2546)
- [scripts/settings/buff/buff_settings.lua — L742-L744](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/buff_settings.lua#L742-L744)
- [scripts/utilities/attack/damage_calculation.lua — L265-L276](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/attack/damage_calculation.lua#L265-L276)
- [scripts/settings/talent/talent_settings_adamant.lua — L35-L51](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/talent/talent_settings_adamant.lua#L35-L51)
- [scripts/settings/ability/archetype_talents/talents/adamant_talents.lua — L256-L275](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/adamant_talents.lua#L256-L275)
- [scripts/ui/views/talent_builder_view/layouts/adamant_tree.lua — L1206-L1229](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/ui/views/talent_builder_view/layouts/adamant_tree.lua#L1206-L1229)

## Example assumptions and limits

- **Cyber-Mastiff damage**: Activating Castigator's Stance gives your Cyber-Mastiff +75% Damage for 10s.

- **Damage example**: Isolating this bonus, your Cyber-Mastiff's base direct damage of 100 becomes `100 × (1 + 75%) = 175 damage`. With another same-stage 25% bonus, the result is `100 × (1 + 75% + 25%) = 200 damage`. This companion-damage bonus does not apply to Bleed damage.

With Kill Order active in the same companion-damage stage, `100 × (1 + 75% + 50%) = 225 damage`. These examples apply to the Cyber-Mastiff's non-Bleed damage and exclude target defenses and other damage modifiers. Actual damage still depends on those factors. Values and behavior reuse the fixed-version evidence; examples are static derivations. Game execution and the final game UI were not observed.

<a id="original-english-template-and-reconstruction"></a>

## Original English template and reconstruction

Steam Build `25606770`; `content/localization/ui`, resource hash `63564edcb7c3c5ee`; language `en` (code `0`).

- Name key `loc_talent_adamant_stance_bloodlust`, hash `f426a613`, entry 15856: **Bloodlust**.
- Description key `loc_talent_adamant_stance_bloodlust_desc`, hash `bbba1e4b`, entry 12105.
- Stance-name lookup `loc_talent_adamant_stance_ability_name`, hash `126c5ef0`, entry 1190: **Castigator's Stance**.
- The separate modifier is named **Kill Order**: `loc_talent_adamant_dog_damage_after_ability`, hash `4f3d7eb4`, entry 5154.

Full raw template:

```text
During {stance_name:%s} your Cyber-Mastiff has {damage:%s} Damage.
```

The `damage` mapping reads `talent_settings.combat_ability.stance.companion_damage` with percentage formatting and a `+` prefix. `stance_name` is a localized-name lookup. Values reuse the accepted evidence.

| Placeholder | Value | Formatting |
|---|---|---|
| stance_name | Castigator's Stance | Localized lookup of the stance-name key |
| damage | 0.75 | Percentage × 100 with `+` prefix → +75% |

Static reconstruction; not an observed game screen:

```text
During Castigator's Stance your Cyber-Mastiff has +75% Damage.
```

## English comparison limits

The independently read English matches the stance condition, Cyber-Mastiff beneficiary and numerical bonus. Trigger timing, base duration, the non-Bleed qualification and additive examples are supplementary. No explicit English contradiction is established. Mechanisms, citations, shared formatting and icon provenance reuse the existing evidence.

## Icon source

[Original image](https://gameslantern.com/storage/sites/darktide/exporter/talents/adamant/ability_modifier/adamant_stance_dog_bloodlust.webp) | [Media-Assets Issue](https://github.com/SyuanTsai/Media-Assets/issues/11#issuecomment-5932554216) | [Existing attachment](https://github.com/user-attachments/assets/27a74ed8-eb51-4774-ae8e-2089aa7b1686). The icon identifies the talent; it is not mechanism evidence.
