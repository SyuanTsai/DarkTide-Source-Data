# 誰敢攔我！(No Stopping Me!)：原始碼依據

[English](en/ogryn_windup_is_uninterruptible.md)

[返回玩家說明](README.md#ogryn_windup_is_uninterruptible)｜[技術索引](SOURCE_INDEX.md)｜[原文比對](LOCALIZATION_COMPARISON.md#ogryn_windup_is_uninterruptible)

- 來源版本：Release 1.13.1；固定 SHA：`7e662fcda16219d775b84af50322be2e9cd9d62e`。
- 天賦：`ogryn_windup_is_uninterruptible`；名稱鍵：`loc_talent_ogryn_windup_is_uninterruptible`；描述鍵：`loc_talent_ogryn_windup_is_uninterruptible_unslowed_desc`。
- 節點：`node_08929afd-e60d-457d-8006-b87c917647ff`；分類：技能；每節點一點。
- 證據程度：原始碼確認／程式推導；以下算例屬程式推導，未進行遊戲內測試。

## 原始碼確認與程式推導

- windup條件同時控制conditional_stat與keywords；Buff初始化以conditional_stat_buffs_func作conditional_keywords_func後備，故並非永久uninterruptible。weapon_action_movespeed_reduction_multiplier=0。

## 原始碼依據

- [scripts/settings/buff/archetype_buff_templates/ogryn_buff_templates.lua：548–571](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/ogryn_buff_templates.lua#L548-L571)
- [scripts/extension_systems/buff/buffs/buff.lua：130–142](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/buff/buffs/buff.lua#L130-L142)
- [scripts/extension_systems/weapon/weapon_action_movement.lua：100–125](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/weapon/weapon_action_movement.lua#L100-L125)
- [scripts/settings/ability/archetype_talents/talents/ogryn_talents.lua：931–956](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/ogryn_talents.lua#L931-L956)
- [scripts/ui/views/talent_builder_view/layouts/ogryn_tree.lua：995–1017](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/ui/views/talent_builder_view/layouts/ogryn_tree.lua#L995-L1017)

## 算例條件與待確認事項

- **移速算例**：假設正常速度為每秒 5 公尺，蓄力原本使速度降低 50% 至 2.5 公尺／秒，移除這項減速後恢復為 5 公尺／秒；不是讓所有移動速度額外提高 100%。
- 遊戲原文：1.13.1／Steam Build 25606770 的 ui 資源。描述與實作的差異仍需遊戲內核對；省略細節不列為繁中誤譯。

## 原文核對

- 對應 hash：`6704b700`。
- 核對同一描述鍵／hash 的繁中與英文，效果方向未見明確翻譯矛盾；未列公式、上限或細部限制不算錯誤。

## 圖示來源

[原圖](https://gameslantern.com/storage/sites/darktide/exporter/talents/ogryn/default/ogryn_windup_is_uninterruptible.webp)｜[圖片來源 Issue](https://github.com/SyuanTsai/Media-Assets/issues/10#issuecomment-5931394406)｜[圖片附件](https://github.com/user-attachments/assets/d80b562f-7fc2-4daf-85e4-ae25f8171a89)

圖片僅供技能辨識，不作機制證據。

