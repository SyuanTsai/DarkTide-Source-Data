# 發號施令(Voice of Command)：原始碼依據

[English](en/veteran_combat_ability_stagger_nearby_enemies.md)

[返回玩家說明](README.md#veteran_combat_ability_stagger_nearby_enemies)｜[技術索引](SOURCE_INDEX.md)

- 來源版本：Release 1.13.1；SHA：`7e662fcda16219d775b84af50322be2e9cd9d62e`。
- 天賦：`veteran_combat_ability_stagger_nearby_enemies`；名稱鍵：`loc_talent_veteran_combat_ability_stagger_nearby_enemies`；描述鍵：`loc_talent_veteran_combat_ability_stagger_nearby_enemies_description`。
- [節點](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/ui/views/talent_builder_view/layouts/veteran_tree.lua#L1057-L1087)：`ability`，花費 1 點；[天賦定義](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/veteran_talents.lua#L538-L564)。
- 名稱對應沿用翻譯表；未進行遊戲內驗證。

## 呼喊與冷卻

- 此節點選用 veteran_combat_ability_shout，class_tag=squad_leader，radius=9，resource_cost_per_charge=40，resource_regen_per_second=1；動作在 start 消耗次數，未配置暫停恢復，因此從施放開始恢復。
- ActionVeteranCombatAbility 對本人呼叫 recover_max_toughness，清除 toughness_damage；不是只恢復設定檔內未被這條執行路徑使用的 .5。沒有責任與榮譽等升級時，不會因這個呼叫把隊友韌性也補滿。
- ShoutAbility 使用 veteran_shout 模板，先套用 shout_stagger_veteran；若未造成踉蹌，另提供 heavy、2.5 秒的強制踉蹌參數。這不是對所有敵人保證固定 2.5 秒控制的證據。
- 最大韌性100、已損失70：清除損失值後目前韌性=100。冷卻40÷1=40秒，未納入其他恢復效果。

## 原始碼依據

- [scripts/settings/ability/archetype_talents/talents/veteran_talents.lua，第 538–564 行](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/veteran_talents.lua#L538-L564)
- [scripts/settings/ability/ability_templates/veteran_combat_ability.lua，第 5–100 行](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/ability_templates/veteran_combat_ability.lua#L5-L100)
- [scripts/settings/talent/talent_settings_veteran.lua，第 182–198 行](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/talent/talent_settings_veteran.lua#L182-L198)
- [scripts/settings/ability/shout_target_templates.lua，第 51–65 行](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/shout_target_templates.lua#L51-L65)
- [scripts/extension_systems/ability/actions/action_veteran_combat_ability.lua，第 52–91 行](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/ability/actions/action_veteran_combat_ability.lua#L52-L91)
- [scripts/extension_systems/toughness/player_unit_toughness_extension.lua，第 325–340 行](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/toughness/player_unit_toughness_extension.lua#L325-L340)
- [scripts/settings/talent/talent_settings_veteran.lua，第 195–201 行](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/talent/talent_settings_veteran.lua#L195-L201)
- [scripts/settings/ability/player_abilities/abilities/veteran_abilities.lua，第 7–24 行](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/player_abilities/abilities/veteran_abilities.lua#L7-L24)
- [scripts/settings/ability/player_abilities/abilities/veteran_abilities.lua，第 81–87 行](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/player_abilities/abilities/veteran_abilities.lua#L81-L87)
- [scripts/settings/ability/ability_templates/veteran_combat_ability.lua，第 90–106 行](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/ability_templates/veteran_combat_ability.lua#L90-L106)
- [scripts/extension_systems/ability/actions/action_veteran_combat_ability.lua，第 137–149 行](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/ability/actions/action_veteran_combat_ability.lua#L137-L149)

## 算例條件與待確認事項

- 玩家頁算例按列出的基礎值及條件計算；未列出的加成、護甲、部位、距離及遊戲更新誤差不納入。
- 靜態推導不等同遊戲實測；名稱識別鍵與既有譯名的對應仍待使用者確認。
- 個別敵人的踉蹌抗性、正在執行的動作與強制踉蹌呈現需遊戲實測。

## 圖示來源

[原圖](https://gameslantern.com/storage/sites/darktide/exporter/talents/veteran/ability/veteran_combat_ability_stagger_nearby_enemies.webp)｜[圖片來源 Issue](https://github.com/SyuanTsai/Media-Assets/issues/6#issuecomment-5922922455)｜[圖片附件](https://github.com/user-attachments/assets/73961902-95ea-4316-bda1-13b23dac1789)

圖片僅供技能辨識，不作機制證據。

