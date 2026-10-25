# 精準思算機同步(Sureshot Cogitator Sync)：原始碼依據

[English](en/cryptic_weakspot_damage.md)

[返回玩家說明](README.md#cryptic_weakspot_damage)｜[技術索引](SOURCE_INDEX.md)｜[原文比對](LOCALIZATION_COMPARISON.md#cryptic_weakspot_damage)

- 來源版本：Release 1.13.1；固定 SHA：`7e662fcda16219d775b84af50322be2e9cd9d62e`。
- 天賦：`cryptic_weakspot_damage`；名稱鍵：`loc_talent_cryptic_weakspot_damage`；描述鍵：`loc_talent_cryptic_weakspot_damage_desc`。
- 節點：`node_4efd9db8-0341-428b-9220-2c7aa8ff5de7`；分類：技能；每節點一點。
- 證據程度：原始碼確認／程式推導；以下算例屬程式推導，未進行遊戲內測試。

## 原始碼確認與程式推導

- weakspot_damage=0.25僅在hit_weakspot加入finesse multiplier；總值B+F*(1+s+0.25)。相對增幅0.25F/[B+F*(1+s)]。
- F由傷害模板、護甲別finesse boost、boost curve、暴擊與部位條件決定；不能用頭傷減身體傷直接反推F。

## 原始碼依據

- [scripts/utilities/attack/damage_calculation.lua：60–109](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/attack/damage_calculation.lua#L60-L109)
- [scripts/utilities/attack/damage_calculation.lua：672–782](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/attack/damage_calculation.lua#L672-L782)
- [scripts/settings/talent/talent_settings_cryptic.lua：399–401](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/talent/talent_settings_cryptic.lua#L399-L401)
- [scripts/settings/buff/archetype_buff_templates/cryptic_buff_templates.lua：2237–2243](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/cryptic_buff_templates.lua#L2237-L2243)
- [scripts/utilities/attack/damage_calculation.lua：232–245](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/attack/damage_calculation.lua#L232-L245)
- [scripts/settings/ability/archetype_talents/talents/cryptic_talents.lua：1801–1816](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/cryptic_talents.lua#L1801-L1816)
- [scripts/ui/views/talent_builder_view/layouts/cryptic_tree.lua：467–496](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/ui/views/talent_builder_view/layouts/cryptic_tree.lua#L467-L496)

## 算例條件與待確認事項

- **傷害算例**：同一攻擊的基礎部分為 100、弱點額外部分為 100 時，原傷害 200 → 100 + 100 × 1.25 = 225，整筆增加 12.5%。若額外部分為 200，則 300 → 100 + 200 × 1.25 = 350，增加約 16.67%。
- 算例固定未暴擊、後續倍率為1；數值不代表指定武器實測。
- 遊戲原文：1.13.1／Steam Build 25606770 的 ui 資源。描述與實作的差異仍需遊戲內核對；省略細節不列為繁中誤譯。

## 原文核對

- 對應 hash：`6cd677cf`。
- 原文弱點傷害為簡寫；缺少額外傷害分量與武器差異不列為錯誤。

## 圖示來源

[原圖](https://gameslantern.com/storage/sites/darktide/exporter/talents/cryptic/default/cryptic_weakspot_damage.webp)｜[圖片來源 Issue](https://github.com/SyuanTsai/Media-Assets/issues/13#issuecomment-5935647528)｜[圖片附件](https://github.com/user-attachments/assets/4d3197de-7f15-46b8-9df6-153fd0f94642)

圖片僅供技能辨識，不作機制證據。

