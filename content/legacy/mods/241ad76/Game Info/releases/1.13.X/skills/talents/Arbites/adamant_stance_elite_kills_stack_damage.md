# 處決令(Writ of Execution)：原始碼依據

[English](en/adamant_stance_elite_kills_stack_damage.md)

[返回玩家說明](README.md#adamant_stance_elite_kills_stack_damage)｜[技術索引](SOURCE_INDEX.md)｜[原文比對](LOCALIZATION_COMPARISON.md#adamant_stance_elite_kills_stack_damage)

- 來源版本：Release 1.13.1；固定 SHA：`7e662fcda16219d775b84af50322be2e9cd9d62e`。
- 天賦：`adamant_stance_elite_kills_stack_damage`；名稱鍵：`loc_talent_adamant_stance_elite_kills_stack_damage`；描述鍵：`loc_talent_adamant_stance_elite_kills_stack_damage_desc`。
- 節點：`node_7de43e6e-167c-4e17-9975-e23e5ef390ec`；分類：能力；每節點一點。
- 證據程度：原始碼確認／程式推導；以下算例屬程式推導，未進行遊戲內測試。

## 原始碼確認與程式推導

- 懲戒者姿態只在已選取此升級時監聽姿態期間的擊殺；符合精英或專家條件後加入一層傷害增益。
- 增益最多 6 層、每層 7.5%，持續 12 秒且增加層數時重新計時；因增益有獨立持續時間，最後一層可在姿態結束後保留。
- 這項加成進入傷害 stat buff；基礎傷害仍由命中、目標防禦與其他傷害層共同結算。

## 原始碼依據

- [scripts/settings/ability/archetype_talents/talents/adamant_talents.lua：292–319](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/adamant_talents.lua#L292-L319)
- [scripts/settings/talent/talent_settings_adamant.lua：35–51](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/talent/talent_settings_adamant.lua#L35-L51)
- [scripts/settings/buff/archetype_buff_templates/adamant_buff_templates.lua：735–820](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/adamant_buff_templates.lua#L735-L820)
- [scripts/settings/buff/buff_settings.lua：763–764](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/buff_settings.lua#L763-L764)
- [scripts/extension_systems/buff/buffs/buff.lua：689–731](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/buff/buffs/buff.lua#L689-L731)
- [scripts/utilities/attack/damage_calculation.lua：236–263](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/attack/damage_calculation.lua#L236-L263)
- [scripts/settings/ability/archetype_talents/talents/adamant_talents.lua：292–319](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/adamant_talents.lua#L292-L319)
- [scripts/ui/views/talent_builder_view/layouts/adamant_tree.lua：1180–1205](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/ui/views/talent_builder_view/layouts/adamant_tree.lua#L1180-L1205)

## 算例條件與待確認事項

- 6 層×7.5%=45%。若同傷害層另有 +25%，100×(1+45%+25%)=170。
- 擊殺須在姿態增益有效期間；取得的層數增益另有 12 秒時間，命中與目標防禦仍會影響實際傷害。
- 文字與程式來源皆為1.13.1；實際表現仍待遊戲內核對；數值與行為按固定來源提交說明。
- 遊戲原文：1.13.1／Steam Build 25606770 的 ui 資源。描述與實作的差異仍需遊戲內核對；省略細節不列為繁中誤譯。

## 原文核對

- 對應 hash：`4b6af938`。
- 繁中「每個精英或專家敵人」與英文「each Elite or Specialist Kill」一致；兩者都列出每層傷害、持續時間及層數上限。

## 圖示來源

[原圖](https://gameslantern.com/storage/sites/darktide/exporter/talents/adamant/ability_modifier/adamant_stance_elite_kills_stack_damage.webp)｜[圖片來源 Issue](https://github.com/SyuanTsai/Media-Assets/issues/11#issuecomment-5932554216)｜[圖片附件](https://github.com/user-attachments/assets/f7454987-ea7e-474e-bb22-3c3ead9adb1b)

圖片僅供技能辨識，不作機制證據。

