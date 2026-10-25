# 彈幕II(Barrage II)：原始碼依據

[English](en/broker_stimm_durability_2.md)

[返回玩家說明](README.md#broker_stimm_durability_2)｜[技術索引](SOURCE_INDEX.md)｜[原文比對](LOCALIZATION_COMPARISON.md#broker_stimm_durability_2)

- 來源版本：Release 1.13.1；固定 SHA：`7e662fcda16219d775b84af50322be2e9cd9d62e`。
- 天賦：`broker_stimm_durability_2`；名稱鍵：`loc_talent_broker_stimm_durability_a`；描述鍵：`loc_talent_stat_toughness_replenish_modifier / loc_talent_stat_damage_taken_multiplier / loc_talent_buff_toughness_on_stimm`。
- 節點：`node_57c21f09-03ee-4196-b2c8-c80d5c3aaa0b`；分類：興奮劑配方；配點成本：2 點。
- 證據程度：原始碼確認／程式推導；以下算例屬程式推導，未進行遊戲內測試。

## 原始碼確認與程式推導

- 本配方 cost=max_points，因此只購買一次，並非可重複點選的等級數。已選的前置配方仍同時生效；各節點效果依 stat 類型加算或乘算。
- 每個選中配方各建立一個broker_syringe_toughness_restore，首次有效更新呼叫replenish_percentage(.0625)。first_time_affected=false時預先標為procced，場域同次反覆進出不會一直給首次恢復。倒地時暫緩此一次恢復。
- toughness_replenish_modifier每節點+.05，damage_taken_multiplier每節點.96；前者相加、後者相乘。recover_percentage_toughness會再乘total recovery modifier且限制於韌性缺額。

## 原始碼依據

- [scripts/settings/buff/archetype_buff_templates/broker_buff_templates.lua：4091–4108](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/broker_buff_templates.lua#L4091-L4108)
- [scripts/settings/buff/archetype_buff_templates/broker_buff_templates.lua：4128–4168](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/broker_buff_templates.lua#L4128-L4168)
- [scripts/settings/buff/archetype_buff_templates/broker_buff_templates.lua：4210–4248](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/broker_buff_templates.lua#L4210-L4248)
- [scripts/extension_systems/buff/buffs/buff.lua：689–727](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/buff/buffs/buff.lua#L689-L727)
- [scripts/settings/buff/archetype_buff_templates/broker_buff_templates.lua：3873–3925](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/broker_buff_templates.lua#L3873-L3925)
- [scripts/extension_systems/toughness/player_unit_toughness_extension.lua：253–285](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/toughness/player_unit_toughness_extension.lua#L253-L285)
- [scripts/settings/buff/buff_settings.lua：768–800](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/buff_settings.lua#L768-L800)
- [scripts/settings/buff/buff_settings.lua：1006–1028](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/buff_settings.lua#L1006-L1028)
- [scripts/utilities/attack/damage_calculation.lua：587–615](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/attack/damage_calculation.lua#L587-L615)
- [scripts/settings/talent/talent_settings_broker.lua：667–683](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/talent/talent_settings_broker.lua#L667-L683)
- [scripts/ui/views/broker_stimm_builder_view/layouts/broker_stimm_tree.lua：415–439](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/ui/views/broker_stimm_builder_view/layouts/broker_stimm_tree.lua#L415-L439)

## 算例條件與待確認事項

- **減傷算例**：從彈幕I 選到本節點，共 2 項減傷相乘。原本承受 100 點時，變成 100 × 0.96^2 ≈ 92.160 點。
- **恢復算例**：最大韌性 100，前置配方與本節點的恢復加成都生效時，使用後恢復 100 × (2 × 6.25%) × (1 + 2 × 5%) = 13.75 點；實際仍受缺額限制。
- 一次恢復算例假設配方恢復修正已套用且玩家未倒地；實際同步與套用時序未以遊戲驗證。
- 同一使用者的配方由 syringe_broker_buff 讀取並共同套用；場域分享時依提供者配方，外部控制的持續時間另按場域設定。
- 遊戲原文：1.13.1／Steam Build 25606770 的 ui 資源。描述與實作的差異仍需遊戲內核對；省略細節不列為繁中誤譯。

## 原文核對

- 對應 hash：`805fdb71 / 9a749a67 / 75149821`。
- 逐一以相同 hash 核對動態組成的中英屬性描述，數值依固定來源的 format_values 與實際結算。原文未附疊加公式與算例屬資訊省略，不列為錯誤。

## 圖示來源

[原圖](https://gameslantern.com/storage/sites/darktide/exporter/talents/broker/broker_stimm/broker_stimm_durability_2.webp)｜[圖片來源 Issue](https://github.com/SyuanTsai/Media-Assets/issues/12#issuecomment-5934604124)｜[圖片附件](https://github.com/user-attachments/assets/e99ef969-5e48-4129-9a22-d11f0e23aa80)

圖片僅供技能辨識，不作機制證據。

