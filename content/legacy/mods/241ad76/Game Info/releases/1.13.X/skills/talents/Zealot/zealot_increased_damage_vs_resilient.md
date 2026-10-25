# 淨化不潔(Purge the Unclean)：原始碼依據

[English](en/zealot_increased_damage_vs_resilient.md)

[返回玩家說明](README.md#zealot_increased_damage_vs_resilient)｜[技術索引](SOURCE_INDEX.md)｜[原文比對](LOCALIZATION_COMPARISON.md#zealot_increased_damage_vs_resilient)

- 來源版本：Release 1.13.1；固定 SHA：`7e662fcda16219d775b84af50322be2e9cd9d62e`。
- 天賦：`zealot_increased_damage_vs_resilient`；名稱鍵：`loc_talent_zealot_3_passive_2`；描述鍵：`loc_talent_zealot_3_passive_2_description`。
- 節點：`node_a827f270-b198-4fa8-be77-59feaebb2fc1`；分類：技能；每節點一點。
- 證據程度：原始碼確認／程式推導；以下算例屬程式推導，未進行遊戲內測試。

## 原始碼確認與程式推導

- 模板將 disgustingly_resilient_damage、resistant_damage 各加.2，對應實際armor type，由_apply_armor_type_buffs_to_damage使用；不是對所有外觀看似感染的敵人通用。兩種互斥護甲類型不把加成相加成40%。

## 原始碼依據

- [scripts/settings/buff/archetype_buff_templates/zealot_buff_templates.lua：1000–1010](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/zealot_buff_templates.lua#L1000-L1010)
- [scripts/settings/talent/talent_settings_zealot.lua：469–472](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/talent/talent_settings_zealot.lua#L469-L472)
- [scripts/utilities/attack/damage_calculation.lua：192–205](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/attack/damage_calculation.lua#L192-L205)
- [scripts/settings/ability/archetype_talents/talents/zealot_talents.lua：1363–1379](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/zealot_talents.lua#L1363-L1379)
- [scripts/ui/views/talent_builder_view/layouts/zealot_tree.lua：122–151](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/ui/views/talent_builder_view/layouts/zealot_tree.lua#L122-L151)

## 算例條件與待確認事項

- **傷害算例**：只看這項護甲類型加成，原有 100 點變成 100 × 1.20 = 120 點。若已有 10% 同類加成，則由 110 點變成 100 × (1 + 10% + 20%) = 130 點，實際增幅約 18.18%。
- 遊戲原文：1.13.1／Steam Build 25606770 的 ui 資源。描述與實作的差異仍需遊戲內核對；省略細節不列為繁中誤譯。

## 原文核對

- 對應 hash：`96b4257f`。
- 核對同一描述鍵／hash 的繁中與英文，效果方向未見明確翻譯矛盾；未列公式、上限或細部限制不算錯誤。

## 圖示來源

[原圖](https://gameslantern.com/storage/sites/darktide/exporter/talents/zealot/default/zealot_increased_damage_vs_resilient.webp)｜[圖片來源 Issue](https://github.com/SyuanTsai/Media-Assets/issues/8#issuecomment-5929289315)｜[圖片附件](https://github.com/user-attachments/assets/162368d9-1a5d-4273-a2cd-4ab8c3c22a6d)

圖片僅供技能辨識，不作機制證據。

