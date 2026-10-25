# 吸血閃電(Psychic Leeching)：原始碼依據

[English](en/psyker_empowered_chain_lightnings_replenish_toughness_to_allies.md)

[返回玩家說明](README.md#psyker_empowered_chain_lightnings_replenish_toughness_to_allies)｜[技術索引](SOURCE_INDEX.md)｜[原文比對](LOCALIZATION_COMPARISON.md#psyker_empowered_chain_lightnings_replenish_toughness_to_allies)

- 來源版本：Release 1.13.1；固定 SHA：`7e662fcda16219d775b84af50322be2e9cd9d62e`。
- 天賦：`psyker_empowered_chain_lightnings_replenish_toughness_to_allies`；名稱鍵：`loc_talent_psyker_empowered_chain_lightnings_replenish_toughness_to_allies`；描述鍵：`loc_talent_psyker_empowered_chain_lightnings_replenish_toughness_to_allies_description`。
- 節點：`node_8ff8fcfb-3f13-497f-9288-0afc05b5cb55`；分類：鑰石；每節點一點。
- 證據程度：原始碼確認／程式推導；以下算例屬程式推導，未進行遊戲內測試。

## 原始碼確認與程式推導

- talent_settings_3.spec_passive_1.toughness_for_allies=0.2；modifier 開啟 special_rule psyker_empowered_grenades_toughness_on_attack。
- 強化 buff 處理 Smite projectile／smite damage event 時先嘗試消耗充能；成功後若 modifier 生效，遍歷 coherency_extension:in_coherence_units() 並對每名單位 replenish_percentage(...,0.2)。
- 連鎖閃電 start event 只在 charges>=1 時走韌性恢復；charge 消耗留在 on_chain_lightning_finish。兩個事件都不依命中目標數重複恢復。

## 原始碼依據

- [scripts/settings/ability/archetype_talents/talents/psyker_talents.lua：1732–1751](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/psyker_talents.lua#L1732-L1751)
- [scripts/settings/talent/talent_settings_psyker.lua：373–375](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/talent/talent_settings_psyker.lua#L373-L375)
- [scripts/settings/buff/archetype_buff_templates/psyker_buff_templates.lua：2282–2297](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/psyker_buff_templates.lua#L2282-L2297)
- [scripts/settings/buff/archetype_buff_templates/psyker_buff_templates.lua：2298–2344](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/psyker_buff_templates.lua#L2298-L2344)
- [scripts/settings/buff/archetype_buff_templates/psyker_buff_templates.lua：2367–2383](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/psyker_buff_templates.lua#L2367-L2383)
- [scripts/settings/ability/archetype_talents/talents/psyker_talents.lua：1732–1751](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/psyker_talents.lua#L1732-L1751)
- [scripts/ui/views/talent_builder_view/layouts/psyker_tree.lua：1400–1422](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/ui/views/talent_builder_view/layouts/psyker_tree.lua#L1400-L1422)

## 算例條件與待確認事項

- **恢復算例**：最大韌性 100 的玩家恢復 100 × 20% = 20 點；最大韌性 150 的玩家恢復 30 點，各自以缺額為上限。一次懲戒命中更多敵人不會增加這次恢復量。
- 實際恢復量不能超過各單位當下的韌性缺口。
- 被遍歷對象以協同系統傳回的 in_coherence_units 集合為準；此稿依天賦文字稱呼玩家及協同隊友，不枚舉各種協同資格邊界。
- 需要先有靈能強化充能；沒有充能時不觸發這組強化韌性效果。
- 文字與程式來源皆為1.13.1；實際表現仍待遊戲內核對。
- 遊戲原文：1.13.1／Steam Build 25606770 的 ui 資源。描述與實作的差異仍需遊戲內核對；省略細節不列為繁中誤譯。

## 原文核對

- 對應 hash：`0f6ef5af`。
- 同描述鍵的本機繁中與英文效果方向一致。補充公式、恢復上限與事件時序屬描述不完整；公開來源與遊戲文字版本對應為1.13.1。

## 圖示來源

[原圖](https://gameslantern.com/storage/sites/darktide/exporter/talents/psyker/keystone_modifier/psyker_empowered_chain_lightnings_replenish_toughness_to_allies.webp)｜[圖片來源 Issue](https://github.com/SyuanTsai/Media-Assets/issues/7#issuecomment-5928024966)｜[圖片附件](https://github.com/user-attachments/assets/38c99293-d836-4a4e-91fb-1f6a65a848f8)

圖片僅供技能辨識，不作機制證據。

