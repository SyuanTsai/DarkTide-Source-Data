# SYP-403 schema 1.2.0 格式層計畫

## 目標與範圍

依使用者提供的 C0～C6 契約實作 schema、validate、diff、verify、AI I/O 與 candidate/write 傳遞。沿用既有未提交的 C6 改動；不修改 extractor 取數邏輯、正式 data、其他 worktree，不進行遠端操作。

## 證據與變更

- `common.schema.json` 共用 item/source/errata，類別 schema 限制 values；加入共用 mechanics、來源、citations 與新的 errata 定義，保留 1.0.0/1.1.0。
- `data-files.mjs` 已有語意驗證與版本目錄入口；擴充版本限制、來源對應、跨類別 errata 目標解析。
- `diff.mjs`、`candidate.mjs`、`verify/index.mjs` 的效果任務目前限定 1.1.0；讓 1.2.0 沿用並傳遞 citations。
- verify 的數字掃描已遞迴走訪 values；補 mechanics coverage、citations 引用驗證與 V-CITE，失敗沿用單項目保留流程。
- 遷移 examples 和測試 fixture 的舊 errata；新增 1.2.0 範例與契約說明。

## 測試與交付

先增加最小失敗契約測試，再實作並以標準入口確認通過。C0～C6 各規則以合法基底單獨變異，補 candidate/verify/write 整合。所有測試先清除指定環境變數，使用暫存 GH_CONFIG_DIR 與 PATH 最前方 gh.exe/gh.cmd 失敗 shim。

驗證 93185bf 四類 1.13.4 每筆 hash、正式 validate、兩組舊範例、新範例、完整測試與 START.md real 入口。逐一移除九項關鍵檢查確認測試會失敗，立即還原。證據整理於同目錄驗收報告，全部完成才 commit，不 push。

## 相容性、恢復與取捨

新欄位只允許 1.2.0；新 errata 契約套用所有版本。正式資料沒有 errata，保持不變。codeRefs 不存在時完全保留舊 hash 輸入。格式層不實作 Lua 雜湊取數；以 fixture hash 模擬已依契約計算的結果。需要恢復時反向套用本次程式提交，無正式資料遷移。未決事項採最嚴格且保留既有行為的解讀並記錄於驗收報告。
