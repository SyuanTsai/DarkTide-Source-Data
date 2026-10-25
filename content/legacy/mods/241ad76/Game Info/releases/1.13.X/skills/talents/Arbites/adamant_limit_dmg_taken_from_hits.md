# 堅忍不拔(True Grit)：原始碼依據

[English](en/adamant_limit_dmg_taken_from_hits.md)

[返回玩家說明](README.md#adamant_limit_dmg_taken_from_hits)｜[技術索引](SOURCE_INDEX.md)｜[原文比對](LOCALIZATION_COMPARISON.md#adamant_limit_dmg_taken_from_hits)

- 來源版本：Release 1.13.1；固定 SHA：`7e662fcda16219d775b84af50322be2e9cd9d62e`。
- 天賦：`adamant_limit_dmg_taken_from_hits`；名稱鍵：`loc_talent_adamant_limit_dmg_taken_from_hits`；描述鍵：`loc_talent_adamant_limit_dmg_taken_from_hits_desc`。
- 節點：`node_433d6dd9-c8c4-4f9b-8f0f-e86cc9e69c8a`；分類：技能；每節點一點。
- 證據程度：原始碼確認／程式推導；以下算例屬程式推導，未進行遊戲內測試。

## 原始碼確認與程式推導

- limit_health_damage_taken keyword與max_health_damage_taken_per_hit=50由DamageTakenCalculation消費；not instakill分支對health_damage及permanent_damage各自math.min(limit)，位於生命穿透/傷口等計算之後，不能解讀成韌性上限。

## 原始碼依據

- [scripts/utilities/attack/damage_taken_calculation.lua：378–403](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/attack/damage_taken_calculation.lua#L378-L403)
- [scripts/settings/buff/archetype_buff_templates/adamant_buff_templates.lua：2324–2334](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/adamant_buff_templates.lua#L2324-L2334)
- [scripts/settings/talent/talent_settings_adamant.lua：161–163](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/talent/talent_settings_adamant.lua#L161-L163)
- [scripts/settings/ability/archetype_talents/talents/adamant_talents.lua：1118–1132](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/adamant_talents.lua#L1118-L1132)
- [scripts/ui/views/talent_builder_view/layouts/adamant_tree.lua：638–664](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/ui/views/talent_builder_view/layouts/adamant_tree.lua#L638-L664)

## 算例條件與待確認事項

- **傷害算例**：其他生命減傷已結算後，原本要承受 120 點時變成 min(120, 50) = 50 點；原本 30 點仍是 30 點。這是固定上限，不是 50% 減傷。
- 遊戲原文：1.13.1／Steam Build 25606770 的 ui 資源。描述與實作的差異仍需遊戲內核對；省略細節不列為繁中誤譯。

## 原文核對

- 對應 hash：`a25ab598`。
- 繁中「生命值…」與英文 maximum Health Damage Taken 的數值欄均為number50，未見百分比符號誤譯；以更明確的50點說明。

## 圖示來源

[原圖](https://gameslantern.com/storage/sites/darktide/exporter/talents/adamant/default/adamant_limit_dmg_taken_from_hits.webp)｜[圖片來源 Issue](https://github.com/SyuanTsai/Media-Assets/issues/11#issuecomment-5932563852)｜[圖片附件](https://github.com/user-attachments/assets/d4c3f66c-8fa8-419f-8a46-f94c842a9b4e)

圖片僅供技能辨識，不作機制證據。

