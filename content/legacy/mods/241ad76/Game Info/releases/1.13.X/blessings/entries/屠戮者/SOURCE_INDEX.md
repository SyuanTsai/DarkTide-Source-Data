# 屠戮者：來源與公式索引

[玩家說明](README.md)｜[武器對應](WEAPON_COMPATIBILITY.md)｜[等級](TIER_VALUES.md)｜[原文比較](LOCALIZATION_COMPARISON.md)｜[百分比檢核](DAMAGE_PERCENTAGE_REVIEW.md)

固定版本Release 1.13.1，`7e662fcda16219d775b84af50322be2e9cd9d62e`。機制只依Aussiemon/Darktide-Source-Code；以下結論是原始碼確認及靜態推導，未進行遊戲內測試。

| 來源用途 | 固定Git物件與行號 |
|---|---|
| 有效觸發與共同期限 | [scripts/settings/buff/weapon_traits_buff_templates/base_weapon_trait_buff_templates.lua](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/weapon_traits_buff_templates/base_weapon_trait_buff_templates.lua#L132-L165) |
| 起始占位層 | [scripts/extension_systems/buff/buffs/weapon_trait_parent_proc_buff.lua](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/buff/buffs/weapon_trait_parent_proc_buff.lua#L10-L39) |
| 事件與滿層刷新 | [scripts/extension_systems/buff/buffs/weapon_trait_activated_parent_proc_buff.lua](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/buff/buffs/weapon_trait_activated_parent_proc_buff.lua#L49-L76) |
| 期限移除與刷新 | [scripts/extension_systems/buff/buffs/weapon_trait_parent_proc_buff.lua](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/buff/buffs/weapon_trait_parent_proc_buff.lua#L92-L163) |
| 等級覆寫與子層繼承 | [scripts/extension_systems/buff/buffs/buff.lua](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/buff/buffs/buff.lua#L145-L221) |
| 有效層數與偏移 | [scripts/extension_systems/buff/buffs/buff.lua](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/buff/buffs/buff.lua#L404-L429) |
| 層數加算與條件屬性 | [scripts/extension_systems/buff/buffs/buff.lua](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/buff/buffs/buff.lua#L689-L747) |
| 持用條件 | [scripts/settings/buff/helper_functions/conditional_functions.lua](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/helper_functions/conditional_functions.lua#L43-L59) |
| 命中計數與揮擊完成 | [scripts/extension_systems/weapon/actions/action_sweep.lua](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/weapon/actions/action_sweep.lua#L944-L961) |
| 角色命中計數條件 | [scripts/extension_systems/weapon/actions/action_sweep.lua](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/weapon/actions/action_sweep.lua#L1330-L1358) |
| 角色計數寫回 | [scripts/extension_systems/weapon/actions/action_sweep.lua](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/weapon/actions/action_sweep.lua#L1416-L1428) |
| 威力加算與曲線 | [scripts/utilities/attack/power_level.lua](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/attack/power_level.lua#L25-L91) |
| 傷害輸出 | [scripts/utilities/attack/damage_calculation.lua](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/attack/damage_calculation.lua#L219-L227) |
| 威力分配與順劈 | [scripts/utilities/attack/damage_profile.lua](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/attack/damage_profile.lua#L29-L57) |
| 踉蹌強度 | [scripts/utilities/attack/stagger_calculation.lua](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/attack/stagger_calculation.lua#L67-L89) |
| 可取得等級有效位元 | [scripts/backend/crafting.lua](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/backend/crafting.lua#L62-L89) |
| UI invalid 過濾 | [scripts/ui/view_elements/view_element_trait_inventory/view_element_trait_inventory.lua](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/ui/view_elements/view_element_trait_inventory/view_element_trait_inventory.lua#L456-L469) |
| 戰鬥斧等級定義 | [scripts/settings/equipment/weapon_traits/weapon_traits_bespoke_combataxe_p1.lua](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_traits/weapon_traits_bespoke_combataxe_p1.lua#L10-L63) |
| 戰鬥斧Buff 接入 | [scripts/settings/buff/weapon_traits_buff_templates/weapon_traits_bespoke_combataxe_p1_buff_templates.lua](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/weapon_traits_buff_templates/weapon_traits_bespoke_combataxe_p1_buff_templates.lua#L16-L18) |
| 戰鬥斧 拉沙德 Mk III模板匯入 | [scripts/settings/equipment/weapon_templates/combat_axes/combataxe_p1_m1.lua](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/combat_axes/combataxe_p1_m1.lua#L14-L14) |
| 戰鬥斧 拉沙德 Mk IIItrait 清單接入 | [scripts/settings/equipment/weapon_templates/combat_axes/combataxe_p1_m1.lua](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/combat_axes/combataxe_p1_m1.lua#L1270-L1272) |
| 戰鬥斧 安塔克斯 Mk V模板匯入 | [scripts/settings/equipment/weapon_templates/combat_axes/combataxe_p1_m2.lua](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/combat_axes/combataxe_p1_m2.lua#L14-L14) |
| 戰鬥斧 安塔克斯 Mk Vtrait 清單接入 | [scripts/settings/equipment/weapon_templates/combat_axes/combataxe_p1_m2.lua](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/combat_axes/combataxe_p1_m2.lua#L1225-L1227) |
| 戰鬥斧 阿克利斯 Mk VIII模板匯入 | [scripts/settings/equipment/weapon_templates/combat_axes/combataxe_p1_m3.lua](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/combat_axes/combataxe_p1_m3.lua#L15-L15) |
| 戰鬥斧 阿克利斯 Mk VIIItrait 清單接入 | [scripts/settings/equipment/weapon_templates/combat_axes/combataxe_p1_m3.lua](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/combat_axes/combataxe_p1_m3.lua#L1530-L1532) |
| 戰術斧等級定義 | [scripts/settings/equipment/weapon_traits/weapon_traits_bespoke_combataxe_p2.lua](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_traits/weapon_traits_bespoke_combataxe_p2.lua#L70-L123) |
| 戰術斧Buff 接入 | [scripts/settings/buff/weapon_traits_buff_templates/weapon_traits_bespoke_combataxe_p2_buff_templates.lua](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/weapon_traits_buff_templates/weapon_traits_bespoke_combataxe_p2_buff_templates.lua#L11-L13) |
| 埃托克斯Mk II戰術斧模板匯入 | [scripts/settings/equipment/weapon_templates/combat_axes/combataxe_p2_m1.lua](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/combat_axes/combataxe_p2_m1.lua#L13-L13) |
| 埃托克斯Mk II戰術斧trait 清單接入 | [scripts/settings/equipment/weapon_templates/combat_axes/combataxe_p2_m1.lua](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/combat_axes/combataxe_p2_m1.lua#L1450-L1452) |
| 埃托克斯Mk IV戰術斧模板匯入 | [scripts/settings/equipment/weapon_templates/combat_axes/combataxe_p2_m2.lua](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/combat_axes/combataxe_p2_m2.lua#L13-L13) |
| 埃托克斯Mk IV戰術斧trait 清單接入 | [scripts/settings/equipment/weapon_templates/combat_axes/combataxe_p2_m2.lua](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/combat_axes/combataxe_p2_m2.lua#L1491-L1493) |
| 埃托克斯Mk VII戰術斧模板匯入 | [scripts/settings/equipment/weapon_templates/combat_axes/combataxe_p2_m3.lua](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/combat_axes/combataxe_p2_m3.lua#L13-L13) |
| 埃托克斯Mk VII戰術斧trait 清單接入 | [scripts/settings/equipment/weapon_templates/combat_axes/combataxe_p2_m3.lua](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/combat_axes/combataxe_p2_m3.lua#L1358-L1360) |

## 分層解讀

觸發條件由揮擊事件及啟用類別決定；等級覆寫由實際裝備的trait決定；子Buff用偏移層數及持用條件更新近戰威力。同一威力階段加算後，傷害、順劈與踉蹌各自結算。不得以format_values或Buff預設值取代此執行鏈。

## 圖示

[原圖](https://gameslantern.com/storage/sites/darktide/exporter/content/ui/textures/icons/traits/weapon_trait_187.png)｜[Media-Assets Issue #14](https://github.com/SyuanTsai/Media-Assets/issues/14)｜[實際附件](https://github.com/user-attachments/assets/646a2076-d80d-4594-a07c-90f95e230e80)。item.icon為`content/ui/textures/icons/traits/weapon_trait_187`；僅作辨識，不作機制證據。

## 武器切換的生命週期

- [裝備trait抽取](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/weapon/weapon.lua#L68-L82)。
- [trait固定on_equip](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/weapon/utilities/weapon_tweak_templates.lua#L168-L211)。
- [裝備新增與卸裝移除](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/weapon/player_unit_weapon_extension.lua#L633-L661)。
- [切出只移除on_wield](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/weapon/player_unit_weapon_extension.lua#L743-L785)。

trait父Buff歸入on_equip，在切出時保留；從配裝卸除武器才移除。子層的持用條件與共同期限因此可支持期限內切回沿用層數。


## 其他武器變體

| 用途 | 固定原始碼 |
|---|---|
| 工兵鏟等級覆寫 | [工兵鏟等級覆寫](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_traits/weapon_traits_bespoke_combataxe_p3.lua#L10-L63) |
| 工兵鏟Buff接入 | [工兵鏟Buff接入](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/weapon_traits_buff_templates/weapon_traits_bespoke_combataxe_p3_buff_templates.lua#L14-L16) |
| UI 工兵鏟 | [UI 工兵鏟](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ui/ui_weapon_pattern_settings.lua#L104) |
| 軍務部標配工兵鏟匯入 | [軍務部標配工兵鏟匯入](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/combat_axes/combataxe_p3_m1.lua#L15) |
| 軍務部標配工兵鏟接入 | [軍務部標配工兵鏟接入](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/combat_axes/combataxe_p3_m1.lua#L1183-L1185) |
| 軍務部Mk III工兵鏟匯入 | [軍務部Mk III工兵鏟匯入](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/combat_axes/combataxe_p3_m2.lua#L15) |
| 軍務部Mk III工兵鏟接入 | [軍務部Mk III工兵鏟接入](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/combat_axes/combataxe_p3_m2.lua#L1685-L1687) |
| 軍務部Mk VII工兵鏟匯入 | [軍務部Mk VII工兵鏟匯入](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/combat_axes/combataxe_p3_m3.lua#L15) |
| 軍務部Mk VII工兵鏟接入 | [軍務部Mk VII工兵鏟接入](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/combat_axes/combataxe_p3_m3.lua#L1689-L1691) |
| 骨鋸等級覆寫 | [骨鋸等級覆寫](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_traits/weapon_traits_bespoke_saw_p1.lua#L10-L63) |
| 骨鋸Buff接入 | [骨鋸Buff接入](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/weapon_traits_buff_templates/weapon_traits_bespoke_saw_p1_buff_templates.lua#L13-L15) |
| UI 骨鋸 | [UI 骨鋸](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ui/ui_weapon_pattern_settings.lua#L565) |
| 外科醫師Mk IV骨鋸匯入 | [外科醫師Mk IV骨鋸匯入](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/saws/saw_p1_m1.lua#L14) |
| 外科醫師Mk IV骨鋸接入 | [外科醫師Mk IV骨鋸接入](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/saws/saw_p1_m1.lua#L1833-L1835) |
