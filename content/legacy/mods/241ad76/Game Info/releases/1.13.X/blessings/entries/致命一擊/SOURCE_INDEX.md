# 致命一擊：來源與公式

[玩家說明](README.md)｜[來源索引](SOURCE_INDEX.md)｜[武器對應](WEAPON_COMPATIBILITY.md)｜[等級](TIER_VALUES.md)｜[原文比較](LOCALIZATION_COMPARISON.md)｜[百分比檢核](DAMAGE_PERCENTAGE_REVIEW.md)

- Release1.13.1，固定SHA `7e662fcda16219d775b84af50322be2e9cd9d62e`；機制只依公開Darktide-Source-Code。
- [共用來源邊界](../../SOURCE_INDEX.md)記錄MasterItems快取、完整語系RAW及後端欄位狀態。

| 用途 | 固定原始碼 |
|---|---|
| 自身 I–IV tier 與 formatter | [自身 I–IV tier 與 formatter](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_traits/weapon_traits_bespoke_combatsword_p2.lua#L246-L285) |
| 實際 wrapper 及共用條件模板 | [實際 wrapper 及共用條件模板](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/weapon_traits_buff_templates/weapon_traits_bespoke_combatsword_p2_buff_templates.lua#L21) |
| 條件關鍵字與同鍵屬性覆寫 | [條件關鍵字與同鍵屬性覆寫](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/buff/buffs/buff.lua#L137-L142) |
| 掃掠預算與死亡後 mass/abort 回退 | [掃掠預算與死亡後 mass/abort 回退](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/weapon/actions/action_sweep.lua#L1347-L1454) |
| 實際弱點傷害消費 | [實際弱點傷害消費](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/attack/damage_calculation.lua#L713-L724) |
| 目標質量及護甲輸入 | [目標質量及護甲輸入](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/attack/hit_mass.lua#L12-L63) |
| 圖妥斯基 Mk VI 實際動作profile | [圖妥斯基 Mk VI 實際動作profile](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/combat_swords/combatsword_p2_m1.lua#L205-L1297) |
| 圖妥斯基 Mk VII 實際動作profile | [圖妥斯基 Mk VII 實際動作profile](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/combat_swords/combatsword_p2_m2.lua#L205-L1281) |
| 圖妥斯基 Mk IX 實際動作profile | [圖妥斯基 Mk IX 實際動作profile](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/combat_swords/combatsword_p2_m3.lua#L205-L1357) |
| 本項條件／事件／動作／結算來源 | [本項條件／事件／動作／結算來源](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/weapon_traits_buff_templates/base_weapon_trait_buff_templates.lua#L428-L439) |
| 本項條件／事件／動作／結算來源 | [本項條件／事件／動作／結算來源](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/buff/buffs/buff.lua#L689-L747) |
| 本項條件／事件／動作／結算來源 | [本項條件／事件／動作／結算來源](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/buff/buffs/buff.lua#L808-L840) |
| 本項條件／事件／動作／結算來源 | [本項條件／事件／動作／結算來源](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/helper_functions/conditional_functions.lua#L43-L60) |
| 本項條件／事件／動作／結算來源 | [本項條件／事件／動作／結算來源](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/attack/weakspot.lua#L9-L19) |
| 本項條件／事件／動作／結算來源 | [本項條件／事件／動作／結算來源](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/attack/damage_calculation.lua#L749-L782) |
| 本項條件／事件／動作／結算來源 | [本項條件／事件／動作／結算來源](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/weapon/actions/action_sweep.lua#L246-L253) |
| 本項條件／事件／動作／結算來源 | [本項條件／事件／動作／結算來源](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/weapon/actions/action_sweep.lua#L328-L358) |
| 本項條件／事件／動作／結算來源 | [本項條件／事件／動作／結算來源](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/weapon/actions/action_sweep.lua#L1318-L1324) |
| 本項條件／事件／動作／結算來源 | [本項條件／事件／動作／結算來源](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/weapon/actions/action_sweep.lua#L1347-L1389) |
| 本項條件／事件／動作／結算來源 | [本項條件／事件／動作／結算來源](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/weapon/actions/action_sweep.lua#L1398-L1425) |
| 本項條件／事件／動作／結算來源 | [本項條件／事件／動作／結算來源](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/weapon/actions/action_sweep.lua#L1449-L1454) |
| 本項條件／事件／動作／結算來源 | [本項條件／事件／動作／結算來源](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/weapon/actions/action_sweep.lua#L1475-L1503) |
| 本項條件／事件／動作／結算來源 | [本項條件／事件／動作／結算來源](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/attack/damage_profile.lua#L36-L80) |
| 本項條件／事件／動作／結算來源 | [本項條件／事件／動作／結算來源](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/attack/hit_mass.lua#L114-L170) |
| 本項條件／事件／動作／結算來源 | [本項條件／事件／動作／結算來源](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/attack/armor.lua#L11-L23) |
| 本項條件／事件／動作／結算來源 | [本項條件／事件／動作／結算來源](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/damage/armor_settings.lua#L27-L30) |
| 本項條件／事件／動作／結算來源 | [本項條件／事件／動作／結算來源](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/attack/hit_mass.lua#L65-L85) |
| 本項條件／事件／動作／結算來源 | [本項條件／事件／動作／結算來源](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/weapon/actions/action_push.lua#L52-L114) |
| 本項條件／事件／動作／結算來源 | [本項條件／事件／動作／結算來源](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/combat_swords/combatsword_p2_m1.lua#L144-L198) |
| 本項條件／事件／動作／結算來源 | [本項條件／事件／動作／結算來源](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/combat_swords/combatsword_p2_m1.lua#L205-L292) |
| 本項條件／事件／動作／結算來源 | [本項條件／事件／動作／結算來源](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/combat_swords/combatsword_p2_m1.lua#L300-L365) |
| 本項條件／事件／動作／結算來源 | [本項條件／事件／動作／結算來源](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/combat_swords/combatsword_p2_m1.lua#L372-L427) |
| 本項條件／事件／動作／結算來源 | [本項條件／事件／動作／結算來源](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/combat_swords/combatsword_p2_m1.lua#L434-L517) |
| 本項條件／事件／動作／結算來源 | [本項條件／事件／動作／結算來源](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/combat_swords/combatsword_p2_m1.lua#L525-L593) |
| 本項條件／事件／動作／結算來源 | [本項條件／事件／動作／結算來源](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/combat_swords/combatsword_p2_m1.lua#L600-L656) |
| 本項條件／事件／動作／結算來源 | [本項條件／事件／動作／結算來源](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/combat_swords/combatsword_p2_m1.lua#L664-L747) |
| 本項條件／事件／動作／結算來源 | [本項條件／事件／動作／結算來源](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/combat_swords/combatsword_p2_m1.lua#L754-L809) |
| 本項條件／事件／動作／結算來源 | [本項條件／事件／動作／結算來源](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/combat_swords/combatsword_p2_m1.lua#L816-L896) |
| 本項條件／事件／動作／結算來源 | [本項條件／事件／動作／結算來源](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/combat_swords/combatsword_p2_m1.lua#L952-L1009) |
| 本項條件／事件／動作／結算來源 | [本項條件／事件／動作／結算來源](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/combat_swords/combatsword_p2_m1.lua#L1016-L1072) |
| 本項條件／事件／動作／結算來源 | [本項條件／事件／動作／結算來源](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/combat_swords/combatsword_p2_m1.lua#L1080-L1169) |
| 本項條件／事件／動作／結算來源 | [本項條件／事件／動作／結算來源](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/combat_swords/combatsword_p2_m1.lua#L1177-L1241) |
| 本項條件／事件／動作／結算來源 | [本項條件／事件／動作／結算來源](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/combat_swords/combatsword_p2_m1.lua#L1248-L1297) |
| 本項條件／事件／動作／結算來源 | [本項條件／事件／動作／結算來源](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/combat_swords/combatsword_p2_m2.lua#L144-L198) |
| 本項條件／事件／動作／結算來源 | [本項條件／事件／動作／結算來源](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/combat_swords/combatsword_p2_m2.lua#L205-L289) |
| 本項條件／事件／動作／結算來源 | [本項條件／事件／動作／結算來源](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/combat_swords/combatsword_p2_m2.lua#L296-L362) |
| 本項條件／事件／動作／結算來源 | [本項條件／事件／動作／結算來源](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/combat_swords/combatsword_p2_m2.lua#L369-L424) |
| 本項條件／事件／動作／結算來源 | [本項條件／事件／動作／結算來源](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/combat_swords/combatsword_p2_m2.lua#L431-L514) |
| 本項條件／事件／動作／結算來源 | [本項條件／事件／動作／結算來源](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/combat_swords/combatsword_p2_m2.lua#L522-L589) |
| 本項條件／事件／動作／結算來源 | [本項條件／事件／動作／結算來源](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/combat_swords/combatsword_p2_m2.lua#L596-L652) |
| 本項條件／事件／動作／結算來源 | [本項條件／事件／動作／結算來源](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/combat_swords/combatsword_p2_m2.lua#L660-L742) |
| 本項條件／事件／動作／結算來源 | [本項條件／事件／動作／結算來源](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/combat_swords/combatsword_p2_m2.lua#L750-L805) |
| 本項條件／事件／動作／結算來源 | [本項條件／事件／動作／結算來源](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/combat_swords/combatsword_p2_m2.lua#L812-L892) |
| 本項條件／事件／動作／結算來源 | [本項條件／事件／動作／結算來源](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/combat_swords/combatsword_p2_m2.lua#L948-L1005) |
| 本項條件／事件／動作／結算來源 | [本項條件／事件／動作／結算來源](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/combat_swords/combatsword_p2_m2.lua#L1012-L1068) |
| 本項條件／事件／動作／結算來源 | [本項條件／事件／動作／結算來源](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/combat_swords/combatsword_p2_m2.lua#L1076-L1165) |
| 本項條件／事件／動作／結算來源 | [本項條件／事件／動作／結算來源](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/combat_swords/combatsword_p2_m2.lua#L1173-L1225) |
| 本項條件／事件／動作／結算來源 | [本項條件／事件／動作／結算來源](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/combat_swords/combatsword_p2_m2.lua#L1232-L1281) |
| 本項條件／事件／動作／結算來源 | [本項條件／事件／動作／結算來源](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/combat_swords/combatsword_p2_m3.lua#L144-L198) |
| 本項條件／事件／動作／結算來源 | [本項條件／事件／動作／結算來源](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/combat_swords/combatsword_p2_m3.lua#L205-L289) |
| 本項條件／事件／動作／結算來源 | [本項條件／事件／動作／結算來源](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/combat_swords/combatsword_p2_m3.lua#L296-L361) |
| 本項條件／事件／動作／結算來源 | [本項條件／事件／動作／結算來源](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/combat_swords/combatsword_p2_m3.lua#L368-L433) |
| 本項條件／事件／動作／結算來源 | [本項條件／事件／動作／結算來源](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/combat_swords/combatsword_p2_m3.lua#L440-L495) |
| 本項條件／事件／動作／結算來源 | [本項條件／事件／動作／結算來源](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/combat_swords/combatsword_p2_m3.lua#L502-L586) |
| 本項條件／事件／動作／結算來源 | [本項條件／事件／動作／結算來源](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/combat_swords/combatsword_p2_m3.lua#L593-L660) |
| 本項條件／事件／動作／結算來源 | [本項條件／事件／動作／結算來源](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/combat_swords/combatsword_p2_m3.lua#L667-L725) |
| 本項條件／事件／動作／結算來源 | [本項條件／事件／動作／結算來源](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/combat_swords/combatsword_p2_m3.lua#L733-L813) |
| 本項條件／事件／動作／結算來源 | [本項條件／事件／動作／結算來源](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/combat_swords/combatsword_p2_m3.lua#L820-L875) |
| 本項條件／事件／動作／結算來源 | [本項條件／事件／動作／結算來源](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/combat_swords/combatsword_p2_m3.lua#L882-L966) |
| 本項條件／事件／動作／結算來源 | [本項條件／事件／動作／結算來源](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/combat_swords/combatsword_p2_m3.lua#L1023-L1081) |
| 本項條件／事件／動作／結算來源 | [本項條件／事件／動作／結算來源](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/combat_swords/combatsword_p2_m3.lua#L1088-L1144) |
| 本項條件／事件／動作／結算來源 | [本項條件／事件／動作／結算來源](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/combat_swords/combatsword_p2_m3.lua#L1152-L1241) |
| 本項條件／事件／動作／結算來源 | [本項條件／事件／動作／結算來源](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/combat_swords/combatsword_p2_m3.lua#L1249-L1301) |
| 本項條件／事件／動作／結算來源 | [本項條件／事件／動作／結算來源](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/combat_swords/combatsword_p2_m3.lua#L1308-L1357) |
| 實際UI型號組名 | [實際UI型號組名](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/items.lua#L315-L327) |
| UI名稱欄位讀取 | [UI名稱欄位讀取](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/items.lua#L378-L426) |

## 執行與計算

此特性不是在擊殺時建立有期限的堆疊 Buff。實際 wrapper 只複製共用 `Buff`：持用條件同時控制 `melee_weakspot_damage` 與 `melee_infinite_cleave_on_headshot` 關鍵字；自身 tier 的 `melee_weakspot_damage` 同名覆寫會取代共用模板的 .5 fallback。ActionSweep 每次開始將命中質量與總角色擊殺數歸零，並按該掃掠使用的傷害設定計算攻擊／衝擊命中質量上限。每個目標命中前，程式根據目標存活狀態、breed、弱點區、實際 hit mass、hit zone armor 與 action_armor_hit_mass_mod 計算累積值與 abort；若達到或超過上限，或符合其他 armor/breed abort，先選中止傷害設定，再執行 Attack。命中後只有結果為 died、hit_weakspot 為真、持用關鍵字仍有效、目標不帶 ogryn 標籤且此前總角色擊殺計數≤2，才把目前目標的質量累積復原到命中前，並清除 abort。之後存活角色擊殺才遞增總計數，所以其他弱點／非弱點擊殺也會占掉此三次位置。當前擊殺已完成傷害結算；回退只讓掃掠有機會繼續處理下一個目標。不同 Mk 的 action profile 和護甲命中質量倍率會影響該攻擊原生上限，但不改變這個 post-hit 條件。

主控差異核對：持用條件的弱點傷害修正不要求擊殺，也不排除 ogryn；非 ogryn 和前三個總角色擊殺位置只限制 ActionSweep 的擊殺後質量回退分支。命中前已有質量／護甲／breed 中止決策與傷害設定，命中後 qualified branch 才回退目前質量並清除 abort，且不進正常 _target_index 遞增分支；隨後角色擊殺計數才增加。後續沿用該傷害順位也不代表相同目標因素或最終傷害。

令等級增量 t=.075/.10/.125/.15，B 為非弱點額外傷害部分，F 為基礎弱點額外傷害，S 為既有同乘區修正。近戰弱點命中、持用條件與屬性快取有效時，額外部分由 F×S 變為 F×(S+t)，增加 F×t；後續因素中性且沒有力場轉換時，總傷害為 B+F×(S+t)，不是 (B+F×S)×(1+t)。揮擊質量計算獨立：實際當前傷害設定決定 M=max(攻擊質量上限,衝擊質量上限)，原生特殊狀態選擇相應上限。令 H 為命中前累積質量、h 為本目標質量、a 為該動作對目標護甲的質量倍率；累積成為 H+h×a，M≤H+h×a 可在傷害前令中止成立。合格弱點擊殺在傷害後把累積回退為 H 並清除後續中止。

## 圖示

- item.icon：`content/ui/textures/icons/traits/weapon_trait_178`。

- [原圖](https://gameslantern.com/storage/sites/darktide/exporter/content/ui/textures/icons/traits/weapon_trait_178.png)｜[Issue附件](https://github.com/user-attachments/assets/727852d8-6e95-4327-9114-a8b78126a891)；圖示只作辨識。


## 其他武器變體

| 用途 | 固定原始碼 |
|---|---|
| 重劍等級覆寫 | [重劍等級覆寫](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_traits/weapon_traits_bespoke_combatsword_p2.lua#L246-L285) |
| 重劍Buff接入 | [重劍Buff接入](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/weapon_traits_buff_templates/weapon_traits_bespoke_combatsword_p2_buff_templates.lua#L21) |
| UI 重劍 | [UI 重劍](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ui/ui_weapon_pattern_settings.lua#L168) |
| 重劍 圖妥斯基 Mk VI匯入 | [重劍 圖妥斯基 Mk VI匯入](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/combat_swords/combatsword_p2_m1.lua#L16) |
| 重劍 圖妥斯基 Mk VI接入 | [重劍 圖妥斯基 Mk VI接入](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/combat_swords/combatsword_p2_m1.lua#L1597-L1599) |
| 重劍 圖妥斯基 Mk VII匯入 | [重劍 圖妥斯基 Mk VII匯入](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/combat_swords/combatsword_p2_m2.lua#L16) |
| 重劍 圖妥斯基 Mk VII接入 | [重劍 圖妥斯基 Mk VII接入](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/combat_swords/combatsword_p2_m2.lua#L1581-L1583) |
| 重劍 圖妥斯基 Mk IX匯入 | [重劍 圖妥斯基 Mk IX匯入](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/combat_swords/combatsword_p2_m3.lua#L16) |
| 重劍 圖妥斯基 Mk IX接入 | [重劍 圖妥斯基 Mk IX接入](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/combat_swords/combatsword_p2_m3.lua#L1669-L1671) |
