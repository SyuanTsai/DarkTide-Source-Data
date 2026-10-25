# 殉道(Martyrdom)：原始碼依據

[English](en/zealot_martyrdom.md)

[返回玩家說明](README.md#zealot_martyrdom)｜[技術索引](SOURCE_INDEX.md)｜[原文比對](LOCALIZATION_COMPARISON.md#zealot_martyrdom)

- 來源版本：Release 1.13.1；固定 SHA：`7e662fcda16219d775b84af50322be2e9cd9d62e`。
- 天賦：`zealot_martyrdom`；名稱鍵：`loc_talent_zealot_martyrdom`；描述鍵：`loc_talent_zealot_martyrdom_desc`。
- 節點：`node_00de95af-259d-4c82-ae16-91fa3b533ed9`；分類：鑰石；每節點一點。
- 證據程度：原始碼確認／程式推導；以下算例屬程式推導，未進行遊戲內測試。

## 原始碼確認與程式推導

- 技能樹節點掛載 `zealot_martyrdom_base`。Buff 每次更新讀取 `damage_taken` 與 `permanent_damage_taken`，取兩者較大值，再由 Health.calculate_num_segments 以每格最大生命值（max_health/max_wounds）換算剩餘傷口；失去格數再以 5 封頂。
- 基礎效果每格 +10% 傷害、最多 5 格。這是依失去的完整生命格數即時縮放，不是需要擊殺或手動疊層的計時 buff。
- `health_step=0.15` 雖出現在設定表，但此值在目前實際 buff 計算中沒有被讀取；不能據此寫成每缺 15% 生命就獲得一層。
- 生效stat為melee_damage，不能把主頁寫成近戰與遠程通用增傷。

## 原始碼依據

- [scripts/settings/ability/archetype_talents/talents/zealot_talents.lua：924–944](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/zealot_talents.lua#L924-L944)
- [scripts/settings/talent/talent_settings_zealot.lua：329–339](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/talent/talent_settings_zealot.lua#L329-L339)
- [scripts/settings/buff/archetype_buff_templates/zealot_buff_templates.lua：631–652](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/zealot_buff_templates.lua#L631-L652)
- [scripts/settings/buff/archetype_buff_templates/zealot_buff_templates.lua：1335–1384](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/zealot_buff_templates.lua#L1335-L1384)
- [scripts/utilities/health.lua：117–127](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/health.lua#L117-L127)
- [scripts/utilities/attack/damage_calculation.lua：289–303](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/attack/damage_calculation.lua#L289-L303)
- [scripts/settings/ability/archetype_talents/talents/zealot_talents.lua：924–944](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/zealot_talents.lua#L924-L944)
- [scripts/ui/views/talent_builder_view/layouts/zealot_tree.lua：1026–1061](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/ui/views/talent_builder_view/layouts/zealot_tree.lua#L1026-L1061)

## 算例條件與待確認事項

- **傷口算例**：最大生命 200、共 4 格傷口，每格為 50。失去 49 點尚未滿一格，不增加層數；失去 100 點為 2 層，近戰基礎 100 點傷害變成 100 × (1 + 2 × 10%) = 120 點。
- **其他加成**：同樣 2 層、原本已有同階段 25% 近戰增傷時，為 100 × (1 + 25% + 20%) = 145 點。最多 5 層不代表任何傷口數都能在存活時達到滿層。
- 示例採假設值說明公式；實際格寬由該角色目前最大生命值與最大傷口數決定。
- 同一份原始碼的 `health_step=0.15` 是未被這條計算路徑使用的設定，不能用來推導 15% 缺血門檻。
- 遊戲原文：1.13.1／Steam Build 25606770 的 ui 資源。描述與實作的差異仍需遊戲內核對；省略細節不列為繁中誤譯。

## 原文核對

- 對應 hash：`b90da3ce`。
- 英文與繁中方向都是缺失生命傷口格提高傷害；中文若寫成每格 +10%、最多 5 格，與掛載 buff 一致。依傷口格計算的實作細節屬補充說明。

## 圖示來源

[原圖](https://gameslantern.com/storage/sites/darktide/exporter/talents/zealot/keystone/zealot_martyrdom.webp)｜[圖片來源 Issue](https://github.com/SyuanTsai/Media-Assets/issues/8#issuecomment-5929289315)｜[圖片附件](https://github.com/user-attachments/assets/5ac2048f-e48f-49ea-b739-e9c3301e66da)

圖片僅供技能辨識，不作機制證據。

