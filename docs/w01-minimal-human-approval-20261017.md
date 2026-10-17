# W01 最小內容核准紀錄

本紀錄只涵蓋兩個 Source claim 及其綁定的單一 Web 說明項目；它不核准其他 pending 內容或整張 presentation。

人類決定為「核准最小內容與 W01 驗收，完成後停在 W01」，來源為 [SYP-333 comment 11851](https://syuantsai.atlassian.net/browse/SYP-333?focusedCommentId=11851)。記錄時間 2026-10-17T08:23:07Z 是本輪記錄時間，不代表精確點擊時間。審核者記為 human-user via Codex session 01a14842-ad81-75d0-bd22-40d29f63b61a explicit approval；這是使用者核准來源紀錄，不是 Atlassian 或 GitHub PR review。

核准範圍限於 Brain Burst Improved 的 Smite 傷害倍率 claim（1.5 ratio）及對應的描述顯示值 claim（50 percent），並保留該加成只限被引用能力、不泛化為所有靈能攻擊的範圍。兩份 review receipt 已按現行 compiler 的 target 與依賴閉包規則計算，列於 [Source audit JSON](../content/reviews/w01-minimal-human-approval-20261017.json)。

Source 輸入固定為 commit 285a06c8939ac505ac48e4d0e93b939a2b959211、sourceRevision 3af04f0212a88e6b29f91f397178dd6d22c0c27d40566088eca8f8f06d4845c1，candidate SHA-256 b12a582fbf3440e23334729a847435c12fcaa16fd3ce7189411e9bc18f1915e0。Web 綁定固定為 commit d0b39c44df0905783d24e1dd1aa5ab0306a18d55、content version 0.0.16、data revision b225a0f02a5ca7e87a407603615e842ade19d230d8448f1e2f01a7dae2536b9a。精確 Web item 是 web:presentation:psyker-brain-burst-improved 的 psyker-description-damage-parameter，位於 [固定 Web 原始檔](https://github.com/SyuanTsai/DarkTide-Web/blob/d0b39c44df0905783d24e1dd1aa5ab0306a18d55/content/w01/web-authoring.json#L264)。JSON 記錄了 item pointer、raw/canonical/rendered SHA-256 與 compiled output hash；Web 原文字串仍由 Web 擁有。

Contract smoke 使用現有 compileSource()，在記憶體套用兩份 receipt。結果為 2 approved、123 pending，publicationEligible=false。修改任一 target 或共同依賴都使兩份 receipt stale，因兩 claim 共用 skill 依賴閉包。Smoke safe receipt SHA-256 為 986cef854a8c03d966e5eb13ee26334679f69abf7b0f6b9dcb8e3014851102c2；完整摘要保存在 audit JSON。

這份 sidecar 不會由 compiler 自動載入，candidate 的 reviewReceipts 仍為空；未修改的固定輸入仍是 125 pending、0 approved、publicationEligible=false。2 approved／123 pending 只來自把兩份 receipt 套在記憶體副本的 compileSource() contract smoke，不是新的 CLI 產物或發布狀態。審核資料輸入 commit 是 285a06c8939ac505ac48e4d0e93b939a2b959211；日後承載 sidecar 的 PR HEAD 是審核紀錄提交，不能與該固定 Source 資料輸入 commit 混稱，也不改變綁定的 SourceRevision。

候選 authoring、其他 123 筆資料、CI、Web 與 Extension 均未修改。這是 W01 最小核准；不啟動 W02。
