import { failure, params, walk } from './common.mjs';

export function normalizeNumbers(text) {
  return text.replace(/[０-９＋－．％]/g, (c) => String.fromCharCode(c.charCodeAt(0) - 0xfee0));
}
export function extractNumbers(text) {
  const normalized = normalizeNumbers(typeof text === 'string' ? text : '');
  const result = [];
  for (const match of normalized.matchAll(/[+\-−]?\d+(?:\.\d+)?/g)) {
    const raw = match[0], value = Number(raw.replace('−', '-'));
    const before = normalized.slice(0, match.index), after = normalized.slice(match.index + raw.length);
    if (/^[1-4]$/.test(raw) && (/(?:LV|Lv|第)\s*$/.test(before) || /^\s*階/.test(after))) continue;
    result.push({ value, raw, signed: /^[+\-−]/.test(raw), decimals: raw.split('.')[1]?.length ?? 0 });
  }
  return result;
}
export const derived = (n) => [n, n * 100, (n - 1) * 100, (1 - n) * 100].filter(Number.isFinite);
export const near = (token, n) => Math.abs(token.value - n) <= 0.5 * 10 ** -token.decimals + 1e-9;
const sameSign = (token, n) => /^[\-−]/.test(token.raw) ? n <= 0 : n >= 0;
export function matches(token, numbers) {
  return numbers.some((n) => (!token.signed || sameSign(token, n)) && near(token, n)) ||
    (!token.signed && numbers.some((n) => near(token, Math.abs(n))));
}
export function derivable(values) {
  const numbers = [];
  walk(values, (v) => { if (typeof v === 'number' && Number.isFinite(v)) numbers.push(...derived(v)); });
  return numbers;
}
export function checkNumbers(values, text) {
  const tokens = extractNumbers(text), numbers = derivable(values), failures = [];
  const wrong = [], direction = [];
  for (const token of tokens) {
    if (matches(token, numbers)) continue;
    if (token.signed && numbers.some((n) => !sameSign(token, n) && near({ ...token, value: Math.abs(token.value) }, Math.abs(n)))) direction.push(token.raw);
    else wrong.push(token.raw);
  }
  if (wrong.length) failures.push(failure('text', 'T_NUMBER', '/explanation', `說明數字無法由資料推導：${[...new Set(wrong)].sort().join('、')}`));
  if (direction.length) failures.push(failure('text', 'T_DIRECTION', '/explanation', `說明數字方向相反：${[...new Set(direction)].sort().join('、')}`));
  const uncovered = params(values).filter(({ path, param }) =>
    /^(\/params\/[^/]+|\/tiers\/\d+\/params\/[^/]+)$/.test(path) &&
    typeof param.value === 'number' && Number.isFinite(param.value) && param.value !== 0 &&
    !tokens.some((token) => matches({ ...token, signed: false, value: Math.abs(token.value) }, derived(param.value))));
  if (uncovered.length) failures.push(failure('text', 'T_COVERAGE', '/values', `說明未涵蓋參數：${uncovered.map(({ path }) => `/values${path}`).sort().join('、')}`));
  return { failures, tokens, numbers };
}
