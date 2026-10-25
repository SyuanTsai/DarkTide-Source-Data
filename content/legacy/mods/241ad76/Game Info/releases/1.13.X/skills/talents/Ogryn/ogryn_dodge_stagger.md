# 滾吧你！(Outta My Way!)：原始碼依據

[English](en/ogryn_dodge_stagger.md)

[返回基礎效果](BASE_EFFECTS.md#ogryn_dodge_stagger)｜[技術索引](SOURCE_INDEX.md)

- 固定來源：Release 1.13.1／`7e662fcda16219d775b84af50322be2e9cd9d62e`。
- 基礎天賦：`ogryn_dodge_stagger`；不占可選天賦點數。
- 證據程度：原始碼確認與程式推導，未進行遊戲內測試。

## 原始碼確認與程式推導

- dodge_update在玩家位置+dodge_direction做sphere radius1.5重疊檢查；排除elite/special與非human_sized，每次dodge_start清空命中集合。
- power_level=500/(consecutive_dodges*2-1)*(4-hit_distance)。ogryn_dodge_impact的attack0、impact.5；威力還要套踉蹌曲線與目標門檻。

## 原始碼依據

- [固定版本來源](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/ogryn_buff_templates.lua#L3064-L3098)
- [固定版本來源](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/ogryn_buff_templates.lua#L3107-L3146)
- [固定版本來源](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/damage/damage_profiles/common_damage_profile_templates.lua#L1007-L1043)
- [固定版本來源](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/ogryn_talents.lua#L2212-L2221)
- [固定版本來源](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/archetype/archetypes/ogryn_archetype.lua#L50-L74)

## 算例與待確認事項

- **強度算例**：固定敵人距離 2 公尺，第一次閃避的撞擊威力為 500 × (4 − 2) ÷ (2 × 1 − 1) = 1000；第二次為 1000 ÷ 3 ≈ 333.3。這是交給踉蹌公式的威力，不是傷害點數。
- 連續閃避計數依角色閃避系統重置；公式示例固定距離與計數，不推論所有敵人必定倒地。
- 本機文字 Build 25606770 與固定公開來源版本對應為1.13.1。
