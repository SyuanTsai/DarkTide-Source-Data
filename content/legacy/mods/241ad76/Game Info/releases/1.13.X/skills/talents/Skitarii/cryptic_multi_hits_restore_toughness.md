# 歐姆尼賽亞充能聖歌(Omnissian Recharge Litany)：原始碼依據

[English](en/cryptic_multi_hits_restore_toughness.md)

[返回玩家說明](README.md#cryptic_multi_hits_restore_toughness)｜[技術索引](SOURCE_INDEX.md)｜[原文比對](LOCALIZATION_COMPARISON.md#cryptic_multi_hits_restore_toughness)

- 來源版本：Release 1.13.1；固定 SHA：`7e662fcda16219d775b84af50322be2e9cd9d62e`。
- 天賦：`cryptic_multi_hits_restore_toughness`；名稱鍵：`loc_talent_cryptic_multi_hits_restore_toughness`；描述鍵：`loc_talent_cryptic_multi_hits_restore_toughness_desc`。
- 節點：`node_3dfdfc48-08a2-428d-8e64-f2a7d9e8a3d0`；分類：技能；每節點一點。
- 證據程度：原始碼確認／程式推導；以下算例屬程式推導，未進行遊戲內測試。

## 原始碼確認與程式推導

- 判定target_number>0則採target_number，否則target_index，需等於3；0.25秒multi_hit_window限制觸發，沒有damage type過濾。
- update按0.1/3*dt呼叫replenish_percentage，allow_proc_while_active重新計時active start。

## 原始碼依據

- [scripts/extension_systems/toughness/player_unit_toughness_extension.lua：253–285](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/toughness/player_unit_toughness_extension.lua#L253-L285)
- [scripts/settings/talent/talent_settings_cryptic.lua：361–366](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/talent/talent_settings_cryptic.lua#L361-L366)
- [scripts/settings/buff/archetype_buff_templates/cryptic_buff_templates.lua：2090–2135](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/cryptic_buff_templates.lua#L2090-L2135)
- [scripts/settings/ability/archetype_talents/talents/cryptic_talents.lua：1675–1697](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/cryptic_talents.lua#L1675-L1697)
- [scripts/ui/views/talent_builder_view/layouts/cryptic_tree.lua：351–379](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/ui/views/talent_builder_view/layouts/cryptic_tree.lua#L351-L379)

## 算例條件與待確認事項

- **恢復算例**：最大韌性 150 時，每秒恢復 150 × 10% ÷ 3 = 5 點，完整效果共 15 點。
- 恢復量以韌性上限計算，受韌性恢復加成影響，最多補到上限；算例假設沒有其他恢復加成。
- 持續期間再次觸發會重設時間，不會同時疊加多條恢復效果。
- 遊戲原文：1.13.1／Steam Build 25606770 的 ui 資源。描述與實作的差異仍需遊戲內核對；省略細節不列為繁中誤譯。

## 原文核對

- 對應 hash：`6db4bbd5`。
- 原文「3名以上」成立；補充第3次有效命中與觸發間隔，不屬誤譯。

## 圖示來源

[原圖](https://gameslantern.com/storage/sites/darktide/exporter/talents/cryptic/default/cryptic_multi_hits_restore_toughness.webp)｜[圖片來源 Issue](https://github.com/SyuanTsai/Media-Assets/issues/13#issuecomment-5935647528)｜[圖片附件](https://github.com/user-attachments/assets/d9876bb9-a417-45e8-814c-acbc24233120)

圖片僅供技能辨識，不作機制證據。

