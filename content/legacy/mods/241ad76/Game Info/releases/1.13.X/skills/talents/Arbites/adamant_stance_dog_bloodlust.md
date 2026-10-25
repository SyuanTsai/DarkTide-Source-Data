# 嗜血殺戮(Bloodlust)：原始碼依據

[English](en/adamant_stance_dog_bloodlust.md)

[返回玩家說明](README.md#adamant_stance_dog_bloodlust)｜[技術索引](SOURCE_INDEX.md)｜[原文比對](LOCALIZATION_COMPARISON.md#adamant_stance_dog_bloodlust)

- 來源版本：Release 1.13.1；固定 SHA：`7e662fcda16219d775b84af50322be2e9cd9d62e`。
- 天賦：`adamant_stance_dog_bloodlust`；名稱鍵：`loc_talent_adamant_stance_bloodlust`；描述鍵：`loc_talent_adamant_stance_bloodlust_desc`。
- 節點：`node_cbd2062a-c53b-47d8-a07c-3868aa343031`；分類：能力；每節點一點。
- 證據程度：原始碼確認／程式推導；以下算例屬程式推導，未進行遊戲內測試。

## 原始碼確認與程式推導

- 此升級以戰鬥技能啟動為觸發條件，加入持續時間等於姿態長度的電子獒犬傷害增益，數值為 +75%。
- 獒犬攻擊的傷害計算會讀取主人身上的 companion 傷害修正；該修正加入傷害加成後再進入一般傷害計算。
- 同一 stat buff 類型以加法彙總，因此此升級可與「殺戮命令」的 +50% 獒犬傷害修正共同作用。

## 原始碼依據

- [scripts/settings/ability/archetype_talents/talents/adamant_talents.lua：256–275](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/adamant_talents.lua#L256-L275)
- [scripts/settings/talent/talent_settings_adamant.lua：35–51](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/talent/talent_settings_adamant.lua#L35-L51)
- [scripts/settings/buff/archetype_buff_templates/adamant_buff_templates.lua：821–835](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/adamant_buff_templates.lua#L821-L835)
- [scripts/settings/buff/archetype_buff_templates/adamant_buff_templates.lua：2531–2546](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/adamant_buff_templates.lua#L2531-L2546)
- [scripts/settings/buff/buff_settings.lua：742–744](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/buff_settings.lua#L742-L744)
- [scripts/utilities/attack/damage_calculation.lua：265–276](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/attack/damage_calculation.lua#L265-L276)
- [scripts/settings/talent/talent_settings_adamant.lua：35–51](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/talent/talent_settings_adamant.lua#L35-L51)
- [scripts/settings/ability/archetype_talents/talents/adamant_talents.lua：256–275](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/adamant_talents.lua#L256-L275)
- [scripts/ui/views/talent_builder_view/layouts/adamant_tree.lua：1206–1229](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/ui/views/talent_builder_view/layouts/adamant_tree.lua#L1206-L1229)

## 算例條件與待確認事項

- 單獨啟動本升級：100×(1+75%)=175。與 +50% 獒犬傷害同時生效：100×(1+75%+50%)=225。
- 此加成只影響電子獒犬的非流血傷害；實際傷害仍受敵人防禦及其餘傷害修正影響。
- 文字與程式來源皆為1.13.1；實際表現仍待遊戲內核對；數值與行為按固定來源提交說明。
- 遊戲原文：1.13.1／Steam Build 25606770 的 ui 資源。描述與實作的差異仍需遊戲內核對；省略細節不列為繁中誤譯。

## 原文核對

- 對應 hash：`bbba1e4b`。
- 繁中「機械戰犬造成的傷害提高」與英文「Cyber-Mastiff has … Damage」都描述姿態期間獒犬獲得傷害加成；未見數值或觸發條件相反。

## 圖示來源

[原圖](https://gameslantern.com/storage/sites/darktide/exporter/talents/adamant/ability_modifier/adamant_stance_dog_bloodlust.webp)｜[圖片來源 Issue](https://github.com/SyuanTsai/Media-Assets/issues/11#issuecomment-5932554216)｜[圖片附件](https://github.com/user-attachments/assets/27a74ed8-eb51-4774-ae8e-2089aa7b1686)

圖片僅供技能辨識，不作機制證據。

