# 擾動命運(Disrupt Destiny)：原始碼依據

[English](en/psyker_new_mark_passive.md)

[返回玩家說明](README.md#psyker_new_mark_passive)｜[技術索引](SOURCE_INDEX.md)｜[原文比對](LOCALIZATION_COMPARISON.md#psyker_new_mark_passive)

- 來源版本：Release 1.13.1；固定 SHA：`7e662fcda16219d775b84af50322be2e9cd9d62e`。
- 天賦：`psyker_new_mark_passive`；名稱鍵：`loc_talent_psyker_marked_enemies_passive`；描述鍵：`loc_talent_psyker_marked_enemies_passive_updated_desc`。
- 節點：`node_44ce21ca-9b23-46b9-a6df-eae7ee03114b`；分類：鑰石；每節點一點。
- 證據程度：原始碼確認／程式推導；以下算例屬程式推導，未進行遊戲內測試。

## 原始碼確認與程式推導

- 選敵函式查詢 40 公尺範圍，只接受 breed.psyker_mark_target 為 true 的存活敵人；水平視角 dot 必須大於 0.5，且 perception_extension 回報有視線。初次選敵取廣域查詢中第一個有效目標；重選時以最後死亡位置附近距離最近的有效目標為準。
- 更新函式約每秒檢查目前目標是否仍可見；目標死亡或可見／交戰條件逾時會走重選邏輯。這個更新節奏不是每秒標記機率。
- on_hit 處理先要求 attacking_unit 等於玩家自身，再要求 attack_result 為 died 且 victim_unit 等於 current_target；滿足後才發放移速／韌性 buff 與一層精準度，然後從命中位置重新選敵。
- 若不是擊殺，玩家攻擊目前標記目標或符合 boss tags 的目標時，只要已有精準層數便呼叫 refresh_duration_of_stacking_buff，重新計時堆疊 buff 持續時間。
- 精準 buff duration=5、max_stacks=15，且 refresh_duration_on_stack 與 refresh_duration_on_remove_stack 均為 true。到期堆疊移除一層後會將剩餘堆疊的 start time 重設，因此逐層衰減，不是各層獨立計時。
- 傷害計算先將一般傷害 buff 套到 base damage，再額外計算 finesse boost；弱點與暴擊加成只在條件成立時套用，兩者同時成立時，finesse multiplier 內的弱點與暴擊增幅相加。
- 獎勵buff韌性恢復率為.25/2.5每秒，移速+.2、持續2.5秒。
- 遠程閃避標記使用{[keywords.count_as_dodge_vs_ranged]=true}字典；table.enum值為字串，而Buff初始化取#template.keywords、更新按數字索引讀取。因此該宣告不能作為已生效遠程閃避的證據，玩家說明不列此效果。

## 原始碼依據

- [scripts/settings/ability/archetype_talents/talents/psyker_talents.lua：1957–2066](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/psyker_talents.lua#L1957-L2066)
- [scripts/settings/buff/archetype_buff_templates/psyker_buff_templates.lua：639–733](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/psyker_buff_templates.lua#L639-L733)
- [scripts/settings/buff/archetype_buff_templates/psyker_buff_templates.lua：741–755](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/psyker_buff_templates.lua#L741-L755)
- [scripts/settings/buff/archetype_buff_templates/psyker_buff_templates.lua：765–840](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/psyker_buff_templates.lua#L765-L840)
- [scripts/settings/buff/archetype_buff_templates/psyker_buff_templates.lua：841–895](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/psyker_buff_templates.lua#L841-L895)
- [scripts/settings/buff/archetype_buff_templates/psyker_buff_templates.lua：924–971](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/psyker_buff_templates.lua#L924-L971)
- [scripts/settings/buff/archetype_buff_templates/psyker_buff_templates.lua：973–1019](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/psyker_buff_templates.lua#L973-L1019)
- [scripts/settings/talent/talent_settings_psyker.lua：16–18](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/talent/talent_settings_psyker.lua#L16-L18)
- [scripts/utilities/attack/damage_calculation.lua：587–614](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/attack/damage_calculation.lua#L587-L614)
- [scripts/utilities/attack/damage_calculation.lua：672–782](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/attack/damage_calculation.lua#L672-L782)
- [scripts/extension_systems/buff/buff_extension_base.lua：434–462](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/buff/buff_extension_base.lua#L434-L462)
- [scripts/extension_systems/buff/buff_extension_base.lua：635–663](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/buff/buff_extension_base.lua#L635-L663)
- [scripts/extension_systems/character_state_machine/character_states/utilities/dodge.lua：108–119](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/character_state_machine/character_states/utilities/dodge.lua#L108-L119)
- [scripts/extension_systems/buff/buffs/buff.lua：130–139](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/buff/buffs/buff.lua#L130-L139)
- [scripts/extension_systems/buff/buffs/buff.lua：809–818](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/buff/buffs/buff.lua#L809-L818)
- [scripts/foundation/utilities/table.lua：1110–1126](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/foundation/utilities/table.lua#L1110-L1126)
- [scripts/settings/ability/archetype_talents/talents/psyker_talents.lua：1957–2066](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/psyker_talents.lua#L1957-L2066)
- [scripts/ui/views/talent_builder_view/layouts/psyker_tree.lua：1266–1295](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/ui/views/talent_builder_view/layouts/psyker_tree.lua#L1266-L1295)

## 算例條件與待確認事項

- **傷害算例**：只計一般增傷，100 × (1 + 15%) = 115 點。再看弱點這一項：假設同次命中已算入一般增傷後，基礎部分為 100、弱點額外部分為 50，加上 37.5% 弱點加成後為 100 + 50 × 1.375 = 168.75 點，相較這一階段原有 150 點增加 12.5%。武器的額外傷害比例不同，整次命中的增幅也不同。
- **重新計時與衰減**：精準加成共用 5 秒倒數。新增層數，或已有層數時命中仍存活的標記目標或首領，都會重設倒數。到期只掉一層，再倒數 5 秒；例如 3 層且未再觸發重新計時，約在 5、10、15 秒依序降至 2、1、0 層。
- breed.psyker_mark_target 決定哪些敵種可成為候選；玩家文案只寫「可被標記的敵人」，不逐種列名。
- 新增層或合格的非擊殺命中會重設整組計時；到期只掉一層並重啟剩餘層倒數。
- 同時暴擊／弱點的傷害算例假設直擊與 finesse 額外傷害各 100，且沒有護甲曲線與其他加成，不能當作所有武器的固定最終傷害。
- 其他天賦可把上限改為25、持續時間改為10秒，或讓弱點擊殺一次給3層；這些 modifier 的變體另行記錄。
- source SHA 與本機 Build 25606770 版本對應為1.13.1。
- 同時暴擊並命中弱點時，兩種額外加成於共同finesse階段相加；沒有命中條件的加成不生效。遠程閃避keyword宣告未符合陣列格式，遊戲內表現留待確認。
- 遊戲原文：1.13.1／Steam Build 25606770 的 ui 資源。描述與實作的差異仍需遊戲內核對；省略細節不列為繁中誤譯。

## 原文核對

- 對應 hash：`cfa752d8`。
- 現有本地化說明寫成每秒機率標記；源碼選敵邏輯則依可標記敵種、前向視角及視線條件挑選，逐秒只是目標狀態檢查／重選節奏。文字與程式來源皆為1.13.1；先保留差異待遊戲內核對。

## 圖示來源

[原圖](https://gameslantern.com/storage/sites/darktide/exporter/talents/psyker/keystone/psyker_new_mark_passive.webp)｜[圖片來源 Issue](https://github.com/SyuanTsai/Media-Assets/issues/7#issuecomment-5928024966)｜[圖片附件](https://github.com/user-attachments/assets/885fdda1-bcf2-4502-97e0-7eaead2392e0)

圖片僅供技能辨識，不作機制證據。

