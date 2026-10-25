# 熵能轉移(Entropic Transfer)：原始碼依據

[English](en/cryptic_electrocution_toughness.md)

[返回玩家說明](README.md#cryptic_electrocution_toughness)｜[技術索引](SOURCE_INDEX.md)｜[原文比對](LOCALIZATION_COMPARISON.md#cryptic_electrocution_toughness)

- 來源版本：Release 1.13.1；固定 SHA：`7e662fcda16219d775b84af50322be2e9cd9d62e`。
- 天賦：`cryptic_electrocution_toughness`；名稱鍵：`loc_talent_cryptic_electrocution_toughness`；描述鍵：`loc_talent_cryptic_electrocution_toughness_desc`。
- 節點：`node_cd91dbac-9a28-4af5-ae75-7c8022169f5b`；分類：技能；每節點一點。
- 證據程度：原始碼確認／程式推導；以下算例屬程式推導，未進行遊戲內測試。

## 原始碼確認與程式推導

- on_buff_added/on_buff_stack_added/on_max_stack_refresh_buff，檢查group_keywords.electrocuted成員；不是每次電擊DOT跳傷都觸發。
- 速率0.12/4，allow_proc_while_active=true。

## 原始碼依據

- [scripts/extension_systems/toughness/player_unit_toughness_extension.lua：253–285](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/toughness/player_unit_toughness_extension.lua#L253-L285)
- [scripts/settings/talent/talent_settings_cryptic.lua：475–478](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/talent/talent_settings_cryptic.lua#L475-L478)
- [scripts/settings/buff/archetype_buff_templates/cryptic_buff_templates.lua：2635–2690](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/cryptic_buff_templates.lua#L2635-L2690)
- [scripts/settings/ability/archetype_talents/talents/cryptic_talents.lua：2055–2073](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/cryptic_talents.lua#L2055-L2073)
- [scripts/ui/views/talent_builder_view/layouts/cryptic_tree.lua：410–439](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/ui/views/talent_builder_view/layouts/cryptic_tree.lua#L410-L439)

## 算例條件與待確認事項

- **恢復算例**：最大韌性 100 時，每秒恢復 100 × 12% ÷ 4 = 3 點；第 2 秒再次觸發，效果延長至第 6 秒，期間共可恢復 18 點。
- 恢復量以韌性上限計算，受韌性恢復加成影響，最多補到上限；算例假設沒有其他恢復加成。
- 遊戲原文：1.13.1／Steam Build 25606770 的 ui 資源。描述與實作的差異仍需遊戲內核對；省略細節不列為繁中誤譯。

## 原文核對

- 對應 hash：`f4493647`。
- 中英條件一致；新增電擊與重設其持續時間、持續恢復速率為補充。

## 圖示來源

[原圖](https://gameslantern.com/storage/sites/darktide/exporter/talents/cryptic/default/cryptic_electrocution_toughness.webp)｜[圖片來源 Issue](https://github.com/SyuanTsai/Media-Assets/issues/13#issuecomment-5935647528)｜[圖片附件](https://github.com/user-attachments/assets/98a10c08-52e1-47bf-a288-a2043ba40a63)

圖片僅供技能辨識，不作機制證據。

