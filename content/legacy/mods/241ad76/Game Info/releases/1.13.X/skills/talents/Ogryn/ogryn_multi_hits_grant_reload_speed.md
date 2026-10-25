# 領跑者(Pacemaker)：原始碼依據

[English](en/ogryn_multi_hits_grant_reload_speed.md)

[返回玩家說明](README.md#ogryn_multi_hits_grant_reload_speed)｜[技術索引](SOURCE_INDEX.md)｜[原文比對](LOCALIZATION_COMPARISON.md#ogryn_multi_hits_grant_reload_speed)

- 來源版本：Release 1.13.1；固定 SHA：`7e662fcda16219d775b84af50322be2e9cd9d62e`。
- 天賦：`ogryn_multi_hits_grant_reload_speed`；名稱鍵：`loc_talent_ogryn_reload_speed_on_multiple_hits`；描述鍵：`loc_talent_ogryn_reload_speed_on_multiple_hits_new_desc`。
- 節點：`node_65087f4f-47f2-428b-8c72-a5120e1116ac`；分類：技能；每節點一點。
- 證據程度：原始碼確認／程式推導；以下算例屬程式推導，未進行遊戲內測試。

## 原始碼確認與程式推導

- on_hit以被擊單位去重，每次命中更新該單位截止時間t+.5，清除過期目標後若num_hit_units>=3施加reload效果，沒有攻擊類型限制。
- 子buff max_stacks1、reload_speed=.15、沒有duration。on_reload設done，conditional_exit要求done且已離開reload_shotgun/reload_state/ranged_load_special。設定offensive_3.duration=5未被子buff讀取，不寫成五秒到期。

## 原始碼依據

- [scripts/settings/buff/archetype_buff_templates/ogryn_buff_templates.lua：2161–2247](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/ogryn_buff_templates.lua#L2161-L2247)
- [scripts/settings/talent/talent_settings_ogryn.lua：238–243](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/talent/talent_settings_ogryn.lua#L238-L243)
- [scripts/utilities/action/action_handler.lua：356–429](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/action/action_handler.lua#L356-L429)
- [scripts/settings/ability/archetype_talents/talents/ogryn_talents.lua：1030–1054](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/ogryn_talents.lua#L1030-L1054)
- [scripts/ui/views/talent_builder_view/layouts/ogryn_tree.lua：515–539](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/ui/views/talent_builder_view/layouts/ogryn_tree.lua#L515-L539)

## 算例條件與待確認事項

- **時間算例**：受換彈速度影響的 3 秒動作變成 3 ÷ 1.15 ≈ 2.61 秒；若同階段另有 20% 加成，則為 3 ÷ (1 + 15% + 20%) ≈ 2.22 秒。
- 原文只說單次攻擊命中多人；此SHA依0.5秒內不同目標計數，跨來源限制待遊戲內核對。
- 遊戲原文：1.13.1／Steam Build 25606770 的 ui 資源。描述與實作的差異仍需遊戲內核對；省略細節不列為繁中誤譯。

## 原文核對

- 對應 hash：`61042337`。
- 繁中與同源英文都寫單次攻擊；固定公開實作採0.5秒目標去重窗口，沒有同次攻擊識別限制。兩來源皆為1.13.1；實際表現待遊戲內核對，未將此列為繁中誤譯。

## 圖示來源

[原圖](https://gameslantern.com/storage/sites/darktide/exporter/talents/ogryn/default/ogryn_multi_hits_grant_reload_speed.webp)｜[圖片來源 Issue](https://github.com/SyuanTsai/Media-Assets/issues/10#issuecomment-5931394406)｜[圖片附件](https://github.com/user-attachments/assets/cf916d47-2e00-43d4-98b7-307222a056e6)

圖片僅供技能辨識，不作機制證據。

