# 蠻牛衝撞(Bull Rush)：原始碼依據

[English](en/ogryn_charge.md)

[返回基礎效果](BASE_EFFECTS.md#ogryn_charge)｜[技術索引](SOURCE_INDEX.md)

- 固定來源：Release 1.13.1／`7e662fcda16219d775b84af50322be2e9cd9d62e`。
- 基礎天賦：`ogryn_charge`；不占可選天賦點數。
- 證據程度：原始碼確認與程式推導，未進行遊戲內測試。

## 原始碼確認與程式推導

- 能力掛載 ogryn_charge，冷卻與cost均25、regen1；lunge distance12，停止護甲super_armor/void_shield/resistant。
- charge_speed_on_lunge訂閱on_lunge_end，5秒melee_attack_speed與movement_speed各.25；未在衝鋒開始就啟動這5秒。
- 基礎被動另掛ogryn_base_lunge_toughness_and_damage_resistance，is_lunging時damage_taken_multiplier=.75且melee_heavy_damage=.5。衝鋒本身的impact/finish攻擊傷害0，不能把50%重擊欄位當衝撞傷害。

## 原始碼依據

- [固定版本來源](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/player_abilities/abilities/ogryn_abilities.lua#L8-L24)
- [固定版本來源](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/talent/talent_settings_ogryn.lua#L285-L310)
- [固定版本來源](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/ogryn_buff_templates.lua#L893-L909)
- [固定版本來源](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/ogryn_buff_templates.lua#L987-L996)
- [固定版本來源](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/lunge/ogryn_lunge_templates.lua#L14-L94)
- [固定版本來源](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/damage/damage_profiles/archetypes/ogryn_damage_profile_templates.lua#L54-L156)
- [固定版本來源](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/ogryn_talents.lua#L34-L72)
- [固定版本來源](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/archetype/archetypes/ogryn_archetype.lua#L50-L74)

## 算例與待確認事項

- 未把is_dodging標記直接換算成所有閃避被動必定同時生效；各被動仍受其實際條件約束。
- 本機文字 Build 25606770 與固定公開來源版本對應為1.13.1。
