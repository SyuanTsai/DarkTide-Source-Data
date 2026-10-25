# 重毆(Batter)：原始碼依據

[English](en/ogryn_heavy_bleeds.md)

[返回玩家說明](README.md#ogryn_heavy_bleeds)｜[技術索引](SOURCE_INDEX.md)｜[原文比對](LOCALIZATION_COMPARISON.md#ogryn_heavy_bleeds)

- 來源版本：Release 1.13.1；固定 SHA：`7e662fcda16219d775b84af50322be2e9cd9d62e`。
- 天賦：`ogryn_heavy_bleeds`；名稱鍵：`loc_talent_ogryn_bleed_on_multiple_hit`；描述鍵：`loc_talent_ogryn_heavy_bleeds_new_desc`。
- 節點：`node_950e1baa-f9b8-4d12-a913-514249d4f38a`；分類：技能；每節點一點。
- 證據程度：原始碼確認／程式推導；以下算例屬程式推導，未進行遊戲內測試。

## 原始碼確認與程式推導

- on_hit 要求damaging melee non-kill；重擊取4、其他近戰取1。施加共用bleed模板，max_stacks/cap16、duration1.5、interval.5、interval_stack_removal。
- 威力=smoothstep(n/16)×500；bleeding profile attack175，無護甲ADM .5，通用線性基礎輸出=175×.5×smoothstep=87.5×smoothstep。

## 原始碼依據

- [scripts/settings/buff/archetype_buff_templates/ogryn_buff_templates.lua：1131–1168](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/ogryn_buff_templates.lua#L1131-L1168)
- [scripts/settings/talent/talent_settings_ogryn.lua：330–333](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/talent/talent_settings_ogryn.lua#L330-L333)
- [scripts/settings/buff/weapon_buff_templates.lua：235–259](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/weapon_buff_templates.lua#L235-L259)
- [scripts/settings/damage/damage_profiles/buff_damage_profile_templates.lua：59–68](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/damage/damage_profiles/buff_damage_profile_templates.lua#L59-L68)
- [scripts/settings/damage/damage_profiles/buff_damage_profile_templates.lua：443–465](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/damage/damage_profiles/buff_damage_profile_templates.lua#L443-L465)
- [scripts/extension_systems/buff/buffs/interval_buff.lua：19–68](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/buff/buffs/interval_buff.lua#L19-L68)
- [scripts/settings/damage/power_level_settings.lua：7–25](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/damage/power_level_settings.lua#L7-L25)
- [scripts/utilities/attack/power_level.lua：63–91](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/attack/power_level.lua#L63-L91)
- [scripts/utilities/attack/damage_calculation.lua：219–227](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/attack/damage_calculation.lua#L219-L227)
- [scripts/settings/ability/archetype_talents/talents/ogryn_talents.lua：1199–1220](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/ogryn_talents.lua#L1199-L1220)
- [scripts/ui/views/talent_builder_view/layouts/ogryn_tree.lua：410–432](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/ui/views/talent_builder_view/layouts/ogryn_tree.lua#L410-L432)

## 算例條件與待確認事項

- **傷害算例**：4 層時為 87.5 × 0.25² × 2.5 ≈ 13.67 點；8 層為 43.75 點，16 層為 87.5 點。因此 8 層不是 4 層傷害的兩倍。其他護甲與增傷會改變結果。
- 持續傷害總量取決於補層、目標生存及更新時序；不把單次傷害當成固定總傷害。
- 遊戲原文：1.13.1／Steam Build 25606770 的 ui 資源。描述與實作的差異仍需遊戲內核對；省略細節不列為繁中誤譯。

## 原文核對

- 對應 hash：`8ad425e7`。
- 核對同一描述鍵／hash 的繁中與英文，效果方向未見明確翻譯矛盾；未列公式、上限或細部限制不算錯誤。

## 圖示來源

[原圖](https://gameslantern.com/storage/sites/darktide/exporter/talents/ogryn/default/ogryn_heavy_bleeds.webp)｜[圖片來源 Issue](https://github.com/SyuanTsai/Media-Assets/issues/10#issuecomment-5931394406)｜[圖片附件](https://github.com/user-attachments/assets/dbfbaef7-b829-41cf-96cb-a9d09192cfbd)

圖片僅供技能辨識，不作機制證據。

