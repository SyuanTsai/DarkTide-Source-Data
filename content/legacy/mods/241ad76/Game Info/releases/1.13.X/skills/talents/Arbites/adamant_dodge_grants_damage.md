# 追跡法務官(Arbites Revelatum)：原始碼依據

[English](en/adamant_dodge_grants_damage.md)

[返回玩家說明](README.md#adamant_dodge_grants_damage)｜[技術索引](SOURCE_INDEX.md)｜[原文比對](LOCALIZATION_COMPARISON.md#adamant_dodge_grants_damage)

- 來源版本：Release 1.13.1；固定 SHA：`7e662fcda16219d775b84af50322be2e9cd9d62e`。
- 天賦：`adamant_dodge_grants_damage`；名稱鍵：`loc_talent_adamant_dodge_grants_damage`；描述鍵：`loc_talent_adamant_dodge_grants_damage_desc`。
- 節點：`node_bdab99db-3a50-4368-a9d7-7dc613f86f2d`；分類：技能；每節點一點。
- 證據程度：原始碼確認／程式推導；以下算例屬程式推導，未進行遊戲內測試。

## 原始碼確認與程式推導

- on_successful_dodge啟動damage=.15，active_duration5且allow_proc_while_active；damage屬一般加算階段。

## 原始碼依據

- [scripts/utilities/attack/damage_calculation.lua：236–263](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/attack/damage_calculation.lua#L236-L263)
- [scripts/extension_systems/buff/buffs/proc_buff.lua：303–357](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/buff/buffs/proc_buff.lua#L303-L357)
- [scripts/settings/talent/talent_settings_adamant.lua：382–385](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/talent/talent_settings_adamant.lua#L382-L385)
- [scripts/settings/buff/archetype_buff_templates/adamant_buff_templates.lua：3548–3565](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/adamant_buff_templates.lua#L3548-L3565)
- [scripts/settings/ability/archetype_talents/talents/adamant_talents.lua：2700–2718](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/adamant_talents.lua#L2700-L2718)
- [scripts/ui/views/talent_builder_view/layouts/adamant_tree.lua：1407–1435](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/ui/views/talent_builder_view/layouts/adamant_tree.lua#L1407-L1435)

## 算例條件與待確認事項

- **傷害算例**：基礎 100 點傷害、無其他修正時變成 100 × (1 + 15%) = 115 點；同階段原有 25% 加成時，由 125 點變成 140 點。
- 遊戲原文：1.13.1／Steam Build 25606770 的 ui 資源。描述與實作的差異仍需遊戲內核對；省略細節不列為繁中誤譯。

## 原文核對

- 對應 hash：`ad9cd3f2`。
- 繁中「成功閃避攻擊」對應英文 Successful Dodge，無明確矛盾。

## 圖示來源

[原圖](https://gameslantern.com/storage/sites/darktide/exporter/talents/adamant/default/adamant_dodge_grants_damage.webp)｜[圖片來源 Issue](https://github.com/SyuanTsai/Media-Assets/issues/11#issuecomment-5932563852)｜[圖片附件](https://github.com/user-attachments/assets/9a87f145-d4a8-4554-b8ca-f5fbb2a58944)

圖片僅供技能辨識，不作機制證據。

