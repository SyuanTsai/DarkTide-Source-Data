# 心智網指令(Noospheric Command)：原始碼依據

[English](en/cryptic_servo_skull_improved_tagging.md)

[返回玩家說明](README.md#cryptic_servo_skull_improved_tagging)｜[技術索引](SOURCE_INDEX.md)｜[原文比對](LOCALIZATION_COMPARISON.md#cryptic_servo_skull_improved_tagging)

- 來源版本：Release 1.13.1；固定 SHA：`7e662fcda16219d775b84af50322be2e9cd9d62e`。
- 天賦：`cryptic_servo_skull_improved_tagging`；名稱鍵：`loc_talent_cryptic_servo_skull_improved_tagging`；描述鍵：`loc_talent_cryptic_servo_skull_improved_tagging_fire_rate_cost_desc`。
- 節點：`node_cc688d42-e7dd-45bb-81ec-df7c8d772e3f`；分類：閃擊；每節點一點。
- 證據程度：原始碼確認／程式推導；以下算例屬程式推導，未進行遊戲內測試。

## 原始碼確認與程式推導

- 特長加入 cryptic_servo_skull_improved_tagging 規則。有效射擊命令需要頭骨存活、敵人存活，且頭骨處於 following、following_shooting 或 following_shooting_ability 狀態；一般遊戲需至少0.3份 combat_ability 電容量，training_grounds 不受最低門檻限制。開始下令時把頭骨設為 following_shooting_ability，並向頭骨加入 cryptic_servo_skull_tagging_buff；其持續時間2秒，minion_shoot_cooldown_modifier=0.15。射擊動作將冷卻乘以該值，因此冷卻剩15%（縮短85%，頻率約為原本6.67倍）。設定的完整使用成本為0.3份 combat_ability 電容量；已有同一加速效果時，程式依該效果的持續進度計算本次額外扣除值。所有這些電容量皆屬 combat_ability 資源，與噴火／醫療頭骨共用的 grenade_ability 使用次數分開。 minion_shoot_cooldown_modifier 為 multiplicative_multiplier；與永久強化0.5相乘，3秒×0.5×0.15=0.225秒。沒有既有效果時duration_progress回傳0，成本0.3；已有剩餘時長時依1-progress計價，再重設2秒倒數。

## 原始碼依據

- [scripts/settings/ability/archetype_talents/talents/cryptic_talents.lua：23–51](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/cryptic_talents.lua#L23-L51)
- [scripts/settings/talent/talent_settings_cryptic.lua：60–65](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/talent/talent_settings_cryptic.lua#L60-L65)
- [scripts/utilities/companion/companion_servo_skull_ability.lua：502–580](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/companion/companion_servo_skull_ability.lua#L502-L580)
- [scripts/settings/buff/archetype_buff_templates/cryptic_buff_templates.lua：999–1046](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/cryptic_buff_templates.lua#L999-L1046)
- [scripts/extension_systems/behavior/nodes/actions/bt_shoot_action.lua：716–723](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/behavior/nodes/actions/bt_shoot_action.lua#L716-L723)
- [scripts/settings/companion/companion_servo_skull_settings.lua：23–28](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/companion/companion_servo_skull_settings.lua#L23-L28)
- [scripts/extension_systems/buff/buff_extension_base.lua：617–620](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/buff/buff_extension_base.lua#L617-L620)
- [scripts/extension_systems/buff/buffs/buff.lua：576–585](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/buff/buffs/buff.lua#L576-L585)
- [scripts/settings/buff/buff_settings.lua：891–891](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/buff_settings.lua#L891-L891)
- [scripts/settings/buff/archetype_buff_templates/cryptic_buff_templates.lua：1063–1072](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/cryptic_buff_templates.lua#L1063-L1072)
- [scripts/settings/buff/archetype_buff_templates/cryptic_buff_templates.lua：1145–1149](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/cryptic_buff_templates.lua#L1145-L1149)
- [scripts/settings/ability/archetype_talents/talents/cryptic_talents.lua：23–57](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/cryptic_talents.lua#L23-L57)
- [scripts/ui/views/talent_builder_view/layouts/cryptic_tree.lua：2293–2315](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/ui/views/talent_builder_view/layouts/cryptic_tree.lua#L2293-L2315)

## 算例條件與待確認事項

- 射擊冷卻原為3秒，乘0.15後為0.45秒；持續2秒的完整加速消耗0.3份電容量。
- 有0.25份電容量時，低於0.3份啟動門檻，一般任務不能下令觸發此射擊加速；訓練場則略過門檻。
- 加速效果只在改良標記特長啟用且伺服頭骨命令有效時觸發；不改變噴火與醫療頭骨共用的手雷能力使用次數。
- 0.15是射擊冷卻乘數，表示冷卻剩15%、減少85%；玩家介面將此值換算成約567%攻擊速度增幅。
- 施放時會依同一加速效果剩餘時長調整電容量扣除；持續時間上限為2秒。
- 遊戲原文：1.13.1／Steam Build 25606770 的 ui 資源。描述與實作的差異仍需遊戲內核對；省略細節不列為繁中誤譯。

## 原文核對

- 對應 hash：`843cef80`。
- 繁中描述有列出下令攻擊、持續2秒及0.3電容量，但程式的資源參數是 combat_ability charge percentage，換算為0.3份；程式射擊冷卻乘數0.15，語系格式值會換算為約567%攻擊速度。其餘門檻、訓練場例外及扣除調整屬未列明細節。Build 25606770 版本對應為1.13.1。

## 圖示來源

[原圖](https://gameslantern.com/storage/sites/darktide/exporter/talents/cryptic/tactical_modifier/cryptic_servo_skull_improved_tagging.webp)｜[圖片來源 Issue](https://github.com/SyuanTsai/Media-Assets/issues/13#issuecomment-5935585681)｜[圖片附件](https://github.com/user-attachments/assets/c365855a-e85f-4d0d-8156-4048ae9f7e02)

圖片僅供技能辨識，不作機制證據。

