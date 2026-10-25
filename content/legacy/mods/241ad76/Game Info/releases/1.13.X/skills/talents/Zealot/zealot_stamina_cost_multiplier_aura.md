# 熱忱(Zealous)：原始碼依據

[English](en/zealot_stamina_cost_multiplier_aura.md)

[返回玩家說明](README.md#zealot_stamina_cost_multiplier_aura)｜[技術索引](SOURCE_INDEX.md)｜[原文比對](LOCALIZATION_COMPARISON.md#zealot_stamina_cost_multiplier_aura)

- 來源版本：Release 1.13.1；固定 SHA：`7e662fcda16219d775b84af50322be2e9cd9d62e`。
- 天賦：`zealot_stamina_cost_multiplier_aura`；名稱鍵：`loc_talent_zealot_stamina_cost_multiplier_aura`；描述鍵：`loc_talent_zealot_stamina_cost_multiplier_delay_aura_description`。
- 節點：`node_a943bfdb-5117-4252-a3bb-ecaf704d5b9d`；分類：光環；每節點一點。
- 證據程度：原始碼確認／程式推導；以下算例屬程式推導，未進行遊戲內測試。

## 原始碼確認與程式推導

- talent format_values 將 stamina_cost_multiplier .85 格式化成降低百分比，將設定 stamina_delay 的絕對值作為秒數。zealot_stamina_cost_multiplier_aura 設定值為 .85 及 −.15。
- buff template 將這兩項值分別掛到 stat_buffs.stamina_cost_multiplier 和 stat_buffs.stamina_regeneration_delay；max_stacks 從 Zealot coop_2.max_stacks 讀取，值為 1。
- 協同 selector 以 coherency_id 對光環去重且優先數字小者；此 aura 的 ID 是 zealot_stamina_cost_multiplier_aura、priority=1。coherency daisy chain 包括自身。
- 模板 related_talents 指向 zealot_toughness_damage_reduction_coherency_improved。Tactical overlay 同時以 buff_template_name 或 related_talents 名稱比對 talent，採用第一個匹配即停止；若先迭代到恩賜定義，overlay 可能顯示錯誤標題或描述。這是顯示 metadata 疑點，不改變此 template 的耐力 stat buffs。
- 接收端若帶有 prevent_coherency_buffs_from_other_players keyword，通用 coherency selector 只採用同一位玩家來源的 aura；這是接收端例外，本次三個 Zealot aura 定義沒有賦予該 keyword。
- Stamina.drain 與 drain_pecentage 均將消耗乘 stamina_cost_multiplier；Stamina.update 把 regeneration_delay 與 stat 加算，通過等待時間後才依每秒速率恢復。
- tactical_overlay 的 buff lookup 會以 buff 名或 related_talents 比對；此處 related_talents 指向恩賜，因此可能造成顯示對應疑點。未做 UI 實測，不將其視為光環效果錯誤。

## 原始碼依據

- [scripts/settings/ability/archetype_talents/talents/zealot_talents.lua：860–883](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/zealot_talents.lua#L860-L883)
- [scripts/settings/talent/talent_settings_zealot.lua：99–102](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/talent/talent_settings_zealot.lua#L99-L102)
- [scripts/settings/talent/talent_settings_zealot.lua：319–328](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/talent/talent_settings_zealot.lua#L319-L328)
- [scripts/settings/buff/archetype_buff_templates/zealot_buff_templates.lua：3408–3425](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/zealot_buff_templates.lua#L3408-L3425)
- [scripts/extension_systems/coherency/coherency_system.lua：188–195](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/coherency/coherency_system.lua#L188-L195)
- [scripts/extension_systems/coherency/unit_coherency_extension.lua：256–311](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/coherency/unit_coherency_extension.lua#L256-L311)
- [scripts/ui/hud/elements/tactical_overlay/hud_element_tactical_overlay.lua：393–449](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/ui/hud/elements/tactical_overlay/hud_element_tactical_overlay.lua#L393-L449)
- [scripts/utilities/attack/stamina.lua：14–60](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/attack/stamina.lua#L14-L60)
- [scripts/utilities/attack/stamina.lua：121–148](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/attack/stamina.lua#L121-L148)
- [scripts/settings/ability/archetype_talents/talents/zealot_talents.lua：860–883](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/zealot_talents.lua#L860-L883)
- [scripts/ui/views/talent_builder_view/layouts/zealot_tree.lua：1450–1476](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/ui/views/talent_builder_view/layouts/zealot_tree.lua#L1450-L1476)

## 算例條件與待確認事項

- 消耗 20 點耐力的動作只套用倍率 0.85 時會消耗 17 點；此為倍率的隔離算例。
- 若某動作原恢復延遲為 0.50 秒，單獨加上 −0.15 秒修正後是 0.35 秒。
- 耐力算例未計其他裝備或天賦；恢復暫停狀態仍可阻止恢復。
- related_talents 的對應疑點只記錄於技術文件，不當作已確認的玩家端錯誤。
- 遊戲原文：1.13.1／Steam Build 25606770 的 ui 資源。描述與實作的差異仍需遊戲內核對；省略細節不列為繁中誤譯。

## 原文核對

- 對應 hash：`2b5c13bc`。
- 繁中寫「耐力消耗變為{stamina_cost_multiplier:%s}」，英文為帶符號的 Stamina Cost；固定來源會格式化為 −15%。機制為消耗乘 .85，但尚未確認該 Build 實際代入的文字，故將「變為」的措辭問題列為待核，不當成已完成的遊戲顯示勘誤。

## 圖示來源

[原圖](https://gameslantern.com/storage/sites/darktide/exporter/talents/zealot/aura/zealot_stamina_cost_multiplier_aura.webp)｜[圖片來源 Issue](https://github.com/SyuanTsai/Media-Assets/issues/8#issuecomment-5929289315)｜[圖片附件](https://github.com/user-attachments/assets/9e356573-f707-473e-8a64-943ae670aeeb)

圖片僅供技能辨識，不作機制證據。

