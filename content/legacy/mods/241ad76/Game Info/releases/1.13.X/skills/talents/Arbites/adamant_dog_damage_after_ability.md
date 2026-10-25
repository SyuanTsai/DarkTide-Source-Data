# 殺戮命令(Kill Order)：原始碼依據

[English](en/adamant_dog_damage_after_ability.md)

[返回玩家說明](README.md#adamant_dog_damage_after_ability)｜[技術索引](SOURCE_INDEX.md)｜[原文比對](LOCALIZATION_COMPARISON.md#adamant_dog_damage_after_ability)

- 來源版本：Release 1.13.1；固定 SHA：`7e662fcda16219d775b84af50322be2e9cd9d62e`。
- 天賦：`adamant_dog_damage_after_ability`；名稱鍵：`loc_talent_adamant_dog_damage_after_ability`；描述鍵：`loc_talent_adamant_dog_damage_after_ability_desc`。
- 節點：`node_6f8fc4e4-c5cd-423f-b612-4eb26dc2dadb`；分類：能力；每節點一點。
- 證據程度：原始碼確認／程式推導；以下算例屬程式推導，未進行遊戲內測試。

## 原始碼確認與程式推導

- 這項被動在戰鬥技能啟動後加入 12 秒電子獒犬傷害增益；可在已生效期間再次觸發，重設持續時間。
- 獒犬造成非流血傷害時，一般傷害計算讀取主人身上的 companion 傷害修正，並將修正加入傷害加成；本升級的 +50% 因此實際套用於獒犬攻擊。
- 此修正與姿態期間的 +75% 獒犬傷害使用同一類加成，可共同累加。

## 原始碼依據

- [scripts/settings/ability/archetype_talents/talents/adamant_talents.lua：1387–1406](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/adamant_talents.lua#L1387-L1406)
- [scripts/settings/talent/talent_settings_adamant.lua：247–250](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/talent/talent_settings_adamant.lua#L247-L250)
- [scripts/settings/buff/archetype_buff_templates/adamant_buff_templates.lua：2531–2546](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/adamant_buff_templates.lua#L2531-L2546)
- [scripts/settings/buff/archetype_buff_templates/adamant_buff_templates.lua：821–835](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/adamant_buff_templates.lua#L821-L835)
- [scripts/settings/buff/buff_settings.lua：742–744](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/buff_settings.lua#L742-L744)
- [scripts/utilities/attack/damage_calculation.lua：265–276](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/attack/damage_calculation.lua#L265-L276)
- [scripts/settings/talent/talent_settings_adamant.lua：19–34](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/talent/talent_settings_adamant.lua#L19-L34)
- [scripts/settings/ability/archetype_talents/talents/adamant_talents.lua：1387–1406](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/adamant_talents.lua#L1387-L1406)
- [scripts/ui/views/talent_builder_view/layouts/adamant_tree.lua：1625–1648](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/ui/views/talent_builder_view/layouts/adamant_tree.lua#L1625-L1648)

## 算例條件與待確認事項

- 單獨效果：100×(1+50%)=150。與姿態 +75% 獒犬傷害同時生效：100×(1+50%+75%)=225。
- 主人傷害修正只套用於電子獒犬的非流血傷害；實際結果受敵人防禦及其餘傷害修正影響。
- 文字與程式來源皆為1.13.1；實際表現仍待遊戲內核對；數值與行為按固定來源提交說明。
- 遊戲原文：1.13.1／Steam Build 25606770 的 ui 資源。描述與實作的差異仍需遊戲內核對；省略細節不列為繁中誤譯。

## 原文核對

- 對應 hash：`9f9da5ce`。
- 繁中「使用戰鬥技能後…傷害加成，持續…秒」對應英文「Damage for your Cyber Mastiff…after using your Combat Ability」；觸發、對象與時間一致。

## 圖示來源

[原圖](https://gameslantern.com/storage/sites/darktide/exporter/talents/adamant/ability_modifier/adamant_dog_damage_after_ability.webp)｜[圖片來源 Issue](https://github.com/SyuanTsai/Media-Assets/issues/11#issuecomment-5932554216)｜[圖片附件](https://github.com/user-attachments/assets/6283df18-7a2a-4a7b-adac-4a13c5cd6315)

圖片僅供技能辨識，不作機制證據。

