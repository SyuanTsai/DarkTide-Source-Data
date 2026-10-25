# Skitarii: talent definitions not directly used

[繁體中文](../UNUSED_DEFINITIONS.md) | [Player descriptions](README.md) | [Technical index](SOURCE_INDEX.md)

Fixed source: Release 1.13.1 / `7e662fcda16219d775b84af50322be2e9cd9d62e`. Of 103 class talent definitions, 97 are directly referenced by the talent tree and 4 are used by the base configuration. The following 2 are not directly referenced by either list. This does not mean the code has been removed; other modes may still use the same templates.
[Talent tree](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/ui/views/talent_builder_view/layouts/cryptic_tree.lua#L3-L10) | [Base configuration](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/archetype/archetypes/cryptic_archetype.lua#L55-L84)

| Definition | Source | Treatment |
|---|---|---|
| `cryptic_force_field_health_damage_limit` | [Talent definition](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/cryptic_talents.lua#L856-L875) | Retain in the technical inventory; exclude from the current selectable-talent index. |
| `cryptic_precision_stance_reload_speed_delayed` | [Talent definition](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/cryptic_talents.lua#L373-L404) | Retain in the technical inventory; exclude from the current selectable-talent index. |
