# 鋼鐵富足(Satiated Steel)：原始碼依據

[English](en/cryptic_chordclaw_capacitance_restoration.md)

[返回玩家說明](README.md#cryptic_chordclaw_capacitance_restoration)｜[技術索引](SOURCE_INDEX.md)｜[原文比對](LOCALIZATION_COMPARISON.md#cryptic_chordclaw_capacitance_restoration)

- 來源版本：Release 1.13.1；固定 SHA：`7e662fcda16219d775b84af50322be2e9cd9d62e`。
- 天賦：`cryptic_chordclaw_capacitance_restoration`；名稱鍵：`loc_talent_cryptic_chordclaw_capacitance_restoration`；描述鍵：`loc_talent_cryptic_chordclaw_capacitance_restoration_desc`。
- 節點：`node_fef9bd81-9333-4292-877d-95a71f773931`；分類：能力；每節點一點。
- 證據程度：原始碼確認／程式推導；以下算例屬程式推導，未進行遊戲內測試。

## 原始碼確認與程式推導

- 觸發條件同時要求攻擊結果為擊殺、attack_type 為 melee，且 damage_type 是 transonic_claw、transonic_claw_stick 或 transonic_claw_rip。
- 每次觸發將0.25份單次成本分配到5秒，形成每秒0.05份成本的恢復；成本50點時為額外2.5點/秒、5秒共12.5點。模板允許作用期間再次觸發；ProcBuff 將起始時間更新為最新擊殺，因此重設5秒視窗但不建立可堆疊倍率。
- 恢復逐段呼叫 restore_ability_charge_percentage，按單份成本換算成資源點並受能力資源池上限限制；小數資源保留。

## 原始碼依據

- [scripts/settings/ability/archetype_talents/talents/cryptic_talents.lua：523–545](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/cryptic_talents.lua#L523-L545)
- [scripts/settings/talent/talent_settings_cryptic.lua：133–157](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/talent/talent_settings_cryptic.lua#L133-L157)
- [scripts/settings/buff/archetype_buff_templates/cryptic_buff_templates.lua：945–980](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/cryptic_buff_templates.lua#L945-L980)
- [scripts/settings/buff/helper_functions/check_proc_functions.lua：226–237](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/helper_functions/check_proc_functions.lua#L226-L237)
- [scripts/extension_systems/buff/buffs/proc_buff.lua：335–360](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/buff/buffs/proc_buff.lua#L335-L360)
- [scripts/extension_systems/ability/player_unit_ability_extension.lua：1081–1103](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/ability/player_unit_ability_extension.lua#L1081-L1103)
- [scripts/extension_systems/ability/player_unit_ability_extension.lua：1127–1156](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/ability/player_unit_ability_extension.lua#L1127-L1156)
- [scripts/settings/ability/archetype_talents/talents/cryptic_talents.lua：523–545](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/cryptic_talents.lua#L523-L545)
- [scripts/ui/views/talent_builder_view/layouts/cryptic_tree.lua：2245–2268](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/ui/views/talent_builder_view/layouts/cryptic_tree.lua#L2245-L2268)

## 算例條件與待確認事項

- 每份50點、取得1次符合條件的弦爪近戰擊殺 額外恢復50 × 25% = 12.5點，分5秒逐步恢復，即額外2.5點/秒。
- 恢復5秒期間再次觸發 額外恢復速率仍為2.5點/秒；5秒期間從最新擊殺重新起算，不累加第二份12.5點速率。
- 必須由弦爪指定傷害類型造成近戰擊殺；其他武器擊殺、非近戰擊殺或未擊殺都不觸發。
- 12.5點是本效果的額外恢復；基礎自然恢復與其他效果另計。
- 繁中與英文都寫弦爪擊殺後25%持續5秒；未指出限於特定三種傷害類型或再次擊殺重新計時，屬實作細節，沒有明確相反描述。
- 遊戲原文：1.13.1／Steam Build 25606770 的 ui 資源。描述與實作的差異仍需遊戲內核對；省略細節不列為繁中誤譯。

## 原文核對

- 對應 hash：`18058d13`。
- inventory 中英都表示弦爪擊殺後於5秒內恢復25%電容量，與來源觸發類型、25%總量及5秒恢復視窗相符。觸發限於指定弦爪傷害類型，以及再觸發重新計時而不疊倍率，是原文省略而非明確矛盾。

## 圖示來源

[原圖](https://gameslantern.com/storage/sites/darktide/exporter/talents/cryptic/ability_modifier/cryptic_chordclaw_capacitance_restoration.webp)｜[圖片來源 Issue](https://github.com/SyuanTsai/Media-Assets/issues/13#issuecomment-5935640756)｜[圖片附件](https://github.com/user-attachments/assets/756e60ad-5734-42a4-be62-759096344f67)

圖片僅供技能辨識，不作機制證據。

