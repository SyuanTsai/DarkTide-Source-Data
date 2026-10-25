# 機會主義者：來源與公式

[玩家說明](README.md)｜[來源索引](SOURCE_INDEX.md)｜[武器對應](WEAPON_COMPATIBILITY.md)｜[等級](TIER_VALUES.md)｜[原文比較](LOCALIZATION_COMPARISON.md)｜[百分比檢核](DAMAGE_PERCENTAGE_REVIEW.md)

- Release1.13.1，固定SHA `7e662fcda16219d775b84af50322be2e9cd9d62e`；機制只依公開Darktide-Source-Code。

- [共用來源邊界](../../SOURCE_INDEX.md)記錄MasterItems快取、完整語系RAW及後端欄位狀態。

| 用途 | 固定原始碼 |
|---|---|
| 持用條件近戰撕裂Buff | [持用條件近戰撕裂Buff](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/weapon_traits_buff_templates/base_weapon_trait_buff_templates.lua#L999-L1008) |
| 持用條件 | [持用條件](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/helper_functions/conditional_functions.lua#L43-L59) |
| 傷害結算前讀踉蹌 | [傷害結算前讀踉蹌](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/attack/attack.lua#L296-L308) |
| 先傷害後新踉蹌 | [先傷害後新踉蹌](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/attack/attack.lua#L353-L379) |
| 踉蹌與視為踉蹌 | [踉蹌與視為踉蹌](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/attack/damage_calculation.lua#L60-L64) |
| 近戰撕裂加算與封頂 | [近戰撕裂加算與封頂](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/attack/damage_calculation.lua#L629-L660) |
| 撕裂與裝甲係數 | [撕裂與裝甲係數](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/attack/damage_calculation.lua#L65-L109) |
| 四種傷害分類撕裂係數 | [四種傷害分類撕裂係數](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/damage/armor_settings.lua#L8-L24) |
| 撕裂stat為加算 | [撕裂stat為加算](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/buff_settings.lua#L875-L883) |
| 加算初值 | [加算初值](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/buff_settings.lua#L1048-L1058) |
| 普通揮擊近戰分類 | [普通揮擊近戰分類](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/weapon/actions/action_sweep.lua#L1498-L1501) |
| 實際UI型號組名 | [實際UI型號組名](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/items.lua#L315-L327) |
| UI名稱欄位讀取 | [UI名稱欄位讀取](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/items.lua#L378-L426) |

## 執行與計算

- 所有9個trait明確覆寫conditional_stat_buffs.melee_rending_vs_staggered_multiplier為.1/.15/.2/.25；實際Buff wrappers全clone base rending_vs_staggered，沒有單武器gate覆寫。base為buff class、max_stacks1、hide_icon，conditional stat gate僅本slot持用；不使用proc_events/active_duration/cooldown。[持用條件近戰撕裂Buff](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/weapon_traits_buff_templates/base_weapon_trait_buff_templates.lua#L999-L1008)、[持用條件](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/helper_functions/conditional_functions.lua#L43-L59)。

- Attack先讀stagger component.num_triggered_staggers，DamageCalculation採num_triggered_staggers>0 OR count_as_staggered keyword；Damage結算完成後才HitReaction.apply當擊新踉蹌，所以不能回溯本擊。不是依擊中後on_hit params.stagger_result決定。[傷害結算前讀踉蹌](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/attack/attack.lua#L296-L308)、[踉蹌與視為踉蹌](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/attack/damage_calculation.lua#L60-L64)、[先傷害後新踉蹌](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/attack/attack.lua#L353-L379)。

- consumer只有attack_type==melee AND is_target_staggered才取此欄位，沒有target_index、first hit、crit、weakspot、killer或item_match條件。stat是additive_multiplier、初值1，tier.25變成1.25；共同rending公式加17個stat後扣17個基準1，並math.min(total,1)。[近戰撕裂加算與封頂](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/attack/damage_calculation.lua#L629-L660)、[撕裂stat為加算](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/buff_settings.lua#L875-L883)、[加算初值](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/buff_settings.lua#L1048-L1058)。

- rending total封頂後再乘armor-specific係數；armored/super_armor/resistant/berserker為1，四類overdamage係數.25，其他type預設0。不是任意敵人都多25%傷害。傷害profile原armor modifier與rending分段計算，後續finesse/hitzone/DoT/armor buffs/diminishing另結算，算例只對這階段。[四種傷害分類撕裂係數](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/damage/armor_settings.lua#L8-L24)、[撕裂與裝甲係數](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/attack/damage_calculation.lua#L65-L109)。

- 設合格攻擊本祝福r=.10/.15/.20/.25，其他符合條件撕裂／脆弱總和R₀；總R=min(R₀+r,1)。不合格時r=0。取armor係數k（四類1、其他0），x=kR；overdamage係數o（四類.25、其他0）。

- 設裝甲前傷害D、原裝甲倍率A；A≥1時F=A+xo；A<1且x>1−A時F=1+(x−(1−A))o；其餘F=A+x。這階段結果DF，撕裂增加量D(F−A)。

- D100、IV r.25、k1/o.25：A.1→F.35→35（基準10，相對+250%）；A.9→F1.0375→103.75；A1→F1.0625→106.25；k0則F=A不變。

- 另有R₀.2，IV總R.45、A.1→F.55→55；另有R₀.9，總只採R1，A.1→F1.025→102.5。不是R₀×r或固定D×1.25。

- 後續弱點／暴擊、部位倍率與敵人減傷仍影響實際HP扣除；算例未當作整個傷害流程或遊戲實測。

## 圖示

- item.icon：`content/ui/textures/icons/traits/weapon_trait_201`。

- [原圖](https://gameslantern.com/storage/sites/darktide/exporter/content/ui/textures/icons/traits/weapon_trait_201.png)｜[Issue附件](https://github.com/user-attachments/assets/e292ed7d-8b36-4da5-9f39-528bed983004)；圖示只作辨識。

## 武器變體來源

| 用途 | 固定原始碼 |
|---|---|
| 突擊鏈斧等級覆寫 | [突擊鏈斧等級覆寫](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_traits/weapon_traits_bespoke_chainaxe_p1.lua#L386-L427) |
| 突擊鏈斧Buff接入 | [突擊鏈斧Buff接入](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/weapon_traits_buff_templates/weapon_traits_bespoke_chainaxe_p1_buff_templates.lua#L23-L25) |
| UI 突擊鏈斧 | [UI 突擊鏈斧](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ui/ui_weapon_pattern_settings.lua#L4) |
| 突擊鏈斧 奧瑞斯特斯 Mk IV匯入 | [突擊鏈斧 奧瑞斯特斯 Mk IV匯入](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/chain_axes/chainaxe_p1_m1.lua#L15) |
| 突擊鏈斧 奧瑞斯特斯 Mk IV接入 | [突擊鏈斧 奧瑞斯特斯 Mk IV接入](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/chain_axes/chainaxe_p1_m1.lua#L2074-L2076) |
| 突擊鏈斧 奧瑞斯特斯 Mk XII匯入 | [突擊鏈斧 奧瑞斯特斯 Mk XII匯入](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/chain_axes/chainaxe_p1_m2.lua#L14) |
| 突擊鏈斧 奧瑞斯特斯 Mk XII接入 | [突擊鏈斧 奧瑞斯特斯 Mk XII接入](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/chain_axes/chainaxe_p1_m2.lua#L1282-L1284) |
| 重型開膛劍等級覆寫 | [重型開膛劍等級覆寫](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_traits/weapon_traits_bespoke_chainsword_2h_p1.lua#L467-L508) |
| 重型開膛劍Buff接入 | [重型開膛劍Buff接入](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/weapon_traits_buff_templates/weapon_traits_bespoke_chainsword_2h_p1_buff_templates.lua#L23-L25) |
| UI 重型開膛劍 | [UI 重型開膛劍](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ui/ui_weapon_pattern_settings.lua#L22) |
| 重型開膛劍 泰格魯斯 Mk III匯入 | [重型開膛劍 泰格魯斯 Mk III匯入](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/chain_swords_2h/chainsword_2h_p1_m1.lua#L16) |
| 重型開膛劍 泰格魯斯 Mk III接入 | [重型開膛劍 泰格魯斯 Mk III接入](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/chain_swords_2h/chainsword_2h_p1_m1.lua#L1537-L1539) |
| 重型開膛劍 泰格魯斯 Mk XV匯入 | [重型開膛劍 泰格魯斯 Mk XV匯入](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/chain_swords_2h/chainsword_2h_p1_m2.lua#L15) |
| 重型開膛劍 泰格魯斯 Mk XV接入 | [重型開膛劍 泰格魯斯 Mk XV接入](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/chain_swords_2h/chainsword_2h_p1_m2.lua#L1538-L1540) |
| 撬棍等級覆寫 | [撬棍等級覆寫](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_traits/weapon_traits_bespoke_crowbar_p1.lua#L405-L444) |
| 撬棍Buff接入 | [撬棍Buff接入](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/weapon_traits_buff_templates/weapon_traits_bespoke_crowbar_p1_buff_templates.lua#L42) |
| UI 撬棍 | [UI 撬棍](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ui/ui_weapon_pattern_settings.lua#L214) |
| 撬棍 科技教士 型號6匯入 | [撬棍 科技教士 型號6匯入](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/crowbars/crowbar_p1_m1.lua#L14) |
| 撬棍 科技教士 型號6接入 | [撬棍 科技教士 型號6接入](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/crowbars/crowbar_p1_m1.lua#L2187-L2189) |
| 廁所鏟等級覆寫 | [廁所鏟等級覆寫](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_traits/weapon_traits_bespoke_ogryn_club_p1.lua#L302-L341) |
| 廁所鏟Buff接入 | [廁所鏟Buff接入](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/weapon_traits_buff_templates/weapon_traits_bespoke_ogryn_club_p1_buff_templates.lua#L16) |
| UI 廁所鏟 | [UI 廁所鏟](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ui/ui_weapon_pattern_settings.lua#L286) |
| 廁所鏟 兇殘 Mk III匯入 | [廁所鏟 兇殘 Mk III匯入](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/ogryn_clubs/ogryn_club_p1_m1.lua#L16) |
| 廁所鏟 兇殘 Mk III接入 | [廁所鏟 兇殘 Mk III接入](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/ogryn_clubs/ogryn_club_p1_m1.lua#L1395-L1397) |
| 廁所鏟 兇殘 Mk XIX匯入 | [廁所鏟 兇殘 Mk XIX匯入](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/ogryn_clubs/ogryn_club_p1_m2.lua#L17) |
| 廁所鏟 兇殘 Mk XIX接入 | [廁所鏟 兇殘 Mk XIX接入](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/ogryn_clubs/ogryn_club_p1_m2.lua#L1668-L1670) |
| 廁所鏟 兇殘 Mk V匯入 | [廁所鏟 兇殘 Mk V匯入](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/ogryn_clubs/ogryn_club_p1_m3.lua#L17) |
| 廁所鏟 兇殘 Mk V接入 | [廁所鏟 兇殘 Mk V接入](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/ogryn_clubs/ogryn_club_p1_m3.lua#L1657-L1659) |
| 動力錘等級覆寫 | [動力錘等級覆寫](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_traits/weapon_traits_bespoke_ogryn_powermaul_p1.lua#L313-L352) |
| 動力錘Buff接入 | [動力錘Buff接入](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/weapon_traits_buff_templates/weapon_traits_bespoke_ogryn_powermaul_p1_buff_templates.lua#L14) |
| UI 動力錘 | [UI 動力錘](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ui/ui_weapon_pattern_settings.lua#L374) |
| 動力錘 阿克利斯 Mk I匯入 | [動力錘 阿克利斯 Mk I匯入](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/ogryn_power_mauls/ogryn_powermaul_p1_m1.lua#L16) |
| 動力錘 阿克利斯 Mk I接入 | [動力錘 阿克利斯 Mk I接入](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/ogryn_power_mauls/ogryn_powermaul_p1_m1.lua#L2344-L2346) |
| 作戰大錘&板盾等級覆寫 | [作戰大錘&板盾等級覆寫](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_traits/weapon_traits_bespoke_ogryn_powermaul_slabshield_p1.lua#L242-L281) |
| 作戰大錘&板盾Buff接入 | [作戰大錘&板盾Buff接入](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/weapon_traits_buff_templates/weapon_traits_bespoke_ogryn_powermaul_slabshield_p1_buff_templates.lua#L151-L153) |
| UI 作戰大錘&板盾 | [UI 作戰大錘&板盾](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ui/ui_weapon_pattern_settings.lua#L387) |
| 作戰大錘&板盾 歐洛克斯 Mk II & Mk III匯入 | [作戰大錘&板盾 歐洛克斯 Mk II & Mk III匯入](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/ogryn_powermaul_slabshield/ogryn_powermaul_slabshield_p1_m1.lua#L17) |
| 作戰大錘&板盾 歐洛克斯 Mk II & Mk III接入 | [作戰大錘&板盾 歐洛克斯 Mk II & Mk III接入](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/ogryn_powermaul_slabshield/ogryn_powermaul_slabshield_p1_m1.lua#L1771-L1773) |
| 作戰大錘&板盾 果羅姆 Mk I & Mk V匯入 | [作戰大錘&板盾 果羅姆 Mk I & Mk V匯入](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/ogryn_powermaul_slabshield/ogryn_powermaul_slabshield_p1_m2.lua#L17) |
| 作戰大錘&板盾 果羅姆 Mk I & Mk V接入 | [作戰大錘&板盾 果羅姆 Mk I & Mk V接入](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/ogryn_powermaul_slabshield/ogryn_powermaul_slabshield_p1_m2.lua#L1397-L1399) |
| 碾壓者等級覆寫 | [碾壓者等級覆寫](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_traits/weapon_traits_bespoke_powermaul_2h_p1.lua#L256-L295) |
| 碾壓者Buff接入 | [碾壓者Buff接入](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/weapon_traits_buff_templates/weapon_traits_bespoke_powermaul_2h_p1_buff_templates.lua#L16) |
| UI 碾壓者 | [UI 碾壓者](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ui/ui_weapon_pattern_settings.lua#L418) |
| 碾壓者 憤怒 Mk IVe匯入 | [碾壓者 憤怒 Mk IVe匯入](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/power_mauls_2h/powermaul_2h_p1_m1.lua#L17) |
| 碾壓者 憤怒 Mk IVe接入 | [碾壓者 憤怒 Mk IVe接入](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/power_mauls_2h/powermaul_2h_p1_m1.lua#L1659-L1661) |
| 碾壓者 克魯克 Mk VII匯入 | [碾壓者 克魯克 Mk VII匯入](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/power_mauls_2h/powermaul_2h_p1_m2.lua#L17) |
| 碾壓者 克魯克 Mk VII接入 | [碾壓者 克魯克 Mk VII接入](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/power_mauls_2h/powermaul_2h_p1_m2.lua#L1917-L1919) |
| 電擊錘等級覆寫 | [電擊錘等級覆寫](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_traits/weapon_traits_bespoke_powermaul_p1.lua#L257-L296) |
| 電擊錘Buff接入 | [電擊錘Buff接入](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/weapon_traits_buff_templates/weapon_traits_bespoke_powermaul_p1_buff_templates.lua#L25) |
| UI 電擊錘 | [UI 電擊錘](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ui/ui_weapon_pattern_settings.lua#L436) |
| 電擊錘 阿格尼 Mk Ia匯入 | [電擊錘 阿格尼 Mk Ia匯入](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/power_mauls/powermaul_p1_m1.lua#L15) |
| 電擊錘 阿格尼 Mk Ia接入 | [電擊錘 阿格尼 Mk Ia接入](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/power_mauls/powermaul_p1_m1.lua#L1520-L1522) |
| 電擊錘 軍務部 Mk III匯入 | [電擊錘 軍務部 Mk III匯入](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/power_mauls/powermaul_p1_m2.lua#L15) |
| 電擊錘 軍務部 Mk III接入 | [電擊錘 軍務部 Mk III接入](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/power_mauls/powermaul_p1_m2.lua#L1607-L1609) |
| 法務官電擊鎚和鎮壓護盾等級覆寫 | [法務官電擊鎚和鎮壓護盾等級覆寫](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_traits/weapon_traits_bespoke_powermaul_shield_p1.lua#L163-L202) |
| 法務官電擊鎚和鎮壓護盾Buff接入 | [法務官電擊鎚和鎮壓護盾Buff接入](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/weapon_traits_buff_templates/weapon_traits_bespoke_powermaul_shield_p1_buff_templates.lua#L151) |
| UI 法務官電擊鎚和鎮壓護盾 | [UI 法務官電擊鎚和鎮壓護盾](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ui/ui_weapon_pattern_settings.lua#L480) |
| 法務官電擊鎚和鎮壓護盾 布蘭克斯 Mk VI匯入 | [法務官電擊鎚和鎮壓護盾 布蘭克斯 Mk VI匯入](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/power_maul_shields/powermaul_shield_p1_m1.lua#L16) |
| 法務官電擊鎚和鎮壓護盾 布蘭克斯 Mk VI接入 | [法務官電擊鎚和鎮壓護盾 布蘭克斯 Mk VI接入](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/power_maul_shields/powermaul_shield_p1_m1.lua#L1610-L1612) |
| 法務官電擊鎚和鎮壓護盾 布蘭克斯 Mk XI匯入 | [法務官電擊鎚和鎮壓護盾 布蘭克斯 Mk XI匯入](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/power_maul_shields/powermaul_shield_p1_m2.lua#L16) |
| 法務官電擊鎚和鎮壓護盾 布蘭克斯 Mk XI接入 | [法務官電擊鎚和鎮壓護盾 布蘭克斯 Mk XI接入](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/power_maul_shields/powermaul_shield_p1_m2.lua#L1828-L1830) |
