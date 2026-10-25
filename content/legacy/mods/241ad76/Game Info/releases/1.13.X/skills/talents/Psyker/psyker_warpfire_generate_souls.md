# 涅槃(In Fire Reborn)：原始碼依據

[English](en/psyker_warpfire_generate_souls.md)

[返回玩家說明](README.md#psyker_warpfire_generate_souls)｜[技術索引](SOURCE_INDEX.md)｜[原文比對](LOCALIZATION_COMPARISON.md#psyker_warpfire_generate_souls)

- 來源版本：Release 1.13.1；固定 SHA：`7e662fcda16219d775b84af50322be2e9cd9d62e`。
- 天賦：`psyker_warpfire_generate_souls`；名稱鍵：`loc_talent_psyker_warpfire_generates_souls`；描述鍵：`loc_talent_psyker_warpfire_generates_souls_desc`。
- 節點：`node_97a70547-63e0-473c-9e2f-79096161d4e5`；分類：鑰石；每節點一點。
- 證據程度：原始碼確認／程式推導；以下算例屬程式推導，未進行遊戲內測試。

## 原始碼確認與程式推導

- on_minion_death機率.1；check_proc_func先接受死亡時warpfire_burning任意來源標記，否則才查own attacker與damage_types.warpfire。沒有協同或距離判斷。proc adds1；非目前樹的increased_soul_generation特殊規則另可變2，不能列為基礎效果。

## 原始碼依據

- [scripts/settings/talent/talent_settings_psyker.lua：257–259](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/talent/talent_settings_psyker.lua#L257-L259)
- [scripts/settings/buff/archetype_buff_templates/psyker_buff_templates.lua：2117–2160](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/psyker_buff_templates.lua#L2117-L2160)
- [scripts/settings/ability/archetype_talents/talents/psyker_talents.lua：1850–1872](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/psyker_talents.lua#L1850-L1872)
- [scripts/ui/views/talent_builder_view/layouts/psyker_tree.lua：1548–1572](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/ui/views/talent_builder_view/layouts/psyker_tree.lua#L1548-L1572)

## 算例條件與待確認事項

- **機率算例**：不受充能上限截斷時，100 次符合條件的死亡事件，期望取得 100 × 10% = 10 層；實際結果依隨機判定而異。
- 算例假設沒有其他修正，尚未遊戲內驗證；本機文字與固定來源版本對應為1.13.1。
- 遊戲原文：1.13.1／Steam Build 25606770 的 ui 資源。描述與實作的差異仍需遊戲內核對；省略細節不列為繁中誤譯。

## 原文核對

- 對應 hash：`d52dac75`。
- 繁中與英文均寫靈魂之火擊殺；固定來源也接受死亡時帶有靈魂之火的敵人，不要求本人尾刀。兩語言一致，跨來源實作差異尚待遊戲內核對，不列繁中誤譯。

## 圖示來源

[原圖](https://gameslantern.com/storage/sites/darktide/exporter/talents/psyker/keystone_modifier/psyker_warpfire_generate_souls.webp)｜[圖片來源 Issue](https://github.com/SyuanTsai/Media-Assets/issues/7#issuecomment-5928024966)｜[圖片附件](https://github.com/user-attachments/assets/f42fce6a-aab7-4622-a8b9-bd171fba4b33)

圖片僅供技能辨識，不作機制證據。

