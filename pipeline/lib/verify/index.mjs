import { checkCitations } from './citations.mjs';
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
import { createCodeNumbers } from './code-numbers.mjs';
import { effectTaskFor } from '../official-effect.mjs';
import { loadTextIndex } from '../official-text.mjs';
import { readJson, sha256 } from './input.mjs';
import { parseTranslation, translationConflicts } from './translation.mjs';
import { decide, verifyMerged, checkOldVersions, writeMerged } from './output.mjs';
import { execute, handleIssues, stderrTail } from './issues.mjs';
import { categoryReport, finishReport, makeReport } from './report.mjs';
import { combineItem } from './compose.mjs';
import { dataFile } from '../candidate.mjs';
import { checkDataFile } from '../data-files.mjs';
import { stringifyCanonical } from '../canonical-json.mjs';
import { trackExplanations } from '../retained-explanations.mjs';

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
    if (row.decision === 'combined') {
      // Reused prose still completes verification of the newly extracted item.
      if (next.run.items[id].stage === 'extracted') next = advanceItem(next, id, 'described');
      if (next.run.items[id].stage === 'described') next = advanceItem(next, id, 'verified');
    } else if (row.decision !== 'pass') next = keepPrevious(next, id,
      `${[...new Set(row.failures.map((f) => f.code))].sort(compare).join('、')}：${row.failures[0].message}`);
    else if (item.stage === 'described') next = advanceItem(next, id, 'verified');
  }
  return next;
}

export async function runVerify(inputOptions) {
  const codeNumbers = createCodeNumbers({ repo: inputOptions.sourceCodeRepo });
  const root = resolve(inputOptions.root ?? fileURLToPath(new URL('../../../', import.meta.url)));
  const options = { issues: 'off', modsRepo: 'SyuanTsai/Warhammer-40-000-DARKTIDE-Mods', exec: spawnSync,
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
    const candidateItems = Object.values(loaded).flatMap((entry) => Array.isArray(entry.candidate?.items) ? entry.candidate.items : []);
    const contextItems = [...candidateItems, ...checked.flatMap(([, entry]) => entry.extract.items)
      .filter(item => !candidateItems.some(candidate => candidate?.id === item?.id))];
    const allowedNames = contextItems.filter((i) => i?.name?.zh === null && typeof i.name.en === 'string').map((i) => i.name.en);
    const table = parseTranslation(input.translation);
    report.translationConflicts = translationConflicts(contextItems, table);
    const textFile = join(options.extractDir, 'text.json');
    const textCurrent = await readJson(join(options.extractDir, '..', 'diff', 'text-current.json'), true);
    let textIndex;
    if (textCurrent?.value?.available !== false && await readJson(textFile, true))
      textIndex = loadTextIndex(textFile);
    const verifyItem = (category, entry, item, extracted, previous, schemaErrors, generated) => {
      const failures = checkValues(item, extracted, previous, schemaErrors);
      const task = extracted && ['1.1.0', '1.2.0'].includes(entry.extract.schemaVersion) && ['skills', 'blessings'].includes(category)
        ? effectTaskFor(extracted, textIndex, entry.extract.effectFormats?.[item.id]) : undefined;
      const text = checkText(item, extracted, allowedNames, report.translationConflicts, table, task?.lockedEffect, contextItems, codeNumbers);
      failures.push(...checkCitations(item, { schemaVersion: entry.candidate.schemaVersion, category, generated }));
      failures.push(...text.failures);
      return { failures, notes: text.notes, warnings: text.warnings };
    };
    const tryCombination = (row, entry) => {
      if (row.decision !== 'kept-previous') return;
      const extracted = entry.extract.items.find(x => x.id === row.id);
      const previous = entry.previous?.items?.find(x => x.id === row.id);
      if (!extracted || !previous) return;
      const task = ['skills', 'blessings'].includes(row.category)
        ? effectTaskFor(extracted, textIndex, entry.extract.effectFormats?.[row.id]) : undefined;
      const lockedEffect = previous.explanation?.effectOrigin === 'official' && typeof task?.lockedEffect === 'string'
        ? task.lockedEffect : undefined;
      const combined = combineItem(extracted, previous, lockedEffect);
      const schemaErrors = checkDataFile(row.category, stringifyCanonical(dataFile(row.category, version,
        [combined], entry.candidate.schemaVersion)), contextItems.map(item => item?.id === row.id ? combined : item)).errors;
      const checked = verifyItem(row.category, entry, combined, extracted, previous, schemaErrors, false);
      row.combinationFailures = checked.failures;
      if (!checked.failures.length) {
        row.officialChanged = lockedEffect !== undefined && lockedEffect !== previous.explanation.effect;
        if (lockedEffect !== undefined) row.lockedEffect = lockedEffect;
        row.decision = 'combined'; row.notes = checked.notes; row.warnings = checked.warnings;
      } else row.failures.push(...checked.failures);
    };
    for (const [category, entry] of checked) {
      for (const [index, item] of entry.candidate.items.entries()) {
        const id = typeof item?.id === 'string' ? item.id : `${category}/items/${index}`;
        const extracted = entry.extract.items.find((x) => x?.id === item?.id);
        const previous = entry.previous?.items?.find((x) => x?.id === item?.id);
        const stateItem = stateMatches ? input.state.run.items[id] : undefined;
        const generated = stateItem ? ['added','changed'].includes(stateItem.change) :
          !previous || JSON.stringify(item.explanation) !== JSON.stringify(previous.explanation) || JSON.stringify(item.citations) !== JSON.stringify(previous.citations);
        const row = { id, category, decision: 'pass', ...verifyItem(category, entry, item, extracted, previous,
          entry.schemaErrors.filter(e => itemIndex(e.path) === String(index)), generated) };
        if (stateMatches && input.state.run.items[id]?.stage === 'extracted')
          row.failures.push(failure('values', 'V_NOT_DESCRIBED', '/explanation', '項目仍在取數階段，尚未完成說明'));
        decide(row, entry.previous); tryCombination(row, entry); report.items.push(row);
      }
      for (const item of entry.extract.items) {
        if (entry.candidate.items.some((candidate) => candidate?.id === item?.id)) continue;
        const row = { id: item.id, category, decision: 'pass', failures: [failure('values', 'V_NOT_DESCRIBED',
          '/explanation', '候選資料缺少此項目，尚未完成說明')], notes: [] };
        decide(row, entry.previous); tryCombination(row, entry); report.items.push(row);
      }
    }
    const output = verifyMerged(loaded, report.categories, report.items, undefined, version);
    if (output.targetSchemaVersion) report.targetSchemaVersion = output.targetSchemaVersion;
    merged = output.merged;
    report.gates.output.errors = [...output.errors, ...checkOldVersions(root, input.current)];
    for (const [category, data] of Object.entries(merged)) {
      report.categories[category].counts.merged = data.items?.length ?? 0;
      if (report.items.some(row => row.category === category && row.decision === 'combined'))
        report.categories[category].mergedSha256 = sha256(Buffer.from(stringifyCanonical(data)));
    }
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
    let state = updatedState(input.state, stateMatches, report);
    if (stateMatches && report.result !== 'halted') state = trackExplanations(state, loaded, report, merged);
    if (options.report) await writeCanonicalFile(options.report, report);
    if (options.state && stateMatches) await writeState(options.state, state);
    const writtenWarnings = stateMatches ? report.items.filter((row) => !['pass', 'combined'].includes(row.decision) &&
      input.state.run.items[row.id]?.category === row.category && input.state.run.items[row.id]?.stage === 'written').map((row) => row.id) : [];
    return { exitCode: report.result === 'halted' ? 3 : 0, report, merged, state, writtenWarnings };
  } catch (error) {
    if (error instanceof InputError) throw error;
    throw new InputError(`無法寫入檢查結果（${error.code ?? '輸出失敗'}）`);
  } finally {
    if (temp) await rm(temp, { recursive: true, force: true });
  }
}
