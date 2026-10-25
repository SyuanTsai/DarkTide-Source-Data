# 優勢（通用力量）(Superiority)：撬棍實作

[玩家說明](README.md)｜[來源索引](SOURCE_INDEX.md)｜[型號對應](WEAPON_COMPATIBILITY.md)

- 實作：`weapon_trait_bespoke_crowbar_p1_elite_kills_grants_stackable_power`。
- 等級覆寫：[trait](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_traits/weapon_traits_bespoke_crowbar_p1.lua#L485-L544)。
- Buff接入：[繼承與覆寫](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/weapon_traits_buff_templates/weapon_traits_bespoke_crowbar_p1_buff_templates.lua#L78-L96)。
- 適用型號：撬棍 科技教士 型號6。

## 機制與公式

- 共用觸發、狀態與完整公式見[本祝福來源與公式](SOURCE_INDEX.md)。

- **實際型號與接線**：撬棍 科技教士 型號6（crowbar_p1_m1）。普通左右起手透過 BASE_ACTIONS aliases 接 light/heavy；另有 left_2/right_2 windup chain 接 light_3/light_4 與 heavy_1/heavy_2。特殊 toggle 本身不攻擊；特殊與 from-activate aliases 保留基底 profile，特殊 light/heavy 還有 sticky tick；閃避離開 sticky 時使用 attack=0、impact 非零的 sticky_dodge_push，不造成 HP 擊殺。純推擊 default_push/light_push 的 attack=0、impact 非零；普通及特殊 pushfollow 是 light_crowbar_tank melee sweep。
- 層數、觸發時點與力量計算見[完整說明](README.md)。

- 等級與數值：[集中等級表](TIER_VALUES.md)。
- 結算與算例：[百分比檢核](DAMAGE_PERCENTAGE_REVIEW.md)。
- 原文比較：[同一名稱與描述鍵](LOCALIZATION_COMPARISON.md)。
