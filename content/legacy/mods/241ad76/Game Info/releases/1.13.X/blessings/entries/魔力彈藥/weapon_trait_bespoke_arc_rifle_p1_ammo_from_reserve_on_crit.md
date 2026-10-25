# 魔力彈藥(Charmed Reload)：電弧步槍實作

[玩家說明](README.md)｜[來源索引](SOURCE_INDEX.md)｜[型號對應](WEAPON_COMPATIBILITY.md)

- 實作：`weapon_trait_bespoke_arc_rifle_p1_ammo_from_reserve_on_crit`。
- 等級覆寫：[trait](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_traits/weapon_traits_bespoke_arc_rifle_p1.lua#L156-L189)。
- Buff接入：[繼承與覆寫](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/weapon_traits_buff_templates/weapon_traits_bespoke_arc_rifle_p1_buff_templates.lua#L27)。
- 適用型號：電弧步槍 布蘭克斯 Mk IV。

## 機制與公式

- 持用時監聽新的`on_critical_strike`；新暴擊判定成功即入列，不要求命中。[暴擊事件](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/weapon/actions/action_weapon_base.lua#L148-L184)。

- 等級轉移量N依本變體覆寫；在proc實際讀取時，以`a=min(N,M−C,R)`轉移，`C′=C+a`、`R′=R−a`，總量守恆。[備彈轉移](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/weapon_traits_buff_templates/base_weapon_trait_buff_templates.lua#L2970-L3000)。

- 延續中的既有暴擊只增加num_critical_shots，不重新發送判定成功事件；沒有獨立冷卻、疊層或持續時間。[自動射擊判定](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/weapon/actions/action_shoot.lua#L997-L1068)。

- I–IV每次新暴擊判定最多轉移1發；共同公式仍受彈匣缺額與備彈限制。

- hip／braced處理模板max_critical_shots均1。[電弧射擊設定](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_handling_templates/weapon_handling_templates.lua#L656-L685)。

- 連鎖沿用當時的is_active暴擊狀態，直接呼叫Attack，沒有重新執行ActionWeaponBase的暴擊判定；命中多個連鎖目標不額外觸發轉移。[連鎖傷害](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/weapon/actions/utilities/chain_lightning_action.lua#L258-L282)；[Attack接入](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/action/chain_lightning.lua#L500-L510)。

- 四級top-level `reload_speed=.06/.09/.12/.15`不在stat_buffs或conditional_stat_buffs內；共用proc只讀num_ammmo_to_move，沒有使用這個欄位。[轉移欄位讀取](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/weapon_traits_buff_templates/base_weapon_trait_buff_templates.lua#L2985-L2998)；[Buff stat接入](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/buff/buffs/buff.lua#L695-L747)。

- 因此該欄位完整保留為來源紀錄，不列成玩家換彈速度加成。

- 數值：`{"unit": "每次新暴擊事件轉移發數", "bullets": [1, 1, 1, 1], "source": "reserve", "destination": "total_active_clips", "max_critical_shots": 1, "cooldown_seconds": null}`。
- 結算與算例：[百分比檢核](DAMAGE_PERCENTAGE_REVIEW.md)。
- 原文比較：[同一名稱與描述鍵](LOCALIZATION_COMPARISON.md)。
