# 掃射：來源與公式

[玩家說明](README.md)｜[來源索引](SOURCE_INDEX.md)｜[武器對應](WEAPON_COMPATIBILITY.md)｜[等級](TIER_VALUES.md)｜[原文比較](LOCALIZATION_COMPARISON.md)｜[百分比檢核](DAMAGE_PERCENTAGE_REVIEW.md)

- Release1.13.1，固定SHA `7e662fcda16219d775b84af50322be2e9cd9d62e`；機制只依公開Darktide-Source-Code。
- [共用來源邊界](../../SOURCE_INDEX.md)記錄MasterItems快取、完整語系RAW及後端欄位狀態。

| 用途 | 固定原始碼 |
|---|---|
| 共用持用背擊效果 | [共用持用背擊效果](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/weapon_traits_buff_templates/base_weapon_trait_buff_templates.lua#L1529-L1540) |
| 持用判定 | [持用判定](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/helper_functions/conditional_functions.lua#L43-L59) |
| 關鍵字共用持用條件 | [關鍵字共用持用條件](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/buff/buffs/buff.lua#L135-L142) |
| 條件關鍵字套用 | [條件關鍵字套用](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/buff/buffs/buff.lua#L808-L841) |
| 條件數值與trait覆寫 | [條件數值與trait覆寫](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/buff/buffs/buff.lua#L689-L747) |
| 加算型別 | [加算型別](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/buff_settings.lua#L815-L821) |
| 加算初始值 | [加算初始值](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/buff_settings.lua#L1048-L1058) |
| 遠程背面判定 | [遠程背面判定](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/attack/attack_positioning.lua#L9-L65) |
| 有效背面判定傳入結算 | [有效背面判定傳入結算](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/attack/attack.lua#L227-L233) |
| 傷害消費有效判定 | [傷害消費有效判定](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/attack/attack.lua#L350-L354) |
| 先精準後背面加成 | [先精準後背面加成](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/attack/damage_calculation.lua#L89-L109) |
| 背面傷害增量 | [背面傷害增量](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/attack/damage_calculation.lua#L857-L861) |
| 實際UI型號組名 | [實際UI型號組名](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/items.lua#L315-L327) |
| UI名稱欄位讀取 | [UI名稱欄位讀取](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/items.lua#L378-L426) |

## 執行與計算

- 四個實作均clone共用allow_flanking_and_increased_damage_when_flanking；conditional_keywords含allow_flanking，conditional_stat_buffs預設flanking_damage0.5被各trait stat_buffs覆寫為0.325/0.35/0.375/0.4。[共用持用背擊效果](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/weapon_traits_buff_templates/base_weapon_trait_buff_templates.lua#L1529-L1540)、[條件數值與trait覆寫](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/buff/buffs/buff.lua#L689-L747)。

- conditional_keywords_func在未指定時沿用conditional_stat_buffs_func，故關鍵字與數值同受is_item_slot_wielded控制；切出不提供keyword或flanking_damage。[持用判定](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/helper_functions/conditional_functions.lua#L43-L59)、[關鍵字共用持用條件](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/buff/buffs/buff.lua#L135-L142)、[條件關鍵字套用](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/buff/buffs/buff.lua#L808-L841)。

- is_flanking只接受attack_types.ranged；target forward投影到水平面並normalize，攻擊方向dot target forward嚴格大於0才是背面半圈；dot=0不含在內。再要求攻擊者擁有allow_flanking才返回effective_flanking，Attack把effective值交給DamageCalculation。[遠程背面判定](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/attack/attack_positioning.lua#L9-L65)、[有效背面判定傳入結算](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/attack/attack.lua#L227-L233)、[傷害消費有效判定](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/attack/attack.lua#L350-L354)。

- flanking_damage為additive_multiplier，基底1，trait數值加到現有倍率。DamageCalculation先加入finesse_boost_damage，再用該damage求flank增量，之後才做hit-zone、DoT與後續倍率。[加算型別](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/buff_settings.lua#L815-L821)、[加算初始值](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/buff_settings.lua#L1048-L1058)、[先精準後背面加成](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/attack/damage_calculation.lua#L89-L109)、[背面傷害增量](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/attack/damage_calculation.lua#L857-L861)。

- 共用template class_name=buff，沒有proc_events、duration、cooldown或擊殺條件；持用加成與方向判定不需要hit-combo或疊層。[共用持用背擊效果](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/weapon_traits_buff_templates/base_weapon_trait_buff_templates.lua#L1529-L1540)。

- 設D為加入finesse_boost_damage後、背面增量前的傷害，q為本祝福0.325/0.35/0.375/0.4，s為其他同類flanking_damage加成。符合effective_flanking時flank multiplier=1+s+q，增量D×(s+q)；不符合則增量0。

- 在背面加成結算階段，無其他同類加成時I–IV倍率為1.325/1.35/1.375/1.4；後續hit-zone、DoT、armor、DR與生命／韌性結算另依各自流程。D=100、IV為140；D=150已含弱點增量時為210。

- 已有s=0.20時，D=100由120變160，相對原有提升40÷120≈33.333%；不是120×1.4=168。[條件數值與trait覆寫](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/buff/buffs/buff.lua#L689-L747)、[背面傷害增量](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/attack/damage_calculation.lua#L857-L861)。

- 角度以攻擊入射方向相對target forward作比較；dot>0等價水平後半圈，純水平正側面dot=0不生效。沒有距離、命中次數、暴擊或弱點門檻。[遠程背面判定](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/attack/attack_positioning.lua#L9-L65)。

## 圖示

- item.icon：`content/ui/textures/icons/traits/weapon_trait_041`。

- [原圖](https://gameslantern.com/storage/sites/darktide/exporter/content/ui/textures/icons/traits/weapon_trait_041.png)｜[Issue附件](https://github.com/user-attachments/assets/8ad696a1-e0d1-4a5b-a352-4597b5c71b90)；圖示只作辨識。

## 武器變體來源

| 用途 | 固定原始碼 |
|---|---|
| 撕裂者自動手槍等級覆寫 | [撕裂者自動手槍等級覆寫](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_traits/weapon_traits_bespoke_autopistol_p1.lua#L261-L300) |
| 撕裂者自動手槍Buff接入 | [撕裂者自動手槍Buff接入](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/weapon_traits_buff_templates/weapon_traits_bespoke_autopistol_p1_buff_templates.lua#L32) |
| UI 撕裂者自動手槍 | [UI 撕裂者自動手槍](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ui/ui_weapon_pattern_settings.lua#L717) |
| 撕裂者自動手槍 尤斯 Mk IV匯入 | [撕裂者自動手槍 尤斯 Mk IV匯入](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/autopistols/autopistol_p1_m1.lua#L15) |
| 撕裂者自動手槍 尤斯 Mk IV接入 | [撕裂者自動手槍 尤斯 Mk IV接入](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/autopistols/autopistol_p1_m1.lua#L743-L745) |
| 雙持自動手槍等級覆寫 | [雙持自動手槍等級覆寫](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_traits/weapon_traits_bespoke_dual_autopistols_p1.lua#L261-L300) |
| 雙持自動手槍Buff接入 | [雙持自動手槍Buff接入](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/weapon_traits_buff_templates/weapon_traits_bespoke_dual_autopistols_p1_buff_templates.lua#L32) |
| UI 雙持自動手槍 | [UI 雙持自動手槍](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ui/ui_weapon_pattern_settings.lua#L766) |
| 雙持自動手槍 布蘭克斯 MkIII匯入 | [雙持自動手槍 布蘭克斯 MkIII匯入](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/dual_autopistols/dual_autopistols_p1_m1.lua#L16) |
| 雙持自動手槍 布蘭克斯 MkIII接入 | [雙持自動手槍 布蘭克斯 MkIII接入](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/dual_autopistols/dual_autopistols_p1_m1.lua#L749-L751) |
| 重型鐳射手槍等級覆寫 | [重型鐳射手槍等級覆寫](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_traits/weapon_traits_bespoke_laspistol_p1.lua#L190-L229) |
| 重型鐳射手槍Buff接入 | [重型鐳射手槍Buff接入](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/weapon_traits_buff_templates/weapon_traits_bespoke_laspistol_p1_buff_templates.lua#L13) |
| UI 重型鐳射手槍 | [UI 重型鐳射手槍](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ui/ui_weapon_pattern_settings.lua#L938) |
| 重型鐳射手槍 奧克塔蘭MG Mk II匯入 | [重型鐳射手槍 奧克塔蘭MG Mk II匯入](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/laspistols/laspistol_p1_m1.lua#L16) |
| 重型鐳射手槍 奧克塔蘭MG Mk II接入 | [重型鐳射手槍 奧克塔蘭MG Mk II接入](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/laspistols/laspistol_p1_m1.lua#L858-L860) |
| 重型鐳射手槍 卡特雷爾 Mk X匯入 | [重型鐳射手槍 卡特雷爾 Mk X匯入](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/laspistols/laspistol_p1_m3.lua#L16) |
| 重型鐳射手槍 卡特雷爾 Mk X接入 | [重型鐳射手槍 卡特雷爾 Mk X接入](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/laspistols/laspistol_p1_m3.lua#L862-L864) |
| 步兵自動槍等級覆寫 | [步兵自動槍等級覆寫](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_traits/weapon_traits_bespoke_autogun_p1.lua#L506-L545) |
| 步兵自動槍Buff接入 | [步兵自動槍Buff接入](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/weapon_traits_buff_templates/weapon_traits_bespoke_autogun_p1_buff_templates.lua#L44) |
| UI 步兵自動槍 | [UI 步兵自動槍](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ui/ui_weapon_pattern_settings.lua#L648) |
| 步兵自動槍 阿格里皮娜 Mk I匯入 | [步兵自動槍 阿格里皮娜 Mk I匯入](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/autoguns/autogun_p1_m1.lua#L17) |
| 步兵自動槍 阿格里皮娜 Mk I接入 | [步兵自動槍 阿格里皮娜 Mk I接入](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/autoguns/autogun_p1_m1.lua#L768-L770) |
