# 終點站令狀(Terminus Warrant)：原始碼依據

[English](en/adamant_terminus_warrant.md)

[返回玩家說明](README.md#adamant_terminus_warrant)｜[技術索引](SOURCE_INDEX.md)｜[原文比對](LOCALIZATION_COMPARISON.md#adamant_terminus_warrant)

- 來源版本：Release 1.13.1；固定 SHA：`7e662fcda16219d775b84af50322be2e9cd9d62e`。
- 天賦：`adamant_terminus_warrant`；名稱鍵：`loc_talent_adamant_bullet_rain`；描述鍵：`loc_talent_adamant_terminus_warrant_new_desc`。
- 節點：`node_65d7f26b-711e-4ef9-ae0e-5bad2ac7a818`；分類：鑰石；每節點一點。
- 證據程度：原始碼確認／程式推導；以下算例屬程式推導，未進行遊戲內測試。

## 原始碼確認與程式推導

- 主 proc 監聽 on_hit、on_wield_melee、on_wield_ranged、on_shoot。遠程 hit 以每發射擊中的 attacked_unit table 去重，弱點給 3 層、一般給 1 層；on_shoot 清空去重表。近戰 hit 每次建立 1 個 ranged justice stack。
- on_wield_melee 時若存在 melee justice id，建立近戰 stat buff；on_wield_ranged 同理消耗 ranged justice。justice tracker 在對應 stat buff 啟用時條件退出，或失去 keystone 時退出。base stack cap=20。
- 核心 stat buff duration=12：近戰為 melee_power_level_modifier=0.10、toughness_damage_taken_multiplier=0.8；遠程為 ranged_power_level_modifier=0.10、suppression_dealt=0.5、ranged_max_hit_mass_attack_modifier=0.5。

## 原始碼依據

- [scripts/settings/ability/archetype_talents/talents/adamant_talents.lua：1826–1885](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/adamant_talents.lua#L1826-L1885)
- [scripts/settings/talent/talent_settings_adamant.lua：331–370](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/talent/talent_settings_adamant.lua#L331-L370)
- [scripts/settings/buff/archetype_buff_templates/adamant_buff_templates.lua：1574–1731](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/adamant_buff_templates.lua#L1574-L1731)
- [scripts/settings/buff/archetype_buff_templates/adamant_buff_templates.lua：1788–1827](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/adamant_buff_templates.lua#L1788-L1827)
- [scripts/settings/buff/archetype_buff_templates/adamant_buff_templates.lua：1828–1932](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/adamant_buff_templates.lua#L1828-L1932)
- [scripts/utilities/attack/damage_taken_calculation.lua：234–258](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/attack/damage_taken_calculation.lua#L234-L258)
- [scripts/utilities/attack/power_level.lua：25–91](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/attack/power_level.lua#L25-L91)
- [scripts/settings/ability/archetype_talents/talents/adamant_talents.lua：1826–1885](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/adamant_talents.lua#L1826-L1885)
- [scripts/ui/views/talent_builder_view/layouts/adamant_tree.lua：123–155](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/ui/views/talent_builder_view/layouts/adamant_tree.lua#L123-L155)

## 算例條件與待確認事項

- 遠程弱點命中 5 次且各次符合計數條件，取得 15 層；再以一般命中取得 5 層達到 20。切至近戰武器時消耗全部層數並取得 12 秒固定近戰增益。
- 機制來源固定為公開 Aussiemon/Darktide-Source-Code SHA 7e662fcda16219d775b84af50322be2e9cd9d62e；繁中、英文模板與程式來源皆為1.13.1；遊戲內最終顯示仍待核對。程式實作和文字措辭如有差異，先列文字與實作差異待核，不直接判為翻譯錯誤。
- 核心上限為 20 層；升級另提供全隊韌性恢復、逐秒冷卻恢復，或近戰與遠程攻速及爆擊率，見相應來源子文件。
- 遊戲原文：1.13.1／Steam Build 25606770 的 ui 資源。描述與實作的差異仍需遊戲內核對；省略細節不列為繁中誤譯。

## 原文核對

- 對應 hash：`26c20f58`。
- 同源繁中「弱點命中則額外堆疊」把英文 grant 3 stacks誤寫為一般1層之外再加3層；固定實作弱點分支直接取3，合計3而非4。

## 圖示來源

[原圖](https://gameslantern.com/storage/sites/darktide/exporter/talents/adamant/keystone/adamant_terminus_warrant.webp)｜[圖片來源 Issue](https://github.com/SyuanTsai/Media-Assets/issues/11#issuecomment-5932554216)｜[圖片附件](https://github.com/user-attachments/assets/47d0c2b2-0d8e-4906-a528-48f9488353e9)

圖片僅供技能辨識，不作機制證據。

