# 盜竊天命(Purloin Providence)：原始碼依據

[English](en/psyker_mark_kills_can_vent.md)

[返回玩家說明](README.md#psyker_mark_kills_can_vent)｜[技術索引](SOURCE_INDEX.md)｜[原文比對](LOCALIZATION_COMPARISON.md#psyker_mark_kills_can_vent)

- 來源版本：Release 1.13.1；固定 SHA：`7e662fcda16219d775b84af50322be2e9cd9d62e`。
- 天賦：`psyker_mark_kills_can_vent`；名稱鍵：`loc_talent_psyker_mark_kills_can_vent`；描述鍵：`loc_talent_psyker_mark_kills_can_vent_description`。
- 節點：`node_4941c66a-d4ff-4dca-917f-a6bbf2bbdbfc`；分類：鑰石；每節點一點。
- 證據程度：原始碼確認／程式推導；以下算例屬程式推導，未進行遊戲內測試。

## 原始碼確認與程式推導

- chance_to_vent_proc_chance=1、chance_to_vent_warp_charge_percent=.05；只有目前標記目標的擊殺進入_give_stack_of_unnatural_talent，設定procced後下一次update用decrease_immediate(.05)扣除。多個同更新事件共用procced布林旗標，不能保證每個事件各扣一次。

## 原始碼依據

- [scripts/settings/buff/archetype_buff_templates/psyker_buff_templates.lua：734–755](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/psyker_buff_templates.lua#L734-L755)
- [scripts/settings/buff/archetype_buff_templates/psyker_buff_templates.lua：765–771](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/psyker_buff_templates.lua#L765-L771)
- [scripts/settings/buff/archetype_buff_templates/psyker_buff_templates.lua：832–839](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/psyker_buff_templates.lua#L832-L839)
- [scripts/settings/buff/archetype_buff_templates/psyker_buff_templates.lua：896–904](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/psyker_buff_templates.lua#L896-L904)
- [scripts/settings/buff/archetype_buff_templates/psyker_buff_templates.lua：924–943](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/psyker_buff_templates.lua#L924-L943)
- [scripts/settings/ability/archetype_talents/talents/psyker_talents.lua：2185–2220](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/psyker_talents.lua#L2185-L2220)
- [scripts/ui/views/talent_builder_view/layouts/psyker_tree.lua：1475–1497](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/ui/views/talent_builder_view/layouts/psyker_tree.lua#L1475-L1497)

## 算例條件與待確認事項

- **反噬算例**：原有 60% 反噬時，變成 60% − 5 個百分點 = 55%；原有 3% 時則降至 0%。
- 算例假設沒有其他修正，尚未遊戲內驗證；本機文字與固定來源版本對應為1.13.1。
- 遊戲原文：1.13.1／Steam Build 25606770 的 ui 資源。描述與實作的差異仍需遊戲內核對；省略細節不列為繁中誤譯。

## 原文核對

- 對應 hash：`01016112`。
- 同描述鍵的繁中與英文效果方向一致；未列完整公式與上限不視為誤譯。

## 圖示來源

[原圖](https://gameslantern.com/storage/sites/darktide/exporter/talents/psyker/keystone_modifier/psyker_mark_kills_can_vent.webp)｜[圖片來源 Issue](https://github.com/SyuanTsai/Media-Assets/issues/7#issuecomment-5928024966)｜[圖片附件](https://github.com/user-attachments/assets/06e543d8-85dd-455b-8ac2-3f9f29b03cf1)

圖片僅供技能辨識，不作機制證據。

