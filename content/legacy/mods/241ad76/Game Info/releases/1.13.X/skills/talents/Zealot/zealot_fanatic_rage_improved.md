# 正義勇士(Righteous Warrior)：原始碼依據

[English](en/zealot_fanatic_rage_improved.md)

[返回玩家說明](README.md#zealot_fanatic_rage_improved)｜[技術索引](SOURCE_INDEX.md)｜[原文比對](LOCALIZATION_COMPARISON.md#zealot_fanatic_rage_improved)

- 來源版本：Release 1.13.1；固定 SHA：`7e662fcda16219d775b84af50322be2e9cd9d62e`。
- 天賦：`zealot_fanatic_rage_improved`；名稱鍵：`loc_talent_zealot_fanatic_rage_improved`；描述鍵：`loc_talent_zealot_fanatic_rage_improved_desc`。
- 節點：`node_23264a41-d011-4792-a45e-ea68c7d5b27f`；分類：鑰石；每節點一點。
- 證據程度：原始碼確認／程式推導；以下算例屬程式推導，未進行遊戲內測試。

## 原始碼確認與程式推導

- 升級授予 `zealot_preacher_increased_crit_chance` special rule。基礎 Fury buff 給予 `passive_1.crit_chance=0.15`；conditional stat buff 僅在該特殊規則存在時再加 `spec_passive_2.crit_chance=0.10`。
- 這是10個百分點的額外爆擊率，非將原爆擊率乘以1.1；僅 Fury buff 存在時生效，與升級本身沒有額外層數或獨立冷卻。

## 原始碼依據

- [scripts/settings/ability/archetype_talents/talents/zealot_talents.lua：1108–1138](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/zealot_talents.lua#L1108-L1138)
- [scripts/settings/talent/talent_settings_zealot.lua：459–468](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/talent/talent_settings_zealot.lua#L459-L468)
- [scripts/settings/talent/talent_settings_zealot.lua：527–529](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/talent/talent_settings_zealot.lua#L527-L529)
- [scripts/settings/buff/archetype_buff_templates/zealot_buff_templates.lua：921–978](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/zealot_buff_templates.lua#L921-L978)
- [scripts/ui/views/talent_builder_view/layouts/zealot_tree.lua：1354–1376](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/ui/views/talent_builder_view/layouts/zealot_tree.lua#L1354-L1376)
- [scripts/settings/ability/archetype_talents/talents/zealot_talents.lua：1108–1128](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/zealot_talents.lua#L1108-L1128)
- [scripts/ui/views/talent_builder_view/layouts/zealot_tree.lua：1354–1376](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/ui/views/talent_builder_view/layouts/zealot_tree.lua#L1354-L1376)

## 算例條件與待確認事項

- **爆擊率算例**：原本爆擊率 5%，搭配此升級進入狂怒後為 5% + 15% + 10% = 30%。這是追加機率，不是把原本 5% 乘以 1.25。
- 這是天賦給的加成值；武器、角色基礎值及其他暴擊修正仍會影響最終顯示／判定。
- 遊戲原文：1.13.1／Steam Build 25606770 的 ui 資源。描述與實作的差異仍需遊戲內核對；省略細節不列為繁中誤譯。

## 原文核對

- 對應 hash：`cde6c5ff`。
- 繁中與英文都描述此升級提高熾熱虔誠提供的爆擊率；以百分點與總和表達是為免誤讀。

## 圖示來源

[原圖](https://gameslantern.com/storage/sites/darktide/exporter/talents/zealot/keystone_modifier/zealot_fanatic_rage_improved.webp)｜[圖片來源 Issue](https://github.com/SyuanTsai/Media-Assets/issues/8#issuecomment-5929289315)｜[圖片附件](https://github.com/user-attachments/assets/9d85e538-7fb1-4308-99b9-7ed9408eead2)

圖片僅供技能辨識，不作機制證據。

