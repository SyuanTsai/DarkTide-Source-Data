# 格鬥兵(Bruiser)：原始碼依據

[English](en/ogryn_ally_elite_kills_grant_cooldown.md)

[返回玩家說明](README.md#ogryn_ally_elite_kills_grant_cooldown)｜[技術索引](SOURCE_INDEX.md)｜[原文比對](LOCALIZATION_COMPARISON.md#ogryn_ally_elite_kills_grant_cooldown)

- 來源版本：Release 1.13.1；固定 SHA：`7e662fcda16219d775b84af50322be2e9cd9d62e`。
- 天賦：`ogryn_ally_elite_kills_grant_cooldown`；名稱鍵：`loc_talent_ogryn_cooldown_on_elite_kills`；描述鍵：`loc_talent_ogryn_cooldown_on_elite_kills_new_desc`。
- 節點：`node_b4cba785-e870-4ca2-86fb-380262f7a8ac`；分類：技能；每節點一點。
- 證據程度：原始碼確認／程式推導；以下算例屬程式推導，未進行遊戲內測試。

## 原始碼確認與程式推導

- on_minion_death elite，attacking_unit必須在in_coherence_units；child max1 duration4 refresh，每t>timer(初始t+1)restore_ability_resource(.5)，不是一次消減50%總CD。

## 原始碼依據

- [scripts/settings/buff/archetype_buff_templates/ogryn_buff_templates.lua：1424–1493](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/ogryn_buff_templates.lua#L1424-L1493)
- [scripts/settings/talent/talent_settings_ogryn.lua：343–348](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/talent/talent_settings_ogryn.lua#L343-L348)
- [scripts/extension_systems/ability/player_unit_ability_extension.lua：1127–1168](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/ability/player_unit_ability_extension.lua#L1127-L1168)
- [scripts/settings/ability/archetype_talents/talents/ogryn_talents.lua：1352–1372](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/ogryn_talents.lua#L1352-L1372)
- [scripts/ui/views/talent_builder_view/layouts/ogryn_tree.lua：2194–2224](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/ui/views/talent_builder_view/layouts/ogryn_tree.lua#L2194-L2224)

## 算例條件與待確認事項

- **時間算例**：一般自然冷卻每秒恢復 1 秒，再加每次 0.5 秒補回；完整收到 4 次補回時，4 秒內共推進 4 + 4 × 0.5 = 6 秒冷卻，其中額外省下 2 秒。實際會受到冷卻是否已滿及更新時間點影響。
- 4秒到期與最後一個每秒補回的執行先後受buff更新時序影響；主文算例明列收到四次的條件。
- 遊戲原文：1.13.1／Steam Build 25606770 的 ui 資源。描述與實作的差異仍需遊戲內核對；省略細節不列為繁中誤譯。

## 原文核對

- 對應 hash：`d14f6cb0`。
- 核對同一描述鍵／hash 的繁中與英文，效果方向未見明確翻譯矛盾；未列公式、上限或細部限制不算錯誤。

## 圖示來源

[原圖](https://gameslantern.com/storage/sites/darktide/exporter/talents/ogryn/default/ogryn_ally_elite_kills_grant_cooldown.webp)｜[圖片來源 Issue](https://github.com/SyuanTsai/Media-Assets/issues/10#issuecomment-5931394406)｜[圖片附件](https://github.com/user-attachments/assets/9e138d4c-f301-46c6-9eef-5aff038efc7c)

圖片僅供技能辨識，不作機制證據。

