# 飄忽身形(Inebriate's Poise)：原始碼依據

[English](en/zealot_quickness_passive_dodge_stacks.md)

[返回玩家說明](README.md#zealot_quickness_passive_dodge_stacks)｜[技術索引](SOURCE_INDEX.md)｜[原文比對](LOCALIZATION_COMPARISON.md#zealot_quickness_passive_dodge_stacks)

- 來源版本：Release 1.13.1；固定 SHA：`7e662fcda16219d775b84af50322be2e9cd9d62e`。
- 天賦：`zealot_quickness_passive_dodge_stacks`；名稱鍵：`loc_talent_zealot_quickness_dodge_stacks`；描述鍵：`loc_talent_zealot_quickness_dodge_stacks_desc`。
- 節點：`node_4edf073e-7aa4-4234-9d90-c0551ccdfb32`；分類：鑰石；每節點一點。
- 證據程度：原始碼確認／程式推導；以下算例屬程式推導，未進行遊戲內測試。

## 原始碼確認與程式推導

- 此升級授予 `zealot_quickness_dodge_stacks` special rule；Quickness parent buff 的成功閃避事件只有在該規則啟用時通過檢查，並以設定值 3 加入 counter 子 buff。
- 閃避所加層數與移動距離層數進入同一個最多 20 層的計數器，沒有獨立計時器。後續仍須命中且 Quickness active 尚未生效，才會消耗目前計數並啟動效果。

## 原始碼依據

- [scripts/settings/ability/archetype_talents/talents/zealot_talents.lua：1011–1030](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/zealot_talents.lua#L1011-L1030)
- [scripts/settings/talent/talent_settings_zealot.lua：556–561](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/talent/talent_settings_zealot.lua#L556-L561)
- [scripts/settings/buff/archetype_buff_templates/zealot_buff_templates.lua：165–234](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/zealot_buff_templates.lua#L165-L234)
- [scripts/settings/ability/archetype_talents/talents/zealot_talents.lua：1011–1030](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/zealot_talents.lua#L1011-L1030)
- [scripts/ui/views/talent_builder_view/layouts/zealot_tree.lua：1221–1243](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/ui/views/talent_builder_view/layouts/zealot_tree.lua#L1221-L1243)

## 算例條件與待確認事項

- **層數算例**：原本 18 層，成功閃避後為 min(18 + 3, 20) = 20 層；超出的 1 層不保留。加成期間可累積下一輪，但必須等本輪結束再命中，才會使用這些勢能。
- 此效果判定的是遊戲回報的成功閃避事件；一般移動或未成功避開攻擊不算。
- 示例只推演層數截斷與後續觸發，未計其他來源的閃避機制。
- 遊戲原文：1.13.1／Steam Build 25606770 的 ui 資源。描述與實作的差異仍需遊戲內核對；省略細節不列為繁中誤譯。

## 原文核對

- 對應 hash：`6a266b91`。
- 英文與繁中都指向成功閃避可取得 Quickness 層數；每次 3 層與共享上限是程式細節。

## 圖示來源

[原圖](https://gameslantern.com/storage/sites/darktide/exporter/talents/zealot/keystone_modifier/zealot_quickness_passive_dodge_stacks.webp)｜[圖片來源 Issue](https://github.com/SyuanTsai/Media-Assets/issues/8#issuecomment-5929289315)｜[圖片附件](https://github.com/user-attachments/assets/b51610bf-5b84-45d0-97fe-abedede00719)

圖片僅供技能辨識，不作機制證據。

