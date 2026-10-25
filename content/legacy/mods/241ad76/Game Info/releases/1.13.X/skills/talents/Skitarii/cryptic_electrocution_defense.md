# 過載轉移晶格(Overcharge Transfer Lattice)：原始碼依據

[English](en/cryptic_electrocution_defense.md)

[返回玩家說明](README.md#cryptic_electrocution_defense)｜[技術索引](SOURCE_INDEX.md)｜[原文比對](LOCALIZATION_COMPARISON.md#cryptic_electrocution_defense)

- 來源版本：Release 1.13.1；固定 SHA：`7e662fcda16219d775b84af50322be2e9cd9d62e`。
- 天賦：`cryptic_electrocution_defense`；名稱鍵：`loc_talent_cryptic_electrocution_defense`；描述鍵：`loc_talent_cryptic_electrocution_defense_desc`。
- 節點：`node_e0953fb3-717d-40b6-9af8-c3dc03597315`；分類：技能；每節點一點。
- 證據程度：原始碼確認／程式推導；以下算例屬程式推導，未進行遊戲內測試。

## 原始碼確認與程式推導

- on_player_hit_received檢查AttackSettings.is_damaging_result與attack_type=melee；broadphase以attacking_unit位置查詢敵方陣營，對有buff extension者給cryptic_electrocution_default。
- ProcBuff無active_duration，故cooldown15由觸發時計算。

## 原始碼依據

- [scripts/extension_systems/buff/buffs/proc_buff.lua：151–174](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/buff/buffs/proc_buff.lua#L151-L174)
- [scripts/settings/buff/weapon_buff_templates.lua：2619–2659](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/weapon_buff_templates.lua#L2619-L2659)
- [scripts/settings/talent/talent_settings_cryptic.lua：406–409](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/talent/talent_settings_cryptic.lua#L406-L409)
- [scripts/settings/buff/archetype_buff_templates/cryptic_buff_templates.lua：2273–2341](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/cryptic_buff_templates.lua#L2273-L2341)
- [scripts/settings/ability/archetype_talents/talents/cryptic_talents.lua：1836–1854](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/cryptic_talents.lua#L1836-L1854)
- [scripts/ui/views/talent_builder_view/layouts/cryptic_tree.lua：440–466](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/ui/views/talent_builder_view/layouts/cryptic_tree.lua#L440-L466)

## 算例條件與待確認事項

- 不同敵人的電擊與控場抗性仍會影響實際控制結果。
- 遊戲原文：1.13.1／Steam Build 25606770 的 ui 資源。描述與實作的差異仍需遊戲內核對；省略細節不列為繁中誤譯。

## 原文核對

- 對應 hash：`b02129e2`。
- 中英文範圍中心都是攻擊者；補充造成傷害與冷卻條件。

## 圖示來源

[原圖](https://gameslantern.com/storage/sites/darktide/exporter/talents/cryptic/default/cryptic_electrocution_defense.webp)｜[圖片來源 Issue](https://github.com/SyuanTsai/Media-Assets/issues/13#issuecomment-5935647528)｜[圖片附件](https://github.com/user-attachments/assets/74c8388d-8388-4646-8a91-0eb056656036)

圖片僅供技能辨識，不作機制證據。

