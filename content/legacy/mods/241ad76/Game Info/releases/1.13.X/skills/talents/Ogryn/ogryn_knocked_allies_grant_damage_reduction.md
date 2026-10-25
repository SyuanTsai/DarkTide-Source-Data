# 絕不屈服(Won't Give In)：原始碼依據

[English](en/ogryn_knocked_allies_grant_damage_reduction.md)

[返回玩家說明](README.md#ogryn_knocked_allies_grant_damage_reduction)｜[技術索引](SOURCE_INDEX.md)｜[原文比對](LOCALIZATION_COMPARISON.md#ogryn_knocked_allies_grant_damage_reduction)

- 來源版本：Release 1.13.1；固定 SHA：`7e662fcda16219d775b84af50322be2e9cd9d62e`。
- 天賦：`ogryn_knocked_allies_grant_damage_reduction`；名稱鍵：`loc_talent_ogryn_tanky_with_downed_allies`；描述鍵：`loc_talent_ogryn_tanky_with_downed_allies_desc`。
- 節點：`node_361c0f03-d3f0-47a9-8669-2f71f6c2b5a1`；分類：技能；每節點一點。
- 證據程度：原始碼確認／程式推導；以下算例屬程式推導，未進行遊戲內測試。

## 原始碼確認與程式推導

- 每0.1秒檢查其他valid_player_units；距離平方嚴格小於20²且PlayerUnitStatus.requires_help，lerp_t=count/3，damage_taken_multiplier由1插值至.4。標準四人隊伍最多計入三名隊友。

## 原始碼依據

- [scripts/settings/buff/archetype_buff_templates/ogryn_buff_templates.lua：1571–1643](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/ogryn_buff_templates.lua#L1571-L1643)
- [scripts/settings/talent/talent_settings_ogryn.lua：355–359](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/talent/talent_settings_ogryn.lua#L355-L359)
- [scripts/utilities/attack/player_unit_status.lua：23–33](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/attack/player_unit_status.lua#L23-L33)
- [scripts/utilities/attack/player_unit_status.lua：102–106](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/attack/player_unit_status.lua#L102-L106)
- [scripts/utilities/attack/damage_calculation.lua：587–612](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/attack/damage_calculation.lua#L587-L612)
- [scripts/settings/ability/archetype_talents/talents/ogryn_talents.lua：862–882](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/ogryn_talents.lua#L862-L882)
- [scripts/ui/views/talent_builder_view/layouts/ogryn_tree.lua：600–624](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/ui/views/talent_builder_view/layouts/ogryn_tree.lua#L600-L624)

## 算例條件與待確認事項

- **減傷算例**：有 1、2、3 名符合條件的隊友時，這一階段的 100 點傷害分別變成 80、60、40 點；三人合計為 100 × (1 − 3 × 20%) = 40 點。
- 遊戲原文：1.13.1／Steam Build 25606770 的 ui 資源。描述與實作的差異仍需遊戲內核對；省略細節不列為繁中誤譯。

## 原文核對

- 對應 hash：`3845cefa`。
- 核對同一描述鍵／hash 的繁中與英文，效果方向未見明確翻譯矛盾；未列公式、上限或細部限制不算錯誤。

## 圖示來源

[原圖](https://gameslantern.com/storage/sites/darktide/exporter/talents/ogryn/default/ogryn_knocked_allies_grant_damage_reduction.webp)｜[圖片來源 Issue](https://github.com/SyuanTsai/Media-Assets/issues/10#issuecomment-5931394406)｜[圖片附件](https://github.com/user-attachments/assets/58952102-1822-4093-81f9-48b8cbc8f8a7)

圖片僅供技能辨識，不作機制證據。

