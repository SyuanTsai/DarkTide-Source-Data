# 先知之眼(Seer's Presence)：原始碼依據

[English](en/psyker_cooldown_aura_improved.md)

[返回玩家說明](README.md#psyker_cooldown_aura_improved)｜[技術索引](SOURCE_INDEX.md)｜[原文比對](LOCALIZATION_COMPARISON.md#psyker_cooldown_aura_improved)

- 來源版本：Release 1.13.2；固定 SHA：`ba6c148f3c2768ca3ce20d846a12e56e2f433f3e`。
- 天賦：`psyker_cooldown_aura_improved`；名稱鍵：`loc_talent_psyker_cooldown_aura_improved`；描述鍵：`loc_talent_psyker_cooldown_aura_improved_description`。
- 節點：`node_c2759b06-3158-4d95-a860-492fd3b6594e`；分類：光環；每節點一點。
- 證據程度：原始碼確認／程式推導；以下算例屬程式推導，未進行遊戲內測試。

## 原始碼確認與程式推導

- 固定原始碼 SHA ba6c148f3c2768ca3ce20d846a12e56e2f433f3e。天賦顯示 10% 冷卻縮減；光環增益將 combat_ability_resource_cost_per_use_modifier 設為 -0.1，且上限一層。協同集合包含本人，集合內單位取得隊友提供的光環效果。共用能力擴充會把每次戰鬥技能的資源消耗乘上整理後的 per-use modifier，因此在固定恢復速度下，一次充能所需的時間也按 0.9 比例縮短。例如原本 40 秒恢復一次使用量，理想化為 40 × 0.9 = 36 秒。

### 容量變動與光環進出

- **原始碼確認**：次數型能力的資源上限為 `最大使用次數 × 每次成本`；光環改變每次成本，因而改變整池上限。當上限變動、且未先走新增次數或減少次數的截斷分支時，共用更新先計算 `p = clamp01(變動前資源 ÷ 變動前上限)`，再設定 `變動後資源 = 新上限 × p`。這保留整池恢復比例，而不是原本的資源點數。

- **程式推導**：兩次使用共用同一池，若每次原成本 40、整池上限 80、目前資源 39，取得 10% 光環後每次成本 36、上限 72。先保留 `p = 39 ÷ 80 = 48.75%`，新資源為 `72 × 48.75% = 35.1`；可用次數仍為 `floor(35.1 ÷ 36) = 0`。假設每秒恢復 1 單位、恢復未暫停、沒有其他效果，還需 `36 − 35.1 = 0.9 秒` 才補回第一次。若只改成本卻保留 39 點，會越過 36 點門檻；1.13.2 在同一更新中先調整資源再結算次數。

- **必要邊界**：上述比例規則位於 `usage_cost_type == "charges"` 分支；純資源型能力仍走自己的容量處理。最大次數變更的補給／截斷分支有優先順序，不能將光環進出的算例套到所有換裝或重生狀態。資源取整、自然恢復、暫停與其他返還會影響實際可用時點；以上是靜態資源模型推導，未做遊戲內測試。

- [容量變動與分支順序](https://github.com/Aussiemon/Darktide-Source-Code/blob/ba6c148f3c2768ca3ce20d846a12e56e2f433f3e/scripts/extension_systems/ability/player_unit_ability_extension.lua#L781-L827)｜[每次成本與光環修正](https://github.com/Aussiemon/Darktide-Source-Code/blob/ba6c148f3c2768ca3ce20d846a12e56e2f433f3e/scripts/extension_systems/ability/player_unit_ability_extension.lua#L1444-L1468)｜[整池上限](https://github.com/Aussiemon/Darktide-Source-Code/blob/ba6c148f3c2768ca3ce20d846a12e56e2f433f3e/scripts/extension_systems/ability/player_unit_ability_extension.lua#L1330-L1355)｜[自然恢復與次數門檻](https://github.com/Aussiemon/Darktide-Source-Code/blob/ba6c148f3c2768ca3ce20d846a12e56e2f433f3e/scripts/extension_systems/ability/player_unit_ability_extension.lua#L848-L884)。

## 原始碼依據

- [scripts/ui/views/talent_builder_view/layouts/psyker_tree.lua：425–451](https://github.com/Aussiemon/Darktide-Source-Code/blob/ba6c148f3c2768ca3ce20d846a12e56e2f433f3e/scripts/ui/views/talent_builder_view/layouts/psyker_tree.lua#L425-L451)
- [scripts/settings/ability/archetype_talents/talents/psyker_talents.lua：869–890](https://github.com/Aussiemon/Darktide-Source-Code/blob/ba6c148f3c2768ca3ce20d846a12e56e2f433f3e/scripts/settings/ability/archetype_talents/talents/psyker_talents.lua#L869-L890)
- [scripts/settings/talent/talent_settings_psyker.lua：305–309](https://github.com/Aussiemon/Darktide-Source-Code/blob/ba6c148f3c2768ca3ce20d846a12e56e2f433f3e/scripts/settings/talent/talent_settings_psyker.lua#L305-L309)
- [scripts/settings/talent/talent_settings_psyker.lua：364–366](https://github.com/Aussiemon/Darktide-Source-Code/blob/ba6c148f3c2768ca3ce20d846a12e56e2f433f3e/scripts/settings/talent/talent_settings_psyker.lua#L364-L366)
- [scripts/settings/buff/archetype_buff_templates/psyker_buff_templates.lua：2672–2690](https://github.com/Aussiemon/Darktide-Source-Code/blob/ba6c148f3c2768ca3ce20d846a12e56e2f433f3e/scripts/settings/buff/archetype_buff_templates/psyker_buff_templates.lua#L2672-L2690)
- [scripts/extension_systems/coherency/coherency_system.lua：188–195](https://github.com/Aussiemon/Darktide-Source-Code/blob/ba6c148f3c2768ca3ce20d846a12e56e2f433f3e/scripts/extension_systems/coherency/coherency_system.lua#L188-L195)
- [scripts/extension_systems/coherency/unit_coherency_extension.lua：279–311](https://github.com/Aussiemon/Darktide-Source-Code/blob/ba6c148f3c2768ca3ce20d846a12e56e2f433f3e/scripts/extension_systems/coherency/unit_coherency_extension.lua#L279-L311)
- [scripts/extension_systems/ability/player_unit_ability_extension.lua：1435–1441](https://github.com/Aussiemon/Darktide-Source-Code/blob/ba6c148f3c2768ca3ce20d846a12e56e2f433f3e/scripts/extension_systems/ability/player_unit_ability_extension.lua#L1435-L1441)
- [scripts/extension_systems/ability/player_unit_ability_extension.lua：1461–1466](https://github.com/Aussiemon/Darktide-Source-Code/blob/ba6c148f3c2768ca3ce20d846a12e56e2f433f3e/scripts/extension_systems/ability/player_unit_ability_extension.lua#L1461-L1466)
- [scripts/settings/ability/archetype_talents/talents/psyker_talents.lua：869–890](https://github.com/Aussiemon/Darktide-Source-Code/blob/ba6c148f3c2768ca3ce20d846a12e56e2f433f3e/scripts/settings/ability/archetype_talents/talents/psyker_talents.lua#L869-L890)
- [scripts/ui/views/talent_builder_view/layouts/psyker_tree.lua：425–451](https://github.com/Aussiemon/Darktide-Source-Code/blob/ba6c148f3c2768ca3ce20d846a12e56e2f433f3e/scripts/ui/views/talent_builder_view/layouts/psyker_tree.lua#L425-L451)

## 算例條件與待確認事項

- 一次戰鬥技能充能原本需 40 秒恢復，恢復速率固定，且不計其他冷卻效果。 40 × (1 - 0.10) = 36 秒 示例中少等 4 秒；若原本需 60 秒，則約需 54 秒。
- 效果需在本人或隊友的協同光環生效時套用；本機遊戲中的實際距離和更新時點未測。
- 時間例子按固定充能恢復速度推導；多充能能力、其他冷卻修正或不同資源恢復規則會改變實際時間。
- 機制來源為 1.13.2；原文批次仍為 1.13.1／Steam Build 25606770，尚未取得 1.13.2 同版文本；未做遊戲內測試。
- 遊戲原文：1.13.1／Steam Build 25606770 的 ui 資源。描述與實作的差異仍需遊戲內核對；省略細節不列為繁中誤譯。

## 原文核對

- 對應 hash：`8daf59be`。
- 本地繁中說明列出本人與協同隊友享有技能冷卻縮減；目前光環值為 10%，與固定原始碼設定一致。

## 圖示來源

[原圖](https://gameslantern.com/storage/sites/darktide/exporter/talents/psyker/aura/psyker_cooldown_aura_improved.webp)｜[圖片來源 Issue](https://github.com/SyuanTsai/Media-Assets/issues/7#issuecomment-5928024966)｜[圖片附件](https://github.com/user-attachments/assets/61a749ff-c64c-47a7-8607-e19b59a688b3)

圖片僅供技能辨識，不作機制證據。

