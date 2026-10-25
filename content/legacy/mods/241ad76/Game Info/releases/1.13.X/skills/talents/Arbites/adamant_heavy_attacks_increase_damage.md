# 重如律法(Weight of the Lex)：原始碼依據

[English](en/adamant_heavy_attacks_increase_damage.md)

[返回玩家說明](README.md#adamant_heavy_attacks_increase_damage)｜[技術索引](SOURCE_INDEX.md)｜[原文比對](LOCALIZATION_COMPARISON.md#adamant_heavy_attacks_increase_damage)

- 來源版本：Release 1.13.1；固定 SHA：`7e662fcda16219d775b84af50322be2e9cd9d62e`。
- 天賦：`adamant_heavy_attacks_increase_damage`；名稱鍵：`loc_talent_adamant_heavy_attacks_increase_damage`；描述鍵：`loc_talent_adamant_heavy_attacks_increase_damage_desc`。
- 節點：`node_44740858-05d7-46c6-a2f0-a51c3aadadaf`；分類：技能；每節點一點。
- 證據程度：原始碼確認／程式推導；以下算例屬程式推導，未進行遊戲內測試。

## 原始碼確認與程式推導

- on_sweep_finish實際判params.is_heavy且num_hit_units>0；區域變數is_heavy包含fallback但未被使用，不能以fallback宣稱更多觸發。加成damage=.15非melee_damage，結束後才生效，不回溯加在本次重擊。

## 原始碼依據

- [scripts/utilities/attack/damage_calculation.lua：236–263](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/attack/damage_calculation.lua#L236-L263)
- [scripts/extension_systems/buff/buffs/proc_buff.lua：303–357](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/buff/buffs/proc_buff.lua#L303-L357)
- [scripts/settings/talent/talent_settings_adamant.lua：243–246](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/talent/talent_settings_adamant.lua#L243-L246)
- [scripts/settings/buff/archetype_buff_templates/adamant_buff_templates.lua：2547–2570](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/adamant_buff_templates.lua#L2547-L2570)
- [scripts/settings/ability/archetype_talents/talents/adamant_talents.lua：1367–1386](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/adamant_talents.lua#L1367-L1386)
- [scripts/ui/views/talent_builder_view/layouts/adamant_tree.lua：1599–1624](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/ui/views/talent_builder_view/layouts/adamant_tree.lua#L1599-L1624)

## 算例條件與待確認事項

- **傷害算例**：只比較增益生效後的攻擊，基礎 100 點變成 100 × (1 + 15%) = 115 點；已有同階段 25% 加成時，125 點變成 140 點。
- 遊戲原文：1.13.1／Steam Build 25606770 的 ui 資源。描述與實作的差異仍需遊戲內核對；省略細節不列為繁中誤譯。

## 原文核對

- 對應 hash：`573a8877`。
- 繁中「近戰重擊後」與英文 after Heavy Melee Attack一致；命中及揮擊結束時點屬補充。

## 圖示來源

[原圖](https://gameslantern.com/storage/sites/darktide/exporter/talents/adamant/default/adamant_heavy_attacks_increase_damage.webp)｜[圖片來源 Issue](https://github.com/SyuanTsai/Media-Assets/issues/11#issuecomment-5932563852)｜[圖片附件](https://github.com/user-attachments/assets/bff83e5a-48a0-4f4c-b280-3093df526c5d)

圖片僅供技能辨識，不作機制證據。

