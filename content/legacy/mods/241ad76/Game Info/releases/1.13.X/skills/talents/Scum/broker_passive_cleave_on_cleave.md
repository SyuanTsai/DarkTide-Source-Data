# 趁勝追擊(Battering Momentum)：原始碼依據

[English](en/broker_passive_cleave_on_cleave.md)

[返回玩家說明](README.md#broker_passive_cleave_on_cleave)｜[技術索引](SOURCE_INDEX.md)｜[原文比對](LOCALIZATION_COMPARISON.md#broker_passive_cleave_on_cleave)

- 來源版本：Release 1.13.1；固定 SHA：`7e662fcda16219d775b84af50322be2e9cd9d62e`。
- 天賦：`broker_passive_cleave_on_cleave`；名稱鍵：`loc_talent_broker_passive_cleave_on_cleave`；描述鍵：`loc_talent_broker_passive_cleave_on_cleave_desc`。
- 節點：`node_32ac314d-2d6e-421b-8ced-27ce00dc62e5`；分類：技能；每節點一點。
- 證據程度：原始碼確認／程式推導；以下算例屬程式推導，未進行遊戲內測試。

## 原始碼確認與程式推導

- on_melee_hit的target_number>=3且未procced時加子Buff；target_number<3重設procced。
- child max_hit_mass_attack/impact_modifier=.5，on_hit且target_number<3時remove_on_proc。子Buff消耗判斷不限近戰；同一次順劈的取值時機受攻擊流程影響，不擅自保證在原次後段完全不生效。

## 原始碼依據

- [scripts/settings/buff/archetype_buff_templates/broker_buff_templates.lua：2296–2310](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/broker_buff_templates.lua#L2296-L2310)
- [scripts/utilities/attack/damage_profile.lua：42–64](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/attack/damage_profile.lua#L42-L64)
- [scripts/settings/buff/archetype_buff_templates/broker_buff_templates.lua：2276–2295](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/broker_buff_templates.lua#L2276-L2295)
- [scripts/settings/ability/archetype_talents/talents/broker_talents.lua：1864–1896](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/broker_talents.lua#L1864-L1896)
- [scripts/ui/views/talent_builder_view/layouts/broker_tree.lua：2168–2195](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/ui/views/talent_builder_view/layouts/broker_tree.lua#L2168-L2195)

## 算例條件與待確認事項

- **順劈算例**：原本傷害順劈容量 10、踉蹌順劈容量 8，分別變成 10 × 1.5 = 15、8 × 1.5 = 12。實際命中人數仍取決於敵人質量與武器限制。
- 同次攻擊後段是否已讀到新加成，以及不同武器的順劈取樣時機，未做遊戲內驗證。
- 遊戲原文：1.13.1／Steam Build 25606770 的 ui 資源。描述與實作的差異仍需遊戲內核對；省略細節不列為繁中誤譯。

## 原文核對

- 對應 hash：`04b9c8f2`。
- 兩語均為一次命中至少3名後，下次攻擊增加順劈；消耗事件的細節為補充。

## 圖示來源

[原圖](https://gameslantern.com/storage/sites/darktide/exporter/talents/broker/default/broker_passive_cleave_on_cleave.webp)｜[圖片來源 Issue](https://github.com/SyuanTsai/Media-Assets/issues/12#issuecomment-5933987866)｜[圖片附件](https://github.com/user-attachments/assets/6fa27fb0-2d79-43fc-b74a-d64da58773f6)

圖片僅供技能辨識，不作機制證據。

