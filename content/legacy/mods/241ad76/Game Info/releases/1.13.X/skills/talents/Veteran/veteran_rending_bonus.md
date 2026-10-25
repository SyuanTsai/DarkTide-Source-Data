# 裂擊(Rending Strikes)：原始碼依據

[English](en/veteran_rending_bonus.md)

[返回玩家說明](README.md#veteran_rending_bonus)｜[技術索引](SOURCE_INDEX.md)

- 來源版本：Release 1.13.1；SHA：`7e662fcda16219d775b84af50322be2e9cd9d62e`。
- 天賦：`veteran_rending_bonus`；名稱鍵：`loc_talent_veteran_rending_bonus`；描述鍵：`loc_talent_veteran_rending_bonus_desc`。
- [節點](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/ui/views/talent_builder_view/layouts/veteran_tree.lua#L384-L408)：`default`，花費 1 點；[天賦定義](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/veteran_talents.lua#L2433-L2456)。
- 名稱對應沿用翻譯表；未進行遊戲內驗證。

## 原始碼確認與程式推導

天賦的 format_values 與實際 buff 都給 rending_multiplier = .10。天賦 Lua name 內部字串卻寫「Give 20% rending to all weapons」，與可見數值／buff 相衝；採實際 buff 值 +10%，並記錄名稱字串疑點。共用 damage calculation 將 attacker/target rending modifiers 納入 armor modifier；示例僅取原 armor modifier .50、其他因素不變時 .50→.60，非普遍最終傷害公式。[天賦數值](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/veteran_talents.lua#L2433-L2456) → [實際 buff](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/veteran_buff_templates.lua#L1027-L1033) → [撕裂護甲計算](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/attack/damage_calculation.lua#L629-L660)。

## 原始碼依據

- [scripts/settings/ability/archetype_talents/talents/veteran_talents.lua，第 2433–2456 行](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/veteran_talents.lua#L2433-L2456)
- [scripts/settings/buff/archetype_buff_templates/veteran_buff_templates.lua，第 1027–1033 行](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/veteran_buff_templates.lua#L1027-L1033)
- [scripts/utilities/attack/damage_calculation.lua，第 629–660 行](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/attack/damage_calculation.lua#L629-L660)
- [scripts/utilities/attack/damage_calculation.lua，第 69–87 行](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/attack/damage_calculation.lua#L69-L87)
- [scripts/settings/damage/armor_settings.lua，第 8–19 行](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/damage/armor_settings.lua#L8-L19)

## 百分比與實際傷害增幅

- **程式推導**：玩家例排除暴擊、弱點及後續倍率，固定護甲結算前傷害100，armor_type=super_armor。ADM=.5、rending由0到.1時50→60（20%）；ADM=1時100→102.5（2.5%）。同一10%撕裂不等於固定10%整筆增傷。
- 護甲倍率未達1的部分先補足差額，超出部分按overdamage_rending_multiplier=.25換算；unarmored沒有rending_armor_type_multiplier，故此護甲修正為0。暴擊/弱點時後續_finesse_boost_damage也使用rending後damage及rending_damage，需另算完整攻擊。

- [scripts/settings/buff/archetype_buff_templates/veteran_buff_templates.lua，第 1027–1033 行](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/veteran_buff_templates.lua#L1027-L1033)
- [scripts/settings/damage/armor_settings.lua，第 8–19 行](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/damage/armor_settings.lua#L8-L19)
- [scripts/utilities/attack/damage_calculation.lua，第 69–95 行](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/attack/damage_calculation.lua#L69-L95)

## 算例條件與待確認事項

- 玩家頁算例按列出的基礎值及條件計算；未列出的加成、護甲、部位、距離及遊戲更新誤差不納入。
- 靜態推導不等同遊戲實測；名稱識別鍵與既有譯名的對應仍待使用者確認。
- 固定 SHA 的 talent name 字串寫 20%，但 format value 與實際 buff 均為 10%；可能是過期註記，原因無法由此 source 確認。
- 傷害算例只展示中間護甲修正的假設值；不同武器、護甲類型、其他撕裂效果與上限會改變結果。

## 圖示來源

[原圖](https://gameslantern.com/storage/sites/darktide/exporter/talents/veteran/default/veteran_rending_bonus.webp)｜[圖片來源 Issue](https://github.com/SyuanTsai/Media-Assets/issues/6#issuecomment-5922922455)｜[圖片附件](https://github.com/user-attachments/assets/cc7841b0-9637-4d35-8bca-c2c418798875)

圖片僅供技能辨識，不作機制證據。

