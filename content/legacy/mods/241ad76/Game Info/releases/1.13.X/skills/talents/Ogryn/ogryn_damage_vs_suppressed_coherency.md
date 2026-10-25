# 優勝劣汰(Coward Culling)：原始碼依據

[English](en/ogryn_damage_vs_suppressed_coherency.md)

[返回玩家說明](README.md#ogryn_damage_vs_suppressed_coherency)｜[技術索引](SOURCE_INDEX.md)｜[原文比對](LOCALIZATION_COMPARISON.md#ogryn_damage_vs_suppressed_coherency)

- 來源版本：Release 1.13.1；固定 SHA：`7e662fcda16219d775b84af50322be2e9cd9d62e`。
- 天賦：`ogryn_damage_vs_suppressed_coherency`；名稱鍵：`loc_talent_ogryn_damage_vs_suppressed`；描述鍵：`loc_talent_ogryn_damage_vs_suppressed_new_desc`。
- 節點：`node_eb153946-19bd-4e03-8dcd-7feb7be78e56`；分類：光環；每節點一點。
- 證據程度：原始碼確認／程式推導；以下算例屬程式推導，未進行遊戲內測試。

## 原始碼確認與程式推導

- 協同光環將 damage_vs_suppressed 設為 0.2；天賦另安裝個人壓制增幅效果，設定值為 0.25。
- 此光環 max_stacks=1；技能樹節點位於三種歐格林光環共用的 exclusive_group=aura。
- 協同鏈建立時將單位自身加入該單位的鏈；光環影響範圍包含持有者本人。

## 原始碼依據

- [scripts/settings/ability/archetype_talents/talents/ogryn_talents.lua：691–717](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/ogryn_talents.lua#L691-L717)
- [scripts/settings/buff/archetype_buff_templates/ogryn_buff_templates.lua：2041–2058](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/ogryn_buff_templates.lua#L2041-L2058)
- [scripts/settings/buff/archetype_buff_templates/ogryn_buff_templates.lua：3100–3106](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/ogryn_buff_templates.lua#L3100-L3106)
- [scripts/settings/talent/talent_settings_ogryn.lua：190–192](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/talent/talent_settings_ogryn.lua#L190-L192)
- [scripts/settings/talent/talent_settings_ogryn.lua：215–219](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/talent/talent_settings_ogryn.lua#L215-L219)
- [scripts/ui/views/talent_builder_view/layouts/ogryn_tree.lua：221–244](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/ui/views/talent_builder_view/layouts/ogryn_tree.lua#L221-L244)
- [scripts/extension_systems/coherency/coherency_system.lua：188–195](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/coherency/coherency_system.lua#L188-L195)
- [scripts/utilities/attack/damage_calculation.lua：435–447](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/attack/damage_calculation.lua#L435-L447)
- [scripts/utilities/attack/suppression.lua：26–44](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/attack/suppression.lua#L26-L44)
- [scripts/settings/ability/archetype_talents/talents/ogryn_talents.lua：691–717](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/ogryn_talents.lua#L691-L717)
- [scripts/ui/views/talent_builder_view/layouts/ogryn_tree.lua：220–246](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/ui/views/talent_builder_view/layouts/ogryn_tree.lua#L220-L246)

## 算例條件與待確認事項

- **傷害算例**：只計此光環的單項加成，受壓制目標原本承受 100 點傷害時為 100 × (1 + 20%) = 120 點。
- 此算例只計對受壓制目標的 20% 傷害加成；目標壓制狀態、其他傷害修正、護甲與傷害部位會改變實際傷害。
- 額外 25% 是持有者造成的壓制效果，與隊伍對受壓制目標的 20% 傷害加成分開計算。
- 遊戲原文：1.13.1／Steam Build 25606770 的 ui 資源。描述與實作的差異仍需遊戲內核對；省略細節不列為繁中誤譯。

## 原文核對

- 對應 hash：`4e68c42c`。
- 同 hash 4e68c42c 的中英文都明列你與協同盟友對受壓制敵人的傷害加成，以及持有者造成的壓制數值；設定分別為 +20% 傷害與 +25% 壓制，兩者作用對象不同。本機 Build 25606770 的繁中與英文文字以相同 hash 配對；文字與程式來源皆為1.13.1；實際表現仍待遊戲內核對。未列出的數值、公式或限制屬省略，不據此判為誤譯。

## 圖示來源

[原圖](https://gameslantern.com/storage/sites/darktide/exporter/talents/ogryn/aura/ogryn_damage_vs_suppressed_coherency.webp)｜[圖片來源 Issue](https://github.com/SyuanTsai/Media-Assets/issues/10#issuecomment-5931383354)｜[圖片附件](https://github.com/user-attachments/assets/4b71152f-747b-450c-9d3a-82a313fc8360)

圖片僅供技能辨識，不作機制證據。

