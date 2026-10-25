# 發現更多(Found Some More)：原始碼依據

[English](en/ogryn_free_reload_after_ability.md)

[返回玩家說明](README.md#ogryn_free_reload_after_ability)｜[技術索引](SOURCE_INDEX.md)｜[原文比對](LOCALIZATION_COMPARISON.md#ogryn_free_reload_after_ability)

- 來源版本：Release 1.13.1；固定 SHA：`7e662fcda16219d775b84af50322be2e9cd9d62e`。
- 天賦：`ogryn_free_reload_after_ability`；名稱鍵：`loc_talent_ogryn_free_reload_after_ability`；描述鍵：`loc_talent_cryptic_passive_ammo_replenishment_desc`。
- 節點：`node_87ca6136-03a7-45da-96b2-7ebd9e04f36a`；分類：技能；每節點一點。
- 證據程度：原始碼確認／程式推導；以下算例屬程式推導，未進行遊戲內測試。

## 原始碼確認與程式推導

- 現行被動是ogryn_passive_ammo_replenishment，不是name註解所稱能力後免費換彈。interval15、percent.01，server呼叫Ammo.add_to_all_slots。
- 各武器槽amount=.01×max_reserve+carryover，floor轉整數後保存小數；備用彈藥cap=max_reserve+missing_clip。

## 原始碼依據

- [scripts/settings/buff/archetype_buff_templates/ogryn_buff_templates.lua：3838–3854](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/ogryn_buff_templates.lua#L3838-L3854)
- [scripts/settings/talent/talent_settings_ogryn.lua：56–59](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/talent/talent_settings_ogryn.lua#L56-L59)
- [scripts/utilities/ammo.lua：494–528](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/ammo.lua#L494-L528)
- [scripts/extension_systems/buff/buffs/interval_buff.lua：19–48](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/buff/buffs/interval_buff.lua#L19-L48)
- [scripts/settings/ability/archetype_talents/talents/ogryn_talents.lua：2753–2771](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/ogryn_talents.lua#L2753-L2771)
- [scripts/ui/views/talent_builder_view/layouts/ogryn_tree.lua：540–567](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/ui/views/talent_builder_view/layouts/ogryn_tree.lua#L540-L567)

## 算例條件與待確認事項

- **整數算例**：最大備用彈藥 200 時，每次補 200 × 1% = 2 發；最大備用彈藥 75 時，每次累積 0.75 發，小數留到後續結算，前四次依序補 0、1、1、1 發，合計 3 發。
- 結算依伺服器更新，首次間隔含小量初始化偏移；算例從零小數餘額、且有足夠缺彈開始。
- 遊戲原文：1.13.1／Steam Build 25606770 的 ui 資源。描述與實作的差異仍需遊戲內核對；省略細節不列為繁中誤譯。

## 原文核對

- 對應 hash：`41aa3ba1`。
- 核對同一描述鍵／hash 的繁中與英文，效果方向未見明確翻譯矛盾；未列公式、上限或細部限制不算錯誤。

## 圖示來源

[原圖](https://gameslantern.com/storage/sites/darktide/exporter/talents/ogryn/default/ogryn_free_reload_after_ability.webp)｜[圖片來源 Issue](https://github.com/SyuanTsai/Media-Assets/issues/10#issuecomment-5931394406)｜[圖片附件](https://github.com/user-attachments/assets/5a19ac08-20bc-41ee-8af1-bbc6194fa852)

圖片僅供技能辨識，不作機制證據。

