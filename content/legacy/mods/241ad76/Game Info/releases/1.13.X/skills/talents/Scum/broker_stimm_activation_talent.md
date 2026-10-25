# 裝備財閥特殊裝備(Equip Cartel Special)：原始碼依據

[English](en/broker_stimm_activation_talent.md)

[返回玩家說明](README.md#broker_stimm_activation_talent)｜[技術索引](SOURCE_INDEX.md)｜[原文比對](LOCALIZATION_COMPARISON.md#broker_stimm_activation_talent)

- 來源版本：Release 1.13.1；固定 SHA：`7e662fcda16219d775b84af50322be2e9cd9d62e`。
- 天賦：`broker_stimm_activation_talent`；名稱鍵：`loc_talent_broker_stimm_activation_talent`；描述鍵：`loc_talent_broker_stimm_activation_talent_desc`。
- 節點：`node_5c2139f8-0686-42f5-97fe-9b65e547e649`；分類：興奮劑配方；配點成本：0 點。
- 證據程度：原始碼確認／程式推導；以下算例屬程式推導，未進行遊戲內測試。

## 原始碼確認與程式推導

- 起始節點 cost=0，僅有說明，左右鍵處理遇到 start 均返回；真正裝備判定由 conditional_base_talent_funcs.broker_syringe 搜尋已選的任一 broker_stimm 配方。
- 專用物品放在 slot_pocketable_small，givable=false、undroppable=true、auto_use=true；使用消耗能力充能且暫停恢復，不是一般可撿取興奮劑的消耗方式。
- 30 點額度由獨立配方樹 node_points 決定。cooldown_lerp_func 與 resource_cost_per_charge_lerp_func 均為 ceil(lerp(15,75,clamp01((P−1)/(30−1))))；P=0 時 min 改0，但沒有配方也不符合專用物品裝備條件。
- syringe_broker_buff 存在時 pause_fulfilled_func 返回false；藥效15秒，syringe_duration 額外增加時連帶延後自然冷卻起算。

## 原始碼依據

- 延長藥效額外增加5秒：[數值設定](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/talent/talent_settings_broker.lua#L374-L376)；[套用至興奮劑持續時間](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/broker_buff_templates.lua#L2001-L2006)。

- [scripts/settings/archetype/archetypes/broker_archetype.lua：72–89](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/archetype/archetypes/broker_archetype.lua#L72-L89)
- [scripts/ui/views/broker_stimm_builder_view/broker_stimm_builder_view.lua：1165–1199](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/ui/views/broker_stimm_builder_view/broker_stimm_builder_view.lua#L1165-L1199)
- [scripts/settings/equipment/weapon_templates/pocketables/syringe_broker_pocketable.lua：6–35](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/pocketables/syringe_broker_pocketable.lua#L6-L35)
- [scripts/settings/ability/player_abilities/abilities/broker_abilities.lua：140–209](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/player_abilities/abilities/broker_abilities.lua#L140-L209)
- [scripts/settings/buff/archetype_buff_templates/broker_buff_templates.lua：4091–4108](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/broker_buff_templates.lua#L4091-L4108)
- [scripts/settings/buff/archetype_buff_templates/broker_buff_templates.lua：4173–4181](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/broker_buff_templates.lua#L4173-L4181)
- [scripts/settings/ability/archetype_talents/talents/broker_talents.lua：3187–3191](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/broker_talents.lua#L3187-L3191)
- [scripts/ui/views/broker_stimm_builder_view/layouts/broker_stimm_tree.lua：11–36](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/ui/views/broker_stimm_builder_view/layouts/broker_stimm_tree.lua#L11-L36)

## 算例條件與待確認事項

- P=15：ceil(15+60×14/29)=44秒。P=30：75秒；包含基本15秒藥效後為90秒。
- 15秒藥效為直接注射的基本時間；化學性依賴場域由其外部控制的持續／延續時間決定。
- 起始節點不是另一個可升級配方，不計入29個配方節點。
- 遊戲原文：1.13.1／Steam Build 25606770 的 ui 資源。描述與實作的差異仍需遊戲內核對；省略細節不列為繁中誤譯。

## 原文核對

- 對應 hash：`95c45406`。
- 同鍵文字說明裝備專用興奮劑。固定版中央起始圖示無點選動作；裝備條件實際取決於是否選取任何配方。這是介面操作補充，不列繁中誤譯。

## 圖示來源

[原圖](https://gameslantern.com/storage/sites/darktide/exporter/talents/broker/start/broker_stimm_activation_talent.webp)｜[圖片來源 Issue](https://github.com/SyuanTsai/Media-Assets/issues/12#issuecomment-5934604124)｜[圖片附件](https://github.com/user-attachments/assets/51c007e0-bed4-4759-a369-04ab37032369)

圖片僅供技能辨識，不作機制證據。

