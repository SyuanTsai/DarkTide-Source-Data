# 炸藥儲備(Demolition Stockpile)：原始碼依據

[English](en/veteran_replenish_grenades.md)

來源版本：Release 1.13.1；完整 SHA：`7e662fcda16219d775b84af50322be2e9cd9d62e`。

[返回玩家說明](README.md#veteran_replenish_grenades)｜[來源與限制](../../../README.md)

- 名稱 key：`loc_talent_ranger_replenish_grenade`；描述 key：`loc_talent_veteran_grenade_regeneration_per_grenade_desc`。中文沿用詞表 `Demolition Stockpile - 炸藥儲備`，key 對應暫定、待使用者確認。
- 節點類型 `tactical_modifier`，花費 1 點，上限 1 點。因此歸入閃擊升級，而非光環或獨立手雷替換。[節點定義](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/ui/views/talent_builder_view/layouts/veteran_tree.lua#L1111-L1141)。
- 本文為程式分析，未進行遊戲內驗證。

**原始碼確認 — 引用與作用對象**：天賦的被動效果安裝 `veteran_grenade_replenishment`；天賦系統將被動效果加入持有者的增益效果系統，再操作 `template_context.unit` 的 `grenade_ability`。因此補給持有者自己，不是協同隊友或地面彈藥。[天賦與顯示參數](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/veteran_talents.lua#L1988-L2030)、[被動效果安裝](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/talent/player_unit_talent_extension.lua#L164-L175)、[持有者及種類選擇](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/veteran_buff_templates.lua#L1813-L1841)。

**原始碼確認 — 數值與計時**：補給量為 1；破片手雷 60 秒、穿甲手雷 90 秒、煙霧手雷 60 秒，未匹配名稱時後備值 75 秒。初始化依目前手雷能力的識別名稱選擇週期；尚未找到手雷能力時，在更新函式中重試。[數值](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/talent/talent_settings_veteran.lua#L141-L147)、[重試與缺額](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/veteran_buff_templates.lua#L1843-L1887)。

滿額或沒有手雷能力會清除截止時間。首次觀察到缺額且尚無計時時設 `next_grenade_t = t + C` 並結束本次更新；之後僅當 `t > next_grenade_t` 補 1 顆，清除計時。再次投雷不重設既有截止時間；同一次更新最多補 1 顆，沒有依逾期長度補算多次的迴圈。[完整計時分支](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/veteran_buff_templates.lua#L1855-L1911)。此為週期補給，沒有增益疊層、機率或擊殺條件。

**程式推導 — 結算與上限**：缺額為 `max_ability_charges - remaining_ability_charges`。補給呼叫 `restore_ability_charge(..., 1)`，轉成每顆所需資源量再補入；資源限制在目前上限內，顆數由資源除以每顆成本無條件捨去小數，再限制在顆數上限內。此呼叫指定忽略恢復量加成（`ignore_stat_buffs=true`），跳過「恢復量」的通用加成；並不跳過最大顆數或每顆資源成本的計算。沒有超額儲存。[缺額](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/ability/player_unit_ability_extension.lua#L712-L731)、[轉換](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/ability/player_unit_ability_extension.lua#L1105-L1117)、[恢復量與上下限](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/ability/player_unit_ability_extension.lua#L1127-L1179)、[每顆成本](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/ability/player_unit_ability_extension.lua#L1437-L1461)。

**原始碼確認 — 相關升級與差異**：三種手雷能力均使用 `extra_max_amount_of_grenades` 作為容量屬性；共用容量上限函式會把這個增益值加到能力的原始上限，因此容量升級會影響缺額，但本補給量仍為每次 1 顆。[三種手雷能力](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/player_abilities/abilities/veteran_abilities.lua#L27-L62)、[容量加算](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/ability/player_unit_ability_extension.lua#L734-L770)。

天賦的內部 `name` 仍寫「every 60 seconds」，`format_values.time` 取後備值 75 秒，但另有破片／穿甲／煙霧手雷的專用值；不能把內部名稱欄位或通用時間欄位當作所有類型實際週期。已取得本體語系模板；尚未核對最終格式化畫面，不能宣稱遊戲介面必定顯示錯誤。[顯示資料與被動效果](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/veteran_talents.lua#L1988-L2030)。



**案例與待確認**：見 [POC](../../../docs/POC.md)。在 t=100 首次觀察到破片手雷缺額，t=160 不補給，第一個 t>160 的更新才補給；這是判斷式推導，非精確遊戲排程保證。運行中更換手雷能力時，增益效果是否重建尚未追完；本文件只保證固定配裝存續期間內的種類選擇。初始化函式 `start_func` 直接呼叫能力系統；缺少能力系統的異常初始化是否可實際發生不作結論。未進行遊戲內驗證，未核實官方繁體名稱。

## 圖示來源

[原圖](https://gameslantern.com/storage/sites/darktide/exporter/talents/veteran/tactical_modifier/veteran_replenish_grenades.webp)｜[圖片來源 Issue](https://github.com/SyuanTsai/Media-Assets/issues/6)｜[圖片附件](https://github.com/user-attachments/assets/511ac082-cbea-4af3-8f8e-3dfeab7ca2bf)

圖片僅供技能辨識，不作機制證據。

