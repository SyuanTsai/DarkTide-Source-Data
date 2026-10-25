# 電能驅動(Voltaic Motivator)：原始碼依據

[English](en/cryptic_discharge_attack_speed_increase.md)

[返回玩家說明](README.md#cryptic_discharge_attack_speed_increase)｜[技術索引](SOURCE_INDEX.md)｜[原文比對](LOCALIZATION_COMPARISON.md#cryptic_discharge_attack_speed_increase)

- 來源版本：Release 1.13.1；固定 SHA：`7e662fcda16219d775b84af50322be2e9cd9d62e`。
- 天賦：`cryptic_discharge_attack_speed_increase`；名稱鍵：`loc_talent_cryptic_discharge_two_charge_bonus`；描述鍵：`loc_talent_cryptic_discharge_attack_speed_bonus_desc`。
- 節點：`node_1ce53612-4ce0-40b6-8769-abcae20328b9`；分類：能力；每節點一點。
- 證據程度：原始碼確認／程式推導；以下算例屬程式推導，未進行遊戲內測試。

## 原始碼確認與程式推導

- Discharge action 在非 base 版本、且天賦 special rule 已選時，每次都加入攻擊速度 buff，並將 lerp 值設為消耗充能數 / 最大充能數；程式未以 num_charges_used_required=2 作執行門檻。
- Buff 固定 stat_buffs.attack_speed=0.05，另以 lerp 0–(0.05 × 3) 依消耗份數提供 0.05 × n；總值為 0.05 + 0.05n，持續 15 秒。
- format_values 中顯示的 charge=2 取自 num_charges_used_required，但此欄位沒有被 Action 或 buff 作為門檻讀取。依固定來源執行碼，1 道消耗時也能觸發基礎加成；文字與程式來源皆為1.13.1；實際表現仍待遊戲內核對。
- 本機中英原文均無至少2份的門檻；未使用的format_values.charge=2不等於現行玩家文字有此限制。

## 原始碼依據

- [scripts/settings/ability/archetype_talents/talents/cryptic_talents.lua：162–194](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/cryptic_talents.lua#L162-L194)
- [scripts/settings/talent/talent_settings_cryptic.lua：82–89](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/talent/talent_settings_cryptic.lua#L82-L89)
- [scripts/extension_systems/ability/actions/action_cryptic_discharge.lua：101–105](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/ability/actions/action_cryptic_discharge.lua#L101-L105)
- [scripts/settings/buff/archetype_buff_templates/cryptic_buff_templates.lua：846–864](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/cryptic_buff_templates.lua#L846-L864)
- [scripts/utilities/action/action_handler.lua：402–423](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/action/action_handler.lua#L402-L423)
- [scripts/settings/ability/archetype_talents/talents/cryptic_talents.lua：162–194](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/cryptic_talents.lua#L162-L194)
- [scripts/ui/views/talent_builder_view/layouts/cryptic_tree.lua：1055–1077](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/ui/views/talent_builder_view/layouts/cryptic_tree.lua#L1055-L1077)

## 算例條件與待確認事項

- **攻速算例**：消耗 1、2、3 份時，合計增加 10%、15%、20%。若受影響的攻擊動作原需 1 秒，消耗 3 份後為 1 ÷ 1.20 ≈ 0.833 秒。
- 比例算例假設此技能正常按所消耗充能數縮放；若其他效果強制視同消耗 3 道，Action 會用 3 道作加成值。
- 固定來源程式在消耗 1 道時也套用加成；format_values 的「2 道」欄位沒有在執行條件中使用，需在同版核對後再判斷是否屬遊戲文字差異。
- 遊戲原文：1.13.1／Steam Build 25606770 的 ui 資源。描述與實作的差異仍需遊戲內核對；省略細節不列為繁中誤譯。

## 原文核對

- 對應 hash：`204600f6`。
- 已逐項比對本機同一描述鍵的繁中與英文，觸發、作用方向及數值占位一致；主文補充實際分母、時間與限制，省略細節不列錯誤。

## 圖示來源

[原圖](https://gameslantern.com/storage/sites/darktide/exporter/talents/cryptic/ability_modifier/cryptic_discharge_attack_speed_increase.webp)｜[圖片來源 Issue](https://github.com/SyuanTsai/Media-Assets/issues/13#issuecomment-5935640756)｜[圖片附件](https://github.com/user-attachments/assets/b74a0dba-64ed-40b6-b630-792c413387cd)

圖片僅供技能辨識，不作機制證據。

