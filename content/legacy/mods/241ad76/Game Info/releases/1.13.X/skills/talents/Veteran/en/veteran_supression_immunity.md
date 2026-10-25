# Determined

[繁體中文](../veteran_supression_immunity.md) | [Base effects](BASE_EFFECTS.md#veteran_supression_immunity) | [Technical index](SOURCE_INDEX.md)

## How it works

- Enemy fire does not cause you to accumulate Suppression.
- This immunity does not reduce damage from bullets that hit you or grant immunity to knockback, being knocked down or other control effects.

## Source-confirmed behavior and static derivation

Release 1.13.1, fixed SHA `7e662fcda16219d775b84af50322be2e9cd9d62e`. Talent identifier: `veteran_supression_immunity`.

- The class base-talent list enables `veteran_supression_immunity`; it is not an additional selectable node beyond the 77 nodes in the player tree index.
- The talent identifier retains the source spelling `supression`. It installs `veteran_suppression_immunity`, which supplies the `suppression_immune` keyword.
- On the server, `PlayerSuppressionExtension.add_suppression` checks this keyword and returns before accumulating `num_suppression_hits`.
- The effect prevents Suppression accumulation. It does not modify damage or stagger attributes.
- "Suppression Immunity" is the explanatory effect label; the exact same-build localized English name is **Determined**.

## Fixed source evidence

- [scripts/settings/archetype/archetypes/veteran_archetype.lua — L50-L74](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/archetype/archetypes/veteran_archetype.lua#L50-L74)
- [scripts/settings/ability/archetype_talents/talents/veteran_talents.lua — L1390-L1399](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/veteran_talents.lua#L1390-L1399)
- [scripts/settings/buff/archetype_buff_templates/veteran_buff_templates.lua — L2188-L2197](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/veteran_buff_templates.lua#L2188-L2197)
- [scripts/extension_systems/suppression/player_suppression_extension.lua — L117-L136](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/suppression/player_suppression_extension.lua#L117-L136)

<a id="original-english-template-and-reconstruction"></a>

## Original English template and reconstruction

Steam Build `25606770`; `content/localization/ui`, resource hash `63564edcb7c3c5ee`; language `en` (code `0`).

- Name key: `loc_talent_veteran_supression_immunity`; hash `829e5480`; entry 8493; exact name: **Determined**.
- Description key: `loc_talent_veteran_supression_immunity_desc`; hash `1760da8f`; entry 1528.

Full raw template:

```text
Gain Suppression immunity.
```

The description has no value placeholders requiring reconstruction.

[Independent English comparison](LOCALIZATION_COMPARISON.md#veteran_supression_immunity).

## Evidence limits

- Mechanisms and citations reuse the accepted Chinese dossier. In-game execution and final game UI observation were not performed.
