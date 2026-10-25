# 強化電弧手榴彈(Enhanced Arc Grenades)：原始碼依據

[English](en/cryptic_arc_grenades_weapon_malfunction.md)

[返回玩家說明](README.md#cryptic_arc_grenades_weapon_malfunction)｜[技術索引](SOURCE_INDEX.md)｜[原文比對](LOCALIZATION_COMPARISON.md#cryptic_arc_grenades_weapon_malfunction)

- 來源版本：Release 1.13.1；固定 SHA：`7e662fcda16219d775b84af50322be2e9cd9d62e`。
- 天賦：`cryptic_arc_grenades_weapon_malfunction`；名稱鍵：`loc_talent_cryptic_arc_grenades_weapon_malfunction`；描述鍵：`loc_talent_cryptic_arc_grenades_weapon_malfunction_larger_desc`。
- 節點：`node_6810a9ea-3e9e-4b7f-8b19-576d774fea40`；分類：閃擊；每節點一點。
- 證據程度：原始碼確認／程式推導；以下算例屬程式推導，未進行遊戲內測試。

## 原始碼確認與程式推導

- 選取此天賦會常駐 cryptic_arc_grenades_weapon_malfunction server_only_proc_buff。其 on_hit 檢查目標仍存活，且 damage_profile.name 為 arc_grenade 或 arc_grenade_chain_jump_damage；符合時呼叫 MinionState.apply_weapon_malfunction。該函式需要目標有 buff extension，並且其 blackboard 存在 weapon_malfunction 元件，才會設定 is_malfunctioning=true、malfunctioning_time=t+breed-specific duration；沒有品種覆寫時使用12秒預設，程式內列出的覆寫值也為12秒。若該品種在 combat_vector_config 設定 should_switch_to_melee_under_weapon_malfunction，程式另會給予切換近戰的限制狀態。直接爆炸與連鎖電弧分別由 arc_grenade 與 arc_grenade_chain_jump_damage 傷害來源觸發；其他電擊傷害，例如力場本身的爆炸，不在此 proc 的傷害名稱檢查內。
- 範圍爆炸模板 `arc_grenade` 使用固定威力等級 500，並引用 `DamageProfileTemplates.arc_grenade`；傷害設定為 attack 0、impact 50，護甲對應值另列於傷害設定檔。每次跳弧則引用 `arc_grenade_chain_jump_damage`，設定 attack 0、impact 10，另掛 `arc_chain_damage`。鏈路節點加入時會套用 `arc_grenade_electrocution` 及目標標記；電擊模板為單層、duration 1.1、interval 0.2、套用時啟動間隔並使用 frame offset。伺服器端對仍存活且非「已被擊倒的瘟疫行者轟炸兵」執行 `cryptic_arc_grenade_shock_damage`，其設定由 `cryptic_discharge_shock_damage` 複製，將 `skip_on_hit_proc=true`，並設定 power distribution attack 600、impact 100；原始碼未單憑這些欄位直接給出任一敵人固定的生命扣除值，仍須考慮傷害結算、敵人、護甲與命中階段。武器故障模板的條件只接受存活目標且傷害設定檔名稱為 `arc_grenade` 或 `arc_grenade_chain_jump_damage`；共用 Attack 流程僅在 damage profile 未設 `skip_on_hit_proc` 時送出 on_hit，因此持續電擊的傷害命中不會觸發此故障效果。

## 原始碼依據

- [scripts/settings/ability/archetype_talents/talents/cryptic_talents.lua：962–984](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/cryptic_talents.lua#L962-L984)
- [scripts/settings/talent/talent_settings_cryptic.lua：185–194](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/talent/talent_settings_cryptic.lua#L185-L194)
- [scripts/settings/buff/archetype_buff_templates/cryptic_buff_templates.lua：1332–1356](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/cryptic_buff_templates.lua#L1332-L1356)
- [scripts/utilities/minion_state.lua：111–145](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/minion_state.lua#L111-L145)
- [scripts/settings/damage/explosion_templates/player_grenade_explosion_templates.lua：482–510](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/damage/explosion_templates/player_grenade_explosion_templates.lua#L482-L510)
- [scripts/settings/fx/effect_templates/arc_chain_lightning_source/arc_grenade_chain_lightning_source.lua：38–52](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/fx/effect_templates/arc_chain_lightning_source/arc_grenade_chain_lightning_source.lua#L38-L52)
- [scripts/settings/damage/explosion_templates/player_grenade_explosion_templates.lua：482–520](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/damage/explosion_templates/player_grenade_explosion_templates.lua#L482-L520)
- [scripts/settings/damage/damage_profiles/demolitions_damage_profile_templates.lua：1204–1250](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/damage/damage_profiles/demolitions_damage_profile_templates.lua#L1204-L1250)
- [scripts/settings/damage/damage_profiles/demolitions_damage_profile_templates.lua：1724–1819](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/damage/damage_profiles/demolitions_damage_profile_templates.lua#L1724-L1819)
- [scripts/settings/fx/effect_templates/arc_chain_lightning_source/arc_grenade_chain_lightning_source.lua：59–80](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/fx/effect_templates/arc_chain_lightning_source/arc_grenade_chain_lightning_source.lua#L59-L80)
- [scripts/settings/buff/weapon_buff_templates.lua：2689–2733](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/weapon_buff_templates.lua#L2689-L2733)
- [scripts/settings/buff/archetype_buff_templates/cryptic_buff_templates.lua：1332–1343](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/cryptic_buff_templates.lua#L1332-L1343)
- [scripts/utilities/attack/attack.lua：577–622](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/attack/attack.lua#L577-L622)
- [scripts/settings/ability/archetype_talents/talents/cryptic_talents.lua：962–984](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/cryptic_talents.lua#L962-L984)
- [scripts/ui/views/talent_builder_view/layouts/cryptic_tree.lua：1866–1888](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/ui/views/talent_builder_view/layouts/cryptic_tree.lua#L1866-L1888)

## 算例條件與待確認事項

- 遠程敵人於時間t被有效電弧命中後，故障到t+12秒；若在t+8秒再次命中，故障時間更新至t+20秒。
- 程式只對仍存活且有 weapon_malfunction blackboard 元件的敵人切換故障狀態；不支援該元件的目標不會因此停用武器。
- 故障是指定的遠程武器行為受限；部分敵人會轉而使用近戰攻擊。
- 這項天賦只檢查 arc_grenade 與 arc_grenade_chain_jump_damage，並非所有電擊傷害都能觸發。
- 傷害設定中的 attack／impact power distribution、威力等級及護甲修正不能直接視為對所有敵人固定扣除的生命值。若要給具名敵人的實際數值，需另追該敵人的護甲、命中部位及完整傷害結算。
- duration 1.1 與 interval 0.2 足以確認是重複結算，但不能只用兩數相除宣稱固定觸發次數；伺服器更新時序亦會影響最後次結算。
- 此補充說明電弧手榴彈的傷害結構及其對武器故障觸發的限制；不是遊戲內實測。
- 遊戲原文：1.13.1／Steam Build 25606770 的 ui 資源。描述與實作的差異仍需遊戲內核對；省略細節不列為繁中誤譯。

## 原文核對

- 對應 hash：`6282ba9c`。
- 繁中說明指出電弧手榴彈會令受影響的遠程敵人無法使用遠程武器12秒。固定來源確認直接爆炸及電弧連鎖命中可觸發武器故障，程式條件還要求目標具故障元件且存活；品種預設與目前列出的故障時長為12秒。Build 25606770 版本對應為1.13.1。

## 圖示來源

[原圖](https://gameslantern.com/storage/sites/darktide/exporter/talents/cryptic/tactical_modifier/cryptic_arc_grenades_weapon_malfunction.webp)｜[圖片來源 Issue](https://github.com/SyuanTsai/Media-Assets/issues/13#issuecomment-5935585681)｜[圖片附件](https://github.com/user-attachments/assets/501bab77-4618-480e-80e8-3abb022f6a68)

圖片僅供技能辨識，不作機制證據。

