# 振奮啟示(Invigorating Revelation)：原始碼依據

[English](en/zealot_leaving_stealth_restores_toughness.md)

[返回玩家說明](README.md#zealot_leaving_stealth_restores_toughness)｜[技術索引](SOURCE_INDEX.md)｜[原文比對](LOCALIZATION_COMPARISON.md#zealot_leaving_stealth_restores_toughness)

- 來源版本：Release 1.13.1；固定 SHA：`7e662fcda16219d775b84af50322be2e9cd9d62e`。
- 天賦：`zealot_leaving_stealth_restores_toughness`；名稱鍵：`loc_talent_zealot_leaving_stealth_restores_toughness`；描述鍵：`loc_talent_zealot_stealth_toughness_dr_desc`。
- 節點：`node_d4c52149-9efe-492d-947e-f4c9e1b4bef7`；分類：能力；每節點一點。
- 證據程度：原始碼確認／程式推導；以下算例屬程式推導，未進行遊戲內測試。

## 原始碼確認與程式推導

- 天賦節點登記 special_rules.zealot_leave_stealth_toughness_regen。zealot_invisibility.start_func 偵測該規則後，以 toughness_to_restore=0.5 呼叫 Toughness.replenish_percentage；stop_func 則添加 zealot_leaving_stealth_restores_toughness。
- 進入時恢復基準是 max toughness 的 50%，不以缺失韌性百分比計算。共用 Toughness.recover_percentage_toughness 將要求量裁切到尚缺韌性，因此超過上限的部分不會保存。
- 離開 buff 持續 8 秒，stat_buffs.damage_taken_multiplier=0.7。這與合唱升級的 toughness_damage_taken_multiplier 不同：此處是一般 damage_taken_multiplier，而非僅韌性傷害。
- buff max_stacks=1；進入時不會套用離開後的減傷，離開時也不會再次恢復 50% 韌性。

## 原始碼依據

- [scripts/settings/ability/archetype_talents/talents/zealot_talents.lua：600–631](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/zealot_talents.lua#L600-L631)
- [scripts/settings/talent/talent_settings_zealot.lua：157–161](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/talent/talent_settings_zealot.lua#L157-L161)
- [scripts/settings/buff/archetype_buff_templates/zealot_buff_templates.lua：439–453](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/zealot_buff_templates.lua#L439-L453)
- [scripts/settings/buff/archetype_buff_templates/zealot_buff_templates.lua：4280–4311](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/zealot_buff_templates.lua#L4280-L4311)
- [scripts/extension_systems/toughness/player_unit_toughness_extension.lua：253–285](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/toughness/player_unit_toughness_extension.lua#L253-L285)
- [scripts/utilities/attack/damage_calculation.lua：590–610](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/attack/damage_calculation.lua#L590-L610)
- [scripts/settings/ability/archetype_talents/talents/zealot_talents.lua：600–631](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/zealot_talents.lua#L600-L631)
- [scripts/ui/views/talent_builder_view/layouts/zealot_tree.lua：919–943](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/ui/views/talent_builder_view/layouts/zealot_tree.lua#L919-L943)

## 算例條件與待確認事項

- **恢復與減傷算例**：最大韌性 100、目前 20，進入時補 100 × 50% = 50 點至 70；若只缺 30 點就只補 30 點。離開後原本 100 點傷害變成 100 × 0.7 = 70；另有獨立 25% 減傷時為 52.5 點。
- 通用 damage_taken_multiplier 與敵人攻擊傷害、護甲、格擋、韌性轉移等其他階段仍共同結算，不能保證最終受到的每種傷害都恰好少 30%。
- 離開潛行後的 8 秒計時從該 buff 加入時起算；若效果遭外部移除或被其他能力互動，實際存續會改變。
- 目前 inventory 文字指明韌性恢復及離開潛行減傷，固定 SHA 的時序一致；文字與程式來源皆為1.13.1；實際表現仍待遊戲內核對。
- 遊戲原文：1.13.1／Steam Build 25606770 的 ui 資源。描述與實作的差異仍需遊戲內核對；省略細節不列為繁中誤譯。

## 原文核對

- 對應 hash：`cc97b988`。
- 同一hash的繁中與英文作用方向相符；補足觸發、疊層、恢復量與實際計算，不把原文省略當錯誤。

## 圖示來源

[原圖](https://gameslantern.com/storage/sites/darktide/exporter/talents/zealot/ability_modifier/zealot_leaving_stealth_restores_toughness.webp)｜[圖片來源 Issue](https://github.com/SyuanTsai/Media-Assets/issues/8#issuecomment-5929289315)｜[圖片附件](https://github.com/user-attachments/assets/d5730c05-1fc1-4fd5-9943-53bf390b9a7d)

圖片僅供技能辨識，不作機制證據。

