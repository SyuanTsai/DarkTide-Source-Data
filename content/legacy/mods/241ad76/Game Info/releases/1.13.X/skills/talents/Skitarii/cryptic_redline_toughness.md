# 脈衝延伸(Surge-Extension)：原始碼依據

[English](en/cryptic_redline_toughness.md)

[返回玩家說明](README.md#cryptic_redline_toughness)｜[技術索引](SOURCE_INDEX.md)｜[原文比對](LOCALIZATION_COMPARISON.md#cryptic_redline_toughness)

- 來源版本：Release 1.13.1；固定 SHA：`7e662fcda16219d775b84af50322be2e9cd9d62e`。
- 天賦：`cryptic_redline_toughness`；名稱鍵：`loc_talent_cryptic_power_generation_one_more_charge`；描述鍵：`loc_talent_cryptic_redline_toughness_clarified_desc`。
- 節點：`node_d8193dca-b6d3-428a-b970-654b16fda839`；分類：鑰石；每節點一點。
- 證據程度：原始碼確認／程式推導；以下算例屬程式推導，未進行遊戲內測試。

## 原始碼確認與程式推導

- 設定值為5秒與25%韌性。子模板由共用的韌性持續恢復生成器建立，監聽戰鬥技能充能補回與消耗事件。
- 生成器啟動時把 toughness_left_to_restore 設為0.25；更新期間每秒按0.05×dt扣除預算並以 Toughness.replenish_percentage 恢復。Redline 子模板將持續時間和總量改為設定中的5秒與0.25。
- 能力系統一次充能變化可以把實際增加或消耗的充能總數寫進單一事件參數；此恢復模板的 proc_func 不讀取數量，每次事件只把預算重設為0.25。因此同一事件增加多層不會多次乘算恢復量；事件在恢復期間再發生時也會重新計時主動時間並重設預算。
- 韌性恢復按最大韌性比例計算，受已缺失韌性上限、韌性恢復停用條件及既有 toughness_replenish_modifier / toughness_replenish_multiplier 影響。
- 此模板直接監聽充能事件且check_proc_func=nil，沒有檢查極限電容是否實際增加層數；已滿層仍會觸發。

## 原始碼依據

- [scripts/settings/ability/archetype_talents/talents/cryptic_talents.lua：1482–1505](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/cryptic_talents.lua#L1482-L1505)
- [scripts/settings/talent/talent_settings_cryptic.lua：346–349](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/talent/talent_settings_cryptic.lua#L346-L349)
- [scripts/settings/buff/archetype_buff_templates/cryptic_buff_templates.lua：77–105](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/cryptic_buff_templates.lua#L77-L105)
- [scripts/settings/buff/archetype_buff_templates/cryptic_buff_templates.lua：1974–1983](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/cryptic_buff_templates.lua#L1974-L1983)
- [scripts/extension_systems/ability/player_unit_ability_extension.lua：865–879](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/ability/player_unit_ability_extension.lua#L865-L879)
- [scripts/extension_systems/ability/player_unit_ability_extension.lua：1064–1075](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/ability/player_unit_ability_extension.lua#L1064-L1075)
- [scripts/extension_systems/ability/player_unit_ability_extension.lua：1559–1580](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/ability/player_unit_ability_extension.lua#L1559-L1580)
- [scripts/extension_systems/buff/buffs/proc_buff.lua：323–355](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/buff/buffs/proc_buff.lua#L323-L355)
- [scripts/utilities/toughness/toughness.lua：16–25](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/toughness/toughness.lua#L16-L25)
- [scripts/extension_systems/toughness/player_unit_toughness_extension.lua：253–279](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/toughness/player_unit_toughness_extension.lua#L253-L279)
- [scripts/settings/ability/archetype_talents/talents/cryptic_talents.lua：1482–1505](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/cryptic_talents.lua#L1482-L1505)
- [scripts/ui/views/talent_builder_view/layouts/cryptic_tree.lua：2013–2035](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/ui/views/talent_builder_view/layouts/cryptic_tree.lua#L2013-L2035)

## 算例條件與待確認事項

- 靜態推演：最大韌性100時，一次觸發最多設定25點恢復預算，按每秒5點恢復5秒。若恢復3秒後再次觸發，倒數重回5秒，尚未用完的預算會重設為25點；已恢復的韌性不會倒扣。
- 恢復量是最大韌性的百分比，不是目前缺口的25%；韌性已滿時不會超過上限。
- 恢復會受到韌性恢復停用狀態及其他韌性恢復修正影響。
- 繁中與英文都以獲得一層描述觸發；固定版以充能變化事件處理，若單一事件帶入多個充能，這項恢復仍只計一次。
- 遊戲原文：1.13.1／Steam Build 25606770 的 ui 資源。描述與實作的差異仍需遊戲內核對；省略細節不列為繁中誤譯。

## 原文核對

- 對應 hash：`5f6b15fb`。
- 繁中與英文都表示獲得極限電容層數時恢復25%韌性、持續5秒，固定版設定與模板採用相同總量和時間。程式按充能變化事件觸發，且單一事件即使增加多層也只啟動一次恢復；這是實際觸發粒度的補充，未發現足以判定為誤譯的相反描述。

## 圖示來源

[原圖](https://gameslantern.com/storage/sites/darktide/exporter/talents/cryptic/keystone_modifier/cryptic_redline_toughness.webp)｜[圖片來源 Issue](https://github.com/SyuanTsai/Media-Assets/issues/13#issuecomment-5935647528)｜[圖片附件](https://github.com/user-attachments/assets/d199d3e7-4b94-4288-bf17-acbd915bdeaf)

圖片僅供技能辨識，不作機制證據。

