# 淨化仇恨(Purifying Hatred)：原始碼依據

[English](en/zealot_dmg_vs_burning_electrocuted.md)

[返回玩家說明](README.md#zealot_dmg_vs_burning_electrocuted)｜[技術索引](SOURCE_INDEX.md)｜[原文比對](LOCALIZATION_COMPARISON.md#zealot_dmg_vs_burning_electrocuted)

- 來源版本：Release 1.13.1；固定 SHA：`7e662fcda16219d775b84af50322be2e9cd9d62e`。
- 天賦：`zealot_dmg_vs_burning_electrocuted`；名稱鍵：`loc_talent_zealot_dmg_vs_burning_electrocuted`；描述鍵：`loc_talent_zealot_dmg_vs_burning_electrocuted_desc`。
- 節點：`node_85469f6c-0258-4ad5-82f5-9f23151c7b63`；分類：技能；每節點一點。
- 證據程度：原始碼確認／程式推導；以下算例屬程式推導，未進行遊戲內測試。

## 原始碼確認與程式推導

- 分別給damage_vs_burning與damage_vs_electrocuted+.15；共用計算分開檢查burning與electrocuted並加入同一damage_stat_buffs，所以雙條件合計+.30。
- 中英文and都可表示並列敵人類型，本次補明OR條件與可同時疊加，不以措辭不完整定為繁中錯誤。

## 原始碼依據

- [scripts/settings/buff/archetype_buff_templates/zealot_buff_templates.lua：4721–4728](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/zealot_buff_templates.lua#L4721-L4728)
- [scripts/settings/talent/talent_settings_zealot.lua：236–238](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/talent/talent_settings_zealot.lua#L236-L238)
- [scripts/utilities/attack/damage_calculation.lua：354–365](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/attack/damage_calculation.lua#L354-L365)
- [scripts/settings/ability/archetype_talents/talents/zealot_talents.lua：3214–3229](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/zealot_talents.lua#L3214-L3229)
- [scripts/ui/views/talent_builder_view/layouts/zealot_tree.lua：2134–2156](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/ui/views/talent_builder_view/layouts/zealot_tree.lua#L2134-L2156)

## 算例條件與待確認事項

- **傷害算例**：基礎 100 點、僅符合其中一項時為 100 × 1.15 = 115；兩者皆符合時為 100 × (1 + 15% + 15%) = 130 點。其他同階段增傷也先相加。
- 遊戲原文：1.13.1／Steam Build 25606770 的 ui 資源。描述與實作的差異仍需遊戲內核對；省略細節不列為繁中誤譯。

## 原文核對

- 對應 hash：`34bfb2f6`。
- 核對同一描述鍵／hash 的繁中與英文，效果方向未見明確翻譯矛盾；未列公式、上限或細部限制不算錯誤。

## 圖示來源

[原圖](https://gameslantern.com/storage/sites/darktide/exporter/talents/zealot/default/zealot_dmg_vs_burning_electrocuted.webp)｜[圖片來源 Issue](https://github.com/SyuanTsai/Media-Assets/issues/8#issuecomment-5929296872)｜[圖片附件](https://github.com/user-attachments/assets/8137f892-5370-4a69-b790-556f579414d2)

圖片僅供技能辨識，不作機制證據。

