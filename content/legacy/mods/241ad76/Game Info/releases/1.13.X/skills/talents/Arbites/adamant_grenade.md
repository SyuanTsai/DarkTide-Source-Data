# 法務官手榴彈(Arbites Grenade)：原始碼依據

[English](en/adamant_grenade.md)

[返回基礎效果](BASE_EFFECTS.md#adamant_grenade)｜[技術索引](SOURCE_INDEX.md)

- 固定來源：Release 1.13.1／`7e662fcda16219d775b84af50322be2e9cd9d62e`。
- 基礎天賦：`adamant_grenade`；不占可選天賦點數。
- 證據程度：原始碼確認與程式推導，未進行遊戲內測試。

## 原始碼確認與程式推導

- adamant_archetype.base_talents 將 adamant_grenade 配在手雷欄位。能力設定 only_uses_charges=true，max_charges 讀取 base_charges=3，並無固定 cooldown 欄位。
- adamant_grenade 投射物設定 fuse_time=2、impact_fuse_time=0、impact_triggered=true，爆炸採 ExplosionTemplates.adamant_grenade；爆炸設定 radius=10、close_radius=2.5、static_power_level=500，並開啟傷害衰減。
- 直接碰撞另引用 adamant_grenade_impact 傷害設定；爆炸傷害使用 adamant_grenade 與 close_adamant_grenade profile。近距離外的最終生命傷害不能只用 500 power 或半徑推成固定傷害數字。
- ProjectileDamageExtension的impact_triggered分支在碰撞後將引信設為impact_fuse_time=0；不能將fuse_time2直接寫成投出2秒就爆炸。未撞擊保險流程先等待max_lifetime=4，再開始2秒引信，約6秒，另受更新與延遲補償影響。
- 強化版只有充能3→4，沒有套用settings中damage_increase/radius_increase欄位；不把未消費的50%當成增傷。

## 原始碼依據

- [固定版本來源](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/archetype/archetypes/adamant_archetype.lua#L56-L59)
- [固定版本來源](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/adamant_talents.lua#L377-L402)
- [固定版本來源](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/talent/talent_settings_adamant.lua#L95-L100)
- [固定版本來源](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/player_abilities/abilities/adamant_abilities.lua#L93-L104)
- [固定版本來源](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/projectile/player_projectile_templates.lua#L1053-L1068)
- [固定版本來源](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/damage/explosion_templates/player_grenade_explosion_templates.lua#L377-L396)
- [固定版本來源](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/damage/damage_profiles/grenade_damage_profile_templates.lua#L425-L434)
- [固定版本來源](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/damage/damage_profiles/demolitions_damage_profile_templates.lua#L691-L768)
- [固定版本來源](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/projectile_damage/projectile_damage_extension.lua#L232-L350)
- [固定版本來源](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/damage/damage_profiles/demolitions_damage_profile_templates.lua#L691-L814)
- [固定版本來源](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/weapon/weapon_system.lua#L270-L329)

## 算例與待確認事項

- **傷害算例**：只計爆炸中央的護甲階段，基準傷害 1,500 對無甲為 1,500 × 1 = 1,500，對防彈護甲為 1,500 × 0.5 = 750，對硬殼護甲為 1,500 × 0.2 = 300。實際還需計入命中部位、爆炸遮蔽及其他增減傷。
- 無撞擊保險引信需先等 4 秒再計 2 秒，約投出 6 秒後引爆；更新與延遲補償仍會影響精確時點。
- 10 公尺是爆炸半徑設定，不保證半徑邊緣仍造成固定可見傷害；來源開啟傷害衰減。
- 傷害還會受近距離/外層 profile、護甲、命中部位及其他修正影響；此稿不將 power level 500 誤作 500 點生命傷害。
- 強化版直接增加攜帶上限；未被生效流程讀取的傷害／半徑設定不計入。
- 本機文字 Build 25606770 與固定公開來源版本對應為1.13.1。
