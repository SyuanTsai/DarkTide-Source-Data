# 凝聚殺意(Channelled Aggression)：原始碼依據

[English](en/broker_ability_punk_rage_sub_1.md)

[返回玩家說明](README.md#broker_ability_punk_rage_sub_1)｜[技術索引](SOURCE_INDEX.md)｜[原文比對](LOCALIZATION_COMPARISON.md#broker_ability_punk_rage_sub_1)

- 來源版本：Release 1.13.1；固定 SHA：`7e662fcda16219d775b84af50322be2e9cd9d62e`。
- 天賦：`broker_ability_punk_rage_sub_1`；名稱鍵：`loc_talent_broker_ability_punk_rage_sub_1`；描述鍵：`loc_talent_broker_ability_punk_rage_sub_1_desc_02`。
- 節點：`node_4a01428d-790a-49d5-adbb-e910b4272cbe`；分類：能力；每節點一點。
- 證據程度：原始碼確認／程式推導；以下算例屬程式推導，未進行遊戲內測試。

## 原始碼確認與程式推導

- 天賦選取後令 broker_rage_rending 規則為真；broker_punk_rage_stance 的 conditional_stat_buffs_funcs 只按該規則啟閉 melee_heavy_rending_multiplier=0.25。BuffSettings 將此屬性列為加算修正。
- 傷害計算僅在攻擊類型為近戰且 damage_profile.melee_attack_strength 為 heavy 時讀取此修正，再併入撕裂倍率；撕裂倍率後續以目標護甲相關規則轉成傷害修正並封頂1。
- talent_settings 設 sub_1_rending_threshold_t=0.5，且 talent format_values 把此值列為 ability_progress；在固定來源內，運行邏輯只檢查是否選了此天賦，未以該0.5門檻限制效果開始時點。因此不宣稱怒火前半段才生效。

## 原始碼依據

- [scripts/settings/ability/archetype_talents/talents/broker_talents.lua：331–370](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/broker_talents.lua#L331-L370)
- [scripts/settings/talent/talent_settings_broker.lua：142–168](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/talent/talent_settings_broker.lua#L142-L168)
- [scripts/settings/buff/archetype_buff_templates/broker_buff_templates.lua：559–606](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/broker_buff_templates.lua#L559-L606)
- [scripts/settings/buff/archetype_buff_templates/broker_buff_templates.lua：615–646](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/broker_buff_templates.lua#L615-L646)
- [scripts/settings/buff/buff_settings.lua：875–878](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/buff_settings.lua#L875-L878)
- [scripts/utilities/attack/damage_calculation.lua：629–660](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/attack/damage_calculation.lua#L629-L660)
- [scripts/utilities/attack/damage_calculation.lua：69–87](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/attack/damage_calculation.lua#L69-L87)
- [scripts/settings/ability/archetype_talents/talents/broker_talents.lua：331–371](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/broker_talents.lua#L331-L371)
- [scripts/ui/views/talent_builder_view/layouts/broker_tree.lua：1926–1948](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/ui/views/talent_builder_view/layouts/broker_tree.lua#L1926-L1948)

## 算例條件與待確認事項

- **撕裂算例**：只計此節點時，近戰重攻擊將額外加入 0.25 撕裂倍率項；最終傷害仍取決於敵人護甲與其餘撕裂、威力及傷害修正，不能寫成原傷害×1.25。
- 格式設定中雖有0.5進度值，但固定版本的效果啟用邏輯未以它作為時間門檻。
- 撕裂屬護甲計算的一環，與直接傷害百分比不同。
- 遊戲原文：1.13.1／Steam Build 25606770 的 ui 資源。描述與實作的差異仍需遊戲內核對；省略細節不列為繁中誤譯。

## 原文核對

- 對應 hash：`472cc8e5`。
- 繁中與英文都將效果限制在怒火期間的近戰重攻擊，並描述撕裂；設定及傷害計算的適用條件一致。設定內另有0.5進度值，但不是原文翻譯差異。

## 圖示來源

[原圖](https://gameslantern.com/storage/sites/darktide/exporter/talents/broker/ability_modifier/broker_ability_punk_rage_sub_1.webp)｜[圖片來源 Issue](https://github.com/SyuanTsai/Media-Assets/issues/12#issuecomment-5933978534)｜[圖片附件](https://github.com/user-attachments/assets/db7fee2b-9e46-49f1-a0ac-28cd6cea424f)

圖片僅供技能辨識，不作機制證據。

