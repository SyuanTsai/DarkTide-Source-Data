# 崇高意圖(Higher Purpose)：原始碼依據

[English](en/cryptic_dissector_power.md)

[返回玩家說明](README.md#cryptic_dissector_power)｜[技術索引](SOURCE_INDEX.md)｜[原文比對](LOCALIZATION_COMPARISON.md#cryptic_dissector_power)

- 來源版本：Release 1.13.1；固定 SHA：`7e662fcda16219d775b84af50322be2e9cd9d62e`。
- 天賦：`cryptic_dissector_power`；名稱鍵：`loc_talent_cryptic_dissector_power`；描述鍵：`loc_talent_cryptic_dissector_power_desc`。
- 節點：`node_ce7afddd-b252-4604-a423-da685ffa5410`；分類：鑰石；每節點一點。
- 證據程度：原始碼確認／程式推導；以下算例屬程式推導，未進行遊戲內測試。

## 原始碼確認與程式推導

- 此修改器啟用 special_rule cryptic_dissector_increased_cooldown_gained_on_elite_or_special_kills。cryptic_ability_recharge 的擊殺處理先採 base=2%或elite/special=4%；選用此rule時只把elite/special值加0.025，得到6.5%。
- 恢復呼叫 restore_ability_charge_percentage(COMBAT_ABILITY_TYPE, cooldown_to_restore)。PlayerUnitAbilityExtension以resource_cost_per_charge乘此比例，而不是max_ability_resource整池；helper把ignore_stat_buffs設為true，因此紅線的resource_restored_modifier及其他stat buff不再乘一次。若單份成本50點，6.5%=3.25資源點，其中本修改器單獨增加1.25點。
- 擊殺proc在偵測到 cryptic_precision_stance keyword 時先return，故該姿態期間一般擊殺2%、精英／專家總6.5%都不會恢復。

## 原始碼依據

- [scripts/ui/views/talent_builder_view/layouts/cryptic_tree.lua：1820–1842](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/ui/views/talent_builder_view/layouts/cryptic_tree.lua#L1820-L1842)
- [scripts/settings/ability/archetype_talents/talents/cryptic_talents.lua：1211–1231](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/cryptic_talents.lua#L1211-L1231)
- [scripts/settings/talent/talent_settings_cryptic.lua：19–22](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/talent/talent_settings_cryptic.lua#L19-L22)
- [scripts/settings/talent/talent_settings_cryptic.lua：251–263](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/talent/talent_settings_cryptic.lua#L251-L263)
- [scripts/settings/buff/archetype_buff_templates/cryptic_buff_templates.lua：298–342](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/cryptic_buff_templates.lua#L298-L342)
- [scripts/extension_systems/ability/player_unit_ability_extension.lua：1081–1102](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/ability/player_unit_ability_extension.lua#L1081-L1102)
- [scripts/settings/ability/player_abilities/abilities/cryptic_abilities.lua：70–115](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/player_abilities/abilities/cryptic_abilities.lua#L70-L115)
- [scripts/settings/talent/talent_settings_cryptic.lua：3–18](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/talent/talent_settings_cryptic.lua#L3-L18)
- [scripts/settings/ability/archetype_talents/talents/cryptic_talents.lua：1211–1231](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/cryptic_talents.lua#L1211-L1231)
- [scripts/ui/views/talent_builder_view/layouts/cryptic_tree.lua：1820–1842](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/ui/views/talent_builder_view/layouts/cryptic_tree.lua#L1820-L1842)

## 算例條件與待確認事項

- 靜態推演：單份成本50點時，本修改器增加50×0.025=1.25點。精英／專家擊殺原本4%恢復50×0.04=2點，加入後總計50×0.065=3.25點；恢復不足一整份時只增加進度。
- 總6.5%由固定職業擊殺恢復4%與本修改器額外2.5%相加；不可只把額外值寫成總恢復。
- 百分比依單一充能成本計算，不依全部充能總池。restore_ability_charge_percentage忽略stat buffs，所以此恢復不受紅線恢復倍率放大。
- precision stance keyword會使整個擊殺恢復proc提前return。
- 遊戲原文：1.13.1／Steam Build 25606770 的 ui 資源。描述與實作的差異仍需遊戲內核對；省略細節不列為繁中誤譯。

## 原文核對

- 對應 hash：`2baab5a1`。
- 繁中與英文說明精英／專家擊殺額外恢復2.5%電容量；固定版確認額外值並加到職業既有4%精英／專家恢復上。中英皆用additional，6.5%總值與單充能分母屬程式推導，不是文字誤譯。

## 圖示來源

[原圖](https://gameslantern.com/storage/sites/darktide/exporter/talents/cryptic/keystone_modifier/cryptic_dissector_power.webp)｜[圖片來源 Issue](https://github.com/SyuanTsai/Media-Assets/issues/13#issuecomment-5935647528)｜[圖片附件](https://github.com/user-attachments/assets/e1ca03f4-8152-4fa6-9b43-0780a40ae7ca)

圖片僅供技能辨識，不作機制證據。

