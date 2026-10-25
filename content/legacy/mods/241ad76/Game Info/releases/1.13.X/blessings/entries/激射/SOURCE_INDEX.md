# 激射：來源與公式

[玩家說明](README.md)｜[來源索引](SOURCE_INDEX.md)｜[武器對應](WEAPON_COMPATIBILITY.md)｜[等級](TIER_VALUES.md)｜[原文比較](LOCALIZATION_COMPARISON.md)｜[百分比檢核](DAMAGE_PERCENTAGE_REVIEW.md)

- Release1.13.1，固定SHA `7e662fcda16219d775b84af50322be2e9cd9d62e`；機制只依公開Darktide-Source-Code。

- [共用來源邊界](../../SOURCE_INDEX.md)記錄MasterItems快取、完整語系RAW及後端欄位狀態。

| 用途 | 固定原始碼 |
|---|---|
| Galvanic tier override and value display | [Galvanic tier override and value display](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_traits/weapon_traits_bespoke_galvanic_rifle_p1.lua#L163-L201) |
| Lasgun tier override and value display | [Lasgun tier override and value display](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_traits/weapon_traits_bespoke_lasgun_p2.lua#L422-L460) |
| Needle Pistol tier override and value display | [Needle Pistol tier override and value display](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_traits/weapon_traits_bespoke_needlepistol_p1.lua#L72-L110) |
| Galvanic wield conditional wrapper | [Galvanic wield conditional wrapper](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/weapon_traits_buff_templates/weapon_traits_bespoke_galvanic_rifle_p1_buff_templates.lua#L17-L24) |
| Lasgun wield conditional wrapper | [Lasgun wield conditional wrapper](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/weapon_traits_buff_templates/weapon_traits_bespoke_lasgun_p2_buff_templates.lua#L60-L67) |
| Needle Pistol wield conditional wrapper | [Needle Pistol wield conditional wrapper](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/weapon_traits_buff_templates/weapon_traits_bespoke_needlepistol_p1_buff_templates.lua#L27-L34) |
| Override applied to conditional stat buff | [Override applied to conditional stat buff](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/buff/buffs/buff.lua#L689-L708) |
| Conditional override calculation | [Conditional override calculation](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/buff/buffs/buff.lua#L735-L746) |
| Mass multiplier type | [Mass multiplier type](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/buff_settings.lua#L752-L754) |
| Weakspot hit mass calculation | [Weakspot hit mass calculation](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/attack/hit_mass.lua#L12-L62) |
| Mass subtracts from attack and impact budgets | [Mass subtracts from attack and impact budgets](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/attack/hit_mass.lua#L65-L99) |
| Hitscan weakspot and mass before damage | [Hitscan weakspot and mass before damage](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/attack/hit_scan.lua#L215-L227) |
| Melee sweep weakspot mass and stop calculation | [Melee sweep weakspot mass and stop calculation](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/weapon/actions/action_sweep.lua#L1353-L1380) |
| Galvanic P1 M1 hitscan and trait bind | [Galvanic P1 M1 hitscan and trait bind](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/galvanic_rifle/galvanic_rifle_p1_m1.lua#L263-L269) |
| Galvanic P1 M1 aim hitscan | [Galvanic P1 M1 aim hitscan](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/galvanic_rifle/galvanic_rifle_p1_m1.lua#L346-L350) |
| Galvanic P1 M1 bash sweep | [Galvanic P1 M1 bash sweep](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/galvanic_rifle/galvanic_rifle_p1_m1.lua#L547-L557) |
| Helbore P2 M1 hitscan/trait link and bayonet sweep | [Helbore P2 M1 hitscan/trait link and bayonet sweep](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/lasguns/lasgun_p2_m1.lua#L413) |
| Helbore P2 M1 ADS and bayonet action | [Helbore P2 M1 ADS and bayonet action](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/lasguns/lasgun_p2_m1.lua#L608) |
| Helbore P2 M1 bayonet sweep | [Helbore P2 M1 bayonet sweep](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/lasguns/lasgun_p2_m1.lua#L904-L913) |
| Helbore P2 M2 hitscan/trait link and bayonet sweep | [Helbore P2 M2 hitscan/trait link and bayonet sweep](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/lasguns/lasgun_p2_m2.lua#L413) |
| Helbore P2 M2 ADS | [Helbore P2 M2 ADS](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/lasguns/lasgun_p2_m2.lua#L608) |
| Helbore P2 M2 bayonet sweep | [Helbore P2 M2 bayonet sweep](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/lasguns/lasgun_p2_m2.lua#L904-L913) |
| Helbore P2 M3 hitscan/trait link | [Helbore P2 M3 hitscan/trait link](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/lasguns/lasgun_p2_m3.lua#L423) |
| Helbore P2 M3 ADS | [Helbore P2 M3 ADS](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/lasguns/lasgun_p2_m3.lua#L617) |
| Helbore P2 M3 bayonet sweep | [Helbore P2 M3 bayonet sweep](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/lasguns/lasgun_p2_m3.lua#L927) |
| Needle Pistol P1 M1 hitscan and trait link | [Needle Pistol P1 M1 hitscan and trait link](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/needlepistols/needlepistol_p1_m1.lua#L228-L233) |
| Needle Pistol P1 M2 hitscan and trait link | [Needle Pistol P1 M2 hitscan and trait link](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/needlepistols/needlepistol_p1_m2.lua#L228-L233) |
| Needle Pistol special hit-scan AoE | [Needle Pistol special hit-scan AoE](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/needlepistols/settings_templates/needlepistol_hitscan_templates.lua#L43-L58) |
| Needle Pistol toxin application on explosion | [Needle Pistol toxin application on explosion](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/needlepistols/settings_templates/needlepistol_damage_profile_templates.lua#L237-L245) |
| UI item-name composition | [UI item-name composition](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/items.lua#L315-L327) |
| UI family, pattern, and mark loc IDs | [UI family, pattern, and mark loc IDs](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/items.lua#L378-L426) |
| 持用條件 | [持用條件](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/helper_functions/conditional_functions.lua#L43-L59) |
| 完整tier與condition覆寫 | [完整tier與condition覆寫](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/buff/buffs/buff.lua#L689-L747) |
| 針彈射擊殺死或停止後的爆炸判斷 | [針彈射擊殺死或停止後的爆炸判斷](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/action/ranged_action.lua#L86-L137) |
| 針彈毒素tick獨立buff攻擊 | [針彈毒素tick獨立buff攻擊](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/weapon_buff_templates.lua#L1493-L1521) |
| 針彈手槍M1普通及特殊射擊 | [針彈手槍M1普通及特殊射擊](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/needlepistols/needlepistol_p1_m1.lua#L269-L283) |
| 針彈手槍M2普通及特殊射擊 | [針彈手槍M2普通及特殊射擊](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/needlepistols/needlepistol_p1_m2.lua#L269-L283) |
| 穿透物件停止的獨立爆炸分支 | [穿透物件停止的獨立爆炸分支](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/attack/hit_scan.lua#L261-L320) |
| 實際UI型號組名 | [實際UI型號組名](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/items.lua#L315-L327) |
| UI名稱欄位讀取 | [UI名稱欄位讀取](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/items.lua#L378-L426) |

## 執行與計算

- 三個實際wrapper各自是普通buff，conditional_stat_buffs定義consumed_hit_mass_modifier_on_weakspot_hit=0.5，並以ConditionalFunctions.is_item_slot_wielded作條件；沒有proc event、target debuff、疊層或定時器。各trait覆寫stat_buffs內同一欄位；Buff._calculate_stat_buffs會把trait override用在conditional_stat_buffs計算中，故I–IV值替換wrapper的0.5。

- HitMass.target_hit_mass先依目標與其他通用／近戰／遠程修正計算質量；只有hit_weakspot為真時才再乘consumed_hit_mass_modifier_on_weakspot_hit。該欄位沒有attack_type gate。HitMass.consume_hit_mass以算出的目標質量同時扣除攻擊與衝擊預算；停止條件另看兩預算是否耗盡及裝甲/impact設定。

- HitScan在執行傷害前先計算Weakspot.hit_weakspot，再呼叫HitMass.consume_hit_mass及stopped_attack；所以此stat在本次弱點命中的質量計算即生效，不是命中後排隊的加層。ActionSweep也先計算弱點，再呼叫HitMass.target_hit_mass並把該質量併入本次累計質量；因此電能步槍bash及冥潮鐳射槍刺刀掃擊的弱點命中同樣使用該stat。

- Needle Pistol M1/M2普通及chemical special射擊皆為shoot_hit_scan；chemical special選用needlepistol_dart_aoe，HitScan先扣減命中質量，再呼叫RangedAction.hitmass_explosion；只有攻擊與衝擊兩種質量預算都耗盡，才依attack_result選用kill或stop爆炸模板。穿透物件停止時另依HitScan的penetration.stop_explosion_template分支處理。爆炸damage profile另施加neurotoxin。這不是額外一發飛鏢的mass pass或本祝福的毒素傷害加成。

- 對一次弱點命中，令M為其他修正後、尚未乘本trait欄位的目標命中質量，r為該級顯示減耗比例，則M_trait=M×(1−r)；身體命中時r=0。M_trait同時從攻擊與衝擊質量預算扣除。

- 電能步槍IV：r=.35，M_trait=.65M。冥潮鐳射槍及針彈手槍IV：r=.50，M_trait=.50M。

- 在連續相同目標質量、每次皆為弱點且沒有其他停止條件的理想模型中，可承受總質量倍率為1/(1−r)：r=.20時1.25，r=.50時2；離散目標數與實際穿透仍由預算及停止規則決定。

## 圖示

- item.icon：`content/ui/textures/icons/traits/weapon_trait_147`。

- [原圖](https://gameslantern.com/storage/sites/darktide/exporter/content/ui/textures/icons/traits/weapon_trait_147.png)｜[Issue附件](https://github.com/user-attachments/assets/a4cfe045-7131-4b43-a81b-0cfb1012b545)；圖示只作辨識。

## 武器變體來源

| 用途 | 固定原始碼 |
|---|---|
| 電能步槍等級覆寫 | [電能步槍等級覆寫](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_traits/weapon_traits_bespoke_galvanic_rifle_p1.lua#L163-L204) |
| 電能步槍Buff接入 | [電能步槍Buff接入](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/weapon_traits_buff_templates/weapon_traits_bespoke_galvanic_rifle_p1_buff_templates.lua#L17-L24) |
| UI 電能步槍 | [UI 電能步槍](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ui/ui_weapon_pattern_settings.lua#L857) |
| 電能步槍 布蘭克斯 Mk CV匯入 | [電能步槍 布蘭克斯 Mk CV匯入](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/galvanic_rifle/galvanic_rifle_p1_m1.lua#L17) |
| 電能步槍 布蘭克斯 Mk CV接入 | [電能步槍 布蘭克斯 Mk CV接入](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/galvanic_rifle/galvanic_rifle_p1_m1.lua#L863-L865) |
| 冥潮鐳射槍等級覆寫 | [冥潮鐳射槍等級覆寫](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_traits/weapon_traits_bespoke_lasgun_p2.lua#L422-L465) |
| 冥潮鐳射槍Buff接入 | [冥潮鐳射槍Buff接入](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/weapon_traits_buff_templates/weapon_traits_bespoke_lasgun_p2_buff_templates.lua#L60-L69) |
| UI 冥潮鐳射槍 | [UI 冥潮鐳射槍](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ui/ui_weapon_pattern_settings.lua#L892) |
| 冥潮鐳射槍 盧修斯 MK IIIa匯入 | [冥潮鐳射槍 盧修斯 MK IIIa匯入](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/lasguns/lasgun_p2_m1.lua#L15) |
| 冥潮鐳射槍 盧修斯 MK IIIa接入 | [冥潮鐳射槍 盧修斯 MK IIIa接入](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/lasguns/lasgun_p2_m1.lua#L1333-L1335) |
| 冥潮鐳射槍 盧修斯 MK V匯入 | [冥潮鐳射槍 盧修斯 MK V匯入](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/lasguns/lasgun_p2_m2.lua#L15) |
| 冥潮鐳射槍 盧修斯 MK V接入 | [冥潮鐳射槍 盧修斯 MK V接入](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/lasguns/lasgun_p2_m2.lua#L1327-L1329) |
| 冥潮鐳射槍 盧修斯 Mk IV匯入 | [冥潮鐳射槍 盧修斯 Mk IV匯入](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/lasguns/lasgun_p2_m3.lua#L15) |
| 冥潮鐳射槍 盧修斯 Mk IV接入 | [冥潮鐳射槍 盧修斯 Mk IV接入](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/lasguns/lasgun_p2_m3.lua#L1244-L1246) |
| 針彈手槍等級覆寫 | [針彈手槍等級覆寫](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_traits/weapon_traits_bespoke_needlepistol_p1.lua#L72-L113) |
| 針彈手槍Buff接入 | [針彈手槍Buff接入](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/weapon_traits_buff_templates/weapon_traits_bespoke_needlepistol_p1_buff_templates.lua#L27-L34) |
| UI 針彈手槍 | [UI 針彈手槍](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ui/ui_weapon_pattern_settings.lua#L961) |
| 針彈手槍 布蘭克斯 MkVI匯入 | [針彈手槍 布蘭克斯 MkVI匯入](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/needlepistols/needlepistol_p1_m1.lua#L17) |
| 針彈手槍 布蘭克斯 MkVI接入 | [針彈手槍 布蘭克斯 MkVI接入](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/needlepistols/needlepistol_p1_m1.lua#L791-L793) |
| 針彈手槍 布蘭克斯 MKII匯入 | [針彈手槍 布蘭克斯 MKII匯入](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/needlepistols/needlepistol_p1_m2.lua#L17) |
| 針彈手槍 布蘭克斯 MKII接入 | [針彈手槍 布蘭克斯 MKII接入](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/needlepistols/needlepistol_p1_m2.lua#L788-L790) |
