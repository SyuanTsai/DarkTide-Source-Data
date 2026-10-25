# 破片手雷(Frag Grenade)

[English](en/veteran_frag_grenade.md)

[返回基礎效果](BASE_EFFECTS.md)｜[技能樹索引](SOURCE_INDEX.md)

## 運作方式

- 可攜帶 3 顆破片手雷，投出後約 1.7 秒引爆。爆炸半徑 10 公尺，中央 2 公尺為高傷害區，外圍傷害逐漸降低。
- 未計其他加成與部位修正，中央爆炸對無甲目標的基礎傷害為 500；對甲殼護甲的倍率為 0.2，因此為 `500 × 0.2 = 100 點`。
- 選擇粉碎者破片手雷會為合格爆炸命中加上流血；穿甲手雷或煙霧手雷則會替換目前的手雷種類。基礎破片手雷本身沒有流血效果。

## 原始碼確認與程式推導

- 固定 SHA：`7e662fcda16219d775b84af50322be2e9cd9d62e`。基礎天賦 `veteran_frag_grenade`；名稱鍵 `loc_ability_frag_grenade`；描述鍵 `loc_ability_frag_grenade_description`。
- 由職業基礎清單啟用，不是77個技能樹節點之外的額外可選節點。

- 職業 base_talents 指向 veteran_frag_grenade；player_ability 指向 grenade_frag item，only_uses_charges=true、max_charges=3。
- Projectile fuse_time=1.7，ExplosionTemplates.frag_grenade 的 static_power_level=500、close_radius=2、radius=10、damage_falloff=true。
- close_frag_grenade 的 attack power_distribution=500，unarmored ADM=1、super_armor=.2。以 default power500、damage output20/max power10000換算，歸一化倍率=500×20/10000=1；中心基礎傷害500×1×ADM。未套任何其他增傷／撕裂／部位修正。
- grenade_apply_bleed 是另選 passive，不是此基礎能力內建；穿甲與煙霧天賦另換 player_ability。

## 原始碼依據

- [scripts/settings/archetype/archetypes/veteran_archetype.lua，第 50–74 行](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/archetype/archetypes/veteran_archetype.lua#L50-L74)
- [scripts/settings/ability/archetype_talents/talents/veteran_talents.lua，第 33–42 行](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/veteran_talents.lua#L33-L42)
- [scripts/settings/ability/player_abilities/abilities/veteran_abilities.lua，第 27–62 行](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/player_abilities/abilities/veteran_abilities.lua#L27-L62)
- [scripts/settings/talent/talent_settings_veteran.lua，第 102–104 行](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/talent/talent_settings_veteran.lua#L102-L104)
- [scripts/settings/projectile/player_projectile_templates.lua，第 258–271 行](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/projectile/player_projectile_templates.lua#L258-L271)
- [scripts/settings/damage/explosion_templates/player_grenade_explosion_templates.lua，第 25–51 行](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/damage/explosion_templates/player_grenade_explosion_templates.lua#L25-L51)
- [scripts/settings/damage/damage_profiles/demolitions_damage_profile_templates.lua，第 213–258 行](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/damage/damage_profiles/demolitions_damage_profile_templates.lua#L213-L258)
- [scripts/settings/damage/power_level_settings.lua，第 7–29 行](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/damage/power_level_settings.lua#L7-L29)
- [scripts/utilities/attack/power_level.lua，第 63–94 行](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/attack/power_level.lua#L63-L94)
- [scripts/settings/ability/archetype_talents/talents/veteran_talents.lua，第 1021–1074 行](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/veteran_talents.lua#L1021-L1074)

## 圖示來源

圖片僅供技能辨識，不作機制證據。

