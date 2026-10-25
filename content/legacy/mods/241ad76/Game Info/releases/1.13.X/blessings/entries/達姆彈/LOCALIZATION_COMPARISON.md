# 達姆彈：本體原文逐規則比較

[玩家說明](README.md)｜[來源索引](SOURCE_INDEX.md)

Steam Build25606770（1.13.1），2026-10-02擷取，資源content/localization/items。名稱鍵`loc_trait_bespoke_consecutive_hits_increases_close_damage`／hash`ad18b72c`；描述鍵`loc_trait_bespoke_consecutive_hits_increases_close_damage_desc`／hash`3d294b66`。兩語系以同一資源及hash配對並與完整RAW逐值核對；RAW SHA-256 `c0719a6933c4f3d472a569a8ec841df819eb1b1a03d09d83c5cee05a2a861026`。

- 名稱：Dumdum／達姆彈。
- 英文模板：{damage:%s} Close Range damage on Repeated Hit. Stacks {stacks:%s} times.
- 繁中模板：連續命中後{damage:%s}近戰傷害，可疊加{stacks:%s}次。
- **靜態重建**：第四組damage為+6%，stacks為5；不是遊戲截圖。

| 規則 | 本體／既有文件描述與位置 | 程式行為與檔案／方法／行號 | 比較結果 | 理由 |
|---|---|---|---|---|
| 作用對象 | hash3d294b66：Close Range damage；繁中近戰傷害 | damage_near距離結算；[距離](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/attack/damage_calculation.lua#L284-L297) | 明確矛盾 | 繁中混淆近距離與近戰，射擊傷害亦受益。 |
| 數值與上限 | damage、stacks占位符 | 4.5／5／5.5／6%，5有效層；[trait](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_traits/weapon_traits_bespoke_autogun_p1.lua#L14-L63) | 一致 | 以實際覆寫和子Buff補值。 |
| 距離門檻 | Close Range未寫範圍 | 12.5至30公尺平方根插值；[常數](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/damage/damage_settings.lua#L18-L26)、[結算](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/attack/damage_calculation.lua#L284-L293) | 文件未涵蓋 | 不是8公尺或線性。 |
| 目標限制 | Repeated Hit／連續命中 | 不比較attacked_unit；[函式](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/buff_utils.lua#L92-L114) | 一致 | Repeated未要求同目標。 |
| 首次與重啟 | 模板未列 | 初始第三次，逾期後第二次；[計數](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/buff_utils.lua#L92-L114)、[重設](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/buff/buffs/weapon_trait_target_number_parent_proc_buff.lua#L27-L39) | 文件未涵蓋 | 初始化nil與重設0不同。 |
| 每發與穿透 | 模板未列 | 每合格on_hit計數，hitscan target_number預設0；[呼叫](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/attack/hit_scan.lua#L215-L240)、[預設](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/attack/attack.lua#L92-L100) | 文件未涵蓋 | 不能固定寫每發只一層。 |
| 射空、期限與切換 | 模板未列 | 有效層2秒、射空不即清、切出停效果；[類別](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/buff/buffs/weapon_trait_target_number_parent_proc_buff.lua#L14-L86) | 文件未涵蓋 | 滿層仍刷新。 |
| 可取得等級 | 四組定義 | 需有效位元；[stickerBook](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/backend/crafting.lua#L62-L89) | 無法確認 | null。 |

未執行遊戲內驗證。MOD只作格式參考，不作名稱、機制或本體原文證據。
