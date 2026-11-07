# spec10 實跑紀錄（2026-11-07）

- 環境：pwsh 7.6.9、Node 24.19.0；worktree 分支 `codex/SYP-391-migration`。
- 本機 Private `origin/master` 缺少 `26101089`，check-version 明確失敗且未寫入 state。依 spec 改用指定 Claude r1134 演練的 text／weapons／blessings／skills extract；本 worktree 重新執行 extract-terms，103 項、unknown／problems／excluded 均 0。
- extract 位於 `F:/GitFile/Persion - Games/DarkTide-Pipeline-Work/migration/syp-391/run/spec10/work/extract/`；header 為 1.13.4、e46b8926cfa3fa35503e4b80b15aab7a804314e4、26101089。
- `prepare` 使用 README 的完整命令，輸出到指定 `F:/GitFile/Persion - Games/DarkTide-Pipeline-Work/migration/syp-391/`。來源 manifest 與 656 個來源檔 hash／大小全部核對；694 個實體一對一，零歧義／未對應。

| 類別 | 舊文案 | 通過 | 待修 | blocked:official-effect |
| --- | ---: | ---: | ---: | ---: |
| 武器 | 78 | 13 | 65 | 0 |
| 祝福 | 1 | 0 | 0 | 1 |
| 技能 | 1 | 0 | 0 | 1 |
| 術語 | 1 | 1 | 0 | 0 |
| 合計 | 81 | 14 | 65 | 2 |

blocked：`darktide:blessing:weapon_trait_bespoke_chainaxe_p1_movement_speed_on_activation`、`darktide:skill:psyker:psyker_brain_burst_improved`。盤點 15／66 曾採用核對過的舊 resolved official；本包不展開官方模板，因此原通過祝福 1 項及原待修技能 1 項分別移入 blocked。武器與術語結果完全相同。

失敗代碼以項目數計：`T_NUMBER=59`（武器 58、技能 1）、`T_ENGLISH=27`（武器 25、祝福／技能各 1）、`T_PLACEHOLDER=2`（祝福／技能各 1）；同項可重複計入不同代碼。無 schema／values 失敗。

產生 67 份任務（65 待修＋2 blocked），195 個允許片段，`scopeSectionTasks=0`。逐一核對 offset／原文範圍，未授權修改官方 effect。prepare 連續重跑兩次，74 個產物檔 SHA-256 全部一致。未建立實際 patch 或 baseline。

外部證據：`run/spec10/prepare-verification.json`（逐檔 hash 與核對結果）、`run/spec10/pipeline-tests.log`。repo `pipeline/state.json` SHA-256 前後均為 `ceb6b1a612492c32397ce7d8da1959dda7968d93d59bad093ee13c62910bd5e3`；核心契約與 START.md 無變更。

測試先 Red（缺少遷移模組；空 `.git` 目錄誤判另有 Red regression）再 Green；新增測試僅用小 fixture，21／21 通過。`node --test tests/pipeline/`：276 項，270 通過、0 失敗、6 個既有可選 real smoke 略過；`git diff --check` 通過。官方 effect 展開與 effectOrigin 留給下一包，本包無新的主控決策。
