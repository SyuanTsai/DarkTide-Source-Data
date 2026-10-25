# 超暴力(Hyper-Violence)：原始碼依據

[English](en/broker_passive_melee_damage_carry_over.md)

[返回玩家說明](README.md#broker_passive_melee_damage_carry_over)｜[技術索引](SOURCE_INDEX.md)｜[原文比對](LOCALIZATION_COMPARISON.md#broker_passive_melee_damage_carry_over)

- 來源版本：Release 1.13.1；固定 SHA：`7e662fcda16219d775b84af50322be2e9cd9d62e`。
- 天賦：`broker_passive_melee_damage_carry_over`；名稱鍵：`loc_talent_broker_passive_melee_damage_carry_over`；描述鍵：`loc_talent_broker_passive_melee_damage_carry_over_desc`。
- 節點：`node_ca3fd6b8-f002-4e51-875d-a234a153d071`；分類：技能；每節點一點。
- 證據程度：原始碼確認／程式推導；以下算例屬程式推導，未進行遊戲內測試。

## 原始碼確認與程式推導

- _calculate_meleed_damage_carry_over=.25*(overkill_damage−active bonus)。on_kill不限攻擊類型但排除instakill；active期間只接受更高新值。
- melee_damage_bonus是value而非倍率，_base_damage在一般倍率項之後加buff_damage_bonus；後續傷害流程仍可能修正。

## 原始碼依據

- [scripts/settings/buff/archetype_buff_templates/broker_buff_templates.lua：2886–2931](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/broker_buff_templates.lua#L2886-L2931)
- [scripts/utilities/attack/damage_calculation.lua：293–301](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/attack/damage_calculation.lua#L293-L301)
- [scripts/utilities/attack/damage_calculation.lua：587–614](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/attack/damage_calculation.lua#L587-L614)
- [scripts/settings/buff/archetype_buff_templates/broker_buff_templates.lua：2893–2931](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/broker_buff_templates.lua#L2893-L2931)
- [scripts/settings/ability/archetype_talents/talents/broker_talents.lua：1789–1820](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/broker_talents.lua#L1789-L1820)
- [scripts/ui/views/talent_builder_view/layouts/broker_tree.lua：1141–1168](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/ui/views/talent_builder_view/layouts/broker_tree.lua#L1141-L1168)

## 算例條件與待確認事項

- **傷害算例**：造成 300 點傷害、敵人只剩 100 點生命，溢出 200，取得 200 × 25% = 50 點加傷；下一次近戰在此結算階段原為 100 點，變成 150 點。這是固定加傷，不是增加 50%。
- 遊戲原文：1.13.1／Steam Build 25606770 的 ui 資源。描述與實作的差異仍需遊戲內核對；省略細節不列為繁中誤譯。

## 原文核對

- 對應 hash：`821fa540`。
- 繁中「溢出傷害」與英文差額定義一致；續殺扣回目前加傷與替換規則為補充。

## 圖示來源

[原圖](https://gameslantern.com/storage/sites/darktide/exporter/talents/broker/default/broker_passive_melee_damage_carry_over.webp)｜[圖片來源 Issue](https://github.com/SyuanTsai/Media-Assets/issues/12#issuecomment-5933987866)｜[圖片附件](https://github.com/user-attachments/assets/5439d198-0b4c-4a05-ab95-fc67f67398c9)

圖片僅供技能辨識，不作機制證據。

