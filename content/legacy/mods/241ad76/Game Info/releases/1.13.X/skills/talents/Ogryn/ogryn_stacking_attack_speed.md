# 狂暴猛擊(Frenzied Blows)：原始碼依據

[English](en/ogryn_stacking_attack_speed.md)

[返回玩家說明](README.md#ogryn_stacking_attack_speed)｜[技術索引](SOURCE_INDEX.md)｜[原文比對](LOCALIZATION_COMPARISON.md#ogryn_stacking_attack_speed)

- 來源版本：Release 1.13.1；固定 SHA：`7e662fcda16219d775b84af50322be2e9cd9d62e`。
- 天賦：`ogryn_stacking_attack_speed`；名稱鍵：`loc_talent_ogryn_stacking_attack_speed_name`；描述鍵：`loc_talent_ogryn_stacking_attack_speed_desc`。
- 節點：`node_e7226bdd-5733-49a0-9b8a-d938c1526a3c`；分類：技能；每節點一點。
- 證據程度：原始碼確認／程式推導；以下算例屬程式推導，未進行遊戲內測試。

## 原始碼確認與程式推導

- parent每sweep_finish命中則chained+1，miss歸零；chained>1加child。child max5 duration5 refresh，每層melee_attack_speed .025；miss退出。

## 原始碼依據

- [scripts/settings/buff/archetype_buff_templates/ogryn_buff_templates.lua：3014–3062](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/ogryn_buff_templates.lua#L3014-L3062)
- [scripts/settings/talent/talent_settings_ogryn.lua：70–74](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/talent/talent_settings_ogryn.lua#L70-L74)
- [scripts/utilities/action/action_handler.lua：356–429](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/action/action_handler.lua#L356-L429)
- [scripts/settings/ability/archetype_talents/talents/ogryn_talents.lua：2089–2112](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/ogryn_talents.lua#L2089-L2112)
- [scripts/ui/views/talent_builder_view/layouts/ogryn_tree.lua：1770–1798](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/ui/views/talent_builder_view/layouts/ogryn_tree.lua#L1770-L1798)

## 算例條件與待確認事項

- **速度算例**：滿層時，受攻速影響的 1 秒動作變成 1 ÷ (1 + 5 × 2.5%) ≈ 0.889 秒；不是直接縮短 12.5% 至 0.875 秒。
- 遊戲原文：1.13.1／Steam Build 25606770 的 ui 資源。描述與實作的差異仍需遊戲內核對；省略細節不列為繁中誤譯。

## 原文核對

- 對應 hash：`2909d3df`。
- 核對同一描述鍵／hash 的繁中與英文，效果方向未見明確翻譯矛盾；未列公式、上限或細部限制不算錯誤。

## 圖示來源

[原圖](https://gameslantern.com/storage/sites/darktide/exporter/talents/ogryn/default/ogryn_stacking_attack_speed.webp)｜[圖片來源 Issue](https://github.com/SyuanTsai/Media-Assets/issues/10#issuecomment-5931394406)｜[圖片附件](https://github.com/user-attachments/assets/5f6d651a-4c88-40ea-a96b-3133459df2f4)

圖片僅供技能辨識，不作機制證據。

