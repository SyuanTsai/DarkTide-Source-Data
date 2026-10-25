# 神聖事業(Holy Cause)：原始碼依據

[English](en/zealot_channel_grants_toughness_damage_reduction.md)

[返回玩家說明](README.md#zealot_channel_grants_toughness_damage_reduction)｜[技術索引](SOURCE_INDEX.md)｜[原文比對](LOCALIZATION_COMPARISON.md#zealot_channel_grants_toughness_damage_reduction)

- 來源版本：Release 1.13.1；固定 SHA：`7e662fcda16219d775b84af50322be2e9cd9d62e`。
- 天賦：`zealot_channel_grants_toughness_damage_reduction`；名稱鍵：`loc_talent_zealot_zealot_channel_grants_defensive_buff`；描述鍵：`loc_talent_zealot_zealot_channel_defensive_desc `。
- 節點：`node_72c78ca8-a422-429a-90cf-b85d0b36aa19`；分類：能力；每節點一點。
- 證據程度：原始碼確認／程式推導；以下算例屬程式推導，未進行遊戲內測試。

## 原始碼確認與程式推導

- 天賦節點以 special_rules.zealot_channel_grants_defensive_buff 標記能力；action_zealot_channel 在每次 tick 對 in_coherence_units 將 zealot_channel_toughness_damage_reduction 加一層，因此適用對象包括施術者（合唱協同集合也含本人）。
- 防禦 buff 是 stepped_stat_buff，duration=10、max_stacks 取合唱 max_stacks=5，toughness_damage_taken_multiplier 每層依 1 - 0.08×層數遞減。這只修正韌性承受傷害的倍率，不能寫成生命傷害抗性或通用傷害抗性。
- 合唱動作立即 tick，之後每 0.8 秒；總時長約 3.6667 秒，tick 時間約 0、0.8、1.6、2.4、3.2 秒。buff refresh_duration_on_stack=true，所以每次脈衝重新計時同一效果的時間並堆層，最多 5 層。

## 原始碼依據

- [scripts/settings/ability/archetype_talents/talents/zealot_talents.lua：725–778](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/zealot_talents.lua#L725-L778)
- [scripts/settings/talent/talent_settings_zealot.lua：271–275](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/talent/talent_settings_zealot.lua#L271-L275)
- [scripts/settings/talent/talent_settings_zealot.lua：539–547](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/talent/talent_settings_zealot.lua#L539-L547)
- [scripts/settings/buff/archetype_buff_templates/zealot_buff_templates.lua：97–130](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/zealot_buff_templates.lua#L97-L130)
- [scripts/extension_systems/weapon/actions/action_zealot_channel.lua：44–65](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/weapon/actions/action_zealot_channel.lua#L44-L65)
- [scripts/extension_systems/weapon/actions/action_zealot_channel.lua：132–163](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/weapon/actions/action_zealot_channel.lua#L132-L163)
- [scripts/settings/equipment/weapon_templates/combat_abilities/zealot_relic.lua：112–132](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/combat_abilities/zealot_relic.lua#L112-L132)
- [scripts/utilities/attack/damage_taken_calculation.lua：223–258](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/attack/damage_taken_calculation.lua#L223-L258)
- [scripts/settings/ability/archetype_talents/talents/zealot_talents.lua：725–778](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/zealot_talents.lua#L725-L778)
- [scripts/ui/views/talent_builder_view/layouts/zealot_tree.lua：627–650](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/ui/views/talent_builder_view/layouts/zealot_tree.lua#L627-L650)

## 算例條件與待確認事項

- **減傷算例**：滿層時，100 點韌性傷害變成 100 × (1 − 5 × 8%) = 60 點；另有獨立 25% 韌性減傷時，為 100 × 0.6 × 0.75 = 45 點。此項沒有直接降低生命傷害。
- 這是韌性傷害的乘數，不等同於生命傷害減免；也不代表所有 damage_taken_multiplier 結算階段都受益。
- 若離開協同範圍、buff 遭移除或受到其他系統的限制，實際堆疊／減傷可能低於理論上限。
- 原描述定位鍵含重複 zealot 並帶結尾空格，固定 source tree 無法精確配對本節點描述原文；不得以相近鍵冒充精確定位。
- 遊戲原文：1.13.1／Steam Build 25606770 的 ui 資源。描述與實作的差異仍需遊戲內核對；省略細節不列為繁中誤譯。

## 原文核對

- 原始描述鍵未在本機 ui 資源精確命中；不使用相近鍵冒充原文。
- 以 ability special rule、脈衝套用與 buff 數值可確認機制；inventory 對應描述為空，且 loc_talent_zealot_zealot_channel_defensive_desc 含重複 zealot 及尾空格，僅可列為原始鍵候選，不足以確認精確文案。

## 圖示來源

[原圖](https://gameslantern.com/storage/sites/darktide/exporter/talents/zealot/ability_modifier/zealot_channel_grants_toughness_damage_reduction.webp)｜[圖片來源 Issue](https://github.com/SyuanTsai/Media-Assets/issues/8#issuecomment-5929289315)｜[圖片附件](https://github.com/user-attachments/assets/1ca3f2a1-fbd3-41f7-83f3-895522b50b29)

圖片僅供技能辨識，不作機制證據。

