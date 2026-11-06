# 差異與 AI 說明

設定 `DARKTIDE_PIPELINE_CLOUD_DIR` 為 Google Drive for desktop 同步資料夾內已存在的絕對路徑，或在各指令加 `--cloud-dir <目錄>`。檔案位於該目錄的遊戲版本子目錄。

執行 `node pipeline/diff.mjs --pending` 取得每個待處理項目的輸入與輸出路徑；加 `--json` 可取得 JSON 陣列。一次處理一項，完成後執行 `node pipeline/diff.mjs --mark-described <項目 id>`。

輸入包含 `schemaVersion`（格式版本）、`id`（項目 ID）、`category`（類別）、`change`（新增或變動）、`gameVersion`、`sourceCommit`、`textBatch`（資料來源版本）、`inputHash`（輸入內容雜湊）、`item`（本次擷取的項目）、`previous`（變動項目的上一版資料，新增時為 null）、`glossary.source`（譯名表來源，可能為 null）、`glossary.matches`（命中的英文、中文及行號），以及 `outputFile`（相對版本目錄的輸出路徑）。

輸出為合法 JSON，例如：

```json
{
  "schemaVersion": "1.0.0",
  "id": "darktide:skill:example",
  "inputHash": "0123456789abcdef0123456789abcdef0123456789abcdef0123456789abcdef",
  "explanation": {
    "effect": "提升傷害。",
    "conditions": "命中時生效。",
    "calculation": "傷害加成依資料數值。",
    "notes": "持續時間見資料。",
    "extra": ""
  },
  "errata": [{ "locale": "en", "official": "10%", "corrected": "20%", "valueRef": "/params/bonus/value" }]
}
```

`effect` 寫效果且不可空白；`conditions` 寫觸發與適用條件；`calculation` 寫資料支持的計算方式；`notes` 寫補充資訊；`extra` 寫其他相關資訊。無內容可用空字串。只有官方原文的數字與 `item.values` 不同時才產生勘誤；`valueRef` 是指向 `values` 的 JSON Pointer。沒有勘誤使用空陣列。

數值只能使用 `item.values` 的值；譯名優先採用官方中文，缺少官方中文時才參考 `glossary.matches`。不要撰寫資料沒有的條件。`change` 為 `changed` 時參考 `previous`，只修改受影響的部分。輸出 `id` 與 `inputHash` 必須與輸入一致。
