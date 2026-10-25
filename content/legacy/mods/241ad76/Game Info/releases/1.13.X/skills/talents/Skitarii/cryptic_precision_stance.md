# 進階戰鬥教範(Advanced Combat Doctrines)：原始碼依據

[English](en/cryptic_precision_stance.md)

[返回玩家說明](README.md#cryptic_precision_stance)｜[技術索引](SOURCE_INDEX.md)｜[原文比對](LOCALIZATION_COMPARISON.md#cryptic_precision_stance)

- 來源版本：Release 1.13.1；固定 SHA：`7e662fcda16219d775b84af50322be2e9cd9d62e`。
- 天賦：`cryptic_precision_stance`；名稱鍵：`loc_talent_cryptic_precision_stance`；描述鍵：`loc_talent_cryptic_precision_stance_drain_cost_combined_desc`。
- 節點：`node_c465a486-1c34-40e4-a34f-84b020753a16`；分類：能力；每節點一點。
- 證據程度：原始碼確認／程式推導；以下算例屬程式推導，未進行遊戲內測試。

## 原始碼確認與程式推導

- 此能力以電容量資源作為充能池，最低啟動條件為1份；min_charges_percent_usage_cost=0.25，實際啟動只扣單份50點的25%，即12.5點。未提升上限時滿3份為150點。
- 能力本身另設定每秒啟動成本1資源點，同時基礎 resource_regen_per_second 也是1點/秒，兩項互相抵消。精準架勢 buff 另外每秒扣單份成本的10%（以每份50資源點計為5內部資源點），每次射擊扣1%（0.5內部點）；更新函式只在未裝填時執行每秒扣除。當資源歸零就停用。
- 按下啟動時會自動切至 slot_secondary，套用啟用自動瞄準、散佈修正-0.9和後座力修正-0.6。buff 失效條件包括切離 slot_secondary；再次按技能時，動作直接移除現有 buff 並返回，所以不會再次執行啟動成本或送出啟動事件。
- 裝填速度被動在精準架勢啟動時立即生效，架勢結束後續留5秒。裝填加成是+25%。額外的耐力恢復、擊殺加傷及射擊暴擊/穿透等效果由相應天賦節點提供，不是此主能力單獨自帶。
- 結束時，程式以 floor(期間每秒扣除與射擊扣除的百分比總和+初始25%) 計算完整充能消耗量；只有累積達到整份充能才按完整份數記錄消耗與觸發過載核心的每份充能效果。例如25%啟動成本加7秒未裝填消耗合計95%，向下取整為0份；累計達100%才記為消耗1份。

## 原始碼依據

- [scripts/settings/ability/archetype_talents/talents/cryptic_talents.lua：241–318](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/cryptic_talents.lua#L241-L318)
- [scripts/settings/ability/player_abilities/abilities/cryptic_abilities.lua：116–141](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/player_abilities/abilities/cryptic_abilities.lua#L116-L141)
- [scripts/settings/ability/ability_templates/cryptic_precision_stance.lua：22–43](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/ability_templates/cryptic_precision_stance.lua#L22-L43)
- [scripts/settings/ability/ability_action_handler_data.lua：41–46](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/ability_action_handler_data.lua#L41-L46)
- [scripts/settings/ability/ability_action_handler_data.lua：131–138](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/ability_action_handler_data.lua#L131-L138)
- [scripts/extension_systems/ability/actions/action_cryptic_precision_stance_toggle.lua：40–120](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/ability/actions/action_cryptic_precision_stance_toggle.lua#L40-L120)
- [scripts/extension_systems/ability/player_unit_ability_extension.lua：617–650](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/ability/player_unit_ability_extension.lua#L617-L650)
- [scripts/extension_systems/ability/player_unit_ability_extension.lua：983–996](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/ability/player_unit_ability_extension.lua#L983-L996)
- [scripts/extension_systems/ability/player_unit_ability_extension.lua：1388–1403](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/ability/player_unit_ability_extension.lua#L1388-L1403)
- [scripts/settings/buff/archetype_buff_templates/cryptic_buff_templates.lua：360–408](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/cryptic_buff_templates.lua#L360-L408)
- [scripts/settings/buff/archetype_buff_templates/cryptic_buff_templates.lua：428–459](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/cryptic_buff_templates.lua#L428-L459)
- [scripts/settings/buff/archetype_buff_templates/cryptic_buff_templates.lua：479–527](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/cryptic_buff_templates.lua#L479-L527)
- [scripts/settings/buff/archetype_buff_templates/cryptic_buff_templates.lua：644–696](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/cryptic_buff_templates.lua#L644-L696)
- [scripts/settings/talent/talent_settings_cryptic.lua：98–119](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/talent/talent_settings_cryptic.lua#L98-L119)
- [scripts/settings/buff/archetype_buff_templates/cryptic_buff_templates.lua：1531–1536](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/cryptic_buff_templates.lua#L1531-L1536)
- [scripts/settings/buff/archetype_buff_templates/cryptic_buff_templates.lua：1673–1688](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/cryptic_buff_templates.lua#L1673-L1688)
- [scripts/settings/buff/archetype_buff_templates/cryptic_buff_templates.lua：298–344](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/cryptic_buff_templates.lua#L298-L344)
- [scripts/extension_systems/ability/player_unit_ability_extension.lua：773–879](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/ability/player_unit_ability_extension.lua#L773-L879)
- [scripts/settings/ability/archetype_talents/talents/cryptic_talents.lua：241–318](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/cryptic_talents.lua#L241-L318)
- [scripts/ui/views/talent_builder_view/layouts/cryptic_tree.lua：1744–1773](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/ui/views/talent_builder_view/layouts/cryptic_tree.lua#L1744-L1773)

## 算例條件與待確認事項

- 滿1份不射擊不換彈、無其他加成：(50−12.5)÷5=7.5秒；滿3份為(150−12.5)÷5=27.5秒。
- 3份啟用10秒、射擊20次且不換彈：150−12.5−10×5−20×0.5=77.5點。
- 動力驅動在姿態結束時計floor(累計消耗份數)，例0.25+0.7=0.95不足1份，增加0層；2.05份則按2份計10層。
- 25%、10%/秒及1%/射擊都是相對於單份充能成本，不是整個三份資源池的百分比。
- 超過一份電容量的總池可延長架勢；每秒與每次射擊都按單份成本計，不按整個池的上限重算。
- 遊戲原文：1.13.1／Steam Build 25606770 的 ui 資源。描述與實作的差異仍需遊戲內核對；省略細節不列為繁中誤譯。

## 原文核對

- 對應 hash：`090d6895`。
- 本機繁中及英文都列出啟動25%、每秒10%、每次射擊1%、裝填時暫停、切離次要武器/耗盡/再按會結束、裝填加速續留5秒且無固定冷卻。來源設定數值吻合；25%等百分比實際以單份充能成本計算，屬內部資源單位的補充說明。

## 圖示來源

[原圖](https://gameslantern.com/storage/sites/darktide/exporter/talents/cryptic/ability/cryptic_precision_stance.webp)｜[圖片來源 Issue](https://github.com/SyuanTsai/Media-Assets/issues/13#issuecomment-5935640756)｜[圖片附件](https://github.com/user-attachments/assets/fe67d92b-3b1a-4da7-bf6a-43bb643e80d6)

圖片僅供技能辨識，不作機制證據。

