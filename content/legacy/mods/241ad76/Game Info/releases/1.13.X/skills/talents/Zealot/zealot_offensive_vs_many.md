# 逆境而上(Against the Odds)：原始碼依據

[English](en/zealot_offensive_vs_many.md)

[返回玩家說明](README.md#zealot_offensive_vs_many)｜[技術索引](SOURCE_INDEX.md)｜[原文比對](LOCALIZATION_COMPARISON.md#zealot_offensive_vs_many)

- 來源版本：Release 1.13.1；固定 SHA：`7e662fcda16219d775b84af50322be2e9cd9d62e`。
- 天賦：`zealot_offensive_vs_many`；名稱鍵：`loc_talent_zealot_offensive_vs_many`；描述鍵：`loc_talent_zealot_offensive_vs_many_desc`。
- 節點：`node_5f6902c3-f9af-4bbf-b4ad-68a0d7da94a1`；分類：技能；每節點一點。
- 證據程度：原始碼確認／程式推導；以下算例屬程式推導，未進行遊戲內測試。

## 原始碼確認與程式推導

- broadphase半徑5、每.1秒檢查；stacks=min(1+floor((N−2)/2),5)當N>=2，否則0。damage每層.02，max_hit_mass_attack_modifier每層.1，lerp以stacks/5。disabled時回0。

## 原始碼依據

- [scripts/settings/buff/archetype_buff_templates/zealot_buff_templates.lua：3129–3220](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/zealot_buff_templates.lua#L3129-L3220)
- [scripts/settings/talent/talent_settings_zealot.lua：214–221](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/talent/talent_settings_zealot.lua#L214-L221)
- [scripts/utilities/attack/damage_calculation.lua：289–303](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/attack/damage_calculation.lua#L289-L303)
- [scripts/settings/ability/archetype_talents/talents/zealot_talents.lua：2644–2676](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/zealot_talents.lua#L2644-L2676)
- [scripts/ui/views/talent_builder_view/layouts/zealot_tree.lua：1967–1989](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/ui/views/talent_builder_view/layouts/zealot_tree.lua#L1967-L1989)

## 算例條件與待確認事項

- **傷害算例**：附近 6 名敵人為 3 層，基礎 100 點變成 100 × (1 + 3 × 2%) = 106 點；10 名以上最多 110 點。同階段其他傷害加成先相加。
- **順劈算例**：原本可穿透的敵人體型總量為 10，3 層時變成 10 × (1 + 3 × 10%) = 13；滿層為 15。這是可穿透總量，不等於固定多命中 3 或 5 名敵人。
- 順劈例子只示範體型額度，護甲、武器、敵人体型與順劈傷害分布仍影響實際命中。
- 遊戲原文：1.13.1／Steam Build 25606770 的 ui 資源。描述與實作的差異仍需遊戲內核對；省略細節不列為繁中誤譯。

## 原文核對

- 對應 hash：`d2cd1130`。
- 核對同一描述鍵／hash 的繁中與英文，效果方向未見明確翻譯矛盾；未列公式、上限或細部限制不算錯誤。

## 圖示來源

[原圖](https://gameslantern.com/storage/sites/darktide/exporter/talents/zealot/default/zealot_offensive_vs_many.webp)｜[圖片來源 Issue](https://github.com/SyuanTsai/Media-Assets/issues/8#issuecomment-5929296872)｜[圖片附件](https://github.com/user-attachments/assets/9b626554-120f-43b1-b152-bf21224b6a42)

圖片僅供技能辨識，不作機制證據。

