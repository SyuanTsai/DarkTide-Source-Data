# 時刻警覺(On Your Toes)：原始碼依據

[English](en/veteran_weapon_switch_replenish_toughness.md)

[返回玩家說明](README.md#veteran_weapon_switch_replenish_toughness)｜[技術索引](SOURCE_INDEX.md)

- 來源版本：Release 1.13.1；SHA：`7e662fcda16219d775b84af50322be2e9cd9d62e`。
- 天賦：`veteran_weapon_switch_replenish_toughness`；名稱鍵：`loc_talent_veteran_weapon_switch_replenish_toughness`；描述鍵：`loc_talent_veteran_weapon_switch_replenish_toughness_description`。
- [節點](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/ui/views/talent_builder_view/layouts/veteran_tree.lua#L1840-L1862)：`keystone_modifier`，花費 1 點；[天賦定義](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/veteran_talents.lua#L2958-L2977)。
- 名稱對應沿用翻譯表；未進行遊戲內驗證。

此 modifier 設定 restore_toughness；on_wield_ranged 僅在 ranged_stacks>0 且 t>last_ranged_toughness+3 時恢復，on_wield_melee 對 melee_stacks 與 last_melee_toughness 做相同檢查。兩方向使用獨立計時器。呼叫 Toughness.replenish_percentage(unit,.2,false,...)，非每層增加；切換後仍清空相應累積層數。恢復受韌性缺口限制。

- ignore_stat_buffs=false，百分比恢復仍乘受益者 toughness_regen_rate_multiplier；算例按 1 計算。

## 原始碼依據

- [scripts/settings/ability/archetype_talents/talents/veteran_talents.lua，第 2958–2977 行](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/veteran_talents.lua#L2958-L2977)
- [scripts/settings/buff/archetype_buff_templates/veteran_buff_templates.lua，第 2912–2915 行](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/veteran_buff_templates.lua#L2912-L2915)
- [scripts/settings/buff/archetype_buff_templates/veteran_buff_templates.lua，第 3013–3045 行](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/veteran_buff_templates.lua#L3013-L3045)
- [scripts/utilities/toughness/toughness.lua，第 16–24 行](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/toughness/toughness.lua#L16-L24)
- [scripts/extension_systems/toughness/player_unit_toughness_extension.lua，第 253–285 行](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/toughness/player_unit_toughness_extension.lua#L253-L285)

## 算例條件與待確認事項

- 玩家頁算例按列出的基礎值及條件計算；未列出的加成、護甲、部位、距離及遊戲更新誤差不納入。
- 靜態推導不等同遊戲實測；名稱識別鍵與既有譯名的對應仍待使用者確認。
- 原始程式是嚴格 t > 上次時間+3，不是 t >=；臨界影格是否顯示為恰好 3.0 秒取決於遊戲更新步進。

## 圖示來源

[原圖](https://gameslantern.com/storage/sites/darktide/exporter/talents/veteran/keystone_modifier/veteran_weapon_switch_replenish_toughness.webp)｜[圖片來源 Issue](https://github.com/SyuanTsai/Media-Assets/issues/6#issuecomment-5922929234)｜[圖片附件](https://github.com/user-attachments/assets/a6e24eb8-063a-45a5-8796-acde81d1f734)

圖片僅供技能辨識，不作機制證據。

