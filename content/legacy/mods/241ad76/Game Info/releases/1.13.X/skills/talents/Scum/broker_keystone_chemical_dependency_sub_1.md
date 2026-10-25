# 化學強化(Chem Enhanced)：原始碼依據

[English](en/broker_keystone_chemical_dependency_sub_1.md)

[返回玩家說明](README.md#broker_keystone_chemical_dependency_sub_1)｜[技術索引](SOURCE_INDEX.md)｜[原文比對](LOCALIZATION_COMPARISON.md#broker_keystone_chemical_dependency_sub_1)

- 來源版本：Release 1.13.1；固定 SHA：`7e662fcda16219d775b84af50322be2e9cd9d62e`。
- 天賦：`broker_keystone_chemical_dependency_sub_1`；名稱鍵：`loc_talent_broker_keystone_chemical_dependency_sub_1`；描述鍵：`loc_talent_broker_keystone_chemical_dependency_sub_1_desc`。
- 節點：`node_c557fdde-e5e1-4849-b9ba-1d5302550fb0`；分類：鑰石；每節點一點。
- 證據程度：原始碼確認／程式推導；以下算例屬程式推導，未進行遊戲內測試。

## 原始碼確認與程式推導

- 升級 special rule 開啟 stack buff 的 conditional_stat_buffs.critical_strike_chance；該 stat 值為 0.05，stat type 是 value，Buff._calculate_stat_buffs 依 stack count 重複相加，因此每層 +0.05、3 層 +0.15。
- CriticalStrike.chance 的計算為 clamp(base_chance + generic critical_strike_chance + 近戰或遠程專屬 chance + weapon modifier, 0, 1)。Broker archetype base_critical_strike_chance=0.10；故只有此升級與 3 層時為 0.10+3×0.05=0.25。
- 此升級只切換 conditional critical-strike-chance stat；堆疊持續時間、上限、回充倍率與逐層衰退均由核心 Chemical Dependency buff 控制。

## 原始碼依據

- [scripts/settings/ability/archetype_talents/talents/broker_talents.lua：2512–2538](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/broker_talents.lua#L2512-L2538)
- [scripts/settings/talent/talent_settings_broker.lua：454–463](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/talent/talent_settings_broker.lua#L454-L463)
- [scripts/settings/buff/archetype_buff_templates/broker_buff_templates.lua：3524–3566](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/broker_buff_templates.lua#L3524-L3566)
- [scripts/settings/buff/buff_settings.lua：757–759](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/buff_settings.lua#L757-L759)
- [scripts/extension_systems/buff/buffs/buff.lua：689–727](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/buff/buffs/buff.lua#L689-L727)
- [scripts/settings/archetype/archetypes/broker_archetype.lua：20–25](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/archetype/archetypes/broker_archetype.lua#L20-L25)
- [scripts/utilities/attack/critical_strike.lua：13–39](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/attack/critical_strike.lua#L13-L39)
- [scripts/settings/ability/archetype_talents/talents/broker_talents.lua：2512–2538](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/broker_talents.lua#L2512-L2538)
- [scripts/ui/views/talent_builder_view/layouts/broker_tree.lua：1566–1588](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/ui/views/talent_builder_view/layouts/broker_tree.lua#L1566-L1588)

## 算例條件與待確認事項

- **爆擊率算例**：Broker 基礎 10%＋3 層×5 個百分點=25%，再加武器或其他天賦修正後才套用 0%–100% 上下限。
- **層數算例**：1 層為 +5 個百分點、2 層 +10 個百分點、3 層 +15 個百分點。
- 25% 算例尚未計入武器 handling template、近戰／遠程專屬爆擊率及其他天賦修正；最終機率會被限制在 0% 到 100%。
- 此項提供爆擊率，不是每次攻擊保證暴擊，也不改變暴擊傷害倍率。
- 遊戲原文：1.13.1／Steam Build 25606770 的 ui 資源。描述與實作的差異仍需遊戲內核對；省略細節不列為繁中誤譯。

## 原文核對

- 對應 hash：`3356ae07`。
- 繁中與英文均表示每一層化學依賴性提升爆擊率；程式值為每層 0.05，按層數加到通用爆擊率，而非暴擊傷害。

## 圖示來源

[原圖](https://gameslantern.com/storage/sites/darktide/exporter/talents/broker/keystone_modifier/broker_keystone_chemical_dependency_sub_1.webp)｜[圖片來源 Issue](https://github.com/SyuanTsai/Media-Assets/issues/12#issuecomment-5933978534)｜[圖片附件](https://github.com/user-attachments/assets/b7fff291-d5f3-4213-bfef-8b28b8065889)

圖片僅供技能辨識，不作機制證據。

