# 退後！(Back Off!)：原始碼依據

[English](en/ogryn_blo_melee.md)

[返回玩家說明](README.md#ogryn_blo_melee)｜[技術索引](SOURCE_INDEX.md)｜[原文比對](LOCALIZATION_COMPARISON.md#ogryn_blo_melee)

- 來源版本：Release 1.13.1；固定 SHA：`7e662fcda16219d775b84af50322be2e9cd9d62e`。
- 天賦：`ogryn_blo_melee`；名稱鍵：`loc_talent_ogryn_blo_melee`；描述鍵：`loc_talent_ogryn_blo_melee_desc`。
- 節點：`node_79b667e5-d2d2-4ea7-8fed-c24aaacbc86b`；分類：鑰石；每節點一點。
- 證據程度：原始碼確認／程式推導；以下算例屬程式推導，未進行遊戲內測試。

## 原始碼確認與程式推導

- `ogryn_blo_melee` 在 sweep start 重設 `allowed=true`；同一 sweep 的第一個近戰擊殺才新增一次 active buff，接著設 `allowed=false`。
- active buff `max_stacks=10`，每層 `leadbelcher_chance_bonus=0.1`，監聽下一個 ammo-consumed 事件後設 `finish=true`。ActionWeaponBase 將該 bonus 加到基礎幸運子彈機率；PRD 對 chance >=1 回傳 true。

## 原始碼依據

- [scripts/settings/ability/archetype_talents/talents/ogryn_talents.lua：2456–2475](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/ogryn_talents.lua#L2456-L2475)
- [scripts/settings/talent/talent_settings_ogryn.lua：168–171](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/talent/talent_settings_ogryn.lua#L168-L171)
- [scripts/settings/buff/archetype_buff_templates/ogryn_buff_templates.lua：3517–3566](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/ogryn_buff_templates.lua#L3517-L3566)
- [scripts/extension_systems/weapon/actions/action_weapon_base.lua：186–214](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/weapon/actions/action_weapon_base.lua#L186-L214)
- [scripts/settings/buff/helper_functions/check_proc_functions.lua：226–236](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/helper_functions/check_proc_functions.lua#L226-L236)
- [scripts/utilities/pseudo_random_distribution.lua：7–12](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/pseudo_random_distribution.lua#L7-L12)
- [scripts/settings/ability/archetype_talents/talents/ogryn_talents.lua：2456–2475](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/ogryn_talents.lua#L2456-L2475)
- [scripts/ui/views/talent_builder_view/layouts/ogryn_tree.lua：1952–1975](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/ui/views/talent_builder_view/layouts/ogryn_tree.lua#L1952-L1975)

## 算例條件與待確認事項

- **消耗與算例**：下一次射擊後清空層數，免費的幸運子彈也會消耗。5 層把基礎機率提高至 15% + 5 × 10% = 65%；9 層已達 105%，因此必定觸發。層數沒有固定倒數。
- 機制核對至指定公開來源 SHA 7e662fcda16219d775b84af50322be2e9cd9d62e；本機 Build 25606770 的中英文字串與公開來源版本對應為1.13.1，文字與實作差異待遊戲內核對。
- 層數沒有時間期限；它們由下一次 ammo-consumed 事件消耗。多名敵人被同一個近戰 sweep 擊殺時仍至多加一層。
- 遊戲原文：1.13.1／Steam Build 25606770 的 ui 資源。描述與實作的差異仍需遊戲內核對；省略細節不列為繁中誤譯。

## 原文核對

- 對應 hash：`d4561ed1`。
- 同源英文是在「近戰擊殺」時增加「下次射擊」的幸運子彈機率；繁中卻寫成擊殺後「近戰攻擊有機率」產生效果，把觸發條件與機率作用位置譯錯。固定程式在近戰擊殺時必定加一層，並非再做10%加層判定。

## 圖示來源

[原圖](https://gameslantern.com/storage/sites/darktide/exporter/talents/ogryn/keystone_modifier/ogryn_blo_melee.webp)｜[圖片來源 Issue](https://github.com/SyuanTsai/Media-Assets/issues/10#issuecomment-5931383354)｜[圖片附件](https://github.com/user-attachments/assets/5c8fc9b0-2f06-4311-87f7-511d4c6ce6d5)

圖片僅供技能辨識，不作機制證據。

