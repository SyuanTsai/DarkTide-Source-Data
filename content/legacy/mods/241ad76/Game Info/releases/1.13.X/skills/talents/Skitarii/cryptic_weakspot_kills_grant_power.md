# 反應爐線圈充能(Reactor Coil Recharge)：原始碼依據

[English](en/cryptic_weakspot_kills_grant_power.md)

[返回玩家說明](README.md#cryptic_weakspot_kills_grant_power)｜[技術索引](SOURCE_INDEX.md)｜[原文比對](LOCALIZATION_COMPARISON.md#cryptic_weakspot_kills_grant_power)

- 來源版本：Release 1.13.1；固定 SHA：`7e662fcda16219d775b84af50322be2e9cd9d62e`。
- 天賦：`cryptic_weakspot_kills_grant_power`；名稱鍵：`loc_talent_cryptic_weakspot_kills_grant_power`；描述鍵：`loc_talent_cryptic_weakspot_kills_grant_power_desc`。
- 節點：`node_ade5d487-8fea-4bdd-8a72-ee470110c2a9`；分類：能力；每節點一點。
- 證據程度：原始碼確認／程式推導；以下算例屬程式推導，未進行遊戲內測試。

## 原始碼確認與程式推導

- 弱點擊殺天賦監聽 on_kill，檢查 attack_result 為 died 且 hit_weakspot=true；不要求特定武器類型。成功後以0.02呼叫 restore_ability_charge_percentage。
- 此函式以單次使用成本（充能能力則為每份成本）乘0.02作為恢復點數。護教軍戰鬥技能單份成本50，所以每次弱點擊殺增加1資源點，不是整個三份資源池的2%。
- 資源恢復會按最大資源池封頂；底層以固定精度儲存小數，顯示可用完整份數則以 floor(資源 / 每份成本) 計算。

## 原始碼依據

- [scripts/settings/ability/archetype_talents/talents/cryptic_talents.lua：1610–1628](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/cryptic_talents.lua#L1610-L1628)
- [scripts/settings/talent/talent_settings_cryptic.lua：437–439](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/talent/talent_settings_cryptic.lua#L437-L439)
- [scripts/settings/buff/archetype_buff_templates/cryptic_buff_templates.lua：2013–2033](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/cryptic_buff_templates.lua#L2013-L2033)
- [scripts/settings/buff/helper_functions/check_proc_functions.lua：84–94](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/helper_functions/check_proc_functions.lua#L84-L94)
- [scripts/extension_systems/ability/player_unit_ability_extension.lua：1081–1103](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/ability/player_unit_ability_extension.lua#L1081-L1103)
- [scripts/extension_systems/ability/player_unit_ability_extension.lua：1127–1156](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/ability/player_unit_ability_extension.lua#L1127-L1156)
- [scripts/extension_systems/ability/player_unit_ability_extension.lua：861–872](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/ability/player_unit_ability_extension.lua#L861-L872)
- [scripts/settings/ability/archetype_talents/talents/cryptic_talents.lua：1610–1628](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/cryptic_talents.lua#L1610-L1628)
- [scripts/ui/views/talent_builder_view/layouts/cryptic_tree.lua：1429–1455](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/ui/views/talent_builder_view/layouts/cryptic_tree.lua#L1429-L1455)

## 算例條件與待確認事項

- 50點成本的戰鬥技能，取得1次弱點擊殺 50 × 2% = 1點電容量；需累積到50點才多出一份完整充能。
- 從空資源池累積50次弱點擊殺，未啟動能力 50 × 1點 = 50點，等於一份充能；三份上限的150點資源池會按上限封頂。
- 2%以單份充能成本為基準，不是最大三份資源池的2%；增加充能上限不會提高這筆恢復量；只有單份成本變更才會改變每次恢復點數。
- 只在命中弱點且該擊殺事件判為敵人死亡時恢復；普通擊殺或非弱點擊殺不觸發。
- inventory 繁中與英文未明示「2%」的成本基準，依來源回充函式判定；文字未限定基準屬資訊省略，不單獨判作矛盾。
- 遊戲原文：1.13.1／Steam Build 25606770 的 ui 資源。描述與實作的差異仍需遊戲內核對；省略細節不列為繁中誤譯。

## 原文核對

- 對應 hash：`7e092f5a`。
- 繁中與英文都寫明弱點擊殺產生2%電容量，與來源每次成功弱點擊殺恢復0.02份單次成本相符。百分比以單份成本計而非總資源池，是來源函式的基準說明；本地化未寫此基準不算明確衝突。

## 圖示來源

[原圖](https://gameslantern.com/storage/sites/darktide/exporter/talents/cryptic/ability_modifier/cryptic_weakspot_kills_grant_power.webp)｜[圖片來源 Issue](https://github.com/SyuanTsai/Media-Assets/issues/13#issuecomment-5935640756)｜[圖片附件](https://github.com/user-attachments/assets/833b596d-dbc9-49fe-9f90-436140e700ed)

圖片僅供技能辨識，不作機制證據。

