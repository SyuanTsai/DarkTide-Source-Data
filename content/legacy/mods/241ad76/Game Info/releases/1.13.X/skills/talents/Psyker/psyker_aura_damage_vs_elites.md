# 動能釋放(Kinetic Presence)：原始碼依據

[English](en/psyker_aura_damage_vs_elites.md)

[返回玩家說明](README.md#psyker_aura_damage_vs_elites)｜[技術索引](SOURCE_INDEX.md)｜[原文比對](LOCALIZATION_COMPARISON.md#psyker_aura_damage_vs_elites)

- 來源版本：Release 1.13.1；固定 SHA：`7e662fcda16219d775b84af50322be2e9cd9d62e`。
- 天賦：`psyker_aura_damage_vs_elites`；名稱鍵：`loc_talent_psyker_base_3`；描述鍵：`loc_talent_psyker_base_3_description`。
- 節點：`node_d323e130-860b-42f1-acd2-dc50cacde619`；分類：光環；每節點一點。
- 證據程度：原始碼確認／程式推導；以下算例屬程式推導，未進行遊戲內測試。

## 原始碼確認與程式推導

- 固定原始碼 SHA 7e662fcda16219d775b84af50322be2e9cd9d62e。此光環設定 damage_vs_elites=0.1，最多一層；增益效果把該值套用到持有者。協同集合建立時包含本人，並由協同擴充更新集合內單位的光環效果，所以本人和協同中的隊友受益。共用傷害計算只在目標帶有 elite 標籤時讀取 damage_vs_elites，並將這個加成納入攻擊者傷害修正；因此不應把效果寫成對所有專家或所有敵人通用。

## 原始碼依據

- [scripts/ui/views/talent_builder_view/layouts/psyker_tree.lua：373–401](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/ui/views/talent_builder_view/layouts/psyker_tree.lua#L373-L401)
- [scripts/settings/ability/archetype_talents/talents/psyker_talents.lua：926–943](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/psyker_talents.lua#L926-L943)
- [scripts/settings/talent/talent_settings_psyker.lua：176–179](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/talent/talent_settings_psyker.lua#L176-L179)
- [scripts/settings/buff/archetype_buff_templates/psyker_buff_templates.lua：1303–1320](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/psyker_buff_templates.lua#L1303-L1320)
- [scripts/extension_systems/coherency/coherency_system.lua：188–195](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/coherency/coherency_system.lua#L188-L195)
- [scripts/extension_systems/coherency/unit_coherency_extension.lua：279–311](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/coherency/unit_coherency_extension.lua#L279-L311)
- [scripts/utilities/attack/damage_calculation.lua：334–337](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/attack/damage_calculation.lua#L334-L337)
- [scripts/settings/ability/archetype_talents/talents/psyker_talents.lua：926–943](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/psyker_talents.lua#L926-L943)
- [scripts/ui/views/talent_builder_view/layouts/psyker_tree.lua：373–401](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/ui/views/talent_builder_view/layouts/psyker_tree.lua#L373-L401)

## 算例條件與待確認事項

- 只有此光環的 10% 加成生效，忽略其他傷害加成與目標倍率。 對精英：100 × 1.1 = 110；對非精英：不套用此光環加成。 精英目標的示例傷害提高 10%；非精英不因本光環增加傷害。
- 只加成原始碼標記為精英的目標；不同來源可能另有專家、巨獸或其他分類加成，不能由本光環推定。
- 其他增傷會共同影響最後傷害值；算例只隔離此光環。
- 文字與程式來源皆為1.13.1；實際表現待遊戲內核對；未做遊戲內測試。
- 遊戲原文：1.13.1／Steam Build 25606770 的 ui 資源。描述與實作的差異仍需遊戲內核對；省略細節不列為繁中誤譯。

## 原文核對

- 對應 hash：`4fad8ca6`。
- 本地繁中說明的受益者為自己與協同隊友，目標為精英敵人，增幅由固定原始碼確認為 10%。

## 圖示來源

[原圖](https://gameslantern.com/storage/sites/darktide/exporter/talents/psyker/aura/psyker_aura_damage_vs_elites.webp)｜[圖片來源 Issue](https://github.com/SyuanTsai/Media-Assets/issues/7#issuecomment-5928024966)｜[圖片附件](https://github.com/user-attachments/assets/ddd7895f-a971-4cdf-99bd-3f536cab3f8a)

圖片僅供技能辨識，不作機制證據。

