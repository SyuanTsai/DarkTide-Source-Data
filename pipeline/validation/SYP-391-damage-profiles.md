# SYP-391 spec23：damageProfiles 驗證紀錄

## 範圍與固定輸入

- Windows、PowerShell 7.6.9、Node 24.19.0。
- Source-Code：`e46b8926cfa3fa35503e4b80b15aab7a804314e4`（1.13.4），透過 `createSourceReader` 讀 Git blobs，未改來源 repo。
- 原契約：`../SYP-391.damageProfiles.contract.json`；SHA-256 `70dcee4852189a57987756a7712116f249b697ec36d13896202b3d1a45c6b097`。
- schema 巢狀定義逐欄與原契約一致；測試 fixture 同時保存近戰／遠程契約範例。
- 工作根目錄：`F:/GitFile/Persion - Games/DarkTide-Pipeline-Work/damage-profiles/`。未改 `pipeline/state.json`、baseline、雲端、其他 repo 或全域設定；未下載、安裝或 push。

## 已完成的正式抽取行為

`extract-weapons` 一律輸出 `values.damageProfiles`，共用既有靜態 reader、require/catalog 及 effects guard。逐 action 追蹤 profile 與 hitScan／projectile／shotshell／flamerGas／explosion 模板；保留 hip／ADS 等個別 binding 的 powerLevel，不把同 action 下不相干的模板與 profile 交叉配對。共用 `grenade_ability_*` 不屬於武器 mark。

輸出 root／數字 target／default target、near／far 的 attack／impact 原始固定值或兩端點及來源 path:line。先 clone parent 再依來源順序套 override；整表指定會替換整表，alias 中間表隔離後才寫入。可證明長度 0／1 的 row 依 `WeaponTweaks.create_new` 的零次迴圈視為 no-op；nil 或可能為 nil 的末值會改變 Lua `#row` 邊界，因此 fail closed，不能當成一般末端欄位指定或刪除。

無法解讀的 override 集合、row、key 或不存在的中間路徑使模板 fail closed，不略過。動態端點為 `DYNAMIC_VALUE`；未明示為 `NOT_EXPOSED_BY_SOURCE`；找不到 profile 為 `NOT_VERIFIED`。不可靠的 binding／私有 clone 以 unknown 或 problems 回報。combo 的非 null profile 外鍵必有對應記錄。

## 1.13.4 固定來源純數值實跑

由 `buildWeapons` 加 `writeExtract` 跑完整 137 把的正式抽取路徑，文字 lookup 明確回傳 null，`textBatch` 標為 `source-only`。這是純數值驗證，不能當成指定 Private ref／26101089 的完整 CLI 實跑。

| 統計 | 本次 | inv3 | 差異 |
| --- | ---: | ---: | --- |
| attack／impact 可取得／部分／無法取得（把） | 113／24／0 | 137／0／0 | 嚴格檢查末值後，24 把部分 unknown |
| 適用 powerLevel 完整／未明示（把，完整含不適用） | 88／49 | 88／49 | 無 |
| 實際明示 powerLevel（把） | 2 | 2 | 無 |
| 無 hitScan／projectile binding（把） | 86 | 86 | 無 |
| 不同 profile id | 472 | 472 | 無 |
| 各武器 profile 記錄合計 | 883 | — | 同 profile 可跨 mark 重複 |
| attack／impact 原始端點欄位 | 4,858 | — | 4,644 已知，214 unknown |

24 把的差異來自 71 個不同 profile id（各武器合計 107 筆記錄）的 override 末值無法由現有 reader／effects guard 證明非 nil，例如 `chain_axe_damage_profile_templates.lua:939–942` 的 `damage_types.sawing_stuck`。Lua 的 `#row` 可能因此改變，會連帶改變寫入路徑，不能只保留 parent 的 attack／impact 並忽略該值。正式抽取把整個受影響模板標為 `DYNAMIC_VALUE`，輸出未知分佈並記 problems；沒有套用盤點腳本未經此項證明的覆蓋數字，也沒有放寬靜態解析或 effects guard。單獨的 enum 定義可靜態讀取不等於在完整載入閉包中已證明綁定完整。

受影響的 mark 為 chainaxe 2、chainsword_2h 2、chainsword 2、combataxe 5、crowbar 1、forcesword_2h 2、ogryn_club 2、ogryn_powermaul 3、powermaul_2h 2、powermaul 2、saw 1；逐把及來源列保存在驗證報告的 `summary.partial`。

另有 392 筆 `DAMAGE_ACTION_UNKNOWN`，主要為執行期建構的 inspect／unwield，以及 crowbar 的 melee start。這些動作不能靜態展開，明確列 problems；上述統計只代表已識別 profile 的原始數值覆蓋，不宣稱完整執行期 action 圖譜。`DAMAGE_PROFILE_UNKNOWN` 為 107 筆，`DAMAGE_BINDING_UNKNOWN` 為 0。

產物：`<工作根目錄>/source-only/extract/weapons.json`。驗證報告：`<工作根目錄>/source-only/damage-profiles-validation.json`。依原契約的 `schema` 原樣建立獨立 schema，使用 `pipeline/lib/json-schema.mjs` 逐把驗證全部 137 個 `damageProfiles` 陣列，並用 `validateExtractItems` 驗證整批 extract；錯誤 0，未使用 ajv。

兩次完整重建的輸出 byte 相同，SHA-256：`49aa4b0de25b80e054b7513cab64f764e8c257c9aa1bc4b525c54b5d5801af87`。

本機驗證腳本與完整測試 log 均保存在工作根目錄：`source-only-run.mjs`、`validate-contract.mjs`、`pipeline-tests.log`。重跑契約驗證：

```powershell
$work = 'F:/GitFile/Persion - Games/DarkTide-Pipeline-Work/damage-profiles'
node "$work/validate-contract.mjs" "$PWD" "$work/source-only" '../SYP-391.damageProfiles.contract.json'
```

## 指定 Private CLI 實跑的阻礙

以下指令實際失敗，錯誤為「無法讀取批次 26101089 manifest」：

```powershell
$work = 'F:/GitFile/Persion - Games/DarkTide-Pipeline-Work/damage-profiles'
node pipeline/extract-text.mjs --private-repo 'F:/GitFile/Persion - Games/DARKTIDE User Setting' --private-ref origin/master --text-batch 26101089 --work-dir $work --state "$work/state.json"
```

本機 `origin/master` 為 `023801b15933eac762b796667deb9cb5f3460a81`，其 `localization` 僅有 `25606770`。已有的 `origin/codex/SYP-391-export-26101089`／`bd69e8965a9ec09925ae74abf4110fbdd0cb7c49` 包含 `26101089`；沒有自行換 ref、fetch、更新遠端追蹤 ref 或修改 Private repo。替代 ref 已向使用者提出確認；尚未收到授權前，完整 CLI 驗證保持待辦。

取得指定批次後的武器 CLI 命令：

```powershell
node pipeline/extract-weapons.mjs --source-code-repo 'F:/GitFile/Persion - Games/Darktide-Source-Code' --commit e46b8926cfa3fa35503e4b80b15aab7a804314e4 --text-batch 26101089 --work-dir $work --state "$work/state.json"
```

需重跑上述武器 CLI 兩次，核對 byte 一致，再對完整 CLI 輸出重跑原契約驗證。沒有雲端寫入步驟，因此未使用 `--cloud-dir`。

## 測試與待辦

- 契約及抽取情境測試已按 Red → Green 驗證，涵蓋多 target、near／far、hitScan 明示／缺失／動態 powerLevel、hip／ADS、override 順序／整表替換／alias 隔離／nil 與可能 nil 末值／no-op、無法解讀的 override、動態容器／clone、缺失／循環繼承、combo 外鍵、1.0.0／非武器拒收及重跑一致。
- `node --test tests/pipeline/damage-profiles-extract.test.mjs tests/pipeline/damage-profiles.test.mjs`：22 通過。
- `node --test tests/pipeline/`：308 個，302 通過、6 個需另行啟用的實跑測試略過、0 失敗。完整 log 存在工作根目錄。
- 待辦只包括指定 Private ref／26101089 的完整 CLI 實跑、該輸出的 byte 比對與契約再驗證；外掛相容 PR 的合併／發布順序仍依主控安排。本次不開 PR、不 push。
