# 武器專家(Weapons Specialist)：原始碼依據

[English](en/veteran_weapon_switch_passive.md)

[返回玩家說明](README.md#veteran_weapon_switch_passive)｜[技術索引](SOURCE_INDEX.md)

- 來源版本：Release 1.13.1；SHA：`7e662fcda16219d775b84af50322be2e9cd9d62e`。
- 天賦：`veteran_weapon_switch_passive`；名稱鍵：`loc_talent_veteran_weapon_switch`；描述鍵：`loc_talent_veteran_weapon_switch_new_description`。
- [節點](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/ui/views/talent_builder_view/layouts/veteran_tree.lua#L1811-L1839)：`keystone`，花費 1 點；[天賦定義](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/veteran_talents.lua#L2717-L2826)。
- 名稱對應沿用翻譯表；未進行遊戲內驗證。

## 觸發、層數與公式

- on_kill 讀取當下 inventory_component.wielded_slot，不檢查 params.attack_type。slot_primary 累積 ranged_stacks，最多 10；slot_secondary 累積 melee_stacks，最多 1。對應 on_wield 依儲存層數建立增益後清空儲存量。沒有擊殺層數時，with_stacks 的 1..n 迴圈不會建立增益。
- 遠程增益 duration=10、max_stacks=max_stacks_cap=10；每層 ranged_attack_speed=.02、reload_speed=.02。conditional ranged_critical_strike_chance=.33 同樣經 Buff._calculate_stat_buffs 的逐層迴圈合併，**不是整個效果固定 +33 個百分點**。n 層增加 .33n，CriticalStrike.chance 把總機率限制於 0..1。
- 非自動射擊在 ActionShoot 啟動時判定暴擊；自動射擊進入 prepare_shooting 時判定。HitScan 先讀取並結算暴擊，再發送 on_shoot；該事件令 shot=true，使下一次屬性彙整移除額外爆擊率。因此首次射擊能使用此機率；某些自動武器會保留已擲出的暴擊連發結果，不能把「機率加成移除」解讀為後續所有子彈必定非暴擊。
- 遠程／近戰增益各在離開 slot_secondary／slot_primary 時結束。近戰 buff max_stacks=1、duration=10，melee_attack_speed=.15、dodge_speed_multiplier=1.1、dodge_distance_modifier=.1。
- 動作速度加成與同階段速度修正相加；算例假定沒有其他速度加成，動作時間以原時間除以速度倍率。閃避距離原值 3 公尺則為 3×1.1=3.3 公尺。

## 原始碼依據

- [scripts/settings/talent/talent_settings_veteran.lua，第 46–50 行](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/talent/talent_settings_veteran.lua#L46-L50)
- [scripts/settings/ability/archetype_talents/talents/veteran_talents.lua，第 2717–2825 行](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/veteran_talents.lua#L2717-L2825)
- [scripts/settings/buff/archetype_buff_templates/veteran_buff_templates.lua，第 2912–3045 行](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/veteran_buff_templates.lua#L2912-L3045)
- [scripts/settings/buff/archetype_buff_templates/veteran_buff_templates.lua，第 3082–3129 行](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/veteran_buff_templates.lua#L3082-L3129)
- [scripts/settings/buff/archetype_buff_templates/veteran_buff_templates.lua，第 3145–3192 行](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/veteran_buff_templates.lua#L3145-L3192)
- [scripts/settings/buff/buff_settings.lua，第 799–804 行](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/buff_settings.lua#L799-L804)
- [scripts/settings/buff/buff_settings.lua，第 863–865 行](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/buff_settings.lua#L863-L865)
- [scripts/settings/buff/buff_settings.lua，第 939–961 行](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/buff_settings.lua#L939-L961)
- [scripts/extension_systems/buff/buffs/buff.lua，第 404–410 行](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/buff/buffs/buff.lua#L404-L410)
- [scripts/extension_systems/buff/buffs/buff.lua，第 689–747 行](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/buff/buffs/buff.lua#L689-L747)
- [scripts/utilities/attack/critical_strike.lua，第 13–39 行](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/attack/critical_strike.lua#L13-L39)
- [scripts/extension_systems/weapon/actions/action_shoot.lua，第 149–159 行](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/weapon/actions/action_shoot.lua#L149-L159)
- [scripts/extension_systems/weapon/actions/action_shoot.lua，第 594–615 行](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/weapon/actions/action_shoot.lua#L594-L615)
- [scripts/extension_systems/weapon/actions/action_shoot.lua，第 997–1068 行](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/weapon/actions/action_shoot.lua#L997-L1068)
- [scripts/extension_systems/weapon/actions/action_shoot_hit_scan.lua，第 150–219 行](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/weapon/actions/action_shoot_hit_scan.lua#L150-L219)
- [scripts/extension_systems/buff/buff_extension_base.lua，第 412–415 行](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/buff/buff_extension_base.lua#L412-L415)
- [scripts/utilities/action/action_handler.lua，第 356–429 行](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/action/action_handler.lua#L356-L429)

## 算例條件與待確認事項

- 玩家頁算例按列出的基礎值及條件計算；未列出的加成、護甲、部位、距離及遊戲更新誤差不納入。
- 靜態推導不等同遊戲實測；名稱識別鍵與既有譯名的對應仍待使用者確認。
- 個別武器的暴擊連發長度與切換當影格的事件順序，需以該武器遊戲實測補驗；上述算例計算的是暴擊判定機率，不保證一輪多發射擊全數重新判定。

## 遊戲本體繁中對照

- 文字來源：本機Steam Build `25606770`，`content/localization/ui`，2026-10-01擷取；不是MOD文字。
- 語系鍵：`loc_talent_veteran_weapon_switch_new_description`；hash：`4ead394a`；繁中entry_index：`5119`；英文entry_index：`5119`。以資源＋hash配對，已確認兩語系此hash各一筆。
- 繁中問題片段：「每層效果使你的下一次射擊獲得」；同版英文對照片段：`as well as {ranged_crit_chance:%s} Ranged Critical Hit Chance on your next shot`。引文保留原始占位符，未冒充遊戲畫面的最終數字。
- 判定：**明確繁中描述錯誤**。修飾範圍錯誤：英文next shot限定爆擊率，繁中把三項效果一併限定為下一次射擊。實作只有conditional crit讀取shot；attack/reload為常駐stat_buffs，受buff本身期間限制。
- 本項由同一份擷取資源的中英語義差異定位，再核對固定公開版本的格式／機制；不單憑文字與實作的差異判定繁中錯譯。完整文字只留本機，Git僅保存必要短引文與追溯資料。
- [完整比對範圍與版本限制](LOCALIZATION_COMPARISON.md)。

- [公開依據：scripts/settings/buff/archetype_buff_templates/veteran_buff_templates.lua，第3082–3129行](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/veteran_buff_templates.lua#L3082-L3129)
- [公開依據：scripts/settings/talent/talent_settings_veteran.lua，第46–50行](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/talent/talent_settings_veteran.lua#L46-L50)

## 圖示來源

[原圖](https://gameslantern.com/storage/sites/darktide/exporter/talents/veteran/keystone/veteran_weapon_switch_passive.webp)｜[圖片來源 Issue](https://github.com/SyuanTsai/Media-Assets/issues/6#issuecomment-5922929234)｜[圖片附件](https://github.com/user-attachments/assets/80917bab-ea62-4a9a-a0fa-f9b443ee1b0b)

圖片僅供技能辨識，不作機制證據。

