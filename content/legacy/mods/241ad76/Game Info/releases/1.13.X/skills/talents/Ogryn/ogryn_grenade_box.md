# 巨量傷害盒(Big Box of Hurt)：原始碼依據

[English](en/ogryn_grenade_box.md)

[返回基礎效果](BASE_EFFECTS.md#ogryn_grenade_box)｜[技術索引](SOURCE_INDEX.md)

- 固定來源：Release 1.13.1／`7e662fcda16219d775b84af50322be2e9cd9d62e`。
- 基礎天賦：`ogryn_grenade_box`；不占可選天賦點數。
- 證據程度：原始碼確認與程式推導，未進行遊戲內測試。

## 原始碼確認與程式推導

- 基礎能力max_charges3、only_uses_charges=true，投射物ogryn_grenade_box使用ogryn_grenade_box_impact，attack1850。
- 雖然基礎投射物也宣告conditional_cluster，ProjectileDamageExtension只在擁有ogryn_basic_box_spawns_cluster時啟用；目前職業基礎清單沒有此關鍵字。
- 此處限一般基礎配置；Hordes 的 hordes_buff_ogryn_basic_box_spawns_cluster 可另外授予 ogryn_basic_box_spawns_cluster，啟用基礎箱體的 conditional_cluster。不能將一般基礎配置的結論套用到所有模式。

## 原始碼依據

- [固定版本來源](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/player_abilities/abilities/ogryn_abilities.lua#L140-L163)
- [固定版本來源](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/projectile/player_projectile_templates.lua#L470-L483)
- [固定版本來源](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/projectile/player_projectile_templates.lua#L1043-L1043)
- [固定版本來源](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/damage/damage_profiles/grenade_damage_profile_templates.lua#L103-L180)
- [固定版本來源](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/projectile_damage/projectile_damage_extension.lua#L683-L698)
- [固定版本來源](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/ogryn_talents.lua#L200-L209)
- [固定版本來源](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/archetype/archetypes/ogryn_archetype.lua#L50-L74)
- [固定版本來源](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/hordes_buffs/hordes_legendary_buff_templates/hordes_legendary_ogryn_buff_templates.lua#L31-L40)

## 算例與待確認事項

- **傷害算例**：只計箱體直接命中、未暴擊也未命中弱點，沒有其他加成時，無護甲目標為 1850 × 1 = 1850 點；甲殼護甲為 1850 × 0.15 = 277.5 點。
- 傷害例不含部位、護甲額外減傷、暴擊、弱點與其他天賦；未做遊戲內傷害測量。
- 本機文字 Build 25606770 與固定公開來源版本對應為1.13.1。
