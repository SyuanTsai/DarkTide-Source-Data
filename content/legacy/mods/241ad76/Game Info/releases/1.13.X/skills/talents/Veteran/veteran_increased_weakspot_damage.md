# 堅定不移(Precision Strikes)：原始碼依據

[English](en/veteran_increased_weakspot_damage.md)

[返回玩家說明](README.md#veteran_increased_weakspot_damage)｜[技術索引](SOURCE_INDEX.md)

- 來源版本：Release 1.13.1；SHA：`7e662fcda16219d775b84af50322be2e9cd9d62e`。
- 天賦：`veteran_increased_weakspot_damage`；名稱鍵：`loc_talent_veteran_increased_weakspot_damage`；描述鍵：`loc_talent_veteran_increased_weakspot_damage_desc`。
- [節點](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/ui/views/talent_builder_view/layouts/veteran_tree.lua#L125-L153)：`default`，花費 1 點；[天賦定義](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/veteran_talents.lua#L1004-L1020)。
- 名稱對應沿用翻譯表；未進行遊戲內驗證。

## 原始碼確認與程式推導

天賦給予 weakspot_damage = 0.30。共用傷害計算只在 hit_weakspot 時將該值納入 finesse modifier，再乘算 finesse damage component；不會將整筆攻擊傷害直接乘 1.30。算例假設 base=100、既有 weakspot finesse component=40，則 component 40 × 1.30 = 52，總值 100+52=152。[天賦與數值](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/veteran_talents.lua#L1004-L1020) → [buff](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/veteran_buff_templates.lua#L2115-L2121) → [弱點／finesse 傷害計算](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/attack/damage_calculation.lua#L672-L782)。

## 原始碼依據

- [scripts/settings/ability/archetype_talents/talents/veteran_talents.lua，第 1004–1020 行](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/veteran_talents.lua#L1004-L1020)
- [scripts/settings/talent/talent_settings_veteran.lua，第 110–112 行](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/talent/talent_settings_veteran.lua#L110-L112)
- [scripts/settings/buff/archetype_buff_templates/veteran_buff_templates.lua，第 2115–2121 行](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/veteran_buff_templates.lua#L2115-L2121)
- [scripts/utilities/attack/damage_calculation.lua，第 672–782 行](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/attack/damage_calculation.lua#L672-L782)

## 百分比與實際傷害增幅

- **程式推導**：令 B 為該次弱點命中在第 95 行相加前的非 finesse 部分，F 為第 708／710 行算出的 base_finesse_damage，s 為此次攻擊適用的既有 finesse 同階段加成。新增本天賦前為 B + F × (1 + s)，之後為 B + F × (1 + s + 0.30)，該階段相對增幅為 0.30 × F ÷ [B + F × (1 + s)]。原傷害大於零才可計算增幅；後續特殊減傷或額外傷害流程須另行追算。
- 玩家例固定未暴擊、無其他變動，後續倍率為 1：B=100、F=100、s=0，200→230（15%）；F=200 時 300→360（20%）；B=F=100、s=.25 時 225→255（約13.33%）。這些是控制變因的公式算例，未指派給任何具名武器。
- F 由 damage profile 的護甲別 finesse boost、弱點部位修正、暴擊、boost curve、武器插值及傷害下限共同決定。暴擊且命中弱點時，先合成並限制 boost amount，再套入同一 finesse component；不可把一次非暴擊弱點傷害與一次暴擊傷害直接相加。
- B 也使用此次命中的護甲與攻擊條件；身體與頭部可能有不同護甲、部位倍率，不能用「爆頭傷害減身體傷害」直接反推 F。沒有指定武器型號、蓄力程度、目標及同條件測試，無法證實「盧修斯固定15%、自動槍固定更多」。

- [scripts/utilities/attack/damage_calculation.lua，第 60–109 行](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/attack/damage_calculation.lua#L60-L109)
- [scripts/utilities/attack/damage_calculation.lua，第 672–782 行](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/attack/damage_calculation.lua#L672-L782)

## 算例條件與待確認事項

- 玩家頁算例按列出的基礎值及條件計算；未列出的加成、護甲、部位、距離及遊戲更新誤差不納入。
- 靜態推導不等同遊戲實測；名稱識別鍵與既有譯名的對應仍待使用者確認。
- 算例將 100 視為非 finesse 基礎部分、40 視為已算出的弱點 finesse component；不是對所有武器或敵人的固定實戰數字。

## 圖示來源

[原圖](https://gameslantern.com/storage/sites/darktide/exporter/talents/veteran/default/veteran_increased_weakspot_damage.webp)｜[圖片來源 Issue](https://github.com/SyuanTsai/Media-Assets/issues/6#issuecomment-5922922455)｜[圖片附件](https://github.com/user-attachments/assets/d10f9131-4785-4bff-91a6-af630759b2dd)

圖片僅供技能辨識，不作機制證據。

