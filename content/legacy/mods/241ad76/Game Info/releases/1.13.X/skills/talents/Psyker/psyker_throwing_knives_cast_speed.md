# 迅捷碎片(Quick Shards)：原始碼依據

[English](en/psyker_throwing_knives_cast_speed.md)

[返回玩家說明](README.md#psyker_throwing_knives_cast_speed)｜[技術索引](SOURCE_INDEX.md)｜[原文比對](LOCALIZATION_COMPARISON.md#psyker_throwing_knives_cast_speed)

- 來源版本：Release 1.13.1；固定 SHA：`7e662fcda16219d775b84af50322be2e9cd9d62e`。
- 天賦：`psyker_throwing_knives_cast_speed`；名稱鍵：`loc_talent_psyker_throwing_knives_reduced_cooldown`；描述鍵：`loc_talent_psyker_throwing_knives_cast_speed_description`。
- 節點：`node_a0e99f21-5abe-407d-a328-c955e9cc27f2`；分類：閃擊；每節點一點。
- 證據程度：原始碼確認／程式推導；以下算例屬程式推導，未進行遊戲內測試。

## 原始碼確認與程式推導

- 固定 source SHA 7e662fcda16219d775b84af50322be2e9cd9d62e。psyker_throwing_knives_cast_speed 的 passive 只連到 psyker_reduced_throwing_knife_cooldown；該常駐 buff 將 grenade_ability_resource_regen_modifier 設為 0.3，且該 stat 是 additive_multiplier，所以總倍率為 1+0.3=1.3。Assail 每次成本 3 點資源、基礎恢復率 1 點/秒；共用 PlayerUnitAbilityExtension 按 (base regen + flat regen) × regen modifier 更新資源，因此單次恢復時間是 3÷(1×1.3)=2.3077 秒，較 3 秒基準少約 23.08%。格式參數 speed/stacks/duration 另指向 psyker_throwing_knife_stacking_speed_buff；雖然原始碼保留一個 on_shoot_projectile proc template 及其 8 秒、5 層、每層 5% 的數值，但此天賦只掛載 resource regen buff，該 proc template 沒有從目前技能節點接入，不是 Quick Shards 的實際效果。

## 原始碼依據

- [scripts/ui/views/talent_builder_view/layouts/psyker_tree.lua：639–661](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/ui/views/talent_builder_view/layouts/psyker_tree.lua#L639-L661)
- [scripts/settings/ability/archetype_talents/talents/psyker_talents.lua：738–802](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/psyker_talents.lua#L738-L802)
- [scripts/settings/buff/archetype_buff_templates/psyker_buff_templates.lua：535–541](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/psyker_buff_templates.lua#L535-L541)
- [scripts/settings/buff/buff_settings.lua：839–839](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/buff_settings.lua#L839-L839)
- [scripts/settings/ability/player_abilities/abilities/psyker_abilities.lua：132–145](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/player_abilities/abilities/psyker_abilities.lua#L132-L145)
- [scripts/extension_systems/ability/player_unit_ability_extension.lua：848–863](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/ability/player_unit_ability_extension.lua#L848-L863)
- [scripts/settings/buff/archetype_buff_templates/psyker_buff_templates.lua：2805–2824](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/psyker_buff_templates.lua#L2805-L2824)
- [scripts/settings/ability/archetype_talents/talents/psyker_talents.lua：738–802](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/psyker_talents.lua#L738-L802)
- [scripts/ui/views/talent_builder_view/layouts/psyker_tree.lua：639–661](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/ui/views/talent_builder_view/layouts/psyker_tree.lua#L639-L661)

## 算例條件與待確認事項

- Assail 使用次數消耗 3 點資源、基礎恢復率 1 點/秒；只計 Quick Shards，沒有其他平速或暫停恢復的效果。 3 ÷ (1 × 1.3) = 2.3077 秒；相較 3 ÷ 1 = 3 秒，等待時間減少 (3 − 2.3077) ÷ 3 ≈ 23.08%。 恢復速率增加 30%，不代表每次等待時間減少 30%。
- 3 秒是 Assail 的基礎資源恢復時間；實際時間會受其他資源恢復修正與恢復暫停影響。
- stacking-speed buff 留存定義不等於目前節點效果；本項以節點實際 passive 掛載作判定。
- 來源 SHA 與本機 Build 25606770 版本對應為1.13.1。
- 遊戲原文：1.13.1／Steam Build 25606770 的 ui 資源。描述與實作的差異仍需遊戲內核對；省略細節不列為繁中誤譯。

## 原文核對

- 對應 hash：`da103b93`。
- 繁中原文說靈能攻擊充能速度加快；掛載的被動確實提高使用次數資源恢復速率 30%。定義裡的 speed/stacks/duration 沒有被該描述使用，也沒有由此節點掛載對應的速度疊層 buff；不可把它們當成已生效文字或原文錯誤。

## 圖示來源

[原圖](https://gameslantern.com/storage/sites/darktide/exporter/talents/psyker/tactical_modifier/psyker_throwing_knives_cast_speed.webp)｜[圖片來源 Issue](https://github.com/SyuanTsai/Media-Assets/issues/7#issuecomment-5928024966)｜[圖片附件](https://github.com/user-attachments/assets/7db7b0d7-3d96-4b42-8f50-f9112f80badc)

圖片僅供技能辨識，不作機制證據。

