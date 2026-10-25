# 治癒詩頌(Restorative Verses)：原始碼依據

[English](en/zealot_martyrdom_toughness_modifier.md)

[返回玩家說明](README.md#zealot_martyrdom_toughness_modifier)｜[技術索引](SOURCE_INDEX.md)｜[原文比對](LOCALIZATION_COMPARISON.md#zealot_martyrdom_toughness_modifier)

- 來源版本：Release 1.13.1；固定 SHA：`7e662fcda16219d775b84af50322be2e9cd9d62e`。
- 天賦：`zealot_martyrdom_toughness_modifier`；名稱鍵：`loc_talent_zealot_martyrdom_toughness_modifier`；描述鍵：`loc_talent_zealot_martyrdom_toughness_modifier_upd_desc`。
- 節點：`node_4db4d1f1-d5b8-4d3f-a352-b50194ef96e4`；分類：鑰石；每節點一點。
- 證據程度：原始碼確認／程式推導；以下算例屬程式推導，未進行遊戲內測試。

## 原始碼確認與程式推導

- 節點掛載 `zealot_martyrdom_toughness_modifier`，修改 `toughness_replenish_modifier`。Buff 最大值為設定每格0.05×5，並依殉道的失去傷口格數/5線性插值，因此0至5格分別由0%增至25%。
- 此 stat 是韌性恢復效率倍率，不是立即 `Toughness.replenish_percentage` 呼叫；不應翻成每疊直接恢復固定韌性。
- 傷口格數與殉道共用：更新函式取 `damage_taken` 和 `permanent_damage_taken` 較大值，再用 Health helper 按最大生命/最大傷口換算完整已失去格數。

## 原始碼依據

- [scripts/settings/ability/archetype_talents/talents/zealot_talents.lua：2300–2319](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/zealot_talents.lua#L2300-L2319)
- [scripts/settings/talent/talent_settings_zealot.lua：122–124](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/talent/talent_settings_zealot.lua#L122-L124)
- [scripts/settings/buff/archetype_buff_templates/zealot_buff_templates.lua：633–652](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/zealot_buff_templates.lua#L633-L652)
- [scripts/settings/buff/archetype_buff_templates/zealot_buff_templates.lua：680–704](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/zealot_buff_templates.lua#L680-L704)
- [scripts/utilities/health.lua：117–127](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/health.lua#L117-L127)
- [scripts/ui/views/talent_builder_view/layouts/zealot_tree.lua：1598–1622](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/ui/views/talent_builder_view/layouts/zealot_tree.lua#L1598-L1622)
- [scripts/extension_systems/toughness/player_unit_toughness_extension.lua：253–285](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/toughness/player_unit_toughness_extension.lua#L253-L285)
- [scripts/settings/ability/archetype_talents/talents/zealot_talents.lua：2300–2319](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/zealot_talents.lua#L2300-L2319)
- [scripts/ui/views/talent_builder_view/layouts/zealot_tree.lua：1598–1622](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/ui/views/talent_builder_view/layouts/zealot_tree.lua#L1598-L1622)

## 算例條件與待確認事項

- **恢復算例**：某效果原本補 10 點韌性，2 層時為 10 × (1 + 2 × 5%) = 11 點；5 層時為 12.5 點。若另有同階段 20% 恢復加成，滿層為 10 × (1 + 20% + 25%) = 14.5 點，仍受韌性缺額限制。
- 示例說明加到恢復效率的 modifier，不計入其他恢復修正的最後合併公式。
- 每格的傷口格寬由實際最大生命值與最大傷口數決定；設定中的 `health_step=.15` 未被目前計算路徑讀取。
- 遊戲原文：1.13.1／Steam Build 25606770 的 ui 資源。描述與實作的差異仍需遊戲內核對；省略細節不列為繁中誤譯。

## 原文核對

- 對應 hash：`d473a3ea`。
- 繁中寫成「每疊加一層會恢復5%韌性」，把效率提升誤成直接恢復；英文為 Toughness Replenishment，執行時掛載 toughness_replenish_modifier 並隨失去傷口格插值。應改為「每層提高韌性回復效率5%」一類表述。

## 圖示來源

[原圖](https://gameslantern.com/storage/sites/darktide/exporter/talents/zealot/keystone_modifier/zealot_martyrdom_toughness_modifier.webp)｜[圖片來源 Issue](https://github.com/SyuanTsai/Media-Assets/issues/8#issuecomment-5929289315)｜[圖片附件](https://github.com/user-attachments/assets/5ac46e08-8f7b-4828-8bfa-e47c240e113b)

圖片僅供技能辨識，不作機制證據。

