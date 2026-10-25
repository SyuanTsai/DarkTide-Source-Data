# 猛攻：來源與公式

[玩家說明](README.md)｜[來源索引](SOURCE_INDEX.md)｜[武器對應](WEAPON_COMPATIBILITY.md)｜[等級](TIER_VALUES.md)｜[原文比較](LOCALIZATION_COMPARISON.md)｜[百分比檢核](DAMAGE_PERCENTAGE_REVIEW.md)

- Release1.13.1，固定SHA `7e662fcda16219d775b84af50322be2e9cd9d62e`；機制只依公開Darktide-Source-Code。
- [共用來源邊界](../../SOURCE_INDEX.md)記錄MasterItems快取、完整語系RAW及後端欄位狀態。

| 用途 | 固定原始碼 |
|---|---|
| Own tiers and RAW formatter | [Own tiers and RAW formatter](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_traits/weapon_traits_bespoke_lasgun_p2.lua#L258-L300) |
| Own complete wrapper | [Own complete wrapper](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/weapon_traits_buff_templates/weapon_traits_bespoke_lasgun_p2_buff_templates.lua#L17-L58) |
| Stepped stat count and optional table | [Stepped stat count and optional table](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/buff/buffs/stepped_stat_buff.lua#L10-L79) |
| Conditional stat override and aggregation | [Conditional stat override and aggregation](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/buff/buffs/buff.lua#L689-L747) |
| Effective buff stack offset | [Effective buff stack offset](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/buff/buffs/buff.lua#L404-L410) |
| Charge duration additive stat type | [Charge duration additive stat type](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/buff_settings.lua#L723-L725) |
| Additive multiplier baseline | [Additive multiplier baseline](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/buff_settings.lua#L1047-L1057) |
| Charge module cached duration consumer | [Charge module cached duration consumer](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/weapon/actions/modules/charge_action_module.lua#L28-L88) |
| Charge action initialization and reset | [Charge action initialization and reset](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/weapon/actions/action_charge.lua#L26-L88) |
| Action handler idle reset update | [Action handler idle reset update](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/action/action_handler.lua#L137-L167) |
| Action handler action start order | [Action handler action start order](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/action/action_handler.lua#L256-L331) |
| Action handler combo update | [Action handler combo update](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/action/action_handler.lua#L494-L512) |
| Action handler idle reset window | [Action handler idle reset window](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/action/action_handler.lua#L1149-L1161) |
| Action combo kinds | [Action combo kinds](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/action/action_handler_settings.lua#L48-L57) |
| Action availability combo flags | [Action availability combo flags](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/weapon/utilities/action_availability.lua#L100-L128) |
| Shared player weapon-action combo component | [Shared player weapon-action combo component](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/unit_data/player_unit_data_component_config.lua#L800-L808) |
| Generated wield chain | [Generated wield chain](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/base_template_settings.lua#L341-L365) |
| Mark-specific charge templates | [Mark-specific charge templates](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_handling_templates/weapon_charge_templates.lua#L4-L32) |
| Mk IIIa hip charge and charged shot | [Mk IIIa hip charge and charged shot](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/lasguns/lasgun_p2_m1.lua#L328-L419) |
| Mk IIIa ADS charge and charged shot | [Mk IIIa ADS charge and charged shot](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/lasguns/lasgun_p2_m1.lua#L522-L620) |
| Mk IIIa aim reload and mode transitions | [Mk IIIa aim reload and mode transitions](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/lasguns/lasgun_p2_m1.lua#L712-L840) |
| Mk IIIa stab special and return | [Mk IIIa stab special and return](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/lasguns/lasgun_p2_m1.lua#L848-L974) |
| Mk IIIa heavy stab and return | [Mk IIIa heavy stab and return](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/lasguns/lasgun_p2_m1.lua#L997-L1068) |
| Mk V hip charge and charged shot | [Mk V hip charge and charged shot](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/lasguns/lasgun_p2_m2.lua#L328-L419) |
| Mk V ADS charge and charged shot | [Mk V ADS charge and charged shot](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/lasguns/lasgun_p2_m2.lua#L522-L620) |
| Mk V aim reload and mode transitions | [Mk V aim reload and mode transitions](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/lasguns/lasgun_p2_m2.lua#L712-L840) |
| Mk V stab special and return | [Mk V stab special and return](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/lasguns/lasgun_p2_m2.lua#L848-L974) |
| Mk V heavy stab and return | [Mk V heavy stab and return](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/lasguns/lasgun_p2_m2.lua#L997-L1068) |
| Mk IV hip charge and charged shot | [Mk IV hip charge and charged shot](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/lasguns/lasgun_p2_m3.lua#L338-L429) |
| Mk IV ADS charge and charged shot | [Mk IV ADS charge and charged shot](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/lasguns/lasgun_p2_m3.lua#L532-L630) |
| Mk IV aim reload and mode transitions | [Mk IV aim reload and mode transitions](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/lasguns/lasgun_p2_m3.lua#L724-L850) |
| Mk IV slash special and return | [Mk IV slash special and return](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/lasguns/lasgun_p2_m3.lua#L857-L990) |
| Trait percentage formatter | [Trait percentage formatter](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/trait_value_parser.lua#L8-L21) |
| Trait tier override lookup | [Trait tier override lookup](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/trait_value_parser.lua#L43-L56) |
| Description formatter caller and affixes | [Description formatter caller and affixes](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/trait_value_parser.lua#L65-L115) |
| Trait number precision and signed formatting | [Trait number precision and signed formatting](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/trait_value_parser.lua#L189-L228) |
| Mk IIIa trait-category import | [Mk IIIa trait-category import](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/lasguns/lasgun_p2_m1.lua#L15) |
| Mk IIIa trait-list append | [Mk IIIa trait-list append](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/lasguns/lasgun_p2_m1.lua#L1333-L1335) |
| Mk V trait-category import | [Mk V trait-category import](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/lasguns/lasgun_p2_m2.lua#L15) |
| Mk V trait-list append | [Mk V trait-list append](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/lasguns/lasgun_p2_m2.lua#L1327-L1329) |
| Mk IV trait-category import | [Mk IV trait-category import](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/lasguns/lasgun_p2_m3.lua#L15) |
| Mk IV trait-list append | [Mk IV trait-list append](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/lasguns/lasgun_p2_m3.lua#L1244-L1246) |
| Generic unwield action kind | [Generic unwield action kind](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/base_template_settings.lua#L110-L120) |
| 型號蓄力模板插值端點 | [型號蓄力模板插值端點](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_handling_templates/weapon_charge_templates.lua#L4-L33) |
| 武器屬性建立運行模板 | [武器屬性建立運行模板](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/weapon/weapon.lua#L68-L78) |
| 模板屬性插值 | [模板屬性插值](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/weapon/utilities/weapon_tweak_templates.lua#L371-L402) |
| 持用武器運行模板 | [持用武器運行模板](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/weapon/player_unit_weapon_extension.lua#L1539-L1551) |
| 蓄力模板取得 | [蓄力模板取得](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/weapon/player_unit_weapon_extension.lua#L1633-L1641) |
| 實際UI型號組名 | [實際UI型號組名](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/items.lua#L315-L327) |
| UI名稱欄位讀取 | [UI名稱欄位讀取](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/items.lua#L378-L426) |

## 執行與計算

- 本項只有一個 bespoke trait 實作，實際接到 `lasgun_p2` 三個型號的 trait list。Own tier 在 `stat_buffs.charge_up_time` 寫入負向值；wrapper 是直接定義而非 clone，且把同一 key 的 `conditional_stat_buffs` fallback 設為 −0.04。

- Wrapper 以玩家 `weapon_action` component 的共享 `combo_count` 作 bonus step。它先檢查目前動作名稱是否在自己的射擊／蓄力白名單，再對計數 `math.round` 並限制 0–5；不符合動作名稱時回傳 0。持用槽條件同時控制 stepped stat 與一般條件 stat。

- `stepped_stat_buff` 將 base effective count 與 bonus step 合併；本 wrapper 的 `max_stacks=1` 和 `stack_offset=-1` 令 base count 為 0。Own tier 覆寫同名 `charge_up_time` fallback；沒有額外 `stepped_stat_buffs` 表，因此不會再加第二份逐步數值。此為持續計算的 stat buff，沒有獨立命中 proc、冷卻或效果 TTL。

- ActionHandler 在 action start 後依 action kind 更新 combo：本型號的 `shoot_hit_scan` 射擊動作增加計數，`charge_ammo` 蓄力動作保留計數。這解釋了為何從閒置首發開始仍是 0、而接續下一次蓄力才可讀取射擊後的連段值；事件鏈沒有本祝福專屬命中／擊殺觸發器。

- ChargeActionModule 透過 BuffExtension 讀已計算的 `stat_buffs.charge_up_time`，並乘上對應 Mark charge template 的 charge duration；它在 `fixed_update` 和 `complete_time` 均使用此快取。不得把 combo counter 變化描述為必然同影格即時重算蓄力進度。

- 共用機制快取只重用 stepped count、Buff stack offset、conditional-key override 及 held-slot condition；這些適用條件已與本項的 stepped_stat_buff、同名 tier override 及 `is_item_slot_wielded` 實際條件比對。其餘 action、Mark、tier 與 RAW 證據由本項固定來源重新核對。

- 型號模板的 `charge_duration` 原始 `lerp_basic／lerp_perfect` 欄位由 WeaponTweakTemplates 依武器屬性插值，運行時是單一數值。算例先明列插值參數與所得 T0，再套 charge_up_time；不把端點誤當射擊模式或所有武器固定時間。

蓄力時間：`T = T0 × (1 + q + n×p)`。`T0` 是該把武器依屬性插值後，當前運行蓄力模板的 `charge_duration`；`p` 是本祝福每個有效 combo step 的 tier 負值（I −0.06、II −0.08、III −0.10、IV −0.12）；`n` 是在目前 wrapper 白名單動作與持用條件下，由共享 `combo_count` 四捨五入後限制在 0–5 的有效步階；`q` 是其他適用的 additive-multiplier `charge_up_time` 貢獻。此式描述來源中的同一個乘數，不表示遊戲計時器實測或保證同影格更新。

下表假設沒有其他加算修正（`q=0`）：

| 有效步階 n | I：p=−0.06 | II：p=−0.08 | III：p=−0.10 | IV：p=−0.12 |
|---:|---:|---:|---:|---:|
| 0 | 1.00 T0 | 1.00 T0 | 1.00 T0 | 1.00 T0 |
| 1 | 0.94 T0 | 0.92 T0 | 0.90 T0 | 0.88 T0 |
| 2 | 0.88 T0 | 0.84 T0 | 0.80 T0 | 0.76 T0 |
| 3 | 0.82 T0 | 0.76 T0 | 0.70 T0 | 0.64 T0 |
| 4 | 0.76 T0 | 0.68 T0 | 0.60 T0 | 0.52 T0 |
| 5 | 0.70 T0 | 0.60 T0 | 0.50 T0 | 0.40 T0 |

三個型號的 `lerp_basic／lerp_perfect` 插值端點分別為：MK IIIa 0.8／0.4 秒、MK V 0.65／0.25 秒、Mk IV 1.0／0.5 秒。腰射與瞄準都選各型號相同的蓄力模板；`T0` 依該把武器的實際屬性插值結果取值。這些端點不是兩種射擊模式，也不代表三型號實測。

## 圖示

- item.icon：`content/ui/textures/icons/traits/weapon_trait_101`。

- [原圖](https://gameslantern.com/storage/sites/darktide/exporter/content/ui/textures/icons/traits/weapon_trait_101.png)｜[Issue附件](https://github.com/user-attachments/assets/0d16364d-b0de-4a1d-9348-9225824ed97b)；圖示只作辨識。


## 其他武器變體

| 用途 | 固定原始碼 |
|---|---|
| 冥潮鐳射槍等級覆寫 | [冥潮鐳射槍等級覆寫](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_traits/weapon_traits_bespoke_lasgun_p2.lua#L258-L300) |
| 冥潮鐳射槍Buff接入 | [冥潮鐳射槍Buff接入](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/weapon_traits_buff_templates/weapon_traits_bespoke_lasgun_p2_buff_templates.lua#L26-L58) |
| UI 冥潮鐳射槍 | [UI 冥潮鐳射槍](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ui/ui_weapon_pattern_settings.lua#L892) |
| 冥潮鐳射槍 盧修斯 MK IIIa匯入 | [冥潮鐳射槍 盧修斯 MK IIIa匯入](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/lasguns/lasgun_p2_m1.lua#L15) |
| 冥潮鐳射槍 盧修斯 MK IIIa接入 | [冥潮鐳射槍 盧修斯 MK IIIa接入](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/lasguns/lasgun_p2_m1.lua#L1333-L1335) |
| 冥潮鐳射槍 盧修斯 MK V匯入 | [冥潮鐳射槍 盧修斯 MK V匯入](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/lasguns/lasgun_p2_m2.lua#L15) |
| 冥潮鐳射槍 盧修斯 MK V接入 | [冥潮鐳射槍 盧修斯 MK V接入](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/lasguns/lasgun_p2_m2.lua#L1327-L1329) |
| 冥潮鐳射槍 盧修斯 Mk IV匯入 | [冥潮鐳射槍 盧修斯 Mk IV匯入](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/lasguns/lasgun_p2_m3.lua#L15) |
| 冥潮鐳射槍 盧修斯 Mk IV接入 | [冥潮鐳射槍 盧修斯 Mk IV接入](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/lasguns/lasgun_p2_m3.lua#L1244-L1246) |
