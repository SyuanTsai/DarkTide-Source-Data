# 熱身完畢(Just Getting Started!)：原始碼依據

[English](en/ogryn_heavy_hitter_max_stacks_improves_attack_speed.md)

[返回玩家說明](README.md#ogryn_heavy_hitter_max_stacks_improves_attack_speed)｜[技術索引](SOURCE_INDEX.md)｜[原文比對](LOCALIZATION_COMPARISON.md#ogryn_heavy_hitter_max_stacks_improves_attack_speed)

- 來源版本：Release 1.13.1；固定 SHA：`7e662fcda16219d775b84af50322be2e9cd9d62e`。
- 天賦：`ogryn_heavy_hitter_max_stacks_improves_attack_speed`；名稱鍵：`loc_talent_ogryn_heavy_hitter_max_stacks_improves_attack_speed`；描述鍵：`loc_talent_ogryn_heavy_hitter_max_stacks_improves_attack_speed_description`。
- 節點：`node_09aa18e5-c980-46a8-89e9-8c93c778f69f`；分類：鑰石；每節點一點。
- 證據程度：原始碼確認／程式推導；以下算例屬程式推導，未進行遊戲內測試。

## 原始碼確認與程式推導

- Heavy Hitter root 檢查這個 special rule；一次命中若將 `current_stacks + stacks` 推到 8 或以上便加入 `ogryn_heavy_hitter_attack_speed_effect`。該 buff 給 `attack_speed=0.1`，`conditional_exit_func` 在共用 lerp 值小於 1 時移除。
- 本機 inventory 將 `Just Getting Started!` 固定為「熱身完畢！」；草稿沿用該已修正名稱。

## 原始碼依據

- [scripts/settings/ability/archetype_talents/talents/ogryn_talents.lua：582–619](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/ogryn_talents.lua#L582-L619)
- [scripts/settings/talent/talent_settings_ogryn.lua：101–110](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/talent/talent_settings_ogryn.lua#L101-L110)
- [scripts/settings/buff/archetype_buff_templates/ogryn_buff_templates.lua：180–260](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/ogryn_buff_templates.lua#L180-L260)
- [scripts/settings/buff/archetype_buff_templates/ogryn_buff_templates.lua：337–347](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/ogryn_buff_templates.lua#L337-L347)
- [scripts/settings/ability/archetype_talents/talents/ogryn_talents.lua：582–619](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/ogryn_talents.lua#L582-L619)
- [scripts/ui/views/talent_builder_view/layouts/ogryn_tree.lua：2072–2097](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/ui/views/talent_builder_view/layouts/ogryn_tree.lua#L2072-L2097)

## 算例條件與待確認事項

- **算例**：若某次攻擊原本每秒一次，增加 10% 攻速後，間隔約為 1 ÷ 1.10 = 0.91 秒。
- 機制核對至指定公開來源 SHA 7e662fcda16219d775b84af50322be2e9cd9d62e；本機 Build 25606770 的中英文字串與公開來源版本對應為1.13.1，文字與實作差異待遊戲內核對。
- 此節點的門檻是滿 8 層，攻速沒有額外層數或冷卻；它跟著 Heavy Hitter 的 7.5 秒層數期限。
- 重拳出擊的層數比例heavy_hitter_lerp_value為模組區域共用變數；多位歐格林同場時的更新互動未實測，主頁算例固定單一角色。
- 遊戲原文：1.13.1／Steam Build 25606770 的 ui 資源。描述與實作的差異仍需遊戲內核對；省略細節不列為繁中誤譯。

## 原文核對

- 對應 hash：`7e2f23b1`。
- 繁中寫「疊加到…層後，獲得…攻擊速度」，英文寫「While … is at … Stacks, gain … Attack Speed」；兩者都把攻速限定在重拳出擊達到指定層數時。

## 圖示來源

[原圖](https://gameslantern.com/storage/sites/darktide/exporter/talents/ogryn/keystone_modifier/ogryn_heavy_hitter_max_stacks_improves_attack_speed.webp)｜[圖片來源 Issue](https://github.com/SyuanTsai/Media-Assets/issues/10#issuecomment-5931383354)｜[圖片附件](https://github.com/user-attachments/assets/93481225-465f-4750-a4f3-28602e723b40)

圖片僅供技能辨識，不作機制證據。

