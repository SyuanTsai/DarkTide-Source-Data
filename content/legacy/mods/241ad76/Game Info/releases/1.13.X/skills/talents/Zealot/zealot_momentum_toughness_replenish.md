# 懲戒者姿態(Retributor's Stance)：原始碼依據

[English](en/zealot_momentum_toughness_replenish.md)

[返回玩家說明](README.md#zealot_momentum_toughness_replenish)｜[技術索引](SOURCE_INDEX.md)｜[原文比對](LOCALIZATION_COMPARISON.md#zealot_momentum_toughness_replenish)

- 來源版本：Release 1.13.1；固定 SHA：`7e662fcda16219d775b84af50322be2e9cd9d62e`。
- 天賦：`zealot_momentum_toughness_replenish`；名稱鍵：`loc_talent_zealot_quickness_toughness_per_stack`；描述鍵：`loc_talent_zealot_momentum_toughness_replenish_desc`。
- 節點：`node_1473ca58-1a77-4543-b2e5-9c4491d240c8`；分類：鑰石；每節點一點。
- 證據程度：原始碼確認／程式推導；以下算例屬程式推導，未進行遊戲內測試。

## 原始碼確認與程式推導

- 技能節點授予 `zealot_momentum_toughness_replenish` 特殊規則。Quickness active buff 啟動時讀取此規則；啟用後每次更新以 `0.005 × active stack_count × dt` 呼叫百分比韌性恢復。
- 恢復以最大韌性百分比按時間累積，並且只在 Quickness active buff 生效期間執行；基礎 active 效果每層持續 6 秒。每層相當於每秒 0.5% 最大韌性恢復；層數越多，恢復率越高。
- 此節點沒有單獨觸發器或層數，它修改主 Quickness 的 active buff；增益終止後即停止週期恢復。

## 原始碼依據

- [scripts/settings/ability/archetype_talents/talents/zealot_talents.lua：1051–1070](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/zealot_talents.lua#L1051-L1070)
- [scripts/settings/talent/talent_settings_zealot.lua：192–194](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/talent/talent_settings_zealot.lua#L192-L194)
- [scripts/settings/buff/archetype_buff_templates/zealot_buff_templates.lua：288–312](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/zealot_buff_templates.lua#L288-L312)
- [scripts/extension_systems/toughness/player_unit_toughness_extension.lua：253–285](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/toughness/player_unit_toughness_extension.lua#L253-L285)
- [scripts/settings/ability/archetype_talents/talents/zealot_talents.lua：1051–1070](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/zealot_talents.lua#L1051-L1070)
- [scripts/ui/views/talent_builder_view/layouts/zealot_tree.lua：1198–1220](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/ui/views/talent_builder_view/layouts/zealot_tree.lua#L1198-L1220)

## 算例條件與待確認事項

- **恢復算例**：最大韌性 100、以 20 層啟動時，每秒補 100 × 20 × 0.5% = 10 點；完整 6 秒最多 60 點。搭配延長至 10 秒時最多 100 點，均受恢復加成與目前缺額限制。
- 示例是未受傷且韌性未滿時的理論恢復量；到達韌性上限後不會超額儲存。
- 文案中的「每秒」來自每幀乘 dt 的比例恢復，不是固定一秒跳一次。
- 遊戲原文：1.13.1／Steam Build 25606770 的 ui 資源。描述與實作的差異仍需遊戲內核對；省略細節不列為繁中誤譯。

## 原文核對

- 對應 hash：`11690b77`。
- 兩種語言都表示 Quickness 層數會帶來韌性恢復；逐層每秒 0.5% 與只在 active buff 期間生效是實作細節。

## 圖示來源

[原圖](https://gameslantern.com/storage/sites/darktide/exporter/talents/zealot/keystone_modifier/zealot_momentum_toughness_replenish.webp)｜[圖片來源 Issue](https://github.com/SyuanTsai/Media-Assets/issues/8#issuecomment-5929289315)｜[圖片附件](https://github.com/user-attachments/assets/54fb5877-384e-4378-885f-95cb1daed864)

圖片僅供技能辨識，不作機制證據。

