# 吸精奪萃(Essence Harvest)：原始碼依據

[English](en/psyker_toughness_on_soul.md)

[返回玩家說明](README.md#psyker_toughness_on_soul)｜[技術索引](SOURCE_INDEX.md)｜[原文比對](LOCALIZATION_COMPARISON.md#psyker_toughness_on_soul)

- 來源版本：Release 1.13.1；固定 SHA：`7e662fcda16219d775b84af50322be2e9cd9d62e`。
- 天賦：`psyker_toughness_on_soul`；名稱鍵：`loc_talent_psyker_toughness_regen_on_soul`；描述鍵：`loc_talent_psyker_toughness_regen_on_soul_desc`。
- 節點：`node_cec906f5-721d-46dd-95e9-78b903190c9d`；分類：鑰石；每節點一點。
- 證據程度：原始碼確認／程式推導；以下算例屬程式推導，未進行遊戲內測試。

## 原始碼確認與程式推導

- 設定 percent_toughness=0.06、duration=5、max_stacks=1；韌性 buff 每幀呼叫 replenish_percentage(percent_toughness×dt)，所以全長滿 5 秒時總量為 0.06×5=0.30。
- Warp Siphon 加層函式在已選 Essence Harvest 時加入 psyker_souls_replenish_toughness_stacking_buff；此 buff refresh_duration_on_stack=true 且上限1，新層只重設計時，不增加堆疊速率。
- 觸發發生於靈魂加入／更新事件，包括同一組靈魂仍在上限時再次成功獲得靈魂而重設 soul buff。

## 原始碼依據

- [scripts/settings/ability/archetype_talents/talents/psyker_talents.lua：944–963](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/psyker_talents.lua#L944-L963)
- [scripts/settings/talent/talent_settings_psyker.lua：192–198](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/talent/talent_settings_psyker.lua#L192-L198)
- [scripts/settings/buff/archetype_buff_templates/psyker_buff_templates.lua：189–214](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/psyker_buff_templates.lua#L189-L214)
- [scripts/settings/buff/archetype_buff_templates/psyker_buff_templates.lua：217–228](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/psyker_buff_templates.lua#L217-L228)
- [scripts/settings/buff/archetype_buff_templates/psyker_buff_templates.lua：1410–1434](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/psyker_buff_templates.lua#L1410-L1434)
- [scripts/extension_systems/buff/buff_extension_base.lua：434–462](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/buff/buff_extension_base.lua#L434-L462)
- [scripts/settings/ability/archetype_talents/talents/psyker_talents.lua：944–963](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/psyker_talents.lua#L944-L963)
- [scripts/ui/views/talent_builder_view/layouts/psyker_tree.lua：1350–1373](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/ui/views/talent_builder_view/layouts/psyker_tree.lua#L1350-L1373)

## 算例條件與待確認事項

- **恢復算例**：最大韌性 100 時，每秒恢復 100 × 30% ÷ 5 = 6 點；完整持續 5 秒共 30 點。若只缺 12 點，實際最多補回 12 點。
- 韌性已滿時，實際有效恢復會受韌性上限限制；例子假設有足夠韌性缺口。
- 再次獲魂時不會立即補 30%；它重設持續時間並維持逐秒恢復。
- 來源 SHA 與遊戲 Build 25606770 版本對應為1.13.1。
- 遊戲原文：1.13.1／Steam Build 25606770 的 ui 資源。描述與實作的差異仍需遊戲內核對；省略細節不列為繁中誤譯。

## 原文核對

- 對應 hash：`fc9f3c0b`。
- 同描述鍵的本機繁中與英文效果方向一致。補充公式、恢復上限與事件時序屬描述不完整；公開來源與遊戲文字版本對應為1.13.1。

## 圖示來源

[原圖](https://gameslantern.com/storage/sites/darktide/exporter/talents/psyker/keystone_modifier/psyker_toughness_on_soul.webp)｜[圖片來源 Issue](https://github.com/SyuanTsai/Media-Assets/issues/7#issuecomment-5928024966)｜[圖片附件](https://github.com/user-attachments/assets/00ae8b19-169d-4eec-94e2-89c3cf851d08)

圖片僅供技能辨識，不作機制證據。

