# 電能擴張器(Voltaic Expander)：原始碼依據

[English](en/cryptic_discharge_base.md)

[返回基礎效果](BASE_EFFECTS.md#cryptic_discharge_base)｜[技術索引](SOURCE_INDEX.md)

- 固定來源：Release 1.13.1／`7e662fcda16219d775b84af50322be2e9cd9d62e`。
- 基礎天賦：`cryptic_discharge_base`；不占可選天賦點數。
- 證據程度：原始碼確認與程式推導，未進行遊戲內測試。

## 原始碼確認與程式推導

- cryptic_discharge_base 接到 PlayerAbilities.cryptic_discharge_base。能力資料設定 charge 使用成本為 1–3；通用 get_num_ability_charges_to_use 以目前完整充能數夾在此範圍，故一次啟動消耗當下最多3份完整充能，超過3份仍保留。
- 基礎能力動作 action_activate 在開始時消耗成本。ActionCrypticDischarge 以消耗份數選 base、base_two、base_three 爆炸模板。半徑 6/9/12 公尺。
- 每份充能資源成本為 general combat ability cooldown 50 秒，底層自然恢復 1 資源點/秒；故一整份需 50 秒、三份空槽補滿需 150 秒。
- 放電爆炸 damage profile 的 attack 與 impact power distribution 均為 0；explosion on-hit 套用 cryptic_discharge_shock，持續 2 秒並以 0.3–0.8 秒間隔執行電擊傷害。傷害 profile 採 default power curve、attack power 25、impact power 100，故沒有固定敵人生命值傷害可由此技能定義單獨給出。
- 本機Steam Build25606770：描述鍵 `loc_talent_cryptic_discharge_base_desc`、同源中英hash `a2ee7263` 已精確配對。同鍵中英均列出電擊與1／2／3份充能對應的範圍；固定程式為6／9／12公尺、2秒電擊。未展開充能上限與直接爆炸傷害為零，不算錯誤。

## 原始碼依據

- [固定版本來源](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/cryptic_talents.lua#L58-L104)
- [固定版本來源](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/player_abilities/abilities/cryptic_abilities.lua#L70-L100)
- [固定版本來源](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/ability_templates/cryptic_discharge_base.lua#L18-L43)
- [固定版本來源](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/weapon/actions/action_ability_base.lua#L25-L41)
- [固定版本來源](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/ability/player_unit_ability_extension.lua#L1487-L1508)
- [固定版本來源](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/ability/actions/action_cryptic_discharge.lua#L52-L108)
- [固定版本來源](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/damage/explosion_templates/player_explosion_templates.lua#L252-L334)
- [固定版本來源](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/damage/damage_profiles/archetypes/cryptic_damage_profile_templates.lua#L551-L595)
- [固定版本來源](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/weapon_buff_templates.lua#L2882-L2921)
- [固定版本來源](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/damage/damage_profiles/demolitions_damage_profile_templates.lua#L1204-L1243)
- [固定版本來源](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/talent/talent_settings_cryptic.lua#L1-L17)
- [固定版本來源](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/ability/player_unit_ability_extension.lua#L846-L875)

## 算例與待確認事項

- 只剩 1 份完整充能；按下技能消耗 1 份；使用 6 公尺放電範圍；下一份累積中的小數進度仍留在資源槽。
- 有 2 份完整充能；按下技能一次消耗 2 份；放電半徑為 9 公尺；該次消耗等於 100 秒的每份充能冷卻成本。
- 3 份完整充能已補滿；按下技能一次消耗 3 份；放電半徑為 12 公尺；從空槽自然補滿三份需 50 × 3 = 150 秒。
- 靜態來源確認技能半徑、電擊持續時間與傷害模板；敵人護甲、生命傷害以及實際電擊 tick 次數會改變實際結果，沒有固定傷害總值可列。
- 觸電傷害以 0.3–0.8 秒 interval 設定且套用起始 frame offset；不推定每次必定相同 tick 數。
- 本機文字 Build 25606770 與固定公開來源版本對應為1.13.1。
