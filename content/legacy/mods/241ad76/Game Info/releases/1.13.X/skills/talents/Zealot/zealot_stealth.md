# 隱秘領域(Shroudfield)：原始碼依據

[English](en/zealot_stealth.md)

[返回玩家說明](README.md#zealot_stealth)｜[技術索引](SOURCE_INDEX.md)｜[原文比對](LOCALIZATION_COMPARISON.md#zealot_stealth)

- 來源版本：Release 1.13.1；固定 SHA：`7e662fcda16219d775b84af50322be2e9cd9d62e`。
- 天賦：`zealot_stealth`；名稱鍵：`loc_ability_zealot_stealth`；描述鍵：`loc_ability_zealot_stealth_rending_description`。
- 節點：`node_f1b10508-b92d-45c4-8661-941d3eadac13`；分類：能力；每節點一點。
- 證據程度：原始碼確認／程式推導；以下算例屬程式推導，未進行遊戲內測試。

## 原始碼確認與程式推導

- PlayerAbilities.zealot_invisibility 以 zealot_invisibility buff 為 ability template，設定 cooldown=30、max_charges=1、resource_cost_per_charge=30、resource_regen_per_second=1；基礎 buff duration=3。
- buff stat_buffs 明確為 movement_speed=0.2、critical_strike_chance=1、finesse_modifier_bonus=1.5、backstab_damage=1.5、flanking_damage=1.5、melee_rending_multiplier=1，並帶 invisible、allow_backstabbing、allow_flanking keywords。
- buff 接收 on_shoot、on_hit、on_revive、on_rescue、on_pull_up、on_remove_net、on_action_start 等事件。proc 僅處理本人的事件，忽略列出的持續傷害類型；傷害為 0 且非 toughness_absorbed 結果會略過。action_name 篩選允許手雷與投擲小刀動作進入解除流程。啟動後前 0.5 秒另有 exit_grace 避免非傷害事件立即剝除。
- 天賦格式值直接從 buff template 讀取；未裝延長天賦時，冷卻 30 秒。

## 原始碼依據

- [scripts/settings/ability/archetype_talents/talents/zealot_talents.lua：240–333](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/zealot_talents.lua#L240-L333)
- [scripts/settings/ability/player_abilities/abilities/zealot_abilities.lua：60–76](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/player_abilities/abilities/zealot_abilities.lua#L60-L76)
- [scripts/settings/buff/archetype_buff_templates/zealot_buff_templates.lua：4157–4195](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/zealot_buff_templates.lua#L4157-L4195)
- [scripts/settings/buff/archetype_buff_templates/zealot_buff_templates.lua：4206–4269](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/zealot_buff_templates.lua#L4206-L4269)
- [scripts/settings/buff/archetype_buff_templates/zealot_buff_templates.lua：4271–4301](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/zealot_buff_templates.lua#L4271-L4301)
- [scripts/utilities/attack/damage_calculation.lua：672–782](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/attack/damage_calculation.lua#L672-L782)
- [scripts/utilities/attack/attack_positioning.lua：9–65](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/attack/attack_positioning.lua#L9-L65)
- [scripts/settings/ability/archetype_talents/talents/zealot_talents.lua：240–333](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/zealot_talents.lua#L240-L333)
- [scripts/ui/views/talent_builder_view/layouts/zealot_tree.lua：752–784](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/ui/views/talent_builder_view/layouts/zealot_tree.lua#L752-L784)

## 算例條件與待確認事項

- **靈巧傷害算例**：先固定攻擊種類、部位與護甲，只看靈巧加成；基礎部分 100、弱點／暴擊額外部分 50 時，由 150 變成 100 + 50 × (1 + 150%) = 225，整次增加 50%。額外部分若為 100，則由 200 變成 350，增加 75%。背刺與撕裂等其他因素另算。
- **移速算例**：基礎 5 公尺／秒、沒有其他修正時，變成 5 × 1.2 = 6 公尺／秒。
- 這些是 stat modifier，不能直接相加成一個總傷害倍率；暴擊、靈巧、背刺、側襲及撕裂在不同結算條件／階段生效。
- 程式中的 proc filters 表明，特定傷害類型、零傷害結果、他人造成的事件及未允許的 action_name 可能不會使潛行退出；以簡述涵蓋主要行為，避免把所有事件都當成同一觸發。
- 冷卻恢復可由其他天賦返還或加速；30 秒是未受額外修正的基礎資源成本與自然恢復估算。
- 遊戲原文：1.13.1／Steam Build 25606770 的 ui 資源。描述與實作的差異仍需遊戲內核對；省略細節不列為繁中誤譯。

## 原文核對

- 對應 hash：`644f101d`。
- 同一hash的繁中與英文作用方向相符；補足觸發、疊層、恢復量與實際計算，不把原文省略當錯誤。

## 圖示來源

[原圖](https://gameslantern.com/storage/sites/darktide/exporter/talents/zealot/ability/zealot_stealth.webp)｜[圖片來源 Issue](https://github.com/SyuanTsai/Media-Assets/issues/8#issuecomment-5929289315)｜[圖片附件](https://github.com/user-attachments/assets/313c803f-9a12-4470-9660-ce9a8fd308c9)

圖片僅供技能辨識，不作機制證據。

