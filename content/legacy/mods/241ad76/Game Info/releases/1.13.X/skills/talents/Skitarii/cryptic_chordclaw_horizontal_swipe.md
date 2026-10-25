# 軸向斬擊(Axial Slash)：原始碼依據

[English](en/cryptic_chordclaw_horizontal_swipe.md)

[返回玩家說明](README.md#cryptic_chordclaw_horizontal_swipe)｜[技術索引](SOURCE_INDEX.md)｜[原文比對](LOCALIZATION_COMPARISON.md#cryptic_chordclaw_horizontal_swipe)

- 來源版本：Release 1.13.1；固定 SHA：`7e662fcda16219d775b84af50322be2e9cd9d62e`。
- 天賦：`cryptic_chordclaw_horizontal_swipe`；名稱鍵：`loc_talent_cryptic_chordclaw_horizontal_swipe`；描述鍵：`loc_talent_cryptic_chordclaw_horizontal_swipe_desc`。
- 節點：`node_9d962b30-33ec-48bc-915f-f19f4a2d8ed2`；分類：能力；每節點一點。
- 證據程度：原始碼確認／程式推導；以下算例屬程式推導，未進行遊戲內測試。

## 原始碼確認與程式推導

- Talent 只開啟 cryptic_chordclaw_do_horizontal_swipe 特殊規則。武器 action handler 依此規則，把 ability lunge attack 從預設 big sticky attack 分支切換至 action_horizontal_attack_1。
- 橫掃 action 是 guaranteed_crit=true 的 heavy sweep，damage profile 為 chordclaw_horizontal。該 profile 依目標序列設定 attack power 500、480、450、410、360，後續目標300；impact power依序100、90、80、70、60，後續50。這些為 power distribution，不能直接當成對所有敵人的生命損失。
- 此天賦改變攻擊動作與傷害 profile；沒有在此天賦模板加入固定額外傷害或新的充能消耗。能力本身的使用成本仍由弦爪能力設定決定。
- from_charge分支在1030–1038固定選action_heavy_sticky_attack_1，不經快速施放的三個天賦條件分支；所以本天賦替換快速施放，按住蓄力保留原重刺。

## 原始碼依據

- [scripts/settings/ability/archetype_talents/talents/cryptic_talents.lua：513–522](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/cryptic_talents.lua#L513-L522)
- [scripts/settings/equipment/weapon_action_handler_data.lua：697–710](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_action_handler_data.lua#L697-L710)
- [scripts/settings/equipment/weapon_templates/combat_abilities/cryptic_transonic_claw.lua：561–575](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/combat_abilities/cryptic_transonic_claw.lua#L561-L575)
- [scripts/settings/equipment/weapon_templates/combat_abilities/cryptic_transonic_claw.lua：739–751](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/combat_abilities/cryptic_transonic_claw.lua#L739-L751)
- [scripts/settings/damage/damage_profiles/archetypes/cryptic_damage_profile_templates.lua：459–527](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/damage/damage_profiles/archetypes/cryptic_damage_profile_templates.lua#L459-L527)
- [scripts/settings/equipment/weapon_templates/combat_abilities/cryptic_transonic_claw.lua：663–751](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/combat_abilities/cryptic_transonic_claw.lua#L663-L751)
- [scripts/settings/damage/damage_profiles/archetypes/cryptic_damage_profile_templates.lua：459–550](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/damage/damage_profiles/archetypes/cryptic_damage_profile_templates.lua#L459-L550)
- [scripts/settings/equipment/weapon_templates/combat_abilities/cryptic_transonic_claw.lua：1007–1039](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/combat_abilities/cryptic_transonic_claw.lua#L1007-L1039)
- [scripts/settings/ability/archetype_talents/talents/cryptic_talents.lua：513–522](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/cryptic_talents.lua#L513-L522)
- [scripts/ui/views/talent_builder_view/layouts/cryptic_tree.lua：1147–1170](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/ui/views/talent_builder_view/layouts/cryptic_tree.lua#L1147-L1170)

## 算例條件與待確認事項

- 以弦爪能力發動攻擊且選取軸向斬擊 攻擊分支切換至橫掃，對前五個目標的攻擊力量依序為500、480、450、410、360；後續目標使用300。這些不是生命傷害點數。
- 橫掃命中一個可暴擊目標 攻擊設定使用必定暴擊；實際生命傷害仍依目標防護與命中部位計算。
- 天賦描述未提供固定傷害數字；來源傷害設定檔的 power distribution 會再經目標、防護與命中計算，不能當作生命傷害。
- 攻擊鏈是否命中多個目標由掃掠、穿透與敵人位置決定，不保證每次都命中 profile 所列全部目標。
- 繁中與英文只描述新增橫掃動作，與來源 action 分支一致；額外的攻擊設定檔細節為原文省略，未見明確矛盾。
- 遊戲原文：1.13.1／Steam Build 25606770 的 ui 資源。描述與實作的差異仍需遊戲內核對；省略細節不列為繁中誤譯。

## 原文核對

- 對應 hash：`262d64b6`。
- inventory 中英都表示弦爪改用橫向橫掃，與特殊規則選取水平掃擊 action 相符。兩種本地化都未列攻擊力量表，屬未呈現內部數值，不能據此判為錯誤。

## 圖示來源

[原圖](https://gameslantern.com/storage/sites/darktide/exporter/talents/cryptic/ability_modifier/cryptic_chordclaw_horizontal_swipe.webp)｜[圖片來源 Issue](https://github.com/SyuanTsai/Media-Assets/issues/13#issuecomment-5935640756)｜[圖片附件](https://github.com/user-attachments/assets/94595162-990c-418a-9bbc-9b3e90ed790b)

圖片僅供技能辨識，不作機制證據。

