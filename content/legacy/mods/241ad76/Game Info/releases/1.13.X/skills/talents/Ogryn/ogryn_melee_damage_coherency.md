# 威嚇氣場(Intimidating Presence)：原始碼依據

[English](en/ogryn_melee_damage_coherency.md)

[返回基礎效果](BASE_EFFECTS.md#ogryn_melee_damage_coherency)｜[技術索引](SOURCE_INDEX.md)

- 固定來源：Release 1.13.1／`7e662fcda16219d775b84af50322be2e9cd9d62e`。
- 基礎天賦：`ogryn_melee_damage_coherency`；不占可選天賦點數。
- 證據程度：原始碼確認與程式推導，未進行遊戲內測試。

## 原始碼確認與程式推導

- coherency identifier=ogryn_aura、priority1；強化版本同identifier、priority2。基礎buffmelee_damage=.075、max_stacks1。
- coherency_system建立new_chain時先包含本人，再連結其他協同單位。

## 原始碼依據

- [固定版本來源](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/talent/talent_settings_ogryn.lua#L298-L302)
- [固定版本來源](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/ogryn_buff_templates.lua#L1354-L1390)
- [固定版本來源](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/coherency/coherency_system.lua#L188-L215)
- [固定版本來源](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/ogryn_talents.lua#L651-L668)
- [固定版本來源](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/archetype/archetypes/ogryn_archetype.lua#L50-L74)

## 算例與待確認事項

- **傷害算例**：只計此加成，基礎 100 點變成 100 × (1 + 7.5%) = 107.5 點；同階段另有 20% 時則為 127.5 點。
- 本機文字 Build 25606770 與固定公開來源版本對應為1.13.1。
