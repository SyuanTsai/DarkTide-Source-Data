# 生物磁石(Bio-Lodestone)：原始碼依據

[English](en/psyker_empowered_grenades_passive_improved.md)

[返回玩家說明](README.md#psyker_empowered_grenades_passive_improved)｜[技術索引](SOURCE_INDEX.md)｜[原文比對](LOCALIZATION_COMPARISON.md#psyker_empowered_grenades_passive_improved)

- 來源版本：Release 1.13.1；固定 SHA：`7e662fcda16219d775b84af50322be2e9cd9d62e`。
- 天賦：`psyker_empowered_grenades_passive_improved`；名稱鍵：`loc_talent_psyker_increase_empower_chain_lighting_chance`；描述鍵：`loc_talent_psyker_increase_empower_chain_lighting_chance_description`。
- 節點：`node_0bb80aeb-f367-4e65-bcb5-04e91aad3c23`；分類：鑰石；每節點一點。
- 證據程度：原始碼確認／程式推導；以下算例屬程式推導，未進行遊戲內測試。

## 原始碼確認與程式推導

- 此 modifier 複製 Empowered Psionics 的 proc_buff，將 proc_events.on_hit 從 0.10 替換成 talent_settings_3.spec_passive_2.empowered_chain_lightning_chance=0.15。
- 共用 on_hit handler 另外執行 CheckProcFunctions.on_kill(params)；不是每次命中必然觸發，且只有成功擊殺才呼叫增加充能函式。
- 若同時選 Overpowering Souls，精英擊殺改走保證充能的 on_kill 事件；一般 on_hit 路徑會排除該精英，避免同一精英擊殺另外再走 15% proc。

## 原始碼依據

- [scripts/settings/ability/archetype_talents/talents/psyker_talents.lua：1752–1789](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/psyker_talents.lua#L1752-L1789)
- [scripts/settings/talent/talent_settings_psyker.lua：310–319](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/talent/talent_settings_psyker.lua#L310-L319)
- [scripts/settings/buff/archetype_buff_templates/psyker_buff_templates.lua：2271–2288](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/psyker_buff_templates.lua#L2271-L2288)
- [scripts/settings/buff/archetype_buff_templates/psyker_buff_templates.lua：2356–2387](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/psyker_buff_templates.lua#L2356-L2387)
- [scripts/settings/ability/archetype_talents/talents/psyker_talents.lua：1752–1789](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/psyker_talents.lua#L1752-L1789)
- [scripts/ui/views/talent_builder_view/layouts/psyker_tree.lua：1374–1399](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/ui/views/talent_builder_view/layouts/psyker_tree.lua#L1374-L1399)

## 算例條件與待確認事項

- **機率算例**：每次都有空位可儲存時，100 次擊殺的期望取得次數由 100 × 10% = 10 次，提高至 100 × 15% = 15 次。隨機結果不保證剛好等於期望值。
- 如果充能已滿，成功 proc 會受 charge cap 限制而不增加可儲存層數。
- 期望值例子假設每次擊殺有空位且機率獨立；遊戲隨機結果不保證平均值。
- 文字與程式來源皆為1.13.1；實際表現仍待遊戲內核對。
- 遊戲原文：1.13.1／Steam Build 25606770 的 ui 資源。描述與實作的差異仍需遊戲內核對；省略細節不列為繁中誤譯。

## 原文核對

- 對應 hash：`542f4465`。
- 同描述鍵的本機繁中與英文效果方向一致。補充公式、恢復上限與事件時序屬描述不完整；公開來源與遊戲文字版本對應為1.13.1。

## 圖示來源

[原圖](https://gameslantern.com/storage/sites/darktide/exporter/talents/psyker/keystone_modifier/psyker_empowered_grenades_passive_improved.webp)｜[圖片來源 Issue](https://github.com/SyuanTsai/Media-Assets/issues/7#issuecomment-5928024966)｜[圖片附件](https://github.com/user-attachments/assets/827d3ef0-dce8-4cb8-8af1-c5ad142d4ec1)

圖片僅供技能辨識，不作機制證據。

