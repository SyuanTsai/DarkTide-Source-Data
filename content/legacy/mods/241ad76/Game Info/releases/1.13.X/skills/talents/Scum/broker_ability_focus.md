# 亡命之徒(Desperado)：基礎戰鬥能力：原始碼依據

[English](en/broker_ability_focus.md)

[返回基礎效果](BASE_EFFECTS.md#broker_ability_focus)｜[技術索引](SOURCE_INDEX.md)

- 固定來源：Release 1.13.1／`7e662fcda16219d775b84af50322be2e9cd9d62e`。
- 基礎天賦：`broker_ability_focus`；不占可選天賦點數。
- 證據程度：原始碼確認與程式推導，未進行遊戲內測試。

## 原始碼確認與程式推導

- 巢都渣滓的 base_talents 預設選入 broker_ability_focus，指定 slot_combat_ability；天賦定義連到 PlayerAbilities.broker_ability_focus。該能力要求遠程武器，使用 broker_focus 能力模板，容量 1、每秒自然回充 1 點、每次消耗 45 點資源，並以 broker_focus_stance 作為冷卻暫停的追蹤效果。
- 按下能力鍵會執行 stance_change：切換至 slot_secondary、在動作起始消耗能力、補回韌性，並套用 broker_focus_stance。buff 持續 10 秒；其 stat_buffs 將 sprint_movement_speed 設為 +0.20、sprinting_cost_multiplier 設為 0，並附上 count_as_dodge_vs_ranged、suppression_immune 兩個關鍵字。
- buff 開始時把遠程武器現有彈匣轉入備用彈藥、將彈匣裝滿，並暫時允許免費彈藥轉移；結束時關閉免費轉移、清出目前彈匣，再把其彈藥依一般規則轉回彈匣。這是能力期間可不扣備用彈藥裝填的來源。
- **亡命之徒**基礎版的擊殺處理不延長持續時間或標記敵人：共同 buff 的擊殺處理會先檢查 broker_focus_improved；沒有該強化特性便立即返回。

## 原始碼依據

- [固定版本來源](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/archetype/archetypes/broker_archetype.lua#L53-L71)
- [固定版本來源](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/broker_talents.lua#L76-L103)
- [固定版本來源](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/player_abilities/abilities/broker_abilities.lua#L7-L36)
- [固定版本來源](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/ability_templates/broker_focus.lua#L25-L50)
- [固定版本來源](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/broker_buff_templates.lua#L319-L462)
- [固定版本來源](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/broker_buff_templates.lua#L255-L283)
- [固定版本來源](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/talent/talent_settings_broker.lua#L117-L141)

## 算例與待確認事項

- 不受其他冷卻修正影響時，10 秒專注結束後仍需自然回充 45 秒；從專注開始到充能恢復約為 10+45=55 秒。
- 若基準衝刺速度為 100，僅套用 +20% 時為 100×1.20=120；衝刺體力消耗倍率為 0，表示專注期間衝刺不扣體力。
- +20% 是衝刺速度倍率修正，實際速度仍會受其他移動修正影響。
- 能力動作補回韌性不等於提高韌性上限；實際補量受缺失韌性限制。
- 擊殺標記、擊殺延長與其他強化效果屬於改良版或分支節點，不併入此基礎能力。
- 本機文字 Build 25606770 與固定公開來源版本對應為1.13.1。
