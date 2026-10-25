# 念力穹頂(Telekine Dome)：原始碼依據

[English](en/psyker_sphere_shield.md)

[返回玩家說明](README.md#psyker_sphere_shield)｜[技術索引](SOURCE_INDEX.md)｜[原文比對](LOCALIZATION_COMPARISON.md#psyker_sphere_shield)

- 來源版本：Release 1.13.1；固定 SHA：`7e662fcda16219d775b84af50322be2e9cd9d62e`。
- 天賦：`psyker_sphere_shield`；名稱鍵：`loc_talent_psyker_force_field_dome`；描述鍵：`loc_talent_psyker_force_field_dome_increased_cd_desc`。
- 節點：`node_b965d30f-4412-43e5-856a-c571751925a7`；分類：能力；每節點一點。
- 證據程度：原始碼確認／程式推導；以下算例屬程式推導，未進行遊戲內測試。

## 原始碼確認與程式推導

- 節點以 psyker_force_field_dome player ability 和 psyker_sphere_shield special rule 替換牆形態。PlayerAbilities使用相同 psyker_shield ability group與每秒1資源恢復，cooldown/resource_cost_per_charge=60。ForceFieldUnitExtension偵測球形規則後採 sphere_duration=25；health extension按球形規則取 sphere_health=20。SPHERE_UNIT_RADIUS為6。與普通牆形態比較，牆 duration=17.5、cooldown=40、health=20；護盾傷害節流規則共用。

## 原始碼依據

- [scripts/settings/ability/archetype_talents/talents/psyker_talents.lua：1929–1956](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/psyker_talents.lua#L1929-L1956)
- [scripts/settings/ability/player_abilities/abilities/psyker_abilities.lua：27–77](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/player_abilities/abilities/psyker_abilities.lua#L27-L77)
- [scripts/settings/talent/talent_settings_psyker.lua：266–280](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/talent/talent_settings_psyker.lua#L266-L280)
- [scripts/extension_systems/force_field/psyker_force_field_unit_extension.lua：88–105](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/force_field/psyker_force_field_unit_extension.lua#L88-L105)
- [scripts/extension_systems/force_field/psyker_force_field_unit_extension.lua：285–305](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/force_field/psyker_force_field_unit_extension.lua#L285-L305)
- [scripts/extension_systems/health/psyker_force_field_unit_health_extension.lua：16–44](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/health/psyker_force_field_unit_health_extension.lua#L16-L44)
- [scripts/extension_systems/force_field/psyker_force_field_unit_extension.lua：22–28](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/force_field/psyker_force_field_unit_extension.lua#L22-L28)
- [scripts/settings/ability/archetype_talents/talents/psyker_talents.lua：1929–1956](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/psyker_talents.lua#L1929-L1956)
- [scripts/ui/views/talent_builder_view/layouts/psyker_tree.lua：1156–1182](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/ui/views/talent_builder_view/layouts/psyker_tree.lua#L1156-L1182)

## 算例條件與待確認事項

- 比較基本護盾與穹頂，不計額外冷卻修正，並假設屏障未被提前耗盡。 牆形護盾：40秒冷卻、17.5秒持續；穹頂：60秒冷卻、25秒持續。 穹頂每次多持續7.5秒，冷卻多20秒；耐久仍是20。
- 半徑以程式常數計算，碰撞判定會加上玩家單位半徑；6公尺不是所有角色外緣的精確邊界。
- 形狀/阻擋規則按遊戲中屏障碰撞運作；此草稿不推論對每種敵方攻擊或地形的結果。
- 文字與程式來源皆為1.13.1；實際表現仍待遊戲內核對。
- 遊戲原文：1.13.1／Steam Build 25606770 的 ui 資源。描述與實作的差異仍需遊戲內核對；省略細節不列為繁中誤譯。

## 原文核對

- 對應 hash：`0b13a4ee`。
- 同一描述鍵的繁中與英文效果方向一致；未說明的公式、時序與額外條件屬描述不完整，不列為誤譯。與公開來源版本對應為1.13.1。

## 圖示來源

[原圖](https://gameslantern.com/storage/sites/darktide/exporter/talents/psyker/ability_modifier/psyker_sphere_shield.webp)｜[圖片來源 Issue](https://github.com/SyuanTsai/Media-Assets/issues/7#issuecomment-5928024966)｜[圖片附件](https://github.com/user-attachments/assets/60e6d4b2-0696-4215-8afd-8c9725d4801f)

圖片僅供技能辨識，不作機制證據。

