# 伺服肌腱湧動(Servo-Sinew Surge)：原始碼依據

[English](en/cryptic_dissector_crit_attack_speed.md)

[返回玩家說明](README.md#cryptic_dissector_crit_attack_speed)｜[技術索引](SOURCE_INDEX.md)｜[原文比對](LOCALIZATION_COMPARISON.md#cryptic_dissector_crit_attack_speed)

- 來源版本：Release 1.13.1；固定 SHA：`7e662fcda16219d775b84af50322be2e9cd9d62e`。
- 天賦：`cryptic_dissector_crit_attack_speed`；名稱鍵：`loc_talent_cryptic_dissector_finesse`；描述鍵：`loc_talent_cryptic_dissector_crit_attack_speed_desc`。
- 節點：`node_aafbd29f-1545-4e6c-bcee-660f62f96f95`；分類：鑰石；每節點一點。
- 證據程度：原始碼確認／程式推導；以下算例屬程式推導，未進行遊戲內測試。

## 原始碼確認與程式推導

- 節點1101–1123的Talent Definition提供兩個每層1.5%值並啟用 special_rule cryptic_dissector_gives_crit_and_attack_speed。cryptic_dissector_stack 只在該rule有效時開啟 conditional_stat_buffs，且Buff基礎 stat_buffs 計算會按堆疊數重複套用。
- critical_strike_chance屬value，逐層加0.015（6層合計0.09，也就是9個百分點）；melee_attack_speed屬additive_multiplier，每層+0.015（6層合計+9%）。效果沿用削切協議目前層數及其6／8層上限。

## 原始碼依據

- [scripts/ui/views/talent_builder_view/layouts/cryptic_tree.lua：1101–1123](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/ui/views/talent_builder_view/layouts/cryptic_tree.lua#L1101-L1123)
- [scripts/settings/ability/archetype_talents/talents/cryptic_talents.lua：1178–1199](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/cryptic_talents.lua#L1178-L1199)
- [scripts/settings/talent/talent_settings_cryptic.lua：251–263](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/talent/talent_settings_cryptic.lua#L251-L263)
- [scripts/settings/buff/archetype_buff_templates/cryptic_buff_templates.lua：1488–1518](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/cryptic_buff_templates.lua#L1488-L1518)
- [scripts/extension_systems/buff/buffs/buff.lua：689–733](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/buff/buffs/buff.lua#L689-L733)
- [scripts/settings/buff/buff_settings.lua：700–700](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/buff_settings.lua#L700-L700)
- [scripts/settings/buff/buff_settings.lua：757–757](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/buff_settings.lua#L757-L757)
- [scripts/settings/archetype/archetypes/cryptic_archetype.lua：10–32](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/archetype/archetypes/cryptic_archetype.lua#L10-L32)
- [scripts/utilities/action/action_handler.lua：385–423](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/action/action_handler.lua#L385-L423)
- [scripts/settings/ability/archetype_talents/talents/cryptic_talents.lua：1178–1199](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/cryptic_talents.lua#L1178-L1199)
- [scripts/ui/views/talent_builder_view/layouts/cryptic_tree.lua：1101–1123](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/ui/views/talent_builder_view/layouts/cryptic_tree.lua#L1101-L1123)

## 算例條件與待確認事項

- 靜態推演：6層×每層0.015=0.09，故額外爆擊率為9個百分點、近戰攻擊速度為+9%；若8層則各為12%。
- 加成跟隨削切協議層數；承受傷害造成失層時會同步降低。
- 爆擊率是增加百分點，近戰攻擊速度是倍率增幅；近戰攻速不改變單次命中傷害。
- 遊戲原文：1.13.1／Steam Build 25606770 的 ui 資源。描述與實作的差異仍需遊戲內核對；省略細節不列為繁中誤譯。

## 原文核對

- 對應 hash：`7ddcfcd5`。
- 繁中與英文均明確寫明每層增加爆擊率與近戰攻擊速度；固定版兩項都是每層1.5%，無誤譯。

## 圖示來源

[原圖](https://gameslantern.com/storage/sites/darktide/exporter/talents/cryptic/keystone_modifier/cryptic_dissector_crit_attack_speed.webp)｜[圖片來源 Issue](https://github.com/SyuanTsai/Media-Assets/issues/13#issuecomment-5935640756)｜[圖片附件](https://github.com/user-attachments/assets/08678745-4375-4d48-bdde-6fbc209d6402)

圖片僅供技能辨識，不作機制證據。

