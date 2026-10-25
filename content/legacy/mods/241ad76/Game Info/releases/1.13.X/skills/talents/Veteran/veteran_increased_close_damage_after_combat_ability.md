# 肉搏戰(Close Quarters Killzone)：原始碼依據

[English](en/veteran_increased_close_damage_after_combat_ability.md)

[返回玩家說明](README.md#veteran_increased_close_damage_after_combat_ability)｜[技術索引](SOURCE_INDEX.md)

- 來源版本：Release 1.13.1；SHA：`7e662fcda16219d775b84af50322be2e9cd9d62e`。
- 天賦：`veteran_increased_close_damage_after_combat_ability`；名稱鍵：`loc_talent_veteran_ability_assault`；描述鍵：`loc_talent_veteran_ability_assault_desc`。
- [節點](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/ui/views/talent_builder_view/layouts/veteran_tree.lua#L1634-L1661)：`ability_modifier`，花費 1 點；[天賦定義](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/veteran_talents.lua#L1303-L1344)。
- 名稱對應沿用翻譯表；未進行遊戲內驗證。

## 觸發與自訂倒數

- 非隱身能力由 veteran_buffs_after_combat_ability 施加；隱身由 invisibility.start_func 直接施加。模板 duration=10、max_stacks=max_stacks_cap=1、damage_near=.15。
- VeteranStealthBonusesBuff 在第一次偵測不處於隱身時設定 _stop_t=t+10；duration() 回 nil，不使用標準 start_time 到期。即使 refresh_duration_on_stack=true，一般 set_start_time 不重設 _stop_t/_in_invisibility，故已開始倒數不會因重施延長。

## 距離公式

- 共用 damage_calculation 將 damage_near 與遠程加成依 sqrt(clamp((distance−12.5)/17.5,0,1)) 插值，再加到一般傷害倍率；damage_near 本身沒有 ranged-only 條件。此天賦的獨立貢獻為 .15×(1−sqrt(clamp((d−12.5)/17.5,0,1)))。
- d≤12.5→.15；d=16.875→.075；d≥30→0。公式中的distance若呼叫端未提供，預設0。其他天賦的遠程加成另按同一插值合併。
- 算例基礎100、沒有其他加成：100×1.15=115。已有同階段25%時100×1.40=140。

## 原始碼依據

- [scripts/settings/ability/archetype_talents/talents/veteran_talents.lua，第 1303–1344 行](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/veteran_talents.lua#L1303-L1344)
- [scripts/settings/buff/archetype_buff_templates/veteran_buff_templates.lua，第 1977–2014 行](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/veteran_buff_templates.lua#L1977-L2014)
- [scripts/settings/buff/archetype_buff_templates/veteran_buff_templates.lua，第 2032–2047 行](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/veteran_buff_templates.lua#L2032-L2047)
- [scripts/settings/buff/archetype_buff_templates/veteran_buff_templates.lua，第 1223–1225 行](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/veteran_buff_templates.lua#L1223-L1225)
- [scripts/extension_systems/buff/buffs/veteran_stealth_bonuses_buff.lua，第 15–44 行](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/buff/buffs/veteran_stealth_bonuses_buff.lua#L15-L44)
- [scripts/utilities/attack/damage_calculation.lua，第 24–26 行](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/attack/damage_calculation.lua#L24-L26)
- [scripts/utilities/attack/damage_calculation.lua，第 284–319 行](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/attack/damage_calculation.lua#L284-L319)
- [scripts/settings/damage/damage_settings.lua，第 18–27 行](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/damage/damage_settings.lua#L18-L27)
- [scripts/extension_systems/buff/buffs/buff.lua，第 619–639 行](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/buff/buffs/buff.lua#L619-L639)

## 算例條件與待確認事項

- 玩家頁算例按列出的基礎值及條件計算；未列出的加成、護甲、部位、距離及遊戲更新誤差不納入。
- 靜態推導不等同遊戲實測；名稱識別鍵與既有譯名的對應仍待使用者確認。

## 遊戲本體繁中對照

- 文字來源：本機Steam Build `25606770`，`content/localization/ui`，2026-10-01擷取；不是MOD文字。
- 語系鍵：`loc_talent_veteran_ability_assault_desc`；hash：`1eb58318`；繁中entry_index：`2009`；英文entry_index：`2009`。以資源＋hash配對，已確認兩語系此hash各一筆。
- 繁中問題片段：「近戰傷害加成」；同版英文對照片段：`Close Damage`。引文保留原始占位符，未冒充遊戲畫面的最終數字。
- 判定：**明確繁中描述錯誤**。效果種類錯譯：Close Damage是依距離的damage_near，並非按近戰攻擊類型判斷的melee_damage。原文另稱離開潛行後才開始，與固定版本實作有差異，但此處只將近戰／近距離的同版語系差異列為勘誤。
- 本項由同一份擷取資源的中英語義差異定位，再核對固定公開版本的格式／機制；不單憑文字與實作的差異判定繁中錯譯。完整文字只留本機，Git僅保存必要短引文與追溯資料。
- [完整比對範圍與版本限制](LOCALIZATION_COMPARISON.md)。

- [公開依據：scripts/settings/buff/archetype_buff_templates/veteran_buff_templates.lua，第2032–2047行](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/veteran_buff_templates.lua#L2032-L2047)
- [公開依據：scripts/utilities/attack/damage_calculation.lua，第284–297行](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/attack/damage_calculation.lua#L284-L297)

## 圖示來源

[原圖](https://gameslantern.com/storage/sites/darktide/exporter/talents/veteran/ability_modifier/veteran_increased_close_damage_after_combat_ability.webp)｜[圖片來源 Issue](https://github.com/SyuanTsai/Media-Assets/issues/6#issuecomment-5922929234)｜[圖片附件](https://github.com/user-attachments/assets/1181fe6e-4066-4d75-b996-a0eb01d7583d)

圖片僅供技能辨識，不作機制證據。

