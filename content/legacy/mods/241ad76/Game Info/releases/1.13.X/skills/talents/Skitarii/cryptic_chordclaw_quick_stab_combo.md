# 試探連擊(Probing Strikes)：原始碼依據

[English](en/cryptic_chordclaw_quick_stab_combo.md)

[返回玩家說明](README.md#cryptic_chordclaw_quick_stab_combo)｜[技術索引](SOURCE_INDEX.md)｜[原文比對](LOCALIZATION_COMPARISON.md#cryptic_chordclaw_quick_stab_combo)

- 來源版本：Release 1.13.1；固定 SHA：`7e662fcda16219d775b84af50322be2e9cd9d62e`。
- 天賦：`cryptic_chordclaw_quick_stab_combo`；名稱鍵：`loc_talent_cryptic_chordclaw_quick_stab_combo`；描述鍵：`loc_talent_cryptic_chordclaw_quick_stab_combo_clarified_desc`。
- 節點：`node_bf90aeb2-d7bf-4f42-86ea-ecbc7f9f163c`；分類：能力；每節點一點。
- 證據程度：原始碼確認／程式推導；以下算例屬程式推導，未進行遊戲內測試。

## 原始碼確認與程式推導

- 天賦特殊規則將快速啟用分支切到action_stab_1/2/3，三段均guaranteed_crit=true，使用chordclaw_stab_bleed。按住後的from_charge分支明確固定連到action_heavy_sticky_attack_1。
- 傷害模板on_damage_dealt套用bleed_long=6；Attack._handle_buffs以damage>0及可用目標buff extension套用。因此每段造成傷害的刺擊各加6層；單純未命中不加層。
- bleed_long最多18層、持續9.5秒、interval=0.375，新增層重新計時。實際每跳流血傷害仍需代入bleeding傷害模板、層數比例、敵人護甲與其他修正，不能把6層當固定6點傷害。

## 原始碼依據

- [scripts/settings/ability/archetype_talents/talents/cryptic_talents.lua：494–512](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/cryptic_talents.lua#L494-L512)
- [scripts/settings/equipment/weapon_action_handler_data.lua：697–710](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_action_handler_data.lua#L697-L710)
- [scripts/settings/equipment/weapon_templates/combat_abilities/cryptic_transonic_claw.lua：561–580](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/combat_abilities/cryptic_transonic_claw.lua#L561-L580)
- [scripts/settings/equipment/weapon_templates/combat_abilities/cryptic_transonic_claw.lua：752–1002](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/combat_abilities/cryptic_transonic_claw.lua#L752-L1002)
- [scripts/settings/damage/damage_profiles/archetypes/cryptic_damage_profile_templates.lua：214–344](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/damage/damage_profiles/archetypes/cryptic_damage_profile_templates.lua#L214-L344)
- [scripts/settings/buff/weapon_buff_templates.lua：275–284](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/weapon_buff_templates.lua#L275-L284)
- [scripts/settings/equipment/weapon_templates/combat_abilities/cryptic_transonic_claw.lua：1007–1039](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/combat_abilities/cryptic_transonic_claw.lua#L1007-L1039)
- [scripts/utilities/attack/attack.lua：713–749](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/attack/attack.lua#L713-L749)
- [scripts/settings/ability/archetype_talents/talents/cryptic_talents.lua：494–512](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/cryptic_talents.lua#L494-L512)
- [scripts/ui/views/talent_builder_view/layouts/cryptic_tree.lua：1171–1194](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/ui/views/talent_builder_view/layouts/cryptic_tree.lua#L1171-L1194)

## 算例條件與待確認事項

- 三段快速刺擊各自對同一名敵人造成生命傷害：6+6+6=18層流血，達到18層上限。
- 若三段中只有兩段造成生命傷害，則這兩段合計新增12層；未命中的刺擊不會經由傷害事件加上流血。
- 每次刺擊的固定生命傷害無法由這份傷害設定直接讀出；傷害會受目標、威力與其他修正影響。
- 新增流血受目標既有流血層數及18層上限限制；加層會重設該流血效果的持續時間。
- 遊戲原文：1.13.1／Steam Build 25606770 的 ui 資源。描述與實作的差異仍需遊戲內核對；省略細節不列為繁中誤譯。

## 原文核對

- 對應 hash：`e0d3d43f`。
- 繁中與英文都列出3次快速刺擊、6層流血及按住輸入改用一般攻擊。文字沒有明說每次造成傷害的刺擊各加6層；固定版來源碼顯示此為逐次命中效果，屬未展開條件而非相反敘述。

## 圖示來源

[原圖](https://gameslantern.com/storage/sites/darktide/exporter/talents/cryptic/ability_modifier/cryptic_chordclaw_quick_stab_combo.webp)｜[圖片來源 Issue](https://github.com/SyuanTsai/Media-Assets/issues/13#issuecomment-5935640756)｜[圖片附件](https://github.com/user-attachments/assets/7d516cae-80f0-4d48-b562-b5a21f6ddcd1)

圖片僅供技能辨識，不作機制證據。

