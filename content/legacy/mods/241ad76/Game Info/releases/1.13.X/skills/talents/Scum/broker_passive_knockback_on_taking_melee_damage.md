# 街頭硬漢(Street Tough)：原始碼依據

[English](en/broker_passive_knockback_on_taking_melee_damage.md)

[返回玩家說明](README.md#broker_passive_knockback_on_taking_melee_damage)｜[技術索引](SOURCE_INDEX.md)｜[原文比對](LOCALIZATION_COMPARISON.md#broker_passive_knockback_on_taking_melee_damage)

- 來源版本：Release 1.13.1；固定 SHA：`7e662fcda16219d775b84af50322be2e9cd9d62e`。
- 天賦：`broker_passive_knockback_on_taking_melee_damage`；名稱鍵：`loc_talent_broker_passive_knockback_on_taking_melee_damage`；描述鍵：`loc_talent_broker_passive_knockback_on_taking_melee_damage_desc_02`。
- 節點：`node_c194e0f2-7b23-4667-bca2-57f4bdfa03cc`；分類：技能；每節點一點。
- 證據程度：原始碼確認／程式推導；以下算例屬程式推導，未進行遊戲內測試。

## 原始碼確認與程式推導

- on_player_hit_received要求melee並排除breed.tags.disabler；cooldown_duration8，獨立child移速.1/duration3，不是active_duration3後才冷卻。
- Explosion radius3、damage profile attack=0、medium stagger，superarmor等impact不同。

## 原始碼依據

- [scripts/settings/buff/archetype_buff_templates/broker_buff_templates.lua：3339–3346](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/broker_buff_templates.lua#L3339-L3346)
- [scripts/settings/damage/explosion_templates/player_explosion_templates.lua：240–251](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/damage/explosion_templates/player_explosion_templates.lua#L240-L251)
- [scripts/settings/damage/damage_profiles/archetypes/broker_damage_profile_templates.lua：532–565](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/damage/damage_profiles/archetypes/broker_damage_profile_templates.lua#L532-L565)
- [scripts/extension_systems/buff/buffs/proc_buff.lua：150–181](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/buff/buffs/proc_buff.lua#L150-L181)
- [scripts/settings/buff/archetype_buff_templates/broker_buff_templates.lua：3301–3338](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/broker_buff_templates.lua#L3301-L3338)
- [scripts/settings/buff/archetype_buff_templates/broker_buff_templates.lua：3339–3358](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/broker_buff_templates.lua#L3339-L3358)
- [scripts/settings/ability/archetype_talents/talents/broker_talents.lua：2345–2387](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/broker_talents.lua#L2345-L2387)
- [scripts/ui/views/talent_builder_view/layouts/broker_tree.lua：1059–1088](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/ui/views/talent_builder_view/layouts/broker_tree.lua#L1059-L1088)

## 算例條件與待確認事項

- **冷卻與算例**：觸發後冷卻 8 秒；單計本效果，移速 5 公尺／秒變成 5 × 1.1 = 5.5 公尺／秒。
- 遊戲原文：1.13.1／Steam Build 25606770 的 ui 資源。描述與實作的差異仍需遊戲內核對；省略細節不列為繁中誤譯。

## 原文核對

- 對應 hash：`f7be7408`。
- 兩語都是受近戰攻擊觸發擊退與移速；未提排除敵人屬補充。

## 圖示來源

[原圖](https://gameslantern.com/storage/sites/darktide/exporter/talents/broker/default/broker_passive_knockback_on_taking_melee_damage.webp)｜[圖片來源 Issue](https://github.com/SyuanTsai/Media-Assets/issues/12#issuecomment-5933987866)｜[圖片附件](https://github.com/user-attachments/assets/069e6733-6d1f-4859-a3a6-829d213fd0a1)

圖片僅供技能辨識，不作機制證據。

