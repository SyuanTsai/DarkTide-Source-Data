# 法務官手榴彈(Arbites Grenade)：原始碼依據

[English](en/adamant_grenade_improved.md)

[返回玩家說明](README.md#adamant_grenade_improved)｜[技術索引](SOURCE_INDEX.md)｜[原文比對](LOCALIZATION_COMPARISON.md#adamant_grenade_improved)

- 來源版本：Release 1.13.1；固定 SHA：`7e662fcda16219d775b84af50322be2e9cd9d62e`。
- 天賦：`adamant_grenade_improved`；名稱鍵：`loc_talent_ability_adamant_grenade_improved`；描述鍵：`loc_talent_ability_adamant_grenade_improved_description`。
- 節點：`node_44cf93b1-fbc8-48a4-ba29-40c84aa6051f`；分類：閃擊；每節點一點。
- 證據程度：原始碼確認／程式推導；以下算例屬程式推導，未進行遊戲內測試。

## 原始碼確認與程式推導

- 天賦引用 PlayerAbilities.adamant_grenade_improved；ability.max_charges 讀取 improved_charges=4，only_uses_charges=true 且沒有設定 cooldown，因此本能力本身沒有按時間自動恢復充能。基礎能力 adamant_grenade 的 base_charges=3。
- 兩個能力使用同一 projectile_templates.adamant_grenade。投射物 fuse_time=2、impact_fuse_time=0、impact_triggered=true；爆炸威力設定為 500，半徑 10、近距離半徑 2.5 並有傷害衰減。
- adamant_grenade_improved 另掛 adamant_grenade_cluster_kills_tracking_buff。伺服器只接受 close_adamant_grenade 或 adamant_grenade 的擊殺事件；兩次擊殺間隔大於 0.25 秒即重設群體計數，累計到 3 才記錄私人統計事件，並沒有恢復 ability resource 的呼叫。
- 半徑與傷害強化是獨立節點 adamant_grenade_increased_radius / adamant_grenade_increased_damage；未選它們時不把 +50% 套入本項數值。
- ProjectileDamageExtension的impact_triggered分支在碰撞後將引信設為impact_fuse_time=0；不能將fuse_time2直接寫成投出2秒就爆炸。未撞擊保險流程先等待max_lifetime=4，再開始2秒引信，約6秒，另受更新與延遲補償影響。
- 三殺tracking只記錄統計，不給戰鬥增益，故不列玩家主文；它以相鄰擊殺間隔.25秒連續累計，也不保證同一枚手雷。
- 強化版只有充能3→4，沒有套用settings中damage_increase/radius_increase欄位；不把未消費的50%當成增傷。

## 原始碼依據

- [scripts/settings/ability/archetype_talents/talents/adamant_talents.lua：403–436](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/adamant_talents.lua#L403-L436)
- [scripts/settings/talent/talent_settings_adamant.lua：95–100](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/talent/talent_settings_adamant.lua#L95-L100)
- [scripts/settings/ability/player_abilities/abilities/adamant_abilities.lua：93–116](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/player_abilities/abilities/adamant_abilities.lua#L93-L116)
- [scripts/settings/projectile/player_projectile_templates.lua：1053–1082](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/projectile/player_projectile_templates.lua#L1053-L1082)
- [scripts/settings/damage/explosion_templates/player_grenade_explosion_templates.lua：377–403](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/damage/explosion_templates/player_grenade_explosion_templates.lua#L377-L403)
- [scripts/settings/buff/archetype_buff_templates/adamant_buff_templates.lua：384–423](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/adamant_buff_templates.lua#L384-L423)
- [scripts/extension_systems/projectile_damage/projectile_damage_extension.lua：232–350](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/projectile_damage/projectile_damage_extension.lua#L232-L350)
- [scripts/settings/damage/damage_profiles/demolitions_damage_profile_templates.lua：691–814](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/damage/damage_profiles/demolitions_damage_profile_templates.lua#L691-L814)
- [scripts/settings/buff/archetype_buff_templates/adamant_buff_templates.lua：2155–2233](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/adamant_buff_templates.lua#L2155-L2233)
- [scripts/extension_systems/ability/player_unit_ability_extension.lua：839–869](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/ability/player_unit_ability_extension.lua#L839-L869)
- [scripts/extension_systems/weapon/weapon_system.lua：270–329](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/weapon/weapon_system.lua#L270-L329)
- [scripts/settings/ability/archetype_talents/talents/adamant_talents.lua：403–436](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/adamant_talents.lua#L403-L436)
- [scripts/ui/views/talent_builder_view/layouts/adamant_tree.lua：227–266](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/ui/views/talent_builder_view/layouts/adamant_tree.lua#L227-L266)

## 算例條件與待確認事項

- **傷害算例**：只計爆炸中央的護甲階段，基準傷害 1,500 對無甲為 1,500 × 1 = 1,500，對防彈護甲為 1,500 × 0.5 = 750，對硬殼護甲為 1,500 × 0.2 = 300。實際還需計入命中部位、爆炸遮蔽及其他增減傷。
- 爆炸算例是護甲階段靜態基準，不是遊戲內實測；碰撞引信0仍受固定更新與延遲補償影響。
- 遊戲原文：1.13.1／Steam Build 25606770 的 ui 資源。描述與實作的差異仍需遊戲內核對；省略細節不列為繁中誤譯。

## 原文核對

- 對應 hash：`6a2ea9db`。
- 同源繁中與英文均描述手雷及強化後攜帶上限，未見中英矛盾；碰撞引爆與保險引信的精確流程另按固定來源補充。

## 圖示來源

[原圖](https://gameslantern.com/storage/sites/darktide/exporter/talents/adamant/tactical/adamant_grenade_improved.webp)｜[圖片來源 Issue](https://github.com/SyuanTsai/Media-Assets/issues/11#issuecomment-5932554216)｜[圖片附件](https://github.com/user-attachments/assets/9f134d52-bce2-4365-b74c-f93550febf29)

圖片僅供技能辨識，不作機制證據。

