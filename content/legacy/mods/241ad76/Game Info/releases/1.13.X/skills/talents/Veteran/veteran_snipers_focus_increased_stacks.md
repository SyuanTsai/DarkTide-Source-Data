# 遠程刺客(Long Range Assassin)：原始碼依據

[English](en/veteran_snipers_focus_increased_stacks.md)

[返回玩家說明](README.md#veteran_snipers_focus_increased_stacks)｜[技術索引](SOURCE_INDEX.md)

- 來源版本：Release 1.13.1；SHA：`7e662fcda16219d775b84af50322be2e9cd9d62e`。
- 天賦：`veteran_snipers_focus_increased_stacks`；名稱鍵：`loc_talent_veteran_snipers_focus_increased_stacks`；描述鍵：`loc_talent_veteran_snipers_focus_increased_stacks_description`。
- [節點](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/ui/views/talent_builder_view/layouts/veteran_tree.lua#L1787-L1810)：`keystone_modifier`，花費 1 點；[天賦定義](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/veteran_talents.lua#L2697-L2716)。
- 名稱對應沿用翻譯表；未進行遊戲內驗證。

## 原始碼確認與程式推導

本規則讓主增益選擇 veteran_snipers_focus_stat_buff_increased_stacks；clone僅把 max_stacks 改成15，保留每層0.075遠程finesse、0.01裝填速度、5秒計時及內部max_stacks_cap=31。屬性層數最多15，十層門檻仍由原常數判斷。十五層加成為1.125 finesse與0.15 reload speed，時間算例使用4/1.15，不把速度增加15%寫成時間減少15%。

## 原始碼依據

- [scripts/settings/ability/archetype_talents/talents/veteran_talents.lua，第 2697–2716 行](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/veteran_talents.lua#L2697-L2716)
- [scripts/settings/buff/archetype_buff_templates/veteran_buff_templates.lua，第 2707–2753 行](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/veteran_buff_templates.lua#L2707-L2753)
- [scripts/settings/buff/archetype_buff_templates/veteran_buff_templates.lua，第 2878–2883 行](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/veteran_buff_templates.lua#L2878-L2883)
- [scripts/extension_systems/buff/buffs/buff.lua，第 404–410 行](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/buff/buffs/buff.lua#L404-L410)
- [scripts/settings/talent/talent_settings_veteran.lua，第 35–39 行](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/talent/talent_settings_veteran.lua#L35-L39)
- [scripts/settings/buff/archetype_buff_templates/veteran_buff_templates.lua，第 2803–2822 行](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/veteran_buff_templates.lua#L2803-L2822)
- [scripts/utilities/attack/damage_calculation.lua，第 772–782 行](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/attack/damage_calculation.lua#L772-L782)
- [scripts/utilities/action/action_handler.lua，第 356–429 行](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/action/action_handler.lua#L356-L429)

## 百分比與實際傷害增幅

- **原始碼確認**：increased_stacks複製原stat buff並將max_stacks改為15，每層.075不變。
- **程式推導**：固定非暴擊弱點命中，B=100、F=40、無其他加成或後續倍率：零層140，十層170，十五層185。十五層相對零層為45/140≈32.14%；相對十層則15/170≈8.82%。112.5%是F的加成，不能當成整次傷害增幅，也不能用零層當分母宣稱是升級本身的增幅。

- [scripts/settings/buff/archetype_buff_templates/veteran_buff_templates.lua，第 2798–2883 行](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/veteran_buff_templates.lua#L2798-L2883)
- [scripts/utilities/attack/damage_calculation.lua，第 672–782 行](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/attack/damage_calculation.lua#L672-L782)

## 算例條件與待確認事項

- 玩家頁算例按列出的基礎值及條件計算；未列出的加成、護甲、部位、距離及遊戲更新誤差不納入。
- 靜態推導不等同遊戲實測；名稱識別鍵與既有譯名的對應仍待使用者確認。
- 尚未驗證遊戲介面對有效上限之外原始層數的顯示；玩家算例只計有效層數。

## 圖示來源

[原圖](https://gameslantern.com/storage/sites/darktide/exporter/talents/veteran/keystone_modifier/veteran_snipers_focus_increased_stacks.webp)｜[圖片來源 Issue](https://github.com/SyuanTsai/Media-Assets/issues/6#issuecomment-5922929234)｜[圖片附件](https://github.com/user-attachments/assets/426b1945-b7fc-40e8-9db1-3bda08514bab)

圖片僅供技能辨識，不作機制證據。

