# 純潔信標(Beacon of Purity)：原始碼依據

[English](en/zealot_corruption_healing_coherency_improved.md)

[返回玩家說明](README.md#zealot_corruption_healing_coherency_improved)｜[技術索引](SOURCE_INDEX.md)｜[原文比對](LOCALIZATION_COMPARISON.md#zealot_corruption_healing_coherency_improved)

- 來源版本：Release 1.13.1；固定 SHA：`7e662fcda16219d775b84af50322be2e9cd9d62e`。
- 天賦：`zealot_corruption_healing_coherency_improved`；名稱鍵：`loc_talent_zealot_corruption_healing_coherency_improved`；描述鍵：`loc_talent_zealot_corruption_healing_coherency_improved_desc`。
- 節點：`node_69985978-58fd-4215-9404-5ebfe1869483`；分類：光環；每節點一點。
- 證據程度：原始碼確認／程式推導；以下算例屬程式推導，未進行遊戲內測試。

## 原始碼確認與程式推導

- 升級 format_values 讀取 talent_settings_3.coop_2.corruption_heal_amount_increased=1.5、interval=1。舊版未直接掛樹的基礎定義為 .5；它不是現行職業預設光環，不得寫成此職業天生每秒清 .5。
- zealot_corruption_healing_coherency_improved buff 的 interval=1，server interval_func 呼叫 health_extension:reduce_permanent_damage(1.5)；基礎模板呼叫同一方法減少 0.5。
- 兩個模板使用相同 coherency_id，升級 priority=1、基礎 priority=2。腐敗 aura 沒有顯式 max_stacks 欄位；coherency selector 以唯一 ID 只選出一個 aura buff。
- reduce_permanent_damage 接受固定 amount，並將永久傷害值限制在生命上限和傷口數導出的 floor；因此實際清除量可能低於 1.5。
- 接收端若帶有 prevent_coherency_buffs_from_other_players keyword，通用 coherency selector 只採用同一位玩家來源的 aura；這是接收端例外，本次三個 Zealot aura 定義沒有賦予該 keyword。
- 200 生命、max_wounds=4、current_wounds=3 時 floor=math.floor(200×(1−3/4)+1)=51；腐敗60按每秒1.5清除，最後受51下限限制。完整4格時 floor=0。

## 原始碼依據

- [scripts/settings/ability/archetype_talents/talents/zealot_talents.lua：828–859](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/zealot_talents.lua#L828-L859)
- [scripts/settings/talent/talent_settings_zealot.lua：452–458](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/talent/talent_settings_zealot.lua#L452-L458)
- [scripts/settings/talent/talent_settings_zealot.lua：514–518](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/talent/talent_settings_zealot.lua#L514-L518)
- [scripts/settings/buff/archetype_buff_templates/zealot_buff_templates.lua：1014–1090](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/zealot_buff_templates.lua#L1014-L1090)
- [scripts/extension_systems/coherency/coherency_system.lua：188–195](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/coherency/coherency_system.lua#L188-L195)
- [scripts/extension_systems/coherency/unit_coherency_extension.lua：256–311](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/coherency/unit_coherency_extension.lua#L256-L311)
- [scripts/extension_systems/health/player_unit_health_extension.lua：270–286](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/health/player_unit_health_extension.lua#L270-L286)
- [scripts/settings/ability/archetype_talents/talents/zealot_talents.lua：839–859](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/zealot_talents.lua#L839-L859)
- [scripts/ui/views/talent_builder_view/layouts/zealot_tree.lua：514–539](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/ui/views/talent_builder_view/layouts/zealot_tree.lua#L514-L539)

## 算例條件與待確認事項

- 全部傷口仍在、腐敗10：max(0,10−1.5)=8.5；第7次 max(0,1−1.5)=0。
- 已失去一格的200生命/4格角色：60→58.5→57→55.5→54→52.5→51，再次恢復仍51。
- interval=1 秒只說明週期設定；此研究沒有在執行遊戲中測試施加 aura 後第一個 tick 的相位或延遲。
- 「heal corruption」不代表恢復所有已失去生命；它只透過 reduce_permanent_damage 處理永久腐敗傷害。
- 範例假設沒有其他腐敗變動，且傷口 floor 不攔截清除。
- 遊戲原文：1.13.1／Steam Build 25606770 的 ui 資源。描述與實作的差異仍需遊戲內核對；省略細節不列為繁中誤譯。

## 原文核對

- 對應 hash：`afc49dc9`。
- Build 25606770 中繁中「每秒淨化腐敗」與英文「Heal Corruption ... every 1s」方向一致；來源證明為固定值清除，未顯示清楚的翻譯錯誤。

## 圖示來源

[原圖](https://gameslantern.com/storage/sites/darktide/exporter/talents/zealot/aura/zealot_corruption_healing_coherency_improved.webp)｜[圖片來源 Issue](https://github.com/SyuanTsai/Media-Assets/issues/8#issuecomment-5929289315)｜[圖片附件](https://github.com/user-attachments/assets/ac37d3b8-a749-4604-98ba-2781c220761f)

圖片僅供技能辨識，不作機制證據。

