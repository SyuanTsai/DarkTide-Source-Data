# 無限抑制器(Uncapped Arrestor)：原始碼依據

[English](en/cryptic_melee_attacks_give_melee_attack_speed.md)

[返回玩家說明](README.md#cryptic_melee_attacks_give_melee_attack_speed)｜[技術索引](SOURCE_INDEX.md)｜[原文比對](LOCALIZATION_COMPARISON.md#cryptic_melee_attacks_give_melee_attack_speed)

- 來源版本：Release 1.13.1；固定 SHA：`7e662fcda16219d775b84af50322be2e9cd9d62e`。
- 天賦：`cryptic_melee_attacks_give_melee_attack_speed`；名稱鍵：`loc_talent_cryptic_melee_attacks_give_melee_attack_speed`；描述鍵：`loc_talent_cryptic_melee_attacks_give_melee_attack_speed_desc`。
- 節點：`node_f5562b92-4ae9-48d4-8334-06be09bef3ca`；分類：技能；每節點一點。
- 證據程度：原始碼確認／程式推導；以下算例屬程式推導，未進行遊戲內測試。

## 原始碼確認與程式推導

- on_sweep_finish且num_hit_units>0，加max5、duration3、refresh_duration_on_stack的melee_attack_speed0.025Buff。

## 原始碼依據

- [scripts/settings/buff/archetype_buff_templates/cryptic_buff_templates.lua：3189–3206](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/cryptic_buff_templates.lua#L3189-L3206)
- [scripts/settings/talent/talent_settings_cryptic.lua：594–598](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/talent/talent_settings_cryptic.lua#L594-L598)
- [scripts/settings/buff/archetype_buff_templates/cryptic_buff_templates.lua：3176–3188](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/cryptic_buff_templates.lua#L3176-L3188)
- [scripts/utilities/action/action_handler.lua：402–423](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/action/action_handler.lua#L402-L423)
- [scripts/settings/ability/archetype_talents/talents/cryptic_talents.lua：2382–2405](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/cryptic_talents.lua#L2382-L2405)
- [scripts/ui/views/talent_builder_view/layouts/cryptic_tree.lua：1317–1346](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/ui/views/talent_builder_view/layouts/cryptic_tree.lua#L1317-L1346)

## 算例條件與待確認事項

- **攻速算例**：5 層提高 12.5% 攻速；若受攻速影響的攻擊動作原需 1 秒，則為 1 ÷ 1.125 ≈ 0.889 秒，實際整套連段還包含其他動作。
- 遊戲原文：1.13.1／Steam Build 25606770 的 ui 資源。描述與實作的差異仍需遊戲內核對；省略細節不列為繁中誤譯。

## 原文核對

- 對應 hash：`ff4edf3b`。
- 雙語一致；補充每次揮擊一層與速率轉時間公式。

## 圖示來源

[原圖](https://gameslantern.com/storage/sites/darktide/exporter/talents/cryptic/default/cryptic_melee_attacks_give_melee_attack_speed.webp)｜[圖片來源 Issue](https://github.com/SyuanTsai/Media-Assets/issues/13#issuecomment-5935653628)｜[圖片附件](https://github.com/user-attachments/assets/8c6107b2-c1ee-4fa6-9465-919f3c4d9d8b)

圖片僅供技能辨識，不作機制證據。

