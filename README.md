# DarkTide Source Data

## Overview

**What it is:** A curated, source-referenced technical dataset for Warhammer 40,000: Darktide, with the [JSON schemas](pipeline/schema/), [SPEC v1 pipeline](pipeline/), and [tests](tests/pipeline/) used to validate it. The previous authoring system has been removed.

**Problem it solves:** Readers can trace published game data to reviewable sources, and downstream tools can use a specific version of the dataset.

**Key features**

- [Versioned JSON data](data/) covers skills, weapons, blessings, and terms. [DarkTide-Web](https://github.com/SyuanTsai/DarkTide-Web) builds the public website from this directory at a pinned commit.
- The pipeline checks the game version, then extracts data and official text.
- It compares the extracted data with a previous version to identify changes and track which entries need explanations.
- It verifies candidate entries before writing the formal dataset and validating the result.

**Requirements:** Node.js 24 or later. The full update guide uses PowerShell 7.

**Quick start:**

1. From the repository root, run `node --test tests/pipeline/`.
2. For setup and the full update workflow, see the [pipeline guide](docs/pipeline/START.md).

**Public boundary:** Keep private raw exports, complete source archives, credentials, and proprietary game source code out of this repository. See [Public boundary](#public-boundary).

## 概覽

**這是什麼：** 這是為 Warhammer 40,000: Darktide 整理並標註來源的技術資料集，並附有用來驗證資料的 [JSON 結構定義](pipeline/schema/)、[SPEC v1 資料處理流程](pipeline/)及[測試](tests/pipeline/)。舊版資料編撰系統已移除。

**解決什麼問題：** 讀者可以追溯已發布的遊戲資料，查核其來源。下游工具可以使用資料集的指定版本。

**主要功能**

- [按版本整理的 JSON 資料](data/)涵蓋技能、武器、祝福與術語。[DarkTide-Web](https://github.com/SyuanTsai/DarkTide-Web) 使用固定 commit 中的這個目錄建置公開網站。
- 資料處理流程先檢查遊戲版本，再擷取資料與官方文字。
- 流程將擷取的資料與前一版比對，找出變更並追蹤需要補充說明的項目。
- 流程先驗證候選項目，再寫入正式資料集並驗證結果。

**環境需求：** Node.js 24 或更新版本。完整更新指南使用 PowerShell 7。

**快速開始：**

1. 在儲存庫根目錄執行 `node --test tests/pipeline/`。
2. 環境設定與完整更新流程請參閱[資料處理流程指南](docs/pipeline/START.md)。

**公開邊界：** 請勿將私人原始匯出資料、完整來源封存檔、存取憑證或專有遊戲原始碼放入此儲存庫。詳見[公開邊界](#public-boundary)。

---

新流程（SPEC v1，SYP-382）：資料存放於 `data/`，格式定義見 `pipeline/schema/`，啟動方式見 `docs/pipeline/START.md`。執行管線測試：

```sh
node --test tests/pipeline/
```

舊 authoring／W09 系統已於 SYP-390 移除，可從 Git 歷史取得。遊戲解析產出（原路徑為 `content → imports → generic`）存放於 Google 雲端，不放 Git。

## Public boundary

Do not commit private raw exports, complete source archives, credentials, or proprietary game source code. Public claims must use reviewable source references and distinguish observed facts, derived facts, and unknowns. Generated documentation and release files are derived outputs, not authoring sources.