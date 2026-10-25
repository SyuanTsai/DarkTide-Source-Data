# 那下不算！(That One Didn't Count)：原始碼依據

[English](en/ogryn_replenish_rock_on_miss.md)

[返回玩家說明](README.md#ogryn_replenish_rock_on_miss)｜[技術索引](SOURCE_INDEX.md)｜[原文比對](LOCALIZATION_COMPARISON.md#ogryn_replenish_rock_on_miss)

- 來源版本：Release 1.13.1；固定 SHA：`7e662fcda16219d775b84af50322be2e9cd9d62e`。
- 天賦：`ogryn_replenish_rock_on_miss`；名稱鍵：`loc_talent_ogryn_replenish_rock_on_miss_name`；描述鍵：`loc_talent_ogryn_replenish_rock_on_miss_desc`。
- 節點：`node_699c29c6-383b-478b-a462-792679f03b8c`；分類：閃擊；每節點一點。
- 證據程度：原始碼確認／程式推導；以下算例屬程式推導，未進行遊戲內測試。

## 原始碼確認與程式推導

- 此被動效果監聽玩家投射物結束事件，只接受歐格林友善岩石。
- 若投射物回報曾命中敵人但弱點命中數為 0，檢查函式拒絕觸發；其他情況通過後呼叫能力系統恢復 1 次閃擊充能。
- 共享設定將冷卻設為 5 秒，岩石能力最多 4 顆；恢復仍受能力上限限制。
- impact_hit在is_damagable分支設true，不限enemy/minion；可破壞物也可能影響落空判定。

## 原始碼依據

- [scripts/settings/ability/archetype_talents/talents/ogryn_talents.lua：1931–1955](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/ogryn_talents.lua#L1931-L1955)
- [scripts/settings/buff/archetype_buff_templates/ogryn_buff_templates.lua：2630–2679](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/ogryn_buff_templates.lua#L2630-L2679)
- [scripts/settings/talent/talent_settings_ogryn.lua：182–184](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/talent/talent_settings_ogryn.lua#L182-L184)
- [scripts/settings/ability/player_abilities/abilities/ogryn_abilities.lua：164–177](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/player_abilities/abilities/ogryn_abilities.lua#L164-L177)
- [scripts/extension_systems/projectile_damage/projectile_damage_extension.lua：410–430](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/projectile_damage/projectile_damage_extension.lua#L410-L430)
- [scripts/extension_systems/projectile_damage/projectile_damage_extension.lua：493–563](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/projectile_damage/projectile_damage_extension.lua#L493-L563)
- [scripts/settings/ability/archetype_talents/talents/ogryn_talents.lua：1931–1955](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/ogryn_talents.lua#L1931-L1955)
- [scripts/ui/views/talent_builder_view/layouts/ogryn_tree.lua：1548–1570](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/ui/views/talent_builder_view/layouts/ogryn_tree.lua#L1548-L1570)

## 算例條件與待確認事項

- **充能算例**：投出最後一顆後若該次符合條件，會恢復為 1 顆；每次只恢復 1 顆，總數不超過 4 顆。
- **冷卻算例**：從前一次返還起算 5 秒；若第二顆岩石在第 4 秒結束飛行，即使符合返還條件也不會恢復。以投射物結束時計算，不只比較兩次按下投擲的時間。
- 觸發以投射物結束時回報的命中與弱點計數為準；普通敵人命中但沒有弱點命中不等於未命中。
- 此效果每次補 1 顆，不會超過岩石能力目前的充能上限。
- 遊戲原文：1.13.1／Steam Build 25606770 的 ui 資源。描述與實作的差異仍需遊戲內核對；省略細節不列為繁中誤譯。

## 原文核對

- 對應 hash：`af804692`。
- 同源中英都寫未命中任何敵人；固定程式的impact_hit在可受傷害目標分支設值，不限敵人，可破壞物品亦可能影響。實際表現待遊戲內核對，保留差異，不列繁中誤譯。

## 圖示來源

[原圖](https://gameslantern.com/storage/sites/darktide/exporter/talents/ogryn/tactical_modifier/ogryn_replenish_rock_on_miss.webp)｜[圖片來源 Issue](https://github.com/SyuanTsai/Media-Assets/issues/10#issuecomment-5931383354)｜[圖片附件](https://github.com/user-attachments/assets/3d000b06-db5c-4ff3-96c9-54d09216587d)

圖片僅供技能辨識，不作機制證據。

