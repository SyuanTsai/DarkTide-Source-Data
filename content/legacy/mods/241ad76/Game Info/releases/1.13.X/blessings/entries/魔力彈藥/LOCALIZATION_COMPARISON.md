# 魔力彈藥：本體原文逐規則比較

[玩家說明](README.md)｜[來源索引](SOURCE_INDEX.md)

Steam Build25606770（1.13.1），2026-10-02擷取，資源content/localization/items。名稱鍵`loc_trait_bespoke_ammo_refill_from_reserve_on_crit`／hash`0c513155`；描述鍵`loc_trait_bespoke_ammo_refill_from_reserve_on_crit_desc`／hash`d343e6d7`。兩語系以同一資源及hash配對並與完整RAW逐值核對；RAW SHA-256 `c0719a6933c4f3d472a569a8ec841df819eb1b1a03d09d83c5cee05a2a861026`。

- 名稱：Charmed Reload／魔力彈藥。
- 英文模板：{bullet_amount:%s} bullets loaded from Reserve on Critical Hit.
- 繁中模板：暴擊後從預留彈藥中裝填{bullet_amount:%s}發子彈。
- **靜態重建**：第四組bullet_amount為5；不是遊戲截圖。

| 規則 | 本體／既有文件描述與位置 | 程式行為與檔案／方法／行號 | 比較結果 | 理由 |
|---|---|---|---|---|
| 射擊還是命中 | hashd343e6d7：英文Critical Hit；繁中暴擊後 | 新的on_critical_strike，不查命中；[判定](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/weapon/actions/action_weapon_base.lua#L148-L184) | 明確矛盾 | 英文Hit暗示需命中，實際射空成功判定也觸發；繁中暴擊較接近事件。 |
| 轉移數量 | bullet_amount占位符 | 2／3／4／5發；[trait](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_traits/weapon_traits_bespoke_ogryn_heavystubber_p1.lua#L362-L391) | 一致 | 依實際等級覆寫。 |
| 來源與總量 | loaded from Reserve／從預留彈藥裝填 | 備彈減a，彈匣加a；[轉移](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/weapon_traits_buff_templates/base_weapon_trait_buff_templates.lua#L2985-L2998) | 一致 | 譯名正文採詞表備彈，非生成。 |
| 滿匣與空備彈 | 模板未列 | min(N,缺額,備彈)；[最小值](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/weapon_traits_buff_templates/base_weapon_trait_buff_templates.lua#L2987-L2998) | 文件未涵蓋 | 有上限且可為零。 |
| 延續暴擊／多目標 | 模板未列 | 延續不重新判定；[連發](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/weapon/actions/action_shoot.lua#L1020-L1048) | 文件未涵蓋 | 不是每個暴擊傷害都觸發。 |
| 疊層／冷卻／切換 | 模板未列 | 普通proc無冷卻，只在持用觸發；[Buff](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/weapon_traits_buff_templates/base_weapon_trait_buff_templates.lua#L2970-L3000) | 文件未涵蓋 | 沒有額外層數時效。 |
| 可取得等級 | 四級定義 | 需有效位元；[stickerBook](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/backend/crafting.lua#L62-L89) | 無法確認 | null。 |

未執行遊戲內驗證。MOD只作格式參考，不作名稱、機制或本體原文證據。
