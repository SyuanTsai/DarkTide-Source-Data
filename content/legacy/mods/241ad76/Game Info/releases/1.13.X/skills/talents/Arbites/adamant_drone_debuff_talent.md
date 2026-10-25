# 畏怯正義(Fear of Justice)：原始碼依據

[English](en/adamant_drone_debuff_talent.md)

[返回玩家說明](README.md#adamant_drone_debuff_talent)｜[技術索引](SOURCE_INDEX.md)｜[原文比對](LOCALIZATION_COMPARISON.md#adamant_drone_debuff_talent)

- 來源版本：Release 1.13.1；固定 SHA：`7e662fcda16219d775b84af50322be2e9cd9d62e`。
- 天賦：`adamant_drone_debuff_talent`；名稱鍵：`loc_talent_adamant_drone_debuff_talent`；描述鍵：`loc_talent_adamant_drone_debuff_talent_desc`。
- 節點：`node_99a483b6-3ac6-42da-b2ab-b0d3dcc062e9`；分類：能力；每節點一點。
- 證據程度：原始碼確認／程式推導；以下算例屬程式推導，未進行遊戲內測試。

## 原始碼確認與程式推導

- 敵人位於傳令機區域時，額外獲得近戰攻速 −25% 與近戰傷害 −25% 的 stat buff。
- 天賦介面對攻速欄位的格式轉換固定回傳 50；buff 統計將 additive multiplier −0.25 加到基礎 1，得到 0.75。
- 敵人近戰行為以攻擊動作時間除以攻速倍率；0.75 會把不受最低時間限制的攻擊動作延長至約 1.333 倍。此實作與介面顯示的 50% 攻擊間隔增加不相符，須以同版遊戲或官方說明確認後再勘誤。

## 原始碼依據

- [scripts/settings/ability/archetype_talents/talents/adamant_talents.lua：622–646](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/adamant_talents.lua#L622-L646)
- [scripts/settings/talent/talent_settings_adamant.lua：67–83](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/talent/talent_settings_adamant.lua#L67-L83)
- [scripts/settings/buff/archetype_buff_templates/adamant_buff_templates.lua：484–492](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/adamant_buff_templates.lua#L484-L492)
- [scripts/settings/buff/buff_settings.lua：863–863](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/buff_settings.lua#L863-L863)
- [scripts/settings/buff/buff_settings.lua：1045–1057](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/buff_settings.lua#L1045-L1057)
- [scripts/extension_systems/buff/buffs/buff.lua：689–731](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/buff/buffs/buff.lua#L689-L731)
- [scripts/extension_systems/behavior/nodes/actions/bt_melee_attack_action.lua：45–51](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/behavior/nodes/actions/bt_melee_attack_action.lua#L45-L51)
- [scripts/extension_systems/behavior/nodes/actions/bt_melee_attack_action.lua：259–270](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/behavior/nodes/actions/bt_melee_attack_action.lua#L259-L270)
- [scripts/settings/talent/talent_settings_adamant.lua：67–83](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/talent/talent_settings_adamant.lua#L67-L83)
- [scripts/settings/ability/archetype_talents/talents/adamant_talents.lua：622–646](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/adamant_talents.lua#L622-L646)
- [scripts/ui/views/talent_builder_view/layouts/adamant_tree.lua：1253–1275](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/ui/views/talent_builder_view/layouts/adamant_tree.lua#L1253-L1275)

## 算例條件與待確認事項

- 100 點近戰傷害×(1−25%)=75 點。
- 若攻速倍率為 0.75，1 秒基準動作時間÷0.75≈1.33 秒；相當於間隔延長約 33%，介面標示 50% 的差異待核。
- 攻速例子忽略敵人近戰動作的最低時間門檻、其他攻速修正及遊戲版本差異；程式係數與介面顯示值不一致，不能直接將介面 50% 當作每次攻擊的實際延遲比例。
- 文字與程式來源皆為1.13.1；實際表現仍待遊戲內核對；數值與行為按固定來源提交說明。
- 遊戲原文：1.13.1／Steam Build 25606770 的 ui 資源。描述與實作的差異仍需遊戲內核對；省略細節不列為繁中誤譯。

## 原文核對

- 對應 hash：`b1b69549`。
- 繁中寫「攻擊速度降低 50%」，英文寫「time between … attacks, is increased by 50%」。固定來源的介面格式值是 50%，但實際近戰攻速 stat 設為 −25%，敵人行為按攻速倍率反算時間約延長 33%；目前有實作與文字差異；兩來源皆為1.13.1，實際表現待遊戲內核對。

## 圖示來源

[原圖](https://gameslantern.com/storage/sites/darktide/exporter/talents/adamant/ability_modifier/adamant_drone_debuff_talent.webp)｜[圖片來源 Issue](https://github.com/SyuanTsai/Media-Assets/issues/11#issuecomment-5932554216)｜[圖片附件](https://github.com/user-attachments/assets/483804fa-b052-4baa-b3d7-5e7dbfbe44f4)

圖片僅供技能辨識，不作機制證據。

