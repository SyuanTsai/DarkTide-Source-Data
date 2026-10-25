# 平靜迸發(Becalming Eruption)：原始碼依據

[English](en/psyker_shout_reduces_warp_charge_generation.md)

[返回玩家說明](README.md#psyker_shout_reduces_warp_charge_generation)｜[技術索引](SOURCE_INDEX.md)｜[原文比對](LOCALIZATION_COMPARISON.md#psyker_shout_reduces_warp_charge_generation)

- 來源版本：Release 1.13.1；固定 SHA：`7e662fcda16219d775b84af50322be2e9cd9d62e`。
- 天賦：`psyker_shout_reduces_warp_charge_generation`；名稱鍵：`loc_talent_psyker_shout_reduces_warp_charge_generation`；描述鍵：`loc_talent_psyker_shout_reduces_warp_charge_generation_description`。
- 節點：`node_b6b57be7-9aa8-483b-a127-6c1815d452a4`；分類：能力；每節點一點。
- 證據程度：原始碼確認／程式推導；以下算例屬程式推導，未進行遊戲內測試。

## 原始碼確認與程式推導

- 尖嘯結束事件把 num_hits 作為層數加入 psyker_shout_warp_generation_reduction；buff 持續5秒、最多25層。模板預設和第1組override的每層 warp_charge_amount 為0.99，第2組override為0.98。天賦格式化讀取tier值，示例只採用0.99情境。遊戲 buff 設定把 warp_charge_amount 歸類為 multiplicative_multiplier，而多層buff計算會逐層乘入，因此1%層值時總反噬生成係數為0.99^n，不是把百分比直接相加。尚未在遊戲內確認各配置時，不能把某一override視作所有配置都固定使用。

## 原始碼依據

- [scripts/settings/ability/archetype_talents/talents/psyker_talents.lua：266–316](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/psyker_talents.lua#L266-L316)
- [scripts/settings/buff/archetype_buff_templates/psyker_buff_templates.lua：405–445](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/psyker_buff_templates.lua#L405-L445)
- [scripts/settings/buff/archetype_buff_templates/psyker_buff_templates.lua：419–445](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/psyker_buff_templates.lua#L419-L445)
- [scripts/settings/buff/archetype_buff_templates/psyker_buff_templates.lua：362–417](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/psyker_buff_templates.lua#L362-L417)
- [scripts/settings/ability/archetype_talents/talents/psyker_talents.lua：315–343](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/psyker_talents.lua#L315-L343)
- [scripts/ui/views/talent_builder_view/layouts/psyker_tree.lua：515–541](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/ui/views/talent_builder_view/layouts/psyker_tree.lua#L515-L541)
- [scripts/settings/buff/buff_settings.lua：1018–1021](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/buff_settings.lua#L1018-L1021)
- [scripts/extension_systems/buff/buffs/buff.lua：689–729](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/buff/buffs/buff.lua#L689-L729)
- [scripts/settings/ability/archetype_talents/talents/psyker_talents.lua：266–316](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/psyker_talents.lua#L266-L316)
- [scripts/ui/views/talent_builder_view/layouts/psyker_tree.lua：515–541](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/ui/views/talent_builder_view/layouts/psyker_tree.lua#L515-L541)

## 算例條件與待確認事項

- 本次尖嘯有效命中10名敵人，採用每層係數0.99，沒有其它反噬生成修正。 0.99^10 ≈ 0.9044。 效果期間的反噬生成約為原值的90.44%，即約降低9.56%。
- 25層上限、每層係數0.99。 0.99^25 ≈ 0.7778。 反噬生成約為原值的77.78%，即約降低22.22%；持續5秒。
- 尖嘯命中數取決於動作的目標篩選，且受25層上限限制；未核實同一目標在某些特殊碰撞下的重複計數。
- buff 還有0.98的 tier override；若客戶端 Build25606770 使用不同 tier/配置，數值算例不能直接套用，須同版核對。
- 反噬生成 stat 與反噬平息不是同一效果；本天賦不直接減少已累積反噬。
- 遊戲原文：1.13.1／Steam Build 25606770 的 ui 資源。描述與實作的差異仍需遊戲內核對；省略細節不列為繁中誤譯。

## 原文核對

- 對應 hash：`57df8e08`。
- 同一描述鍵的繁中與英文效果方向一致；未說明的公式、時序與額外條件屬描述不完整，不列為誤譯。與公開來源版本對應為1.13.1。

## 圖示來源

[原圖](https://gameslantern.com/storage/sites/darktide/exporter/talents/psyker/ability_modifier/psyker_shout_reduces_warp_charge_generation.webp)｜[圖片來源 Issue](https://github.com/SyuanTsai/Media-Assets/issues/7#issuecomment-5928024966)｜[圖片附件](https://github.com/user-attachments/assets/b89da8f0-2d3d-4a87-bc92-43e2438e28c8)

圖片僅供技能辨識，不作機制證據。

