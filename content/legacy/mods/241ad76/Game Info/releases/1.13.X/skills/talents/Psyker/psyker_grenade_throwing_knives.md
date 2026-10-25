# 靈能攻擊(Assail)：原始碼依據

[English](en/psyker_grenade_throwing_knives.md)

[返回玩家說明](README.md#psyker_grenade_throwing_knives)｜[技術索引](SOURCE_INDEX.md)｜[原文比對](LOCALIZATION_COMPARISON.md#psyker_grenade_throwing_knives)

- 來源版本：Release 1.13.2；固定 SHA：`ba6c148f3c2768ca3ce20d846a12e56e2f433f3e`。
- 天賦：`psyker_grenade_throwing_knives`；名稱鍵：`loc_ability_psyker_blitz_throwing_knives`；描述鍵：`loc_ability_psyker_blitz_throwing_knives_description`。
- 節點：`node_35ce2086-9081-49c7-9703-f3c07eb0be86`；分類：閃擊；每節點一點。
- 證據程度：原始碼確認／程式推導；以下算例屬程式推導，未進行遊戲內測試。

## 原始碼確認與程式推導

- 固定 source SHA ba6c148f3c2768ca3ce20d846a12e56e2f433f3e。技能樹節點掛載 psyker_grenade_throwing_knives，對應 PlayerAbilities.psyker_throwing_knives。能力設定 max_charges=10、resource_cost_per_charge=3、resource_regen_per_second=1；投擲動作的 consume_ability_usage_cost=true。未裝填時每補回一次需 3÷1=3 秒，假設沒有其他資源調整且恢復不中斷。快速攻擊使用 smart_target_targeting 並把投射物朝向目標追蹤；瞄準攻擊使用單一目標選取與 aimed 投射物。投射物分別採初速 20 和 40，兩者 True Flight 都以 throwing_knives_find_highest_value_target 選目標。傷害檔案將其標為 psyker_smite，並按 armor type 設定 attack/impact 曲線；super_armor 的 attack 曲線使用 lerp_0_05，impact 曲線使用 lerp_0_5，因此對該護甲類型傷害偏低。這是該傷害階段的護甲修正，不可直接當成所有敵人上的最終傷害固定為基礎值的 5%。

### 追蹤轉向的速度調整

- **原始碼確認**：一般與瞄準碎片的移動模板分別接入 `throwing_knives` 與 `throwing_knives_aimed`；兩者呼叫 `smite_update_towards_position`，且 `min_adjustment_speed = 15`、`on_target_acceleration = 0`。在新方向仍未對準目標時，速度向 15 調整；1.13.2 把該次插值係數改為 `α = min((dt + diff) × 12, 1)`，其中 `diff = abs(轉向角度 ÷ 2π)`。若原係數不超過 1，這次修正不改變算式結果；超過 1 時則以 1 為上限。

- **程式推導**：假設尚未對準目標、更新間隔 `dt = 0.1 秒`、角度比例 `diff = 0.05`、調整前速度 20，則 `α = min((0.1 + 0.05) × 12, 1) = 1`，新速度為 `20 + (15 − 20) × 1 = 15` 個遊戲距離單位／秒。舊係數 1.8 會得到 `20 + (15 − 20) × 1.8 = 11`；新版將結果限制在這次插值的起點與終點之間。這不是所有飛行狀態的速度下限，也不能推論每次投擲必定更快。

- 一般／瞄準投擲初速 20／40、10 次上限、基礎每次 3 秒恢復與傷害設定相較 1.13.1 未變。上述修正處理轉向時的速度插值；飛行時間、命中率與延遲下的實際表現尚未遊戲內實測。

- [碎片移動模板](https://github.com/Aussiemon/Darktide-Source-Code/blob/ba6c148f3c2768ca3ce20d846a12e56e2f433f3e/scripts/settings/projectile_locomotion/templates/grenade_projectile_locomotion_templates.lua#L376-L450)｜[兩種追蹤設定](https://github.com/Aussiemon/Darktide-Source-Code/blob/ba6c148f3c2768ca3ce20d846a12e56e2f433f3e/scripts/settings/projectile/true_flight_templates.lua#L60-L109)｜[方向、對準判斷與速度插值](https://github.com/Aussiemon/Darktide-Source-Code/blob/ba6c148f3c2768ca3ce20d846a12e56e2f433f3e/scripts/extension_systems/locomotion/utilities/true_flight_functions/true_flight_smite.lua#L23-L60)。

## 原始碼依據

- [scripts/ui/views/talent_builder_view/layouts/psyker_tree.lua：285–316](https://github.com/Aussiemon/Darktide-Source-Code/blob/ba6c148f3c2768ca3ce20d846a12e56e2f433f3e/scripts/ui/views/talent_builder_view/layouts/psyker_tree.lua#L285-L316)
- [scripts/settings/ability/archetype_talents/talents/psyker_talents.lua：155–184](https://github.com/Aussiemon/Darktide-Source-Code/blob/ba6c148f3c2768ca3ce20d846a12e56e2f433f3e/scripts/settings/ability/archetype_talents/talents/psyker_talents.lua#L155-L184)
- [scripts/settings/ability/player_abilities/abilities/psyker_abilities.lua：132–145](https://github.com/Aussiemon/Darktide-Source-Code/blob/ba6c148f3c2768ca3ce20d846a12e56e2f433f3e/scripts/settings/ability/player_abilities/abilities/psyker_abilities.lua#L132-L145)
- [scripts/settings/equipment/weapon_templates/grenades/psyker_throwing_knives.lua：329–393](https://github.com/Aussiemon/Darktide-Source-Code/blob/ba6c148f3c2768ca3ce20d846a12e56e2f433f3e/scripts/settings/equipment/weapon_templates/grenades/psyker_throwing_knives.lua#L329-L393)
- [scripts/settings/equipment/weapon_templates/grenades/psyker_throwing_knives.lua：458–516](https://github.com/Aussiemon/Darktide-Source-Code/blob/ba6c148f3c2768ca3ce20d846a12e56e2f433f3e/scripts/settings/equipment/weapon_templates/grenades/psyker_throwing_knives.lua#L458-L516)
- [scripts/settings/projectile/player_projectile_templates.lua：567–619](https://github.com/Aussiemon/Darktide-Source-Code/blob/ba6c148f3c2768ca3ce20d846a12e56e2f433f3e/scripts/settings/projectile/player_projectile_templates.lua#L567-L619)
- [scripts/settings/projectile_locomotion/templates/grenade_projectile_locomotion_templates.lua：376–434](https://github.com/Aussiemon/Darktide-Source-Code/blob/ba6c148f3c2768ca3ce20d846a12e56e2f433f3e/scripts/settings/projectile_locomotion/templates/grenade_projectile_locomotion_templates.lua#L376-L434)
- [scripts/settings/projectile/true_flight_templates.lua：60–109](https://github.com/Aussiemon/Darktide-Source-Code/blob/ba6c148f3c2768ca3ce20d846a12e56e2f433f3e/scripts/settings/projectile/true_flight_templates.lua#L60-L109)
- [scripts/settings/damage/damage_profiles/archetypes/psyker_damage_profile_templates.lua：288–375](https://github.com/Aussiemon/Darktide-Source-Code/blob/ba6c148f3c2768ca3ce20d846a12e56e2f433f3e/scripts/settings/damage/damage_profiles/archetypes/psyker_damage_profile_templates.lua#L288-L375)
- [scripts/settings/equipment/weapon_handling_templates/weapon_charge_templates.lua：112–119](https://github.com/Aussiemon/Darktide-Source-Code/blob/ba6c148f3c2768ca3ce20d846a12e56e2f433f3e/scripts/settings/equipment/weapon_handling_templates/weapon_charge_templates.lua#L112-L119)
- [scripts/settings/ability/archetype_talents/talents/psyker_talents.lua：155–184](https://github.com/Aussiemon/Darktide-Source-Code/blob/ba6c148f3c2768ca3ce20d846a12e56e2f433f3e/scripts/settings/ability/archetype_talents/talents/psyker_talents.lua#L155-L184)
- [scripts/ui/views/talent_builder_view/layouts/psyker_tree.lua：285–316](https://github.com/Aussiemon/Darktide-Source-Code/blob/ba6c148f3c2768ca3ce20d846a12e56e2f433f3e/scripts/ui/views/talent_builder_view/layouts/psyker_tree.lua#L285-L316)

## 算例條件與待確認事項

- **恢復算例**：無其他恢復修正、從 0 次且無剩餘進度開始，第 3 秒補回 1 次、第 6 秒補回 2 次，補滿 10 次需 3 × 10 = 30 秒。
- 傷害算式須固定目標護甲、部位、普通或瞄準投擲、命中順序及其他加成；沒有單一適用所有目標的傷害值。
- 遊戲原文：1.13.1／Steam Build 25606770 的 ui 資源。描述與實作的差異仍需遊戲內核對；省略細節不列為繁中誤譯。

## 原文核對

- 對應 hash：`72fc17b1`。
- 繁中原文描述追蹤投射物及甲殼護甲效果較差；原文未列使用次數、資源恢復及瞄準投擲的不同設定，這些屬描述不完整，沒有足以判定翻譯方向錯誤的證據。

## 圖示來源

[原圖](https://gameslantern.com/storage/sites/darktide/exporter/talents/psyker/tactical/psyker_grenade_throwing_knives.webp)｜[圖片來源 Issue](https://github.com/SyuanTsai/Media-Assets/issues/7#issuecomment-5928024966)｜[圖片附件](https://github.com/user-attachments/assets/a0c17626-2777-4302-bc7e-9b3a48aadcd0)

圖片僅供技能辨識，不作機制證據。

