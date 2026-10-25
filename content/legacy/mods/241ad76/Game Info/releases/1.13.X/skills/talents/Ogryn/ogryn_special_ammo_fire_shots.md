# 集火射擊(Light 'em Up)：原始碼依據

[English](en/ogryn_special_ammo_fire_shots.md)

[返回玩家說明](README.md#ogryn_special_ammo_fire_shots)｜[技術索引](SOURCE_INDEX.md)｜[原文比對](LOCALIZATION_COMPARISON.md#ogryn_special_ammo_fire_shots)

- 來源版本：Release 1.13.1；固定 SHA：`7e662fcda16219d775b84af50322be2e9cd9d62e`。
- 天賦：`ogryn_special_ammo_fire_shots`；名稱鍵：`loc_talent_ogryn_special_ammo_fire_shots`；描述鍵：`loc_talent_ogryn_special_ammo_fire_shots_new_desc`。
- 節點：`node_e4a4e00d-fd7d-49a8-a67e-7a09372c77da`；分類：能力；每節點一點。
- 證據程度：原始碼確認／程式推導；以下算例屬程式推導，未進行遊戲內測試。

## 原始碼確認與程式推導

- 天賦 special_rule 在 ogryn_ranged_stance.start_func 中加入 ogryn_ranged_stance_fire_shots；proc 僅接受遠程命中存活 minion，並於每次射擊對同一 attacked_unit 去重。
- 每次命中最多加入 talent_settings.combat_ability_1.num_stacks=4；總層數上限為 max_stacks=16。到上限時呼叫 refresh_duration_of_stacking_buff。
- 通用 flamer_assault 為 interval_buff，duration=4、interval=0.5、interval_stack_removal=true、max_stacks=31、refresh_duration_on_stack=true；每跳 n=current_stack_count，power_level=500×(n/31)^2×(3−2n/31)，再以 DamageProfileTemplates.burning 執行傷害。Ogryn天賦把實際層數限制在16，故4層輸入約22.83、16層約262.09。
- Buff到期後依 interval_buff 的移除流程每0.5秒減一層；最後一層在4秒計時後再經約0.5秒間隔移除，16層總清空約12秒。天賦名稱文字提到15%射速，但此燃燒節點只處理燃燒；射速加成來自姿態本身。
- 單跳生命傷害例由power輸入再乘damage_output的0.002與profile attack、護甲倍率：流血175×.5=87.5，燃燒400×1.5=600；均再乘smoothstep(n/max)。不是直接把power_level當生命傷害。

## 原始碼依據

- [scripts/settings/ability/archetype_talents/talents/ogryn_talents.lua：1503–1526](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/ogryn_talents.lua#L1503-L1526)
- [scripts/settings/talent/talent_settings_ogryn.lua：194–202](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/talent/talent_settings_ogryn.lua#L194-L202)
- [scripts/settings/talent/talent_settings_ogryn.lua：271–274](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/talent/talent_settings_ogryn.lua#L271-L274)
- [scripts/settings/ability/player_abilities/abilities/ogryn_abilities.lua：93–110](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/player_abilities/abilities/ogryn_abilities.lua#L93-L110)
- [scripts/settings/buff/archetype_buff_templates/ogryn_buff_templates.lua：1851–1899](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/ogryn_buff_templates.lua#L1851-L1899)
- [scripts/settings/buff/archetype_buff_templates/ogryn_buff_templates.lua：2382–2439](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/ogryn_buff_templates.lua#L2382-L2439)
- [scripts/settings/buff/weapon_buff_templates.lua：50–78](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/weapon_buff_templates.lua#L50-L78)
- [scripts/extension_systems/buff/buffs/interval_buff.lua：21–64](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/buff/buffs/interval_buff.lua#L21-L64)
- [scripts/settings/damage/damage_profiles/buff_damage_profile_templates.lua：301–328](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/damage/damage_profiles/buff_damage_profile_templates.lua#L301-L328)
- [scripts/extension_systems/buff/buffs/interval_buff.lua：1–120](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/buff/buffs/interval_buff.lua#L1-L120)
- [scripts/settings/buff/weapon_buff_templates.lua：50–78](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/weapon_buff_templates.lua#L50-L78)
- [scripts/settings/buff/weapon_buff_templates.lua：235–259](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/weapon_buff_templates.lua#L235-L259)
- [scripts/settings/damage/damage_profiles/buff_damage_profile_templates.lua：19–68](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/damage/damage_profiles/buff_damage_profile_templates.lua#L19-L68)
- [scripts/settings/damage/damage_profiles/buff_damage_profile_templates.lua：301–328](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/damage/damage_profiles/buff_damage_profile_templates.lua#L301-L328)
- [scripts/settings/damage/damage_profiles/buff_damage_profile_templates.lua：443–465](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/damage/damage_profiles/buff_damage_profile_templates.lua#L443-L465)
- [scripts/settings/damage/power_level_settings.lua：7–25](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/damage/power_level_settings.lua#L7-L25)
- [scripts/utilities/attack/damage_profile.lua：386–445](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/attack/damage_profile.lua#L386-L445)
- [scripts/settings/ability/archetype_talents/talents/ogryn_talents.lua：1503–1526](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/ogryn_talents.lua#L1503-L1526)
- [scripts/ui/views/talent_builder_view/layouts/ogryn_tree.lua：1342–1365](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/ui/views/talent_builder_view/layouts/ogryn_tree.lua#L1342-L1365)

## 算例條件與待確認事項

- **傷害算例**：只計無護甲且無其他修正，每次燃燒傷害為 600 × (層數 ÷ 31)² × [3 − 2 × (層數 ÷ 31)]。4 層約 27.39 點，16 層約 314.51 點；這是單次結算，並非整段燃燒的總傷害。
- 層數上限計入目標身上的其他燃燒來源；實際生命傷害受目標護甲與傷害計算影響，強度輸入不是固定生命傷害。
- 燃燒延長可受施加者的燃燒持續時間屬性影響；約12秒是假設沒有額外延長。
- 遊戲原文：1.13.1／Steam Build 25606770 的 ui 資源。描述與實作的差異仍需遊戲內核對；省略細節不列為繁中誤譯。

## 原文核對

- 對應 hash：`a391c6e8`。
- 繁中原文說遠程攻擊加4層、最多16層；英文原文同樣列出每次遠程攻擊加4層與16層上限，層數與適用期間一致。兩種原文都省略每0.5秒的傷害和到期衰減，不能因此判成翻譯錯誤；文字與程式來源皆為1.13.1；實際表現仍待遊戲內核對。

## 圖示來源

[原圖](https://gameslantern.com/storage/sites/darktide/exporter/talents/ogryn/ability_modifier/ogryn_special_ammo_fire_shots.webp)｜[圖片來源 Issue](https://github.com/SyuanTsai/Media-Assets/issues/10#issuecomment-5931383354)｜[圖片附件](https://github.com/user-attachments/assets/6f504222-c9bf-4dff-a549-138c3be3bde4)

圖片僅供技能辨識，不作機制證據。

