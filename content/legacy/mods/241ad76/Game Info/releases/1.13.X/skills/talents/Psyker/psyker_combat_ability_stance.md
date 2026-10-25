# 占卜者的注視(Scrier's Gaze)：原始碼依據

[English](en/psyker_combat_ability_stance.md)

[返回玩家說明](README.md#psyker_combat_ability_stance)｜[技術索引](SOURCE_INDEX.md)｜[原文比對](LOCALIZATION_COMPARISON.md#psyker_combat_ability_stance)

- 來源版本：Release 1.13.1；固定 SHA：`7e662fcda16219d775b84af50322be2e9cd9d62e`。
- 天賦：`psyker_combat_ability_stance`；名稱鍵：`loc_talent_psyker_combat_ability_overcharge_stance`；描述鍵：`loc_talent_psyker_combat_ability_overcharge_stance_improved_description`。
- 節點：`node_2a022d3f-fddf-4faf-a79d-c8fe6a18fe36`；分類：能力；每節點一點。
- 證據程度：原始碼確認／程式推導；以下算例屬程式推導，未進行遊戲內測試。

## 原始碼確認與程式推導

- 能力模板直接加成 damage +0.10、weakspot_damage +0.10、critical_strike_chance +0.20；被動韌性傷害倍率為0.8，代表韌性承傷減少20%。注視期間每幀按0.025*dt恢復韌性，0.025為最大韌性的比例。每秒堆疊一層，最多30層；另有每秒傷害lerp，最高+30%，與基礎+10% damage欄位並存。反噬生成速率隨時間以平方曲線增加，擊殺會增加抵銷量而暫緩累積；到100%時 buff 停止。弱點擊殺的 bonus_stacks 只有啟用 Precognition 後才會增加。結束時按目前 stacks+bonus_stacks 建立傷害增益，持續10秒。能力冷卻25秒且主動buff存在時暫停冷卻，因此無其他冷卻修正時，計時從離開注視後恢復。 傷害計算先將一般傷害加成套到基礎傷害，再把弱點／暴擊額外傷害加上去。注視的 +10% 弱點傷害會進入額外傷害的乘數，因此示範中 100 基礎 + 50 額外變成 100 + 55 = 155；不是 150 × 1.1。注視疊滿時，一般傷害 +40% 也會放大基礎與弱點額外部分；在同一傷害曲線比例的簡化例中為 140 + 70 × 1.1 = 217。

## 原始碼依據

- [scripts/settings/ability/archetype_talents/talents/psyker_talents.lua：37–112](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/psyker_talents.lua#L37-L112)
- [scripts/settings/ability/player_abilities/abilities/psyker_abilities.lua：78–105](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/player_abilities/abilities/psyker_abilities.lua#L78-L105)
- [scripts/settings/buff/archetype_buff_templates/psyker_buff_templates.lua：1024–1079](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/psyker_buff_templates.lua#L1024-L1079)
- [scripts/settings/buff/archetype_buff_templates/psyker_buff_templates.lua：1093–1149](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/psyker_buff_templates.lua#L1093-L1149)
- [scripts/settings/buff/archetype_buff_templates/psyker_buff_templates.lua：1169–1199](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/psyker_buff_templates.lua#L1169-L1199)
- [scripts/settings/buff/archetype_buff_templates/psyker_buff_templates.lua：1227–1244](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/psyker_buff_templates.lua#L1227-L1244)
- [scripts/settings/talent/talent_settings_psyker.lua：5–15](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/talent/talent_settings_psyker.lua#L5-L15)
- [scripts/settings/talent/talent_settings_psyker.lua：133–135](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/talent/talent_settings_psyker.lua#L133-L135)
- [scripts/utilities/attack/damage_calculation.lua：65–95](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/attack/damage_calculation.lua#L65-L95)
- [scripts/utilities/attack/damage_calculation.lua：232–242](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/attack/damage_calculation.lua#L232-L242)
- [scripts/utilities/attack/damage_calculation.lua：672–711](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/attack/damage_calculation.lua#L672-L711)
- [scripts/utilities/attack/damage_calculation.lua：715–724](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/attack/damage_calculation.lua#L715-L724)
- [scripts/utilities/attack/damage_calculation.lua：717–724](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/attack/damage_calculation.lua#L717-L724)
- [scripts/utilities/attack/damage_calculation.lua：772–782](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/attack/damage_calculation.lua#L772-L782)
- [scripts/settings/ability/archetype_talents/talents/psyker_talents.lua：37–112](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/psyker_talents.lua#L37-L112)
- [scripts/ui/views/talent_builder_view/layouts/psyker_tree.lua：482–514](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/ui/views/talent_builder_view/layouts/psyker_tree.lua#L482-L514)

## 算例條件與待確認事項

- **傷害算例**：不計其他加成，滿層時非暴擊、非弱點的 100 點傷害變成 100 × (1 + 10% + 30%) = 140 點；結束後只保留累積的 30%，因此是 130 點。
- **弱點算例**：只看弱點加成這一項，假設一般傷害 100、弱點額外傷害 50，原有 150 點會變成 100 + 50 × 1.10 = 155 點，整次命中約增加 3.33%；注視的其他增傷另計。
- **恢復與暴擊算例**：最大韌性 100 時，每秒恢復 100 × 2.5% = 2.5 點，以缺少的韌性為上限；原有 5% 爆擊率變成 5% + 20% = 25%。
- 實際注視長短由反噬累積、武器動作、擊殺及其他修正共同決定；30層上限不保證能達成。
- 弱點傷害欄只在弱點命中參與；完整攻擊結果要按武器、敵人和攻擊類型計算，這裡分開示範各項加成。
- 遊戲文字Build25606770與公開source commit版本對應為1.13.1；公開程式碼中的註解固定8秒與執行時100%反噬結束條件不同，採執行邏輯並待遊戲內確認。
- 遊戲原文：1.13.1／Steam Build 25606770 的 ui 資源。描述與實作的差異仍需遊戲內核對；省略細節不列為繁中誤譯。

## 原文核對

- 對應 hash：`00d42220`。
- 原文將注視寫成「進入／離開注視範圍」，容易誤解成地面區域；同源英文與實作均指角色進入／結束注視狀態。

## 圖示來源

[原圖](https://gameslantern.com/storage/sites/darktide/exporter/talents/psyker/ability/psyker_combat_ability_stance.webp)｜[圖片來源 Issue](https://github.com/SyuanTsai/Media-Assets/issues/7#issuecomment-5928024966)｜[圖片附件](https://github.com/user-attachments/assets/a56d3b3f-6e4e-4aed-83fc-0317ac57364a)

圖片僅供技能辨識，不作機制證據。

