# 滌罪伺服頭骨(Purgator Servo-Skull)：原始碼依據

[English](en/cryptic_flamethrower.md)

[返回玩家說明](README.md#cryptic_flamethrower)｜[技術索引](SOURCE_INDEX.md)｜[原文比對](LOCALIZATION_COMPARISON.md#cryptic_flamethrower)

- 來源版本：Release 1.13.1；固定 SHA：`7e662fcda16219d775b84af50322be2e9cd9d62e`。
- 天賦：`cryptic_flamethrower`；名稱鍵：`loc_talent_cryptic_servo_skull_flamethrower`；描述鍵：`loc_talent_cryptic_servo_skull_flamethrower_new_desc`。
- 節點：`node_5b3ac425-e484-4aeb-83c9-19ceefa75f2d`；分類：閃擊；每節點一點。
- 證據程度：原始碼確認／程式推導；以下算例屬程式推導，未進行遊戲內測試。

## 原始碼確認與程式推導

- 特長同時加入 cryptic_servo_skull_flamethrower 與 hack_to_allow_grenades 規則，並掛載 servo_skull_extra_grenade 被動。生成函式另外生成一台標記為噴火手雷能力的伺服頭骨，且 can_shoot=false。下令時，start_order_ability 先嘗試醫療頭骨（若該特長已選且目標有效），否則再檢查噴火頭骨及有效落點；噴火驗證要求頭骨存活、處於 following 狀態、目標位置有效且至少有1次 grenade_ability 使用次數。啟動後設成 flamethrower 狀態，正常消耗1次 grenade_ability；只有名為 cryptic_servo_skull_flamethrower_uses_no_charge 的外部關鍵字可免除消耗。火焰動作持續15秒、最大射程10公尺，每幀4道射線；玩家輸入切換 circle/cone 模式。能力 cryptic_servo_skull_order 的基礎上限是3次，且 stat_buff 指向 extra_max_amount_of_grenades。servo_skull_extra_grenade 被動只有在醫療規則也存在時才給該 stat buff +2；玩家能力擴充偵測最大次數增加後補回差額，因此上限為5。噴火與醫療頭骨各自消耗同一個 grenade_ability 資源1次，基礎資料詢問設定消耗0次。

## 原始碼依據

- [scripts/settings/ability/archetype_talents/talents/cryptic_talents.lua：670–710](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/cryptic_talents.lua#L670-L710)
- [scripts/settings/talent/talent_settings_cryptic.lua：43–59](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/talent/talent_settings_cryptic.lua#L43-L59)
- [scripts/settings/ability/player_abilities/abilities/cryptic_abilities.lua：15–29](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/player_abilities/abilities/cryptic_abilities.lua#L15-L29)
- [scripts/utilities/spawn_companions_from_talent.lua：10–63](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/spawn_companions_from_talent.lua#L10-L63)
- [scripts/utilities/companion/companion_servo_skull_ability.lua：39–72](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/companion/companion_servo_skull_ability.lua#L39-L72)
- [scripts/utilities/companion/companion_servo_skull_ability.lua：229–302](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/companion/companion_servo_skull_ability.lua#L229-L302)
- [scripts/settings/companion/companion_servo_skull_settings.lua：15–19](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/companion/companion_servo_skull_settings.lua#L15-L19)
- [scripts/settings/breed/breed_actions/companion/companion_servo_skull_actions.lua：59–90](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/breed/breed_actions/companion/companion_servo_skull_actions.lua#L59-L90)
- [scripts/settings/buff/archetype_buff_templates/cryptic_buff_templates.lua：1211–1241](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/cryptic_buff_templates.lua#L1211-L1241)
- [scripts/extension_systems/ability/player_unit_ability_extension.lua：734–770](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/ability/player_unit_ability_extension.lua#L734-L770)
- [scripts/extension_systems/ability/player_unit_ability_extension.lua：773–804](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/ability/player_unit_ability_extension.lua#L773-L804)
- [scripts/settings/ability/archetype_talents/talents/cryptic_talents.lua：670–710](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/cryptic_talents.lua#L670-L710)
- [scripts/ui/views/talent_builder_view/layouts/cryptic_tree.lua：213–236](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/ui/views/talent_builder_view/layouts/cryptic_tree.lua#L213-L236)

## 算例條件與待確認事項

- 基礎上限3次；同時選擇噴火與醫療後上限變為5次。噴火1次、救援1次會共用並消耗2次，剩3次。
- 噴火下令需要有有效地面位置、存活且正在跟隨的噴火頭骨，並至少剩1次手雷能力使用次數。
- 圈形／錐形模式分別使用 circle／cone；火焰射程上限10公尺，動作最長15秒。
- 增加的2次使用次數以醫療特長也已選取為條件，並加在共用能力上限；此程式分支沒有給單獨噴火特長增加次數。
- 遊戲原文：1.13.1／Steam Build 25606770 的 ui 資源。描述與實作的差異仍需遊戲內核對；省略細節不列為繁中誤譯。

## 原文核對

- 對應 hash：`e66555ce`。
- 繁中描述已涵蓋額外噴火頭骨、落點部署、兩種射擊模式與雙選增加使用次數。固定來源另證明每次噴火消耗共用手雷能力1次、15秒動作與10公尺射程；屬翻譯省略的機制細節，不判為錯譯。Build 25606770 版本對應為1.13.1。

## 圖示來源

[原圖](https://gameslantern.com/storage/sites/darktide/exporter/talents/cryptic/tactical_modifier/cryptic_flamethrower.webp)｜[圖片來源 Issue](https://github.com/SyuanTsai/Media-Assets/issues/13#issuecomment-5935585681)｜[圖片附件](https://github.com/user-attachments/assets/295017d9-50cd-4797-8b33-bd3627a7139f)

圖片僅供技能辨識，不作機制證據。

