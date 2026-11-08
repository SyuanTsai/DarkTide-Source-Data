import { atPointer, failure, firstDifference, params, validationMessage } from './common.mjs';

const extractedFields = (item) => {
  if (!item || typeof item !== 'object') return item;
  const { explanation, errata, citations, name, official, ...rest } = item;
  return rest;
};
export function checkValues(item, extracted, previous, schemaErrors) {
  const failures = schemaErrors.map((e) => failure('values', 'V_SCHEMA', e.path.replace(/^\/items\/\d+/, ''), validationMessage(e.message)));
  if (!extracted) failures.push(failure('values', 'V_NOT_EXTRACTED', '/id', 'extract 輸出找不到此項目'));
  else {
    const path = firstDifference(extractedFields(item), extractedFields(extracted));
    if (path !== null) failures.push(failure('values', 'V_FIELD_CHANGED', path, `候選資料與 extract 不同，第一個差異：${path || '/'}`));
  }
  if (previous)
    for (const { path, param } of params(item?.values)) {
      const old = atPointer(previous.values, path);
      if (param.value === null && old && Object.hasOwn(old, 'value') && old.value !== null)
        failures.push(failure('values', 'V_UNKNOWN_REGRESSION', `/values${path}`, `參數 /values${path} 由上一版 ${JSON.stringify(old.value)} 退回未知`));
    }
  return failures;
}
