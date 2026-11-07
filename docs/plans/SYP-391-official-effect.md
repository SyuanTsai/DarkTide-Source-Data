# SYP-391 spec21 實作計畫

## 1. 目標與範圍

完成官方效果機械展開、AI 輸入及 candidate 的 effectOrigin 整合。接續 1c0ba60，不重做模板數字修正，不更動 verify 門檻。只修改本 worktree；Source-Code 固定 e46b8926cfa3fa35503e4b80b15aab7a804314e4，以 Git object 唯讀存取。所有演練輸出位於 repo 外，不動 pipeline/state.json。

## 2. 已核實與變更

- skill-values.mjs、extract-blessings.mjs 已將百分比及 manipulation 換成顯示值，但未保存格式。於 extract 頂層新增 effectFormats 工作資料（按 item id，含參數格式及 description 分段／index），由 extract-output.mjs 保存；不新增正式 item／values 欄位，不改 common.schema.json 或外掛契約。
- 新增 pipeline/lib/official-effect.mjs，僅依本輪 values、格式資訊、官方文字索引展開。缺值／未知格式／殘留標記回傳 incomplete。祝福按 tier 並列，相同值折疊。遵循同 commit formatter 的精度、前後綴與 loc_string，不二次換算顯示值。
- 追查 incomplete 的 Source-Code，僅補有靜態來源的漏收；動態傷害與不可證明的值保留 unknown。來源追加 source.files。
- diff.mjs 的 1.1.0 祝福／技能輸入新增 lockedEffect 或 effectTask。diff-core.mjs 的 inputHash 綁定效果任務，mark-described 使用同一算法。AI output schema 不改。
- candidate.mjs 以 extract 工作資料及本輪 text index 重新展開，完整者強制覆寫 effect 並設 official，其餘設 unofficial-translation。沿用項目也更新來源標記；1.0.0 及其他類別保持相容。
- START.md、DIFF.md 說明 AI 的 effect 與四節機制分工。

## 3. 測試情境與 TDD

先新增 failing tests：顯示百分比／精度與前後綴、loc_string、祝福各階與缺階、分段 index、null／未知／缺官方、殘留標記、extract 格式保存、candidate 覆寫／分類限制、AI schema／任務 hash／重跑確定性。接進 tests/pipeline/index.js，再最小實作轉 Green。C 的 ammo_2 與真錯數測試原樣重跑。

## 4. 交付與驗證

先 targeted unit／integration，再 node --test tests/pipeline/ 全套。1.13.4 重新 extract 到 F:/GitFile/Persion - Games/DarkTide-Pipeline-Work/official-effect/，生成 report.json／report.md，含分類、原因分布、補收值、ND-STRICT 逐筆清單與十筆對照；重跑比較 bytes。確認正式 values 形狀不變、state hash 不變。以 SYP-391 開頭、Codex footer commit，不 amend／push／略過 hooks。

## 5. 相容與風險

舊 extract 缺格式時 fail closed，須重新 extract 才能鎖定含參數的官方文字。官方真正錯數仍會被原 verify 拒絕，報告交主控裁決。工作用 metadata 不進正式 data；可用 revert 回復本次 commit，未發布，無資料遷移。

## 6. 完成紀錄

- A／B 已實作，C 原 commit 與 verify 規則未更動；新增測試已接 index.js。
- 重新擷取 1.13.4：補回 48 個技能參數（47 個純 math 別名運算、1 個純 temporary 立即 return），以及兩個祝福各四階的 8 個 angle 參數；來源完整保存在 extract 與外部報告。
- 祝福 500 complete／10 incomplete／172 missing-official；技能 599／19／0。祝福 10 筆是官方 token 無本輪格式綁定；技能 17 筆未知模板語法、2 筆動態或受污染來源。保留 unknown，不猜同義參數。
- ND-STRICT 2 個技能（cryptic_arc_grenades_brittleness、cryptic_electrocution_applies_brittleness）的官方字面 2.5% 未受該項 values 支持，仍觸發原 T_NUMBER／T_ERRATA_MISSING；不豁免 effect 或注入未綁定的共用常數。
- 外部 report.json／report.md 包含完整清單與十筆對照。skills／blessings extract 再跑 SHA-256 完全相同；展開及 diff／candidate 重跑確定性已有驗證。正式 state SHA-256 維持 CEB6B1A612492C32397CE7D8DA1959DDA7968D93D59BAD093EE13C62910BD5E3。
- 最終 `node --test tests/pipeline/`：277 項，271 通過、6 項既有 opt-in 測試略過、0 失敗。針對本輪新增／修改行為均有測試；固定來源的完整擷取與逐項展開另在外部工作根實跑。
