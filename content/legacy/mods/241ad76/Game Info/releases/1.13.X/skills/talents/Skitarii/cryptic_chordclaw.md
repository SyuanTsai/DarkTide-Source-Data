# 弦爪重擊(Chordclaw Strike)：原始碼依據

[English](en/cryptic_chordclaw.md)

[返回玩家說明](README.md#cryptic_chordclaw)｜[技術索引](SOURCE_INDEX.md)｜[原文比對](LOCALIZATION_COMPARISON.md#cryptic_chordclaw)

- 來源版本：Release 1.13.1；固定 SHA：`7e662fcda16219d775b84af50322be2e9cd9d62e`。
- 天賦：`cryptic_chordclaw`；名稱鍵：`loc_talent_cryptic_chordclaw`；描述鍵：`loc_talent_cryptic_chordclaw_desc`。
- 節點：`node_2214fc60-12a4-4108-84e4-64b146f9b86b`；分類：能力；每節點一點。
- 證據程度：原始碼確認／程式推導；以下算例屬程式推導，未進行遊戲內測試。

## 原始碼確認與程式推導

- Player ability 設定每次使用成本1份、最多3份，單份成本50點且自然回充1點/秒。Talent 文案指定弦爪重攻擊；武器攻擊的預設重型黏著刺擊 action_heavy_sticky_attack_1 設 guaranteed_crit=true，並使用 chordclaw_main profile。
- 啟動後的 cryptic_chordclaw 效果提供 melee_damage=0.3、melee_rending_multiplier=0.5 及 stun_immune 關鍵字。此為攻擊計算修正與防暈效果，不代表所有命中固定多扣30或50生命值；最後傷害由攻擊力量、目標防護、命中位置與其他修正計算。
- 該效果有10秒上限，且換離 combat ability 武器槽後結束。按住能力輸入的蓄力模板可在0.5秒達滿蓄；能力攻擊的攻擊模式可由水平橫掃或快速刺擊等其他天賦改變。

## 原始碼依據

- [scripts/settings/ability/archetype_talents/talents/cryptic_talents.lua：474–493](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/cryptic_talents.lua#L474-L493)
- [scripts/settings/talent/talent_settings_cryptic.lua：133–143](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/talent/talent_settings_cryptic.lua#L133-L143)
- [scripts/settings/ability/player_abilities/abilities/cryptic_abilities.lua：142–168](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/player_abilities/abilities/cryptic_abilities.lua#L142-L168)
- [scripts/settings/ability/ability_templates/cryptic_chordclaw.lua：47–99](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/ability_templates/cryptic_chordclaw.lua#L47-L99)
- [scripts/settings/equipment/weapon_templates/combat_abilities/cryptic_transonic_claw.lua：561–675](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/combat_abilities/cryptic_transonic_claw.lua#L561-L675)
- [scripts/settings/damage/damage_profiles/archetypes/cryptic_damage_profile_templates.lua：120–212](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/damage/damage_profiles/archetypes/cryptic_damage_profile_templates.lua#L120-L212)
- [scripts/settings/buff/archetype_buff_templates/cryptic_buff_templates.lua：881–942](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/cryptic_buff_templates.lua#L881-L942)
- [scripts/settings/equipment/weapon_handling_templates/weapon_charge_templates.lua：98–110](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_handling_templates/weapon_charge_templates.lua#L98-L110)
- [scripts/extension_systems/weapon/actions/action_cryptic_chordclaw_activation.lua：25–65](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/weapon/actions/action_cryptic_chordclaw_activation.lua#L25-L65)
- [scripts/settings/ability/archetype_talents/talents/cryptic_talents.lua：474–493](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/cryptic_talents.lua#L474-L493)
- [scripts/ui/views/talent_builder_view/layouts/cryptic_tree.lua：237–266](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/ui/views/talent_builder_view/layouts/cryptic_tree.lua#L237-L266)

## 算例條件與待確認事項

- 按一般設定使用一次弦爪重擊 消耗1份充能（50點電容量）；重攻擊的暴擊判定為必定成功，並套用+50%撕裂。
- 該效果啟動期間的弦爪命中 近戰傷害修正為+30%，另有+50%撕裂；實際生命傷害仍依目標與部位計算。
- 50%撕裂是防護傷害計算修正，不等於生命傷害直接增加50%；+30%近戰傷害也不是固定增加30點生命傷害。
- 固定傷害設定檔列出的 attack/impact power 不是對所有敵人可直接套用的生命傷害值。
- inventory 中英都寫重型近戰攻擊、必定暴擊與+50%撕裂；來源吻合。啟動期間另有近戰修正與防暈屬程式實作額外細節，原文未提不構成明確矛盾。
- 遊戲原文：1.13.1／Steam Build 25606770 的 ui 資源。描述與實作的差異仍需遊戲內核對；省略細節不列為繁中誤譯。

## 原文核對

- 對應 hash：`df29b524`。
- 繁中與英文均列出強力重型近戰攻擊、必定暴擊及+50%撕裂，與攻擊 action 與能力效果一致。來源還對啟動期間提供近戰傷害及眩暈免疫；本地化沒有逐一列出這些額外效果，不視為相反說明。

## 圖示來源

[原圖](https://gameslantern.com/storage/sites/darktide/exporter/talents/cryptic/ability/cryptic_chordclaw.webp)｜[圖片來源 Issue](https://github.com/SyuanTsai/Media-Assets/issues/13#issuecomment-5935640756)｜[圖片附件](https://github.com/user-attachments/assets/af7ec3de-6e36-4171-8be2-d385177b170e)

圖片僅供技能辨識，不作機制證據。

