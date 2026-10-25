# 橫衝直撞！(Rampage!)：原始碼依據

[English](en/broker_ability_punk_rage.md)

[返回玩家說明](README.md#broker_ability_punk_rage)｜[技術索引](SOURCE_INDEX.md)｜[原文比對](LOCALIZATION_COMPARISON.md#broker_ability_punk_rage)

- 來源版本：Release 1.13.1；固定 SHA：`7e662fcda16219d775b84af50322be2e9cd9d62e`。
- 天賦：`broker_ability_punk_rage`；名稱鍵：`loc_talent_broker_ability_punk_rage`；描述鍵：`loc_talent_broker_ability_punk_rage_desc_3`。
- 節點：`node_a24b4ec0-aec0-45a1-b746-05dbd671e2e2`；分類：能力；每節點一點。
- 證據程度：原始碼確認／程式推導；以下算例屬程式推導，未進行遊戲內測試。

## 原始碼確認與程式推導

- TalentSettings 設 rage_duration=10、rage_melee_power_level_modifier=0.35、rage_melee_attack_speed=0.20、rage_damage_taken_multiplier=0.75、rage_duration_extend=0.3、rage_duration_max=20、rage_duration_divisor=2。BuffSettings 將 melee_power_level_modifier 與 melee_attack_speed 定義為加算修正，damage_taken_multiplier 定義為乘算修正；倍率 0.75 對應承受傷害減少 25%。
- 近戰威力是威力等級修正，不是直接的傷害倍率。只有本技能修正時，35% 威力等級與 20% 攻擊速度分別寫入不同屬性；攻擊速度的時間例算採 1/(1+0.20)=0.833。
- 能力動作以 refill_toughness=true 恢復韌性，1 秒動作時間內消耗一次充能。怒火狀態 buff 以 melee on_hit 事件延長；沒有擊殺條件。共用延長函式把每次基礎 0.3 秒除以 2^floor(距啟動時間/20)，所以在 20 秒及 40 秒階段分別為 0.15 秒及 0.075 秒。
- 狀態 buff 目前掛 stun_immune 與 slowdown_immune，但未掛 suppression_immune；PlayerSuppressionExtension.add_suppression 僅在持有 suppression_immune 時跳過壓制累積。因此原文中英都寫的壓制免疫無法由此固定版本程式證實，這是程式與文字描述的落差，並非繁中與英文互相矛盾。
- 怒火單次充能消耗 30 點資源、每秒自然恢復 1；pause fulfilled 檢查在 broker_punk_rage_stance buff 消失後才恢復自然充能。

## 原始碼依據

- [scripts/settings/ability/archetype_talents/talents/broker_talents.lua：261–330](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/broker_talents.lua#L261-L330)
- [scripts/settings/talent/talent_settings_broker.lua：142–168](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/talent/talent_settings_broker.lua#L142-L168)
- [scripts/settings/ability/player_abilities/abilities/broker_abilities.lua：67–96](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/player_abilities/abilities/broker_abilities.lua#L67-L96)
- [scripts/settings/ability/ability_templates/broker_punk_rage.lua：25–43](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/ability_templates/broker_punk_rage.lua#L25-L43)
- [scripts/settings/buff/archetype_buff_templates/broker_buff_templates.lua：559–746](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/broker_buff_templates.lua#L559-L746)
- [scripts/settings/buff/buff_settings.lua：775–776](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/buff_settings.lua#L775-L776)
- [scripts/settings/buff/buff_settings.lua：860–878](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/buff_settings.lua#L860-L878)
- [scripts/extension_systems/suppression/player_suppression_extension.lua：117–128](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/suppression/player_suppression_extension.lua#L117-L128)
- [scripts/extension_systems/ability/player_unit_ability_extension.lua：825–884](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/ability/player_unit_ability_extension.lua#L825-L884)
- [scripts/settings/ability/archetype_talents/talents/broker_talents.lua：261–330](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/broker_talents.lua#L261-L330)
- [scripts/ui/views/talent_builder_view/layouts/broker_tree.lua：814–845](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/ui/views/talent_builder_view/layouts/broker_tree.lua#L814-L845)

## 算例條件與待確認事項

- **算例**：只計怒火效果時，來襲 100 點傷害 × 0.75 = 75 點；攻擊速度修正使原本 1 秒的攻擊動作約為 1/1.2=0.83 秒。延長量在啟動後 20 秒為 0.3/2=0.15 秒，40 秒後為 0.3/2²=0.075 秒。
- +35% 是近戰威力等級修正，不等於 +35% 最終傷害；武器、目標護甲及其他修正會影響最後傷害。
- 固定版本的狀態 buff 有眩暈與減速免疫，但壓制處理另查 suppression_immune；本 buff 未加入該效果。中英原文一致提及壓制免疫，因此未寫翻譯勘誤。
- 遊戲原文：1.13.1／Steam Build 25606770 的 ui 資源。描述與實作的差異仍需遊戲內核對；省略細節不列為繁中誤譯。

## 原文核對

- 對應 hash：`be0f1026`。
- 繁中與英文對恢復韌性、近戰威力、攻擊速度、減傷、近戰命中延長及冷卻值的描述一致；0.75 承傷倍率等於減傷25%。兩語都寫壓制免疫，但固定版本狀態未掛壓制免疫標記，記為程式與文案落差，非翻譯矛盾。

## 圖示來源

[原圖](https://gameslantern.com/storage/sites/darktide/exporter/talents/broker/ability/broker_ability_punk_rage.webp)｜[圖片來源 Issue](https://github.com/SyuanTsai/Media-Assets/issues/12#issuecomment-5933978534)｜[圖片附件](https://github.com/user-attachments/assets/ae8bc68a-7d1b-4ee7-8691-bed95ed8069d)

圖片僅供技能辨識，不作機制證據。

