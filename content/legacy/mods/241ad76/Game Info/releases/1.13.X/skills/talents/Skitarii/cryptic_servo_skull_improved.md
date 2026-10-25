# 匠師伺服頭骨(Artificer Servo-Skull)：原始碼依據

[English](en/cryptic_servo_skull_improved.md)

[返回玩家說明](README.md#cryptic_servo_skull_improved)｜[技術索引](SOURCE_INDEX.md)｜[原文比對](LOCALIZATION_COMPARISON.md#cryptic_servo_skull_improved)

- 來源版本：Release 1.13.1；固定 SHA：`7e662fcda16219d775b84af50322be2e9cd9d62e`。
- 天賦：`cryptic_servo_skull_improved`；名稱鍵：`loc_talent_cryptic_servo_skull_improved`；描述鍵：`loc_talent_cryptic_servo_skull_improved_clarified_desc`。
- 節點：`node_15960c27-305b-4ad6-8cb9-1ceec79789b9`；分類：閃擊；每節點一點。
- 證據程度：原始碼確認／程式推導；以下算例屬程式推導，未進行遊戲內測試。

## 原始碼確認與程式推導

- 特長加入 cryptic_servo_skull_improved 與 no_grenades 規則，並改用 cryptic_servo_skull_order_base_inactive；被動模板 cryptic_servo_skull_order 會持續監聽命中事件。生成主 hacking 頭骨時，若有 improved 規則，立即給它 cryptic_servo_skull_permanent_buff。此永久模板由 temporary buff 複製，移除持續時間、關鍵字與起訖函式，但保留 stat buffs：damage +0.25，minion_shoot_cooldown_modifier=0.5；射擊動作直接將基礎冷卻乘上此倍率。主 hacking 頭骨每次命中存活目標時，玩家端 proc 給目標 cryptic_servo_skull_debuff（傷害承受倍率+0.15、持續5秒），並為其 flamer_assault 增加1層；達8層時改為重設燃燒的持續時間。改良版頭骨射擊使用 companion_servo_skull_single_shot_improved，射擊基礎冷卻為3至3.25秒。標記攻擊與資料解碼均使用伺服頭骨控制流程；資料解碼只接受 interaction_type 為 decoding 且可互動的目標。

## 原始碼依據

- [scripts/settings/ability/archetype_talents/talents/cryptic_talents.lua：629–669](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/cryptic_talents.lua#L629-L669)
- [scripts/settings/talent/talent_settings_cryptic.lua：50–59](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/talent/talent_settings_cryptic.lua#L50-L59)
- [scripts/settings/ability/player_abilities/abilities/cryptic_abilities.lua：34–68](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/player_abilities/abilities/cryptic_abilities.lua#L34-L68)
- [scripts/utilities/spawn_companions_from_talent.lua：10–32](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/spawn_companions_from_talent.lua#L10-L32)
- [scripts/settings/buff/archetype_buff_templates/cryptic_buff_templates.lua：1063–1149](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/cryptic_buff_templates.lua#L1063-L1149)
- [scripts/settings/buff/archetype_buff_templates/cryptic_buff_templates.lua：1154–1210](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/cryptic_buff_templates.lua#L1154-L1210)
- [scripts/extension_systems/behavior/nodes/actions/bt_shoot_action.lua：716–723](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/behavior/nodes/actions/bt_shoot_action.lua#L716-L723)
- [scripts/settings/breed/breed_actions/companion/companion_servo_skull_actions.lua：16–57](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/breed/breed_actions/companion/companion_servo_skull_actions.lua#L16-L57)
- [scripts/settings/breed/breed_shoot_templates/companion/companion_servo_skull_shoot_templates.lua：15–45](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/breed/breed_shoot_templates/companion/companion_servo_skull_shoot_templates.lua#L15-L45)
- [scripts/utilities/companion/companion_servo_skull_ability.lua：423–490](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/companion/companion_servo_skull_ability.lua#L423-L490)
- [scripts/settings/ability/archetype_talents/talents/cryptic_talents.lua：629–669](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/cryptic_talents.lua#L629-L669)
- [scripts/ui/views/talent_builder_view/layouts/cryptic_tree.lua：1678–1712](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/ui/views/talent_builder_view/layouts/cryptic_tree.lua#L1678-L1712)

## 算例條件與待確認事項

- 基礎射擊冷卻3秒乘0.5為1.5秒；單發傷害100乘1.25為125。射擊命中後，目標承受傷害倍率增加0.15，維持5秒。
- 連續命中同一敵人會更新其5秒傷害易受性，並逐次加燃燒層數至8層；再命中會重設燃燒的持續時間。
- 命令射擊需要頭骨存活、目標存活且頭骨處於可下令狀態；未被激怒的巫妖宿主不接受此攻擊命令。
- 額外15%傷害承受效果只由伺服頭骨命中觸發，持續5秒，單一目標最多一層並在命中時重新計時。
- 技能值0.5是射擊冷卻乘數，故冷卻減半；不等同傷害增加。
- 遊戲原文：1.13.1／Steam Build 25606770 的 ui 資源。描述與實作的差異仍需遊戲內核對；省略細節不列為繁中誤譯。

## 原文核對

- 對應 hash：`4bb85179`。
- 繁中描述已說明常駐頭骨、雙擊標記下令、攻擊與資料詢問，以及基礎閃擊加成常駐。程式核查補出25%傷害、0.5射擊冷卻倍率、命中後15%傷害承受增幅與燃燒上限等數值；屬說明未列出的實作細節，不判為錯譯。Build 25606770 版本對應為1.13.1。

## 圖示來源

[原圖](https://gameslantern.com/storage/sites/darktide/exporter/talents/cryptic/tactical/cryptic_servo_skull_improved.webp)｜[圖片來源 Issue](https://github.com/SyuanTsai/Media-Assets/issues/13#issuecomment-5935585681)｜[圖片附件](https://github.com/user-attachments/assets/0efafa0a-aad0-4bb8-869f-133db37cf152)

圖片僅供技能辨識，不作機制證據。

