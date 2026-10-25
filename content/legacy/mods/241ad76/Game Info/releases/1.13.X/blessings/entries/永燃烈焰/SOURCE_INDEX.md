# 永燃烈焰：來源與公式

[玩家說明](README.md)｜[來源索引](SOURCE_INDEX.md)｜[武器對應](WEAPON_COMPATIBILITY.md)｜[等級](TIER_VALUES.md)｜[原文比較](LOCALIZATION_COMPARISON.md)｜[百分比檢核](DAMAGE_PERCENTAGE_REVIEW.md)

- Release1.13.1，固定SHA `7e662fcda16219d775b84af50322be2e9cd9d62e`；機制只依公開Darktide-Source-Code。

- [共用來源邊界](../../SOURCE_INDEX.md)記錄MasterItems快取、完整語系RAW及後端欄位狀態。

| 用途 | 固定原始碼 |
|---|---|
| 火焰實作clone | [火焰實作clone](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/weapon_traits_buff_templates/weapon_traits_bespoke_flamer_p1_buff_templates.lua#L60) |
| 共享暴擊補彈 | [共享暴擊補彈](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/weapon_traits_buff_templates/base_weapon_trait_buff_templates.lua#L2970-L3000) |
| 新暴擊判定事件 | [新暴擊判定事件](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/weapon/actions/action_weapon_base.lua#L148-L184) |
| 事件排入佇列 | [事件排入佇列](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/buff/buff_extension_base.lua#L982-L992) |
| 處理事件與客端預測 | [處理事件與客端預測](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/buff/buff_extension_base.lua#L233-L261) |
| 持用條件 | [持用條件](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/helper_functions/conditional_functions.lua#L43-L59) |
| 無冷卻的啟動規則 | [無冷卻的啟動規則](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/buff/buffs/proc_buff.lua#L173-L195) |
| 火焰動作與耗料 | [火焰動作與耗料](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/flamers/flamer_p1_m1.lua#L224-L301) |
| 點射判定暴擊 | [點射判定暴擊](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/weapon/actions/action_shoot.lua#L149-L174) |
| 連噴準備判定 | [連噴準備判定](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/weapon/actions/action_shoot.lua#L610-L615) |
| 連噴暴擊延續 | [連噴暴擊延續](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/weapon/actions/action_shoot.lua#L997-L1068) |
| 火焰連噴三次暴擊 | [火焰連噴三次暴擊](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_handling_templates/weapon_handling_templates.lua#L291-L336) |
| 射擊消耗 | [射擊消耗](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/weapon/actions/action_shoot.lua#L481-L560) |
| 連噴命中與射擊事件不同 | [連噴命中與射擊事件不同](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/weapon/actions/action_flamer_gas.lua#L396-L423) |
| Buff固定更新 | [Buff固定更新](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/buff/player_unit_buff_extension.lua#L131-L144) |
| 系統依配置加入 | [系統依配置加入](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/foundation/managers/extension/extension_system_holder.lua#L58-L104) |
| 按排序執行系統 | [按排序執行系統](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/foundation/managers/extension/extension_system_holder.lua#L160-L171) |
| Buff系統順序 | [Buff系統順序](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/extension_system_configuration.lua#L308-L322) |
| 角色動作系統順序 | [角色動作系統順序](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/extension_system_configuration.lua#L396-L407) |
| 當次射擊耗料順序 | [當次射擊耗料順序](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/weapon/actions/action_shoot.lua#L277-L346) |
| 連噴一射擊後轉等待 | [連噴一射擊後轉等待](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/weapon/actions/action_shoot.lua#L356-L373) |
| 實際UI型號組名 | [實際UI型號組名](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/items.lua#L315-L327) |
| UI名稱欄位讀取 | [UI名稱欄位讀取](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/items.lua#L378-L426) |

## 執行與計算

- Flamer wrapper clone move_ammo_from_reserve_to_clip_on_crit；trait逐級覆寫num_ammmo_to_move=2/3/4/5，保留原始三個m的鍵名。[火焰實作clone](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/weapon_traits_buff_templates/weapon_traits_bespoke_flamer_p1_buff_templates.lua#L60-L60)、[共享暴擊補彈](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/weapon_traits_buff_templates/base_weapon_trait_buff_templates.lua#L2970-L3000)。

- 共用ProcBuff監聽on_critical_strike=1，conditional_proc_func要求本slot持用；沒有attack_type、命中、擊殺、冷卻、active_duration或疊層條件。[共享暴擊補彈](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/weapon_traits_buff_templates/base_weapon_trait_buff_templates.lua#L2970-L3000)、[持用條件](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/helper_functions/conditional_functions.lua#L43-L59)、[無冷卻的啟動規則](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/buff/buffs/proc_buff.lua#L173-L195)。

- ActionWeaponBase新的暴擊判定成功才排on_critical_strike，尚不需要hit result；add_proc_event把事件存入佇列，Buff固定更新才處理。force_predicted_proc讓客端也可處理，不代表事件當場執行。[新暴擊判定事件](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/weapon/actions/action_weapon_base.lua#L148-L184)、[事件排入佇列](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/buff/buff_extension_base.lua#L982-L992)、[處理事件與客端預測](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/buff/buff_extension_base.lua#L233-L261)、[Buff固定更新](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/buff/player_unit_buff_extension.lua#L131-L144)。

- proc處理當下讀clip C、max M、reserve R，用T=min(N,M−C,R)，設clip=C+T、reserve=R−T。不是把武器的ammo source改成reserve，不走免費transfer；原本ammo_usage仍是1。[共享暴擊補彈](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/weapon_traits_buff_templates/base_weapon_trait_buff_templates.lua#L2970-L3000)、[火焰動作與耗料](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/flamers/flamer_p1_m1.lua#L224-L301)、[射擊消耗](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/weapon/actions/action_shoot.lua#L481-L560)。

- burst非auto在ActionShoot.start判暴擊；auto每個prepare_shooting呼叫_check_for_auto_critical_strike，成功後num_critical_shots最多3，沿用暴擊的後續準備只增加count，不重發on_critical_strike。[點射判定暴擊](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/weapon/actions/action_shoot.lua#L149-L174)、[連噴準備判定](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/weapon/actions/action_shoot.lua#L610-L615)、[連噴暴擊延續](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/weapon/actions/action_shoot.lua#L997-L1068)、[火焰連噴三次暴擊](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_handling_templates/weapon_handling_templates.lua#L291-L336)。

- Flamer連噴對敵人傷害與on_shoot事件不同於新暴擊判定，不能按target count或DoT stack tick觸發本祝福。[連噴命中與射擊事件不同](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/weapon/actions/action_flamer_gas.lua#L396-L423)。

- 系統按配置順序加入fixed_update list，buff_system早於角色動作系統。補入計算採proc處理時snapshot，不把排事件瞬間與燃料消耗瞬間合併成一刻。[系統依配置加入](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/foundation/managers/extension/extension_system_holder.lua#L58-L104)、[按排序執行系統](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/foundation/managers/extension/extension_system_holder.lua#L160-L171)、[Buff系統順序](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/extension_system_configuration.lua#L308-L322)、[角色動作系統順序](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/extension_system_configuration.lua#L396-L407)。

- 固定更新順序的靜態推導：burst在start排暴擊事件，fire_time=.1使proc先處理、該發稍後耗料；auto在prepare排事件，同pass完成射擊並耗料，下一Buff固定更新處理補入。滿箱burst該筆T0後耗1；滿箱auto先耗1後T1（備彈至少1）。此為固定原始碼推導，未作遊戲實測。

- 設等級N=2/3/4/5，在proc實際處理時燃料箱容量M、目前燃料C、備彈R，轉移T=min(N,M−C,R)。結果C′=C+T、R′=R−T，C′+R′=C+R。

- 容量40、C20、R60、IV時T5，C′25、R′55，總量仍80；C39時T1；R2時T2；當下C=M或R0時T0。

- 後續正常每一射擊事件ammo_usage=1；轉移與耗料是不同操作。不能把N當免耗燃料的暴擊發數，也不能把每個目標或每跳燃燒傷害算一筆N。

- 一次新的auto crit decision成功可延續三次暴擊射擊，只排一筆觸發；若該筆補滿5且三次正常射擊各耗1，整段轉移5、正常耗3，總燃料減3，燃料箱淨量仍取決於當時缺額與操作順序。

- 滿箱M=C=40、R60、IV：burst proc T0，後續耗1→C39/R60；auto當次先耗1→C39，下一proc T=min(5,1,60)=1→C40/R59；其後兩次沿用暴擊各耗1而不再轉入→C38/R59。

## 圖示

- item.icon：`content/ui/textures/icons/traits/weapon_trait_159`。

- [原圖](https://gameslantern.com/storage/sites/darktide/exporter/content/ui/textures/icons/traits/weapon_trait_159.png)｜[Issue附件](https://github.com/user-attachments/assets/4a057aec-b5c7-4d9c-8399-a70094eb498a)；圖示只作辨識。

## 其他武器變體

| 用途 | 固定原始碼 |
|---|---|
| 淨化噴火器等級覆寫 | [淨化噴火器等級覆寫](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_traits/weapon_traits_bespoke_flamer_p1.lua#L279-L308) |
| 淨化噴火器Buff接入 | [淨化噴火器Buff接入](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/weapon_traits_buff_templates/weapon_traits_bespoke_flamer_p1_buff_templates.lua#L60) |
| UI 淨化噴火器 | [UI 淨化噴火器](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ui/ui_weapon_pattern_settings.lua#L792) |
| 淨化噴火器 奧特米亞 Mk III匯入 | [淨化噴火器 奧特米亞 Mk III匯入](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/flamers/flamer_p1_m1.lua#L14) |
| 淨化噴火器 奧特米亞 Mk III接入 | [淨化噴火器 奧特米亞 Mk III接入](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/flamers/flamer_p1_m1.lua#L745-L747) |
