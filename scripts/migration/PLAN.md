# SYP-391 spec10 實作計畫

## 1. 目標與範圍

- 一次性將固定 1.13.4.5 revision 的 81 份舊文案轉成 repo 外 1.13.4 draft、mapping、局部修復任務與 report。
- 驗收：694 個舊實體一對一映射；parts／四階／原文完整保留；只呼叫既有 schema、values、text、glossary 檢查；修復範圍有位置與 hash。
- 不改核心契約、START.md、pipeline/state.json、其他 repo；不實作官方 effect 展開、不撰寫實際修復 patch、不 push。
- 已核實：inv2 q2 的轉換規則、inv1 的身份對照、extract header 與固定 commit/batch。原盤點為 15 通過／66 待修，官方 effect 阻擋須另列。

## 2. 預定變更

- `lib/legacy-copy.mjs`：依 manifest 驗 hash，從舊來源重建 mapping，依確切 binding 展開已知 parts，產出原文與來源位置；未知 kind、缺 binding、歧義、漏項即停。
- `lib/repair-tasks.mjs`：重用既有檢查器；逐句呼叫相同函式定位錯誤；無法逐句定位時標記 section；任務 hash 綁定原文、extract、失敗與權限；patch 僅替換允許片段或在授權時附加 errata。
- `syp-391-baseline.mjs` 與 IO helper：明確要求 repo 外輸出，固定 metadata 與快取 manifest；prepare 寫 draft/map/tasks/report；apply 重建並核對任務、extract 與 draft，再檢查全部非 blocked 項目後升級 baseline。
- `README.md`：CLI、patch 格式、產物、限制與重跑方式。測試加入現有 `tests/pipeline/index.js`。

## 3. 測試情境

- 小 fixture 的單元測試先 Red（缺模組／缺行為），再 Green，最後整理。涵蓋 parts、四階、武器 note、術語 context、未知 kind／binding／身份歧義。
- 合格項目無任務；錯誤定位到失敗句，跨句 fallback 到 section；/values 缺覆蓋獨立標明無法逐句定位。
- 改未失敗句、未知 patch 欄位、task/extract hash 不符均拒絕；仍失敗不建立 baseline；blocked effect 鎖定。
- IO 測試涵蓋 git repo／worktree／symlink 輸出拒絕、輸入被改拒絕、輸出 byte 穩定、成功 apply 與重跑。

## 4. 交付與驗證

- 先跑新增測試取得 Red；實作後跑針對性測試與 `node --test tests/pipeline/`。
- 在指定外部 run 目錄用本 worktree 重新取數（Private origin/master，Source-Code e46b892…，batch 26101089）；核對 terms=103 後實跑 prepare，重跑比較全部產物 hash。
- 回報分類、failure code 分布、section 任務數與 15/66 差異；新增 commit（SYP 私人專案不含工時），不 amend、不 push。
- 復原：所有遷移資料是外部衍生產物，來源只讀；失敗不升級 baseline，不刪除既有資料。更換輸入須用新的 out，已升級 baseline 只允許完全一致的重跑。

## 5. 風險與未決事項

- 缺來源值、官方模板、跨句檢查可能造成額外失敗，照原規則回報，不放寬。
- Bootstrap 本次回報 rate-limit、retryable=false；未重跑，使用目前可讀的 runtime 規則。
- 官方 effect 展開器與 effectOrigin 屬下一包；本包無需新的主控決策。
