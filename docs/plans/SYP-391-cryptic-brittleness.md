# SYP-391 spec28：cryptic 每層脆弱值補收

## 目標與實作

依 inv4 的來源追查，僅補收 `cryptic_arc_grenades_brittleness` 與 `cryptic_electrocution_applies_brittleness`。在 `pipeline/extract-skills.mjs` 的 `skillParams` 後呼叫 `pipeline/lib/skill-brittleness.mjs`，成功時加入 `brittleness_per_stack`（ratio），並在彙整 `source.files` 前加入解析所得的證據行號。值來自最終 buff registry 的 `rending_debuff.stat_buffs.rending_multiplier`，沒有數值或行號保底，沒有修改 schema、展開器或 verify。

辨識採用既有有限 helper 的 token fingerprint 做法，不執行 Lua：

- 手榴彈：核對 talent 的 special rule；精確比對完整電弧模組，涵蓋 rule → context → callback 註冊 → `rending_debuff` 呼叫及所有中間綁定；核對設定表的套用層數與 talent 參數相同。
- 電擊：核對 talent 的 passive → 最終 registry 的同名 template；精確比對完整 passive table，並核對有效欄位、事件、函式捕捉的 settings／keyword／FixedFrame 匯入及最終綁定，拒絕後續改寫或遮蔽；核對套用層數。
- 最後核對 registry 的武器 buff 匯入與實際 template 身分，靜態解析有限數值。失敗只回報 `BRITTLENESS_SOURCE_UNPROVEN`，不新增參數或 unknown，原有 `T_NUMBER` 繼續生效。

token fingerprint 不含空白、註解或行號。手榴彈模組採保守的全文 token 比對，未來即使是無關 token 改動也會停止補收，須重新審查引用鏈後更新證明。沒有通用函式執行或全 buff 補收。保留原 `SCRIPT_VERSION`，使本次影響僅限兩筆，其他技能的完整 bytes 保持不變。

## TDD 與回歸

先加入 fixture 與接入 `tests/pipeline/index.js`，確認缺少 `brittleness_per_stack` 的 Red，再實作至 Green。fixture 保存 e46b892 的完整電弧模組、原 passive table 與兩個 talent；其餘相依設定縮成可獨立執行的資料。

`tests/pipeline/cryptic-brittleness.test.mjs` 覆蓋：兩筆成功及來源、移除補值仍失敗、只改 candidate 被拒絕、rule／passive／callback／debuff／捕捉綁定中斷、函式／動態／非有限值、來源改為 0.02、缺檔、行號位移與無關技能不變。沒有放寬檢查或加入豁免。

可重現指令（pwsh 7、Node 24，於 repository 根目錄）：

```powershell
node --test tests/pipeline/cryptic-brittleness.test.mjs
node tests/pipeline/cryptic-brittleness.acceptance.mjs
node --test tests/pipeline/
```

## 固定來源實跑紀錄

- 基準程式：`b133bd0`，Source-Code：`e46b8926cfa3fa35503e4b80b15aab7a804314e4`，以 Git object 唯讀存取。
- Private `origin/master`：`dd430f524dfd089e013f87cbc20be754af6979d4`，文字批次 `26101089`；`extract-text.mjs` 重新核對 manifest checksum 與各語言列數。
- 工作根：`F:/GitFile/Persion - Games/DarkTide-Pipeline-Work/cryptic-brittleness/`。state 參數也指定此根，不改寫正式 pipeline state。
- 對基準與正式 helper 各重抽 618 筆，只有指定兩筆新增 ratio `0.025`；移除此欄後，兩筆其餘 values 與基準相同。其餘 616 筆的完整項目 canonical bytes 與 contentHash 相同，effectFormats／problems／excluded 也相同。
- 兩次正式補收的整份 extract bytes 相同，SHA-256：`af1dd2ff74cda73ad651c38c2d23935a4ab2caf456a822e35a3abcd0d2dd505b`。
- CLI `extract-skills.mjs` 以相同固定來源及工作根實跑兩次，與 acceptance API 的輸出 bytes 完全相同；結果另存 `cli-acceptance.json`。
- 兩筆 `checkText`、`checkValues`、extract／candidate schema 全通過。移除來源值及來源值為 0.02 的控制仍是 `T_NUMBER`，只改 candidate 仍是 `V_FIELD_CHANGED`，errata 保持空陣列。
- 來源值：`scripts/settings/buff/weapon_buff_templates.lua:374`，registry 匯入 `scripts/settings/buff/buff_templates.lua:31`。手榴彈套用與 rule：`arc_grenade_chain_lightning_source.lua:79、123`；電擊 settings／套用：`cryptic_buff_templates.lua:2555、2557`。行號均由解析節點或已核實 token 取得。
- 正式 `pipeline/state.json` SHA-256 維持 `ceb6b1a612492c32397ce7d8da1959dda7968d93d59bad093ee13c62910bd5e3`。
- 目標 fixture 測試 5 個全通過；最終 `node --test tests/pipeline/` 共 314 個，308 通過、6 個既有 opt-in real-smoke 跳過、0 失敗。指定來源的 618 筆 acceptance 與 CLI 實跑另已完成。

完整逐筆來源、616 個不變 ID、兩筆展開文字、前後 contentHash 與正負例檢查結果保存在工作根的 `acceptance.json`。沒有發布、push 或資料遷移；回退本次 commit 即恢復兩筆原本的缺值失敗。
