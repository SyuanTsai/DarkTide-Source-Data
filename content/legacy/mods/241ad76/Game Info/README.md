# Darktide 遊戲資料

依「版本 → 資料類別 → 職業／類型」保存技能、武器與祝福資料；對話文本維持單一目錄。

## 資料版本

- [Release 1.13.X](releases/1.13.X/README.md)：[技能](releases/1.13.X/skills/README.md)、[武器](releases/1.13.X/weapons/README.md)、[祝福](releases/1.13.X/blessings/README.md)。

目前僅有1.13系列資料；尚無其他歷史版本。同系列小版本沿用同一目錄，實際來源版本由版本頁記錄；跨系列保留獨立版本資料。

## 對話文本

[完整中英字幕目錄](對話文本/index.html)｜[繁中分類索引](對話文本/zh-tw/index.html)｜[English catalog](對話文本/en/index.html)｜[原 12 組聊天氣泡選集與來源](對話文本/README.md)

完整目錄依固定 Build 收錄 20,704 個分類入口，輸出中英 HTML 各 25,737 頁；已對應來源的資料、固定影片／手動字幕與既有 Hadron 分支展示共 6,453 個入口，另列 14,251 組尚未連結事件的 raw-hash 字幕群組。Rendered subtitle references 為 en 170,132、zh-tw 170,102 次，包含候選重複引用，不等同 unique 台詞或事件數。原 12 組聊天氣泡選集仍保留在同一目錄中。

對話只維持一份固定版本，不隨技能版本複製；技能內容維護走獨立技能流程。來源 Build 與分類邊界見[對話索引](對話文本/README.md)及[維護紀錄](../AI-LOGS/Game%20Info/dialogues/2026-10-04-ALL_DIALOGUES.md)。

## 完整文本

[文本來源與下載](releases/1.13.X/source/README.md)｜[1.13.0 → 1.13.1文本差異](releases/1.13.X/source/TEXT_DIFF_1.13.0_TO_1.13.1.md)｜[離線復原方式](releases/1.13.X/source/RESTORE_TEXT.md)

完整文本批次保存在版本的source/目錄，包含全部語言與資源，維持Git忽略。

## 計算與邊界

- [機制算例](docs/POC.md)
