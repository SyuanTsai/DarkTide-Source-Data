# 反擊：來源與公式

[玩家說明](README.md)｜[來源索引](SOURCE_INDEX.md)｜[武器對應](WEAPON_COMPATIBILITY.md)｜[等級](TIER_VALUES.md)｜[原文比較](LOCALIZATION_COMPARISON.md)｜[百分比檢核](DAMAGE_PERCENTAGE_REVIEW.md)

- Release1.13.1，固定SHA `7e662fcda16219d775b84af50322be2e9cd9d62e`；機制只依公開Darktide-Source-Code。
- [共用來源邊界](../../SOURCE_INDEX.md)記錄MasterItems快取、完整語系RAW及後端欄位狀態。

| 用途 | 固定原始碼 |
|---|---|
| 一般與完美格擋事件 | [一般與完美格擋事件](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/weapon/player_unit_weapon_extension.lua#L939-L962) |
| 格擋反應進入體力／事件處理 | [blocked→attempt_block_break](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/attack/hit_reaction.lua#L135-L149) |
| 格擋與破防 | [格擋與破防](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/attack/block.lua#L206-L249) |
| 完美格擋窗口僅供區分 | [完美格擋窗口僅供區分](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/attack/block.lua#L252-L272) |
| Proc期限與零冷卻 | [Proc期限與零冷卻](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/buff/buffs/proc_buff.lua#L78-L104) |
| Proc可刷新 | [Proc可刷新](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/buff/buffs/proc_buff.lua#L150-L195) |
| 持用期間提供攻速 | [持用期間提供攻速](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/buff/buffs/proc_buff.lua#L247-L300) |
| 格擋觸發與期限重設 | [格擋觸發與期限重設](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/buff/buffs/proc_buff.lua#L304-L355) |
| 持用武器判定 | [持用武器判定](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/helper_functions/conditional_functions.lua#L43-L59) |
| 攻速加算 | [攻速加算](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/buff/buffs/buff.lua#L689-L733) |
| 攻速類型 | [攻速類型](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/buff_settings.lua#L863) |
| 動作開始取倍率 | [動作開始取倍率](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/action/action_handler.lua#L301-L329) |
| 動作時間除以倍率 | [動作時間除以倍率](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/action/action_handler.lua#L356-L365) |
| 通用與近戰攻速合併 | [通用與近戰攻速合併](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/action/action_handler.lua#L402-L429) |
| 祝福加入裝備而非持用生命週期 | [祝福加入裝備而非持用生命週期](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/weapon/utilities/weapon_tweak_templates.lua#L168-L211) |
| 切出武器生命週期 | [切出武器生命週期](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/weapon/player_unit_weapon_extension.lua#L743-L785) |
| 盾牌一般格擋遠程 | [盾牌一般格擋遠程](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/power_maul_shields/powermaul_shield_p1_m1.lua#L1032-L1035) |
| 盾牌第二型號格擋遠程 | [盾牌第二型號格擋遠程](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/power_maul_shields/powermaul_shield_p1_m2.lua#L1241-L1244) |
| 法務官電擊鎚和鎮壓護盾近戰攻速接入 | [法務官電擊鎚和鎮壓護盾近戰攻速接入](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/power_maul_shields/powermaul_shield_p1_m1.lua#L372-L375) |
| 法務官電擊鎚和鎮壓護盾近戰攻速接入 | [法務官電擊鎚和鎮壓護盾近戰攻速接入](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/power_maul_shields/powermaul_shield_p1_m2.lua#L378-L381) |
| 上古神刃 軍務部 Mk X近戰攻速接入 | [上古神刃 軍務部 Mk X近戰攻速接入](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/power_swords_2h/powersword_2h_p1_m1.lua#L381-L384) |
| 上古神刃 軍務部 Mk II近戰攻速接入 | [上古神刃 軍務部 Mk II近戰攻速接入](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/power_swords_2h/powersword_2h_p1_m2.lua#L377-L380) |
| 動力彎刀 阿里丁 Mk I近戰攻速接入 | [動力彎刀 阿里丁 Mk I近戰攻速接入](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/power_swords/powersword_p2_m1.lua#L211-L214) |
| 動力彎刀 執法者 Mk IIb近戰攻速接入 | [動力彎刀 執法者 Mk IIb近戰攻速接入](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/power_swords/powersword_p2_m2.lua#L209-L212) |

## 執行與計算

- 三實作的trait override皆為`active_duration=6`、`cooldown_duration=0`、`proc_stat_buffs.melee_attack_speed=0.06/0.08/0.10/0.12`，取代wrapper的預設持續、冷卻與1.5攻速；[Proc覆寫讀取](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/buff/buffs/proc_buff.lua#L98-L104)、[冷卻覆寫](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/buff/buffs/proc_buff.lua#L187-L195)、[proc_stat_buffs覆寫](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/buff/buffs/proc_buff.lua#L288-L300)。

- 三wrapper皆監聽`on_block=1`，只用`is_item_slot_wielded`限制；未加完美格擋、近戰攻擊類型或`block_broken=false`判斷。[一般與完美格擋分開派送](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/weapon/player_unit_weapon_extension.lua#L939-L962)。

- 成功proc直接把`_active_start_time`寫成當下`t`；`allow_proc_while_active=true`、冷卻0允許刷新，單一ProcBuff沒有子疊層。[刷新](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/buff/buffs/proc_buff.lua#L304-L355)、[可再觸發](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/buff/buffs/proc_buff.lua#L150-L195)。

- 攻速只在`_is_proc_active`且持用條件符合時加入；條件不符沒有改寫起始時間。trait掛在`on_equip`，切出只移除`on_wield` buff，因此切出暫停數值但不清除或凍結期限。[攻速開關](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/buff/buffs/proc_buff.lua#L247-L300)、[裝備生命週期](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/weapon/utilities/weapon_tweak_templates.lua#L168-L211)、[切出生命週期](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/weapon/player_unit_weapon_extension.lua#L743-L785)。

- 格擋破防仍呼叫`player_blocked_attack`再發`on_block`。盾牌的兩型號正常格擋均允許`attack_types.ranged`，且此祝福不篩attack_type。[破防與事件](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/attack/block.lua#L206-L249)、[盾牌M1](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/power_maul_shields/powermaul_shield_p1_m1.lua#L1032-L1035)、[盾牌M2](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/power_maul_shields/powermaul_shield_p1_m2.lua#L1241-L1244)。

- `melee_attack_speed`為additive_multiplier，Buff依目前值加上覆寫值；動作`time_scale_stat_buffs`把一般與近戰攻速的預設1重複項扣回。動作開始時算倍率並保存，動作總長除以倍率，之後依原本end_t完成。[加算](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/buff/buffs/buff.lua#L689-L733)、[動作起始](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/action/action_handler.lua#L301-L329)、[總長](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/action/action_handler.lua#L356-L365)、[合併與限幅](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/action/action_handler.lua#L402-L429)、[依end_t更新](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/action/action_handler.lua#L169-L183)。

- 設基礎動作時間為`T₀`、其他同階段加算攻速總和為`s`、反擊等級增益為`p`；在其他倍率固定且未觸及限幅時，生效前倍率為`1+s`，生效後為`1+s+p`。

- 動作時間：`T=T₀÷(1+s+p)`；相對速度收益：`p÷(1+s)`；相對時間縮短：`p÷(1+s+p)`。

- `T₀=1秒,s=0,p=0.12`得到`T≈0.892857秒`；時間縮短`0.12÷1.12≈10.7143%`。

- `T₀=1秒,s=0.20,p=0.12`得到生效前`0.833333秒`、生效後`0.757576秒`；相對速度增加10%，相對時間縮短約9.0909%。

- 攻速加成沒有直接更改单次攻擊傷害。以上為動作時間假設，未把走位、格擋、連段空檔或速度限幅忽略後再當作實戰DPS。

## 圖示

- item.icon：`content/ui/textures/icons/traits/weapon_trait_243`。

- [原圖](https://gameslantern.com/storage/sites/darktide/exporter/content/ui/textures/icons/traits/weapon_trait_243.png)｜[Issue附件](https://github.com/user-attachments/assets/b67a8546-2e99-4ab7-aaf5-5af04f9ea255)；圖示只作辨識。


## 其他武器變體

| 用途 | 固定原始碼 |
|---|---|
| 法務官電擊鎚和鎮壓護盾等級覆寫 | [法務官電擊鎚和鎮壓護盾等級覆寫](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_traits/weapon_traits_bespoke_powermaul_shield_p1.lua#L487-L544) |
| 法務官電擊鎚和鎮壓護盾Buff接入 | [法務官電擊鎚和鎮壓護盾Buff接入](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/weapon_traits_buff_templates/weapon_traits_bespoke_powermaul_shield_p1_buff_templates.lua#L192-L205) |
| UI 法務官電擊鎚和鎮壓護盾 | [UI 法務官電擊鎚和鎮壓護盾](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ui/ui_weapon_pattern_settings.lua#L480) |
| 法務官電擊鎚和鎮壓護盾匯入 | [法務官電擊鎚和鎮壓護盾匯入](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/power_maul_shields/powermaul_shield_p1_m1.lua#L16) |
| 法務官電擊鎚和鎮壓護盾接入 | [法務官電擊鎚和鎮壓護盾接入](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/power_maul_shields/powermaul_shield_p1_m1.lua#L1610-L1612) |
| 法務官電擊鎚和鎮壓護盾匯入 | [法務官電擊鎚和鎮壓護盾匯入](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/power_maul_shields/powermaul_shield_p1_m2.lua#L16) |
| 法務官電擊鎚和鎮壓護盾接入 | [法務官電擊鎚和鎮壓護盾接入](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/power_maul_shields/powermaul_shield_p1_m2.lua#L1828-L1830) |
| 上古神刃等級覆寫 | [上古神刃等級覆寫](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_traits/weapon_traits_bespoke_powersword_2h_p1.lua#L576-L633) |
| 上古神刃Buff接入 | [上古神刃Buff接入](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/weapon_traits_buff_templates/weapon_traits_bespoke_powersword_2h_p1_buff_templates.lua#L383-L396) |
| UI 上古神刃 | [UI 上古神刃](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ui/ui_weapon_pattern_settings.lua#L498) |
| 上古神刃 軍務部 Mk X匯入 | [上古神刃 軍務部 Mk X匯入](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/power_swords_2h/powersword_2h_p1_m1.lua#L15) |
| 上古神刃 軍務部 Mk X接入 | [上古神刃 軍務部 Mk X接入](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/power_swords_2h/powersword_2h_p1_m1.lua#L2302-L2304) |
| 上古神刃 軍務部 Mk II匯入 | [上古神刃 軍務部 Mk II匯入](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/power_swords_2h/powersword_2h_p1_m2.lua#L14) |
| 上古神刃 軍務部 Mk II接入 | [上古神刃 軍務部 Mk II接入](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/power_swords_2h/powersword_2h_p1_m2.lua#L2455-L2457) |
| 動力彎刀等級覆寫 | [動力彎刀等級覆寫](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_traits/weapon_traits_bespoke_powersword_p2.lua#L450-L507) |
| 動力彎刀Buff接入 | [動力彎刀Buff接入](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/weapon_traits_buff_templates/weapon_traits_bespoke_powersword_p2_buff_templates.lua#L268-L281) |
| UI 動力彎刀 | [UI 動力彎刀](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ui/ui_weapon_pattern_settings.lua#L534) |
| 動力彎刀 阿里丁 Mk I匯入 | [動力彎刀 阿里丁 Mk I匯入](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/power_swords/powersword_p2_m1.lua#L11) |
| 動力彎刀 阿里丁 Mk I接入 | [動力彎刀 阿里丁 Mk I接入](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/power_swords/powersword_p2_m1.lua#L1741-L1743) |
| 動力彎刀 執法者 Mk IIb匯入 | [動力彎刀 執法者 Mk IIb匯入](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/power_swords/powersword_p2_m2.lua#L11) |
| 動力彎刀 執法者 Mk IIb接入 | [動力彎刀 執法者 Mk IIb接入](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/power_swords/powersword_p2_m2.lua#L2023-L2025) |


## 實際UI型號名稱

- `Items.display_name`對武器依序組合family、pattern、mark；沒有使用舊`item.display_name`當完整型號名。[UI組名](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/items.lua#L315-L327)、[實際欄位讀取](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/items.lua#L378-L426)。

| 型號ID | 名稱鍵（family、pattern、mark） | UI繁中名稱 | UI英文名稱 |
|---|---|---|---|
| `powermaul_shield_p1_m1` | `loc_weapon_family_powermaul_shield_p1_m1`、`loc_weapon_pattern_powermaul_shield_p1_m1`、`loc_weapon_mark_powermaul_shield_p1_m1` | 法務官電擊鎚和鎮壓護盾 布蘭克斯 Mk VI | Shock Maul and Suppression Shield Branx Mk VI |
| `powermaul_shield_p1_m2` | `loc_weapon_family_powermaul_shield_p1_m2`、`loc_weapon_pattern_powermaul_shield_p1_m1`、`loc_weapon_mark_powermaul_shield_p1_m2` | 法務官電擊鎚和鎮壓護盾 布蘭克斯 Mk XI | Shock Maul and Suppression Shield Branx Mk XI |
| `powersword_2h_p1_m1` | `loc_weapon_family_powersword_2h_p1_m1`、`loc_weapon_pattern_powersword_2h_p1_m1`、`loc_weapon_mark_powersword_2h_p1_m1` | 上古神刃 軍務部 Mk X | Relic Blade Munitorum Mk X |
| `powersword_2h_p1_m2` | `loc_weapon_family_powersword_2h_p1_m2`、`loc_weapon_pattern_powersword_2h_p1_m2`、`loc_weapon_mark_powersword_2h_p1_m2` | 上古神刃 軍務部 Mk II | Relic Blade Munitorum Mk II |
| `powersword_p2_m1` | `loc_weapon_family_powersword_p2_m1`、`loc_weapon_pattern_powersword_p2_m1`、`loc_weapon_mark_powersword_p2_m1` | 動力彎刀 阿里丁 Mk I | Power Falchion Aridin Mk I |
| `powersword_p2_m2` | `loc_weapon_family_powersword_p2_m2`、`loc_weapon_pattern_powersword_p2_m2`、`loc_weapon_mark_powersword_p2_m2` | 動力彎刀 執法者 Mk IIb | Power Falchion Lawbringer Mk IIb |
