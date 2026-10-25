# 最強壯！(Strongest!)：原始碼依據

[English](en/ogryn_carapace_armor_add_stack_on_push.md)

[返回玩家說明](README.md#ogryn_carapace_armor_add_stack_on_push)｜[技術索引](SOURCE_INDEX.md)｜[原文比對](LOCALIZATION_COMPARISON.md#ogryn_carapace_armor_add_stack_on_push)

- 來源版本：Release 1.13.1；固定 SHA：`7e662fcda16219d775b84af50322be2e9cd9d62e`。
- 天賦：`ogryn_carapace_armor_add_stack_on_push`；名稱鍵：`loc_talent_ogryn_carapace_armor_add_stack_on_push`；描述鍵：`loc_talent_ogryn_carapace_armor_add_stack_on_push_desc`。
- 節點：`node_74124e64-9e74-4e38-a5ce-0ab0a8516736`；分類：鑰石；每節點一點。
- 證據程度：原始碼確認／程式推導；以下算例屬程式推導，未進行遊戲內測試。

## 原始碼確認與程式推導

- 天賦只加 special rule。父 proc buff 將 `on_push_finish` 加入 child proc events；該事件專用檢查要求 special rule 存在且 `params.num_hit_units>0`，ParentProcBuff 每次成功事件最多加入設定的一層。
- 父 buff 的實際子層上限為 11 個，stack offset -1 對應 10 個玩家可見層；加層會寫入 `_add_child_stack_t`，影響自動恢復條件。

## 原始碼依據

- [scripts/settings/ability/archetype_talents/talents/ogryn_talents.lua：1677–1692](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/ogryn_talents.lua#L1677-L1692)
- [scripts/settings/buff/archetype_buff_templates/ogryn_buff_templates.lua：626–682](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/ogryn_buff_templates.lua#L626-L682)
- [scripts/extension_systems/buff/buffs/parent_proc_buff.lua：84–95](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/buff/buffs/parent_proc_buff.lua#L84-L95)
- [scripts/extension_systems/buff/buffs/parent_proc_buff.lua：127–162](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/buff/buffs/parent_proc_buff.lua#L127-L162)
- [scripts/settings/ability/archetype_talents/talents/ogryn_talents.lua：1677–1692](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/ogryn_talents.lua#L1677-L1692)
- [scripts/ui/views/talent_builder_view/layouts/ogryn_tree.lua：763–785](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/ui/views/talent_builder_view/layouts/ogryn_tree.lua#L763-L785)

## 算例條件與待確認事項

- **算例**：6 層時推中 1 名或 3 名敵人，都恢復至 7 層；10 層時再推中敵人仍維持 10 層。
- 機制核對至指定公開來源 SHA 7e662fcda16219d775b84af50322be2e9cd9d62e；本機 Build 25606770 的中英文字串與公開來源版本對應為1.13.1，文字與實作差異待遊戲內核對。
- 這個節點本身沒有額外冷卻；能否加層取決於推搡事件確實命中至少一名單位。
- 遊戲原文：1.13.1／Steam Build 25606770 的 ui 資源。描述與實作的差異仍需遊戲內核對；省略細節不列為繁中誤譯。

## 原文核對

- 對應 hash：`60ac22bf`。
- 繁中寫「推搡敵人恢復一層」，英文寫「Pushing Enemies restores one stack」；兩者都要求推搡敵人並說明恢復一層。

## 圖示來源

[原圖](https://gameslantern.com/storage/sites/darktide/exporter/talents/ogryn/keystone_modifier/ogryn_carapace_armor_add_stack_on_push.webp)｜[圖片來源 Issue](https://github.com/SyuanTsai/Media-Assets/issues/10#issuecomment-5931383354)｜[圖片附件](https://github.com/user-attachments/assets/3d442f9a-0143-43d7-a6e2-10a5d6b8a9f8)

圖片僅供技能辨識，不作機制證據。

