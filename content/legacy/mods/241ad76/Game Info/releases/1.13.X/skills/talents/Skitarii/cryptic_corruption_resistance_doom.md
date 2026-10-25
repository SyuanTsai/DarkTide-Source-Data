# 抗腐護符(Ablative Wards)：原始碼依據

[English](en/cryptic_corruption_resistance_doom.md)

[返回玩家說明](README.md#cryptic_corruption_resistance_doom)｜[技術索引](SOURCE_INDEX.md)｜[原文比對](LOCALIZATION_COMPARISON.md#cryptic_corruption_resistance_doom)

- 來源版本：Release 1.13.1；固定 SHA：`7e662fcda16219d775b84af50322be2e9cd9d62e`。
- 天賦：`cryptic_corruption_resistance_doom`；名稱鍵：`loc_talent_cryptic_corruption_resistance_doom`；描述鍵：`loc_talent_cryptic_corruption_resistance_doom_desc`。
- 節點：`node_a3520b96-61cf-4da2-9b35-e4846de85f5e`；分類：技能；每節點一點。
- 證據程度：原始碼確認／程式推導；以下算例屬程式推導，未進行遊戲內測試。

## 原始碼確認與程式推導

- interval20，corruption_taken_multiplier0.1；power=50*1*(1/0.1)=500。專用profile attack10、player armor1、damage output20/10000，得到500*10*20/10000=10，再permanent_damage_ratio1*0.1=1。
- Attack.execute採grimoire，ignore_toughness及skip_on_hit_proc；HEALTH_ALIVE且not requires_help才執行。不先假定免疫其他共用承傷修正。

## 原始碼依據

- [scripts/settings/damage/damage_profiles/archetypes/cryptic_damage_profile_templates.lua：836–878](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/damage/damage_profiles/archetypes/cryptic_damage_profile_templates.lua#L836-L878)
- [scripts/settings/damage/power_level_settings.lua：7–37](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/damage/power_level_settings.lua#L7-L37)
- [scripts/utilities/attack/damage_calculation.lua：219–227](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/attack/damage_calculation.lua#L219-L227)
- [scripts/utilities/attack/damage_taken_calculation.lua：356–380](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/attack/damage_taken_calculation.lua#L356-L380)
- [scripts/utilities/attack/power_level.lua：63–89](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/attack/power_level.lua#L63-L89)
- [scripts/settings/talent/talent_settings_cryptic.lua：569–573](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/talent/talent_settings_cryptic.lua#L569-L573)
- [scripts/settings/buff/archetype_buff_templates/cryptic_buff_templates.lua：3043–3091](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/cryptic_buff_templates.lua#L3043-L3091)
- [scripts/settings/ability/archetype_talents/talents/cryptic_talents.lua：2267–2293](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/cryptic_talents.lua#L2267-L2293)
- [scripts/ui/views/talent_builder_view/layouts/cryptic_tree.lua：2505–2529](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/ui/views/talent_builder_view/layouts/cryptic_tree.lua#L2505-L2529)

## 算例條件與待確認事項

- **代價算例**：沒有其他修正、全程存活且不需要救援時，60 秒會發生 3 次，共增加 3 點基準腐敗。倒地或被制伏等需要援助的狀態會跳過當次。
- 遊戲原文：1.13.1／Steam Build 25606770 的 ui 資源。描述與實作的差異仍需遊戲內核對；省略細節不列為繁中誤譯。

## 原文核對

- 對應 hash：`ed668132`。
- 中英文一致；補充代價先抵銷自身抗性、其他倍率仍可影響。

## 圖示來源

[原圖](https://gameslantern.com/storage/sites/darktide/exporter/talents/cryptic/default/cryptic_corruption_resistance_doom.webp)｜[圖片來源 Issue](https://github.com/SyuanTsai/Media-Assets/issues/13#issuecomment-5935656030)｜[圖片附件](https://github.com/user-attachments/assets/1c4ea759-440c-48dd-bc21-3bc8303683d5)

圖片僅供技能辨識，不作機制證據。

