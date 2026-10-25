# 雷厲風行(Ruthless Efficiency)：原始碼依據

[English](en/adamant_reload_speed_aura.md)

[返回玩家說明](README.md#adamant_reload_speed_aura)｜[技術索引](SOURCE_INDEX.md)｜[原文比對](LOCALIZATION_COMPARISON.md#adamant_reload_speed_aura)

- 來源版本：Release 1.13.1；固定 SHA：`7e662fcda16219d775b84af50322be2e9cd9d62e`。
- 天賦：`adamant_reload_speed_aura`；名稱鍵：`loc_talent_adamant_wield_speed_aura`；描述鍵：`loc_talent_adamant_reload_speed_aura_desc`。
- 節點：`node_d9c8ac91-9f39-43f5-9655-c836de0bb997`；分類：光環；每節點一點。
- 證據程度：原始碼確認／程式推導；以下算例屬程式推導，未進行遊戲內測試。

## 原始碼確認與程式推導

- 天賦以 coherency buff adamant_reload_speed_aura 提供 stat_buffs.reload_speed=talent_settings.coherency.reload_speed_aura.reload_speed=0.125，值為 +12.5%；coherency_priority=2、max_stacks=1。
- 此節點的 special_rule identifier 與 dog-counts 節點相同，但實際規則為 adamant_no_companion_coherency。companion_coherency_extension 只有在 owner 持有 adamant_dog_counts_towards_coherency 規則時才啟用，故此選項會停用戰犬協同成員資格。
- 2 秒換彈算例使用 1/(1+0.125) 的速度換算；實際武器換彈時間會受動作階段及其他換彈修正影響。

## 原始碼依據

- [scripts/settings/ability/archetype_talents/talents/adamant_talents.lua：672–696](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/adamant_talents.lua#L672-L696)
- [scripts/settings/talent/talent_settings_adamant.lua：63–66](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/talent/talent_settings_adamant.lua#L63-L66)
- [scripts/settings/buff/archetype_buff_templates/adamant_buff_templates.lua：493–534](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/adamant_buff_templates.lua#L493-L534)
- [scripts/settings/buff/archetype_buff_templates/adamant_buff_templates.lua：655–658](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/adamant_buff_templates.lua#L655-L658)
- [scripts/extension_systems/coherency/companion_coherency_extension.lua：1–34](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/coherency/companion_coherency_extension.lua#L1-L34)
- [scripts/utilities/action/action_handler.lua：356–428](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/action/action_handler.lua#L356-L428)
- [scripts/settings/ability/archetype_talents/talents/adamant_talents.lua：672–696](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/adamant_talents.lua#L672-L696)
- [scripts/ui/views/talent_builder_view/layouts/adamant_tree.lua：64–90](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/ui/views/talent_builder_view/layouts/adamant_tree.lua#L64-L90)

## 算例條件與待確認事項

- 描述只向你與協同中的盟友提供換彈速度；沒有說明機械戰犬取得換彈 buff。
- 以固定換彈秒數計算只是比例示例，不包含武器動畫階段、取消動作或其他速度修正。
- 遊戲原文：1.13.1／Steam Build 25606770 的 ui 資源。描述與實作的差異仍需遊戲內核對；省略細節不列為繁中誤譯。

## 原文核對

- 對應 hash：`79c674a1`。
- 繁中與英文都明確列出你和協同盟友獲得額外換彈速度；程式設定 +12.5% 相符。兩種文字未提到同一選項會停用戰犬的協同成員資格，這是額外程式效果的省略，不構成所述換彈效果矛盾。

## 圖示來源

[原圖](https://gameslantern.com/storage/sites/darktide/exporter/talents/adamant/aura/adamant_reload_speed_aura.webp)｜[圖片來源 Issue](https://github.com/SyuanTsai/Media-Assets/issues/11#issuecomment-5932554216)｜[圖片附件](https://github.com/user-attachments/assets/2f99cb20-a83e-4a7c-98ee-f43949811f84)

圖片僅供技能辨識，不作機制證據。

