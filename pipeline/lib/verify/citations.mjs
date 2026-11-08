import { atPointer, failure } from './common.mjs';

export function checkCitations(item, { schemaVersion, category, generated = true } = {}) {
  const failures = [];
  for (const [i, citation] of (Array.isArray(item?.citations) ? item.citations : []).entries()) {
    const path = `/citations/${i}`;
    const text = item?.explanation?.[citation?.section];
    if (typeof citation?.text !== 'string' || typeof text !== 'string' || !text.includes(citation.text))
      failures.push(failure('text', 'V_CITATION_TEXT', path, '引用文字必須是對應說明段落的子字串'));
    for (const id of Array.isArray(citation?.codeRefs) ? citation.codeRefs : [])
      if (!Object.hasOwn(item?.source?.codeRefs ?? {}, id))
        failures.push(failure('text', 'V_CITATION_CODE', path, '引用程式碼不存在於 source.codeRefs'));
    for (const pointer of Array.isArray(citation?.valueRefs) ? citation.valueRefs : [])
      if (atPointer(item?.values, pointer) === undefined || !Object.hasOwn(item?.source?.valueSources ?? {}, pointer))
        failures.push(failure('text', 'V_CITATION_VALUE', path, '引用值必須存在且有 source.valueSources'));
  }
  if (schemaVersion === '1.2.0' && ['skills','blessings'].includes(category) && generated) {
    for (const section of ['effect','conditions','calculation','notes','extra']) {
      if (section === 'effect' && item?.explanation?.effectOrigin === 'official') continue;
      if (typeof item?.explanation?.[section] === 'string' && item.explanation[section].trim() &&
          !(Array.isArray(item.citations) && item.citations.some(c => c?.section === section)))
        failures.push(failure('text', 'V-CITE', `/explanation/${section}`, 'AI 產出的每個非空段落都必須有 citation'));
    }
  }
  return failures;
}
