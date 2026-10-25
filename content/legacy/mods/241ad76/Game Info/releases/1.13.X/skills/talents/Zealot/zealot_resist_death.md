# 死戰到底(Until Death)：原始碼依據

[English](en/zealot_resist_death.md)

[返回玩家說明](README.md#zealot_resist_death)｜[技術索引](SOURCE_INDEX.md)｜[原文比對](LOCALIZATION_COMPARISON.md#zealot_resist_death)

- 來源版本：Release 1.13.1；固定 SHA：`7e662fcda16219d775b84af50322be2e9cd9d62e`。
- 天賦：`zealot_resist_death`；名稱鍵：`loc_talent_zealot_resist_death`；描述鍵：`loc_talent_zealot_resist_death_base_desc`。
- 節點：`node_0581bad8-f8c0-4321-a90b-756013fd3981`；分類：鑰石；每節點一點。
- 證據程度：原始碼確認／程式推導；以下算例屬程式推導，未進行遊戲內測試。

## 原始碼確認與程式推導

- 目前技能樹掛載 `zealot_resist_death` 被動 buff。它監聽 `on_damage_taken`，觸發機率為1；先檢查玩家是否已有 `unkillable` 關鍵字，再以 `params.will_die` 或生命值已≤1且本次傷害>0判斷致命傷害。
- Proc buff 設 `active_duration=8`、`cooldown_duration=120`，啟動期間提供 `unkillable` 關鍵字。共用 ProcBuff 冷卻判斷為啟動時間+效果期間+冷卻，因此120秒從8秒效果結束後計，不是從觸發時起算。
- 這是單一條件觸發 buff，沒有層數；處於其他無法殺死效果時，本技能的致命傷害檢查會提前返回，該次傷害不會啟動本技能冷卻。
- 三個職業核心鑰石共用 `exclusive_group=keystone`，技能樹中只能選其一。

## 原始碼依據

- [scripts/settings/ability/archetype_talents/talents/zealot_talents.lua：2821–2840](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/zealot_talents.lua#L2821-L2840)
- [scripts/settings/buff/archetype_buff_templates/zealot_buff_templates.lua：3473–3567](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/zealot_buff_templates.lua#L3473-L3567)
- [scripts/settings/buff/helper_functions/check_proc_functions.lua：648–662](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/helper_functions/check_proc_functions.lua#L648-L662)
- [scripts/extension_systems/buff/buffs/proc_buff.lua：150–194](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/buff/buffs/proc_buff.lua#L150-L194)
- [scripts/ui/views/talent_builder_view/layouts/zealot_tree.lua：63–95](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/ui/views/talent_builder_view/layouts/zealot_tree.lua#L63-L95)
- [scripts/settings/ability/archetype_talents/talents/zealot_talents.lua：2821–2840](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/zealot_talents.lua#L2821-L2840)
- [scripts/ui/views/talent_builder_view/layouts/zealot_tree.lua：63–95](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/ui/views/talent_builder_view/layouts/zealot_tree.lua#L63-L95)

## 算例條件與待確認事項

- **冷卻算例**：8 秒效果結束後，再冷卻 120 秒；第 0 秒觸發，約第 8 秒效果結束，約第 128 秒才再次可用。已處於其他免死效果時，不會再觸發本天賦。
- 致命條件依遊戲傷害事件的 `will_die`，或玩家生命值已≤1且仍受傷的判斷；不應擴寫成任何低生命值都會觸發。
- 總間隔128秒是由兩個計時欄位靜態推導。
- 遊戲原文：1.13.1／Steam Build 25606770 的 ui 資源。描述與實作的差異仍需遊戲內核對；省略細節不列為繁中誤譯。

## 原文核對

- 對應 hash：`0da0b898`。
- 繁中與英文都描述致命傷害觸發、無法殺死效果及冷卻；起算細節省略屬描述不完整。

## 圖示來源

[原圖](https://gameslantern.com/storage/sites/darktide/exporter/talents/zealot/keystone/zealot_resist_death.webp)｜[圖片來源 Issue](https://github.com/SyuanTsai/Media-Assets/issues/8#issuecomment-5929289315)｜[圖片附件](https://github.com/user-attachments/assets/382b6c6a-80b7-4c64-81f9-63d37df43671)

圖片僅供技能辨識，不作機制證據。

