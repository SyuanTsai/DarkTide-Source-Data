# 槍林彈雨(Hail of Fire)：原始碼依據

[English](en/ogryn_special_ammo_armor_pen.md)

[返回玩家說明](README.md#ogryn_special_ammo_armor_pen)｜[技術索引](SOURCE_INDEX.md)｜[原文比對](LOCALIZATION_COMPARISON.md#ogryn_special_ammo_armor_pen)

- 來源版本：Release 1.13.1；固定 SHA：`7e662fcda16219d775b84af50322be2e9cd9d62e`。
- 天賦：`ogryn_special_ammo_armor_pen`；名稱鍵：`loc_talent_ogryn_special_ammo_armor_pen`；描述鍵：`loc_talent_ogryn_special_ammo_armor_pen_new_desc`。
- 節點：`node_d2b60f6e-1db0-4ccd-b239-75926acb7839`；分類：能力；每節點一點。
- 證據程度：原始碼確認／程式推導；以下算例屬程式推導，未進行遊戲內測試。

## 原始碼確認與程式推導

- 天賦 special_rule ogryn_combat_armor_pierce 使姿態 start_func 加入 armor_pierce proc buff；該 buff 在姿態12秒內將 shared settings 的0.15寫入 ranged_damage 與 ranged_rending_multiplier。
- 撕裂消費端 damage_calculation._rending_multiplier 將 ranged_rending_multiplier 納入攻擊者總撕裂；其後按目標護甲類型套用 rending_armor_type_multiplier。armored 類型的倍率為1、overdamage係數為0.25。
- 一般未另設攻擊護甲倍率時，power_level_settings.default_armor_damage_modifier 對 armored attack 為0.5。無其他撕裂時，新增0.15後 armor_damage_modifier_lost=0.5，大於 rending_multiplier=0.15，公式走 armor_damage_modifier+rending_multiplier，得到0.65；再獨立套用+15%遠程傷害。

## 原始碼依據

- [scripts/settings/ability/archetype_talents/talents/ogryn_talents.lua：1553–1592](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/ogryn_talents.lua#L1553-L1592)
- [scripts/settings/talent/talent_settings_ogryn.lua：114–117](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/talent/talent_settings_ogryn.lua#L114-L117)
- [scripts/settings/talent/talent_settings_ogryn.lua：194–203](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/talent/talent_settings_ogryn.lua#L194-L203)
- [scripts/settings/talent/talent_settings_ogryn.lua：275–282](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/talent/talent_settings_ogryn.lua#L275-L282)
- [scripts/settings/ability/player_abilities/abilities/ogryn_abilities.lua：93–110](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/player_abilities/abilities/ogryn_abilities.lua#L93-L110)
- [scripts/settings/buff/archetype_buff_templates/ogryn_buff_templates.lua：1851–1915](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/ogryn_buff_templates.lua#L1851-L1915)
- [scripts/settings/buff/archetype_buff_templates/ogryn_buff_templates.lua：2353–2380](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/ogryn_buff_templates.lua#L2353-L2380)
- [scripts/utilities/attack/damage_calculation.lua：55–95](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/attack/damage_calculation.lua#L55-L95)
- [scripts/utilities/attack/damage_calculation.lua：629–660](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/attack/damage_calculation.lua#L629-L660)
- [scripts/settings/damage/armor_settings.lua：8–19](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/damage/armor_settings.lua#L8-L19)
- [scripts/settings/damage/power_level_settings.lua：80–102](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/damage/power_level_settings.lua#L80-L102)
- [scripts/settings/buff/buff_settings.lua：939–962](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/buff_settings.lua#L939-L962)
- [scripts/utilities/attack/damage_calculation.lua：64–84](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/attack/damage_calculation.lua#L64-L84)
- [scripts/settings/damage/armor_settings.lua：8–24](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/damage/armor_settings.lua#L8-L24)
- [scripts/settings/ability/archetype_talents/talents/ogryn_talents.lua：1553–1592](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/ogryn_talents.lua#L1553-L1592)
- [scripts/ui/views/talent_builder_view/layouts/ogryn_tree.lua：1318–1341](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/ui/views/talent_builder_view/layouts/ogryn_tree.lua#L1318-L1341)

## 算例條件與待確認事項

- **傷害算例**：假設基礎傷害 100、對甲殼護甲原倍率 0.5，且忽略其他修正，原本為 50 點；同時計入本天賦的增傷與撕裂後，100 × 1.15 × (0.5 + 0.15) = 74.75 點。
- 算例假設目標為裝甲類型、基礎護甲倍率0.5，且沒有其他撕裂、暴擊、弱點或傷害修正；不同武器的護甲倍率與其他屬性會改變結果。
- 15%撕裂是撕裂計算的加成，不等於對所有護甲固定增加15%最終生命傷害。
- 遊戲原文：1.13.1／Steam Build 25606770 的 ui 資源。描述與實作的差異仍需遊戲內核對；省略細節不列為繁中誤譯。

## 原文核對

- 對應 hash：`5f4e17cf`。
- 繁中原文「附加15%撕裂效果並提高15%傷害」與英文原文「15% Rending and 15% Damage」都把兩項加成限定在姿態啟動時的遠程攻擊，數字與條件相符；裝甲倍率算例是把程式的撕裂消費端補出來，原文省略公式不構成翻譯矛盾。文字與程式來源皆為1.13.1；差異待遊戲內核對。

## 圖示來源

[原圖](https://gameslantern.com/storage/sites/darktide/exporter/talents/ogryn/ability_modifier/ogryn_special_ammo_armor_pen.webp)｜[圖片來源 Issue](https://github.com/SyuanTsai/Media-Assets/issues/10#issuecomment-5931383354)｜[圖片附件](https://github.com/user-attachments/assets/708231ab-86cd-44b4-8f01-0d0fe8413ede)

圖片僅供技能辨識，不作機制證據。

