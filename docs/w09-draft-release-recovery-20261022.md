# W09 草稿 release 恢復修正計畫

## 1. 目的與範圍

Source 正式 run [39734484515](https://github.com/SyuanTsai/DarkTide-Source-Data/actions/runs/39734484515) 的 146 項測試通過，但在 archive 上傳後以「Source release disappeared after archive upload」停止。唯讀 API 證據顯示 tag lookup 回傳 404，而 release ID 420388420 與同一資產 664949741 實際存在、仍為 draft；不是權限缺漏。

驗收是既有 publisher 能找到該精確 tag 的 draft、重用原 tag／asset／request bytes、完成唯一 1.13.2 archive 的公開與 Source→Web 未選候選鏈。禁止新增憑證、權限、審核政策，禁止 Web main 合併、selected 或網站發布。四個 approved Source build runtime blobs 不變。

## 2. 修改

- `scripts/content/contract-w09-request.mjs` 的 `fetchSourceRelease`：保留 published-by-tag 為主要查詢。只有 allowDraft 且 by-tag 404 時，才以同一既有 token 分頁讀取固定 Source repo 的 releases，精確比對 tag，拒絕重複匹配並沿用原 identity 驗證。Public resolver 不走 draft fallback；401/403、非法回應與 identity 衝突照常拒絕。
- `tests/contract-w09-request.test.mjs`：擴充既有 stub-HTTP archive 整合測試，重現「by-tag 看不到 draft，但 list 看得到」的實際 provider 行為，涵蓋首次上傳後回讀、已有 asset 的草稿恢復、分頁、重複匹配與不公開 draft。此 private lookup 需要已驗真的 packet/Git fixture；沿用已有整合測試可直接驗證完整不變量，不為測試新增 public API。
- `.github/workflows/shared-source-handoff.yml`：只將既有 formal-handoff job 的 timeout 20 延至 35 分鐘。真實 run 從開始到首次 asset 上傳已用約 15.5 分鐘，草稿恢復還需額外原 request replay 與 dispatch 前驗證；這是容納既有 797 項驗證的執行時間，不新增 workflow、權限或審核門檻。PR validation job 仍為 20 分鐘。以 YAML 語法與既有 workflow contract 測試驗證。

## 3. Red → Green

先修改現有 InterT03 的 provider stub，使 draft by-tag 回傳 404、list 可回傳同一 draft，執行該測試並確認重現失敗。再加入最小 lookup 修正，執行改動的 archive/checkpoint 測試。驗證 asset upload/creation 次數不增加、tag 不移動、同 request 重用，並驗 duplicate/HTTP error 不可導致寫入。

## 4. 交付與恢復

必要修正使用獨立 Source PR、固定 head 的自然 CI；合併期間暫停並恢復 Source handoff，抑制 main 的 all-releases。恢復後仍只 dispatch `w09-a3cef743b81b4eb2d3931fa82ec820dc`。不刪除或改寫已上傳資產；archive 原始 Source commit 保持 `fccda635f392b5259c883b85603acdf639bb83fb`，當前 main 的修正不冒充 archive provenance。

現存 asset 為 8,958,711 bytes，SHA-256 `5ffd4bf8a15803a1c319a94114f43f8ca3350dfcb18c13dc6e8557a48fcf8603`，tag 仍指向上述原始 commit。公開後下載比對六個 packet 檔、797 個批准收據與固定審閱 digests，再驗 Web 未選 PR/CI 和同 request 重試。

若需要回復程式修正，以實際 merge SHA 做正常 revert；既有 archive/tag bytes 保留。任何新資料或批准 digest 差異不在本修正範圍內。尚待實際驗證：同一 draft 在 runner 修正後恢復、published/dispatched 收據、Web PR/CI 與重試。
