# 亞空間電池(Warp Battery)：原始碼依據

[English](en/psyker_increased_max_souls.md)

[返回玩家說明](README.md#psyker_increased_max_souls)｜[技術索引](SOURCE_INDEX.md)｜[原文比對](LOCALIZATION_COMPARISON.md#psyker_increased_max_souls)

- 來源版本：Release 1.13.1；固定 SHA：`7e662fcda16219d775b84af50322be2e9cd9d62e`。
- 天賦：`psyker_increased_max_souls`；名稱鍵：`loc_talent_psyker_increased_souls`；描述鍵：`loc_talent_psyker_increased_souls_desc`。
- 節點：`node_0eee06a4-3acd-4b44-ae64-61376c34b3da`；分類：鑰石；每節點一點。
- 證據程度：原始碼確認／程式推導；以下算例屬程式推導，未進行遊戲內測試。

## 原始碼確認與程式推導

- 初始化依特殊規則把可用soul buff換成max_stacks=6版本；talent_resource.max_resource原本就固定6，因此提高上限不稀釋每層4%傷害。持續時間與消耗判斷共用原souls函式。

## 原始碼依據

- [scripts/settings/talent/talent_settings_psyker.lua：241–243](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/talent/talent_settings_psyker.lua#L241-L243)
- [scripts/settings/buff/archetype_buff_templates/psyker_buff_templates.lua：98–121](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/psyker_buff_templates.lua#L98-L121)
- [scripts/settings/buff/archetype_buff_templates/psyker_buff_templates.lua：322–361](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/psyker_buff_templates.lua#L322-L361)
- [scripts/settings/buff/archetype_buff_templates/psyker_buff_templates.lua：1528–1548](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/psyker_buff_templates.lua#L1528-L1548)
- [scripts/settings/ability/archetype_talents/talents/psyker_talents.lua：1676–1691](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/psyker_talents.lua#L1676-L1691)
- [scripts/ui/views/talent_builder_view/layouts/psyker_tree.lua：1598–1624](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/ui/views/talent_builder_view/layouts/psyker_tree.lua#L1598-L1624)

## 算例條件與待確認事項

- **傷害算例**：6 層共增加 6 × 4% = 24% 傷害；沒有其他加成時，100 × 1.24 = 124 點。相較原本 4 層的 116 點，增加 8 點。
- **冷卻算例**：6 層恢復一次能力冷卻的 6 × 7.5% = 45%；以 30 秒計算，恢復 13.5 秒。
- 算例假設沒有其他修正，尚未遊戲內驗證；本機文字與固定來源版本對應為1.13.1。
- 遊戲原文：1.13.1／Steam Build 25606770 的 ui 資源。描述與實作的差異仍需遊戲內核對；省略細節不列為繁中誤譯。

## 原文核對

- 對應 hash：`e69bf6d1`。
- 同描述鍵的繁中與英文效果方向一致；未列完整公式與上限不視為誤譯。

## 圖示來源

[原圖](https://gameslantern.com/storage/sites/darktide/exporter/talents/psyker/keystone_modifier/psyker_increased_max_souls.webp)｜[圖片來源 Issue](https://github.com/SyuanTsai/Media-Assets/issues/7#issuecomment-5928034845)｜[圖片附件](https://github.com/user-attachments/assets/47c3ad89-c6a0-4c8c-a452-b8af3e859043)

圖片僅供技能辨識，不作機制證據。

