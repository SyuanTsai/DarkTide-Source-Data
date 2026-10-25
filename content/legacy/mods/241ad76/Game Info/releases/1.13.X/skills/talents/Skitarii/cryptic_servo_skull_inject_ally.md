# 醫療伺服頭骨(Medicae Servo-Skull)：原始碼依據

[English](en/cryptic_servo_skull_inject_ally.md)

[返回玩家說明](README.md#cryptic_servo_skull_inject_ally)｜[技術索引](SOURCE_INDEX.md)｜[原文比對](LOCALIZATION_COMPARISON.md#cryptic_servo_skull_inject_ally)

- 來源版本：Release 1.13.1；固定 SHA：`7e662fcda16219d775b84af50322be2e9cd9d62e`。
- 天賦：`cryptic_servo_skull_inject_ally`；名稱鍵：`loc_talent_cryptic_servo_skull_inject_ally`；描述鍵：`loc_talent_cryptic_servo_skull_inject_ally_revive_new_desc`。
- 節點：`node_f09fc8b6-be58-4bca-8d9c-b4ed66c72473`；分類：閃擊；每節點一點。
- 證據程度：原始碼確認／程式推導；以下算例屬程式推導，未進行遊戲內測試。

## 原始碼確認與程式推導

- 特長加入 cryptic_servo_skull_inject_ally 規則；生成函式因此生成額外醫療頭骨並設 can_shoot=false。下令時從目標玩家單位取得醫療頭骨，驗證它存活且狀態為 following，目標必須是玩家單位、PlayerUnitStatus.requires_allied_interaction_help 為真、沒有吊掛在邊緣，且不在已被協助狀態。能力設定注入消耗量1，啟動狀態 inject_ally 並消耗1次 grenade_ability。注射動作設定 revive=true、延遲1秒後救援，並給予暫時無敵效果。注射後 cryptic_servo_skull_medicae_buff 持續5秒；其韌性承傷乘數為0.25（即承受原傷害的25%，減少75%），每幀按 0.2 × dt 呼叫 recover_percentage_toughness，亦即每秒恢復最大韌性的20%，但受韌性上限約束。talent_settings 還保留 toughness_bonus=50 與 instant_toughness_percent=0.5 的格式值，但原始碼中未找到它們的執行端；實際治療流程目前引用的是上述每秒恢復與承傷乘數。

## 原始碼依據

- [scripts/settings/ability/archetype_talents/talents/cryptic_talents.lua：711–779](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/cryptic_talents.lua#L711-L779)
- [scripts/settings/talent/talent_settings_cryptic.lua：43–49](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/talent/talent_settings_cryptic.lua#L43-L49)
- [scripts/utilities/spawn_companions_from_talent.lua：39–54](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/spawn_companions_from_talent.lua#L39-L54)
- [scripts/utilities/companion/companion_servo_skull_ability.lua：39–55](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/companion/companion_servo_skull_ability.lua#L39-L55)
- [scripts/utilities/companion/companion_servo_skull_ability.lua：305–389](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/companion/companion_servo_skull_ability.lua#L305-L389)
- [scripts/settings/companion/companion_servo_skull_settings.lua：15–19](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/companion/companion_servo_skull_settings.lua#L15-L19)
- [scripts/settings/breed/breed_actions/companion/companion_servo_skull_actions.lua：91–104](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/breed/breed_actions/companion/companion_servo_skull_actions.lua#L91-L104)
- [scripts/settings/buff/archetype_buff_templates/cryptic_buff_templates.lua：1049–1061](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/cryptic_buff_templates.lua#L1049-L1061)
- [scripts/utilities/toughness/toughness.lua：16–24](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/toughness/toughness.lua#L16-L24)
- [scripts/settings/buff/archetype_buff_templates/cryptic_buff_templates.lua：1211–1241](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/cryptic_buff_templates.lua#L1211-L1241)
- [scripts/settings/ability/player_abilities/abilities/cryptic_abilities.lua：15–29](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/player_abilities/abilities/cryptic_abilities.lua#L15-L29)
- [scripts/extension_systems/ability/player_unit_ability_extension.lua：734–770](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/ability/player_unit_ability_extension.lua#L734-L770)
- [scripts/utilities/companion/companion_servo_skull_ability.lua：391–420](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/companion/companion_servo_skull_ability.lua#L391-L420)
- [scripts/settings/ability/archetype_talents/talents/cryptic_talents.lua：711–779](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/cryptic_talents.lua#L711-L779)
- [scripts/ui/views/talent_builder_view/layouts/cryptic_tree.lua：1625–1648](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/ui/views/talent_builder_view/layouts/cryptic_tree.lua#L1625-L1648)

## 算例條件與待確認事項

- 最大韌性100點的隊友在完整5秒恢復期間每秒恢復20點，合計最多100點（若未先達上限）；韌性承傷則維持原本的25%。
- 若玩家同時擁有噴火與醫療兩台頭骨，任一有效噴火指令或一次救援各消耗共用池1次；兩者上限基礎3次，雙選時為5次。
- 只可指定目前需要盟友協助、且未吊掛邊緣或已進入其他協助狀態的玩家隊友；頭骨還必須存活並處於跟隨狀態。
- 每秒恢復量以受援者最大韌性為基準，實際恢復會受韌性上限影響。
- 固定來源定義 +50 韌性與立即恢復最大韌性50%的格式值，但醫療頭骨執行路徑未讀取它們；實際確認到的是每秒恢復20%與韌性承傷乘數0.25。
- 遊戲原文：1.13.1／Steam Build 25606770 的 ui 資源。描述與實作的差異仍需遊戲內核對；省略細節不列為繁中誤譯。

## 原文核對

- 對應 hash：`86ee1b55`。
- 繁中描述已涵蓋救援、75%韌性承傷減免、每秒20%韌性恢復與5秒持續。程式確認承傷乘數0.25代表減免75%，並確認有效目標判斷與共用次數消耗；翻譯沒有列出這些條件屬機制省略。Build 25606770 版本對應為1.13.1。

## 圖示來源

[原圖](https://gameslantern.com/storage/sites/darktide/exporter/talents/cryptic/tactical_modifier/cryptic_servo_skull_inject_ally.webp)｜[圖片來源 Issue](https://github.com/SyuanTsai/Media-Assets/issues/13#issuecomment-5935585681)｜[圖片附件](https://github.com/user-attachments/assets/adeeeef3-0c2e-450a-974b-66ce6c6366bd)

圖片僅供技能辨識，不作機制證據。

