# 魔力彈藥：來源與公式

[玩家說明](README.md)｜[來源索引](SOURCE_INDEX.md)｜[武器對應](WEAPON_COMPATIBILITY.md)｜[等級](TIER_VALUES.md)｜[原文比較](LOCALIZATION_COMPARISON.md)｜[百分比檢核](DAMAGE_PERCENTAGE_REVIEW.md)

Release1.13.1，固定SHA `7e662fcda16219d775b84af50322be2e9cd9d62e`，機制僅依Aussiemon/Darktide-Source-Code。

| 用途 | 固定Git物件與行號 |
|---|---|
| 備彈轉移 | [scripts/settings/buff/weapon_traits_buff_templates/base_weapon_trait_buff_templates.lua](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/weapon_traits_buff_templates/base_weapon_trait_buff_templates.lua#L2970-L3000) |
| 成功暴擊事件 | [scripts/extension_systems/weapon/actions/action_weapon_base.lua](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/weapon/actions/action_weapon_base.lua#L148-L184) |
| 自動射擊暴擊延續 | [scripts/extension_systems/weapon/actions/action_shoot.lua](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/weapon/actions/action_shoot.lua#L997-L1068) |
| 射擊狀態檢查 | [scripts/extension_systems/weapon/actions/action_shoot.lua](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/weapon/actions/action_shoot.lua#L594-L615) |
| 三型號的六組射擊設定 | [scripts/settings/equipment/weapon_handling_templates/weapon_handling_templates.lua](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_handling_templates/weapon_handling_templates.lua#L825-L890) |
| 射擊彈藥消耗 | [scripts/extension_systems/weapon/actions/action_shoot.lua](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/weapon/actions/action_shoot.lua#L540-L560) |
| 彈匣總量 | [scripts/utilities/ammo.lua](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/ammo.lua#L210-L242) |
| 彈匣分配 | [scripts/utilities/ammo.lua](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/ammo.lua#L274-L362) |
| 事件逐筆 | [scripts/extension_systems/buff/buffs/proc_buff.lua](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/buff/buffs/proc_buff.lua#L304-L341) |
| Buff裝備生命週期 | [scripts/extension_systems/weapon/utilities/weapon_tweak_templates.lua](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/weapon/utilities/weapon_tweak_templates.lua#L168-L211) |
| 裝備與卸除 | [scripts/extension_systems/weapon/player_unit_weapon_extension.lua](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/weapon/player_unit_weapon_extension.lua#L633-L661) |
| 切出武器 | [scripts/extension_systems/weapon/player_unit_weapon_extension.lua](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/weapon/player_unit_weapon_extension.lua#L743-L785) |
| 持用條件 | [scripts/settings/buff/helper_functions/conditional_functions.lua](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/helper_functions/conditional_functions.lua#L43-L59) |
| 覆寫繼承 | [scripts/extension_systems/buff/buffs/buff.lua](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/buff/buffs/buff.lua#L145-L221) |
| 可取得等級 | [scripts/backend/crafting.lua](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/backend/crafting.lua#L62-L89) |
| UI有效位元過濾 | [scripts/ui/view_elements/view_element_trait_inventory/view_element_trait_inventory.lua](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/ui/view_elements/view_element_trait_inventory/view_element_trait_inventory.lua#L456-L469) |
| 雙鏈重型機槍等級定義 | [scripts/settings/equipment/weapon_traits/weapon_traits_bespoke_ogryn_heavystubber_p1.lua](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_traits/weapon_traits_bespoke_ogryn_heavystubber_p1.lua#L362-L391) |
| 雙鏈重型機槍Buff接入 | [scripts/settings/buff/weapon_traits_buff_templates/weapon_traits_bespoke_ogryn_heavystubber_p1_buff_templates.lua](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/weapon_traits_buff_templates/weapon_traits_bespoke_ogryn_heavystubber_p1_buff_templates.lua#L41-L41) |
| 雙鏈重型機槍 克魯克 Mk V模板 | [scripts/settings/equipment/weapon_templates/ogryn_heavystubbers/ogryn_heavystubber_p1_m1.lua](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/ogryn_heavystubbers/ogryn_heavystubber_p1_m1.lua#L16-L16) |
| 雙鏈重型機槍 克魯克 Mk V接入 | [scripts/settings/equipment/weapon_templates/ogryn_heavystubbers/ogryn_heavystubber_p1_m1.lua](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/ogryn_heavystubbers/ogryn_heavystubber_p1_m1.lua#L855-L857) |
| 雙鏈重型機槍 戈爾貢努姆 Mk IV模板 | [scripts/settings/equipment/weapon_templates/ogryn_heavystubbers/ogryn_heavystubber_p1_m2.lua](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/ogryn_heavystubbers/ogryn_heavystubber_p1_m2.lua#L16-L16) |
| 雙鏈重型機槍 戈爾貢努姆 Mk IV接入 | [scripts/settings/equipment/weapon_templates/ogryn_heavystubbers/ogryn_heavystubber_p1_m2.lua](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/ogryn_heavystubbers/ogryn_heavystubber_p1_m2.lua#L855-L857) |
| 雙鏈重型機槍 阿克利斯 Mk VII模板 | [scripts/settings/equipment/weapon_templates/ogryn_heavystubbers/ogryn_heavystubber_p1_m3.lua](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/ogryn_heavystubbers/ogryn_heavystubber_p1_m3.lua#L16-L16) |
| 雙鏈重型機槍 阿克利斯 Mk VII接入 | [scripts/settings/equipment/weapon_templates/ogryn_heavystubbers/ogryn_heavystubber_p1_m3.lua](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/ogryn_heavystubbers/ogryn_heavystubber_p1_m3.lua#L879-L881) |

## 執行與計算

普通proc_buff監聽on_critical_strike，持用時執行；沒有命中、攻擊類型、正傷害、冷卻或層數檢查。ActionWeaponBase在新的暴擊判定成功時立即送事件，所以射空也可觸發，符合條件的本武器近戰暴擊也走同一事件；不以攻擊命中多少敵人或射出幾顆彈丸決定次數。[事件](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/weapon/actions/action_weapon_base.lua#L148-L184)、[Buff](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/weapon_traits_buff_templates/base_weapon_trait_buff_templates.lua#L2970-L3000)。

自動射擊既有暴擊連發只遞增num_critical_shots，沒有再次呼叫判定；三型號腰射／瞄準模板max_critical_shots=6，因此一段成功判定最多延續六發，不能以每發暴擊命中都轉移N解讀。[延續](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/weapon/actions/action_shoot.lua#L997-L1068)、[設定](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_handling_templates/weapon_handling_templates.lua#L825-L890)。

效果執行時讀所有使用中彈匣的總數及容量，用min(N,容量−當前總匣,備彈)決定轉移；Ammo按各匣填滿比例分配而非單一槍管額外生成一份。[總量](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/ammo.lua#L210-L242)、[分配](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/ammo.lua#L274-L362)。暴擊事件在判定時入列，射擊消耗由動作另外處理；算例以proc真正讀取時的匣／備彈狀態為前提，不把排程入列時與實際執行時混為一刻。[消耗](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/weapon/actions/action_shoot.lua#L540-L560)。

令N為等級值，C／M為效果執行時總彈匣現值／上限，R為備彈。`a=min(N,M−C,R)`，`C'=C+a`，`R'=R−a`；於合法容量狀態下`C'+R'=C+R`。[轉移算式](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/weapon_traits_buff_templates/base_weapon_trait_buff_templates.lua#L2985-L2998)。假設N=5,C=80,M=100,R=50，a=5，結果85／45、總130發；C=98時a=2，100／48總148；R=2時a=2，82／0總82。單位是發數，沒有傷害或最大備彈百分比倍率。

## 電弧步槍差異

- I–IV每次新暴擊判定最多轉移1發；共同公式仍受彈匣缺額與備彈限制。

- hip／braced處理模板max_critical_shots均1。[電弧射擊設定](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_handling_templates/weapon_handling_templates.lua#L656-L685)。

- 連鎖沿用當時的is_active暴擊狀態，直接呼叫Attack，沒有重新執行ActionWeaponBase的暴擊判定；命中多個連鎖目標不額外觸發轉移。[連鎖傷害](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/weapon/actions/utilities/chain_lightning_action.lua#L258-L282)；[Attack接入](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/action/chain_lightning.lua#L500-L510)。

- 四級top-level `reload_speed=.06/.09/.12/.15`不在stat_buffs或conditional_stat_buffs內；共用proc只讀num_ammmo_to_move，沒有使用這個欄位。[轉移欄位讀取](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/weapon_traits_buff_templates/base_weapon_trait_buff_templates.lua#L2985-L2998)；[Buff stat接入](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/buff/buffs/buff.lua#L695-L747)。

- 因此該欄位完整保留為來源紀錄，不列成玩家換彈速度加成。

## 圖示

item.icon `content/ui/textures/icons/traits/weapon_trait_143`；[原圖](https://gameslantern.com/storage/sites/darktide/exporter/content/ui/textures/icons/traits/weapon_trait_143.png)｜[Issue #14](https://github.com/SyuanTsai/Media-Assets/issues/14)｜[實際附件](https://github.com/user-attachments/assets/63f0f4f1-edb0-4269-84ee-ac75d14d1c92)。只作辨識，不作機制依據。


## 其他武器變體

| 用途 | 固定原始碼 |
|---|---|
| 電弧步槍等級覆寫 | [電弧步槍等級覆寫](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_traits/weapon_traits_bespoke_arc_rifle_p1.lua#L156-L189) |
| 電弧步槍Buff接入 | [電弧步槍Buff接入](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/weapon_traits_buff_templates/weapon_traits_bespoke_arc_rifle_p1_buff_templates.lua#L27) |
| UI 電弧步槍 | [UI 電弧步槍](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ui/ui_weapon_pattern_settings.lua#L635) |
| 電弧步槍 布蘭克斯 Mk IV匯入 | [電弧步槍 布蘭克斯 Mk IV匯入](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/arc_rifle/arc_rifle_p1_m1.lua#L20) |
| 電弧步槍 布蘭克斯 Mk IV接入 | [電弧步槍 布蘭克斯 Mk IV接入](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/arc_rifle/arc_rifle_p1_m1.lua#L1059-L1061) |


## 交集外来源候選

- [重伐木槍P2來源定義](weapon_trait_bespoke_ogryn_heavystubber_p2_ammo_from_reserve_on_crit.md)：三型號模板保留定義，但快取缺少對應祝福項目。
