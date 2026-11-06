# 內容更新流程

SPEC v1 固定腳本：

- `check-version.mjs`：檢查版本及狀態。
- `extract-text.mjs`：擷取官方文字。
- `extract-skills.mjs`：擷取技能。
- `extract-weapons.mjs`：擷取武器。
- `extract-blessings.mjs`：擷取祝福。
- `extract-terms.mjs`：擷取術語。
- `diff.mjs`：記錄差異及說明進度。
- `verify.mjs`：檢查項目及降級。
- `write.mjs`：寫入正式資料。

由 WP2～WP4 實作，本 WP 只提供 `lib/`、`schema/`、`validate.mjs` 與 `state.json`。

狀態依序為 `extracted`、`described`、`verified`、`written`。相同版本與來源可接續執行並保留項目進度；輸入雜湊改變時重設該項目。完成或保留上一版的項目不再列為待處理。

Canonical JSON 的物件 key 按 UTF-16 排序，陣列保持順序；使用 compact JSON 並以一個換行結尾。
