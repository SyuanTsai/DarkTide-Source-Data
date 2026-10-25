# 無盡狂怒(Unrelenting Fury)：原始碼依據

[English](en/zealot_fotf_refund_cooldown.md)

[返回玩家說明](README.md#zealot_fotf_refund_cooldown)｜[技術索引](SOURCE_INDEX.md)｜[原文比對](LOCALIZATION_COMPARISON.md#zealot_fotf_refund_cooldown)

- 來源版本：Release 1.13.1；固定 SHA：`7e662fcda16219d775b84af50322be2e9cd9d62e`。
- 天賦：`zealot_fotf_refund_cooldown`；名稱鍵：`loc_talent_zealot_dash_increased_duration`；描述鍵：`loc_talent_zealot_fotf_refund_cooldown_desc`。
- 節點：`node_1a024b73-36a7-4c24-a4be-f9844f422b4f`；分類：能力；每節點一點。
- 證據程度：原始碼確認／程式推導；以下算例屬程式推導，未進行遊戲內測試。

## 原始碼確認與程式推導

- 天賦 special rule 由 zealot_dash_buff.start_func 偵測；該衝刺 buff 開始時加入 zealot_fotf_refund_cooldown，持續 5 秒。
- refund buff 監聽 on_kill，並用 CheckProcFunctions.on_elite_or_special_kill 篩選。伺服器端觸發後呼叫 restore_ability_charge_percentage('combat_ability',0.2)，然後設定 remove_buff=true，因此每個 buff 窗口最多成功一次。
- PlayerUnitAbilityExtension.restore_ability_charge_percentage 以該能力每格 resource_cost_per_charge 乘上比例計算返還值，再受資源池上限約束。基礎衝刺每格成本 30，因此 20% = 6 resource；自然恢復為 1/s，所以可換算成約 6 秒基礎時間。
- 有信者之怒雙充能變體增加的是 max_charges；每格仍以基礎 charge cost 計算，故 20% 是一格成本的 20%，不是兩格總池的 20%。

## 原始碼依據

- [scripts/settings/ability/archetype_talents/talents/zealot_talents.lua：2504–2527](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/zealot_talents.lua#L2504-L2527)
- [scripts/settings/talent/talent_settings_zealot.lua：179–182](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/talent/talent_settings_zealot.lua#L179-L182)
- [scripts/settings/buff/archetype_buff_templates/zealot_buff_templates.lua：1233–1280](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/zealot_buff_templates.lua#L1233-L1280)
- [scripts/settings/buff/archetype_buff_templates/zealot_buff_templates.lua：2827–2862](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/zealot_buff_templates.lua#L2827-L2862)
- [scripts/settings/ability/player_abilities/abilities/zealot_abilities.lua：7–36](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/player_abilities/abilities/zealot_abilities.lua#L7-L36)
- [scripts/extension_systems/ability/player_unit_ability_extension.lua：1081–1102](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/ability/player_unit_ability_extension.lua#L1081-L1102)
- [scripts/extension_systems/ability/player_unit_ability_extension.lua：1437–1461](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/ability/player_unit_ability_extension.lua#L1437-L1461)
- [scripts/settings/ability/archetype_talents/talents/zealot_talents.lua：2504–2527](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/zealot_talents.lua#L2504-L2527)
- [scripts/ui/views/talent_builder_view/layouts/zealot_tree.lua：1426–1449](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/ui/views/talent_builder_view/layouts/zealot_tree.lua#L1426-L1449)

## 算例條件與待確認事項

- **冷卻算例**：基礎冷卻 30 秒時，返還 30 × 20% = 6 秒的自然回充進度；若還差 4 秒就回滿，只能補足缺少的部分。雙充能仍按一格計算，不會改成 60 × 20% = 12 秒。
- 精英/專家類型依遊戲的 breed tag 與擊殺結果判定；僅造成傷害或擊倒不等於已擊殺。
- 5 秒窗口由技能衝刺 buff 開始時加入，使用後最初的 lunge/setup 時序可能有極短延遲。
- inventory 中文把 `{cooldown}` 格式值寫成「秒」，但固定 SHA 格式化為百分比，runtime 也是按單格 charge cost 的比例返還；同一 hash 下英文字串未寫秒，屬明確單位差異。
- 遊戲原文：1.13.1／Steam Build 25606770 的 ui 資源。描述與實作的差異仍需遊戲內核對；省略細節不列為繁中誤譯。

## 原文核對

- 對應 hash：`0dec8750`。
- inventory 同一雙語文字的繁中額外標「秒」，英文未指定秒；固定 SHA 也把值格式化為百分比且按充能成本百分比返還。

## 圖示來源

[原圖](https://gameslantern.com/storage/sites/darktide/exporter/talents/zealot/ability_modifier/zealot_fotf_refund_cooldown.webp)｜[圖片來源 Issue](https://github.com/SyuanTsai/Media-Assets/issues/8#issuecomment-5929289315)｜[圖片附件](https://github.com/user-attachments/assets/d95452d2-3c7a-419f-9461-3d32dc95ce2f)

圖片僅供技能辨識，不作機制證據。

