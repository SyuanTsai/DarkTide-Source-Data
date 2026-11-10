import { anchorTarget } from '../schema12.mjs';
import { atPointer, equal, failure, firstDifference, params } from './common.mjs';
import { checkNumbers, derived, extractNumbers, isGameValuePath, matches } from './numbers.mjs';

export const ALLOWED_WORDS = Object.freeze(['LV', 'Lv']);
export const EXPLANATION_SECTIONS = Object.freeze(['effect', 'conditions', 'calculation', 'notes', 'extra']);
const officialNumbers = (text) => extractNumbers(typeof text === 'string' ? text.replace(/\{[a-zA-Z_][a-zA-Z0-9_]*(?=:)/g, '{') : text);
const numberSet = (text) => [...new Set(extractNumbers(text).map((n) => n.value))].sort((a, b) => a - b);
export function checkText(item, extracted, allowedNames, conflicts, table, lockedEffect, versionItems = [item], codeNumbers) {
  const failures = [], notes = [], warnings = [], exp = item?.explanation;
  if (EXPLANATION_SECTIONS.some((k) => typeof exp?.[k] !== 'string') || !exp.effect.trim())
    failures.push(failure('text', 'T_FORMAT', '/explanation', '說明五節必須是字串，效果不得空白'));
  const sections = EXPLANATION_SECTIONS.map((k) => typeof exp?.[k] === 'string' ? exp[k] : '');
  const text = sections.join('\n');
  if (/\{[^}]*\}|%[sd]|\$\{|TODO|TBD|FIXME|XXX|lorem|placeholder|<[^>]*>|待補|待確認|暫譯|（略）/i.test(text))
    failures.push(failure('text', 'T_PLACEHOLDER', '/explanation', '說明含有佔位文字或未替換的標記'));
  // Replace longest names first so shorter allowed names cannot leave fragments.
  let residual = text;
  for (const word of [...new Set([...ALLOWED_WORDS, ...allowedNames])].filter(Boolean).sort((a, b) => b.length - a.length || (a < b ? -1 : 1)))
    residual = residual.replace(new RegExp(`(?<![A-Za-z])${word.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}(?![A-Za-z])`, 'g'), '');
  const english = [...new Set(residual.match(/[A-Za-z]{2,}/g) ?? [])].sort();
  if (english.length) failures.push(failure('text', 'T_ENGLISH', '/explanation', `說明殘留英文：${english.join('、')}`));
  const locked = exp?.effectOrigin === 'official' && typeof lockedEffect === 'string' && exp.effect === lockedEffect;
  const numeric = checkNumbers(item?.values, text, locked ? exp.effect : undefined, sections, {
    citations: item?.citations, codeNumbers: codeNumbers && (id => codeNumbers(item, id)),
  });
  failures.push(...numeric.failures);
  warnings.push(...numeric.warnings);
  if (extracted) {
    const path = firstDifference(item?.name, extracted.name, '/name') ?? firstDifference(item?.official, extracted.official, '/official');
    if (path !== null) failures.push(failure('text', 'T_OFFICIAL_CHANGED', path, '候選名稱或官方原文與 extract 不同'));
  }
  const errata = Array.isArray(item?.errata) ? item.errata : [];
  failures.push(...checkErrata(item, versionItems));
  if (params(item?.values).some(({ param }) => param.value === null))
    notes.push({ code: 'ERRATA_CHECK_SKIPPED_UNKNOWN', message: '項目含未知參數，略過官方數字勘誤完整性檢查' });
  else {
    for (const locale of ['en', 'zh']) {
      const missing = officialNumbers(item?.official?.[locale]).filter((token) => !matches(token, numeric.numbers) &&
        !errata.some((entry) => extractNumbers(entry?.official).some((n) => n.value === token.value)));
      if (missing.length) failures.push(failure('text', 'T_ERRATA_MISSING', `/official/${locale}`, `官方數字未附勘誤：${[...new Set(missing.map((n) => n.raw))].sort().join('、')}`));
    }
  }
  const checkedText = locked ? sections.slice(1).join('\n') : text;
  for (const conflict of conflicts) {
    const variants = table.get(conflict.en.toLowerCase())?.variants ?? [];
    const wrong = variants.filter((v) => !conflict.officialZh.includes(v) && checkedText.includes(v));
    if (wrong.length) failures.push(failure('text', 'T_NAME_NOT_OFFICIAL', '/explanation', `說明使用非官方譯名：${wrong.join('、')}；官方中文：${conflict.officialZh}`));
    const officialWrong = locked ? variants.filter((v) => !conflict.officialZh.includes(v) && exp.effect.includes(v)) : [];
    if (officialWrong.length) warnings.push({ code: 'W_OFFICIAL_TEXT_NAME_MISMATCH', path: '/explanation/effect', message: `官方原文用字：${officialWrong.join('、')}；官方中文：${conflict.officialZh}` });
  }
  return { failures, notes, warnings };
}

export function checkErrata(item, versionItems = [item]) {
  const failures = [], errata = Array.isArray(item?.errata) ? item.errata : [];
  for (const [i, entry] of errata.entries()) {
    const path = `/errata/${i}`;
    const target = entry?.anchor?.itemId === undefined ? item : versionItems.find(x => x?.id === entry.anchor.itemId);
    const pointers = Array.isArray(entry?.valueRefs) ? entry.valueRefs : [];
    const refs = pointers.map(pointer => {
      const ref = atPointer(target?.values, pointer);
      const parent = typeof pointer === 'string' && pointer.endsWith('/value') ? atPointer(target?.values, pointer.slice(0,-6)) : undefined;
      return {pointer, ref, parent, value: ref && typeof ref === 'object' ? ref.value : ref};
    });
    if (refs.some(({ref,parent}) => (ref === null && parent?.value === null) || (ref && typeof ref === 'object' && ref.value === null))) {
      failures.push(failure('text', 'T_ERRATA_UNKNOWN', path, '勘誤引用未知參數，無法確認更正數字'));
      continue;
    }
    const official = entry?.anchor ? anchorTarget(target, entry.anchor) : target?.official?.[entry?.locale];
    const numbers = refs.filter(({pointer,value}) => isGameValuePath(target?.values,pointer) && typeof value === 'number' && Number.isFinite(value)).flatMap(({value}) => derived(value));
    if (typeof entry?.official !== 'string' || !extractNumbers(entry.official).length || typeof official !== 'string' ||
      !official.includes(entry.official) || equal(numberSet(entry.official), numberSet(entry.corrected)) ||
      refs.length === 0 || refs.some(({ref}) => ref === undefined) || !extractNumbers(entry.corrected).length ||
      !extractNumbers(entry.corrected).every(n => matches(n,numbers)))
      failures.push(failure('text', 'T_ERRATA_INVALID', path, '勘誤原文不符、未更正數字，或更正數字無法由引用值推導'));
  }
  return failures;
}
