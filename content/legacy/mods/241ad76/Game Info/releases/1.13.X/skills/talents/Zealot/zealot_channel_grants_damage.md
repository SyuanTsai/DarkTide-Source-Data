# 教宗之喚(Ecclesiarch's Call)：原始碼依據

[English](en/zealot_channel_grants_damage.md)

[返回玩家說明](README.md#zealot_channel_grants_damage)｜[技術索引](SOURCE_INDEX.md)｜[原文比對](LOCALIZATION_COMPARISON.md#zealot_channel_grants_damage)

- 來源版本：Release 1.13.1；固定 SHA：`7e662fcda16219d775b84af50322be2e9cd9d62e`。
- 天賦：`zealot_channel_grants_damage`；名稱鍵：`loc_talent_zealot_zealot_channel_grants_offensive_buff`；描述鍵：`loc_talent_zealot_zealot_channel_offensive_desc`。
- 節點：`node_518fc5ca-a334-46b2-9177-42cc04f43002`；分類：能力；每節點一點。
- 證據程度：原始碼確認／程式推導；以下算例屬程式推導，未進行遊戲內測試。

## 原始碼確認與程式推導

- 天賦節點掛上 special_rules.zealot_channel_grants_offensive_buff。ActionZealotChannel 讀到此規則後，於每次 tick 對整個 in_coherence_units 集合套用 zealot_channel_damage；集合包含本人。
- buff 模板為一般 stat buff，stat_buffs.damage=0.06，duration=10，max_stacks 取合唱設定 5，refresh_duration_on_stack=true。這是傷害 stat buff 的堆疊，而不是每一擊直接加 6 個百分點或獨立乘算 5 次；上限可表述為 +30% damage stat。
- 基礎合唱 duration=3.6666、tick_rate=0.8 且啟動立即 tick，因此單次完整引導約五次脈衝；外部中止引導可能少於五層。

## 原始碼依據

- [scripts/settings/ability/archetype_talents/talents/zealot_talents.lua：673–724](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/zealot_talents.lua#L673-L724)
- [scripts/settings/talent/talent_settings_zealot.lua：271–275](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/talent/talent_settings_zealot.lua#L271-L275)
- [scripts/settings/talent/talent_settings_zealot.lua：539–547](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/talent/talent_settings_zealot.lua#L539-L547)
- [scripts/settings/buff/archetype_buff_templates/zealot_buff_templates.lua：80–96](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/zealot_buff_templates.lua#L80-L96)
- [scripts/extension_systems/weapon/actions/action_zealot_channel.lua：44–65](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/weapon/actions/action_zealot_channel.lua#L44-L65)
- [scripts/extension_systems/weapon/actions/action_zealot_channel.lua：132–163](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/weapon/actions/action_zealot_channel.lua#L132-L163)
- [scripts/extension_systems/weapon/actions/action_zealot_channel.lua：234–246](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/weapon/actions/action_zealot_channel.lua#L234-L246)
- [scripts/utilities/attack/damage_calculation.lua：289–303](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/attack/damage_calculation.lua#L289-L303)
- [scripts/settings/ability/archetype_talents/talents/zealot_talents.lua：673–724](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/zealot_talents.lua#L673-L724)
- [scripts/ui/views/talent_builder_view/layouts/zealot_tree.lua：651–674](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/ui/views/talent_builder_view/layouts/zealot_tree.lua#L651-L674)

## 算例條件與待確認事項

- **傷害算例**：滿層時，基礎 100 點變成 100 × (1 + 5 × 6%) = 130 點；若原本已有同階段 25% 加成，則是 100 × (1 + 25% + 30%) = 155 點。
- damage 是全域傷害 stat 修正，具體與其他來源的加成、乘數及傷害階段如何合併，需依各武器傷害結算確認。
- Buff 持續 10 秒並由後續層數重新計時；若沒有再次脈衝，最後一次施加後倒數到期。
- 來源版本與 inventory Build 25606770 版本對應為1.13.1，因此不將格式值或顯示小數差異當成翻譯錯誤。
- 遊戲原文：1.13.1／Steam Build 25606770 的 ui 資源。描述與實作的差異仍需遊戲內核對；省略細節不列為繁中誤譯。

## 原文核對

- 對應 hash：`af1e14c2`。
- 相同hash的繁中疊層數使用{damage:%s}，英文使用{stacks:%s}；把傷害百分比欄位代入層數，屬明確參數錯誤。

## 圖示來源

[原圖](https://gameslantern.com/storage/sites/darktide/exporter/talents/zealot/ability_modifier/zealot_channel_grants_damage.webp)｜[圖片來源 Issue](https://github.com/SyuanTsai/Media-Assets/issues/8#issuecomment-5929289315)｜[圖片附件](https://github.com/user-attachments/assets/1abe7e62-3810-4680-9c49-7f6091782ab6)

圖片僅供技能辨識，不作機制證據。

