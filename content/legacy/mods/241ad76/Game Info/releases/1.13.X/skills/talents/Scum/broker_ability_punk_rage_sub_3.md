# 沸騰之血(Forge's Bellow)：原始碼依據

[English](en/broker_ability_punk_rage_sub_3.md)

[返回玩家說明](README.md#broker_ability_punk_rage_sub_3)｜[技術索引](SOURCE_INDEX.md)｜[原文比對](LOCALIZATION_COMPARISON.md#broker_ability_punk_rage_sub_3)

- 來源版本：Release 1.13.1；固定 SHA：`7e662fcda16219d775b84af50322be2e9cd9d62e`。
- 天賦：`broker_ability_punk_rage_sub_3`；名稱鍵：`loc_talent_broker_ability_punk_rage_sub_3`；描述鍵：`loc_talent_broker_ability_punk_rage_sub_3_desc_02`。
- 節點：`node_32f5f38d-828f-4993-8fcf-ebd1f1f30199`；分類：能力；每節點一點。
- 證據程度：原始碼確認／程式推導；以下算例屬程式推導，未進行遊戲內測試。

## 原始碼確認與程式推導

- 選取規則 broker_rage_improved_shout 後，狀態 start_func 與 stop_func 分別呼叫怒吼；停止時只在角色仍存活、伺服器端處理，且固定設定 use_exhaust=false 的分支下觸發第二次。怒吼半徑由 shout_radius=4.5 設定。
- 怒吼執行 broker_rage_shout 目標模板，非已踉蹌敵人可被強制重踉蹌；另對 4.5 公尺內敵人加入持續5秒的 debuff。
- debuff 只寫入 melee_attack_speed=-0.5。該屬性為加算攻擊速度修正，因此速度倍率為0.5；用速度倒數估算，週期為原來1/0.5=2倍，時間間隔增加100%。格式欄位雖顯示「攻擊間隔增加50%」，實際設定為近戰攻速減半，兩者不能等同。

## 原始碼依據

- [scripts/settings/ability/archetype_talents/talents/broker_talents.lua：425–455](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/broker_talents.lua#L425-L455)
- [scripts/settings/talent/talent_settings_broker.lua：142–168](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/talent/talent_settings_broker.lua#L142-L168)
- [scripts/settings/buff/archetype_buff_templates/broker_buff_templates.lua：488–541](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/broker_buff_templates.lua#L488-L541)
- [scripts/settings/buff/archetype_buff_templates/broker_buff_templates.lua：615–646](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/broker_buff_templates.lua#L615-L646)
- [scripts/settings/buff/archetype_buff_templates/broker_buff_templates.lua：715–729](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/broker_buff_templates.lua#L715-L729)
- [scripts/settings/ability/shout_target_templates.lua：35–45](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/shout_target_templates.lua#L35-L45)
- [scripts/settings/buff/buff_settings.lua：860–864](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/buff_settings.lua#L860-L864)
- [scripts/extension_systems/behavior/nodes/actions/bt_melee_attack_action.lua：259–278](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/behavior/nodes/actions/bt_melee_attack_action.lua#L259-L278)
- [scripts/settings/ability/archetype_talents/talents/broker_talents.lua：425–455](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/broker_talents.lua#L425-L455)
- [scripts/ui/views/talent_builder_view/layouts/broker_tree.lua：1949–1971](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/ui/views/talent_builder_view/layouts/broker_tree.lua#L1949-L1971)

## 算例條件與待確認事項

- **速度算例**：減速前近戰攻擊間隔若為 1 秒，攻擊速度倍率變成 1−0.5=0.5，間隔估算為 1/0.5=2 秒，增加100%。
- 5秒是敵人減速 debuff 的持續時間；怒火基本持續10秒，實際可能因近戰命中延長。
- 攻擊間隔算例只計此攻速修正，實際敵人動作仍受原始攻擊動畫與其他修正影響。
- 遊戲原文：1.13.1／Steam Build 25606770 的 ui 資源。描述與實作的差異仍需遊戲內核對；省略細節不列為繁中誤譯。

## 原文核對

- 對應 hash：`aa1fa2de`。
- 繁中與英文皆稱攻擊間隔增加50%，因此沒有兩語反向翻譯。固定版本程式卻把敵人 melee_attack_speed 設為-0.5；按速度倒數，單計此效果攻擊間隔約變兩倍（增加100%），另有遠程攻擊不受此近戰欄位影響。故記錄程式與文字數值落差，不填翻譯勘誤。

## 圖示來源

[原圖](https://gameslantern.com/storage/sites/darktide/exporter/talents/broker/ability_modifier/broker_ability_punk_rage_sub_3.webp)｜[圖片來源 Issue](https://github.com/SyuanTsai/Media-Assets/issues/12#issuecomment-5933978534)｜[圖片附件](https://github.com/user-attachments/assets/c23bede2-8365-4a28-9fcf-0aa91847923a)

圖片僅供技能辨識，不作機制證據。

