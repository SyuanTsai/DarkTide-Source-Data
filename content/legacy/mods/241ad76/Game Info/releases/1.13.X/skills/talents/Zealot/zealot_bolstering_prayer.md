# 不屈靈魂合唱(Chorus of Spiritual Fortitude)：原始碼依據

[English](en/zealot_bolstering_prayer.md)

[返回玩家說明](README.md#zealot_bolstering_prayer)｜[技術索引](SOURCE_INDEX.md)｜[原文比對](LOCALIZATION_COMPARISON.md#zealot_bolstering_prayer)

- 來源版本：Release 1.13.1；固定 SHA：`7e662fcda16219d775b84af50322be2e9cd9d62e`。
- 天賦：`zealot_bolstering_prayer`；名稱鍵：`loc_talent_zealot_bolstering_prayer`；描述鍵：`loc_talent_zealot_bolstering_prayer_expanded_description`。
- 節點：`node_c286494b-4e57-42a2-9c41-04809ee97c41`；分類：能力；每節點一點。
- 證據程度：原始碼確認／程式推導；以下算例屬程式推導，未進行遊戲內測試。

## 原始碼確認與程式推導

- PlayerAbilities.zealot_relic 設為 cooldown=60、max_charges=1、每秒回充 1 單位；ActionZealotChannel.start 消耗使用次數後呼叫 pause_ability_resource_regen。pause_fulfilled_func 在揮持欄位不再是 slot_combat_ability 時恢復回充，因此冷卻恢復從收起聖物後開始。
- action_zealot_channel.lua 將下一次 tick 設為啟動時刻 t，fixed_update 每 0.8 秒推進；約 3.67 秒的動作在 t=0、0.8、1.6、2.4、3.2 秒共觸發 5 次。每次 _on_channel_tick 對 in_coherence_units 恢復 20% 韌性、套用 +15 最大韌性 buff，並重新計時 1.5 秒 unkillable/stun_immune buff。CoherencySystem 建立 chain 時先加入自身，因此效果包含施術者。
- 固定更新另每 frame 以 25%/秒恢復協同集合的韌性；第一次 tick 前以 1.75 倍調整該 frame。talent format_values 把 20% 與 25% 相加成 45%，但動作碼實際分成每次脈衝 20% 與每秒 25%，不能把 45% 寫成每次脈衝恢復量。
- 暫時最大韌性 buff duration=10、每次 +15、max_stacks=5 且 refresh_duration_on_stack=true，最多 +75，重新施加會重設整個堆疊 buff 的 start_time。
- 踉蹌目標的基礎半徑為 10 公尺，隨引導時間每秒增加 0.1 公尺；引導前 0.5 秒 power_level=0，之後為 500。抑制另由 action 更新處理：首 tick 對有視線的 aggroed minions 不限距離，後續限於近戰距離。

## 原始碼依據

- [scripts/settings/ability/archetype_talents/talents/zealot_talents.lua：92–167](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/zealot_talents.lua#L92-L167)
- [scripts/settings/talent/talent_settings_zealot.lua：539–547](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/talent/talent_settings_zealot.lua#L539-L547)
- [scripts/settings/ability/player_abilities/abilities/zealot_abilities.lua：37–58](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/player_abilities/abilities/zealot_abilities.lua#L37-L58)
- [scripts/settings/equipment/weapon_templates/combat_abilities/zealot_relic.lua：112–132](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/combat_abilities/zealot_relic.lua#L112-L132)
- [scripts/extension_systems/weapon/actions/action_zealot_channel.lua：44–163](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/weapon/actions/action_zealot_channel.lua#L44-L163)
- [scripts/extension_systems/weapon/actions/action_zealot_channel.lua：182–274](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/weapon/actions/action_zealot_channel.lua#L182-L274)
- [scripts/settings/buff/archetype_buff_templates/zealot_buff_templates.lua：80–158](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/zealot_buff_templates.lua#L80-L158)
- [scripts/extension_systems/coherency/coherency_system.lua：186–205](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/coherency/coherency_system.lua#L186-L205)
- [scripts/extension_systems/toughness/player_unit_toughness_extension.lua：253–285](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/toughness/player_unit_toughness_extension.lua#L253-L285)
- [scripts/extension_systems/ability/player_unit_ability_extension.lua：826–860](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/ability/player_unit_ability_extension.lua#L826-L860)
- [scripts/extension_systems/toughness/player_unit_toughness_extension.lua：200–210](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/toughness/player_unit_toughness_extension.lua#L200-L210)
- [scripts/settings/ability/archetype_talents/talents/zealot_talents.lua：92–167](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/zealot_talents.lua#L92-L167)
- [scripts/ui/views/talent_builder_view/layouts/zealot_tree.lua：540–568](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/ui/views/talent_builder_view/layouts/zealot_tree.lua#L540-L568)

## 算例條件與待確認事項

- **恢復算例**：忽略脈衝間的持續恢復，最大韌性 100、目前 40，第一次脈衝先補 100 × 20% = 20 點，再增加 15 點上限及目前值，成為 75／115。之後每秒恢復量也按當時上限計算，例如上限 115 時為 115 × 25% = 28.75 點。
- 實際韌性恢復會受當下最大韌性、缺額、恢復增益與恢復封鎖影響；暫時最大韌性會逐次提高後續恢復的基準。
- 文字與程式來源皆為1.13.1；實際表現仍待遊戲內核對；45% 格式合計與執行碼的分拆記為待遊戲內核對，不判繁中勘誤。
- 不包含 Hordes 額外關鍵字帶來的腐敗治療；該效果需另有外部 buff keyword。
- 遊戲原文：1.13.1／Steam Build 25606770 的 ui 資源。描述與實作的差異仍需遊戲內核對；省略細節不列為繁中誤譯。

## 原文核對

- 對應 hash：`ae04279a`。
- 文字與程式來源皆為1.13.1；實際表現仍待遊戲內核對；固定 SHA 的 format_values 合計 45%，實際動作則分成 20% 每脈衝與 25%/秒，暫不把文字與實作差異判為譯文錯誤。

## 圖示來源

[原圖](https://gameslantern.com/storage/sites/darktide/exporter/talents/zealot/ability/zealot_bolstering_prayer.webp)｜[圖片來源 Issue](https://github.com/SyuanTsai/Media-Assets/issues/8#issuecomment-5929289315)｜[圖片附件](https://github.com/user-attachments/assets/4ae30922-3e39-4ded-8e19-35ec595befa0)

圖片僅供技能辨識，不作機制證據。

