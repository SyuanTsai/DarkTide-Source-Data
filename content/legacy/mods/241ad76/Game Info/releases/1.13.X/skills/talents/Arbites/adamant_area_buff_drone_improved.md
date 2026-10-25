# 天鷹使節(Nuncio-Aquila)：原始碼依據

[English](en/adamant_area_buff_drone_improved.md)

[返回玩家說明](README.md#adamant_area_buff_drone_improved)｜[技術索引](SOURCE_INDEX.md)｜[原文比對](LOCALIZATION_COMPARISON.md#adamant_area_buff_drone_improved)

- 來源版本：Release 1.13.1；固定 SHA：`7e662fcda16219d775b84af50322be2e9cd9d62e`。
- 天賦：`adamant_area_buff_drone_improved`；名稱鍵：`loc_talent_ability_area_buff_drone`；描述鍵：`loc_talent_ability_area_buff_drone_new_improved_description`。
- 節點：`node_ccb98e10-453f-425b-8242-9d264faf7b25`；分類：能力；每節點一點。
- 證據程度：原始碼確認／程式推導；以下算例屬程式推導，未進行遊戲內測試。

## 原始碼確認與程式推導

- 能力有一層充能、冷卻 60 秒；部署物壽命 20 秒，盟友與敵人的鄰近判定半徑皆為 7.5 公尺。
- 強化天賦使區域邏輯以強化盟友增益替換基礎增益：韌性每秒恢復最大值的 7.5%，再提供壓制、衝擊與後座力修正，以及三種免疫關鍵字。
- 敵方效果以受到傷害倍率 1.15 加入；另外兩個升級節點可再給範圍內盟友韌性減傷、復活速度與攻擊速度，或使敵人的近戰攻速與傷害下降。
- 區域離開時會移除由傳令機施加的增益或減益，因此效果取決於目標留在有效範圍內的時間。

## 原始碼依據

- [scripts/settings/ability/archetype_talents/talents/adamant_talents.lua：503–595](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/adamant_talents.lua#L503-L595)
- [scripts/settings/talent/talent_settings_adamant.lua：67–83](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/talent/talent_settings_adamant.lua#L67-L83)
- [scripts/settings/ability/player_abilities/abilities/adamant_abilities.lua：77–91](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/player_abilities/abilities/adamant_abilities.lua#L77-L91)
- [scripts/settings/equipment/weapon_templates/combat_abilities/adamant_area_buff_drone.lua：7–15](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/combat_abilities/adamant_area_buff_drone.lua#L7-L15)
- [scripts/settings/projectile/player_projectile_templates.lua：1177–1226](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/projectile/player_projectile_templates.lua#L1177-L1226)
- [scripts/extension_systems/proximity/side_relation_gameplay_logic/proximity_area_buff_drone.lua：42–61](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/proximity/side_relation_gameplay_logic/proximity_area_buff_drone.lua#L42-L61)
- [scripts/extension_systems/proximity/side_relation_gameplay_logic/proximity_area_buff_drone.lua：224–295](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/proximity/side_relation_gameplay_logic/proximity_area_buff_drone.lua#L224-L295)
- [scripts/settings/buff/archetype_buff_templates/adamant_buff_templates.lua：424–492](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/adamant_buff_templates.lua#L424-L492)
- [scripts/settings/ability/archetype_talents/talents/adamant_talents.lua：542–595](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/adamant_talents.lua#L542-L595)
- [scripts/ui/views/talent_builder_view/layouts/adamant_tree.lua：324–352](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/ui/views/talent_builder_view/layouts/adamant_tree.lua#L324-L352)

## 算例條件與待確認事項

- 強化版每秒恢復 7.5%；連續 2 秒為 7.5%×2=15% 最大韌性，受目前缺少韌性限制。
- 敵方受到傷害倍率 1.15；基準傷害 100×1.15=115，尚未計入其他傷害修正。
- 韌性逐秒恢復，超過目前缺少量的部分不會形成超額韌性；離開半徑後區域邏輯會移除效果。
- 文字與程式來源皆為1.13.1；實際表現仍待遊戲內核對；數值與行為按固定來源提交說明。
- 遊戲原文：1.13.1／Steam Build 25606770 的 ui 資源。描述與實作的差異仍需遊戲內核對；省略細節不列為繁中誤譯。

## 原文核對

- 對應 hash：`1e02d48e`。
- 繁中「每秒恢復韌性」「對暈眩、減速和壓制效果免疫」分別對應英文「Toughness per second」及「Immune to Stun, Slowdown, and Suppression」；兩文都指出敵人承受更多傷害。

## 圖示來源

[原圖](https://gameslantern.com/storage/sites/darktide/exporter/talents/adamant/ability/adamant_area_buff_drone_improved.webp)｜[圖片來源 Issue](https://github.com/SyuanTsai/Media-Assets/issues/11#issuecomment-5932554216)｜[圖片附件](https://github.com/user-attachments/assets/18c1f301-d18b-4469-9fbf-bb5ede1b3353)

圖片僅供技能辨識，不作機制證據。

