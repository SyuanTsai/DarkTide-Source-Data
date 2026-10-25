# 殺戮時刻(Time to Kill)：原始碼依據

[English](en/zealot_backstab_periodic_damage.md)

[返回玩家說明](README.md#zealot_backstab_periodic_damage)｜[技術索引](SOURCE_INDEX.md)｜[原文比對](LOCALIZATION_COMPARISON.md#zealot_backstab_periodic_damage)

- 來源版本：Release 1.13.1；固定 SHA：`7e662fcda16219d775b84af50322be2e9cd9d62e`。
- 天賦：`zealot_backstab_periodic_damage`；名稱鍵：`loc_talent_zealot_backstab_periodic_damage`；描述鍵：`loc_talent_zealot_backstab_periodic_damage_desc`。
- 節點：`node_1fbb7b5c-aac2-4489-9a39-9a9eab68f484`；分類：技能；每節點一點。
- 證據程度：原始碼確認／程式推導；以下算例屬程式推導，未進行遊戲內測試。

## 原始碼確認與程式推導

- conditional_stat_buffs backstab_damage+.5在context.active即非冷卻時生效，on_hit配is_damaging_backstab觸發冷卻8。allow_backstabbing常駐，增傷條件仍受CD；背刺計算獨立於finesse額外傷害。

## 原始碼依據

- [scripts/settings/buff/archetype_buff_templates/zealot_buff_templates.lua：3221–3248](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/zealot_buff_templates.lua#L3221-L3248)
- [scripts/settings/talent/talent_settings_zealot.lua：222–225](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/talent/talent_settings_zealot.lua#L222-L225)
- [scripts/utilities/attack/damage_calculation.lua：95–109](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/attack/damage_calculation.lua#L95-L109)
- [scripts/utilities/attack/damage_calculation.lua：848–861](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/attack/damage_calculation.lua#L848-L861)
- [scripts/utilities/attack/attack_positioning.lua：9–65](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/attack/attack_positioning.lua#L9-L65)
- [scripts/settings/ability/archetype_talents/talents/zealot_talents.lua：2677–2696](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/zealot_talents.lua#L2677-L2696)
- [scripts/ui/views/talent_builder_view/layouts/zealot_tree.lua：1941–1966](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/ui/views/talent_builder_view/layouts/zealot_tree.lua#L1941-L1966)

## 算例條件與待確認事項

- **傷害算例**：固定其他條件、該階段基準為 100，沒有其他背刺加成時為 100 × 1.5 = 150 點；若已有同階段 20% 背刺加成，則由 120 變成 100 × (1 + 20% + 50%) = 170 點。
- 遊戲原文：1.13.1／Steam Build 25606770 的 ui 資源。描述與實作的差異仍需遊戲內核對；省略細節不列為繁中誤譯。

## 原文核對

- 對應 hash：`f5f63199`。
- 核對同一描述鍵／hash 的繁中與英文，效果方向未見明確翻譯矛盾；未列公式、上限或細部限制不算錯誤。

## 圖示來源

[原圖](https://gameslantern.com/storage/sites/darktide/exporter/talents/zealot/default/zealot_backstab_periodic_damage.webp)｜[圖片來源 Issue](https://github.com/SyuanTsai/Media-Assets/issues/8#issuecomment-5929296872)｜[圖片附件](https://github.com/user-attachments/assets/4bf327a5-94f0-4af9-ad51-b3380308846e)

圖片僅供技能辨識，不作機制證據。

