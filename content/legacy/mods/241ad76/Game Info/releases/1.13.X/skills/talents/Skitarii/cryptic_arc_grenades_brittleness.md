# 超載電弧手榴彈(Overcharged Arc Grenades)：原始碼依據

[English](en/cryptic_arc_grenades_brittleness.md)

[返回玩家說明](README.md#cryptic_arc_grenades_brittleness)｜[技術索引](SOURCE_INDEX.md)｜[原文比對](LOCALIZATION_COMPARISON.md#cryptic_arc_grenades_brittleness)

- 來源版本：Release 1.13.1；固定 SHA：`7e662fcda16219d775b84af50322be2e9cd9d62e`。
- 天賦：`cryptic_arc_grenades_brittleness`；名稱鍵：`loc_talent_cryptic_arc_grenades_brittleness`；描述鍵：`loc_talent_cryptic_arc_grenades_brittleness_desc`。
- 節點：`node_d609f926-8570-41c2-9d4f-2954298c8f73`；分類：閃擊；每節點一點。
- 證據程度：原始碼確認／程式推導；以下算例屬程式推導，未進行遊戲內測試。

## 原始碼確認與程式推導

- 天賦被動 cryptic_grenade_ability_arc_grenade_extra_arcs 將 arc_grenade_extra_arcs stat buff 設為2；爆炸開始時 player_grenade_explosion_templates.lua 會將 max_targets 設為 base_num_arcs(4)+num_extra_arcs(2)，故起始目標上限為6，並非延長單一電弧鏈的跳數。天賦的 special rule cryptic_arc_grenade_gives_brittleness 會被 arc_grenade_chain_lightning_source 的 _init_chain 讀取。每當鏈的節點加入時，目標取得8層 rending_debuff；模板每層撕裂倍率為0.025、持續5秒，max_stacks=16 並在加層時重新計時，因此單次鏈命中新增20%，重複命中可累積至40%。

## 原始碼依據

- [scripts/settings/ability/archetype_talents/talents/cryptic_talents.lua：985–1015](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/cryptic_talents.lua#L985-L1015)
- [scripts/settings/talent/talent_settings_cryptic.lua：185–194](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/talent/talent_settings_cryptic.lua#L185-L194)
- [scripts/settings/buff/archetype_buff_templates/cryptic_buff_templates.lua：1358–1364](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/cryptic_buff_templates.lua#L1358-L1364)
- [scripts/settings/damage/explosion_templates/player_grenade_explosion_templates.lua：482–525](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/damage/explosion_templates/player_grenade_explosion_templates.lua#L482-L525)
- [scripts/settings/fx/effect_templates/arc_chain_lightning_source/arc_grenade_chain_lightning_source.lua：58–80](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/fx/effect_templates/arc_chain_lightning_source/arc_grenade_chain_lightning_source.lua#L58-L80)
- [scripts/settings/fx/effect_templates/arc_chain_lightning_source/arc_grenade_chain_lightning_source.lua：112–124](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/fx/effect_templates/arc_chain_lightning_source/arc_grenade_chain_lightning_source.lua#L112-L124)
- [scripts/settings/buff/weapon_buff_templates.lua：366–375](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/weapon_buff_templates.lua#L366-L375)
- [scripts/utilities/attack/damage_calculation.lua：122–247](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/attack/damage_calculation.lua#L122-L247)
- [scripts/settings/ability/archetype_talents/talents/cryptic_talents.lua：985–1015](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/cryptic_talents.lua#L985-L1015)
- [scripts/ui/views/talent_builder_view/layouts/cryptic_tree.lua：1843–1865](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/ui/views/talent_builder_view/layouts/cryptic_tree.lua#L1843-L1865)

## 算例條件與待確認事項

- 基礎上限4個起始目標，增加2個後為6個；一名敵人被電弧連鎖命中時，8層×2.5%=20%撕裂增幅，維持5秒。
- 增加2個的是爆炸的起始電弧目標上限，單條連鎖仍受原有跳數與目標條件限制。
- 8層脆弱由電弧連鎖命中的節點施加；是否命中及後續可否疊至16層取決於電弧是否再次選中同一敵人。
- 每層為2.5%撕裂乘數，單次8層為20%；不是直接增加同等百分比的最終傷害。
- 遊戲原文：1.13.1／Steam Build 25606770 的 ui 資源。描述與實作的差異仍需遊戲內核對；省略細節不列為繁中誤譯。

## 原文核對

- 對應 hash：`699afdc0`。
- 繁中描述列出電弧目標增加2個及命中敵人施加8層、每層2.5%脆弱。程式確認額外數值加在起始目標上限，並在電弧連鎖節點加8層、每層2.5%且5秒；最大疊層為16層。Build 25606770 版本對應為1.13.1。

## 圖示來源

[原圖](https://gameslantern.com/storage/sites/darktide/exporter/talents/cryptic/tactical_modifier/cryptic_arc_grenades_brittleness.webp)｜[圖片來源 Issue](https://github.com/SyuanTsai/Media-Assets/issues/13#issuecomment-5935585681)｜[圖片附件](https://github.com/user-attachments/assets/14c1a0d8-2916-40d7-a7e2-8572a0b3e6d2)

圖片僅供技能辨識，不作機制證據。

