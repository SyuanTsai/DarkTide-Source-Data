# 眩暈風暴手雷(Stunstorm Grenade)：原始碼依據

[English](en/zealot_improved_stun_grenade.md)

[返回玩家說明](README.md#zealot_improved_stun_grenade)｜[技術索引](SOURCE_INDEX.md)｜[原文比對](LOCALIZATION_COMPARISON.md#zealot_improved_stun_grenade)

- 來源版本：Release 1.13.1；固定 SHA：`7e662fcda16219d775b84af50322be2e9cd9d62e`。
- 天賦：`zealot_improved_stun_grenade`；名稱鍵：`loc_zealot_improved_stun_grenade`；描述鍵：`loc_zealot_improved_stun_grenade_desc`。
- 節點：`node_efeefa9a-f503-46e7-afae-a61d76ad3a7e`；分類：閃擊；每節點一點。
- 證據程度：原始碼確認／程式推導；以下算例屬程式推導，未進行遊戲內測試。

## 原始碼確認與程式推導

- Talent definition 的 format_values.radius 讀取 stat_buffs.explosion_radius_modifier_shock；buff 設定把該 stat 設為 0.5。
- shock_grenade explosion template 的 radius=8、close_radius=2、min_radius=4、min_close_radius=2。Explosion.apply_stat_radius_modifier 以原值 + (stat_buff−1) 後乘半徑，故倍率為 1.5；最大半徑 12、近距半徑 3、最小半徑 6、最小近距半徑 3。
- shock grenade 投射物引信為 1.5 秒並使用 shock_grenade explosion template；能力上限從 talent_settings_2.grenade.max_charges 讀取，設定值為 3。
- 命中附加 shock_grenade_interval：duration=8、max_stacks=1、max_stacks_cap=1、重設持續時間；interval 設定範圍為 0.3–0.8 秒，週期傷害為 electrocution。
- 電擊週期以 DEFAULT_POWER_LEVEL=500、attack=8，無護甲 ADM=.5，推得隔離傷害 20 × (500 × 8 / 10000) × .5=4；防彈 ADM=1 時為 8。impact=100 用於踉蹌計算，不能混入生命傷害。

## 原始碼依據

- [scripts/settings/ability/archetype_talents/talents/zealot_talents.lua：64–91](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/zealot_talents.lua#L64-L91)
- [scripts/settings/ability/player_abilities/abilities/zealot_abilities.lua：94–105](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/player_abilities/abilities/zealot_abilities.lua#L94-L105)
- [scripts/settings/talent/talent_settings_zealot.lua：319–328](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/talent/talent_settings_zealot.lua#L319-L328)
- [scripts/settings/buff/archetype_buff_templates/zealot_buff_templates.lua：513–519](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/zealot_buff_templates.lua#L513-L519)
- [scripts/settings/projectile/player_projectile_templates.lua：413–426](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/projectile/player_projectile_templates.lua#L413-L426)
- [scripts/settings/damage/explosion_templates/player_grenade_explosion_templates.lua：66–101](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/damage/explosion_templates/player_grenade_explosion_templates.lua#L66-L101)
- [scripts/utilities/attack/explosion.lua：484–502](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/attack/explosion.lua#L484-L502)
- [scripts/settings/buff/weapon_buff_templates.lua：413–474](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/weapon_buff_templates.lua#L413-L474)
- [scripts/settings/damage/damage_profiles/demolitions_damage_profile_templates.lua：648–690](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/damage/damage_profiles/demolitions_damage_profile_templates.lua#L648-L690)
- [scripts/utilities/attack/explosion.lua：429–482](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/attack/explosion.lua#L429-L482)
- [scripts/settings/damage/power_level_settings.lua：7–25](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/damage/power_level_settings.lua#L7-L25)
- [scripts/utilities/attack/power_level.lua：21–23](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/attack/power_level.lua#L21-L23)
- [scripts/utilities/attack/power_level.lua：63–91](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/attack/power_level.lua#L63-L91)
- [scripts/utilities/attack/damage_profile.lua：29–80](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/attack/damage_profile.lua#L29-L80)
- [scripts/utilities/attack/damage_calculation.lua：219–227](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/attack/damage_calculation.lua#L219-L227)
- [scripts/settings/ability/archetype_talents/talents/zealot_talents.lua：64–91](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/zealot_talents.lua#L64-L91)
- [scripts/ui/views/talent_builder_view/layouts/zealot_tree.lua：1400–1425](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/ui/views/talent_builder_view/layouts/zealot_tree.lua#L1400-L1425)

## 算例條件與待確認事項

- 只有此升級半徑修正時：最大半徑 8→12，近距半徑 2→3。
- 投出 1 枚後若剩 2 枚，該升級不會把剩餘充能提高到 3 以上；基礎上限仍為 3。
- 來源的 radius 數值是爆炸模板半徑設定；實際命中仍依爆炸系統的目標檢測及距離計算。
- 0.3–0.8 秒是週期 interval 的設定範圍，不是保證每個敵人每次都按固定相同間隔受傷。
- 被排除的是週期電擊傷害對已 staggered 的 Poxwalker Bomber；不要把此例外擴大寫成該敵人完全免疫手雷的爆炸或控制。
- 遊戲原文：1.13.1／Steam Build 25606770 的 ui 資源。描述與實作的差異仍需遊戲內核對；省略細節不列為繁中誤譯。

## 原文核對

- 對應 hash：`35fbc631`。
- Build 25606770 的繁中和英文都說明震撼手雷及其升級範圍，沒有可確認的明確譯錯。

## 圖示來源

[原圖](https://gameslantern.com/storage/sites/darktide/exporter/talents/zealot/tactical/zealot_improved_stun_grenade.webp)｜[圖片來源 Issue](https://github.com/SyuanTsai/Media-Assets/issues/8#issuecomment-5929289315)｜[圖片附件](https://github.com/user-attachments/assets/73777d2d-3727-47dc-8093-0d25ec6a3cfd)

圖片僅供技能辨識，不作機制證據。

