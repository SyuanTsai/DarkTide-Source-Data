# 粉碎(Pulverise)：原始碼依據

[English](en/ogryn_charge_applies_bleed.md)

[返回玩家說明](README.md#ogryn_charge_applies_bleed)｜[技術索引](SOURCE_INDEX.md)｜[原文比對](LOCALIZATION_COMPARISON.md#ogryn_charge_applies_bleed)

- 來源版本：Release 1.13.1；固定 SHA：`7e662fcda16219d775b84af50322be2e9cd9d62e`。
- 天賦：`ogryn_charge_applies_bleed`；名稱鍵：`loc_talent_ogryn_bleed_on_bull_rush`；描述鍵：`loc_talent_ogryn_bleed_on_bull_rush_desc`。
- 節點：`node_c8dc2052-517d-42cf-84e5-ff8161b2f99f`；分類：能力；每節點一點。
- 證據程度：原始碼確認／程式推導；以下算例屬程式推導，未進行遊戲內測試。

## 原始碼確認與程式推導

- 天賦設定 combat_ability_1.stacks=5；不屈不撓的天賦被動掛載 ogryn_charge_bleed，衝鋒模板只為 damage_type=ogryn_lunge 的命中觸發。
- ogryn_charge_bleed 在每次 lunge_start 清空 hit_units；存活目標第一次被命中時加入5層 bleed，之後將該目標記入集合。
- 通用 bleed 為 interval_buff，duration=1.5、interval=0.5、interval_stack_removal=true、max_stacks=16；每跳以 n=current_stack_count 計算 power_level=500×(n/16)^2×(3−2n/16)，並呼叫 DamageProfileTemplates.bleeding。計時期滿後 interval_buff 仍執行傷害，且每個 interval 移除一層；疊層會重設計時。
- DamageProfileTemplates.bleeding 的 attack power_distribution=175，armor damage modifier依目標護甲類型變化，因此 power_level 不是固定實際傷害。
- 單跳生命傷害例由power輸入再乘damage_output的0.002與profile attack、護甲倍率：流血175×.5=87.5，燃燒400×1.5=600；均再乘smoothstep(n/max)。不是直接把power_level當生命傷害。

## 原始碼依據

- [scripts/settings/ability/archetype_talents/talents/ogryn_talents.lua：1373–1392](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/ogryn_talents.lua#L1373-L1392)
- [scripts/settings/talent/talent_settings_ogryn.lua：380–384](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/talent/talent_settings_ogryn.lua#L380-L384)
- [scripts/settings/ability/player_abilities/abilities/ogryn_abilities.lua：59–74](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/player_abilities/abilities/ogryn_abilities.lua#L59-L74)
- [scripts/settings/lunge/ogryn_lunge_templates.lua：14–64](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/lunge/ogryn_lunge_templates.lua#L14-L64)
- [scripts/settings/lunge/ogryn_lunge_templates.lua：105–108](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/lunge/ogryn_lunge_templates.lua#L105-L108)
- [scripts/settings/buff/archetype_buff_templates/ogryn_buff_templates.lua：910–952](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/ogryn_buff_templates.lua#L910-L952)
- [scripts/settings/buff/weapon_buff_templates.lua：235–275](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/weapon_buff_templates.lua#L235-L275)
- [scripts/extension_systems/buff/buffs/interval_buff.lua：21–64](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/buff/buffs/interval_buff.lua#L21-L64)
- [scripts/settings/damage/damage_profiles/buff_damage_profile_templates.lua：443–465](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/damage/damage_profiles/buff_damage_profile_templates.lua#L443-L465)
- [scripts/extension_systems/buff/buffs/interval_buff.lua：1–120](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/buff/buffs/interval_buff.lua#L1-L120)
- [scripts/settings/buff/weapon_buff_templates.lua：50–78](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/weapon_buff_templates.lua#L50-L78)
- [scripts/settings/buff/weapon_buff_templates.lua：235–259](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/weapon_buff_templates.lua#L235-L259)
- [scripts/settings/damage/damage_profiles/buff_damage_profile_templates.lua：19–68](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/damage/damage_profiles/buff_damage_profile_templates.lua#L19-L68)
- [scripts/settings/damage/damage_profiles/buff_damage_profile_templates.lua：301–328](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/damage/damage_profiles/buff_damage_profile_templates.lua#L301-L328)
- [scripts/settings/damage/damage_profiles/buff_damage_profile_templates.lua：443–465](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/damage/damage_profiles/buff_damage_profile_templates.lua#L443-L465)
- [scripts/settings/damage/power_level_settings.lua：7–25](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/damage/power_level_settings.lua#L7-L25)
- [scripts/utilities/attack/damage_profile.lua：386–445](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/attack/damage_profile.lua#L386-L445)
- [scripts/settings/ability/archetype_talents/talents/ogryn_talents.lua：1373–1392](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/ogryn_talents.lua#L1373-L1392)
- [scripts/ui/views/talent_builder_view/layouts/ogryn_tree.lua：1267–1292](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/ui/views/talent_builder_view/layouts/ogryn_tree.lua#L1267-L1292)

## 算例條件與待確認事項

- **傷害算例**：只計無護甲且沒有其他修正，5 層每次流血傷害為 87.5 × (5 ÷ 16)² × [3 − 2 × (5 ÷ 16)] ≈ 20.29 點；8 層為 43.75 點。流血層數與傷害不是單純等比例增加。
- 流血可由其他來源疊加，目標總層數最多16；中途再次施加會重設1.5秒計時。
- 約4秒的清空時間依0.5秒間隔與遊戲更新刻點計算；新流血會重設計時。
- 遊戲原文：1.13.1／Steam Build 25606770 的 ui 資源。描述與實作的差異仍需遊戲內核對；省略細節不列為繁中誤譯。

## 原文核對

- 對應 hash：`5f1e4b89`。
- 繁中原文「被衝鋒命中的敵人疊加5層流血」與英文原文「對衝鋒命中的敵人施加5層流血」指向同一觸發與層數；原文沒有說每個目標只觸發一次或傷害刻度，這些是實作補充而非翻譯矛盾。此配對的文字與公開原始碼皆為1.13.1；差異待遊戲內核對。

## 圖示來源

[原圖](https://gameslantern.com/storage/sites/darktide/exporter/talents/ogryn/ability_modifier/ogryn_charge_applies_bleed.webp)｜[圖片來源 Issue](https://github.com/SyuanTsai/Media-Assets/issues/10#issuecomment-5931383354)｜[圖片附件](https://github.com/user-attachments/assets/9194fb70-c794-460d-af2a-068ae6c4fd31)

圖片僅供技能辨識，不作機制證據。

