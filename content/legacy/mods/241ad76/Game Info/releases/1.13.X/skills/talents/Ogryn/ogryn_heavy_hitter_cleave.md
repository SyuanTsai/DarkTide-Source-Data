# 強力劈砍(Great Cleaver)：原始碼依據

[English](en/ogryn_heavy_hitter_cleave.md)

[返回玩家說明](README.md#ogryn_heavy_hitter_cleave)｜[技術索引](SOURCE_INDEX.md)｜[原文比對](LOCALIZATION_COMPARISON.md#ogryn_heavy_hitter_cleave)

- 來源版本：Release 1.13.1；固定 SHA：`7e662fcda16219d775b84af50322be2e9cd9d62e`。
- 天賦：`ogryn_heavy_hitter_cleave`；名稱鍵：`loc_talent_ogryn_passive_heavy_hitter_cleave`；描述鍵：`loc_talent_ogryn_passive_heavy_hitter_cleave_desc`。
- 節點：`node_20a7071e-64d2-4850-b076-3e787bd9f1b1`；分類：鑰石；每節點一點。
- 證據程度：原始碼確認／程式推導；以下算例屬程式推導，未進行遊戲內測試。

## 原始碼確認與程式推導

- Buff 有一層，lerped stat 從 0 到 `cleave × max_stacks`；`cleave=0.125`，`max_stacks=8`。lerp 比例來自 Heavy Hitter 共用 stack/max 比值。

## 原始碼依據

- [scripts/settings/ability/archetype_talents/talents/ogryn_talents.lua：2416–2435](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/ogryn_talents.lua#L2416-L2435)
- [scripts/settings/talent/talent_settings_ogryn.lua：101–110](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/talent/talent_settings_ogryn.lua#L101-L110)
- [scripts/settings/buff/archetype_buff_templates/ogryn_buff_templates.lua：180–221](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/ogryn_buff_templates.lua#L180-L221)
- [scripts/settings/buff/archetype_buff_templates/ogryn_buff_templates.lua：309–322](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/ogryn_buff_templates.lua#L309-L322)
- [scripts/utilities/attack/damage_profile.lua：45–57](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/attack/damage_profile.lua#L45-L57)
- [scripts/settings/ability/archetype_talents/talents/ogryn_talents.lua：2416–2435](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/ogryn_talents.lua#L2416-L2435)
- [scripts/ui/views/talent_builder_view/layouts/ogryn_tree.lua：2000–2023](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/ui/views/talent_builder_view/layouts/ogryn_tree.lua#L2000-L2023)

## 算例條件與待確認事項

- **算例**：4 層增加 50%；滿 8 層時，若武器基礎順劈容量為 10，容量變為 10 × 2 = 20。
- 機制核對至指定公開來源 SHA 7e662fcda16219d775b84af50322be2e9cd9d62e；本機 Build 25606770 的中英文字串與公開來源版本對應為1.13.1，文字與實作差異待遊戲內核對。
- 這是 `max_melee_hit_mass_attack_modifier`，效力依近戰武器的順劈與 hit mass 設定表現；它不是通用傷害加成。
- 重拳出擊的層數比例heavy_hitter_lerp_value為模組區域共用變數；多位歐格林同場時的更新互動未實測，主頁算例固定單一角色。
- 遊戲原文：1.13.1／Steam Build 25606770 的 ui 資源。描述與實作的差異仍需遊戲內核對；省略細節不列為繁中誤譯。

## 原文核對

- 對應 hash：`7eed29b9`。
- 繁中寫「額外增加…順劈效果」，英文寫「also grants … Cleave for each stack」；兩者都表示依重拳出擊層數增加順劈效果，沒有把它說成傷害加成。

## 圖示來源

[原圖](https://gameslantern.com/storage/sites/darktide/exporter/talents/ogryn/keystone_modifier/ogryn_heavy_hitter_cleave.webp)｜[圖片來源 Issue](https://github.com/SyuanTsai/Media-Assets/issues/10#issuecomment-5931383354)｜[圖片附件](https://github.com/user-attachments/assets/9c42800c-a3bc-469c-be04-1231b90bca3b)

圖片僅供技能辨識，不作機制證據。

