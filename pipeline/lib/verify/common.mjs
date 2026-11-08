import { stringifyCanonical } from '../canonical-json.mjs';

export const SCRIPT_VERSION = 'pipeline/verify.mjs@1.0.0';
export const compare = (a, b) => a < b ? -1 : a > b ? 1 : 0;
export const escapePointer = (s) => String(s).replaceAll('~', '~0').replaceAll('/', '~1');
export const equal = (a, b) => a === undefined || b === undefined ? a === b : stringifyCanonical(a) === stringifyCanonical(b);
export const failure = (gate, code, path, message) => ({ gate, code, path, message });
export const itemIndex = (path) => /^\/items\/(\d+)(?:\/|$)/.exec(path)?.[1];
export function walk(value, visit, path = '') {
  visit(value, path);
  if (value && typeof value === 'object')
    for (const key of Object.keys(value).sort(compare)) walk(value[key], visit, `${path}/${escapePointer(key)}`);
}
export function params(values) {
  const found = [];
  walk(values, (v, path) => {
    if (v && !Array.isArray(v) && typeof v === 'object' && Object.hasOwn(v, 'value')) found.push({ path, param: v });
  });
  return found;
}
export { atPointer } from '../json-pointer.mjs';
export function firstDifference(a, b, path = '') {
  if (equal(a, b)) return null;
  if (!a || !b || typeof a !== 'object' || typeof b !== 'object' || Array.isArray(a) !== Array.isArray(b)) return path;
  const keys = Array.isArray(a) ? Array.from({ length: Math.max(a.length, b.length) }, (_, i) => String(i))
    : [...new Set([...Object.keys(a), ...Object.keys(b)])].sort(compare);
  for (const key of keys) {
    const diff = firstDifference(a[key], b[key], `${path}/${escapePointer(key)}`);
    if (diff !== null) return diff;
  }
  return path;
}
export function validationMessage(message) {
  const messages = {
    'not canonical JSON': '不是 canonical JSON', 'invalid JSON': 'JSON 格式無法解析',
    'Commit mismatch': '來源 commit 與檔案標頭不一致', 'Batch mismatch': '來源文字批次與檔案標頭不一致',
    'IDs must be sorted and unique': '項目 id 必須排序且不重複', 'ID category mismatch': '項目 id 與類別不一致',
    'Tiers must be sorted and unique': '階級必須排序且不重複', 'Internal name must match key': '內部名稱必須與 key 相同',
    'Referenced value does not exist': '勘誤引用的數值不存在', 'Required property missing': '缺少必要欄位',
    'Value does not match const': '欄位不符合固定值', 'Value is not in enum': '欄位不在允許值清單',
    'Schema rejects value': '結構不允許此欄位', 'String shorter than minLength': '文字長度不足',
    'String longer than maxLength': '文字長度超過限制', 'String does not match pattern': '文字格式不符',
    'Number below minimum': '數值低於下限', 'Number above maximum': '數值超過上限',
    'Number below exclusiveMinimum': '數值未超過下限', 'Too few items': '陣列項目不足',
    'Too many items': '陣列項目過多', 'Items are not unique': '陣列項目重複', 'Too few properties': '欄位數不足',
    'oneOf did not match': '欄位未符合唯一允許結構', 'anyOf did not match': '欄位未符合允許結構',
    'not matched': '欄位符合禁止的結構', 'Version does not match directory': '版本與目錄名稱不同',
    'Files disagree': '類別檔案的版本資訊不一致', 'Path does not match gameVersion': '路徑與遊戲版本不一致',
    'Missing current version': '版本清單缺少目前版本', 'Versions must be sorted and unique': '版本清單必須排序且不重複',
  };
  if (messages[message]) return messages[message];
  if (message.startsWith('Expected ')) return '欄位型別不符';
  return '資料無法讀取或不符合結構';
}
