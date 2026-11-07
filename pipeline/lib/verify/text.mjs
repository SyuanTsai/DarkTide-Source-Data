import { atPointer, equal, failure, firstDifference, params } from './common.mjs';
import { checkNumbers, derived, extractNumbers, isGameValuePath, matches } from './numbers.mjs';

export const ALLOWED_WORDS = Object.freeze(['LV', 'Lv']);
export const EXPLANATION_SECTIONS = Object.freeze(['effect', 'conditions', 'calculation', 'notes', 'extra']);
const officialNumbers = (text) => extractNumbers(typeof text === 'string' ? text.replace(/\{[a-zA-Z_][a-zA-Z0-9_]*(?=:)/g, '{') : text);
const numberSet = (text) => [...new Set(extractNumbers(text).map((n) => n.value))].sort((a, b) => a - b);
export function checkText(item, extracted, allowedNames, conflicts, table, lockedEffect) {
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
  const numeric = checkNumbers(item?.values, text);
  failures.push(...numeric.failures);
  if (extracted) {
    const path = firstDifference(item?.name, extracted.name, '/name') ?? firstDifference(item?.official, extracted.official, '/official');
    if (path !== null) failures.push(failure('text', 'T_OFFICIAL_CHANGED', path, '候選名稱或官方原文與 extract 不同'));
  }
  const errata = Array.isArray(item?.errata) ? item.errata : [];
  for (const [i, entry] of errata.entries()) {
    const path = `/errata/${i}`;
    const ref = atPointer(item?.values, entry?.valueRef);
    const parent = typeof entry?.valueRef === 'string' && entry.valueRef.endsWith('/value')
      ? atPointer(item?.values, entry.valueRef.slice(0, -6)) : undefined;
    if ((ref === null && parent?.value === null) || (ref && typeof ref === 'object' && ref.value === null)) {
      failures.push(failure('text', 'T_ERRATA_UNKNOWN', path, '勘誤引用未知參數，無法確認更正數字'));
      continue;
    }
    const value = ref && typeof ref === 'object' ? ref.value : ref;
    if (typeof entry?.official !== 'string' || !entry.official.length || typeof item?.official?.[entry.locale] !== 'string' ||
      !item.official[entry.locale].includes(entry.official) || equal(numberSet(entry.official), numberSet(entry.corrected)) ||
      !isGameValuePath(item?.values, entry?.valueRef) || typeof value !== 'number' || !Number.isFinite(value) || !extractNumbers(entry.corrected).some((n) => matches(n, derived(value))))
      failures.push(failure('text', 'T_ERRATA_INVALID', path, '勘誤原文不符、未更正數字，或更正數字無法由引用值推導'));
  }
  if (params(item?.values).some(({ param }) => param.value === null))
    notes.push({ code: 'ERRATA_CHECK_SKIPPED_UNKNOWN', message: '項目含未知參數，略過官方數字勘誤完整性檢查' });
  else {
    for (const locale of ['en', 'zh']) {
      const missing = officialNumbers(item?.official?.[locale]).filter((token) => !matches(token, numeric.numbers) &&
        !errata.some((entry) => extractNumbers(entry?.official).some((n) => n.value === token.value)));
      if (missing.length) failures.push(failure('text', 'T_ERRATA_MISSING', `/official/${locale}`, `官方數字未附勘誤：${[...new Set(missing.map((n) => n.raw))].sort().join('、')}`));
    }
  }
  const locked = exp?.effectOrigin === 'official' && typeof lockedEffect === 'string' && exp.effect === lockedEffect;
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
