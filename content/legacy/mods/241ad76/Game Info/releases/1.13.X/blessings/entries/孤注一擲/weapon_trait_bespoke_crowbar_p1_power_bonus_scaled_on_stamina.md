# 孤注一擲(All or Nothing)：撬棍實作

[玩家說明](README.md)｜[來源索引](SOURCE_INDEX.md)｜[型號對應](WEAPON_COMPATIBILITY.md)

- 實作：`weapon_trait_bespoke_crowbar_p1_power_bonus_scaled_on_stamina`。
- 等級覆寫：[trait](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_traits/weapon_traits_bespoke_crowbar_p1.lua#L187-L229)。
- Buff接入：[繼承與覆寫](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/weapon_traits_buff_templates/weapon_traits_bespoke_crowbar_p1_buff_templates.lua#L21)。
- 適用型號：撬棍 科技教士 型號6。

## 機制與公式

- 共用觸發、狀態與完整公式見[本祝福來源與公式](SOURCE_INDEX.md)。

[查看逐型號對應](WEAPON_COMPATIBILITY.md)。撬棍共核對 1 個實際標記；耐力樣板為 `linesman_plus`。實際攻擊表有 20 個有效 Sweep：4 個原生字面 action（action_light_3、action_light_4、action_pushfollow、action_pushfollow_special）與 16 個由 BASE_ACTIONS clone 的有效 action；其中 8 個是重擊 Sweep。16 個生成 Sweep 含普通 action_light_1/action_heavy_1/action_light_2/action_heavy_2、其 special 模式 action_light_1_special/action_heavy_1_special/action_light_2_special/action_heavy_2_special，以及各自的 from_activate 鏈接版本；8 個生成 windup selectors 是 setup/control，不算目標命中。特殊輕／重 Sweep 只有在 special_active 時有黏附設定，且目標命中須使 Sweep 中止並提供有效 unit／actor；盾牌 hit zone 與非任務目標 prop 被排除，本型號未設 always_sticky 或額外禁用護甲。成立後有正傷害的 sticky tick 以 melee 結算，閃避離開的 sticky_dodge_push 無正攻擊傷害。八個重擊 Sweep 的 profile 逐項核對：heavy_1 與其 from_activate 使用 heavy_crowbar_smiter；heavy_2 與其 from_activate 使用 heavy_crowbar_tank；兩種 special heavy 及其 from_activate 使用繼承 heavy_crowbar_tank 的 heavy_crowbar_special；三個 profile 路徑均保留 melee_attack_strengths.heavy，from_activate 只改 power_level。純推擊仍為 action_push，推擊後另列 Sweep。

- 等級與數值：[集中等級表](TIER_VALUES.md)。
- 結算與算例：[百分比檢核](DAMAGE_PERCENTAGE_REVIEW.md)。
- 原文比較：[同一名稱與描述鍵](LOCALIZATION_COMPARISON.md)。
