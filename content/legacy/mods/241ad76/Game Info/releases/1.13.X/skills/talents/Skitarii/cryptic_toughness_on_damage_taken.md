# 動能分配器(Kinetic Energy Distributors)：原始碼依據

[English](en/cryptic_toughness_on_damage_taken.md)

[返回玩家說明](README.md#cryptic_toughness_on_damage_taken)｜[技術索引](SOURCE_INDEX.md)｜[原文比對](LOCALIZATION_COMPARISON.md#cryptic_toughness_on_damage_taken)

- 來源版本：Release 1.13.1；固定 SHA：`7e662fcda16219d775b84af50322be2e9cd9d62e`。
- 天賦：`cryptic_toughness_on_damage_taken`；名稱鍵：`loc_talent_cryptic_toughness_on_damage_taken`；描述鍵：`loc_talent_cryptic_toughness_on_damage_taken_desc`。
- 節點：`node_3e6adc1b-2f91-43a9-9653-c2fa76c19f0b`；分類：技能；每節點一點。
- 證據程度：原始碼確認／程式推導；以下算例屬程式推導，未進行遊戲內測試。

## 原始碼確認與程式推導

- 生成器allow_proc_while_active=true；本模板設定cooldown=10，但ProcBuff只讀cooldown_duration，本固定來源中10秒未進入冷卻判定。
- on_damage_taken需要attacked_unit==self與damage_amount>0，重新計時toughness_left_to_restore=0.25與active5秒。
- Damage.deal_damage把生命damage分量存為damage_amount；韌性另存toughness_damage_amount，本條件只看前者。

## 原始碼依據

- [scripts/settings/buff/archetype_buff_templates/cryptic_buff_templates.lua：77–111](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/cryptic_buff_templates.lua#L77-L111)
- [scripts/extension_systems/buff/buffs/proc_buff.lua：151–194](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/buff/buffs/proc_buff.lua#L151-L194)
- [scripts/extension_systems/toughness/player_unit_toughness_extension.lua：253–285](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/toughness/player_unit_toughness_extension.lua#L253-L285)
- [scripts/settings/talent/talent_settings_cryptic.lua：579–583](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/talent/talent_settings_cryptic.lua#L579-L583)
- [scripts/settings/buff/archetype_buff_templates/cryptic_buff_templates.lua：3130–3146](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/cryptic_buff_templates.lua#L3130-L3146)
- [scripts/utilities/attack/damage.lua：154–225](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/attack/damage.lua#L154-L225)
- [scripts/settings/ability/archetype_talents/talents/cryptic_talents.lua：2318–2340](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/cryptic_talents.lua#L2318-L2340)
- [scripts/ui/views/talent_builder_view/layouts/cryptic_tree.lua：1290–1316](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/ui/views/talent_builder_view/layouts/cryptic_tree.lua#L1290-L1316)

## 算例條件與待確認事項

- **恢復算例**：最大韌性 100 時，每秒恢復 100 × 25% ÷ 5 = 5 點；第 2 秒再次受傷，恢復可延至第 7 秒，期間最多恢復 35 點。
- 原文10秒冷卻與固定來源不一致，需同版遊戲確認。
- 遊戲原文：1.13.1／Steam Build 25606770 的 ui 資源。描述與實作的差異仍需遊戲內核對；省略細節不列為繁中誤譯。

## 原文核對

- 對應 hash：`655fac7c`。
- 中英均宣稱10秒冷卻，固定來源寫入未被ProcBuff使用的cooldown欄位。屬共同文字/實作落差，非繁中誤譯；待遊戲內驗證。

## 圖示來源

[原圖](https://gameslantern.com/storage/sites/darktide/exporter/talents/cryptic/default/cryptic_toughness_on_damage_taken.webp)｜[圖片來源 Issue](https://github.com/SyuanTsai/Media-Assets/issues/13#issuecomment-5935653628)｜[圖片附件](https://github.com/user-attachments/assets/eae28459-1a70-43fc-a5ff-35d2b3adc0eb)

圖片僅供技能辨識，不作機制證據。

