# 創傷：本體原文逐規則比較

[玩家說明](README.md)｜[來源索引](SOURCE_INDEX.md)

- Steam Build25606770（1.13.1），2026-10-02擷取，資源`content/localization/items`。

- 名稱鍵`loc_trait_bespoke_consecutive_hits_increases_stagger`／hash`af38ab6e`；描述鍵`loc_trait_bespoke_consecutive_hits_increases_stagger_desc`／hash`0d030801`。

- 英文／繁中以同一資源與hash精確配對，完整RAW SHA-256：`c0719a6933c4f3d472a569a8ec841df819eb1b1a03d09d83c5cee05a2a861026`。

- 本體名稱：Trauma／創傷。

- 文件名稱：創傷(Trauma)。

- 適用武器：工兵鏟、「惡魔之爪」劍、撬棍、碾壓者、雷鎚；描述鍵`loc_trait_bespoke_consecutive_hits_increases_stagger_desc`／hash`0d030801`。

- 英文模板：{impact:%s} Impact for {time:%s} seconds on Repeated Hit. Stacks {stacks:%s} times.

- 繁中模板：連續命中後{impact:%s}衝擊，持續{time:%s}秒，可疊加{stacks:%s}次。

- **靜態重建**：本體英文及繁中名稱、描述直接配對自content/localization/items同一RAW資源；name hash af38ab6e、description hash 0d030801。名稱與語句模板保留原文。format_values的impact以各trait等級覆寫重建為14%／16%／18%／20%，time由parent child_duration=2填入、stacks由child max_stacks=5填入；此重建不代表遊戲內顯示截圖；依格式參數重建，並非遊戲畫面。

| 規則 | 本體／既有文件描述與位置 | 程式行為與檔案／方法／行號 | 比較結果 | 理由 |
|---|---|---|---|---|
| 重複命中後增加Impact | 本體描述鍵`loc_trait_bespoke_consecutive_hits_increases_stagger_desc`／hash`0d030801`，英文Repeated Hit／繁中連續命中。 | `base_weapon_trait_buff_templates.lua#L809-L834`監聽on_hit；`buff_utils.lua#L92-L114`計數；`buff.lua#L689-L747`逐有效層加算。 | 一致 | 本體描述重複命中後增加Impact；程式以合格命中事件增加近戰衝擊修正。 |
| 2秒期限與最多5層 | RAW明列`{time}` seconds與`{stacks}` times；hash `0d030801`。 | `base_weapon_trait_buff_templates.lua#L812,#L826`；`weapon_trait_target_number_parent_proc_buff.lua#L27-L39,#L60-L84`。 | 一致 | 占位值實際為2秒與5個有效層；另有一個不計入有效上限的內部占位層。 |
| 冷啟動／逾時後首層門檻 | 本體RAW與既有描述未說明初始計數或逾時後計數狀態。 | `buff_utils.lua#L97-L111`；`weapon_trait_target_number_parent_proc_buff.lua#L27-L39`。 | 文件未涵蓋 | 冷啟動第3個有效事件出現首層；逾時清除後第2個有效事件出現首層，沒有文本明確相反承諾。 |
| 多目標命中計數單位 | RAW只寫Repeated Hit／連續命中，未界定多目標計數。 | `buff_utils.lua#L92-L95`忽略target_number>1；`action_sweep.lua#L1353-L1354,#L1396-L1404`遞增並傳入序號。 | 文件未涵蓋 | 描述省略多目標門檻，不保證一擊命中每個敵人都加層。 |
| 每層額外踉蹌時間倍率 | RAW列Impact、時間與層數占位符，未列另一項duration stat。 | `base_weapon_trait_buff_templates.lua#L829-L833`另設1.1；`stagger.lua#L397-L408`消費通用欄位或切換opt-in欄位。 | 文件未涵蓋 | 共用子Buff另改變一般踉蹌時間；opt-in profile不讀通用欄位。 |
| 切換武器及期限 | RAW與既有描述未涵蓋切換或剩餘時間。 | `base_weapon_trait_buff_templates.lua#L819-L833`持用條件；`player_unit_weapon_extension.lua#L743-L785`切出移除on_wield；父Buff仍更新timeout。 | 文件未涵蓋 | 切出停止計數與stat，但已裝備武器的on_equip trait仍在；2秒期限不暫停。 |
