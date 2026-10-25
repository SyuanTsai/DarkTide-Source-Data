# 狙擊專注(Marksman's Focus)：原始碼依據

[English](en/veteran_snipers_focus.md)

[返回玩家說明](README.md#veteran_snipers_focus)｜[技術索引](SOURCE_INDEX.md)

- 來源版本：Release 1.13.1；SHA：`7e662fcda16219d775b84af50322be2e9cd9d62e`。
- 天賦：`veteran_snipers_focus`；名稱鍵：`loc_talent_veteran_snipers_focus`；描述鍵：`loc_talent_veteran_snipers_focus_duration_desc`。
- [節點](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/ui/views/talent_builder_view/layouts/veteran_tree.lua#L1710-L1740)：`keystone`，花費 1 點；[天賦定義](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/veteran_talents.lua#L2585-L2626)。
- 名稱對應沿用翻譯表；未進行遊戲內驗證。

## 原始碼確認與程式推導

主增益的 on_hit 分支先要求 hit_weakspot。只有 attack_result=died 且 attack_type=ranged 時新增3層；其他弱點命中僅在已有層數時重新計時，沒有再排除近戰。每層 ranged_finesse_modifier_bonus=0.075 由統一 finesse 結算用於遠程暴擊或弱點額外部分；reload_speed=0.01。不能寫成非致死弱點命中也新增層數，或只增加弱點傷害。

stat_buff_stacking_count 將屬性層數限制在10；max_stacks_cap=31 是內部原始層數硬上限。超出的原始層數不提高傷害或裝填速度。duration=5、refresh_duration_on_stack=true、refresh_duration_on_remove_stack=true；共用移除函式在有效上限內移除一層後重設起始時間，形成逐層衰減。高於有效上限的原始索引會先被清除，不能把31層當成31份增益。主文三層衰減算例避開溢位情況。

天賦 format_values 尚留 grace_time=6、grace_time_hit=3，但實際本增益使用5秒；沒有依移動直接消耗層數的分支。

## 原始碼依據

- [scripts/settings/talent/talent_settings_veteran.lua，第 35–39 行](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/talent/talent_settings_veteran.lua#L35-L39)
- [scripts/settings/buff/archetype_buff_templates/veteran_buff_templates.lua，第 2707–2883 行](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/veteran_buff_templates.lua#L2707-L2883)
- [scripts/extension_systems/buff/buffs/buff.lua，第 404–410 行](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/buff/buffs/buff.lua#L404-L410)
- [scripts/utilities/attack/damage_calculation.lua，第 672–782 行](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/attack/damage_calculation.lua#L672-L782)
- [scripts/extension_systems/buff/buff_extension_base.lua，第 434–461 行](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/buff/buff_extension_base.lua#L434-L461)
- [scripts/extension_systems/buff/buff_extension_base.lua，第 560–590 行](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/buff/buff_extension_base.lua#L560-L590)
- [scripts/extension_systems/buff/buff_extension_base.lua，第 635–661 行](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/buff/buff_extension_base.lua#L635-L661)
- [scripts/utilities/action/action_handler.lua，第 356–429 行](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/action/action_handler.lua#L356-L429)
- [scripts/settings/ability/archetype_talents/talents/veteran_talents.lua，第 2585–2626 行](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/veteran_talents.lua#L2585-L2626)

## 百分比與實際傷害增幅

- **程式推導**：每層 ranged_finesse_modifier_bonus=.075；10層加成.75作用於base_finesse_damage，而非整筆damage。B=100、F=40、s=0時140→170（約21.43%）；F=100時200→275（37.5%）。玩家例固定非暴擊弱點命中、其他倍率為1。
- ranged_finesse_modifier_bonus 與 hit_weakspot 成立時的 weakspot_damage 在同一 finesse_buff_damage_multiplier 內加算；10層與堅定不移合計.75+.30，B=F=100時傷害305。暴擊弱點命中先產生同一F，再套本加成一次，不存在因兩種條件同時成立而把.75套兩次的步驟。

- [scripts/settings/buff/archetype_buff_templates/veteran_buff_templates.lua，第 2798–2883 行](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/veteran_buff_templates.lua#L2798-L2883)
- [scripts/utilities/attack/damage_calculation.lua，第 672–782 行](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/attack/damage_calculation.lua#L672-L782)

## 算例條件與待確認事項

- 玩家頁算例按列出的基礎值及條件計算；未列出的加成、護甲、部位、距離及遊戲更新誤差不納入。
- 靜態推導不等同遊戲實測；名稱識別鍵與既有譯名的對應仍待使用者確認。
- 尚未驗證遊戲介面對有效上限之外原始層數的顯示；玩家算例只計有效層數。

## 圖示來源

[原圖](https://gameslantern.com/storage/sites/darktide/exporter/talents/veteran/keystone/veteran_snipers_focus.webp)｜[圖片來源 Issue](https://github.com/SyuanTsai/Media-Assets/issues/6#issuecomment-5922929234)｜[圖片附件](https://github.com/user-attachments/assets/4376889f-d2eb-4efe-836a-5e0ce5ae27f4)

圖片僅供技能辨識，不作機制證據。

