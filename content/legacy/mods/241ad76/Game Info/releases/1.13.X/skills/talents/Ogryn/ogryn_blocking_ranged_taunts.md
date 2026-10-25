# 渴求關注(Attention Seeker)：原始碼依據

[English](en/ogryn_blocking_ranged_taunts.md)

[返回玩家說明](README.md#ogryn_blocking_ranged_taunts)｜[技術索引](SOURCE_INDEX.md)｜[原文比對](LOCALIZATION_COMPARISON.md#ogryn_blocking_ranged_taunts)

- 來源版本：Release 1.13.1；固定 SHA：`7e662fcda16219d775b84af50322be2e9cd9d62e`。
- 天賦：`ogryn_blocking_ranged_taunts`；名稱鍵：`loc_talent_ranged_enemies_taunt`；描述鍵：`loc_talent_ranged_enemies_taunt_description`。
- 節點：`node_60907136-b068-4b78-9e88-200e0abbf64f`；分類：技能；每節點一點。
- 證據程度：原始碼確認／程式推導；以下算例屬程式推導，未進行遊戲內測試。

## 原始碼確認與程式推導

- on_block/on_push_hit，affected=attacking_unit或pushed_unit；排除monster，has_keyword taunted時不再加。taunted_short clone duration8；共用退出檢查owner存活、invisible/unperceivable與制伏條件。

## 原始碼依據

- [scripts/settings/buff/archetype_buff_templates/ogryn_buff_templates.lua：489–526](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/ogryn_buff_templates.lua#L489-L526)
- [scripts/settings/buff/weapon_buff_templates.lua：1204–1270](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/weapon_buff_templates.lua#L1204-L1270)
- [scripts/settings/ability/archetype_talents/talents/ogryn_talents.lua：1008–1029](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/ogryn_talents.lua#L1008-L1029)
- [scripts/ui/views/talent_builder_view/layouts/ogryn_tree.lua：1473–1497](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/ui/views/talent_builder_view/layouts/ogryn_tree.lua#L1473-L1497)

## 算例條件與待確認事項

- 遊戲原文：1.13.1／Steam Build 25606770 的 ui 資源。描述與實作的差異仍需遊戲內核對；省略細節不列為繁中誤譯。

## 原文核對

- 對應 hash：`a01a7f7f`。
- 核對同一描述鍵／hash 的繁中與英文，效果方向未見明確翻譯矛盾；未列公式、上限或細部限制不算錯誤。

## 圖示來源

[原圖](https://gameslantern.com/storage/sites/darktide/exporter/talents/ogryn/default/ogryn_blocking_ranged_taunts.webp)｜[圖片來源 Issue](https://github.com/SyuanTsai/Media-Assets/issues/10#issuecomment-5931394406)｜[圖片附件](https://github.com/user-attachments/assets/119478f3-6425-4e96-9f26-e0df95a4bf1e)

圖片僅供技能辨識，不作機制證據。

