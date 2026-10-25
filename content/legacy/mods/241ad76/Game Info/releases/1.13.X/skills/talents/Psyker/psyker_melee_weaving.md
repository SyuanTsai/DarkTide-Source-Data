# 骨折後遺症(By Crack of Bone)：原始碼依據

[English](en/psyker_melee_weaving.md)

[返回玩家說明](README.md#psyker_melee_weaving)｜[技術索引](SOURCE_INDEX.md)｜[原文比對](LOCALIZATION_COMPARISON.md#psyker_melee_weaving)

- 來源版本：Release 1.13.1；固定 SHA：`7e662fcda16219d775b84af50322be2e9cd9d62e`。
- 天賦：`psyker_melee_weaving`；名稱鍵：`loc_talent_psyker_melee_weaving`；描述鍵：`loc_talent_psyker_melee_weaving_desc`。
- 節點：`node_3d79a0fe-26e0-4ff4-9ecd-6b5d4b228404`；分類：技能；每節點一點。
- 證據程度：原始碼確認／程式推導；以下算例屬程式推導，未進行遊戲內測試。

## 原始碼確認與程式推導

- on_melee_weakspot_kills；proc_stat warp_charge_amount=.8，active_duration4。decrease_immediate(.1) 在下一update執行，單一布林旗標可能合併同幀觸發。

## 原始碼依據

- [scripts/settings/buff/archetype_buff_templates/psyker_buff_templates.lua：3190–3228](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/psyker_buff_templates.lua#L3190-L3228)
- [scripts/settings/talent/talent_settings_psyker.lua：34–38](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/talent/talent_settings_psyker.lua#L34-L38)
- [scripts/settings/ability/archetype_talents/talents/psyker_talents.lua：2297–2324](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/psyker_talents.lua#L2297-L2324)
- [scripts/ui/views/talent_builder_view/layouts/psyker_tree.lua：1816–1843](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/ui/views/talent_builder_view/layouts/psyker_tree.lua#L1816-L1843)

## 算例條件與待確認事項

- **反噬算例**：反噬 60% 時觸發，降到 50%；期間原本產生 20 個百分點的攻擊，改為 20 × 0.8 = 16 個百分點。
- 遊戲原文：1.13.1／Steam Build 25606770 的 ui 資源。描述與實作的差異仍需遊戲內核對；省略細節不列為繁中誤譯。

## 原文核對

- 對應 hash：`9a0cbda1`。
- 核對同一 ui 資源及 hash 的繁中、英文文字與本頁核心效果；省略公式或例外不列為錯誤。

## 圖示來源

[原圖](https://gameslantern.com/storage/sites/darktide/exporter/talents/psyker/default/psyker_melee_weaving.webp)｜[圖片來源 Issue](https://github.com/SyuanTsai/Media-Assets/issues/7#issuecomment-5928034845)｜[圖片附件](https://github.com/user-attachments/assets/efceab94-6c34-43bc-a8ed-6d06fbf269b1)

圖片僅供技能辨識，不作機制證據。

