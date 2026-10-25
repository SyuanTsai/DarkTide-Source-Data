# 責任與榮譽(Duty and Honour)：原始碼依據

[English](en/veteran_combat_ability_increase_and_restore_toughness_to_coherency.md)

[返回玩家說明](README.md#veteran_combat_ability_increase_and_restore_toughness_to_coherency)｜[技術索引](SOURCE_INDEX.md)

- 來源版本：Release 1.13.1；SHA：`7e662fcda16219d775b84af50322be2e9cd9d62e`。
- 天賦：`veteran_combat_ability_increase_and_restore_toughness_to_coherency`；名稱鍵：`loc_talent_veteran_combat_ability_increase_and_restore_toughness_to_coherency`；描述鍵：`loc_talent_veteran_combat_ability_increase_and_restore_toughness_to_coherency_description`。
- [節點](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/ui/views/talent_builder_view/layouts/veteran_tree.lua#L1310-L1332)：`ability_modifier`，花費 1 點；[天賦定義](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/veteran_talents.lua#L480-L517)。
- 名稱對應沿用翻譯表；未進行遊戲內驗證。

## 上限、當前韌性與到期

- ActionVeteranCombatAbility.start 先對 in_coherence_units 加入 increase_toughness_to_coherency，再對 squad_leader 本人 recover_max_toughness。CoherencySystem 的鏈包含本人，故本人也有75上限加成。
- buff duration=10、toughness_bonus_flat=75，沒有 max_stacks，因此多次施加建立獨立實例，而不是只重新計時同一份。最大韌性公式為 ceil((base+toughness)×toughness_bonus)+toughness_bonus_flat，75在百分比上限修正之後相加。
- 目前韌性以最大值減 toughness_damage 表示。上限增加時不增 damage，所以目前值同步增加75；本人 recover_max_toughness 又把 damage清零。隊友沒有額外的回滿呼叫。
- 上限降低時 handle_max_toughness_changes_due_to_buffs 把已損失量扣掉上限差值，最低0，因此目前韌性保留到恢復後上限：160/175→100/100；60/175時damage115，上限−75後damage40，結果60/100。

## 原始碼依據

- [scripts/settings/ability/archetype_talents/talents/veteran_talents.lua，第 480–517 行](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/veteran_talents.lua#L480-L517)
- [scripts/extension_systems/ability/actions/action_veteran_combat_ability.lua，第 52–78 行](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/ability/actions/action_veteran_combat_ability.lua#L52-L78)
- [scripts/settings/buff/archetype_buff_templates/veteran_buff_templates.lua，第 2311–2327 行](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/veteran_buff_templates.lua#L2311-L2327)
- [scripts/extension_systems/toughness/player_unit_toughness_extension.lua，第 325–340 行](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/toughness/player_unit_toughness_extension.lua#L325-L340)
- [scripts/extension_systems/coherency/coherency_system.lua，第 188–255 行](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/coherency/coherency_system.lua#L188-L255)
- [scripts/extension_systems/toughness/player_unit_toughness_extension.lua，第 79–88 行](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/toughness/player_unit_toughness_extension.lua#L79-L88)
- [scripts/extension_systems/toughness/player_unit_toughness_extension.lua，第 200–209 行](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/toughness/player_unit_toughness_extension.lua#L200-L209)
- [scripts/extension_systems/buff/buff_extension_base.lua，第 439–484 行](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/buff/buff_extension_base.lua#L439-L484)

## 算例條件與待確認事項

- 玩家頁算例按列出的基礎值及條件計算；未列出的加成、護甲、部位、距離及遊戲更新誤差不納入。
- 靜態推導不等同遊戲實測；名稱識別鍵與既有譯名的對應仍待使用者確認。

## 圖示來源

[原圖](https://gameslantern.com/storage/sites/darktide/exporter/talents/veteran/ability_modifier/veteran_combat_ability_increase_and_restore_toughness_to_coherency.webp)｜[圖片來源 Issue](https://github.com/SyuanTsai/Media-Assets/issues/6#issuecomment-5922929234)｜[圖片附件](https://github.com/user-attachments/assets/56d61b06-dd20-4832-8293-0220d1f3960c)

圖片僅供技能辨識，不作機制證據。

