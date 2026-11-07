import { mkdtemp, rm } from 'node:fs/promises';
import { tmpdir } from 'node:os';
import { join, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';
import { spawnSync } from 'node:child_process';
import { writeCanonicalFile } from '../canonical-json.mjs';
import { advanceItem, haltRun, keepPrevious, reopenItem, setCategory, writeState } from '../state.mjs';
import { compare, failure, itemIndex } from './common.mjs';
import { InputError, categoryReason, inputHalt, loadInput } from './input.mjs';
import { checkValues } from './values.mjs';
import { checkText } from './text.mjs';
import { effectTaskFor } from '../official-effect.mjs';
import { loadTextIndex } from '../official-text.mjs';
import { readJson } from './input.mjs';
import { parseTranslation, translationConflicts } from './translation.mjs';
import { decide, verifyMerged, checkOldVersions, writeMerged } from './output.mjs';
import { execute, handleIssues, stderrTail } from './issues.mjs';
import { categoryReport, finishReport, makeReport } from './report.mjs';

export { SCRIPT_VERSION } from './common.mjs';

function updatedState(state, matches, report) {
  if (!state || !matches) return state;
  if (report.result === 'halted') return haltRun(state, report.haltReason);
  let next = state;
  for (const [category, info] of Object.entries(report.categories))
    next = setCategory(next, category, { status: info.status, reason: info.reason });
  for (const [id, item] of Object.entries(state.run.items).sort(([a], [b]) => compare(a, b))) {
    const row = report.items.find((r) => r.id === id && r.category === item.category);
    if (report.categories[item.category]?.status !== 'ok' || item.stage === 'written') continue;
    next = reopenItem(next, id);
    if (!row) {
      if (item.stage === 'extracted') next = keepPrevious(next, id, 'V_NOT_DESCRIBED：項目仍在取數階段，尚未完成說明');
      continue;
    }
    if (row.decision !== 'pass') next = keepPrevious(next, id,
      `${[...new Set(row.failures.map((f) => f.code))].sort(compare).join('、')}：${row.failures[0].message}`);
    else if (item.stage === 'described') next = advanceItem(next, id, 'verified');
  }
  return next;
}

export async function runVerify(inputOptions) {
  const root = resolve(inputOptions.root ?? fileURLToPath(new URL('../../../', import.meta.url)));
  const options = { issues: 'create', modsRepo: 'SyuanTsai/Warhammer-40-000-DARKTIDE-Mods', exec: spawnSync,
    ...inputOptions, root };
  const input = await loadInput(options), { version, loaded } = input;
  const report = makeReport(version);
  report.previousGameVersion = Object.values(loaded).find((entry) => entry.previous)?.previous.gameVersion ?? null;
  const stateMatches = Boolean(input.state?.run && input.state.run.gameVersion === version.sourceGameVersion &&
    input.state.run.sourceCommit === version.sourceCommit && input.state.run.textBatch === version.textBatch);
  if (input.state?.run && !stateMatches) report.stateNote = '狀態檔的執行版本與本次版本資訊不同，未寫入狀態';
  for (const [category, entry] of Object.entries(loaded))
    report.categories[category] = { candidateSha256: entry.candidateSha256, anomalies: [] };
  let merged = {}, temp = null;
  const halt = (reason, gate) => {
    report.result = 'halted'; report.haltReason = reason;
    report.gates[gate].status = 'halted';
    if (gate === 'input') report.gates.input.errors.push({ path: '', message: reason });
  };
  const reason = inputHalt(input);
  if (reason) halt(reason, 'input');
  else {
    for (const [category, entry] of Object.entries(loaded)) report.categories[category] = categoryReport(entry, categoryReason(entry));
    const checked = Object.entries(loaded).filter(([category]) => report.categories[category].status === 'ok');
    const allItems = checked.flatMap(([, entry]) => entry.candidate.items);
    const candidateItems = Object.values(loaded).flatMap((entry) => Array.isArray(entry.candidate?.items) ? entry.candidate.items : []);
    const allowedNames = candidateItems.filter((i) => i?.name?.zh === null && typeof i.name.en === 'string').map((i) => i.name.en);
    const table = parseTranslation(input.translation);
    report.translationConflicts = translationConflicts(allItems, table);
    const textFile = join(options.extractDir, 'text.json');
    const textCurrent = await readJson(join(options.extractDir, '..', 'diff', 'text-current.json'), true);
    const textData = await readJson(textFile, true);
    const textIndex = textCurrent?.value?.available !== false && textData ? loadTextIndex(textFile) : undefined;
    for (const [category, entry] of checked) {
      for (const [index, item] of entry.candidate.items.entries()) {
        const id = typeof item?.id === 'string' ? item.id : `${category}/items/${index}`;
        const extracted = entry.extract.items.find((x) => x?.id === item?.id);
        const previous = entry.previous?.items?.find((x) => x?.id === item?.id);
        const row = { id, category, decision: 'pass', failures: checkValues(item, extracted, previous,
          entry.schemaErrors.filter((e) => itemIndex(e.path) === String(index))), notes: [] };
        if (stateMatches && input.state.run.items[id]?.stage === 'extracted')
          row.failures.push(failure('values', 'V_NOT_DESCRIBED', '/explanation', '項目仍在取數階段，尚未完成說明'));
        const task = extracted && entry.extract.schemaVersion === '1.1.0' && ['skills', 'blessings'].includes(category)
          ? effectTaskFor(extracted, textIndex, entry.extract.effectFormats?.[id]) : undefined;
        const text = checkText(item, extracted, allowedNames, report.translationConflicts, table, task?.lockedEffect);
        row.failures.push(...text.failures); row.notes.push(...text.notes); row.warnings = text.warnings;
        decide(row, entry.previous); report.items.push(row);
      }
      for (const item of entry.extract.items) {
        if (entry.candidate.items.some((candidate) => candidate?.id === item?.id)) continue;
        const row = { id: item.id, category, decision: 'pass', failures: [failure('values', 'V_NOT_DESCRIBED',
          '/explanation', '候選資料缺少此項目，尚未完成說明')], notes: [] };
        decide(row, entry.previous); report.items.push(row);
      }
    }
    const output = verifyMerged(loaded, report.categories, report.items, undefined, version);
    merged = output.merged;
    report.gates.output.errors = [...output.errors, ...checkOldVersions(root, input.current)];
    for (const [category, data] of Object.entries(merged)) report.categories[category].counts.merged = data.items?.length ?? 0;
    if (report.gates.output.errors.length) halt('排除失敗項目後，最終資料或舊版本仍無法讀取', 'output');
    else report.gates.output.status = 'pass';
    // A dry-run never executes git or gh; a caller may supply modsCommit for immutable links.
    report.issues = await handleIssues(report.translationConflicts, table, version, options);
  }
  try {
    if (report.result !== 'halted') {
      const outDir = options.outDir ? resolve(options.outDir) : (temp = await mkdtemp(join(tmpdir(), 'verify-output-')));
      await writeMerged(outDir, version.sourceGameVersion, merged);
      if (options.buildCmd) {
        const result = execute(options.exec, options.buildCmd, [], { shell: true, env: { ...process.env, DARKTIDE_DATA_ROOT: outDir } });
        report.gates.output.build = { exitCode: result.status, stderrTail: stderrTail(result.stderr) };
        if (result.status !== 0) {
          report.gates.output.errors.push({ path: '', message: '排除失敗項目後建置仍失敗' });
          halt('排除失敗項目後建置仍失敗', 'output');
        }
      }
    }
    finishReport(report);
    const state = updatedState(input.state, stateMatches, report);
    if (options.report) await writeCanonicalFile(options.report, report);
    if (options.state && stateMatches) await writeState(options.state, state);
    const writtenWarnings = stateMatches ? report.items.filter((row) => row.decision !== 'pass' &&
      input.state.run.items[row.id]?.category === row.category && input.state.run.items[row.id]?.stage === 'written').map((row) => row.id) : [];
    return { exitCode: report.result === 'halted' ? 3 : 0, report, merged, state, writtenWarnings };
  } catch (error) {
    if (error instanceof InputError) throw error;
    throw new InputError(`無法寫入檢查結果（${error.code ?? '輸出失敗'}）`);
  } finally {
    if (temp) await rm(temp, { recursive: true, force: true });
  }
}
