# 堅定不移(Determined)

[English](en/veteran_supression_immunity.md)

[返回基礎效果](BASE_EFFECTS.md)｜[技能樹索引](SOURCE_INDEX.md)

## 運作方式

- 不會因敵人的火力壓制而累積壓制效果。
- 這項免疫不會減少被子彈命中的傷害，也不代表免疫擊退、倒地或其他控制。

## 原始碼確認與程式推導

- 固定 SHA：`7e662fcda16219d775b84af50322be2e9cd9d62e`。基礎天賦 `veteran_supression_immunity`；名稱鍵 `loc_talent_veteran_supression_immunity`；描述鍵 `loc_talent_veteran_supression_immunity_desc`。
- 由職業基礎清單啟用，不是77個技能樹節點之外的額外可選節點。

- 天賦識別碼原文拼作 supression，實際套用 veteran_suppression_immunity，提供 suppression_immune keyword。
- PlayerSuppressionExtension.add_suppression 伺服器端先檢查此keyword，有則在累積num_suppression_hits前return。因此是阻止壓制累積，沒有調整damage或stagger屬性。

## 原始碼依據

- [scripts/settings/archetype/archetypes/veteran_archetype.lua，第 50–74 行](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/archetype/archetypes/veteran_archetype.lua#L50-L74)
- [scripts/settings/ability/archetype_talents/talents/veteran_talents.lua，第 1390–1399 行](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/veteran_talents.lua#L1390-L1399)
- [scripts/settings/buff/archetype_buff_templates/veteran_buff_templates.lua，第 2188–2197 行](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/veteran_buff_templates.lua#L2188-L2197)
- [scripts/extension_systems/suppression/player_suppression_extension.lua，第 117–136 行](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/suppression/player_suppression_extension.lua#L117-L136)

## 圖示來源

圖片僅供技能辨識，不作機制證據。

