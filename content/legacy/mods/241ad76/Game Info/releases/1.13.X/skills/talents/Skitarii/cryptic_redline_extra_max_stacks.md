# 資源最佳化聖歌(Resource Optimisation Canticles)：原始碼依據

[English](en/cryptic_redline_extra_max_stacks.md)

[返回玩家說明](README.md#cryptic_redline_extra_max_stacks)｜[技術索引](SOURCE_INDEX.md)｜[原文比對](LOCALIZATION_COMPARISON.md#cryptic_redline_extra_max_stacks)

- 來源版本：Release 1.13.1；固定 SHA：`7e662fcda16219d775b84af50322be2e9cd9d62e`。
- 天賦：`cryptic_redline_extra_max_stacks`；名稱鍵：`loc_talent_cryptic_power_generation_capacitance_for_charge`；描述鍵：`loc_talent_cryptic_redline_stacks_clarified_desc`。
- 節點：`node_ba657afe-4100-4881-98a2-20c43f4e0a16`；分類：鑰石；每節點一點。
- 證據程度：原始碼確認／程式推導；以下算例屬程式推導，未進行遊戲內測試。

## 原始碼確認與程式推導

- 天賦定義提供 +1 ability_extra_charges，並啟用額外層數規則；設定值為額外最大充能1、額外極限電容層數1。
- 極限電容根被動本身提供1道額外最大戰鬥技能充能。層數 buff 啟動時檢查額外層數規則，將 max_stacks 與 max_stacks_cap 各增加1；步進表也預先建立到基礎4層加額外1層。
- 額外充能由另一個被動 buff 再提供 +1；能力系統將 ability_extra_charges 加到該戰鬥技能的最大充能。極限電容原本的韌性倍率公式不變，因此5層時為1−0.05×5=0.75。

## 原始碼依據

- [scripts/settings/ability/archetype_talents/talents/cryptic_talents.lua：1452–1481](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/cryptic_talents.lua#L1452-L1481)
- [scripts/settings/talent/talent_settings_cryptic.lua：331–345](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/talent/talent_settings_cryptic.lua#L331-L345)
- [scripts/settings/buff/archetype_buff_templates/cryptic_buff_templates.lua：1868–1936](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/cryptic_buff_templates.lua#L1868-L1936)
- [scripts/settings/buff/archetype_buff_templates/cryptic_buff_templates.lua：1967–1973](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/cryptic_buff_templates.lua#L1967-L1973)
- [scripts/extension_systems/ability/player_unit_ability_extension.lua：734–770](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/ability/player_unit_ability_extension.lua#L734-L770)
- [scripts/settings/buff/buff_settings.lua：692–692](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/buff_settings.lua#L692-L692)
- [scripts/settings/ability/player_abilities/abilities/cryptic_abilities.lua：70–168](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/player_abilities/abilities/cryptic_abilities.lua#L70-L168)
- [scripts/settings/ability/archetype_talents/talents/cryptic_talents.lua：1452–1481](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/cryptic_talents.lua#L1452-L1481)
- [scripts/ui/views/talent_builder_view/layouts/cryptic_tree.lua：1241–1263](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/ui/views/talent_builder_view/layouts/cryptic_tree.lua#L1241-L1263)

## 算例條件與待確認事項

- **充能算例**：護教軍戰鬥技能基礎上限3份，「極限電容」增加1份，本天賦再增加1份，合計3 + 1 + 1 = 5份。電能發射器每次仍最多消耗3份。
- **減傷算例**：極限電容達5層時，韌性承傷倍率為0.75；若一次攻擊原本會對韌性造成100點傷害，套用後承受75點。
- 充能上限只增加於以戰鬥技能充能系統管理的技能；實際數值取決於該技能原本的充能上限。
- 5層時的減傷按韌性承傷計算，不代表生命傷害也會降低25%。
- 以上為固定版程式碼的靜態推演，未在遊戲內實測。
- 遊戲原文：1.13.1／Steam Build 25606770 的 ui 資源。描述與實作的差異仍需遊戲內核對；省略細節不列為繁中誤譯。

## 原文核對

- 對應 hash：`b176ca53`。
- 繁中與英文都列出戰鬥技能最大充能與極限電容最大層數各增加1；固定版設定分別為 +1 ability_extra_charges 與 +1 額外極限電容層數。根鑰石原有 +1 最大充能屬於前置效果，UI在本修正正文中未重述不算翻譯錯誤。

## 圖示來源

[原圖](https://gameslantern.com/storage/sites/darktide/exporter/talents/cryptic/keystone_modifier/cryptic_redline_extra_max_stacks.webp)｜[圖片來源 Issue](https://github.com/SyuanTsai/Media-Assets/issues/13#issuecomment-5935647528)｜[圖片附件](https://github.com/user-attachments/assets/96e3fb15-c1fd-4702-a6ef-0f69b10931fe)

圖片僅供技能辨識，不作機制證據。

