# 遠程引爆(Remote Detonation)：原始碼依據

[English](en/adamant_whistle.md)

[返回玩家說明](README.md#adamant_whistle)｜[技術索引](SOURCE_INDEX.md)｜[原文比對](LOCALIZATION_COMPARISON.md#adamant_whistle)

- 來源版本：Release 1.13.1；固定 SHA：`7e662fcda16219d775b84af50322be2e9cd9d62e`。
- 天賦：`adamant_whistle`；名稱鍵：`loc_talent_ability_detonate`；描述鍵：`loc_talent_ability_detonate_description`。
- 節點：`node_2d88b9f8-d7dc-402f-8c33-9d836f577ec6`；分類：閃擊；每節點一點。
- 證據程度：原始碼確認／程式推導；以下算例屬程式推導，未進行遊戲內測試。

## 原始碼確認與程式推導

- action_order_companion在time_in_action>=.3時，於dog_position先執行5m shout，再建立4m explosion；公開ability_template沒有掛載adamant_whistle_targeting action_module，不能據未接線模組宣稱此閃擊會指揮犬撲向瞄準敵人。
- shout掛adamant_whistle_electrocution，clone鏈指向duration2的improved charged chain buff，繼承damage_taken_multiplier1.1。模板同時強制light stagger2.5；兩種持續時間不能混為一談。
- 能力maxcharges2、resourcecost50、每秒恢復1；共用resource按floor(resource/50)計可用次數。whistle_replenishment只是HUD及音效，不是另一條充能恢復。

## 原始碼依據

- [scripts/settings/ability/archetype_talents/talents/adamant_talents.lua：343–376](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/adamant_talents.lua#L343-L376)
- [scripts/settings/talent/talent_settings_adamant.lua：88–94](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/talent/talent_settings_adamant.lua#L88-L94)
- [scripts/settings/ability/player_abilities/abilities/adamant_abilities.lua：117–134](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/player_abilities/abilities/adamant_abilities.lua#L117-L134)
- [scripts/settings/ability/ability_templates/adamant_whistle.lua：38–61](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/ability_templates/adamant_whistle.lua#L38-L61)
- [scripts/extension_systems/weapon/actions/modules/adamant_whistle_targeting_action_module.lua：21–66](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/weapon/actions/modules/adamant_whistle_targeting_action_module.lua#L21-L66)
- [scripts/extension_systems/perception/target_selection_templates/companion_dog_target_selection_template.lua：172–194](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/perception/target_selection_templates/companion_dog_target_selection_template.lua#L172-L194)
- [scripts/extension_systems/ability/actions/action_order_companion.lua：48–76](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/ability/actions/action_order_companion.lua#L48-L76)
- [scripts/settings/ability/shout_target_templates.lua：8–18](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/shout_target_templates.lua#L8-L18)
- [scripts/settings/damage/explosion_templates/player_grenade_explosion_templates.lua：418–444](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/damage/explosion_templates/player_grenade_explosion_templates.lua#L418-L444)
- [scripts/settings/buff/archetype_buff_templates/adamant_buff_templates.lua：263–380](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/adamant_buff_templates.lua#L263-L380)
- [scripts/settings/buff/weapon_buff_templates.lua：1088–1135](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/weapon_buff_templates.lua#L1088-L1135)
- [scripts/settings/damage/damage_profiles/demolitions_damage_profile_templates.lua：815–932](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/damage/damage_profiles/demolitions_damage_profile_templates.lua#L815-L932)
- [scripts/extension_systems/ability/player_unit_ability_extension.lua：839–880](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/ability/player_unit_ability_extension.lua#L839-L880)
- [scripts/utilities/attack/damage_calculation.lua：587–614](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/attack/damage_calculation.lua#L587-L614)
- [scripts/extension_systems/ability/utilities/shout_ability.lua：121–186](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/ability/utilities/shout_ability.lua#L121-L186)
- [scripts/settings/ability/archetype_talents/talents/adamant_talents.lua：343–376](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/adamant_talents.lua#L343-L376)
- [scripts/ui/views/talent_builder_view/layouts/adamant_tree.lua：188–226](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/ui/views/talent_builder_view/layouts/adamant_tree.lua#L188-L226)

## 算例條件與待確認事項

- **爆炸算例**：只計中央爆炸的護甲階段，無甲基準為 600 × 1 = 600，防彈護甲為 600 × 0.5 = 300。實際還需計入部位、遮蔽及電擊附帶的承傷效果。距離獒犬 4.5 公尺時，處於電擊範圍，但已超出爆炸傷害範圍。
- 爆炸算例只示範中央profile的護甲階段，未計部位、遮蔽、電擊附加承傷與其他加成。未把未掛載的targeting模組當成可用操作。
- 遊戲原文：1.13.1／Steam Build 25606770 的 ui 資源。描述與實作的差異仍需遊戲內核對；省略細節不列為繁中誤譯。

## 原文核對

- 對應 hash：`29c13c22`。
- 同一 inventory 記錄的繁中寫「引爆機械戰犬的所在處，電擊附近的敵人並使其踉蹌」，英文寫「Cause an Explosion at your Cyber-Mastiff's Location. Staggering and Electrocuting nearby Enemies.」；兩者都涵蓋狗所在位置的爆炸、踉蹌及電擊。來源另外把效果拆成 5 公尺呼喊與半徑 4 公尺爆炸，並給出 2.5 秒踉蹌；原文省略這些細節不作錯譯。

## 圖示來源

[原圖](https://gameslantern.com/storage/sites/darktide/exporter/talents/adamant/tactical/adamant_whistle.webp)｜[圖片來源 Issue](https://github.com/SyuanTsai/Media-Assets/issues/11#issuecomment-5932554216)｜[圖片附件](https://github.com/user-attachments/assets/aa116dc7-88d2-450b-bcff-c2dc0bb6b4c0)

圖片僅供技能辨識，不作機制證據。

