# 為了小子們(For the Lil'Uns)：原始碼依據

[English](en/ogryn_protect_allies.md)

[返回玩家說明](README.md#ogryn_protect_allies)｜[技術索引](SOURCE_INDEX.md)｜[原文比對](LOCALIZATION_COMPARISON.md#ogryn_protect_allies)

- 來源版本：Release 1.13.1；固定 SHA：`7e662fcda16219d775b84af50322be2e9cd9d62e`。
- 天賦：`ogryn_protect_allies`；名稱鍵：`loc_talent_ogryn_protect_allies_name`；描述鍵：`loc_talent_ogryn_protect_allies_desc`。
- 節點：`node_1ea4b738-84ef-45d6-8a69-151d578944d5`；分類：技能；每節點一點。
- 證據程度：原始碼確認／程式推導；以下算例屬程式推導，未進行遊戲內測試。

## 原始碼確認與程式推導

- 兩個獨立proc buff，僅排除自身，沒有coherency判斷。toughness_broken active10 cooldown20 allow_proc_while_active；CD從active結束後開始。knocked_down無CD active10 revive_speed+.25 stun_immune。

## 原始碼依據

- [scripts/settings/buff/archetype_buff_templates/ogryn_buff_templates.lua：2680–2726](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/ogryn_buff_templates.lua#L2680-L2726)
- [scripts/settings/talent/talent_settings_ogryn.lua：38–44](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/talent/talent_settings_ogryn.lua#L38-L44)
- [scripts/settings/talent/talent_settings_ogryn.lua：12–15](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/talent/talent_settings_ogryn.lua#L12-L15)
- [scripts/extension_systems/buff/buffs/proc_buff.lua：150–184](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/buff/buffs/proc_buff.lua#L150-L184)
- [scripts/utilities/attack/damage_taken_calculation.lua：223–258](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/attack/damage_taken_calculation.lua#L223-L258)
- [scripts/extension_systems/interaction/interactor_extension.lua：134–156](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/interaction/interactor_extension.lua#L134-L156)
- [scripts/settings/interaction/interaction_settings.lua：18–25](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/interaction/interaction_settings.lua#L18-L25)
- [scripts/settings/ability/archetype_talents/talents/ogryn_talents.lua：2269–2317](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/ogryn_talents.lua#L2269-L2317)
- [scripts/ui/views/talent_builder_view/layouts/ogryn_tree.lua：1571–1593](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/ui/views/talent_builder_view/layouts/ogryn_tree.lua#L1571-L1593)

## 算例條件與待確認事項

- 扶起算例是隔離速度修正；其他互動時間修正可能改變實際秒數。
- 遊戲原文：1.13.1／Steam Build 25606770 的 ui 資源。描述與實作的差異仍需遊戲內核對；省略細節不列為繁中誤譯。

## 原文核對

- 對應 hash：`67e1573d`。
- 核對同一描述鍵／hash 的繁中與英文，效果方向未見明確翻譯矛盾；未列公式、上限或細部限制不算錯誤。

## 圖示來源

[原圖](https://gameslantern.com/storage/sites/darktide/exporter/talents/ogryn/default/ogryn_protect_allies.webp)｜[圖片來源 Issue](https://github.com/SyuanTsai/Media-Assets/issues/10#issuecomment-5931394406)｜[圖片附件](https://github.com/user-attachments/assets/d61a8184-294b-4ade-9847-3c5241828792)

圖片僅供技能辨識，不作機制證據。

