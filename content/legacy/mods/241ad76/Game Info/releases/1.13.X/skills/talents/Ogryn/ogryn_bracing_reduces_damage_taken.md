# 機動部署(Mobile Emplacement)：原始碼依據

[English](en/ogryn_bracing_reduces_damage_taken.md)

[返回玩家說明](README.md#ogryn_bracing_reduces_damage_taken)｜[技術索引](SOURCE_INDEX.md)｜[原文比對](LOCALIZATION_COMPARISON.md#ogryn_bracing_reduces_damage_taken)

- 來源版本：Release 1.13.1；固定 SHA：`7e662fcda16219d775b84af50322be2e9cd9d62e`。
- 天賦：`ogryn_bracing_reduces_damage_taken`；名稱鍵：`loc_talent_ogryn_bracing_reduces_damage_taken`；描述鍵：`loc_talent_ogryn_bracing_or_shooting_reduces_damage_taken_desc`。
- 節點：`node_f0ccd932-4fd0-4f73-a020-fc4cb666b60f`；分類：技能；每節點一點。
- 證據程度：原始碼確認／程式推導；以下算例屬程式推導，未進行遊戲內測試。

## 原始碼確認與程式推導

- conditional damage_taken_multiplier .75，braced||shooting||(t<=end+.5)，未限定incoming攻擊類型。

## 原始碼依據

- [scripts/settings/buff/archetype_buff_templates/ogryn_buff_templates.lua：572–599](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/ogryn_buff_templates.lua#L572-L599)
- [scripts/utilities/attack/damage_calculation.lua：587–612](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/attack/damage_calculation.lua#L587-L612)
- [scripts/settings/ability/archetype_talents/talents/ogryn_talents.lua：957–982](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/ogryn_talents.lua#L957-L982)
- [scripts/ui/views/talent_builder_view/layouts/ogryn_tree.lua：2254–2280](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/ui/views/talent_builder_view/layouts/ogryn_tree.lua#L2254-L2280)

## 算例條件與待確認事項

- **減傷算例**：此階段原本 100 點傷害變成 100 × 0.75 = 75 點；另有獨立 20% 減傷時為 60 點。
- 遊戲原文：1.13.1／Steam Build 25606770 的 ui 資源。描述與實作的差異仍需遊戲內核對；省略細節不列為繁中誤譯。

## 原文核對

- 對應 hash：`7467e28d`。
- 核對同一描述鍵／hash 的繁中與英文，效果方向未見明確翻譯矛盾；未列公式、上限或細部限制不算錯誤。

## 圖示來源

[原圖](https://gameslantern.com/storage/sites/darktide/exporter/talents/ogryn/default/ogryn_bracing_reduces_damage_taken.webp)｜[圖片來源 Issue](https://github.com/SyuanTsai/Media-Assets/issues/10#issuecomment-5931394406)｜[圖片附件](https://github.com/user-attachments/assets/38b1d6e0-b6a5-4692-92a2-fe6caf0b9083)

圖片僅供技能辨識，不作機制證據。

