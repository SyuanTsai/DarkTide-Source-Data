# 差異與 AI 說明

設定 `DARKTIDE_PIPELINE_CLOUD_DIR` 為已存在、不在任何 Git repo 內的本機絕對目錄，或在各指令加 `--cloud-dir <目錄>`。檔案位於該目錄的遊戲版本子目錄；需要封存到 Google 雲端時，跑完後再上傳。

執行 `node pipeline/diff.mjs --pending` 取得每個待處理項目的輸入與輸出路徑；加 `--json` 可取得 JSON 陣列。一次處理一項，完成後執行 `node pipeline/diff.mjs --mark-described <項目 id>`。

輸入包含 `schemaVersion`（格式版本）、`id`（項目 ID）、`category`（類別）、`change`（新增或變動）、`gameVersion`、`sourceCommit`、`textBatch`（資料來源版本）、`inputHash`（輸入內容雜湊）、`item`（本次擷取的項目）、`previous`（變動項目的上一版資料，新增時為 null）、`glossary.source`（譯名表來源，可能為 null）、`glossary.matches`（命中的英文、中文及行號），以及 `outputFile`（相對版本目錄的輸出路徑）。

1.1.0 祝福／技能另有且只有一個效果欄位：`lockedEffect` 是官方繁中依本輪來源值、格式與文字索引機械展開的全文；`effect` 照抄它，只另外撰寫 `conditions`／`calculation`／`notes`／`extra` 四節機制。缺官方繁中或展開不完整時，輸入改帶 `effectTask: "translate-official-en"`，請依官方英文與 values 翻譯效果（未知值不猜），並撰寫四節機制。

格式規則保存於 extract 頂層 `effectFormats` 工作資料，不進正式 data 或 values。舊 extract 未帶格式時，有參數的效果會維持不完整，需重新 extract。`inputHash` 同時綁定效果任務，格式或 loc_string 的展開文字改變後，舊 AI 輸出會失效。AI output schema 維持禁止 `effectOrigin`；candidate 重新展開並強制覆寫完整官方效果，設為 `official`；其餘使用 AI 效果並設為 `unofficial-translation`。武器、術語與 1.0.0 不加此標記。官方字面錯數仍受原 verify／errata 檢查，不因鎖定而豁免。

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
  "errata": [{ "locale": "en", "official": "10%", "corrected": "20%", "valueRef": "/params/bonus/value", "anchor": { "field": "official", "locale": "en", "text": "Gain 10% damage", "occurrence": 1 } }]
}
```

`effect` 寫效果且不可空白；`conditions` 寫觸發與適用條件；`calculation` 寫資料支持的計算方式；`notes` 寫補充資訊；`extra` 寫其他相關資訊。無內容可用空字串。只有官方原文的數字與 `item.values` 不同時才產生勘誤；`valueRef` 是指向 `values` 的 JSON Pointer。沒有勘誤使用空陣列。

數值只能使用 `item.values` 的值；譯名優先採用官方中文，缺少官方中文時才參考 `glossary.matches`。不要撰寫資料沒有的條件。`change` 為 `changed` 時參考 `previous`，只修改受影響的部分。輸出 `id` 與 `inputHash` 必須與輸入一致。

每筆 AI 勘誤必須包含 `anchor`：`field` 選擇定位欄位 `official` 或 `name`；`locale` 為 `en` 或 `zh`，必須與該筆勘誤的 `locale` 相同；`text` 是目標原文中的非空精確子字串，逐字比對並區分大小寫；`occurrence` 是從 1 起算的出現次序。計數允許重疊，例如 `aaa` 中的 `aa` 出現兩次。目標欄位的該語系必須是字串，且指定次序必須存在。請選擇能唯一定位到那一句的子字串，通常取官方原文中包含錯誤數字的整句或短語。

寫入最終資料時，errata（含 anchor）原樣寫出；此步驟由 `pipeline/write.mjs`（SYP-395）負責。

`node pipeline/verify.mjs` 預設讀取 `<cloud>/<ver>/extract/`、`diff/diff.json` 與 `ai/output/`，搭配 current.json 指向的上一版組裝 canonical 候選檔至 `<cloud>/<ver>/candidate/<category>.json`。沿用項目使用本輪 extract 加上上一版說明與勘誤；新增／變動項目只採用通過 AI schema、id 與 inputHash 檢查的輸出。缺少或過期的說明由 verify 降級處理。報告位於 `verify/report.json`，四類最終預覽位於 `verify/out/data/<ver>/`；write 核對報告的候選雜湊後寫入正式 data。
