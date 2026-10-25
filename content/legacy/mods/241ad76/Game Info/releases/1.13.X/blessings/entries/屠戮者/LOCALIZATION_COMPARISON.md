# 屠戮者：本體原文逐規則比較

[玩家說明](README.md)｜[來源索引](SOURCE_INDEX.md)

資源`content/localization/items`，Steam Build25606770（1.13.1），擷取日期2026-10-02。名稱鍵`loc_trait_bespoke_chained_hits_increases_power`／hash`77cc5d18`，描述鍵`loc_trait_bespoke_chained_hits_increases_power_desc`／hash`0601688c`；按相同資源與hash配對英文0及繁中16。RAW SHA-256：`c0719a6933c4f3d472a569a8ec841df819eb1b1a03d09d83c5cee05a2a861026`。

- 英文名稱：Decimator；繁中名稱：屠戮者，與詞表一致。
- 英文模板：Continuously chaining more than 2 attacks gives {power_level:%s} Power. Stacks {stacks:%s} times.
- 繁中模板：連續使出兩次以上的重複攻擊會使你的威力提高{power_level:%s}，最多疊加{stacks:%s}次。
- **靜態重建**：第四組的power_level為+5%、stacks為10；僅重建格式參數，未當作遊戲畫面實測。

| 規則 | 本體／既有文件描述與位置 | 程式行為與檔案／方法／行號 | 比較結果 | 理由 |
|---|---|---|---|---|
| 首次疊層門檻 | 上述描述hash：英文more than 2 attacks、繁中兩次以上 | 首次合格揮擊完成即有效1層；[init](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/buff/buffs/weapon_trait_parent_proc_buff.lua#L10-L39)、[update_proc_events](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/buff/buffs/weapon_trait_activated_parent_proc_buff.lua#L49-L76)、[stat_buff_stacking_count](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/buff/buffs/buff.lua#L404-L429) | 明確矛盾 | 固定程式未檢查combo_count；中英都與首層時序有差異。屬文本／程式差異，仍待遊戲內核對，不列繁中錯譯。 |
| 必須命中 | 模板僅寫連續攻擊 | num_hit_units>0；[active_proc_func](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/weapon_traits_buff_templates/base_weapon_trait_buff_templates.lua#L146-L153) | 文件未涵蓋 | 描述未明說命中條件；揮空不能疊層。 |
| 多目標計數 | 模板未說一擊多目標 | 每次on_sweep_finish加1；[update_proc_events](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/buff/buffs/weapon_trait_activated_parent_proc_buff.lua#L61-L72) | 文件未涵蓋 | 命中多名仍只加一層。 |
| 威力種類與等級值 | 模板Power及power_level占位符 | 近戰威力，2／3／4／5%；[trait](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_traits/weapon_traits_bespoke_combataxe_p1.lua#L35-L63) | 一致 | power_level占位符按等級覆寫，未宣稱最終傷害。 |
| 上限10層 | 模板stacks占位符 | 程式最大10有效層、內部11；[max stacks](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/buff/buffs/weapon_trait_activated_parent_proc_buff.lua#L67-L72)、[offset](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/buff/buffs/buff.lua#L404-L429) | 一致 | 顯示及屬性有效上限一致，不能把內部占位層多算。 |
| 持續、滿層刷新與揮空 | 模板未列 | 共同2秒；滿層加0仍刷新；揮空移除有效層；[事件](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/buff/buffs/weapon_trait_activated_parent_proc_buff.lua#L67-L76)、[刷新與到期](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/buff/buffs/weapon_trait_parent_proc_buff.lua#L92-L163) | 文件未涵蓋 | 缺少細節不列錯譯。 |
| 目標與武器切換 | 模板未列 | 不比較目標；離開武器停止加成而倒數繼續；[事件](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/buff/buffs/weapon_trait_activated_parent_proc_buff.lua#L49-L76)、[持用條件](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/helper_functions/conditional_functions.lua#L43-L59) | 文件未涵蓋 | 未宣稱切換即清層，也無同目標限制。 |
| 可取得等級 | 模板與四組值未證明可取得 | 需後端有效位元，現有證據缺少；[stickerBook](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/backend/crafting.lua#L62-L89) | 無法確認 | available_tiers保持null。 |
| 實際遊戲首次顯示與生效 | 無同條件遊戲內畫面或測試 | 靜態執行鏈如上，未實際執行遊戲 | 無法確認 | 不將靜態重建冒充遊戲實測，不因中英都有文字差異就宣稱繁中翻譯錯誤。 |

MOD文字只作格式參考。本頁正文按照固定程式描述，不使用MOD作機制證據。
