# 平心靜氣(Inner Tranquility)：原始碼依據

[English](en/psyker_reduced_warp_charge_cost_and_venting_speed.md)

[返回玩家說明](README.md#psyker_reduced_warp_charge_cost_and_venting_speed)｜[技術索引](SOURCE_INDEX.md)｜[原文比對](LOCALIZATION_COMPARISON.md#psyker_reduced_warp_charge_cost_and_venting_speed)

- 來源版本：Release 1.13.1；固定 SHA：`7e662fcda16219d775b84af50322be2e9cd9d62e`。
- 天賦：`psyker_reduced_warp_charge_cost_and_venting_speed`；名稱鍵：`loc_talent_psyker_reduced_warp_charge_cost_venting_speed`；描述鍵：`loc_talent_psyker_reduced_warp_charge_cost_venting_speed_desc`。
- 節點：`node_3879efd1-ebac-4cd2-b004-8c7927d16924`；分類：鑰石；每節點一點。
- 證據程度：原始碼確認／程式推導；以下算例屬程式推導，未進行遊戲內測試。

## 原始碼確認與程式推導

- stat_buffs.warp_charge_amount 在 0 至 6 靈魂間由 1 線性插值至 0.52。這是 48 個百分點的總減量除以 6，故每層減 0.08；四層時比例為 1 − 0.48×(4/6)=0.68。
- 這個 modifier 讀取同一個 talent_resource.current_resource，故需已選 Warp Siphon；亞空間電池不改每層比例，只把可達上限從4提高到6。

## 原始碼依據

- [scripts/settings/ability/archetype_talents/talents/psyker_talents.lua：1253–1269](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/psyker_talents.lua#L1253-L1269)
- [scripts/settings/talent/talent_settings_psyker.lua：208–214](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/talent/talent_settings_psyker.lua#L208-L214)
- [scripts/settings/buff/archetype_buff_templates/psyker_buff_templates.lua：1506–1526](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/psyker_buff_templates.lua#L1506-L1526)
- [scripts/settings/buff/archetype_buff_templates/psyker_buff_templates.lua：141–146](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/psyker_buff_templates.lua#L141-L146)
- [scripts/settings/talent/talent_settings_psyker.lua：241–243](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/talent/talent_settings_psyker.lua#L241-L243)
- [scripts/settings/ability/archetype_talents/talents/psyker_talents.lua：1253–1269](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/psyker_talents.lua#L1253-L1269)
- [scripts/ui/views/talent_builder_view/layouts/psyker_tree.lua：1326–1349](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/ui/views/talent_builder_view/layouts/psyker_tree.lua#L1326-L1349)

## 算例條件與待確認事項

- **反噬算例**：原本增加 10 個反噬百分點，4 層時變成 10 × (1 − 8% × 4) = 6.8 個百分點；6 層時為 5.2 個百分點。其他生成修正另計。
- 以來源 stat multiplier 換算為「每層 −8%」；此處以原本反噬生成量為基準，最終反噬變化依各攻擊原始值而定。
- 技能名稱中的 venting speed 不代表這段 buff 還有另一項平息速度 stat；此來源只設定 warp_charge_amount。
- 本機 Build 25606770 與來源 SHA 版本對應為1.13.1。
- 遊戲原文：1.13.1／Steam Build 25606770 的 ui 資源。描述與實作的差異仍需遊戲內核對；省略細節不列為繁中誤譯。

## 原文核對

- 對應 hash：`e3048a81`。
- 同描述鍵的本機繁中與英文效果方向一致。補充公式、恢復上限與事件時序屬描述不完整；公開來源與遊戲文字版本對應為1.13.1。

## 圖示來源

[原圖](https://gameslantern.com/storage/sites/darktide/exporter/talents/psyker/keystone_modifier/psyker_reduced_warp_charge_cost_and_venting_speed.webp)｜[圖片來源 Issue](https://github.com/SyuanTsai/Media-Assets/issues/7#issuecomment-5928024966)｜[圖片附件](https://github.com/user-attachments/assets/333bcafc-3c34-4b47-bb5b-658c9cd2b777)

圖片僅供技能辨識，不作機制證據。

