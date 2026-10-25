# 一點都不痛！(No Pain!)：原始碼依據

[English](en/ogryn_taunt_restore_toughness.md)

[返回玩家說明](README.md#ogryn_taunt_restore_toughness)｜[技術索引](SOURCE_INDEX.md)｜[原文比對](LOCALIZATION_COMPARISON.md#ogryn_taunt_restore_toughness)

- 來源版本：Release 1.13.1；固定 SHA：`7e662fcda16219d775b84af50322be2e9cd9d62e`。
- 天賦：`ogryn_taunt_restore_toughness`；名稱鍵：`loc_talent_ogryn_taunt_restore_toughness`；描述鍵：`loc_talent_ogryn_taunt_restore_toughness_new_desc`。
- 節點：`node_2f3d7564-5550-4782-bc81-919d31b686dd`；分類：能力；每節點一點。
- 證據程度：原始碼確認／程式推導；以下算例屬程式推導，未進行遊戲內測試。

## 原始碼確認與程式推導

- talent_settings_shared.ogryn_taunt_restore_toughness 設定duration=3.25、instant_toughness=0.1、max_stacks=20、toughness_per_hit=0.005。
- ActionOgrynShout 執行 shout 後不論 num_hits 是否為0都送出 on_ogryn_shout 事件。被動每次事件先呼叫 replenish_percentage(...,0.1)，再把 min(num_hits,20) 層加入 over_time buff。
- over_time buff 的 update_func 以 stack_count×0.005×dt 持續恢復最大韌性百分比；疊層時 refresh_duration_on_stack=true，最多20層。Repeat taunt 的兩次 pulse 經同一 shout 流程觸發。

## 原始碼依據

- [scripts/settings/ability/archetype_talents/talents/ogryn_talents.lua：2507–2537](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/ogryn_talents.lua#L2507-L2537)
- [scripts/settings/talent/talent_settings_ogryn.lua：150–155](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/talent/talent_settings_ogryn.lua#L150-L155)
- [scripts/settings/buff/archetype_buff_templates/ogryn_buff_templates.lua：3364–3400](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/ogryn_buff_templates.lua#L3364-L3400)
- [scripts/extension_systems/ability/actions/action_ogryn_shout.lua：81–105](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/ability/actions/action_ogryn_shout.lua#L81-L105)
- [scripts/settings/buff/archetype_buff_templates/ogryn_buff_templates.lua：415–437](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/ogryn_buff_templates.lua#L415-L437)
- [scripts/extension_systems/toughness/player_unit_toughness_extension.lua：253–279](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/toughness/player_unit_toughness_extension.lua#L253-L279)
- [scripts/settings/ability/archetype_talents/talents/ogryn_talents.lua：2507–2537](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/ogryn_talents.lua#L2507-L2537)
- [scripts/ui/views/talent_builder_view/layouts/ogryn_tree.lua：1498–1524](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/ui/views/talent_builder_view/layouts/ogryn_tree.lua#L1498-L1524)

## 算例條件與待確認事項

- **分段算例**：最大韌性 100，三次嘲諷各影響 4 名敵人，立即恢復合計 100 × 10% × 3 = 30 點；持續恢復層數依序為 4、8、12，每秒恢復 2、4、6 點。
- **總量算例**：忽略更新誤差、期間一直有足夠缺額且沒有其他恢復加成時，前 3 秒恢復 2 × 3 = 6 點、接著 3 秒恢復 4 × 3 = 12 點、最後 3.25 秒恢復 6 × 3.25 = 19.5 點；加上立即恢復共 67.5 點。實際仍受每個時間點的韌性缺額限制。
- 每次脈衝提供的敵人層數以20層為上限；實際恢復不會超過目前韌性缺口。
- 更新函式連續按時間恢復，不是只在整秒瞬間跳一次。
- format_values.duration寫3，buff實際3.25秒；列為顯示值與實作的差異，版本對應為1.13.1前不當繁中誤譯。分段總量67.5點忽略固定更新邊界與自然恢復。
- 遊戲原文：1.13.1／Steam Build 25606770 的 ui 資源。描述與實作的差異仍需遊戲內核對；省略細節不列為繁中誤譯。

## 原文核對

- 對應 hash：`03dc3a99`。
- 同源繁中與英文的恢復條件、比例與上限一致。固定來源描述格式duration為3秒，執行buff為3.25秒；這是共同顯示值與實作差異，實際顯示待遊戲內核對，不單憑此判定繁中誤譯。

## 圖示來源

[原圖](https://gameslantern.com/storage/sites/darktide/exporter/talents/ogryn/ability_modifier/ogryn_taunt_restore_toughness.webp)｜[圖片來源 Issue](https://github.com/SyuanTsai/Media-Assets/issues/10#issuecomment-5931383354)｜[圖片附件](https://github.com/user-attachments/assets/80ee299a-c486-4957-bf40-6b1d631fd748)

圖片僅供技能辨識，不作機制證據。

