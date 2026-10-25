# 只有死亡，職責才會終結(Only In Death Does Duty End)：原始碼依據

[English](en/veteran_combat_ability_revive_nearby_allies.md)

[返回玩家說明](README.md#veteran_combat_ability_revive_nearby_allies)｜[技術索引](SOURCE_INDEX.md)

- 來源版本：Release 1.13.1；SHA：`7e662fcda16219d775b84af50322be2e9cd9d62e`。
- 天賦：`veteran_combat_ability_revive_nearby_allies`；名稱鍵：`loc_talent_veteran_combat_ability_revives`；描述鍵：`loc_talent_veteran_combat_ability_revives_new_description`。
- [節點](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/ui/views/talent_builder_view/layouts/veteran_tree.lua#L1088-L1110)：`ability_modifier`，花費 1 點；[天賦定義](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/veteran_talents.lua#L565-L605)。
- 名稱對應沿用翻譯表；未進行遊戲內驗證。

## 從天賦到救援判定

- 節點只掛 special_rules.shout_revives_allies，沒有 passive。veteran_shout 的 allies.revive_allies=true；ShoutAbility._handle_allied_targets 以 radius×shout_radius_modifier 查詢 allied player，逐一檢查 PlayerUnitStatus.is_knocked_down，再設定 force_assist=true。沒有「只救一人」或要求傷害擊殺的條件。
- 固定 SHA 的同名未接入 buff 內有 combat_ability_resource_cost_per_use_modifier=+.5、shout_radius_modifier=−.33。如果掛上，含義應是成本增加50%、半徑減少33%，不能顛倒成減冷卻／增範圍。但本節點只用 find_value 讀取它作格式文字，沒有實際把它加到角色。
- CharacterSheet 只將 talent.passive 轉為 class_loadout.passives；TalentExtension 依該清單施加 buff。這個節點的 special rule 唯一實際效果是救援判定，故沒有其他修正時半徑仍9、能力成本40、每秒恢復1，即40秒。
- 主文保留可執行的9公尺與40秒，格式宣告和執行內容的落差留在此處。被其他敵人制伏、懸掛及死亡救援不是 is_knocked_down 條件。

## 原始碼依據

- [scripts/settings/ability/archetype_talents/talents/veteran_talents.lua，第 565–605 行](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/veteran_talents.lua#L565-L605)
- [scripts/settings/buff/archetype_buff_templates/veteran_buff_templates.lua，第 2509–2516 行](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/veteran_buff_templates.lua#L2509-L2516)
- [scripts/utilities/character_sheet.lua，第 325–343 行](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/character_sheet.lua#L325-L343)
- [scripts/extension_systems/talent/player_unit_talent_extension.lua，第 130–170 行](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/talent/player_unit_talent_extension.lua#L130-L170)
- [scripts/extension_systems/ability/utilities/shout_ability.lua，第 230–296 行](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/ability/utilities/shout_ability.lua#L230-L296)
- [scripts/settings/ability/shout_target_templates.lua，第 51–66 行](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/shout_target_templates.lua#L51-L66)
- [scripts/settings/ability/ability_templates/veteran_combat_ability.lua，第 5–100 行](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/ability_templates/veteran_combat_ability.lua#L5-L100)
- [scripts/settings/ability/player_abilities/abilities/veteran_abilities.lua，第 81–87 行](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/player_abilities/abilities/veteran_abilities.lua#L81-L87)
- [scripts/extension_systems/ability/player_unit_ability_extension.lua，第 1437–1459 行](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/ability/player_unit_ability_extension.lua#L1437-L1459)
- [scripts/settings/talent/talent_settings_veteran.lua，第 195–201 行](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/talent/talent_settings_veteran.lua#L195-L201)

## 算例條件與待確認事項

- 玩家頁算例按列出的基礎值及條件計算；未列出的加成、護甲、部位、距離及遊戲更新誤差不納入。
- 靜態推導不等同遊戲實測；名稱識別鍵與既有譯名的對應仍待使用者確認。
- 格式文字與未接入 buff 的資料存在落差；9公尺／40秒為此固定 SHA 的靜態執行結果，應優先列入遊戲內驗證。

## 圖示來源

[原圖](https://gameslantern.com/storage/sites/darktide/exporter/talents/veteran/ability_modifier/veteran_combat_ability_revive_nearby_allies.webp)｜[圖片來源 Issue](https://github.com/SyuanTsai/Media-Assets/issues/6#issuecomment-5922929234)｜[圖片附件](https://github.com/user-attachments/assets/a8bcdde1-34e3-449d-9b46-e9130865b285)

圖片僅供技能辨識，不作機制證據。

