# 殺戮地帶(Kill Zone)：原始碼依據

[English](en/veteran_ranged_power_out_of_melee.md)

來源版本：Release 1.13.1；完整 SHA：`7e662fcda16219d775b84af50322be2e9cd9d62e`。

[返回玩家說明](README.md#veteran_ranged_power_out_of_melee)｜[來源與限制](../../../README.md)

- 名稱 key：`loc_talent_veteran_ranged_power_out_of_melee`；描述 key：`loc_talent_veteran_ranged_power_out_of_melee_new_desc`。中文沿用詞表 Kill Zone 譯名，key 對應暫定、待使用者確認。
- 節點 `node_b0c4f49c-fd47-4b1c-9279-82e12dc3ac7d`，`default`，1 點，上限 1。來源見[節點來源](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/ui/views/talent_builder_view/layouts/veteran_tree.lua#L691-L720)。無 ability 替換、疊層或獨有互斥宣告。
- 本文為程式分析，未進行遊戲內驗證。

**原始碼確認 — 條件與持續**：talent 安裝同名 passive Buff；訂閱 `on_player_hit_received`，只在 `attack_type == melee` 且 `attacked_unit` 是自己時，寫入 `last_hit_t=t`。固定更新以 `t > last_hit_t + 8` 決定是否提供 `ranged_damage=0.15`。沒有附近敵人查詢、擊殺、暴擊、協同或距離門檻，也沒有疊層；生效後持續到下一個合格命中令條件失效。這是本人傷害 stat，不直接施加隊友。[talent 與舊顯示資料](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/veteran_talents.lua#L1530-L1560)、[Buff 完整邏輯](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/veteran_buff_templates.lua#L680-L719)、[8 秒設定](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/talent/talent_settings_veteran.lua#L191-L193)、[近戰判斷](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/helper_functions/check_proc_functions.lua#L368-L370)。

**原始碼確認 — 事件限制**：該事件由伺服器為玩家目標送出，需通過共用 `should_proc` 及事件去重；此 Buff predicate 沒有要求傷害值大於 0。因此只能描述為「收到合格的近戰命中事件」，不能自行添加必須扣生命、不能被韌性吸收等限制。遠程命中不改此計時器。共用攻擊流程會排除玩家對友方目標，`grimoire` damage type 不觸發 proc。[受擊事件](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/attack/attack.lua#L752-L782)、[友方與 should_proc](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/attack/attack.lua#L550-L581)、[排除 damage type](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/attack/attack.lua#L86-L88)。是否所有格擋／閃避情境都會到達此路徑，需要各攻擊呼叫端逐項核對；不作通用保證。

**程式推導 — 加算位置**：`ranged_damage` 是 `additive_multiplier`；Buff 的條件成立才將 0.15 加入該 stat。傷害計算將 `(ranged_damage - 1)` 加入一般 damage stat 合計；遠程判定接受 `attack_type=ranged` 或 profile 的 `count_as_ranged_attack`。因此 +15 個百分點加入此加算部分，不能無條件宣稱所有最終傷害乘 1.15；例如該部分原為 1.25，加入後為 1.40，此部分相對增加 12%。其他裝甲、profile、弱點及後續傷害步驟仍適用。[stat 類型](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/buff_settings.lua#L938-L950)、[條件與 stat 聚合](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/buff/buffs/buff.lua#L689-L727)、[合計起點與遠程判定](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/attack/damage_calculation.lua#L236-L245)、[遠程傷害加入合計](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/attack/damage_calculation.lua#L317-L319)、[後續倍率與回傳](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/attack/damage_calculation.lua#L575-L584)。

**程式推導 — 邊界與更新順序**：初始化是 `last_hit_t=0`，不是「安裝時間」。若目前任務時間已大於 8，首次 update 即可生效；不能說每次重新配裝必須固定等待 8 秒。若 t=100 受擊，t=108 恰好相等仍不生效，第一個大於 108 的 update 才生效；期間再受擊會延後完整門檻。沒有自然 duration 或一次性消耗。Buff 固定更新先計算條件、再處理事件、最後更新 stats；事件改 timestamp 後，條件布林可能到下一輪才更新，精確畫面／攻擊幀的延遲未實測。[初始化與條件](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/veteran_buff_templates.lua#L690-L715)、[固定更新順序](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/buff/player_unit_buff_extension.lua#L131-L144)。

**顯示差異與待確認**：talent 內部 `name` 仍描述附近無敵人，format_values 也保留 radius；目前實際增益效果使用「上次近戰受擊時間」，不能以舊描述取代執行邏輯。後續已取得本機Build 25606770的繁中模板；其8秒誤譯見下方對照。radius未出現在目前模板，不將未使用的格式參數當成原文錯誤。中文 key 對應與遊戲內表現待確認；不影響以上靜態條件和數值。POC 案例見 [POC](../../../docs/POC.md)。

## 遊戲本體繁中對照

- 文字來源：本機Steam Build `25606770`，`content/localization/ui`，2026-10-01擷取；不是MOD文字。
- 語系鍵：`loc_talent_veteran_ranged_power_out_of_melee_new_desc`；hash：`4da1db07`；繁中entry_index：`5056`；英文entry_index：`5056`。以資源＋hash配對，已確認兩語系此hash各一筆。
- 繁中問題片段：「持續{cooldown:%s}秒」；同版英文對照片段：`avoided Melee Attacks for {cooldown:%s}s`。引文保留原始占位符，未冒充遊戲畫面的最終數字。
- 判定：**明確繁中描述錯誤**。把生效等待時間譯成持續時間：同版英文的for cooldown seconds修飾避開近戰的期間；繁中改成傷害加成持續時間。buff以last_hit_t+cooldown判定，沒有8秒增傷到期機制。
- 本項由同一份擷取資源的中英語義差異定位，再核對固定公開版本的格式／機制；不單憑文字與實作的差異判定繁中錯譯。完整文字只留本機，Git僅保存必要短引文與追溯資料。
- [完整比對範圍與版本限制](LOCALIZATION_COMPARISON.md)。

- [公開依據：scripts/settings/buff/archetype_buff_templates/veteran_buff_templates.lua，第680–719行](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/veteran_buff_templates.lua#L680-L719)
- [公開依據：scripts/settings/talent/talent_settings_veteran.lua，第191–193行](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/talent/talent_settings_veteran.lua#L191-L193)

## 圖示來源

[原圖](https://gameslantern.com/storage/sites/darktide/exporter/talents/veteran/default/veteran_ranged_power_out_of_melee.webp)｜[圖片來源 Issue](https://github.com/SyuanTsai/Media-Assets/issues/6)｜[圖片附件](https://github.com/user-attachments/assets/8cc616f0-d225-4b5f-81a4-8780f478d471)

圖片僅供技能辨識，不作機制證據。

