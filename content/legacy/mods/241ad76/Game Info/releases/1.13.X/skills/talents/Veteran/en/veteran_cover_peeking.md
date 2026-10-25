# Low Profile

[繁體中文](../veteran_cover_peeking.md) | [Base effects](BASE_EFFECTS.md#veteran_cover_peeking) | [Technical index](SOURCE_INDEX.md)

## How it works

- While crouched behind suitable cover, use Aim Down Sights with a weapon that supports peeking to raise your view over the cover.
- Cover must be close enough and within the permitted height range. Peeking stops when you leave the cover, lose the required conditions or stop aiming.

## Source-confirmed behavior and static derivation

Release 1.13.1, fixed SHA `7e662fcda16219d775b84af50322be2e9cd9d62e`. Talent identifier: `veteran_cover_peeking`.

- The class base-talent list enables `veteran_cover_peeking`; it is not an additional selectable node beyond the 77 nodes in the player tree index.
- The special rule is required by `can_peek`, together with a significant obstacle in front and `is_crouching`.
- `best_peekable_ledge` requires `distance_flat_sq <= significant_obstacle_distance²`. The ledge height must lie between `crouch_height − 0.2` and `default_height − 0.2`; the raised view is set to `ledge_height + 0.2`.
- `AlternateFire.start` additionally requires the weapon's `alternate_fire_settings.peeking_mechanics == true`; its stop path ends peeking when Aim Down Sights ends.
- Geometry thresholds depend on breed and character height. This does not guarantee peeking for every cover object or every weapon.
- The internal effect label is "Cover Peeking"; the exact localized English name is **Low Profile**. This base rule is distinct from the selectable Low Profile modifier for Infiltrate.

## Fixed source evidence

- [scripts/settings/archetype/archetypes/veteran_archetype.lua — L50-L74](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/archetype/archetypes/veteran_archetype.lua#L50-L74)
- [scripts/settings/ability/archetype_talents/talents/veteran_talents.lua — L2575-L2584](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/veteran_talents.lua#L2575-L2584)
- [scripts/utilities/player_unit_peeking.lua — L40-L92](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/player_unit_peeking.lua#L40-L92)
- [scripts/utilities/alternate_fire.lua — L43-L51](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/alternate_fire.lua#L43-L51)
- [scripts/utilities/alternate_fire.lua — L73-L82](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/alternate_fire.lua#L73-L82)

<a id="original-english-template-and-reconstruction"></a>

## Original English template and reconstruction

Steam Build `25606770`; `content/localization/ui`, resource hash `63564edcb7c3c5ee`; language `en` (code `0`).

- Name key: `loc_talent_veteran_cover_peeking`; hash `da809230`; entry 14173; exact name: **Low Profile**.
- Description key: `loc_talent_veteran_cover_peeking_description`; hash `1ed90e8f`; entry 2018.

Full raw template:

```text
Can peek above cover while crouched when using Aim Down Sights.
```

The description has no value placeholders requiring reconstruction.

[Independent English comparison](LOCALIZATION_COMPARISON.md#veteran_cover_peeking).

## Evidence limits

- The localized English name Low Profile is shared with a different selectable talent; stable identifiers distinguish the base cover-peeking rule.
- Mechanisms and citations reuse the accepted Chinese dossier. In-game execution and final game UI observation were not performed.
