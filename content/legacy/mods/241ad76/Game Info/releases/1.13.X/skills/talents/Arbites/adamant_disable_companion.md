# 孤狼(Lone Wolf)：原始碼依據

[English](en/adamant_disable_companion.md)

[返回玩家說明](README.md#adamant_disable_companion)｜[技術索引](SOURCE_INDEX.md)｜[原文比對](LOCALIZATION_COMPARISON.md#adamant_disable_companion)

- 來源版本：Release 1.13.1；固定 SHA：`7e662fcda16219d775b84af50322be2e9cd9d62e`。
- 天賦：`adamant_disable_companion`；名稱鍵：`loc_talent_adamant_disable_companion`；描述鍵：`loc_talent_adamant_disable_companion_replenish_split_desc`。
- 節點：`node_75d31c92-2869-4bbb-8f63-f0f7b9e15bdf`；分類：鑰石；每節點一點。
- 證據程度：原始碼確認／程式推導；以下算例屬程式推導，未進行遊戲內測試。

## 原始碼確認與程式推導

- 天賦 buff 啟動時伺服器會呼叫 companion spawner 移除 companion；stat buff 直接給 damage +0.20、attack speed +0.10、toughness_damage_taken_modifier -0.15、extra_max_amount_of_grenades +1。
- 補充 buff 只觀察 grenade_ability。讀取目前閃擊名稱，名稱為 adamant_shock_mine 時選 90 秒，其餘 grenade_ability 選 45 秒；缺額從 0 變正時設定下一次時間，每次只還 1 charge，之後清除計時器再逐顆等候。
- talent settings 中另有 blitz_replenish_time=60，但描述未引用該 placeholder，補充 buff 也不讀取它；目前不能把 60 秒列為實際補給節奏。閃擊能力定義另有以 extra_max_amount_of_grenades 擴增最大顆數的通用 stat_buff。
- damage 走一般 damage_taken_multiplier／damage_taken_modifier 共用乘算；韌性受傷減免走 toughness damage 計算中的 toughness_damage_taken_modifier，故此處的 15%只套用韌性傷害。

## 原始碼依據

- [scripts/settings/ability/archetype_talents/talents/adamant_talents.lua：773–836](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/adamant_talents.lua#L773-L836)
- [scripts/settings/talent/talent_settings_adamant.lua：197–205](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/talent/talent_settings_adamant.lua#L197-L205)
- [scripts/settings/buff/archetype_buff_templates/adamant_buff_templates.lua：2131–2255](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/adamant_buff_templates.lua#L2131-L2255)
- [scripts/settings/ability/player_abilities/abilities/adamant_abilities.lua：93–115](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/player_abilities/abilities/adamant_abilities.lua#L93-L115)
- [scripts/utilities/attack/damage_calculation.lua：587–615](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/attack/damage_calculation.lua#L587-L615)
- [scripts/utilities/attack/damage_taken_calculation.lua：234–258](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/attack/damage_taken_calculation.lua#L234-L258)
- [scripts/extension_systems/ability/player_unit_ability_extension.lua：1127–1179](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/ability/player_unit_ability_extension.lua#L1127-L1179)
- [scripts/utilities/attack/damage_calculation.lua：236–263](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/attack/damage_calculation.lua#L236-L263)
- [scripts/utilities/action/action_handler.lua：356–428](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/action/action_handler.lua#L356-L428)
- [scripts/settings/ability/archetype_talents/talents/adamant_talents.lua：773–836](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/adamant_talents.lua#L773-L836)
- [scripts/ui/views/talent_builder_view/layouts/adamant_tree.lua：860–885](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/ui/views/talent_builder_view/layouts/adamant_tree.lua#L860-L885)

## 算例條件與待確認事項

- 100 點韌性傷害 × (1 - 0.15) = 85 點；此算例只套孤狼的韌性受傷修正。
- 缺少 2 顆手雷時，第一顆在 45 秒補回，第二顆再按下一輪 45 秒計時；震撼地雷套用 90 秒間隔。
- 機制來源固定為公開 Aussiemon/Darktide-Source-Code SHA 7e662fcda16219d775b84af50322be2e9cd9d62e；繁中、英文模板與程式來源皆為1.13.1；遊戲內最終顯示仍待核對。程式實作和文字措辭如有差異，先列文字與實作差異待核，不直接判為翻譯錯誤。
- talent settings 的 60 秒 blitz_replenish_time 在此模板沒有消費點，可能是未使用欄位或跨版本殘留；保留待核。
- 遊戲原文：1.13.1／Steam Build 25606770 的 ui 資源。描述與實作的差異仍需遊戲內核對；省略細節不列為繁中誤譯。

## 原文核對

- 對應 hash：`fe3bded9`。
- 同源繁中與英文的移除獒犬、個人增益與補充間隔一致；45／90秒都有實際消費路徑，另一個未使用的60秒欄位不構成文字矛盾。

## 圖示來源

[原圖](https://gameslantern.com/storage/sites/darktide/exporter/talents/adamant/keystone/adamant_disable_companion.webp)｜[圖片來源 Issue](https://github.com/SyuanTsai/Media-Assets/issues/11#issuecomment-5932554216)｜[圖片附件](https://github.com/user-attachments/assets/a2aadd19-f969-47d7-96f3-3021eb1fb5c8)

圖片僅供技能辨識，不作機制證據。

