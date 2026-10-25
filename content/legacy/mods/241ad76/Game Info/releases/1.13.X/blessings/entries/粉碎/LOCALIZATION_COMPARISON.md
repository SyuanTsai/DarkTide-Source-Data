# 粉碎：本體原文逐規則比較

[玩家說明](README.md)｜[來源索引](SOURCE_INDEX.md)

Steam Build25606770（1.13.1），2026-10-02擷取，資源content/localization/items。名稱鍵`loc_trait_bespoke_chained_hits_increases_crit_chance`／hash`39e910d6`；描述鍵`loc_trait_bespoke_chained_hits_increases_crit_chance_desc`／hash`2ba1113e`。兩語系以同一資源及hash配對並與完整RAW逐值核對；RAW SHA-256 `c0719a6933c4f3d472a569a8ec841df819eb1b1a03d09d83c5cee05a2a861026`。

- 名稱：Shred／粉碎。
- 英文模板：{crit_chance:%s} Bonus Critical Chance on Chained Hit. Stacks {stacks:%s} times.
- 繁中模板：重複攻擊時獲得{crit_chance:%s}額外致命一擊幾率，最多疊加{stacks:%s}次。
- **靜態重建**：第四組crit_chance為+4%，stacks為5；不是遊戲截圖。

| 規則 | 本體／既有文件描述與位置 | 程式行為與檔案／方法／行號 | 比較結果 | 理由 |
|---|---|---|---|---|
| 命中條件 | 描述hash2ba1113e：英文Chained Hit；繁中重複攻擊 | num_hit_units>0；[active_proc_func](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/weapon_traits_buff_templates/base_weapon_trait_buff_templates.lua#L112-L119) | 文件未涵蓋 | 繁中省略命中條件，但未明說揮空也給層；依不完整描述處理。 |
| 首次／多目標 | 模板未列 | 一次揮擊結束加1；[事件](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/buff/buffs/weapon_trait_activated_parent_proc_buff.lua#L49-L76)、[暴擊先判定](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/weapon/actions/action_sweep.lua#L207-L245) | 文件未涵蓋 | 第一擊不受新層加成；多目標不多加層。 |
| 數值與上限 | crit_chance、stacks占位符 | 2.5／3／3.5／4個百分點，5有效層；[trait](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_traits/weapon_traits_bespoke_combataxe_p1.lua#L64-L113) | 一致 | 補值依trait，不取預設50%。 |
| 加算機率 | Bonus Critical Chance | critical_strike_chance相加；[chance](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/attack/critical_strike.lua#L13-L39) | 一致 | 指機率不是傷害。 |
| 期限、滿層與揮空 | 模板未列 | 3.5秒；滿層刷新；空揮清有效層；[事件](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/buff/buffs/weapon_trait_activated_parent_proc_buff.lua#L67-L76)、[期限](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/buff/buffs/weapon_trait_parent_proc_buff.lua#L92-L163) | 文件未涵蓋 | 屬缺省資訊。 |
| 換目標／武器 | 模板未列 | 無同目標判斷；切出停加成期限繼續；[事件](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/buff/buffs/weapon_trait_activated_parent_proc_buff.lua#L49-L76)、[切出](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/weapon/player_unit_weapon_extension.lua#L743-L785) | 文件未涵蓋 | on_equip仍保留。 |
| 可取得等級 | 四組值未證明後端可取得 | 需有效位元；[stickerBook](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/backend/crafting.lua#L62-L89) | 無法確認 | available_tiers=null。 |

未執行遊戲內驗證。MOD只作格式參考，不作名稱、機制或本體原文證據。
