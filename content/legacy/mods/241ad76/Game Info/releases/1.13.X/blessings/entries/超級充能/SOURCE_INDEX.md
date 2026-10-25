# 超級充能：來源與公式

[玩家說明](README.md)｜[來源索引](SOURCE_INDEX.md)｜[武器對應](WEAPON_COMPATIBILITY.md)｜[等級](TIER_VALUES.md)｜[原文比較](LOCALIZATION_COMPARISON.md)｜[百分比檢核](DAMAGE_PERCENTAGE_REVIEW.md)

- Release1.13.1，固定SHA `7e662fcda16219d775b84af50322be2e9cd9d62e`；機制只依公開Darktide-Source-Code。

- [共用來源邊界](../../SOURCE_INDEX.md)記錄MasterItems快取、完整語系RAW及後端欄位狀態。

| 用途 | 固定原始碼 |
|---|---|
| 共同命中Proc | [共同命中Proc](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/weapon_traits_buff_templates/base_weapon_trait_buff_templates.lua#L564-L579) |
| 充能命中條件 | [充能命中條件](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/weapon_traits_buff_templates/base_weapon_trait_buff_templates.lua#L1191-L1192) |
| 同武器物品檢查 | [同武器物品檢查](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/helper_functions/check_proc_functions.lua#L721-L726) |
| 特殊攻擊旗標檢查 | [特殊攻擊旗標檢查](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/helper_functions/check_proc_functions.lua#L610-L611) |
| 持用條件 | [持用條件](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/helper_functions/conditional_functions.lua#L43-L59) |
| 實際目標脆弱Buff | [實際目標脆弱Buff](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/weapon_buff_templates.lua#L366-L376) |
| 覆寫與施加 | [覆寫與施加](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/buff_utils.lua#L37-L90) |
| 共享堆疊刷新 | [共享堆疊刷新](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/buff/buff_extension_base.lua#L412-L457) |
| 滿層刷新 | [滿層刷新](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/buff/buff_extension_base.lua#L560-L589) |
| 目標Buff到期 | [目標Buff到期](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/buff/buffs/buff.lua#L29-L43) |
| 傷害先於命中事件 | [傷害先於命中事件](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/attack/attack.lua#L353-L383) |
| 命中事件欄位 | [命中事件欄位](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/attack/attack.lua#L581-L620) |
| proc處理條件 | [proc處理條件](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/buff/buffs/proc_buff.lua#L307-L338) |
| 充能profile選取 | [充能profile選取](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/weapon/actions/action_sweep.lua#L1379-L1404) |
| 動力錘充能旗標 | [動力錘充能旗標](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/ogryn_power_mauls/settings_templates/ogryn_power_maul_damage_profile_templates.lua#L325-L348) |
| 動力錘爆炸來源 | [動力錘爆炸來源](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/weapon/special_classes/weapon_special_explode_on_impact.lua#L79-L86) |
| 動力錘爆炸profile | [動力錘爆炸profile](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/ogryn_power_mauls/settings_templates/ogryn_power_maul_damage_profile_templates.lua#L2250-L2382) |
| 目標脆弱結算 | [目標脆弱結算](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/attack/damage_calculation.lua#L629-L660) |
| 裝甲分段公式 | [裝甲分段公式](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/attack/damage_calculation.lua#L65-L109) |
| 分類係數 | [分類係數](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/damage/armor_settings.lua#L8-L24) |
| 實際UI型號組名 | [實際UI型號組名](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/items.lua#L315-L327) |
| UI名稱欄位讀取 | [UI名稱欄位讀取](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/items.lua#L378-L426) |
| 動力劍充能旗標 | [動力劍充能旗標](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/power_swords/settings_templates/power_sword_damage_profile_templates.lua#L238-L242) |
| 機械神教動力劍充能旗標 | [機械神教動力劍充能旗標](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/power_swords/settings_templates/power_sword_damage_profile_templates.lua#L3062-L3067) |

## 執行與計算

- 三個實際Buff wrapper clone同一special base，I–IV target_buff_data.num_stacks_on_proc分別為動力錘10/12/14/16、兩動力劍1/2/3/4。[特殊命中base](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/weapon_traits_buff_templates/base_weapon_trait_buff_templates.lua#L1191-L1192)。

- 父ProcBuff聽on_hit、機率1、持用gate；special clone把check覆成on_item_match AND params.weapon_special，沒有暴擊、弱點、第一目標或attack_type額外gate。[共同父Buff](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/weapon_traits_buff_templates/base_weapon_trait_buff_templates.lua#L564-L579)、[特殊旗標](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/helper_functions/check_proc_functions.lua#L610-L611)、[同item](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/helper_functions/check_proc_functions.lua#L721-L726)。

- Attack以實際damage_profile.weapon_special填入on_hit，並攜帶attacking_item；傷害先完成才產生命中事件。事件排隊後於Buff更新處理，持用條件及target alive看proc處理當下；沒有damage>0的獨立檢查。[on_hit參數](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/attack/attack.lua#L581-L620)、[proc gates](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/buff/buffs/proc_buff.lua#L307-L338)。

- BuffUtils從trait_override讀N；目標仍存活且有buff extension才施加，父max_stacks31只是工具端上限。實際目標rending_debuff cap16、每層.025、duration5、加層refresh；同template_name共用同一stacking buff，各玩家與武器不另建獨立16層。[讀覆寫及施加](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/buff_utils.lua#L37-L90)、[目標Buff](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/weapon_buff_templates.lua#L366-L376)、[共享與刷新](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/buff/buff_extension_base.lua#L434-L457)。

- 滿cap新增不再增加層數但刷新start_time；五秒後t>start+duration結束整個buff；已施加目標buff沒有原持用slot條件。[滿層刷新](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/buff/buff_extension_base.lua#L560-L589)、[到期](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/buff/buffs/buff.lua#L29-L43)。

- ActionSweep充能時選special damage profile；動力錘active覆寫weapon_special=true，充能直接近戰符合。ExplodeOnImpact另用attack_types.explosion，爆炸的兩damage profiles不帶weapon_special旗標，因此周圍爆炸不新增Supercharge脆弱。[special profile選取](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/weapon/actions/action_sweep.lua#L1379-L1404)。

- target_stat_buffs.rending_multiplier直接進入共用撕裂公式，沒有限制施加者、武器或近戰；本祝福目標脆弱最高.4，合併其他合格來源後總R最高1，裝甲分類係數與溢出效率再結算。[target consumer](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/attack/damage_calculation.lua#L629-L660)。

- 令每次合格事件加層q，現有層數n；新n=min(n+q,16)，目標脆弱B=.025n。單次q不等於百分比；N=4代表10%脆弱，N=16代表40%。

- 同template_name共用目前層數；合格事件刷新start_time，滿16也刷新。倒數以proc處理時間t為起點；若t>start+5到期則整組結束，沒有逐層各自五秒期限。

- 其他合格撕裂/脆弱為R₀，總R=min(R₀+B,1)。取armor係數k（armored/super_armor/resistant/berserker為1、其他0）、x=kR，溢出係數o（四類.25、其他0）。

- 裝甲前傷害D、原裝甲倍率A：A≥1時F=A+xo；A<1且x>1−A時F=1+(x−(1−A))o；其他F=A+x。此階段傷害DF，增量D(F−A)，後續finesse、hitzone、減傷另算。

- D100、A.1、k1/o.25：B.1→20（原10，相對+100%）；B.4→50（相對+400%）；A.9、B.4→107.5；A1、B.4→110。k0時F=A不受這筆脆弱影響。

## 圖示

- item.icon：`content/ui/textures/icons/traits/weapon_trait_202`。

- [原圖](https://gameslantern.com/storage/sites/darktide/exporter/content/ui/textures/icons/traits/weapon_trait_202.png)｜[Issue附件](https://github.com/user-attachments/assets/73b6c65e-a09c-4c98-9002-22e0c8cfd0c1)；圖示只作辨識。

## 武器變體來源

| 用途 | 固定原始碼 |
|---|---|
| 動力錘等級覆寫 | [動力錘等級覆寫](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_traits/weapon_traits_bespoke_ogryn_powermaul_p1.lua#L202-L272) |
| 動力錘Buff接入 | [動力錘Buff接入](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/weapon_traits_buff_templates/weapon_traits_bespoke_ogryn_powermaul_p1_buff_templates.lua#L12) |
| UI 動力錘 | [UI 動力錘](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ui/ui_weapon_pattern_settings.lua#L374) |
| 動力錘 阿克利斯 Mk I匯入 | [動力錘 阿克利斯 Mk I匯入](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/ogryn_power_mauls/ogryn_powermaul_p1_m1.lua#L16) |
| 動力錘 阿克利斯 Mk I接入 | [動力錘 阿克利斯 Mk I接入](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/ogryn_power_mauls/ogryn_powermaul_p1_m1.lua#L2344-L2346) |
| 動力劍等級覆寫 | [動力劍等級覆寫](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_traits/weapon_traits_bespoke_powersword_p1.lua#L225-L295) |
| 動力劍Buff接入 | [動力劍Buff接入](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/weapon_traits_buff_templates/weapon_traits_bespoke_powersword_p1_buff_templates.lua#L16) |
| UI 動力劍 | [UI 動力劍](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ui/ui_weapon_pattern_settings.lua#L516) |
| 動力劍 斯干達 Mk III匯入 | [動力劍 斯干達 Mk III匯入](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/power_swords/powersword_p1_m1.lua#L12) |
| 動力劍 斯干達 Mk III接入 | [動力劍 斯干達 Mk III接入](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/power_swords/powersword_p1_m1.lua#L1266-L1268) |
| 動力劍 阿克利斯 Mk VI匯入 | [動力劍 阿克利斯 Mk VI匯入](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/power_swords/powersword_p1_m2.lua#L12) |
| 動力劍 阿克利斯 Mk VI接入 | [動力劍 阿克利斯 Mk VI接入](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/power_swords/powersword_p1_m2.lua#L1624-L1626) |
| 機械神教動力劍等級覆寫 | [機械神教動力劍等級覆寫](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_traits/weapon_traits_bespoke_powersword_p3.lua#L10-L80) |
| 機械神教動力劍Buff接入 | [機械神教動力劍Buff接入](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/weapon_traits_buff_templates/weapon_traits_bespoke_powersword_p3_buff_templates.lua#L13) |
| UI 機械神教動力劍 | [UI 機械神教動力劍](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ui/ui_weapon_pattern_settings.lua#L552) |
| 機械神教動力劍 布蘭克斯 Mk VI匯入 | [機械神教動力劍 布蘭克斯 Mk VI匯入](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/power_swords/powersword_p3_m1.lua#L15) |
| 機械神教動力劍 布蘭克斯 Mk VI接入 | [機械神教動力劍 布蘭克斯 Mk VI接入](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/power_swords/powersword_p3_m1.lua#L3372-L3374) |
