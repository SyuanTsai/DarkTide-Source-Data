import { compare, params, SCRIPT_VERSION } from './common.mjs';

export function makeReport(version) {
  return { schemaVersion: '1.0.0', scriptVersion: SCRIPT_VERSION, gameVersion: version.sourceGameVersion,
    sourceCommit: version.sourceCommit, textBatch: version.textBatch, result: 'pass', haltReason: null,
    gates: { input: { status: 'pass', errors: [] }, values: { failedItems: 0 }, text: { failedItems: 0 },
      output: { status: 'skipped', errors: [], build: null },
      deploy: { status: 'not-run', note: '部署由 Web CI 執行，結果於回報步驟確認' } },
    categories: {}, items: [], translationConflicts: [], issues: [],
    notAutomated: ['說明是否加入資料沒有的條件，須人工確認', '條件與腳本資料是否一致，無法由數字判斷的部分須人工確認'] };
}
export function categoryReport(entry, reason) {
  const candidate = Array.isArray(entry.candidate?.items) ? entry.candidate.items : [];
  const previous = Array.isArray(entry.previous?.items) ? entry.previous.items : [];
  const currentIds = new Set(candidate.map((i) => i?.id)), oldIds = new Set(previous.map((i) => i?.id));
  const added = [...currentIds].filter((id) => typeof id === 'string' && !oldIds.has(id)).sort(compare);
  const removed = [...oldIds].filter((id) => typeof id === 'string' && !currentIds.has(id)).sort(compare);
  const unknowns = (items) => items.reduce((n, item) => n + params(item?.values).filter(({ param }) => param.value === null).length, 0);
  const unknownParams = unknowns(candidate), previousUnknownParams = unknowns(previous), anomalies = [];
  if (!candidate.length) anomalies.push({ code: 'EMPTY_CATEGORY', message: '候選項目數為 0' });
  if (previous.length && Math.abs(candidate.length - previous.length) / previous.length > 0.2)
    anomalies.push({ code: 'COUNT_CHANGED', message: `項目數變動超過 20%：上一版 ${previous.length}，候選 ${candidate.length}` });
  if (added.length) anomalies.push({ code: 'ADDED_IDS', ids: added, message: '新增項目 id' });
  if (removed.length) anomalies.push({ code: 'REMOVED_IDS', ids: removed, message: '移除項目 id' });
  if (unknownParams > previousUnknownParams) anomalies.push({ code: 'UNKNOWN_INCREASED', message: `未知參數增加：上一版 ${previousUnknownParams}，候選 ${unknownParams}` });
  const undescribed = [...new Set((Array.isArray(entry.extract?.items) ? entry.extract.items : []).map((i) => i?.id))]
    .filter((id) => typeof id === 'string' && !currentIds.has(id)).sort(compare);
  if (undescribed.length) anomalies.push({ code: 'NOT_DESCRIBED', ids: undescribed, message: 'extract 有但候選沒有，尚未寫說明' });
  if (reason && !entry.previous) anomalies.push({ code: 'missing-no-previous', message: '沒有上一版可保留，此類別輸出空檔' });
  return { status: reason ? 'kept-previous' : 'ok', reason, candidateSha256: entry.candidateSha256, counts: { candidate: candidate.length, previous: previous.length,
    merged: 0, added: added.length, removed: removed.length, unknownParams, previousUnknownParams }, anomalies };
}
export function finishReport(report) {
  report.items.sort((a, b) => compare(a.id, b.id) || compare(a.category, b.category));
  for (const item of report.items) {
    item.failures.sort((a, b) => compare(a.gate, b.gate) || compare(a.code, b.code) || compare(a.path, b.path) || compare(a.message, b.message));
    item.notes.sort((a, b) => compare(a.code, b.code));
  }
  for (const entry of Object.values(report.categories)) entry.anomalies.sort((a, b) => compare(a.code, b.code));
  for (const gate of ['values', 'text']) report.gates[gate].failedItems = report.items.filter((i) => i.failures.some((f) => f.gate === gate)).length;
  if (report.result !== 'halted') report.result = report.items.some((i) => i.decision !== 'pass') ||
    Object.values(report.categories).some((c) => c.status === 'kept-previous') ? 'degraded' : 'pass';
  return report;
}
export function summary(report, issueMode) {
  const lines = [];
  if (report.result === 'halted') lines.push(`整批停止：${report.haltReason}`);
  const names = { pass: '通過', degraded: '部分降級', halted: '整批停止' };
  lines.push(`檢查結果：${names[report.result]}`);
  lines.push(`通過項目：${report.items.filter((i) => i.decision === 'pass').length}`);
  lines.push(`保留上一版項目：${report.items.filter((i) => i.decision === 'kept-previous').length}`);
  lines.push(`排除項目（無上一版）：${report.items.filter((i) => i.decision === 'excluded').length}`);
  lines.push(`保留上一版類別：${Object.entries(report.categories).filter(([, c]) => c.status === 'kept-previous').map(([c]) => c).sort().join(',') || '無'}`);
  lines.push(`譯名衝突：${report.translationConflicts.length}（Issue 模式 ${issueMode}）`);
  return `${lines.join('\n')}\n`;
}
