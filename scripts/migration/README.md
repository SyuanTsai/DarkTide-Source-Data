# SYP-391 一次性舊文案遷移

Windows、pwsh 7、Node 24。此工具將固定的線上 `1.13.4.5` 快取轉為 repo 外的 `1.13.4` baseline 草稿與局部修復任務。**不改核心契約**：直接呼叫 pipeline 現有 schema、`checkValues`、`checkText`、譯名檢查；不修改 pipeline state，不執行遊戲／Lua，不寫入 Web、Mods 或來源 repo，不抓網路。

## 指令與來源

```powershell
$migrationOut = 'F:/GitFile/Persion - Games/DarkTide-Pipeline-Work/migration/syp-391'
$migrationExtract = "$migrationOut/run/spec10/work/extract"
$migrationCache = 'F:/GitFile/Persion - Games/DarkTide-Web-worktrees/_inventory/wp0-scripts/cache'
$migrationTranslation = 'F:/GitFile/Persion - Games/Warhammer-40-000-DARKTIDE-Mods/Referneces/Translation.md'
node scripts/migration/syp-391-baseline.mjs prepare --extract-dir $migrationExtract --legacy-cache $migrationCache --out $migrationOut --translation $migrationTranslation
# 下一包完成並審閱局部 patch 後：
node scripts/migration/syp-391-baseline.mjs apply --extract-dir $migrationExtract --legacy-cache $migrationCache --out $migrationOut --translation $migrationTranslation
```

`prepare` 與 `apply` 都必須提供 `--extract-dir`、`--legacy-cache`、`--out`。`--translation` 依序預設為 `DARKTIDE_GLOSSARY_FILE` 或相鄰 Mods 的 `Referneces/Translation.md`，內容 hash 綁定任務。`--out` 必須是任何 Git repo 外的絕對路徑，可自動建立；worktree、bare repo、逃離輸出根或指向 repo 的 junction／symlink 都拒絕。

CLI 固定 manifest bytes SHA-256、revision `3688cf214c4498d88dd8b1be42c423cb363f9602e7031b9d7a556abacddb2ea7`、656 個來源檔的 hash／大小，以及各類 mapping 和文案數量。extract 必須是 schema `1.1.0`、Source-Code `e46b8926cfa3fa35503e4b80b15aab7a804314e4`、batch `26101089`；數量為武器 137、祝福 682、技能 618、術語 103。缺漏、歧義、未知 part／section、缺 binding 一律停止。單元測試用小 fixture 呼叫相同純函式，無線上或大型檔依賴。

## 輸出

```text
<out>/
  draft/data/current.json
  draft/data/1.13.4/{weapons,blessings,skills,terms}.json
  migration-map.json
  repair/tasks/<itemFileName>.json
  repair/patches/<itemFileName>.json  # 下一包提供；本工具不代寫
  report.json
  baseline/data/...                 # 僅 apply 全部非 blocked 項目通過才建立
```

draft 只含 81 份舊文案，不帶 `retainedFrom`。mapping 核對全部 694 個舊實體（82／610／1／1），記錄來源路徑、原文與 hash，另保存 Web presentation／術語標籤和引用。身份、name、official、values、aliases、source 都取本輪 extract。武器 note→effect；各 detailSection 同名對應；parts 依 claim 展開；四階原序保留；術語 definition→effect，context 精確比對。

祝福與技能的舊 effects 移到 notes，effect 暫放 raw `official.zh`，不實作展開器。若 effect 無法通過既有檢查，report 列 `blocked:official-effect`；apply 排除它們並明列 blocked。所有官方 effect 都鎖定，不能由局部修復 patch 改寫。

## 修復任務與 patch

每個項目各一份 hash 綁定任務；通過的項目只接受排除 patch，不接受文字變更。失敗項目的任務含完整舊五節、候選五節、extract、逐條 code／path／message／locations、允許範圍與不可修改內容。句子按 `。；;！？!?` 或換行切割，保留分隔符和空白；index 為零起算，start／end 是 JavaScript UTF-16 offset，end 不含尾端位置。對每句單獨呼叫原 `checkText` 定位。跨句失敗用 `scope: "section"`；`T_COVERAGE` 是全文缺少數值涵蓋，不能把每個單句的缺覆蓋誤當定位，因此以 calculation（若有內容）或 notes 整節作補充範圍。report 的 `scopeSectionTasks` 計入任何 section fallback 任務，包括鎖定的 effect。

patch 檔名沿用 pipeline 的 `itemFileName(id)`（冒號轉等號）：

```json
{
  "id": "darktide:term:example",
  "taskHash": "<task.taskHash>",
  "extractHash": "<task.extractHash>",
  "replacements": [
    { "rangeId": "effect:1", "originalHash": "<range.sha256>", "text": "修改後的失敗句。" }
  ],
  "errata": []
}
```

只接受 `allowedChanges.ranges` 列出的完整句子或 section；省略的範圍逐字保留。禁止未知欄位、重複替換、範圍／hash 不符。只有 `appendErrata: true` 才可附加 errata；須包含真實的 values `valueRef` 和 `anchor`，並重新通過既有 schema／文字檢查。既有 errata 不能刪改。

不沿用舊文案時，可改用 `{ "id": "...", "taskHash": "...", "extractHash": "...", "exclude": { "reason": "insufficient-after-cleanup", "detail": "說明原因" } }`。`reason` 只接受 `insufficient-after-cleanup`、`nd-strict-unresolved` 或 `legacy-copy-disclaimer-only`（僅出處或免責文字），`detail` 必須非空；不可同時提供 `replacements` 或 `errata`。任務 hash 綁定來源、候選及 extract；未知項目、錯誤 hash、重複或未知 patch 均拒絕。排除項目不進 baseline，report 的 `excluded` 明列原因與說明，分類和總數分別計數；blocked 項目仍維持 blocked。剩餘非 blocked、非 excluded 項目全部通過才建立 baseline。

apply 從相同快取、extract、譯名表重建計畫，核對磁碟上的 mapping、draft、全部 task；不接受手改 task 來擴張權限。合併後重跑原檢查，任何非 blocked 項目未通過都不建立 baseline，report 列 `unresolved`。baseline 再用實際非 blocked 候選集合檢查允許名稱與譯名規則。

所有 JSON canonical、無時間戳，相同輸入重跑 bytes 相同。不刪資料、不清目錄；換輸入或覆寫已變動的 draft／task 須改用新 `--out`。已建立 baseline 只允許相同 patch 的 byte 相同 apply；prepare 不會覆寫既有 baseline。

exit：prepare 成功 0（可含待修／blocked）；apply 全部 eligible 通過 0、仍有 unresolved 1；參數、輸入、hash、權限或 IO 錯誤 2。blocked 清單仍須交下一包處理，baselineReady 僅表示本包非 blocked 集合全部通過。

驗證：`node --test tests/pipeline/`。
