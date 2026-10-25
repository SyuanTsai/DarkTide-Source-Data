# 獵手決意(Hunter's Resolve)：原始碼依據

[English](en/veteran_toughness_bonus_leaving_invisibility.md)

[返回玩家說明](README.md#veteran_toughness_bonus_leaving_invisibility)｜[技術索引](SOURCE_INDEX.md)

- 來源版本：Release 1.13.1；SHA：`7e662fcda16219d775b84af50322be2e9cd9d62e`。
- 天賦：`veteran_toughness_bonus_leaving_invisibility`；名稱鍵：`loc_talent_veteran_toughness_bonus_leaving_invisibility`；描述鍵：`loc_talent_veteran_toughness_bonus_leaving_invisibility_desc`。
- [節點](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/ui/views/talent_builder_view/layouts/veteran_tree.lua#L886-L909)：`ability_modifier`，花費 1 點；[天賦定義](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/veteran_talents.lua#L2155-L2195)。
- 名稱對應沿用翻譯表；未進行遊戲內驗證。

## 開始時間、結束時間與多份效果

- invisibility.start_func 在隱身開始時立即加入 toughness_bonus_leaving_invisibility，stat toughness_damage_taken_multiplier=.5，因此不必等隱身結束才生效。
- VeteranStealthBonusesBuff.duration() 回傳 nil，普通 duration 計時不控制它；建立後 _in_invisibility=true，首次偵測不到 veteran_invisibility 時，記錄 _stop_t=t+10，之後超時結束。
- template 沒有 max_stacks，BuffExtensionBase 不會把第二次施加合併成同一份，會建立獨立實例；stat 類型為 multiplicative_multiplier，多份 .5 相乘，.5²=.25。每份在首次離開隱身時開始自己的 10 秒倒數；已開始的倒數不因再次隱身暫停。
- 只影響韌性承傷倍率，不修改最大韌性，也沒有生命承傷倍率。

## 原始碼依據

- [scripts/settings/ability/archetype_talents/talents/veteran_talents.lua，第 2155–2195 行](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/veteran_talents.lua#L2155-L2195)
- [scripts/settings/buff/archetype_buff_templates/veteran_buff_templates.lua，第 1096–1108 行](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/veteran_buff_templates.lua#L1096-L1108)
- [scripts/settings/buff/archetype_buff_templates/veteran_buff_templates.lua，第 1215–1217 行](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/veteran_buff_templates.lua#L1215-L1217)
- [scripts/extension_systems/buff/buffs/veteran_stealth_bonuses_buff.lua，第 7–27 行](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/buff/buffs/veteran_stealth_bonuses_buff.lua#L7-L27)
- [scripts/extension_systems/buff/buffs/veteran_stealth_bonuses_buff.lua，第 30–44 行](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/buff/buffs/veteran_stealth_bonuses_buff.lua#L30-L44)
- [scripts/extension_systems/buff/buff_extension_base.lua，第 439–484 行](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/buff/buff_extension_base.lua#L439-L484)
- [scripts/settings/buff/buff_settings.lua，第 1002–1003 行](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/buff_settings.lua#L1002-L1003)

## 算例條件與待確認事項

- 玩家頁算例按列出的基礎值及條件計算；未列出的加成、護甲、部位、距離及遊戲更新誤差不納入。
- 靜態推導不等同遊戲實測；名稱識別鍵與既有譯名的對應仍待使用者確認。

## 圖示來源

[原圖](https://gameslantern.com/storage/sites/darktide/exporter/talents/veteran/ability_modifier/veteran_toughness_bonus_leaving_invisibility.webp)｜[圖片來源 Issue](https://github.com/SyuanTsai/Media-Assets/issues/6#issuecomment-5922922455)｜[圖片附件](https://github.com/user-attachments/assets/0c033c93-a850-4295-853d-10698ec96e89)

圖片僅供技能辨識，不作機制證據。

