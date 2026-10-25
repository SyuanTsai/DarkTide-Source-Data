# 吊命聖徒(Holy Revenant)：原始碼依據

[English](en/zealot_resist_death_heal.md)

[返回玩家說明](README.md#zealot_resist_death_heal)｜[技術索引](SOURCE_INDEX.md)｜[原文比對](LOCALIZATION_COMPARISON.md#zealot_resist_death_heal)

- 來源版本：Release 1.13.1；固定 SHA：`7e662fcda16219d775b84af50322be2e9cd9d62e`。
- 天賦：`zealot_resist_death_heal`；名稱鍵：`loc_talent_zealot_heal_during_resist_death`；描述鍵：`loc_talent_zealot_resist_death_heal_desc`。
- 節點：`node_18bc94af-2948-4b9a-84e8-5c9408b37343`；分類：鑰石；每節點一點。
- 證據程度：原始碼確認／程式推導；以下算例屬程式推導，未進行遊戲內測試。

## 原始碼確認與程式推導

- 目前樹節點掛載 `zealot_resist_death_leech` 被動與 `zealot_resist_death_staggers` special rule。`on_damage_dealt` 時只有玩家持有 `unkillable` 關鍵字才處理；恢復池按 `params.damage*0.007` 計算，近戰再乘3，因此每100傷害的比例為遠程/其他攻擊0.7生命、近戰2.1生命。
- `heal_amount` 在被動啟動時設為0，符合條件的傷害會累積；生命值達最大值25%時不立即恢復。低於25%時，以 `max_health*0.25-current_health` 封頂後呼叫 `Health.add`。程式限制的是恢復後的目前生命值上限25%，不是總治療量上限；恢復池不會在恢復後扣除。
- 致命觸發時，基礎 buff 讀取 `zealot_resist_death_staggers`，在玩家位置呼叫無傷害擊退爆炸；半徑3.5公尺、damage profile 為 `no_damage_knock`。
- Holy Revenant 與 Zealous Pilgrim 同屬 `exclusive_group=resist_death_1`，兩節點互斥。
- 25%封頂先於Health.add的healing_recieved_modifier，故有治療倍率時結果可能超過25%；主文示例限定無其他治療修正。heal_amount只於start_func重設，沒有每次proc或免死結束後清零，不能將每段免死都視作全新額度。

## 原始碼依據

- [scripts/settings/ability/archetype_talents/talents/zealot_talents.lua：3346–3380](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/zealot_talents.lua#L3346-L3380)
- [scripts/settings/buff/archetype_buff_templates/zealot_buff_templates.lua：3491–3551](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/zealot_buff_templates.lua#L3491-L3551)
- [scripts/settings/buff/archetype_buff_templates/zealot_buff_templates.lua：4960–5018](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/zealot_buff_templates.lua#L4960-L5018)
- [scripts/settings/damage/explosion_templates/player_explosion_templates.lua：130–146](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/damage/explosion_templates/player_explosion_templates.lua#L130-L146)
- [scripts/ui/views/talent_builder_view/layouts/zealot_tree.lua：1270–1295](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/ui/views/talent_builder_view/layouts/zealot_tree.lua#L1270-L1295)
- [scripts/ui/views/talent_builder_view/layouts/zealot_tree.lua：1990–2012](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/ui/views/talent_builder_view/layouts/zealot_tree.lua#L1990-L2012)
- [scripts/extension_systems/health/player_unit_health_extension.lua：212–251](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/health/player_unit_health_extension.lua#L212-L251)
- [scripts/settings/ability/archetype_talents/talents/zealot_talents.lua：3346–3380](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/zealot_talents.lua#L3346-L3380)
- [scripts/ui/views/talent_builder_view/layouts/zealot_tree.lua：1270–1295](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/ui/views/talent_builder_view/layouts/zealot_tree.lua#L1270-L1295)

## 算例條件與待確認事項

- **恢復算例**：假設累積額度原本為 0、沒有其他治療修正，連續兩次各造成 100 點近戰傷害，第一次累積並補 100 × 0.7% × 3 = 2.1 點；第二次額度增至 4.2，再補 4.2 點，合計 6.3 點。
- 恢復只在任何來源的 `unkillable` 關鍵字存在時累積；此升級與 Zealous Pilgrim 互斥。
- 恢復池恢復後不清零；不要把 format_values 的25%欄位當成每次效果或累計總治療量。
- 遊戲原文：1.13.1／Steam Build 25606770 的 ui 資源。描述與實作的差異仍需遊戲內核對；省略細節不列為繁中誤譯。

## 原文核對

- 對應 hash：`7e66622d`。
- 同hash英文 times that amount 的比較對象是治療量；繁中明確改成近戰傷害的倍數，將倍率的作用對象譯錯。另25%額度如何封頂屬實作補充，不把原文省略列為錯誤。

## 圖示來源

[原圖](https://gameslantern.com/storage/sites/darktide/exporter/talents/zealot/keystone_modifier/zealot_resist_death_heal.webp)｜[圖片來源 Issue](https://github.com/SyuanTsai/Media-Assets/issues/8#issuecomment-5929289315)｜[圖片附件](https://github.com/user-attachments/assets/9f0fd090-59a4-4098-b4ed-c2bdfa7d1eab)

圖片僅供技能辨識，不作機制證據。

