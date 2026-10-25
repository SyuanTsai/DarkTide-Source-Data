# 處刑命令(Execution Order)：原始碼依據

[English](en/adamant_execution_order.md)

[返回玩家說明](README.md#adamant_execution_order)｜[技術索引](SOURCE_INDEX.md)｜[原文比對](LOCALIZATION_COMPARISON.md#adamant_execution_order)

- 來源版本：Release 1.13.1；固定 SHA：`7e662fcda16219d775b84af50322be2e9cd9d62e`。
- 天賦：`adamant_execution_order`；名稱鍵：`loc_talent_adamant_exterminator`；描述鍵：`loc_talent_execution_order_description`。
- 節點：`node_52c3f35e-7fe4-4321-a04c-2a51eccac74c`；分類：鑰石；每節點一點。
- 證據程度：原始碼確認／程式推導；以下算例屬程式推導，未進行遊戲內測試。

## 原始碼確認與程式推導

- selector query40m、dot>.5與LoS；monster/captain/cultist_captain走instant_type分支，不需t>next_t。選中第一個合格項即break，不能據chosen_distance宣稱最近。已標記排除候選但未清除其他標記；移除須超40m、在背後且非aggroed。
- on_hit 只有 server 處理。標記目標死亡才進入 _execution_order_proc：恢復 0.15 最大韌性、建立本人的 8 秒 +10% damage／+10% attack speed buff，並在已選升級時建立相應 child buff。 _execution_order_proc同時給companion buff；on_minion_death直接return，故不是全隊任意擊殺。
- dog 分支檢查 companion hit 的 damage_profile.initial_pounce，且 victim 仍在標記 targets/deleted_units 中，才建立 8 秒 companion_damage_modifier=1.5 buff。共享 damage_calculation 會把 owner 的 companion_damage_modifier 加入 companion 的傷害 stat。 此旗標也存在於對歐格林與巨獸的持續壓制 profile，不能僅按名稱推斷每次撲擊只觸發一次；標記擊殺另有獨立路徑給予同一犬增益。

## 原始碼依據

- [scripts/settings/ability/archetype_talents/talents/adamant_talents.lua：2132–2165](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/adamant_talents.lua#L2132-L2165)
- [scripts/settings/talent/talent_settings_adamant.lua：102–119](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/talent/talent_settings_adamant.lua#L102-L119)
- [scripts/settings/buff/archetype_buff_templates/adamant_buff_templates.lua：845–955](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/adamant_buff_templates.lua#L845-L955)
- [scripts/settings/buff/archetype_buff_templates/adamant_buff_templates.lua：958–990](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/adamant_buff_templates.lua#L958-L990)
- [scripts/settings/buff/archetype_buff_templates/adamant_buff_templates.lua：991–1097](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/adamant_buff_templates.lua#L991-L1097)
- [scripts/settings/buff/archetype_buff_templates/adamant_buff_templates.lua：1098–1122](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/adamant_buff_templates.lua#L1098-L1122)
- [scripts/utilities/toughness/toughness.lua：16–35](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/toughness/toughness.lua#L16-L35)
- [scripts/utilities/attack/damage_calculation.lua：265–276](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/attack/damage_calculation.lua#L265-L276)
- [scripts/utilities/action/action_handler.lua：356–428](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/action/action_handler.lua#L356-L428)
- [scripts/utilities/attack/damage_calculation.lua：236–276](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/attack/damage_calculation.lua#L236-L276)
- [scripts/settings/damage/damage_profiles/archetypes/adamant_damage_profile_templates.lua：227–240](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/damage/damage_profiles/archetypes/adamant_damage_profile_templates.lua#L227-L240)
- [scripts/settings/ability/archetype_talents/talents/adamant_talents.lua：2132–2165](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/adamant_talents.lua#L2132-L2165)
- [scripts/ui/views/talent_builder_view/layouts/adamant_tree.lua：91–122](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/ui/views/talent_builder_view/layouts/adamant_tree.lua#L91-L122)

## 算例條件與待確認事項

- 最大韌性 100、被標記敵人被擊殺且韌性缺額至少 15 時，恢復 15 點；自身 +10% 傷害和攻速到 8 秒到期。
- 戰犬對標記目標作初次 pounce 命中後，若符合程式條件，狗的傷害 modifier 為 1+1.5，即基礎傷害的 2.5 倍，維持 8 秒。
- 機制來源固定為公開 Aussiemon/Darktide-Source-Code SHA 7e662fcda16219d775b84af50322be2e9cd9d62e；繁中、英文模板與程式來源皆為1.13.1；遊戲內最終顯示仍待核對。程式實作和文字措辭如有差異，先列文字與實作差異待核，不直接判為翻譯錯誤。
- 文字概稱獒犬攻擊標記敵人後增傷；固定實作的命中分支要求 initial_pounce，對歐格林與巨獸的後續攻擊亦帶此旗標。標記擊殺另可給予同一增益；命中條件的文字邊界留待遊戲內核對。
- 「定期標記」不是無條件每 3 秒標記：必須有符合範圍、方位、視線與目標類別的候選敵人。
- 遊戲原文：1.13.1／Steam Build 25606770 的 ui 資源。描述與實作的差異仍需遊戲內核對；省略細節不列為繁中誤譯。

## 原文核對

- 對應 hash：`720bc321`。
- 繁中與同源英文的擊殺恢復、玩家與獒犬增益一致。兩者概稱獒犬攻擊標記目標後增傷；固定實作的命中分支只接受 initial_pounce，對歐格林與巨獸的持續壓制也帶此旗標，標記擊殺另可給予增益。命中條件的文字邊界待遊戲內核對。

## 圖示來源

[原圖](https://gameslantern.com/storage/sites/darktide/exporter/talents/adamant/keystone/adamant_execution_order.webp)｜[圖片來源 Issue](https://github.com/SyuanTsai/Media-Assets/issues/11#issuecomment-5932554216)｜[圖片附件](https://github.com/user-attachments/assets/66f3dd5d-68b9-415a-8330-b6daf3fb427c)

圖片僅供技能辨識，不作機制證據。

