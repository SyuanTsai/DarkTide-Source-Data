# 彈藥補給艙(Ammunition-Restoration Pod)：原始碼依據

[English](en/cryptic_passive_ammo_replenishment.md)

[返回玩家說明](README.md#cryptic_passive_ammo_replenishment)｜[技術索引](SOURCE_INDEX.md)｜[原文比對](LOCALIZATION_COMPARISON.md#cryptic_passive_ammo_replenishment)

- 來源版本：Release 1.13.1；固定 SHA：`7e662fcda16219d775b84af50322be2e9cd9d62e`。
- 天賦：`cryptic_passive_ammo_replenishment`；名稱鍵：`loc_talent_cryptic_passive_ammo_replenishment`；描述鍵：`loc_talent_cryptic_passive_ammo_replenishment_desc`。
- 節點：`node_ea18c305-acab-479a-8fd9-3c700199f611`；分類：技能；每節點一點。
- 證據程度：原始碼確認／程式推導；以下算例屬程式推導，未進行遊戲內測試。

## 原始碼確認與程式推導

- interval15，Ammo.add_to_all_slots(0.01)遍歷武器欄，max_reserve>0才補；floor(amount)，小數保存在give_ammo_carryover_percentages。
- new_amount=min(reserve+gain,max_reserve+missing_clip)，不是硬截在純reserve。

## 原始碼依據

- [scripts/utilities/ammo.lua：494–528](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/ammo.lua#L494-L528)
- [scripts/settings/talent/talent_settings_cryptic.lua：520–523](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/talent/talent_settings_cryptic.lua#L520-L523)
- [scripts/settings/buff/archetype_buff_templates/cryptic_buff_templates.lua：2932–2946](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/cryptic_buff_templates.lua#L2932-L2946)
- [scripts/settings/ability/archetype_talents/talents/cryptic_talents.lua：2181–2199](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/cryptic_talents.lua#L2181-L2199)
- [scripts/ui/views/talent_builder_view/layouts/cryptic_tree.lua：1987–2012](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/ui/views/talent_builder_view/layouts/cryptic_tree.lua#L1987-L2012)

## 算例條件與待確認事項

- **取整算例**：儲備上限 250 發，每次累計 250 × 1% = 2.5 發；先補 2 發並保留 0.5，下次合計補 3 發。連續四次共補 10 發。
- 遊戲原文：1.13.1／Steam Build 25606770 的 ui 資源。描述與實作的差異仍需遊戲內核對；省略細節不列為繁中誤譯。

## 原文核對

- 對應 hash：`41aa3ba1`。
- 雙語一致；補充小數累計及備用彈藥/彈匣區分。

## 圖示來源

[原圖](https://gameslantern.com/storage/sites/darktide/exporter/talents/cryptic/default/cryptic_passive_ammo_replenishment.webp)｜[圖片來源 Issue](https://github.com/SyuanTsai/Media-Assets/issues/13#issuecomment-5935653628)｜[圖片附件](https://github.com/user-attachments/assets/5330c87c-7abe-4993-8eb2-5cb11586c013)

圖片僅供技能辨識，不作機制證據。

