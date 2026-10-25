# 槍械技師(Gunsmith)：原始碼依據

[English](en/cryptic_auto_reload.md)

[返回玩家說明](README.md#cryptic_auto_reload)｜[技術索引](SOURCE_INDEX.md)｜[原文比對](LOCALIZATION_COMPARISON.md#cryptic_auto_reload)

- 來源版本：Release 1.13.1；固定 SHA：`7e662fcda16219d775b84af50322be2e9cd9d62e`。
- 天賦：`cryptic_auto_reload`；名稱鍵：`loc_talent_cryptic_reload_speed_based_on_charge`；描述鍵：`loc_talent_cryptic_auto_reload_desc`。
- 節點：`node_35eda8e9-ea9c-40b7-9ed5-85474173f23e`；分類：技能；每節點一點。
- 證據程度：原始碼確認／程式推導；以下算例屬程式推導，未進行遊戲內測試。

## 原始碼確認與程式推導

- on_shoot重設cooldown5；結束後next_reload_t=cooldown_ended_t+1，每秒ceil(max_ammo_in_clip*0.075)，受missing與reserve限制，禁止is_reloading。
- stat reload_speed0.15無條件；自動操作slot_secondary，不要求目前拿槍。

## 原始碼依據

- [scripts/settings/talent/talent_settings_cryptic.lua：652–656](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/talent/talent_settings_cryptic.lua#L652-L656)
- [scripts/settings/buff/archetype_buff_templates/cryptic_buff_templates.lua：3600–3664](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/cryptic_buff_templates.lua#L3600-L3664)
- [scripts/utilities/ammo.lua：452–465](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/ammo.lua#L452-L465)
- [scripts/utilities/action/action_handler.lua：402–423](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/action/action_handler.lua#L402-L423)
- [scripts/settings/ability/archetype_talents/talents/cryptic_talents.lua：2653–2675](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/cryptic_talents.lua#L2653-L2675)
- [scripts/ui/views/talent_builder_view/layouts/cryptic_tree.lua：1404–1428](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/ui/views/talent_builder_view/layouts/cryptic_tree.lua#L1404-L1428)

## 算例條件與待確認事項

- **彈藥算例**：彈匣容量 30 發，每批 30 × 7.5% = 2.25，向上取整為 3 發。彈匣缺 2 發就只補 2 發，備用彈藥只有 1 發就只補 1 發。
- 遊戲原文：1.13.1／Steam Build 25606770 的 ui 資源。描述與實作的差異仍需遊戲內核對；省略細節不列為繁中誤譯。

## 原文核對

- 對應 hash：`612ee334`。
- 中英一致；補充首批第6秒、向上取整及備用彈藥來源。

## 圖示來源

[原圖](https://gameslantern.com/storage/sites/darktide/exporter/talents/cryptic/default/cryptic_auto_reload.webp)｜[圖片來源 Issue](https://github.com/SyuanTsai/Media-Assets/issues/13#issuecomment-5935653628)｜[圖片附件](https://github.com/user-attachments/assets/6e39714f-23a2-4d43-b5ae-6cfe4fa9b214)

圖片僅供技能辨識，不作機制證據。

