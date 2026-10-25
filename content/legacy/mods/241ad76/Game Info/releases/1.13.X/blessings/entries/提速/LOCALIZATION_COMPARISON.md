# 提速：本體原文逐規則比較

[玩家說明](README.md)｜[來源索引](SOURCE_INDEX.md)

- Steam Build25606770（1.13.1），2026-10-02擷取，資源`content/localization/items`。

- 名稱鍵`loc_trait_bespoke_movement_speed_on_activation`／hash`5d0fe023`；描述鍵`loc_trait_bespoke_movement_speed_on_activation_desc`／hash`863b83e4`。

- 英文／繁中以同一資源與hash精確配對，完整RAW SHA-256：`c0719a6933c4f3d472a569a8ec841df819eb1b1a03d09d83c5cee05a2a861026`。

- 本體名稱：Rev it Up／提速。

- 文件名稱：提速(Rev it Up)。

- 適用武器：突擊鏈斧、重型開膛劍、突擊鏈鋸劍；描述鍵`loc_trait_bespoke_movement_speed_on_activation_desc`／hash`863b83e4`。

- 英文模板：{movement_speed:%s} Movement Speed for {time:%s}s on Weapon Special Activation.

- 繁中模板：武器特殊啟動後{movement_speed:%s}移動速度，持續{time:%s}秒。

- **靜態重建**：I–IV 逐級靜態重建如下；數值與時間依原文占位字串及實際 formatter 重建：

| 等級 | 移動速度加算值 | 持續時間 | 英文靜態重建 | 繁中靜態重建 |
|---|---:|---:|---|---|
| I | +17% | 2 秒 | +17% Movement Speed for 2s on Weapon Special Activation. | 武器特殊啟動後+17%移動速度，持續2秒。 |
| II | +18% | 2 秒 | +18% Movement Speed for 2s on Weapon Special Activation. | 武器特殊啟動後+18%移動速度，持續2秒。 |
| III | +19% | 2 秒 | +19% Movement Speed for 2s on Weapon Special Activation. | 武器特殊啟動後+19%移動速度，持續2秒。 |
| IV | +20% | 2 秒 | +20% Movement Speed for 2s on Weapon Special Activation. | 武器特殊啟動後+20%移動速度，持續2秒。 |

各級使用相同描述句型；依格式參數重建，並非遊戲畫面。

| 規則 | 本體／既有文件描述與位置 | 程式行為與檔案／方法／行號 | 比較結果 | 理由 |
|---|---|---|---|---|
| 英文主效果 | {movement_speed:%s} Movement Speed for {time:%s}s on Weapon Special Activation. | [activation listener](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/weapon_traits_buff_templates/base_weapon_trait_buff_templates.lua#L1177-L1190); [event emitter](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/weapon/player_unit_weapon_extension.lua#L1149-L1188) | 一致 | 效果與事件來源相符；不是特殊攻擊命中觸發。 |
| 繁中主效果 | 武器特殊啟動後{movement_speed:%s}移動速度，持續{time:%s}秒。 | [activation listener](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/weapon_traits_buff_templates/base_weapon_trait_buff_templates.lua#L1177-L1190) | 一致 | 效果方向及啟動條件一致。 |
| 數值與時間 | 數值以 movement_speed/time 占位符呈現，未列具體數值。 | [tier values](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_traits/weapon_traits_bespoke_chainaxe_p1.lua#L92-L145); [formatter](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/trait_value_parser.lua#L8-L32) | 文件未涵蓋 | 占位模板省略逐級重建值，不構成矛盾。 |
| 持用條件及事件門檻 | 兩語描述未列出持用條件或啟動間隔。 | [held predicate](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/helper_functions/conditional_functions.lua#L43-L59); [event guard](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/weapon/player_unit_weapon_extension.lua#L1149-L1188) | 文件未涵蓋 | 省略額外條件。 |
| 刷新、疊層及切換 | 原文沒有說明重觸發、疊層、切換或到期時序。 | [refresh](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/buff/buffs/proc_buff.lua#L304-L355); [timer](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/buff/buffs/proc_buff.lua#L78-L104); [held stat gate](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/buff/buffs/proc_buff.lua#L247-L254) | 文件未涵蓋 | 描述沒有聲稱其他計時或層數行為。 |
| 實際武器範圍 | 描述未列出武器與型號。 | 三實作六 Mark 的逐項 binding/append 列於 association snapshot；source ranges 記錄固定行號。 | 文件未涵蓋 | 不以相同名稱鍵推廣至盤點以外項目。 |
| 特殊狀態再次啟動 | 描述未說明特殊狀態啟用中是否可再次發出事件。 | [activation gate](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/weapon/player_unit_weapon_extension.lua#L1149-L1188); six exact per-Mark weapon-special tweak tables are separately cited in refs. | 文件未涵蓋 | 逐個 Mark 的 tweak table 均未設定 allow_reactivation_while_active；發送端僅於 inactive 或該欄位為 true 時允許事件。 |
| 最終移動速度計算 | 描述未列走路或衝刺的完整速度乘算。 | [walking consumer](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/character_state_machine/character_states/player_character_state_walking.lua#L109-L116); [sprinting consumer](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/character_state_machine/character_states/player_character_state_sprinting.lua#L150-L157); [helper boundary](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/character_state_machine/character_states/utilities/accelerated_local_space_movement.lua#L55-L97) | 文件未涵蓋 | 描述提供加算值，沒有宣稱固定最終速度百分比；實際速度仍受動作及其他固定倍率影響。 |
| 首次套用時點 | 描述未說明觸發事件與角色速度狀態更新的先後。 | [player buff update order](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/buff/player_unit_buff_extension.lua#L131-L145); [event delivery](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/buff/buff_extension_base.lua#L233-L271) | 文件未涵蓋 | 固定更新先處理 ProcBuff 事件，再重建 stat cache；沒有主張事件送達前已套用加成。 |
