# 懲罰者：來源與公式

[玩家說明](README.md)｜[來源索引](SOURCE_INDEX.md)｜[武器對應](WEAPON_COMPATIBILITY.md)｜[等級](TIER_VALUES.md)｜[原文比較](LOCALIZATION_COMPARISON.md)｜[百分比檢核](DAMAGE_PERCENTAGE_REVIEW.md)

- Release1.13.1，固定SHA `7e662fcda16219d775b84af50322be2e9cd9d62e`；機制只依公開Darktide-Source-Code。
- [共用來源邊界](../../SOURCE_INDEX.md)記錄MasterItems快取、完整語系RAW及後端欄位狀態。

| 用途 | 固定原始碼 |
|---|---|
| Own I–IV and formatter | [Own I–IV and formatter](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_traits/weapon_traits_bespoke_autogun_p1.lua#L256-L309) |
| Own wrapper | [Own wrapper](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/weapon_traits_buff_templates/weapon_traits_bespoke_autogun_p1_buff_templates.lua#L22-L24) |
| Base parent/child | [Base parent/child](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/weapon_traits_buff_templates/base_weapon_trait_buff_templates.lua#L1386-L1413) |
| Ranged close kill predicate | [Ranged close kill predicate](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/helper_functions/check_proc_functions.lua#L306-L318) |
| Attacking item match | [Attacking item match](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/helper_functions/check_proc_functions.lua#L721-L727) |
| Distance predicate | [Distance predicate](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/helper_functions/check_proc_functions.lua#L777-L792) |
| Close range constant | [Close range constant](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/damage/damage_settings.lua#L18-L23) |
| Parent init and sentinel | [Parent init and sentinel](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/buff/buffs/weapon_trait_parent_proc_buff.lua#L10-L39) |
| Kill event adds child | [Kill event adds child](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/buff/buffs/weapon_trait_parent_proc_buff.lua#L56-L90) |
| Shared expiry | [Shared expiry](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/buff/buffs/weapon_trait_parent_proc_buff.lua#L92-L123) |
| Add and refresh timer | [Add and refresh timer](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/buff/buffs/weapon_trait_parent_proc_buff.lua#L134-L163) |
| Child removal | [Child removal](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/buff/buffs/weapon_trait_parent_proc_buff.lua#L165-L182) |
| Parent destruction cleanup | [Parent destruction cleanup](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/buff/buffs/weapon_trait_parent_proc_buff.lua#L42-L54) |
| Effective stack offset | [Effective stack offset](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/buff/buffs/buff.lua#L397-L430) |
| Parent override match | [Parent override match](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/buff/buffs/buff.lua#L145-L184) |
| Override item lookup | [Override item lookup](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/buff/buffs/buff.lua#L208-L223) |
| Conditional stat aggregation | [Conditional stat aggregation](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/buff/buffs/buff.lua#L689-L747) |
| Held slot condition | [Held slot condition](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/helper_functions/conditional_functions.lua#L43-L60) |
| Proc activation | [Proc activation](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/buff/buffs/proc_buff.lua#L173-L194) |
| Proc event gates | [Proc event gates](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/buff/buffs/proc_buff.lua#L304-L370) |
| on_kill producer | [on_kill producer](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/attack/attack.lua#L669-L710) |
| Ranged dispatch | [Ranged dispatch](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/action/ranged_action.lua#L22-L28) |
| Damage stat type | [Damage stat type](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/buff_settings.lua#L763-L764) |
| Damage stat input | [Damage stat input](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/attack/damage_calculation.lua#L232-L263) |
| Damage output consumer | [Damage output consumer](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/attack/damage_calculation.lua#L582-L614) |
| Percentage formatting | [Percentage formatting](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/trait_value_parser.lua#L8-L21) |
| trait_override path | [trait_override path](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/trait_value_parser.lua#L43-L56) |
| Trait description caller | [Trait description caller](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/trait_value_parser.lua#L65-L72) |
| Formatter key/prefix application | [Formatter key/prefix application](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/trait_value_parser.lua#L77-L117) |
| Number formatting | [Number formatting](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/trait_value_parser.lua#L189-L203) |
| Decimal inference | [Decimal inference](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/trait_value_parser.lua#L205-L228) |
| Formatter path traversal | [Formatter path traversal](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/trait_value_parser.lua#L230-L242) |
| 步兵自動槍 阿格里皮娜 Mk I trait import | [步兵自動槍 阿格里皮娜 Mk I trait import](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/autoguns/autogun_p1_m1.lua#L17) |
| 步兵自動槍 阿格里皮娜 Mk I trait registration | [步兵自動槍 阿格里皮娜 Mk I trait registration](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/autoguns/autogun_p1_m1.lua#L768-L770) |
| 步兵自動槍 阿格里皮娜 Mk I selected action map | [步兵自動槍 阿格里皮娜 Mk I selected action map](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/autoguns/autogun_p1_m1.lua#L216-L244) |
| 步兵自動槍 阿格里皮娜 Mk I hip shot | [步兵自動槍 阿格里皮娜 Mk I hip shot](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/autoguns/autogun_p1_m1.lua#L246-L260) |
| 步兵自動槍 阿格里皮娜 Mk I ADS shot | [步兵自動槍 阿格里皮娜 Mk I ADS shot](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/autoguns/autogun_p1_m1.lua#L320-L330) |
| 步兵自動槍 阿格里皮娜 Mk I special action | [步兵自動槍 阿格里皮娜 Mk I special action](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/autoguns/autogun_p1_m1.lua#L482-L516) |
| 步兵自動槍 阿格里皮娜 Mk I charge field | [步兵自動槍 阿格里皮娜 Mk I charge field](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/autoguns/autogun_p1_m1.lua#L856-L862) |
| 步兵自動槍 弗拉克斯 Mk V trait import | [步兵自動槍 弗拉克斯 Mk V trait import](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/autoguns/autogun_p1_m2.lua#L16) |
| 步兵自動槍 弗拉克斯 Mk V trait registration | [步兵自動槍 弗拉克斯 Mk V trait registration](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/autoguns/autogun_p1_m2.lua#L764-L766) |
| 步兵自動槍 弗拉克斯 Mk V selected action map | [步兵自動槍 弗拉克斯 Mk V selected action map](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/autoguns/autogun_p1_m2.lua#L216-L244) |
| 步兵自動槍 弗拉克斯 Mk V hip shot | [步兵自動槍 弗拉克斯 Mk V hip shot](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/autoguns/autogun_p1_m2.lua#L245-L260) |
| 步兵自動槍 弗拉克斯 Mk V ADS shot | [步兵自動槍 弗拉克斯 Mk V ADS shot](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/autoguns/autogun_p1_m2.lua#L319-L330) |
| 步兵自動槍 弗拉克斯 Mk V special action | [步兵自動槍 弗拉克斯 Mk V special action](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/autoguns/autogun_p1_m2.lua#L480-L516) |
| 步兵自動槍 弗拉克斯 Mk V charge field | [步兵自動槍 弗拉克斯 Mk V charge field](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/autoguns/autogun_p1_m2.lua#L852-L858) |
| 步兵自動槍 哥倫努 Mk VIII trait import | [步兵自動槍 哥倫努 Mk VIII trait import](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/autoguns/autogun_p1_m3.lua#L16) |
| 步兵自動槍 哥倫努 Mk VIII trait registration | [步兵自動槍 哥倫努 Mk VIII trait registration](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/autoguns/autogun_p1_m3.lua#L765-L767) |
| 步兵自動槍 哥倫努 Mk VIII selected action map | [步兵自動槍 哥倫努 Mk VIII selected action map](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/autoguns/autogun_p1_m3.lua#L216-L244) |
| 步兵自動槍 哥倫努 Mk VIII hip shot | [步兵自動槍 哥倫努 Mk VIII hip shot](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/autoguns/autogun_p1_m3.lua#L245-L260) |
| 步兵自動槍 哥倫努 Mk VIII ADS shot | [步兵自動槍 哥倫努 Mk VIII ADS shot](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/autoguns/autogun_p1_m3.lua#L319-L330) |
| 步兵自動槍 哥倫努 Mk VIII special action | [步兵自動槍 哥倫努 Mk VIII special action](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/autoguns/autogun_p1_m3.lua#L481-L516) |
| 步兵自動槍 哥倫努 Mk VIII charge field | [步兵自動槍 哥倫努 Mk VIII charge field](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/autoguns/autogun_p1_m3.lua#L853-L859) |
| UI name composition | [UI name composition](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/items.lua#L315-L327) |
| UI name fields | [UI name fields](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/items.lua#L378-L426) |
| m1 hip fire action | [m1 hip fire action](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/autoguns/autogun_p1_m1.lua#L241-L251) |
| m1 ADS fire action | [m1 ADS fire action](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/autoguns/autogun_p1_m1.lua#L319-L327) |
| m1 flashlight special action | [m1 flashlight special action](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/autoguns/autogun_p1_m1.lua#L482-L503) |
| m1 charge configuration | [m1 charge configuration](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/autoguns/autogun_p1_m1.lua#L856-L862) |
| m2 hip fire action | [m2 hip fire action](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/autoguns/autogun_p1_m2.lua#L240-L250) |
| m2 ADS fire action | [m2 ADS fire action](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/autoguns/autogun_p1_m2.lua#L319-L326) |
| m2 flashlight special action | [m2 flashlight special action](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/autoguns/autogun_p1_m2.lua#L480-L501) |
| m2 charge configuration | [m2 charge configuration](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/autoguns/autogun_p1_m2.lua#L852-L858) |
| m3 hip fire action | [m3 hip fire action](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/autoguns/autogun_p1_m3.lua#L240-L250) |
| m3 ADS fire action | [m3 ADS fire action](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/autoguns/autogun_p1_m3.lua#L319-L326) |
| m3 flashlight special action | [m3 flashlight special action](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/autoguns/autogun_p1_m3.lua#L481-L502) |
| m3 charge configuration | [m3 charge configuration](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/autoguns/autogun_p1_m3.lua#L853-L859) |
| 步兵自動槍 阿格里皮娜 Mk I匯入 | [步兵自動槍 阿格里皮娜 Mk I匯入](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/autoguns/autogun_p1_m1.lua#L17) |
| 步兵自動槍 阿格里皮娜 Mk I接入 | [步兵自動槍 阿格里皮娜 Mk I接入](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/autoguns/autogun_p1_m1.lua#L768-L770) |
| 步兵自動槍 弗拉克斯 Mk V匯入 | [步兵自動槍 弗拉克斯 Mk V匯入](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/autoguns/autogun_p1_m2.lua#L16) |
| 步兵自動槍 弗拉克斯 Mk V接入 | [步兵自動槍 弗拉克斯 Mk V接入](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/autoguns/autogun_p1_m2.lua#L764-L766) |
| 步兵自動槍 哥倫努 Mk VIII匯入 | [步兵自動槍 哥倫努 Mk VIII匯入](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/autoguns/autogun_p1_m3.lua#L16) |
| 步兵自動槍 哥倫努 Mk VIII接入 | [步兵自動槍 哥倫努 Mk VIII接入](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/autoguns/autogun_p1_m3.lua#L765-L767) |
| RAW placeholder localization path | [RAW placeholder localization path](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_traits/weapon_traits_bespoke_autogun_p1.lua#L256-L279) |
| RAW placeholder localization path | [RAW placeholder localization path](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/trait_value_parser.lua#L65-L72) |
| RAW placeholder localization path | [RAW placeholder localization path](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/trait_value_parser.lua#L77-L121) |
| RAW placeholder localization path | [RAW placeholder localization path](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/managers/localization/localization_manager.lua#L124-L126) |
| RAW placeholder localization path | [RAW placeholder localization path](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/managers/localization/localization_manager.lua#L233-L267) |
| RAW placeholder localization path | [RAW placeholder localization path](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/managers/localization/localization_manager.lua#L285-L320) |
| RAW placeholder localization path | [RAW placeholder localization path](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_traits/weapon_trait_templates.lua#L3-L21) |
| RAW placeholder localization path | [RAW placeholder localization path](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/trait_value_parser.lua#L1-L6) |
| Attack result before on_kill queue | [Attack result before on_kill queue](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/attack/attack.lua#L357-L379) |
| 首次生效及快取 | [首次生效及快取](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/attack/attack.lua#L271-L272) |
| 首次生效及快取 | [首次生效及快取](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/attack/attack.lua#L353-L383) |
| 首次生效及快取 | [首次生效及快取](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/buff/buff_extension_base.lua#L982-L992) |
| 首次生效及快取 | [首次生效及快取](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/buff/player_unit_buff_extension.lua#L140-L144) |
| 首次生效及快取 | [首次生效及快取](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/buff/buff_extension_base.lua#L934-L936) |
| 實際UI型號組名 | [實際UI型號組名](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/items.lua#L315-L327) |
| UI名稱欄位讀取 | [UI名稱欄位讀取](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/items.lua#L378-L426) |

## 執行與計算

- 專屬 wrapper 繼承 increase_damage_on_close_kill_parent，並連到基礎 child template。父層收到 on_kill 後依 on_item_match 與 on_ranged_close_kill 檢查：事件結果必須是 died，攻擊類型須為 ranged（或 damage profile 設 count_as_ranged_attack），攻擊 item name 須與本項 buff context item 相同，且有效 hit_world_position 距攻擊者位置不超過 12.5 公尺。父、子 Buff 的 proc／conditional stat 都有 is_item_slot_wielded gate。

- 伺服器建立父 Buff 時先加一個 child sentinel。child 宣告 max_stacks=5、stack_offset=-1；Buff.max_stacks() 將 offset 絕對值加到實際層數上，父 Buff 因而可建立 6 個物理 child（1 sentinel＋最多5個有效層），stat stack count 再以 -1 offset 抵銷 sentinel，最多計入5層。tier 的 parent stat_buffs.damage 經 child context 的 parent_buff_template 匹配覆寫，取代 child 原本 1% fallback；不額外再加一次 fallback。

- 每個合格擊殺在處理事件的更新時間加入最多一個 child，並重設整組共用期限至 child_duration 1.75 秒；若已滿層，仍會以新增0層的呼叫刷新期限。時間到後父 Buff 更新以 remove_t < t 條件移除最多五個有效層，保留 sentinel。切換武器不直接清層或重設時間；當前 slot 不持用時，proc 條件及 child 的 damage conditional 都關閉。

- 造成擊殺的傷害先計算並完成死亡結果，再排入 on_kill；add_proc_event 只入隊。Buff 固定更新處理 proc 後重建 stat 快取，後續傷害取這份快取，因此新層不追溯改寫已結算的擊殺傷害，也不保證同一更新中每個後續命中都讀到新加成。

- 令 p 為 I–IV 每層的一般傷害加法（0.02／0.03／0.04／0.05），n 為本項有效層數（0–5），q 為同一 damage_stat_buffs 加法池中的其他加成，B 為加入該池前的 base damage。忽略或固定其它 damage multiplier、目標承傷、部位、護甲、弱點／爆擊等後續因素時：

- D = B × (1 + q + n × p)

- stat_buffs.damage 的類型是 additive_multiplier；damage calculation 將 (attacker_stat_buffs.damage − 1) 加入通用 damage_stat_buffs，之後再與其它傷害／承傷項合成。因此本項只把自己的 n×p 加到該加法池，不能把整次最終傷害一律說成獨立乘以 (1+n×p)，也不能把傷害計算中的其它乘區忽略後稱為實測結果。

## 圖示

- item.icon：`content/ui/textures/icons/traits/weapon_trait_016`。

- [原圖](https://gameslantern.com/storage/sites/darktide/exporter/content/ui/textures/icons/traits/weapon_trait_016.png)｜[Issue附件](https://github.com/user-attachments/assets/329f2103-f30b-4830-aed7-b0abb3a073fc)；圖示只作辨識。


## 其他武器變體

| 用途 | 固定原始碼 |
|---|---|
| 步兵自動槍等級覆寫 | [步兵自動槍等級覆寫](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_traits/weapon_traits_bespoke_autogun_p1.lua#L256-L309) |
| 步兵自動槍Buff接入 | [步兵自動槍Buff接入](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/weapon_traits_buff_templates/weapon_traits_bespoke_autogun_p1_buff_templates.lua#L22-L24) |
| UI 步兵自動槍 | [UI 步兵自動槍](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ui/ui_weapon_pattern_settings.lua#L648) |
| 步兵自動槍 阿格里皮娜 Mk I匯入 | [步兵自動槍 阿格里皮娜 Mk I匯入](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/autoguns/autogun_p1_m1.lua#L17) |
| 步兵自動槍 阿格里皮娜 Mk I接入 | [步兵自動槍 阿格里皮娜 Mk I接入](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/autoguns/autogun_p1_m1.lua#L768-L770) |
| 步兵自動槍 弗拉克斯 Mk V匯入 | [步兵自動槍 弗拉克斯 Mk V匯入](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/autoguns/autogun_p1_m2.lua#L16) |
| 步兵自動槍 弗拉克斯 Mk V接入 | [步兵自動槍 弗拉克斯 Mk V接入](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/autoguns/autogun_p1_m2.lua#L764-L766) |
| 步兵自動槍 哥倫努 Mk VIII匯入 | [步兵自動槍 哥倫努 Mk VIII匯入](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/autoguns/autogun_p1_m3.lua#L16) |
| 步兵自動槍 哥倫努 Mk VIII接入 | [步兵自動槍 哥倫努 Mk VIII接入](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/autoguns/autogun_p1_m3.lua#L765-L767) |
