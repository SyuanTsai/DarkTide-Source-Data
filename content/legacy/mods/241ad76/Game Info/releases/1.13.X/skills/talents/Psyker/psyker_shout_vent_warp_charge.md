# 靈能尖嘯(Venting Shriek)：原始碼依據

[English](en/psyker_shout_vent_warp_charge.md)

[返回玩家說明](README.md#psyker_shout_vent_warp_charge)｜[技術索引](SOURCE_INDEX.md)｜[原文比對](LOCALIZATION_COMPARISON.md#psyker_shout_vent_warp_charge)

- 來源版本：Release 1.13.1；固定 SHA：`7e662fcda16219d775b84af50322be2e9cd9d62e`。
- 天賦：`psyker_shout_vent_warp_charge`；名稱鍵：`loc_talent_psyker_shout_vent_warp_charge`；描述鍵：`loc_talent_psyker_shout_vent_warp_charge_description`。
- 節點：`node_650c5469-5194-4722-a4f8-7d62487039df`；分類：能力；每節點一點。
- 證據程度：原始碼確認／程式推導；以下算例屬程式推導，未進行遊戲內測試。

## 原始碼確認與程式推導

- 天賦定義改接 psyker_discharge_shout_improved 並啟用 shout_warp_charge_vent_improved 特殊規則。能力設定的冷卻為 30 秒；天賦設定提供 0.5 平息量。動作先發送 on_combat_ability 事件，再依特殊規則呼叫 WarpCharge.decrease_immediate(0.5)。SharedFunctions.remove_immediate 計算 current_percentage - remove_percentage 並限制在 0 到 1，因此是固定百分點移除。攻擊目標由前方方向、扇形角度和能力距離共同篩選；距離平方小於等於 9 的近身例外可放寬角度條件。

## 原始碼依據

- [scripts/settings/ability/archetype_talents/talents/psyker_talents.lua：317–343](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/psyker_talents.lua#L317-L343)
- [scripts/settings/talent/talent_settings_psyker.lua：162–171](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/talent/talent_settings_psyker.lua#L162-L171)
- [scripts/settings/ability/player_abilities/abilities/psyker_abilities.lua：6–26](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/player_abilities/abilities/psyker_abilities.lua#L6-L26)
- [scripts/extension_systems/ability/actions/action_psyker_shout.lua：108–146](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/ability/actions/action_psyker_shout.lua#L108-L146)
- [scripts/extension_systems/ability/actions/action_psyker_shout.lua：220–289](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/ability/actions/action_psyker_shout.lua#L220-L289)
- [scripts/utilities/warp_charge.lua：94–109](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/warp_charge.lua#L94-L109)
- [scripts/utilities/shared_overheat_and_warp_charge_functions.lua：18–25](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/shared_overheat_and_warp_charge_functions.lua#L18-L25)
- [scripts/settings/ability/archetype_talents/talents/psyker_talents.lua：317–343](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/psyker_talents.lua#L317-L343)
- [scripts/ui/views/talent_builder_view/layouts/psyker_tree.lua：452–481](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/ui/views/talent_builder_view/layouts/psyker_tree.lua#L452-L481)

## 算例條件與待確認事項

- 技能前反噬為 80%；不計同時發生的其他反噬變化。 80% - 50 個百分點 = 30%。 技能後反噬為 30%。
- 技能前反噬為 40%；不計同時發生的其他反噬變化。 40% - 50 個百分點，結果限制在最低 0%。 技能後反噬為 0%。
- 實際命中數與範圍取決於目標位置、能力配置的角度/距離及執行時狀態；例子不代表固定可命中數。
- 遊戲文字為 Build25606770；機制證據是公開原始碼 commit 7e662fcda16219d775b84af50322be2e9cd9d62e，版本對應為1.13.1。
- 遊戲原文：1.13.1／Steam Build 25606770 的 ui 資源。描述與實作的差異仍需遊戲內核對；省略細節不列為繁中誤譯。

## 原文核對

- 對應 hash：`7d4501be`。
- 同一描述鍵的繁中與英文效果方向一致；未說明的公式、時序與額外條件屬描述不完整，不列為誤譯。與公開來源版本對應為1.13.1。

## 圖示來源

[原圖](https://gameslantern.com/storage/sites/darktide/exporter/talents/psyker/ability/psyker_shout_vent_warp_charge.webp)｜[圖片來源 Issue](https://github.com/SyuanTsai/Media-Assets/issues/7#issuecomment-5928024966)｜[圖片附件](https://github.com/user-attachments/assets/d0500b6b-c91c-4c34-857a-6c144800fe37)

圖片僅供技能辨識，不作機制證據。

