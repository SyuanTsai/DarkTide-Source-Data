# 達姆彈(Dumdum)：電弧步槍實作

[玩家說明](README.md)｜[來源索引](SOURCE_INDEX.md)｜[型號對應](WEAPON_COMPATIBILITY.md)

- 實作：`weapon_trait_bespoke_arc_rifle_p1_consecutive_hits_increases_close_damage`。
- 等級覆寫：[trait](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_traits/weapon_traits_bespoke_arc_rifle_p1.lua#L10-L59)。
- Buff接入：[繼承與覆寫](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/weapon_traits_buff_templates/weapon_traits_bespoke_arc_rifle_p1_buff_templates.lua#L12-L14)。
- 適用型號：電弧步槍 布蘭克斯 Mk IV。

## 機制與公式

- 父Buff監聽本武器、持用狀態與非Buff攻擊的`on_hit`；不要求相同敵人或近距離。[共用父子Buff](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/weapon_traits_buff_templates/base_weapon_trait_buff_templates.lua#L1737-L1761)。

- `target_number>1`不計數；首次nil→0→1→2時第三次合格事件得到第一層，逾期重設0後第二次事件得到第一層。最多5層、有效層共用2秒期限，滿層命中也刷新。[計數](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/buff_utils.lua#L92-L114)；[期限與層數](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/buff/buffs/weapon_trait_target_number_parent_proc_buff.lua#L14-L86)。

- 直接hitscan未傳target_number，Attack預設0，穿透多個目標可多次計數。[hitscan](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/attack/hit_scan.lua#L215-L240)；[預設值](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/attack/attack.lua#L92-L100)。

- 每層比例v依本變體覆寫；有效層n與距離d：`x=clamp((d−12.5)/17.5,0,1)`、額外比例`n×v×(1−sqrt(x))`，與同階段其他比例s相加成`1+s+n×v×(1−sqrt(x))`。[傷害公式](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/attack/damage_calculation.lua#L284-L297)。

- 命中事件在傷害後送出；子Buff統計更新後供後續傷害使用。[事件](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/attack/attack.lua#L581-L621)。

- 本變體每層1／2／3／4%，滿5層5／10／15／20%；IV級滿層原階段100點在12.5公尺內120點、16.875公尺110點、30公尺起100點。

- hip與braced皆走`shoot_hit_scan`，並以`arc`類型及實際weapon.item發出連鎖傷害；該類型不屬Buff攻擊。[hip](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/arc_rifle/arc_rifle_p1_m1.lua#L306-L358)；[braced](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/arc_rifle/arc_rifle_p1_m1.lua#L381-L433)。

- 連鎖批次把遍歷次序ii傳作target_number，因此只計第一個存活目標；不能把每個跳躍當成一層。直接射擊命中與該批次第一個命中是不同事件。[連鎖傷害批次](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/weapon/actions/utilities/chain_lightning_action.lua#L243-L285)；[Attack接入](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/action/chain_lightning.lua#L500-L510)。

- 連鎖起點可取最遠存活直接命中者；若直接命中者皆死亡，改尋其附近敵人。第一個連鎖事件不保證是最初射擊目標。[連鎖起點](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/weapon/actions/action_shoot_hit_scan.lua#L56-L92)。

- 連鎖damage profile沒有skip_on_hit_proc，事件排除表只列grimoire；因此arc_chain仍能發出合格on_hit。[連鎖配置](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/arc_rifle/settings_templates/arc_rifle_damage_profile_templates.lua#L239-L344)；[排除表](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/attack/attack.lua#L86-L88)。

- 數值：`{"unit": "每層近距離傷害百分比", "per_stack_percent": [1, 2, 3, 4], "max_effective_stacks": 5, "shared_duration_seconds": 2, "full_effect_distance_m": 12.5, "zero_effect_distance_m": 30, "distance_interpolation": "sqrt(clamp((distance-12.5)/17.5,0,1))", "cold_start_first_effective_hit": 3, "after_expiry_first_effective_hit": 2}`。
- 結算與算例：[百分比檢核](DAMAGE_PERCENTAGE_REVIEW.md)。
- 原文比較：[同一名稱與描述鍵](LOCALIZATION_COMPARISON.md)。


- 連鎖採深度優先、子節點先加入傷害列表；多跳時首個計數事件可來自較深葉節點，不保證是連鎖起點。[遍歷順序](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/action/chain_lightning_target.lua#L178-L186)；[巢狀跳躍節點](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/action/chain_lightning.lua#L209-L217)。
