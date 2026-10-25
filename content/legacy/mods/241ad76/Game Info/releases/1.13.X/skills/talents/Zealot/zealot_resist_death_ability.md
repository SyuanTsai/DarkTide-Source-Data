# 狂熱朝聖者(Zealous Pilgrim)：原始碼依據

[English](en/zealot_resist_death_ability.md)

[返回玩家說明](README.md#zealot_resist_death_ability)｜[技術索引](SOURCE_INDEX.md)｜[原文比對](LOCALIZATION_COMPARISON.md#zealot_resist_death_ability)

- 來源版本：Release 1.13.1；固定 SHA：`7e662fcda16219d775b84af50322be2e9cd9d62e`。
- 天賦：`zealot_resist_death_ability`；名稱鍵：`loc_talent_zealot_resist_death_ability`；描述鍵：`loc_talent_zealot_resist_death_ability_offensive_desc`。
- 節點：`node_3483d4d7-3f13-48de-8055-ecfc04d70aae`；分類：鑰石；每節點一點。
- 證據程度：原始碼確認／程式推導；以下算例屬程式推導，未進行遊戲內測試。

## 原始碼確認與程式推導

- 樹節點同時掛載 `zealot_resist_death_ability` 與 `zealot_resist_death_offensive`。前者監聽 `on_combat_ability`，一般技能使用時加上 `zealot_resist_death_temp`；此 timed buff 持續4秒並提供 `unkillable`。後者只在玩家有該關鍵字時套用+10% damage與+10% attack_speed。
- 隱身與聖物由各自結束流程處理：隱身 buff 的 `stop_func` 在離開隱身時加 temporary buff；channel action 在技能結束、恢復充能後加 buff。共用 handler 對這兩類 action 提前返回，避免過早觸發。
- `zealot_resist_death_temp` 未設定 max_stacks；BuffExtension 對沒有 max_stacks 的同名 buff 建立獨立實例，因此重複使用技能時可能有重疊的4秒實例，沒有單一共享重設倒數。
- 此 modifier 與 Holy Revenant 共用 `exclusive_group=resist_death_1`，不可同時選取；可與 Fire and Fury、Risen 並用。

## 原始碼依據

- [scripts/settings/ability/archetype_talents/talents/zealot_talents.lua：3288–3330](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/zealot_talents.lua#L3288-L3330)
- [scripts/settings/buff/archetype_buff_templates/zealot_buff_templates.lua：5062–5084](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/zealot_buff_templates.lua#L5062-L5084)
- [scripts/settings/buff/archetype_buff_templates/zealot_buff_templates.lua：5086–5101](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/zealot_buff_templates.lua#L5086-L5101)
- [scripts/settings/buff/archetype_buff_templates/zealot_buff_templates.lua：4299–4329](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/zealot_buff_templates.lua#L4299-L4329)
- [scripts/settings/buff/archetype_buff_templates/zealot_buff_templates.lua：5144–5157](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/zealot_buff_templates.lua#L5144-L5157)
- [scripts/extension_systems/weapon/actions/action_zealot_channel.lua：455–489](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/weapon/actions/action_zealot_channel.lua#L455-L489)
- [scripts/extension_systems/buff/buff_extension_base.lua：434–470](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/buff/buff_extension_base.lua#L434-L470)
- [scripts/ui/views/talent_builder_view/layouts/zealot_tree.lua：1990–2012](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/ui/views/talent_builder_view/layouts/zealot_tree.lua#L1990-L2012)
- [scripts/ui/views/talent_builder_view/layouts/zealot_tree.lua：1270–1295](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/ui/views/talent_builder_view/layouts/zealot_tree.lua#L1270-L1295)
- [scripts/utilities/action/action_handler.lua：356–429](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/action/action_handler.lua#L356-L429)
- [scripts/utilities/attack/damage_calculation.lua：289–303](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/attack/damage_calculation.lua#L289-L303)
- [scripts/settings/ability/archetype_talents/talents/zealot_talents.lua：3288–3330](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/zealot_talents.lua#L3288-L3330)
- [scripts/ui/views/talent_builder_view/layouts/zealot_tree.lua：1990–2013](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/ui/views/talent_builder_view/layouts/zealot_tree.lua#L1990-L2013)

## 算例條件與待確認事項

- **傷害與速度算例**：只計這項增益，基礎 100 點傷害變成 100 × 1.1 = 110 點；受攻速影響的 1 秒動作變成 1 ÷ 1.1 ≈ 0.909 秒。其他同階段加成先相加。
- 此無法殺死效果不會縮短死戰到底本身的120秒冷卻。
- 重複實例是由未設 max_stacks 的 BuffExtension 建立流程推導；UI呈現不在本次分析範圍。
- 遊戲原文：1.13.1／Steam Build 25606770 的 ui 資源。描述與實作的差異仍需遊戲內核對；省略細節不列為繁中誤譯。

## 原文核對

- 對應 hash：`ccea0bcc`。
- 繁中與英文對使用技能、隱身/聖物起算時點及兩項增益的方向相符。

## 圖示來源

[原圖](https://gameslantern.com/storage/sites/darktide/exporter/talents/zealot/keystone_modifier/zealot_resist_death_ability.webp)｜[圖片來源 Issue](https://github.com/SyuanTsai/Media-Assets/issues/8#issuecomment-5929289315)｜[圖片附件](https://github.com/user-attachments/assets/121a9a79-f78e-4274-a0ac-4a1683244ae7)

圖片僅供技能辨識，不作機制證據。

