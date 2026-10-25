# 倍增狂熱(Redoubled Zeal)：原始碼依據

[English](en/zealot_additional_charge_of_ability.md)

[返回玩家說明](README.md#zealot_additional_charge_of_ability)｜[技術索引](SOURCE_INDEX.md)｜[原文比對](LOCALIZATION_COMPARISON.md#zealot_additional_charge_of_ability)

- 來源版本：Release 1.13.1；固定 SHA：`7e662fcda16219d775b84af50322be2e9cd9d62e`。
- 天賦：`zealot_additional_charge_of_ability`；名稱鍵：`loc_talent_zealot_dash_has_more_charges`；描述鍵：`loc_talent_zealot_dash_has_more_charges_desc`。
- 節點：`node_f562ee33-5fec-4016-a312-d10e7af1cd32`；分類：能力；每節點一點。
- 證據程度：原始碼確認／程式推導；以下算例屬程式推導，未進行遊戲內測試。

## 原始碼確認與程式推導

- 天賦定義的 player_ability 指向 PlayerAbilities.zealot_targeted_dash_improved_double；能力宣告以改良衝刺為基底，設定 max_charges=2。TalentSettings 的 combat_ability_3.max_charges=2。
- 基礎衝刺能力 cooldown=30，max_charges=1，resource_cost_per_charge=cooldown，resource_regeneration=1。雙充能變體調整 max_charges 而沿用資源成本與每秒回充。
- PlayerUnitAbilityExtension 以單一 resource pool 表示冷卻進度；每次消耗一格減去每格資源成本，重新達到成本門檻才恢復一格。兩格皆耗盡時資源 0→30 經 30 秒回一格，0→60 經 60 秒補滿。

## 原始碼依據

- [scripts/settings/ability/archetype_talents/talents/zealot_talents.lua：429–451](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/zealot_talents.lua#L429-L451)
- [scripts/settings/talent/talent_settings_zealot.lua：304–318](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/talent/talent_settings_zealot.lua#L304-L318)
- [scripts/settings/talent/talent_settings_zealot.lua：428–430](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/talent/talent_settings_zealot.lua#L428-L430)
- [scripts/settings/ability/player_abilities/abilities/zealot_abilities.lua：7–36](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/player_abilities/abilities/zealot_abilities.lua#L7-L36)
- [scripts/extension_systems/ability/player_unit_ability_extension.lua：773–875](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/ability/player_unit_ability_extension.lua#L773-L875)
- [scripts/extension_systems/ability/player_unit_ability_extension.lua：1323–1461](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/ability/player_unit_ability_extension.lua#L1323-L1461)
- [scripts/settings/ability/archetype_talents/talents/zealot_talents.lua：429–451](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/zealot_talents.lua#L429-L451)
- [scripts/ui/views/talent_builder_view/layouts/zealot_tree.lua：698–724](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/ui/views/talent_builder_view/layouts/zealot_tree.lua#L698-L724)

## 算例條件與待確認事項

- **冷卻算例**：連續用完兩次後，約 30 秒恢復第一格、約 60 秒回滿兩格；兩次使用共用同一個冷卻資源，並不是等 30 秒就同時補滿兩格。若只用一次，只需補回該次消耗。
- 上述時間是假設自然回充沒有被其他機制暫停、加速或返還；實際 HUD 冷卻還會受戰鬥技能冷卻效果影響。
- 此能力有 2 格上限；超額返還不會保存成第 3 格。
- 這是充能池的回充時間，不代表技能動畫、衝刺距離或每次使用後必須等待固定獨立倒數。
- 遊戲原文：1.13.1／Steam Build 25606770 的 ui 資源。描述與實作的差異仍需遊戲內核對；省略細節不列為繁中誤譯。

## 原文核對

- 對應 hash：`13ade9bb`。
- 同hash兩語皆表示能力增加至2次充能；共享資源與回充時序屬原文省略，不列錯誤。

## 圖示來源

[原圖](https://gameslantern.com/storage/sites/darktide/exporter/talents/zealot/ability_modifier/zealot_additional_charge_of_ability.webp)｜[圖片來源 Issue](https://github.com/SyuanTsai/Media-Assets/issues/8#issuecomment-5929289315)｜[圖片附件](https://github.com/user-attachments/assets/35487761-88d3-4091-ac1b-bde3020e300e)

圖片僅供技能辨識，不作機制證據。

