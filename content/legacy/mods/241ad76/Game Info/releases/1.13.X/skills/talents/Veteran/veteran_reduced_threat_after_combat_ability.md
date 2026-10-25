# 低調(Low Profile)：原始碼依據

[English](en/veteran_reduced_threat_after_combat_ability.md)

[返回玩家說明](README.md#veteran_reduced_threat_after_combat_ability)｜[技術索引](SOURCE_INDEX.md)

- 來源版本：Release 1.13.1；SHA：`7e662fcda16219d775b84af50322be2e9cd9d62e`。
- 天賦：`veteran_reduced_threat_after_combat_ability`；名稱鍵：`loc_talent_veteran_reduced_threat_after_combat_ability`；描述鍵：`loc_talent_veteran_reduced_threat_after_stealth_desc`。
- [節點](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/ui/views/talent_builder_view/layouts/veteran_tree.lua#L610-L632)：`ability_modifier`，花費 1 點；[天賦定義](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/veteran_talents.lua#L1268-L1302)。
- 名稱對應沿用翻譯表；未進行遊戲內驗證。

## 原始碼確認與程式推導

talent裝載共同能力觸發buff與special rule。非stealth能力由共用on_combat_ability流程加入減仇恨；stealth在invisibility.start另行加入同一增益。不能因前者略過stealth就斷言滲透無效。threat_weight_multiplier=.1，max_stacks=1，refresh_duration_on_stack=true。

自訂StealthBonusesBuff在隱身存在時不倒數，離開隱身後設10秒截止；非隱身能力則在首次更新直接開始10秒。敵人選敵權重乘.1，這是評分倍率，不是被攻擊的機率。

共用refresh_duration_on_stack只呼叫set_start_time；自訂類別沒有在重新計時時重置_stop_t或_in_invisibility。因此已離開隱身／已開始倒數後，再次施放不會把該實例延長為另一個完整10秒；不能只看refresh旗標推導實際時間。

## 原始碼依據

- [scripts/settings/ability/archetype_talents/talents/veteran_talents.lua，第 1268–1302 行](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/veteran_talents.lua#L1268-L1302)
- [scripts/settings/buff/archetype_buff_templates/veteran_buff_templates.lua，第 1977–2031 行](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/veteran_buff_templates.lua#L1977-L2031)
- [scripts/settings/buff/archetype_buff_templates/veteran_buff_templates.lua，第 1219–1221 行](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/veteran_buff_templates.lua#L1219-L1221)
- [scripts/settings/talent/talent_settings_veteran.lua，第 155–157 行](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/talent/talent_settings_veteran.lua#L155-L157)
- [scripts/extension_systems/buff/buffs/veteran_stealth_bonuses_buff.lua，第 7–44 行](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/buff/buffs/veteran_stealth_bonuses_buff.lua#L7-L44)
- [scripts/utilities/minion_target_selection.lua，第 206–217 行](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/minion_target_selection.lua#L206-L217)
- [scripts/extension_systems/buff/buffs/buff.lua，第 339–348 行](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/buff/buffs/buff.lua#L339-L348)
- [scripts/extension_systems/buff/buffs/buff.lua，第 619–639 行](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/buff/buffs/buff.lua#L619-L639)
- [scripts/extension_systems/buff/buff_extension_base.lua，第 439–457 行](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/buff/buff_extension_base.lua#L439-L457)

## 算例條件與待確認事項

- 玩家頁算例按列出的基礎值及條件計算；未列出的加成、護甲、部位、距離及遊戲更新誤差不納入。
- 靜態推導不等同遊戲實測；名稱識別鍵與既有譯名的對應仍待使用者確認。

## 圖示來源

[原圖](https://gameslantern.com/storage/sites/darktide/exporter/talents/veteran/ability_modifier/veteran_reduced_threat_after_combat_ability.webp)｜[圖片來源 Issue](https://github.com/SyuanTsai/Media-Assets/issues/6#issuecomment-5922922455)｜[圖片附件](https://github.com/user-attachments/assets/7a72c16f-0170-458e-9bd4-4d585cf523d3)

圖片僅供技能辨識，不作機制證據。

