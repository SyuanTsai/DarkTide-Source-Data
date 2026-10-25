# 險惡燃燒(Perilous Combustion)：原始碼依據

[English](en/psyker_elite_kills_add_warpfire.md)

[返回玩家說明](README.md#psyker_elite_kills_add_warpfire)｜[技術索引](SOURCE_INDEX.md)｜[原文比對](LOCALIZATION_COMPARISON.md#psyker_elite_kills_add_warpfire)

- 來源版本：Release 1.13.1；固定 SHA：`7e662fcda16219d775b84af50322be2e9cd9d62e`。
- 天賦：`psyker_elite_kills_add_warpfire`；名稱鍵：`loc_talent_psyker_elite_kills_add_warpfire`；描述鍵：`loc_talent_psyker_elite_and_special_kills_add_warpfire_desc`。
- 節點：`node_dbf51b8d-f6d8-418b-a1dc-29435eea34b0`；分類：技能；每節點一點。
- 證據程度：原始碼確認／程式推導；以下算例屬程式推導，未進行遊戲內測試。

## 原始碼確認與程式推導

- on_kill要求died且tags.elite/special；位置取死者，radius4，附加warp_fire2層。warp_fire間隔.75秒，power=500×s²×(3−2s)，s=層數/31，再交warpfire傷害曲線與護甲，不能當每層固定傷害。

## 原始碼依據

- [scripts/settings/buff/archetype_buff_templates/psyker_buff_templates.lua：1550–1621](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/psyker_buff_templates.lua#L1550-L1621)
- [scripts/settings/talent/talent_settings_psyker.lua：215–218](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/talent/talent_settings_psyker.lua#L215-L218)
- [scripts/settings/buff/weapon_buff_templates.lua：101–128](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/weapon_buff_templates.lua#L101-L128)
- [scripts/settings/ability/archetype_talents/talents/psyker_talents.lua：1287–1302](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/psyker_talents.lua#L1287-L1302)
- [scripts/ui/views/talent_builder_view/layouts/psyker_tree.lua：143–170](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/ui/views/talent_builder_view/layouts/psyker_tree.lua#L143-L170)

## 算例條件與待確認事項

- **層數算例**：附近敵人原本沒有靈魂之火時，獲得 2 層；原本有 3 層時，變成 3 + 2 = 5 層。傷害會隨層數非線性成長，5 層不是 1 層傷害的 5 倍。
- 程式只在warpfire且attack_type缺失時排除，不能單看damage_type就聲稱所有靈魂之火擊殺不觸發。
- 持續傷害層數各自移除與實際整段傷害需固定敵人護甲與後續補層再計算。
- 遊戲原文：1.13.1／Steam Build 25606770 的 ui 資源。描述與實作的差異仍需遊戲內核對；省略細節不列為繁中誤譯。

## 原文核對

- 對應 hash：`c4294372`。
- 核對同一 ui 資源及 hash 的繁中、英文文字與本頁核心效果；省略公式或例外不列為錯誤。

## 圖示來源

[原圖](https://gameslantern.com/storage/sites/darktide/exporter/talents/psyker/default/psyker_elite_kills_add_warpfire.webp)｜[圖片來源 Issue](https://github.com/SyuanTsai/Media-Assets/issues/7#issuecomment-5928034845)｜[圖片附件](https://github.com/user-attachments/assets/6cc7512d-8e6f-4261-88f3-c95089950934)

圖片僅供技能辨識，不作機制證據。

