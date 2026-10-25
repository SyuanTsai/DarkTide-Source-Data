# 屠戮者(Decimator)：戰鬥斧實作

[玩家說明](README.md)｜[來源索引](SOURCE_INDEX.md)｜[型號對應](WEAPON_COMPATIBILITY.md)

- 固定來源：Release 1.13.1，`7e662fcda16219d775b84af50322be2e9cd9d62e`。
- 實作：`weapon_trait_bespoke_combataxe_p1_chained_hits_increases_power`；MasterItems類別：`bespoke_combataxe_p1`。項目快取138291的Build歸屬未確認。
- [trait 定義](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_traits/weapon_traits_bespoke_combataxe_p1.lua#L10-L63) → [Buff 接入](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/weapon_traits_buff_templates/weapon_traits_bespoke_combataxe_p1_buff_templates.lua#L16-L18) → [共用觸發](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/weapon_traits_buff_templates/base_weapon_trait_buff_templates.lua#L132-L165) → [啟用類別](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/buff/buffs/weapon_trait_activated_parent_proc_buff.lua#L49-L76)。

## 原始碼確認

揮擊完成時只檢查命中計數大於零，不檢查連段次數。父層初始化建立一個占位子層，屬性層數偏移−1；第一次合格揮擊完成後是兩個內部子層、一個有效層。每次合格事件只加一層，多目標不額外加層；屬性在揮擊後更新，新增加成供後續攻擊使用。[起始層](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/buff/buffs/weapon_trait_parent_proc_buff.lua#L10-L39)、[有效層](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/buff/buffs/buff.lua#L404-L429)、[揮擊事件](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/weapon/actions/action_sweep.lua#L944-L961)。

父層與子層以trait等級覆寫取得每層2／3／4／5%，同一屬性按有效層數加算。內部最多11層、有效最多10層，第四組滿層為50%。[覆寫繼承](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/buff/buffs/buff.lua#L145-L221)、[屬性加算](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/buff/buffs/buff.lua#L689-L747)。

每次合格命中呼叫加層函式；已滿層時新增0層仍重新設定共同2秒期限。揮空移除至剩一個占位層；超過期限的更新一次移除最多10層。切換離開此武器只停止條件屬性與觸發，沒有立即清層分支；期限繼續經過，期限內切回仍可能保留層數。更換攻擊目標不重置，因為沒有儲存或比較目標身分。[事件分支](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/buff/buffs/weapon_trait_activated_parent_proc_buff.lua#L49-L76)、[期限與刷新](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/buff/buffs/weapon_trait_parent_proc_buff.lua#L92-L163)、[持用條件](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/helper_functions/conditional_functions.lua#L43-L59)。

## 程式推導與限制

公式為`P × (1 + s + n × v)`，P為該威力曲線階段輸入，s為既有同階段加成，n為有效層數，v為等級單層加成。假設P=500、s=0、第四組v=.05、n=10，`500 × 1.50 = 750 威力`；s=.25時由625變875，新增收益40%。傷害、順劈容量及踉蹌仍經各自曲線與攻擊設定，不宣稱最終傷害固定增加50%。[威力結算](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/attack/power_level.lua#L25-L91)。

此為固定程式的靜態推導，未遊戲內驗證。可取得等級保持null；其他同名武器不套用本變體的數值。本體中英文字的「兩次以上」與此路徑不同，詳見[原文比較](LOCALIZATION_COMPARISON.md)。

## 配裝與持用生命週期

trait Buff固定歸入on_equip，而切出只移除on_wield；切換持用不等同從配裝卸除武器。[trait分類](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/weapon/utilities/weapon_tweak_templates.lua#L168-L211)、[裝備與卸裝](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/weapon/player_unit_weapon_extension.lua#L633-L661)、[切出](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/weapon/player_unit_weapon_extension.lua#L743-L785)。
