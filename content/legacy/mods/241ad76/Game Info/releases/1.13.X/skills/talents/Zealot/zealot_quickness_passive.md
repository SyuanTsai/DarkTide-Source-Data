# 命定審判(Inexorable Judgement)：原始碼依據

[English](en/zealot_quickness_passive.md)

[返回玩家說明](README.md#zealot_quickness_passive)｜[技術索引](SOURCE_INDEX.md)｜[原文比對](LOCALIZATION_COMPARISON.md#zealot_quickness_passive)

- 來源版本：Release 1.13.1；固定 SHA：`7e662fcda16219d775b84af50322be2e9cd9d62e`。
- 天賦：`zealot_quickness_passive`；名稱鍵：`loc_talent_zealot_quickness`；描述鍵：`loc_talent_zealot_quickness_desc`。
- 節點：`node_86295aae-d8b7-4c66-9862-29d98ae57798`；分類：鑰石；每節點一點。
- 證據程度：原始碼確認／程式推導；以下算例屬程式推導，未進行遊戲內測試。

## 原始碼確認與程式推導

- 核心鑰石掛載 parent-proc buff，將移動距離還原為子 buff `zealot_quickness_counter` 層數；每 5 公尺加 1 層，衝刺距離乘 2，子 buff 上限 20 並保留未滿 5 公尺的餘數。
- Buff 註冊 `on_hit` 與 `on_successful_dodge`。基礎節點只有 melee/ranged hit 可移除子 buff 層數；成功閃避只有選用 `zealot_quickness_passive_dodge_stacks` 特殊規則後才增加層數。
- 在近戰或遠程命中檢查時，若相應 Quickness active buff 已存在就不消耗計數；否則將移除的層數加入 6 秒 active buff。每層給 melee/ranged attack speed 與 damage 各 +1%，另有逐層閃避速度、距離及閃避冷卻重置 stat 修正。
- 沒有堆層逾時或週期性衰退程式；計數是移動距離累積，滿層封頂。消耗時是否連帶立即回韌性取決於另一個非本清單節點，這份基礎節點本身未啟用該特殊規則。

## 原始碼依據

- [scripts/settings/ability/archetype_talents/talents/zealot_talents.lua：945–1010](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/zealot_talents.lua#L945-L1010)
- [scripts/settings/talent/talent_settings_zealot.lua：556–561](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/talent/talent_settings_zealot.lua#L556-L561)
- [scripts/settings/buff/archetype_buff_templates/zealot_buff_templates.lua：165–312](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/zealot_buff_templates.lua#L165-L312)
- [scripts/ui/views/talent_builder_view/layouts/zealot_tree.lua：1164–1197](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/ui/views/talent_builder_view/layouts/zealot_tree.lua#L1164-L1197)
- [scripts/utilities/action/action_handler.lua：356–429](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/action/action_handler.lua#L356-L429)
- [scripts/extension_systems/character_state_machine/character_states/player_character_state_dodging.lua：253–267](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/character_state_machine/character_states/player_character_state_dodging.lua#L253-L267)
- [scripts/settings/ability/archetype_talents/talents/zealot_talents.lua：945–1010](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/zealot_talents.lua#L945-L1010)
- [scripts/ui/views/talent_builder_view/layouts/zealot_tree.lua：1164–1197](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/ui/views/talent_builder_view/layouts/zealot_tree.lua#L1164-L1197)

## 算例條件與待確認事項

- **傷害與速度**：每層增加 1% 傷害、1% 近戰攻速及 1% 遠程攻速。滿 20 層時，基礎 100 點變成 100 × 1.2 = 120 點；受影響的 1 秒動作變成 1 ÷ 1.2 ≈ 0.833 秒。同階段其他加成先相加。
- 成功閃避本身不增加基礎 Quickness 計數，須選用閃避升級才會增加。
- 傷害與攻速示例未包括其他來源修正；active buff 的閃避 stat 不等於額外閃避次數。
- 距離由角色 locomotion 速度逐幀累計，例子忽略取樣精度與伺服器更新差異。
- 遊戲原文：1.13.1／Steam Build 25606770 的 ui 資源。描述與實作的差異仍需遊戲內核對；省略細節不列為繁中誤譯。

## 原文核對

- 對應 hash：`634bdcc4`。
- 繁中及英文都表達移動累積、命中後獲得攻速／射速增益；精確距離、上限、觸發條件及額外 stat 由實作補足。

## 圖示來源

[原圖](https://gameslantern.com/storage/sites/darktide/exporter/talents/zealot/keystone/zealot_quickness_passive.webp)｜[圖片來源 Issue](https://github.com/SyuanTsai/Media-Assets/issues/8#issuecomment-5929289315)｜[圖片附件](https://github.com/user-attachments/assets/0a442a9a-29b1-4a94-b85c-5772f9d85d7c)

圖片僅供技能辨識，不作機制證據。

