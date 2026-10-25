# 強化亡命之徒(Enhanced Desperado)：原始碼依據

[English](en/broker_ability_focus_improved.md)

[返回玩家說明](README.md#broker_ability_focus_improved)｜[技術索引](SOURCE_INDEX.md)｜[原文比對](LOCALIZATION_COMPARISON.md#broker_ability_focus_improved)

- 來源版本：Release 1.13.1；固定 SHA：`7e662fcda16219d775b84af50322be2e9cd9d62e`。
- 天賦：`broker_ability_focus_improved`；名稱鍵：`loc_talent_broker_ability_focus_improved`；描述鍵：`loc_talent_broker_ability_focus_improved_desc`。
- 節點：`node_4fa187c3-c910-4e93-b982-cc2e68d2515b`；分類：能力；每節點一點。
- 證據程度：原始碼確認／程式推導；以下算例屬程式推導，未進行遊戲內測試。

## 原始碼確認與程式推導

- 此節點接到 broker_ability_focus_improved，沿用 broker_focus 共用模板並改掛強化版狀態 buff。buff 加入 sprint_movement_speed=0.20、sprinting_cost_multiplier=0、count_as_dodge_vs_ranged 與 suppression_immune；衝刺速度屬加算修正，例算為基礎 100 × (1+0.20)=120。
- 近距離標記依敵方單位位置與玩家位置計算，距離門檻取 ranged_close=12.5 公尺，並限於具有列入名單敵人標籤的單位。狀態開始時記錄起始時間；擊殺事件須為死亡結果、遠程攻擊（或武器設定視為遠程）且命中點距攻擊者不超過 12.5 公尺。
- 延長函式以自啟動時間除以 duration_max=20 取整，將 duration_extend=1 秒除以 duration_divisor=5 的相應次方；因此經過 20 秒後為 0.2 秒、40 秒後為 0.04 秒。 buff 起始時間最多推至目前時刻，避免取得已經過去的持續時間。
- 開始時把彈匣子彈移回儲備並裝滿彈匣，同時開啟免費彈藥轉移；停止時關閉免費轉移並整理彈匣。強化版的擊殺處理才延長時間；依天賦規則附加的其他效果另由相應分支節點決定。
- 遠程擊殺以近距離擊殺檢查；針槍追蹤另有獨立條件：只記錄指定針槍、狀態期間遠程命中且目標仍存活的敵人；死亡事件須由 toxin 傷害造成，且死亡位置距 params.attacking_unit 的位置不超過 12.5 公尺。這是已追蹤的針槍毒素死亡例外，不能概括為所有中毒死亡。
- 能力為單次充能，資源每秒自然恢復 1、每次消耗 45；在狀態 buff 存在時暫停充能，離開狀態才恢復。

## 原始碼依據

- [scripts/settings/ability/archetype_talents/talents/broker_talents.lua：104–151](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/broker_talents.lua#L104-L151)
- [scripts/settings/talent/talent_settings_broker.lua：119–141](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/talent/talent_settings_broker.lua#L119-L141)
- [scripts/settings/ability/player_abilities/abilities/broker_abilities.lua：37–65](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/player_abilities/abilities/broker_abilities.lua#L37-L65)
- [scripts/settings/buff/archetype_buff_templates/broker_buff_templates.lua：67–180](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/broker_buff_templates.lua#L67-L180)
- [scripts/settings/buff/archetype_buff_templates/broker_buff_templates.lua：243–485](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/broker_buff_templates.lua#L243-L485)
- [scripts/settings/buff/broker_buff_utils.lua：99–190](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/broker_buff_utils.lua#L99-L190)
- [scripts/settings/buff/helper_functions/check_proc_functions.lua：306–318](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/helper_functions/check_proc_functions.lua#L306-L318)
- [scripts/settings/buff/helper_functions/check_proc_functions.lua：777–792](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/helper_functions/check_proc_functions.lua#L777-L792)
- [scripts/settings/damage/damage_settings.lua：18–23](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/damage/damage_settings.lua#L18-L23)
- [scripts/settings/buff/buff_settings.lua：977–978](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/buff_settings.lua#L977-L978)
- [scripts/extension_systems/ability/player_unit_ability_extension.lua：839–884](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/ability/player_unit_ability_extension.lua#L839-L884)
- [scripts/settings/ability/archetype_talents/talents/broker_talents.lua：104–151](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/broker_talents.lua#L104-L151)
- [scripts/ui/views/talent_builder_view/layouts/broker_tree.lua：578–607](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/ui/views/talent_builder_view/layouts/broker_tree.lua#L578-L607)

## 算例條件與待確認事項

- **算例**：只計此技能時，100 × (1 + 20%) = 120 衝刺速度；每次擊殺延長量在 20 秒後為 1 ÷ 5 = 0.2 秒，在 40 秒後為 1 ÷ 5² = 0.04 秒。
- 12.5 公尺近距離檢查使用攻擊者位置與命中點／死亡位置；不可把「毒素擊殺」單獨當成充分條件。
- 文字列有基礎冷卻，但實際冷卻還受狀態持續時間暫停影響；若擊殺延長狀態，恢復時間相應往後。
- 遊戲原文：1.13.1／Steam Build 25606770 的 ui 資源。描述與實作的差異仍需遊戲內核對；省略細節不列為繁中誤譯。

## 原文核對

- 對應 hash：`a1148a57`。
- 繁中與英文都描述遠程攻擊視同閃避、衝刺免耗耐力並加速、近距離標記與遠程擊殺延長；固定版本設定值與計時邏輯相符。針槍毒素的額外追蹤條件是程式補充，原文省略不作勘誤。

## 圖示來源

[原圖](https://gameslantern.com/storage/sites/darktide/exporter/talents/broker/ability/broker_ability_focus_improved.webp)｜[圖片來源 Issue](https://github.com/SyuanTsai/Media-Assets/issues/12#issuecomment-5933978534)｜[圖片附件](https://github.com/user-attachments/assets/785f7b2c-0591-4cc4-b928-31c26b07d0f7)

圖片僅供技能辨識，不作機制證據。

