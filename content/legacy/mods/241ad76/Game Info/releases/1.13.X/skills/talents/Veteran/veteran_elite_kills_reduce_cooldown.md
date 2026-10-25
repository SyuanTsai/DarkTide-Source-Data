# 戰術意識(Tactical Awareness)：原始碼依據

[English](en/veteran_elite_kills_reduce_cooldown.md)

[返回玩家說明](README.md#veteran_elite_kills_reduce_cooldown)｜[技術索引](SOURCE_INDEX.md)

- 來源版本：Release 1.13.1；SHA：`7e662fcda16219d775b84af50322be2e9cd9d62e`。
- 天賦：`veteran_elite_kills_reduce_cooldown`；名稱鍵：`loc_talent_veteran_elite_kills_reduce_cooldown`；描述鍵：`loc_talent_veteran_elite_kills_reduce_cooldown_alt_desc`。
- [節點](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/ui/views/talent_builder_view/layouts/veteran_tree.lua#L997-L1029)：`ability_modifier`，花費 1 點；[天賦定義](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/veteran_talents.lua#L746-L774)。
- 名稱對應沿用翻譯表；未進行遊戲內驗證。

## 實際觸發與逐秒恢復

- 被動綁 on_kill，check_proc_func=CheckProcFunctions.on_special_kill；檢查死亡與 special 標籤，不接受單純 elite。舊 talent_settings_3.passive_1.cooldown_reduction=6 等值只被存入未使用欄位。
- 實際加入 cooldown_reduction_on_elite_kills_buff：duration=3、max_stacks=1、refresh_duration_on_stack=true。start_func 的 timer=fixed_t+1；update_func 在 t>timer 時令 timer+=1，並 restore_ability_resource('combat_ability',1)。重新計時不重跑 start_func，所以保留原有 tick 節奏。
- Buff._update_duration 在 t>start+3 設 finished，但 Buff.update 仍執行本影格其餘 update_funcs；BuffExtensionBase 是整體 update 後才移除完成 buff，因此正常固定影格更新下約第 1、2、3 秒各恢復 1 點。
- 老兵能力的資源自然恢復率為每秒 1 點；本效果每點因此對應 1 秒基礎冷卻。25 秒剩餘在三秒後：25−3（自然）−3（額外）=19。不是擊殺當下瞬間扣除六秒，也不是多次擊殺把額外恢復速度疊高。

## 原始碼依據

- [scripts/settings/ability/archetype_talents/talents/veteran_talents.lua，第 746–774 行](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/veteran_talents.lua#L746-L774)
- [scripts/settings/talent/talent_settings_veteran.lua，第 54–58 行](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/talent/talent_settings_veteran.lua#L54-L58)
- [scripts/settings/buff/archetype_buff_templates/veteran_buff_templates.lua，第 2132–2185 行](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/veteran_buff_templates.lua#L2132-L2185)
- [scripts/settings/buff/helper_functions/check_proc_functions.lua，第 108–119 行](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/helper_functions/check_proc_functions.lua#L108-L119)
- [scripts/extension_systems/ability/player_unit_ability_extension.lua，第 1127–1173 行](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/ability/player_unit_ability_extension.lua#L1127-L1173)
- [scripts/settings/ability/player_abilities/abilities/veteran_abilities.lua，第 7–19 行](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/player_abilities/abilities/veteran_abilities.lua#L7-L19)
- [scripts/extension_systems/buff/buffs/buff.lua，第 29–48 行](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/buff/buffs/buff.lua#L29-L48)
- [scripts/extension_systems/buff/buffs/buff.lua，第 305–328 行](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/buff/buffs/buff.lua#L305-L328)
- [scripts/extension_systems/buff/buff_extension_base.lua，第 180–208 行](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/buff/buff_extension_base.lua#L180-L208)
- [scripts/extension_systems/buff/buff_extension_base.lua，第 439–457 行](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/buff/buff_extension_base.lua#L439-L457)

## 算例條件與待確認事項

- 玩家頁算例按列出的基礎值及條件計算；未列出的加成、護甲、部位、距離及遊戲更新誤差不納入。
- 靜態推導不等同遊戲實測；名稱識別鍵與既有譯名的對應仍待使用者確認。
- tick 時點受固定影格更新及資源上限影響；算例假定三次恢復前能力都尚未全滿。

## 圖示來源

[原圖](https://gameslantern.com/storage/sites/darktide/exporter/talents/veteran/ability_modifier/veteran_elite_kills_reduce_cooldown.webp)｜[圖片來源 Issue](https://github.com/SyuanTsai/Media-Assets/issues/6#issuecomment-5922922455)｜[圖片附件](https://github.com/user-attachments/assets/57d6b442-9cee-45c3-ba74-4a191649eddb)

圖片僅供技能辨識，不作機制證據。

