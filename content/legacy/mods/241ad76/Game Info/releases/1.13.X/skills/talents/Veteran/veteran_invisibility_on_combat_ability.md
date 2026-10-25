# 滲透(Infiltrate)：原始碼依據

[English](en/veteran_invisibility_on_combat_ability.md)

[返回玩家說明](README.md#veteran_invisibility_on_combat_ability)｜[技術索引](SOURCE_INDEX.md)

- 來源版本：Release 1.13.1；SHA：`7e662fcda16219d775b84af50322be2e9cd9d62e`。
- 天賦：`veteran_invisibility_on_combat_ability`；名稱鍵：`loc_talent_veteran_invisibility_on_combat_ability`；描述鍵：`loc_talent_veteran_invisibility_on_combat_ability_damage_desc`。
- [節點](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/ui/views/talent_builder_view/layouts/veteran_tree.lua#L295-L327)：`ability`，花費 1 點；[天賦定義](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/veteran_talents.lua#L2032-L2113)。
- 名稱對應沿用翻譯表；未進行遊戲內驗證。

## 原始碼確認與程式推導

選用stealth ability，shock_trooper分支回滿本人韌性。on_combat_ability安裝隱身8秒，movement_speed=.25。隱身start即建立damage=.3的自訂增益；VeteranStealthBonusesBuff.duration()回nil，避免基底計時移除，並於首次觀察到離開隱身時設stop_t=t+8。因此傷害加成在隱身期間已生效，解除後再保留8秒。

退出訂閱on_shoot、on_hit、on_action_start及四種救援完成事件；不是on_player_hit_received。開始0.5秒對沒有正傷害的事件有寬限。action_name只有action_throw_grenade通過退出分支，不能說投雷不解除。流血、燃燒、破片爆炸、電漿的傷害事件可被白名單略過，但射擊事件仍能解除，因此不能保證電漿開火保留隱身。外部attack_instigator亦先排除。

停止時對in_melee_range+1=6公尺內敵人執行踉蹌與壓制，不保證每個敵人都被擊退。能力成本40，每秒自然回1，使用時即開始冷卻。兩次增傷buff沒有max_stacks欄位，額外施放的實例可各自存在；玩家單次算例沒有加入重疊效果。

## 原始碼依據

- [scripts/settings/ability/archetype_talents/talents/veteran_talents.lua，第 2032–2113 行](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/veteran_talents.lua#L2032-L2113)
- [scripts/settings/ability/player_abilities/abilities/veteran_abilities.lua，第 73–80 行](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/player_abilities/abilities/veteran_abilities.lua#L73-L80)
- [scripts/settings/talent/talent_settings_veteran.lua，第 5–8 行](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/talent/talent_settings_veteran.lua#L5-L8)
- [scripts/settings/buff/archetype_buff_templates/veteran_buff_templates.lua，第 1083–1095 行](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/veteran_buff_templates.lua#L1083-L1095)
- [scripts/settings/buff/archetype_buff_templates/veteran_buff_templates.lua，第 1110–1289 行](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/veteran_buff_templates.lua#L1110-L1289)
- [scripts/extension_systems/ability/actions/action_veteran_combat_ability.lua，第 51–80 行](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/ability/actions/action_veteran_combat_ability.lua#L51-L80)
- [scripts/extension_systems/buff/buffs/veteran_stealth_bonuses_buff.lua，第 7–44 行](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/buff/buffs/veteran_stealth_bonuses_buff.lua#L7-L44)
- [scripts/extension_systems/ability/player_unit_ability_extension.lua，第 826–869 行](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/ability/player_unit_ability_extension.lua#L826-L869)
- [scripts/settings/damage/damage_settings.lua，第 18–25 行](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/damage/damage_settings.lua#L18-L25)

## 算例條件與待確認事項

- 玩家頁算例按列出的基礎值及條件計算；未列出的加成、護甲、部位、距離及遊戲更新誤差不納入。
- 靜態推導不等同遊戲實測；名稱識別鍵與既有譯名的對應仍待使用者確認。

## 圖示來源

[原圖](https://gameslantern.com/storage/sites/darktide/exporter/talents/veteran/ability/veteran_invisibility_on_combat_ability.webp)｜[圖片來源 Issue](https://github.com/SyuanTsai/Media-Assets/issues/6#issuecomment-5922922455)｜[圖片附件](https://github.com/user-attachments/assets/0f9d7c51-7e6a-4f3d-a367-5c22d0adf308)

圖片僅供技能辨識，不作機制證據。

