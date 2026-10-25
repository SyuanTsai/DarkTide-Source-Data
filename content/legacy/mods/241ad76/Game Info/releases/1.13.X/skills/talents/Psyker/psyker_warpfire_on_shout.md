# 蔓延火焰(Creeping Flames)：原始碼依據

[English](en/psyker_warpfire_on_shout.md)

[返回玩家說明](README.md#psyker_warpfire_on_shout)｜[技術索引](SOURCE_INDEX.md)｜[原文比對](LOCALIZATION_COMPARISON.md#psyker_warpfire_on_shout)

- 來源版本：Release 1.13.1；固定 SHA：`7e662fcda16219d775b84af50322be2e9cd9d62e`。
- 天賦：`psyker_warpfire_on_shout`；名稱鍵：`loc_talent_psyker_warpfire_on_shout`；描述鍵：`loc_talent_psyker_warpfire_on_shout_desc`。
- 節點：`node_400d79d6-4aaa-47e4-b9c4-127b79ef639a`；分類：能力；每節點一點。
- 證據程度：原始碼確認／程式推導；以下算例屬程式推導，未進行遊戲內測試。

## 原始碼確認與程式推導

- 天賦被動監聽 on_combat_ability，在尖嘯造成傷害前擷取 warp_charge_component.current_percentage；模板用 ceil(percentage*6) 並限制為1..6，然後於尖嘯命中事件把該層數套到有效目標。命中處理檢查目標仍存活、不處於沉睡惡魔宿主狀態且層數大於0。依此執行順序，這是啟動時反噬快照；最低一層意味即使快照接近0仍至少給一層。

## 原始碼依據

- [scripts/settings/ability/archetype_talents/talents/psyker_talents.lua：1820–1849](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/psyker_talents.lua#L1820-L1849)
- [scripts/settings/buff/archetype_buff_templates/psyker_buff_templates.lua：362–404](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/psyker_buff_templates.lua#L362-L404)
- [scripts/extension_systems/ability/actions/action_psyker_shout.lua：41–59](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/ability/actions/action_psyker_shout.lua#L41-L59)
- [scripts/extension_systems/ability/actions/action_psyker_shout.lua：108–146](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/ability/actions/action_psyker_shout.lua#L108-L146)
- [scripts/settings/ability/archetype_talents/talents/psyker_talents.lua：1820–1849](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/psyker_talents.lua#L1820-L1849)
- [scripts/ui/views/talent_builder_view/layouts/psyker_tree.lua：566–589](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/ui/views/talent_builder_view/layouts/psyker_tree.lua#L566-L589)

## 算例條件與待確認事項

- 啟動尖嘯時反噬為50%，且目標符合存活/非沉睡惡魔宿主條件。 ceil(0.50×6)=ceil(3)=3。 對該命中目標施加3層靈魂之火。
- 啟動尖嘯時反噬為13%，目標符合有效目標條件。 ceil(0.13×6)=ceil(0.78)=1。 至少施加1層靈魂之火。
- 程式碼排除沉睡中的惡魔宿主，並要求目標存活；一般文字的「命中目標」不應被理解為無條件所有單位。
- 此內容只計算層數，不推論靈魂之火每秒傷害、持續時間、傳播或堆疊重新計時規則。
- 文字與程式來源皆為1.13.1；實際表現仍待遊戲內核對。
- 遊戲原文：1.13.1／Steam Build 25606770 的 ui 資源。描述與實作的差異仍需遊戲內核對；省略細節不列為繁中誤譯。

## 原文核對

- 對應 hash：`8ec3e5f7`。
- 同一描述鍵的繁中與英文效果方向一致；未說明的公式、時序與額外條件屬描述不完整，不列為誤譯。與公開來源版本對應為1.13.1。

## 圖示來源

[原圖](https://gameslantern.com/storage/sites/darktide/exporter/talents/psyker/ability_modifier/psyker_warpfire_on_shout.webp)｜[圖片來源 Issue](https://github.com/SyuanTsai/Media-Assets/issues/7#issuecomment-5928024966)｜[圖片附件](https://github.com/user-attachments/assets/65f7ef9b-5b0d-458e-bc7d-5aea8e948e14)

圖片僅供技能辨識，不作機制證據。

