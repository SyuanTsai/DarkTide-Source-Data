# 精準獵殺(Pick Your Targets)：原始碼依據

[English](en/broker_ability_focus_sub_2.md)

[返回玩家說明](README.md#broker_ability_focus_sub_2)｜[技術索引](SOURCE_INDEX.md)｜[原文比對](LOCALIZATION_COMPARISON.md#broker_ability_focus_sub_2)

- 來源版本：Release 1.13.1；固定 SHA：`7e662fcda16219d775b84af50322be2e9cd9d62e`。
- 天賦：`broker_ability_focus_sub_2`；名稱鍵：`loc_talent_broker_ability_focus_sub_2`；描述鍵：`loc_talent_broker_ability_focus_sub_2_desc`。
- 節點：`node_276ffd37-efb4-4ced-b119-38aa2714359b`；分類：能力；每節點一點。
- 證據程度：原始碼確認／程式推導；以下算例屬程式推導，未進行遊戲內測試。

## 原始碼確認與程式推導

- 此節點啟用 broker_focus_rending。broker_focus_stance 在此規則下將 ranged_rending_multiplier 設為0.15，且只在 focus buff 存續期間套用。此屬性為加算撕裂項，由傷害計算的遠程攻擊撕裂路徑讀取；不能直接當成傷害 +15%。
- 通過專注 on_kill 檢查後，若 sub_2_rending 啟用，加入 broker_focus_sub_2_damage。此 buff duration=3、max_stacks=5、每層 ranged_damage=0.03、refresh_duration_on_stack=true，專注 buff 消失時由 conditional_exit_func 結束。ranged_damage 是加算修正；滿層只計本 buff 為+0.15。
- 普通擊殺檢查要求死亡結果、遠程攻擊（或武器設定視為遠程）及命中點到攻擊者位置≤12.5m；沒有讀取敵人是否帶有 outline/標記狀態。針槍的 on_minion_death 例外只針對已追蹤、被 toxin 傷害擊殺且死亡點離 params.attacking_unit 位置≤12.5m 的目標。
- refresh_duration_on_remove_stack=true，因此停止補層後不是3秒全消，而是每次移除1層後重設3秒。

## 原始碼依據

- [scripts/settings/ability/archetype_talents/talents/broker_talents.lua：171–219](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/broker_talents.lua#L171-L219)
- [scripts/settings/talent/talent_settings_broker.lua：119–141](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/talent/talent_settings_broker.lua#L119-L141)
- [scripts/settings/buff/archetype_buff_templates/broker_buff_templates.lua：255–314](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/broker_buff_templates.lua#L255-L314)
- [scripts/settings/buff/archetype_buff_templates/broker_buff_templates.lua：319–346](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/broker_buff_templates.lua#L319-L346)
- [scripts/settings/buff/archetype_buff_templates/broker_buff_templates.lua：398–450](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/broker_buff_templates.lua#L398-L450)
- [scripts/settings/buff/archetype_buff_templates/broker_buff_templates.lua：465–485](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/broker_buff_templates.lua#L465-L485)
- [scripts/settings/buff/broker_buff_utils.lua：99–190](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/broker_buff_utils.lua#L99-L190)
- [scripts/settings/buff/helper_functions/check_proc_functions.lua：306–318](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/helper_functions/check_proc_functions.lua#L306-L318)
- [scripts/settings/buff/helper_functions/check_proc_functions.lua：777–792](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/helper_functions/check_proc_functions.lua#L777-L792)
- [scripts/settings/buff/buff_settings.lua：875–878](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/buff_settings.lua#L875-L878)
- [scripts/settings/buff/buff_settings.lua：942–953](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/buff_settings.lua#L942-L953)
- [scripts/utilities/attack/damage_calculation.lua：629–660](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/attack/damage_calculation.lua#L629-L660)
- [scripts/settings/ability/archetype_talents/talents/broker_talents.lua：171–219](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/broker_talents.lua#L171-L219)
- [scripts/ui/views/talent_builder_view/layouts/broker_tree.lua：2048–2070](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/ui/views/talent_builder_view/layouts/broker_tree.lua#L2048-L2070)

## 算例條件與待確認事項

- **遠程傷害算例**：5層 × 每層3% = 15%；只計此 buff 時，100×(1+0.15)=115。撕裂+15%屬另一項護甲修正，不能再當成直接傷害+15%相乘。
- 傷害疊層持續3秒並重新計時，且在專注狀態結束時提早移除。
- 擊殺觸發依固定版近距離遠程檢查；程式沒有另外讀標記狀態。針槍毒素擊殺須符合獨立追蹤條件。
- +15%撕裂與+15%遠程傷害是不同效果，不可合併成+30%直接傷害。
- 遊戲原文：1.13.1／Steam Build 25606770 的 ui 資源。描述與實作的差異仍需遊戲內核對；省略細節不列為繁中誤譯。

## 原文核對

- 對應 hash：`4946598e`。
- 繁中與英文都寫專注期間遠程攻擊加撕裂，並由擊殺累積遠程傷害、最多5層；設定數值為撕裂0.15、每層遠程傷害0.03、上限5層。近距離檢查與針槍追蹤是程式細節補充。

## 圖示來源

[原圖](https://gameslantern.com/storage/sites/darktide/exporter/talents/broker/ability_modifier/broker_ability_focus_sub_2.webp)｜[圖片來源 Issue](https://github.com/SyuanTsai/Media-Assets/issues/12#issuecomment-5933978534)｜[圖片附件](https://github.com/user-attachments/assets/732d190b-365f-4815-9d94-bc136cafd423)

圖片僅供技能辨識，不作機制證據。

