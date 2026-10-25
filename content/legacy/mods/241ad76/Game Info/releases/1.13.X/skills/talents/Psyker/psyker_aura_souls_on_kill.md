# 靈能吸血鬼(Psychic Vampire)：原始碼依據

[English](en/psyker_aura_souls_on_kill.md)

[返回玩家說明](README.md#psyker_aura_souls_on_kill)｜[技術索引](SOURCE_INDEX.md)｜[原文比對](LOCALIZATION_COMPARISON.md#psyker_aura_souls_on_kill)

- 來源版本：Release 1.13.1；固定 SHA：`7e662fcda16219d775b84af50322be2e9cd9d62e`。
- 天賦：`psyker_aura_souls_on_kill`；名稱鍵：`loc_talent_psyker_souls_on_kill_coop`；描述鍵：`loc_talent_psyker_souls_on_kill_coop_desc`。
- 節點：`node_b5482701-b516-444a-92d4-df82bc410afd`；分類：鑰石；每節點一點。
- 證據程度：原始碼確認／程式推導；以下算例屬程式推導，未進行遊戲內測試。

## 原始碼確認與程式推導

- server on_minion_death先檢查attacking_unit在is_unit_in_coherency集合，之後math.random()<.04才對持有者buff_extension加soul。協同系統將本人納入集合；不是替所有隊友各加一層。

## 原始碼依據

- [scripts/settings/talent/talent_settings_psyker.lua：219–221](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/talent/talent_settings_psyker.lua#L219-L221)
- [scripts/settings/buff/archetype_buff_templates/psyker_buff_templates.lua：1622–1657](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/psyker_buff_templates.lua#L1622-L1657)
- [scripts/extension_systems/coherency/coherency_system.lua：188–195](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/coherency/coherency_system.lua#L188-L195)
- [scripts/settings/ability/archetype_talents/talents/psyker_talents.lua：1398–1413](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/psyker_talents.lua#L1398-L1413)
- [scripts/ui/views/talent_builder_view/layouts/psyker_tree.lua：1573–1597](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/ui/views/talent_builder_view/layouts/psyker_tree.lua#L1573-L1597)

## 算例條件與待確認事項

- **機率算例**：每次皆有空位可儲存時，100 次符合條件的擊殺，期望取得 100 × 4% = 4 層；不是每 25 次擊殺保證取得一層。
- 算例假設沒有其他修正，尚未遊戲內驗證；本機文字與固定來源版本對應為1.13.1。
- 遊戲原文：1.13.1／Steam Build 25606770 的 ui 資源。描述與實作的差異仍需遊戲內核對；省略細節不列為繁中誤譯。

## 原文核對

- 對應 hash：`03d352e7`。
- 同描述鍵的繁中與英文效果方向一致；未列完整公式與上限不視為誤譯。

## 圖示來源

[原圖](https://gameslantern.com/storage/sites/darktide/exporter/talents/psyker/keystone_modifier/psyker_aura_souls_on_kill.webp)｜[圖片來源 Issue](https://github.com/SyuanTsai/Media-Assets/issues/7#issuecomment-5928024966)｜[圖片附件](https://github.com/user-attachments/assets/36248d6b-7838-4004-86e5-645956cb8392)

圖片僅供技能辨識，不作機制證據。

