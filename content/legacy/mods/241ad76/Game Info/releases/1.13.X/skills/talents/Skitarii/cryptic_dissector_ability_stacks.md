# 強化電容協議(Enhanced Capacitance Protocols)：原始碼依據

[English](en/cryptic_dissector_ability_stacks.md)

[返回玩家說明](README.md#cryptic_dissector_ability_stacks)｜[技術索引](SOURCE_INDEX.md)｜[原文比對](LOCALIZATION_COMPARISON.md#cryptic_dissector_ability_stacks)

- 來源版本：Release 1.13.1；固定 SHA：`7e662fcda16219d775b84af50322be2e9cd9d62e`。
- 天賦：`cryptic_dissector_ability_stacks`；名稱鍵：`loc_talent_cryptic_dissector_ability`；描述鍵：`loc_talent_cryptic_dissector_ability_stacks_desc`。
- 節點：`node_dc1911a1-3b00-44d2-b830-00c0b18ed2e9`；分類：鑰石；每節點一點。
- 證據程度：原始碼確認／程式推導；以下算例屬程式推導，未進行遊戲內測試。

## 原始碼確認與程式推導

- Talent Definition只啟用 special_rule cryptic_dissector_combat_ability_restores_stacks，沒有額外數值。cryptic_dissector 的 on_combat_ability 檢查此rule，specific_proc_func計算 num_max_stacks−current_stacks，並逐層加入直到滿層；此處不使用 ability_cost，因此補的是所有缺層，不是依消耗充能數計算。
- 事件由能力動作明確送出；ActionAbilityBase本身只管理能力資源，cryptic_discharge與cryptic_precision_stance_toggle在各自動作執行時呼叫 on_combat_ability。故效果依實際送出的事件觸發，非任何UI輸入一概觸發。

## 原始碼依據

- [scripts/ui/views/talent_builder_view/layouts/cryptic_tree.lua：1774–1796](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/ui/views/talent_builder_view/layouts/cryptic_tree.lua#L1774-L1796)
- [scripts/settings/ability/archetype_talents/talents/cryptic_talents.lua：1200–1210](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/cryptic_talents.lua#L1200-L1210)
- [scripts/settings/buff/archetype_buff_templates/cryptic_buff_templates.lua：1412–1431](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/cryptic_buff_templates.lua#L1412-L1431)
- [scripts/settings/buff/archetype_buff_templates/cryptic_buff_templates.lua：1465–1477](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/cryptic_buff_templates.lua#L1465-L1477)
- [scripts/extension_systems/weapon/actions/action_ability_base.lua：25–65](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/weapon/actions/action_ability_base.lua#L25-L65)
- [scripts/extension_systems/ability/actions/action_cryptic_discharge.lua：69–80](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/ability/actions/action_cryptic_discharge.lua#L69-L80)
- [scripts/extension_systems/ability/actions/action_cryptic_precision_stance_toggle.lua：104–114](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/ability/actions/action_cryptic_precision_stance_toggle.lua#L104-L114)
- [scripts/settings/ability/archetype_talents/talents/cryptic_talents.lua：1200–1210](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/cryptic_talents.lua#L1200-L1210)
- [scripts/ui/views/talent_builder_view/layouts/cryptic_tree.lua：1774–1796](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/ui/views/talent_builder_view/layouts/cryptic_tree.lua#L1774-L1796)

## 算例條件與待確認事項

- 靜態推演：目前3/6層時使用能力並觸發on_combat_ability，補上3層成6/6；滿層時缺層為0，不新增。
- 效果取決於能力動作有送出on_combat_ability事件；能力本身是否另有消耗充能不改變補到上限的計算。
- 遊戲原文：1.13.1／Steam Build 25606770 的 ui 資源。描述與實作的差異仍需遊戲內核對；省略細節不列為繁中誤譯。

## 原文核對

- 對應 hash：`39219dd5`。
- 繁中與英文皆寫使用能力補滿所有層數；固定版依缺少層數補至max，未發現誤譯。

## 圖示來源

[原圖](https://gameslantern.com/storage/sites/darktide/exporter/talents/cryptic/keystone_modifier/cryptic_dissector_ability_stacks.webp)｜[圖片來源 Issue](https://github.com/SyuanTsai/Media-Assets/issues/13#issuecomment-5935647528)｜[圖片附件](https://github.com/user-attachments/assets/de2e3c8c-8b4c-4859-87d0-c1416c07ef5c)

圖片僅供技能辨識，不作機制證據。

