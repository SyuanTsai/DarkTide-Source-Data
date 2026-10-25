# 振奮彈幕：本體原文逐規則比較

[玩家說明](README.md)｜[來源索引](SOURCE_INDEX.md)

Steam Build25606770（1.13.1），2026-10-02擷取，資源content/localization/items。名稱鍵`loc_trait_bespoke_toughness_on_continuous_fire`／hash`ee616ba9`；描述鍵`loc_trait_bespoke_toughness_on_continuous_fire_desc`／hash`10c63621`。兩語系以同一資源及hash配對並與完整RAW逐值核對；RAW SHA-256 `c0719a6933c4f3d472a569a8ec841df819eb1b1a03d09d83c5cee05a2a861026`。

- 名稱：Inspiring Barrage／振奮彈幕。
- 名稱區分：替代鍵 `loc_trait_bespoke_toughness_on_continuous_fire_alternative`（hash `02d303b6`）中英RAW為「激勵彈幕／Inspiring Barrage」；本次三型號實際MasterItems名稱鍵為非alternative鍵，使用「振奮彈幕」。保留詞表兩筆，不能只看英文同名就合併。
- 英文模板：{toughness:%s} Toughness for every {ammo:%s} of magazine spent during continuous fire. Stacks {stacks:%s} times.
- 繁中模板：持續射擊期間，每消耗{ammo:%s}彈藥，韌性增加{toughness:%s}，最多疊加{stacks:%s}層。
- **靜態重建**：第四組toughness為+4%、ammo為10%、stacks為5；不是遊戲截圖。

| 規則 | 本體／既有文件描述與位置 | 程式行為與檔案／方法／行號 | 比較結果 | 理由 |
|---|---|---|---|---|
| 基礎值與倍率 | hash10c63621：toughness、stacks占位符 | 1／2／3／4%，min(s,5)；[trait](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_traits/weapon_traits_bespoke_ogryn_heavystubber_p1.lua#L9-L47) | 一致 | 5是單次恢復倍率上限，不是最多觸發5次。 |
| 10%與真實耗彈 | 每消耗10%彈匣 | 按num_shots及floor(C×.1)，usage0也送事件；[門檻](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/fire_step_functions.lua#L21-L35)、[免費射擊](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/weapon/actions/action_shoot.lua#L507-L519) | 明確矛盾 | 免費射擊沒有消耗但仍可推進門檻；實作按次數。 |
| 第五步後 | Stacks5／最多5層 | uncapped檢查，倍率cap5；[觸發](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/weapon_traits_buff_templates/base_weapon_trait_buff_templates.lua#L2004-L2025) | 一致 | 上限限制倍率，繼續射擊仍可恢復。 |
| 最大值或缺額 | Toughness／韌性增加 | 最大韌性×比例後以缺額截斷；[結算](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/toughness/player_unit_toughness_extension.lua#L253-L285) | 文件未涵蓋 | 不是增加最大值或缺額百分比。 |
| 命中、頻率 | during continuous fire | 射擊次數、耗彈事件，不查命中或每秒；[條件](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/weapon_traits_buff_templates/base_weapon_trait_buff_templates.lua#L1991-L2029) | 一致 | 未要求擊中。 |
| 停火及武器切換 | 模板未列 | shoot_finish不直接清，weapon extension按spread清數；[重設](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/weapon/player_unit_weapon_extension.lua#L510-L529) | 文件未涵蓋 | 切換不能一概稱保留或即清。 |
| 恢復倍率與禁用 | 模板未列 | ignore_stat_buffs=true，但regen_disabled會擋；[共用](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/helper_functions/shared_buff_functions.lua#L10-L27)、[禁用](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/toughness/player_unit_toughness_extension.lua#L447-L474) | 文件未涵蓋 | 一般回復增益不乘入。 |
| 可取得等級 | 四組定義 | 有效位元未知；[stickerBook](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/backend/crafting.lua#L62-L89) | 無法確認 | null。 |

未執行遊戲內驗證。MOD只作格式參考，不作名稱、機制或本體原文證據。


## 武器格式值差異

- 原文的ammo格式值：重伐木槍P2顯示10%，實際wrapper以5%計算；撕裂槍格式值與專用步幅都是8%。

- 反衝者與惡棍槍的項目使用另一名稱／描述鍵`loc_trait_bespoke_toughness_on_continuous_fire_alternative`與其`_desc`，本體繁中為「激勵彈幕」、英文同為Inspiring Barrage；不可將其use_combo變體混入本頁射擊次數門檻。
