# 優勢（通用力量）(Superiority)：烈焰力場劍實作

[玩家說明](README.md)｜[來源索引](SOURCE_INDEX.md)｜[型號對應](WEAPON_COMPATIBILITY.md)

- 實作：`weapon_trait_bespoke_forcesword_p1_elite_kills_grants_stackable_power`。
- 等級覆寫：[trait](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_traits/weapon_traits_bespoke_forcesword_p1.lua#L373-L432)。
- Buff接入：[繼承與覆寫](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/weapon_traits_buff_templates/weapon_traits_bespoke_forcesword_p1_buff_templates.lua#L29-L47)。
- 適用型號：烈焰力場劍 朦朧 Mk II、烈焰力場劍 戴莫斯 Mk IV、烈焰力場劍 伊利斯 Mk V。

## 機制與公式

- 共用觸發、狀態與完整公式見[本祝福來源與公式](SOURCE_INDEX.md)。

- **實際型號與接線**：烈焰力場劍 朦朧 Mk II（m1）、戴莫斯 Mk IV（m2）、伊利斯 Mk V（m3）。普通與特殊啟用的各自 profile 仍走本項 on_kill helper；M1/M2 在特殊啟用掃擊符合黏附條件並中止時，ActionSweep 以各自 light/heavy sticky settings 附著追加傷害 profile；其 Attack.execute 為 melee 類型並帶原武器 item，因此若造成合格擊殺可觸發本項，且既有 global power 有效時也套用於追加傷害。M3 special-active 改用 forcesword_active_cleave_light/heavy，不使用這組 M1/M2 黏附設定。純 push 選 default_push/light_push，attack=0、impact 非零。push-follow fling 的 damage_type 傷害類型依序是 warp、physical、physical；三者均由 ActionDamageTarget 以 attack_type=ranged 執行，所以仍吃 global power 修正。
- 層數、特殊啟用與攻擊力量範圍見[完整說明](README.md)。

- 等級與數值：[集中等級表](TIER_VALUES.md)。
- 結算與算例：[百分比檢核](DAMAGE_PERCENTAGE_REVIEW.md)。
- 原文比較：[同一名稱與描述鍵](LOCALIZATION_COMPARISON.md)。
