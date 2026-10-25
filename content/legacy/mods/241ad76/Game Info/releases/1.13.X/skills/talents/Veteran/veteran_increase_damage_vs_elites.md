# 優越情節(Superiority Complex)：原始碼依據

[English](en/veteran_increase_damage_vs_elites.md)

來源版本：Release 1.13.1；完整 SHA：`7e662fcda16219d775b84af50322be2e9cd9d62e`。

[返回玩家說明](README.md#veteran_increase_damage_vs_elites)｜[來源與限制](../../../README.md)

- 名稱鍵：`loc_talent_veteran_increase_damage_vs_elites`；描述鍵：`loc_talent_veteran_increase_damage_vs_elites_desc`。沿用既有詞表 Superiority Complex 的「優越情節」，名稱與鍵的對應待使用者確認。
- 目前節點為 `node_06272211-2d9a-47c7-bf84-8e7ea1eb8a01`，類型 `default`，花費及上限均為 1。[節點定義](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/ui/views/talent_builder_view/layouts/veteran_tree.lua#L1551-L1579)。

**原始碼確認：引用與數值**。天賦安裝的是 `veteran_increase_elite_damage`，不能因識別碼不同而漏追此效果。其 `damage_vs_elites=0.15`，有效層數上限 1；未設事件觸發、距離條件、持續時間或冷卻。顯示參數也讀取同一屬性，未發現數值與執行設定不一致。[天賦引用及顯示參數](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/veteran_talents.lua#L893-L916)、[被動效果](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/veteran_buff_templates.lua#L736-L743)。

**程式推導：作用對象與存續**。共用天賦系統將被動效果加入持有者，移除天賦時移除其效果；有效疊層限制為 1。因此它是配裝持有期間的自身被動加成，不是為目標施加易傷，也不會隨命中次數增加。[被動效果安裝](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/talent/player_unit_talent_extension.lua#L164-L175)、[移除被動效果](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/talent/player_unit_talent_extension.lua#L221-L231)、[有效層數限制](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/buff/buffs/buff.lua#L404-L410)。

**原始碼確認：目標條件**。共同傷害流程檢查 `attacked_breed_or_nil.tags.elite`；只有成立時才加入攻擊者的 `damage_vs_elites`。此項沒有近戰、遠程、弱點或致命一擊限制；專家分類則在另一個判定處理，不能把專家標記本身當成精英。目標分類缺失時亦不加成。以上適用於使用該共同傷害流程及攻擊者屬性的傷害，不據此保證所有特殊傷害來源都會傳入相同屬性。[精英及專家分類判定](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/attack/damage_calculation.lua#L334-L355)。

**程式推導：加算位置**。此屬性為加算倍率；效果聚合將 0.15 加入屬性，傷害計算再將屬性值減 1 後加入傷害加算合計。故原合計為 1 時變 1.15，原為 1.25 時變 1.40。接著仍與其他倍率及目標受傷屬性共同結算，不能將所有最終傷害一概另乘 1.15。[屬性型別](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/buff_settings.lua#L780-L786)、[屬性聚合](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/buff/buffs/buff.lua#L689-L727)、[加算起點](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/attack/damage_calculation.lua#L236-L245)、[加入精英加成](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/attack/damage_calculation.lua#L334-L337)、[後續倍率與傷害結算](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/attack/damage_calculation.lua#L575-L614)。

**案例與待確認**：精英目標與非精英目標、近戰與遠程，以及已有其他傷害加成時的靜態案例見 [POC](../../../docs/POC.md)。已比對本體繁中模板；最終格式化顯示仍待遊戲內核對；未進行遊戲內傷害測試，也未逐一驗證所有特殊傷害來源。這些限制不改變上述共同傷害流程中的分類判定與加算數值。

## 圖示來源

[原圖](https://gameslantern.com/storage/sites/darktide/exporter/talents/veteran/default/veteran_increase_damage_vs_elites.webp)｜[圖片來源 Issue](https://github.com/SyuanTsai/Media-Assets/issues/6)｜[圖片附件](https://github.com/user-attachments/assets/915cdbef-5b88-4d3b-a4f1-e29e8a8f0f07)

圖片僅供技能辨識，不作機制證據。

