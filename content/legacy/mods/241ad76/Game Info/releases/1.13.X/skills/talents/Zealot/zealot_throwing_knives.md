# 信仰之刃(Blades of Faith)：原始碼依據

[English](en/zealot_throwing_knives.md)

[返回玩家說明](README.md#zealot_throwing_knives)｜[技術索引](SOURCE_INDEX.md)｜[原文比對](LOCALIZATION_COMPARISON.md#zealot_throwing_knives)

- 來源版本：Release 1.13.1；固定 SHA：`7e662fcda16219d775b84af50322be2e9cd9d62e`。
- 天賦：`zealot_throwing_knives`；名稱鍵：`loc_ability_zealot_throwing_knifes`；描述鍵：`loc_ability_zealot_throwing_knifes_desc`。
- 節點：`node_f830003e-bb99-448f-aac6-f8a4dbf61d50`；分類：閃擊；每節點一點。
- 證據程度：原始碼確認／程式推導；以下算例屬程式推導，未進行遊戲內測試。

## 原始碼確認與程式推導

- talent 綁定 PlayerAbilities.zealot_throwing_knives，並掛上 no_grenades、ammo_gives_grenades、zealot_throwing_knives 三個 special rules；能力模板固定 max_charges=12 並啟用 only_use_ability_charges。
- 武器 action 設定 fire_time=0.25、total_time=0.55、起始輸入為 wield，並在投射物發射時消耗能力使用次數；投射物命中後刪除，傷害範本為 DamageProfileTemplates.zealot_throwing_knives。
- 傷害範本對 super_armor 設 no_damage，carapace 常落入此護甲類別；最終傷害仍受命中目標的實際護甲部位及其他攻擊計算影響。
- 補刀被動監聽近戰擊殺並呼叫 check_proc_func；helper 要求攻擊結果為 died 且 attack_type 為 melee，並判斷目標屬 elite 或 special，成功才 restore 1 grenade ability charge。
- ammo interaction 對帶 ammo_pickups_refills_grenades 特例的能力，取 pickup_data.ammo_amount_func(max_grenade_charges, 0, pickup_data) 並將新充能數夾在最大值內；大型彈藥箱的函式以最大備用彈藥量作為補給量。
- ProjectileDamageExtension 使用 DEFAULT_POWER_LEVEL=500 呼叫 Attack.execute；傷害 profile attack=585。固定 charge=1、無其他修正時，20×(500×585/10000)=585；再乘部位護甲 ADM。弱點／暴擊增傷另走 finesse 流程。
- 彈藥互動先讀 difficulty ammo_modifier，再把最大刀量 12 當作 max_ammunition_reserve 傳入各 pickup 函式。small_clip ceil(.15×m×12)，large_clip ceil(.5×m×12)，deployable ceil(m×12)；m=1 時分別 2、6、12。

## 原始碼依據

- [scripts/settings/ability/archetype_talents/talents/zealot_talents.lua：198–239](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/zealot_talents.lua#L198-L239)
- [scripts/settings/ability/player_abilities/abilities/zealot_abilities.lua：118–133](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/player_abilities/abilities/zealot_abilities.lua#L118-L133)
- [scripts/settings/talent/talent_settings_zealot.lua：319–328](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/talent/talent_settings_zealot.lua#L319-L328)
- [scripts/settings/equipment/weapon_templates/base_template_settings.lua：161–220](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/base_template_settings.lua#L161-L220)
- [scripts/settings/projectile/player_projectile_templates.lua：529–552](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/projectile/player_projectile_templates.lua#L529-L552)
- [scripts/settings/damage/damage_profiles/archetypes/zealot_damage_profile_templates.lua：254–299](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/damage/damage_profiles/archetypes/zealot_damage_profile_templates.lua#L254-L299)
- [scripts/settings/buff/archetype_buff_templates/zealot_buff_templates.lua：3905–3948](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/zealot_buff_templates.lua#L3905-L3948)
- [scripts/settings/buff/helper_functions/check_proc_functions.lua：208–235](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/helper_functions/check_proc_functions.lua#L208-L235)
- [scripts/extension_systems/interaction/interactions/ammunition_interaction.lua：53–83](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/interaction/interactions/ammunition_interaction.lua#L53-L83)
- [scripts/extension_systems/interaction/interactions/ammunition_interaction.lua：102–147](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/interaction/interactions/ammunition_interaction.lua#L102-L147)
- [scripts/extension_systems/interaction/interactions/grenade_interaction.lua：86–93](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/interaction/interactions/grenade_interaction.lua#L86-L93)
- [scripts/settings/pickup/pickups/level/large_ammunition_crate_pickup.lua：3–18](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/pickup/pickups/level/large_ammunition_crate_pickup.lua#L3-L18)
- [scripts/extension_systems/projectile_damage/projectile_damage_extension.lua：529–544](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/projectile_damage/projectile_damage_extension.lua#L529-L544)
- [scripts/settings/pickup/pickups/consumable/small_clip_pickup.lua：3–19](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/pickup/pickups/consumable/small_clip_pickup.lua#L3-L19)
- [scripts/settings/pickup/pickups/consumable/large_clip_pickup.lua：3–19](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/pickup/pickups/consumable/large_clip_pickup.lua#L3-L19)
- [scripts/settings/pickup/pickups/deployable/ammo_cache_deployable_pickup.lua：3–23](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/pickup/pickups/deployable/ammo_cache_deployable_pickup.lua#L3-L23)
- [scripts/settings/damage/power_level_settings.lua：7–25](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/damage/power_level_settings.lua#L7-L25)
- [scripts/utilities/attack/power_level.lua：21–23](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/attack/power_level.lua#L21-L23)
- [scripts/utilities/attack/power_level.lua：63–91](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/attack/power_level.lua#L63-L91)
- [scripts/utilities/attack/damage_profile.lua：29–80](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/attack/damage_profile.lua#L29-L80)
- [scripts/utilities/attack/damage_calculation.lua：219–227](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/attack/damage_calculation.lua#L219-L227)
- [scripts/settings/ability/archetype_talents/talents/zealot_talents.lua：198–239](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/zealot_talents.lua#L198-L239)
- [scripts/ui/views/talent_builder_view/layouts/zealot_tree.lua：206–232](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/ui/views/talent_builder_view/layouts/zealot_tree.lua#L206-L232)

## 算例條件與待確認事項

- 585×.8=468；此為無暴擊、無弱點、無穿甲及其他修正的防彈護甲普通命中。
- 剩 8 把時，m=1 的小補給增加 2 變 10，大補給增加 6 但封頂為 12。
- 補刀要求擊殺判定成功、攻擊類型為 melee，且目標符合 elite 或 special 分類；近戰命中、助攻或遠程擊殺不等於必定補刀。
- 彈藥補刀量取決於撿取物自己的 ammo_amount_func；不能把所有彈藥箱都寫成固定補 1 把。
- Build 25606770 的英文與繁中都描述彈藥箱補刀及對 Carapace 較弱；沒有足以判定明確翻譯錯誤的差異。
- 遊戲原文：1.13.1／Steam Build 25606770 的 ui 資源。描述與實作的差異仍需遊戲內核對；省略細節不列為繁中誤譯。

## 原文核對

- 對應 hash：`5c177ee2`。
- 繁中與英文描述均提及近戰擊殺精英／專家補 1 把及彈藥箱補刀；來源中補給量依 pickup 設定變化，不足以判定「彈藥箱可補充」是翻譯錯誤。

## 圖示來源

[原圖](https://gameslantern.com/storage/sites/darktide/exporter/talents/zealot/tactical/zealot_throwing_knives.webp)｜[圖片來源 Issue](https://github.com/SyuanTsai/Media-Assets/issues/8#issuecomment-5929289315)｜[圖片附件](https://github.com/user-attachments/assets/8d21cff6-d918-4e91-8426-b98634887a03)

圖片僅供技能辨識，不作機制證據。

