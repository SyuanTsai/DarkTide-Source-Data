# W13 Lasgun P1-M1 Source candidate

Status: pending human review. Publication eligibility is false. No W13 review receipts or human approvals are included.

## English technical review

This bounded candidate adds one same-release ranged representative, `lasgun_p1_m1`, to the existing W07 weapon contract. It does not replace or edit the approved W07 records. The candidate contains 9 pending records and 26 pending review targets: one weapon, two attack profiles, the selected parent and M1 damage profiles, two ammo stat definitions, and two ammo stat curves.

The 16-file public-code closure is pinned to commit `ba6c148f3c2768ca3ce20d846a12e56e2f433f3e`, release `darktide:1.13.2`, and the existing build label `25681127`. The canonical Base64 files under `content/imports/w13/raw/` preserve 244,937 decoded source bytes. `content/imports/w13/closure-inventory.json` records each repository path, byte count, SHA-256, and Git blob SHA-1. The source snapshot has id `lasgun-p1-m1-w13-1.13.2-16-files`; its generated row hashes are in `content/imports/w13/source-snapshot.json` and `docs/contracts/w13/lasgun-p1-m1-source-facts.json`.

The weapon binds `action_shoot_hip` to hipfire and `action_shoot_zoomed` to ADS. Both are source-described semi-auto hit-scan actions. Each action has `ammunition_usage = 3` and `allow_shots_with_less_than_required_ammo = true`; this means the source permits an action when fewer than three ammo units remain and records a per-action usage value of 3. It does not mean one trigger event fires three projectiles. The hit-scan template carries raw `range = 100`; the source does not establish a unit for that value. The `chain_time = 0.275` values are retained as chain-action source rows and are not presented as a measured firing rate.

Ammo stat curves preserve the caller-resolved normalized input endpoints and source table values: `ammunition_clips` maps 0 to 80 and 1 to 120; `ammunition_reserve` maps 0 to 480 and 1 to 960. `weapon_tweak_templates.lua` resolves the basic/perfect endpoints, applies the supplied trait `t` through `math.lerp`, and computes stat minimum/maximum through the same caller. `math.lua` defines the local linear formula without clamping. These are client-source endpoint mappings; they do not establish server-generated values or the values a player can obtain.

The selected M1 damage profile remains explicitly parented to `default_lasgun_killshot`. Its `power_distribution.attack` endpoints are 150 and 300; its `power_distribution.impact` endpoints are 4 and 10. The parent profile’s `ranges.min/max` are raw 7 and 15. Those parent range values are separate from the hit-scan template’s raw `range = 100`; no unit is inferred for these source values. The M1 near/far resistant attack entries use their own override rows. The parent profile’s near/far branches and all eight armor keys per parent table are retained separately, so parent values are not relabeled as M1 overrides.

Only pinned static source is imported. The importer does not execute Lua, perform final-damage arithmetic, claim game-tested behavior, assert historical binary equivalence, infer ammo attainability, or add other weapon marks. `dataCoverage` marks omitted fields as `NOT_IMPORTED`; it does not mislabel unimported fields as source-unknown facts.

Useful source locators include:

- `lasgun_p1_m1.lua:205-339` for hipfire/ADS actions, ammo usage, partial-ammo behavior, and hit-scan bindings; `:634-639` for the base ammo stat binding.
- `lasgun_hitscan_templates.lua:18-22` for the M1 hit-scan template and raw range.
- `lasgun_damage_profile_templates.lua:165-188` for parent values and `:302-333` for the M1 parent link and overrides.
- `ammo_trait_templates.lua:5-18`, `weapon_ammo_templates.lua:283-292`, `weapon_tweak_templates.lua:74,371-401,434-451,553-587`, and `math.lua:72-74` for the bounded ammo mapping.

Reproduction from this repository root uses the existing Node runtime:

```powershell
node scripts/content/imports/w13-lasgun-p1-m1.mjs
node scripts/content/imports/w13-lasgun-p1-m1.mjs --write
node --test tests/w13-ranged-import.test.mjs
```

The no-argument importer command validates without writing. The `--write` command is deterministic and refuses unrecognized authoring changes. It accepts an existing W13 candidate only when its generated records and pinned sources still match; it preserves existing review receipts and review state.

## 中文技術對照

此候選仍待人工審查，尚未具備發布資格，也沒有新增 W13 審查收據或宣稱人工批准。

本次只在既有 W07 武器契約增量加入同版遠程代表 `lasgun_p1_m1`，不替換或改寫已批准的 W07 記錄。共 9 筆待審記錄、26 個待審欄位目標：1 筆武器、2 筆攻擊設定、既有父 damage profile 與 M1 override、2 筆彈藥 stat definition、2 筆彈藥 stat curve。

16 檔公開程式來源固定於 commit `ba6c148f3c2768ca3ce20d846a12e56e2f433f3e`、版本 `darktide:1.13.2` 與既有 build 標記 `25681127`。`content/imports/w13/raw/` 下的 canonical Base64 解碼後共 244,937 bytes；`content/imports/w13/closure-inventory.json` 記錄每一個來源路徑、byte 數、SHA-256 與 Git blob SHA-1。快照 ID 為 `lasgun-p1-m1-w13-1.13.2-16-files`，產生的列摘要在 `content/imports/w13/source-snapshot.json` 及 `docs/contracts/w13/lasgun-p1-m1-source-facts.json`。

武器把 `action_shoot_hip` 綁到 hipfire，把 `action_shoot_zoomed` 綁到 ADS；來源將兩者描述為半自動 hitscan。每個 action 的 `ammunition_usage = 3`，且 `allow_shots_with_less_than_required_ammo = true`。這表示來源允許剩餘彈藥少於 3 個單位時仍觸發該 action，並記錄每次 action 的消耗值為 3；不表示一次按下會發射 3 顆彈丸。Hitscan 原始欄位為 `range = 100`，來源沒有證明其單位。`chain_time = 0.275` 只保留為連接 action 的來源列，不當作實測射速。

彈藥 stat curve 保留 caller 實際解析出的 normalized input 端點及來源表值：`ammunition_clips` 為 0→80、1→120；`ammunition_reserve` 為 0→480、1→960。`weapon_tweak_templates.lua` 解析 basic/perfect 端點，以輸入 trait `t` 呼叫 `math.lerp`，並由同一 caller 計算 stat 最小值與最大值；`math.lua` 定義未夾限的線性公式。這是客戶端來源的端點映射，不證明伺服器產生值或玩家可取得的彈藥值。

M1 damage profile 明確繼承 `default_lasgun_killshot`。M1 的 `power_distribution.attack` 端點為 150、300；`power_distribution.impact` 端點為 4、10。父 profile 的 `ranges.min/max` 原值為 7、15，與 hitscan template 的原始 `range = 100` 分開保存；這些來源數值均不推定單位。M1 近、遠距 resistant attack 各自保留 override 列。父 profile 的近、遠分支與各表 8 種 armor key 另外保存，避免把父值標成 M1 override。

匯入範圍只有固定靜態程式來源。Importer 不執行 Lua、不計算最終傷害、不宣稱已實機測試或與歷史二進位完全等價、不推測玩家可取得的彈藥範圍，也不加入其他 mark。`dataCoverage` 對未整理欄位標記 `NOT_IMPORTED`，不會把未匯入欄位誤標成來源未知。
