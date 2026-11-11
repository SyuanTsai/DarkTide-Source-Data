# DarkTide Source Data

新流程（SPEC v1，SYP-382）：資料存放於 `data/`，格式定義見 `pipeline/schema/`，啟動方式見 `docs/pipeline/START.md`。執行管線測試：

```sh
node --test tests/pipeline/
```

舊 authoring／W09 系統已於 SYP-390 移除，可從 Git 歷史取得。遊戲解析產出（舊 generic 匯入資料）存放於 Google 雲端，不放 Git。

## Public boundary

Do not commit private raw exports, complete source archives, credentials, or proprietary game source code. Public claims must use reviewable source references and distinguish observed facts, derived facts, and unknowns. Generated documentation and release files are derived outputs, not authoring sources.