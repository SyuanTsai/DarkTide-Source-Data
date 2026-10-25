# 巢都格鬥家(Hive City Brawler)：原始碼依據

[English](en/broker_passive_dr_damage_tradeoff_on_stamina.md)

[返回玩家說明](README.md#broker_passive_dr_damage_tradeoff_on_stamina)｜[技術索引](SOURCE_INDEX.md)｜[原文比對](LOCALIZATION_COMPARISON.md#broker_passive_dr_damage_tradeoff_on_stamina)

- 來源版本：Release 1.13.1；固定 SHA：`7e662fcda16219d775b84af50322be2e9cd9d62e`。
- 天賦：`broker_passive_dr_damage_tradeoff_on_stamina`；名稱鍵：`loc_talent_broker_passive_dr_damage_tradeoff_on_stamina`；描述鍵：`loc_talent_broker_passive_dr_damage_tradeoff_on_stamina_desc`。
- 節點：`node_9fd091a0-462c-42cb-917a-ba7755c9fc94`；分類：技能；每節點一點。
- 證據程度：原始碼確認／程式推導；以下算例屬程式推導，未進行遊戲內測試。

## 原始碼確認與程式推導

- damage_taken_multiplier=lerp(1,.8,stamina%)；melee_damage=lerp(0,.2,1−stamina%)。兩stat分別multiplicative與additive。

## 原始碼依據

- [scripts/utilities/attack/damage_calculation.lua：293–301](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/attack/damage_calculation.lua#L293-L301)
- [scripts/utilities/attack/damage_calculation.lua：587–614](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/attack/damage_calculation.lua#L587-L614)
- [scripts/settings/buff/archetype_buff_templates/broker_buff_templates.lua：2195–2232](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/broker_buff_templates.lua#L2195-L2232)
- [scripts/settings/ability/archetype_talents/talents/broker_talents.lua：1734–1765](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/broker_talents.lua#L1734-L1765)
- [scripts/ui/views/talent_builder_view/layouts/broker_tree.lua：1762–1787](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/ui/views/talent_builder_view/layouts/broker_tree.lua#L1762-L1787)

## 算例條件與待確認事項

- **半耐力算例**：剩餘 50% 耐力時，減傷與近戰增傷各 10%。單計本效果，原本承受 100 點變成 90，原本造成 100 點近戰傷害變成 110。
- **滿空耐力算例**：滿耐力時承傷 100 × 0.8 = 80，近戰不增傷；耐力耗盡時不減傷，近戰則為 100 × 1.2 = 120。
- 遊戲原文：1.13.1／Steam Build 25606770 的 ui 資源。描述與實作的差異仍需遊戲內核對；省略細節不列為繁中誤譯。

## 原文核對

- 對應 hash：`2fe3c231`。
- 兩語均按剩餘耐力減傷、已用耐力增傷，未見矛盾。

## 圖示來源

[原圖](https://gameslantern.com/storage/sites/darktide/exporter/talents/broker/default/broker_passive_dr_damage_tradeoff_on_stamina.webp)｜[圖片來源 Issue](https://github.com/SyuanTsai/Media-Assets/issues/12#issuecomment-5933987866)｜[圖片附件](https://github.com/user-attachments/assets/5cb31261-7422-451a-9aac-d1c38b48c802)

圖片僅供技能辨識，不作機制證據。

