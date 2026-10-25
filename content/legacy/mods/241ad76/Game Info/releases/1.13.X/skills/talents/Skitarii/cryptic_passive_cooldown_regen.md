# 動力引擎(Motive Engine)：原始碼依據

[English](en/cryptic_passive_cooldown_regen.md)

[返回基礎效果](BASE_EFFECTS.md#cryptic_passive_cooldown_regen)｜[技術索引](SOURCE_INDEX.md)

- 固定來源：Release 1.13.1／`7e662fcda16219d775b84af50322be2e9cd9d62e`。
- 基礎天賦：`cryptic_passive_cooldown_regen`；不占可選天賦點數。
- 證據程度：原始碼確認與程式推導，未進行遊戲內測試。

## 原始碼確認與程式推導

- talent_settings_cryptic.lua 將 PASSIVE_COOLDOWN_REGENERATION_PERCENT_PER_SECOND 設為 0.02，general cooldown time 為其倒數 50 秒；cryptic_passive_cooldown_regen 的同名設定將恢復率設為 0.02。
- combat ability 定義 resource_regen_per_second=1、resource_cost_per_charge=cooldown=50 且 max_charges=3。因此自然恢復率是 1/50=0.02 份/秒；內部資源上限為 3 × 50=150，完整恢復需 150 秒。
- cryptic_ability_recharge 在 on_kill 判定；一般敵人補 0.02、帶 elite 或 special tag 的敵人補 0.04。它在 cryptic_precision_stance keyword 存在時提前返回。restore_ability_charge_percentage 將此比例乘上單一份成本，不是總三份容量的百分比。
- 同名 passive buff 的 combat_ability_resource_regen_modifier=0 是中性 additive-multiplier 數值；底層能力仍按 resource_regen_per_second 自然恢復。settings 中 base_charges、charge_gain、min/max_charge、max_power 由 format_values 讀取，未作為 ability resource runtime 欄位；實際上限由 player ability 設定 max_charges=3。
- 進階戰鬥教範期間，能力基礎每秒自然恢復 1 資源點與同值的 while-active 成本相抵；架勢另按每秒 10% 單份進度與每次射擊 1% 額外消耗同一資源池，重裝時暫停每秒消耗。
- 本機Steam Build25606770：描述鍵 `loc_talent_cryptic_passive_cooldown_regen_desc`、同源中英hash `cc7d6ab9` 已精確配對。中英共同將職業資源概括為至少1、最多3份的消耗模式；實際能力分別採用1份、最多3份或分段比例消耗。共同概括不能單獨判成繁中誤譯；以各能力的固定程式為準。

## 原始碼依據

- [固定版本來源](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/talent/talent_settings_cryptic.lua#L1-L17)
- [固定版本來源](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/cryptic_talents.lua#L1531-L1586)
- [固定版本來源](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/player_abilities/abilities/cryptic_abilities.lua#L70-L100)
- [固定版本來源](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/cryptic_buff_templates.lua#L283-L356)
- [固定版本來源](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/cryptic_buff_templates.lua#L2083-L2089)
- [固定版本來源](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/ability/player_unit_ability_extension.lua#L846-L875)
- [固定版本來源](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/ability/player_unit_ability_extension.lua#L1081-L1102)
- [固定版本來源](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/buff_settings.lua#L742-L742)
- [固定版本來源](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/talent/talent_settings_cryptic.lua#L99-L101)
- [固定版本來源](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/player_abilities/abilities/cryptic_abilities.lua#L126-L140)
- [固定版本來源](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/cryptic_buff_templates.lua#L449-L513)
- [固定版本來源](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/ability/player_unit_ability_extension.lua#L1390-L1402)

## 算例與待確認事項

- 單份充能從空槽自然恢復；50 秒 × 每秒 2% = 100%；回到一整份可用充能。
- 三份充能全空；每份需 50 秒，資源池上限為三份；50 × 3 = 150 秒自然補滿。
- 缺一整份進度時擊殺普通敵人；恢復 2% × 50 秒 = 1 秒自然恢復量；擊殺精英或專家敵人則為 4% × 50 秒 = 2 秒量。
- 擊殺恢復是單一份充能資源成本的百分比；不應乘上三份容量。
- 擊殺 proc 在進階戰鬥教範啟動時直接跳過。
- format_values 內有未參與 runtime 充能資源計算的顯示欄位；runtime 三份上限來自能力資料。
- 本機文字 Build 25606770 與固定公開來源版本對應為1.13.1。
