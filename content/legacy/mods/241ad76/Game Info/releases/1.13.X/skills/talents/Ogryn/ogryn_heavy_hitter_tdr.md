# 毫髮無傷(Don't Feel a Thing)：原始碼依據

[English](en/ogryn_heavy_hitter_tdr.md)

[返回玩家說明](README.md#ogryn_heavy_hitter_tdr)｜[技術索引](SOURCE_INDEX.md)｜[原文比對](LOCALIZATION_COMPARISON.md#ogryn_heavy_hitter_tdr)

- 來源版本：Release 1.13.1；固定 SHA：`7e662fcda16219d775b84af50322be2e9cd9d62e`。
- 天賦：`ogryn_heavy_hitter_tdr`；名稱鍵：`loc_talent_ogryn_passive_heavy_hitter_tdr`；描述鍵：`loc_talent_ogryn_passive_heavy_hitter_tdr_desc`。
- 節點：`node_fecbb13a-e9d0-43b6-8b85-ce8006717503`；分類：鑰石；每節點一點。
- 證據程度：原始碼確認／程式推導；以下算例屬程式推導，未進行遊戲內測試。

## 原始碼確認與程式推導

- 修改器 buff 只有一層，`lerped_stat_buffs.toughness_damage_taken_multiplier` 從 1 線性到 `1 - tdr × 8`；`lerp_t_func` 直接讀共用 `heavy_hitter_lerp_value`。`tdr=0.0125`。

## 原始碼依據

- [scripts/settings/ability/archetype_talents/talents/ogryn_talents.lua：2396–2415](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/ogryn_talents.lua#L2396-L2415)
- [scripts/settings/talent/talent_settings_ogryn.lua：101–110](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/talent/talent_settings_ogryn.lua#L101-L110)
- [scripts/settings/buff/archetype_buff_templates/ogryn_buff_templates.lua：180–221](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/ogryn_buff_templates.lua#L180-L221)
- [scripts/settings/buff/archetype_buff_templates/ogryn_buff_templates.lua：295–308](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/ogryn_buff_templates.lua#L295-L308)
- [scripts/settings/buff/buff_settings.lua：1000–1012](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/buff_settings.lua#L1000-L1012)
- [scripts/settings/ability/archetype_talents/talents/ogryn_talents.lua：2396–2415](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/ogryn_talents.lua#L2396-L2415)
- [scripts/ui/views/talent_builder_view/layouts/ogryn_tree.lua：1976–1999](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/ui/views/talent_builder_view/layouts/ogryn_tree.lua#L1976-L1999)

## 算例條件與待確認事項

- **算例**：4 層時倍率為 0.95，原本 100 點韌性傷害變成 95 點；8 層時 100 點變成 90 點。
- 機制核對至指定公開來源 SHA 7e662fcda16219d775b84af50322be2e9cd9d62e；本機 Build 25606770 的中英文字串與公開來源版本對應為1.13.1，文字與實作差異待遊戲內核對。
- 此節點改動 toughness_damage_taken_multiplier，不代表降低健康值所受傷害。增益完全跟隨重拳出擊層數及其 7.5 秒重設計時。
- 重拳出擊的層數比例heavy_hitter_lerp_value為模組區域共用變數；多位歐格林同場時的更新互動未實測，主頁算例固定單一角色。
- 遊戲原文：1.13.1／Steam Build 25606770 的 ui 資源。描述與實作的差異仍需遊戲內核對；省略細節不列為繁中誤譯。

## 原文核對

- 對應 hash：`063dfc94`。
- 繁中寫「額外增加…韌性減傷效果」，英文寫「also grants … Toughness Damage Reduction for each stack」；兩者都表示每層增加韌性減傷。

## 圖示來源

[原圖](https://gameslantern.com/storage/sites/darktide/exporter/talents/ogryn/keystone_modifier/ogryn_heavy_hitter_tdr.webp)｜[圖片來源 Issue](https://github.com/SyuanTsai/Media-Assets/issues/10#issuecomment-5931383354)｜[圖片附件](https://github.com/user-attachments/assets/83bead6b-330f-466e-8c25-c7d383843b1c)

圖片僅供技能辨識，不作機制證據。

