# 沉重打擊(Hard Knocks)：原始碼依據

[English](en/ogryn_staggering_increases_damage.md)

[返回玩家說明](README.md#ogryn_staggering_increases_damage)｜[技術索引](SOURCE_INDEX.md)｜[原文比對](LOCALIZATION_COMPARISON.md#ogryn_staggering_increases_damage)

- 來源版本：Release 1.13.1；固定 SHA：`7e662fcda16219d775b84af50322be2e9cd9d62e`。
- 天賦：`ogryn_staggering_increases_damage`；名稱鍵：`loc_talent_ogryn_big_bully_heavy_hits`；描述鍵：`loc_talent_ogryn_big_bully_heavy_hits_new_desc`。
- 節點：`node_19bc7a64-5626-472e-9a1c-90f412545e96`；分類：技能；每節點一點。
- 證據程度：原始碼確認／程式推導；以下算例屬程式推導，未進行遊戲內測試。

## 原始碼確認與程式推導

- on_hit 要求on_melee_stagger_hit及非擊殺；on_push_hit要求MinionState.is_minion且當下is_staggered。
- 目標buff max_stacks1 duration5 refresh，melee_damage_taken_modifier=.15，和damage_taken_modifier在_base_damage相加後再乘其他倍率。

## 原始碼依據

- [scripts/settings/buff/archetype_buff_templates/ogryn_buff_templates.lua：3161–3213](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/ogryn_buff_templates.lua#L3161-L3213)
- [scripts/settings/talent/talent_settings_ogryn.lua：124–127](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/talent/talent_settings_ogryn.lua#L124-L127)
- [scripts/utilities/attack/damage_calculation.lua：587–612](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/attack/damage_calculation.lua#L587-L612)
- [scripts/settings/ability/archetype_talents/talents/ogryn_talents.lua：1242–1262](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/ogryn_talents.lua#L1242-L1262)
- [scripts/ui/views/talent_builder_view/layouts/ogryn_tree.lua：433–458](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/ui/views/talent_builder_view/layouts/ogryn_tree.lua#L433-L458)

## 算例條件與待確認事項

- **傷害算例**：基礎 100 點近戰傷害，只有此效果時為 115 點；與削弱敵人同時生效時為 100 × (1 + 15% + 15%) = 130 點。遠程不受本項近戰承傷加成影響。
- 遊戲原文：1.13.1／Steam Build 25606770 的 ui 資源。描述與實作的差異仍需遊戲內核對；省略細節不列為繁中誤譯。

## 原文核對

- 對應 hash：`45b6dfbf`。
- 核對同一描述鍵／hash 的繁中與英文，效果方向未見明確翻譯矛盾；未列公式、上限或細部限制不算錯誤。

## 圖示來源

[原圖](https://gameslantern.com/storage/sites/darktide/exporter/talents/ogryn/default/ogryn_staggering_increases_damage.webp)｜[圖片來源 Issue](https://github.com/SyuanTsai/Media-Assets/issues/10#issuecomment-5931394406)｜[圖片附件](https://github.com/user-attachments/assets/206be198-2a5f-426f-944a-8d85fd74f1d6)

圖片僅供技能辨識，不作機制證據。

