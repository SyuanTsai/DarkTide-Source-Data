# 震撼衝擊(Impactful)：原始碼依據

[English](en/ogryn_heavy_hitter_stagger.md)

[返回玩家說明](README.md#ogryn_heavy_hitter_stagger)｜[技術索引](SOURCE_INDEX.md)｜[原文比對](LOCALIZATION_COMPARISON.md#ogryn_heavy_hitter_stagger)

- 來源版本：Release 1.13.1；固定 SHA：`7e662fcda16219d775b84af50322be2e9cd9d62e`。
- 天賦：`ogryn_heavy_hitter_stagger`；名稱鍵：`loc_talent_ogryn_passive_heavy_hitter_stagger`；描述鍵：`loc_talent_ogryn_passive_heavy_hitter_stagger_desc`。
- 節點：`node_907d2d91-f87f-4ae9-b433-8a26e1c3ccd8`；分類：鑰石；每節點一點。
- 證據程度：原始碼確認／程式推導；以下算例屬程式推導，未進行遊戲內測試。

## 原始碼確認與程式推導

- 修改器 buff 上限 1 層，lerped stat 從 0 到 `stagger × max_stacks`；`stagger=0.075`、Heavy Hitter 上限 8，lerp 讀共用 stack 比率。

## 原始碼依據

- [scripts/settings/ability/archetype_talents/talents/ogryn_talents.lua：2436–2455](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/ogryn_talents.lua#L2436-L2455)
- [scripts/settings/talent/talent_settings_ogryn.lua：101–110](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/talent/talent_settings_ogryn.lua#L101-L110)
- [scripts/settings/buff/archetype_buff_templates/ogryn_buff_templates.lua：180–221](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/ogryn_buff_templates.lua#L180-L221)
- [scripts/settings/buff/archetype_buff_templates/ogryn_buff_templates.lua：323–336](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/ogryn_buff_templates.lua#L323-L336)
- [scripts/utilities/attack/stagger_calculation.lua：190–203](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/attack/stagger_calculation.lua#L190-L203)
- [scripts/settings/ability/archetype_talents/talents/ogryn_talents.lua：2436–2455](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/ogryn_talents.lua#L2436-L2455)
- [scripts/ui/views/talent_builder_view/layouts/ogryn_tree.lua：2048–2071](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/ui/views/talent_builder_view/layouts/ogryn_tree.lua#L2048-L2071)

## 算例條件與待確認事項

- **算例**：4 層增加 30%；若一次攻擊的基礎衝擊值為 100，滿 8 層時為 100 × 1.6 = 160。
- 機制核對至指定公開來源 SHA 7e662fcda16219d775b84af50322be2e9cd9d62e；本機 Build 25606770 的中英文字串與公開來源版本對應為1.13.1，文字與實作差異待遊戲內核對。
- 此 stat 是近戰攻擊的衝擊修正；它依武器攻擊與目標抗性影響踉蹌，不直接代表傷害百分比。
- 重拳出擊的層數比例heavy_hitter_lerp_value為模組區域共用變數；多位歐格林同場時的更新互動未實測，主頁算例固定單一角色。
- 遊戲原文：1.13.1／Steam Build 25606770 的 ui 資源。描述與實作的差異仍需遊戲內核對；省略細節不列為繁中誤譯。

## 原文核對

- 對應 hash：`657b35a0`。
- 繁中寫「額外增加…衝擊效果」，英文寫「also grants … Impact for each stack」；兩者都將衝擊加值連到重拳出擊每一層。

## 圖示來源

[原圖](https://gameslantern.com/storage/sites/darktide/exporter/talents/ogryn/keystone_modifier/ogryn_heavy_hitter_stagger.webp)｜[圖片來源 Issue](https://github.com/SyuanTsai/Media-Assets/issues/10#issuecomment-5931383354)｜[圖片附件](https://github.com/user-attachments/assets/e8883b71-72ad-4780-92e7-395f6a32ead8)

圖片僅供技能辨識，不作機制證據。

