# SYP-403 固定機制取數計畫

## 目標與範圍

在 schema 1.2.0 既定形狀內，為 skills、blessings 加入扁平 mechanics、逐值來源與穩定 codeRefs。涵蓋 F1、B1、B2、F3，以及技能 W1、A1、D1；盤點是驗收索引，不能作為取數的數值來源。遊戲與官方文字來源唯讀，正式 data 不重產，不連線、不 push。

## 實作

- 共用既有 Lua 靜態 resolver，依 talent／trait 的明確引用追蹤 buff、ability、weapon action。保留模板名稱、分支、talent override、tier；未知結構保留 unknown／problems。
- 新增獨立 mechanics 與 codeRefs 模組。codeRefs 對完整表或函式定義依 C3 正規化後 SHA-256，追蹤表內名稱函式一層，略過無法證實的 symbol 並計數。
- skills／blessings scriptVersion 升至 1.2.0；共用 writer 只在這兩類新欄位出現時使用 1.2.0，weapons／terms 不變。
- README 記錄 dotted key、來源連結、enum 的靜態辨識條件、比例換算與算例排除規則。

## 測試與交付

先建立失敗的機制單元與小型原始碼樹整合測試，再完成最小實作並重構。標準 index 匯入新測試。三個抽查頁對照來源及盤點；extract → diff 驗證模板值、行號位移、純函式變更的影響範圍。逐組及來源、函式追蹤、正規化、fail-closed 做移除規則的回歸實驗，之後還原。

測試前清除憑證及 DARKTIDE 環境，暫存空 GH_CONFIG_DIR 與雙 shim 放 PATH 最前。先記錄標準測試基準，再跑完整測試與 START 真實入口。真實 e46b892／1.13.4 官方文字在暫存目錄跑兩次，比對既有 extract 欄位、bytes、schema 與來源覆蓋率。獨立 coverage 腳本逐筆判定，未覆蓋保留具體原因。全部驗收完成後才 commit，保留 hooks。

## 風險與復原

函式規則只能採用明確 token／AST 與來源欄位證明，不能推測 Lua 執行結果。既有 brittleness pins 的讀取集合必須保持原狀，新增 mechanics 在原抽取與 pins 驗證完成後執行。新增欄位不改舊值；以正式 1.13.4 逐筆比對防止回歸。新增檔案與局部接線可用一般 revert 復原，沒有資料遷移。
