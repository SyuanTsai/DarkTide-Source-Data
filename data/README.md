# 最終資料

正式版本保存在 `data/<game_version>/`，版本格式為兩至四段數字，以點分隔。每個版本包含 `skills.json`、`weapons.json`、`blessings.json`、`terms.json`，皆為 canonical JSON；舊版本保留不刪除。`current.json` 是版本指標，`current.json` 不存在代表尚未有任何正式版本。

不得手動編輯，只由 `pipeline/write.mjs` 寫入。
