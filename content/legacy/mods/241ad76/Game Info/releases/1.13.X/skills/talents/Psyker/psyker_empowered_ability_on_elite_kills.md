# 吞靈強擊(Overpowering Souls)：原始碼依據

[English](en/psyker_empowered_ability_on_elite_kills.md)

[返回玩家說明](README.md#psyker_empowered_ability_on_elite_kills)｜[技術索引](SOURCE_INDEX.md)｜[原文比對](LOCALIZATION_COMPARISON.md#psyker_empowered_ability_on_elite_kills)

- 來源版本：Release 1.13.1；固定 SHA：`7e662fcda16219d775b84af50322be2e9cd9d62e`。
- 天賦：`psyker_empowered_ability_on_elite_kills`；名稱鍵：`loc_talent_psyker_empowered_ability_on_elite_kills`；描述鍵：`loc_talent_psyker_empowered_ability_on_elite_kills_description`。
- 節點：`node_a5fc8414-3a27-4c9b-833c-a5b6c1836a86`；分類：鑰石；每節點一點。
- 證據程度：原始碼確認／程式推導；以下算例屬程式推導，未進行遊戲內測試。

## 原始碼確認與程式推導

- modifier 啟用 psyker_empowered_grenades_stack_on_elite_kills special rule。Buff 初始化時讀取此 flag；on_kill handler 要求 flag 為 true 且 params.tags.elite 才增加一層。
- 基礎 on_hit handler 先確認是擊殺；若 elite guarantee flag 開啟且該擊殺具有 elite tag，會 return，避免精英再觸發一般機率路徑。其他擊殺仍由基礎 10% 路徑判斷。
- 增加充能共用 clamped charge counter；滿層時保證事件不會超過設定上限。

## 原始碼依據

- [scripts/settings/ability/archetype_talents/talents/psyker_talents.lua：1790–1805](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/psyker_talents.lua#L1790-L1805)
- [scripts/settings/talent/talent_settings_psyker.lua：310–315](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/talent/talent_settings_psyker.lua#L310-L315)
- [scripts/settings/buff/archetype_buff_templates/psyker_buff_templates.lua：2260–2269](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/psyker_buff_templates.lua#L2260-L2269)
- [scripts/settings/buff/archetype_buff_templates/psyker_buff_templates.lua：2282–2289](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/psyker_buff_templates.lua#L2282-L2289)
- [scripts/settings/buff/archetype_buff_templates/psyker_buff_templates.lua：2345–2365](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/psyker_buff_templates.lua#L2345-L2365)
- [scripts/settings/ability/archetype_talents/talents/psyker_talents.lua：1790–1805](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/psyker_talents.lua#L1790-L1805)
- [scripts/ui/views/talent_builder_view/layouts/psyker_tree.lua：1423–1448](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/ui/views/talent_builder_view/layouts/psyker_tree.lua#L1423-L1448)

## 算例條件與待確認事項

- **層數算例**：原有 0 層時擊殺一名精英，變成 1 層；基礎上限為 1 層，已滿層時再擊殺不會變成 2 層。搭配充能完畢後，上限提高至 3 層。
- 專家敵人與精英是不同 tag 判斷；此 modifier 的保證條件只讀 params.tags.elite。
- 充能上限另受 Charged Up modifier 影響。
- 文字與程式來源皆為1.13.1；實際表現仍待遊戲內核對。
- 遊戲原文：1.13.1／Steam Build 25606770 的 ui 資源。描述與實作的差異仍需遊戲內核對；省略細節不列為繁中誤譯。

## 原文核對

- 對應 hash：`23c36e9e`。
- 同描述鍵的本機繁中與英文效果方向一致。補充公式、恢復上限與事件時序屬描述不完整；公開來源與遊戲文字版本對應為1.13.1。

## 圖示來源

[原圖](https://gameslantern.com/storage/sites/darktide/exporter/talents/psyker/keystone_modifier/psyker_empowered_ability_on_elite_kills.webp)｜[圖片來源 Issue](https://github.com/SyuanTsai/Media-Assets/issues/7#issuecomment-5928024966)｜[圖片附件](https://github.com/user-attachments/assets/6312d53d-fec2-44c3-b04e-778d2e74e232)

圖片僅供技能辨識，不作機制證據。

