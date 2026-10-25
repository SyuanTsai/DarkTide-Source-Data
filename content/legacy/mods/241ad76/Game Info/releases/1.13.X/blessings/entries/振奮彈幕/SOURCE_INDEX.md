# 振奮彈幕：來源與公式

[玩家說明](README.md)｜[來源索引](SOURCE_INDEX.md)｜[武器對應](WEAPON_COMPATIBILITY.md)｜[等級](TIER_VALUES.md)｜[原文比較](LOCALIZATION_COMPARISON.md)｜[百分比檢核](DAMAGE_PERCENTAGE_REVIEW.md)

Release1.13.1，固定SHA `7e662fcda16219d775b84af50322be2e9cd9d62e`，機制僅依Aussiemon/Darktide-Source-Code。

| 用途 | 固定Git物件與行號 |
|---|---|
| 實際wrapper | [scripts/settings/buff/weapon_traits_buff_templates/weapon_traits_bespoke_ogryn_heavystubber_p1_buff_templates.lua](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/weapon_traits_buff_templates/weapon_traits_bespoke_ogryn_heavystubber_p1_buff_templates.lua#L11-L14) |
| 連射步數 | [scripts/settings/buff/weapon_traits_buff_templates/base_weapon_trait_buff_templates.lua](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/weapon_traits_buff_templates/base_weapon_trait_buff_templates.lua#L1897-L1947) |
| 事件與恢復倍率 | [scripts/settings/buff/weapon_traits_buff_templates/base_weapon_trait_buff_templates.lua](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/weapon_traits_buff_templates/base_weapon_trait_buff_templates.lua#L1991-L2034) |
| 總匣射擊門檻 | [scripts/settings/buff/fire_step_functions.lua](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/fire_step_functions.lua#L21-L35) |
| 韌性共用回復 | [scripts/settings/buff/helper_functions/shared_buff_functions.lua](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/helper_functions/shared_buff_functions.lua#L10-L27) |
| 最大韌性與缺額 | [scripts/extension_systems/toughness/player_unit_toughness_extension.lua](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/toughness/player_unit_toughness_extension.lua#L253-L285) |
| 韌性禁用條件 | [scripts/extension_systems/toughness/player_unit_toughness_extension.lua](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/toughness/player_unit_toughness_extension.lua#L447-L474) |
| 射擊次數增加 | [scripts/extension_systems/weapon/actions/action_shoot.lua](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/weapon/actions/action_shoot.lua#L455-L466) |
| 免費射擊事件 | [scripts/extension_systems/weapon/actions/action_shoot.lua](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/weapon/actions/action_shoot.lua#L485-L522) |
| 結束狀態 | [scripts/extension_systems/weapon/actions/action_shoot.lua](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/weapon/actions/action_shoot.lua#L594-L608) |
| 結束射擊 | [scripts/extension_systems/weapon/actions/action_shoot.lua](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/weapon/actions/action_shoot.lua#L653-L668) |
| 停火清計數 | [scripts/extension_systems/weapon/player_unit_weapon_extension.lua](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/weapon/player_unit_weapon_extension.lua#L510-L529) |
| m1腰射 | [scripts/settings/equipment/weapon_templates/ogryn_heavystubbers/settings_templates/ogryn_heavystubber_spread_templates.lua](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/ogryn_heavystubbers/settings_templates/ogryn_heavystubber_spread_templates.lua#L633-L656) |
| m2腰射 | [scripts/settings/equipment/weapon_templates/ogryn_heavystubbers/settings_templates/ogryn_heavystubber_spread_templates.lua](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/ogryn_heavystubbers/settings_templates/ogryn_heavystubber_spread_templates.lua#L1016-L1067) |
| m3腰射 | [scripts/settings/equipment/weapon_templates/ogryn_heavystubbers/settings_templates/ogryn_heavystubber_spread_templates.lua](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/ogryn_heavystubbers/settings_templates/ogryn_heavystubber_spread_templates.lua#L1189-L1212) |
| m1支架射擊 | [scripts/settings/equipment/weapon_templates/ogryn_heavystubbers/settings_templates/ogryn_heavystubber_spread_templates.lua](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/ogryn_heavystubbers/settings_templates/ogryn_heavystubber_spread_templates.lua#L385-L399) |
| m2支架射擊 | [scripts/settings/equipment/weapon_templates/ogryn_heavystubbers/settings_templates/ogryn_heavystubber_spread_templates.lua](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/ogryn_heavystubbers/settings_templates/ogryn_heavystubber_spread_templates.lua#L1125-L1140) |
| m3支架射擊 | [scripts/settings/equipment/weapon_templates/ogryn_heavystubbers/settings_templates/ogryn_heavystubber_spread_templates.lua](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/ogryn_heavystubbers/settings_templates/ogryn_heavystubber_spread_templates.lua#L1574-L1597) |
| Buff裝備生命週期 | [scripts/extension_systems/weapon/utilities/weapon_tweak_templates.lua](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/weapon/utilities/weapon_tweak_templates.lua#L168-L211) |
| 裝備與卸除 | [scripts/extension_systems/weapon/player_unit_weapon_extension.lua](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/weapon/player_unit_weapon_extension.lua#L633-L661) |
| 切出武器 | [scripts/extension_systems/weapon/player_unit_weapon_extension.lua](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/weapon/player_unit_weapon_extension.lua#L743-L785) |
| 持用條件 | [scripts/settings/buff/helper_functions/conditional_functions.lua](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/helper_functions/conditional_functions.lua#L43-L59) |
| 覆寫繼承 | [scripts/extension_systems/buff/buffs/buff.lua](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/buff/buffs/buff.lua#L145-L221) |
| 可取得等級 | [scripts/backend/crafting.lua](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/backend/crafting.lua#L62-L89) |
| UI有效位元過濾 | [scripts/ui/view_elements/view_element_trait_inventory/view_element_trait_inventory.lua](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/ui/view_elements/view_element_trait_inventory/view_element_trait_inventory.lua#L456-L469) |
| 雙鏈重型機槍等級定義 | [scripts/settings/equipment/weapon_traits/weapon_traits_bespoke_ogryn_heavystubber_p1.lua](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_traits/weapon_traits_bespoke_ogryn_heavystubber_p1.lua#L9-L47) |
| 雙鏈重型機槍Buff接入 | [scripts/settings/buff/weapon_traits_buff_templates/weapon_traits_bespoke_ogryn_heavystubber_p1_buff_templates.lua](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/weapon_traits_buff_templates/weapon_traits_bespoke_ogryn_heavystubber_p1_buff_templates.lua#L11-L14) |
| 雙鏈重型機槍 克魯克 Mk V模板 | [scripts/settings/equipment/weapon_templates/ogryn_heavystubbers/ogryn_heavystubber_p1_m1.lua](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/ogryn_heavystubbers/ogryn_heavystubber_p1_m1.lua#L16-L16) |
| 雙鏈重型機槍 克魯克 Mk V接入 | [scripts/settings/equipment/weapon_templates/ogryn_heavystubbers/ogryn_heavystubber_p1_m1.lua](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/ogryn_heavystubbers/ogryn_heavystubber_p1_m1.lua#L855-L857) |
| 雙鏈重型機槍 戈爾貢努姆 Mk IV模板 | [scripts/settings/equipment/weapon_templates/ogryn_heavystubbers/ogryn_heavystubber_p1_m2.lua](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/ogryn_heavystubbers/ogryn_heavystubber_p1_m2.lua#L16-L16) |
| 雙鏈重型機槍 戈爾貢努姆 Mk IV接入 | [scripts/settings/equipment/weapon_templates/ogryn_heavystubbers/ogryn_heavystubber_p1_m2.lua](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/ogryn_heavystubbers/ogryn_heavystubber_p1_m2.lua#L855-L857) |
| 雙鏈重型機槍 阿克利斯 Mk VII模板 | [scripts/settings/equipment/weapon_templates/ogryn_heavystubbers/ogryn_heavystubber_p1_m3.lua](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/ogryn_heavystubbers/ogryn_heavystubber_p1_m3.lua#L16-L16) |
| 雙鏈重型機槍 阿克利斯 Mk VII接入 | [scripts/settings/equipment/weapon_templates/ogryn_heavystubbers/ogryn_heavystubber_p1_m3.lua](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/ogryn_heavystubbers/ogryn_heavystubber_p1_m3.lua#L879-L881) |

| m1腰射散佈接入 | [scripts/settings/equipment/weapon_templates/ogryn_heavystubbers/ogryn_heavystubber_p1_m1.lua](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/ogryn_heavystubbers/ogryn_heavystubber_p1_m1.lua#L668-L674) |
| m1支架散佈接入 | [scripts/settings/equipment/weapon_templates/ogryn_heavystubbers/ogryn_heavystubber_p1_m1.lua](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/ogryn_heavystubbers/ogryn_heavystubber_p1_m1.lua#L710-L718) |
| m2腰射散佈接入 | [scripts/settings/equipment/weapon_templates/ogryn_heavystubbers/ogryn_heavystubber_p1_m2.lua](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/ogryn_heavystubbers/ogryn_heavystubber_p1_m2.lua#L668-L674) |
| m2支架散佈接入 | [scripts/settings/equipment/weapon_templates/ogryn_heavystubbers/ogryn_heavystubber_p1_m2.lua](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/ogryn_heavystubbers/ogryn_heavystubber_p1_m2.lua#L711-L719) |
| m3腰射散佈接入 | [scripts/settings/equipment/weapon_templates/ogryn_heavystubbers/ogryn_heavystubber_p1_m3.lua](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/ogryn_heavystubbers/ogryn_heavystubber_p1_m3.lua#L700-L706) |
| m3支架散佈接入 | [scripts/settings/equipment/weapon_templates/ogryn_heavystubbers/ogryn_heavystubber_p1_m3.lua](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/ogryn_heavystubbers/ogryn_heavystubber_p1_m3.lua#L743-L751) |
| m1腰射移動 | [scripts/settings/equipment/weapon_templates/ogryn_heavystubbers/settings_templates/ogryn_heavystubber_spread_templates.lua](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/ogryn_heavystubbers/settings_templates/ogryn_heavystubber_spread_templates.lua#L959-L968) |
| m2腰射移動與蹲姿繼承 | [scripts/settings/equipment/weapon_templates/ogryn_heavystubbers/settings_templates/ogryn_heavystubber_spread_templates.lua](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/ogryn_heavystubbers/settings_templates/ogryn_heavystubber_spread_templates.lua#L1053-L1087) |
| m3腰射移動 | [scripts/settings/equipment/weapon_templates/ogryn_heavystubbers/settings_templates/ogryn_heavystubber_spread_templates.lua](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/ogryn_heavystubbers/settings_templates/ogryn_heavystubber_spread_templates.lua#L1515-L1524) |
| m1支架移動與蹲姿繼承 | [scripts/settings/equipment/weapon_templates/ogryn_heavystubbers/settings_templates/ogryn_heavystubber_spread_templates.lua](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/ogryn_heavystubbers/settings_templates/ogryn_heavystubber_spread_templates.lua#L396-L436) |
| m2支架移動與蹲姿繼承 | [scripts/settings/equipment/weapon_templates/ogryn_heavystubbers/settings_templates/ogryn_heavystubber_spread_templates.lua](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/ogryn_heavystubbers/settings_templates/ogryn_heavystubber_spread_templates.lua#L1136-L1179) |
| m3支架移動 | [scripts/settings/equipment/weapon_templates/ogryn_heavystubbers/settings_templates/ogryn_heavystubber_spread_templates.lua](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/ogryn_heavystubbers/settings_templates/ogryn_heavystubber_spread_templates.lua#L1900-L1909) |

## 執行與計算

一般wrapper合併toughness_regen_continuous_fire_step_func，取q=max(1,floor(使用中總彈匣容量×.1))；重伐木槍P2改用.05，撕裂槍改用.08；換彈中回傳0。共用函式s=floor(shooting_status.num_shots/q)，顯示最多5，但on_ammo_consumed用uncapped步數判斷是否增加，進入時恢復倍率min(s,5)。因此第6步以後每跨門檻仍恢復五倍，沒有5步後停止。[門檻](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/fire_step_functions.lua#L21-L35)、[步數](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/weapon_traits_buff_templates/base_weapon_trait_buff_templates.lua#L1907-L1947)、[事件](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/weapon_traits_buff_templates/base_weapon_trait_buff_templates.lua#L1991-L2034)。若同一事件批次跨過多步，實作只呼叫一次恢復，按當時步數倍率，不逐步補發每個跳過的門檻；本文逐步算例假設逐發結算。

射擊動作先num_shots+1，再送耗彈事件；免費射擊的ammo_usage=0也送同事件，Buff未檢查usage，故它計射擊次數而非真實淨耗彈。射擊命中不參與條件。[次數](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/weapon/actions/action_shoot.lua#L455-L466)、[免費事件](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/weapon/actions/action_shoot.lua#L485-L522)。

on_shoot_finish的proc本身不清步數；停火計數由weapon extension根據當下spread模板清num_shots，下一次耗彈事件更新內存步數。切出時條件觸發不成立，但on_equip本體仍存在；共享shooting_status可受切換後武器影響，因此不虛構固定持續秒數或切換即清層。[清除](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/weapon/player_unit_weapon_extension.lua#L510-L529)。

設總匣容量C、連射次數h、最大韌性T、等級基礎百分比p：`q=max(1,floor(C×f))`，f依武器為.05／.08／.1，`s=floor(h/q)`；跨過新的s時，要求恢復`T×p×min(s,5)`，實際再限制為缺額。[步數](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/weapon_traits_buff_templates/base_weapon_trait_buff_templates.lua#L1907-L1947)、[倍率](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/weapon_traits_buff_templates/base_weapon_trait_buff_templates.lua#L2020-L2025)、[恢復](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/helper_functions/shared_buff_functions.lua#L10-L27)、[截斷](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/toughness/player_unit_toughness_extension.lua#L253-L285)。以10%門檻假設C=100,T=200,p=.04，逐次跨門檻得8、16、24、32、40點，合計120；第6步仍40。C=119時q=11，第55次達s=5；當前韌性195時最多補5點。這是最大值百分比，不是缺額×20%。ignore_stat_buffs=true使一般恢復量倍率不加入本式。

## 圖示

item.icon `content/ui/textures/icons/traits/weapon_trait_127`；[原圖](https://gameslantern.com/storage/sites/darktide/exporter/content/ui/textures/icons/traits/weapon_trait_127.png)｜[Issue #14](https://github.com/SyuanTsai/Media-Assets/issues/14)｜[實際附件](https://github.com/user-attachments/assets/6c280f68-08ec-4f4b-a377-34050fcf4a27)。只作辨識，不作機制依據。


## 其他武器變體

| 用途 | 固定原始碼 |
|---|---|
| 電弧步槍等級覆寫 | [電弧步槍等級覆寫](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_traits/weapon_traits_bespoke_arc_rifle_p1.lua#L442-L482) |
| 電弧步槍Buff接入 | [電弧步槍Buff接入](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/weapon_traits_buff_templates/weapon_traits_bespoke_arc_rifle_p1_buff_templates.lua#L49) |
| UI 電弧步槍 | [UI 電弧步槍](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ui/ui_weapon_pattern_settings.lua#L635) |
| 電弧步槍 布蘭克斯 Mk IV匯入 | [電弧步槍 布蘭克斯 Mk IV匯入](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/arc_rifle/arc_rifle_p1_m1.lua#L20) |
| 電弧步槍 布蘭克斯 Mk IV接入 | [電弧步槍 布蘭克斯 Mk IV接入](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/arc_rifle/arc_rifle_p1_m1.lua#L1059-L1061) |
| 槍托自動槍等級覆寫 | [槍托自動槍等級覆寫](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_traits/weapon_traits_bespoke_autogun_p2.lua#L434-L474) |
| 槍托自動槍Buff接入 | [槍托自動槍Buff接入](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/weapon_traits_buff_templates/weapon_traits_bespoke_autogun_p2_buff_templates.lua#L37) |
| UI 槍托自動槍 | [UI 槍托自動槍](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ui/ui_weapon_pattern_settings.lua#L671) |
| 哥倫努Mk II槍托自動槍匯入 | [哥倫努Mk II槍托自動槍匯入](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/autoguns/autogun_p2_m1.lua#L16) |
| 哥倫努Mk II槍托自動槍接入 | [哥倫努Mk II槍托自動槍接入](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/autoguns/autogun_p2_m1.lua#L812-L814) |
| 格拉亞Mk IV槍托自動槍匯入 | [格拉亞Mk IV槍托自動槍匯入](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/autoguns/autogun_p2_m2.lua#L17) |
| 格拉亞Mk IV槍托自動槍接入 | [格拉亞Mk IV槍托自動槍接入](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/autoguns/autogun_p2_m2.lua#L863-L865) |
| 阿格里皮娜Mk VIII槍托自動槍匯入 | [阿格里皮娜Mk VIII槍托自動槍匯入](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/autoguns/autogun_p2_m3.lua#L16) |
| 阿格里皮娜Mk VIII槍托自動槍接入 | [阿格里皮娜Mk VIII槍托自動槍接入](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/autoguns/autogun_p2_m3.lua#L817-L819) |
| 撕裂者自動手槍等級覆寫 | [撕裂者自動手槍等級覆寫](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_traits/weapon_traits_bespoke_autopistol_p1.lua#L58-L96) |
| 撕裂者自動手槍Buff接入 | [撕裂者自動手槍Buff接入](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/weapon_traits_buff_templates/weapon_traits_bespoke_autopistol_p1_buff_templates.lua#L17) |
| UI 撕裂者自動手槍 | [UI 撕裂者自動手槍](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ui/ui_weapon_pattern_settings.lua#L717) |
| 尤斯Mk III撕裂者自動手槍匯入 | [尤斯Mk III撕裂者自動手槍匯入](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/autopistols/autopistol_p1_m1.lua#L15) |
| 尤斯Mk III撕裂者自動手槍接入 | [尤斯Mk III撕裂者自動手槍接入](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/autopistols/autopistol_p1_m1.lua#L743-L745) |
| 矛頭爆矢槍等級覆寫 | [矛頭爆矢槍等級覆寫](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_traits/weapon_traits_bespoke_bolter_p1.lua#L271-L309) |
| 矛頭爆矢槍Buff接入 | [矛頭爆矢槍Buff接入](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/weapon_traits_buff_templates/weapon_traits_bespoke_bolter_p1_buff_templates.lua#L25) |
| UI 矛頭爆矢槍 | [UI 矛頭爆矢槍](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ui/ui_weapon_pattern_settings.lua#L730) |
| 洛克Mk IIb矛頭爆矢槍匯入 | [洛克Mk IIb矛頭爆矢槍匯入](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/bolters/bolter_p1_m1.lua#L16) |
| 洛克Mk IIb矛頭爆矢槍接入 | [洛克Mk IIb矛頭爆矢槍接入](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/bolters/bolter_p1_m1.lua#L762-L764) |
| 洛克Mk III矛頭爆矢槍匯入 | [洛克Mk III矛頭爆矢槍匯入](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/bolters/bolter_p1_m2.lua#L16) |
| 洛克Mk III矛頭爆矢槍接入 | [洛克Mk III矛頭爆矢槍接入](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/bolters/bolter_p1_m2.lua#L757-L759) |
| 雙持自動手槍等級覆寫 | [雙持自動手槍等級覆寫](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_traits/weapon_traits_bespoke_dual_autopistols_p1.lua#L58-L96) |
| 雙持自動手槍Buff接入 | [雙持自動手槍Buff接入](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/weapon_traits_buff_templates/weapon_traits_bespoke_dual_autopistols_p1_buff_templates.lua#L17) |
| UI 雙持自動手槍 | [UI 雙持自動手槍](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ui/ui_weapon_pattern_settings.lua#L766) |
| 布蘭克斯MkIII雙持自動手槍匯入 | [布蘭克斯MkIII雙持自動手槍匯入](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/dual_autopistols/dual_autopistols_p1_m1.lua#L16) |
| 布蘭克斯MkIII雙持自動手槍接入 | [布蘭克斯MkIII雙持自動手槍接入](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/dual_autopistols/dual_autopistols_p1_m1.lua#L749-L751) |
| 淨化噴火器等級覆寫 | [淨化噴火器等級覆寫](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_traits/weapon_traits_bespoke_flamer_p1.lua#L11-L49) |
| 淨化噴火器Buff接入 | [淨化噴火器Buff接入](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/weapon_traits_buff_templates/weapon_traits_bespoke_flamer_p1_buff_templates.lua#L14) |
| UI 淨化噴火器 | [UI 淨化噴火器](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ui/ui_weapon_pattern_settings.lua#L792) |
| 奧特米亞Mk III淨化噴火器匯入 | [奧特米亞Mk III淨化噴火器匯入](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/flamers/flamer_p1_m1.lua#L14) |
| 奧特米亞Mk III淨化噴火器接入 | [奧特米亞Mk III淨化噴火器接入](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/flamers/flamer_p1_m1.lua#L745-L747) |
| 重伐木槍等級覆寫 | [重伐木槍等級覆寫](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_traits/weapon_traits_bespoke_ogryn_heavystubber_p2.lua#L91-L129) |
| 重伐木槍Buff接入 | [重伐木槍Buff接入](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/weapon_traits_buff_templates/weapon_traits_bespoke_ogryn_heavystubber_p2_buff_templates.lua#L22) |
| UI 重伐木槍 | [UI 重伐木槍](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ui/ui_weapon_pattern_settings.lua#L1002) |
| 布蘭克斯樣式重伐木槍匯入 | [布蘭克斯樣式重伐木槍匯入](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/ogryn_heavystubbers/ogryn_heavystubber_p2_m1.lua#L15) |
| 布蘭克斯樣式重伐木槍接入 | [布蘭克斯樣式重伐木槍接入](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/ogryn_heavystubbers/ogryn_heavystubber_p2_m1.lua#L794-L796) |
| 寬口布蘭克斯樣式重伐木槍匯入 | [寬口布蘭克斯樣式重伐木槍匯入](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/ogryn_heavystubbers/ogryn_heavystubber_p2_m2.lua#L15) |
| 寬口布蘭克斯樣式重伐木槍接入 | [寬口布蘭克斯樣式重伐木槍接入](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/ogryn_heavystubbers/ogryn_heavystubber_p2_m2.lua#L815-L817) |
| 災變布蘭克斯樣式重伐木槍匯入 | [災變布蘭克斯樣式重伐木槍匯入](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/ogryn_heavystubbers/ogryn_heavystubber_p2_m3.lua#L15) |
| 災變布蘭克斯樣式重伐木槍接入 | [災變布蘭克斯樣式重伐木槍接入](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/ogryn_heavystubbers/ogryn_heavystubber_p2_m3.lua#L815-L817) |
| 撕裂槍等級覆寫 | [撕裂槍等級覆寫](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_traits/weapon_traits_bespoke_ogryn_rippergun_p1.lua#L274-L312) |
| 撕裂槍Buff接入 | [撕裂槍Buff接入](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/weapon_traits_buff_templates/weapon_traits_bespoke_ogryn_rippergun_p1_buff_templates.lua#L25) |
| UI 撕裂槍 | [UI 撕裂槍](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ui/ui_weapon_pattern_settings.lua#L1038) |
| 碎敵Mk II撕裂槍匯入 | [碎敵Mk II撕裂槍匯入](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/ripperguns/ogryn_rippergun_p1_m1.lua#L15) |
| 碎敵Mk II撕裂槍接入 | [碎敵Mk II撕裂槍接入](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/ripperguns/ogryn_rippergun_p1_m1.lua#L911-L913) |
| 碎敵Mk V撕裂槍匯入 | [碎敵Mk V撕裂槍匯入](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/ripperguns/ogryn_rippergun_p1_m2.lua#L15) |
| 碎敵Mk V撕裂槍接入 | [碎敵Mk V撕裂槍接入](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/ripperguns/ogryn_rippergun_p1_m2.lua#L906-L908) |
| 碎敵Mk VI撕裂槍匯入 | [碎敵Mk VI撕裂槍匯入](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/ripperguns/ogryn_rippergun_p1_m3.lua#L15) |
| 碎敵Mk VI撕裂槍接入 | [碎敵Mk VI撕裂槍接入](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/ripperguns/ogryn_rippergun_p1_m3.lua#L889-L891) |


## 武器特有門檻與射擊事件

### 電弧步槍

- 每步q=max(1,floor(C×.1))；電弧連鎖的額外傷害事件不增加射擊準備次數。[射擊與連鎖](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/weapon/actions/action_shoot_hit_scan.lua#L195-L204)。

### 重伐木槍

- 本wrapper改用q=max(1,floor(C×.05))，即5%而非顯示格式中的10%。[5%門檻](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/weapon_traits_buff_templates/weapon_traits_bespoke_ogryn_heavystubber_p2_buff_templates.lua#L22-L39)。

- 假設C=100、T=200、IV級p=.04，第5／10／15／20／25次射擊恢復8／16／24／32／40點；第30次仍40點。

### 撕裂槍

- 本wrapper使用撕裂槍專用q=max(1,floor(C×.08))，即8%門檻。[8%門檻](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/fire_step_functions.lua#L66-L80)。

- ActionShootPellets._prepare_shooting先呼共用準備函式，再清彈丸數；每發霰彈射擊計一次，不按每顆彈丸計數。[霰彈準備](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/weapon/actions/action_shoot_pellets.lua#L852-L856)。

- UI族群為ogryn_rippergun_p1；MasterItems的實際trait_category為bespoke_rippergun_p1，祝福restriction為rippergun_p1，與該category精確對應。

### 雙持自動手槍

- 腰射與支架射擊都是alternating模式；每個交替發射子彈都經準備函式，雙槍的兩個使用中彈匣合計容量用作C。[腰射交替模式](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/dual_autopistols/dual_autopistols_p1_m1.lua#L281-L290)；[支架交替模式](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/dual_autopistols/dual_autopistols_p1_m1.lua#L351-L359)；[合計容量](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/ammo.lua#L227-L242)。

### 淨化噴火器

- flamer_gas與flamer_gas_burst都繼承ActionShoot，僅覆寫_shoot；計數所在_prepare_shooting仍由fixed_update先執行。[持續噴火繼承](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/weapon/actions/action_flamer_gas.lua#L25-L28)；[短噴繼承](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/weapon/actions/action_flamer_gas_burst.lua#L24-L27)；[準備在前](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/weapon/actions/action_shoot.lua#L290-L314)。

- 持續噴火依每次射擊準備／耗彈週期計數，短噴依每次短噴計數；不按每幀傷害、燃燒層或命中敵人数計數。

## 停火設定

| 用途 | 固定來源 |
|---|---|
| 電弧腰射與繼承 | [電弧腰射與繼承](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/arc_rifle/settings_templates/arc_rifle_spread_templates.lua#L258-L353) |
| 電弧支架與繼承 | [電弧支架與繼承](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/arc_rifle/settings_templates/arc_rifle_spread_templates.lua#L354-L450) |
| 槍托M1腰射 | [槍托M1腰射](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/autoguns/settings_templates/autogun_spread_templates.lua#L1597-L1650) |
| 槍托M2腰射 | [槍托M2腰射](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/autoguns/settings_templates/autogun_spread_templates.lua#L2102-L2155) |
| 槍托M3腰射 | [槍托M3腰射](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/autoguns/settings_templates/autogun_spread_templates.lua#L2532-L2585) |
| 槍托M2支架 | [槍托M2支架](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/autoguns/settings_templates/autogun_spread_templates.lua#L2343-L2397) |
| 槍托M3支架 | [槍托M3支架](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/autoguns/settings_templates/autogun_spread_templates.lua#L2721-L2775) |
| 槍托M1支架採M3模板 | [槍托M1支架採M3模板](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/autoguns/autogun_p2_m1.lua#L668-L675) |
| 自動手槍停火設定與姿勢繼承 | [自動手槍停火設定與姿勢繼承](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/autopistols/settings_templates/autopistol_spread_templates.lua#L9-L205) |
| 雙槍停火設定與姿勢繼承 | [雙槍停火設定與姿勢繼承](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/dual_autopistols/settings_templates/dual_autopistol_spread_templates.lua#L9-L200) |
| 爆矢槍停火設定與姿勢繼承 | [爆矢槍停火設定與姿勢繼承](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/bolters/settings_templates/bolter_spread_templates.lua#L9-L330) |
| 撕裂槍停火設定與姿勢繼承 | [撕裂槍停火設定與姿勢繼承](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/ripperguns/settings_templates/rippergun_spread_templates.lua#L9-L405) |
| 重伐P2 M1腰射 | [重伐P2 M1腰射](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/ogryn_heavystubbers/settings_templates/ogryn_heavystubber_spread_templates.lua#L2078-L2220) |
| 重伐P2 M2腰射 | [重伐P2 M2腰射](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/ogryn_heavystubbers/settings_templates/ogryn_heavystubber_spread_templates.lua#L2338-L2480) |
| 重伐P2 M3腰射 | [重伐P2 M3腰射](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/ogryn_heavystubbers/settings_templates/ogryn_heavystubber_spread_templates.lua#L2485-L2615) |
| 重伐P2 M1瞄準 | [重伐P2 M1瞄準](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/ogryn_heavystubbers/settings_templates/ogryn_heavystubber_spread_templates.lua#L1961-L2073) |
| 重伐P2 M2瞄準 | [重伐P2 M2瞄準](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/ogryn_heavystubbers/settings_templates/ogryn_heavystubber_spread_templates.lua#L2221-L2333) |
| 重伐P2 M3瞄準 | [重伐P2 M3瞄準](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/ogryn_heavystubbers/settings_templates/ogryn_heavystubber_spread_templates.lua#L2616-L2728) |
| 停火fallback與清除 | [停火fallback與清除](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/weapon/player_unit_weapon_extension.lua#L510-L529) |


## 交集外來源候選

- [獵人霰彈槍來源定義](weapon_trait_bespoke_shotgun_p3_toughness_on_continuous_fire.md)：實際模板接入保留，快取缺少對應祝福項目。

- [滅絕者霰彈槍來源定義](weapon_trait_bespoke_shotgun_p4_toughness_on_continuous_fire.md)：實際模板接入保留，快取缺少對應祝福項目。
